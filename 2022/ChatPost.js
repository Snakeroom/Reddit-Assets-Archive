// https://www.redditstatic.com/desktop2x/ChatPost.007b750cd1b4e767a53f.js
// Retrieved at 8/31/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(n);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseDelay.js"),
				s = n("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = s
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > r) return [];
				var n = i,
					d = c(e, i);
				t = s(t), e -= i;
				for (var l = o(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e, t) {
				for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) o[s - 2] = arguments[s];
				let a, r = !1;
				const i = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), r || (a = window.setTimeout(i, t))
				};
				return a = window.setTimeout(i, t), () => {
					r = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/realtime/connection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/@apollo/client/core/ApolloClient.js"),
				s = n("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js"),
				a = n("./node_modules/@apollo/client/link/ws/index.js"),
				r = n("./src/config.ts"),
				i = n("./node_modules/subscriptions-transport-ws/dist/client.js");
			let c;
			const d = {
					reconnect: !0,
					reconnectionAttempts: 6,
					lazy: !0,
					timeout: 3e4,
					inactivityTimeout: 15e3
				},
				l = {
					name: "web2x",
					version: "0.0.1"
				};

			function m(e) {
				if (!c) {
					const t = new a.a(new i.SubscriptionClient(`wss://${r.a.gqlRealtimeAddress}`, {
						...d,
						connectionParams: {
							Authorization: e ? `Bearer ${e}` : ""
						}
					}));
					c = new o.a({
						...l,
						cache: new s.a,
						link: t
					})
				}
				return c
			}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const r = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = n("./src/reddit/selectors/blockedRedditors.ts");
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				m = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				p = Object(o.a)(c),
				h = Object(o.a)(d),
				b = Object(o.a)(l),
				C = Object(o.a)(m),
				v = Object(o.a)(u),
				g = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const s = t(),
						a = Object(i.a)(s);
					if (Object(i.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let c = !1,
						d = "";
					do {
						e(v());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await r(o(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: n,
									edges: o
								} = t.blockedRedditorsInfo;
								if (e(C(o.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									c = e, d = t || ""
								}
							} else c = !1
						} else {
							c = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (c)
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "g", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/blockedRedditors.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/accounts/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				m = "USER_BLOCK__LOADED",
				u = "USER_BLOCK__FAILED",
				p = Object(s.a)(l),
				h = Object(s.a)(m),
				b = Object(s.a)(u),
				C = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					var l;
					if (n().blockUser.api.pending[e]) return;
					t(p({
						username: e
					}));
					const m = await Object(i.a)(d(), e),
						u = `error-block-${e}`;
					if (m.ok) m.body.name && t(h(m.body)), m.body.id && t(Object(a.f)(m.body.id)), t(r.g(u)), t(r.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: m.error ? m.error.type : "Unknown error",
							username: e
						};
						t(b(n)), "REBLOCK_RATE_LIMIT" === (null === (l = m.body) || void 0 === l ? void 0 : l.reason) ? t(r.f({
							id: u,
							kind: c.b.Error,
							text: o.fbt._("You can't block u/{username} for 24 hours after unblocking them", [o.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: C(e)
						})) : t(r.f({
							id: u,
							kind: c.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: C(e)
						}))
					}
				}, v = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", f = "USER_UNBLOCK__FAILED", x = Object(s.a)(v), E = Object(s.a)(g), _ = Object(s.a)(f), k = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const m = n(),
						u = Object(d.k)(m),
						p = u ? u.id : void 0,
						h = m.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(x({
						name: e
					})), (await Object(i.c)(l(), p, e)).ok ? (t(E({
						name: e
					})), h && h.id && t(Object(a.h)(h.id)), t(r.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(r.f({
						kind: c.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(_({
						name: e
					}))))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
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
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H",
				LastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy",
				lastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
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
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
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
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const h = e => {
				const {
					className: t,
					collapsed: n,
					comment: s,
					isAuthorDeleted: r,
					isCommentAuthorBlocked: i,
					isLivestreaming: d,
					isEmbeddedLiveChat: l,
					isStrong: u,
					onClick: h,
					style: b
				} = e;
				return n && i ? a.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : a.a.createElement(m.a, {
					author: s.author,
					className: Object(c.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: r,
					isCommentAuthorBlocked: i,
					isLivestreaming: d,
					forceOpenInNewTab: l,
					isStrong: u,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: h,
					style: b
				}, s.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				f = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				x = n("./src/reddit/components/PostTopMeta/index.tsx"),
				E = n("./src/reddit/controls/MetaData/index.tsx"),
				_ = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				T = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(M);
			const L = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: s,
					isLivestreaming: r,
					isEmbeddedLiveChat: i,
					isStrong: d,
					onClick: l,
					renderedInOverlay: m
				} = e;
				const u = Object(O.f)(o),
					p = a.a.createElement(j.b, {
						ignore: u || !!o.distinguishType && o.distinguishType !== w.H.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, a.a.createElement(h, {
						className: t,
						collapsed: s,
						comment: o,
						isAuthorDeleted: Object(O.f)(o),
						isCommentAuthorBlocked: Object(O.g)(o),
						isLivestreaming: r,
						isEmbeddedLiveChat: i,
						isStrong: d,
						onClick: l
					}));
				return u || i ? p : a.a.createElement(T.b, {
					className: Object(c.a)(N.a.authorHoverCard, n),
					collapsed: s,
					isCommentAuthorBlocked: Object(O.g)(o),
					postOrComment: o,
					tooltipType: m ? x.c.Lightbox : void 0
				}, p)
			};
			var R = n("./src/config.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				S = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const P = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `${e}${t}${n?"inOverlay":""}`
				},
				B = e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				});
			var D = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(D);
			const U = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: s
				} = e;
				const i = Object(r.d)(),
					d = () => i(Object(A.h)({
						tooltipId: l
					})),
					l = P("CommentTopMeta--cakeday--", n, s),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
					className: Object(c.a)(F.a.cakedayIcon, t),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: d,
					onMouseLeave: d,
					"data-testid": "cakeday-icon"
				}), a.a.createElement(S.c, {
					tooltipId: l,
					text: m
				}))
			};
			var H = n("./src/lib/addQueryParams/index.ts"),
				K = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/actions/post.ts"),
				V = n("./src/reddit/components/HumanDate/index.tsx"),
				q = n("./src/reddit/helpers/path/index.ts");
			const z = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					} = e, l = Object(r.d)(), m = P("CommentTopMeta--Created--", n.id, c), u = () => l(Object(A.h)({
						tooltipId: m
					}));
					return a.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(H.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == s || s(e), G(l, n.id), d && (e.preventDefault(), l(Object(W.Z)(Object(q.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, a.a.createElement(V.d, {
						seconds: n.created,
						shortenedUnit: o
					}), a.a.createElement(S.c, {
						tooltipId: m
					}, a.a.createElement(V.b, {
						seconds: n.created
					})))
				},
				G = (e, t) => {
					window.addEventListener("focus", (function n() {
						Q(e, t, n)
					}))
				},
				Q = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(K.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(K.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(J);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => a.a.createElement(E.a, {
				className: X.a.crowdControlText
			}, Z._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var $ = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = e => {
				let {
					compact: t,
					editedAt: n
				} = e;
				return a.a.createElement(E.a, {
					className: ee.a.editedText
				}, te._("edited {time}", [te._param("time", a.a.createElement(V.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var oe = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ae = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				re = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				le = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				me = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ue = n.n(me);
			const pe = e => {
				let {
					comment: t,
					ignoreLock: s,
					renderedInOverlay: i,
					isAdmin: c
				} = e;
				const d = Object(r.d)(),
					l = e => () => d(Object(A.f)({
						tooltipId: e
					})),
					m = () => d(Object(A.i)()),
					u = e => P(e, t.id, i),
					p = u("CommentTopMeta--Approve--"),
					h = u("CommentTopMeta--Remove--"),
					b = u("CommentTopMeta--Report--"),
					C = u("CommentTopMeta--Spam--"),
					v = l(h);
				return a.a.createElement(a.a.Fragment, null, (t.approvedBy || t.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(re.a, {
					className: ue.a.approveIcon,
					desc: Object(se.a)(t),
					id: p,
					onMouseEnter: l(p),
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(S.c, {
					tooltipId: p,
					text: Object(se.a)(t)
				})), Object(oe.a)(t) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ce.a, {
					className: ue.a.removeIcon,
					desc: Object(se.b)(t),
					id: h,
					onMouseEnter: v,
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(S.c, {
					tooltipId: h,
					text: Object(se.b)(t)
				})), Object(oe.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && a.a.createElement("a", {
					className: ue.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => d(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(oe.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && a.a.createElement("a", {
					className: ue.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: m
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !s && a.a.createElement(ie.a, {
					className: ue.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(le.a, {
					className: ue.a.spamIcon,
					desc: Object(se.d)(t),
					id: C,
					onMouseEnter: l(C),
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(S.c, {
					tooltipId: C,
					text: Object(se.d)(t)
				})), Object(ae.a)(t) && a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
					className: ue.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: b,
					onMouseEnter: l(b),
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(S.c, {
					tooltipId: b,
					text: Object(se.c)(t.numReports)
				})), t.isDeleted && c && a.a.createElement(a.a.Fragment, null, a.a.createElement(ce.a, {
					className: ue.a.removeIcon,
					isFilled: !0
				}), a.a.createElement("span", {
					className: ue.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var he, be = n("./src/lib/colors/constants.ts"),
				Ce = n("./src/reddit/helpers/author.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.ModTeam = "modTeam", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(he || (he = {}));
			var ve = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ge = n.n(ve);
			const fe = {
					[he.Admin]: {
						color: be.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[he.Mod]: {
						color: be.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => B(e.subredditDisplayText)
					},
					[he.ModTeam]: {
						color: be.d,
						getLabel: () => o.fbt._("Mods", null, {
							hk: "2rP88U"
						}),
						tooltipPrefix: "CommentTopMeta--ModTeam--",
						tooltipTemplate: e => B(e.subredditDisplayText)
					},
					[he.Op]: {
						color: be.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[he.AlumniAdmin]: {
						color: be.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[he.Contractor]: {
						color: be.a,
						getLabel: () => o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => o.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				xe = e => {
					const t = Object(r.d)(),
						n = function(e) {
							if (e.isAdmin) return he.Admin;
							const t = e.isMod || e.distinguishType === w.H.MODERATOR;
							return t && e.author && Object(Ce.a)(e.author) ? he.ModTeam : t ? he.Mod : e.isOp ? he.Op : e.distinguishType === w.H.ALUMNI_ADMIN ? he.AlumniAdmin : e.authorIsContractor ? he.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === he.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						getLabel: i,
						tooltipTemplate: d
					} = fe[n], l = i(), m = P(o, e.comment.id, e.renderedInOverlay), u = d(e), p = () => t(Object(A.h)({
						tooltipId: m
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(c.a)(ge.a.role, e.className),
						style: {
							color: s
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, a.a.createElement("span", null, l), (n === he.Mod || n === he.ModTeam) && a.a.createElement(Ee, null)), a.a.createElement(S.c, {
						tooltipId: m,
						text: u
					}))
				},
				Ee = () => a.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: ge.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var _e = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ke = n.n(_e);
			const {
				fbt: Ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oe = () => a.a.createElement(E.a, {
				className: ke.a.stickiedText
			}, Ie._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ye = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				we = n.n(ye);
			const je = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: d,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: h,
					onCommentTimestampClick: w,
					permalink: j,
					renderContractorBadge: T,
					renderedInOverlay: M,
					subredditDisplayText: N,
					isAdmin: R
				} = e, A = Object(I.a)(), S = i.subredditId, P = Object(r.e)(e => Object(y.m)(e, {
					subredditId: S
				}));
				if (i.isDeleted && !R) return a.a.createElement("div", {
					className: Object(c.a)(we.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: we.a.authorLine
				}, a.a.createElement("span", {
					className: we.a.metaText
				}, i.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(E.c, {
					className: we.a.separator
				}), a.a.createElement(z, {
					key: "Created",
					className: we.a.metaText,
					comment: i,
					compact: !0,
					permalink: j,
					renderedInOverlay: M
				})));
				return a.a.createElement("div", {
					className: Object(c.a)(we.a.container, t),
					"data-testid": "post-comment-header"
				}, a.a.createElement("span", {
					className: we.a.authorLine
				}, !Object(O.f)(i) && a.a.createElement(C.b, {
					className: we.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), a.a.createElement("div", {
					className: we.a.baselineItem
				}, a.a.createElement(L, {
					authorClassName: we.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: M
				})), !Object(O.f)(i) && u && a.a.createElement(f.a, {
					postOrComment: i,
					className: we.a.LastAuthorModNoteIcon
				}), s && a.a.createElement(Y, null), a.a.createElement(xe, {
					className: we.a.role,
					comment: i,
					subredditDisplayText: N,
					renderContractorBadge: T,
					renderedInOverlay: M
				}), i.isAuthorCakeday ? a.a.createElement(U, {
					className: we.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: M
				}) : !Object(O.f)(i) && P && a.a.createElement(b.a, {
					className: we.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						A(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), a.a.createElement(g.a, {
					className: we.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), a.a.createElement(E.c, {
					className: we.a.separator
				}), a.a.createElement(z, {
					key: "Created",
					className: we.a.metaText,
					comment: i,
					compact: !0,
					onClick: w,
					permalink: j,
					renderedInOverlay: M
				}), i.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: we.a.separator
				}), a.a.createElement(Oe, null)), i.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: we.a.separator
				}), a.a.createElement(ne, {
					compact: !0,
					editedAt: i.editedAt
				})), a.a.createElement(pe, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: M,
					isAdmin: R
				}), a.a.createElement(l.a, {
					thing: i,
					tooltipType: M ? x.c.Lightbox : void 0
				})), d && !Object(_.o)(d) && a.a.createElement("span", {
					className: we.a.userFlairLine
				}, a.a.createElement(v.b, {
					className: we.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Me = n("./src/reddit/selectors/economics.ts"),
				Ne = n("./src/reddit/models/Flair/index.ts"),
				Le = n("./src/reddit/selectors/comments.ts"),
				Re = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Pe = n("./src/reddit/selectors/userFlair.ts"),
				Be = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				De = n.n(Be);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = d.a.wrapped(v.b, "RightPositionedAuthorFlair", De.a),
				He = d.a.span("DeletedText", De.a),
				Ke = d.a.wrapped(E.a, "MetaSeparator", De.a),
				We = Object(r.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Me.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Se.K)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Pe.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Le.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Re.b,
					isBlockingInterstitialV2Enabled: Re.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ae.i)(e, n.subredditId)
					}
				}));
			t.a = We(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: r,
					commentPermalink: i,
					commentsPageKey: d,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					hideAwards: b = !1,
					ignoreFlairPosition: f,
					ignoreLock: _,
					isAdmin: k,
					isBlockingInterstitialEnabled: I,
					isBlockingInterstitialV2Enabled: y,
					isModWithUserNotesPermissions: w,
					isLivestreaming: j,
					isEmbeddedLiveChat: T,
					isPostComment: M,
					onCommentAuthorClick: N,
					onCommentTimestampClick: R,
					renderContractorBadge: A,
					renderedInOverlay: S,
					subredditDisplayText: P,
					userHasNft: B
				} = e, D = a.a.createElement(a.a.Fragment, null, a.a.createElement(Te.b, {
					commentId: r.id
				}), a.a.createElement(Te.a, {
					commentId: r.id,
					commentsPageKey: d
				}));
				if (M) return a.a.createElement(a.a.Fragment, null, a.a.createElement(je, {
					className: Object(c.a)(n, {
						[De.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: r,
					flair: u || null,
					ignoreLock: _,
					isAdmin: k,
					isModWithUserNotesPermissions: w,
					isLivestreaming: j,
					onCommentAuthorClick: N,
					onCommentTimestampClick: R,
					permalink: i,
					renderContractorBadge: !!A,
					renderedInOverlay: S,
					subredditDisplayText: P
				}), D);
				if (r.isDeleted) return a.a.createElement(Ve, Fe({}, e, {
					className: Object(c.a)(n, De.a.container, {
						[De.a.collapsed]: o
					})
				}));
				if (o) return a.a.createElement(qe, Fe({}, e, {
					className: Object(c.a)(n, De.a.container, {
						[De.a.collapsed]: o
					})
				}));
				const F = !f && p === Ne.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(n, De.a.container, {
						[De.a.collapsed]: o,
						[De.a.hasBadges]: h,
						[De.a.liveStreaming]: j
					}),
					"data-testid": "comment-top-meta"
				}, u && F && a.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(O.f)(r) && a.a.createElement(C.b, {
					className: De.a.userBadges,
					showAddCustom: !0,
					subredditId: r.subredditId,
					userId: r.authorId,
					uniqueIdentifier: r.id
				}), t && t, a.a.createElement(L, {
					authorClassName: B ? De.a.NftAuthor : void 0,
					collapsed: o,
					comment: r,
					isLivestreaming: j,
					isEmbeddedLiveChat: T,
					isStrong: !!m,
					onClick: N,
					renderedInOverlay: S
				}), s && a.a.createElement(Y, null), s && a.a.createElement(E.c, {
					className: De.a.metaText,
					key: "crowdControlSeparator"
				}), u && !F && a.a.createElement(Ue, {
					flair: u,
					forceSmallEmojis: m
				}), !m && a.a.createElement(g.a, {
					className: De.a.publicPoints,
					contentId: r.id,
					metaSeparator: a.a.createElement(E.c, {
						className: De.a.metaText
					}),
					subredditId: r.subredditId,
					userId: r.authorId,
					username: r.author
				}), D, a.a.createElement(xe, {
					className: De.a.authorRole,
					comment: r,
					subredditDisplayText: P,
					renderContractorBadge: !!A,
					renderedInOverlay: S
				}), !m && a.a.createElement(a.a.Fragment, null, !r.isDeleted && !M && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.b, {
					className: De.a.metaText,
					isScoreHidden: r.isScoreHidden,
					score: r.score
				}), a.a.createElement(E.c, {
					className: De.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(z, {
					key: "Created",
					className: De.a.MetaLink,
					comment: r,
					permalink: i,
					renderedInOverlay: S,
					isBlockingInterstitialEnabled: I || y
				}), r.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: De.a.separator
				}), a.a.createElement(Oe, null)), r.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: De.a.separator
				}), a.a.createElement(ne, {
					editedAt: r.editedAt
				}))), a.a.createElement(pe, {
					comment: r,
					ignoreLock: _,
					renderedInOverlay: S
				}), !b && a.a.createElement(l.a, {
					thing: r,
					tooltipType: S ? x.c.Lightbox : void 0
				}))
			});
			const Ve = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: r,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d,
						renderedInOverlay: l
					} = e;
					return a.a.createElement("div", {
						className: s
					}, a.a.createElement(He, null, r.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(z, {
						key: "Created",
						className: De.a.MetaLink,
						comment: r,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: c || d
					}), n && ze({
						childrenInfo: t
					}))
				},
				qe = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s,
						collapsed: r,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", null, a.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: r
					})), a.a.createElement(E.b, {
						className: De.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(E.c, {
						className: De.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(z, {
						key: "Created",
						className: De.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: c || d
					}), ze({
						childrenInfo: o
					}))
				},
				ze = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Ke, {
						className: De.a.metaText
					}, t ? o.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : o.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U",
				userDeletion: "_1KVzcRpEm0U5vCgrZbgiyN"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Comments-PredictionComment").then(n.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, n) {
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
				LiveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				liveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
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
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "a", (function() {
				return U
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/times.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/pages/comments.ts"),
				u = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/describeApiError/index.ts"),
				b = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				g = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = n("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				E = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				_ = n("./src/reddit/components/Comments/States/index.m.less"),
				k = n.n(_);
			const I = l.a.p("EmptyTitle", k.a),
				O = l.a.p("ErrorTitle", k.a),
				y = l.a.p("EmptyText", k.a),
				w = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(k.a.StateContainer, t)
					}, n ? i.a.createElement(x.a, {
						className: k.a.LiveChatIcon
					}) : i.a.createElement(f.a, {
						className: k.a.CommentsIcon
					}), i.a.createElement(I, null, n ? o.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : o.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(y, null, o.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				j = () => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(f.a, {
					className: k.a.CommentsIcon
				}), i.a.createElement(I, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(y, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				T = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(f.a, {
						className: k.a.CommentsIcon
					}), i.a.createElement(I, null, o.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(p.n, {
						to: Object(b.b)(t)
					}, o.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				M = Object(c.b)(null, (e, t) => {
					let {
						postId: n,
						commentId: o,
						sort: s
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(n, o, {
							sort: s
						}, s))
					}
				})(e => {
					let {
						apiError: t,
						onClick: n
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(E.a, {
						className: k.a.SnooFacepalm
					}), i.a.createElement(O, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : o.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(p.l, {
						onClick: n
					}, o.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				N = e => {
					let {
						postId: t,
						commentId: n,
						sort: o,
						apiError: s
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(k.a.StateContainer, k.a.ErrorFullPage)
					}, i.a.createElement(M, {
						postId: t,
						commentId: n,
						sort: o,
						apiError: s
					}))
				},
				L = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", k.a),
				R = l.a.div("CommentsPlaceholderContainer", k.a),
				A = l.a.div("CommentPlaceholder", k.a),
				S = l.a.div("Avatar", k.a),
				P = l.a.div("VoteColumn", k.a),
				B = l.a.div("TextColumn", k.a),
				D = () => i.a.createElement("div", {
					className: Object(d.a)(k.a.TopMetaPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				F = () => i.a.createElement("div", {
					className: Object(d.a)(k.a.CommentBodyPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				U = e => i.a.createElement(R, null, a()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(S, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(P, null, i.a.createElement(g.b, {
					className: k.a.Upvote
				}), i.a.createElement(v.a, {
					className: k.a.Downvote
				})), i.a.createElement(B, null, i.a.createElement(D, null), i.a.createElement(F, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, n) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/v1/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3RM4nGWSSpBOcS_7_2TRL1",
				Menu: "_1r0V_BtD8JOSLllkKmO-7D",
				menu: "_1r0V_BtD8JOSLllkKmO-7D",
				Livestreaming: "DpZUkCtotz3Q-xHAAKsJt",
				livestreaming: "DpZUkCtotz3Q-xHAAKsJt",
				MenuItem: "_3y7UZGXBJwiIbOypKfHs6R",
				menuItem: "_3y7UZGXBJwiIbOypKfHs6R",
				MenuItemPermalink: "BWDMEstphCE9S5k0LgDMs",
				menuItemPermalink: "BWDMEstphCE9S5k0LgDMs",
				ApproveIcon: "_2JyVuFZOLWUjqdbzBwPR6g",
				approveIcon: "_2JyVuFZOLWUjqdbzBwPR6g",
				BlockIcon: "S8b8Yo036GTbrkyvUQd8e",
				blockIcon: "S8b8Yo036GTbrkyvUQd8e",
				DownvoteIcon: "_29Fl5NT6hxjQEnk1kg1TUU",
				downvoteIcon: "_29Fl5NT6hxjQEnk1kg1TUU",
				EditIcon: "_1bFrIUIdQS59m5Pn01k2I3",
				editIcon: "_1bFrIUIdQS59m5Pn01k2I3",
				FlagIcon: "_3LxukrMhIXqML7pIh5l-fN",
				flagIcon: "_3LxukrMhIXqML7pIh5l-fN",
				ModeratorIcon: "xrWHOyX20Zy5xOlGGP_2",
				moderatorIcon: "xrWHOyX20Zy5xOlGGP_2",
				RemoveIcon: "_2sH27wIi4tppeKb5B6UnRW",
				removeIcon: "_2sH27wIi4tppeKb5B6UnRW",
				ReplyIcon: "_1XMtwTRpHk0MNBSROUHP2_",
				replyIcon: "_1XMtwTRpHk0MNBSROUHP2_",
				SpamIcon: "_2iHziOFo3f_b8q-S6rc5Hi",
				spamIcon: "_2iHziOFo3f_b8q-S6rc5Hi",
				TrashIcon: "_2R0GrSuMRMLMSJp_ywgPjV",
				trashIcon: "_2R0GrSuMRMLMSJp_ywgPjV",
				UnblockIcon: "_2rGz-X_zA5eOVVA5chLI2Z",
				unblockIcon: "_2rGz-X_zA5eOVVA5chLI2Z",
				UpvoteIcon: "_1dn9YTpIZ2T7OOpkttHd9t",
				upvoteIcon: "_1dn9YTpIZ2T7OOpkttHd9t",
				HorizontalVotes: "_2yG0P58-KJBPnUcq26Kxt2",
				horizontalVotes: "_2yG0P58-KJBPnUcq26Kxt2"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/v2/ReactionButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoomojiWrapper: "_1q-vh271mWtdGG9sjc7Cr-"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_2X0J8YdXfokev-v3ud5t_y",
				livestreaming: "_3TQYNFWpPss8xjmKrBFT0K",
				innerWrapper: "_3-tpsxD8ZAB0Q7gVbzdZF6",
				verticalBar: "JbHijELz1zmFvP0YJ1YuE",
				"menu-item": "_19Oknc--43y-15yu9_cXvM",
				menuItem: "_19Oknc--43y-15yu9_cXvM",
				suppressBackgroundOnHover: "_2AF2JyX_RCyCbahFEfhD60",
				icon: "_2c4Vwo7oqlN6Uy7jE8vOMG",
				"dropdown-menu": "_5-qWgdQX88_8RpqBUS2Hk",
				dropdownMenu: "_5-qWgdQX88_8RpqBUS2Hk",
				"dropdown-menu-item": "Yxh6i1JK2Fa0erIglDupg",
				dropdownMenuItem: "Yxh6i1JK2Fa0erIglDupg",
				"dropdown-icon": "p2X8ezHA9FBKN1J4cCbfg",
				dropdownIcon: "p2X8ezHA9FBKN1J4cCbfg"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less": function(e, t, n) {
			e.exports = {
				reactionAwardButton: "TXD4m5ZBUop_xyAm6omz3",
				darkMode: "_-0Tzfp-HQlTHeER4GQzTv",
				activeReactionButton: "eRGv3QC2w3Mtdcsf01V-T",
				countText: "_1CQlN5JJnMpgUtWIqhiHHO",
				snoomoji: "_1ndqm7wea-c0WM6sHvkPKM"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, n) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v1/index.m.less": function(e, t, n) {
			e.exports = {
				Menu: "_2D1wKiUYeveEDBPI0HHp6X",
				menu: "_2D1wKiUYeveEDBPI0HHp6X",
				CommentWrapper: "_10fd3obrlCj1zux-3Xj7vT",
				commentWrapper: "_10fd3obrlCj1zux-3Xj7vT",
				CommentReadMoreButton: "ajW-w9YltMIcD2oUK4wqX",
				commentReadMoreButton: "ajW-w9YltMIcD2oUK4wqX",
				SystemMessageWrapper: "_2VgjauG0vTccJDkiDX7gY9",
				systemMessageWrapper: "_2VgjauG0vTccJDkiDX7gY9",
				LivestreamingCommentWrapper: "_1F1WlzOb5NyTnFYLmgMC2N",
				livestreamingCommentWrapper: "_1F1WlzOb5NyTnFYLmgMC2N",
				livestreamingTimeStamp: "_2w_i8f5hIJwS6fDKeKeFQQ",
				HighlightTarget: "_36AcNiuVTxDg9azQinmNmG",
				highlightTarget: "_36AcNiuVTxDg9azQinmNmG",
				Time: "_1VxgSc7BnjNloaqS8_izfk",
				time: "_1VxgSc7BnjNloaqS8_izfk",
				ErrorText: "_2YgNI6jD-3GvvUBB3YtqU",
				errorText: "_2YgNI6jD-3GvvUBB3YtqU",
				RichTextJson: "NaMqLT6atm8Fw7wuVMEHK",
				richTextJson: "NaMqLT6atm8Fw7wuVMEHK",
				Livestreaming: "_9Xm0gli-Fwmi4qPqGik0C",
				livestreaming: "_9Xm0gli-Fwmi4qPqGik0C",
				TopMeta: "_3MsWUaCWqk4IBPrUQI0f1C",
				topMeta: "_3MsWUaCWqk4IBPrUQI0f1C",
				ChatIcon: "_3iIryzjeUEunWH_iFdY9su",
				chatIcon: "_3iIryzjeUEunWH_iFdY9su",
				Reply: "VSV9_VjJjg4kollzoF1tY",
				reply: "VSV9_VjJjg4kollzoF1tY",
				CommentTruncated: "_3CqFSg_s0YV39PECtobRnC",
				commentTruncated: "_3CqFSg_s0YV39PECtobRnC",
				CommentExpanded: "_2vrvGrYMpNAYdTLP7EzrPl",
				commentExpanded: "_2vrvGrYMpNAYdTLP7EzrPl",
				TruncatedVotesButton: "_1Eh8q2_z0x8QuNXjVNawHy",
				truncatedVotesButton: "_1Eh8q2_z0x8QuNXjVNawHy",
				DeletedComment: "_2Lbp-A5wH4vIxd63-SDxgH",
				deletedComment: "_2Lbp-A5wH4vIxd63-SDxgH"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/AwardsHovercard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_8Z1ljGP8NMgcQ6HiIU8BL",
				header: "_2JMq2sJfE8R1mD7hmnXvLF",
				title: "_2MMfIVVy6Y_AevoKnTKJic",
				closeIcon: "_6Ze541UF7OKb99GvJBdLj",
				"awards-list": "lBs2O5z8E3z3e0hSoLgSN",
				awardsList: "lBs2O5z8E3z3e0hSoLgSN",
				award: "_1EBnuCQ7rKpDbE5RQG-nSR",
				awardIcon: "_1lHgKhQjm2kEJNPMj3Kmsy",
				giveAwardButton: "_3V8ENzdR3Kl7lqnhxT9FoM"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_2uU7u484E-m3dz3sKEOxzw",
				awarded: "_2Wi-fP85nlQ2PN90Xl61wv",
				awardIcon: "_3FFkpDU9h2yRx3b7Pb_lLO",
				countText: "_2jensSxKzRapkf1m-pZYa",
				awardsTooltip: "_1KkHuZoxTcHkfsyTvbkeFD"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "VHAqLb7yUTVfkYgIR5MRQ",
				label: "eQxORSmlK2VUQrBjUlswY"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/v2/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_1QG_thA8DgRnt_AjQOfeRl",
				container: "_1AId_LMcCQuz86cvDA7jK6",
				hasError: "snUCoKlyWrZs-nw9BQXoA",
				hover: "_2MhoQ_mMNm54FiSxP8-Z_G",
				selectedForReply: "_1WhkzKgTj0oHJnKGMt2x5L",
				livestreaming: "_1gi7LkGMNm9HZkuRS0Je8P",
				readMoreButton: "_3QKQ9dcvz5zJAsWW4-Rshi",
				comment: "P3lKuDiuqqPn9pX4xOWT-",
				systemMessageComment: "_2FabxJps3ogPvmC-ptWBrL",
				commentBody: "_11nl5EjPfY1ghzfpJ8TztD",
				expanded: "_3VNpZeu_egQQx3RA_JgGX_",
				timestamp: "_3bETRAp-IiaudhHu3ztI7b",
				highlighted: "_3yBOjQrSGuGRL2ocfQeZlR",
				errorText: "_3KMNYDuiGdrHAb6C7x1654",
				richTextJson: "_208xMgGZZ3YUEYmLFffDJl",
				TopMeta: "ZDHHulqkPjwlT2-HC1hd0",
				topMeta: "ZDHHulqkPjwlT2-HC1hd0",
				avatar: "kXw14-_UbsEXbYzEMMKjh",
				icon: "_3bGpVwL699bZAw950J4QKC",
				replyWrapper: "_1ynXMY9Mxs-wjpOpZwSFxU",
				reactions: "_1ian-9D_TIro-y2s-Z_XFc",
				error: "_1rK5d-JN2zJE-uAeKNDDF5",
				retryButton: "_3QRoS-g0d2u1LNCDK_TNqj"
			}
		},
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentsChat/index.m.less": function(e, t, n) {
			e.exports = {
				EmbeddedLiveChatScroller: "_1P3gVo4Td8aVzo9L1DXujb",
				embeddedLiveChatScroller: "_1P3gVo4Td8aVzo9L1DXujb"
			}
		},
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return ts
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/debounce.js"),
				s = n.n(o),
				a = n("./node_modules/lodash/last.js"),
				r = n.n(a),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/setInterval/index.ts"),
				h = n("./src/lib/timeAgo/index.ts"),
				b = n("./src/realtime/GQLSubscription/async.tsx"),
				C = n("./src/reddit/actions/blockedRedditors.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				g = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./node_modules/lodash/first.js"),
				x = n.n(f),
				E = n("./node_modules/lodash/isArray.js"),
				_ = n.n(E),
				k = n("./src/reddit/helpers/isComment.ts"),
				I = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/Vote/index.ts");
			const T = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = N(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(I.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							authorIconImage: e.author_icon_img,
							authorIconIsDefault: e.author_is_default_icon,
							authorIconIsNSFW: e.author_is_nsfw_icon,
							authorSnoovatarImage: e.author_snoovatar_img,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedReasonCode: e.collapsed_reason_code,
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: M(n),
							id: e.name,
							isAdmin: n === O.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === O.e.Submitter,
							isMod: n === O.e.Moderator,
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
								rteMode: w.i.RICH_TEXT
							},
							parentId: e.parent_id && Object(k.a)(e.parent_id) ? e.parent_id : null,
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
							voteState: j.a.notVoted,
							...t || {}
						}
					}
				},
				M = e => {
					switch (e) {
						case O.e.Admin:
							return u.H.ADMIN;
						case O.e.Moderator:
							return u.H.MODERATOR;
						case O.e.Alumni:
							return u.H.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				N = e => x()((e || []).filter(e => _()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || O.e.None;
			const L = (e, t, n) => {
				const o = {
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
					} = n;
				if (s && l) {
					if (l === y.f.Richtext) {
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
					if (l === y.f.Text) {
						if (!c) return o;
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
			var R = n("./src/lib/env/index.ts");
			const A = new Map,
				S = e => e,
				P = new Set;
			var B;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(B || (B = {}));
			const D = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				F = (e, t) => {
					const n = S(t),
						o = A.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				U = (e, t, n, o) => {
					const s = S(t),
						a = A.get(s);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					A.set(s, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...D
						}
					}), r.socket.addEventListener("message", W.bind(null, o)), r.socket.addEventListener("close", H.bind(null, s, o)), r.socket.addEventListener("error", V.bind(null, s)), window && window.addEventListener("beforeunload", F.bind(null, e, t))
				},
				H = (e, t, n) => {
					const o = A.get(e);
					o && (o.isClosePlanned ? A.delete(e) : K(e, t))
				},
				K = (e, t) => {
					const n = A.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: s,
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: c,
						url: d
					} = n;
					if (A.delete(e), s < r && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, s),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							l = {
								...n.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							U(d, c, l, t)
						}, i), Object(R.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				W = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(R.a)() && console.error(t)
					}
				},
				V = (e, t) => {
					const n = A.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? A.delete(e) : Object(R.a)() && console.error(t)
				};
			var q = n("./src/reddit/selectors/comments.ts"),
				z = n("./src/reddit/selectors/commentSelector.ts"),
				G = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = n("./src/reddit/actions/comment/websocket/constants.ts");
			const J = Object(g.a)(Q.b),
				X = Object(g.a)(Q.c),
				Z = Object(g.a)(Q.a),
				Y = Object(g.a)(Q.d),
				$ = {},
				ee = (e, t, n, o) => async (s, a) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: o,
							uniqueId: s
						} = e;
						P.has(s) ? t() : (P.add(s), setTimeout(() => {
							P.delete(s), U(o, s, {
								...D
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case B.NEW_COMMENT: {
									const n = t.payload.name,
										r = T(t.payload),
										i = a(),
										c = n && Object(z.b)(i, {
											commentId: n
										}),
										d = !(!n || !$[n]);
									if (r && !d) {
										const n = L(0, o, t.payload),
											a = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(q.w)(i, {
												commentsPageKey: e
											});
											s(J({
												authorFlair: n,
												comment: r,
												commentsPageKey: e,
												headCommentId: t,
												numComments: a
											}))
										} else s(X({
											authorFlair: n,
											comment: r,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case B.UPDATE_COMMENT: {
									const n = t.payload.name,
										r = a(),
										i = n && Object(z.b)(r, {
											commentId: n
										}),
										c = T(t.payload);
									if (i && c) {
										const n = L(0, o, t.payload),
											a = t.payload.total_comment_count;
										s(X({
											authorFlair: n,
											comment: c,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case B.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										o = t.payload.score,
										r = a(),
										i = Object(z.b)(r, {
											commentId: n
										});
									i && s(X({
										comment: {
											...i,
											score: o
										},
										commentsPageKey: e
									}));
									break
								}
								case B.DELETE_COMMENT: {
									const e = t.payload.name,
										n = a(),
										o = Object(z.b)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s(Z({
										id: e
									})) : $[e] = B.DELETE_COMMENT;
									break
								}
								case B.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = a(),
										r = Object(z.b)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (r && r.authorId),
										c = !!e && !!Object(G.m)(o, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || i || c ? $[n] = B.REMOVE_COMMENT : s(Z({
										id: n
									}));
									break
								}
								case B.USER_JOIN: {
									const n = T(t.payload, {
											isSystem: !0
										}),
										o = !0;
									n && s(Y({
										comment: n,
										commentsPageKey: e,
										isChatSort: o
									}));
									break
								}
							}
						}
					})
				};
			var te = n("./src/reddit/actions/pages/comments.ts"),
				ne = n("./node_modules/fbt/lib/FbtPublic.js"),
				oe = n("./node_modules/uuid/v4.js"),
				se = n.n(oe),
				ae = n("./src/realtime/connection.ts");
			var re = {
					publish: n("./node_modules/graphql-tag/lib/index.js").a`
    mutation Mutation($input: PublishInput!) {
      publish(input: $input) {
        ok
      }
    }
  `
				},
				ie = n("./src/reddit/actions/login.ts"),
				ce = n("./src/reddit/actions/reactionAwards/constants.ts"),
				de = n("./src/reddit/actions/toaster.ts"),
				le = n("./src/reddit/endpoints/awards/index.ts"),
				me = n("./src/lib/makeGqlRequest/index.ts"),
				ue = n("./src/lib/makeRequest/index.ts"),
				pe = n("./src/reddit/models/Gold/Award.ts"),
				he = n("./src/redditGQL/operations/AvailableAwards.json");
			var be = n("./src/reddit/models/Toast/index.ts"),
				Ce = n("./src/reddit/selectors/communityAwards.ts"),
				ve = n("./src/reddit/selectors/experiments/chat.ts"),
				ge = n("./src/reddit/selectors/gold/awardIcon.ts"),
				fe = n("./src/lib/isDefined.ts");
			const xe = e => "chat_reaction_upvote" === e.id,
				Ee = (e, t) => {
					var n;
					return (null !== (n = e.awards.chatReactions.availability[t]) && void 0 !== n ? n : []).map(t => Object(Ce.a)(e, t)).filter(fe.a)
				},
				_e = Object(l.a)((e, t) => Ee(e, t.subredditId), (e, t) => {
					var n;
					return Object.keys(null !== (n = t.awardCountsById) && void 0 !== n ? n : {}).map(n => {
						var o, s;
						const a = Object(Ce.a)(e, n),
							r = null !== (s = null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n]) && void 0 !== s ? s : 0;
						if (a && a.awardSubType === pe.d.ChatReaction && !(r <= 0)) return {
							award: a,
							total: r
						}
					}).filter(fe.a)
				}, (e, t) => {
					const n = (e => {
						const t = e.reduce((e, t, n) => ({
								...e,
								[t.id]: n
							}), {}),
							n = e.length;
						return (e, o) => {
							var s, a;
							return (null !== (s = t[e.award.id]) && void 0 !== s ? s : n) - (null !== (a = t[o.award.id]) && void 0 !== a ? a : n)
						}
					})(e);
					return t.slice().sort(n)
				}),
				ke = (e, t, n) => {
					var o, s;
					return !!(null === (s = null === (o = e.awards.chatReactions.pending) || void 0 === o ? void 0 : o[n]) || void 0 === s ? void 0 : s[t])
				};
			var Ie = n("./src/reddit/selectors/user.ts");
			const Oe = Object(g.a)(ce.c),
				ye = Object(g.a)(ce.b),
				we = Object(g.a)(ce.a),
				je = Object(g.a)(ce.e),
				Te = Object(g.a)(ce.f),
				Me = Object(g.a)(ce.d),
				Ne = Object(g.a)(ce.h),
				Le = Object(g.a)(ce.i),
				Re = Object(g.a)(ce.g),
				Ae = Object(g.a)(ce.j),
				Se = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					t(Oe());
					try {
						const n = await (async (e, t) => {
							const n = await Object(me.a)(e, {
								...he,
								variables: {
									subredditId: t,
									subTypes: [pe.d.ChatReaction]
								}
							});
							if (!Object(ue.c)(n)) throw n.error;
							return n.body.data.availableAwards
						})(s(), e);
						t(ye({
							subredditId: e,
							availableAwards: n
						}))
					} catch (a) {
						t(we(a))
					}
				}, Pe = async (e, t) => {
					let {
						awardId: n,
						commentId: o,
						operation: s
					} = t;
					var a;
					const r = Object(z.b)(e, {
						commentId: o
					});
					if (!r) return;
					const i = Object(Ce.a)(e, n),
						c = Object(Ie.i)(e);
					return Object(ae.a)(null === (a = e.user.session) || void 0 === a ? void 0 : a.accessToken).mutate({
						mutation: re.publish,
						variables: {
							input: {
								channel: {
									category: "COMMENT_REACTIONS",
									teamOwner: "CHAT",
									postID: r.postId
								},
								LiveChatReactionMessageData: {
									actionTaken: s,
									userID: c,
									reaction: {
										id: n,
										iconURL: Object(ge.c)({
											award: i,
											size: 64,
											prefersReducedMotion: !1,
											postOrComment: r
										})
									},
									commentID: o
								}
							}
						}
					})
				}, Be = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const a = await Object(le.a)(s(), {
						thingId: e
					});
					t(Object(v.e)(a))
				}, De = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const a = n();
					if (!Object(Ie.Q)(a)) return t(Object(ie.openLoginModal)());
					if (!ke(a, e.awardId, e.commentId)) {
						t(je(e));
						try {
							const {
								awardId: n,
								commentId: o
							} = e, r = se()(), i = Object(Ce.a)(a, n), c = Object(ve.f)(a);
							if ((e => xe(e) || (e => "chat_reaction_downvote" === e.id)(e))(i)) {
								const e = xe(i) ? "chat_reaction_downvote" : "chat_reaction_upvote",
									n = ((e, t, n) => {
										var o, s;
										const a = Object(z.b)(e, {
											commentId: n
										});
										return null === (s = null === (o = null == a ? void 0 : a.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t]) || void 0 === s ? void 0 : s[0]
									})(a, e, o);
								n && await t(Fe({
									awardId: e,
									awardingId: n,
									commentId: o
								}, {
									suppressCommentDataRefresh: !0
								}))
							}
							await Object(le.b)(s(), {
								awardId: n,
								targetId: o,
								isAnonymous: !1,
								nonce: r
							}), c || await Pe(a, {
								awardId: n,
								commentId: o,
								operation: pe.g.Add
							}), await t(Be(o)), t(Te({
								awardId: n,
								commentId: o
							}))
						} catch (r) {
							t(Me({
								...e,
								error: r
							})), t(Object(de.f)({
								kind: be.b.Error,
								duration: de.a,
								text: ne.fbt._("An error has occurred while giving a reaction. Please try again.", null, {
									hk: "2JvsOk"
								})
							}))
						}
					}
				}, Fe = (e, t) => async (n, o, s) => {
					let {
						gqlContext: a
					} = s;
					const r = o();
					if (!Object(Ie.Q)(r)) return n(Object(ie.openLoginModal)());
					if (!ke(r, e.awardId, e.commentId)) {
						n(Ne(e));
						try {
							const {
								awardId: o,
								awardingId: s,
								commentId: i
							} = e, c = Object(ve.f)(r);
							await Object(le.c)(a(), {
								awardingId: s
							}), c || await Pe(r, {
								awardId: o,
								commentId: i,
								operation: pe.g.Remove
							}), !(null == t ? void 0 : t.suppressCommentDataRefresh) && await n(Be(e.commentId)), n(Le({
								awardId: o,
								awardingId: s,
								commentId: i
							}))
						} catch (i) {
							n(Re({
								...e,
								error: i
							})), n(Object(de.f)({
								kind: be.b.Error,
								duration: de.a,
								text: ne.fbt._("An error has occurred while removing a reaction. Please try again.", null, {
									hk: "4kopxI"
								})
							}))
						}
					}
				};
			var Ue = n("./src/reddit/components/Comments/States/index.tsx"),
				He = n("./node_modules/lodash/defer.js"),
				Ke = n.n(He),
				We = n("./src/lib/lessComponent.tsx"),
				Ve = n("./src/lib/makeDraftKey/index.ts"),
				qe = n("./src/lib/objectSelector/index.ts"),
				ze = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ge = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Qe = n("./src/reddit/helpers/awards/message.ts"),
				Je = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Xe = n("./src/reddit/components/RichTextJson/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Star/index.tsx"),
				$e = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				et = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				tt = n.n(et);
			const nt = Object(qe.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				ot = e => {
					const {
						award: t,
						comment: n,
						iconUrl: o
					} = e;
					let s = "",
						a = !0,
						r = !1;
					return t.coinPrice < Qe.a ? (s = tt.a.silverTierAwardComment, a = !1) : t.coinPrice < Qe.b ? s = tt.a.goldTierAwardComment : (s = tt.a.platinumTierAwardComment, r = !0), c.a.createElement("div", {
						className: Object(m.a)(tt.a.awardComment, s)
					}, c.a.createElement("div", {
						className: tt.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ye.a, {
						className: Object(m.a)(tt.a.backgroundAnimation, tt.a.backgroundStar)
					}), c.a.createElement($e.a, {
						className: Object(m.a)(tt.a.backgroundAnimation, tt.a.backgroundStar, tt.a.backgroundStar2)
					})), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ze.a, {
						className: Object(m.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleBottomLeft)
					}), c.a.createElement(Ze.a, {
						className: Object(m.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleTopRight)
					}), c.a.createElement(Ze.a, {
						className: Object(m.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: o
					})), c.a.createElement(Xe.b, {
						className: tt.a.awardCommentText,
						content: Object(Je.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: nt(e),
						useExplicitTextColor: !0
					}))
				};
			var st = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				at = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				rt = n.n(at);
			var it = e => {
					let {
						commentCount: t,
						isLivestreaming: n,
						onClick: o
					} = e;
					const s = Object(m.a)(rt.a.CollapsedComment, {
						[rt.a.LivestreamingWrapper]: n
					});
					return c.a.createElement("div", {
						className: s,
						onClick: o
					}, ne.fbt._("collapsed {collapsed message} (may be sensitive)", [ne.fbt._param("collapsed message", ne.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [ne.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				ct = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.tsx"),
				dt = n("./src/reddit/actions/comment/authoring.ts"),
				lt = n("./src/reddit/actions/comment/moderation.ts"),
				mt = n("./src/reddit/actions/modal.ts"),
				ut = n("./src/reddit/actions/reportFlow/index.ts"),
				pt = n("./src/reddit/actions/tooltip.ts"),
				ht = n("./src/reddit/actions/userBlocks.ts"),
				bt = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Ct = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				vt = n("./src/reddit/components/CommentsChat/Comment/Menu/v1/index.m.less"),
				gt = n.n(vt);

			function ft() {
				return (ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const xt = We.a.button("MenuItem", gt.a),
				Et = We.a.a("MenuItemPermalink", gt.a),
				_t = e => {
					let {
						children: t,
						comment: n,
						onClick: o,
						onHideTooltip: s,
						onShowTooltip: a,
						sendEvent: r,
						tooltipId: i,
						tooltipText: d,
						trackingNoun: l
					} = e;
					return c.a.createElement(xt, {
						id: i,
						onMouseEnter: a.bind(void 0, i),
						onMouseLeave: s.bind(void 0, i),
						onClick: e => {
							o(e), l && r(Object(Ct.f)(l, n.id))
						}
					}, t, c.a.createElement(bt.c, {
						tooltipId: i
					}, d))
				},
				kt = e => c.a.createElement(_t, ft({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(Et, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var It = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Ot = n("./src/reddit/components/HumanDate/index.tsx"),
				yt = n("./src/reddit/components/ModModeReports/helpers.ts"),
				wt = n("./src/reddit/components/ReportFlow/index.tsx"),
				jt = n("./src/reddit/components/ReportFlow/new.tsx"),
				Tt = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Mt = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Nt = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				Lt = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				Rt = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				At = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				St = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Pt = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				Bt = n("./src/reddit/icons/svgs/Spam/index.tsx"),
				Dt = n("./src/reddit/models/PostDraft/index.ts"),
				Ft = n("./src/reddit/selectors/activeModalId.ts"),
				Ut = n("./src/reddit/selectors/blockedRedditors.ts"),
				Ht = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts");

			function Kt() {
				return (Kt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Wt = We.a.wrapped(Rt.a, "BlockIcon", gt.a),
				Vt = We.a.wrapped(Lt.a, "FlagIcon", gt.a),
				qt = We.a.wrapped(Nt.a, "EditIcon", gt.a),
				zt = We.a.wrapped(Mt.a, "ApproveIcon", gt.a),
				Gt = We.a.wrapped(Pt.a, "ReplyIcon", gt.a),
				Qt = We.a.wrapped(St.a, "RemoveIcon", gt.a),
				Jt = We.a.wrapped(Bt.a, "SpamIcon", gt.a),
				Xt = We.a.wrapped(At.a, "ModeratorIcon", gt.a),
				Zt = e => (t, n) => {
					let {
						comment: o
					} = n;
					return `${e}${o.id}`
				},
				Yt = e => `Comment-${e}--Modal--DeleteComment`,
				$t = Object(l.c)({
					currentUser: Ie.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(G.m)(e, {
							postId: n.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ut.c)(e, n.authorId)
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						var o, s;
						return (null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === n.id
					},
					approveTooltipId: Zt("CommentChatPost--Approve--"),
					blockTooltipId: Zt("CommentChatPost--Block--"),
					createTooltipId: Zt("CommentChatPost--Create--"),
					editTooltipId: Zt("CommentChatPost--Edit--"),
					replyTooltipId: Zt("CommentChatPost--Reply--"),
					reportTooltipId: Zt("CommentChatPost--Report--"),
					upvoteTooltipId: Zt("CommentChatPost--Upvote--"),
					downvoteTooltipId: Zt("CommentChatPost--Downvote--"),
					distinguishTooltipId: Zt("CommentChatPost--Distinguish--"),
					spamTooltipId: Zt("CommentChatPost--Spam--"),
					removeTooltipId: Zt("CommentChatPost--Remove--"),
					deleteTooltipId: Zt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ft.a)(e) === Yt(n.id)
					},
					reportingRevampEnabled: Ht.a
				});
			var en = Object(d.b)($t, (e, t) => {
					let {
						comment: n,
						commentsPageKey: o
					} = t;
					return {
						onReplyClick: () => e(Object(dt.s)({
							parentCommentId: n.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						onReportClick: t => {
							t.stopPropagation(), e(Object(ut.c)(n.id, !1))
						},
						onHideTooltip: () => e(Object(pt.i)()),
						onShowTooltip: t => e(Object(pt.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = n.media && n.media.rteMode;
							o && e(Object(dt.e)({
								commentId: n.id,
								draftKey: Object(Ve.a)(Dt.c.edit, n.id),
								text: n.bodyMD || "",
								commentMode: t,
								commentsPageKey: o
							}))
						},
						onApproveClick: () => e(Object(lt.a)(n.id)),
						onBlockClick: () => e(Object(ht.h)(n.author)),
						onUnblockClick: () => e(Object(ht.g)(n.author)),
						onUpvoteClick: () => e(Object(v.s)(n.id)),
						onDownvoteClick: () => e(Object(v.k)(n.id)),
						onDistinguishClick: t => e(Object(lt.b)(n.id, t)),
						onSpamClick: () => e(Object(lt.e)(n.id, !0)),
						onRemoveClick: () => e(Object(lt.e)(n.id, !1)),
						deleteComment: () => o && e(Object(dt.i)(n.id, n.postId)),
						onDeleteClick: () => e(Object(mt.i)(Yt(n.id))),
						toggleDeleteCommentModal: () => e(Object(mt.i)(Yt(n.id)))
					}
				})(Object(Tt.c)(e => {
					const {
						comment: t,
						className: n,
						createTooltipId: o,
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
						onEditClick: g,
						onHideTooltip: f,
						onRemoveClick: x,
						onReplyClick: E,
						onReportClick: _,
						onShowTooltip: k,
						onSpamClick: I,
						onUnblockClick: O,
						onDistinguishClick: y,
						reportFlowIsOpen: w,
						replyTooltipId: j,
						reportTooltipId: T,
						approveTooltipId: M,
						blockTooltipId: N,
						removeTooltipId: L,
						distinguishTooltipId: R,
						sendEvent: A,
						spamTooltipId: S,
						toggleDeleteCommentModal: P,
						timestampUpdateTrigger: B,
						showTime: D
					} = e, F = !!s && s.id === t.authorId, U = Object(yt.b)(t), H = t.isApproved && U, K = !t.bannedBy || t.bannedBy === u.l, W = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: k,
						sendEvent: A
					}, V = t.isMod;
					return c.a.createElement("div", {
						className: Object(m.a)(gt.a.container, n)
					}, c.a.createElement("div", {
						className: Object(m.a)(gt.a.Menu, {
							[gt.a.Livestreaming]: p
						})
					}, (t.bannedBy || U) && h && c.a.createElement(_t, Kt({
						onClick: b,
						tooltipId: M,
						tooltipText: H ? ne.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : ne.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(zt, null)), !t.isLocked && c.a.createElement(_t, Kt({
						onClick: E,
						tooltipId: j,
						tooltipText: ne.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(Gt, null)), h && F && c.a.createElement(_t, Kt({
						onClick: () => y(V ? u.H.NONE : u.H.MODERATOR),
						tooltipId: R,
						tooltipText: V ? ne.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : ne.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Xt, null)), h && K && c.a.createElement(_t, Kt({
						onClick: I,
						tooltipId: S,
						tooltipText: ne.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Jt, null)), !F && c.a.createElement(_t, Kt({
						onClick: _,
						tooltipId: T,
						tooltipText: ne.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Vt, null)), w && (() => e.reportingRevampEnabled ? c.a.createElement(jt.a, {
						withOverlay: !0,
						overlayCustomStyles: wt.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(wt.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: wt.b,
						postId: t.postId
					}))(), F && !p && c.a.createElement(_t, Kt({
						onClick: g,
						tooltipId: i,
						tooltipText: ne.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, W), c.a.createElement(qt, null)), h && K ? c.a.createElement(_t, Kt({
						onClick: x,
						tooltipId: L,
						tooltipText: t.bannedBy === u.l ? ne.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : ne.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === u.l ? "confirm_remove" : "remove"
					}, W), c.a.createElement(Qt, null)) : F && c.a.createElement(_t, Kt({
						onClick: v,
						tooltipId: r,
						tooltipText: ne.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(Qt, null)), l && c.a.createElement(It.a, {
						actionText: ne.fbt._("Delete", null, {
							hk: "3j0q3Z"
						}),
						cancelActionText: ne.fbt._("Keep", null, {
							hk: "3LTfYE"
						}),
						headerText: ne.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: ne.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: a,
						toggleModal: P,
						withOverlay: !0
					}), !!s && !F && c.a.createElement(_t, Kt({
						onClick: () => d ? O() : C(),
						tooltipId: N,
						tooltipText: d ? ne.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : ne.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, W), c.a.createElement(Wt, null))), D && c.a.createElement(kt, Kt({}, e, {
						tooltipId: o,
						tooltipText: c.a.createElement(Ot.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: B
					}), c.a.createElement(Ot.d, {
						seconds: t.created
					})))
				})),
				tn = n("./src/reddit/actions/gold/modals.ts"),
				nn = n("./src/reddit/helpers/correlationIdTracker.ts"),
				on = n("./src/reddit/hooks/useTracking.ts"),
				sn = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				an = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				rn = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				cn = n("./src/reddit/icons/svgs/Reply2/index.tsx"),
				dn = n("./src/reddit/helpers/chat/isEmbeddedLiveChat.ts"),
				ln = n("./src/reddit/hooks/usePageLayer.ts");
			var mn = () => {
					const e = Object(ln.a)();
					return Object(i.useMemo)(() => !!e && Object(dn.b)(e), [e]) ? {
						container: window.document.body,
						alwaysHandleOverflow: !0
					} : null
				},
				un = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less"),
				pn = n.n(un);

			function hn() {
				return (hn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const bn = e => {
				let {
					children: t,
					commentId: n,
					onClick: o,
					tooltipId: s,
					tooltipText: a,
					trackingNoun: r,
					suppressBackgroundOnHover: i = !1,
					...l
				} = e;
				const u = Object(d.d)(),
					p = Object(on.a)(),
					h = mn();
				return c.a.createElement("button", hn({}, l, {
					id: s,
					className: Object(m.a)(pn.a.menuItem, {
						[pn.a.suppressBackgroundOnHover]: i
					}),
					onMouseEnter: () => {
						u(Object(pt.f)({
							tooltipId: s
						}))
					},
					onMouseLeave: () => {
						u(Object(pt.i)())
					},
					onClick: e => {
						null == o || o(e), r && n && p(Object(Ct.f)(r, n))
					}
				}), t, c.a.createElement(bt.c, hn({
					tooltipId: s
				}, h), a))
			};
			var Cn = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				vn = n("./src/reddit/controls/Dropdown/index.tsx"),
				gn = n("./src/reddit/selectors/tooltip.ts");

			function fn() {
				return (fn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const xn = Object(Cn.a)(vn.a),
				En = e => {
					let {
						dropdownId: t,
						icon: n,
						children: o,
						onClick: s
					} = e;
					const a = Object(d.d)(),
						r = mn(),
						i = Object(d.e)(e => Object(gn.b)(t)(e)),
						l = c.a.useCallback(() => {
							a(Object(pt.h)({
								tooltipId: t
							})), null == s || s()
						}, [a, t, s]);
					return c.a.createElement("button", {
						id: t,
						className: pn.a.menuItem,
						onClick: l
					}, n, c.a.createElement(xn, fn({
						className: pn.a.dropdownMenu,
						isOpen: i,
						tooltipId: t
					}, r), o))
				};
			var _n = n("./src/reddit/controls/Dropdown/Row.tsx"),
				kn = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				In = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				On = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				yn = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				wn = n("./src/reddit/icons/svgs/Distinguish/index.tsx");
			const jn = e => {
				let {
					comment: t,
					isCommentAuthor: n = !1
				} = e;
				const o = t.id,
					s = Object(yt.b)(t),
					a = t.isApproved && s,
					r = t.bannedBy === u.l,
					i = t.isMod,
					l = !n && (!t.bannedBy || r),
					m = Object(d.d)(),
					p = Object(on.a)(),
					h = c.a.useCallback(e => {
						p(Object(Ct.f)(e, o))
					}, [p, o]),
					b = c.a.useCallback(() => {
						m(Object(lt.a)(o)), h("approve")
					}, [m, h, o]),
					C = c.a.useCallback(() => {
						const e = r ? "confirm_remove" : "remove";
						m(Object(lt.e)(o, !1)), h(e)
					}, [m, h, o, r]),
					v = c.a.useCallback(() => {
						m(Object(lt.e)(o, !0)), h("spam")
					}, [m, h, o]),
					g = c.a.useCallback(() => {
						m(Object(lt.b)(o, u.H.MODERATOR))
					}, [m, o]),
					f = c.a.useCallback(() => {
						m(Object(lt.b)(o, u.H.NONE))
					}, [m, o]);
				return c.a.createElement(c.a.Fragment, null, n && i && c.a.createElement(_n.b, {
					className: pn.a.dropdownMenuItem,
					displayText: ne.fbt._("Undistinguish as Mod", null, {
						hk: "2ohUEB"
					}),
					onClick: f
				}, c.a.createElement(yn.a, {
					className: pn.a.dropdownIcon
				})), n && !i && c.a.createElement(_n.b, {
					className: pn.a.dropdownMenuItem,
					displayText: ne.fbt._("Distinguish as Mod", null, {
						hk: "jywZz"
					}),
					onClick: g
				}, c.a.createElement(wn.a, {
					className: pn.a.dropdownIcon
				})), (t.bannedBy || s) && c.a.createElement(_n.b, {
					className: pn.a.dropdownMenuItem,
					displayText: a ? ne.fbt._("Reapprove", null, {
						hk: "vlRqn"
					}) : ne.fbt._("Approve", null, {
						hk: "3Vc0Oh"
					}),
					onClick: b
				}, c.a.createElement(kn.a, {
					className: pn.a.dropdownIcon
				})), l && c.a.createElement(_n.b, {
					className: pn.a.dropdownMenuItem,
					displayText: r ? ne.fbt._("Confirm removal", null, {
						hk: "3q7g1J"
					}) : ne.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: C
				}, c.a.createElement(In.a, {
					className: pn.a.dropdownIcon
				})), l && c.a.createElement(_n.b, {
					className: pn.a.dropdownMenuItem,
					displayText: ne.fbt._("Remove as Spam", null, {
						hk: "2bRa8t"
					}),
					onClick: v
				}, c.a.createElement(On.a, {
					className: pn.a.dropdownIcon
				})))
			};
			var Tn = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				Mn = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Nn = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/UserBlock/index.tsx");
			const Rn = e => `Comment-${e}--Modal--DeleteComment`,
				An = e => `CommentChatPost--ModMenu--${e}`,
				Sn = e => `CommentChatPost--OverflowMenu--${e}`,
				Pn = e => {
					let {
						comment: t,
						commentsPageKey: n,
						isLivestreaming: o = !1
					} = e;
					const s = t.id,
						a = Object(d.d)(),
						r = Object(on.a)(),
						i = Object(d.e)(Ie.k),
						l = Object(d.e)(e => Object(Ut.c)(e, t.authorId)),
						m = i && i.id === t.authorId,
						u = c.a.useCallback(e => {
							r(Object(Ct.f)(e, s))
						}, [r, s]),
						p = c.a.useCallback(() => {
							a(Object(ut.c)(s, !1)), u("report")
						}, [a, u, s]),
						h = c.a.useCallback(() => {
							a(Object(mt.i)(Rn(t.id))), u("delete")
						}, [a, u, t]),
						b = c.a.useCallback(() => {
							const e = t.media && t.media.rteMode;
							n && a(Object(dt.e)({
								commentId: t.id,
								draftKey: Object(Ve.a)(Dt.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: e,
								commentsPageKey: n
							})), u("edit")
						}, [a, u, t, n]),
						C = c.a.useCallback(() => {
							a(Object(ht.h)(t.author)), u("block")
						}, [a, u, t]),
						v = c.a.useCallback(() => {
							a(Object(ht.g)(t.author)), u("unblock")
						}, [a, u, t]);
					return c.a.createElement(c.a.Fragment, null, m && !o && c.a.createElement(_n.b, {
						className: pn.a.dropdownMenuItem,
						displayText: ne.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: b
					}, c.a.createElement(Tn.a, {
						className: pn.a.dropdownIcon
					})), m && c.a.createElement(_n.b, {
						className: pn.a.dropdownMenuItem,
						displayText: ne.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						onClick: h
					}, c.a.createElement(Nn.a, {
						className: pn.a.dropdownIcon
					})), !m && c.a.createElement(_n.b, {
						className: pn.a.dropdownMenuItem,
						displayText: ne.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						onClick: p
					}, c.a.createElement(Mn.a, {
						className: pn.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && !l && c.a.createElement(_n.b, {
						className: pn.a.dropdownMenuItem,
						displayText: ne.fbt._("Block", null, {
							hk: "2DpLB7"
						}),
						onClick: C
					}, c.a.createElement(Ln.a, {
						className: pn.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && l && c.a.createElement(_n.b, {
						className: pn.a.dropdownMenuItem,
						displayText: ne.fbt._("Unblock", null, {
							hk: "2WvyIX"
						}),
						onClick: v
					}, c.a.createElement(Ln.a, {
						className: pn.a.dropdownIcon
					})))
				};
			var Bn = n("./src/reddit/selectors/userPrefs.ts"),
				Dn = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/ReactionButton/index.m.less"),
				Fn = n.n(Dn);
			const Un = e => {
					let {
						reaction: t,
						comment: n
					} = e;
					var o, s;
					const a = Object(on.a)(),
						r = Object(d.d)(),
						i = Object(d.e)(Bn.d),
						l = null === (s = null === (o = n.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t.id]) || void 0 === s ? void 0 : s[0];
					return c.a.createElement(bn, {
						commentId: n.id,
						tooltipId: `CommentChatPost--${t.id}${n.id}`,
						tooltipText: t.name,
						suppressBackgroundOnHover: !0,
						onClick: l ? () => {
							l && (r(Fe({
								awardId: t.id,
								awardingId: l,
								commentId: n.id
							})), a(Object(Ct.h)(t.id, n.id, "actions_menu")))
						} : () => {
							r(De({
								awardId: t.id,
								commentId: n.id
							})), a(Object(Ct.g)(t.id, n.id, "actions_menu"))
						}
					}, c.a.createElement("img", {
						className: Fn.a.snoomojiWrapper,
						src: Object(ge.c)({
							award: t,
							postOrComment: n,
							size: 64,
							prefersReducedMotion: i
						}),
						alt: t.name
					}))
				},
				Hn = (e, t) => `CommentChatPost--${e}--${t}`,
				Kn = Object(l.c)({
					availableReactionAwards: (e, t) => {
						let {
							comment: n
						} = t;
						return Ee(e, n.subredditId)
					},
					currentUser: Ie.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(G.m)(e, {
							postId: n.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						var o, s;
						return (null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === n.id
					},
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ft.a)(e) === Rn(n.id)
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ut.c)(e, n.authorId)
					},
					isLivePostCreatorModRoleEnabled: e => Object(ve.h)(e),
					isChatCreateOnlyPerm: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(G.a)(e, {
							postId: n.postId
						})
					}
				});
			var Wn = Object(d.b)(Kn, (e, t) => {
				let {
					comment: n,
					commentsPageKey: o
				} = t;
				return {
					onReplyClick: () => e(Object(dt.s)({
						parentCommentId: n.id,
						commentsPageKey: o,
						singleOpen: !0
					})),
					giveAward: () => {
						const t = Object(nn.d)(nn.a.GildingFlow, !0);
						return e(Object(tn.d)({
							correlationId: t,
							thingId: n.id
						}))
					},
					deleteComment: () => o && e(Object(dt.i)(n.id, n.postId)),
					toggleDeleteCommentModal: () => e(Object(mt.i)(Rn(n.id)))
				}
			})(e => {
				let {
					comment: t,
					commentsPageKey: n,
					className: o,
					currentUser: s,
					deleteComment: a,
					giveAward: r,
					isAuthorBlocked: i,
					isDeleteModalOpen: l,
					isLivestreaming: u,
					isMod: p,
					isChatCreateOnlyPerm: h,
					isLivePostCreatorModRoleEnabled: b,
					onReplyClick: C,
					reportFlowIsOpen: v,
					toggleDeleteCommentModal: g,
					availableReactionAwards: f
				} = e;
				const x = !!s && s.id === t.authorId,
					E = Object(d.e)(e => !u && Object(ve.d)(e)),
					_ = Object(on.a)(),
					k = c.a.useCallback(() => {
						_(Object(Ct.f)("other_options", t.id))
					}, [_, t.id]);
				return c.a.createElement("div", {
					className: Object(m.a)(pn.a.menu, o, {
						[pn.a.livestreaming]: u
					})
				}, E && !!(null == f ? void 0 : f.length) && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: pn.a.innerWrapper
				}, f.map(e => c.a.createElement(Un, {
					key: e.id,
					comment: t,
					reaction: e
				}))), c.a.createElement("div", {
					className: pn.a.verticalBar
				})), c.a.createElement("div", {
					className: pn.a.innerWrapper
				}, !t.isLocked && !i && Boolean(t.authorId) && c.a.createElement(c.a.Fragment, null, c.a.createElement(bn, {
					onClick: C,
					commentId: t.id,
					tooltipId: Hn("Reply", t.id),
					tooltipText: ne.fbt._("Reply", null, {
						hk: "14j3OR"
					}),
					trackingNoun: "reply",
					"data-testid": "comment-reply"
				}, c.a.createElement(cn.a, {
					className: pn.a.icon
				})), E && !x && c.a.createElement(bn, {
					onClick: r,
					commentId: t.id,
					tooltipId: Hn("Award", t.id),
					tooltipText: ne.fbt._("Give Award", null, {
						hk: "3rUq40"
					}),
					trackingNoun: "award",
					"data-testid": "comment-award"
				}, c.a.createElement(sn.a, {
					className: pn.a.icon
				}))), p && !(h && b) && c.a.createElement(En, {
					dropdownId: An(t.id),
					icon: c.a.createElement(an.a, {
						className: pn.a.icon
					})
				}, c.a.createElement(jn, {
					comment: t,
					isCommentAuthor: x
				})), c.a.createElement(En, {
					dropdownId: Sn(t.id),
					icon: c.a.createElement(rn.a, {
						className: pn.a.icon
					}),
					onClick: k
				}, c.a.createElement(Pn, {
					comment: t,
					isLivestreaming: u,
					commentsPageKey: n
				})), v && c.a.createElement(jt.a, {
					withOverlay: !0,
					overlayCustomStyles: wt.b,
					postId: t.postId,
					commentId: t.id
				}), l && c.a.createElement(It.a, {
					actionText: ne.fbt._("Delete", null, {
						hk: "3j0q3Z"
					}),
					cancelActionText: ne.fbt._("Keep", null, {
						hk: "3LTfYE"
					}),
					headerText: ne.fbt._("Delete comment", null, {
						hk: "4uv7tI"
					}),
					modalText: ne.fbt._("Are you sure you want to delete your comment?", null, {
						hk: "227ya0"
					}),
					onConfirm: a,
					toggleModal: g,
					withOverlay: !0
				})))
			});
			const Vn = e => {
				return Object(d.e)(ve.e) ? c.a.createElement(Wn, e) : c.a.createElement(en, e)
			};
			var qn = n("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx"),
				zn = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Gn = n.n(zn);
			const Qn = Object(qe.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var Jn = e => {
					const {
						comment: t
					} = e;
					return void 0 === Qn(e) ? null : c.a.createElement(Xe.b, {
						className: Gn.a.SystemMessageText,
						content: Object(Je.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: Qn(e),
						useExplicitTextColor: !0
					})
				},
				Xn = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Zn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Yn = n("./src/reddit/controls/ErrorText/index.tsx"),
				$n = n("./src/reddit/constants/experiments.ts"),
				eo = n("./src/reddit/helpers/chooseVariant/index.ts");
			const to = e => Object(eo.c)(e, {
					experimentName: $n.Cb,
					experimentEligibilitySelector: eo.a
				}) === $n.yb.Enabled,
				no = (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Object(z.b)(e, {
						commentId: n
					});
					if (o && o.associatedAwardId) return Object(Ce.a)(e, o.associatedAwardId)
				};
			var oo = n("./src/reddit/selectors/poll/index.ts"),
				so = n("./src/reddit/components/CommentsChat/Comment/v1/index.m.less"),
				ao = n.n(so);
			const ro = 250,
				io = 10,
				co = We.a.wrapped(Yn.b, "ErrorText", ao.a),
				lo = We.a.wrapped(ze.a, "TopMeta", ao.a),
				mo = Object(Zn.u)(),
				uo = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return no(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = no(e, {
							commentId: n
						});
						if (o) return Object(ge.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: n
						})
					},
					comment: z.b,
					commentPermalink: q.m,
					errorMsgs: q.I,
					flair: q.e,
					isActive: (e, t) => {
						let {
							commentId: n
						} = t;
						return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
					},
					isEditing: q.z,
					prediction: oo.f,
					subreddit: Zn.r,
					shouldRenderSystemMessages: to
				})),
				po = Object(qe.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class ho extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > ro && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: n
					} = this.state, o = t !== e.isExpanded || n !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && o) {
						const e = this.elemRef.current;
						let n = ro;
						if (t) {
							n = e.scrollHeight + io;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = `${n}px`
					}
				}
				render() {
					const {
						associatedAward: e,
						awardIconUrl: t,
						childrenInfo: n,
						comment: o,
						commentPermalink: s,
						commentsPageKey: a,
						errorMsgs: r,
						flair: i,
						isActive: d,
						isEditing: l,
						isLivestreaming: u,
						postId: p,
						prediction: h,
						renderedInOverlay: b,
						sendEvent: C,
						targetComment: v,
						timestampUpdateTrigger: g,
						addToRefList: f,
						onReplyClick: x,
						shouldRenderSystemMessages: E
					} = this.props, {
						isCollapsed: _,
						isExpanded: k,
						isTruncated: I
					} = this.state;
					if (!o) return null;
					d && Ke()(() => this.elemRef.current && this.elemRef.current.focus()), Ke()(() => this.elemRef && this.elemRef.current && f && f(this.elemRef));
					const O = o.isSystem,
						y = !l && !o.isDeleted && !O,
						w = !!e,
						j = Object(m.a)({
							[ao.a.SystemMessageWrapper]: O && !u && E,
							[ao.a.CommentWrapper]: !u && !O,
							[ao.a.CommentExpanded]: k,
							[ao.a.CommentTruncated]: I,
							[ao.a.HighlightTarget]: v,
							[ao.a.LivestreamingCommentWrapper]: u
						});
					return _ ? c.a.createElement(it, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: v ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: j
					}, l && c.a.createElement(Xn.a, {
						key: "chatCommentsForm",
						isLivestreaming: u,
						postId: p,
						sendEvent: C,
						draftKey: Object(Ve.a)(Dt.c.edit, o.id),
						commentsPageKey: a,
						isEditing: l,
						comment: o
					}), y && c.a.createElement(c.a.Fragment, null, c.a.createElement(lo, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: o,
						commentsPageKey: a,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: u,
						renderedInOverlay: b
					}, c.a.createElement(st.a, {
						className: Object(m.a)(ao.a.ChatIcon, {
							[ao.a.Livestreaming]: u
						}),
						isLivestreaming: u,
						icon: o.profileImage,
						userId: o.authorId,
						isNSFW: o.profileOver18 || o.authorIconIsNSFW
					})), o.parentId && c.a.createElement(qn.a, {
						className: ao.a.Reply,
						commentId: o.parentId,
						onReplyClick: x,
						isLivestreaming: u
					}), u && c.a.createElement("span", {
						className: ao.a.livestreamingTimeStamp
					}, c.a.createElement(Ot.d, {
						seconds: o.created
					})), w && e && u ? c.a.createElement(ot, {
						award: e,
						comment: o,
						iconUrl: t
					}) : h ? c.a.createElement(Ge.a, {
						comment: o,
						prediction: h
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(Xe.b, {
						className: Object(m.a)(ao.a.RichTextJson, {
							[ao.a.Livestreaming]: u
						}),
						content: Object(Je.a)(o),
						rtJsonElementProps: po(this.props),
						useExplicitTextColor: u
					}), c.a.createElement(Vn, {
						className: Object(m.a)(ao.a.Menu, {
							[ao.a.Livestreaming]: u
						}),
						comment: o,
						commentPermalink: s,
						commentsPageKey: a,
						isLivestreaming: u,
						showTime: !u,
						timestampUpdateTrigger: g
					}))), o.isDeleted && c.a.createElement(ct.a, {
						className: Object(m.a)(ao.a.DeletedComment, {
							[ao.a.Livestreaming]: u
						})
					}), y && r && r.map((e, t) => c.a.createElement(co, {
						key: `${t}-${e}`
					}, e)), !l && I && c.a.createElement("button", {
						className: Object(m.a)(ao.a.CommentReadMoreButton, {
							[ao.a.Livestreaming]: u
						}),
						onClick: this.toggleBody
					}, ne.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), O && !u && E && c.a.createElement(Jn, {
						comment: o
					}))
				}
			}
			var bo = mo(uo(ho)),
				Co = n("./src/lib/prettyPrintNumber/index.ts"),
				vo = n("./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less"),
				go = n.n(vo);
			const fo = e => {
				let {
					className: t,
					enforceDarkMode: n,
					comment: o,
					reaction: s
				} = e;
				var a, r, i, l;
				const u = Object(d.d)(),
					p = Object(on.a)(),
					h = Object(d.e)(Bn.d),
					b = null !== (r = null === (a = o.awardingsByCurrentUser) || void 0 === a ? void 0 : a[s.id]) && void 0 !== r ? r : [],
					C = Boolean(b.length);
				return c.a.createElement("button", {
					className: Object(m.a)(t, go.a.reactionAwardButton, {
						[go.a.darkMode]: n,
						[go.a.activeReactionButton]: C
					}),
					onClick: C ? () => {
						u(Fe({
							awardId: s.id,
							awardingId: b[0],
							commentId: o.id
						})), p(Object(Ct.h)(s.id, o.id, "quick_button"))
					} : () => {
						u(De({
							awardId: s.id,
							commentId: o.id
						})), p(Object(Ct.g)(s.id, o.id, "quick_button"))
					}
				}, c.a.createElement("img", {
					className: go.a.snoomoji,
					src: Object(ge.c)({
						award: s,
						postOrComment: o,
						size: 64,
						prefersReducedMotion: h
					}),
					alt: s.name
				}), c.a.createElement("span", {
					className: Object(m.a)(go.a.countText, {
						[go.a.darkMode]: n
					})
				}, Object(Co.b)(null !== (l = null === (i = o.awardCountsById) || void 0 === i ? void 0 : i[s.id]) && void 0 !== l ? l : 0)))
			};
			var xo = n("./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less"),
				Eo = n.n(xo);
			const _o = () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
				className: Eo.a.icon
			}, c.a.createElement(Nn.a, null)), c.a.createElement("span", {
				className: Eo.a.label
			}, ne.fbt._("This message was deleted", null, {
				hk: "23fI7b"
			})));
			var ko = n("./src/reddit/components/UserIcon/index.tsx"),
				Io = n("./src/reddit/icons/svgs/Error/index.tsx"),
				Oo = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				yo = n("./src/reddit/components/ContentTooltip/index.tsx"),
				wo = n("./src/reddit/helpers/trackers/gild.ts"),
				jo = n("./src/reddit/icons/svgs/Close/index.tsx"),
				To = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/AwardsHovercard/index.m.less"),
				Mo = n.n(To);

			function No() {
				return (No = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Lo = {
					height: 280,
					width: 275
				},
				Ro = e => {
					let {
						postOrComment: t,
						id: n,
						tooltipId: o
					} = e;
					const s = t.awardCountsById,
						a = Object(d.d)(),
						r = Object(on.a)(),
						i = Object(d.e)(e => Object(Ce.j)(e, {
							thing: t
						})),
						l = Object(d.e)(e => {
							const n = Object(Ie.k)(e);
							return (null == n ? void 0 : n.id) === t.authorId
						}),
						m = mn(),
						u = Object(d.e)(Bn.d),
						p = c.a.useCallback(() => {
							a(Object(pt.i)())
						}, [a]);
					return s && i.length ? c.a.createElement(yo.a, No({
						className: Mo.a.container,
						tooltipId: o,
						tooltipSizeEstimate: Lo,
						defaultTooltipPosition: "top"
					}, m), c.a.createElement("div", {
						id: n,
						onClick: e => e.stopPropagation()
					}, c.a.createElement("div", {
						className: Mo.a.header
					}, c.a.createElement("span", {
						className: Mo.a.title
					}, ne.fbt._("Awards", null, {
						hk: "2HinFQ"
					})), c.a.createElement("button", {
						onClick: p
					}, c.a.createElement(jo.a, {
						className: Mo.a.closeIcon
					}))), c.a.createElement("div", {
						className: Mo.a.awardsList
					}, i.map(e => c.a.createElement("div", {
						key: e.id,
						className: Mo.a.award
					}, c.a.createElement("span", null, Object(Co.b)(s[e.id])), c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: Mo.a.awardIcon,
						src: Object(ge.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: u
						})
					}), c.a.createElement("span", null, e.name))), !l && c.a.createElement("button", {
						className: Mo.a.giveAwardButton,
						onClick: () => {
							p();
							const e = Object(nn.d)(nn.a.GildingFlow, !0);
							return r(Object(wo.clickGildEvent)(t.id, {
								pageType: "given_awards_list"
							})), a(Object(tn.d)({
								correlationId: e,
								thingId: t.id
							}))
						}
					}, c.a.createElement(sn.a, {
						className: Mo.a.awardIcon
					}), c.a.createElement("span", null, ne.fbt._("Give another award", null, {
						hk: "hGgqt"
					})))))) : null
				};
			var Ao = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/index.m.less"),
				So = n.n(Ao);
			const Po = () => {},
				Bo = e => {
					let {
						postOrComment: t
					} = e;
					const n = `awards-badge-tooltip-${t.id}`,
						o = `awards-badge-tooltip-content-${t.id}`,
						s = Object(d.d)(),
						a = Object(on.a)(),
						r = Object(d.e)(e => Object(Ce.j)(e, {
							thing: t
						})),
						i = c.a.useMemo(() => r.reduce((e, n) => {
							var o;
							return e + ((null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n.id]) || 0)
						}, 0), [r, t]),
						l = c.a.useMemo(() => !(!Object(k.b)(t) || !t.awardingsByCurrentUser) && r.some(e => {
							var n, o;
							return Boolean(null === (o = null === (n = t.awardingsByCurrentUser) || void 0 === n ? void 0 : n[e.id]) || void 0 === o ? void 0 : o.length)
						}), [r, t]),
						u = Object(d.e)(Bn.d),
						p = Object(d.e)(e => Object(gn.b)(n)(e)),
						h = c.a.useCallback(() => {
							s(Object(pt.h)({
								tooltipId: n
							}))
						}, [s, n]),
						b = c.a.useCallback(() => {
							s(Object(pt.i)())
						}, [s]);
					c.a.useEffect(() => {
						p && a(Object(Ct.k)(t.id))
					}, [t.id, p]);
					const C = r.slice(0, 3);
					return C.length ? c.a.createElement(Oo.b, {
						onCloseUserDropdown: b,
						onOpenUserDropdown: Po,
						dropdownIsOpen: p,
						hoverId: o,
						tooltipId: n
					}, c.a.createElement("button", {
						id: n,
						className: Object(m.a)(So.a.badge, {
							[So.a.awarded]: l
						}),
						onClick: h
					}, C.map(e => c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: So.a.awardIcon,
						src: Object(ge.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: u
						})
					})), c.a.createElement("span", {
						className: So.a.countText
					}, ne.fbt._({
						"*": "{number} awards",
						_1: "1 award"
					}, [ne.fbt._plural(i, "number", Object(Co.b)(i))], {
						hk: "34eaW8"
					}))), c.a.createElement(Ro, {
						id: o,
						tooltipId: n,
						postOrComment: t
					})) : null
				};
			var Do = n("./src/reddit/components/CommentsChat/Comment/v2/index.m.less"),
				Fo = n.n(Do);
			var Uo = Object(Zn.u)()(Object(d.b)(() => Object(l.c)({
				associatedAward: (e, t) => {
					let {
						commentId: n
					} = t;
					return no(e, {
						commentId: n
					})
				},
				awardIconUrl: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = no(e, {
						commentId: n
					});
					if (o) return Object(ge.a)(e, {
						award: o,
						minSize: 64,
						postOrCommentId: n
					})
				},
				comment: z.b,
				commentPermalink: q.m,
				errorMsgs: q.I,
				flair: q.e,
				isActive: (e, t) => {
					let {
						commentId: n
					} = t;
					return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
				},
				isCommentAwardsAndReactionsEnabled: ve.d,
				isEditing: q.z,
				prediction: oo.f,
				isSelectedForReply: (e, t) => {
					let {
						commentId: n,
						commentsPageKey: o
					} = t;
					return Object(q.L)(e, {
						commentId: n,
						commentsPageKey: o
					})
				},
				subreddit: Zn.r,
				shouldRenderSystemMessages: to,
				commentSubmitError: z.c,
				isPendingComment: z.e,
				isDropdownMenuVisible: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = An(n),
						s = Sn(n);
					return Object(gn.b)(o)(e) || Object(gn.b)(s)(e)
				}
			}), (e, t) => {
				let {
					commentId: n,
					commentsPageKey: o,
					isLivestreaming: s
				} = t;
				return {
					onSubmitRetry: () => e(Object(dt.n)({
						commentId: n,
						commentsPageKey: o,
						isLivestreaming: s
					}))
				}
			})(e => {
				let {
					associatedAward: t,
					awardIconUrl: n,
					childrenInfo: o,
					comment: s,
					commentPermalink: a,
					commentsPageKey: r,
					commentSubmitError: i,
					errorMsgs: l,
					flair: u,
					isActive: p,
					isCommentAwardsAndReactionsEnabled: h,
					isEditing: b,
					isDropdownMenuVisible: C,
					isLivestreaming: v = !1,
					isEmbeddedLiveChat: g = !1,
					isPendingComment: f,
					isSelectedForReply: x,
					postId: E,
					prediction: _,
					renderedInOverlay: k,
					sendEvent: I,
					targetComment: O,
					timestampUpdateTrigger: y,
					addToRefList: w,
					onReplyClick: j,
					onSubmitRetry: T,
					shouldRenderSystemMessages: M
				} = e;
				const N = c.a.useRef(null),
					L = c.a.useRef(null),
					[R, A] = c.a.useState(s && s.collapsed),
					[S, P] = c.a.useState(!1),
					[B, D] = c.a.useState(!1),
					F = c.a.useMemo(() => ({
						renderingObjectInfo: s || void 0
					}), [s]),
					U = Object(d.e)(e => s ? _e(e, s) : []),
					H = () => {
						A(!R)
					};
				if (c.a.useEffect(() => {
						var e;
						L.current && (null === (e = L.current) || void 0 === e ? void 0 : e.scrollHeight) > 250 && !t && !v && D(!0)
					}, []), c.a.useEffect(() => {
						if (!L.current || v) return;
						const e = L.current;
						let t = 250;
						if (S) {
							t = e.scrollHeight + 10;
							const n = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", n)
							};
							e.addEventListener("transitionend", n)
						}
						e.style.maxHeight = `${t}px`
					}, [S, B, v]), c.a.useEffect(() => {
						var e;
						p && (null === (e = N.current) || void 0 === e || e.focus())
					}, [p]), c.a.useEffect(() => {
						N.current && w && w(N)
					}, [w]), !s) return null;
				const K = s.isSystem,
					W = !s.isDeleted && !K,
					V = !!t,
					q = Object.keys(s.awardCountsById || {}).length > 0,
					z = h && q,
					G = h && !!(null == U ? void 0 : U.length);
				return R ? c.a.createElement(it, {
					commentCount: 1,
					onClick: H
				}) : c.a.createElement("div", {
					className: Object(m.a)(Fo.a.container, {
						[Fo.a.livestreaming]: v,
						[Fo.a.selectedForReply]: x,
						[Fo.a.hover]: C,
						[Fo.a.hasError]: Boolean(i)
					}),
					tabIndex: 0,
					ref: N
				}, s.parentId && c.a.createElement("div", {
					className: Fo.a.replyWrapper
				}, c.a.createElement(qn.a, {
					commentId: s.parentId,
					onReplyClick: e => {
						I(Object(Ct.b)(e)), j(e)
					},
					isLivestreaming: v,
					isV2Enabled: !0
				})), c.a.createElement("div", {
					id: O ? "targetComment" : void 0,
					className: Object(m.a)({
						[Fo.a.comment]: !K,
						[Fo.a.systemMessageComment]: K && !v && M,
						[Fo.a.highlighted]: O,
						[Fo.a.expanded]: S
					})
				}, W && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: Fo.a.avatar
				}, c.a.createElement(ko.a, {
					className: Object(m.a)(Fo.a.icon),
					iconUrl: s.profileImage || s.authorIconImage,
					userName: s.author,
					isNSFW: Boolean(s.profileOver18 || s.authorIconIsNSFW)
				})), c.a.createElement("div", null, c.a.createElement(ze.a, {
					className: Fo.a.TopMeta,
					childrenInfo: o,
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: s,
					commentsPageKey: r,
					compact: !0,
					flair: u,
					ignoreFlairPosition: !0,
					ignoreLock: !0,
					isLivestreaming: v,
					isEmbeddedLiveChat: g,
					renderedInOverlay: k,
					hideAwards: h
				}), c.a.createElement("span", {
					className: Fo.a.timestamp
				}, c.a.createElement(Ot.d, {
					seconds: s.created
				}))), !b && c.a.createElement("div", {
					ref: L,
					className: Object(m.a)(Fo.a.commentBody, {
						[Fo.a.expanded]: S
					})
				}, V && t && v ? c.a.createElement(ot, {
					award: t,
					comment: s,
					iconUrl: n
				}) : _ ? c.a.createElement(Ge.a, {
					comment: s,
					prediction: _
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(Xe.b, {
					className: Object(m.a)(Fo.a.richTextJson, {
						[Fo.a.livestreaming]: v
					}),
					content: Object(Je.a)(s),
					rtJsonElementProps: F,
					useExplicitTextColor: v
				}), (z || G) && c.a.createElement("div", {
					className: Fo.a.reactions
				}, z && c.a.createElement(Bo, {
					postOrComment: s
				}), G && U.map(e => {
					let {
						award: t
					} = e;
					return c.a.createElement(fo, {
						key: t.id,
						enforceDarkMode: v,
						comment: s,
						reaction: t
					})
				})), i && c.a.createElement("div", {
					className: Fo.a.error
				}, c.a.createElement(Io.a, null), c.a.createElement("span", null, ne.fbt._("Message failed to send.", null, {
					hk: "24xGQi"
				})), c.a.createElement("button", {
					className: Fo.a.retryButton,
					onClick: T
				}, ne.fbt._("Retry", null, {
					hk: "37t7Iq"
				}))), !f && !i && c.a.createElement(Vn, {
					className: Fo.a.menu,
					comment: s,
					commentPermalink: a,
					commentsPageKey: r,
					isLivestreaming: v,
					timestampUpdateTrigger: y
				}))), b && c.a.createElement(Xn.a, {
					isV2: !0,
					isLivestreaming: v,
					isEmbeddedLiveChat: g,
					postId: E,
					sendEvent: I,
					draftKey: Object(Ve.a)(Dt.c.edit, s.id),
					commentsPageKey: r,
					isEditing: b,
					comment: s
				})), s.isDeleted && c.a.createElement(_o, null), W && !b && l && l.map((e, t) => c.a.createElement(Yn.b, {
					key: `${t}-${e}`,
					className: Fo.a.errorText
				}, e)), !b && B && !S && c.a.createElement("button", {
					type: "button",
					className: Object(m.a)(Fo.a.readMoreButton, {
						[Fo.a.livestreaming]: v
					}),
					onClick: () => {
						P(!S)
					}
				}, ne.fbt._("Read more", null, {
					hk: "3s9Bqf"
				})), K && !v && M && c.a.createElement(Jn, {
					comment: s
				})))
			}));
			const Ho = e => {
				return Object(d.e)(ve.g) ? c.a.createElement(Uo, e) : c.a.createElement(bo, e)
			};
			var Ko = n("./node_modules/lodash/isEqual.js"),
				Wo = n.n(Ko),
				Vo = n("./src/reddit/controls/Button/index.tsx"),
				qo = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				zo = n.n(qo);
			const Go = We.a.div("ButtonWrapper", zo.a),
				Qo = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(m.a)(zo.a.ChunkPlaceholder, {
							[zo.a.top]: t
						})
					}, ne.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Jo = e => {
					let {
						className: t,
						isLivestreaming: n,
						isLoading: o,
						setRef: s,
						...a
					} = e;
					return c.a.createElement("div", {
						ref: s,
						className: Object(m.a)(t, {
							[zo.a.ScrollerWrapper]: !n,
							[zo.a.LivestreamingWrapper]: n,
							[zo.a.loading]: o
						})
					}, !o && a.isPrevLoading && !n && c.a.createElement(Qo, {
						top: !0
					}), a.children, !o && a.isNextLoading && !n && c.a.createElement(Qo, null))
				};
			class Xo extends c.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this._ref = c.a.createRef(), this._refBeforeActiveComments = c.a.createRef(), this._refNextActiveComments = c.a.createRef(), this._refActiveComments = c.a.createRef(), this.resizeObserver = null, this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = function() {
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
						this.preventParentScroll(e), this.setNextTopChunk(), this.setNextBottomChunk(), this.shouldLoadMoreData(), this.hideNewComments(), this.isScrolledToBottomStateOutOfSync() && this.setState({
							shouldAutomaticallyScrollToBottom: !1
						}), !this.state.shouldAutomaticallyScrollToBottom && this.scrolledToBottom() && this.setState({
							shouldAutomaticallyScrollToBottom: !0
						})
					}, this.state = {
						initialized: !1,
						list: this.props.children,
						chunks: this.splitChunks([...this.props.children]),
						activeChunkIndex: 0,
						newCommentsCount: 0,
						shouldAutomaticallyScrollToBottom: !0
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
					}) : this.$ref.scrollTop = this.scrollHeight(), this.setState({
						shouldAutomaticallyScrollToBottom: !0
					}))
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
						targetCommentIndex: n,
						children: o
					} = this.props;
					if (o && o.length && void 0 !== n && o[n]) {
						const e = Math.floor(n / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const o = document.querySelector("#targetComment").offsetTop;
						o > t ? this.scrollTo(o - t) : this.scrollTo(o)
					}
				}
				isScrolledToBottomStateOutOfSync() {
					return this.state.shouldAutomaticallyScrollToBottom && !this.scrolledToBottom()
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
							n = e < t ? e : t;
						this.setState({
							activeChunkIndex: n
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
							n = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: n
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							n = this.state.activeChunkIndex + e;
						if (e > 1) return n
					}
				}
				componentDidMount() {
					this.addScrollListener(), this.scrollToLastBottomChunk(), this.setState({
						initialized: !0
					}), this.scrollToTargetComment(), this.props.targetCommentIndex || this.props.onLastMessageView && this.props.onLastMessageView(), window && window.ResizeObserver && this._refActiveComments.current && (this.resizeObserver = new ResizeObserver(() => {
						this.isScrolledToBottomStateOutOfSync() && this.scrollToLastBottomChunk()
					}), this.resizeObserver.observe(this._refActiveComments.current))
				}
				componentWillUnmount() {
					this.removeScrollListener(), this.resizeObserver && this.resizeObserver.disconnect()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !Wo()(x()(e.children), x()(this.props.children)) || !Wo()(r()(e.children), r()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, n) {
					if (n && n.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							o = this.getChunkIndexOnUpdate(e, t),
							s = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: o || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== s || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + s
						}, () => {
							o && this.setNextTopScroll(), n.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, n.scrolledBottom && s > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(m.a)([zo.a.NewComments, zo.a.show]) : zo.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Jo, {
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
						className: zo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						ref: this._refActiveComments,
						className: zo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: zo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(Go, null, c.a.createElement(Vo.l, {
						className: n,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", ne.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [ne.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Zo = Xo,
				Yo = n("./src/reddit/selectors/posts.ts"),
				$o = n("./src/reddit/components/CommentsChat/index.m.less"),
				es = n.n($o);
			const ts = 6e4,
				ns = (e, t, n) => {
					let {
						authorId: o,
						id: s
					} = n;
					return e.includes(o) && !t.includes(s)
				},
				os = Object(l.c)({
					blockedRedditors: Ut.a,
					blockedRedditorsPending: Ut.b,
					chatCommentLinks: q.g,
					isPending: q.d,
					liveCommentsWebsocket: Yo.E,
					moreCommentsLink: q.H,
					isCommentReactionStreamingKillSwitchEnabled: ve.f,
					isCommentAwardsAndReactionsEnabled: ve.d,
					currentUserId: Ie.i
				}),
				ss = Object(d.b)(os, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e(ee(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						F(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(v.n)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(C.g)()),
					loadComments: async () => await e(Object(te.commentsPageDataRequested)(t.postId, void 0, {
						sort: u.u.CHAT,
						comment_awardings_by_current_user: !0
					}, u.u.CHAT)),
					fetchAvailableReactionAwards: async t => e(Se(t)),
					processReactionAwardStreamData: t => e(Ae(t))
				}));
			class as extends c.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = c.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.handleReactionStreamData = this.handleReactionStreamData.bind(this), this.sendViewLastMessageTelemetry = s()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now(),
						realtimeGQLVariables: void 0
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], n = t && t.created;
					return !!n && Object(h.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(p.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, ts)
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
						liveCommentsWebsocket: n,
						loadComments: o,
						onLiveCommentsSubscribe: s,
						postId: a
					} = this.props;
					n && (e && o(), s(t, n, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = n)
				}
				componentDidMount() {
					const {
						fetchAvailableReactionAwards: e,
						subredditId: t
					} = this.props;
					e(t), this.updateRealtimeGQLVariables()
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: n,
						blockedRedditorsPending: o,
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
					return e.postId !== c || e.draftKey !== d || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks !== s || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: o,
						commentsPageKey: s,
						liveCommentsWebsocket: a,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && a && (i(s, a, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = a), this.updateRealtimeGQLVariables()), e.blockedRedditors.ids !== t.ids) {
						const e = new Set(t.ids),
							o = {};
						n.forEach(e => o[e.id] = e.authorId), this.setState({
							expandedCommentIds: this.state.expandedCommentIds.filter(t => {
								const n = o[t];
								return !e.has(n)
							})
						})
					}
					if (this.deferTimestampUpdate(), o) {
						const e = Object(p.a)(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(o), o && n.forEach((e, t) => e.id === o && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				updateRealtimeGQLVariables() {
					const {
						postId: e
					} = this.props;
					this.setState({
						realtimeGQLVariables: {
							input: {
								channel: {
									teamOwner: "CHAT",
									category: "COMMENT_REACTIONS",
									postID: e
								}
							}
						}
					})
				}
				handleReactionStreamData(e) {
					var t, n;
					const {
						processReactionAwardStreamData: o,
						currentUserId: s
					} = this.props;
					s !== (null === (n = null === (t = null == e ? void 0 : e.subscribe) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.userID) && o(e)
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: n,
						sendEvent: o
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), o(Object(Ct.j)("history", n)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = r()(e);
					(null == n ? void 0 : n.id) && t(Object(Ct.c)(n.id))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							n = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(n), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, n = t && document.querySelector("#targetComment");
					n && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(n.offsetTop)
				}
				render() {
					const {
						blockedRedditors: e,
						chatCommentLinks: t,
						className: n,
						commentId: o,
						commentsPageKey: s,
						emptyStateClassName: a,
						isLivestreaming: r,
						isEmbeddedLiveChat: i,
						isLoading: d,
						isPending: l,
						postId: u,
						renderedInOverlay: p,
						sendEvent: h,
						isCommentReactionStreamingKillSwitchEnabled: C,
						isCommentAwardsAndReactionsEnabled: v
					} = this.props, {
						expandedCommentIds: g,
						targetCommentIndex: f,
						timestampUpdateTrigger: x,
						realtimeGQLVariables: E
					} = this.state, _ = !(t && t.length || d || l);
					return c.a.createElement(c.a.Fragment, null, v && !C && E && c.a.createElement(b.a, {
						variables: E,
						onData: this.handleReactionStreamData,
						queryKey: "liveChatCommentReactions"
					}), _ ? c.a.createElement(Ue.c, {
						className: Object(m.a)(a, {
							[es.a.EmbeddedLiveChatScroller]: i
						}),
						isChat: !0
					}) : c.a.createElement(Zo, {
						className: Object(m.a)(n, {
							[es.a.EmbeddedLiveChatScroller]: i
						}),
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: d || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: f,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => ns(e.ids, g, t) ? c.a.createElement(it, {
						commentCount: 1,
						isLivestreaming: r,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Ho, {
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: s,
						isLivestreaming: r,
						isEmbeddedLiveChat: i,
						postId: u,
						renderedInOverlay: !!p,
						sendEvent: h,
						timestampUpdateTrigger: x,
						targetComment: t.id === o,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = ss(Object(Tt.c)(as))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/ContentTooltip/index.m.less"),
				b = n.n(h);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = {
					height: 200,
					width: 200
				},
				g = e => {
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
				f = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: s,
						caretColor: r,
						onClick: i,
						hideCaret: d
					} = e;
					return a.a.createElement("div", {
						onClick: i,
						className: Object(c.a)(n, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === s,
							[b.a.caretOnLeft]: "left" === s,
							[b.a.caretOnRight]: "right" === s,
							[b.a.caretOnBottom]: "bottom" === s,
							[b.a.hideCaret]: d
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": r && r[s] ? r[s] : Object(u.a)(e).body
						}
					}, t)
				}),
				x = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				E = Object(m.a)(f, [o.a.Click, o.a.Keydown]),
				_ = Object(r.b)(x);
			class k extends a.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						l.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const o = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									s = o.left > t.width;
									break;
								case "right":
									s = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = o.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : g(this.props.defaultTooltipPosition)
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
						tooltipPosition: n,
						caretPosition: o
					} = this.getPositions(e);
					return a.a.createElement(E, C({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = _(k)
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				a = e => (e.numReports || 0) > 0
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = r.a.span("metaText", d.a),
				m = e => a.a.createElement(l, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: s,
						...r
					} = e;
					const c = Object(i.b)(n),
						d = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? d : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, r, m)
				},
				p = e => a.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(a.a)(Object(r.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.mb.POST
			}), l = async (e, t, n) => Object(a.a)(Object(r.a)(e, [i.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.mb.POST
			}), m = async (e, t) => Object(a.a)(Object(r.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.mb.POST
			}), u = async (e, t) => Object(a.a)(Object(r.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.mb.POST
			}), p = async (e, t) => Object(a.a)(Object(r.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${o.a.oauthUrl}/user/${t}/about`),
				method: s.mb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/awards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				i = (n("./src/redditGQL/operations/AvailableAwards.json"), n("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				c = n("./src/redditGQL/operations/GiveAward.json"),
				d = n("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, n) => {
				var r;
				const i = await Object(o.a)(e, {
					...c,
					variables: {
						input: t
					}
				}, {
					query: n ? {} : Object(a.b)()
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!Object(s.c)(i) || !i.body.data.giveAward.ok) throw i.body.data.giveAward.errors && (null === (r = i.body.data.giveAward.errors) || void 0 === r ? void 0 : r.length) > 0 ? new Error(i.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return i.body.data.giveAward
			}, m = async (e, t) => {
				var n, a, r;
				const i = await Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!i.body.data.removeAward.ok) {
					const e = null !== (r = null === (a = null === (n = i.body.data.removeAward.errors) || void 0 === n ? void 0 : n[0]) || void 0 === a ? void 0 : a.message) && void 0 !== r ? r : "An unknown error occurred";
					throw new Error(e)
				}
				return i.body.data.removeAward
			}, u = async (e, t, n) => {
				const c = await Object(o.a)(e, {
					...i,
					variables: {
						thingId: t.thingId,
						isPost: Object(r.a)(t.thingId)
					}
				}, {
					query: n ? {} : Object(a.b)()
				});
				if (!Object(s.c)(c)) throw new Error("An unknown error occurred");
				if (c.body.data.postInfoById) {
					const {
						identity: e,
						postInfoById: n
					} = c.body.data;
					return {
						id: t.thingId,
						awardings: n.awardings,
						treatmentTags: n.treatmentTags,
						coins: e.coins
					}
				}
				if (c.body.data.commentById) {
					const {
						identity: e,
						commentById: n
					} = c.body.data;
					return {
						id: t.thingId,
						awardings: n.awardings,
						treatmentTags: n.treatmentTags,
						coins: e.coins
					}
				}
				throw new Error("An unknown error occurred")
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			}));
			const o = 500,
				s = 1800,
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < o ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				r = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const o = a(t, n);
					return e.slice(0, o)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");

			function a(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case s.J.AUTHORIZATION_ERROR:
						return n ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.J.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.J.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.J.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.J.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/humanizeUTCDate/index.tsx");
			const a = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				r = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : o.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + o.fbt._("Reason by {username}:", [o.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + o.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => o.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [o.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed as spam by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : o.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const c = Object(s.e)(i, {
							commentId: e
						}),
						d = Object(a.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...r.n(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(o.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...r.n(e)
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("i", d({}, e, {
				className: Object(a.a)(Object(r.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function a(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, s.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), s.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Distinguish/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function a(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M11.9996 24C11.809 24.0005 11.6234 23.9383 11.4716 23.8229C11.3198 23.7075 11.2102 23.5454 11.1596 23.3616C10.4517 20.854 9.11229 18.5699 7.26953 16.7278C5.42677 14.8857 3.14226 13.5471 0.634422 12.84C0.452558 12.7871 0.292771 12.6766 0.179072 12.5251C0.065374 12.3737 0.00390625 12.1894 0.00390625 12C0.00390625 11.8106 0.065374 11.6263 0.179072 11.4748C0.292771 11.3234 0.452558 11.2129 0.634422 11.16C3.14231 10.4518 5.42672 9.11245 7.2694 7.26977C9.11209 5.42709 10.4515 3.14267 11.1596 0.634788C11.2125 0.452924 11.323 0.293137 11.4745 0.179439C11.6259 0.0657402 11.8102 0.00427246 11.9996 0.00427246C12.189 0.00427246 12.3733 0.0657402 12.5248 0.179439C12.6763 0.293137 12.7867 0.452924 12.8396 0.634788C13.5469 3.1431 14.886 5.42795 16.7289 7.27076C18.5717 9.11357 20.8565 10.4527 23.3648 11.16C23.5467 11.2129 23.7065 11.3234 23.8202 11.4748C23.9339 11.6263 23.9953 11.8106 23.9953 12C23.9953 12.1894 23.9339 12.3737 23.8202 12.5251C23.7065 12.6766 23.5467 12.7871 23.3648 12.84C20.8575 13.5484 18.5737 14.8878 16.7315 16.7302C14.8892 18.5726 13.5501 20.8566 12.842 23.364C12.7911 23.5479 12.681 23.7099 12.5287 23.8248C12.3764 23.9398 12.1904 24.0014 11.9996 24ZM2.77042 12C4.8502 12.8389 6.73946 14.0886 8.32522 15.6744C9.91099 17.2602 11.1607 19.1494 11.9996 21.2292C12.8385 19.1494 14.0883 17.2602 15.674 15.6744C17.2598 14.0886 19.149 12.8389 21.2288 12C19.149 11.1611 17.2598 9.91136 15.674 8.32559C14.0883 6.73983 12.8385 4.85057 11.9996 2.77079C11.1607 4.85057 9.91099 6.73983 8.32522 8.32559C6.73946 9.91136 4.8502 11.1611 2.77042 12Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, n) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, s.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, s.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/Error/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, e), s.a.createElement("path", {
				d: "M8.00001 9.00001C7.85187 8.9991 7.70916 8.94414 7.59868 8.84544C7.4882 8.74675 7.41755 8.61111 7.40001 8.46401L7.00001 4.86401C6.99239 4.78039 7.00194 4.6961 7.02808 4.6163C7.05422 4.53651 7.09639 4.46291 7.15201 4.40001C7.20838 4.33699 7.27743 4.28659 7.35464 4.25212C7.43184 4.21766 7.51546 4.1999 7.60001 4.20001H8.40001C8.48456 4.1999 8.56818 4.21766 8.64539 4.25212C8.7226 4.28659 8.79165 4.33699 8.84801 4.40001C8.90363 4.46291 8.94581 4.53651 8.97195 4.6163C8.99809 4.6961 9.00764 4.78039 9.00001 4.86401L8.60001 8.46401C8.58247 8.61111 8.51183 8.74675 8.40135 8.84544C8.29087 8.94414 8.14815 8.9991 8.00001 9.00001Z"
			}), s.a.createElement("path", {
				d: "M7.62171 11.7766C7.738 11.8391 7.86796 11.8719 8 11.872C8.10585 11.8716 8.21055 11.8501 8.30805 11.809C8.40555 11.7678 8.49391 11.7076 8.568 11.632C8.717 11.4821 8.80064 11.2794 8.80064 11.068C8.80064 10.8567 8.717 10.6539 8.568 10.504C8.49363 10.429 8.40515 10.3695 8.30766 10.3289C8.21018 10.2883 8.10561 10.2674 8 10.2674C7.89439 10.2674 7.78983 10.2883 7.69234 10.3289C7.59485 10.3695 7.50637 10.429 7.432 10.504C7.36004 10.5777 7.303 10.6647 7.264 10.76C7.2125 10.8816 7.1919 11.0141 7.20404 11.1455C7.21617 11.277 7.26066 11.4035 7.33354 11.5136C7.40642 11.6237 7.50542 11.714 7.62171 11.7766Z"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M8.00001 15.4C6.53643 15.4 5.10571 14.966 3.88879 14.1529C2.67187 13.3398 1.72339 12.184 1.1633 10.8319C0.603212 9.47969 0.456668 7.9918 0.742198 6.55634C1.02773 5.12088 1.73251 3.80233 2.76742 2.76742C3.80233 1.73251 5.12088 1.02773 6.55634 0.742198C7.9918 0.456668 9.47969 0.603212 10.8319 1.1633C12.184 1.72339 13.3398 2.67187 14.1529 3.88879C14.966 5.10571 15.4 6.53643 15.4 8.00001C15.3979 9.96196 14.6176 11.843 13.2303 13.2303C11.843 14.6176 9.96196 15.3979 8.00001 15.4ZM8.00001 1.80001C6.77377 1.80001 5.57506 2.16363 4.55547 2.8449C3.53589 3.52616 2.74122 4.49447 2.27196 5.62737C1.80269 6.76027 1.67991 8.00689 1.91914 9.20957C2.15837 10.4123 2.74886 11.517 3.61595 12.3841C4.48303 13.2512 5.58777 13.8416 6.79045 14.0809C7.99313 14.3201 9.23975 14.1973 10.3726 13.7281C11.5055 13.2588 12.4739 12.4641 13.1551 11.4445C13.8364 10.425 14.2 9.22625 14.2 8.00001C14.1979 6.35632 13.544 4.78055 12.3817 3.61829C11.2195 2.45602 9.6437 1.80213 8.00001 1.80001Z"
			}))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/LiveChat/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				stroke: "white"
			}, e), s.a.createElement("path", {
				d: "M1.17567 6.90708L1.17579 6.9071L1.17765 6.89503C1.61505 4.05191 3.95864 1.69386 6.90278 1.17649C11.5294 0.445398 15.5469 4.48817 14.7445 9.01081L14.7433 9.01787L14.7422 9.02495C14.3037 11.8753 11.9552 14.2237 9.10488 14.6623L9.10486 14.6621L9.09283 14.6642C7.41037 14.9568 5.80338 14.5919 4.48582 13.7867L4.249 13.642L3.98282 13.7206L1.45885 14.4663L2.19817 12.0209L2.27918 11.7529L2.13322 11.5141C1.31702 10.1785 0.886321 8.57086 1.17567 6.90708Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10",
				strokeLinecap: "square"
			}), s.a.createElement("path", {
				d: "M8.00018 12.3201C10.386 12.3201 12.3202 10.3859 12.3202 8.00005C12.3202 5.61418 10.386 3.68005 8.00018 3.68005C5.61431 3.68005 3.68018 5.61418 3.68018 8.00005C3.68018 10.3859 5.61431 12.3201 8.00018 12.3201Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}), s.a.createElement("path", {
				d: "M8.00008 9.92008C9.06047 9.92008 9.92008 9.06047 9.92008 8.00008C9.92008 6.93969 9.06047 6.08008 8.00008 6.08008C6.93969 6.08008 6.08008 6.93969 6.08008 8.00008C6.08008 9.06047 6.93969 9.92008 8.00008 9.92008Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? a.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Reply2/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, e), s.a.createElement("path", {
				d: "M10.6398 5.60011H2.4518L6.471 1.58171L5.7598 0.874512L0.8462 5.79211C0.799757 5.83854 0.762915 5.89367 0.73778 5.95434C0.712644 6.01501 0.699707 6.08004 0.699707 6.14571C0.699707 6.21138 0.712644 6.27641 0.73778 6.33708C0.762915 6.39775 0.799757 6.45288 0.8462 6.49931L5.7598 11.4161L6.4678 10.7089L2.3614 6.60011H10.6398C11.5757 6.59308 12.4762 6.95765 13.1437 7.61383C13.8111 8.27001 14.1909 9.16419 14.1998 10.1001V13.6001H15.1998V10.1001C15.1905 8.8991 14.7052 7.75083 13.8503 6.90721C12.9954 6.06358 11.8408 5.59351 10.6398 5.60011Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, s.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

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
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

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
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

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
		"./src/reddit/icons/svgs/UserBlock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, e), s.a.createElement("path", {
				d: "M22.06 22.5599L22.0756 22.5443L2.98242 3.44869L1.91922 4.51069L10.612 13.1999H9.04482C6.98492 13.182 5.00204 13.9819 3.5312 15.4242C2.06037 16.8664 1.2217 18.8332 1.19922 20.8931V21.4715C1.20144 21.8256 1.34409 22.1644 1.59584 22.4134C1.8476 22.6625 2.18789 22.8015 2.54202 22.7999H20.212L21.016 23.6039L21.9292 22.6895C21.991 22.6655 22.0515 22.6382 22.1104 22.6079L22.06 22.5599ZM2.70042 21.2999V20.8931C2.72256 19.2312 3.40291 17.6459 4.59226 16.4849C5.7816 15.3239 7.38285 14.6819 9.04482 14.6999H12.112L18.712 21.2999H2.70042ZM16.1992 13.3067C17.8371 13.5564 19.3524 14.3229 20.5239 15.4944C21.6954 16.666 22.4619 18.1812 22.7116 19.8191L19.5916 16.6991C19.4956 16.5971 19.3984 16.4975 19.2952 16.4027L16.1992 13.3067ZM7.67922 4.78669L6.50322 3.60709C6.89178 2.70868 7.49425 1.91898 8.25807 1.30686C9.02189 0.694742 9.92387 0.278789 10.8853 0.0952792C11.8468 -0.0882305 12.8386 -0.0337233 13.7742 0.254047C14.7098 0.541818 15.5607 1.05411 16.2529 1.74625C16.945 2.43839 17.4573 3.28936 17.7451 4.22493C18.0328 5.16051 18.0873 6.15228 17.9038 7.11376C17.7203 8.07524 17.3044 8.97722 16.6922 9.74104C16.0801 10.5049 15.2904 11.1073 14.392 11.4959L13.21 10.3199C13.9672 10.1114 14.6564 9.70784 15.2089 9.14961C15.7614 8.59138 16.1577 7.89799 16.3583 7.13867C16.559 6.37935 16.5569 5.58068 16.3523 4.82241C16.1477 4.06414 15.7478 3.37282 15.1924 2.81747C14.6371 2.26212 13.9458 1.86219 13.1875 1.6576C12.4292 1.45301 11.6306 1.45094 10.8712 1.65158C10.1119 1.85222 9.41853 2.24855 8.8603 2.80101C8.30207 3.35346 7.89854 4.0427 7.69002 4.79989L7.67922 4.78669Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			}));
			n("./src/reddit/selectors/user.ts");
			const o = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				a = (e, t) => {
					const n = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		},
		"./src/redditGQL/operations/AvailableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"4778ed491384"}')
		},
		"./src/redditGQL/operations/AwardSideEffectsDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"e10d7f0411a4"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/GiveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"b8028be05f59"}')
		},
		"./src/redditGQL/operations/RemoveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"f7c06f2127c3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.007b750cd1b4e767a53f.js.map