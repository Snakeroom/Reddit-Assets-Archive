// https://www.redditstatic.com/desktop2x/ChatPost.5a93094d783e426854d3.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
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
				a = n("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > r) return [];
				var n = i,
					d = c(e, i);
				t = o(t), e -= i;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/lib/colors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const s = "#FFF",
				o = "#FF4500",
				a = "#0079D3",
				r = "#24A0ED",
				i = "#46D160",
				c = {
					black: "#000",
					white: s,
					orangered: o,
					alienblue: a,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: r,
					secondary: "#006CBF",
					upvote: o,
					downvote: "#7193FF",
					positive: i,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: o,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: o,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...c,
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
		"./src/lib/setInterval/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e, t, ...n) {
				let s, o = !1;
				const a = async () => {
					n && n.length ? await e.call(window, ...n) : await e.call(window), o || (s = window.setTimeout(a, t))
				};
				return s = window.setTimeout(a, t), () => {
					o = !0, window.clearTimeout(s)
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
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
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
				a = n.n(o),
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
					comment: n,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: d,
					style: l,
					collapsed: u
				} = e;
				return u && o ? a.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : a.a.createElement(m.a, {
					className: Object(c.a)(p.a.commentAuthorLink, t),
					author: n.author,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: d,
					style: l
				}, n.author)
			};
			var b = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				f = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = n("./src/reddit/controls/MetaData/index.tsx"),
				x = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/trackers/userFlair.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				T = n("./src/lib/constants/index.ts"),
				O = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				M = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				j = n.n(N);
			const L = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: r,
				collapsed: i
			}) => a.a.createElement(M.b, {
				className: Object(c.a)(j.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: r ? g.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(I.g)(n),
				collapsed: i
			}, a.a.createElement(O.b, {
				ignore: Object(I.f)(n) || !!n.distinguishType && n.distinguishType !== T.F.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, a.a.createElement(h, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isCommentAuthorBlocked: Object(I.g)(n),
				isAuthorDeleted: Object(I.f)(n),
				collapsed: i
			})));
			var w = n("./src/config.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				S = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const R = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var P = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(P);
			const B = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(r.d)(),
					i = () => o(Object(A.h)({
						tooltipId: d
					})),
					d = R("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
					className: Object(c.a)(F.a.cakedayIcon, e),
					src: `${w.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: d,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), a.a.createElement(S.c, {
					tooltipId: d,
					text: l
				}))
			};
			var D = n("./src/lib/addQueryParams/index.ts"),
				U = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx");
			const H = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						renderedInOverlay: o
					} = e, i = Object(r.d)(), c = R("CommentTopMeta--Created--", n.id, o), d = () => i(Object(A.h)({
						tooltipId: c
					}));
					return a.a.createElement("a", {
						className: t,
						href: Object(D.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							V(i, n.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(W.d, {
						seconds: n.created,
						noPostfix: s,
						shortenedUnit: s
					}), a.a.createElement(S.c, {
						tooltipId: c
					}, a.a.createElement(W.b, {
						seconds: n.created
					})))
				},
				V = (e, t) => {
					window.addEventListener("focus", (function n() {
						K(e, t, n)
					}))
				},
				K = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(U.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var z = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				q = n.n(z);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = () => a.a.createElement(_.a, {
				className: q.a.crowdControlText
			}, G._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Q = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				X = n.n(Q);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = ({
				compact: e,
				editedAt: t
			}) => a.a.createElement(_.a, {
				className: X.a.editedText
			}, Y._("edited {time}", [Y._param("time", a.a.createElement(W.d, {
				seconds: t,
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var $ = n("./src/reddit/helpers/isRemoved.ts"),
				ee = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				te = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ne = n("./src/reddit/icons/fonts/index.tsx"),
				se = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				oe = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				re = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				ce = n("./src/reddit/models/AutomatedReporting/index.ts"),
				de = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				le = n.n(de);
			const me = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const i = Object(r.d)(),
					d = e => () => i(Object(A.f)({
						tooltipId: e
					})),
					l = () => i(Object(A.i)()),
					m = t => R(t, e.id, o),
					u = m("CommentTopMeta--Automod--"),
					p = m("CommentTopMeta--Approve--"),
					h = m("CommentTopMeta--Remove--"),
					b = m("CommentTopMeta--Report--"),
					C = m("CommentTopMeta--Spam--"),
					v = e.bannedBy && Object(ce.b)(e.bannedBy),
					f = d(h);
				return a.a.createElement(a.a.Fragment, null, (e.approvedBy || e.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(se.a, {
					className: le.a.approveIcon,
					desc: Object(ee.a)(e),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: l,
					isFilled: !0
				}), a.a.createElement(S.c, {
					tooltipId: p,
					text: Object(ee.a)(e)
				})), Object($.a)(e) && !v && a.a.createElement(a.a.Fragment, null, a.a.createElement(ae.a, {
					className: le.a.removeIcon,
					desc: Object(ee.c)(e),
					id: h,
					onMouseEnter: f,
					onMouseLeave: l,
					isFilled: !0
				}), a.a.createElement(S.c, {
					tooltipId: h,
					text: Object(ee.c)(e)
				})), Object($.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && a.a.createElement("a", {
					className: le.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object($.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !v && a.a.createElement("a", {
					className: le.a.removalReason,
					onMouseEnter: f,
					onMouseLeave: l
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && a.a.createElement(oe.a, {
					className: le.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(ie.a, {
					className: le.a.spamIcon,
					desc: Object(ee.e)(e),
					id: C,
					onMouseEnter: d(C),
					onMouseLeave: l,
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(S.c, {
					tooltipId: C,
					text: Object(ee.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && a.a.createElement(ne.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(le.a.automoderatorIcon, {
						[le.a.removed]: !!e.bannedBy
					}),
					"aria-label": ee.b,
					id: u,
					key: u,
					onMouseEnter: d(u),
					onMouseLeave: l
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && a.a.createElement(S.c, {
					tooltipId: u,
					text: ee.b
				}), Object(te.a)(e) && a.a.createElement(re.a, {
					className: le.a.reportIcon,
					desc: Object(ee.d)(e.numReports),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: l,
					isFilled: !0
				}), Object(te.a)(e) && a.a.createElement(S.c, {
					tooltipId: b,
					text: Object(ee.d)(e.numReports)
				}), v && a.a.createElement("a", {
					className: le.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", v)], {
					hk: "3C408F"
				})))
			};
			var ue, pe = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ue || (ue = {}));
			var he = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				be = n.n(he);
			const Ce = {
					[ue.Admin]: {
						color: pe.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[ue.Mod]: {
						color: pe.c,
						label: s.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[ue.Op]: {
						color: pe.a,
						label: s.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[ue.AlumniAdmin]: {
						color: pe.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[ue.Contractor]: {
						color: pe.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				ve = e => {
					const t = Object(r.d)(),
						n = function(e) {
							return e.isAdmin ? ue.Admin : e.isMod ? ue.Mod : e.isOp ? ue.Op : e.distinguishType === T.F.ALUMNI_ADMIN ? ue.AlumniAdmin : e.authorIsContractor ? ue.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ue.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: i,
						tooltipTemplate: d
					} = Ce[n], l = R(s, e.comment.id, e.renderedInOverlay), m = d(e), u = () => t(Object(A.h)({
						tooltipId: l
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(c.a)(be.a.role, e.className),
						style: {
							color: o
						},
						id: l,
						onMouseEnter: u,
						onMouseLeave: u
					}, a.a.createElement("span", null, i), n === ue.Mod && a.a.createElement(fe, null)), a.a.createElement(S.c, {
						tooltipId: l,
						text: m
					}))
				},
				fe = () => a.a.createElement("img", {
					alt: "Moderator Achievement",
					className: be.a.modAchievement,
					src: `${w.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ge = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				_e = n.n(ge);
			const {
				fbt: xe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ee = () => a.a.createElement(_.a, {
				className: _e.a.stickiedText
			}, xe._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ke = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Ie = n.n(ke);
			const ye = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: d,
					ignoreLock: m,
					isLivestreaming: u,
					renderedInOverlay: p,
					subredditDisplayText: h,
					renderContractorBadge: T
				} = e, O = Object(k.a)(), M = i.subredditId, N = Object(r.e)(e => Object(y.g)(e, {
					subredditId: M
				}));
				if (i.isDeleted) return a.a.createElement("div", {
					className: Object(c.a)(Ie.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: Ie.a.authorLine
				}, a.a.createElement("span", {
					className: Ie.a.metaText
				}, i.deletedBy === I.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(_.c, {
					className: Ie.a.separator
				}), a.a.createElement(H, {
					key: "Created",
					className: Ie.a.metaText,
					comment: i,
					compact: !0,
					renderedInOverlay: p
				})));
				return a.a.createElement("div", {
					className: Object(c.a)(Ie.a.container, t),
					"data-testid": "post-comment-header"
				}, a.a.createElement("span", {
					className: Ie.a.authorLine
				}, !Object(I.f)(i) && a.a.createElement(C.b, {
					className: Ie.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), a.a.createElement("div", {
					className: Ie.a.baselineItem
				}, a.a.createElement(L, {
					authorClassName: Ie.a.author,
					comment: i,
					isLivestreaming: u,
					renderedInOverlay: p,
					collapsed: n
				})), o && a.a.createElement(J, null), a.a.createElement(ve, {
					className: Ie.a.role,
					comment: i,
					subredditDisplayText: h,
					renderContractorBadge: T,
					renderedInOverlay: p
				}), i.isAuthorCakeday ? a.a.createElement(B, {
					className: Ie.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: p
				}) : !Object(I.f)(i) && N && a.a.createElement(b.a, {
					className: Ie.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						O(Object(E.f)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), a.a.createElement(f.a, {
					className: Ie.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), a.a.createElement(_.c, {
					className: Ie.a.separator
				}), a.a.createElement(H, {
					key: "Created",
					className: Ie.a.metaText,
					comment: i,
					compact: !0,
					renderedInOverlay: p
				}), i.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: Ie.a.separator
				}), a.a.createElement(Ee, null)), i.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: Ie.a.separator
				}), a.a.createElement(Z, {
					compact: !0,
					editedAt: i.editedAt
				})), a.a.createElement(me, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: p
				}), a.a.createElement(l.a, {
					thing: i,
					tooltipType: p ? g.c.Lightbox : void 0
				})), d && !Object(x.o)(d) && a.a.createElement("span", {
					className: Ie.a.userFlairLine
				}, a.a.createElement(v.b, {
					className: Ie.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Oe = n("./src/reddit/selectors/economics.ts"),
				Me = n("./src/reddit/models/Flair/index.ts"),
				Ne = n("./src/reddit/selectors/subreddit.ts"),
				je = n("./src/reddit/selectors/userFlair.ts"),
				Le = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				we = n.n(Le);

			function Ae() {
				return (Ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Se = d.a.wrapped(v.b, "RightPositionedAuthorFlair", we.a),
				Re = d.a.span("DeletedText", we.a),
				Pe = d.a.wrapped(_.a, "MetaSeparator", we.a),
				Fe = Object(r.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Oe.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Ne.I)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(je.d)(e, {
						subredditId: t.subredditId
					})
				}));
			t.a = Fe(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: r,
					commentsPageKey: i,
					compact: d,
					flair: m,
					flairPosition: u,
					hasBadges: p,
					isLivestreaming: h,
					isPostComment: b,
					ignoreFlairPosition: x,
					ignoreLock: E,
					renderContractorBadge: k,
					renderedInOverlay: y,
					subredditDisplayText: T,
					userHasNft: O
				} = e, M = a.a.createElement(a.a.Fragment, null, a.a.createElement(Te.b, {
					commentId: r.id
				}), a.a.createElement(Te.a, {
					commentId: r.id,
					commentsPageKey: i
				}));
				if (b) return a.a.createElement(a.a.Fragment, null, a.a.createElement(ye, {
					className: Object(c.a)(n, {
						[we.a.collapsed]: s
					}),
					collapsedBecauseCrowdControl: o,
					comment: r,
					flair: m || null,
					ignoreLock: E,
					isLivestreaming: h,
					renderedInOverlay: y,
					subredditDisplayText: T,
					renderContractorBadge: !!k,
					collapsed: s
				}), M);
				if (r.isDeleted) return a.a.createElement(Be, Ae({}, e, {
					className: Object(c.a)(n, we.a.container, {
						[we.a.collapsed]: s
					})
				}));
				if (s) return a.a.createElement(De, Ae({}, e, {
					className: Object(c.a)(n, we.a.container, {
						[we.a.collapsed]: s
					})
				}));
				const N = !x && u === Me.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(n, we.a.container, {
						[we.a.collapsed]: s,
						[we.a.hasBadges]: p,
						[we.a.liveStreaming]: h
					}),
					"data-testid": "comment-top-meta"
				}, m && N && a.a.createElement(v.b, {
					flair: m,
					forceSmallEmojis: d
				}), !Object(I.f)(r) && a.a.createElement(C.b, {
					className: we.a.userBadges,
					showAddCustom: !0,
					subredditId: r.subredditId,
					userId: r.authorId,
					uniqueIdentifier: r.id
				}), t && t, a.a.createElement(L, {
					authorClassName: O ? we.a.NftAuthor : void 0,
					comment: r,
					isLivestreaming: h,
					isStrong: !!d,
					renderedInOverlay: y,
					collapsed: s
				}), o && a.a.createElement(J, null), o && a.a.createElement(_.c, {
					className: we.a.metaText,
					key: "crowdControlSeparator"
				}), m && !N && a.a.createElement(Se, {
					flair: m,
					forceSmallEmojis: d
				}), !d && a.a.createElement(f.a, {
					className: we.a.publicPoints,
					contentId: r.id,
					metaSeparator: a.a.createElement(_.c, {
						className: we.a.metaText
					}),
					subredditId: r.subredditId,
					userId: r.authorId,
					username: r.author
				}), M, a.a.createElement(ve, {
					className: we.a.authorRole,
					comment: r,
					subredditDisplayText: T,
					renderContractorBadge: !!k,
					renderedInOverlay: y
				}), !d && a.a.createElement(a.a.Fragment, null, !r.isDeleted && !b && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.b, {
					className: we.a.metaText,
					isScoreHidden: r.isScoreHidden,
					score: r.score
				}), a.a.createElement(_.c, {
					className: we.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(H, {
					key: "Created",
					className: we.a.MetaLink,
					comment: r,
					renderedInOverlay: y
				}), r.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: we.a.separator
				}), a.a.createElement(Ee, null)), r.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: we.a.separator
				}), a.a.createElement(Z, {
					editedAt: r.editedAt
				}))), a.a.createElement(me, {
					comment: r,
					ignoreLock: E,
					renderedInOverlay: y
				}), a.a.createElement(l.a, {
					thing: r,
					tooltipType: y ? g.c.Lightbox : void 0
				}))
			});
			const Be = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: r,
						renderedInOverlay: i
					} = e;
					return a.a.createElement("div", {
						className: o
					}, a.a.createElement(Re, null, r.deletedBy === I.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(H, {
						key: "Created",
						className: we.a.MetaLink,
						comment: r,
						renderedInOverlay: i
					}), n && Ue({
						childrenInfo: t
					}))
				},
				De = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: r
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", null, a.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(I.f)(t),
						collapsed: r
					})), a.a.createElement(_.b, {
						className: we.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(_.c, {
						className: we.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(H, {
						key: "Created",
						className: we.a.MetaLink,
						comment: t,
						renderedInOverlay: o
					}), Ue({
						childrenInfo: s
					}))
				},
				Ue = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Pe, {
						className: we.a.metaText
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
				return M
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "a", (function() {
				return V
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/times.js"),
				a = n.n(o),
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
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				x = n("./src/reddit/components/Comments/States/index.m.less"),
				E = n.n(x);
			const k = l.a.wrapped(g.a, "CommentsIcon", E.a),
				I = l.a.wrapped(_.a, "SnooFacepalm", E.a),
				y = l.a.p("EmptyTitle", E.a),
				T = l.a.p("ErrorTitle", E.a),
				O = l.a.p("EmptyText", E.a),
				M = ({
					className: e,
					isChat: t
				}) => i.a.createElement("div", {
					className: Object(d.a)(E.a.StateContainer, e)
				}, i.a.createElement(k, null), i.a.createElement(y, null, t ? s.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : s.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), i.a.createElement(O, null, s.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				N = () => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(k, null), i.a.createElement(y, null, s.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, s.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				j = ({
					link: e
				}) => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(k, null), i.a.createElement(y, null, s.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), i.a.createElement(p.k, {
					to: Object(b.b)(e)
				}, s.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				L = Object(c.b)(null, (e, {
					postId: t,
					commentId: n,
					sort: s
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, n, {
						sort: s
					}, s))
				}))(({
					apiError: e,
					onClick: t
				}) => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(I, null), i.a.createElement(T, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : s.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), i.a.createElement(p.i, {
					onClick: t
				}, s.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				w = ({
					postId: e,
					commentId: t,
					sort: n,
					apiError: s
				}) => i.a.createElement("div", {
					className: Object(d.a)(E.a.StateContainer, E.a.ErrorFullPage)
				}, i.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: n,
					apiError: s
				})),
				A = l.a.wrapped(({
					className: e
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(u.a, null)), "LoadingFullPage", E.a),
				S = l.a.div("CommentsPlaceholderContainer", E.a),
				R = l.a.div("CommentPlaceholder", E.a),
				P = l.a.div("Avatar", E.a),
				F = l.a.div("VoteColumn", E.a),
				B = l.a.div("TextColumn", E.a),
				D = l.a.wrapped(f.a, "Upvote", E.a),
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
				V = e => i.a.createElement(S, null, a()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(F, null, i.a.createElement(D, null), i.a.createElement(U, null)), i.a.createElement(B, null, i.a.createElement(W, null), i.a.createElement(H, null)))))
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
				f = n.n(v),
				g = n("./node_modules/lodash/isArray.js"),
				_ = n.n(g),
				x = n("./src/reddit/helpers/isComment.ts"),
				E = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				k = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Vote/index.ts");
			const O = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = N(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(E.b)(e.associated_award) : void 0,
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
							isAdmin: n === k.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: n === k.e.Submitter,
							isMod: n === k.e.Moderator,
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
								rteMode: y.h.RICH_TEXT
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
				M = e => {
					switch (e) {
						case k.e.Admin:
							return m.F.ADMIN;
						case k.e.Moderator:
							return m.F.MODERATOR;
						case k.e.Alumni:
							return m.F.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				N = e => f()((e || []).filter(e => _()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || k.e.None;
			const j = (e, t, n) => {
				const s = {
						[t]: {}
					},
					{
						author: o,
						author_flair_background_color: a,
						author_flair_richtext: r,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: d,
						author_flair_type: l
					} = n;
				if (o && l) {
					if (l === I.f.Richtext) {
						if (!a || !r) return;
						return {
							[t]: {
								[o]: {
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
						if (!c) return s;
						return {
							[t]: {
								[o]: {
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
			var L = n("./src/lib/env/index.ts");
			const w = new Map,
				A = e => e,
				S = new Set;
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
				F = (e, t) => {
					const n = A(t),
						s = w.get(n);
					s && s.socket && (s.isClosePlanned = !0, s.socket.close())
				},
				B = (e, t, n, s) => {
					const o = A(t),
						a = w.get(o);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					w.set(o, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...P
						}
					}), r.socket.addEventListener("message", W.bind(null, s)), r.socket.addEventListener("close", D.bind(null, o, s)), r.socket.addEventListener("error", H.bind(null, o)), window && window.addEventListener("beforeunload", F.bind(null, e, t))
				},
				D = (e, t, n) => {
					const s = w.get(e);
					s && (s.isClosePlanned ? w.delete(e) : U(e, t))
				},
				U = (e, t) => {
					const n = w.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: s,
							connectionAttempts: o,
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: c,
						url: d
					} = n;
					if (w.delete(e), o < r && i.readyState !== WebSocket.OPEN) {
						const e = s * Math.pow(2, o),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							l = {
								...n.retries,
								connectionAttempts: o + 1
							};
						setTimeout(() => {
							B(d, c, l, t)
						}, i), Object(L.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				W = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(L.a)() && console.error(t)
					}
				},
				H = (e, t) => {
					const n = w.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? w.delete(e) : Object(L.a)() && console.error(t)
				};
			var V = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/moderatorPermissions.ts"),
				q = n("./src/reddit/actions/comment/websocket/constants.ts");
			const G = Object(C.a)(q.b),
				J = Object(C.a)(q.c),
				Q = Object(C.a)(q.a),
				X = Object(C.a)(q.d),
				Y = {},
				Z = (e, t, n, s) => async (o, a) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: s,
							uniqueId: o
						} = e;
						S.has(o) ? t() : (S.add(o), setTimeout(() => {
							S.delete(o), B(s, o, {
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
										r = O(t.payload),
										i = a(),
										c = Object(K.a)(i, {
											commentId: n
										}),
										d = !(!n || !Y[n]);
									if (r && !d) {
										const n = j(0, s, t.payload),
											a = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(V.w)(i, {
												commentsPageKey: e
											});
											o(G({
												authorFlair: n,
												comment: r,
												commentsPageKey: e,
												headCommentId: t,
												numComments: a
											}))
										} else o(J({
											authorFlair: n,
											comment: r,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case R.UPDATE_COMMENT: {
									const n = t.payload.name,
										r = a(),
										i = Object(K.a)(r, {
											commentId: n
										}),
										c = O(t.payload);
									if (i && c) {
										const n = j(0, s, t.payload),
											a = t.payload.total_comment_count;
										o(J({
											authorFlair: n,
											comment: c,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case R.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										s = t.payload.score,
										r = a(),
										i = Object(K.a)(r, {
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
										n = a(),
										s = Object(K.a)(n, {
											commentId: e
										});
									s && !s.isDeleted ? o(Q({
										id: e
									})) : Y[e] = R.DELETE_COMMENT;
									break
								}
								case R.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										s = a(),
										r = Object(K.a)(s, {
											commentId: n
										}),
										i = (s.user.account && s.user.account.id) === (r && r.authorId),
										c = !!e && !!Object(z.k)(s, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || i || c ? Y[n] = R.REMOVE_COMMENT : o(Q({
										id: n
									}));
									break
								}
								case R.USER_JOIN: {
									const n = O(t.payload, {
											isSystem: !0
										}),
										s = !0;
									n && o(X({
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
				ae = n("./src/lib/lessComponent.tsx"),
				re = n("./src/lib/makeDraftKey/index.ts"),
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
						a = !0,
						r = !1;
					return t.coinPrice < le.a ? (o = ve.a.silverTierAwardComment, a = !1) : t.coinPrice < le.b ? o = ve.a.goldTierAwardComment : (o = ve.a.platinumTierAwardComment, r = !0), c.a.createElement("div", {
						className: Object(oe.a)(ve.a.awardComment, o)
					}, c.a.createElement("div", {
						className: ve.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(he.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar)
					}), c.a.createElement(be.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar, ve.a.backgroundStar2)
					})), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
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
				Ee = n.n(xe);
			var ke = ({
					commentCount: e,
					isLivestreaming: t,
					onClick: n
				}) => {
					const s = Object(oe.a)(Ee.a.CollapsedComment, {
						[Ee.a.LivestreamingWrapper]: t
					});
					return c.a.createElement("div", {
						className: s,
						onClick: n
					}, te.fbt._("collapsed {collapsed message} (may be sensitive)", [te.fbt._param("collapsed message", te.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [te.fbt._plural(e, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				Ie = n("./src/reddit/actions/comment/authoring.ts"),
				ye = n("./src/reddit/actions/comment/moderation.ts"),
				Te = n("./src/reddit/actions/modal.ts"),
				Oe = n("./src/reddit/actions/reportFlow/index.ts"),
				Me = n("./src/reddit/actions/tooltip.ts"),
				Ne = n("./src/reddit/actions/userBlocks.ts"),
				je = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Le = n("./src/reddit/constants/tracking.ts"),
				we = n("./src/reddit/selectors/telemetry.ts"),
				Ae = n("./src/telemetry/models/Event.ts");
			const Se = e => ({
					screen: Object(we.screen)(e),
					profile: Object(we.profile)(e),
					subreddit: Object(we.subreddit)(e)
				}),
				Re = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(we.post)(n, t),
					source: Ae.b.ChatView,
					subreddit: Object(we.subreddit)(n)
				}),
				Pe = e => t => ({
					source: "chat_post",
					action: Le.c.VIEW,
					noun: "last_message",
					post: Object(we.post)(t, e),
					comment: Object(we.comment)(t, e),
					...Se(t)
				});
			var Fe = n("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Be = n.n(Fe);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = ae.a.button("MenuItem", Be.a),
				We = ae.a.a("MenuItemPermalink", Be.a),
				He = ({
					children: e,
					comment: t,
					onClick: n,
					onHideTooltip: s,
					onShowTooltip: o,
					sendEvent: a,
					tooltipId: r,
					tooltipText: i,
					trackingNoun: d
				}) => c.a.createElement(Ue, {
					id: r,
					onMouseEnter: o.bind(void 0, r),
					onMouseLeave: s.bind(void 0, r),
					onClick: e => {
						n(e), d && (a(((e, t) => n => ({
							source: "comment",
							action: Le.c.CLICK,
							noun: e,
							post: Object(we.post)(n, t),
							comment: Object(we.comment)(n, t),
							...Se(n)
						}))(d, t.id)), a(((e, t) => n => ({
							source: "comment_overflow_menu",
							action: Le.c.CLICK,
							noun: e,
							post: Object(we.post)(n, t),
							comment: Object(we.comment)(n, t),
							...Se(n)
						}))(d, t.id)))
					}
				}, e, c.a.createElement(je.c, {
					tooltipId: r
				}, i)),
				Ve = e => c.a.createElement(He, De({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(We, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var Ke = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ze = n("./src/reddit/components/HumanDate/index.tsx"),
				qe = n("./src/reddit/components/ModModeReports/helpers.ts"),
				Ge = n("./src/reddit/components/ReportFlow/index.tsx"),
				Je = n("./src/reddit/components/ReportFlow/new.tsx"),
				Qe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Xe = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				$e = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				et = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				tt = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				nt = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				st = n("./src/reddit/icons/svgs/Spam/index.tsx"),
				ot = n("./src/reddit/models/PostDraft/index.ts"),
				at = n("./src/reddit/selectors/activeModalId.ts"),
				rt = n("./src/reddit/selectors/blockedRedditors.ts"),
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
			const lt = ae.a.wrapped($e.a, "BlockIcon", Be.a),
				mt = ae.a.wrapped(Ze.a, "FlagIcon", Be.a),
				ut = ae.a.wrapped(Ye.a, "EditIcon", Be.a),
				pt = ae.a.wrapped(Xe.a, "ApproveIcon", Be.a),
				ht = ae.a.wrapped(nt.a, "ReplyIcon", Be.a),
				bt = ae.a.wrapped(tt.a, "RemoveIcon", Be.a),
				Ct = ae.a.wrapped(st.a, "SpamIcon", Be.a),
				vt = ae.a.wrapped(et.a, "ModeratorIcon", Be.a),
				ft = e => (t, {
					comment: n
				}) => `${e}${n.id}`,
				gt = e => `Comment-${e}--Modal--DeleteComment`,
				_t = Object(l.c)({
					currentUser: ct.k,
					isMod: (e, {
						comment: t
					}) => !!Object(z.k)(e, {
						postId: t.postId
					}),
					isAuthorBlocked: (e, {
						comment: t
					}) => Object(rt.d)(e, t.authorId),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var n, s;
						return (null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === t.id
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
					}) => Object(at.a)(e) === gt(t.id),
					reportingRevampEnabled: it.a
				});
			var xt = Object(d.b)(_t, (e, {
					comment: t,
					commentsPageKey: n
				}) => ({
					onReplyClick: () => e(Object(Ie.p)({
						parentCommentId: t.id,
						commentsPageKey: n,
						singleOpen: !0
					})),
					onReportClick: n => {
						n.stopPropagation(), e(Object(Oe.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(Me.i)()),
					onShowTooltip: t => e(Object(Me.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const s = t.media && t.media.rteMode;
						n && e(Object(Ie.d)({
							commentId: t.id,
							draftKey: Object(re.a)(ot.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: s,
							commentsPageKey: n
						}))
					},
					onApproveClick: () => e(Object(ye.a)(t.id)),
					onBlockClick: () => e(Object(Ne.h)(t.author)),
					onUnblockClick: () => e(Object(Ne.g)(t.author)),
					onUpvoteClick: () => e(Object(b.q)(t.id)),
					onDownvoteClick: () => e(Object(b.j)(t.id)),
					onDistinguishClick: n => e(Object(ye.b)(t.id, n)),
					onSpamClick: () => e(Object(ye.e)(t.id, !0)),
					onRemoveClick: () => e(Object(ye.e)(t.id, !1)),
					deleteComment: () => n && e(Object(Ie.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(Te.i)(gt(t.id))),
					toggleDeleteCommentModal: () => e(Object(Te.i)(gt(t.id)))
				}))(Object(Qe.c)(e => {
					const {
						comment: t,
						className: n,
						createTooltipId: s,
						currentUser: o,
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
						onHideTooltip: f,
						onRemoveClick: g,
						onReplyClick: _,
						onReportClick: x,
						onShowTooltip: E,
						onSpamClick: k,
						onUnblockClick: I,
						onDistinguishClick: y,
						reportFlowIsOpen: T,
						replyTooltipId: O,
						reportTooltipId: M,
						approveTooltipId: N,
						blockTooltipId: j,
						removeTooltipId: L,
						distinguishTooltipId: w,
						sendEvent: A,
						spamTooltipId: S,
						toggleDeleteCommentModal: R,
						timestampUpdateTrigger: P
					} = e, F = !!o && o.id === t.authorId, B = Object(qe.b)(t), D = t.isApproved && B, U = !t.bannedBy || t.bannedBy === m.k, W = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: E,
						sendEvent: A
					}, H = t.isMod;
					return c.a.createElement("div", {
						className: n
					}, c.a.createElement("div", {
						className: Object(oe.a)(Be.a.Menu, {
							[Be.a.Livestreaming]: u
						})
					}, (t.bannedBy || B) && p && c.a.createElement(He, dt({
						onClick: h,
						tooltipId: N,
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
					}, e), c.a.createElement(ht, null)), p && F && c.a.createElement(He, dt({
						onClick: () => y(H ? m.F.NONE : m.F.MODERATOR),
						tooltipId: w,
						tooltipText: H ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(vt, null)), p && U && c.a.createElement(He, dt({
						onClick: k,
						tooltipId: S,
						tooltipText: te.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Ct, null)), !F && c.a.createElement(He, dt({
						onClick: x,
						tooltipId: M,
						tooltipText: te.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(mt, null)), T && (() => e.reportingRevampEnabled ? c.a.createElement(Je.a, {
						withOverlay: !0,
						overlayCustomStyles: Ge.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(Ge.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: Ge.b,
						postId: t.postId
					}))(), F && !u && c.a.createElement(He, dt({
						onClick: v,
						tooltipId: i,
						tooltipText: te.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, W), c.a.createElement(ut, null)), p && U ? c.a.createElement(He, dt({
						onClick: g,
						tooltipId: L,
						tooltipText: t.bannedBy === m.k ? te.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : te.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, W), c.a.createElement(bt, null)) : F && c.a.createElement(He, dt({
						onClick: C,
						tooltipId: r,
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
						onConfirm: a,
						toggleModal: R,
						withOverlay: !0
					}), !!o && !F && c.a.createElement(He, dt({
						onClick: () => d ? I() : b(),
						tooltipId: j,
						tooltipText: d ? te.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : te.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, W), c.a.createElement(lt, null))), !u && c.a.createElement(Ve, dt({}, e, {
						tooltipId: s,
						tooltipText: c.a.createElement(ze.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(ze.d, {
						seconds: t.created
					})))
				})),
				Et = n("./src/chat/helpers/dom.ts"),
				kt = n("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				It = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				yt = n.n(It);
			const Tt = {},
				Ot = ae.a.wrapped(_e.a, "ChatIcon", yt.a),
				Mt = ae.a.span("ReplyAuthor", yt.a),
				Nt = ae.a.div("ReplyWrapper", yt.a);
			var jt = Object(d.b)(() => Object(l.c)({
					comment: K.a
				}))(({
					comment: e,
					commentId: t,
					isLivestreaming: n,
					onReplyClick: s
				}) => e ? e.isDeleted ? c.a.createElement(Nt, null, c.a.createElement("span", {
					className: Object(oe.a)(yt.a.ReplyLinkBubble, yt.a.delete, {
						[yt.a.Livestreaming]: n
					})
				}, c.a.createElement(on, null))) : c.a.createElement(Nt, null, c.a.createElement("a", {
					className: Object(oe.a)(yt.a.ReplyLinkBubble, {
						[yt.a.Livestreaming]: n
					}),
					href: e.permalink,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(Et.a)(() => s(e.id))
				}, c.a.createElement(Ot, {
					userId: e.authorId,
					icon: e.profileImage
				}), c.a.createElement(Mt, null, e.author), c.a.createElement(kt.a, {
					className: yt.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(me.a)(e),
					rtJsonElementProps: Tt
				}))) : null),
				Lt = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				wt = n.n(Lt);
			const At = Object(ie.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var St = e => {
					const {
						comment: t
					} = e;
					return void 0 === At(e) ? null : c.a.createElement(ue.a, {
						className: wt.a.SystemMessageText,
						content: Object(me.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: At(e),
						useExplicitTextColor: !0
					})
				},
				Rt = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ft = n("./src/reddit/controls/ErrorText/index.tsx"),
				Bt = n("./src/reddit/constants/experiments.ts"),
				Dt = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ut = e => Object(Dt.c)(e, {
				experimentName: Bt.V,
				experimentEligibilitySelector: Dt.a
			}) === Bt.S.Enabled;
			var Wt = n("./src/reddit/selectors/communityAwards.ts");
			const Ht = (e, {
				commentId: t
			}) => {
				const n = Object(K.a)(e, {
					commentId: t
				});
				if (n && n.associatedAwardId) return Object(Wt.a)(e, n.associatedAwardId)
			};
			var Vt = n("./src/reddit/selectors/gold/awardIcon.ts"),
				Kt = n("./src/reddit/selectors/poll/index.ts"),
				zt = n("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				qt = n.n(zt);
			const Gt = 250,
				Jt = 10,
				Qt = ae.a.wrapped(Ft.b, "ErrorText", qt.a),
				Xt = ae.a.wrapped(ce.a, "TopMeta", qt.a),
				Yt = ae.a.span("DeleteText", qt.a),
				Zt = ae.a.wrapped(jt, "Reply", qt.a),
				$t = Object(Pt.u)(),
				en = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, {
						commentId: t
					}) => Ht(e, {
						commentId: t
					}),
					awardIconUrl: (e, {
						commentId: t
					}) => {
						const n = Ht(e, {
							commentId: t
						});
						if (n) return Object(Vt.a)(e, {
							award: n,
							minSize: 64,
							postOrCommentId: t
						})
					},
					comment: K.a,
					errorMsgs: V.G,
					flair: V.e,
					isActive: (e, {
						commentId: t
					}) => Boolean(e.shortcuts.activeCommentId && t === e.shortcuts.activeCommentId),
					isEditing: V.A,
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Gt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let n = Gt;
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
						commentsPageKey: o,
						errorMsgs: a,
						flair: r,
						isActive: i,
						isEditing: d,
						isLivestreaming: l,
						postId: m,
						prediction: u,
						renderedInOverlay: p,
						sendEvent: h,
						targetComment: b,
						timestampUpdateTrigger: C,
						addToRefList: v,
						onReplyClick: f,
						shouldRenderSystemMessages: g
					} = this.props, {
						isCollapsed: _,
						isExpanded: x,
						isTruncated: E
					} = this.state;
					if (!s) return null;
					i && se()(() => this.elemRef.current && this.elemRef.current.focus()), se()(() => this.elemRef && this.elemRef.current && v && v(this.elemRef));
					const k = s.isSystem,
						I = !d && !s.isDeleted && !k,
						y = !!e,
						T = Object(oe.a)({
							[qt.a.SystemMessageWrapper]: k && !l && g,
							[qt.a.CommentWrapper]: !l && !k,
							[qt.a.CommentExpanded]: x,
							[qt.a.CommentTruncated]: E,
							[qt.a.HighlightTarget]: b,
							[qt.a.LivestreamingCommentWrapper]: l
						});
					return _ ? c.a.createElement(ke, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: b ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: T
					}, d && c.a.createElement(Rt.a, {
						key: "chatCommentsForm",
						isLivestreaming: l,
						postId: m,
						sendEvent: h,
						draftKey: Object(re.a)(ot.c.edit, s.id),
						commentsPageKey: o,
						isEditing: d,
						comment: s
					}), I && c.a.createElement(c.a.Fragment, null, c.a.createElement(Xt, {
						childrenInfo: n,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: s,
						commentsPageKey: o,
						compact: !0,
						flair: r,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: l,
						renderedInOverlay: p
					}, c.a.createElement(_e.a, {
						className: Object(oe.a)(qt.a.ChatIcon, {
							[qt.a.Livestreaming]: l
						}),
						isLivestreaming: l,
						icon: s.profileImage,
						userId: s.authorId,
						isNSFW: s.profileOver18 || s.authorIconIsNSFW
					})), s.parentId && c.a.createElement(Zt, {
						commentId: s.parentId,
						onReplyClick: f,
						isLivestreaming: l
					}), l && c.a.createElement("span", {
						className: qt.a.livestreamingTimeStamp
					}, c.a.createElement(ze.d, {
						seconds: s.created
					})), y && e && l ? c.a.createElement(ge, {
						award: e,
						comment: s,
						iconUrl: t
					}) : u ? c.a.createElement(de.a, {
						comment: s,
						prediction: u
					}) : [c.a.createElement(ue.a, {
						className: Object(oe.a)(qt.a.RichTextJson, {
							[qt.a.Livestreaming]: l
						}),
						content: Object(me.a)(s),
						key: `rich-text-${s.id}`,
						rtJsonElementProps: tn(this.props),
						useExplicitTextColor: l
					}), c.a.createElement(xt, {
						key: "Menu",
						className: Object(oe.a)(qt.a.Menu, {
							[qt.a.Livestreaming]: l
						}),
						comment: s,
						commentsPageKey: o,
						isLivestreaming: l,
						timestampUpdateTrigger: C
					})]), s.isDeleted && c.a.createElement(on, null), I && a && a.map((e, t) => c.a.createElement(Qt, {
						key: `${t}-${e}`
					}, e)), !d && E && c.a.createElement("button", {
						className: Object(oe.a)(qt.a.CommentReadMoreButton, {
							[qt.a.Livestreaming]: l
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), k && !l && g && c.a.createElement(St, {
						comment: s
					}))
				}
			}
			const sn = $t(en(nn)),
				on = ({
					isLivestreaming: e
				}) => c.a.createElement(c.a.Fragment, null, c.a.createElement(_e.a, {
					className: Object(oe.a)(qt.a.ChatIcon, {
						[qt.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), c.a.createElement(Yt, null, te.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var an = sn,
				rn = n("./node_modules/lodash/isEqual.js"),
				cn = n.n(rn),
				dn = n("./src/reddit/controls/Button/index.tsx"),
				ln = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				mn = n.n(ln);
			const un = ae.a.div("ButtonWrapper", mn.a),
				pn = ({
					top: e
				}) => c.a.createElement("span", {
					className: Object(oe.a)(mn.a.ChunkPlaceholder, {
						[mn.a.top]: e
					})
				}, te.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				hn = ({
					className: e,
					isLivestreaming: t,
					isLoading: n,
					setRef: s,
					...o
				}) => c.a.createElement("div", {
					ref: s,
					className: Object(oe.a)(e, {
						[mn.a.ScrollerWrapper]: !t,
						[mn.a.LivestreamingWrapper]: t,
						[mn.a.loading]: n
					})
				}, !n && o.isPrevLoading && !t && c.a.createElement(pn, {
					top: !0
				}), o.children, !n && o.isNextLoading && !t && c.a.createElement(pn, null));
			class bn extends c.a.Component {
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
					const t = e.children.length !== this.props.children.length || !cn()(f()(e.children), f()(this.props.children)) || !cn()(r()(e.children), r()(this.props.children));
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
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(un, null, c.a.createElement(dn.i, {
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
				gn = (e, t, {
					authorId: n,
					id: s
				}) => e.includes(n) && !t.includes(s),
				_n = Object(l.c)({
					blockedRedditors: rt.a,
					blockedRedditorsPending: rt.b,
					chatCommentLinks: V.g,
					isPending: V.d,
					liveCommentsWebsocket: vn.G,
					moreCommentsLink: V.F
				}),
				xn = Object(d.b)(_n, (e, t) => ({
					onLiveCommentsSubscribe: (n, s, o) => e(Z(n, s, o, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						F(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(b.l)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.t.CHAT
					}, m.t.CHAT))
				}));
			class En extends c.a.Component {
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
						postId: a
					} = this.props;
					n && (e && s(), o(t, n, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = n)
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
						commentsPageKey: a,
						isLoading: r,
						isPending: i,
						postId: c,
						draftKey: d
					} = this.props, {
						expandedCommentIds: l,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== d || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== s || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks.length !== o.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: n,
						commentId: s,
						commentsPageKey: o,
						liveCommentsWebsocket: a,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && a && (i(o, a, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = a)), e.blockedRedditors.ids !== t.ids) {
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
					} = this.props, n = r()(e);
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
						emptyStateClassName: a,
						isLivestreaming: r,
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
						className: a,
						isChat: !0
					}) : c.a.createElement(Cn, {
						className: n,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => gn(e.ids, p, t) ? c.a.createElement(ke, {
						commentCount: 1,
						isLivestreaming: r,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(an, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: o,
						isLivestreaming: r,
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
			t.default = xn(Object(Qe.c)(En))
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "_3kd-dlN-SayusCxdP2netc",
				header: "_2qYkItLcJFJyORCGH9k8xc",
				powerupsLogo: "_3tAkLAAQVM-WSVSzy-_cEa",
				headerText: "_1FyMArbFbR91zDup_aXAUI",
				headerDelimiter: "_1O5D69EOlVhvj5bzxwHE38",
				achievements: "_2184liSTNqbtEvYN_pvrvZ",
				achievementItem: "DpiFfz95qctN0--U4vopM",
				achievementImgWrapper: "EP4eFqOgkm9TaTOXYXyIA",
				achievementImg: "_32rRB3c7q17wOs_Fz7Bdk",
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix",
				footer: "_18M7nTbpMAhYLhlWT-5tla",
				scrollGradient: "_2nRTIGjTOu0IHUU0XJ6h9n",
				gradientVisible: "_3IBEob3IfIdXcuzrEz6Kg-",
				ctaButton: "D7NSPqulzWmB1gE8x95iQ"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/gold/powerups.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/userFlair.ts"),
				l = n("./src/reddit/hooks/useScrollGradient.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				C = n.n(b);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const b = Object(a.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: n
					})),
					f = Object(a.e)(e => Object(h.T)(e, {
						subredditId: t
					})),
					g = Object(a.d)(),
					_ = Object(m.a)(),
					{
						container: x,
						isScrollGradientVisible: E,
						calculateGradientVisibility: k
					} = Object(l.a)(!1);
				Object(s.useEffect)(() => {
					k()
				}, [k]);
				return o.a.createElement("div", {
					className: Object(r.a)(C.a.container, e)
				}, o.a.createElement("div", {
					className: C.a.header
				}, o.a.createElement(u.a, {
					className: C.a.powerupsLogo
				}), v._("{r/community} {=achievements}", [v._param("r/community", f.displayText), v._param("=achievements", o.a.createElement("span", {
					className: C.a.headerText
				}, v._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), o.a.createElement("div", {
					className: C.a.headerDelimiter
				}), o.a.createElement("div", {
					className: C.a.achievements,
					onScroll: k,
					ref: x
				}, b.map(e => !e.isLocked && o.a.createElement("div", {
					className: C.a.achievementItem,
					key: e.type
				}, o.a.createElement("div", {
					className: C.a.achievementImgWrapper
				}, o.a.createElement("img", {
					className: C.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), o.a.createElement("div", {
					className: C.a.achievementName
				}, o.a.createElement("span", null, e.name))))), o.a.createElement("div", {
					className: C.a.footer
				}, o.a.createElement("div", {
					className: Object(r.a)(C.a.scrollGradient, {
						[C.a.gradientVisible]: E
					})
				}), o.a.createElement(c.q, {
					priority: c.b.Secondary,
					className: C.a.ctaButton,
					onClick: () => {
						_(Object(d.d)()), g(Object(i.e)())
					},
					isFullWidth: !0
				}, v._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var g = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				_ = n.n(g);
			const x = ({
					className: e,
					subredditId: t,
					userId: n,
					showPopupOnHover: i,
					onHover: c
				}) => {
					var d;
					const l = Object(a.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: n
						})),
						m = Object(a.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: n
						})),
						u = null === (d = Object(a.e)(e => Object(p.c)(e, {
							subredditId: t,
							userId: n
						}))) || void 0 === d ? void 0 : d.achievementTypes,
						[h, b] = Object(s.useState)(!1);
					if (!(!!l || !!m) || !u) return null;
					const C = (null == m ? void 0 : m.type) === (null == l ? void 0 : l.type) ? null : m,
						v = 1 + (C ? 1 : 0),
						g = (null == u ? void 0 : u.length) - v;
					return o.a.createElement("span", {
						className: Object(r.a)(_.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							i && (b(!0), null == c || c())
						},
						onMouseLeave: () => {
							b(!1)
						}
					}, o.a.createElement(E, {
						achievement: C
					}), o.a.createElement(E, {
						achievement: l
					}), !!g && o.a.createElement("span", {
						className: _.a.hiddenAchievementsCount
					}, "+", g), i && h && o.a.createElement(f, {
						className: _.a.hoverPopup,
						subredditId: t,
						userId: n
					}))
				},
				E = ({
					achievement: e
				}) => e ? o.a.createElement("img", {
					alt: e.name,
					className: _.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = r.a.span("metaText", d.a),
				m = e => a.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const r = Object(i.b)(t),
						c = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						d = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, o, d)
				},
				p = e => a.a.createElement(l, null, s.fbt._({
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
				return a
			})), n.d(t, "d", (function() {
				return r
			}));
			const s = 500,
				o = 1800,
				a = (e, t = !1) => t ? e.coinPrice < s ? 0 : e.coinPrice < o ? 50 : 100 : 2048,
				r = (e, t, n = !1) => {
					const s = a(t, n);
					return e.slice(0, s)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");

			function a({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case o.H.AUTHORIZATION_ERROR:
						return t ? s.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : s.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case o.H.VALIDATION_ERROR:
						return s.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case o.H.NOT_FOUND_ERROR:
						return s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case o.H.SERVER_ERROR:
						return s.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case o.H.LIKELY_UBLOCK_ERROR:
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
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const a = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				r = s.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
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
				c = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e) {
				const [t, n] = Object(s.useState)(e), o = Object(s.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							s = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						n(!s)
					}
				}
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
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
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), o.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
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
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.edit, e.className),
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
				a = n("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? a.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), o.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), o.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), o.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
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
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a(e) {
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a(e) {
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function a(e) {
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
		"./src/reddit/selectors/poll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./src/reddit/models/Comment/index.ts"),
				o = n("./src/reddit/models/Prediction/index.ts"),
				a = n("./src/reddit/selectors/commentSelector.ts");
			const r = (e, {
					postId: t
				}) => e.posts.metaMap[t],
				i = (e, {
					postId: t
				}) => {
					const n = r(e, {
						postId: t
					});
					if (n) return e.polls.models[n]
				},
				c = (e, {
					postId: t
				}) => {
					const n = i(e, {
						postId: t
					});
					return n && Object(o.c)(n) ? n : null
				},
				d = (e, {
					commentId: t
				}) => {
					const n = Object(a.a)(e, {
						commentId: t
					});
					return n && n.commentType === s.b.Prediction && c(e, n) || null
				},
				l = (e, {
					postId: t
				}) => {
					const n = r(e, {
						postId: t
					});
					if (n) return e.polls.rewards[n]
				},
				m = (e, {
					postId: t
				}) => {
					const n = r(e, {
						postId: t
					});
					if (n) return e.polls.results.byVotingPower[n]
				},
				u = (e, {
					postId: t
				}) => {
					const n = r(e, {
						postId: t
					});
					if (n) return e.polls.results.byVoters[n]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.5a93094d783e426854d3.js.map