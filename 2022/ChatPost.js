// https://www.redditstatic.com/desktop2x/ChatPost.5c268c4bed7b82c2296f.js
// Retrieved at 5/9/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e, t, s) {
				if ("function" != typeof e) throw new TypeError(n);
				return setTimeout((function() {
					e.apply(void 0, s)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseDelay.js"),
				o = n("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return s(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var n = i,
					d = c(e, i);
				t = o(t), e -= i;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e, t) {
				for (var n = arguments.length, s = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) s[o - 2] = arguments[o];
				let r, a = !1;
				const i = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), a || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(r)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
					comment: o,
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: d,
					isStrong: l,
					onClick: u,
					style: h
				} = e;
				return n && i ? r.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					author: o.author,
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
				}, o.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				f = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				_ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				x = n("./src/reddit/controls/MetaData/index.tsx"),
				k = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/models/Comment/index.ts"),
				T = n("./src/reddit/selectors/gold/powerups/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				M = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				w = n.n(N);
			const L = e => {
				let {
					authorClassName: t,
					className: n,
					comment: s,
					collapsed: o,
					isLivestreaming: a,
					isStrong: i,
					onClick: d,
					renderedInOverlay: l
				} = e;
				const m = Object(I.f)(s),
					u = r.a.createElement(j.b, {
						ignore: m || !!s.distinguishType && s.distinguishType !== O.G.NONE,
						subredditId: s.subredditId,
						userId: s.authorId
					}, r.a.createElement(h, {
						className: t,
						collapsed: o,
						comment: s,
						isAuthorDeleted: Object(I.f)(s),
						isCommentAuthorBlocked: Object(I.g)(s),
						isLivestreaming: a,
						isStrong: i,
						onClick: d
					}));
				return m ? u : r.a.createElement(M.b, {
					className: Object(c.a)(w.a.authorHoverCard, n),
					collapsed: o,
					isCommentAuthorBlocked: Object(I.g)(s),
					postOrComment: s,
					tooltipType: l ? _.c.Lightbox : void 0
				}, u)
			};
			var S = n("./src/config.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				R = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const P = function(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				return `${e}${t}${n?"inOverlay":""}`
			};
			var B = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(B);
			const D = e => {
				let {
					className: t,
					commentId: n,
					renderedInOverlay: o
				} = e;
				const i = Object(a.d)(),
					d = () => i(Object(A.h)({
						tooltipId: l
					})),
					l = P("CommentTopMeta--cakeday--", n, o),
					m = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(c.a)(F.a.cakedayIcon, t),
					src: `${S.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: l,
					onMouseEnter: d,
					onMouseLeave: d,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(R.c, {
					tooltipId: l,
					text: m
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				H = n("./src/reddit/actions/post.ts"),
				V = n("./src/reddit/components/HumanDate/index.tsx"),
				K = n("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: o,
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
							null == o || o(e), G(l, n.id), d && (e.preventDefault(), l(Object(H.Z)(Object(K.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(V.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(R.c, {
						tooltipId: m
					}, r.a.createElement(V.b, {
						seconds: n.created
					})))
				},
				G = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(W.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Q = n.n(J);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = () => r.a.createElement(x.a, {
				className: Q.a.crowdControlText
			}, Y._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = e => {
				let {
					compact: t,
					editedAt: n
				} = e;
				return r.a.createElement(x.a, {
					className: $.a.editedText
				}, ee._("edited {time}", [ee._param("time", r.a.createElement(V.d, {
					seconds: n,
					shortenedUnit: t
				}))], {
					hk: "1tiB0u"
				}))
			};
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				oe = n("./src/reddit/helpers/showReportIndicator/index.ts"),
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
					ignoreLock: o,
					renderedInOverlay: i
				} = e;
				const c = Object(a.d)(),
					d = e => () => c(Object(A.f)({
						tooltipId: e
					})),
					l = () => c(Object(A.i)()),
					m = e => P(e, t.id, i),
					u = m("CommentTopMeta--Approve--"),
					p = m("CommentTopMeta--Remove--"),
					h = m("CommentTopMeta--Report--"),
					b = m("CommentTopMeta--Spam--"),
					C = d(p);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: me.a.approveIcon,
					desc: Object(se.a)(t),
					id: u,
					onMouseEnter: d(u),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: u,
					text: Object(se.a)(t)
				})), Object(ne.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(se.b)(t),
					id: p,
					onMouseEnter: C,
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: p,
					text: Object(se.b)(t)
				})), Object(ne.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => c(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: C,
					onMouseLeave: l
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !o && r.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: me.a.spamIcon,
					desc: Object(se.d)(t),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: b,
					text: Object(se.d)(t)
				})), Object(oe.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: me.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: h,
					onMouseEnter: d(h),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: h,
					text: Object(se.c)(t.numReports)
				})))
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
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: he.d,
						getLabel: () => s.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: he.a,
						getLabel: () => s.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: he.c,
						getLabel: () => s.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: he.a,
						getLabel: () => s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				fe = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === O.G.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						getLabel: i,
						tooltipTemplate: d
					} = ve[n], l = i(), m = P(s, e.comment.id, e.renderedInOverlay), u = d(e), p = () => t(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(c.a)(Ce.a.role, e.className),
						style: {
							color: o
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, l), n === pe.Mod && r.a.createElement(ge, null)), r.a.createElement(R.c, {
						tooltipId: m,
						text: u
					}))
				},
				ge = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: Ce.a.modAchievement,
					src: `${S.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var _e = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				xe = n.n(_e);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = () => r.a.createElement(x.a, {
				className: xe.a.stickiedText
			}, ke._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ye = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Ie = n.n(ye);
			const Te = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: d,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: h,
					onCommentTimestampClick: O,
					permalink: j,
					renderContractorBadge: M,
					renderedInOverlay: N,
					subredditDisplayText: w
				} = e, S = Object(y.a)(), A = i.subredditId, R = Object(a.e)(e => Object(T.h)(e, {
					subredditId: A
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(c.a)(Ie.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Ie.a.authorLine
				}, r.a.createElement("span", {
					className: Ie.a.metaText
				}, i.deletedBy === I.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(x.c, {
					className: Ie.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Ie.a.metaText,
					comment: i,
					compact: !0,
					permalink: j,
					renderedInOverlay: N
				})));
				return r.a.createElement("div", {
					className: Object(c.a)(Ie.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Ie.a.authorLine
				}, !Object(I.f)(i) && r.a.createElement(C.b, {
					className: Ie.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: Ie.a.baselineItem
				}, r.a.createElement(L, {
					authorClassName: Ie.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: N
				})), !Object(I.f)(i) && u && r.a.createElement(g.a, {
					postOrComment: i,
					className: Ie.a.LastAuthorModNoteIcon
				}), o && r.a.createElement(X, null), r.a.createElement(fe, {
					className: Ie.a.role,
					comment: i,
					subredditDisplayText: w,
					renderContractorBadge: M,
					renderedInOverlay: N
				}), i.isAuthorCakeday ? r.a.createElement(D, {
					className: Ie.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: N
				}) : !Object(I.f)(i) && R && r.a.createElement(b.a, {
					className: Ie.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						S(Object(E.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(f.a, {
					className: Ie.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(x.c, {
					className: Ie.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Ie.a.metaText,
					comment: i,
					compact: !0,
					onClick: O,
					permalink: j,
					renderedInOverlay: N
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(x.c, {
					className: Ie.a.separator
				}), r.a.createElement(Ee, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(x.c, {
					className: Ie.a.separator
				}), r.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: N
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: N ? _.c.Lightbox : void 0
				})), d && !Object(k.o)(d) && r.a.createElement("span", {
					className: Ie.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: Ie.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Oe = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = n("./src/reddit/selectors/economics.ts"),
				Me = n("./src/reddit/models/Flair/index.ts"),
				Ne = n("./src/reddit/selectors/comments.ts"),
				we = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Le = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Ae = n("./src/reddit/selectors/userFlair.ts"),
				Re = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Pe = n.n(Re);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = d.a.wrapped(v.b, "RightPositionedAuthorFlair", Pe.a),
				De = d.a.span("DeletedText", Pe.a),
				Ue = d.a.wrapped(x.a, "MetaSeparator", Pe.a),
				We = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(je.q)(e, n.subredditId, n.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const n = Object(Se.J)(e, {
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
					isBlockingInterstitialEnabled: we.b,
					isBlockingInterstitialV2Enabled: we.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Le.i)(e, n.subredditId)
					}
				}));
			t.a = We(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					commentPermalink: i,
					commentsPageKey: d,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					ignoreFlairPosition: b,
					ignoreLock: g,
					isBlockingInterstitialEnabled: k,
					isBlockingInterstitialV2Enabled: E,
					isModWithUserNotesPermissions: y,
					isLivestreaming: T,
					isPostComment: O,
					onCommentAuthorClick: j,
					onCommentTimestampClick: M,
					renderContractorBadge: N,
					renderedInOverlay: w,
					subredditDisplayText: S,
					userHasNft: A
				} = e, R = r.a.createElement(r.a.Fragment, null, r.a.createElement(Oe.b, {
					commentId: a.id
				}), r.a.createElement(Oe.a, {
					commentId: a.id,
					commentsPageKey: d
				}));
				if (O) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Te, {
					className: Object(c.a)(n, {
						[Pe.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: u || null,
					ignoreLock: g,
					isModWithUserNotesPermissions: y,
					isLivestreaming: T,
					onCommentAuthorClick: j,
					onCommentTimestampClick: M,
					permalink: i,
					renderContractorBadge: !!N,
					renderedInOverlay: w,
					subredditDisplayText: S
				}), R);
				if (a.isDeleted) return r.a.createElement(He, Be({}, e, {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(Ve, Be({}, e, {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				const P = !b && p === Me.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s,
						[Pe.a.hasBadges]: h,
						[Pe.a.liveStreaming]: T
					}),
					"data-testid": "comment-top-meta"
				}, u && P && r.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(I.f)(a) && r.a.createElement(C.b, {
					className: Pe.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(L, {
					authorClassName: A ? Pe.a.NftAuthor : void 0,
					collapsed: s,
					comment: a,
					isLivestreaming: T,
					isStrong: !!m,
					onClick: j,
					renderedInOverlay: w
				}), o && r.a.createElement(X, null), o && r.a.createElement(x.c, {
					className: Pe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !P && r.a.createElement(Fe, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(f.a, {
					className: Pe.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(x.c, {
						className: Pe.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), R, r.a.createElement(fe, {
					className: Pe.a.authorRole,
					comment: a,
					subredditDisplayText: S,
					renderContractorBadge: !!N,
					renderedInOverlay: w
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !O && r.a.createElement(r.a.Fragment, null, r.a.createElement(x.b, {
					className: Pe.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(x.c, {
					className: Pe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(q, {
					key: "Created",
					className: Pe.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: w,
					isBlockingInterstitialEnabled: k || E
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(x.c, {
					className: Pe.a.separator
				}), r.a.createElement(Ee, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(x.c, {
					className: Pe.a.separator
				}), r.a.createElement(te, {
					editedAt: a.editedAt
				}))), r.a.createElement(ue, {
					comment: a,
					ignoreLock: g,
					renderedInOverlay: w
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: w ? _.c.Lightbox : void 0
				}))
			});
			const He = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d,
						renderedInOverlay: l
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(De, null, a.deletedBy === I.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(q, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: a,
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
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(I.f)(t),
						collapsed: a
					})), r.a.createElement(x.b, {
						className: Pe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(x.c, {
						className: Pe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(q, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: c || d
					}), Ke({
						childrenInfo: s
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
					return r.a.createElement(Ue, {
						className: Pe.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
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
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
				return j
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "a", (function() {
				return V
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/times.js"),
				r = n.n(o),
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
				_ = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				x = n("./src/reddit/components/Comments/States/index.m.less"),
				k = n.n(x);
			const E = l.a.wrapped(g.a, "CommentsIcon", k.a),
				y = l.a.wrapped(_.a, "SnooFacepalm", k.a),
				I = l.a.p("EmptyTitle", k.a),
				T = l.a.p("ErrorTitle", k.a),
				O = l.a.p("EmptyText", k.a),
				j = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(k.a.StateContainer, t)
					}, i.a.createElement(E, null), i.a.createElement(I, null, n ? s.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : s.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(O, null, s.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				M = () => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(I, null, s.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, s.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(E, null), i.a.createElement(I, null, s.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(p.n, {
						to: Object(b.b)(t)
					}, s.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				w = Object(c.b)(null, (e, t) => {
					let {
						postId: n,
						commentId: s,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(n, s, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						onClick: n
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(y, null), i.a.createElement(T, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : s.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(p.l, {
						onClick: n
					}, s.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				L = e => {
					let {
						postId: t,
						commentId: n,
						sort: s,
						apiError: o
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(k.a.StateContainer, k.a.ErrorFullPage)
					}, i.a.createElement(w, {
						postId: t,
						commentId: n,
						sort: s,
						apiError: o
					}))
				},
				S = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", k.a),
				A = l.a.div("CommentsPlaceholderContainer", k.a),
				R = l.a.div("CommentPlaceholder", k.a),
				P = l.a.div("Avatar", k.a),
				B = l.a.div("VoteColumn", k.a),
				F = l.a.div("TextColumn", k.a),
				D = l.a.wrapped(f.a, "Upvote", k.a),
				U = l.a.wrapped(v.a, "Downvote", k.a),
				W = () => i.a.createElement("div", {
					className: Object(d.a)(k.a.TopMetaPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
					className: Object(d.a)(k.a.CommentBodyPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				V = e => i.a.createElement(A, null, r()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(D, null), i.a.createElement(U, null)), i.a.createElement(F, null, i.a.createElement(W, null), i.a.createElement(H, null)))))
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
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, n) {
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
				livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, n) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, n) {
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
				return fn
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/debounce.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/last.js"),
				a = n.n(r),
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
				f = n.n(v),
				g = n("./node_modules/lodash/isArray.js"),
				_ = n.n(g),
				x = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				E = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				I = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Vote/index.ts");
			const O = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = M(e.attribs);
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
							distinguishType: j(n),
							id: e.name,
							isAdmin: n === E.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === E.e.Submitter,
							isMod: n === E.e.Moderator,
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
								rteMode: I.i.RICH_TEXT
							},
							parentId: e.parent_id && Object(x.a)(e.parent_id) ? e.parent_id : null,
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
							voteState: T.a.notVoted,
							...t || {}
						}
					}
				},
				j = e => {
					switch (e) {
						case E.e.Admin:
							return m.G.ADMIN;
						case E.e.Moderator:
							return m.G.MODERATOR;
						case E.e.Alumni:
							return m.G.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				M = e => f()((e || []).filter(e => _()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || E.e.None;
			const N = (e, t, n) => {
				const s = {
						[t]: {}
					},
					{
						author: o,
						author_flair_background_color: r,
						author_flair_richtext: a,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: d,
						author_flair_type: l
					} = n;
				if (o && l) {
					if (l === y.f.Richtext) {
						if (!r || !a) return;
						return {
							[t]: {
								[o]: {
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
					if (l === y.f.Text) {
						if (!c) return s;
						return {
							[t]: {
								[o]: {
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
			var w = n("./src/lib/env/index.ts");
			const L = new Map,
				S = e => e,
				A = new Set;
			var R;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(R || (R = {}));
			const P = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				B = (e, t) => {
					const n = S(t),
						s = L.get(n);
					s && s.socket && (s.isClosePlanned = !0, s.socket.close())
				},
				F = (e, t, n, s) => {
					const o = S(t),
						r = L.get(o);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					L.set(o, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...P
						}
					}), a.socket.addEventListener("message", W.bind(null, s)), a.socket.addEventListener("close", D.bind(null, o, s)), a.socket.addEventListener("error", H.bind(null, o)), window && window.addEventListener("beforeunload", B.bind(null, e, t))
				},
				D = (e, t, n) => {
					const s = L.get(e);
					s && (s.isClosePlanned ? L.delete(e) : U(e, t))
				},
				U = (e, t) => {
					const n = L.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: s,
							connectionAttempts: o,
							jitterAmount: r,
							maximumRetries: a
						},
						socket: i,
						uniqueId: c,
						url: d
					} = n;
					if (L.delete(e), o < a && i.readyState !== WebSocket.OPEN) {
						const e = s * Math.pow(2, o),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							l = {
								...n.retries,
								connectionAttempts: o + 1
							};
						setTimeout(() => {
							F(d, c, l, t)
						}, i), Object(w.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				W = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(w.a)() && console.error(t)
					}
				},
				H = (e, t) => {
					const n = L.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? L.delete(e) : Object(w.a)() && console.error(t)
				};
			var V = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				G = n("./src/reddit/actions/comment/websocket/constants.ts");
			const z = Object(C.a)(G.b),
				J = Object(C.a)(G.c),
				Q = Object(C.a)(G.a),
				Y = Object(C.a)(G.d),
				X = {},
				Z = (e, t, n, s) => async (o, r) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: s,
							uniqueId: o
						} = e;
						A.has(o) ? t() : (A.add(o), setTimeout(() => {
							A.delete(o), F(s, o, {
								...P
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case R.NEW_COMMENT: {
									const n = t.payload.name,
										a = O(t.payload),
										i = r(),
										c = Object(K.b)(i, {
											commentId: n
										}),
										d = !(!n || !X[n]);
									if (a && !d) {
										const n = N(0, s, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(V.w)(i, {
												commentsPageKey: e
											});
											o(z({
												authorFlair: n,
												comment: a,
												commentsPageKey: e,
												headCommentId: t,
												numComments: r
											}))
										} else o(J({
											authorFlair: n,
											comment: a,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case R.UPDATE_COMMENT: {
									const n = t.payload.name,
										a = r(),
										i = Object(K.b)(a, {
											commentId: n
										}),
										c = O(t.payload);
									if (i && c) {
										const n = N(0, s, t.payload),
											r = t.payload.total_comment_count;
										o(J({
											authorFlair: n,
											comment: c,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case R.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										s = t.payload.score,
										a = r(),
										i = Object(K.b)(a, {
											commentId: n
										});
									i && o(J({
										comment: {
											...i,
											score: s
										},
										commentsPageKey: e
									}));
									break
								}
								case R.DELETE_COMMENT: {
									const e = t.payload.name,
										n = r(),
										s = Object(K.b)(n, {
											commentId: e
										});
									s && !s.isDeleted ? o(Q({
										id: e
									})) : X[e] = R.DELETE_COMMENT;
									break
								}
								case R.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										s = r(),
										a = Object(K.b)(s, {
											commentId: n
										}),
										i = (s.user.account && s.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(q.m)(s, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? X[n] = R.REMOVE_COMMENT : o(Q({
										id: n
									}));
									break
								}
								case R.USER_JOIN: {
									const n = O(t.payload, {
											isSystem: !0
										}),
										s = !0;
									n && o(Y({
										comment: n,
										commentsPageKey: e,
										isChatSort: s
									}));
									break
								}
							}
						}
					})
				};
			var $ = n("./src/reddit/actions/pages/comments.ts"),
				ee = n("./src/reddit/components/Comments/States/index.tsx"),
				te = n("./node_modules/fbt/lib/FbtPublic.js"),
				ne = n("./node_modules/lodash/defer.js"),
				se = n.n(ne),
				oe = n("./src/lib/classNames/index.ts"),
				re = n("./src/lib/lessComponent.tsx"),
				ae = n("./src/lib/makeDraftKey/index.ts"),
				ie = n("./src/lib/objectSelector/index.ts"),
				ce = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				de = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				le = n("./src/reddit/helpers/awards/message.ts"),
				me = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				ue = n("./src/reddit/components/RichTextJson/index.tsx"),
				pe = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				he = n("./src/reddit/icons/svgs/Star/index.tsx"),
				be = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				Ce = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				ve = n.n(Ce);
			const fe = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				ge = e => {
					const {
						award: t,
						comment: n,
						iconUrl: s
					} = e;
					let o = "",
						r = !0,
						a = !1;
					return t.coinPrice < le.a ? (o = ve.a.silverTierAwardComment, r = !1) : t.coinPrice < le.b ? o = ve.a.goldTierAwardComment : (o = ve.a.platinumTierAwardComment, a = !0), c.a.createElement("div", {
						className: Object(oe.a)(ve.a.awardComment, o)
					}, c.a.createElement("div", {
						className: ve.a.imageContainer
					}, r && c.a.createElement(c.a.Fragment, null, c.a.createElement(he.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar)
					}), c.a.createElement(be.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar, ve.a.backgroundStar2)
					})), a && c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomLeft)
					}), c.a.createElement(pe.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleTopRight)
					}), c.a.createElement(pe.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: s
					})), c.a.createElement(ue.a, {
						className: ve.a.awardCommentText,
						content: Object(me.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: fe(e),
						useExplicitTextColor: !0
					}))
				};
			var _e = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				xe = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				ke = n.n(xe);
			var Ee = e => {
					let {
						commentCount: t,
						isLivestreaming: n,
						onClick: s
					} = e;
					const o = Object(oe.a)(ke.a.CollapsedComment, {
						[ke.a.LivestreamingWrapper]: n
					});
					return c.a.createElement("div", {
						className: o,
						onClick: s
					}, te.fbt._("collapsed {collapsed message} (may be sensitive)", [te.fbt._param("collapsed message", te.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [te.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				ye = n("./src/reddit/actions/comment/authoring.ts"),
				Ie = n("./src/reddit/actions/comment/moderation.ts"),
				Te = n("./src/reddit/actions/modal.ts"),
				Oe = n("./src/reddit/actions/reportFlow/index.ts"),
				je = n("./src/reddit/actions/tooltip.ts"),
				Me = n("./src/reddit/actions/userBlocks.ts"),
				Ne = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				we = n("./src/reddit/constants/tracking.ts"),
				Le = n("./src/reddit/selectors/telemetry.ts"),
				Se = n("./src/telemetry/models/Event.ts");
			const Ae = e => ({
					screen: Object(Le.Y)(e),
					profile: Object(Le.Q)(e),
					subreddit: Object(Le.gb)(e)
				}),
				Re = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(Le.H)(n, t),
					source: Se.b.ChatView,
					subreddit: Object(Le.gb)(n)
				}),
				Pe = e => t => ({
					source: "chat_post",
					action: we.c.VIEW,
					noun: "last_message",
					post: Object(Le.H)(t, e),
					comment: Object(Le.h)(t, e),
					...Ae(t)
				});
			var Be = n("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Fe = n.n(Be);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = re.a.button("MenuItem", Fe.a),
				We = re.a.a("MenuItemPermalink", Fe.a),
				He = e => {
					let {
						children: t,
						comment: n,
						onClick: s,
						onHideTooltip: o,
						onShowTooltip: r,
						sendEvent: a,
						tooltipId: i,
						tooltipText: d,
						trackingNoun: l
					} = e;
					return c.a.createElement(Ue, {
						id: i,
						onMouseEnter: r.bind(void 0, i),
						onMouseLeave: o.bind(void 0, i),
						onClick: e => {
							s(e), l && (a(((e, t) => n => ({
								source: "comment",
								action: we.c.CLICK,
								noun: e,
								post: Object(Le.H)(n, t),
								comment: Object(Le.h)(n, t),
								...Ae(n)
							}))(l, n.id)), a(((e, t) => n => ({
								source: "comment_overflow_menu",
								action: we.c.CLICK,
								noun: e,
								post: Object(Le.H)(n, t),
								comment: Object(Le.h)(n, t),
								...Ae(n)
							}))(l, n.id)))
						}
					}, t, c.a.createElement(Ne.c, {
						tooltipId: i
					}, d))
				},
				Ve = e => c.a.createElement(He, De({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(We, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var Ke = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				qe = n("./src/reddit/components/HumanDate/index.tsx"),
				Ge = n("./src/reddit/components/ModModeReports/helpers.ts"),
				ze = n("./src/reddit/components/ReportFlow/index.tsx"),
				Je = n("./src/reddit/components/ReportFlow/new.tsx"),
				Qe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Xe = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				$e = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				et = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				tt = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				nt = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				st = n("./src/reddit/icons/svgs/Spam/index.tsx"),
				ot = n("./src/reddit/models/PostDraft/index.ts"),
				rt = n("./src/reddit/selectors/activeModalId.ts"),
				at = n("./src/reddit/selectors/blockedRedditors.ts"),
				it = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ct = n("./src/reddit/selectors/user.ts");

			function dt() {
				return (dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const lt = re.a.wrapped($e.a, "BlockIcon", Fe.a),
				mt = re.a.wrapped(Ze.a, "FlagIcon", Fe.a),
				ut = re.a.wrapped(Xe.a, "EditIcon", Fe.a),
				pt = re.a.wrapped(Ye.a, "ApproveIcon", Fe.a),
				ht = re.a.wrapped(nt.a, "ReplyIcon", Fe.a),
				bt = re.a.wrapped(tt.a, "RemoveIcon", Fe.a),
				Ct = re.a.wrapped(st.a, "SpamIcon", Fe.a),
				vt = re.a.wrapped(et.a, "ModeratorIcon", Fe.a),
				ft = e => (t, n) => {
					let {
						comment: s
					} = n;
					return `${e}${s.id}`
				},
				gt = e => `Comment-${e}--Modal--DeleteComment`,
				_t = Object(l.c)({
					currentUser: ct.k,
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
						return Object(at.c)(e, n.authorId)
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === n.id
					},
					approveTooltipId: ft("CommentChatPost--Approve--"),
					blockTooltipId: ft("CommentChatPost--Block--"),
					createTooltipId: ft("CommentChatPost--Create--"),
					editTooltipId: ft("CommentChatPost--Edit--"),
					replyTooltipId: ft("CommentChatPost--Reply--"),
					reportTooltipId: ft("CommentChatPost--Report--"),
					upvoteTooltipId: ft("CommentChatPost--Upvote--"),
					downvoteTooltipId: ft("CommentChatPost--Downvote--"),
					distinguishTooltipId: ft("CommentChatPost--Distinguish--"),
					spamTooltipId: ft("CommentChatPost--Spam--"),
					removeTooltipId: ft("CommentChatPost--Remove--"),
					deleteTooltipId: ft("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(rt.a)(e) === gt(n.id)
					},
					reportingRevampEnabled: it.a
				});
			var xt = Object(d.b)(_t, (e, t) => {
					let {
						comment: n,
						commentsPageKey: s
					} = t;
					return {
						onReplyClick: () => e(Object(ye.r)({
							parentCommentId: n.id,
							commentsPageKey: s,
							singleOpen: !0
						})),
						onReportClick: t => {
							t.stopPropagation(), e(Object(Oe.c)(n.id, !1))
						},
						onHideTooltip: () => e(Object(je.i)()),
						onShowTooltip: t => e(Object(je.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = n.media && n.media.rteMode;
							s && e(Object(ye.d)({
								commentId: n.id,
								draftKey: Object(ae.a)(ot.c.edit, n.id),
								text: n.bodyMD || "",
								commentMode: t,
								commentsPageKey: s
							}))
						},
						onApproveClick: () => e(Object(Ie.a)(n.id)),
						onBlockClick: () => e(Object(Me.h)(n.author)),
						onUnblockClick: () => e(Object(Me.g)(n.author)),
						onUpvoteClick: () => e(Object(b.q)(n.id)),
						onDownvoteClick: () => e(Object(b.j)(n.id)),
						onDistinguishClick: t => e(Object(Ie.b)(n.id, t)),
						onSpamClick: () => e(Object(Ie.e)(n.id, !0)),
						onRemoveClick: () => e(Object(Ie.e)(n.id, !1)),
						deleteComment: () => s && e(Object(ye.i)(n.id, n.postId)),
						onDeleteClick: () => e(Object(Te.i)(gt(n.id))),
						toggleDeleteCommentModal: () => e(Object(Te.i)(gt(n.id)))
					}
				})(Object(Qe.c)(e => {
					const {
						comment: t,
						className: n,
						createTooltipId: s,
						currentUser: o,
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
						onReplyClick: _,
						onReportClick: x,
						onShowTooltip: k,
						onSpamClick: E,
						onUnblockClick: y,
						onDistinguishClick: I,
						reportFlowIsOpen: T,
						replyTooltipId: O,
						reportTooltipId: j,
						approveTooltipId: M,
						blockTooltipId: N,
						removeTooltipId: w,
						distinguishTooltipId: L,
						sendEvent: S,
						spamTooltipId: A,
						toggleDeleteCommentModal: R,
						timestampUpdateTrigger: P
					} = e, B = !!o && o.id === t.authorId, F = Object(Ge.b)(t), D = t.isApproved && F, U = !t.bannedBy || t.bannedBy === m.k, W = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: k,
						sendEvent: S
					}, H = t.isMod;
					return c.a.createElement("div", {
						className: n
					}, c.a.createElement("div", {
						className: Object(oe.a)(Fe.a.Menu, {
							[Fe.a.Livestreaming]: u
						})
					}, (t.bannedBy || F) && p && c.a.createElement(He, dt({
						onClick: h,
						tooltipId: M,
						tooltipText: D ? te.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : te.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(pt, null)), !t.isLocked && c.a.createElement(He, dt({
						onClick: _,
						tooltipId: O,
						tooltipText: te.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(ht, null)), p && B && c.a.createElement(He, dt({
						onClick: () => I(H ? m.G.NONE : m.G.MODERATOR),
						tooltipId: L,
						tooltipText: H ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(vt, null)), p && U && c.a.createElement(He, dt({
						onClick: E,
						tooltipId: A,
						tooltipText: te.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Ct, null)), !B && c.a.createElement(He, dt({
						onClick: x,
						tooltipId: j,
						tooltipText: te.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(mt, null)), T && (() => e.reportingRevampEnabled ? c.a.createElement(Je.a, {
						withOverlay: !0,
						overlayCustomStyles: ze.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(ze.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: ze.b,
						postId: t.postId
					}))(), B && !u && c.a.createElement(He, dt({
						onClick: v,
						tooltipId: i,
						tooltipText: te.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, W), c.a.createElement(ut, null)), p && U ? c.a.createElement(He, dt({
						onClick: g,
						tooltipId: w,
						tooltipText: t.bannedBy === m.k ? te.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : te.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, W), c.a.createElement(bt, null)) : B && c.a.createElement(He, dt({
						onClick: C,
						tooltipId: a,
						tooltipText: te.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(bt, null)), l && c.a.createElement(Ke.a, {
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
						toggleModal: R,
						withOverlay: !0
					}), !!o && !B && c.a.createElement(He, dt({
						onClick: () => d ? y() : b(),
						tooltipId: N,
						tooltipText: d ? te.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : te.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, W), c.a.createElement(lt, null))), !u && c.a.createElement(Ve, dt({}, e, {
						tooltipId: s,
						tooltipText: c.a.createElement(qe.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(qe.d, {
						seconds: t.created
					})))
				})),
				kt = n("./src/chat/helpers/dom.ts"),
				Et = n("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				yt = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				It = n.n(yt);
			const Tt = {},
				Ot = re.a.wrapped(_e.a, "ChatIcon", It.a),
				jt = re.a.span("ReplyAuthor", It.a),
				Mt = re.a.div("ReplyWrapper", It.a);
			var Nt = Object(d.b)(() => Object(l.c)({
					comment: K.b,
					commentPermalink: V.m
				}))(e => {
					let {
						comment: t,
						commentId: n,
						commentPermalink: s,
						isLivestreaming: o,
						onReplyClick: r
					} = e;
					return t ? t.isDeleted ? c.a.createElement(Mt, null, c.a.createElement("span", {
						className: Object(oe.a)(It.a.ReplyLinkBubble, It.a.delete, {
							[It.a.Livestreaming]: o
						})
					}, c.a.createElement(on, null))) : c.a.createElement(Mt, null, c.a.createElement("a", {
						className: Object(oe.a)(It.a.ReplyLinkBubble, {
							[It.a.Livestreaming]: o
						}),
						href: s,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(kt.a)(() => r(t.id))
					}, c.a.createElement(Ot, {
						userId: t.authorId,
						icon: t.profileImage
					}), c.a.createElement(jt, null, t.author), c.a.createElement(Et.a, {
						className: It.a.ReplyComment,
						key: `rich-text-${n}`,
						content: Object(me.a)(t),
						rtJsonElementProps: Tt
					}))) : null
				}),
				wt = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Lt = n.n(wt);
			const St = Object(ie.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var At = e => {
					const {
						comment: t
					} = e;
					return void 0 === St(e) ? null : c.a.createElement(ue.a, {
						className: Lt.a.SystemMessageText,
						content: Object(me.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: St(e),
						useExplicitTextColor: !0
					})
				},
				Rt = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Bt = n("./src/reddit/controls/ErrorText/index.tsx"),
				Ft = n("./src/reddit/constants/experiments.ts"),
				Dt = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ut = e => Object(Dt.c)(e, {
				experimentName: Ft.tb,
				experimentEligibilitySelector: Dt.a
			}) === Ft.ob.Enabled;
			var Wt = n("./src/reddit/selectors/communityAwards.ts");
			const Ht = (e, t) => {
				let {
					commentId: n
				} = t;
				const s = Object(K.b)(e, {
					commentId: n
				});
				if (s && s.associatedAwardId) return Object(Wt.a)(e, s.associatedAwardId)
			};
			var Vt = n("./src/reddit/selectors/gold/awardIcon.ts"),
				Kt = n("./src/reddit/selectors/poll/index.ts"),
				qt = n("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				Gt = n.n(qt);
			const zt = 250,
				Jt = 10,
				Qt = re.a.wrapped(Bt.b, "ErrorText", Gt.a),
				Yt = re.a.wrapped(ce.a, "TopMeta", Gt.a),
				Xt = re.a.span("DeleteText", Gt.a),
				Zt = re.a.wrapped(Nt, "Reply", Gt.a),
				$t = Object(Pt.u)(),
				en = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return Ht(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const s = Ht(e, {
							commentId: n
						});
						if (s) return Object(Vt.a)(e, {
							award: s,
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
					prediction: Kt.f,
					subreddit: Pt.r,
					shouldRenderSystemMessages: Ut
				})),
				tn = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class nn extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > zt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
					} = this.state, s = t !== e.isExpanded || n !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && s) {
						const e = this.elemRef.current;
						let n = zt;
						if (t) {
							n = e.scrollHeight + Jt;
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
						comment: s,
						commentPermalink: o,
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
						shouldRenderSystemMessages: _
					} = this.props, {
						isCollapsed: x,
						isExpanded: k,
						isTruncated: E
					} = this.state;
					if (!s) return null;
					d && se()(() => this.elemRef.current && this.elemRef.current.focus()), se()(() => this.elemRef && this.elemRef.current && f && f(this.elemRef));
					const y = s.isSystem,
						I = !l && !s.isDeleted && !y,
						T = !!e,
						O = Object(oe.a)({
							[Gt.a.SystemMessageWrapper]: y && !m && _,
							[Gt.a.CommentWrapper]: !m && !y,
							[Gt.a.CommentExpanded]: k,
							[Gt.a.CommentTruncated]: E,
							[Gt.a.HighlightTarget]: C,
							[Gt.a.LivestreamingCommentWrapper]: m
						});
					return x ? c.a.createElement(Ee, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: O
					}, l && c.a.createElement(Rt.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: u,
						sendEvent: b,
						draftKey: Object(ae.a)(ot.c.edit, s.id),
						commentsPageKey: r,
						isEditing: l,
						comment: s
					}), I && c.a.createElement(c.a.Fragment, null, c.a.createElement(Yt, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: s,
						commentsPageKey: r,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: m,
						renderedInOverlay: h
					}, c.a.createElement(_e.a, {
						className: Object(oe.a)(Gt.a.ChatIcon, {
							[Gt.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: s.profileImage,
						userId: s.authorId,
						isNSFW: s.profileOver18 || s.authorIconIsNSFW
					})), s.parentId && c.a.createElement(Zt, {
						commentId: s.parentId,
						onReplyClick: g,
						isLivestreaming: m
					}), m && c.a.createElement("span", {
						className: Gt.a.livestreamingTimeStamp
					}, c.a.createElement(qe.d, {
						seconds: s.created
					})), T && e && m ? c.a.createElement(ge, {
						award: e,
						comment: s,
						iconUrl: t
					}) : p ? c.a.createElement(de.a, {
						comment: s,
						prediction: p
					}) : [c.a.createElement(ue.a, {
						className: Object(oe.a)(Gt.a.RichTextJson, {
							[Gt.a.Livestreaming]: m
						}),
						content: Object(me.a)(s),
						key: `rich-text-${s.id}`,
						rtJsonElementProps: tn(this.props),
						useExplicitTextColor: m
					}), c.a.createElement(xt, {
						key: "Menu",
						className: Object(oe.a)(Gt.a.Menu, {
							[Gt.a.Livestreaming]: m
						}),
						comment: s,
						commentPermalink: o,
						commentsPageKey: r,
						isLivestreaming: m,
						timestampUpdateTrigger: v
					})]), s.isDeleted && c.a.createElement(on, null), I && a && a.map((e, t) => c.a.createElement(Qt, {
						key: `${t}-${e}`
					}, e)), !l && E && c.a.createElement("button", {
						className: Object(oe.a)(Gt.a.CommentReadMoreButton, {
							[Gt.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), y && !m && _ && c.a.createElement(At, {
						comment: s
					}))
				}
			}
			const sn = $t(en(nn)),
				on = e => {
					let {
						isLivestreaming: t
					} = e;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(_e.a, {
						className: Object(oe.a)(Gt.a.ChatIcon, {
							[Gt.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), c.a.createElement(Xt, null, te.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var rn = sn,
				an = n("./node_modules/lodash/isEqual.js"),
				cn = n.n(an),
				dn = n("./src/reddit/controls/Button/index.tsx"),
				ln = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				mn = n.n(ln);
			const un = re.a.div("ButtonWrapper", mn.a),
				pn = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(oe.a)(mn.a.ChunkPlaceholder, {
							[mn.a.top]: t
						})
					}, te.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				hn = e => {
					let {
						className: t,
						isLivestreaming: n,
						isLoading: s,
						setRef: o,
						...r
					} = e;
					return c.a.createElement("div", {
						ref: o,
						className: Object(oe.a)(t, {
							[mn.a.ScrollerWrapper]: !n,
							[mn.a.LivestreamingWrapper]: n,
							[mn.a.loading]: s
						})
					}, !s && r.isPrevLoading && !n && c.a.createElement(pn, {
						top: !0
					}), r.children, !s && r.isNextLoading && !n && c.a.createElement(pn, null))
				};
			class bn extends c.a.Component {
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
						children: s
					} = this.props;
					if (s && s.length && void 0 !== n && s[n]) {
						const e = Math.floor(n / this.chunkSize);
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
					const t = e.children.length !== this.props.children.length || !cn()(f()(e.children), f()(this.props.children)) || !cn()(a()(e.children), a()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, n) {
					if (n && n.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							s = this.getChunkIndexOnUpdate(e, t),
							o = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: s || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== o || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + o
						}, () => {
							s && this.setNextTopScroll(), n.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, n.scrolledBottom && o > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(oe.a)([mn.a.NewComments, mn.a.show]) : mn.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(hn, {
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
						className: mn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: mn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: mn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(un, null, c.a.createElement(dn.l, {
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
			var Cn = bn,
				vn = n("./src/reddit/selectors/posts.ts");
			const fn = 6e4,
				gn = (e, t, n) => {
					let {
						authorId: s,
						id: o
					} = n;
					return e.includes(s) && !t.includes(o)
				},
				_n = Object(l.c)({
					blockedRedditors: at.a,
					blockedRedditorsPending: at.b,
					chatCommentLinks: V.g,
					isPending: V.d,
					liveCommentsWebsocket: vn.E,
					moreCommentsLink: V.G
				}),
				xn = Object(d.b)(_n, (e, t) => ({
					onLiveCommentsSubscribe: (n, s, o) => e(Z(n, s, o, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						B(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(b.l)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.t.CHAT
					}, m.t.CHAT))
				}));
			class kn extends c.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = c.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.sendViewLastMessageTelemetry = o()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
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
					}, fn)
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
						loadComments: s,
						onLiveCommentsSubscribe: o,
						postId: r
					} = this.props;
					n && (e && s(), o(t, n, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = n)
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
						blockedRedditorsPending: s,
						chatCommentLinks: o,
						commentsPageKey: r,
						isLoading: a,
						isPending: i,
						postId: c,
						draftKey: d
					} = this.props, {
						expandedCommentIds: l,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== d || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== s || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== o.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: s,
						commentsPageKey: o,
						liveCommentsWebsocket: r,
						offLiveCommentsSubscribe: a,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && a(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && r && (i(o, r, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = r)), e.blockedRedditors.ids !== t.ids) {
						const e = new Set(t.ids),
							s = {};
						n.forEach(e => s[e.id] = e.authorId), this.setState({
							expandedCommentIds: this.state.expandedCommentIds.filter(t => {
								const n = s[t];
								return !e.has(n)
							})
						})
					}
					if (this.deferTimestampUpdate(), s) {
						const e = Object(u.a)(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(), s && n.forEach((e, t) => e.id === s && this.setState({
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
						sendEvent: s
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), s(Re("history", n)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = a()(e);
					(null == n ? void 0 : n.id) && t(Pe(n.id))
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
						commentId: s,
						commentsPageKey: o,
						emptyStateClassName: r,
						isLivestreaming: a,
						isLoading: i,
						isPending: d,
						postId: l,
						renderedInOverlay: m,
						sendEvent: u
					} = this.props, {
						expandedCommentIds: p,
						targetCommentIndex: h,
						timestampUpdateTrigger: b
					} = this.state, C = !(t && t.length || i || d);
					return c.a.createElement(c.a.Fragment, null, C ? c.a.createElement(ee.c, {
						className: r,
						isChat: !0
					}) : c.a.createElement(Cn, {
						className: n,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => gn(e.ids, p, t) ? c.a.createElement(Ee, {
						commentCount: 1,
						isLivestreaming: a,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(rn, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: o,
						isLivestreaming: a,
						postId: l,
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
			t.default = xn(Object(Qe.c)(kn))
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
						useUpvotes: o,
						...a
					} = e;
					const c = Object(i.b)(n),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, a, m)
				},
				p = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = 500,
				o = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < s ? 0 : e.coinPrice < o ? 50 : 100 : 2048
				},
				a = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const s = r(t, n);
					return e.slice(0, s)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: n
				} = e;
				switch (t.type) {
					case o.I.AUTHORIZATION_ERROR:
						return n ? s.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : s.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case o.I.VALIDATION_ERROR:
						return s.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case o.I.NOT_FOUND_ERROR:
						return s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case o.I.SERVER_ERROR:
						return s.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case o.I.LIKELY_UBLOCK_ERROR:
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : s.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + s.fbt._("Reason by {username}:", [s.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + s.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
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
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const c = Object(o.e)(i, {
							commentId: e
						}),
						d = Object(r.g)(i, {
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
							title: c ? Object(s.g)(c) : void 0,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, n) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, o.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, o.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? r.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, o.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const o = e => e.category === s.Supporter,
				r = e => e.category === s.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/gold/constants.ts"),
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
			t.a = Object(s.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(r.a).map(e => e.type),
								c = s.filter(r.b).map(e => e.type);
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
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let o = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const n = a.filter(r.a),
									s = n.map(e => {
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
								o = {
									...o,
									[e]: {
										achievementTypes: s,
										supporterTypes: c,
										preferredAchievementType: d,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: o
							}
						}
						case c.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: o,
								pendingSupporterType: r
							}))
						}
						case c.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: o,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: o
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
									s = e.powerups;
								if (!t || !s) return;
								const o = s.supportedSubreddits.filter(e => {
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
									[t]: o.reduce((e, t) => (e[t] = !0, e), {})
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
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
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
					var s;
					return n ? null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n] : null
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					var s, o;
					return n ? null === (o = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[n]) || void 0 === o ? void 0 : o.flairsByType : null
				},
				d = (e, t) => {
					let {
						subredditId: n,
						userId: s
					} = t;
					var o, r;
					return n && s ? null === (r = null === (o = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === o ? void 0 : o[n]) || void 0 === r ? void 0 : r[s] : null
				},
				l = Object(s.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([c, l], (e, t) => e && t ? e[t] : null),
				u = Object(s.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([c, u], (e, t) => e && t ? e[t] : null),
				h = Object(s.a)([c, d], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						o = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === o
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = Object(s.a)([i, d], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: o
					} = e, {
						supporterTypes: r,
						achievementTypes: a,
						preferredSupporterType: i,
						preferredAchievementType: c,
						pendingSupporterType: d,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: f(n, r, o, d || i),
						achievementFlairs: f(s, a, o, l || c)
					}
				}),
				C = Object(s.a)([d], e => !!e && e.isHidden),
				v = Object(s.a)([i, d, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				f = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				g = (e, t) => {
					let {
						commentId: n
					} = t;
					const s = Object(o.b)(e, {
							commentId: n
						}),
						r = null == s ? void 0 : s.subredditId,
						a = null == s ? void 0 : s.authorId;
					return !(!r || !a) && !!((e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						var o, r, a;
						return n && s ? null === (a = null === (r = null === (o = e.features.powerups) || void 0 === o ? void 0 : o.usersSupportedSubreddits) || void 0 === r ? void 0 : r[s]) || void 0 === a ? void 0 : a[n] : null
					})(e, {
						subredditId: r,
						userId: a
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.5c268c4bed7b82c2296f.js.map