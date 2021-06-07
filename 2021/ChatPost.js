// https://www.redditstatic.com/desktop2x/ChatPost.81e09455177f20576895.js
// Retrieved at 6/7/2021, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var o = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(o);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseDelay.js"),
				s = o("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = s
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				s = o("./node_modules/lodash/_castFunction.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var o = i,
					d = c(e, i);
				t = s(t), e -= i;
				for (var l = n(d, t); ++o < e;) t(o);
				return l
			}
		},
		"./src/lib/colors/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return a
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "f", (function() {
				return c
			}));
			const n = "#FFF",
				s = "#FF4500",
				r = "#0079D3",
				a = "#46D160",
				i = {
					black: "#000",
					white: n,
					orangered: s,
					alienblue: r,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: s,
					downvote: "#7193FF",
					positive: a,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: s,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: s,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				c = {
					...i,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, o) {
			"use strict";
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, o) {
			"use strict";
			t.a = function(e, t, ...o) {
				let n, s = !1;
				const r = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), s || (n = window.setTimeout(r, t))
				};
				return n = window.setTimeout(r, t), () => {
					s = !0, window.clearTimeout(n)
				}
			}
		},
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return W
			})), o.d(t, "b", (function() {
				return H
			}));
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = o("./node_modules/lodash/first.js"),
				i = o.n(a),
				c = o("./node_modules/lodash/isArray.js"),
				d = o.n(c),
				l = o("./src/reddit/helpers/isComment.ts"),
				m = o("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = o("./src/reddit/models/Comment/index.ts"),
				u = o("./src/reddit/models/Flair/index.ts"),
				h = o("./src/reddit/models/PostCreationForm/index.ts"),
				b = o("./src/reddit/models/Vote/index.ts");
			const C = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const o = f(e.attribs);
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
							distinguishType: v(o),
							id: e.name,
							isAdmin: o === p.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: o === p.e.Submitter,
							isMod: o === p.e.Moderator,
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
				v = e => {
					switch (e) {
						case p.e.Admin:
							return n.D.ADMIN;
						case p.e.Moderator:
							return n.D.MODERATOR;
						case p.e.Alumni:
							return n.D.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				f = e => i()((e || []).filter(e => d()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.e.None;
			const g = (e, t, o) => {
				const n = {
						[t]: {}
					},
					{
						author: s,
						author_flair_background_color: r,
						author_flair_richtext: a,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: d,
						author_flair_type: l
					} = o;
				if (s && l) {
					if (l === u.f.Richtext) {
						if (!r || !a) return;
						return {
							[t]: {
								[s]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									richtext: a,
									templateId: i,
									textColor: d
								}
							}
						}
					}
					if (l === u.f.Text) {
						if (!c) return n;
						return {
							[t]: {
								[s]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									text: c,
									templateId: i,
									textColor: d
								}
							}
						}
					}
				}
			};
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var x = o("./src/lib/env/index.ts");
			const _ = new Map,
				E = e => e,
				I = new Set;
			var T;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(T || (T = {}));
			const k = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				y = (e, t) => {
					const o = E(t),
						n = _.get(o);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				O = (e, t, o, n) => {
					const s = E(t),
						r = _.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: o,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					_.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...k
						}
					}), a.socket.addEventListener("message", N.bind(null, n)), a.socket.addEventListener("close", M.bind(null, s, n)), a.socket.addEventListener("error", w.bind(null, s)), window && window.addEventListener("beforeunload", y.bind(null, e, t))
				},
				M = (e, t, o) => {
					const n = _.get(e);
					n && (n.isClosePlanned ? _.delete(e) : j(e, t))
				},
				j = (e, t) => {
					const o = _.get(e);
					if (!o) return;
					const {
						retries: {
							backoffTime: n,
							connectionAttempts: s,
							jitterAmount: r,
							maximumRetries: a
						},
						socket: i,
						uniqueId: c,
						url: d
					} = o;
					if (_.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, s),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							l = {
								...o.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							O(d, c, l, t)
						}, i), Object(x.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				N = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(x.a)() && console.error(t)
					}
				},
				w = (e, t) => {
					const o = _.get(e);
					o && o.isClosePlanned && o.socket && o.socket.readyState === WebSocket.CLOSED ? _.delete(e) : Object(x.a)() && console.error(t)
				};
			var S = o("./src/reddit/selectors/comments.ts"),
				L = o("./src/reddit/selectors/commentSelector.ts"),
				A = o("./src/reddit/selectors/moderatorPermissions.ts"),
				R = o("./src/reddit/actions/comment/websocket/constants.ts");
			const P = Object(s.a)(R.b),
				D = Object(s.a)(R.c),
				F = Object(s.a)(R.a),
				B = Object(s.a)(R.d),
				U = {},
				W = (e, t, o, s) => async (a, i) => {
					(e => new Promise(t => {
						const {
							cb: o,
							url: n,
							uniqueId: s
						} = e;
						I.has(s) ? t() : (I.add(s), setTimeout(() => {
							I.delete(s), O(n, s, {
								...k
							}, o), t()
						}, 1))
					}))({
						uniqueId: o,
						url: t,
						cb: t => {
							switch (t.type) {
								case T.NEW_COMMENT: {
									const c = t.payload.name,
										d = C(t.payload),
										l = i(),
										m = Object(r.a)(l, o).sortToUse === n.r.CHAT,
										p = Object(L.a)(l, {
											commentId: c
										}),
										u = !(!c || !U[c]);
									if (d && !u) {
										const o = g(0, s, t.payload),
											n = t.payload.total_comment_count;
										if (void 0 === p) {
											const s = Object(S.w)(l, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												i = Object(S.j)(l, {
													commentId: r,
													commentsPageKey: e
												}),
												c = Object(L.a)(l, {
													commentId: r
												}),
												p = c && c.originId ? c.originId : r,
												u = null === i ? i : i + 1;
											if (m) a(P({
												authorFlair: o,
												comment: d,
												commentsPageKey: e,
												depth: u,
												headCommentId: s,
												isChatSort: m,
												numComments: n,
												originId: p
											}));
											else {
												const t = c && c.originId ? 5e3 : 7e3;
												setTimeout(() => a(P({
													authorFlair: o,
													comment: d,
													commentsPageKey: e,
													depth: u,
													headCommentId: s,
													isChatSort: m,
													numComments: n,
													originId: p
												})), t)
											}
										} else a(D({
											authorFlair: o,
											comment: d,
											commentsPageKey: e,
											isChatSort: m,
											numComments: n
										}))
									}
									break
								}
								case T.UPDATE_COMMENT: {
									const c = t.payload.name,
										d = i(),
										l = Object(L.a)(d, {
											commentId: c
										}),
										m = C(t.payload),
										p = Object(r.a)(d, o).sortToUse === n.r.CHAT;
									if (l && m) {
										const o = g(0, s, t.payload),
											n = t.payload.total_comment_count;
										a(D({
											authorFlair: o,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: n
										}))
									}
									break
								}
								case T.UPDATE_COMMENT_SCORE: {
									const o = t.payload.name,
										n = t.payload.score,
										s = i(),
										r = Object(L.a)(s, {
											commentId: o
										});
									r && a(D({
										comment: {
											...r,
											score: n
										},
										commentsPageKey: e
									}));
									break
								}
								case T.DELETE_COMMENT: {
									const e = t.payload.name,
										o = i(),
										n = Object(L.a)(o, {
											commentId: e
										});
									n && !n.isDeleted ? a(F({
										id: e
									})) : U[e] = T.DELETE_COMMENT;
									break
								}
								case T.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										o = t.payload.name,
										n = i(),
										s = Object(L.a)(n, {
											commentId: o
										}),
										r = (n.user.account && n.user.account.id) === (s && s.authorId),
										c = !!e && !!Object(A.j)(n, {
											postId: e
										});
									!s || s.isRemoved && s.isDeleted || r || c ? U[o] = T.REMOVE_COMMENT : a(F({
										id: o
									}));
									break
								}
								case T.USER_JOIN: {
									const o = C(t.payload, {
											isSystem: !0
										}),
										n = !0;
									o && a(B({
										comment: o,
										commentsPageKey: e,
										isChatSort: n
									}));
									break
								}
							}
						}
					})
				}, H = (e, t) => async () => {
					y(0, t)
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, o) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, o) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, o) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, o) {
			e.exports = {
				cakeIcon: "qzCz_F3Awvfuuy1_7cdqT"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, o) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, o) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, o) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, o) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/reddit/hooks/useTracking.ts"),
				d = o("./src/reddit/actions/gold/powerups.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/lib/classNames/index.ts"),
				p = o("./src/lib/constants/index.ts"),
				u = o("./src/lib/lessComponent.tsx"),
				h = o("./src/reddit/helpers/trackers/powerups.ts"),
				b = o("./src/reddit/components/AwardBadges/index.tsx"),
				C = o("./src/reddit/components/AuthorLink/index.tsx"),
				v = o("./src/reddit/selectors/experiments/econ/index.ts"),
				f = o("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				g = o.n(f);
			const x = e => {
				const t = Object(a.e)(v.d),
					{
						className: o,
						comment: n,
						isAuthorDeleted: s,
						isLivestreaming: i,
						isStrong: c,
						style: d
					} = e;
				return r.a.createElement(C.a, {
					className: Object(m.a)(g.a.commentAuthorLink, o),
					author: n.author,
					isAdmin: n.isAdmin,
					isAdminEmeritus: n.distinguishType === p.D.ALUMNI_ADMIN,
					isAuthorDeleted: s,
					isLivestreaming: i,
					isMod: n.isMod,
					isOp: n.isOp,
					isStrong: c,
					isUnstyled: t,
					style: d
				}, n.author)
			};
			var _ = o("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				E = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				I = o("./src/reddit/components/Flair/index.tsx"),
				T = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = o("./src/reddit/components/PostTopMeta/index.tsx"),
				y = o("./src/reddit/controls/MetaData/index.tsx"),
				O = o("./src/reddit/helpers/flair.ts"),
				M = o("./src/reddit/models/Comment/index.ts"),
				j = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				N = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = o("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				S = o.n(w);
			const L = ({
				authorClassName: e,
				className: t,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				renderedInOverlay: a
			}) => r.a.createElement(N.b, {
				className: Object(m.a)(S.a.authorHoverCard, t),
				postOrComment: o,
				tooltipType: a ? k.c.Lightbox : void 0
			}, r.a.createElement(j.b, {
				ignore: Object(M.f)(o) || !!o.distinguishType && o.distinguishType !== p.D.NONE,
				subredditId: o.subredditId,
				userId: o.authorId
			}, r.a.createElement(x, {
				className: e,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				isAuthorDeleted: Object(M.f)(o)
			})));
			var A = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				R = o("./src/reddit/icons/fonts/index.tsx");
			const P = (e, t, o = !1) => `${e}${t}${o?"inOverlay":""}`,
				D = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				F = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				B = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				U = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				W = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var H = o("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				V = o.n(H);
			const K = ({
				className: e,
				commentId: t,
				renderedInOverlay: o
			}) => {
				const s = Object(a.d)(),
					i = () => s(Object(l.h)({
						tooltipId: c
					})),
					c = P("CommentTopMeta--cakeday--", t, o),
					d = n.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(R.a, {
					name: "cake",
					isFilled: !0,
					className: Object(m.a)(V.a.cakeIcon, e),
					"aria-label": d,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i
				}), r.a.createElement(A.c, {
					tooltipId: c,
					text: d
				}))
			};
			var q = o("./src/lib/addQueryParams/index.ts"),
				z = o("./src/lib/humanizeDateTime/index.ts"),
				Q = o("./src/lib/timeAgo/index.ts"),
				G = o("./src/reddit/actions/comment/index.ts");
			const J = e => {
					const {
						className: t,
						comment: o,
						compact: n,
						renderedInOverlay: s
					} = e, i = Object(a.d)(), c = P("CommentTopMeta--Created--", o.id, s), d = () => i(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(q.a)(o.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							X(i, o.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Q.d)(o.created, {
						noPostfix: n,
						shortenedUnit: n
					}), r.a.createElement(A.c, {
						tooltipId: c,
						text: Object(z.a)(o.created)
					}))
				},
				X = (e, t) => {
					window.addEventListener("focus", (function o() {
						Y(e, t, o)
					}))
				},
				Y = (e, t, o) => {
					window.removeEventListener("focus", o), e(Object(G.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(G.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var Z = o("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				$ = o.n(Z);
			const {
				fbt: ee
			} = o("./node_modules/fbt/lib/FbtPublic.js"), te = () => r.a.createElement(y.a, {
				className: $.a.crowdControlText
			}, ee._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var oe = o("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ne = o.n(oe);
			const {
				fbt: se
			} = o("./node_modules/fbt/lib/FbtPublic.js"), re = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(y.a, {
				className: ne.a.editedText
			}, se._("edited {time}", [se._param("time", Object(Q.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ae = o("./src/reddit/helpers/isRemoved.ts"),
				ie = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ce = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				de = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				le = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				me = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				pe = o("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				he = o("./src/reddit/models/AutomatedReporting/index.ts"),
				be = o("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				Ce = o.n(be);
			const ve = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: s
			}) => {
				const i = Object(a.d)(),
					c = e => () => i(Object(l.f)({
						tooltipId: e
					})),
					d = () => i(Object(l.i)()),
					p = t => P(t, e.id, s),
					u = p("CommentTopMeta--Automod--"),
					h = p("CommentTopMeta--Approve--"),
					b = p("CommentTopMeta--Remove--"),
					C = p("CommentTopMeta--Report--"),
					v = p("CommentTopMeta--Spam--"),
					f = e.bannedBy && Object(he.b)(e.bannedBy),
					g = c(b);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: Ce.a.approveIcon,
					desc: Object(ie.a)(e),
					id: h,
					onMouseEnter: c(h),
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: h,
					text: Object(ie.a)(e)
				})), Object(ae.a)(e) && !f && r.a.createElement(r.a.Fragment, null, r.a.createElement(me.a, {
					className: Ce.a.removeIcon,
					desc: Object(ie.c)(e),
					id: b,
					onMouseEnter: g,
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: b,
					text: Object(ie.c)(e)
				})), Object(ae.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: Ce.a.removalReason,
					onClick: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, n.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ae.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !f && r.a.createElement("a", {
					className: Ce.a.removalReason,
					onMouseEnter: g,
					onMouseLeave: d
				}, n.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(le.a, {
					className: Ce.a.lockIcon,
					desc: n.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(ue.a, {
					className: Ce.a.spamIcon,
					desc: Object(ie.e)(e),
					id: v,
					onMouseEnter: c(v),
					onMouseLeave: d,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(A.c, {
					tooltipId: v,
					text: Object(ie.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(R.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(Ce.a.automoderatorIcon, {
						[Ce.a.removed]: !!e.bannedBy
					}),
					"aria-label": ie.b,
					id: u,
					key: u,
					onMouseEnter: c(u),
					onMouseLeave: d
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(A.c, {
					tooltipId: u,
					text: ie.b
				}), Object(ce.a)(e) && r.a.createElement(pe.a, {
					className: Ce.a.reportIcon,
					desc: Object(ie.d)(e.numReports),
					id: C,
					onMouseEnter: c(C),
					onMouseLeave: d,
					isFilled: !0
				}), Object(ce.a)(e) && r.a.createElement(A.c, {
					tooltipId: C,
					text: Object(ie.d)(e.numReports)
				}), f && r.a.createElement("a", {
					className: Ce.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", f)], {
					hk: "3C408F"
				})))
			};
			var fe, ge = o("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(fe || (fe = {}));
			var xe = o("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				_e = o.n(xe);
			const Ee = {
					[fe.Admin]: {
						color: ge.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: D
					},
					[fe.Mod]: {
						color: ge.c,
						label: n.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => B(e.subredditDisplayText)
					},
					[fe.Op]: {
						color: ge.a,
						label: n.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: U
					},
					[fe.AlumniAdmin]: {
						color: ge.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: F
					},
					[fe.Contractor]: {
						color: ge.a,
						label: n.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: W
					}
				},
				Ie = e => {
					const t = Object(a.d)(),
						o = function(e) {
							return e.isAdmin ? fe.Admin : e.isMod ? fe.Mod : e.isOp ? fe.Op : e.distinguishType === p.D.ALUMNI_ADMIN ? fe.AlumniAdmin : e.authorIsContractor ? fe.Contractor : null
						}(e.comment);
					if (!o) return null;
					if (o === fe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: n,
						color: s,
						label: i,
						tooltipTemplate: c
					} = Ee[o], d = P(n, e.comment.id, e.renderedInOverlay), u = c(e), h = () => t(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(m.a)(_e.a.role, e.className),
						style: {
							color: s
						},
						id: d,
						onMouseEnter: h,
						onMouseLeave: h
					}, i), r.a.createElement(A.c, {
						tooltipId: d,
						text: u
					}))
				};
			var Te = o("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ke = o.n(Te);
			const {
				fbt: ye
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Oe = () => r.a.createElement(y.a, {
				className: ke.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Me = o("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				je = o.n(Me);
			const Ne = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: o,
					comment: s,
					flair: a,
					ignoreLock: i,
					isLivestreaming: c,
					renderedInOverlay: d,
					subredditDisplayText: l,
					renderContractorBadge: p
				} = e;
				return s.isDeleted ? r.a.createElement("div", {
					className: Object(m.a)(je.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, r.a.createElement("span", {
					className: je.a.metaText
				}, s.deletedBy === M.c.User ? n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : n.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(y.c, {
					className: je.a.separator
				}), r.a.createElement(J, {
					key: "Created",
					className: je.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: d
				}))) : r.a.createElement("div", {
					className: Object(m.a)(je.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, !Object(M.f)(s) && r.a.createElement(E.b, {
					className: je.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: s.subredditId,
					userId: s.authorId,
					uniqueIdentifier: s.id
				}), r.a.createElement(L, {
					authorClassName: je.a.author,
					comment: s,
					isLivestreaming: c,
					renderedInOverlay: d
				}), o && r.a.createElement(te, null), s.isAuthorCakeday && r.a.createElement(K, {
					className: je.a.baselineItem,
					commentId: s.id,
					renderedInOverlay: d
				}), r.a.createElement(T.a, {
					className: je.a.cryptoPoints,
					contentId: s.id,
					subredditId: s.subredditId,
					userId: s.authorId,
					username: s.author
				}), r.a.createElement(Ie, {
					className: je.a.role,
					comment: s,
					subredditDisplayText: l,
					renderContractorBadge: p,
					renderedInOverlay: d
				}), !Object(M.f)(s) && r.a.createElement(_.a, {
					className: je.a.achievementFlair,
					subredditId: s.subredditId,
					userId: s.authorId
				}), r.a.createElement(y.c, {
					className: je.a.separator
				}), r.a.createElement(J, {
					key: "Created",
					className: je.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: d
				}), s.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: je.a.separator
				}), r.a.createElement(Oe, null)), s.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: je.a.separator
				}), r.a.createElement(re, {
					compact: !0,
					editedAt: s.editedAt
				})), r.a.createElement(ve, {
					comment: s,
					ignoreLock: i,
					renderedInOverlay: d
				}), r.a.createElement(b.a, {
					thing: s,
					tooltipType: d ? k.c.Lightbox : void 0
				})), a && !Object(O.o)(a) && r.a.createElement("span", {
					className: je.a.userFlairLine
				}, r.a.createElement(I.b, {
					className: je.a.flair,
					flair: a,
					forceSmallEmojis: !0
				})))
			};
			var we = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				Se = o("./src/reddit/selectors/economics.ts"),
				Le = o("./src/reddit/models/Flair/index.ts"),
				Ae = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				Re = o("./src/reddit/icons/fonts/helpers.tsx"),
				Pe = o("./src/reddit/icons/fonts/Op/index.m.less"),
				De = o.n(Pe);
			var Fe = u.a.wrapped(e => r.a.createElement("i", {
					className: `${Object(Re.b)("author",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(Re.a, null, e.desc)), "OpIcon", De.a),
				Be = o("./src/reddit/selectors/subreddit.ts"),
				Ue = o("./src/reddit/selectors/userFlair.ts"),
				We = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				He = o.n(We);

			function Ve() {
				return (Ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ke = u.a.wrapped(I.b, "RightPositionedAuthorFlair", He.a),
				qe = u.a.wrapped(Ae.a, "AdminIcon", He.a),
				ze = u.a.div("AdminEmeritus", He.a),
				Qe = u.a.wrapped(Fe, "OpIcon", He.a),
				Ge = u.a.wrapped(Ae.a, "ContractorIcon", He.a),
				Je = u.a.span("DeletedText", He.a),
				Xe = u.a.wrapped(y.a, "MetaSeparator", He.a),
				Ye = e => (t, {
					comment: o,
					renderedInOverlay: n
				}) => P(e, o.id, n),
				Ze = Object(a.b)(() => Object(i.c)({
					adminTooltipId: Ye("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: Ye("CommentTopMeta--AdEm--"),
					contractorTooltipId: Ye("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ye("CommentTopMeta--Gold--"),
					modTooltipId: Ye("CommentTopMeta--Mod--"),
					opTooltipId: Ye("CommentTopMeta--OP--"),
					topSupporterTooltipId: Ye("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Se.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const o = Object(Be.J)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ue.d)(e, {
						subredditId: t.subredditId
					}),
					isCommentHeaderRedesignEnabled: v.d
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(d.d)("comment_top_supporter_badge"))
				}));
			t.a = Ze(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: o,
					children: n,
					className: s,
					collapsed: a,
					collapsedBecauseCrowdControl: i,
					comment: d,
					commentsPageKey: l,
					contractorTooltipId: p,
					compact: u,
					flair: C,
					flairPosition: v,
					hasBadges: f,
					isCommentHeaderRedesignEnabled: g,
					isLivestreaming: x,
					isPostComment: _,
					ignoreFlairPosition: O,
					ignoreLock: j,
					modTooltipId: N,
					onHideTooltip: w,
					onShowTooltip: S,
					opTooltipId: A,
					openPowerupsModal: R,
					renderContractorBadge: P,
					renderedInOverlay: D,
					subredditDisplayText: F,
					topSupporterTooltipId: B
				} = e, U = Object(c.a)(), W = r.a.createElement(r.a.Fragment, null, r.a.createElement(we.b, {
					commentId: d.id
				}), r.a.createElement(we.a, {
					commentId: d.id,
					commentsPageKey: l
				}));
				if (_ && g) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ne, {
					className: Object(m.a)(s, {
						[He.a.collapsed]: a
					}),
					collapsedBecauseCrowdControl: i,
					comment: d,
					flair: C || null,
					ignoreLock: j,
					isLivestreaming: x,
					renderedInOverlay: D,
					subredditDisplayText: F,
					renderContractorBadge: !!P
				}), W);
				if (d.isDeleted) return r.a.createElement($e, Ve({}, e, {
					className: Object(m.a)(s, He.a.container, {
						[He.a.collapsed]: a
					})
				}));
				if (a) return r.a.createElement(et, Ve({}, e, {
					className: Object(m.a)(s, He.a.container, {
						[He.a.collapsed]: a
					})
				}));
				const H = !O && v === Le.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(s, He.a.container, {
						[He.a.collapsed]: a,
						[He.a.hasBadges]: f,
						[He.a.liveStreaming]: x
					}),
					"data-testid": "comment-top-meta"
				}, C && H && r.a.createElement(I.b, {
					flair: C,
					forceSmallEmojis: u
				}), !Object(M.f)(d) && r.a.createElement(E.b, {
					className: He.a.userBadges,
					showAddCustom: !0,
					subredditId: d.subredditId,
					userId: d.authorId,
					uniqueIdentifier: d.id
				}), n && n, r.a.createElement(L, {
					comment: d,
					isLivestreaming: x,
					isStrong: !!u,
					renderedInOverlay: D
				}), i && r.a.createElement(te, null), i && r.a.createElement(y.c, {
					className: He.a.metaText,
					key: "crowdControlSeparator"
				}), C && !H && r.a.createElement(Ke, {
					flair: C,
					forceSmallEmojis: u
				}), !u && r.a.createElement(T.a, {
					className: He.a.publicPoints,
					contentId: d.id,
					metaSeparator: r.a.createElement(y.c, {
						className: He.a.metaText
					}),
					subredditId: d.subredditId,
					userId: d.authorId,
					username: d.author
				}), r.a.createElement(r.a.Fragment, null, W, !g && r.a.createElement(ot, {
					comment: d,
					compact: u,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					contractorTooltipId: p,
					modTooltipId: N,
					onHideTooltip: w,
					onShowTooltip: S,
					openPowerupsModal: () => {
						U(Object(h.r)("comment")), R()
					},
					opTooltipId: A,
					renderContractorBadge: P,
					renderedInOverlay: D,
					subredditDisplayText: F,
					topSupporterTooltipId: B
				}), g && r.a.createElement(Ie, {
					className: He.a.authorRole,
					comment: d,
					subredditDisplayText: F,
					renderContractorBadge: !!P,
					renderedInOverlay: D
				})), !u && r.a.createElement(r.a.Fragment, null, !d.isDeleted && !_ && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.b, {
					className: He.a.metaText,
					isScoreHidden: d.isScoreHidden,
					score: d.score
				}), r.a.createElement(y.c, {
					className: He.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(J, {
					key: "Created",
					className: He.a.MetaLink,
					comment: d,
					renderedInOverlay: D
				}), d.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: He.a.separator
				}), r.a.createElement(Oe, null)), d.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: He.a.separator
				}), r.a.createElement(re, {
					editedAt: d.editedAt
				}))), r.a.createElement(ve, {
					comment: d,
					ignoreLock: j,
					renderedInOverlay: D
				}), r.a.createElement(b.a, {
					thing: d,
					tooltipType: D ? k.c.Lightbox : void 0
				}))
			});
			const $e = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: s,
						comment: a,
						renderedInOverlay: i
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Je, null, a.deletedBy === M.c.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(J, {
						key: "Created",
						className: He.a.MetaLink,
						comment: a,
						renderedInOverlay: i
					}), o && tt({
						childrenInfo: t
					}))
				},
				et = e => {
					const {
						comment: t,
						className: o,
						childrenInfo: n,
						renderedInOverlay: s
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement("div", null, r.a.createElement(x, {
						comment: t,
						isAuthorDeleted: Object(M.f)(t)
					})), r.a.createElement(y.b, {
						className: He.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(y.c, {
						className: He.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(J, {
						key: "Created",
						className: He.a.MetaLink,
						comment: t,
						renderedInOverlay: s
					}), tt({
						childrenInfo: n
					}))
				},
				tt = e => {
					const {
						hasContinueThread: t,
						numChildren: o
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Xe, {
						className: He.a.metaText
					}, t ? n.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [n.fbt._plural(o, "number")], {
						hk: "13XC7a"
					}) : n.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [n.fbt._plural(o, "number")], {
						hk: "dhX9w"
					}))
				};
			class ot extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						renderedInOverlay: t,
						...o
					} = this.props;
					return r.a.createElement(s.Fragment, null, e.isAuthorCakeday && r.a.createElement(K, {
						commentId: e.id,
						renderedInOverlay: t
					}), e.isAdmin && r.a.createElement(qe, {
						desc: D(),
						id: o.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: !0
					}), e.isAdmin && nt(o.adminTooltipId, D()), e.distinguishType === p.D.ALUMNI_ADMIN && r.a.createElement(ze, {
						"aria-label": F(),
						id: o.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: o.onHideTooltip
					}, "Δ"), e.distinguishType === p.D.ALUMNI_ADMIN && nt(o.adminEmeritusTooltipId, F()), e.isMod && r.a.createElement(R.a, {
						name: "mod",
						isFilled: !0,
						className: He.a.ModeratorIcon,
						"aria-label": B(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					}), e.isMod && nt(o.modTooltipId, B(o.subredditDisplayText)), e.isOp && r.a.createElement(Qe, {
						desc: U(),
						id: o.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: !0
					}), e.isOp && nt(o.opTooltipId, U()), o.renderContractorBadge && r.a.createElement(Ge, {
						desc: W(),
						id: o.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: !0
					}), o.renderContractorBadge && nt(o.contractorTooltipId, W()))
				}
			}
			const nt = (e, t) => r.a.createElement(A.c, {
				tooltipId: e,
				text: t
			})
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, o) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, o) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-Comments-PredictionComment").then(o.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
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
				return M
			})), o.d(t, "b", (function() {
				return j
			})), o.d(t, "g", (function() {
				return N
			})), o.d(t, "e", (function() {
				return w
			})), o.d(t, "d", (function() {
				return S
			})), o.d(t, "f", (function() {
				return L
			})), o.d(t, "a", (function() {
				return V
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/times.js"),
				r = o.n(s),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				c = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/actions/pages/comments.ts"),
				p = o("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/helpers/describeApiError/index.ts"),
				b = o("./src/reddit/helpers/path/index.ts"),
				C = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = o("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = o("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				_ = o("./src/reddit/components/Comments/States/index.m.less"),
				E = o.n(_);
			const I = l.a.wrapped(g.a, "CommentsIcon", E.a),
				T = l.a.wrapped(x.a, "SnooFacepalm", E.a),
				k = l.a.p("EmptyTitle", E.a),
				y = l.a.p("ErrorTitle", E.a),
				O = l.a.p("EmptyText", E.a),
				M = ({
					className: e,
					isChat: t
				}) => i.a.createElement("div", {
					className: Object(d.a)(E.a.StateContainer, e)
				}, i.a.createElement(I, null), i.a.createElement(k, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), i.a.createElement(O, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				j = () => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(I, null), i.a.createElement(k, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = ({
					link: e
				}) => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(I, null), i.a.createElement(k, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), i.a.createElement(u.k, {
					to: Object(b.b)(e)
				}, n.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				w = Object(c.b)(null, (e, {
					postId: t,
					commentId: o,
					sort: n
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, o, {
						sort: n
					}, n))
				}))(({
					apiError: e,
					onClick: t
				}) => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(T, null), i.a.createElement(y, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), i.a.createElement(u.i, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				S = ({
					postId: e,
					commentId: t,
					sort: o,
					apiError: n
				}) => i.a.createElement("div", {
					className: Object(d.a)(E.a.StateContainer, E.a.ErrorFullPage)
				}, i.a.createElement(w, {
					postId: e,
					commentId: t,
					sort: o,
					apiError: n
				})),
				L = l.a.wrapped(({
					className: e
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(p.a, null)), "LoadingFullPage", E.a),
				A = l.a.div("CommentsPlaceholderContainer", E.a),
				R = l.a.div("CommentPlaceholder", E.a),
				P = l.a.div("Avatar", E.a),
				D = l.a.div("VoteColumn", E.a),
				F = l.a.div("TextColumn", E.a),
				B = l.a.wrapped(f.a, "Upvote", E.a),
				U = l.a.wrapped(v.a, "Downvote", E.a),
				W = () => i.a.createElement("div", {
					className: Object(d.a)(E.a.TopMetaPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
					className: Object(d.a)(E.a.CommentBodyPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				V = e => i.a.createElement(A, null, r()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(D, null, i.a.createElement(B, null), i.a.createElement(U, null)), i.a.createElement(F, null, i.a.createElement(W, null), i.a.createElement(H, null)))))
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
				return Ut
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/lodash/debounce.js"),
				s = o.n(n),
				r = o("./node_modules/lodash/last.js"),
				a = o.n(r),
				i = o("./node_modules/react/index.js"),
				c = o.n(i),
				d = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				m = o("./src/lib/constants/index.ts"),
				p = o("./src/lib/setInterval/index.ts"),
				u = o("./src/lib/timeAgo/index.ts"),
				h = o("./src/reddit/actions/blockedRedditors.ts"),
				b = o("./src/reddit/actions/comment/index.ts"),
				C = o("./src/reddit/actions/comment/websocket/index.ts"),
				v = o("./src/reddit/actions/pages/comments.ts"),
				f = o("./src/reddit/components/Comments/States/index.tsx"),
				g = o("./node_modules/fbt/lib/FbtPublic.js"),
				x = o("./node_modules/lodash/defer.js"),
				_ = o.n(x),
				E = o("./src/lib/classNames/index.ts"),
				I = o("./src/lib/lessComponent.tsx"),
				T = o("./src/lib/makeDraftKey/index.ts"),
				k = o("./src/lib/objectSelector/index.ts"),
				y = o("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				O = o("./src/reddit/components/Comments/PredictionComment/async.ts"),
				M = o("./src/reddit/helpers/awards/message.ts"),
				j = o("./src/reddit/helpers/getRichTextContent/index.ts"),
				N = o("./src/reddit/components/RichTextJson/index.tsx"),
				w = o("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				S = o("./src/reddit/icons/svgs/Star/index.tsx"),
				L = o("./src/reddit/icons/svgs/Star2/index.tsx"),
				A = o("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				R = o.n(A);
			const P = Object(k.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				D = e => {
					const {
						award: t,
						comment: o,
						iconUrl: n
					} = e;
					let s = "",
						r = !0,
						a = !1;
					return t.coinPrice < M.a ? (s = R.a.silverTierAwardComment, r = !1) : t.coinPrice < M.b ? s = R.a.goldTierAwardComment : (s = R.a.platinumTierAwardComment, a = !0), c.a.createElement("div", {
						className: Object(E.a)(R.a.awardComment, s)
					}, c.a.createElement("div", {
						className: R.a.imageContainer
					}, r && c.a.createElement(c.a.Fragment, null, c.a.createElement(S.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundStar)
					}), c.a.createElement(L.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundStar, R.a.backgroundStar2)
					})), a && c.a.createElement(c.a.Fragment, null, c.a.createElement(w.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleBottomLeft)
					}), c.a.createElement(w.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleTopRight)
					}), c.a.createElement(w.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: n
					})), c.a.createElement(N.a, {
						className: R.a.awardCommentText,
						content: Object(j.a)(o),
						key: `rich-text-${o.id}`,
						rtJsonElementProps: P(e),
						useExplicitTextColor: !0
					}))
				};
			var F = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				B = o("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				U = o.n(B);
			var W = ({
					commentCount: e,
					isLivestreaming: t,
					onClick: o
				}) => {
					const n = Object(E.a)(U.a.CollapsedComment, {
						[U.a.LivestreamingWrapper]: t
					});
					return c.a.createElement("div", {
						className: n,
						onClick: o
					}, g.fbt._("collapsed {collapsed message} (may be sensitive)", [g.fbt._param("collapsed message", g.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [g.fbt._plural(e, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				H = o("./src/lib/humanizeDateTime/index.ts"),
				V = o("./src/reddit/actions/comment/authoring.ts"),
				K = o("./src/reddit/actions/comment/moderation.ts"),
				q = o("./src/reddit/actions/modal.ts"),
				z = o("./src/reddit/actions/reportFlow/index.ts"),
				Q = o("./src/reddit/actions/tooltip.ts"),
				G = o("./src/reddit/actions/userBlocks.ts"),
				J = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				X = o("./src/reddit/constants/tracking.ts"),
				Y = o("./src/reddit/selectors/telemetry.ts"),
				Z = o("./src/telemetry/models/Event.ts");
			const $ = e => ({
					screen: Object(Y.screen)(e),
					profile: Object(Y.profile)(e),
					subreddit: Object(Y.subreddit)(e)
				}),
				ee = (e, t) => o => ({
					action: "load",
					noun: e,
					post: Object(Y.post)(o, t),
					source: Z.b.ChatView,
					subreddit: Object(Y.subreddit)(o)
				}),
				te = e => t => ({
					source: "chat_post",
					action: X.c.VIEW,
					noun: "last_message",
					post: Object(Y.post)(t, e),
					comment: Object(Y.comment)(t, e),
					...$(t)
				});
			var oe = o("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				ne = o.n(oe);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const re = I.a.button("MenuItem", ne.a),
				ae = I.a.a("MenuItemPermalink", ne.a),
				ie = ({
					children: e,
					comment: t,
					onClick: o,
					onHideTooltip: n,
					onShowTooltip: s,
					sendEvent: r,
					tooltipId: a,
					tooltipText: i,
					trackingNoun: d
				}) => c.a.createElement(re, {
					id: a,
					onMouseEnter: s.bind(void 0, a),
					onMouseLeave: n.bind(void 0, a),
					onClick: e => {
						o(e), d && (r(((e, t) => o => ({
							source: "comment",
							action: X.c.CLICK,
							noun: e,
							post: Object(Y.post)(o, t),
							comment: Object(Y.comment)(o, t),
							...$(o)
						}))(d, t.id)), r(((e, t) => o => ({
							source: "comment_overflow_menu",
							action: X.c.CLICK,
							noun: e,
							post: Object(Y.post)(o, t),
							comment: Object(Y.comment)(o, t),
							...$(o)
						}))(d, t.id)))
					}
				}, e, c.a.createElement(J.c, {
					tooltipId: a,
					text: i
				})),
				ce = e => c.a.createElement(ie, se({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(ae, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var de = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				le = o("./src/reddit/components/ModModeReports/helpers.ts"),
				me = o("./src/reddit/components/ReportFlow/index.tsx"),
				pe = o("./src/reddit/components/ReportFlow/new.tsx"),
				ue = o("./src/reddit/components/TrackingHelper/index.tsx"),
				he = o("./src/reddit/icons/svgs/Approve/index.tsx"),
				be = o("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ce = o("./src/reddit/icons/svgs/Flag/index.tsx"),
				ve = o("./src/reddit/icons/svgs/Hide/index.tsx"),
				fe = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				ge = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				xe = o("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				_e = o("./src/reddit/icons/svgs/Spam/index.tsx"),
				Ee = o("./src/reddit/models/PostDraft/index.ts"),
				Ie = o("./src/reddit/selectors/activeModalId.ts"),
				Te = o("./src/reddit/selectors/blockedRedditors.ts"),
				ke = o("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ye = o("./src/reddit/selectors/moderatorPermissions.ts"),
				Oe = o("./src/reddit/selectors/user.ts");

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const je = I.a.wrapped(ve.a, "BlockIcon", ne.a),
				Ne = I.a.wrapped(Ce.a, "FlagIcon", ne.a),
				we = I.a.wrapped(be.a, "EditIcon", ne.a),
				Se = I.a.wrapped(he.a, "ApproveIcon", ne.a),
				Le = I.a.wrapped(xe.a, "ReplyIcon", ne.a),
				Ae = I.a.wrapped(ge.a, "RemoveIcon", ne.a),
				Re = I.a.wrapped(_e.a, "SpamIcon", ne.a),
				Pe = I.a.wrapped(fe.a, "ModeratorIcon", ne.a),
				De = e => (t, {
					comment: o
				}) => `${e}${o.id}`,
				Fe = e => `Comment-${e}--Modal--DeleteComment`,
				Be = Object(l.c)({
					currentUser: Oe.j,
					isMod: (e, {
						comment: t
					}) => !!Object(ye.j)(e, {
						postId: t.postId
					}),
					isAuthorBlocked: (e, {
						comment: t
					}) => Object(Te.c)(e, t.authorId),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					approveTooltipId: De("CommentChatPost--Approve--"),
					blockTooltipId: De("CommentChatPost--Block--"),
					createTooltipId: De("CommentChatPost--Create--"),
					editTooltipId: De("CommentChatPost--Edit--"),
					replyTooltipId: De("CommentChatPost--Reply--"),
					reportTooltipId: De("CommentChatPost--Report--"),
					upvoteTooltipId: De("CommentChatPost--Upvote--"),
					downvoteTooltipId: De("CommentChatPost--Downvote--"),
					distinguishTooltipId: De("CommentChatPost--Distinguish--"),
					spamTooltipId: De("CommentChatPost--Spam--"),
					removeTooltipId: De("CommentChatPost--Remove--"),
					deleteTooltipId: De("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, {
						comment: t
					}) => Object(Ie.a)(e) === Fe(t.id),
					reportingRevampEnabled: ke.a
				});
			var Ue = Object(d.b)(Be, (e, {
					comment: t,
					commentsPageKey: o
				}) => ({
					onReplyClick: () => e(Object(V.p)({
						parentCommentId: t.id,
						commentsPageKey: o,
						singleOpen: !0
					})),
					onReportClick: o => {
						o.stopPropagation(), e(Object(z.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(Q.i)()),
					onShowTooltip: t => e(Object(Q.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const n = t.media && t.media.rteMode;
						o && e(Object(V.d)({
							commentId: t.id,
							draftKey: Object(T.a)(Ee.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: o
						}))
					},
					onApproveClick: () => e(Object(K.a)(t.id)),
					onBlockClick: () => e(Object(G.h)(t.author)),
					onUnblockClick: () => e(Object(G.g)(t.author)),
					onUpvoteClick: () => e(Object(b.q)(t.id)),
					onDownvoteClick: () => e(Object(b.j)(t.id)),
					onDistinguishClick: o => e(Object(K.b)(t.id, o)),
					onSpamClick: () => e(Object(K.e)(t.id, !0)),
					onRemoveClick: () => e(Object(K.e)(t.id, !1)),
					deleteComment: () => o && e(Object(V.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(q.i)(Fe(t.id))),
					toggleDeleteCommentModal: () => e(Object(q.i)(Fe(t.id)))
				}))(Object(ue.c)(e => {
					const {
						comment: t,
						className: o,
						createTooltipId: n,
						currentUser: s,
						deleteComment: r,
						deleteTooltipId: a,
						editTooltipId: i,
						isAuthorBlocked: d,
						isDeleteModalOpen: l,
						isLivestreaming: p,
						isMod: h,
						onApproveClick: b,
						onBlockClick: C,
						onDeleteClick: v,
						onEditClick: f,
						onHideTooltip: x,
						onRemoveClick: _,
						onReplyClick: I,
						onReportClick: T,
						onShowTooltip: k,
						onSpamClick: y,
						onUnblockClick: O,
						onDistinguishClick: M,
						reportFlowIsOpen: j,
						replyTooltipId: N,
						reportTooltipId: w,
						approveTooltipId: S,
						blockTooltipId: L,
						removeTooltipId: A,
						distinguishTooltipId: R,
						sendEvent: P,
						spamTooltipId: D,
						toggleDeleteCommentModal: F,
						timestampUpdateTrigger: B
					} = e, U = !!s && s.id === t.authorId, W = Object(le.b)(t), V = t.isApproved && W, K = !t.bannedBy || t.bannedBy === m.k, q = {
						comment: t,
						onHideTooltip: x,
						onShowTooltip: k,
						sendEvent: P
					}, z = t.isMod;
					return c.a.createElement("div", {
						className: o
					}, c.a.createElement("div", {
						className: Object(E.a)(ne.a.Menu, {
							[ne.a.Livestreaming]: p
						})
					}, (t.bannedBy || W) && h && c.a.createElement(ie, Me({
						onClick: b,
						tooltipId: S,
						tooltipText: V ? g.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : g.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(Se, null)), !t.isLocked && c.a.createElement(ie, Me({
						onClick: I,
						tooltipId: N,
						tooltipText: g.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(Le, null)), h && U && c.a.createElement(ie, Me({
						onClick: () => M(z ? m.D.NONE : m.D.MODERATOR),
						tooltipId: R,
						tooltipText: z ? g.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : g.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Pe, null)), h && K && c.a.createElement(ie, Me({
						onClick: y,
						tooltipId: D,
						tooltipText: g.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Re, null)), !U && c.a.createElement(ie, Me({
						onClick: T,
						tooltipId: w,
						tooltipText: g.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Ne, null)), j && (() => e.reportingRevampEnabled ? c.a.createElement(pe.a, {
						withOverlay: !0,
						overlayCustomStyles: me.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(me.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: me.b,
						postId: t.postId
					}))(), U && !p && c.a.createElement(ie, Me({
						onClick: f,
						tooltipId: i,
						tooltipText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, q), c.a.createElement(we, null)), h && K ? c.a.createElement(ie, Me({
						onClick: _,
						tooltipId: A,
						tooltipText: t.bannedBy === m.k ? g.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : g.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, q), c.a.createElement(Ae, null)) : U && c.a.createElement(ie, Me({
						onClick: v,
						tooltipId: a,
						tooltipText: g.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(Ae, null)), l && c.a.createElement(de.a, {
						actionText: g.fbt._("delete", null, {
							hk: "29yw7h"
						}),
						cancelActionText: g.fbt._("keep", null, {
							hk: "1i62Aj"
						}),
						headerText: g.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: g.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: r,
						toggleModal: F,
						withOverlay: !0
					}), !!s && !U && c.a.createElement(ie, Me({
						onClick: () => d ? O() : C(),
						tooltipId: L,
						tooltipText: d ? g.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : g.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, q), c.a.createElement(je, null))), !p && c.a.createElement(ce, Me({}, e, {
						tooltipId: n,
						tooltipText: Object(H.a)(t.created),
						timestampUpdateTrigger: B
					}), Object(u.d)(t.created)))
				})),
				We = o("./src/chat/helpers/dom.ts"),
				He = o("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Ve = o("./src/reddit/selectors/commentSelector.ts"),
				Ke = o("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				qe = o.n(Ke);
			const ze = {},
				Qe = I.a.wrapped(F.a, "ChatIcon", qe.a),
				Ge = I.a.span("ReplyAuthor", qe.a),
				Je = I.a.div("ReplyWrapper", qe.a);
			var Xe = Object(d.b)(() => Object(l.c)({
					comment: Ve.a
				}))(({
					comment: e,
					commentId: t,
					isLivestreaming: o,
					onReplyClick: n
				}) => e ? e.isDeleted ? c.a.createElement(Je, null, c.a.createElement("span", {
					className: Object(E.a)(qe.a.ReplyLinkBubble, qe.a.delete, {
						[qe.a.Livestreaming]: o
					})
				}, c.a.createElement(kt, null))) : c.a.createElement(Je, null, c.a.createElement("a", {
					className: Object(E.a)(qe.a.ReplyLinkBubble, {
						[qe.a.Livestreaming]: o
					}),
					href: e.permalink,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(We.a)(() => n(e.id))
				}, c.a.createElement(Qe, {
					userId: e.authorId,
					icon: e.profileImage
				}), c.a.createElement(Ge, null, e.author), c.a.createElement(He.a, {
					className: qe.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(j.a)(e),
					rtJsonElementProps: ze
				}))) : null),
				Ye = o("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Ze = o.n(Ye);
			const $e = Object(k.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var et = e => {
					const {
						comment: t
					} = e;
					return void 0 === $e(e) ? null : c.a.createElement(N.a, {
						className: Ze.a.SystemMessageText,
						content: Object(j.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: $e(e),
						useExplicitTextColor: !0
					})
				},
				tt = o("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				ot = o("./src/reddit/contexts/PageLayer/index.tsx"),
				nt = o("./src/reddit/controls/ErrorText/index.tsx"),
				st = o("./src/reddit/selectors/comments.ts"),
				rt = o("./src/reddit/constants/experiments.ts"),
				at = o("./src/reddit/helpers/chooseVariant/index.ts");
			const it = e => Object(at.c)(e, {
				experimentName: rt.O,
				experimentEligibilitySelector: at.a
			}) === rt.L.Enabled;
			var ct = o("./src/reddit/selectors/communityAwards.ts");
			const dt = (e, {
				commentId: t
			}) => {
				const o = Object(Ve.a)(e, {
					commentId: t
				});
				if (o && o.associatedAwardId) return Object(ct.a)(e, o.associatedAwardId)
			};
			var lt = o("./src/reddit/selectors/gold/awardIcon.ts"),
				mt = o("./src/reddit/selectors/poll/index.ts"),
				pt = o("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				ut = o.n(pt);
			const ht = 250,
				bt = 10,
				Ct = I.a.wrapped(nt.b, "ErrorText", ut.a),
				vt = I.a.wrapped(y.a, "TopMeta", ut.a),
				ft = I.a.span("DeleteText", ut.a),
				gt = I.a.wrapped(Xe, "Reply", ut.a),
				xt = Object(ot.t)(),
				_t = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, {
						commentId: t
					}) => dt(e, {
						commentId: t
					}),
					awardIconUrl: (e, {
						commentId: t
					}) => {
						const o = dt(e, {
							commentId: t
						});
						if (o) return Object(lt.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: t
						})
					},
					comment: Ve.a,
					errorMsgs: st.H,
					flair: st.e,
					isActive: (e, {
						commentId: t
					}) => Boolean(e.shortcuts.activeCommentId && t === e.shortcuts.activeCommentId),
					isEditing: st.A,
					prediction: mt.f,
					subreddit: ot.q,
					shouldRenderSystemMessages: it
				})),
				Et = Object(k.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class It extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > ht && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
					} = this.state, n = t !== e.isExpanded || o !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && n) {
						const e = this.elemRef.current;
						let o = ht;
						if (t) {
							o = e.scrollHeight + bt;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = `${o}px`
					}
				}
				render() {
					const {
						associatedAward: e,
						awardIconUrl: t,
						childrenInfo: o,
						comment: n,
						commentsPageKey: s,
						errorMsgs: r,
						flair: a,
						isActive: i,
						isEditing: d,
						isLivestreaming: l,
						postId: m,
						prediction: p,
						renderedInOverlay: h,
						sendEvent: b,
						targetComment: C,
						timestampUpdateTrigger: v,
						addToRefList: f,
						onReplyClick: x,
						shouldRenderSystemMessages: I
					} = this.props, {
						isCollapsed: k,
						isExpanded: y,
						isTruncated: M
					} = this.state;
					if (!n) return null;
					i && _()(() => this.elemRef.current && this.elemRef.current.focus()), _()(() => this.elemRef && this.elemRef.current && f && f(this.elemRef));
					const w = n.isSystem,
						S = !d && !n.isDeleted && !w,
						L = !!e,
						A = Object(E.a)({
							[ut.a.SystemMessageWrapper]: w && !l && I,
							[ut.a.CommentWrapper]: !l && !w,
							[ut.a.CommentExpanded]: y,
							[ut.a.CommentTruncated]: M,
							[ut.a.HighlightTarget]: C,
							[ut.a.LivestreamingCommentWrapper]: l
						});
					return k ? c.a.createElement(W, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: A
					}, d && c.a.createElement(tt.a, {
						key: "chatCommentsForm",
						isLivestreaming: l,
						postId: m,
						sendEvent: b,
						draftKey: Object(T.a)(Ee.c.edit, n.id),
						commentsPageKey: s,
						isEditing: d,
						comment: n
					}), S && c.a.createElement(c.a.Fragment, null, c.a.createElement(vt, {
						childrenInfo: o,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: n,
						commentsPageKey: s,
						compact: !0,
						flair: a,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: l,
						renderedInOverlay: h
					}, c.a.createElement(F.a, {
						className: Object(E.a)(ut.a.ChatIcon, {
							[ut.a.Livestreaming]: l
						}),
						isLivestreaming: l,
						icon: n.profileImage,
						userId: n.authorId,
						isNSFW: n.profileOver18 || n.authorIconIsNSFW
					})), n.parentId && c.a.createElement(gt, {
						commentId: n.parentId,
						onReplyClick: x,
						isLivestreaming: l
					}), l && c.a.createElement("span", {
						className: ut.a.livestreamingTimeStamp
					}, Object(u.d)(n.created)), L && e && l ? c.a.createElement(D, {
						award: e,
						comment: n,
						iconUrl: t
					}) : p ? c.a.createElement(O.a, {
						comment: n,
						prediction: p
					}) : [c.a.createElement(N.a, {
						className: Object(E.a)(ut.a.RichTextJson, {
							[ut.a.Livestreaming]: l
						}),
						content: Object(j.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: Et(this.props),
						useExplicitTextColor: l
					}), c.a.createElement(Ue, {
						key: "Menu",
						className: Object(E.a)(ut.a.Menu, {
							[ut.a.Livestreaming]: l
						}),
						comment: n,
						commentsPageKey: s,
						isLivestreaming: l,
						timestampUpdateTrigger: v
					})]), n.isDeleted && c.a.createElement(kt, null), S && r && r.map((e, t) => c.a.createElement(Ct, {
						key: `${t}-${e}`
					}, e)), !d && M && c.a.createElement("button", {
						className: Object(E.a)(ut.a.CommentReadMoreButton, {
							[ut.a.Livestreaming]: l
						}),
						onClick: this.toggleBody
					}, g.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), w && !l && I && c.a.createElement(et, {
						comment: n
					}))
				}
			}
			const Tt = xt(_t(It)),
				kt = ({
					isLivestreaming: e
				}) => c.a.createElement(c.a.Fragment, null, c.a.createElement(F.a, {
					className: Object(E.a)(ut.a.ChatIcon, {
						[ut.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), c.a.createElement(ft, null, g.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var yt = Tt,
				Ot = o("./node_modules/lodash/first.js"),
				Mt = o.n(Ot),
				jt = o("./node_modules/lodash/isEqual.js"),
				Nt = o.n(jt),
				wt = o("./src/reddit/controls/Button/index.tsx"),
				St = o("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Lt = o.n(St);
			const At = I.a.div("ButtonWrapper", Lt.a),
				Rt = ({
					top: e
				}) => c.a.createElement("span", {
					className: Object(E.a)(Lt.a.ChunkPlaceholder, {
						[Lt.a.top]: e
					})
				}, g.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				Pt = ({
					className: e,
					isLivestreaming: t,
					isLoading: o,
					setRef: n,
					...s
				}) => c.a.createElement("div", {
					ref: n,
					className: Object(E.a)(e, {
						[Lt.a.ScrollerWrapper]: !t,
						[Lt.a.LivestreamingWrapper]: t,
						[Lt.a.loading]: o
					})
				}, !o && s.isPrevLoading && !t && c.a.createElement(Rt, {
					top: !0
				}), s.children, !o && s.isNextLoading && !t && c.a.createElement(Rt, null));
			class Dt extends c.a.Component {
				constructor(e) {
					super(e), this._ref = c.a.createRef(), this._refBeforeActiveComments = c.a.createRef(), this._refNextActiveComments = c.a.createRef(), this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = (e = 0) => e >= this.scrolledPosition(), this.scrollToLastBottomChunk = () => {
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
						children: n
					} = this.props;
					if (n && n.length && void 0 !== o && n[o]) {
						const e = Math.floor(o / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const n = document.querySelector("#targetComment").offsetTop;
						n > t ? this.scrollTo(n - t) : this.scrollTo(n)
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
					const t = e.children.length !== this.props.children.length || !Nt()(Mt()(e.children), Mt()(this.props.children)) || !Nt()(a()(e.children), a()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, o) {
					if (o && o.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							n = this.getChunkIndexOnUpdate(e, t),
							s = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: n || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== s || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + s
						}, () => {
							n && this.setNextTopScroll(), o.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, o.scrolledBottom && s > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, o = this.state.newCommentsCount > 0 ? Object(E.a)([Lt.a.NewComments, Lt.a.show]) : Lt.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Pt, {
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
						className: Lt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: Lt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Lt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(At, null, c.a.createElement(wt.i, {
						className: o,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", g.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [g.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Ft = Dt,
				Bt = o("./src/reddit/selectors/posts.ts");
			const Ut = 6e4,
				Wt = (e, t, {
					authorId: o,
					id: n
				}) => e.includes(o) && !t.includes(n),
				Ht = Object(l.c)({
					blockedRedditors: Te.a,
					blockedRedditorsPending: Te.b,
					chatCommentLinks: st.g,
					isPending: st.d,
					liveCommentsWebsocket: Bt.D,
					moreCommentsLink: st.G
				}),
				Vt = Object(d.b)(Ht, (e, t) => ({
					onLiveCommentsSubscribe: (o, n, s) => e(Object(C.a)(o, n, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, o) => e(Object(C.b)(t, o)),
					loadMoreComments: o => e(Object(b.l)(t.commentsPageKey, o)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object(v.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.r.CHAT
					}, m.r.CHAT))
				}));
			class Kt extends c.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = c.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.sendViewLastMessageTelemetry = s()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
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
					}, Ut)
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
						loadComments: n,
						onLiveCommentsSubscribe: s,
						postId: r
					} = this.props;
					o && (e && n(), s(t, o, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = o)
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
						blockedRedditorsPending: n,
						chatCommentLinks: s,
						commentsPageKey: r,
						isLoading: a,
						isPending: i,
						postId: c,
						draftKey: d
					} = this.props, {
						expandedCommentIds: l,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== d || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== n || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== s.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== o.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: o,
						commentId: n,
						commentsPageKey: s,
						liveCommentsWebsocket: r,
						offLiveCommentsSubscribe: a,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && a(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && r && (i(s, r, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = r)), e.blockedRedditors.ids !== t.ids) {
						const e = new Set(t.ids),
							n = {};
						o.forEach(e => n[e.id] = e.authorId), this.setState({
							expandedCommentIds: this.state.expandedCommentIds.filter(t => {
								const o = n[t];
								return !e.has(o)
							})
						})
					}
					if (this.deferTimestampUpdate(), n) {
						const e = Object(p.a)(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(), n && o.forEach((e, t) => e.id === n && this.setState({
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
						sendEvent: n
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), n(ee("history", o)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, o = a()(e);
					(null == o ? void 0 : o.id) && t(te(o.id))
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
						blockedRedditors: e,
						chatCommentLinks: t,
						className: o,
						commentId: n,
						commentsPageKey: s,
						emptyStateClassName: r,
						isLivestreaming: a,
						isLoading: i,
						isPending: d,
						postId: l,
						renderedInOverlay: m,
						sendEvent: p
					} = this.props, {
						expandedCommentIds: u,
						targetCommentIndex: h,
						timestampUpdateTrigger: b
					} = this.state, C = !(t && t.length || i || d);
					return c.a.createElement(c.a.Fragment, null, C ? c.a.createElement(f.c, {
						className: r,
						isChat: !0
					}) : c.a.createElement(Ft, {
						className: o,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => Wt(e.ids, u, t) ? c.a.createElement(W, {
						commentCount: 1,
						isLivestreaming: a,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(yt, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: s,
						isLivestreaming: a,
						postId: l,
						renderedInOverlay: !!m,
						sendEvent: p,
						timestampUpdateTrigger: b,
						targetComment: t.id === n,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = Vt(Object(ue.c)(Kt))
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, o) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				icon: "_16Osj2XUXJVMQLOL8-1m8E"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/selectors/experiments/econ/index.ts"),
				c = o("./src/reddit/selectors/gold/powerups/achievements.ts"),
				d = o("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				l = o.n(d);
			const m = ({
					className: e,
					subredditId: t,
					userId: o
				}) => {
					const n = Object(r.e)(e => Object(c.b)(e, {
							subredditId: t,
							userId: o
						})),
						d = Object(r.e)(e => Object(c.c)(e, {
							subredditId: t,
							userId: o
						})),
						m = !!n || !!d;
					if (!Object(r.e)(e => m && Object(i.g)(e))) return null;
					const u = (null == d ? void 0 : d.type) === (null == n ? void 0 : n.type) ? null : d;
					return s.a.createElement("span", {
						className: Object(a.a)(l.a.container, e),
						"data-testid": "achievement-flairs"
					}, s.a.createElement(p, {
						achievement: u
					}), s.a.createElement(p, {
						achievement: n
					}))
				},
				p = ({
					achievement: e
				}) => e ? s.a.createElement("img", {
					alt: e.name,
					className: l.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, o) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "d", (function() {
				return u
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./src/lib/lessComponent.tsx"),
				i = o("./src/lib/prettyPrintNumber/index.ts"),
				c = (o("./src/lib/timeAgo/index.ts"), o("./src/reddit/controls/MetaData/index.m.less")),
				d = o.n(c);
			const l = a.a.span("metaText", d.a),
				m = e => r.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: o,
					...s
				}) => {
					const a = Object(i.b)(t),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						d = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, s, d)
				},
				u = e => r.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "d", (function() {
				return a
			}));
			const n = 500,
				s = 1800,
				r = (e, t = !1) => t ? e.coinPrice < n ? 0 : e.coinPrice < s ? 50 : 100 : 2048,
				a = (e, t, o = !1) => {
					const n = r(t, o);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");

			function r({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case s.F.AUTHORIZATION_ERROR:
						return t ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.F.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.F.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.F.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.F.LIKELY_UBLOCK_ERROR:
						return n.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return a
			})), o.d(t, "c", (function() {
				return i
			})), o.d(t, "d", (function() {
				return c
			})), o.d(t, "e", (function() {
				return d
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
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
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), s.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, o) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = o.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, s.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, s.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? r.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = o.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, s.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
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
				return d
			})), o.d(t, "d", (function() {
				return l
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "c", (function() {
				return p
			}));
			var n = o("./src/reddit/models/Comment/index.ts"),
				s = o("./src/reddit/models/Prediction/index.ts"),
				r = o("./src/reddit/selectors/commentSelector.ts");
			const a = (e, {
					postId: t
				}) => e.posts.metaMap[t],
				i = (e, {
					postId: t
				}) => {
					const o = a(e, {
						postId: t
					});
					if (o) return e.polls.models[o]
				},
				c = (e, {
					postId: t
				}) => {
					const o = i(e, {
						postId: t
					});
					return o && Object(s.b)(o) ? o : null
				},
				d = (e, {
					commentId: t
				}) => {
					const o = Object(r.a)(e, {
						commentId: t
					});
					return o && o.commentType === n.b.Prediction && c(e, o) || null
				},
				l = (e, {
					postId: t
				}) => {
					const o = a(e, {
						postId: t
					});
					if (o) return e.polls.rewards[o]
				},
				m = (e, {
					postId: t
				}) => {
					const o = a(e, {
						postId: t
					});
					if (o) return e.polls.results.byVotingPower[o]
				},
				p = (e, {
					postId: t
				}) => {
					const o = a(e, {
						postId: t
					});
					if (o) return e.polls.results.byVoters[o]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.81e09455177f20576895.js.map