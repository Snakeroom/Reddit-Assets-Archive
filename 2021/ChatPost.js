// https://www.redditstatic.com/desktop2x/ChatPost.caf866adde132ee4be76.js
// Retrieved at 9/15/2021, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				o = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > r) return [];
				var s = i,
					d = c(e, i);
				t = o(t), e -= i;
				for (var l = n(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let n, o = !1;
				const a = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), o || (n = window.setTimeout(a, t))
				};
				return n = window.setTimeout(a, t), () => {
					o = !0, window.clearTimeout(n)
				}
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, s) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, s) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, s) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, s) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, s) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, s) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/AwardBadges/index.tsx"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = s.n(u);
			const h = e => {
				const {
					className: t,
					comment: s,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: d,
					style: l,
					collapsed: u
				} = e;
				return u && o ? a.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, n.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : a.a.createElement(m.a, {
					className: Object(c.a)(p.a.commentAuthorLink, t),
					author: s.author,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: d,
					style: l
				}, s.author)
			};
			var b = s("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"),
				v = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				C = s("./src/reddit/components/Flair/index.tsx"),
				f = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = s("./src/reddit/controls/MetaData/index.tsx"),
				x = s("./src/reddit/helpers/flair.ts"),
				E = s("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				k = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/models/Comment/index.ts"),
				I = s("./src/reddit/selectors/gold/powerups/index.ts"),
				T = s("./src/lib/constants/index.ts"),
				O = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				j = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = s.n(M);
			const w = ({
				authorClassName: e,
				className: t,
				comment: s,
				isLivestreaming: n,
				isStrong: o,
				renderedInOverlay: r,
				collapsed: i
			}) => a.a.createElement(j.b, {
				className: Object(c.a)(N.a.authorHoverCard, t),
				postOrComment: s,
				tooltipType: r ? g.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(y.g)(s),
				collapsed: i
			}, a.a.createElement(O.b, {
				ignore: Object(y.f)(s) || !!s.distinguishType && s.distinguishType !== T.F.NONE,
				subredditId: s.subredditId,
				userId: s.authorId
			}, a.a.createElement(h, {
				className: e,
				comment: s,
				isLivestreaming: n,
				isStrong: o,
				isCommentAuthorBlocked: Object(y.g)(s),
				isAuthorDeleted: Object(y.f)(s),
				collapsed: i
			})));
			var L = s("./src/config.ts"),
				S = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/components/InfoTextTooltip/index.tsx");
			const A = (e, t, s = !1) => `${e}${t}${s?"inOverlay":""}`;
			var P = s("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				B = s.n(P);
			const F = ({
				className: e,
				commentId: t,
				renderedInOverlay: s
			}) => {
				const o = Object(r.d)(),
					i = () => o(Object(S.h)({
						tooltipId: d
					})),
					d = A("CommentTopMeta--cakeday--", t, s),
					l = n.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
					className: Object(c.a)(B.a.cakedayIcon, e),
					src: `${L.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: d,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), a.a.createElement(R.c, {
					tooltipId: d,
					text: l
				}))
			};
			var D = s("./src/lib/addQueryParams/index.ts"),
				U = s("./src/lib/opener/index.ts"),
				W = s("./src/reddit/actions/comment/index.ts"),
				H = s("./src/reddit/components/HumanDate/index.tsx");
			const K = e => {
					const {
						className: t,
						comment: s,
						compact: n,
						renderedInOverlay: o
					} = e, i = Object(r.d)(), c = A("CommentTopMeta--Created--", s.id, o), d = () => i(Object(S.h)({
						tooltipId: c
					}));
					return a.a.createElement("a", {
						className: t,
						href: Object(D.a)(s.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							V(i, s.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: U.a
					}, a.a.createElement(H.d, {
						seconds: s.created,
						noPostfix: n,
						shortenedUnit: n
					}), a.a.createElement(R.c, {
						tooltipId: c
					}, a.a.createElement(H.b, {
						seconds: s.created
					})))
				},
				V = (e, t) => {
					window.addEventListener("focus", (function s() {
						q(e, t, s)
					}))
				},
				q = (e, t, s) => {
					window.removeEventListener("focus", s), e(Object(W.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var z = s("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				G = s.n(z);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Q = () => a.a.createElement(_.a, {
				className: G.a.crowdControlText
			}, J._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Y = s("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				X = s.n(Y);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				compact: e,
				editedAt: t
			}) => a.a.createElement(_.a, {
				className: X.a.editedText
			}, Z._("edited {time}", [Z._param("time", a.a.createElement(H.d, {
				seconds: t,
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ee = s("./src/reddit/helpers/isRemoved.ts"),
				te = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				ne = s("./src/reddit/icons/fonts/index.tsx"),
				oe = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				re = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				ie = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				de = s("./src/reddit/models/AutomatedReporting/index.ts"),
				le = s("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = s.n(le);
			const ue = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const i = Object(r.d)(),
					d = e => () => i(Object(S.f)({
						tooltipId: e
					})),
					l = () => i(Object(S.i)()),
					m = t => A(t, e.id, o),
					u = m("CommentTopMeta--Automod--"),
					p = m("CommentTopMeta--Approve--"),
					h = m("CommentTopMeta--Remove--"),
					b = m("CommentTopMeta--Report--"),
					v = m("CommentTopMeta--Spam--"),
					C = e.bannedBy && Object(de.b)(e.bannedBy),
					f = d(h);
				return a.a.createElement(a.a.Fragment, null, (e.approvedBy || e.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(oe.a, {
					className: me.a.approveIcon,
					desc: Object(te.a)(e),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: l,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: p,
					text: Object(te.a)(e)
				})), Object(ee.a)(e) && !C && a.a.createElement(a.a.Fragment, null, a.a.createElement(re.a, {
					className: me.a.removeIcon,
					desc: Object(te.c)(e),
					id: h,
					onMouseEnter: f,
					onMouseLeave: l,
					isFilled: !0
				}), a.a.createElement(R.c, {
					tooltipId: h,
					text: Object(te.c)(e)
				})), Object(ee.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && a.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, n.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ee.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !C && a.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: f,
					onMouseLeave: l
				}, n.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && a.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: n.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(te.e)(e),
					id: v,
					onMouseEnter: d(v),
					onMouseLeave: l,
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(R.c, {
					tooltipId: v,
					text: Object(te.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && a.a.createElement(ne.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(me.a.automoderatorIcon, {
						[me.a.removed]: !!e.bannedBy
					}),
					"aria-label": te.b,
					id: u,
					key: u,
					onMouseEnter: d(u),
					onMouseLeave: l
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && a.a.createElement(R.c, {
					tooltipId: u,
					text: te.b
				}), Object(se.a)(e) && a.a.createElement(ie.a, {
					className: me.a.reportIcon,
					desc: Object(te.d)(e.numReports),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: l,
					isFilled: !0
				}), Object(se.a)(e) && a.a.createElement(R.c, {
					tooltipId: b,
					text: Object(te.d)(e.numReports)
				}), C && a.a.createElement("a", {
					className: me.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", C)], {
					hk: "3C408F"
				})))
			};
			var pe, he = s("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var be = s("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ve = s.n(be);
			const Ce = {
					[pe.Admin]: {
						color: he.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => n.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: he.c,
						label: n.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: he.a,
						label: n.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => n.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: he.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => n.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: he.a,
						label: n.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => n.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				fe = e => {
					const t = Object(r.d)(),
						s = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === T.F.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!s) return null;
					if (s === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: n,
						color: o,
						label: i,
						tooltipTemplate: d
					} = Ce[s], l = A(n, e.comment.id, e.renderedInOverlay), m = d(e), u = () => t(Object(S.h)({
						tooltipId: l
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(c.a)(ve.a.role, e.className),
						style: {
							color: o
						},
						id: l,
						onMouseEnter: u,
						onMouseLeave: u
					}, a.a.createElement("span", null, i), s === pe.Mod && a.a.createElement(ge, null)), a.a.createElement(R.c, {
						tooltipId: l,
						text: m
					}))
				},
				ge = () => a.a.createElement("img", {
					alt: "Moderator Achievement",
					className: ve.a.modAchievement,
					src: `${L.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var _e = s("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				xe = s.n(_e);
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ke = () => a.a.createElement(_.a, {
				className: xe.a.stickiedText
			}, Ee._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ye = s("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Ie = s.n(ye);
			const Te = e => {
				const {
					className: t,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: d,
					ignoreLock: m,
					isLivestreaming: u,
					renderedInOverlay: p,
					subredditDisplayText: h,
					renderContractorBadge: T
				} = e, O = Object(k.a)(), j = i.subredditId, M = Object(r.e)(e => Object(I.g)(e, {
					subredditId: j
				}));
				if (i.isDeleted) return a.a.createElement("div", {
					className: Object(c.a)(Ie.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: Ie.a.authorLine
				}, a.a.createElement("span", {
					className: Ie.a.metaText
				}, i.deletedBy === y.c.User ? n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : n.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(_.c, {
					className: Ie.a.separator
				}), a.a.createElement(K, {
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
				}, !Object(y.f)(i) && a.a.createElement(v.b, {
					className: Ie.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), a.a.createElement("div", {
					className: Ie.a.baselineItem
				}, a.a.createElement(w, {
					authorClassName: Ie.a.author,
					comment: i,
					isLivestreaming: u,
					renderedInOverlay: p,
					collapsed: s
				})), o && a.a.createElement(Q, null), a.a.createElement(fe, {
					className: Ie.a.role,
					comment: i,
					subredditDisplayText: h,
					renderContractorBadge: T,
					renderedInOverlay: p
				}), i.isAuthorCakeday ? a.a.createElement(F, {
					className: Ie.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: p
				}) : !Object(y.f)(i) && M && a.a.createElement(b.a, {
					className: Ie.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						O(Object(E.b)(i.id, i.subredditId, i.authorId))
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
				}), a.a.createElement(K, {
					key: "Created",
					className: Ie.a.metaText,
					comment: i,
					compact: !0,
					renderedInOverlay: p
				}), i.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: Ie.a.separator
				}), a.a.createElement(ke, null)), i.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: Ie.a.separator
				}), a.a.createElement($, {
					compact: !0,
					editedAt: i.editedAt
				})), a.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: p
				}), a.a.createElement(l.a, {
					thing: i,
					tooltipType: p ? g.c.Lightbox : void 0
				})), d && !Object(x.o)(d) && a.a.createElement("span", {
					className: Ie.a.userFlairLine
				}, a.a.createElement(C.b, {
					className: Ie.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Oe = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = s("./src/reddit/selectors/economics.ts"),
				Me = s("./src/reddit/models/Flair/index.ts"),
				Ne = s("./src/reddit/selectors/subreddit.ts"),
				we = s("./src/reddit/selectors/userFlair.ts"),
				Le = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Se = s.n(Le);

			function Re() {
				return (Re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = d.a.wrapped(C.b, "RightPositionedAuthorFlair", Se.a),
				Pe = d.a.span("DeletedText", Se.a),
				Be = d.a.wrapped(_.a, "MetaSeparator", Se.a),
				Fe = Object(r.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(je.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const s = Object(Ne.F)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(we.e)(e, {
						subredditId: t.subredditId
					})
				}));
			t.a = Fe(e => {
				const {
					children: t,
					className: s,
					collapsed: n,
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
					renderedInOverlay: I,
					subredditDisplayText: T,
					userHasNft: O
				} = e, j = a.a.createElement(a.a.Fragment, null, a.a.createElement(Oe.b, {
					commentId: r.id
				}), a.a.createElement(Oe.a, {
					commentId: r.id,
					commentsPageKey: i
				}));
				if (b) return a.a.createElement(a.a.Fragment, null, a.a.createElement(Te, {
					className: Object(c.a)(s, {
						[Se.a.collapsed]: n
					}),
					collapsedBecauseCrowdControl: o,
					comment: r,
					flair: m || null,
					ignoreLock: E,
					isLivestreaming: h,
					renderedInOverlay: I,
					subredditDisplayText: T,
					renderContractorBadge: !!k,
					collapsed: n
				}), j);
				if (r.isDeleted) return a.a.createElement(De, Re({}, e, {
					className: Object(c.a)(s, Se.a.container, {
						[Se.a.collapsed]: n
					})
				}));
				if (n) return a.a.createElement(Ue, Re({}, e, {
					className: Object(c.a)(s, Se.a.container, {
						[Se.a.collapsed]: n
					})
				}));
				const M = !x && u === Me.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(s, Se.a.container, {
						[Se.a.collapsed]: n,
						[Se.a.hasBadges]: p,
						[Se.a.liveStreaming]: h
					}),
					"data-testid": "comment-top-meta"
				}, m && M && a.a.createElement(C.b, {
					flair: m,
					forceSmallEmojis: d
				}), !Object(y.f)(r) && a.a.createElement(v.b, {
					className: Se.a.userBadges,
					showAddCustom: !0,
					subredditId: r.subredditId,
					userId: r.authorId,
					uniqueIdentifier: r.id
				}), t && t, a.a.createElement(w, {
					authorClassName: O ? Se.a.NftAuthor : void 0,
					comment: r,
					isLivestreaming: h,
					isStrong: !!d,
					renderedInOverlay: I,
					collapsed: n
				}), o && a.a.createElement(Q, null), o && a.a.createElement(_.c, {
					className: Se.a.metaText,
					key: "crowdControlSeparator"
				}), m && !M && a.a.createElement(Ae, {
					flair: m,
					forceSmallEmojis: d
				}), !d && a.a.createElement(f.a, {
					className: Se.a.publicPoints,
					contentId: r.id,
					metaSeparator: a.a.createElement(_.c, {
						className: Se.a.metaText
					}),
					subredditId: r.subredditId,
					userId: r.authorId,
					username: r.author
				}), j, a.a.createElement(fe, {
					className: Se.a.authorRole,
					comment: r,
					subredditDisplayText: T,
					renderContractorBadge: !!k,
					renderedInOverlay: I
				}), !d && a.a.createElement(a.a.Fragment, null, !r.isDeleted && !b && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.b, {
					className: Se.a.metaText,
					isScoreHidden: r.isScoreHidden,
					score: r.score
				}), a.a.createElement(_.c, {
					className: Se.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(K, {
					key: "Created",
					className: Se.a.MetaLink,
					comment: r,
					renderedInOverlay: I
				}), r.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: Se.a.separator
				}), a.a.createElement(ke, null)), r.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(_.c, {
					className: Se.a.separator
				}), a.a.createElement($, {
					editedAt: r.editedAt
				}))), a.a.createElement(ue, {
					comment: r,
					ignoreLock: E,
					renderedInOverlay: I
				}), a.a.createElement(l.a, {
					thing: r,
					tooltipType: I ? g.c.Lightbox : void 0
				}))
			});
			const De = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: o,
						comment: r,
						renderedInOverlay: i
					} = e;
					return a.a.createElement("div", {
						className: o
					}, a.a.createElement(Pe, null, r.deletedBy === y.c.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(K, {
						key: "Created",
						className: Se.a.MetaLink,
						comment: r,
						renderedInOverlay: i
					}), s && We({
						childrenInfo: t
					}))
				},
				Ue = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: n,
						renderedInOverlay: o,
						collapsed: r
					} = e;
					return a.a.createElement("div", {
						className: s
					}, a.a.createElement("div", null, a.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(y.f)(t),
						collapsed: r
					})), a.a.createElement(_.b, {
						className: Se.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(_.c, {
						className: Se.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(K, {
						key: "Created",
						className: Se.a.MetaLink,
						comment: t,
						renderedInOverlay: o
					}), We({
						childrenInfo: n
					}))
				},
				We = e => {
					const {
						hasContinueThread: t,
						numChildren: s
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Be, {
						className: Se.a.metaText
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
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, s) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
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
				return j
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "a", (function() {
				return K
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				a = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				C = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				x = s("./src/reddit/components/Comments/States/index.m.less"),
				E = s.n(x);
			const k = l.a.wrapped(g.a, "CommentsIcon", E.a),
				y = l.a.wrapped(_.a, "SnooFacepalm", E.a),
				I = l.a.p("EmptyTitle", E.a),
				T = l.a.p("ErrorTitle", E.a),
				O = l.a.p("EmptyText", E.a),
				j = ({
					className: e,
					isChat: t
				}) => i.a.createElement("div", {
					className: Object(d.a)(E.a.StateContainer, e)
				}, i.a.createElement(k, null), i.a.createElement(I, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), i.a.createElement(O, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				M = () => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(k, null), i.a.createElement(I, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = ({
					link: e
				}) => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(k, null), i.a.createElement(I, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), i.a.createElement(p.k, {
					to: Object(b.b)(e)
				}, n.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				w = Object(c.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: n
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: n
					}, n))
				}))(({
					apiError: e,
					onClick: t
				}) => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(y, null), i.a.createElement(T, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), i.a.createElement(p.i, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				L = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				}) => i.a.createElement("div", {
					className: Object(d.a)(E.a.StateContainer, E.a.ErrorFullPage)
				}, i.a.createElement(w, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				})),
				S = l.a.wrapped(({
					className: e
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(u.a, null)), "LoadingFullPage", E.a),
				R = l.a.div("CommentsPlaceholderContainer", E.a),
				A = l.a.div("CommentPlaceholder", E.a),
				P = l.a.div("Avatar", E.a),
				B = l.a.div("VoteColumn", E.a),
				F = l.a.div("TextColumn", E.a),
				D = l.a.wrapped(f.a, "Upvote", E.a),
				U = l.a.wrapped(C.a, "Downvote", E.a),
				W = () => i.a.createElement("div", {
					className: Object(d.a)(E.a.TopMetaPlaceholder, Object(v.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
					className: Object(d.a)(E.a.CommentBodyPlaceholder, Object(v.a)({
						isLoading: !0
					}))
				}),
				K = e => i.a.createElement(R, null, a()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(v.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(D, null), i.a.createElement(U, null)), i.a.createElement(F, null, i.a.createElement(W, null), i.a.createElement(H, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, s) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, s) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return Cs
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				a = s("./node_modules/lodash/last.js"),
				r = s.n(a),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/setInterval/index.ts"),
				p = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/actions/blockedRedditors.ts"),
				b = s("./src/reddit/actions/comment/index.ts"),
				v = s("./src/lib/makeActionCreator/index.ts"),
				C = s("./node_modules/lodash/first.js"),
				f = s.n(C),
				g = s("./node_modules/lodash/isArray.js"),
				_ = s.n(g),
				x = s("./src/reddit/helpers/isComment.ts"),
				E = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				k = s("./src/reddit/models/Comment/index.ts"),
				y = s("./src/reddit/models/Flair/index.ts"),
				I = s("./src/reddit/models/PostCreationForm/index.ts"),
				T = s("./src/reddit/models/Vote/index.ts");
			const O = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const s = M(e.attribs);
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
							distinguishType: j(s),
							id: e.name,
							isAdmin: s === k.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: s === k.e.Submitter,
							isMod: s === k.e.Moderator,
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
								rteMode: I.h.RICH_TEXT
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
				M = e => f()((e || []).filter(e => _()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || k.e.None;
			const N = (e, t, s) => {
				const n = {
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
					} = s;
				if (o && l) {
					if (l === y.f.Richtext) {
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
					if (l === y.f.Text) {
						if (!c) return n;
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
			var w = s("./src/lib/env/index.ts");
			const L = new Map,
				S = e => e,
				R = new Set;
			var A;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(A || (A = {}));
			const P = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				B = (e, t) => {
					const s = S(t),
						n = L.get(s);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				F = (e, t, s, n) => {
					const o = S(t),
						a = L.get(o);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					L.set(o, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...P
						}
					}), r.socket.addEventListener("message", W.bind(null, n)), r.socket.addEventListener("close", D.bind(null, o, n)), r.socket.addEventListener("error", H.bind(null, o)), window && window.addEventListener("beforeunload", B.bind(null, e, t))
				},
				D = (e, t, s) => {
					const n = L.get(e);
					n && (n.isClosePlanned ? L.delete(e) : U(e, t))
				},
				U = (e, t) => {
					const s = L.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: n,
							connectionAttempts: o,
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: c,
						url: d
					} = s;
					if (L.delete(e), o < r && i.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, o),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							l = {
								...s.retries,
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
					const s = L.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? L.delete(e) : Object(w.a)() && console.error(t)
				};
			var K = s("./src/reddit/selectors/comments.ts"),
				V = s("./src/reddit/selectors/commentSelector.ts"),
				q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				z = s("./src/reddit/actions/comment/websocket/constants.ts");
			const G = Object(v.a)(z.b),
				J = Object(v.a)(z.c),
				Q = Object(v.a)(z.a),
				Y = Object(v.a)(z.d),
				X = {},
				Z = (e, t, s, n) => async (o, a) => {
					(e => new Promise(t => {
						const {
							cb: s,
							url: n,
							uniqueId: o
						} = e;
						R.has(o) ? t() : (R.add(o), setTimeout(() => {
							R.delete(o), F(n, o, {
								...P
							}, s), t()
						}, 1))
					}))({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case A.NEW_COMMENT: {
									const s = t.payload.name,
										r = O(t.payload),
										i = a(),
										c = Object(V.a)(i, {
											commentId: s
										}),
										d = !(!s || !X[s]);
									if (r && !d) {
										const s = N(0, n, t.payload),
											a = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(K.w)(i, {
												commentsPageKey: e
											});
											o(G({
												authorFlair: s,
												comment: r,
												commentsPageKey: e,
												headCommentId: t,
												numComments: a
											}))
										} else o(J({
											authorFlair: s,
											comment: r,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case A.UPDATE_COMMENT: {
									const s = t.payload.name,
										r = a(),
										i = Object(V.a)(r, {
											commentId: s
										}),
										c = O(t.payload);
									if (i && c) {
										const s = N(0, n, t.payload),
											a = t.payload.total_comment_count;
										o(J({
											authorFlair: s,
											comment: c,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case A.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										n = t.payload.score,
										r = a(),
										i = Object(V.a)(r, {
											commentId: s
										});
									i && o(J({
										comment: {
											...i,
											score: n
										},
										commentsPageKey: e
									}));
									break
								}
								case A.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										n = Object(V.a)(s, {
											commentId: e
										});
									n && !n.isDeleted ? o(Q({
										id: e
									})) : X[e] = A.DELETE_COMMENT;
									break
								}
								case A.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										n = a(),
										r = Object(V.a)(n, {
											commentId: s
										}),
										i = (n.user.account && n.user.account.id) === (r && r.authorId),
										c = !!e && !!Object(q.k)(n, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || i || c ? X[s] = A.REMOVE_COMMENT : o(Q({
										id: s
									}));
									break
								}
								case A.USER_JOIN: {
									const s = O(t.payload, {
											isSystem: !0
										}),
										n = !0;
									s && o(Y({
										comment: s,
										commentsPageKey: e,
										isChatSort: n
									}));
									break
								}
							}
						}
					})
				};
			var $ = s("./src/reddit/actions/pages/comments.ts"),
				ee = s("./src/reddit/components/Comments/States/index.tsx"),
				te = s("./node_modules/fbt/lib/FbtPublic.js"),
				se = s("./node_modules/lodash/defer.js"),
				ne = s.n(se),
				oe = s("./src/lib/classNames/index.ts"),
				ae = s("./src/lib/lessComponent.tsx"),
				re = s("./src/lib/makeDraftKey/index.ts"),
				ie = s("./src/lib/objectSelector/index.ts"),
				ce = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				de = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				le = s("./src/reddit/helpers/awards/message.ts"),
				me = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				ue = s("./src/reddit/components/RichTextJson/index.tsx"),
				pe = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				he = s("./src/reddit/icons/svgs/Star/index.tsx"),
				be = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				ve = s("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				Ce = s.n(ve);
			const fe = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				ge = e => {
					const {
						award: t,
						comment: s,
						iconUrl: n
					} = e;
					let o = "",
						a = !0,
						r = !1;
					return t.coinPrice < le.a ? (o = Ce.a.silverTierAwardComment, a = !1) : t.coinPrice < le.b ? o = Ce.a.goldTierAwardComment : (o = Ce.a.platinumTierAwardComment, r = !0), c.a.createElement("div", {
						className: Object(oe.a)(Ce.a.awardComment, o)
					}, c.a.createElement("div", {
						className: Ce.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(he.a, {
						className: Object(oe.a)(Ce.a.backgroundAnimation, Ce.a.backgroundStar)
					}), c.a.createElement(be.a, {
						className: Object(oe.a)(Ce.a.backgroundAnimation, Ce.a.backgroundStar, Ce.a.backgroundStar2)
					})), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
						className: Object(oe.a)(Ce.a.backgroundAnimation, Ce.a.backgroundSparkle, Ce.a.sparkleBottomLeft)
					}), c.a.createElement(pe.a, {
						className: Object(oe.a)(Ce.a.backgroundAnimation, Ce.a.backgroundSparkle, Ce.a.sparkleTopRight)
					}), c.a.createElement(pe.a, {
						className: Object(oe.a)(Ce.a.backgroundAnimation, Ce.a.backgroundSparkle, Ce.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: n
					})), c.a.createElement(ue.a, {
						className: Ce.a.awardCommentText,
						content: Object(me.a)(s),
						key: `rich-text-${s.id}`,
						rtJsonElementProps: fe(e),
						useExplicitTextColor: !0
					}))
				};
			var _e = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				xe = s("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				Ee = s.n(xe);
			var ke = ({
					commentCount: e,
					isLivestreaming: t,
					onClick: s
				}) => {
					const n = Object(oe.a)(Ee.a.CollapsedComment, {
						[Ee.a.LivestreamingWrapper]: t
					});
					return c.a.createElement("div", {
						className: n,
						onClick: s
					}, te.fbt._("collapsed {collapsed message} (may be sensitive)", [te.fbt._param("collapsed message", te.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [te.fbt._plural(e, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				ye = s("./src/reddit/actions/comment/authoring.ts"),
				Ie = s("./src/reddit/actions/comment/moderation.ts"),
				Te = s("./src/reddit/actions/modal.ts"),
				Oe = s("./src/reddit/actions/reportFlow/index.ts"),
				je = s("./src/reddit/actions/tooltip.ts"),
				Me = s("./src/reddit/actions/userBlocks.ts"),
				Ne = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				we = s("./src/reddit/constants/tracking.ts"),
				Le = s("./src/reddit/selectors/telemetry.ts"),
				Se = s("./src/telemetry/models/Event.ts");
			const Re = e => ({
					screen: Object(Le.screen)(e),
					profile: Object(Le.profile)(e),
					subreddit: Object(Le.subreddit)(e)
				}),
				Ae = (e, t) => s => ({
					action: "load",
					noun: e,
					post: Object(Le.post)(s, t),
					source: Se.b.ChatView,
					subreddit: Object(Le.subreddit)(s)
				}),
				Pe = e => t => ({
					source: "chat_post",
					action: we.c.VIEW,
					noun: "last_message",
					post: Object(Le.post)(t, e),
					comment: Object(Le.comment)(t, e),
					...Re(t)
				});
			var Be = s("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Fe = s.n(Be);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = ae.a.button("MenuItem", Fe.a),
				We = ae.a.a("MenuItemPermalink", Fe.a),
				He = ({
					children: e,
					comment: t,
					onClick: s,
					onHideTooltip: n,
					onShowTooltip: o,
					sendEvent: a,
					tooltipId: r,
					tooltipText: i,
					trackingNoun: d
				}) => c.a.createElement(Ue, {
					id: r,
					onMouseEnter: o.bind(void 0, r),
					onMouseLeave: n.bind(void 0, r),
					onClick: e => {
						s(e), d && (a(((e, t) => s => ({
							source: "comment",
							action: we.c.CLICK,
							noun: e,
							post: Object(Le.post)(s, t),
							comment: Object(Le.comment)(s, t),
							...Re(s)
						}))(d, t.id)), a(((e, t) => s => ({
							source: "comment_overflow_menu",
							action: we.c.CLICK,
							noun: e,
							post: Object(Le.post)(s, t),
							comment: Object(Le.comment)(s, t),
							...Re(s)
						}))(d, t.id)))
					}
				}, e, c.a.createElement(Ne.c, {
					tooltipId: r
				}, i)),
				Ke = e => c.a.createElement(He, De({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(We, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var Ve = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				qe = s("./src/reddit/components/HumanDate/index.tsx"),
				ze = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Ge = s("./src/reddit/components/ReportFlow/index.tsx"),
				Je = s("./src/reddit/components/ReportFlow/new.tsx"),
				Qe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				Xe = s("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ze = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				$e = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				et = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				tt = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				st = s("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				nt = s("./src/reddit/icons/svgs/Spam/index.tsx"),
				ot = s("./src/reddit/models/PostDraft/index.ts"),
				at = s("./src/reddit/selectors/activeModalId.ts"),
				rt = s("./src/reddit/selectors/blockedRedditors.ts"),
				it = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ct = s("./src/reddit/selectors/user.ts");

			function dt() {
				return (dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const lt = ae.a.wrapped($e.a, "BlockIcon", Fe.a),
				mt = ae.a.wrapped(Ze.a, "FlagIcon", Fe.a),
				ut = ae.a.wrapped(Xe.a, "EditIcon", Fe.a),
				pt = ae.a.wrapped(Ye.a, "ApproveIcon", Fe.a),
				ht = ae.a.wrapped(st.a, "ReplyIcon", Fe.a),
				bt = ae.a.wrapped(tt.a, "RemoveIcon", Fe.a),
				vt = ae.a.wrapped(nt.a, "SpamIcon", Fe.a),
				Ct = ae.a.wrapped(et.a, "ModeratorIcon", Fe.a),
				ft = e => (t, {
					comment: s
				}) => `${e}${s.id}`,
				gt = e => `Comment-${e}--Modal--DeleteComment`,
				_t = Object(l.c)({
					currentUser: ct.k,
					isMod: (e, {
						comment: t
					}) => !!Object(q.k)(e, {
						postId: t.postId
					}),
					isAuthorBlocked: (e, {
						comment: t
					}) => Object(rt.d)(e, t.authorId),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
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
					commentsPageKey: s
				}) => ({
					onReplyClick: () => e(Object(ye.p)({
						parentCommentId: t.id,
						commentsPageKey: s,
						singleOpen: !0
					})),
					onReportClick: s => {
						s.stopPropagation(), e(Object(Oe.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(je.i)()),
					onShowTooltip: t => e(Object(je.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const n = t.media && t.media.rteMode;
						s && e(Object(ye.d)({
							commentId: t.id,
							draftKey: Object(re.a)(ot.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: s
						}))
					},
					onApproveClick: () => e(Object(Ie.a)(t.id)),
					onBlockClick: () => e(Object(Me.h)(t.author)),
					onUnblockClick: () => e(Object(Me.g)(t.author)),
					onUpvoteClick: () => e(Object(b.q)(t.id)),
					onDownvoteClick: () => e(Object(b.j)(t.id)),
					onDistinguishClick: s => e(Object(Ie.b)(t.id, s)),
					onSpamClick: () => e(Object(Ie.e)(t.id, !0)),
					onRemoveClick: () => e(Object(Ie.e)(t.id, !1)),
					deleteComment: () => s && e(Object(ye.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(Te.i)(gt(t.id))),
					toggleDeleteCommentModal: () => e(Object(Te.i)(gt(t.id)))
				}))(Object(Qe.c)(e => {
					const {
						comment: t,
						className: s,
						createTooltipId: n,
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
						onDeleteClick: v,
						onEditClick: C,
						onHideTooltip: f,
						onRemoveClick: g,
						onReplyClick: _,
						onReportClick: x,
						onShowTooltip: E,
						onSpamClick: k,
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
						spamTooltipId: R,
						toggleDeleteCommentModal: A,
						timestampUpdateTrigger: P
					} = e, B = !!o && o.id === t.authorId, F = Object(ze.b)(t), D = t.isApproved && F, U = !t.bannedBy || t.bannedBy === m.k, W = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: E,
						sendEvent: S
					}, H = t.isMod;
					return c.a.createElement("div", {
						className: s
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
						onClick: () => I(H ? m.F.NONE : m.F.MODERATOR),
						tooltipId: L,
						tooltipText: H ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Ct, null)), p && U && c.a.createElement(He, dt({
						onClick: k,
						tooltipId: R,
						tooltipText: te.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(vt, null)), !B && c.a.createElement(He, dt({
						onClick: x,
						tooltipId: j,
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
					}))(), B && !u && c.a.createElement(He, dt({
						onClick: C,
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
						onClick: v,
						tooltipId: r,
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
						onConfirm: a,
						toggleModal: A,
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
					}, W), c.a.createElement(lt, null))), !u && c.a.createElement(Ke, dt({}, e, {
						tooltipId: n,
						tooltipText: c.a.createElement(qe.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(qe.d, {
						seconds: t.created
					})))
				})),
				Et = s("./src/chat/helpers/dom.ts"),
				kt = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				yt = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				It = s.n(yt);
			const Tt = {},
				Ot = ae.a.wrapped(_e.a, "ChatIcon", It.a),
				jt = ae.a.span("ReplyAuthor", It.a),
				Mt = ae.a.div("ReplyWrapper", It.a);
			var Nt = Object(d.b)(() => Object(l.c)({
					comment: V.a
				}))(({
					comment: e,
					commentId: t,
					isLivestreaming: s,
					onReplyClick: n
				}) => e ? e.isDeleted ? c.a.createElement(Mt, null, c.a.createElement("span", {
					className: Object(oe.a)(It.a.ReplyLinkBubble, It.a.delete, {
						[It.a.Livestreaming]: s
					})
				}, c.a.createElement(os, null))) : c.a.createElement(Mt, null, c.a.createElement("a", {
					className: Object(oe.a)(It.a.ReplyLinkBubble, {
						[It.a.Livestreaming]: s
					}),
					href: e.permalink,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(Et.a)(() => n(e.id))
				}, c.a.createElement(Ot, {
					userId: e.authorId,
					icon: e.profileImage
				}), c.a.createElement(jt, null, e.author), c.a.createElement(kt.a, {
					className: It.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(me.a)(e),
					rtJsonElementProps: Tt
				}))) : null),
				wt = s("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Lt = s.n(wt);
			const St = Object(ie.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var Rt = e => {
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
				At = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Bt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Ft = s("./src/reddit/constants/experiments.ts"),
				Dt = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Ut = e => Object(Dt.c)(e, {
				experimentName: Ft.X,
				experimentEligibilitySelector: Dt.a
			}) === Ft.U.Enabled;
			var Wt = s("./src/reddit/selectors/communityAwards.ts");
			const Ht = (e, {
				commentId: t
			}) => {
				const s = Object(V.a)(e, {
					commentId: t
				});
				if (s && s.associatedAwardId) return Object(Wt.a)(e, s.associatedAwardId)
			};
			var Kt = s("./src/reddit/selectors/gold/awardIcon.ts"),
				Vt = s("./src/reddit/selectors/poll/index.ts"),
				qt = s("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				zt = s.n(qt);
			const Gt = 250,
				Jt = 10,
				Qt = ae.a.wrapped(Bt.b, "ErrorText", zt.a),
				Yt = ae.a.wrapped(ce.a, "TopMeta", zt.a),
				Xt = ae.a.span("DeleteText", zt.a),
				Zt = ae.a.wrapped(Nt, "Reply", zt.a),
				$t = Object(Pt.u)(),
				es = Object(d.b)(() => Object(l.c)({
					associatedAward: (e, {
						commentId: t
					}) => Ht(e, {
						commentId: t
					}),
					awardIconUrl: (e, {
						commentId: t
					}) => {
						const s = Ht(e, {
							commentId: t
						});
						if (s) return Object(Kt.a)(e, {
							award: s,
							minSize: 64,
							postOrCommentId: t
						})
					},
					comment: V.a,
					errorMsgs: K.G,
					flair: K.e,
					isActive: (e, {
						commentId: t
					}) => Boolean(e.shortcuts.activeCommentId && t === e.shortcuts.activeCommentId),
					isEditing: K.A,
					prediction: Vt.f,
					subreddit: Pt.r,
					shouldRenderSystemMessages: Ut
				})),
				ts = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class ss extends c.a.Component {
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
						isTruncated: s
					} = this.state, n = t !== e.isExpanded || s !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && n) {
						const e = this.elemRef.current;
						let s = Gt;
						if (t) {
							s = e.scrollHeight + Jt;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = `${s}px`
					}
				}
				render() {
					const {
						associatedAward: e,
						awardIconUrl: t,
						childrenInfo: s,
						comment: n,
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
						timestampUpdateTrigger: v,
						addToRefList: C,
						onReplyClick: f,
						shouldRenderSystemMessages: g
					} = this.props, {
						isCollapsed: _,
						isExpanded: x,
						isTruncated: E
					} = this.state;
					if (!n) return null;
					i && ne()(() => this.elemRef.current && this.elemRef.current.focus()), ne()(() => this.elemRef && this.elemRef.current && C && C(this.elemRef));
					const k = n.isSystem,
						y = !d && !n.isDeleted && !k,
						I = !!e,
						T = Object(oe.a)({
							[zt.a.SystemMessageWrapper]: k && !l && g,
							[zt.a.CommentWrapper]: !l && !k,
							[zt.a.CommentExpanded]: x,
							[zt.a.CommentTruncated]: E,
							[zt.a.HighlightTarget]: b,
							[zt.a.LivestreamingCommentWrapper]: l
						});
					return _ ? c.a.createElement(ke, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: b ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: T
					}, d && c.a.createElement(At.a, {
						key: "chatCommentsForm",
						isLivestreaming: l,
						postId: m,
						sendEvent: h,
						draftKey: Object(re.a)(ot.c.edit, n.id),
						commentsPageKey: o,
						isEditing: d,
						comment: n
					}), y && c.a.createElement(c.a.Fragment, null, c.a.createElement(Yt, {
						childrenInfo: s,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: n,
						commentsPageKey: o,
						compact: !0,
						flair: r,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: l,
						renderedInOverlay: p
					}, c.a.createElement(_e.a, {
						className: Object(oe.a)(zt.a.ChatIcon, {
							[zt.a.Livestreaming]: l
						}),
						isLivestreaming: l,
						icon: n.profileImage,
						userId: n.authorId,
						isNSFW: n.profileOver18 || n.authorIconIsNSFW
					})), n.parentId && c.a.createElement(Zt, {
						commentId: n.parentId,
						onReplyClick: f,
						isLivestreaming: l
					}), l && c.a.createElement("span", {
						className: zt.a.livestreamingTimeStamp
					}, c.a.createElement(qe.d, {
						seconds: n.created
					})), I && e && l ? c.a.createElement(ge, {
						award: e,
						comment: n,
						iconUrl: t
					}) : u ? c.a.createElement(de.a, {
						comment: n,
						prediction: u
					}) : [c.a.createElement(ue.a, {
						className: Object(oe.a)(zt.a.RichTextJson, {
							[zt.a.Livestreaming]: l
						}),
						content: Object(me.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: ts(this.props),
						useExplicitTextColor: l
					}), c.a.createElement(xt, {
						key: "Menu",
						className: Object(oe.a)(zt.a.Menu, {
							[zt.a.Livestreaming]: l
						}),
						comment: n,
						commentsPageKey: o,
						isLivestreaming: l,
						timestampUpdateTrigger: v
					})]), n.isDeleted && c.a.createElement(os, null), y && a && a.map((e, t) => c.a.createElement(Qt, {
						key: `${t}-${e}`
					}, e)), !d && E && c.a.createElement("button", {
						className: Object(oe.a)(zt.a.CommentReadMoreButton, {
							[zt.a.Livestreaming]: l
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), k && !l && g && c.a.createElement(Rt, {
						comment: n
					}))
				}
			}
			const ns = $t(es(ss)),
				os = ({
					isLivestreaming: e
				}) => c.a.createElement(c.a.Fragment, null, c.a.createElement(_e.a, {
					className: Object(oe.a)(zt.a.ChatIcon, {
						[zt.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), c.a.createElement(Xt, null, te.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var as = ns,
				rs = s("./node_modules/lodash/isEqual.js"),
				is = s.n(rs),
				cs = s("./src/reddit/controls/Button/index.tsx"),
				ds = s("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				ls = s.n(ds);
			const ms = ae.a.div("ButtonWrapper", ls.a),
				us = ({
					top: e
				}) => c.a.createElement("span", {
					className: Object(oe.a)(ls.a.ChunkPlaceholder, {
						[ls.a.top]: e
					})
				}, te.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				ps = ({
					className: e,
					isLivestreaming: t,
					isLoading: s,
					setRef: n,
					...o
				}) => c.a.createElement("div", {
					ref: n,
					className: Object(oe.a)(e, {
						[ls.a.ScrollerWrapper]: !t,
						[ls.a.LivestreamingWrapper]: t,
						[ls.a.loading]: s
					})
				}, !s && o.isPrevLoading && !t && c.a.createElement(us, {
					top: !0
				}), o.children, !s && o.isNextLoading && !t && c.a.createElement(us, null));
			class hs extends c.a.Component {
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
						targetCommentIndex: s,
						children: n
					} = this.props;
					if (n && n.length && void 0 !== s && n[s]) {
						const e = Math.floor(s / this.chunkSize);
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
							s = e < t ? e : t;
						this.setState({
							activeChunkIndex: s
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
							s = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: s
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							s = this.state.activeChunkIndex + e;
						if (e > 1) return s
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
					const t = e.children.length !== this.props.children.length || !is()(f()(e.children), f()(this.props.children)) || !is()(r()(e.children), r()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, s) {
					if (s && s.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							n = this.getChunkIndexOnUpdate(e, t),
							o = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: n || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== o || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + o
						}, () => {
							n && this.setNextTopScroll(), s.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, s.scrolledBottom && o > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, s = this.state.newCommentsCount > 0 ? Object(oe.a)([ls.a.NewComments, ls.a.show]) : ls.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(ps, {
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
						className: ls.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: ls.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: ls.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(ms, null, c.a.createElement(cs.i, {
						className: s,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", te.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [te.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var bs = hs,
				vs = s("./src/reddit/selectors/posts.ts");
			const Cs = 6e4,
				fs = (e, t, {
					authorId: s,
					id: n
				}) => e.includes(s) && !t.includes(n),
				gs = Object(l.c)({
					blockedRedditors: rt.a,
					blockedRedditorsPending: rt.b,
					chatCommentLinks: K.g,
					isPending: K.d,
					liveCommentsWebsocket: vs.F,
					moreCommentsLink: K.F
				}),
				_s = Object(d.b)(gs, (e, t) => ({
					onLiveCommentsSubscribe: (s, n, o) => e(Z(s, n, o, t.subredditId)),
					offLiveCommentsSubscribe: (t, s) => e(((e, t) => async () => {
						B(0, t)
					})(0, s)),
					loadMoreComments: s => e(Object(b.l)(t.commentsPageKey, s)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.t.CHAT
					}, m.t.CHAT))
				}));
			class xs extends c.a.Component {
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
					} = this.props, t = e[e.length - 1], s = t && t.created;
					return !!s && Object(p.c)(s) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(u.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, Cs)
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
						liveCommentsWebsocket: s,
						loadComments: n,
						onLiveCommentsSubscribe: o,
						postId: a
					} = this.props;
					s && (e && n(), o(t, s, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = s)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: s,
						blockedRedditorsPending: n,
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
					return e.postId !== c || e.draftKey !== d || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== n || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks.length !== o.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== s.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: s,
						commentId: n,
						commentsPageKey: o,
						liveCommentsWebsocket: a,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && a && (i(o, a, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = a)), e.blockedRedditors.ids !== t.ids) {
						const e = new Set(t.ids),
							n = {};
						s.forEach(e => n[e.id] = e.authorId), this.setState({
							expandedCommentIds: this.state.expandedCommentIds.filter(t => {
								const s = n[t];
								return !e.has(s)
							})
						})
					}
					if (this.deferTimestampUpdate(), n) {
						const e = Object(u.a)(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(), n && s.forEach((e, t) => e.id === n && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: s,
						sendEvent: n
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), n(Ae("history", s)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, s = r()(e);
					(null == s ? void 0 : s.id) && t(Pe(s.id))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							s = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(s), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, s = t && document.querySelector("#targetComment");
					s && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(s.offsetTop)
				}
				render() {
					const {
						blockedRedditors: e,
						chatCommentLinks: t,
						className: s,
						commentId: n,
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
					} = this.state, v = !(t && t.length || i || d);
					return c.a.createElement(c.a.Fragment, null, v ? c.a.createElement(ee.c, {
						className: a,
						isChat: !0
					}) : c.a.createElement(bs, {
						className: s,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: i || d,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => fs(e.ids, p, t) ? c.a.createElement(ke, {
						commentCount: 1,
						isLivestreaming: r,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(as, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: o,
						isLivestreaming: r,
						postId: l,
						renderedInOverlay: !!m,
						sendEvent: u,
						timestampUpdateTrigger: b,
						targetComment: t.id === n,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = _s(Object(Qe.c)(xs))
		},
		"./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less": function(e, t, s) {
			e.exports = {
				container: "ciVctEeLKylCRejTc9u2e",
				header: "_2EZJLt05_wdk_osIo3latc",
				powerupsLogo: "_2vohvd3sMxCQYU4XZok__A",
				headerText: "_3yFC4AlORm5Ql4AnP3tO5C",
				headerDelimiter: "GMu2Q_kdqb93PfujN_OOl",
				achievements: "_3yyAEiwzXU-705K4-2CYcp",
				achievementItem: "_29gOi1XSw60-K2kDQZerSu",
				achievementImgWrapper: "_2Quz2MhfZx-Ctyd9zFO7ju",
				achievementImg: "_3_H_5cdEEjCzMRE60q9kbE",
				achievementName: "_1BTx4JIyc9txuPsRaFBelE",
				footer: "kXcPoSA0ho3o1nH-mYqEV",
				scrollGradient: "_1XmrOUyJINsGbV1Emy_6I0",
				gradientVisible: "_1gcqKximkvdrFYxxOUaH4g",
				ctaButton: "_1q2lrbLX6F7HH2qBbvitLG"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less": function(e, t, s) {
			e.exports = {
				container: "_3NdKulBcLHFmpKDAy9Barm",
				hoverPopup: "_3TMcWG2R9E0iMw_Qcg9tfi",
				icon: "_2Xc055D-KCIUe6f2E3Ghgr",
				hiddenAchievementsCount: "_1zxdGxj6UKKqJMibObCbeA"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/gold/powerups.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				l = s("./src/reddit/hooks/useScrollGradient.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				p = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/Econ/PowerupsFlair/HoverPopup.m.less"),
				v = s.n(b);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e,
				subredditId: t,
				userId: s
			}) => {
				const b = Object(a.e)(e => Object(p.b)(e, {
						subredditId: t,
						userId: s
					})),
					f = Object(a.e)(e => Object(h.Q)(e, {
						subredditId: t
					})),
					g = Object(a.d)(),
					_ = Object(m.a)(),
					{
						container: x,
						isScrollGradientVisible: E,
						calculateGradientVisibility: k
					} = Object(l.a)(!1);
				Object(n.useEffect)(() => {
					k()
				}, [k]);
				return o.a.createElement("div", {
					className: Object(r.a)(v.a.container, e)
				}, o.a.createElement("div", {
					className: v.a.header
				}, o.a.createElement(u.a, {
					className: v.a.powerupsLogo
				}), C._("{r/community} {=achievements}", [C._param("r/community", f.displayText), C._param("=achievements", o.a.createElement("span", {
					className: v.a.headerText
				}, C._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), o.a.createElement("div", {
					className: v.a.headerDelimiter
				}), o.a.createElement("div", {
					className: v.a.achievements,
					onScroll: k,
					ref: x
				}, b.map(e => !e.isLocked && o.a.createElement("div", {
					className: v.a.achievementItem,
					key: e.type
				}, o.a.createElement("div", {
					className: v.a.achievementImgWrapper
				}, o.a.createElement("img", {
					className: v.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), o.a.createElement("div", {
					className: v.a.achievementName
				}, o.a.createElement("span", null, e.name))))), o.a.createElement("div", {
					className: v.a.footer
				}, o.a.createElement("div", {
					className: Object(r.a)(v.a.scrollGradient, {
						[v.a.gradientVisible]: E
					})
				}), o.a.createElement(c.q, {
					priority: c.b.Secondary,
					className: v.a.ctaButton,
					onClick: () => {
						_(Object(d.a)()), g(Object(i.e)())
					},
					isFullWidth: !0
				}, C._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var g = s("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.m.less"),
				_ = s.n(g);
			const x = ({
					className: e,
					subredditId: t,
					userId: s,
					showPopupOnHover: i,
					onHover: c
				}) => {
					const d = Object(a.e)(e => Object(p.d)(e, {
							subredditId: t,
							userId: s
						})),
						l = Object(a.e)(e => Object(p.e)(e, {
							subredditId: t,
							userId: s
						})),
						m = Object(a.e)(e => Object(p.c)(e, {
							subredditId: t,
							userId: s
						})),
						u = m ? [...m.supporterTypes, ...m.achievementTypes] : null,
						[h, b] = Object(n.useState)(!1);
					if (!(!!d || !!l) || !u) return null;
					const v = (null == l ? void 0 : l.type) === (null == d ? void 0 : d.type) ? null : l,
						C = 1 + (v ? 1 : 0),
						g = (null == u ? void 0 : u.length) - C;
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
						achievement: v
					}), o.a.createElement(E, {
						achievement: d
					}), !!g && o.a.createElement("span", {
						className: _.a.hiddenAchievementsCount
					}, "+", g), i && h && o.a.createElement(f, {
						className: _.a.hoverPopup,
						subredditId: t,
						userId: s
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
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				a = e => (e.numReports || 0) > 0
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c);
			const l = r.a.span("metaText", d.a),
				m = e => a.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...o
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
						}) : s ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, o, d)
				},
				p = e => a.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return r
			}));
			const n = 500,
				o = 1800,
				a = (e, t = !1) => t ? e.coinPrice < n ? 0 : e.coinPrice < o ? 50 : 100 : 2048,
				r = (e, t, s = !1) => {
					const n = a(t, s);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");

			function a({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case o.H.AUTHORIZATION_ERROR:
						return t ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case o.H.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case o.H.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case o.H.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case o.H.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeUTCDate/index.tsx");
			const a = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				r = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
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
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				o = s("./src/reddit/selectors/comments.ts"),
				a = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => i => {
					const c = Object(o.e)(i, {
							commentId: e
						}),
						d = Object(a.d)(i, {
							subredditId: t,
							userId: s
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...r.defaults(i),
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
					...r.defaults(e)
				})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e) {
				const [t, s] = Object(n.useState)(e), o = Object(n.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							n = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						s(!n)
					}
				}
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
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
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, s) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, o.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, o.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
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
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, o.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, s) {
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
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

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
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

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
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

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
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/gold/constants.ts");
			const a = e => e.type.startsWith("POWERUPS_SUPPORTER"),
				r = e => !a(e),
				i = {};
			var c = s("./node_modules/icepick/icepick.js"),
				d = s("./src/reddit/actions/economics/powerups/constants.ts");
			const l = {},
				m = e => {
					var t, s;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (s = e[0]) || void 0 === s ? void 0 : s.type)
				},
				u = {};
			t.a = Object(n.c)({
				subredditPowerupsFlairs: (e = i, t) => {
					switch (t.type) {
						case o.pb:
							const {
								subredditId: s, subredditAchievementFlairs: n
							} = t.payload;
							if (!(null == n ? void 0 : n.length)) return e;
							const i = n.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								c = n.filter(r).map(e => e.type),
								d = n.filter(a).map(e => e.type);
							return {
								...e, [s]: {
									flairsByType: i,
									achievementTypes: c,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = l, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: s,
								userAchievementFlairsByRedditorIds: n
							} = t.payload;
							let o = e[s] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of n) {
								const s = t.filter(r),
									n = s.map(({
										type: e
									}) => e),
									i = t.filter(a),
									c = i.map(({
										type: e
									}) => e),
									d = m(s),
									l = m(i);
								o = {
									...o,
									[e]: {
										achievementTypes: n,
										supporterTypes: c,
										achievementDisplayType: d,
										supporterDisplayType: l
									}
								}
							}
							return {
								...e,
								[s]: o
							}
						}
						case d.f: {
							const {
								subredditId: s,
								userId: n,
								achievementType: o
							} = t.payload;
							return Object(c.setIn)(e, [s, n, "pendingPreferredType"], o)
						}
						case d.g: {
							const {
								subredditId: s,
								userId: n,
								achievementType: o
							} = t.payload;
							return Object(c.updateIn)(e, [s, n], e => ({
								...e,
								achievementDisplayType: o,
								pendingPreferredType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: s,
								userId: n
							} = t.payload;
							return Object(c.setIn)(e, [s, n, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = u, t) => {
					switch (t.type) {
						case d.h: {
							let s = {};
							return t.payload.forEach(e => {
								const t = e.id,
									n = e.powerups;
								if (!t || !n) return;
								const o = n.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								s = {
									...s,
									[t]: o.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...s
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/commentSelector.ts"),
				a = s("./src/reddit/selectors/experiments/econ/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: i.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => {
					var s, n;
					return t ? null === (n = null === (s = e.features.powerups.subredditPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === n ? void 0 : n.flairsByType : null
				},
				d = (e, {
					subredditId: t,
					userId: s
				}) => {
					var n, o;
					return t && s ? null === (o = null === (n = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === o ? void 0 : o[s] : null
				},
				l = Object(n.a)(d, e => (null == e ? void 0 : e.pendingPreferredType) || (null == e ? void 0 : e.achievementDisplayType)),
				m = Object(n.a)([c, l], (e, t) => e && t ? e[t] : null),
				u = Object(n.a)(d, e => null == e ? void 0 : e.supporterDisplayType),
				p = Object(n.a)([c, u], (e, t) => e && t ? e[t] : null),
				h = Object(n.a)([c, d], (e, t) => {
					if (!e) return [];
					const s = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						n = (null == t ? void 0 : t.pendingPreferredType) || (null == t ? void 0 : t.achievementDisplayType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !s.includes(e.type),
						isPreferred: e.type === n
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				b = (e, {
					commentId: t
				}) => {
					const s = Object(o.a)(e, {
							commentId: t
						}),
						n = null == s ? void 0 : s.subredditId,
						r = null == s ? void 0 : s.authorId;
					return !(!n || !r) && !(!((e, {
						subredditId: t,
						userId: s
					}) => {
						var n, o, a;
						return t && s ? null === (a = null === (o = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === o ? void 0 : o[s]) || void 0 === a ? void 0 : a[t] : null
					})(e, {
						subredditId: n,
						userId: r
					}) || !Object(a.i)(e))
				}
		},
		"./src/reddit/selectors/poll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/reddit/models/Comment/index.ts"),
				o = s("./src/reddit/models/Prediction/index.ts"),
				a = s("./src/reddit/selectors/commentSelector.ts");
			const r = (e, {
					postId: t
				}) => e.posts.metaMap[t],
				i = (e, {
					postId: t
				}) => {
					const s = r(e, {
						postId: t
					});
					if (s) return e.polls.models[s]
				},
				c = (e, {
					postId: t
				}) => {
					const s = i(e, {
						postId: t
					});
					return s && Object(o.c)(s) ? s : null
				},
				d = (e, {
					commentId: t
				}) => {
					const s = Object(a.a)(e, {
						commentId: t
					});
					return s && s.commentType === n.b.Prediction && c(e, s) || null
				},
				l = (e, {
					postId: t
				}) => {
					const s = r(e, {
						postId: t
					});
					if (s) return e.polls.rewards[s]
				},
				m = (e, {
					postId: t
				}) => {
					const s = r(e, {
						postId: t
					});
					if (s) return e.polls.results.byVotingPower[s]
				},
				u = (e, {
					postId: t
				}) => {
					const s = r(e, {
						postId: t
					});
					if (s) return e.polls.results.byVoters[s]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.caf866adde132ee4be76.js.map