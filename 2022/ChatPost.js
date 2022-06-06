// https://www.redditstatic.com/desktop2x/ChatPost.26d7507ea4065c4ffaab.js
// Retrieved at 6/6/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
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
					l = c(e, i);
				t = o(t), e -= i;
				for (var d = s(l, t); ++n < e;) t(n);
				return d
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
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/AwardBadges/index.tsx"),
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
					isLivestreaming: l,
					isStrong: d,
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
					isLivestreaming: l,
					isStrong: d,
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
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				f = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				x = n("./src/reddit/components/PostTopMeta/index.tsx"),
				E = n("./src/reddit/controls/MetaData/index.tsx"),
				_ = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				T = n("./src/reddit/selectors/gold/powerups/index.ts"),
				O = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				w = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(M);
			const L = e => {
				let {
					authorClassName: t,
					className: n,
					comment: s,
					collapsed: o,
					isLivestreaming: a,
					isStrong: i,
					onClick: l,
					renderedInOverlay: d
				} = e;
				const m = Object(y.f)(s),
					u = r.a.createElement(j.b, {
						ignore: m || !!s.distinguishType && s.distinguishType !== O.G.NONE,
						subredditId: s.subredditId,
						userId: s.authorId
					}, r.a.createElement(h, {
						className: t,
						collapsed: o,
						comment: s,
						isAuthorDeleted: Object(y.f)(s),
						isCommentAuthorBlocked: Object(y.g)(s),
						isLivestreaming: a,
						isStrong: i,
						onClick: l
					}));
				return m ? u : r.a.createElement(w.b, {
					className: Object(c.a)(N.a.authorHoverCard, n),
					collapsed: o,
					isCommentAuthorBlocked: Object(y.g)(s),
					postOrComment: s,
					tooltipType: d ? x.c.Lightbox : void 0
				}, u)
			};
			var R = n("./src/config.ts"),
				S = n("./src/reddit/actions/tooltip.ts"),
				A = n("./src/reddit/components/InfoTextTooltip/index.tsx");
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
					l = () => i(Object(S.h)({
						tooltipId: d
					})),
					d = P("CommentTopMeta--cakeday--", n, o),
					m = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(c.a)(F.a.cakedayIcon, t),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: d,
					onMouseEnter: l,
					onMouseLeave: l,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(A.c, {
					tooltipId: d,
					text: m
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/post.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx"),
				K = n("./src/reddit/helpers/path/index.ts");
			const q = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						onClick: o,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: l
					} = e, d = Object(a.d)(), m = P("CommentTopMeta--Created--", n.id, c), u = () => d(Object(S.h)({
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
							null == o || o(e), z(d, n.id), l && (e.preventDefault(), d(Object(V.Z)(Object(K.b)(i), n.postId)))
						},
						onMouseEnter: u,
						onMouseLeave: u,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(W.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(A.c, {
						tooltipId: m
					}, r.a.createElement(W.b, {
						seconds: n.created
					})))
				},
				z = (e, t) => {
					window.addEventListener("focus", (function n() {
						G(e, t, n)
					}))
				},
				G = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(H.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(J);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = () => r.a.createElement(E.a, {
				className: X.a.crowdControlText
			}, Z._("Crowd Control", null, {
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
				se = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				oe = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				re = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Report/index.tsx"),
				le = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				de = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(de);
			const ue = e => {
				let {
					comment: t,
					ignoreLock: o,
					renderedInOverlay: i,
					isAdmin: c
				} = e;
				const l = Object(a.d)(),
					d = e => () => l(Object(S.f)({
						tooltipId: e
					})),
					m = () => l(Object(S.i)()),
					u = e => P(e, t.id, i),
					p = u("CommentTopMeta--Approve--"),
					h = u("CommentTopMeta--Remove--"),
					b = u("CommentTopMeta--Report--"),
					C = u("CommentTopMeta--Spam--"),
					v = d(h);
				return r.a.createElement(r.a.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: me.a.approveIcon,
					desc: Object(se.a)(t),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: p,
					text: Object(se.a)(t)
				})), Object(ne.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: me.a.removeIcon,
					desc: Object(se.b)(t),
					id: h,
					onMouseEnter: v,
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: h,
					text: Object(se.b)(t)
				})), Object(ne.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(e => l(e.fetchReasonsAndOpenModal(t.subredditId, [t.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: m
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), t.isLocked && !o && r.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), t.bannedBy && t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: me.a.spamIcon,
					desc: Object(se.d)(t),
					id: C,
					onMouseEnter: d(C),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: C,
					text: Object(se.d)(t)
				})), Object(oe.a)(t) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: me.a.reportIcon,
					desc: Object(se.c)(t.numReports),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: m,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: b,
					text: Object(se.c)(t.numReports)
				})), t.isDeleted && c && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: me.a.removeIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: me.a.userDeletion
				}, s.fbt._("Comment deleted by user", null, {
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
				ge = e => {
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
						tooltipTemplate: l
					} = ve[n], d = i(), m = P(s, e.comment.id, e.renderedInOverlay), u = l(e), p = () => t(Object(S.h)({
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
					}, r.a.createElement("span", null, d), n === pe.Mod && r.a.createElement(fe, null)), r.a.createElement(A.c, {
						tooltipId: m,
						text: u
					}))
				},
				fe = () => r.a.createElement("img", {
					alt: s.fbt._("Moderator Achievement", null, {
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
				ye = n.n(Ie);
			const Te = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: l,
					ignoreLock: m,
					isModWithUserNotesPermissions: u,
					isLivestreaming: p,
					onCommentAuthorClick: h,
					onCommentTimestampClick: O,
					permalink: j,
					renderContractorBadge: w,
					renderedInOverlay: M,
					subredditDisplayText: N,
					isAdmin: R
				} = e, S = Object(I.a)(), A = i.subredditId, P = Object(a.e)(e => Object(T.h)(e, {
					subredditId: A
				}));
				if (i.isDeleted && !R) return r.a.createElement("div", {
					className: Object(c.a)(ye.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: ye.a.authorLine
				}, r.a.createElement("span", {
					className: ye.a.metaText
				}, i.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(E.c, {
					className: ye.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					permalink: j,
					renderedInOverlay: M
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
				}, r.a.createElement(L, {
					authorClassName: ye.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: p,
					onClick: h,
					renderedInOverlay: M
				})), !Object(y.f)(i) && u && r.a.createElement(f.a, {
					postOrComment: i,
					className: ye.a.LastAuthorModNoteIcon
				}), o && r.a.createElement(Q, null), r.a.createElement(ge, {
					className: ye.a.role,
					comment: i,
					subredditDisplayText: N,
					renderContractorBadge: w,
					renderedInOverlay: M
				}), i.isAuthorCakeday ? r.a.createElement(D, {
					className: ye.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: M
				}) : !Object(y.f)(i) && P && r.a.createElement(b.a, {
					className: ye.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						S(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(g.a, {
					className: ye.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(E.c, {
					className: ye.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					onClick: O,
					permalink: j,
					renderedInOverlay: M
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: ye.a.separator
				}), r.a.createElement(ke, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: ye.a.separator
				}), r.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: M,
					isAdmin: R
				}), r.a.createElement(d.a, {
					thing: i,
					tooltipType: M ? x.c.Lightbox : void 0
				})), l && !Object(_.o)(l) && r.a.createElement("span", {
					className: ye.a.userFlairLine
				}, r.a.createElement(v.b, {
					className: ye.a.flair,
					flair: l,
					forceSmallEmojis: !0
				})))
			};
			var Oe = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/models/Flair/index.ts"),
				Me = n("./src/reddit/selectors/comments.ts"),
				Ne = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Le = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Re = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/selectors/userFlair.ts"),
				Ae = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Pe = n.n(Ae);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = l.a.wrapped(v.b, "RightPositionedAuthorFlair", Pe.a),
				De = l.a.span("DeletedText", Pe.a),
				Ue = l.a.wrapped(E.a, "MetaSeparator", Pe.a),
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
						return Object(Se.e)(e, {
							subredditId: n.subredditId
						})
					},
					commentPermalink: (e, t) => Object(Me.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ne.b,
					isBlockingInterstitialV2Enabled: Ne.c,
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
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					commentPermalink: i,
					commentsPageKey: l,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: h,
					ignoreFlairPosition: b,
					ignoreLock: f,
					isAdmin: _,
					isBlockingInterstitialEnabled: k,
					isBlockingInterstitialV2Enabled: I,
					isModWithUserNotesPermissions: T,
					isLivestreaming: O,
					isPostComment: j,
					onCommentAuthorClick: w,
					onCommentTimestampClick: M,
					renderContractorBadge: N,
					renderedInOverlay: R,
					subredditDisplayText: S,
					userHasNft: A
				} = e, P = r.a.createElement(r.a.Fragment, null, r.a.createElement(Oe.b, {
					commentId: a.id
				}), r.a.createElement(Oe.a, {
					commentId: a.id,
					commentsPageKey: l
				}));
				if (j) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Te, {
					className: Object(c.a)(n, {
						[Pe.a.collapsed]: s
					}),
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: u || null,
					ignoreLock: f,
					isAdmin: _,
					isModWithUserNotesPermissions: T,
					isLivestreaming: O,
					onCommentAuthorClick: w,
					onCommentTimestampClick: M,
					permalink: i,
					renderContractorBadge: !!N,
					renderedInOverlay: R,
					subredditDisplayText: S
				}), P);
				if (a.isDeleted) return r.a.createElement(Ve, Be({}, e, {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(We, Be({}, e, {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				const B = !b && p === we.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s,
						[Pe.a.hasBadges]: h,
						[Pe.a.liveStreaming]: O
					}),
					"data-testid": "comment-top-meta"
				}, u && B && r.a.createElement(v.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(y.f)(a) && r.a.createElement(C.b, {
					className: Pe.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(L, {
					authorClassName: A ? Pe.a.NftAuthor : void 0,
					collapsed: s,
					comment: a,
					isLivestreaming: O,
					isStrong: !!m,
					onClick: w,
					renderedInOverlay: R
				}), o && r.a.createElement(Q, null), o && r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !B && r.a.createElement(Fe, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(g.a, {
					className: Pe.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(E.c, {
						className: Pe.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), P, r.a.createElement(ge, {
					className: Pe.a.authorRole,
					comment: a,
					subredditDisplayText: S,
					renderContractorBadge: !!N,
					renderedInOverlay: R
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !j && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.b, {
					className: Pe.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(q, {
					key: "Created",
					className: Pe.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: R,
					isBlockingInterstitialEnabled: k || I
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(ke, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(te, {
					editedAt: a.editedAt
				}))), r.a.createElement(ue, {
					comment: a,
					ignoreLock: f,
					renderedInOverlay: R
				}), r.a.createElement(d.a, {
					thing: a,
					tooltipType: R ? x.c.Lightbox : void 0
				}))
			});
			const Ve = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: l,
						renderedInOverlay: d
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(De, null, a.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(q, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c || l
					}), n && Ke({
						childrenInfo: t
					}))
				},
				We = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: c,
						isBlockingInterstitialV2Enabled: l
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(y.f)(t),
						collapsed: a
					})), r.a.createElement(E.b, {
						className: Pe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(E.c, {
						className: Pe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(q, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: c || l
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
				return w
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "a", (function() {
				return W
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/times.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
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
				_ = n.n(E);
			const k = d.a.wrapped(f.a, "CommentsIcon", _.a),
				I = d.a.wrapped(x.a, "SnooFacepalm", _.a),
				y = d.a.p("EmptyTitle", _.a),
				T = d.a.p("ErrorTitle", _.a),
				O = d.a.p("EmptyText", _.a),
				j = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(_.a.StateContainer, t)
					}, i.a.createElement(k, null), i.a.createElement(y, null, n ? s.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : s.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(O, null, s.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => i.a.createElement("div", {
					className: _.a.StateContainer
				}, i.a.createElement(k, null), i.a.createElement(y, null, s.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, s.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				M = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: _.a.StateContainer
					}, i.a.createElement(k, null), i.a.createElement(y, null, s.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(p.n, {
						to: Object(b.b)(t)
					}, s.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				N = Object(c.b)(null, (e, t) => {
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
						className: _.a.StateContainer
					}, i.a.createElement(I, null), i.a.createElement(T, null, t ? Object(h.a)({
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
						className: Object(l.a)(_.a.StateContainer, _.a.ErrorFullPage)
					}, i.a.createElement(N, {
						postId: t,
						commentId: n,
						sort: s,
						apiError: o
					}))
				},
				R = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", _.a),
				S = d.a.div("CommentsPlaceholderContainer", _.a),
				A = d.a.div("CommentPlaceholder", _.a),
				P = d.a.div("Avatar", _.a),
				B = d.a.div("VoteColumn", _.a),
				F = d.a.div("TextColumn", _.a),
				D = d.a.wrapped(g.b, "Upvote", _.a),
				U = d.a.wrapped(v.a, "Downvote", _.a),
				H = () => i.a.createElement("div", {
					className: Object(l.a)(_.a.TopMetaPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				V = () => i.a.createElement("div", {
					className: Object(l.a)(_.a.CommentBodyPlaceholder, Object(C.a)({
						isLoading: !0
					}))
				}),
				W = e => i.a.createElement(S, null, r()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(C.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(D, null), i.a.createElement(U, null)), i.a.createElement(F, null, i.a.createElement(H, null), i.a.createElement(V, null)))))
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
				"menu-item": "_19Oknc--43y-15yu9_cXvM",
				menuItem: "_19Oknc--43y-15yu9_cXvM",
				icon: "_2c4Vwo7oqlN6Uy7jE8vOMG",
				"dropdown-menu": "_5-qWgdQX88_8RpqBUS2Hk",
				dropdownMenu: "_5-qWgdQX88_8RpqBUS2Hk",
				"dropdown-menu-item": "Yxh6i1JK2Fa0erIglDupg",
				dropdownMenuItem: "Yxh6i1JK2Fa0erIglDupg",
				"dropdown-icon": "p2X8ezHA9FBKN1J4cCbfg",
				dropdownIcon: "p2X8ezHA9FBKN1J4cCbfg"
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
				replyWrapper: "_1ynXMY9Mxs-wjpOpZwSFxU"
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
				return ts
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/debounce.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/last.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
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
				_ = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				k = n("./src/reddit/models/Comment/index.ts"),
				I = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Vote/index.ts");
			const O = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const n = w(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(_.b)(e.associated_award) : void 0,
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
							voteState: T.a.notVoted,
							...t || {}
						}
					}
				},
				j = e => {
					switch (e) {
						case k.e.Admin:
							return m.G.ADMIN;
						case k.e.Moderator:
							return m.G.MODERATOR;
						case k.e.Alumni:
							return m.G.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				w = e => g()((e || []).filter(e => x()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || k.e.None;
			const M = (e, t, n) => {
				const s = {
						[t]: {}
					},
					{
						author: o,
						author_flair_background_color: r,
						author_flair_richtext: a,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: l,
						author_flair_type: d
					} = n;
				if (o && d) {
					if (d === I.f.Richtext) {
						if (!r || !a) return;
						return {
							[t]: {
								[o]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									richtext: a,
									templateId: i,
									textColor: l
								}
							}
						}
					}
					if (d === I.f.Text) {
						if (!c) return s;
						return {
							[t]: {
								[o]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									text: c,
									templateId: i,
									textColor: l
								}
							}
						}
					}
				}
			};
			var N = n("./src/lib/env/index.ts");
			const L = new Map,
				R = e => e,
				S = new Set;
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
					const n = R(t),
						s = L.get(n);
					s && s.socket && (s.isClosePlanned = !0, s.socket.close())
				},
				F = (e, t, n, s) => {
					const o = R(t),
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
					}), a.socket.addEventListener("message", H.bind(null, s)), a.socket.addEventListener("close", D.bind(null, o, s)), a.socket.addEventListener("error", V.bind(null, o)), window && window.addEventListener("beforeunload", B.bind(null, e, t))
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
						url: l
					} = n;
					if (L.delete(e), o < a && i.readyState !== WebSocket.OPEN) {
						const e = s * Math.pow(2, o),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							d = {
								...n.retries,
								connectionAttempts: o + 1
							};
						setTimeout(() => {
							F(l, c, d, t)
						}, i), Object(N.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				H = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(N.a)() && console.error(t)
					}
				},
				V = (e, t) => {
					const n = L.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? L.delete(e) : Object(N.a)() && console.error(t)
				};
			var W = n("./src/reddit/selectors/comments.ts"),
				K = n("./src/reddit/selectors/commentSelector.ts"),
				q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				z = n("./src/reddit/actions/comment/websocket/constants.ts");
			const G = Object(C.a)(z.b),
				J = Object(C.a)(z.c),
				X = Object(C.a)(z.a),
				Z = Object(C.a)(z.d),
				Q = {},
				Y = (e, t, n, s) => async (o, r) => {
					(e => new Promise(t => {
						const {
							cb: n,
							url: s,
							uniqueId: o
						} = e;
						S.has(o) ? t() : (S.add(o), setTimeout(() => {
							S.delete(o), F(s, o, {
								...P
							}, n), t()
						}, 1))
					}))({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case A.NEW_COMMENT: {
									const n = t.payload.name,
										a = O(t.payload),
										i = r(),
										c = Object(K.b)(i, {
											commentId: n
										}),
										l = !(!n || !Q[n]);
									if (a && !l) {
										const n = M(0, s, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(W.w)(i, {
												commentsPageKey: e
											});
											o(G({
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
								case A.UPDATE_COMMENT: {
									const n = t.payload.name,
										a = r(),
										i = Object(K.b)(a, {
											commentId: n
										}),
										c = O(t.payload);
									if (i && c) {
										const n = M(0, s, t.payload),
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
								case A.UPDATE_COMMENT_SCORE: {
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
								case A.DELETE_COMMENT: {
									const e = t.payload.name,
										n = r(),
										s = Object(K.b)(n, {
											commentId: e
										});
									s && !s.isDeleted ? o(X({
										id: e
									})) : Q[e] = A.DELETE_COMMENT;
									break
								}
								case A.REMOVE_COMMENT: {
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
									!a || a.isRemoved && a.isDeleted || i || c ? Q[n] = A.REMOVE_COMMENT : o(X({
										id: n
									}));
									break
								}
								case A.USER_JOIN: {
									const n = O(t.payload, {
											isSystem: !0
										}),
										s = !0;
									n && o(Z({
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
				te = n("./src/reddit/selectors/experiments/chat.ts"),
				ne = n("./node_modules/fbt/lib/FbtPublic.js"),
				se = n("./node_modules/lodash/defer.js"),
				oe = n.n(se),
				re = n("./src/lib/classNames/index.ts"),
				ae = n("./src/lib/lessComponent.tsx"),
				ie = n("./src/lib/makeDraftKey/index.ts"),
				ce = n("./src/lib/objectSelector/index.ts"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				de = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				me = n("./src/reddit/helpers/awards/message.ts"),
				ue = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				pe = n("./src/reddit/components/RichTextJson/index.tsx"),
				he = n("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				be = n("./src/reddit/icons/svgs/Star/index.tsx"),
				Ce = n("./src/reddit/icons/svgs/Star2/index.tsx"),
				ve = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				ge = n.n(ve);
			const fe = Object(ce.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				xe = e => {
					const {
						award: t,
						comment: n,
						iconUrl: s
					} = e;
					let o = "",
						r = !0,
						a = !1;
					return t.coinPrice < me.a ? (o = ge.a.silverTierAwardComment, r = !1) : t.coinPrice < me.b ? o = ge.a.goldTierAwardComment : (o = ge.a.platinumTierAwardComment, a = !0), c.a.createElement("div", {
						className: Object(re.a)(ge.a.awardComment, o)
					}, c.a.createElement("div", {
						className: ge.a.imageContainer
					}, r && c.a.createElement(c.a.Fragment, null, c.a.createElement(be.a, {
						className: Object(re.a)(ge.a.backgroundAnimation, ge.a.backgroundStar)
					}), c.a.createElement(Ce.a, {
						className: Object(re.a)(ge.a.backgroundAnimation, ge.a.backgroundStar, ge.a.backgroundStar2)
					})), a && c.a.createElement(c.a.Fragment, null, c.a.createElement(he.a, {
						className: Object(re.a)(ge.a.backgroundAnimation, ge.a.backgroundSparkle, ge.a.sparkleBottomLeft)
					}), c.a.createElement(he.a, {
						className: Object(re.a)(ge.a.backgroundAnimation, ge.a.backgroundSparkle, ge.a.sparkleTopRight)
					}), c.a.createElement(he.a, {
						className: Object(re.a)(ge.a.backgroundAnimation, ge.a.backgroundSparkle, ge.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: s
					})), c.a.createElement(pe.a, {
						className: ge.a.awardCommentText,
						content: Object(ue.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: fe(e),
						useExplicitTextColor: !0
					}))
				};
			var Ee = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				_e = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				ke = n.n(_e);
			var Ie = e => {
					let {
						commentCount: t,
						isLivestreaming: n,
						onClick: s
					} = e;
					const o = Object(re.a)(ke.a.CollapsedComment, {
						[ke.a.LivestreamingWrapper]: n
					});
					return c.a.createElement("div", {
						className: o,
						onClick: s
					}, ne.fbt._("collapsed {collapsed message} (may be sensitive)", [ne.fbt._param("collapsed message", ne.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [ne.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				ye = n("./src/reddit/icons/svgs/Trash3/index.tsx"),
				Te = n("./src/reddit/components/CommentsChat/Comment/DeletedComment/index.m.less"),
				Oe = n.n(Te);
			const je = e => {
				let {
					className: t,
					isLivestreaming: n,
					isV2Enabled: s
				} = e;
				return c.a.createElement("div", {
					className: t
				}, s ? c.a.createElement(ye.a, {
					className: Oe.a.TrashIcon
				}) : c.a.createElement(Ee.a, {
					className: Oe.a.ChatIcon,
					trash: !0
				}), c.a.createElement("span", {
					className: Object(re.a)(Oe.a.DeleteText, {
						[Oe.a.Livestreaming]: n,
						[Oe.a.isV2Enabled]: s
					})
				}, ne.fbt._("deleted", null, {
					hk: "3NxJy9"
				})))
			};
			var we = n("./src/reddit/actions/comment/authoring.ts"),
				Me = n("./src/reddit/actions/comment/moderation.ts"),
				Ne = n("./src/reddit/actions/modal.ts"),
				Le = n("./src/reddit/actions/reportFlow/index.ts"),
				Re = n("./src/reddit/actions/tooltip.ts"),
				Se = n("./src/reddit/actions/userBlocks.ts"),
				Ae = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Pe = n("./src/reddit/helpers/trackers/commentsChat.ts"),
				Be = n("./src/reddit/components/CommentsChat/Comment/Menu/v1/index.m.less"),
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
			const Ue = ae.a.button("MenuItem", Fe.a),
				He = ae.a.a("MenuItemPermalink", Fe.a),
				Ve = e => {
					let {
						children: t,
						comment: n,
						onClick: s,
						onHideTooltip: o,
						onShowTooltip: r,
						sendEvent: a,
						tooltipId: i,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return c.a.createElement(Ue, {
						id: i,
						onMouseEnter: r.bind(void 0, i),
						onMouseLeave: o.bind(void 0, i),
						onClick: e => {
							s(e), d && a(Object(Pe.d)(d, n.id))
						}
					}, t, c.a.createElement(Ae.c, {
						tooltipId: i
					}, l))
				},
				We = e => c.a.createElement(Ve, De({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(He, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var Ke = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				qe = n("./src/reddit/components/HumanDate/index.tsx"),
				ze = n("./src/reddit/components/ModModeReports/helpers.ts"),
				Ge = n("./src/reddit/components/ReportFlow/index.tsx"),
				Je = n("./src/reddit/components/ReportFlow/new.tsx"),
				Xe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ze = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Qe = n("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ye = n("./src/reddit/icons/svgs/Flag/index.tsx"),
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

			function lt() {
				return (lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const dt = ae.a.wrapped($e.a, "BlockIcon", Fe.a),
				mt = ae.a.wrapped(Ye.a, "FlagIcon", Fe.a),
				ut = ae.a.wrapped(Qe.a, "EditIcon", Fe.a),
				pt = ae.a.wrapped(Ze.a, "ApproveIcon", Fe.a),
				ht = ae.a.wrapped(nt.a, "ReplyIcon", Fe.a),
				bt = ae.a.wrapped(tt.a, "RemoveIcon", Fe.a),
				Ct = ae.a.wrapped(st.a, "SpamIcon", Fe.a),
				vt = ae.a.wrapped(et.a, "ModeratorIcon", Fe.a),
				gt = e => (t, n) => {
					let {
						comment: s
					} = n;
					return `${e}${s.id}`
				},
				ft = e => `Comment-${e}--Modal--DeleteComment`,
				xt = Object(d.c)({
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
					approveTooltipId: gt("CommentChatPost--Approve--"),
					blockTooltipId: gt("CommentChatPost--Block--"),
					createTooltipId: gt("CommentChatPost--Create--"),
					editTooltipId: gt("CommentChatPost--Edit--"),
					replyTooltipId: gt("CommentChatPost--Reply--"),
					reportTooltipId: gt("CommentChatPost--Report--"),
					upvoteTooltipId: gt("CommentChatPost--Upvote--"),
					downvoteTooltipId: gt("CommentChatPost--Downvote--"),
					distinguishTooltipId: gt("CommentChatPost--Distinguish--"),
					spamTooltipId: gt("CommentChatPost--Spam--"),
					removeTooltipId: gt("CommentChatPost--Remove--"),
					deleteTooltipId: gt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(rt.a)(e) === ft(n.id)
					},
					reportingRevampEnabled: it.a
				});
			var Et = Object(l.b)(xt, (e, t) => {
					let {
						comment: n,
						commentsPageKey: s
					} = t;
					return {
						onReplyClick: () => e(Object(we.r)({
							parentCommentId: n.id,
							commentsPageKey: s,
							singleOpen: !0
						})),
						onReportClick: t => {
							t.stopPropagation(), e(Object(Le.c)(n.id, !1))
						},
						onHideTooltip: () => e(Object(Re.i)()),
						onShowTooltip: t => e(Object(Re.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = n.media && n.media.rteMode;
							s && e(Object(we.d)({
								commentId: n.id,
								draftKey: Object(ie.a)(ot.c.edit, n.id),
								text: n.bodyMD || "",
								commentMode: t,
								commentsPageKey: s
							}))
						},
						onApproveClick: () => e(Object(Me.a)(n.id)),
						onBlockClick: () => e(Object(Se.h)(n.author)),
						onUnblockClick: () => e(Object(Se.g)(n.author)),
						onUpvoteClick: () => e(Object(b.q)(n.id)),
						onDownvoteClick: () => e(Object(b.j)(n.id)),
						onDistinguishClick: t => e(Object(Me.b)(n.id, t)),
						onSpamClick: () => e(Object(Me.e)(n.id, !0)),
						onRemoveClick: () => e(Object(Me.e)(n.id, !1)),
						deleteComment: () => s && e(Object(we.i)(n.id, n.postId)),
						onDeleteClick: () => e(Object(Ne.i)(ft(n.id))),
						toggleDeleteCommentModal: () => e(Object(Ne.i)(ft(n.id)))
					}
				})(Object(Xe.c)(e => {
					const {
						comment: t,
						className: n,
						createTooltipId: s,
						currentUser: o,
						deleteComment: r,
						deleteTooltipId: a,
						editTooltipId: i,
						isAuthorBlocked: l,
						isDeleteModalOpen: d,
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
						onShowTooltip: _,
						onSpamClick: k,
						onUnblockClick: I,
						onDistinguishClick: y,
						reportFlowIsOpen: T,
						replyTooltipId: O,
						reportTooltipId: j,
						approveTooltipId: w,
						blockTooltipId: M,
						removeTooltipId: N,
						distinguishTooltipId: L,
						sendEvent: R,
						spamTooltipId: S,
						toggleDeleteCommentModal: A,
						timestampUpdateTrigger: P,
						showTime: B
					} = e, F = !!o && o.id === t.authorId, D = Object(ze.b)(t), U = t.isApproved && D, H = !t.bannedBy || t.bannedBy === m.k, V = {
						comment: t,
						onHideTooltip: g,
						onShowTooltip: _,
						sendEvent: R
					}, W = t.isMod;
					return c.a.createElement("div", {
						className: Object(re.a)(Fe.a.container, n)
					}, c.a.createElement("div", {
						className: Object(re.a)(Fe.a.Menu, {
							[Fe.a.Livestreaming]: u
						})
					}, (t.bannedBy || D) && p && c.a.createElement(Ve, lt({
						onClick: h,
						tooltipId: w,
						tooltipText: U ? ne.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : ne.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(pt, null)), !t.isLocked && c.a.createElement(Ve, lt({
						onClick: x,
						tooltipId: O,
						tooltipText: ne.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(ht, null)), p && F && c.a.createElement(Ve, lt({
						onClick: () => y(W ? m.G.NONE : m.G.MODERATOR),
						tooltipId: L,
						tooltipText: W ? ne.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : ne.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(vt, null)), p && H && c.a.createElement(Ve, lt({
						onClick: k,
						tooltipId: S,
						tooltipText: ne.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(Ct, null)), !F && c.a.createElement(Ve, lt({
						onClick: E,
						tooltipId: j,
						tooltipText: ne.fbt._("Report", null, {
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
					}))(), F && !u && c.a.createElement(Ve, lt({
						onClick: v,
						tooltipId: i,
						tooltipText: ne.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, V), c.a.createElement(ut, null)), p && H ? c.a.createElement(Ve, lt({
						onClick: f,
						tooltipId: N,
						tooltipText: t.bannedBy === m.k ? ne.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : ne.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, V), c.a.createElement(bt, null)) : F && c.a.createElement(Ve, lt({
						onClick: C,
						tooltipId: a,
						tooltipText: ne.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(bt, null)), d && c.a.createElement(Ke.a, {
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
						onConfirm: r,
						toggleModal: A,
						withOverlay: !0
					}), !!o && !F && c.a.createElement(Ve, lt({
						onClick: () => l ? I() : b(),
						tooltipId: M,
						tooltipText: l ? ne.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : ne.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${l?"unblock":"block"}`
					}, V), c.a.createElement(dt, null))), B && c.a.createElement(We, lt({}, e, {
						tooltipId: s,
						tooltipText: c.a.createElement(qe.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(qe.d, {
						seconds: t.created
					})))
				})),
				_t = n("./src/reddit/hooks/useTracking.ts"),
				kt = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				It = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				yt = n("./src/reddit/icons/svgs/Reply2/index.tsx"),
				Tt = n("./src/reddit/components/CommentsChat/Comment/Menu/v2/index.m.less"),
				Ot = n.n(Tt);

			function jt() {
				return (jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const wt = e => {
				let {
					children: t,
					commentId: n,
					commentsPageKey: s,
					onClick: o,
					tooltipId: r,
					tooltipText: a,
					trackingNoun: i,
					...d
				} = e;
				const m = Object(l.d)(),
					u = Object(_t.a)();
				return c.a.createElement("button", jt({}, d, {
					id: r,
					className: Ot.a.menuItem,
					onMouseEnter: () => {
						m(Object(Re.f)({
							tooltipId: r
						}))
					},
					onMouseLeave: () => {
						m(Object(Re.i)())
					},
					onClick: e => {
						null == o || o(e), i && n && s && u(Object(Pe.d)(i, n, s))
					}
				}), t, c.a.createElement(Ae.c, {
					tooltipId: r
				}, a))
			};
			var Mt = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Nt = n("./src/reddit/controls/Dropdown/index.tsx"),
				Lt = n("./src/reddit/selectors/tooltip.ts");
			const Rt = Object(Mt.a)(Nt.a),
				St = e => {
					let {
						dropdownId: t,
						icon: n,
						children: s,
						onClick: o
					} = e;
					const r = Object(l.d)(),
						a = Object(l.e)(e => Object(Lt.b)(t)(e)),
						i = c.a.useCallback(() => {
							r(Object(Re.h)({
								tooltipId: t
							})), null == o || o()
						}, [r, t, o]);
					return c.a.createElement("button", {
						id: t,
						className: Ot.a.menuItem,
						onClick: i
					}, n, c.a.createElement(Rt, {
						className: Ot.a.dropdownMenu,
						isOpen: a,
						tooltipId: t
					}, s))
				};
			var At = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Pt = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				Bt = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				Ft = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				Dt = n("./src/reddit/icons/svgs/Bling/index.tsx"),
				Ut = n("./src/reddit/icons/svgs/Distinguish/index.tsx");
			const Ht = e => {
				let {
					comment: t,
					commentsPageKey: n,
					isCommentAuthor: s = !1
				} = e;
				const o = t.id,
					r = Object(ze.b)(t),
					a = t.isApproved && r,
					i = t.bannedBy === m.k,
					d = t.isMod,
					u = !s && (!t.bannedBy || i),
					p = Object(l.d)(),
					h = Object(_t.a)(),
					b = c.a.useCallback(e => {
						h(Object(Pe.d)(e, o, n))
					}, [h, o, n]),
					C = c.a.useCallback(() => {
						p(Object(Me.a)(o)), b("approve")
					}, [p, b, o]),
					v = c.a.useCallback(() => {
						const e = i ? "confirm_remove" : "remove";
						p(Object(Me.e)(o, !1)), b(e)
					}, [p, b, o, i]),
					g = c.a.useCallback(() => {
						p(Object(Me.e)(o, !0)), b("spam")
					}, [p, b, o]),
					f = c.a.useCallback(() => {
						p(Object(Me.b)(o, m.G.MODERATOR))
					}, [p, o]),
					x = c.a.useCallback(() => {
						p(Object(Me.b)(o, m.G.NONE))
					}, [p, o]);
				return c.a.createElement(c.a.Fragment, null, s && d && c.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: ne.fbt._("Undistinguish as Mod", null, {
						hk: "2ohUEB"
					}),
					onClick: x
				}, c.a.createElement(Dt.a, {
					className: Ot.a.dropdownIcon
				})), s && !d && c.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: ne.fbt._("Distinguish as Mod", null, {
						hk: "jywZz"
					}),
					onClick: f
				}, c.a.createElement(Ut.a, {
					className: Ot.a.dropdownIcon
				})), (t.bannedBy || r) && c.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: a ? ne.fbt._("Reapprove", null, {
						hk: "vlRqn"
					}) : ne.fbt._("Approve", null, {
						hk: "3Vc0Oh"
					}),
					onClick: C
				}, c.a.createElement(Pt.a, {
					className: Ot.a.dropdownIcon
				})), u && c.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: i ? ne.fbt._("Confirm removal", null, {
						hk: "3q7g1J"
					}) : ne.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: v
				}, c.a.createElement(Bt.a, {
					className: Ot.a.dropdownIcon
				})), u && c.a.createElement(At.b, {
					className: Ot.a.dropdownMenuItem,
					displayText: ne.fbt._("Remove as Spam", null, {
						hk: "2bRa8t"
					}),
					onClick: g
				}, c.a.createElement(Ft.a, {
					className: Ot.a.dropdownIcon
				})))
			};
			var Vt = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				Wt = n("./src/reddit/icons/fonts/Report/index.tsx"),
				Kt = n("./src/reddit/icons/svgs/UserBlock/index.tsx");
			const qt = e => `Comment-${e}--Modal--DeleteComment`,
				zt = e => `CommentChatPost--ModMenu--${e}`,
				Gt = e => `CommentChatPost--OverflowMenu--${e}`,
				Jt = e => {
					let {
						comment: t,
						commentsPageKey: n,
						isLivestreaming: s = !1
					} = e;
					const o = t.id,
						r = Object(l.d)(),
						a = Object(_t.a)(),
						i = Object(l.e)(ct.k),
						d = Object(l.e)(e => Object(at.c)(e, t.authorId)),
						m = i && i.id === t.authorId,
						u = c.a.useCallback(e => {
							a(Object(Pe.d)(e, o, n))
						}, [a, o, n]),
						p = c.a.useCallback(() => {
							r(Object(Le.c)(o, !1)), u("report")
						}, [r, u, o]),
						h = c.a.useCallback(() => {
							r(Object(Ne.i)(qt(t.id))), u("delete")
						}, [r, u, t]),
						b = c.a.useCallback(() => {
							const e = t.media && t.media.rteMode;
							n && r(Object(we.d)({
								commentId: t.id,
								draftKey: Object(ie.a)(ot.c.edit, t.id),
								text: t.bodyMD || "",
								commentMode: e,
								commentsPageKey: n
							})), u("edit")
						}, [r, u, t, n]),
						C = c.a.useCallback(() => {
							r(Object(Se.h)(t.author)), u("block")
						}, [r, u, t]),
						v = c.a.useCallback(() => {
							r(Object(Se.g)(t.author)), u("unblock")
						}, [r, u, t]);
					return c.a.createElement(c.a.Fragment, null, m && !s && c.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: ne.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: b
					}, c.a.createElement(Vt.a, {
						className: Ot.a.dropdownIcon
					})), m && c.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: ne.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						onClick: h
					}, c.a.createElement(ye.a, {
						className: Ot.a.dropdownIcon
					})), !m && c.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: ne.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						onClick: p
					}, c.a.createElement(Wt.a, {
						className: Ot.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && !d && c.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: ne.fbt._("Block", null, {
							hk: "2DpLB7"
						}),
						onClick: C
					}, c.a.createElement(Kt.a, {
						className: Ot.a.dropdownIcon
					})), Boolean(i) && Boolean(t.authorId) && !m && d && c.a.createElement(At.b, {
						className: Ot.a.dropdownMenuItem,
						displayText: ne.fbt._("Unblock", null, {
							hk: "2WvyIX"
						}),
						onClick: v
					}, c.a.createElement(Kt.a, {
						className: Ot.a.dropdownIcon
					})))
				},
				Xt = e => (t, n) => {
					let {
						comment: s
					} = n;
					return `${e}${s.id}`
				},
				Zt = Object(d.c)({
					currentUser: ct.k,
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
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === n.id
					},
					replyTooltipId: Xt("CommentChatPost--Reply--"),
					upvoteTooltipId: Xt("CommentChatPost--Upvote--"),
					downvoteTooltipId: Xt("CommentChatPost--Downvote--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(rt.a)(e) === qt(n.id)
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(at.c)(e, n.authorId)
					}
				});
			var Qt = Object(l.b)(Zt, (e, t) => {
				let {
					comment: n,
					commentsPageKey: s
				} = t;
				return {
					onReplyClick: () => e(Object(we.r)({
						parentCommentId: n.id,
						commentsPageKey: s,
						singleOpen: !0
					})),
					onUpvoteClick: () => e(Object(b.q)(n.id)),
					onDownvoteClick: () => e(Object(b.j)(n.id)),
					deleteComment: () => s && e(Object(we.i)(n.id, n.postId)),
					toggleDeleteCommentModal: () => e(Object(Ne.i)(qt(n.id)))
				}
			})(e => {
				let {
					comment: t,
					commentsPageKey: n,
					className: s,
					currentUser: o,
					deleteComment: r,
					isAuthorBlocked: a,
					isDeleteModalOpen: i,
					isLivestreaming: l,
					isMod: d,
					onReplyClick: m,
					reportFlowIsOpen: u,
					replyTooltipId: p,
					toggleDeleteCommentModal: h
				} = e;
				const b = !!o && o.id === t.authorId,
					C = Object(_t.a)(),
					v = c.a.useCallback(() => {
						C(Object(Pe.d)("other_options", t.id, n))
					}, [C, t.id, n]);
				return c.a.createElement("div", {
					className: Object(re.a)(Ot.a.menu, s, {
						[Ot.a.livestreaming]: l
					})
				}, !t.isLocked && !a && Boolean(t.authorId) && c.a.createElement(wt, {
					onClick: m,
					commentId: t.id,
					commentsPageKey: n,
					tooltipId: p,
					tooltipText: ne.fbt._("Reply", null, {
						hk: "14j3OR"
					}),
					trackingNoun: "reply",
					"data-testid": "comment-reply"
				}, c.a.createElement(yt.a, {
					className: Ot.a.icon
				})), d && c.a.createElement(St, {
					dropdownId: zt(t.id),
					icon: c.a.createElement(kt.a, {
						className: Ot.a.icon
					})
				}, c.a.createElement(Ht, {
					comment: t,
					commentsPageKey: n,
					isCommentAuthor: b
				})), c.a.createElement(St, {
					dropdownId: Gt(t.id),
					icon: c.a.createElement(It.a, {
						className: Ot.a.icon
					}),
					onClick: v
				}, c.a.createElement(Jt, {
					comment: t,
					isLivestreaming: l,
					commentsPageKey: n
				})), u && c.a.createElement(Je.a, {
					withOverlay: !0,
					overlayCustomStyles: Ge.b,
					postId: t.postId,
					commentId: t.id
				}), i && c.a.createElement(Ke.a, {
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
					onConfirm: r,
					toggleModal: h,
					withOverlay: !0
				}))
			});
			const Yt = e => {
				return Object(l.e)(te.a) ? c.a.createElement(Qt, e) : c.a.createElement(Et, e)
			};
			var $t = n("./src/chat/helpers/dom.ts"),
				en = n("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				tn = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				nn = n.n(tn);

			function sn() {
				return (sn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const on = {},
				rn = ae.a.wrapped(Ee.a, "ChatIcon", nn.a),
				an = ae.a.span("ReplyAuthor", nn.a),
				cn = ae.a.div("ReplyWrapper", nn.a);
			var ln = Object(l.b)(() => Object(d.c)({
					comment: K.b,
					commentPermalink: W.m
				}))(e => {
					let {
						comment: t,
						commentId: n,
						commentPermalink: s,
						isLivestreaming: o,
						isV2Enabled: r = !1,
						onReplyClick: a
					} = e;
					return t ? t.isDeleted ? c.a.createElement(cn, null, c.a.createElement("span", {
						className: Object(re.a)(nn.a.ReplyLinkBubble, nn.a.delete, {
							[nn.a.Livestreaming]: o,
							[nn.a.isV2Enabled]: r,
							[nn.a.isDeleted]: r
						})
					}, c.a.createElement(je, {
						isV2Enabled: r
					}))) : c.a.createElement(cn, null, c.a.createElement("a", {
						className: Object(re.a)(nn.a.ReplyLinkBubble, {
							[nn.a.Livestreaming]: o,
							[nn.a.isV2Enabled]: r
						}),
						href: s,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object($t.a)(() => a(t.id))
					}, c.a.createElement(rn, sn({
						userId: t.authorId,
						icon: t.profileImage
					}, r ? {
						width: 16,
						height: 16
					} : {})), c.a.createElement(an, null, t.author), c.a.createElement(en.a, {
						className: nn.a.ReplyComment,
						key: `rich-text-${n}`,
						content: Object(ue.a)(t),
						rtJsonElementProps: on
					}))) : null
				}),
				dn = n("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				mn = n.n(dn);
			const un = Object(ce.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var pn = e => {
					const {
						comment: t
					} = e;
					return void 0 === un(e) ? null : c.a.createElement(pe.a, {
						className: mn.a.SystemMessageText,
						content: Object(ue.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: un(e),
						useExplicitTextColor: !0
					})
				},
				hn = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				bn = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Cn = n("./src/reddit/controls/ErrorText/index.tsx"),
				vn = n("./src/reddit/constants/experiments.ts"),
				gn = n("./src/reddit/helpers/chooseVariant/index.ts");
			const fn = e => Object(gn.c)(e, {
				experimentName: vn.vb,
				experimentEligibilitySelector: gn.a
			}) === vn.qb.Enabled;
			var xn = n("./src/reddit/selectors/communityAwards.ts");
			const En = (e, t) => {
				let {
					commentId: n
				} = t;
				const s = Object(K.b)(e, {
					commentId: n
				});
				if (s && s.associatedAwardId) return Object(xn.a)(e, s.associatedAwardId)
			};
			var _n = n("./src/reddit/selectors/gold/awardIcon.ts"),
				kn = n("./src/reddit/selectors/poll/index.ts"),
				In = n("./src/reddit/components/CommentsChat/Comment/v1/index.m.less"),
				yn = n.n(In);
			const Tn = 250,
				On = 10,
				jn = ae.a.wrapped(Cn.b, "ErrorText", yn.a),
				wn = ae.a.wrapped(le.a, "TopMeta", yn.a),
				Mn = ae.a.wrapped(ln, "Reply", yn.a),
				Nn = Object(bn.u)(),
				Ln = Object(l.b)(() => Object(d.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						return En(e, {
							commentId: n
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: n
						} = t;
						const s = En(e, {
							commentId: n
						});
						if (s) return Object(_n.a)(e, {
							award: s,
							minSize: 64,
							postOrCommentId: n
						})
					},
					comment: K.b,
					commentPermalink: W.m,
					errorMsgs: W.H,
					flair: W.e,
					isActive: (e, t) => {
						let {
							commentId: n
						} = t;
						return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
					},
					isEditing: W.z,
					prediction: kn.f,
					subreddit: bn.r,
					shouldRenderSystemMessages: fn
				})),
				Rn = Object(ce.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Sn extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Tn && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let n = Tn;
						if (t) {
							n = e.scrollHeight + On;
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
						isActive: l,
						isEditing: d,
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
						isExpanded: _,
						isTruncated: k
					} = this.state;
					if (!s) return null;
					l && oe()(() => this.elemRef.current && this.elemRef.current.focus()), oe()(() => this.elemRef && this.elemRef.current && g && g(this.elemRef));
					const I = s.isSystem,
						y = !d && !s.isDeleted && !I,
						T = !!e,
						O = Object(re.a)({
							[yn.a.SystemMessageWrapper]: I && !m && x,
							[yn.a.CommentWrapper]: !m && !I,
							[yn.a.CommentExpanded]: _,
							[yn.a.CommentTruncated]: k,
							[yn.a.HighlightTarget]: C,
							[yn.a.LivestreamingCommentWrapper]: m
						});
					return E ? c.a.createElement(Ie, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: O
					}, d && c.a.createElement(hn.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: u,
						sendEvent: b,
						draftKey: Object(ie.a)(ot.c.edit, s.id),
						commentsPageKey: r,
						isEditing: d,
						comment: s
					}), y && c.a.createElement(c.a.Fragment, null, c.a.createElement(wn, {
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
					}, c.a.createElement(Ee.a, {
						className: Object(re.a)(yn.a.ChatIcon, {
							[yn.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: s.profileImage,
						userId: s.authorId,
						isNSFW: s.profileOver18 || s.authorIconIsNSFW
					})), s.parentId && c.a.createElement(Mn, {
						commentId: s.parentId,
						onReplyClick: f,
						isLivestreaming: m
					}), m && c.a.createElement("span", {
						className: yn.a.livestreamingTimeStamp
					}, c.a.createElement(qe.d, {
						seconds: s.created
					})), T && e && m ? c.a.createElement(xe, {
						award: e,
						comment: s,
						iconUrl: t
					}) : p ? c.a.createElement(de.a, {
						comment: s,
						prediction: p
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
						className: Object(re.a)(yn.a.RichTextJson, {
							[yn.a.Livestreaming]: m
						}),
						content: Object(ue.a)(s),
						rtJsonElementProps: Rn(this.props),
						useExplicitTextColor: m
					}), c.a.createElement(Yt, {
						className: Object(re.a)(yn.a.Menu, {
							[yn.a.Livestreaming]: m
						}),
						comment: s,
						commentPermalink: o,
						commentsPageKey: r,
						isLivestreaming: m,
						showTime: !m,
						timestampUpdateTrigger: v
					}))), s.isDeleted && c.a.createElement(je, {
						className: Object(re.a)(yn.a.DeletedComment, {
							[yn.a.Livestreaming]: m
						})
					}), y && a && a.map((e, t) => c.a.createElement(jn, {
						key: `${t}-${e}`
					}, e)), !d && k && c.a.createElement("button", {
						className: Object(re.a)(yn.a.CommentReadMoreButton, {
							[yn.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, ne.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), I && !m && x && c.a.createElement(pn, {
						comment: s
					}))
				}
			}
			var An = Nn(Ln(Sn)),
				Pn = n("./src/reddit/components/CommentsChat/Comment/v2/DeletedComment/index.m.less"),
				Bn = n.n(Pn);
			const Fn = () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
				className: Bn.a.icon
			}, c.a.createElement(ye.a, null)), c.a.createElement("span", {
				className: Bn.a.label
			}, ne.fbt._("This message was deleted", null, {
				hk: "23fI7b"
			})));
			var Dn = n("./src/reddit/components/UserIcon/index.tsx"),
				Un = n("./src/reddit/components/CommentsChat/Comment/v2/index.m.less"),
				Hn = n.n(Un);
			var Vn = Object(bn.u)()(Object(l.b)(() => Object(d.c)({
				associatedAward: (e, t) => {
					let {
						commentId: n
					} = t;
					return En(e, {
						commentId: n
					})
				},
				awardIconUrl: (e, t) => {
					let {
						commentId: n
					} = t;
					const s = En(e, {
						commentId: n
					});
					if (s) return Object(_n.a)(e, {
						award: s,
						minSize: 64,
						postOrCommentId: n
					})
				},
				comment: K.b,
				commentPermalink: W.m,
				errorMsgs: W.H,
				flair: W.e,
				isActive: (e, t) => {
					let {
						commentId: n
					} = t;
					return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
				},
				isEditing: W.z,
				prediction: kn.f,
				isSelectedForReply: (e, t) => {
					let {
						commentId: n,
						commentsPageKey: s
					} = t;
					return Object(W.K)(e, {
						commentId: n,
						commentsPageKey: s
					})
				},
				subreddit: bn.r,
				shouldRenderSystemMessages: fn,
				isDropdownMenuVisible: (e, t) => {
					let {
						commentId: n
					} = t;
					const s = zt(n),
						o = Gt(n);
					return Object(Lt.b)(s)(e) || Object(Lt.b)(o)(e)
				}
			}))(e => {
				let {
					associatedAward: t,
					awardIconUrl: n,
					childrenInfo: s,
					comment: o,
					commentPermalink: r,
					commentsPageKey: a,
					errorMsgs: i,
					flair: l,
					isActive: d,
					isEditing: m,
					isDropdownMenuVisible: u,
					isLivestreaming: p = !1,
					isSelectedForReply: h,
					postId: b,
					prediction: C,
					renderedInOverlay: v,
					sendEvent: g,
					targetComment: f,
					timestampUpdateTrigger: x,
					addToRefList: E,
					onReplyClick: _,
					shouldRenderSystemMessages: k
				} = e;
				const I = c.a.useRef(null),
					y = c.a.useRef(null),
					[T, O] = c.a.useState(o && o.collapsed),
					[j, w] = c.a.useState(!1),
					[M, N] = c.a.useState(!1),
					L = c.a.useMemo(() => ({
						renderingObjectInfo: o || void 0
					}), [o]),
					R = () => {
						O(!T)
					};
				if (c.a.useEffect(() => {
						var e;
						y.current && (null === (e = y.current) || void 0 === e ? void 0 : e.scrollHeight) > 250 && !t && !p && N(!0)
					}, []), c.a.useEffect(() => {
						if (!y.current || p) return;
						const e = y.current;
						let t = 250;
						if (j) {
							t = e.scrollHeight + 10;
							const n = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", n)
							};
							e.addEventListener("transitionend", n)
						}
						e.style.maxHeight = `${t}px`
					}, [j, M, p]), c.a.useEffect(() => {
						var e;
						d && (null === (e = I.current) || void 0 === e || e.focus())
					}, [d]), c.a.useEffect(() => {
						I.current && E && E(I)
					}, [E]), !o) return null;
				const S = o.isSystem,
					A = !o.isDeleted && !S,
					P = !!t;
				return T ? c.a.createElement(Ie, {
					commentCount: 1,
					onClick: R
				}) : c.a.createElement("div", {
					className: Object(re.a)(Hn.a.container, {
						[Hn.a.livestreaming]: p,
						[Hn.a.selectedForReply]: h,
						[Hn.a.hover]: u
					}),
					tabIndex: 0,
					ref: I
				}, o.parentId && c.a.createElement("div", {
					className: Hn.a.replyWrapper
				}, c.a.createElement(ln, {
					commentId: o.parentId,
					onReplyClick: e => {
						g(Object(Pe.a)(e)), _(e)
					},
					isLivestreaming: p,
					isV2Enabled: !0
				})), c.a.createElement("div", {
					id: f ? "targetComment" : void 0,
					className: Object(re.a)({
						[Hn.a.comment]: !S,
						[Hn.a.systemMessageComment]: S && !p && k,
						[Hn.a.highlighted]: f,
						[Hn.a.expanded]: j
					})
				}, A && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: Hn.a.avatar
				}, c.a.createElement(Dn.a, {
					className: Object(re.a)(Hn.a.icon),
					iconUrl: o.profileImage || o.authorIconImage,
					userName: o.author,
					isNSFW: Boolean(o.profileOver18 || o.authorIconIsNSFW)
				})), c.a.createElement("div", null, c.a.createElement(le.a, {
					className: Hn.a.TopMeta,
					childrenInfo: s,
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: o,
					commentsPageKey: a,
					compact: !0,
					flair: l,
					ignoreFlairPosition: !0,
					ignoreLock: !0,
					isLivestreaming: p,
					renderedInOverlay: v
				}), c.a.createElement("span", {
					className: Hn.a.timestamp
				}, c.a.createElement(qe.d, {
					seconds: o.created
				}))), !m && c.a.createElement("div", {
					ref: y,
					className: Object(re.a)(Hn.a.commentBody, {
						[Hn.a.expanded]: j
					})
				}, P && t && p ? c.a.createElement(xe, {
					award: t,
					comment: o,
					iconUrl: n
				}) : C ? c.a.createElement(de.a, {
					comment: o,
					prediction: C
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(pe.a, {
					className: Object(re.a)(Hn.a.richTextJson, {
						[Hn.a.livestreaming]: p
					}),
					content: Object(ue.a)(o),
					rtJsonElementProps: L,
					useExplicitTextColor: p
				}), c.a.createElement(Yt, {
					className: Hn.a.menu,
					comment: o,
					commentPermalink: r,
					commentsPageKey: a,
					isLivestreaming: p,
					timestampUpdateTrigger: x
				}))), m && c.a.createElement(hn.a, {
					isV2: !0,
					isLivestreaming: p,
					postId: b,
					sendEvent: g,
					draftKey: Object(ie.a)(ot.c.edit, o.id),
					commentsPageKey: a,
					isEditing: m,
					comment: o
				})), o.isDeleted && c.a.createElement(Fn, null), A && !m && i && i.map((e, t) => c.a.createElement(Cn.b, {
					key: `${t}-${e}`,
					className: Hn.a.errorText
				}, e)), !m && M && !j && c.a.createElement("button", {
					type: "button",
					className: Object(re.a)(Hn.a.readMoreButton, {
						[Hn.a.livestreaming]: p
					}),
					onClick: () => {
						w(!j)
					}
				}, ne.fbt._("Read more", null, {
					hk: "3s9Bqf"
				})), S && !p && k && c.a.createElement(pn, {
					comment: o
				})))
			}));
			const Wn = e => {
				return Object(l.e)(te.b) ? c.a.createElement(Vn, e) : c.a.createElement(An, e)
			};
			var Kn = n("./node_modules/lodash/isEqual.js"),
				qn = n.n(Kn),
				zn = n("./src/reddit/controls/Button/index.tsx"),
				Gn = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Jn = n.n(Gn);
			const Xn = ae.a.div("ButtonWrapper", Jn.a),
				Zn = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(re.a)(Jn.a.ChunkPlaceholder, {
							[Jn.a.top]: t
						})
					}, ne.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Qn = e => {
					let {
						className: t,
						isLivestreaming: n,
						isLoading: s,
						setRef: o,
						...r
					} = e;
					return c.a.createElement("div", {
						ref: o,
						className: Object(re.a)(t, {
							[Jn.a.ScrollerWrapper]: !n,
							[Jn.a.LivestreamingWrapper]: n,
							[Jn.a.loading]: s
						})
					}, !s && r.isPrevLoading && !n && c.a.createElement(Zn, {
						top: !0
					}), r.children, !s && r.isNextLoading && !n && c.a.createElement(Zn, null))
				};
			class Yn extends c.a.Component {
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
					const t = e.children.length !== this.props.children.length || !qn()(g()(e.children), g()(this.props.children)) || !qn()(a()(e.children), a()(this.props.children));
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
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(re.a)([Jn.a.NewComments, Jn.a.show]) : Jn.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Qn, {
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
						className: Jn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: Jn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Jn.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(Xn, null, c.a.createElement(zn.l, {
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
			var $n = Yn,
				es = n("./src/reddit/selectors/posts.ts");
			const ts = 6e4,
				ns = (e, t, n) => {
					let {
						authorId: s,
						id: o
					} = n;
					return e.includes(s) && !t.includes(o)
				},
				ss = Object(d.c)({
					blockedRedditors: at.a,
					blockedRedditorsPending: at.b,
					chatCommentLinks: W.g,
					isPending: W.d,
					liveCommentsWebsocket: es.E,
					moreCommentsLink: W.G
				}),
				os = Object(l.b)(ss, (e, t) => ({
					onLiveCommentsSubscribe: (n, s, o) => e(Y(n, s, o, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						B(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(b.l)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object($.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.t.CHAT
					}, m.t.CHAT))
				}));
			class rs extends c.a.Component {
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
						draftKey: l
					} = this.props, {
						expandedCommentIds: d,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== l || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== s || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== o.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
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
					t && !t.pending && (e(t.moreCommentId), s(Object(Pe.e)("history", n)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, n = a()(e);
					(null == n ? void 0 : n.id) && t(Object(Pe.b)(n.id))
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
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: u
					} = this.props, {
						expandedCommentIds: p,
						targetCommentIndex: h,
						timestampUpdateTrigger: b
					} = this.state, C = !(t && t.length || i || l);
					return c.a.createElement(c.a.Fragment, null, C ? c.a.createElement(ee.c, {
						className: r,
						isChat: !0
					}) : c.a.createElement($n, {
						className: n,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: i || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => ns(e.ids, p, t) ? c.a.createElement(Ie, {
						commentCount: 1,
						isLivestreaming: a,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Wn, {
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: o,
						isLivestreaming: a,
						postId: d,
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
			t.default = os(Object(Xe.c)(rs))
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
				return d
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
				l = n.n(c);
			const d = a.a.span("metaText", l.a),
				m = e => r.a.createElement(d, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: n,
						useUpvotes: o,
						...a
					} = e;
					const c = Object(i.b)(n),
						l = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? l : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(d, a, m)
				},
				p = e => r.a.createElement(d, null, s.fbt._({
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
						l = Object(r.g)(i, {
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
							achievementFlairId: null == l ? void 0 : l.type,
							achievementFlairTitle: null == l ? void 0 : l.name
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
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", l({}, e, {
				className: Object(r.a)(Object(a.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, o.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
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
		"./src/reddit/icons/svgs/Distinguish/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
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
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
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
		"./src/reddit/icons/svgs/Reply2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, e), o.a.createElement("path", {
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
		"./src/reddit/icons/svgs/Trash3/index.tsx": function(e, t, n) {
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
					viewBox: "0 0 16 16"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M12.6004 4.84721L13.5996 4.91361L12.9908 14.0664C12.9841 14.5896 12.7788 15.0907 12.4165 15.4683C12.0543 15.8458 11.5621 16.0716 11.0396 16.1H4.95961C4.43817 16.0715 3.94695 15.8462 3.58511 15.4697C3.22327 15.0932 3.01774 14.5934 3.01001 14.0712L2.39961 4.91361L3.39801 4.84721L4.00681 14C4.00283 14.2684 4.09775 14.5288 4.27347 14.7317C4.44919 14.9345 4.69343 15.0657 4.95961 15.1H11.0396C11.3064 15.0651 11.551 14.9331 11.7267 14.7293C11.9025 14.5256 11.997 14.2642 11.9924 13.9952L12.6004 4.84721ZM14.3996 2.40001V3.40001H1.59961V2.40001H4.79961V2.10001C4.82803 1.51721 5.08582 0.969319 5.51672 0.575891C5.94762 0.182464 6.51664 -0.0245568 7.09961 7.87831e-06H8.89961C9.48258 -0.0245568 10.0516 0.182464 10.4825 0.575891C10.9134 0.969319 11.1712 1.51721 11.1996 2.10001V2.40001H14.3996ZM5.79961 2.40001H10.1996V2.10001C10.1705 1.78279 10.0179 1.48972 9.77473 1.28396C9.53155 1.0782 9.21727 0.976221 8.89961 1.00001H7.09961C6.78195 0.976221 6.46767 1.0782 6.22449 1.28396C5.98132 1.48972 5.82873 1.78279 5.79961 2.10001V2.40001Z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/UserBlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, e), o.a.createElement("path", {
				d: "M22.06 22.5599L22.0756 22.5443L2.98242 3.44869L1.91922 4.51069L10.612 13.1999H9.04482C6.98492 13.182 5.00204 13.9819 3.5312 15.4242C2.06037 16.8664 1.2217 18.8332 1.19922 20.8931V21.4715C1.20144 21.8256 1.34409 22.1644 1.59584 22.4134C1.8476 22.6625 2.18789 22.8015 2.54202 22.7999H20.212L21.016 23.6039L21.9292 22.6895C21.991 22.6655 22.0515 22.6382 22.1104 22.6079L22.06 22.5599ZM2.70042 21.2999V20.8931C2.72256 19.2312 3.40291 17.6459 4.59226 16.4849C5.7816 15.3239 7.38285 14.6819 9.04482 14.6999H12.112L18.712 21.2999H2.70042ZM16.1992 13.3067C17.8371 13.5564 19.3524 14.3229 20.5239 15.4944C21.6954 16.666 22.4619 18.1812 22.7116 19.8191L19.5916 16.6991C19.4956 16.5971 19.3984 16.4975 19.2952 16.4027L16.1992 13.3067ZM7.67922 4.78669L6.50322 3.60709C6.89178 2.70868 7.49425 1.91898 8.25807 1.30686C9.02189 0.694742 9.92387 0.278789 10.8853 0.0952792C11.8468 -0.0882305 12.8386 -0.0337233 13.7742 0.254047C14.7098 0.541818 15.5607 1.05411 16.2529 1.74625C16.945 2.43839 17.4573 3.28936 17.7451 4.22493C18.0328 5.16051 18.0873 6.15228 17.9038 7.11376C17.7203 8.07524 17.3044 8.97722 16.6922 9.74104C16.0801 10.5049 15.2904 11.1073 14.392 11.4959L13.21 10.3199C13.9672 10.1114 14.6564 9.70784 15.2089 9.14961C15.7614 8.59138 16.1577 7.89799 16.3583 7.13867C16.559 6.37935 16.5569 5.58068 16.3523 4.82241C16.1477 4.06414 15.7478 3.37282 15.1924 2.81747C14.6371 2.26212 13.9458 1.86219 13.1875 1.6576C12.4292 1.45301 11.6306 1.45094 10.8712 1.65158C10.1119 1.85222 9.41853 2.24855 8.8603 2.80101C8.30207 3.35346 7.89854 4.0427 7.69002 4.79989L7.67922 4.78669Z",
				fill: "inherit"
			}))
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
			const l = {},
				d = e => {
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
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
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
									l = d(n),
									m = d(i);
								o = {
									...o,
									[e]: {
										achievementTypes: s,
										supporterTypes: c,
										preferredAchievementType: l,
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
				return l
			})), n.d(t, "h", (function() {
				return d
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
				l = (e, t) => {
					let {
						subredditId: n,
						userId: s
					} = t;
					var o, r;
					return n && s ? null === (r = null === (o = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === o ? void 0 : o[n]) || void 0 === r ? void 0 : r[s] : null
				},
				d = Object(s.a)(l, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([c, d], (e, t) => e && t ? e[t] : null),
				u = Object(s.a)(l, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([c, u], (e, t) => e && t ? e[t] : null),
				h = Object(s.a)([c, l], (e, t) => {
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
				b = Object(s.a)([i, l], (e, t) => {
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
						pendingSupporterType: l,
						pendingAchievementType: d
					} = t;
					return {
						supporterFlairs: g(n, r, o, l || i),
						achievementFlairs: g(s, a, o, d || c)
					}
				}),
				C = Object(s.a)([l], e => !!e && e.isHidden),
				v = Object(s.a)([i, l, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				g = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				f = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.26d7507ea4065c4ffaab.js.map