// https://www.redditstatic.com/desktop2x/ChatPost.5043f654327bfa275323.js
// Retrieved at 6/16/2022, 6:00:06 PM by Reddit Dataminer v1.0.0
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
					isStrong: l,
					onClick: u,
					style: h
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
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				f = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				x = n("./src/reddit/components/PostTopMeta/index.tsx"),
				E = n("./src/reddit/controls/MetaData/index.tsx"),
				k = n("./src/reddit/helpers/flair.ts"),
				_ = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				O = n("./src/reddit/selectors/gold/powerups/index.ts"),
				w = n("./src/lib/constants/index.ts"),
				T = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				j = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				M = n.n(N);
			const L = e => {
				let {
					authorClassName: t,
					className: n,
					comment: o,
					collapsed: s,
					isLivestreaming: r,
					isStrong: i,
					onClick: d,
					renderedInOverlay: l
				} = e;
				const m = Object(y.f)(o),
					u = a.a.createElement(T.b, {
						ignore: m || !!o.distinguishType && o.distinguishType !== w.G.NONE,
						subredditId: o.subredditId,
						userId: o.authorId
					}, a.a.createElement(h, {
						className: t,
						collapsed: s,
						comment: o,
						isAuthorDeleted: Object(y.f)(o),
						isCommentAuthorBlocked: Object(y.g)(o),
						isLivestreaming: r,
						isStrong: i,
						onClick: d
					}));
				return m ? u : a.a.createElement(j.b, {
					className: Object(c.a)(M.a.authorHoverCard, n),
					collapsed: s,
					isCommentAuthorBlocked: Object(y.g)(o),
					postOrComment: o,
					tooltipType: l ? x.c.Lightbox : void 0
				}, u)
			};
			var A = n("./src/config.ts"),
				R = n("./src/reddit/actions/tooltip.ts"),
				P = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const S = function(e, t) {
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
				const i = Object(r.d)(),
					d = () => i(Object(R.h)({
						tooltipId: l
					})),
					l = S("CommentTopMeta--cakeday--", n, s),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
					className: Object(c.a)(D.a.cakedayIcon, t),
					src: `${A.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: d,
					onMouseLeave: d,
					"data-testid": "cakeday-icon"
				}), a.a.createElement(P.c, {
					tooltipId: l,
					text: m
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/actions/post.ts"),
				V = n("./src/reddit/components/HumanDate/index.tsx"),
				K = n("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					} = e, l = Object(r.d)(), m = S("CommentTopMeta--Created--", n.id, c), u = () => l(Object(R.h)({
						tooltipId: m
					}));
					return a.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(U.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: m,
						onClick: e => {
							null == s || s(e), G(l, n.id), d && (e.preventDefault(), l(Object(W.Z)(Object(K.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, a.a.createElement(V.d, {
						seconds: n.created,
						shortenedUnit: o
					}), a.a.createElement(P.c, {
						tooltipId: m
					}, a.a.createElement(V.b, {
						seconds: n.created
					})))
				},
				G = (e, t) => {
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
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Q = n.n(J);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = () => a.a.createElement(E.a, {
				className: Q.a.crowdControlText
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
				return a.a.createElement(E.a, {
					className: $.a.editedText
				}, ee._("edited {time}", [ee._param("time", a.a.createElement(V.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				oe = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ae = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = n("./src/reddit/icons/fonts/Lock/index.tsx"),
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
				const d = Object(r.d)(),
					l = e => () => d(Object(R.f)({
						tooltipId: e
					})),
					m = () => d(Object(R.i)()),
					u = e => S(e, t.id, i),
					p = u("CommentTopMeta--Approve--"),
					h = u("CommentTopMeta--Remove--"),
					b = u("CommentTopMeta--Report--"),
					C = u("CommentTopMeta--Spam--"),
					v = l(h);
				return a.a.createElement(a.a.Fragment, null, (t.approvedBy || t.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ae.a, {
					className: me.a.approveIcon,
					desc: Object(oe.a)(t),
					id: p,
					onMouseEnter: l(p),
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(P.c, {
					tooltipId: p,
					text: Object(oe.a)(t)
				})), Object(ne.a)(t) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(oe.b)(t),
					id: h,
					onMouseEnter: v,
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(P.c, {
					tooltipId: h,
					text: Object(oe.b)(t)
				})), Object(ne.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && a.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => d(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && a.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: m
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !s && a.a.createElement(re.a, {
					className: me.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
					className: me.a.spamIcon,
					desc: Object(oe.d)(t),
					id: C,
					onMouseEnter: l(C),
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(P.c, {
					tooltipId: C,
					text: Object(oe.d)(t)
				})), Object(se.a)(t) && a.a.createElement(a.a.Fragment, null, a.a.createElement(ce.a, {
					className: me.a.reportIcon,
					desc: Object(oe.c)(t.numReports),
					id: b,
					onMouseEnter: l(b),
					onMouseLeave: m,
					isFilled: !0
				}), a.a.createElement(P.c, {
					tooltipId: b,
					text: Object(oe.c)(t.numReports)
				})), t.isDeleted && c && a.a.createElement(a.a.Fragment, null, a.a.createElement(ie.a, {
					className: me.a.removeIcon,
					isFilled: !0
				}), a.a.createElement("span", {
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
				ge = e => {
					const t = Object(r.d)(),
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
					} = ve[n], l = i(), m = S(o, e.comment.id, e.renderedInOverlay), u = d(e), p = () => t(Object(R.h)({
						tooltipId: m
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(c.a)(Ce.a.role, e.className),
						style: {
							color: s
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, a.a.createElement("span", null, l), n === pe.Mod && a.a.createElement(fe, null)), a.a.createElement(P.c, {
						tooltipId: m,
						text: u
					}))
				},
				fe = () => a.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: Ce.a.modAchievement,
					src: `${A.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var xe = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Ee = n.n(xe);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _e = () => a.a.createElement(E.a, {
				className: Ee.a.stickiedText
			}, ke._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Ie = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ye = n.n(Ie);
			const Oe = e => {
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
					permalink: T,
					renderContractorBadge: j,
					renderedInOverlay: N,
					subredditDisplayText: M,
					isAdmin: A
				} = e, R = Object(I.a)(), P = i.subredditId, S = Object(r.e)(e => Object(O.g)(e, {
					subredditId: P
				}));
				if (i.isDeleted && !A) return a.a.createElement("div", {
					className: Object(c.a)(ye.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: ye.a.authorLine
				}, a.a.createElement("span", {
					className: ye.a.metaText
				}, i.deletedBy === y.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(E.c, {
					className: ye.a.separator
				}), a.a.createElement(q, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					permalink: T,
					renderedInOverlay: N
				})));
				return a.a.createElement("div", {
					className: Object(c.a)(ye.a.container, t),
					"data-testid": "post-comment-header"
				}, a.a.createElement("span", {
					className: ye.a.authorLine
				}, !Object(y.f)(i) && a.a.createElement(C.b, {
					className: ye.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), a.a.createElement("div", {
					className: ye.a.baselineItem
				}, a.a.createElement(L, {
					authorClassName: ye.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: N
				})), !Object(y.f)(i) && u && a.a.createElement(f.a, {
					postOrComment: i,
					className: ye.a.LastAuthorModNoteIcon
				}), s && a.a.createElement(Z, null), a.a.createElement(ge, {
					className: ye.a.role,
					comment: i,
					subredditDisplayText: M,
					renderContractorBadge: j,
					renderedInOverlay: N
				}), i.isAuthorCakeday ? a.a.createElement(F, {
					className: ye.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: N
				}) : !Object(y.f)(i) && S && a.a.createElement(b.a, {
					className: ye.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						R(Object(_.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), a.a.createElement(g.a, {
					className: ye.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), a.a.createElement(E.c, {
					className: ye.a.separator
				}), a.a.createElement(q, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					onClick: w,
					permalink: T,
					renderedInOverlay: N
				}), i.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: ye.a.separator
				}), a.a.createElement(_e, null)), i.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: ye.a.separator
				}), a.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), a.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: N,
					isAdmin: A
				}), a.a.createElement(l.a, {
					thing: i,
					tooltipType: N ? x.c.Lightbox : void 0
				})), d && !Object(k.o)(d) && a.a.createElement("span", {
					className: ye.a.userFlairLine
				}, a.a.createElement(v.b, {
					className: ye.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var we = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Te = n("./src/reddit/selectors/economics.ts"),
				je = n("./src/reddit/models/Flair/index.ts"),
				Ne = n("./src/reddit/selectors/comments.ts"),
				Me = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Le = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ae = n("./src/reddit/selectors/subreddit.ts"),
				Re = n("./src/reddit/selectors/userFlair.ts"),
				Pe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Se = n.n(Pe);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const De = d.a.wrapped(v.b, "RightPositionedAuthorFlair", Se.a),
				Fe = d.a.span("DeletedText", Se.a),
				Ue = d.a.wrapped(E.a, "MetaSeparator", Se.a),
				He = Object(r.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(Te.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Ae.J)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Re.e)(e, {
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
						return Object(Le.j)(e, n.subredditId)
					}
				}));
			t.a = He(e => {
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
					ignoreLock: k,
					isAdmin: _,
					isBlockingInterstitialEnabled: I,
					isBlockingInterstitialV2Enabled: O,
					isModWithUserNotesPermissions: w,
					isLivestreaming: T,
					isPostComment: j,
					onCommentAuthorClick: N,
					onCommentTimestampClick: M,
					renderContractorBadge: A,
					renderedInOverlay: R,
					subredditDisplayText: P,
					userHasNft: S
				} = e, B = a.a.createElement(a.a.Fragment, null, a.a.createElement(we.b, {
					commentId: r.id
				}), a.a.createElement(we.a, {
					commentId: r.id,
					commentsPageKey: d
				}));
				if (j) return a.a.createElement(a.a.Fragment, null, a.a.createElement(Oe, {
					className: Object(c.a)(n, {
						[Se.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: r,
					flair: u || null,
					ignoreLock: k,
					isAdmin: _,
					isModWithUserNotesPermissions: w,
					isLivestreaming: T,
					onCommentAuthorClick: N,
					onCommentTimestampClick: M,
					permalink: i,
					renderContractorBadge: !!A,
					renderedInOverlay: R,
					subredditDisplayText: P
				}), B);
				if (r.isDeleted) return a.a.createElement(We, Be({}, e, {
					className: Object(c.a)(n, Se.a.container, {
						[Se.a.collapsed]: o
					})
				}));
				if (o) return a.a.createElement(Ve, Be({}, e, {
					className: Object(c.a)(n, Se.a.container, {
						[Se.a.collapsed]: o
					})
				}));
				const D = !f && p === je.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(n, Se.a.container, {
						[Se.a.collapsed]: o,
						[Se.a.hasBadges]: h,
						[Se.a.liveStreaming]: T
					}),
					"data-testid": "comment-top-meta"
				}, u && D && a.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(y.f)(r) && a.a.createElement(C.b, {
					className: Se.a.userBadges,
					showAddCustom: !0,
					subredditId: r.subredditId,
					userId: r.authorId,
					uniqueIdentifier: r.id
				}), t && t, a.a.createElement(L, {
					authorClassName: S ? Se.a.NftAuthor : void 0,
					collapsed: o,
					comment: r,
					isLivestreaming: T,
					isStrong: !!m,
					onClick: N,
					renderedInOverlay: R
				}), s && a.a.createElement(Z, null), s && a.a.createElement(E.c, {
					className: Se.a.metaText,
					key: "crowdControlSeparator"
				}), u && !D && a.a.createElement(De, {
					flair: u,
					forceSmallEmojis: m
				}), !m && a.a.createElement(g.a, {
					className: Se.a.publicPoints,
					contentId: r.id,
					metaSeparator: a.a.createElement(E.c, {
						className: Se.a.metaText
					}),
					subredditId: r.subredditId,
					userId: r.authorId,
					username: r.author
				}), B, a.a.createElement(ge, {
					className: Se.a.authorRole,
					comment: r,
					subredditDisplayText: P,
					renderContractorBadge: !!A,
					renderedInOverlay: R
				}), !m && a.a.createElement(a.a.Fragment, null, !r.isDeleted && !j && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.b, {
					className: Se.a.metaText,
					isScoreHidden: r.isScoreHidden,
					score: r.score
				}), a.a.createElement(E.c, {
					className: Se.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(q, {
					key: "Created",
					className: Se.a.MetaLink,
					comment: r,
					permalink: i,
					renderedInOverlay: R,
					isBlockingInterstitialEnabled: I || O
				}), r.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: Se.a.separator
				}), a.a.createElement(_e, null)), r.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(E.c, {
					className: Se.a.separator
				}), a.a.createElement(te, {
					editedAt: r.editedAt
				}))), a.a.createElement(ue, {
					comment: r,
					ignoreLock: k,
					renderedInOverlay: R
				}), !b && a.a.createElement(l.a, {
					thing: r,
					tooltipType: R ? x.c.Lightbox : void 0
				}))
			});
			const We = e => {
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
					}, a.a.createElement(Fe, null, r.deletedBy === y.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(q, {
						key: "Created",
						className: Se.a.MetaLink,
						comment: r,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: c || d
					}), n && Ke({
						childrenInfo: t
					}))
				},
				Ve = e => {
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
						isAuthorDeleted: Object(y.f)(t),
						collapsed: r
					})), a.a.createElement(E.b, {
						className: Se.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(E.c, {
						className: Se.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(q, {
						key: "Created",
						className: Se.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: c || d
					}), Ke({
						childrenInfo: o
					}))
				},
				Ke = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Ue, {
						className: Se.a.metaText
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
				return T
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "a", (function() {
				return V
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
				x = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				E = n("./src/reddit/components/Comments/States/index.m.less"),
				k = n.n(E);
			const _ = l.a.wrapped(f.a, "CommentsIcon", k.a),
				I = l.a.wrapped(x.a, "SnooFacepalm", k.a),
				y = l.a.p("EmptyTitle", k.a),
				O = l.a.p("ErrorTitle", k.a),
				w = l.a.p("EmptyText", k.a),
				T = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(k.a.StateContainer, t)
					}, i.a.createElement(_, null), i.a.createElement(y, null, n ? o.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : o.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(w, null, o.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				j = () => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(_, null), i.a.createElement(y, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(w, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(_, null), i.a.createElement(y, null, o.fbt._("That comment is missing", null, {
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
					}, i.a.createElement(I, null), i.a.createElement(O, null, t ? Object(h.a)({
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
				L = e => {
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
				A = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", k.a),
				R = l.a.div("CommentsPlaceholderContainer", k.a),
				P = l.a.div("CommentPlaceholder", k.a),
				S = l.a.div("Avatar", k.a),
				B = l.a.div("VoteColumn", k.a),
				D = l.a.div("TextColumn", k.a),
				F = l.a.wrapped(g.b, "Upvote", k.a),
				U = l.a.wrapped(v.a, "Downvote", k.a),
				H = () => i.a.createElement("div", {
					className: Object(d.a)(k.a.TopMetaPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				W = () => i.a.createElement("div", {
					className: Object(d.a)(k.a.CommentBodyPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				V = e => i.a.createElement(R, null, a()(10, t => i.a.createElement(P, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(S, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(F, null), i.a.createElement(U, null)), i.a.createElement(D, null, i.a.createElement(H, null), i.a.createElement(W, null)))))
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
		"./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less": function(e, t, n) {
			e.exports = {
				ChatIcon: "Y4elHycQm7QR_6fCrvjzq",
				chatIcon: "Y4elHycQm7QR_6fCrvjzq",
				TrashIcon: "_29fCuEaNwXf3oWvxop579Y",
				trashIcon: "_29fCuEaNwXf3oWvxop579Y",
				DeleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				deleteText: "_2Fg7fot2bTwH4aeQhehkz9",
				isV2Enabled: "_2XcjXctAHWpWD1W3AQ80Ar",
				Livestreaming: "JQ7EdZSNNPa2c2kigYJJ3",
				livestreaming: "JQ7EdZSNNPa2c2kigYJJ3"
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
		"./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less": function(e, t, n) {
			e.exports = {
				menu: "_2X0J8YdXfokev-v3ud5t_y",
				livestreaming: "_3TQYNFWpPss8xjmKrBFT0K",
				innerWrapper: "_3-tpsxD8ZAB0Q7gVbzdZF6",
				verticalBar: "JbHijELz1zmFvP0YJ1YuE",
				"menu-item": "_19Oknc--43y-15yu9_cXvM",
				menuItem: "_19Oknc--43y-15yu9_cXvM",
				icon: "_2c4Vwo7oqlN6Uy7jE8vOMG",
				"dropdown-menu": "_5-qWgdQX88_8RpqBUS2Hk",
				dropdownMenu: "_5-qWgdQX88_8RpqBUS2Hk",
				"dropdown-menu-item": "Yxh6i1JK2Fa0erIglDupg",
				dropdownMenuItem: "Yxh6i1JK2Fa0erIglDupg",
				"dropdown-icon": "p2X8ezHA9FBKN1J4cCbfg",
				dropdownIcon: "p2X8ezHA9FBKN1J4cCbfg",
				snoomojiWrapper: "DKxXQn1Milt40-RxCiXcq"
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
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, n) {
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
				livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY",
				isV2Enabled: "Tq666MXu2yF9XihlGCCcO",
				isDeleted: "_3a9maZzcpVpY-ObbePJy1c"
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
				reactions: "_1ian-9D_TIro-y2s-Z_XFc"
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
				return Go
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
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/setInterval/index.ts"),
				p = n("./src/lib/timeAgo/index.ts"),
				h = n("./src/reddit/actions/blockedRedditors.ts"),
				b = n("./src/reddit/actions/comment/index.ts"),
				C = n("./src/lib/makeActionCreator/index.ts"),
				v = n("./node_modules/lodash/first.js"),
				g = n.n(v),
				f = n("./node_modules/lodash/isArray.js"),
				x = n.n(f),
				E = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				_ = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts");
			const w = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = j(e.attribs);
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
							isAdmin: n === _.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === _.e.Submitter,
							isMod: n === _.e.Moderator,
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
							parentId: e.parent_id && Object(E.a)(e.parent_id) ? e.parent_id : null,
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
							voteState: O.a.notVoted,
							...t || {}
						}
					}
				},
				T = e => {
					switch (e) {
						case _.e.Admin:
							return m.G.ADMIN;
						case _.e.Moderator:
							return m.G.MODERATOR;
						case _.e.Alumni:
							return m.G.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				j = e => g()((e || []).filter(e => x()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || _.e.None;
			const N = (e, t, n) => {
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
					if (l === I.f.Richtext) {
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
					if (l === I.f.Text) {
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
			var M = n("./src/lib/env/index.ts");
			const L = new Map,
				A = e => e,
				R = new Set;
			var P;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(P || (P = {}));
			const S = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				B = (e, t) => {
					const n = A(t),
						o = L.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				D = (e, t, n, o) => {
					const s = A(t),
						a = L.get(s);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					L.set(s, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...S
						}
					}), r.socket.addEventListener("message", H.bind(null, o)), r.socket.addEventListener("close", F.bind(null, s, o)), r.socket.addEventListener("error", W.bind(null, s)), window && window.addEventListener("beforeunload", B.bind(null, e, t))
				},
				F = (e, t, n) => {
					const o = L.get(e);
					o && (o.isClosePlanned ? L.delete(e) : U(e, t))
				},
				U = (e, t) => {
					const n = L.get(e);
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
					if (L.delete(e), s < r && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, s),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							l = {
								...n.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							D(d, c, l, t)
						}, i), Object(M.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				H = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(M.a)() && console.error(t)
					}
				},
				W = (e, t) => {
					const n = L.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? L.delete(e) : Object(M.a)() && console.error(t)
				};
			var V = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				G = n("./src/reddit/actions/comment/websocket/constants.ts");
			const z = Object(C.a)(G.b),
				J = Object(C.a)(G.c),
				Q = Object(C.a)(G.a),
				X = Object(C.a)(G.d),
				Z = {},
				Y = (e, t, n, o) => async (s, a) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: o,
							uniqueId: s
						} = e;
						R.has(s) ? t() : (R.add(s), setTimeout(() => {
							R.delete(s), D(o, s, {
								...S
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case P.NEW_COMMENT: {
									const n = t.payload.name,
										r = w(t.payload),
										i = a(),
										c = Object(K.b)(i, {
											commentId: n
										}),
										d = !(!n || !Z[n]);
									if (r && !d) {
										const n = N(0, o, t.payload),
											a = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(V.w)(i, {
												commentsPageKey: e
											});
											s(z({
												authorFlair: n,
												comment: r,
												commentsPageKey: e,
												headCommentId: t,
												numComments: a
											}))
										} else s(J({
											authorFlair: n,
											comment: r,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case P.UPDATE_COMMENT: {
									const n = t.payload.name,
										r = a(),
										i = Object(K.b)(r, {
											commentId: n
										}),
										c = w(t.payload);
									if (i && c) {
										const n = N(0, o, t.payload),
											a = t.payload.total_comment_count;
										s(J({
											authorFlair: n,
											comment: c,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case P.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										o = t.payload.score,
										r = a(),
										i = Object(K.b)(r, {
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
										n = a(),
										o = Object(K.b)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s(Q({
										id: e
									})) : Z[e] = P.DELETE_COMMENT;
									break
								}
								case P.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = a(),
										r = Object(K.b)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (r && r.authorId),
										c = !!e && !!Object(q.n)(o, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || i || c ? Z[n] = P.REMOVE_COMMENT : s(Q({
										id: n
									}));
									break
								}
								case P.USER_JOIN: {
									const n = w(t.payload, {
											isSystem: !0
										}),
										o = !0;
									n && s(X({
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
			var $ = n("./src/reddit/actions/pages/comments.ts"),
				ee = n("./src/reddit/endpoints/awards/index.ts"),
				te = n("./src/lib/makeGqlRequest/index.ts"),
				ne = n("./src/lib/makeRequest/index.ts"),
				oe = n("./src/reddit/models/Gold/Award.ts"),
				se = n("./src/redditGQL/operations/AvailableAwards.json");
			var ae = n("./node_modules/uuid/v4.js"),
				re = n.n(ae),
				ie = n("./src/reddit/actions/reactionAwards/constants.ts");
			const ce = Object(C.a)(ie.c),
				de = Object(C.a)(ie.b),
				le = Object(C.a)(ie.a),
				me = Object(C.a)(ie.e),
				ue = Object(C.a)(ie.f),
				pe = Object(C.a)(ie.d),
				he = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					t(ce());
					try {
						const n = await (async (e, t) => {
							const n = await Object(te.a)(e, {
								...se,
								variables: {
									subredditId: t,
									subTypes: [oe.d.ChatReaction]
								}
							});
							if (!Object(ne.c)(n)) throw n.error;
							return n.body.data.availableAwards
						})(s(), e);
						t(de({
							subredditId: e,
							availableAwards: n
						}))
					} catch (a) {
						t(le(a))
					}
				}, be = (e, t, n) => async (o, s, a) => {
					let {
						gqlContext: r
					} = a;
					o(me());
					try {
						const s = re()();
						await Object(ee.b)(r(), {
							awardId: e,
							targetId: t,
							isAnonymous: n,
							nonce: s
						}), o(ue({
							awardId: e,
							commentId: t,
							isAnonymous: n
						}));
						const a = await Object(ee.a)(r(), {
							thingId: t
						});
						o(Object(b.e)(a))
					} catch (i) {
						o(pe(i))
					}
				};
			var Ce = n("./src/reddit/components/Comments/States/index.tsx"),
				ve = n("./src/reddit/selectors/experiments/chat.ts"),
				ge = n("./node_modules/fbt/lib/FbtPublic.js"),
				fe = n("./node_modules/lodash/defer.js"),
				xe = n.n(fe),
				Ee = n("./src/lib/classNames/index.ts"),
				ke = n("./src/lib/lessComponent.tsx"),
				_e = n("./src/lib/makeDraftKey/index.ts"),
				Ie = n("./src/lib/objectSelector/index.ts"),
				ye = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Oe = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				we = n("./src/reddit/helpers/awards/message.ts"),
				Te = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				je = n("./src/reddit/components/RichTextJson/index.tsx"),
				Ne = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Me = n("./src/reddit/icons/svgs/Star/index.tsx"),
				Le = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				Ae = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				Re = n.n(Ae);
			const Pe = Object(Ie.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				Se = e => {
					const {
						award: t,
						comment: n,
						iconUrl: o
					} = e;
					let s = "",
						a = !0,
						r = !1;
					return t.coinPrice < we.a ? (s = Re.a.silverTierAwardComment, a = !1) : t.coinPrice < we.b ? s = Re.a.goldTierAwardComment : (s = Re.a.platinumTierAwardComment, r = !0), c.a.createElement("div", {
						className: Object(Ee.a)(Re.a.awardComment, s)
					}, c.a.createElement("div", {
						className: Re.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(Me.a, {
						className: Object(Ee.a)(Re.a.backgroundAnimation, Re.a.backgroundStar)
					}), c.a.createElement(Le.a, {
						className: Object(Ee.a)(Re.a.backgroundAnimation, Re.a.backgroundStar, Re.a.backgroundStar2)
					})), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ne.a, {
						className: Object(Ee.a)(Re.a.backgroundAnimation, Re.a.backgroundSparkle, Re.a.sparkleBottomLeft)
					}), c.a.createElement(Ne.a, {
						className: Object(Ee.a)(Re.a.backgroundAnimation, Re.a.backgroundSparkle, Re.a.sparkleTopRight)
					}), c.a.createElement(Ne.a, {
						className: Object(Ee.a)(Re.a.backgroundAnimation, Re.a.backgroundSparkle, Re.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: o
					})), c.a.createElement(je.b, {
						className: Re.a.awardCommentText,
						content: Object(Te.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: Pe(e),
						useExplicitTextColor: !0
					}))
				};
			var Be = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				De = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				Fe = n.n(De);
			var Ue = e => {
					let {
						commentCount: t,
						isLivestreaming: n,
						onClick: o
					} = e;
					const s = Object(Ee.a)(Fe.a.CollapsedComment, {
						[Fe.a.LivestreamingWrapper]: n
					});
					return c.a.createElement("div", {
						className: s,
						onClick: o
					}, ge.fbt._("collapsed {collapsed message} (may be sensitive)", [ge.fbt._param("collapsed message", ge.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [ge.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				He = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				We = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less"),
				Ve = n.n(We);
			const Ke = e => {
				let {
					className: t,
					isLivestreaming: n,
					isV2Enabled: o
				} = e;
				return c.a.createElement("div", {
					className: t
				}, o ? c.a.createElement(He.a, {
					className: Ve.a.TrashIcon
				}) : c.a.createElement(Be.a, {
					className: Ve.a.ChatIcon,
					trash: !0
				}), c.a.createElement("span", {
					className: Object(Ee.a)(Ve.a.DeleteText, {
						[Ve.a.Livestreaming]: n,
						[Ve.a.isV2Enabled]: o
					})
				}, ge.fbt._("deleted", null, {
					hk: "3NxJy9"
				})))
			};
			var qe = n("./src/reddit/actions/comment/authoring.ts"),
				Ge = n("./src/reddit/actions/comment/moderation.ts"),
				ze = n("./src/reddit/actions/modal.ts"),
				Je = n("./src/reddit/actions/reportFlow/index.ts"),
				Qe = n("./src/reddit/actions/tooltip.ts"),
				Xe = n("./src/reddit/actions/userBlocks.ts"),
				Ze = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Ye = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				$e = n("./src/reddit/components/CommentsChat/Comment/Menu/v1/index.m.less"),
				et = n.n($e);

			function tt() {
				return (tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const nt = ke.a.button("MenuItem", et.a),
				ot = ke.a.a("MenuItemPermalink", et.a),
				st = e => {
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
					return c.a.createElement(nt, {
						id: i,
						onMouseEnter: a.bind(void 0, i),
						onMouseLeave: s.bind(void 0, i),
						onClick: e => {
							o(e), l && r(Object(Ye.f)(l, n.id))
						}
					}, t, c.a.createElement(Ze.c, {
						tooltipId: i
					}, d))
				},
				at = e => c.a.createElement(st, tt({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(ot, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var rt = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				it = n("./src/reddit/components/HumanDate/index.tsx"),
				ct = n("./src/reddit/components/ModModeReports/helpers.ts"),
				dt = n("./src/reddit/components/ReportFlow/index.tsx"),
				lt = n("./src/reddit/components/ReportFlow/new.tsx"),
				mt = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ut = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				pt = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				ht = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				bt = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				Ct = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				vt = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				gt = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				ft = n("./src/reddit/icons/svgs/Spam/index.tsx"),
				xt = n("./src/reddit/models/PostDraft/index.ts"),
				Et = n("./src/reddit/selectors/activeModalId.ts"),
				kt = n("./src/reddit/selectors/blockedRedditors.ts"),
				_t = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				It = n("./src/reddit/selectors/user.ts");

			function yt() {
				return (yt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ot = ke.a.wrapped(bt.a, "BlockIcon", et.a),
				wt = ke.a.wrapped(ht.a, "FlagIcon", et.a),
				Tt = ke.a.wrapped(pt.a, "EditIcon", et.a),
				jt = ke.a.wrapped(ut.a, "ApproveIcon", et.a),
				Nt = ke.a.wrapped(gt.a, "ReplyIcon", et.a),
				Mt = ke.a.wrapped(vt.a, "RemoveIcon", et.a),
				Lt = ke.a.wrapped(ft.a, "SpamIcon", et.a),
				At = ke.a.wrapped(Ct.a, "ModeratorIcon", et.a),
				Rt = e => (t, n) => {
					let {
						comment: o
					} = n;
					return `${e}${o.id}`
				},
				Pt = e => `Comment-${e}--Modal--DeleteComment`,
				St = Object(l.c)({
					currentUser: It.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(q.n)(e, {
							postId: n.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(kt.c)(e, n.authorId)
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						var o, s;
						return (null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === n.id
					},
					approveTooltipId: Rt("CommentChatPost--Approve--"),
					blockTooltipId: Rt("CommentChatPost--Block--"),
					createTooltipId: Rt("CommentChatPost--Create--"),
					editTooltipId: Rt("CommentChatPost--Edit--"),
					replyTooltipId: Rt("CommentChatPost--Reply--"),
					reportTooltipId: Rt("CommentChatPost--Report--"),
					upvoteTooltipId: Rt("CommentChatPost--Upvote--"),
					downvoteTooltipId: Rt("CommentChatPost--Downvote--"),
					distinguishTooltipId: Rt("CommentChatPost--Distinguish--"),
					spamTooltipId: Rt("CommentChatPost--Spam--"),
					removeTooltipId: Rt("CommentChatPost--Remove--"),
					deleteTooltipId: Rt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Et.a)(e) === Pt(n.id)
					},
					reportingRevampEnabled: _t.a
				});
			var Bt = Object(d.b)(St, (e, t) => {
					let {
						comment: n,
						commentsPageKey: o
					} = t;
					return {
						onReplyClick: () => e(Object(qe.s)({
							parentCommentId: n.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						onReportClick: t => {
							t.stopPropagation(), e(Object(Je.c)(n.id, !1))
						},
						onHideTooltip: () => e(Object(Qe.i)()),
						onShowTooltip: t => e(Object(Qe.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = n.media && n.media.rteMode;
							o && e(Object(qe.e)({
								commentId: n.id,
								draftKey: Object(_e.a)(xt.c.edit, n.id),
								text: n.bodyMD || "",
								commentMode: t,
								commentsPageKey: o
							}))
						},
						onApproveClick: () => e(Object(Ge.a)(n.id)),
						onBlockClick: () => e(Object(Xe.h)(n.author)),
						onUnblockClick: () => e(Object(Xe.g)(n.author)),
						onUpvoteClick: () => e(Object(b.r)(n.id)),
						onDownvoteClick: () => e(Object(b.k)(n.id)),
						onDistinguishClick: t => e(Object(Ge.b)(n.id, t)),
						onSpamClick: () => e(Object(Ge.e)(n.id, !0)),
						onRemoveClick: () => e(Object(Ge.e)(n.id, !1)),
						deleteComment: () => o && e(Object(qe.j)(n.id, n.postId)),
						onDeleteClick: () => e(Object(ze.i)(Pt(n.id))),
						toggleDeleteCommentModal: () => e(Object(ze.i)(Pt(n.id)))
					}
				})(Object(mt.c)(e => {
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
						isLivestreaming: u,
						isMod: p,
						onApproveClick: h,
						onBlockClick: b,
						onDeleteClick: C,
						onEditClick: v,
						onHideTooltip: g,
						onRemoveClick: f,
						onReplyClick: x,
						onReportClick: E,
						onShowTooltip: k,
						onSpamClick: _,
						onUnblockClick: I,
						onDistinguishClick: y,
						reportFlowIsOpen: O,
						replyTooltipId: w,
						reportTooltipId: T,
						approveTooltipId: j,
						blockTooltipId: N,
						removeTooltipId: M,
						distinguishTooltipId: L,
						sendEvent: A,
						spamTooltipId: R,
						toggleDeleteCommentModal: P,
						timestampUpdateTrigger: S,
						showTime: B
					} = e, D = !!s && s.id === t.authorId, F = Object(ct.b)(t), U = t.isApproved && F, H = !t.bannedBy || t.bannedBy === m.k, W = {
						comment: t,
						onHideTooltip: g,
						onShowTooltip: k,
						sendEvent: A
					}, V = t.isMod;
					return c.a.createElement("div", {
						className: Object(Ee.a)(et.a.container, n)
					}, c.a.createElement("div", {
						className: Object(Ee.a)(et.a.Menu, {
							[et.a.Livestreaming]: u
						})
					}, (t.bannedBy || F) && p && c.a.createElement(st, yt({
						onClick: h,
						tooltipId: j,
						tooltipText: U ? ge.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : ge.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(jt, null)), !t.isLocked && c.a.createElement(st, yt({
						onClick: x,
						tooltipId: w,
						tooltipText: ge.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(Nt, null)), p && D && c.a.createElement(st, yt({
						onClick: () => y(V ? m.G.NONE : m.G.MODERATOR),
						tooltipId: L,
						tooltipText: V ? ge.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : ge.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(At, null)), p && H && c.a.createElement(st, yt({
						onClick: _,
						tooltipId: R,
						tooltipText: ge.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Lt, null)), !D && c.a.createElement(st, yt({
						onClick: E,
						tooltipId: T,
						tooltipText: ge.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(wt, null)), O && (() => e.reportingRevampEnabled ? c.a.createElement(lt.a, {
						withOverlay: !0,
						overlayCustomStyles: dt.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(dt.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: dt.b,
						postId: t.postId
					}))(), D && !u && c.a.createElement(st, yt({
						onClick: v,
						tooltipId: i,
						tooltipText: ge.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, W), c.a.createElement(Tt, null)), p && H ? c.a.createElement(st, yt({
						onClick: f,
						tooltipId: M,
						tooltipText: t.bannedBy === m.k ? ge.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : ge.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, W), c.a.createElement(Mt, null)) : D && c.a.createElement(st, yt({
						onClick: C,
						tooltipId: r,
						tooltipText: ge.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(Mt, null)), l && c.a.createElement(rt.a, {
						actionText: ge.fbt._("Delete", null, {
							hk: "3j0q3Z"
						}),
						cancelActionText: ge.fbt._("Keep", null, {
							hk: "3LTfYE"
						}),
						headerText: ge.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: ge.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: a,
						toggleModal: P,
						withOverlay: !0
					}), !!s && !D && c.a.createElement(st, yt({
						onClick: () => d ? I() : b(),
						tooltipId: N,
						tooltipText: d ? ge.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : ge.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, W), c.a.createElement(Ot, null))), B && c.a.createElement(at, yt({}, e, {
						tooltipId: o,
						tooltipText: c.a.createElement(it.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: S
					}), c.a.createElement(it.d, {
						seconds: t.created
					})))
				})),
				Dt = n("./src/reddit/actions/gold/modals.ts"),
				Ft = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Ut = n("./src/reddit/hooks/useTracking.ts"),
				Ht = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				Wt = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Vt = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				Kt = n("./src/reddit/icons/svgs/Reply2/index.tsx"),
				qt = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less"),
				Gt = n.n(qt);

			function zt() {
				return (zt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Jt = e => {
				let {
					children: t,
					commentId: n,
					onClick: o,
					tooltipId: s,
					tooltipText: a,
					trackingNoun: r,
					...i
				} = e;
				const l = Object(d.d)(),
					m = Object(Ut.a)();
				return c.a.createElement("button", zt({}, i, {
					id: s,
					className: Gt.a.menuItem,
					onMouseEnter: () => {
						l(Object(Qe.f)({
							tooltipId: s
						}))
					},
					onMouseLeave: () => {
						l(Object(Qe.i)())
					},
					onClick: e => {
						null == o || o(e), r && n && m(Object(Ye.f)(r, n))
					}
				}), t, c.a.createElement(Ze.c, {
					tooltipId: s
				}, a))
			};
			var Qt = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Xt = n("./src/reddit/controls/Dropdown/index.tsx"),
				Zt = n("./src/reddit/selectors/tooltip.ts");
			const Yt = Object(Qt.a)(Xt.a),
				$t = e => {
					let {
						dropdownId: t,
						icon: n,
						children: o,
						onClick: s
					} = e;
					const a = Object(d.d)(),
						r = Object(d.e)(e => Object(Zt.b)(t)(e)),
						i = c.a.useCallback(() => {
							a(Object(Qe.h)({
								tooltipId: t
							})), null == s || s()
						}, [a, t, s]);
					return c.a.createElement("button", {
						id: t,
						className: Gt.a.menuItem,
						onClick: i
					}, n, c.a.createElement(Yt, {
						className: Gt.a.dropdownMenu,
						isOpen: r,
						tooltipId: t
					}, o))
				};
			var en = n("./src/reddit/controls/Dropdown/Row.tsx"),
				tn = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				nn = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				on = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				sn = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				an = n("./src/reddit/icons/svgs/Distinguish/index.tsx");
			const rn = e => {
				let {
					comment: t,
					isCommentAuthor: n = !1
				} = e;
				const o = t.id,
					s = Object(ct.b)(t),
					a = t.isApproved && s,
					r = t.bannedBy === m.k,
					i = t.isMod,
					l = !n && (!t.bannedBy || r),
					u = Object(d.d)(),
					p = Object(Ut.a)(),
					h = c.a.useCallback(e => {
						p(Object(Ye.f)(e, o))
					}, [p, o]),
					b = c.a.useCallback(() => {
						u(Object(Ge.a)(o)), h("approve")
					}, [u, h, o]),
					C = c.a.useCallback(() => {
						const e = r ? "confirm_remove" : "remove";
						u(Object(Ge.e)(o, !1)), h(e)
					}, [u, h, o, r]),
					v = c.a.useCallback(() => {
						u(Object(Ge.e)(o, !0)), h("spam")
					}, [u, h, o]),
					g = c.a.useCallback(() => {
						u(Object(Ge.b)(o, m.G.MODERATOR))
					}, [u, o]),
					f = c.a.useCallback(() => {
						u(Object(Ge.b)(o, m.G.NONE))
					}, [u, o]);
				return c.a.createElement(c.a.Fragment, null, n && i && c.a.createElement(en.b, {
					className: Gt.a.dropdownMenuItem,
					displayText: ge.fbt._("Undistinguish as Mod", null, {
						hk: "2ohUEB"
					}),
					onClick: f
				}, c.a.createElement(sn.a, {
					className: Gt.a.dropdownIcon
				})), n && !i && c.a.createElement(en.b, {
					className: Gt.a.dropdownMenuItem,
					displayText: ge.fbt._("Distinguish as Mod", null, {
						hk: "jywZz"
					}),
					onClick: g
				}, c.a.createElement(an.a, {
					className: Gt.a.dropdownIcon
				})), (t.bannedBy || s) && c.a.createElement(en.b, {
					className: Gt.a.dropdownMenuItem,
					displayText: a ? ge.fbt._("Reapprove", null, {
						hk: "vlRqn"
					}) : ge.fbt._("Approve", null, {
						hk: "3Vc0Oh"
					}),
					onClick: b
				}, c.a.createElement(tn.a, {
					className: Gt.a.dropdownIcon
				})), l && c.a.createElement(en.b, {
					className: Gt.a.dropdownMenuItem,
					displayText: r ? ge.fbt._("Confirm removal", null, {
						hk: "3q7g1J"
					}) : ge.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: C
				}, c.a.createElement(nn.a, {
					className: Gt.a.dropdownIcon
				})), l && c.a.createElement(en.b, {
					className: Gt.a.dropdownMenuItem,
					displayText: ge.fbt._("Remove as Spam", null, {
						hk: "2bRa8t"
					}),
					onClick: v
				}, c.a.createElement(on.a, {
					className: Gt.a.dropdownIcon
				})))
			};
			var cn = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				dn = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ln = n("./src/reddit/icons/svgs/UserBlock/index.tsx");
			const mn = e => `Comment-${e}--Modal--DeleteComment`,
				un = e => `CommentChatPost--ModMenu--${e}`,
				pn = e => `CommentChatPost--OverflowMenu--${e}`,
				hn = e => {
					let {
						comment: t,
						commentsPageKey: n,
						isLivestreaming: o = !1
					} = e;
					const s = t.id,
						a = Object(d.d)(),
						r = Object(Ut.a)(),
						i = Object(d.e)(It.k),
						l = Object(d.e)(e => Object(kt.c)(e, t.authorId)),
						m = i && i.id === t.authorId,
						u = c.a.useCallback(e => {
							r(Object(Ye.f)(e, s))
						}, [r, s]),
						p = c.a.useCallback(() => {
							a(Object(Je.c)(s, !1)), u("report")
						}, [a, u, s]),
						h = c.a.useCallback(() => {
							a(Object(ze.i)(mn(t.id))), u("delete")
						}, [a, u, t]),
						b = c.a.useCallback(() => {
							const e = t.media && t.media.rteMode;
							n && a(Object(qe.e)({
								commentId: t.id,
								draftKey: Object(_e.a)(xt.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: e,
								commentsPageKey: n
							})), u("edit")
						}, [a, u, t, n]),
						C = c.a.useCallback(() => {
							a(Object(Xe.h)(t.author)), u("block")
						}, [a, u, t]),
						v = c.a.useCallback(() => {
							a(Object(Xe.g)(t.author)), u("unblock")
						}, [a, u, t]);
					return c.a.createElement(c.a.Fragment, null, m && !o && c.a.createElement(en.b, {
						className: Gt.a.dropdownMenuItem,
						displayText: ge.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: b
					}, c.a.createElement(cn.a, {
						className: Gt.a.dropdownIcon
					})), m && c.a.createElement(en.b, {
						className: Gt.a.dropdownMenuItem,
						displayText: ge.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						onClick: h
					}, c.a.createElement(He.a, {
						className: Gt.a.dropdownIcon
					})), !m && c.a.createElement(en.b, {
						className: Gt.a.dropdownMenuItem,
						displayText: ge.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						onClick: p
					}, c.a.createElement(dn.a, {
						className: Gt.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && !l && c.a.createElement(en.b, {
						className: Gt.a.dropdownMenuItem,
						displayText: ge.fbt._("Block", null, {
							hk: "2DpLB7"
						}),
						onClick: C
					}, c.a.createElement(ln.a, {
						className: Gt.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && l && c.a.createElement(en.b, {
						className: Gt.a.dropdownMenuItem,
						displayText: ge.fbt._("Unblock", null, {
							hk: "2WvyIX"
						}),
						onClick: v
					}, c.a.createElement(ln.a, {
						className: Gt.a.dropdownIcon
					})))
				},
				bn = (e, t) => `CommentChatPost--${e}--${t}`,
				Cn = (e, t) => `${e}${t.id}`,
				vn = Object(l.c)({
					currentUser: It.k,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(q.n)(e, {
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
						return Object(Et.a)(e) === mn(n.id)
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(kt.c)(e, n.authorId)
					},
					isLivePostCreatorModRoleEnabled: e => Object(ve.e)(e),
					isChatCreateOnlyPerm: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(q.b)(e, {
							postId: n.postId
						})
					},
					isCommentAwardsEnabled: ve.a
				});
			var gn = Object(d.b)(vn, (e, t) => {
				let {
					comment: n,
					commentsPageKey: o
				} = t;
				return {
					onReplyClick: () => e(Object(qe.s)({
						parentCommentId: n.id,
						commentsPageKey: o,
						singleOpen: !0
					})),
					giveAward: () => {
						const t = Object(Ft.d)(Ft.a.GildingFlow, !0);
						return e(Object(Dt.d)({
							correlationId: t,
							thingId: n.id
						}))
					},
					giveReactionAward: (t, n) => e(be(t, n, !1)),
					deleteComment: () => o && e(Object(qe.j)(n.id, n.postId)),
					toggleDeleteCommentModal: () => e(Object(ze.i)(mn(n.id)))
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
					isCommentAwardsEnabled: l,
					isDeleteModalOpen: m,
					isLivestreaming: u,
					isMod: p,
					isChatCreateOnlyPerm: h,
					isLivePostCreatorModRoleEnabled: b,
					onReplyClick: C,
					reportFlowIsOpen: v,
					toggleDeleteCommentModal: g,
					availableReactionAwards: f,
					giveReactionAward: x
				} = e;
				const E = !!s && s.id === t.authorId,
					k = Object(d.e)(ve.c),
					_ = Object(Ut.a)(),
					I = c.a.useCallback(() => {
						_(Object(Ye.f)("other_options", t.id))
					}, [_, t.id]);
				return c.a.createElement("div", {
					className: Object(Ee.a)(Gt.a.menu, o, {
						[Gt.a.livestreaming]: u
					})
				}, k && !!(null == f ? void 0 : f.length) && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: Gt.a.innerWrapper
				}, f.map(e => {
					let {
						id: n,
						name: o,
						icon: s
					} = e;
					return c.a.createElement(Jt, {
						key: n,
						onClick: () => (e => {
							x(e, t.id), _(Object(Ye.g)(e, t.id, "actions_menu"))
						})(n),
						commentId: t.id,
						tooltipId: Cn(`CommentChatPost--${n}`, t),
						tooltipText: o
					}, c.a.createElement("img", {
						className: Gt.a.snoomojiWrapper,
						src: s.url,
						alt: o
					}))
				})), c.a.createElement("div", {
					className: Gt.a.verticalBar
				})), c.a.createElement("div", {
					className: Gt.a.innerWrapper
				}, !t.isLocked && !i && Boolean(t.authorId) && c.a.createElement(c.a.Fragment, null, c.a.createElement(Jt, {
					onClick: C,
					commentId: t.id,
					tooltipId: bn("Reply", t.id),
					tooltipText: ge.fbt._("Reply", null, {
						hk: "14j3OR"
					}),
					trackingNoun: "reply",
					"data-testid": "comment-reply"
				}, c.a.createElement(Kt.a, {
					className: Gt.a.icon
				})), l && c.a.createElement(Jt, {
					onClick: r,
					commentId: t.id,
					tooltipId: bn("Award", t.id),
					tooltipText: ge.fbt._("Give Award", null, {
						hk: "3rUq40"
					}),
					trackingNoun: "award",
					"data-testid": "comment-award"
				}, c.a.createElement(Ht.a, {
					className: Gt.a.icon
				}))), p && !(h && b) && c.a.createElement($t, {
					dropdownId: un(t.id),
					icon: c.a.createElement(Wt.a, {
						className: Gt.a.icon
					})
				}, c.a.createElement(rn, {
					comment: t,
					isCommentAuthor: E
				})), c.a.createElement($t, {
					dropdownId: pn(t.id),
					icon: c.a.createElement(Vt.a, {
						className: Gt.a.icon
					}),
					onClick: I
				}, c.a.createElement(hn, {
					comment: t,
					isLivestreaming: u,
					commentsPageKey: n
				})), v && c.a.createElement(lt.a, {
					withOverlay: !0,
					overlayCustomStyles: dt.b,
					postId: t.postId,
					commentId: t.id
				}), m && c.a.createElement(rt.a, {
					actionText: ge.fbt._("Delete", null, {
						hk: "3j0q3Z"
					}),
					cancelActionText: ge.fbt._("Keep", null, {
						hk: "3LTfYE"
					}),
					headerText: ge.fbt._("Delete comment", null, {
						hk: "4uv7tI"
					}),
					modalText: ge.fbt._("Are you sure you want to delete your comment?", null, {
						hk: "227ya0"
					}),
					onConfirm: a,
					toggleModal: g,
					withOverlay: !0
				})))
			});
			const fn = e => {
				return Object(d.e)(ve.b) ? c.a.createElement(gn, e) : c.a.createElement(Bt, e)
			};
			var xn = n("./src/chat/helpers/dom.ts"),
				En = n("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				kn = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				_n = n.n(kn);

			function In() {
				return (In = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const yn = {},
				On = ke.a.wrapped(Be.a, "ChatIcon", _n.a),
				wn = ke.a.span("ReplyAuthor", _n.a),
				Tn = ke.a.div("ReplyWrapper", _n.a);
			var jn = Object(d.b)(() => Object(l.c)({
					comment: K.b,
					commentPermalink: V.m
				}))(e => {
					let {
						comment: t,
						commentId: n,
						commentPermalink: o,
						isLivestreaming: s,
						isV2Enabled: a = !1,
						onReplyClick: r
					} = e;
					return t ? t.isDeleted ? c.a.createElement(Tn, null, c.a.createElement("span", {
						className: Object(Ee.a)(_n.a.ReplyLinkBubble, _n.a.delete, {
							[_n.a.Livestreaming]: s,
							[_n.a.isV2Enabled]: a,
							[_n.a.isDeleted]: a
						})
					}, c.a.createElement(Ke, {
						isV2Enabled: a
					}))) : c.a.createElement(Tn, null, c.a.createElement("a", {
						className: Object(Ee.a)(_n.a.ReplyLinkBubble, {
							[_n.a.Livestreaming]: s,
							[_n.a.isV2Enabled]: a
						}),
						href: o,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(xn.a)(() => r(t.id))
					}, c.a.createElement(On, In({
						userId: t.authorId,
						icon: t.profileImage
					}, a ? {
						width: 16,
						height: 16
					} : {})), c.a.createElement(wn, null, t.author), c.a.createElement(En.a, {
						className: _n.a.ReplyComment,
						key: `rich-text-${n}`,
						content: Object(Te.a)(t),
						rtJsonElementProps: yn
					}))) : null
				}),
				Nn = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Mn = n.n(Nn);
			const Ln = Object(Ie.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var An = e => {
					const {
						comment: t
					} = e;
					return void 0 === Ln(e) ? null : c.a.createElement(je.b, {
						className: Mn.a.SystemMessageText,
						content: Object(Te.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: Ln(e),
						useExplicitTextColor: !0
					})
				},
				Rn = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Sn = n("./src/reddit/controls/ErrorText/index.tsx"),
				Bn = n("./src/reddit/constants/experiments.ts"),
				Dn = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Fn = e => Object(Dn.c)(e, {
				experimentName: Bn.yb,
				experimentEligibilitySelector: Dn.a
			}) === Bn.tb.Enabled;
			var Un = n("./src/reddit/selectors/communityAwards.ts");
			const Hn = (e, t) => {
				let {
					commentId: n
				} = t;
				const o = Object(K.b)(e, {
					commentId: n
				});
				if (o && o.associatedAwardId) return Object(Un.a)(e, o.associatedAwardId)
			};
			var Wn = n("./src/reddit/selectors/gold/awardIcon.ts"),
				Vn = n("./src/reddit/selectors/poll/index.ts"),
				Kn = n("./src/reddit/components/CommentsChat/Comment/v1/index.m.less"),
				qn = n.n(Kn);
			const Gn = 250,
				zn = 10,
				Jn = ke.a.wrapped(Sn.b, "ErrorText", qn.a),
				Qn = ke.a.wrapped(ye.a, "TopMeta", qn.a),
				Xn = ke.a.wrapped(jn, "Reply", qn.a),
				Zn = Object(Pn.u)(),
				Yn = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return Hn(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = Hn(e, {
							commentId: n
						});
						if (o) return Object(Wn.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: n
						})
					},
					comment: K.b,
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
					prediction: Vn.f,
					subreddit: Pn.r,
					shouldRenderSystemMessages: Fn
				})),
				$n = Object(Ie.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class eo extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Gn && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let n = Gn;
						if (t) {
							n = e.scrollHeight + zn;
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
						isLivestreaming: m,
						postId: u,
						prediction: p,
						renderedInOverlay: h,
						sendEvent: b,
						targetComment: C,
						timestampUpdateTrigger: v,
						addToRefList: g,
						onReplyClick: f,
						shouldRenderSystemMessages: x
					} = this.props, {
						isCollapsed: E,
						isExpanded: k,
						isTruncated: _
					} = this.state;
					if (!o) return null;
					d && xe()(() => this.elemRef.current && this.elemRef.current.focus()), xe()(() => this.elemRef && this.elemRef.current && g && g(this.elemRef));
					const I = o.isSystem,
						y = !l && !o.isDeleted && !I,
						O = !!e,
						w = Object(Ee.a)({
							[qn.a.SystemMessageWrapper]: I && !m && x,
							[qn.a.CommentWrapper]: !m && !I,
							[qn.a.CommentExpanded]: k,
							[qn.a.CommentTruncated]: _,
							[qn.a.HighlightTarget]: C,
							[qn.a.LivestreamingCommentWrapper]: m
						});
					return E ? c.a.createElement(Ue, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: w
					}, l && c.a.createElement(Rn.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: u,
						sendEvent: b,
						draftKey: Object(_e.a)(xt.c.edit, o.id),
						commentsPageKey: a,
						isEditing: l,
						comment: o
					}), y && c.a.createElement(c.a.Fragment, null, c.a.createElement(Qn, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: o,
						commentsPageKey: a,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: m,
						renderedInOverlay: h
					}, c.a.createElement(Be.a, {
						className: Object(Ee.a)(qn.a.ChatIcon, {
							[qn.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: o.profileImage,
						userId: o.authorId,
						isNSFW: o.profileOver18 || o.authorIconIsNSFW
					})), o.parentId && c.a.createElement(Xn, {
						commentId: o.parentId,
						onReplyClick: f,
						isLivestreaming: m
					}), m && c.a.createElement("span", {
						className: qn.a.livestreamingTimeStamp
					}, c.a.createElement(it.d, {
						seconds: o.created
					})), O && e && m ? c.a.createElement(Se, {
						award: e,
						comment: o,
						iconUrl: t
					}) : p ? c.a.createElement(Oe.a, {
						comment: o,
						prediction: p
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(je.b, {
						className: Object(Ee.a)(qn.a.RichTextJson, {
							[qn.a.Livestreaming]: m
						}),
						content: Object(Te.a)(o),
						rtJsonElementProps: $n(this.props),
						useExplicitTextColor: m
					}), c.a.createElement(fn, {
						className: Object(Ee.a)(qn.a.Menu, {
							[qn.a.Livestreaming]: m
						}),
						comment: o,
						commentPermalink: s,
						commentsPageKey: a,
						isLivestreaming: m,
						showTime: !m,
						timestampUpdateTrigger: v
					}))), o.isDeleted && c.a.createElement(Ke, {
						className: Object(Ee.a)(qn.a.DeletedComment, {
							[qn.a.Livestreaming]: m
						})
					}), y && r && r.map((e, t) => c.a.createElement(Jn, {
						key: `${t}-${e}`
					}, e)), !l && _ && c.a.createElement("button", {
						className: Object(Ee.a)(qn.a.CommentReadMoreButton, {
							[qn.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, ge.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), I && !m && x && c.a.createElement(An, {
						comment: o
					}))
				}
			}
			var to = Zn(Yn(eo)),
				no = n("./src/lib/prettyPrintNumber/index.ts"),
				oo = n("./src/reddit/components/CommentsChat/Comment/ReactionButton/index.m.less"),
				so = n.n(oo);
			const ao = e => {
				let {
					className: t,
					enforceDarkMode: n,
					comment: o,
					reaction: s
				} = e;
				var a, r, i, l;
				const m = Object(d.d)(),
					u = Object(Ut.a)(),
					p = Boolean(null === (r = null === (a = o.awardingsByCurrentUser) || void 0 === a ? void 0 : a[s.id]) || void 0 === r ? void 0 : r.length);
				return c.a.createElement("button", {
					className: Object(Ee.a)(t, so.a.reactionAwardButton, {
						[so.a.darkMode]: n,
						[so.a.activeReactionButton]: p
					}),
					onClick: p ? () => {
						u(Object(Ye.h)(s.id, o.id, "quick_button"))
					} : () => {
						m(be(s.id, o.id, !1)), u(Object(Ye.g)(s.id, o.id, "quick_button"))
					}
				}, c.a.createElement("img", {
					className: so.a.snoomoji,
					src: s.icon.url,
					alt: s.name
				}), c.a.createElement("span", {
					className: Object(Ee.a)(so.a.countText, {
						[so.a.darkMode]: n
					})
				}, Object(no.b)(null !== (l = null === (i = o.awardCountsById) || void 0 === i ? void 0 : i[s.id]) && void 0 !== l ? l : 0)))
			};
			var ro = n("./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less"),
				io = n.n(ro);
			const co = () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
				className: io.a.icon
			}, c.a.createElement(He.a, null)), c.a.createElement("span", {
				className: io.a.label
			}, ge.fbt._("This message was deleted", null, {
				hk: "23fI7b"
			})));
			var lo = n("./src/reddit/components/UserIcon/index.tsx");

			function mo(e) {
				return !!e
			}
			const uo = e => "chat_reaction_upvote" === e.id,
				po = e => uo(e) || (e => "chat_reaction_downvote" === e.id)(e),
				ho = (e, t) => {
					let {
						award: n
					} = e, {
						award: o
					} = t;
					const s = po(n),
						a = po(o);
					if (s && a) {
						const e = uo(n),
							t = uo(o);
						return e && !t ? -1 : !e && t ? 1 : 0
					}
					return s ? -1 : a ? 1 : 0
				},
				bo = (e, t) => t.total - e.total,
				Co = (e, t) => {
					const n = po(e.award),
						o = po(t.award);
					if (n && o) {
						return e.total !== t.total ? bo(e, t) : ho(e, t)
					}
					return n && !o || !n && o ? ho(e, t) : bo(e, t)
				},
				vo = Object(l.a)((e, t) => {
					var n;
					return Object.keys(null !== (n = t.awardCountsById) && void 0 !== n ? n : {}).map(n => {
						var o, s;
						const a = Object(Un.a)(e, n),
							r = null !== (s = null === (o = t.awardCountsById) || void 0 === o ? void 0 : o[n]) && void 0 !== s ? s : 0;
						if (a && a.awardSubType === oe.d.ChatReaction && !(r <= 0)) return {
							award: a,
							total: r
						}
					}).filter(mo)
				}, e => e.slice().sort(Co));
			var go = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				fo = n("./src/reddit/selectors/userPrefs.ts"),
				xo = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Eo = n("./src/reddit/helpers/trackers/gild.ts"),
				ko = n("./src/reddit/icons/svgs/Close/index.tsx"),
				_o = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/AwardsHovercard/index.m.less"),
				Io = n.n(_o);
			const yo = {
					height: 280,
					width: 275
				},
				Oo = e => {
					let {
						postOrComment: t,
						id: n,
						tooltipId: o
					} = e;
					const s = t.awardCountsById,
						a = Object(d.d)(),
						r = Object(Ut.a)(),
						i = Object(d.e)(e => Object(Un.j)(e, {
							thing: t
						})),
						l = Object(d.e)(fo.c),
						m = c.a.useCallback(() => {
							a(Object(Qe.i)())
						}, [a]);
					return s && i.length ? c.a.createElement(xo.a, {
						className: Io.a.container,
						tooltipId: o,
						tooltipSizeEstimate: yo,
						defaultTooltipPosition: "top"
					}, c.a.createElement("div", {
						id: n,
						onClick: e => e.stopPropagation()
					}, c.a.createElement("div", {
						className: Io.a.header
					}, c.a.createElement("span", {
						className: Io.a.title
					}, ge.fbt._("Awards", null, {
						hk: "2HinFQ"
					})), c.a.createElement("button", {
						onClick: m
					}, c.a.createElement(ko.a, {
						className: Io.a.closeIcon
					}))), c.a.createElement("div", {
						className: Io.a.awardsList
					}, i.map(e => c.a.createElement("div", {
						key: e.id,
						className: Io.a.award
					}, c.a.createElement("span", null, Object(no.b)(s[e.id])), c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: Io.a.awardIcon,
						src: Object(Wn.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: l
						})
					}), c.a.createElement("span", null, e.name))), c.a.createElement("button", {
						className: Io.a.giveAwardButton,
						onClick: () => {
							m();
							const e = Object(Ft.d)(Ft.a.GildingFlow, !0);
							return r(Object(Eo.clickGildEvent)(t.id, {
								pageType: "given_awards_list"
							})), a(Object(Dt.d)({
								correlationId: e,
								thingId: t.id
							}))
						}
					}, c.a.createElement(Ht.a, {
						className: Io.a.awardIcon
					}), c.a.createElement("span", null, ge.fbt._("Give another award", null, {
						hk: "hGgqt"
					})))))) : null
				};
			var wo = n("./src/reddit/components/CommentsChat/Comment/v2/AwardsBadge/index.m.less"),
				To = n.n(wo);
			const jo = () => {},
				No = e => {
					let {
						postOrComment: t
					} = e;
					const n = `awards-badge-tooltip-${t.id}`,
						o = `awards-badge-tooltip-content-${t.id}`,
						s = Object(d.d)(),
						a = Object(Ut.a)(),
						r = Object(d.e)(e => Object(Un.j)(e, {
							thing: t
						})),
						i = c.a.useMemo(() => !(!Object(E.b)(t) || !t.awardingsByCurrentUser) && r.some(e => {
							var n, o;
							return Boolean(null === (o = null === (n = t.awardingsByCurrentUser) || void 0 === n ? void 0 : n[e.id]) || void 0 === o ? void 0 : o.length)
						}), [r, t]),
						l = Object(d.e)(fo.c),
						m = Object(d.e)(e => Object(Zt.b)(n)(e)),
						u = c.a.useCallback(() => {
							s(Object(Qe.h)({
								tooltipId: n
							}))
						}, [s, n]),
						p = c.a.useCallback(() => {
							s(Object(Qe.i)())
						}, [s]);
					c.a.useEffect(() => {
						m && a(Object(Ye.k)(t.id))
					}, [t.id, m]);
					const h = r.slice(0, 3);
					return h.length ? c.a.createElement(go.b, {
						onCloseUserDropdown: p,
						onOpenUserDropdown: jo,
						dropdownIsOpen: m,
						hoverId: o,
						tooltipId: n
					}, c.a.createElement("button", {
						id: n,
						className: Object(Ee.a)(To.a.badge, {
							[To.a.awarded]: i
						}),
						onClick: u
					}, h.map(e => c.a.createElement("img", {
						key: e.id,
						alt: e.name,
						className: To.a.awardIcon,
						src: Object(Wn.c)({
							award: e,
							postOrComment: t,
							size: 32,
							prefersReducedMotion: l
						})
					})), c.a.createElement("span", {
						className: To.a.countText
					}, ge.fbt._({
						"*": "{number} awards",
						_1: "1 award"
					}, [ge.fbt._plural(r.length, "number", Object(no.b)(r.length))], {
						hk: "34eaW8"
					}))), c.a.createElement(Oo, {
						id: o,
						tooltipId: n,
						postOrComment: t
					})) : null
				};
			var Mo = n("./src/reddit/components/CommentsChat/Comment/v2/index.m.less"),
				Lo = n.n(Mo);
			var Ao = Object(Pn.u)()(Object(d.b)(() => Object(l.c)({
				associatedAward: (e, t) => {
					let {
						commentId: n
					} = t;
					return Hn(e, {
						commentId: n
					})
				},
				awardIconUrl: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = Hn(e, {
						commentId: n
					});
					if (o) return Object(Wn.a)(e, {
						award: o,
						minSize: 64,
						postOrCommentId: n
					})
				},
				comment: K.b,
				commentPermalink: V.m,
				errorMsgs: V.H,
				flair: V.e,
				isActive: (e, t) => {
					let {
						commentId: n
					} = t;
					return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
				},
				isCommentAwardsEnabled: ve.a,
				isCommentReactionsEnabled: ve.c,
				isEditing: V.z,
				prediction: Vn.f,
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
				subreddit: Pn.r,
				shouldRenderSystemMessages: Fn,
				isDropdownMenuVisible: (e, t) => {
					let {
						commentId: n
					} = t;
					const o = un(n),
						s = pn(n);
					return Object(Zt.b)(o)(e) || Object(Zt.b)(s)(e)
				}
			}))(e => {
				let {
					associatedAward: t,
					awardIconUrl: n,
					childrenInfo: o,
					comment: s,
					commentPermalink: a,
					commentsPageKey: r,
					errorMsgs: i,
					flair: l,
					isActive: m,
					isCommentAwardsEnabled: u,
					isCommentReactionsEnabled: p,
					isEditing: h,
					isDropdownMenuVisible: b,
					isLivestreaming: C = !1,
					isSelectedForReply: v,
					postId: g,
					prediction: f,
					renderedInOverlay: x,
					sendEvent: E,
					targetComment: k,
					timestampUpdateTrigger: _,
					addToRefList: I,
					onReplyClick: y,
					shouldRenderSystemMessages: O,
					availableReactionAwards: w
				} = e;
				const T = c.a.useRef(null),
					j = c.a.useRef(null),
					[N, M] = c.a.useState(s && s.collapsed),
					[L, A] = c.a.useState(!1),
					[R, P] = c.a.useState(!1),
					S = c.a.useMemo(() => ({
						renderingObjectInfo: s || void 0
					}), [s]),
					B = Object(d.e)(e => s ? vo(e, s) : []),
					D = () => {
						M(!N)
					};
				if (c.a.useEffect(() => {
						var e;
						j.current && (null === (e = j.current) || void 0 === e ? void 0 : e.scrollHeight) > 250 && !t && !C && P(!0)
					}, []), c.a.useEffect(() => {
						if (!j.current || C) return;
						const e = j.current;
						let t = 250;
						if (L) {
							t = e.scrollHeight + 10;
							const n = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", n)
							};
							e.addEventListener("transitionend", n)
						}
						e.style.maxHeight = `${t}px`
					}, [L, R, C]), c.a.useEffect(() => {
						var e;
						m && (null === (e = T.current) || void 0 === e || e.focus())
					}, [m]), c.a.useEffect(() => {
						T.current && I && I(T)
					}, [I]), !s) return null;
				const F = s.isSystem,
					U = !s.isDeleted && !F,
					H = !!t,
					W = Object.keys(s.awardCountsById || {}).length > 0,
					V = u && W,
					K = p && !!(null == B ? void 0 : B.length);
				return N ? c.a.createElement(Ue, {
					commentCount: 1,
					onClick: D
				}) : c.a.createElement("div", {
					className: Object(Ee.a)(Lo.a.container, {
						[Lo.a.livestreaming]: C,
						[Lo.a.selectedForReply]: v,
						[Lo.a.hover]: b
					}),
					tabIndex: 0,
					ref: T
				}, s.parentId && c.a.createElement("div", {
					className: Lo.a.replyWrapper
				}, c.a.createElement(jn, {
					commentId: s.parentId,
					onReplyClick: e => {
						E(Object(Ye.b)(e)), y(e)
					},
					isLivestreaming: C,
					isV2Enabled: !0
				})), c.a.createElement("div", {
					id: k ? "targetComment" : void 0,
					className: Object(Ee.a)({
						[Lo.a.comment]: !F,
						[Lo.a.systemMessageComment]: F && !C && O,
						[Lo.a.highlighted]: k,
						[Lo.a.expanded]: L
					})
				}, U && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: Lo.a.avatar
				}, c.a.createElement(lo.a, {
					className: Object(Ee.a)(Lo.a.icon),
					iconUrl: s.profileImage || s.authorIconImage,
					userName: s.author,
					isNSFW: Boolean(s.profileOver18 || s.authorIconIsNSFW)
				})), c.a.createElement("div", null, c.a.createElement(ye.a, {
					className: Lo.a.TopMeta,
					childrenInfo: o,
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: s,
					commentsPageKey: r,
					compact: !0,
					flair: l,
					ignoreFlairPosition: !0,
					ignoreLock: !0,
					isLivestreaming: C,
					renderedInOverlay: x,
					hideAwards: u || p
				}), c.a.createElement("span", {
					className: Lo.a.timestamp
				}, c.a.createElement(it.d, {
					seconds: s.created
				}))), !h && c.a.createElement("div", {
					ref: j,
					className: Object(Ee.a)(Lo.a.commentBody, {
						[Lo.a.expanded]: L
					})
				}, H && t && C ? c.a.createElement(Se, {
					award: t,
					comment: s,
					iconUrl: n
				}) : f ? c.a.createElement(Oe.a, {
					comment: s,
					prediction: f
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(je.b, {
					className: Object(Ee.a)(Lo.a.richTextJson, {
						[Lo.a.livestreaming]: C
					}),
					content: Object(Te.a)(s),
					rtJsonElementProps: S,
					useExplicitTextColor: C
				}), (V || K) && c.a.createElement("div", {
					className: Lo.a.reactions
				}, V && c.a.createElement(No, {
					postOrComment: s
				}), K && B.map(e => {
					let {
						award: t
					} = e;
					return c.a.createElement(ao, {
						key: t.id,
						enforceDarkMode: C,
						comment: s,
						reaction: t
					})
				})), c.a.createElement(fn, {
					className: Lo.a.menu,
					comment: s,
					commentPermalink: a,
					commentsPageKey: r,
					isLivestreaming: C,
					timestampUpdateTrigger: _,
					availableReactionAwards: w
				}))), h && c.a.createElement(Rn.a, {
					isV2: !0,
					isLivestreaming: C,
					postId: g,
					sendEvent: E,
					draftKey: Object(_e.a)(xt.c.edit, s.id),
					commentsPageKey: r,
					isEditing: h,
					comment: s
				})), s.isDeleted && c.a.createElement(co, null), U && !h && i && i.map((e, t) => c.a.createElement(Sn.b, {
					key: `${t}-${e}`,
					className: Lo.a.errorText
				}, e)), !h && R && !L && c.a.createElement("button", {
					type: "button",
					className: Object(Ee.a)(Lo.a.readMoreButton, {
						[Lo.a.livestreaming]: C
					}),
					onClick: () => {
						A(!L)
					}
				}, ge.fbt._("Read more", null, {
					hk: "3s9Bqf"
				})), F && !C && O && c.a.createElement(An, {
					comment: s
				})))
			}));
			const Ro = e => {
				return Object(d.e)(ve.d) ? c.a.createElement(Ao, e) : c.a.createElement(to, e)
			};
			var Po = n("./node_modules/lodash/isEqual.js"),
				So = n.n(Po),
				Bo = n("./src/reddit/controls/Button/index.tsx"),
				Do = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Fo = n.n(Do);
			const Uo = ke.a.div("ButtonWrapper", Fo.a),
				Ho = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(Ee.a)(Fo.a.ChunkPlaceholder, {
							[Fo.a.top]: t
						})
					}, ge.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Wo = e => {
					let {
						className: t,
						isLivestreaming: n,
						isLoading: o,
						setRef: s,
						...a
					} = e;
					return c.a.createElement("div", {
						ref: s,
						className: Object(Ee.a)(t, {
							[Fo.a.ScrollerWrapper]: !n,
							[Fo.a.LivestreamingWrapper]: n,
							[Fo.a.loading]: o
						})
					}, !o && a.isPrevLoading && !n && c.a.createElement(Ho, {
						top: !0
					}), a.children, !o && a.isNextLoading && !n && c.a.createElement(Ho, null))
				};
			class Vo extends c.a.Component {
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
					}), this.scrollToTargetComment(), this.props.targetCommentIndex || this.props.onLastMessageView && this.props.onLastMessageView()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !So()(g()(e.children), g()(this.props.children)) || !So()(r()(e.children), r()(this.props.children));
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
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(Ee.a)([Fo.a.NewComments, Fo.a.show]) : Fo.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Wo, {
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
						className: Fo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: Fo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Fo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(Uo, null, c.a.createElement(Bo.l, {
						className: n,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", ge.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [ge.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Ko = Vo,
				qo = n("./src/reddit/selectors/posts.ts");
			const Go = 6e4,
				zo = (e, t, n) => {
					let {
						authorId: o,
						id: s
					} = n;
					return e.includes(o) && !t.includes(s)
				},
				Jo = Object(l.c)({
					blockedRedditors: kt.a,
					blockedRedditorsPending: kt.b,
					chatCommentLinks: V.g,
					isPending: V.d,
					liveCommentsWebsocket: qo.E,
					moreCommentsLink: V.G,
					availableReactionAwards: (e, t) => {
						let {
							subredditId: n
						} = t;
						return ((e, t) => {
							var n;
							return (null !== (n = e.awards.chatReactions.availability[t]) && void 0 !== n ? n : []).map(t => Object(Un.a)(e, t)).filter(mo)
						})(e, n)
					}
				}),
				Qo = Object(d.b)(Jo, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e(Y(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						B(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(b.m)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.t.CHAT,
						comment_awardings_by_current_user: !0
					}, m.t.CHAT)),
					fetchAvailableReactionAwards: async t => e(he(t))
				}));
			class Xo extends c.a.Component {
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
					} = this.props, t = e[e.length - 1], n = t && t.created;
					return !!n && Object(p.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(u.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, Go)
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
					e(t)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					var n;
					const {
						blockedRedditors: o,
						blockedRedditorsPending: s,
						chatCommentLinks: a,
						commentsPageKey: r,
						isLoading: i,
						isPending: c,
						postId: d,
						draftKey: l,
						availableReactionAwards: m
					} = this.props, {
						expandedCommentIds: u,
						timestampUpdateTrigger: p
					} = this.state;
					return e.postId !== d || e.draftKey !== l || e.isLoading !== i || e.isPending !== c || e.blockedRedditorsPending !== s || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== a.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== o.ids.length || (null === (n = e.availableReactionAwards) || void 0 === n ? void 0 : n.length) !== (null == m ? void 0 : m.length) || t.expandedCommentIds.length !== u.length || t.timestampUpdateTrigger !== p
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
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && a && (i(s, a, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = a)), e.blockedRedditors.ids !== t.ids) {
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
							void 0 === t && (this.scrollToTargetComment(), o && n.forEach((e, t) => e.id === o && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: n,
						sendEvent: o
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), o(Object(Ye.j)("history", n)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = r()(e);
					(null == n ? void 0 : n.id) && t(Object(Ye.c)(n.id))
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
						isLoading: i,
						isPending: d,
						postId: l,
						renderedInOverlay: m,
						sendEvent: u,
						availableReactionAwards: p
					} = this.props, {
						expandedCommentIds: h,
						targetCommentIndex: b,
						timestampUpdateTrigger: C
					} = this.state, v = !(t && t.length || i || d);
					return c.a.createElement(c.a.Fragment, null, v ? c.a.createElement(Ce.c, {
						className: a,
						isChat: !0
					}) : c.a.createElement(Ko, {
						className: n,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: b,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => zo(e.ids, h, t) ? c.a.createElement(Ue, {
						commentCount: 1,
						isLivestreaming: r,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Ro, {
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: s,
						isLivestreaming: r,
						postId: l,
						renderedInOverlay: !!m,
						sendEvent: u,
						timestampUpdateTrigger: C,
						targetComment: t.id === o,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e),
						availableReactionAwards: p
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = Qo(Object(mt.c)(Xo))
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
				k = Object(r.b)(x);
			class _ extends a.a.Component {
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
			t.a = k(_)
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
		"./src/reddit/endpoints/awards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				i = (n("./src/redditGQL/operations/AvailableAwards.json"), n("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				c = n("./src/redditGQL/operations/GiveAward.json");
			const d = async (e, t, n) => {
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
			}, l = async (e, t, n) => {
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
		"./src/reddit/icons/svgs/Trash3/index.tsx": function(e, t, n) {
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
					viewBox: "0 0 16 16"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M12.6004 4.84721L13.5996 4.91361L12.9908 14.0664C12.9841 14.5896 12.7788 15.0907 12.4165 15.4683C12.0543 15.8458 11.5621 16.0716 11.0396 16.1H4.95961C4.43817 16.0715 3.94695 15.8462 3.58511 15.4697C3.22327 15.0932 3.01774 14.5934 3.01001 14.0712L2.39961 4.91361L3.39801 4.84721L4.00681 14C4.00283 14.2684 4.09775 14.5288 4.27347 14.7317C4.44919 14.9345 4.69343 15.0657 4.95961 15.1H11.0396C11.3064 15.0651 11.551 14.9331 11.7267 14.7293C11.9025 14.5256 11.997 14.2642 11.9924 13.9952L12.6004 4.84721ZM14.3996 2.40001V3.40001H1.59961V2.40001H4.79961V2.10001C4.82803 1.51721 5.08582 0.969319 5.51672 0.575891C5.94762 0.182464 6.51664 -0.0245568 7.09961 7.87831e-06H8.89961C9.48258 -0.0245568 10.0516 0.182464 10.4825 0.575891C10.9134 0.969319 11.1712 1.51721 11.1996 2.10001V2.40001H14.3996ZM5.79961 2.40001H10.1996V2.10001C10.1705 1.78279 10.0179 1.48972 9.77473 1.28396C9.53155 1.0782 9.21727 0.976221 8.89961 1.00001H7.09961C6.78195 0.976221 6.46767 1.0782 6.22449 1.28396C5.98132 1.48972 5.82873 1.78279 5.79961 2.10001V2.40001Z",
					fill: "inherit"
				})))
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
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(o || (o = {}));
			const s = e => e.category === o.Supporter,
				a = e => e.category === o.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/gold/constants.ts"),
				a = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const r = {};
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
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.ob:
							const {
								subredditId: n, subredditAchievementFlairs: o
							} = t.payload;
							if (!(null == o ? void 0 : o.length)) return e;
							const r = o.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = o.filter(a.a).map(e => e.type),
								c = o.filter(a.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: r,
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
									userAchievementFlairs: r
								} of o) {
								const n = r.filter(a.a),
									o = n.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									i = r.filter(a.b),
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
								supporterFlairType: a
							} = t.payload;
							return Object(i.updateIn)(e, [n, o], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: a
							}))
						}
						case c.g: {
							const {
								subredditId: n,
								userId: o,
								achievementFlairType: s,
								supporterFlairType: a
							} = t.payload;
							return Object(i.updateIn)(e, [n, o], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: a,
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
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "a", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: r.a
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
					var s, a;
					return n && o ? null === (a = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[n]) || void 0 === a ? void 0 : a[o] : null
				},
				l = Object(o.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(o.a)([c, l], (e, t) => e && t ? e[t] : null),
				u = Object(o.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(o.a)([c, u], (e, t) => e && t ? e[t] : null),
				h = Object(o.a)([c, d], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						o = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						s = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === o || e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = Object(o.a)([i, d], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: o,
						flairsByType: s
					} = e, {
						supporterTypes: a,
						achievementTypes: r,
						preferredSupporterType: i,
						preferredAchievementType: c,
						pendingSupporterType: d,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(n, a, s, d || i),
						achievementFlairs: g(o, r, s, l || c)
					}
				}),
				C = Object(o.a)([d], e => !!e && e.isHidden),
				v = Object(o.a)([i, d, p], (e, t, n) => {
					if (!e || !t) return [];
					const o = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...o] : o
				}),
				g = (e, t, n, o) => e.map(e => ({
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
						a = null == o ? void 0 : o.subredditId,
						r = null == o ? void 0 : o.authorId;
					return !(!a || !r) && !!((e, t) => {
						let {
							subredditId: n,
							userId: o
						} = t;
						var s, a, r;
						return n && o ? null === (r = null === (a = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === a ? void 0 : a[o]) || void 0 === r ? void 0 : r[n] : null
					})(e, {
						subredditId: a,
						userId: r
					})
				}
		},
		"./src/redditGQL/operations/AvailableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"4778ed491384"}')
		},
		"./src/redditGQL/operations/AwardSideEffectsDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"f4cb124e646e"}')
		},
		"./src/redditGQL/operations/GiveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"b8028be05f59"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.5043f654327bfa275323.js.map