// https://www.redditstatic.com/desktop2x/ChatPost.4a46334aae0e48504491.js
// Retrieved at 12/13/2021, 11:10:14 AM by Reddit Dataminer v1.0.0
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
			t.a = function(e, t, ...n) {
				let o, s = !1;
				const r = async () => {
					n && n.length ? await e.call(window, ...n) : await e.call(window), s || (o = window.setTimeout(r, t))
				};
				return o = window.setTimeout(r, t), () => {
					s = !0, window.clearTimeout(o)
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				u = n.n(p);
			const h = e => {
				const {
					className: t,
					comment: n,
					isCommentAuthorBlocked: s,
					isAuthorDeleted: a,
					isLivestreaming: i,
					isStrong: d,
					style: l,
					collapsed: p
				} = e;
				return p && s ? r.a.createElement("p", {
					className: Object(c.a)(u.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					className: Object(c.a)(u.a.commentAuthorLink, t),
					author: n.author,
					isCommentAuthorBlocked: s,
					isAuthorDeleted: a,
					isLivestreaming: i,
					isStrong: d,
					style: l
				}, n.author)
			};
			var b = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = n("./src/reddit/components/Flair/index.tsx"),
				f = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = n("./src/reddit/controls/MetaData/index.tsx"),
				k = n("./src/reddit/helpers/flair.ts"),
				x = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/selectors/gold/powerups/index.ts"),
				T = n("./src/lib/constants/index.ts"),
				O = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				j = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(M);
			const S = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				renderedInOverlay: a,
				collapsed: i
			}) => r.a.createElement(j.b, {
				className: Object(c.a)(N.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: a ? g.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(y.g)(n),
				collapsed: i
			}, r.a.createElement(O.b, {
				ignore: Object(y.f)(n) || !!n.distinguishType && n.distinguishType !== T.G.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(h, {
				className: e,
				comment: n,
				isLivestreaming: o,
				isStrong: s,
				isCommentAuthorBlocked: Object(y.g)(n),
				isAuthorDeleted: Object(y.f)(n),
				collapsed: i
			})));
			var A = n("./src/config.ts"),
				w = n("./src/reddit/actions/tooltip.ts"),
				R = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const L = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var P = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(P);
			const B = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const s = Object(a.d)(),
					i = () => s(Object(w.h)({
						tooltipId: d
					})),
					d = L("CommentTopMeta--cakeday--", t, n),
					l = o.fbt._("Cake day", null, {
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
			var D = n("./src/lib/addQueryParams/index.ts"),
				U = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/actions/post.ts"),
				H = n("./src/reddit/components/HumanDate/index.tsx"),
				K = n("./src/reddit/helpers/path/index.ts");
			const V = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						permalink: s,
						renderedInOverlay: i,
						isBlockingInterstitialEnabled: c
					} = e, d = Object(a.d)(), l = L("CommentTopMeta--Created--", n.id, i), m = () => d(Object(w.h)({
						tooltipId: l
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(D.a)(s, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: l,
						onClick: e => {
							q(d, n.id), c && (e.preventDefault(), d(Object(W.Y)(Object(K.b)(s), n.postId)))
						},
						onMouseEnter: m,
						onMouseLeave: m,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(H.d, {
						seconds: n.created,
						shortenedUnit: o
					}), r.a.createElement(R.c, {
						tooltipId: l
					}, r.a.createElement(H.b, {
						seconds: n.created
					})))
				},
				q = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(U.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var G = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				J = n.n(G);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => r.a.createElement(_.a, {
				className: J.a.crowdControlText
			}, Q._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var X = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Z = n.n(X);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(_.a, {
				className: Z.a.editedText
			}, $._("edited {time}", [$._param("time", r.a.createElement(H.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var te = n("./src/reddit/helpers/isRemoved.ts"),
				ne = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				oe = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				se = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				de = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				le = n.n(de);
			const me = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: s
			}) => {
				const i = Object(a.d)(),
					c = e => () => i(Object(w.f)({
						tooltipId: e
					})),
					d = () => i(Object(w.i)()),
					l = t => L(t, e.id, s),
					m = l("CommentTopMeta--Approve--"),
					p = l("CommentTopMeta--Remove--"),
					u = l("CommentTopMeta--Report--"),
					h = l("CommentTopMeta--Spam--"),
					b = c(p);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(se.a, {
					className: le.a.approveIcon,
					desc: Object(ne.a)(e),
					id: m,
					onMouseEnter: c(m),
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: m,
					text: Object(ne.a)(e)
				})), Object(te.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.a, {
					className: le.a.removeIcon,
					desc: Object(ne.b)(e),
					id: p,
					onMouseEnter: b,
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: p,
					text: Object(ne.b)(e)
				})), Object(te.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: le.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(te.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && r.a.createElement("a", {
					className: le.a.removalReason,
					onMouseEnter: b,
					onMouseLeave: d
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(re.a, {
					className: le.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: le.a.spamIcon,
					desc: Object(ne.d)(e),
					id: h,
					onMouseEnter: c(h),
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: h,
					text: Object(ne.d)(e)
				})), Object(oe.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: le.a.reportIcon,
					desc: Object(ne.c)(e.numReports),
					id: u,
					onMouseEnter: c(u),
					onMouseLeave: d,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: u,
					text: Object(ne.c)(e.numReports)
				})))
			};
			var pe, ue = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var he = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				be = n.n(he);
			const Ce = {
					[pe.Admin]: {
						color: ue.c,
						label: o.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: ue.d,
						label: o.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: ue.a,
						label: o.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: ue.c,
						label: o.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: ue.a,
						label: o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => o.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				ve = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === T.G.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						label: i,
						tooltipTemplate: d
					} = Ce[n], l = L(o, e.comment.id, e.renderedInOverlay), m = d(e), p = () => t(Object(w.h)({
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
					}, r.a.createElement("span", null, i), n === pe.Mod && r.a.createElement(fe, null)), r.a.createElement(R.c, {
						tooltipId: l,
						text: m
					}))
				},
				fe = () => r.a.createElement("img", {
					alt: "Moderator Achievement",
					className: be.a.modAchievement,
					src: `${A.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ge = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				_e = n.n(ge);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xe = () => r.a.createElement(_.a, {
				className: _e.a.stickiedText
			}, ke._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Ee = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ye = n.n(Ee);
			const Ie = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: d,
					ignoreLock: m,
					isLivestreaming: p,
					permalink: u,
					renderedInOverlay: h,
					subredditDisplayText: T,
					renderContractorBadge: O
				} = e, j = Object(E.a)(), M = i.subredditId, N = Object(a.e)(e => Object(I.h)(e, {
					subredditId: M
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(c.a)(ye.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: ye.a.authorLine
				}, r.a.createElement("span", {
					className: ye.a.metaText
				}, i.deletedBy === y.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(_.c, {
					className: ye.a.separator
				}), r.a.createElement(V, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					permalink: u,
					renderedInOverlay: h
				})));
				return r.a.createElement("div", {
					className: Object(c.a)(ye.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: ye.a.authorLine
				}, !Object(y.f)(i) && r.a.createElement(C.b, {
					className: ye.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: ye.a.baselineItem
				}, r.a.createElement(S, {
					authorClassName: ye.a.author,
					comment: i,
					isLivestreaming: p,
					renderedInOverlay: h,
					collapsed: n
				})), s && r.a.createElement(Y, null), r.a.createElement(ve, {
					className: ye.a.role,
					comment: i,
					subredditDisplayText: T,
					renderContractorBadge: O,
					renderedInOverlay: h
				}), i.isAuthorCakeday ? r.a.createElement(B, {
					className: ye.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: h
				}) : !Object(y.f)(i) && N && r.a.createElement(b.a, {
					className: ye.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						j(Object(x.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(f.a, {
					className: ye.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(_.c, {
					className: ye.a.separator
				}), r.a.createElement(V, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					permalink: u,
					renderedInOverlay: h
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: ye.a.separator
				}), r.a.createElement(xe, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: ye.a.separator
				}), r.a.createElement(ee, {
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
					className: ye.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: ye.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Te = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Oe = n("./src/reddit/selectors/economics.ts"),
				je = n("./src/reddit/models/Flair/index.ts"),
				Me = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/selectors/userFlair.ts"),
				Ae = n("./src/reddit/selectors/comments.ts"),
				we = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Re = n.n(we);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = d.a.wrapped(v.b, "RightPositionedAuthorFlair", Re.a),
				Fe = d.a.span("DeletedText", Re.a),
				Be = d.a.wrapped(_.a, "MetaSeparator", Re.a),
				De = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Oe.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Ne.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Se.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Ae.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Me.b
				}));
			t.a = De(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					commentPermalink: i,
					commentsPageKey: d,
					compact: m,
					flair: p,
					flairPosition: u,
					hasBadges: h,
					isBlockingInterstitialEnabled: b,
					isLivestreaming: k,
					isPostComment: x,
					ignoreFlairPosition: E,
					ignoreLock: I,
					renderContractorBadge: T,
					renderedInOverlay: O,
					subredditDisplayText: j,
					userHasNft: M
				} = e, N = r.a.createElement(r.a.Fragment, null, r.a.createElement(Te.b, {
					commentId: a.id
				}), r.a.createElement(Te.a, {
					commentId: a.id,
					commentsPageKey: d
				}));
				if (x) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie, {
					className: Object(c.a)(n, {
						[Re.a.collapsed]: o
					}),
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: p || null,
					ignoreLock: I,
					isLivestreaming: k,
					permalink: i,
					renderedInOverlay: O,
					subredditDisplayText: j,
					renderContractorBadge: !!T,
					collapsed: o
				}), N);
				if (a.isDeleted) return r.a.createElement(Ue, Le({}, e, {
					className: Object(c.a)(n, Re.a.container, {
						[Re.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(We, Le({}, e, {
					className: Object(c.a)(n, Re.a.container, {
						[Re.a.collapsed]: o
					})
				}));
				const A = !E && u === je.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(n, Re.a.container, {
						[Re.a.collapsed]: o,
						[Re.a.hasBadges]: h,
						[Re.a.liveStreaming]: k
					}),
					"data-testid": "comment-top-meta"
				}, p && A && r.a.createElement(v.b, {
					flair: p,
					forceSmallEmojis: m
				}), !Object(y.f)(a) && r.a.createElement(C.b, {
					className: Re.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(S, {
					authorClassName: M ? Re.a.NftAuthor : void 0,
					comment: a,
					isLivestreaming: k,
					isStrong: !!m,
					renderedInOverlay: O,
					collapsed: o
				}), s && r.a.createElement(Y, null), s && r.a.createElement(_.c, {
					className: Re.a.metaText,
					key: "crowdControlSeparator"
				}), p && !A && r.a.createElement(Pe, {
					flair: p,
					forceSmallEmojis: m
				}), !m && r.a.createElement(f.a, {
					className: Re.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(_.c, {
						className: Re.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), N, r.a.createElement(ve, {
					className: Re.a.authorRole,
					comment: a,
					subredditDisplayText: j,
					renderContractorBadge: !!T,
					renderedInOverlay: O
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !x && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
					className: Re.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(_.c, {
					className: Re.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(V, {
					key: "Created",
					className: Re.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: O,
					isBlockingInterstitialEnabled: b
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Re.a.separator
				}), r.a.createElement(xe, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Re.a.separator
				}), r.a.createElement(ee, {
					editedAt: a.editedAt
				}))), r.a.createElement(me, {
					comment: a,
					ignoreLock: I,
					renderedInOverlay: O
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: O ? g.c.Lightbox : void 0
				}))
			});
			const Ue = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						renderedInOverlay: d
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Fe, null, a.deletedBy === y.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(V, {
						key: "Created",
						className: Re.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					}), n && He({
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
						isBlockingInterstitialEnabled: c
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(y.f)(t),
						collapsed: a
					})), r.a.createElement(_.b, {
						className: Re.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(_.c, {
						className: Re.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(V, {
						key: "Created",
						className: Re.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: c
					}), He({
						childrenInfo: o
					}))
				},
				He = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Be, {
						className: Re.a.metaText
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
				return j
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "a", (function() {
				return K
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
				p = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/describeApiError/index.ts"),
				b = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				k = n("./src/reddit/components/Comments/States/index.m.less"),
				x = n.n(k);
			const E = l.a.wrapped(g.a, "CommentsIcon", x.a),
				y = l.a.wrapped(_.a, "SnooFacepalm", x.a),
				I = l.a.p("EmptyTitle", x.a),
				T = l.a.p("ErrorTitle", x.a),
				O = l.a.p("EmptyText", x.a),
				j = ({
					className: e,
					isChat: t
				}) => i.a.createElement("div", {
					className: Object(d.a)(x.a.StateContainer, e)
				}, i.a.createElement(E, null), i.a.createElement(I, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), i.a.createElement(O, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				M = () => i.a.createElement("div", {
					className: x.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(I, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = ({
					link: e
				}) => i.a.createElement("div", {
					className: x.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(I, null, o.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), i.a.createElement(u.n, {
					to: Object(b.b)(e)
				}, o.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				S = Object(c.b)(null, (e, {
					postId: t,
					commentId: n,
					sort: o
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, n, {
						sort: o
					}, o))
				}))(({
					apiError: e,
					onClick: t
				}) => i.a.createElement("div", {
					className: x.a.StateContainer
				}, i.a.createElement(y, null), i.a.createElement(T, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : o.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), i.a.createElement(u.l, {
					onClick: t
				}, o.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				A = ({
					postId: e,
					commentId: t,
					sort: n,
					apiError: o
				}) => i.a.createElement("div", {
					className: Object(d.a)(x.a.StateContainer, x.a.ErrorFullPage)
				}, i.a.createElement(S, {
					postId: e,
					commentId: t,
					sort: n,
					apiError: o
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
			var o = n("./node_modules/lodash/debounce.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/last.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/setInterval/index.ts"),
				u = n("./src/lib/timeAgo/index.ts"),
				h = n("./src/reddit/actions/blockedRedditors.ts"),
				b = n("./src/reddit/actions/comment/index.ts"),
				C = n("./src/lib/makeActionCreator/index.ts"),
				v = n("./node_modules/lodash/first.js"),
				f = n.n(v),
				g = n("./node_modules/lodash/isArray.js"),
				_ = n.n(g),
				k = n("./src/reddit/helpers/isComment.ts"),
				x = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				E = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				I = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Vote/index.ts");
			const O = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = M(e.attribs);
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
					if (l === y.f.Richtext) {
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
					if (l === y.f.Text) {
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
			var S = n("./src/lib/env/index.ts");
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
					const n = w(t),
						o = A.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				B = (e, t, n, o) => {
					const s = w(t),
						r = A.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					A.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = {
							...P
						}
					}), a.socket.addEventListener("message", W.bind(null, o)), a.socket.addEventListener("close", D.bind(null, s, o)), a.socket.addEventListener("error", H.bind(null, s)), window && window.addEventListener("beforeunload", F.bind(null, e, t))
				},
				D = (e, t, n) => {
					const o = A.get(e);
					o && (o.isClosePlanned ? A.delete(e) : U(e, t))
				},
				U = (e, t) => {
					const n = A.get(e);
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
					if (A.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, s),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							l = {
								...n.retries,
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
					const n = A.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? A.delete(e) : Object(S.a)() && console.error(t)
				};
			var K = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/commentSelector.ts"),
				q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				z = n("./src/reddit/actions/comment/websocket/constants.ts");
			const G = Object(C.a)(z.b),
				J = Object(C.a)(z.c),
				Q = Object(C.a)(z.a),
				Y = Object(C.a)(z.d),
				X = {},
				Z = (e, t, n, o) => async (s, r) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: o,
							uniqueId: s
						} = e;
						R.has(s) ? t() : (R.add(s), setTimeout(() => {
							R.delete(s), B(o, s, {
								...P
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case L.NEW_COMMENT: {
									const n = t.payload.name,
										a = O(t.payload),
										i = r(),
										c = Object(V.b)(i, {
											commentId: n
										}),
										d = !(!n || !X[n]);
									if (a && !d) {
										const n = N(0, o, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(K.w)(i, {
												commentsPageKey: e
											});
											s(G({
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
								case L.UPDATE_COMMENT: {
									const n = t.payload.name,
										a = r(),
										i = Object(V.b)(a, {
											commentId: n
										}),
										c = O(t.payload);
									if (i && c) {
										const n = N(0, o, t.payload),
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
								case L.UPDATE_COMMENT_SCORE: {
									const n = t.payload.name,
										o = t.payload.score,
										a = r(),
										i = Object(V.b)(a, {
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
								case L.DELETE_COMMENT: {
									const e = t.payload.name,
										n = r(),
										o = Object(V.b)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s(Q({
										id: e
									})) : X[e] = L.DELETE_COMMENT;
									break
								}
								case L.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = r(),
										a = Object(V.b)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(q.l)(o, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? X[n] = L.REMOVE_COMMENT : s(Q({
										id: n
									}));
									break
								}
								case L.USER_JOIN: {
									const n = O(t.payload, {
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
			var $ = n("./src/reddit/actions/pages/comments.ts"),
				ee = n("./src/reddit/components/Comments/States/index.tsx"),
				te = n("./node_modules/fbt/lib/FbtPublic.js"),
				ne = n("./node_modules/lodash/defer.js"),
				oe = n.n(ne),
				se = n("./src/lib/classNames/index.ts"),
				re = n("./src/lib/lessComponent.tsx"),
				ae = n("./src/lib/makeDraftKey/index.ts"),
				ie = n("./src/lib/objectSelector/index.ts"),
				ce = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				de = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				le = n("./src/reddit/helpers/awards/message.ts"),
				me = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				pe = n("./src/reddit/components/RichTextJson/index.tsx"),
				ue = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
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
						iconUrl: o
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
						src: o
					})), c.a.createElement(pe.a, {
						className: ve.a.awardCommentText,
						content: Object(me.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: fe(e),
						useExplicitTextColor: !0
					}))
				};
			var _e = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				ke = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				xe = n.n(ke);
			var Ee = ({
					commentCount: e,
					isLivestreaming: t,
					onClick: n
				}) => {
					const o = Object(se.a)(xe.a.CollapsedComment, {
						[xe.a.LivestreamingWrapper]: t
					});
					return c.a.createElement("div", {
						className: o,
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
				ye = n("./src/reddit/actions/comment/authoring.ts"),
				Ie = n("./src/reddit/actions/comment/moderation.ts"),
				Te = n("./src/reddit/actions/modal.ts"),
				Oe = n("./src/reddit/actions/reportFlow/index.ts"),
				je = n("./src/reddit/actions/tooltip.ts"),
				Me = n("./src/reddit/actions/userBlocks.ts"),
				Ne = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Se = n("./src/reddit/constants/tracking.ts"),
				Ae = n("./src/reddit/selectors/telemetry.ts"),
				we = n("./src/telemetry/models/Event.ts");
			const Re = e => ({
					screen: Object(Ae.ab)(e),
					profile: Object(Ae.R)(e),
					subreddit: Object(Ae.hb)(e)
				}),
				Le = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(Ae.I)(n, t),
					source: we.b.ChatView,
					subreddit: Object(Ae.hb)(n)
				}),
				Pe = e => t => ({
					source: "chat_post",
					action: Se.c.VIEW,
					noun: "last_message",
					post: Object(Ae.I)(t, e),
					comment: Object(Ae.j)(t, e),
					...Re(t)
				});
			var Fe = n("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Be = n.n(Fe);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = re.a.button("MenuItem", Be.a),
				We = re.a.a("MenuItemPermalink", Be.a),
				He = ({
					children: e,
					comment: t,
					onClick: n,
					onHideTooltip: o,
					onShowTooltip: s,
					sendEvent: r,
					tooltipId: a,
					tooltipText: i,
					trackingNoun: d
				}) => c.a.createElement(Ue, {
					id: a,
					onMouseEnter: s.bind(void 0, a),
					onMouseLeave: o.bind(void 0, a),
					onClick: e => {
						n(e), d && (r(((e, t) => n => ({
							source: "comment",
							action: Se.c.CLICK,
							noun: e,
							post: Object(Ae.I)(n, t),
							comment: Object(Ae.j)(n, t),
							...Re(n)
						}))(d, t.id)), r(((e, t) => n => ({
							source: "comment_overflow_menu",
							action: Se.c.CLICK,
							noun: e,
							post: Object(Ae.I)(n, t),
							comment: Object(Ae.j)(n, t),
							...Re(n)
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
			var Ve = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				qe = n("./src/reddit/components/HumanDate/index.tsx"),
				ze = n("./src/reddit/components/ModModeReports/helpers.ts"),
				Ge = n("./src/reddit/components/ReportFlow/index.tsx"),
				Je = n("./src/reddit/components/ReportFlow/new.tsx"),
				Qe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Xe = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				$e = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				et = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				tt = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				nt = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				ot = n("./src/reddit/icons/svgs/Spam/index.tsx"),
				st = n("./src/reddit/models/PostDraft/index.ts"),
				rt = n("./src/reddit/selectors/activeModalId.ts"),
				at = n("./src/reddit/selectors/blockedRedditors.ts"),
				it = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ct = n("./src/reddit/selectors/user.ts");

			function dt() {
				return (dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const lt = re.a.wrapped($e.a, "BlockIcon", Be.a),
				mt = re.a.wrapped(Ze.a, "FlagIcon", Be.a),
				pt = re.a.wrapped(Xe.a, "EditIcon", Be.a),
				ut = re.a.wrapped(Ye.a, "ApproveIcon", Be.a),
				ht = re.a.wrapped(nt.a, "ReplyIcon", Be.a),
				bt = re.a.wrapped(tt.a, "RemoveIcon", Be.a),
				Ct = re.a.wrapped(ot.a, "SpamIcon", Be.a),
				vt = re.a.wrapped(et.a, "ModeratorIcon", Be.a),
				ft = e => (t, {
					comment: n
				}) => `${e}${n.id}`,
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
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
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
					commentsPageKey: n
				}) => ({
					onReplyClick: () => e(Object(ye.p)({
						parentCommentId: t.id,
						commentsPageKey: n,
						singleOpen: !0
					})),
					onReportClick: n => {
						n.stopPropagation(), e(Object(Oe.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(je.i)()),
					onShowTooltip: t => e(Object(je.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const o = t.media && t.media.rteMode;
						n && e(Object(ye.d)({
							commentId: t.id,
							draftKey: Object(ae.a)(st.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: n
						}))
					},
					onApproveClick: () => e(Object(Ie.a)(t.id)),
					onBlockClick: () => e(Object(Me.h)(t.author)),
					onUnblockClick: () => e(Object(Me.g)(t.author)),
					onUpvoteClick: () => e(Object(b.q)(t.id)),
					onDownvoteClick: () => e(Object(b.j)(t.id)),
					onDistinguishClick: n => e(Object(Ie.b)(t.id, n)),
					onSpamClick: () => e(Object(Ie.e)(t.id, !0)),
					onRemoveClick: () => e(Object(Ie.e)(t.id, !1)),
					deleteComment: () => n && e(Object(ye.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(Te.i)(gt(t.id))),
					toggleDeleteCommentModal: () => e(Object(Te.i)(gt(t.id)))
				}))(Object(Qe.c)(e => {
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
						onSpamClick: E,
						onUnblockClick: y,
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
					} = e, F = !!s && s.id === t.authorId, B = Object(ze.b)(t), D = t.isApproved && B, U = !t.bannedBy || t.bannedBy === m.l, W = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: x,
						sendEvent: w
					}, H = t.isMod;
					return c.a.createElement("div", {
						className: n
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
						onClick: () => I(H ? m.G.NONE : m.G.MODERATOR),
						tooltipId: A,
						tooltipText: H ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(vt, null)), u && U && c.a.createElement(He, dt({
						onClick: E,
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
						tooltipText: t.bannedBy === m.l ? te.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : te.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.l ? "confirm_remove" : "remove"
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
						onClick: () => d ? y() : b(),
						tooltipId: N,
						tooltipText: d ? te.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : te.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${d?"unblock":"block"}`
					}, W), c.a.createElement(lt, null))), !p && c.a.createElement(Ke, dt({}, e, {
						tooltipId: o,
						tooltipText: c.a.createElement(qe.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(qe.d, {
						seconds: t.created
					})))
				})),
				xt = n("./src/chat/helpers/dom.ts"),
				Et = n("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				yt = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				It = n.n(yt);
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
					commentPermalink: n,
					isLivestreaming: o,
					onReplyClick: s
				}) => e ? e.isDeleted ? c.a.createElement(Mt, null, c.a.createElement("span", {
					className: Object(se.a)(It.a.ReplyLinkBubble, It.a.delete, {
						[It.a.Livestreaming]: o
					})
				}, c.a.createElement(sn, null))) : c.a.createElement(Mt, null, c.a.createElement("a", {
					className: Object(se.a)(It.a.ReplyLinkBubble, {
						[It.a.Livestreaming]: o
					}),
					href: n,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(xt.a)(() => s(e.id))
				}, c.a.createElement(Ot, {
					userId: e.authorId,
					icon: e.profileImage
				}), c.a.createElement(jt, null, e.author), c.a.createElement(Et.a, {
					className: It.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(me.a)(e),
					rtJsonElementProps: Tt
				}))) : null),
				St = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				At = n.n(St);
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
				Lt = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ft = n("./src/reddit/controls/ErrorText/index.tsx"),
				Bt = n("./src/reddit/constants/experiments.ts"),
				Dt = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ut = e => Object(Dt.c)(e, {
				experimentName: Bt.qb,
				experimentEligibilitySelector: Dt.a
			}) === Bt.lb.Enabled;
			var Wt = n("./src/reddit/selectors/communityAwards.ts");
			const Ht = (e, {
				commentId: t
			}) => {
				const n = Object(V.b)(e, {
					commentId: t
				});
				if (n && n.associatedAwardId) return Object(Wt.a)(e, n.associatedAwardId)
			};
			var Kt = n("./src/reddit/selectors/gold/awardIcon.ts"),
				Vt = n("./src/reddit/selectors/poll/index.ts"),
				qt = n("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				zt = n.n(qt);
			const Gt = 250,
				Jt = 10,
				Qt = re.a.wrapped(Ft.b, "ErrorText", zt.a),
				Yt = re.a.wrapped(ce.a, "TopMeta", zt.a),
				Xt = re.a.span("DeleteText", zt.a),
				Zt = re.a.wrapped(Nt, "Reply", zt.a),
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
						if (n) return Object(Kt.a)(e, {
							award: n,
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
					} = this.state, o = t !== e.isExpanded || n !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && o) {
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
						comment: o,
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
						isTruncated: E
					} = this.state;
					if (!o) return null;
					d && oe()(() => this.elemRef.current && this.elemRef.current.focus()), oe()(() => this.elemRef && this.elemRef.current && f && f(this.elemRef));
					const y = o.isSystem,
						I = !l && !o.isDeleted && !y,
						T = !!e,
						O = Object(se.a)({
							[zt.a.SystemMessageWrapper]: y && !m && _,
							[zt.a.CommentWrapper]: !m && !y,
							[zt.a.CommentExpanded]: x,
							[zt.a.CommentTruncated]: E,
							[zt.a.HighlightTarget]: C,
							[zt.a.LivestreamingCommentWrapper]: m
						});
					return k ? c.a.createElement(Ee, {
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
						draftKey: Object(ae.a)(st.c.edit, o.id),
						commentsPageKey: r,
						isEditing: l,
						comment: o
					}), I && c.a.createElement(c.a.Fragment, null, c.a.createElement(Yt, {
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
					}, c.a.createElement(_e.a, {
						className: Object(se.a)(zt.a.ChatIcon, {
							[zt.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: o.profileImage,
						userId: o.authorId,
						isNSFW: o.profileOver18 || o.authorIconIsNSFW
					})), o.parentId && c.a.createElement(Zt, {
						commentId: o.parentId,
						onReplyClick: g,
						isLivestreaming: m
					}), m && c.a.createElement("span", {
						className: zt.a.livestreamingTimeStamp
					}, c.a.createElement(qe.d, {
						seconds: o.created
					})), T && e && m ? c.a.createElement(ge, {
						award: e,
						comment: o,
						iconUrl: t
					}) : u ? c.a.createElement(de.a, {
						comment: o,
						prediction: u
					}) : [c.a.createElement(pe.a, {
						className: Object(se.a)(zt.a.RichTextJson, {
							[zt.a.Livestreaming]: m
						}),
						content: Object(me.a)(o),
						key: `rich-text-${o.id}`,
						rtJsonElementProps: tn(this.props),
						useExplicitTextColor: m
					}), c.a.createElement(kt, {
						key: "Menu",
						className: Object(se.a)(zt.a.Menu, {
							[zt.a.Livestreaming]: m
						}),
						comment: o,
						commentPermalink: s,
						commentsPageKey: r,
						isLivestreaming: m,
						timestampUpdateTrigger: v
					})]), o.isDeleted && c.a.createElement(sn, null), I && a && a.map((e, t) => c.a.createElement(Qt, {
						key: `${t}-${e}`
					}, e)), !l && E && c.a.createElement("button", {
						className: Object(se.a)(zt.a.CommentReadMoreButton, {
							[zt.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), y && !m && _ && c.a.createElement(Rt, {
						comment: o
					}))
				}
			}
			const on = $t(en(nn)),
				sn = ({
					isLivestreaming: e
				}) => c.a.createElement(c.a.Fragment, null, c.a.createElement(_e.a, {
					className: Object(se.a)(zt.a.ChatIcon, {
						[zt.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), c.a.createElement(Xt, null, te.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var rn = on,
				an = n("./node_modules/lodash/isEqual.js"),
				cn = n.n(an),
				dn = n("./src/reddit/controls/Button/index.tsx"),
				ln = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				mn = n.n(ln);
			const pn = re.a.div("ButtonWrapper", mn.a),
				un = ({
					top: e
				}) => c.a.createElement("span", {
					className: Object(se.a)(mn.a.ChunkPlaceholder, {
						[mn.a.top]: e
					})
				}, te.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				hn = ({
					className: e,
					isLivestreaming: t,
					isLoading: n,
					setRef: o,
					...s
				}) => c.a.createElement("div", {
					ref: o,
					className: Object(se.a)(e, {
						[mn.a.ScrollerWrapper]: !t,
						[mn.a.LivestreamingWrapper]: t,
						[mn.a.loading]: n
					})
				}, !n && s.isPrevLoading && !t && c.a.createElement(un, {
					top: !0
				}), s.children, !n && s.isNextLoading && !t && c.a.createElement(un, null));
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
					const t = e.children.length !== this.props.children.length || !cn()(f()(e.children), f()(this.props.children)) || !cn()(a()(e.children), a()(this.props.children));
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
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(se.a)([mn.a.NewComments, mn.a.show]) : mn.a.NewComments;
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
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(pn, null, c.a.createElement(dn.l, {
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
					id: o
				}) => e.includes(n) && !t.includes(o),
				_n = Object(l.c)({
					blockedRedditors: at.a,
					blockedRedditorsPending: at.b,
					chatCommentLinks: K.g,
					isPending: K.d,
					liveCommentsWebsocket: vn.F,
					moreCommentsLink: K.E
				}),
				kn = Object(d.b)(_n, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e(Z(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						F(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(b.l)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.u.CHAT
					}, m.u.CHAT))
				}));
			class xn extends c.a.Component {
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
					return !!n && Object(u.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(p.a)(() => {
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
						loadComments: o,
						onLiveCommentsSubscribe: s,
						postId: r
					} = this.props;
					n && (e && o(), s(t, n, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = n)
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
					return e.postId !== c || e.draftKey !== d || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== s.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== l.length || t.timestampUpdateTrigger !== m
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
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && a(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && r && (i(s, r, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = r)), e.blockedRedditors.ids !== t.ids) {
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
					t && !t.pending && (e(t.moreCommentId), o(Le("history", n)))
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
						commentId: o,
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
					}, t.map(t => gn(e.ids, u, t) ? c.a.createElement(Ee, {
						commentCount: 1,
						isLivestreaming: a,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(rn, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: s,
						isLivestreaming: a,
						postId: l,
						renderedInOverlay: !!m,
						sendEvent: p,
						timestampUpdateTrigger: b,
						targetComment: t.id === o,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = kn(Object(Qe.c)(xn))
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
				return p
			})), n.d(t, "d", (function() {
				return u
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
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...s
				}) => {
					const a = Object(i.b)(t),
						c = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						d = e ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, s, d)
				},
				u = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
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
				r = (e, t = !1) => t ? e.coinPrice < o ? 0 : e.coinPrice < s ? 50 : 100 : 2048,
				a = (e, t, n = !1) => {
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

			function r({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case s.I.AUTHORIZATION_ERROR:
						return t ? o.fbt._("You might need to be logged in to do that.", null, {
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
				a = (o.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}), e => {
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
				}),
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
						d = Object(r.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.o(i),
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
					...a.o(e)
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
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(o.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case s.pb:
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
				subredditUserPowerupsFlairs: (e = d, t) => {
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
									o = n.map(({
										type: e
									}) => e),
									i = a.filter(r.b),
									c = i.map(({
										type: e
									}) => e),
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
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case c.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									o = e.powerups;
								if (!t || !o) return;
								const s = o.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
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
				return p
			})), n.d(t, "j", (function() {
				return u
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
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/commentSelector.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				c = (e, {
					subredditId: t
				}) => {
					var n, o;
					return t ? null === (o = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === o ? void 0 : o.flairsByType : null
				},
				d = (e, {
					subredditId: t,
					userId: n
				}) => {
					var o, s;
					return t && n ? null === (s = null === (o = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === o ? void 0 : o[t]) || void 0 === s ? void 0 : s[n] : null
				},
				l = Object(o.a)(d, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(o.a)([c, l], (e, t) => e && t ? e[t] : null),
				p = Object(o.a)(d, e => null == e ? void 0 : e.preferredSupporterType),
				u = Object(o.a)([c, p], (e, t) => e && t ? e[t] : null),
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
						supporterTypes: r,
						achievementTypes: a,
						preferredSupporterType: i,
						preferredAchievementType: c,
						pendingSupporterType: d,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: f(n, r, s, d || i),
						achievementFlairs: f(o, a, s, l || c)
					}
				}),
				C = Object(o.a)([d], e => !!e && e.isHidden),
				v = Object(o.a)([i, d, u], (e, t, n) => {
					if (!e || !t) return [];
					const o = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...o] : o
				}),
				f = (e, t, n, o) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === o
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				g = (e, {
					commentId: t
				}) => {
					const n = Object(s.b)(e, {
							commentId: t
						}),
						o = null == n ? void 0 : n.subredditId,
						r = null == n ? void 0 : n.authorId;
					return !(!o || !r) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var o, s, r;
						return t && n ? null === (r = null === (s = null === (o = e.features.powerups) || void 0 === o ? void 0 : o.usersSupportedSubreddits) || void 0 === s ? void 0 : s[n]) || void 0 === r ? void 0 : r[t] : null
					})(e, {
						subredditId: o,
						userId: r
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.4a46334aae0e48504491.js.map