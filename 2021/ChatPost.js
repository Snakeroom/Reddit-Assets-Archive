// https://www.redditstatic.com/desktop2x/ChatPost.032d4db4266ee296a7e3.js
// Retrieved at 4/22/2021, 4:00:05 PM by Reddit Dataminer v1.0.0
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
				a = o("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > r) return [];
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
				return a
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "f", (function() {
				return c
			}));
			const n = "#FFF",
				s = "#FF4500",
				a = "#0079D3",
				r = "#46D160",
				i = {
					black: "#000",
					white: n,
					orangered: s,
					alienblue: a,
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
					positive: r,
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
				const a = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), s || (n = window.setTimeout(a, t))
				};
				return n = window.setTimeout(a, t), () => {
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
				a = o("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				r = o("./node_modules/lodash/first.js"),
				i = o.n(r),
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
						const o = x(e.attribs);
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
							distinguishType: v(o),
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
				x = e => i()((e || []).filter(e => d()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.d.None;
			const g = (e, t, o) => {
				const n = {
						[t]: {}
					},
					{
						author: s,
						author_flair_background_color: a,
						author_flair_richtext: r,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: d,
						author_flair_type: l
					} = o;
				if (s && l) {
					if (l === u.f.Richtext) {
						if (!a || !r) return;
						return {
							[t]: {
								[s]: {
									type: l,
									backgroundColor: a,
									cssClass: void 0,
									richtext: r,
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
									backgroundColor: a,
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
			var f = o("./src/lib/env/index.ts");
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
						a = _.get(s);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: o,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					_.set(s, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...k
						}
					}), r.socket.addEventListener("message", w.bind(null, n)), r.socket.addEventListener("close", M.bind(null, s, n)), r.socket.addEventListener("error", S.bind(null, s)), window && window.addEventListener("beforeunload", y.bind(null, e, t))
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
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: c,
						url: d
					} = o;
					if (_.delete(e), s < r && i.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, s),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							l = {
								...o.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							O(d, c, l, t)
						}, i), Object(f.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
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
					const o = _.get(e);
					o && o.isClosePlanned && o.socket && o.socket.readyState === WebSocket.CLOSED ? _.delete(e) : Object(f.a)() && console.error(t)
				};
			var N = o("./src/reddit/selectors/comments.ts"),
				L = o("./src/reddit/selectors/commentSelector.ts"),
				A = o("./src/reddit/selectors/moderatorPermissions.ts"),
				R = o("./src/reddit/actions/comment/websocket/constants.ts");
			const P = Object(s.a)(R.b),
				D = Object(s.a)(R.c),
				B = Object(s.a)(R.a),
				F = Object(s.a)(R.d),
				U = {},
				W = (e, t, o, s) => async (r, i) => {
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
										m = Object(a.a)(l, o).sortToUse === n.r.CHAT,
										p = Object(L.a)(l, {
											commentId: c
										}),
										u = !(!c || !U[c]);
									if (d && !u) {
										const o = g(0, s, t.payload),
											n = t.payload.total_comment_count;
										if (void 0 === p) {
											const s = Object(N.w)(l, {
													commentsPageKey: e
												}),
												a = t.payload.parent_id,
												i = Object(N.j)(l, {
													commentId: a,
													commentsPageKey: e
												}),
												c = Object(L.a)(l, {
													commentId: a
												}),
												p = c && c.originId ? c.originId : a,
												u = null === i ? i : i + 1;
											if (m) r(P({
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
												setTimeout(() => r(P({
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
										} else r(D({
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
										p = Object(a.a)(d, o).sortToUse === n.r.CHAT;
									if (l && m) {
										const o = g(0, s, t.payload),
											n = t.payload.total_comment_count;
										r(D({
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
										a = Object(L.a)(s, {
											commentId: o
										});
									a && r(D({
										comment: {
											...a,
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
									n && !n.isDeleted ? r(B({
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
										a = (n.user.account && n.user.account.id) === (s && s.authorId),
										c = !!e && !!Object(A.j)(n, {
											postId: e
										});
									!s || s.isRemoved && s.isDeleted || a || c ? U[o] = T.REMOVE_COMMENT : r(B({
										id: o
									}));
									break
								}
								case T.USER_JOIN: {
									const o = C(t.payload, {
											isSystem: !0
										}),
										n = !0;
									o && r(F({
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
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
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
				icon2020Styles: "_3N-ztylrPoAFspBRmaxjS0",
				userBadges: "_3Ofd-Ek86mwX500i92F84q"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				a = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
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
				v = o("./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts"),
				x = o("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				g = o.n(x);
			const f = e => {
				const t = Object(r.e)(v.a),
					{
						className: o,
						comment: n,
						isAuthorDeleted: s,
						isLivestreaming: i,
						isStrong: c,
						style: d
					} = e;
				return a.a.createElement(C.a, {
					className: Object(m.a)(g.a.commentAuthorLink, o),
					author: n.author,
					isAdmin: n.isAdmin,
					isAdminEmeritus: n.distinguishType === p.C.ALUMNI_ADMIN,
					isAuthorDeleted: s,
					isLivestreaming: i,
					isMod: n.isMod,
					isOp: n.isOp,
					isStrong: c,
					isUnstyled: t,
					style: d
				}, n.author)
			};
			var _ = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				E = o("./src/reddit/components/Flair/index.tsx"),
				I = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				T = o("./src/reddit/components/PostTopMeta/index.tsx"),
				k = o("./src/reddit/controls/MetaData/index.tsx"),
				y = o("./src/reddit/helpers/flair.ts"),
				O = o("./src/reddit/models/Comment/index.ts"),
				M = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				j = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = o("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				S = o.n(w);
			const N = ({
				authorClassName: e,
				className: t,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				renderedInOverlay: r
			}) => a.a.createElement(j.b, {
				className: Object(m.a)(S.a.authorHoverCard, t),
				postOrComment: o,
				tooltipType: r ? T.c.Lightbox : void 0
			}, a.a.createElement(M.b, {
				ignore: Object(O.e)(o) || !!o.distinguishType && o.distinguishType !== p.C.NONE,
				subredditId: o.subredditId,
				userId: o.authorId
			}, a.a.createElement(f, {
				className: e,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				isAuthorDeleted: Object(O.e)(o)
			})));
			var L = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				A = o("./src/reddit/icons/fonts/index.tsx"),
				R = o("./src/reddit/icons/svgs/Cake/index.tsx");
			const P = (e, t, o = !1) => `${e}${t}${o?"inOverlay":""}`,
				D = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				B = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				F = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
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
				isInIcons2020: o,
				renderedInOverlay: s
			}) => {
				const i = Object(r.d)(),
					c = () => i(Object(l.h)({
						tooltipId: d
					})),
					d = P("CommentTopMeta--cakeday--", t, s),
					p = n.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, o ? a.a.createElement(A.a, {
					name: "cake",
					isFilled: !0,
					className: Object(m.a)(V.a.cakeIcon, e),
					"aria-label": p,
					id: d,
					onMouseEnter: c,
					onMouseLeave: c
				}) : a.a.createElement(R.a, {
					"aria-label": p,
					className: Object(m.a)(V.a.cakeIcon, e),
					id: d,
					onMouseEnter: c,
					onMouseLeave: c
				}), a.a.createElement(L.c, {
					tooltipId: d,
					text: p
				}))
			};
			var q = o("./src/lib/addQueryParams/index.ts"),
				z = o("./src/lib/humanizeDateTime/index.ts"),
				Z = o("./src/lib/timeAgo/index.ts"),
				J = o("./src/reddit/actions/comment/index.ts");
			const G = e => {
					const {
						className: t,
						comment: o,
						compact: n,
						renderedInOverlay: s
					} = e, i = Object(r.d)(), c = P("CommentTopMeta--Created--", o.id, s), d = () => i(Object(l.h)({
						tooltipId: c
					}));
					return a.a.createElement("a", {
						className: t,
						href: Object(q.a)(o.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							Q(i, o.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Z.d)(o.created, {
						noPostfix: n,
						shortenedUnit: n
					}), a.a.createElement(L.c, {
						tooltipId: c,
						text: Object(z.a)(o.created)
					}))
				},
				Q = (e, t) => {
					window.addEventListener("focus", (function o() {
						Y(e, t, o)
					}))
				},
				Y = (e, t, o) => {
					window.removeEventListener("focus", o), e(Object(J.f)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(J.f)({
						commentListNodeId: t
					})), 5e3)
				};
			var X = o("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				$ = o.n(X);
			const {
				fbt: ee
			} = o("./node_modules/fbt/lib/FbtPublic.js"), te = () => a.a.createElement(k.a, {
				className: $.a.crowdControlText
			}, ee._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var oe = o("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ne = o.n(oe);
			const {
				fbt: se
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ae = ({
				compact: e,
				editedAt: t
			}) => a.a.createElement(k.a, {
				className: ne.a.editedText
			}, se._("edited {time}", [se._param("time", Object(Z.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var re = o("./src/reddit/helpers/isRemoved.ts"),
				ie = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ce = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				de = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				le = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				me = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				pe = o("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				he = o("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				be = o("./src/reddit/models/AutomatedReporting/index.ts"),
				Ce = o("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ve = o.n(Ce);
			const xe = ({
				comment: e,
				ignoreLock: t,
				isInIcons2020: s,
				renderedInOverlay: i
			}) => {
				const c = Object(r.d)(),
					d = e => () => c(Object(l.f)({
						tooltipId: e
					})),
					p = () => c(Object(l.i)()),
					u = t => P(t, e.id, i),
					h = u("CommentTopMeta--Automod--"),
					b = u("CommentTopMeta--Approve--"),
					C = u("CommentTopMeta--Remove--"),
					v = u("CommentTopMeta--Report--"),
					x = u("CommentTopMeta--Spam--"),
					g = e.bannedBy && Object(be.b)(e.bannedBy),
					f = d(C);
				return a.a.createElement(a.a.Fragment, null, (e.approvedBy || e.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
					className: ve.a.approveIcon,
					desc: Object(ie.a)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: p,
					isFilled: s
				}), a.a.createElement(L.c, {
					tooltipId: b,
					text: Object(ie.a)(e)
				})), Object(re.a)(e) && !g && a.a.createElement(a.a.Fragment, null, a.a.createElement(me.a, {
					className: ve.a.removeIcon,
					desc: Object(ie.c)(e),
					id: C,
					onMouseEnter: f,
					onMouseLeave: p,
					isFilled: s
				}), a.a.createElement(L.c, {
					tooltipId: C,
					text: Object(ie.c)(e)
				})), Object(re.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && a.a.createElement("a", {
					className: ve.a.removalReason,
					onClick: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => c(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, n.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(re.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !g && a.a.createElement("a", {
					className: ve.a.removalReason,
					onMouseEnter: f,
					onMouseLeave: p
				}, n.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && a.a.createElement(le.a, {
					className: ve.a.lockIcon,
					desc: n.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: s
				}), e.bannedBy && e.isSpam && a.a.createElement(ue.a, {
					className: ve.a.spamIcon,
					desc: Object(ie.e)(e),
					id: x,
					onMouseEnter: d(x),
					onMouseLeave: p,
					isFilled: s
				}), e.bannedBy && e.isSpam && a.a.createElement(L.c, {
					tooltipId: x,
					text: Object(ie.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && (s ? a.a.createElement(A.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(ve.a.automoderatorIcon, {
						[ve.a.removed]: !!e.bannedBy
					}),
					"aria-label": ie.b,
					id: h,
					key: h,
					onMouseEnter: d(h),
					onMouseLeave: p
				}) : a.a.createElement(he.a, {
					className: Object(m.a)(ve.a.automoderatorIcon, {
						[ve.a.removed]: !!e.bannedBy
					}),
					desc: ie.b,
					id: h,
					key: h,
					onMouseEnter: d(h),
					onMouseLeave: p
				})), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && a.a.createElement(L.c, {
					tooltipId: h,
					text: ie.b
				}), Object(ce.a)(e) && a.a.createElement(pe.a, {
					className: ve.a.reportIcon,
					desc: Object(ie.d)(e.numReports),
					id: v,
					onMouseEnter: d(v),
					onMouseLeave: p,
					isFilled: s
				}), Object(ce.a)(e) && a.a.createElement(L.c, {
					tooltipId: v,
					text: Object(ie.d)(e.numReports)
				}), g && a.a.createElement("a", {
					className: ve.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", g)], {
					hk: "3C408F"
				})))
			};
			var ge, fe = o("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ge || (ge = {}));
			var _e = o("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Ee = o.n(_e);
			const Ie = {
					[ge.Admin]: {
						color: fe.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: D
					},
					[ge.Mod]: {
						color: fe.c,
						label: n.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => F(e.subredditDisplayText)
					},
					[ge.Op]: {
						color: fe.a,
						label: n.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: U
					},
					[ge.AlumniAdmin]: {
						color: fe.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: B
					},
					[ge.Contractor]: {
						color: fe.a,
						label: n.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: W
					}
				},
				Te = e => {
					const t = Object(r.d)(),
						o = function(e) {
							return e.isAdmin ? ge.Admin : e.isMod ? ge.Mod : e.isOp ? ge.Op : e.distinguishType === p.C.ALUMNI_ADMIN ? ge.AlumniAdmin : e.authorIsContractor ? ge.Contractor : null
						}(e.comment);
					if (!o) return null;
					if (o === ge.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: n,
						color: s,
						label: i,
						tooltipTemplate: c
					} = Ie[o], d = P(n, e.comment.id, e.renderedInOverlay), u = c(e), h = () => t(Object(l.h)({
						tooltipId: d
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(m.a)(Ee.a.role, e.className),
						style: {
							color: s
						},
						id: d,
						onMouseEnter: h,
						onMouseLeave: h
					}, i), a.a.createElement(L.c, {
						tooltipId: d,
						text: u
					}))
				};
			var ke = o("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ye = o.n(ke);
			const {
				fbt: Oe
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Me = () => a.a.createElement(k.a, {
				className: ye.a.stickiedText
			}, Oe._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var je = o("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				we = o.n(je);
			const Se = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: o,
					comment: s,
					flair: r,
					ignoreLock: i,
					isInIcons2020: c,
					isLivestreaming: d,
					renderedInOverlay: l,
					subredditDisplayText: p,
					renderContractorBadge: u
				} = e;
				return s.isDeleted ? a.a.createElement("div", {
					className: Object(m.a)(we.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: we.a.authorLine
				}, a.a.createElement("span", {
					className: we.a.metaText
				}, s.deletedBy === O.b.User ? n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : n.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(k.c, {
					className: we.a.separator
				}), a.a.createElement(G, {
					key: "Created",
					className: we.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				}))) : a.a.createElement("div", {
					className: Object(m.a)(we.a.container, t),
					"data-testid": "post-comment-header"
				}, a.a.createElement("span", {
					className: we.a.authorLine
				}, !Object(O.e)(s) && a.a.createElement(_.b, {
					className: we.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: s.subredditId,
					userId: s.authorId,
					uniqueIdentifier: s.id
				}), a.a.createElement(N, {
					authorClassName: we.a.author,
					comment: s,
					isLivestreaming: d,
					renderedInOverlay: l
				}), o && a.a.createElement(te, null), s.isAuthorCakeday && a.a.createElement(K, {
					className: we.a.baselineItem,
					commentId: s.id,
					isInIcons2020: c,
					renderedInOverlay: l
				}), a.a.createElement(I.a, {
					className: we.a.cryptoPoints,
					contentId: s.id,
					subredditId: s.subredditId,
					userId: s.authorId,
					username: s.author
				}), a.a.createElement(Te, {
					className: we.a.role,
					comment: s,
					subredditDisplayText: p,
					renderContractorBadge: u,
					renderedInOverlay: l
				}), a.a.createElement(k.c, {
					className: we.a.separator
				}), a.a.createElement(G, {
					key: "Created",
					className: we.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				}), s.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(k.c, {
					className: we.a.separator
				}), a.a.createElement(Me, null)), s.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(k.c, {
					className: we.a.separator
				}), a.a.createElement(ae, {
					compact: !0,
					editedAt: s.editedAt
				})), a.a.createElement(xe, {
					comment: s,
					ignoreLock: i,
					isInIcons2020: c,
					renderedInOverlay: l
				}), a.a.createElement(b.a, {
					thing: s,
					tooltipType: l ? T.c.Lightbox : void 0
				})), r && !Object(y.o)(r) && a.a.createElement("span", {
					className: we.a.userFlairLine
				}, a.a.createElement(E.b, {
					className: we.a.flair,
					flair: r,
					forceSmallEmojis: !0
				})))
			};
			var Ne = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				Le = o("./src/reddit/selectors/economics.ts"),
				Ae = o("./src/reddit/models/Flair/index.ts"),
				Re = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				Pe = o("./src/reddit/icons/fonts/Op/index.tsx"),
				De = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Be = o("./src/reddit/selectors/experiments/coreStyles.ts"),
				Fe = o("./src/reddit/selectors/subreddit.ts"),
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
			const Ke = u.a.wrapped(E.b, "RightPositionedAuthorFlair", He.a),
				qe = u.a.wrapped(Re.a, "AdminIcon", He.a),
				ze = u.a.div("AdminEmeritus", He.a),
				Ze = u.a.wrapped(De.a, "ModeratorIcon", He.a),
				Je = u.a.wrapped(Pe.a, "OpIcon", He.a),
				Ge = u.a.wrapped(Re.a, "ContractorIcon", He.a),
				Qe = u.a.span("DeletedText", He.a),
				Ye = u.a.wrapped(k.a, "MetaSeparator", He.a),
				Xe = e => (t, {
					comment: o,
					renderedInOverlay: n
				}) => P(e, o.id, n),
				$e = Object(r.b)(() => Object(i.c)({
					adminTooltipId: Xe("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: Xe("CommentTopMeta--AdEm--"),
					contractorTooltipId: Xe("CommentTopMeta--Contractor--"),
					gildedTooltipId: Xe("CommentTopMeta--Gold--"),
					modTooltipId: Xe("CommentTopMeta--Mod--"),
					opTooltipId: Xe("CommentTopMeta--OP--"),
					topSupporterTooltipId: Xe("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Le.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const o = Object(Fe.I)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ue.d)(e, {
						subredditId: t.subredditId
					}),
					isInIcons2020: Be.a,
					isCommentHeaderRedesignEnabled: v.a
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(d.c)())
				}));
			t.a = $e(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: o,
					children: n,
					className: s,
					collapsed: r,
					collapsedBecauseCrowdControl: i,
					comment: d,
					commentsPageKey: l,
					contractorTooltipId: p,
					compact: u,
					flair: C,
					flairPosition: v,
					hasBadges: x,
					isCommentHeaderRedesignEnabled: g,
					isInIcons2020: f,
					isLivestreaming: y,
					isPostComment: M,
					ignoreFlairPosition: j,
					ignoreLock: w,
					modTooltipId: S,
					onHideTooltip: L,
					onShowTooltip: A,
					opTooltipId: R,
					openPowerupsModal: P,
					renderContractorBadge: D,
					renderedInOverlay: B,
					subredditDisplayText: F,
					topSupporterTooltipId: U
				} = e, W = Object(c.a)(), H = a.a.createElement(a.a.Fragment, null, a.a.createElement(Ne.b, {
					commentId: d.id
				}), a.a.createElement(Ne.a, {
					commentId: d.id,
					commentsPageKey: l
				}));
				if (M && g) return a.a.createElement(a.a.Fragment, null, a.a.createElement(Se, {
					className: Object(m.a)(s, {
						[He.a.collapsed]: r
					}),
					collapsedBecauseCrowdControl: i,
					comment: d,
					flair: C || null,
					ignoreLock: w,
					isInIcons2020: f,
					isLivestreaming: y,
					renderedInOverlay: B,
					subredditDisplayText: F,
					renderContractorBadge: !!D
				}), H);
				if (d.isDeleted) return a.a.createElement(et, Ve({}, e, {
					className: Object(m.a)(s, He.a.container, {
						[He.a.collapsed]: r
					})
				}));
				if (r) return a.a.createElement(tt, Ve({}, e, {
					className: Object(m.a)(s, He.a.container, {
						[He.a.collapsed]: r
					})
				}));
				const V = !j && v === Ae.b.Left;
				return a.a.createElement("div", {
					className: Object(m.a)(s, He.a.container, {
						[He.a.collapsed]: r,
						[He.a.hasBadges]: x,
						[He.a.liveStreaming]: y
					}),
					"data-testid": "comment-top-meta"
				}, C && V && a.a.createElement(E.b, {
					flair: C,
					forceSmallEmojis: u
				}), !Object(O.e)(d) && a.a.createElement(_.b, {
					className: He.a.userBadges,
					showAddCustom: !0,
					subredditId: d.subredditId,
					userId: d.authorId,
					uniqueIdentifier: d.id
				}), n && n, a.a.createElement(N, {
					comment: d,
					isLivestreaming: y,
					isStrong: !!u,
					renderedInOverlay: B
				}), i && a.a.createElement(te, null), i && a.a.createElement(k.c, {
					className: He.a.metaText,
					key: "crowdControlSeparator"
				}), C && !V && a.a.createElement(Ke, {
					flair: C,
					forceSmallEmojis: u
				}), !u && a.a.createElement(I.a, {
					className: He.a.publicPoints,
					contentId: d.id,
					metaSeparator: a.a.createElement(k.c, {
						className: He.a.metaText
					}),
					subredditId: d.subredditId,
					userId: d.authorId,
					username: d.author
				}), a.a.createElement(a.a.Fragment, null, H, !g && a.a.createElement(nt, {
					comment: d,
					compact: u,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					contractorTooltipId: p,
					modTooltipId: S,
					onHideTooltip: L,
					onShowTooltip: A,
					openPowerupsModal: () => {
						W(Object(h.p)("comment")), P()
					},
					opTooltipId: R,
					renderContractorBadge: D,
					renderedInOverlay: B,
					subredditDisplayText: F,
					topSupporterTooltipId: U,
					isInIcons2020: f
				}), g && a.a.createElement(Te, {
					className: He.a.authorRole,
					comment: d,
					subredditDisplayText: F,
					renderContractorBadge: !!D,
					renderedInOverlay: B
				})), !u && a.a.createElement(a.a.Fragment, null, !d.isDeleted && !M && a.a.createElement(a.a.Fragment, null, a.a.createElement(k.b, {
					className: He.a.metaText,
					isScoreHidden: d.isScoreHidden,
					score: d.score
				}), a.a.createElement(k.c, {
					className: He.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(G, {
					key: "Created",
					className: He.a.MetaLink,
					comment: d,
					renderedInOverlay: B
				}), d.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(k.c, {
					className: He.a.separator
				}), a.a.createElement(Me, null)), d.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(k.c, {
					className: He.a.separator
				}), a.a.createElement(ae, {
					editedAt: d.editedAt
				}))), a.a.createElement(xe, {
					comment: d,
					ignoreLock: w,
					isInIcons2020: f,
					renderedInOverlay: B
				}), a.a.createElement(b.a, {
					thing: d,
					tooltipType: B ? T.c.Lightbox : void 0
				}))
			});
			const et = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: s,
						comment: r,
						renderedInOverlay: i
					} = e;
					return a.a.createElement("div", {
						className: s
					}, a.a.createElement(Qe, null, r.deletedBy === O.b.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(G, {
						key: "Created",
						className: He.a.MetaLink,
						comment: r,
						renderedInOverlay: i
					}), o && ot({
						childrenInfo: t
					}))
				},
				tt = e => {
					const {
						comment: t,
						className: o,
						childrenInfo: n,
						renderedInOverlay: s
					} = e;
					return a.a.createElement("div", {
						className: o
					}, a.a.createElement("div", null, a.a.createElement(f, {
						comment: t,
						isAuthorDeleted: Object(O.e)(t)
					})), a.a.createElement(k.b, {
						className: He.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(k.c, {
						className: He.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(G, {
						key: "Created",
						className: He.a.MetaLink,
						comment: t,
						renderedInOverlay: s
					}), ot({
						childrenInfo: n
					}))
				},
				ot = e => {
					const {
						hasContinueThread: t,
						numChildren: o
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Ye, {
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
			class nt extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						isInIcons2020: t,
						renderedInOverlay: o,
						...n
					} = this.props;
					return a.a.createElement(s.Fragment, null, e.isAuthorCakeday && a.a.createElement(K, {
						commentId: e.id,
						isInIcons2020: t,
						renderedInOverlay: o
					}), e.isAdmin && a.a.createElement(qe, {
						desc: D(),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: t
					}), e.isAdmin && st(n.adminTooltipId, D()), e.distinguishType === p.C.ALUMNI_ADMIN && a.a.createElement(ze, {
						"aria-label": B(),
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}, "Δ"), e.distinguishType === p.C.ALUMNI_ADMIN && st(n.adminEmeritusTooltipId, B()), e.isMod && (t ? a.a.createElement(A.a, {
						name: "mod",
						isFilled: !0,
						className: He.a.ModeratorIcon,
						"aria-label": F(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}) : a.a.createElement(Ze, {
						desc: F(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					})), e.isMod && st(n.modTooltipId, F(n.subredditDisplayText)), e.isOp && a.a.createElement(Je, {
						desc: U(),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: t
					}), e.isOp && st(n.opTooltipId, U()), n.renderContractorBadge && a.a.createElement(Ge, {
						desc: W(),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: t
					}), n.renderContractorBadge && st(n.contractorTooltipId, W()))
				}
			}
			const st = (e, t) => a.a.createElement(L.c, {
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
				return M
			})), o.d(t, "b", (function() {
				return j
			})), o.d(t, "g", (function() {
				return w
			})), o.d(t, "e", (function() {
				return S
			})), o.d(t, "d", (function() {
				return N
			})), o.d(t, "f", (function() {
				return L
			})), o.d(t, "a", (function() {
				return V
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/times.js"),
				a = o.n(s),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
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
				x = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = o("./src/reddit/icons/svgs/Comments/index.tsx"),
				f = o("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				_ = o("./src/reddit/components/Comments/States/index.m.less"),
				E = o.n(_);
			const I = l.a.wrapped(g.a, "CommentsIcon", E.a),
				T = l.a.wrapped(f.a, "SnooFacepalm", E.a),
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
				w = ({
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
				S = Object(c.b)(null, (e, {
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
				N = ({
					postId: e,
					commentId: t,
					sort: o,
					apiError: n
				}) => i.a.createElement("div", {
					className: Object(d.a)(E.a.StateContainer, E.a.ErrorFullPage)
				}, i.a.createElement(S, {
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
				B = l.a.div("TextColumn", E.a),
				F = l.a.wrapped(x.b, "Upvote", E.a),
				U = l.a.wrapped(v.b, "Downvote", E.a),
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
				V = e => i.a.createElement(A, null, a()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(D, null, i.a.createElement(F, null), i.a.createElement(U, null)), i.a.createElement(B, null, i.a.createElement(W, null), i.a.createElement(H, null)))))
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
				return $t
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/lodash/debounce.js"),
				s = o.n(n),
				a = o("./node_modules/lodash/last.js"),
				r = o.n(a),
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
				x = o("./src/reddit/components/Comments/States/index.tsx"),
				g = o("./node_modules/fbt/lib/FbtPublic.js"),
				f = o("./node_modules/lodash/defer.js"),
				_ = o.n(f),
				E = o("./src/lib/classNames/index.ts"),
				I = o("./src/lib/lessComponent.tsx"),
				T = o("./src/lib/makeDraftKey/index.ts"),
				k = o("./src/lib/objectSelector/index.ts"),
				y = o("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				O = o("./src/reddit/components/Comments/PredictionComment/async.ts"),
				M = o("./src/reddit/helpers/awards/message.ts"),
				j = o("./src/reddit/helpers/getRichTextContent/index.ts"),
				w = o("./src/reddit/components/RichTextJson/index.tsx"),
				S = o("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				N = o("./src/reddit/icons/svgs/Star/index.tsx"),
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
						a = !0,
						r = !1;
					return t.coinPrice < M.a ? (s = R.a.silverTierAwardComment, a = !1) : t.coinPrice < M.b ? s = R.a.goldTierAwardComment : (s = R.a.platinumTierAwardComment, r = !0), c.a.createElement("div", {
						className: Object(E.a)(R.a.awardComment, s)
					}, c.a.createElement("div", {
						className: R.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(N.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundStar)
					}), c.a.createElement(L.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundStar, R.a.backgroundStar2)
					})), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(S.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleBottomLeft)
					}), c.a.createElement(S.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleTopRight)
					}), c.a.createElement(S.a, {
						className: Object(E.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: n
					})), c.a.createElement(w.a, {
						className: R.a.awardCommentText,
						content: Object(j.a)(o),
						key: `rich-text-${o.id}`,
						rtJsonElementProps: P(e),
						useExplicitTextColor: !0
					}))
				};
			var B = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				F = o("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				U = o.n(F);
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
				V = o("./src/reddit/models/Vote/index.ts"),
				K = o("./src/reddit/actions/comment/authoring.ts"),
				q = o("./src/reddit/actions/comment/moderation.ts"),
				z = o("./src/reddit/actions/modal.ts"),
				Z = o("./src/reddit/actions/reportFlow/index.ts"),
				J = o("./src/reddit/actions/tooltip.ts"),
				G = o("./src/reddit/actions/userBlocks.ts"),
				Q = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Y = o("./src/reddit/constants/tracking.ts"),
				X = o("./src/reddit/selectors/telemetry.ts"),
				$ = o("./src/telemetry/models/Event.ts");
			const ee = e => ({
					screen: Object(X.screen)(e),
					profile: Object(X.profile)(e),
					subreddit: Object(X.subreddit)(e)
				}),
				te = (e, t) => o => ({
					action: "load",
					noun: e,
					post: Object(X.post)(o, t),
					source: $.b.ChatView,
					subreddit: Object(X.subreddit)(o)
				}),
				oe = e => t => ({
					source: "chat_post",
					action: Y.c.VIEW,
					noun: "last_message",
					post: Object(X.post)(t, e),
					comment: Object(X.comment)(t, e),
					...ee(t)
				});
			var ne = o("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				se = o.n(ne);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const re = I.a.button("MenuItem", se.a),
				ie = I.a.a("MenuItemPermalink", se.a),
				ce = ({
					children: e,
					comment: t,
					onClick: o,
					onHideTooltip: n,
					onShowTooltip: s,
					sendEvent: a,
					tooltipId: r,
					tooltipText: i,
					trackingNoun: d
				}) => c.a.createElement(re, {
					id: r,
					onMouseEnter: s.bind(void 0, r),
					onMouseLeave: n.bind(void 0, r),
					onClick: e => {
						o(e), d && (a(((e, t) => o => ({
							source: "comment",
							action: Y.c.CLICK,
							noun: e,
							post: Object(X.post)(o, t),
							comment: Object(X.comment)(o, t),
							...ee(o)
						}))(d, t.id)), a(((e, t) => o => ({
							source: "comment_overflow_menu",
							action: Y.c.CLICK,
							noun: e,
							post: Object(X.post)(o, t),
							comment: Object(X.comment)(o, t),
							...ee(o)
						}))(d, t.id)))
					}
				}, e, c.a.createElement(Q.c, {
					tooltipId: r,
					text: i
				})),
				de = e => c.a.createElement(ce, ae({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(ie, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var le = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				me = o("./src/reddit/components/ModModeReports/helpers.ts"),
				pe = o("./src/reddit/components/ReportFlow/index.tsx"),
				ue = o("./src/reddit/components/TrackingHelper/index.tsx"),
				he = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				be = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ce = o("./src/reddit/icons/svgs/Approve/index.tsx"),
				ve = o("./src/reddit/icons/svgs/Edit/index.tsx"),
				xe = o("./src/reddit/icons/svgs/Flag/index.tsx"),
				ge = o("./src/reddit/icons/svgs/Hide/index.tsx"),
				fe = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				_e = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				Ee = o("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				Ie = o("./src/reddit/icons/svgs/Spam/index.tsx"),
				Te = o("./src/reddit/models/PostDraft/index.ts"),
				ke = o("./src/reddit/selectors/activeModalId.ts"),
				ye = o("./src/reddit/selectors/blockedRedditors.ts"),
				Oe = o("./src/reddit/constants/experiments.ts"),
				Me = o("./src/reddit/helpers/chooseVariant/index.ts");
			const je = Object(l.a)(e => Object(Me.c)(e, {
					experimentName: Oe.L,
					experimentEligibilitySelector: Me.a
				}), e => e),
				we = e => je(e) === Oe.F.UpvoteOnly,
				Se = e => je(e) === Oe.F.UpvoteDownvote;
			var Ne = o("./src/reddit/selectors/moderatorPermissions.ts"),
				Le = o("./src/reddit/selectors/user.ts");

			function Ae() {
				return (Ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = I.a.wrapped(ge.a, "BlockIcon", se.a),
				Pe = I.a.wrapped(xe.a, "FlagIcon", se.a),
				De = I.a.wrapped(ve.a, "EditIcon", se.a),
				Be = I.a.wrapped(Ce.a, "ApproveIcon", se.a),
				Fe = I.a.wrapped(Ee.a, "ReplyIcon", se.a),
				Ue = I.a.wrapped(_e.a, "RemoveIcon", se.a),
				We = I.a.wrapped(Ie.a, "SpamIcon", se.a),
				He = I.a.wrapped(be.a, "UpvoteIcon", se.a),
				Ve = I.a.wrapped(he.a, "DownvoteIcon", se.a),
				Ke = I.a.wrapped(fe.a, "ModeratorIcon", se.a),
				qe = e => (t, {
					comment: o
				}) => `${e}${o.id}`,
				ze = e => `Comment-${e}--Modal--DeleteComment`,
				Ze = Object(l.c)({
					currentUser: Le.i,
					isMod: (e, {
						comment: t
					}) => !!Object(Ne.j)(e, {
						postId: t.postId
					}),
					isAuthorBlocked: (e, {
						comment: t
					}) => Object(ye.c)(e, t.authorId),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
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
					isDeleteModalOpen: (e, {
						comment: t
					}) => Object(ke.a)(e) === ze(t.id),
					isUpvoteOnly: we,
					isUpvoteDownvote: Se
				});
			var Je = Object(d.b)(Ze, (e, {
					comment: t,
					commentsPageKey: o
				}) => ({
					onReplyClick: () => e(Object(K.p)({
						parentCommentId: t.id,
						commentsPageKey: o,
						singleOpen: !0
					})),
					onReportClick: o => {
						o.stopPropagation(), e(Object(Z.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(J.i)()),
					onShowTooltip: t => e(Object(J.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const n = t.media && t.media.rteMode;
						o && e(Object(K.d)({
							commentId: t.id,
							draftKey: Object(T.a)(Te.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: o
						}))
					},
					onApproveClick: () => e(Object(q.a)(t.id)),
					onBlockClick: () => e(Object(G.h)(t.author)),
					onUnblockClick: () => e(Object(G.g)(t.author)),
					onUpvoteClick: () => e(Object(b.n)(t.id)),
					onDownvoteClick: () => e(Object(b.i)(t.id)),
					onDistinguishClick: o => e(Object(q.b)(t.id, o)),
					onSpamClick: () => e(Object(q.e)(t.id, !0)),
					onRemoveClick: () => e(Object(q.e)(t.id, !1)),
					deleteComment: () => o && e(Object(K.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(z.i)(ze(t.id))),
					toggleDeleteCommentModal: () => e(Object(z.i)(ze(t.id)))
				}))(Object(ue.c)(e => {
					const {
						comment: t,
						className: o,
						createTooltipId: n,
						currentUser: s,
						deleteComment: a,
						deleteTooltipId: r,
						editTooltipId: i,
						isAuthorBlocked: d,
						isDeleteModalOpen: l,
						isLivestreaming: p,
						isMod: h,
						onApproveClick: b,
						onBlockClick: C,
						onDeleteClick: v,
						onEditClick: x,
						onHideTooltip: f,
						onRemoveClick: _,
						onReplyClick: I,
						onReportClick: T,
						onShowTooltip: k,
						onSpamClick: y,
						onUnblockClick: O,
						onUpvoteClick: M,
						onDownvoteClick: j,
						onDistinguishClick: w,
						reportFlowIsOpen: S,
						replyTooltipId: N,
						reportTooltipId: L,
						approveTooltipId: A,
						blockTooltipId: R,
						removeTooltipId: P,
						upvoteTooltipId: D,
						downvoteTooltipId: B,
						distinguishTooltipId: F,
						sendEvent: U,
						spamTooltipId: W,
						toggleDeleteCommentModal: K,
						timestampUpdateTrigger: q,
						isUpvoteOnly: z,
						isUpvoteDownvote: Z
					} = e, J = !!s && s.id === t.authorId, G = Object(me.b)(t), Q = t.isApproved && G, Y = !t.bannedBy || t.bannedBy === m.k, X = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: k,
						sendEvent: U
					}, $ = t.isMod, {
						voteState: ee,
						score: te,
						isDeleted: oe
					} = t, ne = !oe && (0 === te || 1 === te || ee === V.a.notVoted);
					return c.a.createElement("div", {
						className: o
					}, c.a.createElement("div", {
						className: Object(E.a)(se.a.Menu, {
							[se.a.Livestreaming]: p
						})
					}, (t.bannedBy || G) && h && c.a.createElement(ce, Ae({
						onClick: b,
						tooltipId: A,
						tooltipText: Q ? g.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : g.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(Be, null)), !t.isLocked && c.a.createElement(ce, Ae({
						onClick: I,
						tooltipId: N,
						tooltipText: g.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(Fe, null)), h && J && c.a.createElement(ce, Ae({
						onClick: () => w($ ? m.C.NONE : m.C.MODERATOR),
						tooltipId: F,
						tooltipText: $ ? g.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : g.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Ke, null)), (z || Z) && !p && ne && c.a.createElement(ce, Ae({
						onClick: M,
						tooltipId: D,
						tooltipText: g.fbt._("Upvote", null, {
							hk: "21XMb7"
						})
					}, e), c.a.createElement(He, null)), Z && !p && ne && c.a.createElement(ce, Ae({
						onClick: j,
						tooltipId: B,
						tooltipText: g.fbt._("Downvote", null, {
							hk: "k46Xu"
						})
					}, e), c.a.createElement(Ve, null)), h && Y && c.a.createElement(ce, Ae({
						onClick: y,
						tooltipId: W,
						tooltipText: g.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(We, null)), !J && c.a.createElement(ce, Ae({
						onClick: T,
						tooltipId: L,
						tooltipText: g.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Pe, null)), S && c.a.createElement(pe.a, {
						commentId: t.id,
						overlayCustomStyles: pe.b,
						postId: t.postId,
						withOverlay: !0
					}), J && !p && c.a.createElement(ce, Ae({
						onClick: x,
						tooltipId: i,
						tooltipText: g.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, X), c.a.createElement(De, null)), h && Y ? c.a.createElement(ce, Ae({
						onClick: _,
						tooltipId: P,
						tooltipText: t.bannedBy === m.k ? g.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : g.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, X), c.a.createElement(Ue, null)) : J && c.a.createElement(ce, Ae({
						onClick: v,
						tooltipId: r,
						tooltipText: g.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(Ue, null)), l && c.a.createElement(le.a, {
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
						onConfirm: a,
						toggleModal: K,
						withOverlay: !0
					}), !!s && !J && c.a.createElement(ce, Ae({
						onClick: () => d ? O() : C(),
						tooltipId: R,
						tooltipText: d ? g.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : g.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, X), c.a.createElement(Re, null))), !p && c.a.createElement(de, Ae({}, e, {
						tooltipId: n,
						tooltipText: Object(H.a)(t.created),
						timestampUpdateTrigger: q
					}), Object(u.d)(t.created)))
				})),
				Ge = o("./src/chat/helpers/dom.ts"),
				Qe = o("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Ye = o("./src/reddit/selectors/commentSelector.ts"),
				Xe = o("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				$e = o.n(Xe);
			const et = {},
				tt = I.a.wrapped(B.a, "ChatIcon", $e.a),
				ot = I.a.span("ReplyAuthor", $e.a),
				nt = I.a.div("ReplyWrapper", $e.a);
			var st = Object(d.b)(() => Object(l.c)({
					comment: Ye.a
				}))(({
					comment: e,
					commentId: t,
					isLivestreaming: o,
					onReplyClick: n
				}) => e ? e.isDeleted ? c.a.createElement(nt, null, c.a.createElement("span", {
					className: Object(E.a)($e.a.ReplyLinkBubble, $e.a.delete, {
						[$e.a.Livestreaming]: o
					})
				}, c.a.createElement(Bt, null))) : c.a.createElement(nt, null, c.a.createElement("a", {
					className: Object(E.a)($e.a.ReplyLinkBubble, {
						[$e.a.Livestreaming]: o
					}),
					href: e.permalink,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(Ge.a)(() => n(e.id))
				}, c.a.createElement(tt, {
					userId: e.authorId,
					icon: e.profileImage
				}), c.a.createElement(ot, null, e.author), c.a.createElement(Qe.a, {
					className: $e.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(j.a)(e),
					rtJsonElementProps: et
				}))) : null),
				at = o("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				rt = o.n(at);
			const it = Object(k.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var ct = e => {
					const {
						comment: t
					} = e;
					return void 0 === it(e) ? null : c.a.createElement(w.a, {
						className: rt.a.SystemMessageText,
						content: Object(j.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: it(e),
						useExplicitTextColor: !0
					})
				},
				dt = o("./src/reddit/components/VerticalVotes/index.tsx"),
				lt = o("./src/reddit/components/CommentsChat/Comment/Votes/index.m.less"),
				mt = o.n(lt);
			const pt = I.a.wrapped(dt.a, "ChatHorizontalVotes", mt.a),
				ut = Object(l.c)({
					isUpvoteOnly: we,
					isUpvoteDownvote: Se
				});
			class ht extends c.a.Component {
				render() {
					const {
						comment: e,
						handleVote: t,
						className: o,
						isUpvoteOnly: n,
						isUpvoteDownvote: s
					} = this.props, {
						voteState: a,
						score: r,
						isDeleted: i
					} = e, d = !i && !(0 === r || 1 === r || a === V.a.notVoted);
					return (n || s) && d && c.a.createElement("div", {
						className: Object(E.a)(mt.a.ChatHorizontalVotesWrapper, o)
					}, c.a.createElement(pt, {
						model: e,
						onVoteClick: t,
						downvoteButtonClassName: Object(E.a)(mt.a.DownvoteWrapper, {
							[mt.a.UpvoteOnlyDownvoteWrapper]: !s
						}),
						isCustomIconDisabled: !0,
						scoreClassName: mt.a.Score
					}))
				}
			}
			var bt = Object(d.b)(ut, (e, {
					comment: t
				}) => ({
					handleVote: o => {
						o === V.a.upvoted && e(Object(b.n)(t.id)), o === V.a.downvoted && e(Object(b.i)(t.id))
					}
				}))(Object(ue.c)(ht)),
				Ct = o("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				vt = o("./src/reddit/contexts/PageLayer/index.tsx"),
				xt = o("./src/reddit/controls/ErrorText/index.tsx"),
				gt = o("./src/reddit/selectors/comments.ts");
			const ft = e => Object(Me.c)(e, {
				experimentName: Oe.K,
				experimentEligibilitySelector: Me.a
			}) === Oe.I.Enabled;
			var _t = o("./src/reddit/selectors/communityAwards.ts");
			const Et = (e, {
				commentId: t
			}) => {
				const o = Object(Ye.a)(e, {
					commentId: t
				});
				if (o && o.associatedAwardId) return Object(_t.a)(e, o.associatedAwardId)
			};
			var It = o("./src/reddit/selectors/gold/awardIcon.ts"),
				Tt = o("./src/reddit/selectors/poll/index.ts"),
				kt = o("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				yt = o.n(kt);
			const Ot = 250,
				Mt = 10,
				jt = I.a.wrapped(xt.b, "ErrorText", yt.a),
				wt = I.a.wrapped(y.a, "TopMeta", yt.a),
				St = I.a.span("DeleteText", yt.a),
				Nt = I.a.wrapped(st, "Reply", yt.a),
				Lt = Object(vt.t)(),
				At = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, {
						commentId: t
					}) => Et(e, {
						commentId: t
					}),
					awardIconUrl: (e, {
						commentId: t
					}) => {
						const o = Et(e, {
							commentId: t
						});
						if (o) return Object(It.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: t
						})
					},
					comment: Ye.a,
					errorMsgs: gt.F,
					flair: gt.e,
					isActive: (e, {
						commentId: t
					}) => Boolean(e.shortcuts.activeCommentId && t === e.shortcuts.activeCommentId),
					isEditing: gt.z,
					prediction: Tt.f,
					subreddit: vt.q,
					shouldRenderSystemMessages: ft
				})),
				Rt = Object(k.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Pt extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Ot && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let o = Ot;
						if (t) {
							o = e.scrollHeight + Mt;
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
						errorMsgs: a,
						flair: r,
						isActive: i,
						isEditing: d,
						isLivestreaming: l,
						postId: m,
						prediction: p,
						renderedInOverlay: h,
						sendEvent: b,
						targetComment: C,
						timestampUpdateTrigger: v,
						addToRefList: x,
						onReplyClick: f,
						shouldRenderSystemMessages: I
					} = this.props, {
						isCollapsed: k,
						isExpanded: y,
						isTruncated: M
					} = this.state;
					if (!n) return null;
					i && _()(() => this.elemRef.current && this.elemRef.current.focus()), _()(() => this.elemRef && this.elemRef.current && x && x(this.elemRef));
					const S = n.isSystem,
						N = !d && !n.isDeleted && !S,
						L = !!e,
						A = Object(E.a)({
							[yt.a.SystemMessageWrapper]: S && !l && I,
							[yt.a.CommentWrapper]: !l && !S,
							[yt.a.CommentExpanded]: y,
							[yt.a.CommentTruncated]: M,
							[yt.a.HighlightTarget]: C,
							[yt.a.LivestreamingCommentWrapper]: l
						});
					return k ? c.a.createElement(W, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: A
					}, d && c.a.createElement(Ct.a, {
						key: "chatCommentsForm",
						isLivestreaming: l,
						postId: m,
						sendEvent: b,
						draftKey: Object(T.a)(Te.c.edit, n.id),
						commentsPageKey: s,
						isEditing: d,
						comment: n
					}), N && c.a.createElement(c.a.Fragment, null, c.a.createElement(wt, {
						childrenInfo: o,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: n,
						commentsPageKey: s,
						compact: !0,
						flair: r,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: l,
						renderedInOverlay: h
					}, c.a.createElement(B.a, {
						className: Object(E.a)(yt.a.ChatIcon, {
							[yt.a.Livestreaming]: l
						}),
						isLivestreaming: l,
						icon: n.profileImage,
						userId: n.authorId
					})), n.parentId && c.a.createElement(Nt, {
						commentId: n.parentId,
						onReplyClick: f,
						isLivestreaming: l
					}), l && c.a.createElement("span", {
						className: yt.a.livestreamingTimeStamp
					}, Object(u.d)(n.created)), L && e && l ? c.a.createElement(D, {
						award: e,
						comment: n,
						iconUrl: t
					}) : p ? c.a.createElement(O.a, {
						comment: n,
						prediction: p
					}) : [c.a.createElement(w.a, {
						className: Object(E.a)(yt.a.RichTextJson, {
							[yt.a.Livestreaming]: l
						}),
						content: Object(j.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: Rt(this.props),
						useExplicitTextColor: l
					}), c.a.createElement(Je, {
						key: "Menu",
						className: Object(E.a)(yt.a.Menu, {
							[yt.a.Livestreaming]: l
						}),
						comment: n,
						commentsPageKey: s,
						isLivestreaming: l,
						timestampUpdateTrigger: v
					})]), n.isDeleted && c.a.createElement(Bt, null), N && a && a.map((e, t) => c.a.createElement(jt, {
						key: `${t}-${e}`
					}, e)), !d && M && c.a.createElement("button", {
						className: Object(E.a)(yt.a.CommentReadMoreButton, {
							[yt.a.Livestreaming]: l
						}),
						onClick: this.toggleBody
					}, g.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), !l && N && c.a.createElement(bt, {
						className: Object(E.a)({
							[yt.a.TruncatedVotesButton]: M && !y
						}),
						comment: n
					}), S && !l && I && c.a.createElement(ct, {
						comment: n
					}))
				}
			}
			const Dt = Lt(At(Pt)),
				Bt = ({
					isLivestreaming: e
				}) => c.a.createElement(c.a.Fragment, null, c.a.createElement(B.a, {
					className: Object(E.a)(yt.a.ChatIcon, {
						[yt.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), c.a.createElement(St, null, g.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var Ft = Dt,
				Ut = o("./node_modules/lodash/first.js"),
				Wt = o.n(Ut),
				Ht = o("./node_modules/lodash/isEqual.js"),
				Vt = o.n(Ht),
				Kt = o("./src/reddit/controls/Button/index.tsx"),
				qt = o("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				zt = o.n(qt);
			const Zt = I.a.div("ButtonWrapper", zt.a),
				Jt = ({
					top: e
				}) => c.a.createElement("span", {
					className: Object(E.a)(zt.a.ChunkPlaceholder, {
						[zt.a.top]: e
					})
				}, g.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				Gt = ({
					className: e,
					isLivestreaming: t,
					isLoading: o,
					setRef: n,
					...s
				}) => c.a.createElement("div", {
					ref: n,
					className: Object(E.a)(e, {
						[zt.a.ScrollerWrapper]: !t,
						[zt.a.LivestreamingWrapper]: t,
						[zt.a.loading]: o
					})
				}, !o && s.isPrevLoading && !t && c.a.createElement(Jt, {
					top: !0
				}), s.children, !o && s.isNextLoading && !t && c.a.createElement(Jt, null));
			class Qt extends c.a.Component {
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
					const t = e.children.length !== this.props.children.length || !Vt()(Wt()(e.children), Wt()(this.props.children)) || !Vt()(r()(e.children), r()(this.props.children));
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
					} = this.props, o = this.state.newCommentsCount > 0 ? Object(E.a)([zt.a.NewComments, zt.a.show]) : zt.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Gt, {
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
						className: zt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: zt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: zt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(Zt, null, c.a.createElement(Kt.i, {
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
			var Yt = Qt,
				Xt = o("./src/reddit/selectors/posts.ts");
			const $t = 6e4,
				eo = (e, t, {
					authorId: o,
					id: n
				}) => e.includes(o) && !t.includes(n),
				to = Object(l.c)({
					blockedRedditors: ye.a,
					blockedRedditorsPending: ye.b,
					chatCommentLinks: gt.g,
					isPending: gt.d,
					liveCommentsWebsocket: Xt.B,
					moreCommentsLink: gt.E
				}),
				oo = Object(d.b)(to, (e, t) => ({
					onLiveCommentsSubscribe: (o, n, s) => e(Object(C.a)(o, n, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, o) => e(Object(C.b)(t, o)),
					loadMoreComments: o => e(Object(b.j)(t.commentsPageKey, o)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object(v.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.r.CHAT
					}, m.r.CHAT))
				}));
			class no extends c.a.Component {
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
						liveCommentsWebsocket: o,
						loadComments: n,
						onLiveCommentsSubscribe: s,
						postId: a
					} = this.props;
					o && (e && n(), s(t, o, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = o)
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
						commentsPageKey: a,
						isLoading: r,
						isPending: i,
						postId: c,
						draftKey: d
					} = this.props, {
						expandedCommentIds: l,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== d || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== n || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks.length !== s.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== o.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: o,
						commentId: n,
						commentsPageKey: s,
						liveCommentsWebsocket: a,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && a && (i(s, a, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = a)), e.blockedRedditors.ids !== t.ids) {
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
					t && !t.pending && (e(t.moreCommentId), n(te("history", o)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, o = r()(e);
					(null == o ? void 0 : o.id) && t(oe(o.id))
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
						emptyStateClassName: a,
						isLivestreaming: r,
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
					return c.a.createElement(c.a.Fragment, null, C ? c.a.createElement(x.c, {
						className: a,
						isChat: !0
					}) : c.a.createElement(Yt, {
						className: o,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => eo(e.ids, u, t) ? c.a.createElement(W, {
						commentCount: 1,
						isLivestreaming: r,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Ft, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: s,
						isLivestreaming: r,
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
			t.default = oo(Object(ue.c)(no))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return a
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				a = e => (e.numReports || 0) > 0
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
				a = o.n(s),
				r = o("./src/lib/lessComponent.tsx"),
				i = o("./src/lib/prettyPrintNumber/index.ts"),
				c = (o("./src/lib/timeAgo/index.ts"), o("./src/reddit/controls/MetaData/index.m.less")),
				d = o.n(c);
			const l = r.a.span("metaText", d.a),
				m = e => a.a.createElement(l, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: o,
					...s
				}) => {
					const r = Object(i.b)(t),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						d = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, s, d)
				},
				u = e => a.a.createElement(l, null, n.fbt._({
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
				return a
			})), o.d(t, "d", (function() {
				return r
			}));
			const n = 500,
				s = 1800,
				a = (e, t = !1) => t ? e.coinPrice < n ? 0 : e.coinPrice < s ? 50 : 100 : 2048,
				r = (e, t, o = !1) => {
					const n = a(t, o);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");

			function a({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case s.E.AUTHORIZATION_ERROR:
						return t ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.E.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.E.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.E.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.E.LIKELY_UBLOCK_ERROR:
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
				return a
			})), o.d(t, "b", (function() {
				return r
			})), o.d(t, "c", (function() {
				return i
			})), o.d(t, "d", (function() {
				return c
			})), o.d(t, "e", (function() {
				return d
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/humanizeUTCDate/index.tsx");
			const a = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				r = n.fbt._("Action taken by Automoderator", null, {
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
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/Op/index.m.less"),
				c = o.n(i);
			const d = o("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(a.a)();
				return s.a.createElement("i", {
					className: `${Object(r.b)(t?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(r.a, null, e.desc))
			}, "OpIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
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
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, o) {
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
			}, s.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), s.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), s.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), s.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, o) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = o.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
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
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = o.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.edit, e.className),
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
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = o.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
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
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function a(e) {
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
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function a(e) {
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
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function a(e) {
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
		"./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(n.ob)
		},
		"./src/reddit/selectors/poll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
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
				s = o("./src/reddit/models/Poll/index.ts"),
				a = o("./src/reddit/selectors/commentSelector.ts");
			const r = (e, {
					postId: t
				}) => e.posts.metaMap[t],
				i = (e, {
					postId: t
				}) => {
					const o = r(e, {
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
					return o && Object(s.g)(o) ? o : null
				},
				d = (e, {
					commentId: t
				}) => {
					const o = Object(a.a)(e, {
						commentId: t
					});
					return o && o.commentType === n.a.Prediction && c(e, o) || null
				},
				l = (e, {
					postId: t
				}) => {
					const o = r(e, {
						postId: t
					});
					if (o) return e.polls.rewards[o]
				},
				m = (e, {
					postId: t
				}) => {
					const o = r(e, {
						postId: t
					});
					if (o) return e.polls.results.byVotingPower[o]
				},
				p = (e, {
					postId: t
				}) => {
					const o = r(e, {
						postId: t
					});
					if (o) return e.polls.results.byVoters[o]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.032d4db4266ee296a7e3.js.map