// https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.a66d77e2b1b19af79a7d.js
// Retrieved at 7/30/2020, 3:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~ModQueuePages"], {
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, o) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				Approve: "_34mJxMS9sOCTo8dtFMQOLR",
				approve: "_34mJxMS9sOCTo8dtFMQOLR",
				Lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				Automoderator: "EytgzUMjj1jcbKtFsodey",
				automoderator: "EytgzUMjj1jcbKtFsodey",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				Moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				Remove: "_1DQWCB93pHPVVJCXOGsblO",
				remove: "_1DQWCB93pHPVVJCXOGsblO",
				Report: "_2wYWDvjfG1JR6VNK9ryPFk",
				report: "_2wYWDvjfG1JR6VNK9ryPFk",
				Spam: "_3kK86gdpll9ihjOPWJE6f2",
				spam: "_3kK86gdpll9ihjOPWJE6f2",
				Op: "_2pZswNTz_uW46hN02djL7j",
				op: "_2pZswNTz_uW46hN02djL7j",
				Contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				a = o("./node_modules/react/index.js"),
				r = o.n(a),
				d = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/constants/index.ts"),
				m = o("./src/lib/humanizeDateTime/index.ts"),
				p = o("./src/lib/lessComponent.tsx"),
				u = o("./src/lib/timeAgo/index.ts"),
				h = o("./src/reddit/components/AuthorLink/index.tsx"),
				b = o("./src/reddit/components/AwardBadges/index.tsx"),
				T = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				v = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				I = o("./src/reddit/components/Flair/index.tsx"),
				x = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				f = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				E = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = o("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = o("./src/reddit/selectors/economics.ts"),
				y = o("./src/reddit/helpers/isRemoved.ts"),
				k = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				w = o("./src/reddit/actions/comment/index.ts"),
				A = o("./src/reddit/models/Comment/index.ts"),
				S = o("./src/reddit/models/Flair/index.ts"),
				O = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				j = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				L = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				N = o("./src/reddit/icons/fonts/helpers.tsx"),
				R = o("./src/reddit/icons/fonts/Op/index.m.less"),
				D = o.n(R);
			var H = p.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(N.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(N.a, null, e.desc)), "OpIcon", D.a),
				B = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				P = o("./src/reddit/icons/fonts/Report/index.tsx"),
				U = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				F = o("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				V = o("./src/reddit/icons/svgs/Cake/index.tsx"),
				z = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				G = o("./src/reddit/controls/MetaData/index.tsx"),
				J = o("./src/reddit/selectors/subreddit.ts"),
				Q = o("./src/reddit/selectors/userFlair.ts"),
				K = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				W = o.n(K);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var X = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (o[n[a]] = e[n[a]])
				}
				return o
			};
			const q = p.a.wrapped(I.b, "RightPositionedAuthorFlair", W.a),
				Y = p.a.wrapped(O.a, "AdminIcon", W.a),
				$ = p.a.wrapped(j.a, "Approve", W.a),
				ee = p.a.wrapped(L.a, "Lock", W.a),
				te = p.a.div("AdminEmeritus", W.a),
				oe = p.a.wrapped(F.a, "Automoderator", W.a),
				ne = p.a.wrapped(V.a, "CakeIcon", W.a),
				ae = p.a.wrapped(z.a, "Moderator", W.a),
				re = p.a.wrapped(B.a, "Remove", W.a),
				de = p.a.wrapped(P.a, "Report", W.a),
				ie = p.a.wrapped(U.a, "Spam", W.a),
				se = p.a.wrapped(H, "Op", W.a),
				ce = p.a.wrapped(O.a, "Contractor", W.a),
				le = p.a.a("MetaLink", W.a),
				me = p.a.wrapped(G.a, "EditedText", W.a),
				pe = p.a.wrapped(G.a, "StickiedText", W.a),
				ue = p.a.span("DeletedText", W.a),
				he = p.a.wrapped(G.a, "MetaSeparator", W.a),
				be = p.a.wrapped(G.a, "CrowdControlText", W.a),
				Te = p.a.wrapped(f.b, "AuthorHoverCard", W.a),
				ve = p.a.a("RemovalReason", W.a),
				Ie = p.a.wrapped(T.b, "Component", W.a),
				xe = e => (t, o) => {
					let {
						comment: n,
						renderedInOverlay: a
					} = o;
					return "".concat(e).concat(n.id).concat(a ? "inOverlay" : "")
				},
				fe = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				Ee = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				Ce = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Me = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				_e = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				ye = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				ke = Object(d.b)(() => Object(i.c)({
					adminTooltipId: xe("CommentTopMeta--Admin--"),
					cakedayTooltipId: xe("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: xe("CommentTopMeta--AdEm--"),
					automodTooltipId: xe("CommentTopMeta--Automod--"),
					approveTooltipId: xe("CommentTopMeta--Approve--"),
					createdTooltipId: xe("CommentTopMeta--Created--"),
					contractorTooltipId: xe("CommentTopMeta--Contractor--"),
					gildedTooltipId: xe("CommentTopMeta--Gold--"),
					lockedTooltipId: xe("CommentTopMeta--Locked--"),
					modTooltipId: xe("CommentTopMeta--Mod--"),
					opTooltipId: xe("CommentTopMeta--OP--"),
					removeTooltipId: xe("CommentTopMeta--Remove--"),
					reportTooltipId: xe("CommentTopMeta--Report--"),
					spamTooltipId: xe("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: o
						} = t;
						return !!Object(_.r)(e, o.subredditId, o.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const o = Object(J.H)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: o
						} = t;
						return Object(Q.d)(e, {
							subredditId: o.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function o() {
							((e, t, o) => {
								window.removeEventListener("focus", o), e(Object(w.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(w.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, o)
						}))
					},
					onHideTooltip: () => e(Object(s.i)()),
					onShowTooltip: t => e(Object(s.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(o => e(o.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = ke(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: o,
					approveTooltipId: n,
					automodTooltipId: a,
					cakedayTooltipId: d,
					children: i,
					className: s,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: T,
					compact: f,
					flair: E,
					flairPosition: _,
					hasBadges: y,
					isAvatarsInCommentsEnabled: k,
					isLivestreaming: g,
					ignoreFlairPosition: w,
					ignoreLock: O,
					lockedTooltipId: j,
					modTooltipId: L,
					onHideTooltip: N,
					onShowTooltip: R,
					opTooltipId: D,
					openRemovalReasonModal: H,
					removeTooltipId: B,
					renderContractorBadge: P,
					renderedInOverlay: U,
					reportTooltipId: F,
					spamTooltipId: V,
					subredditDisplayText: z
				} = e;
				if (u.isDeleted) return r.a.createElement(ge, Z({}, e, {
					className: Object(c.a)(s, W.a.container, {
						[W.a.collapsed]: m
					})
				}));
				if (m) return r.a.createElement(we, Z({}, e, {
					className: Object(c.a)(s, W.a.container, {
						[W.a.collapsed]: m
					})
				}));
				const J = !w && _ === S.b.Left;
				return r.a.createElement("div", {
					className: Object(c.a)(s, W.a.container, {
						[W.a.collapsed]: m,
						[W.a.hasBadges]: y,
						[W.a.liveStreaming]: g
					})
				}, E && J && r.a.createElement(I.b, {
					flair: E,
					forceSmallEmojis: f
				}), !Object(A.d)(u) && r.a.createElement(Ie, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), r.a.createElement(Te, {
					postOrComment: u,
					tooltipType: U ? M.c.Lightbox : void 0
				}, r.a.createElement(v.b, {
					ignore: Object(A.d)(u) || !!u.distinguishType && u.distinguishType !== l.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, r.a.createElement(Se, {
					comment: u,
					isLivestreaming: g,
					isStrong: !!f,
					isAuthorDeleted: Object(A.d)(u)
				}, i && i))), p && r.a.createElement(be, null, "Crowd Control"), p && r.a.createElement(G.c, {
					className: W.a.metaText,
					key: "crowdControlSeparator"
				}), E && !J && r.a.createElement(q, {
					flair: E,
					forceSmallEmojis: f
				}), !f && r.a.createElement(x.a, {
					className: W.a.publicPoints,
					contentId: u.id,
					metaSeparator: r.a.createElement(G.c, {
						className: W.a.metaText
					}),
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(C.b, {
					commentId: u.id
				}), r.a.createElement(C.a, {
					commentId: u.id,
					commentsPageKey: h
				}), r.a.createElement(Le, {
					comment: u,
					compact: f,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: d,
					contractorTooltipId: T,
					modTooltipId: L,
					onHideTooltip: N,
					onShowTooltip: R,
					opTooltipId: D,
					renderContractorBadge: P,
					subredditDisplayText: z
				})), !f && r.a.createElement(r.a.Fragment, null, !u.isDeleted && !k && r.a.createElement(G.b, {
					className: W.a.metaText,
					isScoreHidden: u.isScoreHidden,
					score: u.score
				}), !k && r.a.createElement(G.c, {
					className: W.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(Oe, Z({
					key: "Created"
				}, e)), u.isStickied && Re(), u.editedAt && Ae(u.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(Ne, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: a,
					ignoreLock: O,
					lockedTooltipId: j,
					onHideTooltip: N,
					onShowTooltip: R,
					openRemovalReasonModal: H,
					removeTooltipId: B,
					reportTooltipId: F,
					spamTooltipId: V
				})), r.a.createElement(b.a, {
					thing: u,
					tooltipType: U ? M.c.Lightbox : void 0
				}))
			});
			const ge = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: a,
						comment: d
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(ue, null, d.deletedBy === A.a.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Oe, Z({
						key: "Created"
					}, e)), o && je({
						childrenInfo: t
					}))
				},
				we = e => {
					const {
						comment: t,
						className: o,
						childrenInfo: n
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement("div", null, r.a.createElement(Se, {
						comment: t,
						isAuthorDeleted: Object(A.d)(t)
					})), r.a.createElement(G.b, {
						className: W.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(G.c, {
						className: W.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Oe, Z({
						key: "Created"
					}, e)), je({
						childrenInfo: n
					}))
				},
				Ae = e => r.a.createElement(a.Fragment, null, r.a.createElement(G.c, {
					className: W.a.metaText
				}), r.a.createElement(me, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(u.d)(e))], {
					hk: "1tiB0u"
				}))),
				Se = e => r.a.createElement(h.a, {
					className: W.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === l.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class Oe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							onCreatedClick: o
						} = e,
						n = X(e, ["comment", "onCreatedClick"]);
					return r.a.createElement(le, {
						href: t.permalink,
						id: n.createdTooltipId,
						onClick: o,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, r.a.createElement("span", null, Object(u.d)(t.created)), De(n.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const je = e => {
				const {
					hasContinueThread: t,
					numChildren: o
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return r.a.createElement(he, {
					className: W.a.metaText
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
			class Le extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						o = X(e, ["comment"]);
					return r.a.createElement(a.Fragment, null, t.isAuthorCakeday && r.a.createElement(ne, {
						"aria-label": Ee(),
						id: o.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isAuthorCakeday && De(o.cakedayTooltipId, Ee()), t.isAdmin && r.a.createElement(Y, {
						desc: fe(),
						id: o.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isAdmin && De(o.adminTooltipId, fe()), t.distinguishType === l.C.ALUMNI_ADMIN && r.a.createElement(te, {
						"aria-label": Ce(),
						id: o.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: o.onHideTooltip
					}, "Δ"), t.distinguishType === l.C.ALUMNI_ADMIN && De(o.adminEmeritusTooltipId, Ce()), t.isMod && r.a.createElement(ae, {
						desc: Me(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isMod && De(o.modTooltipId, Me(o.subredditDisplayText)), t.isOp && r.a.createElement(se, {
						desc: _e(),
						id: o.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isOp && De(o.opTooltipId, _e()), o.renderContractorBadge && r.a.createElement(ce, {
						desc: ye(),
						id: o.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: o.onHideTooltip
					}), o.renderContractorBadge && De(o.contractorTooltipId, ye()))
				}
			}
			class Ne extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						o = X(e, ["comment"]);
					return r.a.createElement(a.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement($, {
						desc: Object(k.a)(t),
						id: o.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: o.onHideTooltip
					}), (t.approvedBy || t.isApproved) && De(o.approveTooltipId, Object(k.a)(t)), Object(y.a)(t) && r.a.createElement(re, {
						desc: Object(k.c)(t),
						id: o.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip
					}), Object(y.a)(t) && De(o.removeTooltipId, Object(k.c)(t)), Object(y.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement(ve, {
						onClick: o.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(y.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement(ve, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), t.isLocked && !o.ignoreLock && r.a.createElement(ee, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: o.lockedTooltipId,
						onMouseEnter: () => {
							o.onShowTooltip(o.lockedTooltipId)
						},
						onMouseLeave: o.onHideTooltip
					}), t.bannedBy && t.isSpam && r.a.createElement(ie, {
						desc: Object(k.e)(t),
						id: o.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.bannedBy && t.isSpam && De(o.spamTooltipId, Object(k.e)(t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && r.a.createElement(oe, {
						className: Object(c.a)({
							[W.a.removed]: !!t.bannedBy
						}),
						desc: k.b,
						id: o.automodTooltipId,
						key: o.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: o.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && De(o.automodTooltipId, k.b), Object(g.a)(t) && r.a.createElement(de, {
						desc: Object(k.d)(t.numReports),
						id: o.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: o.onHideTooltip
					}), Object(g.a)(t) && De(o.reportTooltipId, Object(k.d)(t.numReports)))
				}
			}
			const Re = () => r.a.createElement(a.Fragment, null, r.a.createElement(G.c, {
					className: W.a.metaText
				}), r.a.createElement(pe, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				De = (e, t) => r.a.createElement(E.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, o) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			})), o.d(t, "c", (function() {
				return p
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "d", (function() {
				return h
			}));
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				a = o("./node_modules/react/index.js"),
				r = o.n(a),
				d = o("./src/lib/lessComponent.tsx"),
				i = o("./src/lib/prettyPrintNumber/index.ts"),
				s = (o("./src/lib/timeAgo/index.ts"), o("./src/reddit/controls/MetaData/index.m.less")),
				c = o.n(s),
				l = function(e, t) {
					var o = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (o[n[a]] = e[n[a]])
					}
					return o
				};
			const m = d.a.span("metaText", c.a),
				p = e => r.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						score: o,
						useUpvotes: a
					} = e, d = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const s = Object(i.b)(o),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(o, "number", s)], {
							hk: "2L3T21"
						}),
						p = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(o, "number", s)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, d, p)
				},
				h = e => r.a.createElement(m, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
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
				return d
			})), o.d(t, "c", (function() {
				return i
			})), o.d(t, "d", (function() {
				return s
			})), o.d(t, "e", (function() {
				return c
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				a = o("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(a.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				d = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(a.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", "u/".concat(e.bannedBy))], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				s = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(a.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				a = o.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				a = o.n(n);
			t.a = e => a.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), a.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), a.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), a.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		}
	}
]);
//# sourceMappingURL=ChatPost~ModQueuePages.a66d77e2b1b19af79a7d.js.map