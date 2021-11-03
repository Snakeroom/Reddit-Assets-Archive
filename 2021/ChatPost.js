// https://www.redditstatic.com/desktop2x/ChatPost.af63f66c41b25770c1e9.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
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
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, o) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
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
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/components/AwardBadges/index.tsx"),
				m = o("./src/reddit/components/AuthorLink/index.tsx"),
				p = o("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				u = o.n(p);
			const h = e => {
				const {
					className: t,
					comment: o,
					isCommentAuthorBlocked: s,
					isAuthorDeleted: a,
					isLivestreaming: i,
					isStrong: d,
					style: l,
					collapsed: p
				} = e;
				return p && s ? r.a.createElement("p", {
					className: Object(c.a)(u.a.commentAuthorLink, t)
				}, n.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					className: Object(c.a)(u.a.commentAuthorLink, t),
					author: o.author,
					isCommentAuthorBlocked: s,
					isAuthorDeleted: a,
					isLivestreaming: i,
					isStrong: d,
					style: l
				}, o.author)
			};
			var b = o("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = o("./src/reddit/components/Flair/index.tsx"),
				f = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = o("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = o("./src/reddit/controls/MetaData/index.tsx"),
				k = o("./src/reddit/helpers/flair.ts"),
				x = o("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				y = o("./src/reddit/hooks/useTracking.ts"),
				E = o("./src/reddit/models/Comment/index.ts"),
				I = o("./src/reddit/selectors/gold/powerups/index.ts"),
				T = o("./src/lib/constants/index.ts"),
				O = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				j = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = o("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = o.n(M);
			const S = ({
				authorClassName: e,
				className: t,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				renderedInOverlay: a,
				collapsed: i
			}) => r.a.createElement(j.b, {
				className: Object(c.a)(N.a.authorHoverCard, t),
				postOrComment: o,
				tooltipType: a ? g.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(E.g)(o),
				collapsed: i
			}, r.a.createElement(O.b, {
				ignore: Object(E.f)(o) || !!o.distinguishType && o.distinguishType !== T.F.NONE,
				subredditId: o.subredditId,
				userId: o.authorId
			}, r.a.createElement(h, {
				className: e,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				isCommentAuthorBlocked: Object(E.g)(o),
				isAuthorDeleted: Object(E.f)(o),
				collapsed: i
			})));
			var A = o("./src/config.ts"),
				w = o("./src/reddit/actions/tooltip.ts"),
				R = o("./src/reddit/components/InfoTextTooltip/index.tsx");
			const L = (e, t, o = !1) => `${e}${t}${o?"inOverlay":""}`;
			var P = o("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = o.n(P);
			const B = ({
				className: e,
				commentId: t,
				renderedInOverlay: o
			}) => {
				const s = Object(a.d)(),
					i = () => s(Object(w.h)({
						tooltipId: d
					})),
					d = L("CommentTopMeta--cakeday--", t, o),
					l = n.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(c.a)(F.a.cakedayIcon, e),
					src: `${A.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: d,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(R.c, {
					tooltipId: d,
					text: l
				}))
			};
			var D = o("./src/lib/addQueryParams/index.ts"),
				U = o("./src/reddit/actions/comment/index.ts"),
				W = o("./src/reddit/components/HumanDate/index.tsx");
			const H = e => {
					const {
						className: t,
						comment: o,
						compact: n,
						permalink: s,
						renderedInOverlay: i
					} = e, c = Object(a.d)(), d = L("CommentTopMeta--Created--", o.id, i), l = () => c(Object(w.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(D.a)(s, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							K(c, o.id)
						},
						onMouseEnter: l,
						onMouseLeave: l,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(W.d, {
						seconds: o.created,
						noPostfix: n,
						shortenedUnit: n
					}), r.a.createElement(R.c, {
						tooltipId: d
					}, r.a.createElement(W.b, {
						seconds: o.created
					})))
				},
				K = (e, t) => {
					window.addEventListener("focus", (function o() {
						V(e, t, o)
					}))
				},
				V = (e, t, o) => {
					window.removeEventListener("focus", o), e(Object(U.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var q = o("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				z = o.n(q);
			const {
				fbt: J
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Q = () => r.a.createElement(_.a, {
				className: z.a.crowdControlText
			}, J._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var G = o("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Y = o.n(G);
			const {
				fbt: X
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Z = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(_.a, {
				className: Y.a.editedText
			}, X._("edited {time}", [X._param("time", r.a.createElement(W.d, {
				seconds: t,
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var $ = o("./src/reddit/helpers/isRemoved.ts"),
				ee = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				te = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				oe = o("./src/reddit/icons/fonts/index.tsx"),
				ne = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				se = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				re = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				ae = o("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				ce = o("./src/reddit/models/AutomatedReporting/index.ts"),
				de = o("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				le = o.n(de);
			const me = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: s
			}) => {
				const i = Object(a.d)(),
					d = e => () => i(Object(w.f)({
						tooltipId: e
					})),
					l = () => i(Object(w.i)()),
					m = t => L(t, e.id, s),
					p = m("CommentTopMeta--Automod--"),
					u = m("CommentTopMeta--Approve--"),
					h = m("CommentTopMeta--Remove--"),
					b = m("CommentTopMeta--Report--"),
					C = m("CommentTopMeta--Spam--"),
					v = e.bannedBy && Object(ce.b)(e.bannedBy),
					f = d(h);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.a, {
					className: le.a.approveIcon,
					desc: Object(ee.a)(e),
					id: u,
					onMouseEnter: d(u),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: u,
					text: Object(ee.a)(e)
				})), Object($.a)(e) && !v && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: le.a.removeIcon,
					desc: Object(ee.c)(e),
					id: h,
					onMouseEnter: f,
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: h,
					text: Object(ee.c)(e)
				})), Object($.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: le.a.removalReason,
					onClick: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, n.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object($.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !v && r.a.createElement("a", {
					className: le.a.removalReason,
					onMouseEnter: f,
					onMouseLeave: l
				}, n.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(se.a, {
					className: le.a.lockIcon,
					desc: n.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(ie.a, {
					className: le.a.spamIcon,
					desc: Object(ee.e)(e),
					id: C,
					onMouseEnter: d(C),
					onMouseLeave: l,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(R.c, {
					tooltipId: C,
					text: Object(ee.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(oe.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(le.a.automoderatorIcon, {
						[le.a.removed]: !!e.bannedBy
					}),
					"aria-label": ee.b,
					id: p,
					key: p,
					onMouseEnter: d(p),
					onMouseLeave: l
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(R.c, {
					tooltipId: p,
					text: ee.b
				}), Object(te.a)(e) && r.a.createElement(ae.a, {
					className: le.a.reportIcon,
					desc: Object(ee.d)(e.numReports),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: l,
					isFilled: !0
				}), Object(te.a)(e) && r.a.createElement(R.c, {
					tooltipId: b,
					text: Object(ee.d)(e.numReports)
				}), v && r.a.createElement("a", {
					className: le.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", v)], {
					hk: "3C408F"
				})))
			};
			var pe, ue = o("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var he = o("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				be = o.n(he);
			const Ce = {
					[pe.Admin]: {
						color: ue.c,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => n.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: ue.d,
						label: n.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: ue.a,
						label: n.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => n.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: ue.c,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => n.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: ue.a,
						label: n.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => n.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				ve = e => {
					const t = Object(a.d)(),
						o = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === T.F.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!o) return null;
					if (o === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: n,
						color: s,
						label: i,
						tooltipTemplate: d
					} = Ce[o], l = L(n, e.comment.id, e.renderedInOverlay), m = d(e), p = () => t(Object(w.h)({
						tooltipId: l
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(c.a)(be.a.role, e.className),
						style: {
							color: s
						},
						id: l,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, i), o === pe.Mod && r.a.createElement(fe, null)), r.a.createElement(R.c, {
						tooltipId: l,
						text: m
					}))
				},
				fe = () => r.a.createElement("img", {
					alt: "Moderator Achievement",
					className: be.a.modAchievement,
					src: `${A.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ge = o("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				_e = o.n(ge);
			const {
				fbt: ke
			} = o("./node_modules/fbt/lib/FbtPublic.js"), xe = () => r.a.createElement(_.a, {
				className: _e.a.stickiedText
			}, ke._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ye = o("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Ee = o.n(ye);
			const Ie = e => {
				const {
					className: t,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: d,
					ignoreLock: m,
					isLivestreaming: p,
					permalink: u,
					renderedInOverlay: h,
					subredditDisplayText: T,
					renderContractorBadge: O
				} = e, j = Object(y.a)(), M = i.subredditId, N = Object(a.e)(e => Object(I.h)(e, {
					subredditId: M
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(c.a)(Ee.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Ee.a.authorLine
				}, r.a.createElement("span", {
					className: Ee.a.metaText
				}, i.deletedBy === E.c.User ? n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : n.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(_.c, {
					className: Ee.a.separator
				}), r.a.createElement(H, {
					key: "Created",
					className: Ee.a.metaText,
					comment: i,
					compact: !0,
					permalink: u,
					renderedInOverlay: h
				})));
				return r.a.createElement("div", {
					className: Object(c.a)(Ee.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Ee.a.authorLine
				}, !Object(E.f)(i) && r.a.createElement(C.b, {
					className: Ee.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: Ee.a.baselineItem
				}, r.a.createElement(S, {
					authorClassName: Ee.a.author,
					comment: i,
					isLivestreaming: p,
					renderedInOverlay: h,
					collapsed: o
				})), s && r.a.createElement(Q, null), r.a.createElement(ve, {
					className: Ee.a.role,
					comment: i,
					subredditDisplayText: T,
					renderContractorBadge: O,
					renderedInOverlay: h
				}), i.isAuthorCakeday ? r.a.createElement(B, {
					className: Ee.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: h
				}) : !Object(E.f)(i) && N && r.a.createElement(b.a, {
					className: Ee.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						j(Object(x.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(f.a, {
					className: Ee.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(_.c, {
					className: Ee.a.separator
				}), r.a.createElement(H, {
					key: "Created",
					className: Ee.a.metaText,
					comment: i,
					compact: !0,
					permalink: u,
					renderedInOverlay: h
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Ee.a.separator
				}), r.a.createElement(xe, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Ee.a.separator
				}), r.a.createElement(Z, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(me, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: h
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: h ? g.c.Lightbox : void 0
				})), d && !Object(k.o)(d) && r.a.createElement("span", {
					className: Ee.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: Ee.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Te = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				Oe = o("./src/reddit/selectors/economics.ts"),
				je = o("./src/reddit/models/Flair/index.ts"),
				Me = o("./src/reddit/selectors/subreddit.ts"),
				Ne = o("./src/reddit/selectors/userFlair.ts"),
				Se = o("./src/reddit/selectors/comments.ts"),
				Ae = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				we = o.n(Ae);

			function Re() {
				return (Re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = d.a.wrapped(v.b, "RightPositionedAuthorFlair", we.a),
				Pe = d.a.span("DeletedText", we.a),
				Fe = d.a.wrapped(_.a, "MetaSeparator", we.a),
				Be = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Oe.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const o = Object(Me.F)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ne.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Se.m)(e, {
						commentId: t.comment.id
					})
				}));
			t.a = Be(e => {
				const {
					children: t,
					className: o,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: a,
					commentPermalink: i,
					commentsPageKey: d,
					compact: m,
					flair: p,
					flairPosition: u,
					hasBadges: h,
					isLivestreaming: b,
					isPostComment: k,
					ignoreFlairPosition: x,
					ignoreLock: y,
					renderContractorBadge: I,
					renderedInOverlay: T,
					subredditDisplayText: O,
					userHasNft: j
				} = e, M = r.a.createElement(r.a.Fragment, null, r.a.createElement(Te.b, {
					commentId: a.id
				}), r.a.createElement(Te.a, {
					commentId: a.id,
					commentsPageKey: d
				}));
				if (k) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie, {
					className: Object(c.a)(o, {
						[we.a.collapsed]: n
					}),
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: p || null,
					ignoreLock: y,
					isLivestreaming: b,
					permalink: i,
					renderedInOverlay: T,
					subredditDisplayText: O,
					renderContractorBadge: !!I,
					collapsed: n
				}), M);
				if (a.isDeleted) return r.a.createElement(De, Re({}, e, {
					className: Object(c.a)(o, we.a.container, {
						[we.a.collapsed]: n
					})
				}));
				if (n) return r.a.createElement(Ue, Re({}, e, {
					className: Object(c.a)(o, we.a.container, {
						[we.a.collapsed]: n
					})
				}));
				const N = !x && u === je.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(o, we.a.container, {
						[we.a.collapsed]: n,
						[we.a.hasBadges]: h,
						[we.a.liveStreaming]: b
					}),
					"data-testid": "comment-top-meta"
				}, p && N && r.a.createElement(v.b, {
					flair: p,
					forceSmallEmojis: m
				}), !Object(E.f)(a) && r.a.createElement(C.b, {
					className: we.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(S, {
					authorClassName: j ? we.a.NftAuthor : void 0,
					comment: a,
					isLivestreaming: b,
					isStrong: !!m,
					renderedInOverlay: T,
					collapsed: n
				}), s && r.a.createElement(Q, null), s && r.a.createElement(_.c, {
					className: we.a.metaText,
					key: "crowdControlSeparator"
				}), p && !N && r.a.createElement(Le, {
					flair: p,
					forceSmallEmojis: m
				}), !m && r.a.createElement(f.a, {
					className: we.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(_.c, {
						className: we.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), M, r.a.createElement(ve, {
					className: we.a.authorRole,
					comment: a,
					subredditDisplayText: O,
					renderContractorBadge: !!I,
					renderedInOverlay: T
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !k && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
					className: we.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(_.c, {
					className: we.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(H, {
					key: "Created",
					className: we.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: T
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: we.a.separator
				}), r.a.createElement(xe, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: we.a.separator
				}), r.a.createElement(Z, {
					editedAt: a.editedAt
				}))), r.a.createElement(me, {
					comment: a,
					ignoreLock: y,
					renderedInOverlay: T
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: T ? g.c.Lightbox : void 0
				}))
			});
			const De = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: s,
						comment: a,
						commentPermalink: i,
						renderedInOverlay: c
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Pe, null, a.deletedBy === E.c.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(H, {
						key: "Created",
						className: we.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: c
					}), o && We({
						childrenInfo: t
					}))
				},
				Ue = e => {
					const {
						comment: t,
						className: o,
						childrenInfo: n,
						renderedInOverlay: s,
						collapsed: a,
						commentPermalink: i
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(E.f)(t),
						collapsed: a
					})), r.a.createElement(_.b, {
						className: we.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(_.c, {
						className: we.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(H, {
						key: "Created",
						className: we.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s
					}), We({
						childrenInfo: n
					}))
				},
				We = e => {
					const {
						hasContinueThread: t,
						numChildren: o
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Fe, {
						className: we.a.metaText
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
				}
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
				return j
			})), o.d(t, "b", (function() {
				return M
			})), o.d(t, "g", (function() {
				return N
			})), o.d(t, "e", (function() {
				return S
			})), o.d(t, "d", (function() {
				return A
			})), o.d(t, "f", (function() {
				return w
			})), o.d(t, "a", (function() {
				return K
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
				_ = o("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				k = o("./src/reddit/components/Comments/States/index.m.less"),
				x = o.n(k);
			const y = l.a.wrapped(g.a, "CommentsIcon", x.a),
				E = l.a.wrapped(_.a, "SnooFacepalm", x.a),
				I = l.a.p("EmptyTitle", x.a),
				T = l.a.p("ErrorTitle", x.a),
				O = l.a.p("EmptyText", x.a),
				j = ({
					className: e,
					isChat: t
				}) => i.a.createElement("div", {
					className: Object(d.a)(x.a.StateContainer, e)
				}, i.a.createElement(y, null), i.a.createElement(I, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), i.a.createElement(O, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				M = () => i.a.createElement("div", {
					className: x.a.StateContainer
				}, i.a.createElement(y, null), i.a.createElement(I, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = ({
					link: e
				}) => i.a.createElement("div", {
					className: x.a.StateContainer
				}, i.a.createElement(y, null), i.a.createElement(I, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), i.a.createElement(u.m, {
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
					className: x.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(T, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), i.a.createElement(u.k, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				A = ({
					postId: e,
					commentId: t,
					sort: o,
					apiError: n
				}) => i.a.createElement("div", {
					className: Object(d.a)(x.a.StateContainer, x.a.ErrorFullPage)
				}, i.a.createElement(S, {
					postId: e,
					commentId: t,
					sort: o,
					apiError: n
				})),
				w = l.a.wrapped(({
					className: e
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(p.a, null)), "LoadingFullPage", x.a),
				R = l.a.div("CommentsPlaceholderContainer", x.a),
				L = l.a.div("CommentPlaceholder", x.a),
				P = l.a.div("Avatar", x.a),
				F = l.a.div("VoteColumn", x.a),
				B = l.a.div("TextColumn", x.a),
				D = l.a.wrapped(f.a, "Upvote", x.a),
				U = l.a.wrapped(v.a, "Downvote", x.a),
				W = () => i.a.createElement("div", {
					className: Object(d.a)(x.a.TopMetaPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
					className: Object(d.a)(x.a.CommentBodyPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				K = e => i.a.createElement(R, null, r()(10, t => i.a.createElement(L, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(F, null, i.a.createElement(D, null), i.a.createElement(U, null)), i.a.createElement(B, null, i.a.createElement(W, null), i.a.createElement(H, null)))))
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
				return fo
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
				C = o("./src/lib/makeActionCreator/index.ts"),
				v = o("./node_modules/lodash/first.js"),
				f = o.n(v),
				g = o("./node_modules/lodash/isArray.js"),
				_ = o.n(g),
				k = o("./src/reddit/helpers/isComment.ts"),
				x = o("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				y = o("./src/reddit/models/Comment/index.ts"),
				E = o("./src/reddit/models/Flair/index.ts"),
				I = o("./src/reddit/models/PostCreationForm/index.ts"),
				T = o("./src/reddit/models/Vote/index.ts");
			const O = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const o = M(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(x.b)(e.associated_award) : void 0,
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
							distinguishType: j(o),
							id: e.name,
							isAdmin: o === y.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: o === y.e.Submitter,
							isMod: o === y.e.Moderator,
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
							voteState: T.a.notVoted,
							...t || {}
						}
					}
				},
				j = e => {
					switch (e) {
						case y.e.Admin:
							return m.F.ADMIN;
						case y.e.Moderator:
							return m.F.MODERATOR;
						case y.e.Alumni:
							return m.F.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				M = e => f()((e || []).filter(e => _()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || y.e.None;
			const N = (e, t, o) => {
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
					if (l === E.f.Richtext) {
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
					if (l === E.f.Text) {
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
			var S = o("./src/lib/env/index.ts");
			const A = new Map,
				w = e => e,
				R = new Set;
			var L;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(L || (L = {}));
			const P = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				F = (e, t) => {
					const o = w(t),
						n = A.get(o);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				B = (e, t, o, n) => {
					const s = w(t),
						r = A.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: o,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					A.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...P
						}
					}), a.socket.addEventListener("message", W.bind(null, n)), a.socket.addEventListener("close", D.bind(null, s, n)), a.socket.addEventListener("error", H.bind(null, s)), window && window.addEventListener("beforeunload", F.bind(null, e, t))
				},
				D = (e, t, o) => {
					const n = A.get(e);
					n && (n.isClosePlanned ? A.delete(e) : U(e, t))
				},
				U = (e, t) => {
					const o = A.get(e);
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
					if (A.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, s),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							l = {
								...o.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							B(d, c, l, t)
						}, i), Object(S.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				W = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(S.a)() && console.error(t)
					}
				},
				H = (e, t) => {
					const o = A.get(e);
					o && o.isClosePlanned && o.socket && o.socket.readyState === WebSocket.CLOSED ? A.delete(e) : Object(S.a)() && console.error(t)
				};
			var K = o("./src/reddit/selectors/comments.ts"),
				V = o("./src/reddit/selectors/commentSelector.ts"),
				q = o("./src/reddit/selectors/moderatorPermissions.ts"),
				z = o("./src/reddit/actions/comment/websocket/constants.ts");
			const J = Object(C.a)(z.b),
				Q = Object(C.a)(z.c),
				G = Object(C.a)(z.a),
				Y = Object(C.a)(z.d),
				X = {},
				Z = (e, t, o, n) => async (s, r) => {
					(e => new Promise(t => {
						const {
							cb: o,
							url: n,
							uniqueId: s
						} = e;
						R.has(s) ? t() : (R.add(s), setTimeout(() => {
							R.delete(s), B(n, s, {
								...P
							}, o), t()
						}, 1))
					}))({
						uniqueId: o,
						url: t,
						cb: t => {
							switch (t.type) {
								case L.NEW_COMMENT: {
									const o = t.payload.name,
										a = O(t.payload),
										i = r(),
										c = Object(V.b)(i, {
											commentId: o
										}),
										d = !(!o || !X[o]);
									if (a && !d) {
										const o = N(0, n, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(K.w)(i, {
												commentsPageKey: e
											});
											s(J({
												authorFlair: o,
												comment: a,
												commentsPageKey: e,
												headCommentId: t,
												numComments: r
											}))
										} else s(Q({
											authorFlair: o,
											comment: a,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case L.UPDATE_COMMENT: {
									const o = t.payload.name,
										a = r(),
										i = Object(V.b)(a, {
											commentId: o
										}),
										c = O(t.payload);
									if (i && c) {
										const o = N(0, n, t.payload),
											r = t.payload.total_comment_count;
										s(Q({
											authorFlair: o,
											comment: c,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case L.UPDATE_COMMENT_SCORE: {
									const o = t.payload.name,
										n = t.payload.score,
										a = r(),
										i = Object(V.b)(a, {
											commentId: o
										});
									i && s(Q({
										comment: {
											...i,
											score: n
										},
										commentsPageKey: e
									}));
									break
								}
								case L.DELETE_COMMENT: {
									const e = t.payload.name,
										o = r(),
										n = Object(V.b)(o, {
											commentId: e
										});
									n && !n.isDeleted ? s(G({
										id: e
									})) : X[e] = L.DELETE_COMMENT;
									break
								}
								case L.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										o = t.payload.name,
										n = r(),
										a = Object(V.b)(n, {
											commentId: o
										}),
										i = (n.user.account && n.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(q.l)(n, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? X[o] = L.REMOVE_COMMENT : s(G({
										id: o
									}));
									break
								}
								case L.USER_JOIN: {
									const o = O(t.payload, {
											isSystem: !0
										}),
										n = !0;
									o && s(Y({
										comment: o,
										commentsPageKey: e,
										isChatSort: n
									}));
									break
								}
							}
						}
					})
				};
			var $ = o("./src/reddit/actions/pages/comments.ts"),
				ee = o("./src/reddit/components/Comments/States/index.tsx"),
				te = o("./node_modules/fbt/lib/FbtPublic.js"),
				oe = o("./node_modules/lodash/defer.js"),
				ne = o.n(oe),
				se = o("./src/lib/classNames/index.ts"),
				re = o("./src/lib/lessComponent.tsx"),
				ae = o("./src/lib/makeDraftKey/index.ts"),
				ie = o("./src/lib/objectSelector/index.ts"),
				ce = o("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				de = o("./src/reddit/components/Comments/PredictionComment/async.ts"),
				le = o("./src/reddit/helpers/awards/message.ts"),
				me = o("./src/reddit/helpers/getRichTextContent/index.ts"),
				pe = o("./src/reddit/components/RichTextJson/index.tsx"),
				ue = o("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				he = o("./src/reddit/icons/svgs/Star/index.tsx"),
				be = o("./src/reddit/icons/svgs/Star2/index.tsx"),
				Ce = o("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				ve = o.n(Ce);
			const fe = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				ge = e => {
					const {
						award: t,
						comment: o,
						iconUrl: n
					} = e;
					let s = "",
						r = !0,
						a = !1;
					return t.coinPrice < le.a ? (s = ve.a.silverTierAwardComment, r = !1) : t.coinPrice < le.b ? s = ve.a.goldTierAwardComment : (s = ve.a.platinumTierAwardComment, a = !0), c.a.createElement("div", {
						className: Object(se.a)(ve.a.awardComment, s)
					}, c.a.createElement("div", {
						className: ve.a.imageContainer
					}, r && c.a.createElement(c.a.Fragment, null, c.a.createElement(he.a, {
						className: Object(se.a)(ve.a.backgroundAnimation, ve.a.backgroundStar)
					}), c.a.createElement(be.a, {
						className: Object(se.a)(ve.a.backgroundAnimation, ve.a.backgroundStar, ve.a.backgroundStar2)
					})), a && c.a.createElement(c.a.Fragment, null, c.a.createElement(ue.a, {
						className: Object(se.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomLeft)
					}), c.a.createElement(ue.a, {
						className: Object(se.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleTopRight)
					}), c.a.createElement(ue.a, {
						className: Object(se.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: n
					})), c.a.createElement(pe.a, {
						className: ve.a.awardCommentText,
						content: Object(me.a)(o),
						key: `rich-text-${o.id}`,
						rtJsonElementProps: fe(e),
						useExplicitTextColor: !0
					}))
				};
			var _e = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				ke = o("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				xe = o.n(ke);
			var ye = ({
					commentCount: e,
					isLivestreaming: t,
					onClick: o
				}) => {
					const n = Object(se.a)(xe.a.CollapsedComment, {
						[xe.a.LivestreamingWrapper]: t
					});
					return c.a.createElement("div", {
						className: n,
						onClick: o
					}, te.fbt._("collapsed {collapsed message} (may be sensitive)", [te.fbt._param("collapsed message", te.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [te.fbt._plural(e, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				Ee = o("./src/reddit/actions/comment/authoring.ts"),
				Ie = o("./src/reddit/actions/comment/moderation.ts"),
				Te = o("./src/reddit/actions/modal.ts"),
				Oe = o("./src/reddit/actions/reportFlow/index.ts"),
				je = o("./src/reddit/actions/tooltip.ts"),
				Me = o("./src/reddit/actions/userBlocks.ts"),
				Ne = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Se = o("./src/reddit/constants/tracking.ts"),
				Ae = o("./src/reddit/selectors/telemetry.ts"),
				we = o("./src/telemetry/models/Event.ts");
			const Re = e => ({
					screen: Object(Ae.screen)(e),
					profile: Object(Ae.profile)(e),
					subreddit: Object(Ae.subreddit)(e)
				}),
				Le = (e, t) => o => ({
					action: "load",
					noun: e,
					post: Object(Ae.post)(o, t),
					source: we.b.ChatView,
					subreddit: Object(Ae.subreddit)(o)
				}),
				Pe = e => t => ({
					source: "chat_post",
					action: Se.c.VIEW,
					noun: "last_message",
					post: Object(Ae.post)(t, e),
					comment: Object(Ae.comment)(t, e),
					...Re(t)
				});
			var Fe = o("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Be = o.n(Fe);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = re.a.button("MenuItem", Be.a),
				We = re.a.a("MenuItemPermalink", Be.a),
				He = ({
					children: e,
					comment: t,
					onClick: o,
					onHideTooltip: n,
					onShowTooltip: s,
					sendEvent: r,
					tooltipId: a,
					tooltipText: i,
					trackingNoun: d
				}) => c.a.createElement(Ue, {
					id: a,
					onMouseEnter: s.bind(void 0, a),
					onMouseLeave: n.bind(void 0, a),
					onClick: e => {
						o(e), d && (r(((e, t) => o => ({
							source: "comment",
							action: Se.c.CLICK,
							noun: e,
							post: Object(Ae.post)(o, t),
							comment: Object(Ae.comment)(o, t),
							...Re(o)
						}))(d, t.id)), r(((e, t) => o => ({
							source: "comment_overflow_menu",
							action: Se.c.CLICK,
							noun: e,
							post: Object(Ae.post)(o, t),
							comment: Object(Ae.comment)(o, t),
							...Re(o)
						}))(d, t.id)))
					}
				}, e, c.a.createElement(Ne.c, {
					tooltipId: a
				}, i)),
				Ke = e => c.a.createElement(He, De({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(We, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var Ve = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				qe = o("./src/reddit/components/HumanDate/index.tsx"),
				ze = o("./src/reddit/components/ModModeReports/helpers.ts"),
				Je = o("./src/reddit/components/ReportFlow/index.tsx"),
				Qe = o("./src/reddit/components/ReportFlow/new.tsx"),
				Ge = o("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = o("./src/reddit/icons/svgs/Approve/index.tsx"),
				Xe = o("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ze = o("./src/reddit/icons/svgs/Flag/index.tsx"),
				$e = o("./src/reddit/icons/svgs/Hide/index.tsx"),
				et = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				tt = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				ot = o("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				nt = o("./src/reddit/icons/svgs/Spam/index.tsx"),
				st = o("./src/reddit/models/PostDraft/index.ts"),
				rt = o("./src/reddit/selectors/activeModalId.ts"),
				at = o("./src/reddit/selectors/blockedRedditors.ts"),
				it = o("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ct = o("./src/reddit/selectors/user.ts");

			function dt() {
				return (dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const lt = re.a.wrapped($e.a, "BlockIcon", Be.a),
				mt = re.a.wrapped(Ze.a, "FlagIcon", Be.a),
				pt = re.a.wrapped(Xe.a, "EditIcon", Be.a),
				ut = re.a.wrapped(Ye.a, "ApproveIcon", Be.a),
				ht = re.a.wrapped(ot.a, "ReplyIcon", Be.a),
				bt = re.a.wrapped(tt.a, "RemoveIcon", Be.a),
				Ct = re.a.wrapped(nt.a, "SpamIcon", Be.a),
				vt = re.a.wrapped(et.a, "ModeratorIcon", Be.a),
				ft = e => (t, {
					comment: o
				}) => `${e}${o.id}`,
				gt = e => `Comment-${e}--Modal--DeleteComment`,
				_t = Object(l.c)({
					currentUser: ct.k,
					isMod: (e, {
						comment: t
					}) => !!Object(q.l)(e, {
						postId: t.postId
					}),
					isAuthorBlocked: (e, {
						comment: t
					}) => Object(at.d)(e, t.authorId),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
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
					isDeleteModalOpen: (e, {
						comment: t
					}) => Object(rt.a)(e) === gt(t.id),
					reportingRevampEnabled: it.a
				});
			var kt = Object(d.b)(_t, (e, {
					comment: t,
					commentsPageKey: o
				}) => ({
					onReplyClick: () => e(Object(Ee.p)({
						parentCommentId: t.id,
						commentsPageKey: o,
						singleOpen: !0
					})),
					onReportClick: o => {
						o.stopPropagation(), e(Object(Oe.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(je.i)()),
					onShowTooltip: t => e(Object(je.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const n = t.media && t.media.rteMode;
						o && e(Object(Ee.d)({
							commentId: t.id,
							draftKey: Object(ae.a)(st.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: o
						}))
					},
					onApproveClick: () => e(Object(Ie.a)(t.id)),
					onBlockClick: () => e(Object(Me.h)(t.author)),
					onUnblockClick: () => e(Object(Me.g)(t.author)),
					onUpvoteClick: () => e(Object(b.q)(t.id)),
					onDownvoteClick: () => e(Object(b.j)(t.id)),
					onDistinguishClick: o => e(Object(Ie.b)(t.id, o)),
					onSpamClick: () => e(Object(Ie.e)(t.id, !0)),
					onRemoveClick: () => e(Object(Ie.e)(t.id, !1)),
					deleteComment: () => o && e(Object(Ee.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(Te.i)(gt(t.id))),
					toggleDeleteCommentModal: () => e(Object(Te.i)(gt(t.id)))
				}))(Object(Ge.c)(e => {
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
						isMod: u,
						onApproveClick: h,
						onBlockClick: b,
						onDeleteClick: C,
						onEditClick: v,
						onHideTooltip: f,
						onRemoveClick: g,
						onReplyClick: _,
						onReportClick: k,
						onShowTooltip: x,
						onSpamClick: y,
						onUnblockClick: E,
						onDistinguishClick: I,
						reportFlowIsOpen: T,
						replyTooltipId: O,
						reportTooltipId: j,
						approveTooltipId: M,
						blockTooltipId: N,
						removeTooltipId: S,
						distinguishTooltipId: A,
						sendEvent: w,
						spamTooltipId: R,
						toggleDeleteCommentModal: L,
						timestampUpdateTrigger: P
					} = e, F = !!s && s.id === t.authorId, B = Object(ze.b)(t), D = t.isApproved && B, U = !t.bannedBy || t.bannedBy === m.k, W = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: x,
						sendEvent: w
					}, H = t.isMod;
					return c.a.createElement("div", {
						className: o
					}, c.a.createElement("div", {
						className: Object(se.a)(Be.a.Menu, {
							[Be.a.Livestreaming]: p
						})
					}, (t.bannedBy || B) && u && c.a.createElement(He, dt({
						onClick: h,
						tooltipId: M,
						tooltipText: D ? te.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : te.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(ut, null)), !t.isLocked && c.a.createElement(He, dt({
						onClick: _,
						tooltipId: O,
						tooltipText: te.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(ht, null)), u && F && c.a.createElement(He, dt({
						onClick: () => I(H ? m.F.NONE : m.F.MODERATOR),
						tooltipId: A,
						tooltipText: H ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(vt, null)), u && U && c.a.createElement(He, dt({
						onClick: y,
						tooltipId: R,
						tooltipText: te.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Ct, null)), !F && c.a.createElement(He, dt({
						onClick: k,
						tooltipId: j,
						tooltipText: te.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(mt, null)), T && (() => e.reportingRevampEnabled ? c.a.createElement(Qe.a, {
						withOverlay: !0,
						overlayCustomStyles: Je.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(Je.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: Je.b,
						postId: t.postId
					}))(), F && !p && c.a.createElement(He, dt({
						onClick: v,
						tooltipId: i,
						tooltipText: te.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, W), c.a.createElement(pt, null)), u && U ? c.a.createElement(He, dt({
						onClick: g,
						tooltipId: S,
						tooltipText: t.bannedBy === m.k ? te.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : te.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, W), c.a.createElement(bt, null)) : F && c.a.createElement(He, dt({
						onClick: C,
						tooltipId: a,
						tooltipText: te.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(bt, null)), l && c.a.createElement(Ve.a, {
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
						toggleModal: L,
						withOverlay: !0
					}), !!s && !F && c.a.createElement(He, dt({
						onClick: () => d ? E() : b(),
						tooltipId: N,
						tooltipText: d ? te.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : te.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, W), c.a.createElement(lt, null))), !p && c.a.createElement(Ke, dt({}, e, {
						tooltipId: n,
						tooltipText: c.a.createElement(qe.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(qe.d, {
						seconds: t.created
					})))
				})),
				xt = o("./src/chat/helpers/dom.ts"),
				yt = o("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Et = o("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				It = o.n(Et);
			const Tt = {},
				Ot = re.a.wrapped(_e.a, "ChatIcon", It.a),
				jt = re.a.span("ReplyAuthor", It.a),
				Mt = re.a.div("ReplyWrapper", It.a);
			var Nt = Object(d.b)(() => Object(l.c)({
					comment: V.b,
					commentPermalink: K.m
				}))(({
					comment: e,
					commentId: t,
					commentPermalink: o,
					isLivestreaming: n,
					onReplyClick: s
				}) => e ? e.isDeleted ? c.a.createElement(Mt, null, c.a.createElement("span", {
					className: Object(se.a)(It.a.ReplyLinkBubble, It.a.delete, {
						[It.a.Livestreaming]: n
					})
				}, c.a.createElement(so, null))) : c.a.createElement(Mt, null, c.a.createElement("a", {
					className: Object(se.a)(It.a.ReplyLinkBubble, {
						[It.a.Livestreaming]: n
					}),
					href: o,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(xt.a)(() => s(e.id))
				}, c.a.createElement(Ot, {
					userId: e.authorId,
					icon: e.profileImage
				}), c.a.createElement(jt, null, e.author), c.a.createElement(yt.a, {
					className: It.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(me.a)(e),
					rtJsonElementProps: Tt
				}))) : null),
				St = o("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				At = o.n(St);
			const wt = Object(ie.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var Rt = e => {
					const {
						comment: t
					} = e;
					return void 0 === wt(e) ? null : c.a.createElement(pe.a, {
						className: At.a.SystemMessageText,
						content: Object(me.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: wt(e),
						useExplicitTextColor: !0
					})
				},
				Lt = o("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pt = o("./src/reddit/contexts/PageLayer/index.tsx"),
				Ft = o("./src/reddit/controls/ErrorText/index.tsx"),
				Bt = o("./src/reddit/constants/experiments.ts"),
				Dt = o("./src/reddit/helpers/chooseVariant/index.ts");
			const Ut = e => Object(Dt.c)(e, {
				experimentName: Bt.fb,
				experimentEligibilitySelector: Dt.a
			}) === Bt.bb.Enabled;
			var Wt = o("./src/reddit/selectors/communityAwards.ts");
			const Ht = (e, {
				commentId: t
			}) => {
				const o = Object(V.b)(e, {
					commentId: t
				});
				if (o && o.associatedAwardId) return Object(Wt.a)(e, o.associatedAwardId)
			};
			var Kt = o("./src/reddit/selectors/gold/awardIcon.ts"),
				Vt = o("./src/reddit/selectors/poll/index.ts"),
				qt = o("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				zt = o.n(qt);
			const Jt = 250,
				Qt = 10,
				Gt = re.a.wrapped(Ft.b, "ErrorText", zt.a),
				Yt = re.a.wrapped(ce.a, "TopMeta", zt.a),
				Xt = re.a.span("DeleteText", zt.a),
				Zt = re.a.wrapped(Nt, "Reply", zt.a),
				$t = Object(Pt.u)(),
				eo = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, {
						commentId: t
					}) => Ht(e, {
						commentId: t
					}),
					awardIconUrl: (e, {
						commentId: t
					}) => {
						const o = Ht(e, {
							commentId: t
						});
						if (o) return Object(Kt.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: t
						})
					},
					comment: V.b,
					commentPermalink: K.m,
					errorMsgs: K.F,
					flair: K.e,
					isActive: (e, {
						commentId: t
					}) => Boolean(e.shortcuts.activeCommentId && t === e.shortcuts.activeCommentId),
					isEditing: K.z,
					prediction: Vt.f,
					subreddit: Pt.r,
					shouldRenderSystemMessages: Ut
				})),
				to = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class oo extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Jt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let o = Jt;
						if (t) {
							o = e.scrollHeight + Qt;
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
						commentPermalink: s,
						commentsPageKey: r,
						errorMsgs: a,
						flair: i,
						isActive: d,
						isEditing: l,
						isLivestreaming: m,
						postId: p,
						prediction: u,
						renderedInOverlay: h,
						sendEvent: b,
						targetComment: C,
						timestampUpdateTrigger: v,
						addToRefList: f,
						onReplyClick: g,
						shouldRenderSystemMessages: _
					} = this.props, {
						isCollapsed: k,
						isExpanded: x,
						isTruncated: y
					} = this.state;
					if (!n) return null;
					d && ne()(() => this.elemRef.current && this.elemRef.current.focus()), ne()(() => this.elemRef && this.elemRef.current && f && f(this.elemRef));
					const E = n.isSystem,
						I = !l && !n.isDeleted && !E,
						T = !!e,
						O = Object(se.a)({
							[zt.a.SystemMessageWrapper]: E && !m && _,
							[zt.a.CommentWrapper]: !m && !E,
							[zt.a.CommentExpanded]: x,
							[zt.a.CommentTruncated]: y,
							[zt.a.HighlightTarget]: C,
							[zt.a.LivestreamingCommentWrapper]: m
						});
					return k ? c.a.createElement(ye, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: O
					}, l && c.a.createElement(Lt.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: p,
						sendEvent: b,
						draftKey: Object(ae.a)(st.c.edit, n.id),
						commentsPageKey: r,
						isEditing: l,
						comment: n
					}), I && c.a.createElement(c.a.Fragment, null, c.a.createElement(Yt, {
						childrenInfo: o,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: n,
						commentsPageKey: r,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: m,
						renderedInOverlay: h
					}, c.a.createElement(_e.a, {
						className: Object(se.a)(zt.a.ChatIcon, {
							[zt.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: n.profileImage,
						userId: n.authorId,
						isNSFW: n.profileOver18 || n.authorIconIsNSFW
					})), n.parentId && c.a.createElement(Zt, {
						commentId: n.parentId,
						onReplyClick: g,
						isLivestreaming: m
					}), m && c.a.createElement("span", {
						className: zt.a.livestreamingTimeStamp
					}, c.a.createElement(qe.d, {
						seconds: n.created
					})), T && e && m ? c.a.createElement(ge, {
						award: e,
						comment: n,
						iconUrl: t
					}) : u ? c.a.createElement(de.a, {
						comment: n,
						prediction: u
					}) : [c.a.createElement(pe.a, {
						className: Object(se.a)(zt.a.RichTextJson, {
							[zt.a.Livestreaming]: m
						}),
						content: Object(me.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: to(this.props),
						useExplicitTextColor: m
					}), c.a.createElement(kt, {
						key: "Menu",
						className: Object(se.a)(zt.a.Menu, {
							[zt.a.Livestreaming]: m
						}),
						comment: n,
						commentPermalink: s,
						commentsPageKey: r,
						isLivestreaming: m,
						timestampUpdateTrigger: v
					})]), n.isDeleted && c.a.createElement(so, null), I && a && a.map((e, t) => c.a.createElement(Gt, {
						key: `${t}-${e}`
					}, e)), !l && y && c.a.createElement("button", {
						className: Object(se.a)(zt.a.CommentReadMoreButton, {
							[zt.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), E && !m && _ && c.a.createElement(Rt, {
						comment: n
					}))
				}
			}
			const no = $t(eo(oo)),
				so = ({
					isLivestreaming: e
				}) => c.a.createElement(c.a.Fragment, null, c.a.createElement(_e.a, {
					className: Object(se.a)(zt.a.ChatIcon, {
						[zt.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), c.a.createElement(Xt, null, te.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var ro = no,
				ao = o("./node_modules/lodash/isEqual.js"),
				io = o.n(ao),
				co = o("./src/reddit/controls/Button/index.tsx"),
				lo = o("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				mo = o.n(lo);
			const po = re.a.div("ButtonWrapper", mo.a),
				uo = ({
					top: e
				}) => c.a.createElement("span", {
					className: Object(se.a)(mo.a.ChunkPlaceholder, {
						[mo.a.top]: e
					})
				}, te.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				ho = ({
					className: e,
					isLivestreaming: t,
					isLoading: o,
					setRef: n,
					...s
				}) => c.a.createElement("div", {
					ref: n,
					className: Object(se.a)(e, {
						[mo.a.ScrollerWrapper]: !t,
						[mo.a.LivestreamingWrapper]: t,
						[mo.a.loading]: o
					})
				}, !o && s.isPrevLoading && !t && c.a.createElement(uo, {
					top: !0
				}), s.children, !o && s.isNextLoading && !t && c.a.createElement(uo, null));
			class bo extends c.a.Component {
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
					const t = e.children.length !== this.props.children.length || !io()(f()(e.children), f()(this.props.children)) || !io()(a()(e.children), a()(this.props.children));
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
					} = this.props, o = this.state.newCommentsCount > 0 ? Object(se.a)([mo.a.NewComments, mo.a.show]) : mo.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(ho, {
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
						className: mo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: mo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: mo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(po, null, c.a.createElement(co.k, {
						className: o,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", te.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [te.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Co = bo,
				vo = o("./src/reddit/selectors/posts.ts");
			const fo = 6e4,
				go = (e, t, {
					authorId: o,
					id: n
				}) => e.includes(o) && !t.includes(n),
				_o = Object(l.c)({
					blockedRedditors: at.a,
					blockedRedditorsPending: at.b,
					chatCommentLinks: K.g,
					isPending: K.d,
					liveCommentsWebsocket: vo.F,
					moreCommentsLink: K.E
				}),
				ko = Object(d.b)(_o, (e, t) => ({
					onLiveCommentsSubscribe: (o, n, s) => e(Z(o, n, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, o) => e(((e, t) => async () => {
						F(0, t)
					})(0, o)),
					loadMoreComments: o => e(Object(b.l)(t.commentsPageKey, o)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.t.CHAT
					}, m.t.CHAT))
				}));
			class xo extends c.a.Component {
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
					}, fo)
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
					t && !t.pending && (e(t.moreCommentId), n(Le("history", o)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, o = a()(e);
					(null == o ? void 0 : o.id) && t(Pe(o.id))
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
					return c.a.createElement(c.a.Fragment, null, C ? c.a.createElement(ee.c, {
						className: r,
						isChat: !0
					}) : c.a.createElement(Co, {
						className: o,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => go(e.ids, u, t) ? c.a.createElement(ye, {
						commentCount: 1,
						isLivestreaming: a,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(ro, {
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
			t.default = ko(Object(Ge.c)(xo))
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("UserAchievementFlair").then(o.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
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
					case s.H.AUTHORIZATION_ERROR:
						return t ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.H.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.H.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.H.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.H.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return i
			})), o.d(t, "a", (function() {
				return c
			}));
			var n = o("./src/reddit/helpers/flair.ts"),
				s = o("./src/reddit/selectors/comments.ts"),
				r = o("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = o("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, o) => i => {
					const c = Object(s.e)(i, {
							commentId: e
						}),
						d = Object(r.g)(i, {
							subredditId: t,
							userId: o
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.defaults(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(n.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.defaults(e)
				})
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
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "b", (function() {
					return s
				})), o.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(n || (n = {}));
			const s = e => e.category === n.Supporter,
				r = e => e.category === n.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/redux/es/redux.js"),
				s = o("./src/reddit/actions/gold/constants.ts"),
				r = o("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var i = o("./node_modules/icepick/icepick.js"),
				c = o("./src/reddit/actions/economics/powerups/constants.ts");
			const d = {},
				l = e => {
					var t, o;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (o = e[0]) || void 0 === o ? void 0 : o.type)
				},
				m = {};
			t.a = Object(n.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case s.pb:
							const {
								subredditId: o, subredditAchievementFlairs: n
							} = t.payload;
							if (!(null == n ? void 0 : n.length)) return e;
							const a = n.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = n.filter(r.a).map(e => e.type),
								c = n.filter(r.b).map(e => e.type);
							return {
								...e, [o]: {
									flairsByType: a,
									achievementTypes: i,
									supporterTypes: c
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = d, t) => {
					switch (t.type) {
						case c.d: {
							const {
								id: o,
								userAchievementFlairsByRedditorIds: n
							} = t.payload;
							let s = e[o] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of n) {
								const o = a.filter(r.a),
									n = o.map(({
										type: e
									}) => e),
									i = a.filter(r.b),
									c = i.map(({
										type: e
									}) => e),
									d = l(o),
									m = l(i);
								s = {
									...s,
									[e]: {
										achievementTypes: n,
										supporterTypes: c,
										preferredAchievementType: d,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[o]: s
							}
						}
						case c.f: {
							const {
								subredditId: o,
								userId: n,
								achievementFlairType: s,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [o, n], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: r
							}))
						}
						case c.g: {
							const {
								subredditId: o,
								userId: n,
								achievementFlairType: s,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [o, n], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: o,
								userId: n
							} = t.payload;
							return Object(i.updateIn)(e, [o, n], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case c.h: {
							const {
								subredditId: o,
								userId: n,
								isHidden: s
							} = t.payload;
							return Object(i.updateIn)(e, [o, n], e => ({
								...e,
								isHidden: s
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case c.i: {
							let o = {};
							return t.payload.forEach(e => {
								const t = e.id,
									n = e.powerups;
								if (!t || !n) return;
								const s = n.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								o = {
									...o,
									[t]: s.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...o
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return d
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "g", (function() {
				return m
			})), o.d(t, "i", (function() {
				return p
			})), o.d(t, "j", (function() {
				return u
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "c", (function() {
				return b
			})), o.d(t, "e", (function() {
				return C
			})), o.d(t, "d", (function() {
				return v
			})), o.d(t, "a", (function() {
				return g
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/selectors/commentSelector.ts"),
				r = o("./src/lib/initializeClient/installReducer.ts"),
				a = o("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var o;
					return t ? null === (o = e.features.powerups.subredditPowerupsFlairs) || void 0 === o ? void 0 : o[t] : null
				},
				c = (e, {
					subredditId: t
				}) => {
					var o, n;
					return t ? null === (n = null === (o = e.features.powerups.subredditPowerupsFlairs) || void 0 === o ? void 0 : o[t]) || void 0 === n ? void 0 : n.flairsByType : null
				},
				d = (e, {
					subredditId: t,
					userId: o
				}) => {
					var n, s;
					return t && o ? null === (s = null === (n = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s[o] : null
				},
				l = Object(n.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(n.a)([c, l], (e, t) => e && t ? e[t] : null),
				p = Object(n.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				u = Object(n.a)([c, p], (e, t) => e && t ? e[t] : null),
				h = Object(n.a)([c, d], (e, t) => {
					if (!e) return [];
					const o = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						n = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						s = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !o.includes(e.type),
						isPreferred: e.type === n || e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = Object(n.a)([i, d], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: o,
						achievementTypes: n,
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
						supporterFlairs: f(o, r, s, d || i),
						achievementFlairs: f(n, a, s, l || c)
					}
				}),
				C = Object(n.a)([d], e => !!e && e.isHidden),
				v = Object(n.a)([i, d, u], (e, t, o) => {
					if (!e || !t) return [];
					const n = t.achievementTypes.map(t => e.flairsByType[t]);
					return o ? [o, ...n] : n
				}),
				f = (e, t, o, n) => e.map(e => ({
					...o[e],
					isLocked: !t.includes(e),
					isPreferred: e === n
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				g = (e, {
					commentId: t
				}) => {
					const o = Object(s.b)(e, {
							commentId: t
						}),
						n = null == o ? void 0 : o.subredditId,
						r = null == o ? void 0 : o.authorId;
					return !(!n || !r) && !!((e, {
						subredditId: t,
						userId: o
					}) => {
						var n, s, r;
						return t && o ? null === (r = null === (s = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === s ? void 0 : s[o]) || void 0 === r ? void 0 : r[t] : null
					})(e, {
						subredditId: n,
						userId: r
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.af63f66c41b25770c1e9.js.map