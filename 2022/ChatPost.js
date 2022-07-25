// https://www.redditstatic.com/desktop2x/ChatPost.9d0708fadbec9614ceac.js
// Retrieved at 7/25/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
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
				r = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
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
				let r, a = !1;
				const i = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), a || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(r)
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
				r = n("./node_modules/@apollo/client/link/ws/index.js"),
				a = n("./src/config.ts"),
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
					const t = new r.a(new i.SubscriptionClient(`wss://${a.a.gqlRealtimeAddress}`, {
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
				return f
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const a = (e, t) => Object(s.a)(e, {
				...r,
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
				f = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const s = t(),
						r = Object(i.a)(s);
					if (Object(i.b)(s) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let c = !1,
						d = "";
					do {
						e(v());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await a(o(), t);
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
				return m
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "g", (function() {
				return I
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/blockedRedditors.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/accounts/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				l = n("./src/reddit/selectors/user.ts");
			const m = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				h = Object(s.a)(m),
				b = Object(s.a)(u),
				C = Object(s.a)(p),
				v = e => async (t, n, s) => {
					let {
						apiContext: l
					} = s;
					const m = n();
					if (m.blockUser.api.pending[e]) return;
					t(h({
						username: e
					}));
					const u = await Object(i.a)(l(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(b(u.body)), u.body.id && t(Object(r.f)(u.body.id)), t(a.g(p)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
								type: u.error ? u.error.type : "Unknown error",
								username: e
							},
							s = Object(d.e)(m) && "REBLOCK_RATE_LIMIT" === u.body.reason;
						t(C(n)), t(s ? a.f({
							id: p,
							kind: c.b.Error,
							text: o.fbt._("You can't block u/{username} for 24 hours after unblocking them", [o.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: v(e)
						}) : a.f({
							id: p,
							kind: c.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: v(e)
						}))
					}
				}, f = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", x = "USER_UNBLOCK__FAILED", E = Object(s.a)(f), _ = Object(s.a)(g), k = Object(s.a)(x), I = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					const m = n(),
						u = Object(l.k)(m),
						p = u ? u.id : void 0,
						h = m.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(E({
						name: e
					})), (await Object(i.c)(d(), p, e)).ok ? (t(_({
						name: e
					})), h && h.id && t(Object(r.h)(h.id)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.f({
						kind: c.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(k({
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
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
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: d,
					isStrong: l,
					onClick: u,
					style: h
				} = e;
				return n && i ? r.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: s.author,
					className: Object(c.a)(p.a.commentAuthorLink, t),
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: d,
					isStrong: l,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: u,
					style: h
				}, s.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				f = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
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
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				M = n.n(N);
			const L = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: s,
					isLivestreaming: a,
					isStrong: i,
					onClick: d,
					renderedInOverlay: l
				} = e;
				const m = Object(O.f)(o),
					u = r.a.createElement(j.b, {
						ignore: m || !!o.distinguishType && o.distinguishType !== w.G.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, r.a.createElement(h, {
						className: t,
						collapsed: s,
						comment: o,
						isAuthorDeleted: Object(O.f)(o),
						isCommentAuthorBlocked: Object(O.g)(o),
						isLivestreaming: a,
						isStrong: i,
						onClick: d
					}));
				return m ? u : r.a.createElement(T.b, {
					className: Object(c.a)(M.a.authorHoverCard, n),
					collapsed: s,
					isCommentAuthorBlocked: Object(O.g)(o),
					postOrComment: o,
					tooltipType: l ? x.c.Lightbox : void 0
				}, u)
			};
			var R = n("./src/config.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				S = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const P = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				return `${e}${t}${n?"inOverlay":""}`
			};
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				D = n.n(B);
			const F = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: s
				} = e;
				const i = Object(a.d)(),
					d = () => i(Object(A.h)({
						tooltipId: l
					})),
					l = P("CommentTopMeta--cakeday--", n, s),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(c.a)(D.a.cakedayIcon, t),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: d,
					onMouseLeave: d,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(S.c, {
					tooltipId: l,
					text: m
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				K = n("./src/reddit/actions/post.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx"),
				V = n("./src/reddit/helpers/path/index.ts");
			const G = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					} = e, l = Object(a.d)(), m = P("CommentTopMeta--Created--", n.id, c), u = () => l(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(U.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == s || s(e), q(l, n.id), d && (e.preventDefault(), l(Object(K.Z)(Object(V.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(W.d, {
						seconds: n.created,
						shortenedUnit: o
					}), r.a.createElement(S.c, {
						tooltipId: m
					}, r.a.createElement(W.b, {
						seconds: n.created
					})))
				},
				q = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(H.h)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.h)({
						commentListNodeId: t
					})), 5e3)
				};
			var Q = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				J = n.n(Q);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => r.a.createElement(E.a, {
				className: J.a.crowdControlText
			}, X._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Y = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = e => {
				let {
					compact: t,
					editedAt: n
				} = e;
				return r.a.createElement(E.a, {
					className: $.a.editedText
				}, ee._("edited {time}", [ee._param("time", r.a.createElement(W.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				oe = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				re = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Report/index.tsx"),
				de = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const ue = e => {
				let {
					comment: t,
					ignoreLock: s,
					renderedInOverlay: i,
					isAdmin: c
				} = e;
				const d = Object(a.d)(),
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
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: me.a.approveIcon,
					desc: Object(oe.a)(t),
					id: p,
					onMouseEnter: l(p),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(S.c, {
					tooltipId: p,
					text: Object(oe.a)(t)
				})), Object(ne.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(oe.b)(t),
					id: h,
					onMouseEnter: v,
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(S.c, {
					tooltipId: h,
					text: Object(oe.b)(t)
				})), Object(ne.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => d(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: m
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !s && r.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: me.a.spamIcon,
					desc: Object(oe.d)(t),
					id: C,
					onMouseEnter: l(C),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(S.c, {
					tooltipId: C,
					text: Object(oe.d)(t)
				})), Object(se.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: me.a.reportIcon,
					desc: Object(oe.c)(t.numReports),
					id: b,
					onMouseEnter: l(b),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(S.c, {
					tooltipId: b,
					text: Object(oe.c)(t.numReports)
				})), t.isDeleted && c && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: me.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: me.a.userDeletion
				}, o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}))))
			};
			var pe, he = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var be = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Ce = n.n(be);
			const ve = {
					[pe.Admin]: {
						color: he.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: he.d,
						getLabel: () => o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: he.a,
						getLabel: () => o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: he.c,
						getLabel: () => o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: he.a,
						getLabel: () => o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => o.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				fe = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === w.G.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						getLabel: i,
						tooltipTemplate: d
					} = ve[n], l = i(), m = P(o, e.comment.id, e.renderedInOverlay), u = d(e), p = () => t(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(c.a)(Ce.a.role, e.className),
						style: {
							color: s
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, l), n === pe.Mod && r.a.createElement(ge, null)), r.a.createElement(S.c, {
						tooltipId: m,
						text: u
					}))
				},
				ge = () => r.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: Ce.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var xe = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Ee = n.n(xe);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = () => r.a.createElement(E.a, {
				className: Ee.a.stickiedText
			}, _e._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Ie = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Oe = n.n(Ie);
			const ye = e => {
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
					renderedInOverlay: N,
					subredditDisplayText: M,
					isAdmin: R
				} = e, A = Object(I.a)(), S = i.subredditId, P = Object(a.e)(e => Object(y.f)(e, {
					subredditId: S
				}));
				if (i.isDeleted && !R) return r.a.createElement("div", {
					className: Object(c.a)(Oe.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Oe.a.authorLine
				}, r.a.createElement("span", {
					className: Oe.a.metaText
				}, i.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					permalink: j,
					renderedInOverlay: N
				})));
				return r.a.createElement("div", {
					className: Object(c.a)(Oe.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Oe.a.authorLine
				}, !Object(O.f)(i) && r.a.createElement(C.b, {
					className: Oe.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: Oe.a.baselineItem
				}, r.a.createElement(L, {
					authorClassName: Oe.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: N
				})), !Object(O.f)(i) && u && r.a.createElement(g.a, {
					postOrComment: i,
					className: Oe.a.LastAuthorModNoteIcon
				}), s && r.a.createElement(Z, null), r.a.createElement(fe, {
					className: Oe.a.role,
					comment: i,
					subredditDisplayText: M,
					renderContractorBadge: T,
					renderedInOverlay: N
				}), i.isAuthorCakeday ? r.a.createElement(F, {
					className: Oe.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: N
				}) : !Object(O.f)(i) && P && r.a.createElement(b.a, {
					className: Oe.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						A(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(f.a, {
					className: Oe.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					onClick: w,
					permalink: j,
					renderedInOverlay: N
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(ke, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: N,
					isAdmin: R
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: N ? x.c.Lightbox : void 0
				})), d && !Object(_.o)(d) && r.a.createElement("span", {
					className: Oe.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: Oe.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var we = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = n("./src/reddit/selectors/economics.ts"),
				Te = n("./src/reddit/models/Flair/index.ts"),
				Ne = n("./src/reddit/selectors/comments.ts"),
				Me = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Le = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Re = n("./src/reddit/selectors/subreddit.ts"),
				Ae = n("./src/reddit/selectors/userFlair.ts"),
				Se = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Pe = n.n(Se);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const De = d.a.wrapped(v.b, "RightPositionedAuthorFlair", Pe.a),
				Fe = d.a.span("DeletedText", Pe.a),
				Ue = d.a.wrapped(E.a, "MetaSeparator", Pe.a),
				He = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(je.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Re.J)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ae.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Ne.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Me.b,
					isBlockingInterstitialV2Enabled: Me.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Le.i)(e, n.subredditId)
					}
				}));
			t.a = He(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					commentPermalink: i,
					commentsPageKey: d,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					hideAwards: b = !1,
					ignoreFlairPosition: g,
					ignoreLock: _,
					isAdmin: k,
					isBlockingInterstitialEnabled: I,
					isBlockingInterstitialV2Enabled: y,
					isModWithUserNotesPermissions: w,
					isLivestreaming: j,
					isPostComment: T,
					onCommentAuthorClick: N,
					onCommentTimestampClick: M,
					renderContractorBadge: R,
					renderedInOverlay: A,
					subredditDisplayText: S,
					userHasNft: P
				} = e, B = r.a.createElement(r.a.Fragment, null, r.a.createElement(we.b, {
					commentId: a.id
				}), r.a.createElement(we.a, {
					commentId: a.id,
					commentsPageKey: d
				}));
				if (T) return r.a.createElement(r.a.Fragment, null, r.a.createElement(ye, {
					className: Object(c.a)(n, {
						[Pe.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: u || null,
					ignoreLock: _,
					isAdmin: k,
					isModWithUserNotesPermissions: w,
					isLivestreaming: j,
					onCommentAuthorClick: N,
					onCommentTimestampClick: M,
					permalink: i,
					renderContractorBadge: !!R,
					renderedInOverlay: A,
					subredditDisplayText: S
				}), B);
				if (a.isDeleted) return r.a.createElement(Ke, Be({}, e, {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(We, Be({}, e, {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: o
					})
				}));
				const D = !g && p === Te.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: o,
						[Pe.a.hasBadges]: h,
						[Pe.a.liveStreaming]: j
					}),
					"data-testid": "comment-top-meta"
				}, u && D && r.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(O.f)(a) && r.a.createElement(C.b, {
					className: Pe.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(L, {
					authorClassName: P ? Pe.a.NftAuthor : void 0,
					collapsed: o,
					comment: a,
					isLivestreaming: j,
					isStrong: !!m,
					onClick: N,
					renderedInOverlay: A
				}), s && r.a.createElement(Z, null), s && r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !D && r.a.createElement(De, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(f.a, {
					className: Pe.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(E.c, {
						className: Pe.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), B, r.a.createElement(fe, {
					className: Pe.a.authorRole,
					comment: a,
					subredditDisplayText: S,
					renderContractorBadge: !!R,
					renderedInOverlay: A
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !T && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.b, {
					className: Pe.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Pe.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: A,
					isBlockingInterstitialEnabled: I || y
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(ke, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(te, {
					editedAt: a.editedAt
				}))), r.a.createElement(ue, {
					comment: a,
					ignoreLock: _,
					renderedInOverlay: A
				}), !b && r.a.createElement(l.a, {
					thing: a,
					tooltipType: A ? x.c.Lightbox : void 0
				}))
			});
			const Ke = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d,
						renderedInOverlay: l
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Fe, null, a.deletedBy === O.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: c || d
					}), n && Ve({
						childrenInfo: t
					}))
				},
				We = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: a
					})), r.a.createElement(E.b, {
						className: Pe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(E.c, {
						className: Pe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(G, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: c || d
					}), Ve({
						childrenInfo: o
					}))
				},
				Ve = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Ue, {
						className: Pe.a.metaText
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
				return N
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "a", (function() {
				return U
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/times.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
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
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/icons/svgs/Comments/index.tsx"),
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
					}) : i.a.createElement(g.a, {
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
				}, i.a.createElement(g.a, {
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
					}, i.a.createElement(g.a, {
						className: k.a.CommentsIcon
					}), i.a.createElement(I, null, o.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(p.n, {
						to: Object(b.b)(t)
					}, o.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				N = Object(c.b)(null, (e, t) => {
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
				M = e => {
					let {
						postId: t,
						commentId: n,
						sort: o,
						apiError: s
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(k.a.StateContainer, k.a.ErrorFullPage)
					}, i.a.createElement(N, {
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
				U = e => i.a.createElement(R, null, r()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(S, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(P, null, i.a.createElement(f.b, {
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
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return Qo
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/debounce.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/last.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/setInterval/index.ts"),
				p = n("./src/lib/timeAgo/index.ts"),
				h = n("./src/realtime/GQLSubscription/async.tsx"),
				b = n("./src/reddit/actions/blockedRedditors.ts"),
				C = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/lib/makeActionCreator/index.ts"),
				f = n("./node_modules/lodash/first.js"),
				g = n.n(f),
				x = n("./node_modules/lodash/isArray.js"),
				E = n.n(x),
				_ = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				I = n("./src/reddit/models/Comment/index.ts"),
				O = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/Vote/index.ts");
			const j = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = N(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(k.b)(e.associated_award) : void 0,
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
							distinguishType: T(n),
							id: e.name,
							isAdmin: n === I.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === I.e.Submitter,
							isMod: n === I.e.Moderator,
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
								rteMode: y.i.RICH_TEXT
							},
							parentId: e.parent_id && Object(_.a)(e.parent_id) ? e.parent_id : null,
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
							voteState: w.a.notVoted,
							...t || {}
						}
					}
				},
				T = e => {
					switch (e) {
						case I.e.Admin:
							return m.G.ADMIN;
						case I.e.Moderator:
							return m.G.MODERATOR;
						case I.e.Alumni:
							return m.G.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				N = e => g()((e || []).filter(e => E()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || I.e.None;
			const M = (e, t, n) => {
				const o = {
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
					} = n;
				if (s && l) {
					if (l === O.f.Richtext) {
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
					if (l === O.f.Text) {
						if (!c) return o;
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
			var L = n("./src/lib/env/index.ts");
			const R = new Map,
				A = e => e,
				S = new Set;
			var P;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(P || (P = {}));
			const B = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				D = (e, t) => {
					const n = A(t),
						o = R.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				F = (e, t, n, o) => {
					const s = A(t),
						r = R.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					R.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...B
						}
					}), a.socket.addEventListener("message", K.bind(null, o)), a.socket.addEventListener("close", U.bind(null, s, o)), a.socket.addEventListener("error", W.bind(null, s)), window && window.addEventListener("beforeunload", D.bind(null, e, t))
				},
				U = (e, t, n) => {
					const o = R.get(e);
					o && (o.isClosePlanned ? R.delete(e) : H(e, t))
				},
				H = (e, t) => {
					const n = R.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: s,
							jitterAmount: r,
							maximumRetries: a
						},
						socket: i,
						uniqueId: c,
						url: d
					} = n;
					if (R.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, s),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							l = {
								...n.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							F(d, c, l, t)
						}, i), Object(L.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				K = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(L.a)() && console.error(t)
					}
				},
				W = (e, t) => {
					const n = R.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? R.delete(e) : Object(L.a)() && console.error(t)
				};
			var V = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/commentSelector.ts"),
				q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				z = n("./src/reddit/actions/comment/websocket/constants.ts");
			const Q = Object(v.a)(z.b),
				J = Object(v.a)(z.c),
				X = Object(v.a)(z.a),
				Z = Object(v.a)(z.d),
				Y = {},
				$ = (e, t, n, o) => async (s, r) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: o,
							uniqueId: s
						} = e;
						S.has(s) ? t() : (S.add(s), setTimeout(() => {
							S.delete(s), F(o, s, {
								...B
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case P.NEW_COMMENT: {
									const n = t.payload.name,
										a = j(t.payload),
										i = r(),
										c = n && Object(G.b)(i, {
											commentId: n
										}),
										d = !(!n || !Y[n]);
									if (a && !d) {
										const n = M(0, o, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(V.w)(i, {
												commentsPageKey: e
											});
											s(Q({
												authorFlair: n,
												comment: a,
												commentsPageKey: e,
												headCommentId: t,
												numComments: r
											}))
										} else s(J({
											authorFlair: n,
											comment: a,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case P.UPDATE_COMMENT: {
									const n = t.payload.name,
										a = r(),
										i = n && Object(G.b)(a, {
											commentId: n
										}),
										c = j(t.payload);
									if (i && c) {
										const n = M(0, o, t.payload),
											r = t.payload.total_comment_count;
										s(J({
											authorFlair: n,
											comment: c,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case P.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										o = t.payload.score,
										a = r(),
										i = Object(G.b)(a, {
											commentId: n
										});
									i && s(J({
										comment: {
											...i,
											score: o
										},
										commentsPageKey: e
									}));
									break
								}
								case P.DELETE_COMMENT: {
									const e = t.payload.name,
										n = r(),
										o = Object(G.b)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s(X({
										id: e
									})) : Y[e] = P.DELETE_COMMENT;
									break
								}
								case P.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = r(),
										a = Object(G.b)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(q.m)(o, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? Y[n] = P.REMOVE_COMMENT : s(X({
										id: n
									}));
									break
								}
								case P.USER_JOIN: {
									const n = j(t.payload, {
											isSystem: !0
										}),
										o = !0;
									n && s(Z({
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
			var ee = n("./src/reddit/actions/pages/comments.ts"),
				te = n("./node_modules/fbt/lib/FbtPublic.js"),
				ne = n("./node_modules/uuid/v4.js"),
				oe = n.n(ne),
				se = n("./src/realtime/connection.ts");
			var re = {
					publish: n("./node_modules/graphql-tag/lib/index.js").a`
    mutation Mutation($input: PublishInput!) {
      publish(input: $input) {
        ok
      }
    }
  `
				},
				ae = n("./src/reddit/actions/login.ts"),
				ie = n("./src/reddit/actions/reactionAwards/constants.ts"),
				ce = n("./src/reddit/actions/toaster.ts"),
				de = n("./src/reddit/endpoints/awards/index.ts"),
				le = n("./src/lib/makeGqlRequest/index.ts"),
				me = n("./src/lib/makeRequest/index.ts"),
				ue = n("./src/reddit/models/Gold/Award.ts"),
				pe = n("./src/redditGQL/operations/AvailableAwards.json");
			var he = n("./src/reddit/models/Toast/index.ts"),
				be = n("./src/reddit/selectors/communityAwards.ts"),
				Ce = n("./src/reddit/selectors/experiments/chat.ts"),
				ve = n("./src/reddit/selectors/gold/awardIcon.ts");

			function fe(e) {
				return !!e
			}
			const ge = e => "chat_reaction_upvote" === e.id,
				xe = (e, t) => {
					var n;
					return (null !== (n = e.awards.chatReactions.availability[t]) && void 0 !== n ? n : []).map(t => Object(be.a)(e, t)).filter(fe)
				},
				Ee = Object(l.a)((e, t) => xe(e, t.subredditId), (e, t) => {
					var n;
					return Object.keys(null !== (n = t.awardCountsById) && void 0 !== n ? n : {}).map(n => {
						var o, s;
						const r = Object(be.a)(e, n),
							a = null !== (s = null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n]) && void 0 !== s ? s : 0;
						if (r && r.awardSubType === ue.d.ChatReaction && !(a <= 0)) return {
							award: r,
							total: a
						}
					}).filter(fe)
				}, (e, t) => {
					const n = (e => {
						const t = e.reduce((e, t, n) => ({
								...e,
								[t.id]: n
							}), {}),
							n = e.length;
						return (e, o) => {
							var s, r;
							return (null !== (s = t[e.award.id]) && void 0 !== s ? s : n) - (null !== (r = t[o.award.id]) && void 0 !== r ? r : n)
						}
					})(e);
					return t.slice().sort(n)
				}),
				_e = (e, t, n) => {
					var o, s;
					return !!(null === (s = null === (o = e.awards.chatReactions.pending) || void 0 === o ? void 0 : o[n]) || void 0 === s ? void 0 : s[t])
				};
			var ke = n("./src/reddit/selectors/user.ts");
			const Ie = Object(v.a)(ie.c),
				Oe = Object(v.a)(ie.b),
				ye = Object(v.a)(ie.a),
				we = Object(v.a)(ie.e),
				je = Object(v.a)(ie.f),
				Te = Object(v.a)(ie.d),
				Ne = Object(v.a)(ie.h),
				Me = Object(v.a)(ie.i),
				Le = Object(v.a)(ie.g),
				Re = Object(v.a)(ie.j),
				Ae = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					t(Ie());
					try {
						const n = await (async (e, t) => {
							const n = await Object(le.a)(e, {
								...pe,
								variables: {
									subredditId: t,
									subTypes: [ue.d.ChatReaction]
								}
							});
							if (!Object(me.c)(n)) throw n.error;
							return n.body.data.availableAwards
						})(s(), e);
						t(Oe({
							subredditId: e,
							availableAwards: n
						}))
					} catch (r) {
						t(ye(r))
					}
				}, Se = async (e, t) => {
					let {
						awardId: n,
						commentId: o,
						operation: s
					} = t;
					var r;
					const a = Object(G.b)(e, {
						commentId: o
					});
					if (!a) return;
					const i = Object(be.a)(e, n),
						c = Object(ke.i)(e);
					return Object(se.a)(null === (r = e.user.session) || void 0 === r ? void 0 : r.accessToken).mutate({
						mutation: re.publish,
						variables: {
							input: {
								channel: {
									category: "COMMENT_REACTIONS",
									teamOwner: "CHAT",
									postID: a.postId
								},
								LiveChatReactionMessageData: {
									actionTaken: s,
									userID: c,
									reaction: {
										id: n,
										iconURL: Object(ve.c)({
											award: i,
											size: 64,
											prefersReducedMotion: !1,
											postOrComment: a
										})
									},
									commentID: o
								}
							}
						}
					})
				}, Pe = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = await Object(de.a)(s(), {
						thingId: e
					});
					t(Object(C.e)(r))
				}, Be = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const r = n();
					if (!Object(ke.Q)(r)) return t(Object(ae.openLoginModal)());
					if (!_e(r, e.awardId, e.commentId)) {
						t(we(e));
						try {
							const {
								awardId: n,
								commentId: o
							} = e, a = oe()(), i = Object(be.a)(r, n), c = Object(Ce.c)(r);
							if ((e => ge(e) || (e => "chat_reaction_downvote" === e.id)(e))(i)) {
								const e = ge(i) ? "chat_reaction_downvote" : "chat_reaction_upvote",
									n = ((e, t, n) => {
										var o, s;
										const r = Object(G.b)(e, {
											commentId: n
										});
										return null === (s = null === (o = null == r ? void 0 : r.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t]) || void 0 === s ? void 0 : s[0]
									})(r, e, o);
								n && await t(De({
									awardId: e,
									awardingId: n,
									commentId: o
								}, {
									suppressCommentDataRefresh: !0
								}))
							}
							await Object(de.b)(s(), {
								awardId: n,
								targetId: o,
								isAnonymous: !1,
								nonce: a
							}), c || await Se(r, {
								awardId: n,
								commentId: o,
								operation: ue.g.Add
							}), await t(Pe(o)), t(je({
								awardId: n,
								commentId: o
							}))
						} catch (a) {
							t(Te({
								...e,
								error: a
							})), t(Object(ce.f)({
								kind: he.b.Error,
								duration: ce.a,
								text: te.fbt._("An error has occurred while giving a reaction. Please try again.", null, {
									hk: "2JvsOk"
								})
							}))
						}
					}
				}, De = (e, t) => async (n, o, s) => {
					let {
						gqlContext: r
					} = s;
					const a = o();
					if (!Object(ke.Q)(a)) return n(Object(ae.openLoginModal)());
					if (!_e(a, e.awardId, e.commentId)) {
						n(Ne(e));
						try {
							const {
								awardId: o,
								awardingId: s,
								commentId: i
							} = e, c = Object(Ce.c)(a);
							await Object(de.c)(r(), {
								awardingId: s
							}), c || await Se(a, {
								awardId: o,
								commentId: i,
								operation: ue.g.Remove
							}), !(null == t ? void 0 : t.suppressCommentDataRefresh) && await n(Pe(e.commentId)), n(Me({
								awardId: o,
								awardingId: s,
								commentId: i
							}))
						} catch (i) {
							n(Le({
								...e,
								error: i
							})), n(Object(ce.f)({
								kind: he.b.Error,
								duration: ce.a,
								text: te.fbt._("An error has occurred while removing a reaction. Please try again.", null, {
									hk: "4kopxI"
								})
							}))
						}
					}
				};
			var Fe = n("./src/reddit/components/Comments/States/index.tsx"),
				Ue = n("./node_modules/lodash/defer.js"),
				He = n.n(Ue),
				Ke = n("./src/lib/classNames/index.ts"),
				We = n("./src/lib/lessComponent.tsx"),
				Ve = n("./src/lib/makeDraftKey/index.ts"),
				Ge = n("./src/lib/objectSelector/index.ts"),
				qe = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ze = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Qe = n("./src/reddit/helpers/awards/message.ts"),
				Je = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				Xe = n("./src/reddit/components/RichTextJson/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Star/index.tsx"),
				$e = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				et = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				tt = n.n(et);
			const nt = Object(Ge.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				ot = e => {
					const {
						award: t,
						comment: n,
						iconUrl: o
					} = e;
					let s = "",
						r = !0,
						a = !1;
					return t.coinPrice < Qe.a ? (s = tt.a.silverTierAwardComment, r = !1) : t.coinPrice < Qe.b ? s = tt.a.goldTierAwardComment : (s = tt.a.platinumTierAwardComment, a = !0), c.a.createElement("div", {
						className: Object(Ke.a)(tt.a.awardComment, s)
					}, c.a.createElement("div", {
						className: tt.a.imageContainer
					}, r && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ye.a, {
						className: Object(Ke.a)(tt.a.backgroundAnimation, tt.a.backgroundStar)
					}), c.a.createElement($e.a, {
						className: Object(Ke.a)(tt.a.backgroundAnimation, tt.a.backgroundStar, tt.a.backgroundStar2)
					})), a && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ze.a, {
						className: Object(Ke.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleBottomLeft)
					}), c.a.createElement(Ze.a, {
						className: Object(Ke.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleTopRight)
					}), c.a.createElement(Ze.a, {
						className: Object(Ke.a)(tt.a.backgroundAnimation, tt.a.backgroundSparkle, tt.a.sparkleBottomRight)
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
				rt = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				at = n.n(rt);
			var it = e => {
					let {
						commentCount: t,
						isLivestreaming: n,
						onClick: o
					} = e;
					const s = Object(Ke.a)(at.a.CollapsedComment, {
						[at.a.LivestreamingWrapper]: n
					});
					return c.a.createElement("div", {
						className: s,
						onClick: o
					}, te.fbt._("collapsed {collapsed message} (may be sensitive)", [te.fbt._param("collapsed message", te.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [te.fbt._plural(t, "message count")], {
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
				ft = n.n(vt);

			function gt() {
				return (gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const xt = We.a.button("MenuItem", ft.a),
				Et = We.a.a("MenuItemPermalink", ft.a),
				_t = e => {
					let {
						children: t,
						comment: n,
						onClick: o,
						onHideTooltip: s,
						onShowTooltip: r,
						sendEvent: a,
						tooltipId: i,
						tooltipText: d,
						trackingNoun: l
					} = e;
					return c.a.createElement(xt, {
						id: i,
						onMouseEnter: r.bind(void 0, i),
						onMouseLeave: s.bind(void 0, i),
						onClick: e => {
							o(e), l && a(Object(Ct.f)(l, n.id))
						}
					}, t, c.a.createElement(bt.c, {
						tooltipId: i
					}, d))
				},
				kt = e => c.a.createElement(_t, gt({
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
				Nt = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Mt = n("./src/reddit/icons/svgs/Edit/index.tsx"),
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
			const Wt = We.a.wrapped(Rt.a, "BlockIcon", ft.a),
				Vt = We.a.wrapped(Lt.a, "FlagIcon", ft.a),
				Gt = We.a.wrapped(Mt.a, "EditIcon", ft.a),
				qt = We.a.wrapped(Nt.a, "ApproveIcon", ft.a),
				zt = We.a.wrapped(Pt.a, "ReplyIcon", ft.a),
				Qt = We.a.wrapped(St.a, "RemoveIcon", ft.a),
				Jt = We.a.wrapped(Bt.a, "SpamIcon", ft.a),
				Xt = We.a.wrapped(At.a, "ModeratorIcon", ft.a),
				Zt = e => (t, n) => {
					let {
						comment: o
					} = n;
					return `${e}${o.id}`
				},
				Yt = e => `Comment-${e}--Modal--DeleteComment`,
				$t = Object(l.c)({
					currentUser: ke.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(q.m)(e, {
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
						onUpvoteClick: () => e(Object(C.r)(n.id)),
						onDownvoteClick: () => e(Object(C.k)(n.id)),
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
						deleteComment: r,
						deleteTooltipId: a,
						editTooltipId: i,
						isAuthorBlocked: d,
						isDeleteModalOpen: l,
						isLivestreaming: u,
						isMod: p,
						onApproveClick: h,
						onBlockClick: b,
						onDeleteClick: C,
						onEditClick: v,
						onHideTooltip: f,
						onRemoveClick: g,
						onReplyClick: x,
						onReportClick: E,
						onShowTooltip: _,
						onSpamClick: k,
						onUnblockClick: I,
						onDistinguishClick: O,
						reportFlowIsOpen: y,
						replyTooltipId: w,
						reportTooltipId: j,
						approveTooltipId: T,
						blockTooltipId: N,
						removeTooltipId: M,
						distinguishTooltipId: L,
						sendEvent: R,
						spamTooltipId: A,
						toggleDeleteCommentModal: S,
						timestampUpdateTrigger: P,
						showTime: B
					} = e, D = !!s && s.id === t.authorId, F = Object(yt.b)(t), U = t.isApproved && F, H = !t.bannedBy || t.bannedBy === m.k, K = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: _,
						sendEvent: R
					}, W = t.isMod;
					return c.a.createElement("div", {
						className: Object(Ke.a)(ft.a.container, n)
					}, c.a.createElement("div", {
						className: Object(Ke.a)(ft.a.Menu, {
							[ft.a.Livestreaming]: u
						})
					}, (t.bannedBy || F) && p && c.a.createElement(_t, Kt({
						onClick: h,
						tooltipId: T,
						tooltipText: U ? te.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : te.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(qt, null)), !t.isLocked && c.a.createElement(_t, Kt({
						onClick: x,
						tooltipId: w,
						tooltipText: te.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(zt, null)), p && D && c.a.createElement(_t, Kt({
						onClick: () => O(W ? m.G.NONE : m.G.MODERATOR),
						tooltipId: L,
						tooltipText: W ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Xt, null)), p && H && c.a.createElement(_t, Kt({
						onClick: k,
						tooltipId: A,
						tooltipText: te.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Jt, null)), !D && c.a.createElement(_t, Kt({
						onClick: E,
						tooltipId: j,
						tooltipText: te.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Vt, null)), y && (() => e.reportingRevampEnabled ? c.a.createElement(jt.a, {
						withOverlay: !0,
						overlayCustomStyles: wt.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(wt.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: wt.b,
						postId: t.postId
					}))(), D && !u && c.a.createElement(_t, Kt({
						onClick: v,
						tooltipId: i,
						tooltipText: te.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, K), c.a.createElement(Gt, null)), p && H ? c.a.createElement(_t, Kt({
						onClick: g,
						tooltipId: M,
						tooltipText: t.bannedBy === m.k ? te.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : te.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, K), c.a.createElement(Qt, null)) : D && c.a.createElement(_t, Kt({
						onClick: C,
						tooltipId: a,
						tooltipText: te.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(Qt, null)), l && c.a.createElement(It.a, {
						actionText: te.fbt._("Delete", null, {
							hk: "3j0q3Z"
						}),
						cancelActionText: te.fbt._("Keep", null, {
							hk: "3LTfYE"
						}),
						headerText: te.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: te.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: r,
						toggleModal: S,
						withOverlay: !0
					}), !!s && !D && c.a.createElement(_t, Kt({
						onClick: () => d ? I() : b(),
						tooltipId: N,
						tooltipText: d ? te.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : te.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, K), c.a.createElement(Wt, null))), B && c.a.createElement(kt, Kt({}, e, {
						tooltipId: o,
						tooltipText: c.a.createElement(Ot.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(Ot.d, {
						seconds: t.created
					})))
				})),
				tn = n("./src/reddit/actions/gold/modals.ts"),
				nn = n("./src/reddit/helpers/correlationIdTracker.ts"),
				on = n("./src/reddit/hooks/useTracking.ts"),
				sn = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				rn = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				an = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				cn = n("./src/reddit/icons/svgs/Reply2/index.tsx"),
				dn = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less"),
				ln = n.n(dn);

			function mn() {
				return (mn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const un = e => {
				let {
					children: t,
					commentId: n,
					onClick: o,
					tooltipId: s,
					tooltipText: r,
					trackingNoun: a,
					suppressBackgroundOnHover: i = !1,
					...l
				} = e;
				const m = Object(d.d)(),
					u = Object(on.a)();
				return c.a.createElement("button", mn({}, l, {
					id: s,
					className: Object(Ke.a)(ln.a.menuItem, {
						[ln.a.suppressBackgroundOnHover]: i
					}),
					onMouseEnter: () => {
						m(Object(pt.f)({
							tooltipId: s
						}))
					},
					onMouseLeave: () => {
						m(Object(pt.i)())
					},
					onClick: e => {
						null == o || o(e), a && n && u(Object(Ct.f)(a, n))
					}
				}), t, c.a.createElement(bt.c, {
					tooltipId: s
				}, r))
			};
			var pn = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				hn = n("./src/reddit/controls/Dropdown/index.tsx"),
				bn = n("./src/reddit/selectors/tooltip.ts");
			const Cn = Object(pn.a)(hn.a),
				vn = e => {
					let {
						dropdownId: t,
						icon: n,
						children: o,
						onClick: s
					} = e;
					const r = Object(d.d)(),
						a = Object(d.e)(e => Object(bn.b)(t)(e)),
						i = c.a.useCallback(() => {
							r(Object(pt.h)({
								tooltipId: t
							})), null == s || s()
						}, [r, t, s]);
					return c.a.createElement("button", {
						id: t,
						className: ln.a.menuItem,
						onClick: i
					}, n, c.a.createElement(Cn, {
						className: ln.a.dropdownMenu,
						isOpen: a,
						tooltipId: t
					}, o))
				};
			var fn = n("./src/reddit/controls/Dropdown/Row.tsx"),
				gn = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				xn = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				En = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_n = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				kn = n("./src/reddit/icons/svgs/Distinguish/index.tsx");
			const In = e => {
				let {
					comment: t,
					isCommentAuthor: n = !1
				} = e;
				const o = t.id,
					s = Object(yt.b)(t),
					r = t.isApproved && s,
					a = t.bannedBy === m.k,
					i = t.isMod,
					l = !n && (!t.bannedBy || a),
					u = Object(d.d)(),
					p = Object(on.a)(),
					h = c.a.useCallback(e => {
						p(Object(Ct.f)(e, o))
					}, [p, o]),
					b = c.a.useCallback(() => {
						u(Object(lt.a)(o)), h("approve")
					}, [u, h, o]),
					C = c.a.useCallback(() => {
						const e = a ? "confirm_remove" : "remove";
						u(Object(lt.e)(o, !1)), h(e)
					}, [u, h, o, a]),
					v = c.a.useCallback(() => {
						u(Object(lt.e)(o, !0)), h("spam")
					}, [u, h, o]),
					f = c.a.useCallback(() => {
						u(Object(lt.b)(o, m.G.MODERATOR))
					}, [u, o]),
					g = c.a.useCallback(() => {
						u(Object(lt.b)(o, m.G.NONE))
					}, [u, o]);
				return c.a.createElement(c.a.Fragment, null, n && i && c.a.createElement(fn.b, {
					className: ln.a.dropdownMenuItem,
					displayText: te.fbt._("Undistinguish as Mod", null, {
						hk: "2ohUEB"
					}),
					onClick: g
				}, c.a.createElement(_n.a, {
					className: ln.a.dropdownIcon
				})), n && !i && c.a.createElement(fn.b, {
					className: ln.a.dropdownMenuItem,
					displayText: te.fbt._("Distinguish as Mod", null, {
						hk: "jywZz"
					}),
					onClick: f
				}, c.a.createElement(kn.a, {
					className: ln.a.dropdownIcon
				})), (t.bannedBy || s) && c.a.createElement(fn.b, {
					className: ln.a.dropdownMenuItem,
					displayText: r ? te.fbt._("Reapprove", null, {
						hk: "vlRqn"
					}) : te.fbt._("Approve", null, {
						hk: "3Vc0Oh"
					}),
					onClick: b
				}, c.a.createElement(gn.a, {
					className: ln.a.dropdownIcon
				})), l && c.a.createElement(fn.b, {
					className: ln.a.dropdownMenuItem,
					displayText: a ? te.fbt._("Confirm removal", null, {
						hk: "3q7g1J"
					}) : te.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: C
				}, c.a.createElement(xn.a, {
					className: ln.a.dropdownIcon
				})), l && c.a.createElement(fn.b, {
					className: ln.a.dropdownMenuItem,
					displayText: te.fbt._("Remove as Spam", null, {
						hk: "2bRa8t"
					}),
					onClick: v
				}, c.a.createElement(En.a, {
					className: ln.a.dropdownIcon
				})))
			};
			var On = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				yn = n("./src/reddit/icons/fonts/Report/index.tsx"),
				wn = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				jn = n("./src/reddit/icons/svgs/UserBlock/index.tsx");
			const Tn = e => `Comment-${e}--Modal--DeleteComment`,
				Nn = e => `CommentChatPost--ModMenu--${e}`,
				Mn = e => `CommentChatPost--OverflowMenu--${e}`,
				Ln = e => {
					let {
						comment: t,
						commentsPageKey: n,
						isLivestreaming: o = !1
					} = e;
					const s = t.id,
						r = Object(d.d)(),
						a = Object(on.a)(),
						i = Object(d.e)(ke.k),
						l = Object(d.e)(e => Object(Ut.c)(e, t.authorId)),
						m = i && i.id === t.authorId,
						u = c.a.useCallback(e => {
							a(Object(Ct.f)(e, s))
						}, [a, s]),
						p = c.a.useCallback(() => {
							r(Object(ut.c)(s, !1)), u("report")
						}, [r, u, s]),
						h = c.a.useCallback(() => {
							r(Object(mt.i)(Tn(t.id))), u("delete")
						}, [r, u, t]),
						b = c.a.useCallback(() => {
							const e = t.media && t.media.rteMode;
							n && r(Object(dt.e)({
								commentId: t.id,
								draftKey: Object(Ve.a)(Dt.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: e,
								commentsPageKey: n
							})), u("edit")
						}, [r, u, t, n]),
						C = c.a.useCallback(() => {
							r(Object(ht.h)(t.author)), u("block")
						}, [r, u, t]),
						v = c.a.useCallback(() => {
							r(Object(ht.g)(t.author)), u("unblock")
						}, [r, u, t]);
					return c.a.createElement(c.a.Fragment, null, m && !o && c.a.createElement(fn.b, {
						className: ln.a.dropdownMenuItem,
						displayText: te.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: b
					}, c.a.createElement(On.a, {
						className: ln.a.dropdownIcon
					})), m && c.a.createElement(fn.b, {
						className: ln.a.dropdownMenuItem,
						displayText: te.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						onClick: h
					}, c.a.createElement(wn.a, {
						className: ln.a.dropdownIcon
					})), !m && c.a.createElement(fn.b, {
						className: ln.a.dropdownMenuItem,
						displayText: te.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						onClick: p
					}, c.a.createElement(yn.a, {
						className: ln.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && !l && c.a.createElement(fn.b, {
						className: ln.a.dropdownMenuItem,
						displayText: te.fbt._("Block", null, {
							hk: "2DpLB7"
						}),
						onClick: C
					}, c.a.createElement(jn.a, {
						className: ln.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && l && c.a.createElement(fn.b, {
						className: ln.a.dropdownMenuItem,
						displayText: te.fbt._("Unblock", null, {
							hk: "2WvyIX"
						}),
						onClick: v
					}, c.a.createElement(jn.a, {
						className: ln.a.dropdownIcon
					})))
				};
			var Rn = n("./src/reddit/selectors/userPrefs.ts"),
				An = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/ReactionButton/index.m.less"),
				Sn = n.n(An);
			const Pn = e => {
					let {
						reaction: t,
						comment: n
					} = e;
					var o, s;
					const r = Object(on.a)(),
						a = Object(d.d)(),
						i = Object(d.e)(Rn.c),
						l = null === (s = null === (o = n.awardingsByCurrentUser) || void 0 === o ? void 0 : o[t.id]) || void 0 === s ? void 0 : s[0];
					return c.a.createElement(un, {
						commentId: n.id,
						tooltipId: `CommentChatPost--${t.id}${n.id}`,
						tooltipText: t.name,
						suppressBackgroundOnHover: !0,
						onClick: l ? () => {
							l && (a(De({
								awardId: t.id,
								awardingId: l,
								commentId: n.id
							})), r(Object(Ct.h)(t.id, n.id, "actions_menu")))
						} : () => {
							a(Be({
								awardId: t.id,
								commentId: n.id
							})), r(Object(Ct.g)(t.id, n.id, "actions_menu"))
						}
					}, c.a.createElement("img", {
						className: Sn.a.snoomojiWrapper,
						src: Object(ve.c)({
							award: t,
							postOrComment: n,
							size: 64,
							prefersReducedMotion: i
						}),
						alt: t.name
					}))
				},
				Bn = (e, t) => `CommentChatPost--${e}--${t}`,
				Dn = Object(l.c)({
					availableReactionAwards: (e, t) => {
						let {
							comment: n
						} = t;
						return xe(e, n.subredditId)
					},
					currentUser: ke.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(q.m)(e, {
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
						return Object(Ft.a)(e) === Tn(n.id)
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Ut.c)(e, n.authorId)
					},
					isLivePostCreatorModRoleEnabled: e => Object(Ce.e)(e),
					isChatCreateOnlyPerm: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(q.a)(e, {
							postId: n.postId
						})
					}
				});
			var Fn = Object(d.b)(Dn, (e, t) => {
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
					toggleDeleteCommentModal: () => e(Object(mt.i)(Tn(n.id)))
				}
			})(e => {
				let {
					comment: t,
					commentsPageKey: n,
					className: o,
					currentUser: s,
					deleteComment: r,
					giveAward: a,
					isAuthorBlocked: i,
					isDeleteModalOpen: l,
					isLivestreaming: m,
					isMod: u,
					isChatCreateOnlyPerm: p,
					isLivePostCreatorModRoleEnabled: h,
					onReplyClick: b,
					reportFlowIsOpen: C,
					toggleDeleteCommentModal: v,
					availableReactionAwards: f
				} = e;
				const g = !!s && s.id === t.authorId,
					x = Object(d.e)(e => !m && Object(Ce.a)(e)),
					E = Object(on.a)(),
					_ = c.a.useCallback(() => {
						E(Object(Ct.f)("other_options", t.id))
					}, [E, t.id]);
				return c.a.createElement("div", {
					className: Object(Ke.a)(ln.a.menu, o, {
						[ln.a.livestreaming]: m
					})
				}, x && !!(null == f ? void 0 : f.length) && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: ln.a.innerWrapper
				}, f.map(e => c.a.createElement(Pn, {
					key: e.id,
					comment: t,
					reaction: e
				}))), c.a.createElement("div", {
					className: ln.a.verticalBar
				})), c.a.createElement("div", {
					className: ln.a.innerWrapper
				}, !t.isLocked && !i && Boolean(t.authorId) && c.a.createElement(c.a.Fragment, null, c.a.createElement(un, {
					onClick: b,
					commentId: t.id,
					tooltipId: Bn("Reply", t.id),
					tooltipText: te.fbt._("Reply", null, {
						hk: "14j3OR"
					}),
					trackingNoun: "reply",
					"data-testid": "comment-reply"
				}, c.a.createElement(cn.a, {
					className: ln.a.icon
				})), x && !g && c.a.createElement(un, {
					onClick: a,
					commentId: t.id,
					tooltipId: Bn("Award", t.id),
					tooltipText: te.fbt._("Give Award", null, {
						hk: "3rUq40"
					}),
					trackingNoun: "award",
					"data-testid": "comment-award"
				}, c.a.createElement(sn.a, {
					className: ln.a.icon
				}))), u && !(p && h) && c.a.createElement(vn, {
					dropdownId: Nn(t.id),
					icon: c.a.createElement(rn.a, {
						className: ln.a.icon
					})
				}, c.a.createElement(In, {
					comment: t,
					isCommentAuthor: g
				})), c.a.createElement(vn, {
					dropdownId: Mn(t.id),
					icon: c.a.createElement(an.a, {
						className: ln.a.icon
					}),
					onClick: _
				}, c.a.createElement(Ln, {
					comment: t,
					isLivestreaming: m,
					commentsPageKey: n
				})), C && c.a.createElement(jt.a, {
					withOverlay: !0,
					overlayCustomStyles: wt.b,
					postId: t.postId,
					commentId: t.id
				}), l && c.a.createElement(It.a, {
					actionText: te.fbt._("Delete", null, {
						hk: "3j0q3Z"
					}),
					cancelActionText: te.fbt._("Keep", null, {
						hk: "3LTfYE"
					}),
					headerText: te.fbt._("Delete comment", null, {
						hk: "4uv7tI"
					}),
					modalText: te.fbt._("Are you sure you want to delete your comment?", null, {
						hk: "227ya0"
					}),
					onConfirm: r,
					toggleModal: v,
					withOverlay: !0
				})))
			});
			const Un = e => {
				return Object(d.e)(Ce.b) ? c.a.createElement(Fn, e) : c.a.createElement(en, e)
			};
			var Hn = n("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx"),
				Kn = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Wn = n.n(Kn);
			const Vn = Object(Ge.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var Gn = e => {
					const {
						comment: t
					} = e;
					return void 0 === Vn(e) ? null : c.a.createElement(Xe.b, {
						className: Wn.a.SystemMessageText,
						content: Object(Je.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: Vn(e),
						useExplicitTextColor: !0
					})
				},
				qn = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				zn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Qn = n("./src/reddit/controls/ErrorText/index.tsx"),
				Jn = n("./src/reddit/constants/experiments.ts"),
				Xn = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Zn = e => Object(Xn.c)(e, {
					experimentName: Jn.zb,
					experimentEligibilitySelector: Xn.a
				}) === Jn.vb.Enabled,
				Yn = (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Object(G.b)(e, {
						commentId: n
					});
					if (o && o.associatedAwardId) return Object(be.a)(e, o.associatedAwardId)
				};
			var $n = n("./src/reddit/selectors/poll/index.ts"),
				eo = n("./src/reddit/components/CommentsChat/Comment/v1/index.m.less"),
				to = n.n(eo);
			const no = 250,
				oo = 10,
				so = We.a.wrapped(Qn.b, "ErrorText", to.a),
				ro = We.a.wrapped(qe.a, "TopMeta", to.a),
				ao = Object(zn.u)(),
				io = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return Yn(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = Yn(e, {
							commentId: n
						});
						if (o) return Object(ve.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: n
						})
					},
					comment: G.b,
					commentPermalink: V.m,
					errorMsgs: V.H,
					flair: V.e,
					isActive: (e, t) => {
						let {
							commentId: n
						} = t;
						return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
					},
					isEditing: V.z,
					prediction: $n.f,
					subreddit: zn.r,
					shouldRenderSystemMessages: Zn
				})),
				co = Object(Ge.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class lo extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > no && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let n = no;
						if (t) {
							n = e.scrollHeight + oo;
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
						commentsPageKey: r,
						errorMsgs: a,
						flair: i,
						isActive: d,
						isEditing: l,
						isLivestreaming: m,
						postId: u,
						prediction: p,
						renderedInOverlay: h,
						sendEvent: b,
						targetComment: C,
						timestampUpdateTrigger: v,
						addToRefList: f,
						onReplyClick: g,
						shouldRenderSystemMessages: x
					} = this.props, {
						isCollapsed: E,
						isExpanded: _,
						isTruncated: k
					} = this.state;
					if (!o) return null;
					d && He()(() => this.elemRef.current && this.elemRef.current.focus()), He()(() => this.elemRef && this.elemRef.current && f && f(this.elemRef));
					const I = o.isSystem,
						O = !l && !o.isDeleted && !I,
						y = !!e,
						w = Object(Ke.a)({
							[to.a.SystemMessageWrapper]: I && !m && x,
							[to.a.CommentWrapper]: !m && !I,
							[to.a.CommentExpanded]: _,
							[to.a.CommentTruncated]: k,
							[to.a.HighlightTarget]: C,
							[to.a.LivestreamingCommentWrapper]: m
						});
					return E ? c.a.createElement(it, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: w
					}, l && c.a.createElement(qn.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: u,
						sendEvent: b,
						draftKey: Object(Ve.a)(Dt.c.edit, o.id),
						commentsPageKey: r,
						isEditing: l,
						comment: o
					}), O && c.a.createElement(c.a.Fragment, null, c.a.createElement(ro, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: o,
						commentsPageKey: r,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: m,
						renderedInOverlay: h
					}, c.a.createElement(st.a, {
						className: Object(Ke.a)(to.a.ChatIcon, {
							[to.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: o.profileImage,
						userId: o.authorId,
						isNSFW: o.profileOver18 || o.authorIconIsNSFW
					})), o.parentId && c.a.createElement(Hn.a, {
						className: to.a.Reply,
						commentId: o.parentId,
						onReplyClick: g,
						isLivestreaming: m
					}), m && c.a.createElement("span", {
						className: to.a.livestreamingTimeStamp
					}, c.a.createElement(Ot.d, {
						seconds: o.created
					})), y && e && m ? c.a.createElement(ot, {
						award: e,
						comment: o,
						iconUrl: t
					}) : p ? c.a.createElement(ze.a, {
						comment: o,
						prediction: p
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(Xe.b, {
						className: Object(Ke.a)(to.a.RichTextJson, {
							[to.a.Livestreaming]: m
						}),
						content: Object(Je.a)(o),
						rtJsonElementProps: co(this.props),
						useExplicitTextColor: m
					}), c.a.createElement(Un, {
						className: Object(Ke.a)(to.a.Menu, {
							[to.a.Livestreaming]: m
						}),
						comment: o,
						commentPermalink: s,
						commentsPageKey: r,
						isLivestreaming: m,
						showTime: !m,
						timestampUpdateTrigger: v
					}))), o.isDeleted && c.a.createElement(ct.a, {
						className: Object(Ke.a)(to.a.DeletedComment, {
							[to.a.Livestreaming]: m
						})
					}), O && a && a.map((e, t) => c.a.createElement(so, {
						key: `${t}-${e}`
					}, e)), !l && k && c.a.createElement("button", {
						className: Object(Ke.a)(to.a.CommentReadMoreButton, {
							[to.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), I && !m && x && c.a.createElement(Gn, {
						comment: o
					}))
				}
			}
			var mo = ao(io(lo)),
				uo = n("./src/lib/prettyPrintNumber/index.ts"),
				po = n("./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less"),
				ho = n.n(po);
			const bo = e => {
				let {
					className: t,
					enforceDarkMode: n,
					comment: o,
					reaction: s
				} = e;
				var r, a, i, l;
				const m = Object(d.d)(),
					u = Object(on.a)(),
					p = Object(d.e)(Rn.c),
					h = null !== (a = null === (r = o.awardingsByCurrentUser) || void 0 === r ? void 0 : r[s.id]) && void 0 !== a ? a : [],
					b = Boolean(h.length);
				return c.a.createElement("button", {
					className: Object(Ke.a)(t, ho.a.reactionAwardButton, {
						[ho.a.darkMode]: n,
						[ho.a.activeReactionButton]: b
					}),
					onClick: b ? () => {
						m(De({
							awardId: s.id,
							awardingId: h[0],
							commentId: o.id
						})), u(Object(Ct.h)(s.id, o.id, "quick_button"))
					} : () => {
						m(Be({
							awardId: s.id,
							commentId: o.id
						})), u(Object(Ct.g)(s.id, o.id, "quick_button"))
					}
				}, c.a.createElement("img", {
					className: ho.a.snoomoji,
					src: Object(ve.c)({
						award: s,
						postOrComment: o,
						size: 64,
						prefersReducedMotion: p
					}),
					alt: s.name
				}), c.a.createElement("span", {
					className: Object(Ke.a)(ho.a.countText, {
						[ho.a.darkMode]: n
					})
				}, Object(uo.b)(null !== (l = null === (i = o.awardCountsById) || void 0 === i ? void 0 : i[s.id]) && void 0 !== l ? l : 0)))
			};
			var Co = n("./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less"),
				vo = n.n(Co);
			const fo = () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
				className: vo.a.icon
			}, c.a.createElement(wn.a, null)), c.a.createElement("span", {
				className: vo.a.label
			}, te.fbt._("This message was deleted", null, {
				hk: "23fI7b"
			})));
			var go = n("./src/reddit/components/UserIcon/index.tsx"),
				xo = n("./src/reddit/icons/svgs/Error/index.tsx"),
				Eo = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				_o = n("./src/reddit/components/ContentTooltip/index.tsx"),
				ko = n("./src/reddit/helpers/trackers/gild.ts"),
				Io = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Oo = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/AwardsHovercard/index.m.less"),
				yo = n.n(Oo);
			const wo = {
					height: 280,
					width: 275
				},
				jo = e => {
					let {
						postOrComment: t,
						id: n,
						tooltipId: o
					} = e;
					const s = t.awardCountsById,
						r = Object(d.d)(),
						a = Object(on.a)(),
						i = Object(d.e)(e => Object(be.j)(e, {
							thing: t
						})),
						l = Object(d.e)(e => {
							const n = Object(ke.k)(e);
							return (null == n ? void 0 : n.id) === t.authorId
						}),
						m = Object(d.e)(Rn.c),
						u = c.a.useCallback(() => {
							r(Object(pt.i)())
						}, [r]);
					return s && i.length ? c.a.createElement(_o.a, {
						className: yo.a.container,
						tooltipId: o,
						tooltipSizeEstimate: wo,
						defaultTooltipPosition: "top"
					}, c.a.createElement("div", {
						id: n,
						onClick: e => e.stopPropagation()
					}, c.a.createElement("div", {
						className: yo.a.header
					}, c.a.createElement("span", {
						className: yo.a.title
					}, te.fbt._("Awards", null, {
						hk: "2HinFQ"
					})), c.a.createElement("button", {
						onClick: u
					}, c.a.createElement(Io.a, {
						className: yo.a.closeIcon
					}))), c.a.createElement("div", {
						className: yo.a.awardsList
					}, i.map(e => c.a.createElement("div", {
						key: e.id,
						className: yo.a.award
					}, c.a.createElement("span", null, Object(uo.b)(s[e.id])), c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: yo.a.awardIcon,
						src: Object(ve.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: m
						})
					}), c.a.createElement("span", null, e.name))), !l && c.a.createElement("button", {
						className: yo.a.giveAwardButton,
						onClick: () => {
							u();
							const e = Object(nn.d)(nn.a.GildingFlow, !0);
							return a(Object(ko.clickGildEvent)(t.id, {
								pageType: "given_awards_list"
							})), r(Object(tn.d)({
								correlationId: e,
								thingId: t.id
							}))
						}
					}, c.a.createElement(sn.a, {
						className: yo.a.awardIcon
					}), c.a.createElement("span", null, te.fbt._("Give another award", null, {
						hk: "hGgqt"
					})))))) : null
				};
			var To = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/index.m.less"),
				No = n.n(To);
			const Mo = () => {},
				Lo = e => {
					let {
						postOrComment: t
					} = e;
					const n = `awards-badge-tooltip-${t.id}`,
						o = `awards-badge-tooltip-content-${t.id}`,
						s = Object(d.d)(),
						r = Object(on.a)(),
						a = Object(d.e)(e => Object(be.j)(e, {
							thing: t
						})),
						i = c.a.useMemo(() => a.reduce((e, n) => {
							var o;
							return e + ((null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n.id]) || 0)
						}, 0), [a, t]),
						l = c.a.useMemo(() => !(!Object(_.b)(t) || !t.awardingsByCurrentUser) && a.some(e => {
							var n, o;
							return Boolean(null === (o = null === (n = t.awardingsByCurrentUser) || void 0 === n ? void 0 : n[e.id]) || void 0 === o ? void 0 : o.length)
						}), [a, t]),
						m = Object(d.e)(Rn.c),
						u = Object(d.e)(e => Object(bn.b)(n)(e)),
						p = c.a.useCallback(() => {
							s(Object(pt.h)({
								tooltipId: n
							}))
						}, [s, n]),
						h = c.a.useCallback(() => {
							s(Object(pt.i)())
						}, [s]);
					c.a.useEffect(() => {
						u && r(Object(Ct.k)(t.id))
					}, [t.id, u]);
					const b = a.slice(0, 3);
					return b.length ? c.a.createElement(Eo.b, {
						onCloseUserDropdown: h,
						onOpenUserDropdown: Mo,
						dropdownIsOpen: u,
						hoverId: o,
						tooltipId: n
					}, c.a.createElement("button", {
						id: n,
						className: Object(Ke.a)(No.a.badge, {
							[No.a.awarded]: l
						}),
						onClick: p
					}, b.map(e => c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: No.a.awardIcon,
						src: Object(ve.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: m
						})
					})), c.a.createElement("span", {
						className: No.a.countText
					}, te.fbt._({
						"*": "{number} awards",
						_1: "1 award"
					}, [te.fbt._plural(i, "number", Object(uo.b)(i))], {
						hk: "34eaW8"
					}))), c.a.createElement(jo, {
						id: o,
						tooltipId: n,
						postOrComment: t
					})) : null
				};
			var Ro = n("./src/reddit/components/CommentsChat/Comment/v2/index.m.less"),
				Ao = n.n(Ro);
			var So = Object(zn.u)()(Object(d.b)(() => Object(l.c)({
				associatedAward: (e, t) => {
					let {
						commentId: n
					} = t;
					return Yn(e, {
						commentId: n
					})
				},
				awardIconUrl: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Yn(e, {
						commentId: n
					});
					if (o) return Object(ve.a)(e, {
						award: o,
						minSize: 64,
						postOrCommentId: n
					})
				},
				comment: G.b,
				commentPermalink: V.m,
				errorMsgs: V.H,
				flair: V.e,
				isActive: (e, t) => {
					let {
						commentId: n
					} = t;
					return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
				},
				isCommentAwardsAndReactionsEnabled: Ce.a,
				isEditing: V.z,
				prediction: $n.f,
				isSelectedForReply: (e, t) => {
					let {
						commentId: n,
						commentsPageKey: o
					} = t;
					return Object(V.K)(e, {
						commentId: n,
						commentsPageKey: o
					})
				},
				subreddit: zn.r,
				shouldRenderSystemMessages: Zn,
				commentSubmitError: G.c,
				isPendingComment: G.e,
				isDropdownMenuVisible: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Nn(n),
						s = Mn(n);
					return Object(bn.b)(o)(e) || Object(bn.b)(s)(e)
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
					commentPermalink: r,
					commentsPageKey: a,
					commentSubmitError: i,
					errorMsgs: l,
					flair: m,
					isActive: u,
					isCommentAwardsAndReactionsEnabled: p,
					isEditing: h,
					isDropdownMenuVisible: b,
					isLivestreaming: C = !1,
					isPendingComment: v,
					isSelectedForReply: f,
					postId: g,
					prediction: x,
					renderedInOverlay: E,
					sendEvent: _,
					targetComment: k,
					timestampUpdateTrigger: I,
					addToRefList: O,
					onReplyClick: y,
					onSubmitRetry: w,
					shouldRenderSystemMessages: j
				} = e;
				const T = c.a.useRef(null),
					N = c.a.useRef(null),
					[M, L] = c.a.useState(s && s.collapsed),
					[R, A] = c.a.useState(!1),
					[S, P] = c.a.useState(!1),
					B = c.a.useMemo(() => ({
						renderingObjectInfo: s || void 0
					}), [s]),
					D = Object(d.e)(e => s ? Ee(e, s) : []),
					F = () => {
						L(!M)
					};
				if (c.a.useEffect(() => {
						var e;
						N.current && (null === (e = N.current) || void 0 === e ? void 0 : e.scrollHeight) > 250 && !t && !C && P(!0)
					}, []), c.a.useEffect(() => {
						if (!N.current || C) return;
						const e = N.current;
						let t = 250;
						if (R) {
							t = e.scrollHeight + 10;
							const n = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", n)
							};
							e.addEventListener("transitionend", n)
						}
						e.style.maxHeight = `${t}px`
					}, [R, S, C]), c.a.useEffect(() => {
						var e;
						u && (null === (e = T.current) || void 0 === e || e.focus())
					}, [u]), c.a.useEffect(() => {
						T.current && O && O(T)
					}, [O]), !s) return null;
				const U = s.isSystem,
					H = !s.isDeleted && !U,
					K = !!t,
					W = Object.keys(s.awardCountsById || {}).length > 0,
					V = p && W,
					G = p && !!(null == D ? void 0 : D.length);
				return M ? c.a.createElement(it, {
					commentCount: 1,
					onClick: F
				}) : c.a.createElement("div", {
					className: Object(Ke.a)(Ao.a.container, {
						[Ao.a.livestreaming]: C,
						[Ao.a.selectedForReply]: f,
						[Ao.a.hover]: b,
						[Ao.a.hasError]: Boolean(i)
					}),
					tabIndex: 0,
					ref: T
				}, s.parentId && c.a.createElement("div", {
					className: Ao.a.replyWrapper
				}, c.a.createElement(Hn.a, {
					commentId: s.parentId,
					onReplyClick: e => {
						_(Object(Ct.b)(e)), y(e)
					},
					isLivestreaming: C,
					isV2Enabled: !0
				})), c.a.createElement("div", {
					id: k ? "targetComment" : void 0,
					className: Object(Ke.a)({
						[Ao.a.comment]: !U,
						[Ao.a.systemMessageComment]: U && !C && j,
						[Ao.a.highlighted]: k,
						[Ao.a.expanded]: R
					})
				}, H && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: Ao.a.avatar
				}, c.a.createElement(go.a, {
					className: Object(Ke.a)(Ao.a.icon),
					iconUrl: s.profileImage || s.authorIconImage,
					userName: s.author,
					isNSFW: Boolean(s.profileOver18 || s.authorIconIsNSFW)
				})), c.a.createElement("div", null, c.a.createElement(qe.a, {
					className: Ao.a.TopMeta,
					childrenInfo: o,
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: s,
					commentsPageKey: a,
					compact: !0,
					flair: m,
					ignoreFlairPosition: !0,
					ignoreLock: !0,
					isLivestreaming: C,
					renderedInOverlay: E,
					hideAwards: p
				}), c.a.createElement("span", {
					className: Ao.a.timestamp
				}, c.a.createElement(Ot.d, {
					seconds: s.created
				}))), !h && c.a.createElement("div", {
					ref: N,
					className: Object(Ke.a)(Ao.a.commentBody, {
						[Ao.a.expanded]: R
					})
				}, K && t && C ? c.a.createElement(ot, {
					award: t,
					comment: s,
					iconUrl: n
				}) : x ? c.a.createElement(ze.a, {
					comment: s,
					prediction: x
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(Xe.b, {
					className: Object(Ke.a)(Ao.a.richTextJson, {
						[Ao.a.livestreaming]: C
					}),
					content: Object(Je.a)(s),
					rtJsonElementProps: B,
					useExplicitTextColor: C
				}), (V || G) && c.a.createElement("div", {
					className: Ao.a.reactions
				}, V && c.a.createElement(Lo, {
					postOrComment: s
				}), G && D.map(e => {
					let {
						award: t
					} = e;
					return c.a.createElement(bo, {
						key: t.id,
						enforceDarkMode: C,
						comment: s,
						reaction: t
					})
				})), i && c.a.createElement("div", {
					className: Ao.a.error
				}, c.a.createElement(xo.a, null), c.a.createElement("span", null, te.fbt._("Message failed to send.", null, {
					hk: "24xGQi"
				})), c.a.createElement("button", {
					className: Ao.a.retryButton,
					onClick: w
				}, te.fbt._("Retry", null, {
					hk: "37t7Iq"
				}))), !v && !i && c.a.createElement(Un, {
					className: Ao.a.menu,
					comment: s,
					commentPermalink: r,
					commentsPageKey: a,
					isLivestreaming: C,
					timestampUpdateTrigger: I
				}))), h && c.a.createElement(qn.a, {
					isV2: !0,
					isLivestreaming: C,
					postId: g,
					sendEvent: _,
					draftKey: Object(Ve.a)(Dt.c.edit, s.id),
					commentsPageKey: a,
					isEditing: h,
					comment: s
				})), s.isDeleted && c.a.createElement(fo, null), H && !h && l && l.map((e, t) => c.a.createElement(Qn.b, {
					key: `${t}-${e}`,
					className: Ao.a.errorText
				}, e)), !h && S && !R && c.a.createElement("button", {
					type: "button",
					className: Object(Ke.a)(Ao.a.readMoreButton, {
						[Ao.a.livestreaming]: C
					}),
					onClick: () => {
						A(!R)
					}
				}, te.fbt._("Read more", null, {
					hk: "3s9Bqf"
				})), U && !C && j && c.a.createElement(Gn, {
					comment: s
				})))
			}));
			const Po = e => {
				return Object(d.e)(Ce.d) ? c.a.createElement(So, e) : c.a.createElement(mo, e)
			};
			var Bo = n("./node_modules/lodash/isEqual.js"),
				Do = n.n(Bo),
				Fo = n("./src/reddit/controls/Button/index.tsx"),
				Uo = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Ho = n.n(Uo);
			const Ko = We.a.div("ButtonWrapper", Ho.a),
				Wo = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(Ke.a)(Ho.a.ChunkPlaceholder, {
							[Ho.a.top]: t
						})
					}, te.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Vo = e => {
					let {
						className: t,
						isLivestreaming: n,
						isLoading: o,
						setRef: s,
						...r
					} = e;
					return c.a.createElement("div", {
						ref: s,
						className: Object(Ke.a)(t, {
							[Ho.a.ScrollerWrapper]: !n,
							[Ho.a.LivestreamingWrapper]: n,
							[Ho.a.loading]: o
						})
					}, !o && r.isPrevLoading && !n && c.a.createElement(Wo, {
						top: !0
					}), r.children, !o && r.isNextLoading && !n && c.a.createElement(Wo, null))
				};
			class Go extends c.a.Component {
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
					const t = e.children.length !== this.props.children.length || !Do()(g()(e.children), g()(this.props.children)) || !Do()(a()(e.children), a()(this.props.children));
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
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(Ke.a)([Ho.a.NewComments, Ho.a.show]) : Ho.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Vo, {
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
						className: Ho.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						ref: this._refActiveComments,
						className: Ho.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Ho.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(Ko, null, c.a.createElement(Fo.l, {
						className: n,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", te.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [te.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var qo = Go,
				zo = n("./src/reddit/selectors/posts.ts");
			const Qo = 6e4,
				Jo = (e, t, n) => {
					let {
						authorId: o,
						id: s
					} = n;
					return e.includes(o) && !t.includes(s)
				},
				Xo = Object(l.c)({
					blockedRedditors: Ut.a,
					blockedRedditorsPending: Ut.b,
					chatCommentLinks: V.g,
					isPending: V.d,
					liveCommentsWebsocket: zo.E,
					moreCommentsLink: V.G,
					isCommentReactionStreamingKillSwitchEnabled: Ce.c,
					isCommentAwardsAndReactionsEnabled: Ce.a,
					currentUserId: ke.i
				}),
				Zo = Object(d.b)(Xo, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e($(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						D(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(C.m)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(b.g)()),
					loadComments: async () => await e(Object(ee.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.t.CHAT,
						comment_awardings_by_current_user: !0
					}, m.t.CHAT)),
					fetchAvailableReactionAwards: async t => e(Ae(t)),
					processReactionAwardStreamData: t => e(Re(t))
				}));
			class Yo extends c.a.Component {
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
					return !!n && Object(p.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(u.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, Qo)
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
						postId: r
					} = this.props;
					n && (e && o(), s(t, n, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = n)
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
						commentsPageKey: r,
						isLoading: a,
						isPending: i,
						postId: c,
						draftKey: d
					} = this.props, {
						expandedCommentIds: l,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== d || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks !== s || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: o,
						commentsPageKey: s,
						liveCommentsWebsocket: r,
						offLiveCommentsSubscribe: a,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && a(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && r && (i(s, r, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = r), this.updateRealtimeGQLVariables()), e.blockedRedditors.ids !== t.ids) {
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
						const e = Object(u.a)(() => {
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
					} = this.props, n = a()(e);
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
						emptyStateClassName: r,
						isLivestreaming: a,
						isLoading: i,
						isPending: d,
						postId: l,
						renderedInOverlay: m,
						sendEvent: u,
						isCommentReactionStreamingKillSwitchEnabled: p,
						isCommentAwardsAndReactionsEnabled: b
					} = this.props, {
						expandedCommentIds: C,
						targetCommentIndex: v,
						timestampUpdateTrigger: f,
						realtimeGQLVariables: g
					} = this.state, x = !(t && t.length || i || d);
					return c.a.createElement(c.a.Fragment, null, b && !p && g && c.a.createElement(h.a, {
						variables: g,
						onData: this.handleReactionStreamData,
						queryKey: "liveChatCommentReactions"
					}), x ? c.a.createElement(Fe.c, {
						className: r,
						isChat: !0
					}) : c.a.createElement(qo, {
						className: n,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: v,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => Jo(e.ids, C, t) ? c.a.createElement(it, {
						commentCount: 1,
						isLivestreaming: a,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Po, {
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: s,
						isLivestreaming: a,
						postId: l,
						renderedInOverlay: !!m,
						sendEvent: u,
						timestampUpdateTrigger: f,
						targetComment: t.id === o,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = Zo(Object(Tt.c)(Yo))
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
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
				f = e => {
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
				g = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: s,
						caretColor: a,
						onClick: i,
						hideCaret: d
					} = e;
					return r.a.createElement("div", {
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
							"--contentTooltip-caretColor": a && a[s] ? a[s] : Object(u.a)(e).body
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
				E = Object(m.a)(g, [o.a.Click, o.a.Keydown]),
				_ = Object(a.b)(x);
			class k extends r.a.Component {
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
								position: s ? this.props.defaultTooltipPosition : f(this.props.defaultTooltipPosition)
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
					return r.a.createElement(E, C({}, this.props, {
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
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
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
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = a.a.span("metaText", d.a),
				m = e => r.a.createElement(l, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: s,
						...a
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
					return r.a.createElement(l, a, m)
				},
				p = e => r.a.createElement(l, null, o.fbt._({
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
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.jb.POST
			}), l = async (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.jb.POST
			}), m = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.jb.POST
			}), u = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.jb.POST
			}), p = async (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${o.a.oauthUrl}/user/${t}/about`),
				method: s.jb.GET,
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
				r = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				i = (n("./src/redditGQL/operations/AvailableAwards.json"), n("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				c = n("./src/redditGQL/operations/GiveAward.json"),
				d = n("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, n) => {
				var a;
				const i = await Object(o.a)(e, {
					...c,
					variables: {
						input: t
					}
				}, {
					query: n ? {} : Object(r.b)()
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!Object(s.c)(i) || !i.body.data.giveAward.ok) throw i.body.data.giveAward.errors && (null === (a = i.body.data.giveAward.errors) || void 0 === a ? void 0 : a.length) > 0 ? new Error(i.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return i.body.data.giveAward
			}, m = async (e, t) => {
				var n, r, a;
				const i = await Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!i.body.data.removeAward.ok) {
					const e = null !== (a = null === (r = null === (n = i.body.data.removeAward.errors) || void 0 === n ? void 0 : n[0]) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : "An unknown error occurred";
					throw new Error(e)
				}
				return i.body.data.removeAward
			}, u = async (e, t, n) => {
				const c = await Object(o.a)(e, {
					...i,
					variables: {
						thingId: t.thingId,
						isPost: Object(a.a)(t.thingId)
					}
				}, {
					query: n ? {} : Object(r.b)()
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
		"./src/reddit/helpers/awards/message.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			}));
			const o = 500,
				s = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < o ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				a = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const o = r(t, n);
					return e.slice(0, o)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case s.I.AUTHORIZATION_ERROR:
						return n ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.I.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.I.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.I.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.I.LIKELY_UBLOCK_ERROR:
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
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
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
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const c = Object(s.e)(i, {
							commentId: e
						}),
						d = Object(r.f)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.n(i),
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
					...a.n(e)
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
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
				className: Object(r.a)(Object(a.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
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
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
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
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e) {
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
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.edit, e.className),
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

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
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

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
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
				r = n("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? r.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Reply2/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
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
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

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
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

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
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

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
		"./src/reddit/icons/svgs/UserBlock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, e), s.a.createElement("path", {
				d: "M22.06 22.5599L22.0756 22.5443L2.98242 3.44869L1.91922 4.51069L10.612 13.1999H9.04482C6.98492 13.182 5.00204 13.9819 3.5312 15.4242C2.06037 16.8664 1.2217 18.8332 1.19922 20.8931V21.4715C1.20144 21.8256 1.34409 22.1644 1.59584 22.4134C1.8476 22.6625 2.18789 22.8015 2.54202 22.7999H20.212L21.016 23.6039L21.9292 22.6895C21.991 22.6655 22.0515 22.6382 22.1104 22.6079L22.06 22.5599ZM2.70042 21.2999V20.8931C2.72256 19.2312 3.40291 17.6459 4.59226 16.4849C5.7816 15.3239 7.38285 14.6819 9.04482 14.6999H12.112L18.712 21.2999H2.70042ZM16.1992 13.3067C17.8371 13.5564 19.3524 14.3229 20.5239 15.4944C21.6954 16.666 22.4619 18.1812 22.7116 19.8191L19.5916 16.6991C19.4956 16.5971 19.3984 16.4975 19.2952 16.4027L16.1992 13.3067ZM7.67922 4.78669L6.50322 3.60709C6.89178 2.70868 7.49425 1.91898 8.25807 1.30686C9.02189 0.694742 9.92387 0.278789 10.8853 0.0952792C11.8468 -0.0882305 12.8386 -0.0337233 13.7742 0.254047C14.7098 0.541818 15.5607 1.05411 16.2529 1.74625C16.945 2.43839 17.4573 3.28936 17.7451 4.22493C18.0328 5.16051 18.0873 6.15228 17.9038 7.11376C17.7203 8.07524 17.3044 8.97722 16.6922 9.74104C16.0801 10.5049 15.2904 11.1073 14.392 11.4959L13.21 10.3199C13.9672 10.1114 14.6564 9.70784 15.2089 9.14961C15.7614 8.59138 16.1577 7.89799 16.3583 7.13867C16.559 6.37935 16.5569 5.58068 16.3523 4.82241C16.1477 4.06414 15.7478 3.37282 15.1924 2.81747C14.6371 2.26212 13.9458 1.86219 13.1875 1.6576C12.4292 1.45301 11.6306 1.45094 10.8712 1.65158C10.1119 1.85222 9.41853 2.24855 8.8603 2.80101C8.30207 3.35346 7.89854 4.0427 7.69002 4.79989L7.67922 4.78669Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(o || (o = {}));
			const s = e => e.category === o.Supporter,
				r = e => e.category === o.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/gold/constants.ts"),
				r = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var i = n("./node_modules/icepick/icepick.js"),
				c = n("./src/reddit/actions/economics/powerups/constants.ts");
			const d = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(o.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.mb:
							const {
								subredditId: n, subredditAchievementFlairs: o
							} = t.payload;
							if (!(null == o ? void 0 : o.length)) return e;
							const a = o.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = o.filter(r.a).map(e => e.type),
								c = o.filter(r.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: a,
									achievementTypes: i,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: o
							} = t.payload;
							let s = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of o) {
								const n = a.filter(r.a),
									o = n.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									i = a.filter(r.b),
									c = i.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									d = l(n),
									m = l(i);
								s = {
									...s,
									[e]: {
										achievementTypes: o,
										supporterTypes: c,
										preferredAchievementType: d,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: s
							}
						}
						case c.f: {
							const {
								subredditId: n,
								userId: o,
								achievementFlairType: s,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, o], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: r
							}))
						}
						case c.g: {
							const {
								subredditId: n,
								userId: o,
								achievementFlairType: s,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, o], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: n,
								userId: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, o], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.h: {
							const {
								subredditId: n,
								userId: o,
								isHidden: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, o], e => ({
								...e,
								isHidden: s
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									o = e.powerups;
								if (!t || !o) return;
								const s = o.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
								n = {
									...n,
									[t]: s.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			n("./src/reddit/selectors/user.ts");
			const o = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				r = (e, t) => {
					const n = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return f
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, t) => {
					let {
						subredditId: n
					} = t;
					var o;
					return n ? null === (o = e.features.powerups.subredditPowerupsFlairs) || void 0 === o ? void 0 : o[n] : null
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					var o, s;
					return n ? null === (s = null === (o = e.features.powerups.subredditPowerupsFlairs) || void 0 === o ? void 0 : o[n]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				d = (e, t) => {
					let {
						subredditId: n,
						userId: o
					} = t;
					var s, r;
					return n && o ? null === (r = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[n]) || void 0 === r ? void 0 : r[o] : null
				},
				l = Object(o.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(o.a)([c, l], (e, t) => e && t ? e[t] : null),
				u = Object(o.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(o.a)([c, u], (e, t) => e && t ? e[t] : null),
				h = Object(o.a)([i, d], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: o,
						flairsByType: s
					} = e, {
						supporterTypes: r,
						achievementTypes: a,
						preferredSupporterType: i,
						preferredAchievementType: c,
						pendingSupporterType: d,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: v(n, r, s, d || i),
						achievementFlairs: v(o, a, s, l || c)
					}
				}),
				b = Object(o.a)([d], e => !!e && e.isHidden),
				C = Object(o.a)([i, d, p], (e, t, n) => {
					if (!e || !t) return [];
					const o = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...o] : o
				}),
				v = (e, t, n, o) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === o
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				f = (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Object(s.b)(e, {
							commentId: n
						}),
						r = null == o ? void 0 : o.subredditId,
						a = null == o ? void 0 : o.authorId;
					return !(!r || !a) && !!((e, t) => {
						let {
							subredditId: n,
							userId: o
						} = t;
						var s, r, a;
						return n && o ? null === (a = null === (r = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === r ? void 0 : r[o]) || void 0 === a ? void 0 : a[n] : null
					})(e, {
						subredditId: r,
						userId: a
					})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.9d0708fadbec9614ceac.js.map