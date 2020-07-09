// https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.550b8f14881d71031731.js
// Retrieved at 7/9/2020, 4:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~ModQueuePages"], {
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, o, t) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, o, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.symbol.js");
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/react/index.js"),
				r = t.n(a),
				i = t("./node_modules/react-redux/es/index.js"),
				d = t("./node_modules/reselect/es/index.js"),
				s = t("./src/reddit/actions/tooltip.ts"),
				l = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/constants/index.ts"),
				p = t("./src/lib/humanizeDateTime/index.ts"),
				m = t("./src/lib/lessComponent.tsx"),
				u = t("./src/lib/timeAgo/index.ts"),
				h = t("./src/reddit/components/AuthorLink/index.tsx"),
				T = t("./src/reddit/components/AwardBadges/index.tsx"),
				b = t("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				I = t("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				v = t("./src/reddit/components/Flair/index.tsx"),
				E = t("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				x = t("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = t("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = t("./src/reddit/components/JSAPIContainers/index.tsx"),
				f = t("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = t("./src/reddit/selectors/economics.ts"),
				k = t("./src/reddit/helpers/isRemoved.ts"),
				w = t("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				y = t("./src/reddit/helpers/showReportIndicator/index.ts"),
				S = t("./src/reddit/actions/comment/index.ts"),
				g = t("./src/reddit/models/Comment/index.ts"),
				O = t("./src/reddit/models/Flair/index.ts"),
				A = t("./src/reddit/icons/fonts/Admin/index.tsx"),
				j = t("./src/reddit/icons/fonts/Approve/index.tsx"),
				L = t("./src/reddit/icons/fonts/Lock/index.tsx"),
				N = t("./src/reddit/icons/fonts/helpers.tsx"),
				R = t("./src/reddit/icons/fonts/Op/index.m.less"),
				H = t.n(R);
			var D = m.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(N.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(N.a, null, e.desc)), "OpIcon", H.a),
				P = t("./src/reddit/icons/fonts/Remove/index.tsx"),
				B = t("./src/reddit/icons/fonts/Report/index.tsx"),
				U = t("./src/reddit/icons/fonts/Spam/index.tsx"),
				F = t("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				V = t("./src/reddit/icons/svgs/Cake/index.tsx"),
				J = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Q = t("./src/reddit/controls/MetaData/index.tsx"),
				z = t("./src/reddit/selectors/subreddit.ts"),
				W = t("./src/reddit/selectors/userFlair.ts"),
				G = t("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				K = t.n(G);

			function X() {
				return (X = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var t = arguments[o];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			var q = function(e, o) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) o.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]])
				}
				return t
			};
			const Z = m.a.wrapped(v.b, "RightPositionedAuthorFlair", K.a),
				Y = m.a.wrapped(A.a, "AdminIcon", K.a),
				$ = m.a.wrapped(j.a, "Approve", K.a),
				ee = m.a.wrapped(L.a, "Lock", K.a),
				oe = m.a.div("AdminEmeritus", K.a),
				te = m.a.wrapped(F.a, "Automoderator", K.a),
				ne = m.a.wrapped(V.a, "CakeIcon", K.a),
				ae = m.a.wrapped(J.a, "Moderator", K.a),
				re = m.a.wrapped(P.a, "Remove", K.a),
				ie = m.a.wrapped(B.a, "Report", K.a),
				de = m.a.wrapped(U.a, "Spam", K.a),
				se = m.a.wrapped(D, "Op", K.a),
				le = m.a.wrapped(A.a, "Contractor", K.a),
				ce = m.a.a("MetaLink", K.a),
				pe = m.a.wrapped(Q.a, "EditedText", K.a),
				me = m.a.wrapped(Q.a, "StickiedText", K.a),
				ue = m.a.span("DeletedText", K.a),
				he = m.a.wrapped(Q.a, "MetaSeparator", K.a),
				Te = m.a.wrapped(Q.a, "CrowdControlText", K.a),
				be = m.a.wrapped(x.b, "AuthorHoverCard", K.a),
				Ie = m.a.a("RemovalReason", K.a),
				ve = m.a.wrapped(b.b, "Component", K.a),
				Ee = e => (o, t) => {
					let {
						comment: n,
						renderedInOverlay: a
					} = t;
					return "".concat(e).concat(n.id).concat(a ? "inOverlay" : "")
				},
				xe = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				Me = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				Ce = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				fe = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				_e = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				ke = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				we = Object(i.b)(() => Object(d.c)({
					adminTooltipId: Ee("CommentTopMeta--Admin--"),
					cakedayTooltipId: Ee("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Ee("CommentTopMeta--AdEm--"),
					automodTooltipId: Ee("CommentTopMeta--Automod--"),
					approveTooltipId: Ee("CommentTopMeta--Approve--"),
					createdTooltipId: Ee("CommentTopMeta--Created--"),
					contractorTooltipId: Ee("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ee("CommentTopMeta--Gold--"),
					lockedTooltipId: Ee("CommentTopMeta--Locked--"),
					modTooltipId: Ee("CommentTopMeta--Mod--"),
					opTooltipId: Ee("CommentTopMeta--OP--"),
					removeTooltipId: Ee("CommentTopMeta--Remove--"),
					reportTooltipId: Ee("CommentTopMeta--Report--"),
					spamTooltipId: Ee("CommentTopMeta--Spam--"),
					hasBadges: (e, o) => {
						let {
							comment: t
						} = o;
						return !!Object(_.r)(e, t.subredditId, t.authorId).length
					},
					subredditDisplayText: (e, o) => {
						const t = Object(z.I)(e, {
							commentId: o.comment.id
						});
						return t ? t.displayText : ""
					},
					flairPosition: (e, o) => {
						let {
							comment: t
						} = o;
						return Object(W.d)(e, {
							subredditId: t.subredditId
						})
					}
				}), (e, o) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function t() {
							((e, o, t) => {
								window.removeEventListener("focus", t), e(Object(S.N)({
									commentListNodeId: o
								})), window.setTimeout(() => e(Object(S.N)({
									commentListNodeId: o
								})), 5e3)
							})(e, o.comment.id, t)
						}))
					},
					onHideTooltip: () => e(Object(s.i)()),
					onShowTooltip: o => e(Object(s.f)({
						tooltipId: o
					})),
					openRemovalReasonModal: () => {
						t.e("removalReasonActions").then(t.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => e(t.fetchReasonsAndOpenModal(o.comment.subredditId, [o.comment.id])))
					}
				}));
			o.a = we(e => {
				const {
					adminEmeritusTooltipId: o,
					adminTooltipId: t,
					approveTooltipId: n,
					automodTooltipId: a,
					cakedayTooltipId: i,
					children: d,
					className: s,
					collapsed: p,
					collapsedBecauseCrowdControl: m,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: b,
					compact: x,
					flair: M,
					flairPosition: _,
					hasBadges: k,
					isAvatarsInCommentsEnabled: w,
					isLivestreaming: y,
					ignoreFlairPosition: S,
					ignoreLock: A,
					lockedTooltipId: j,
					modTooltipId: L,
					onHideTooltip: N,
					onShowTooltip: R,
					opTooltipId: H,
					openRemovalReasonModal: D,
					removeTooltipId: P,
					renderContractorBadge: B,
					renderedInOverlay: U,
					reportTooltipId: F,
					spamTooltipId: V,
					subredditDisplayText: J
				} = e;
				if (u.isDeleted) return r.a.createElement(ye, X({}, e, {
					className: Object(l.a)(s, K.a.container, {
						[K.a.collapsed]: p
					})
				}));
				if (p) return r.a.createElement(Se, X({}, e, {
					className: Object(l.a)(s, K.a.container, {
						[K.a.collapsed]: p
					})
				}));
				const z = !S && _ === O.b.Left;
				return r.a.createElement("div", {
					className: Object(l.a)(s, K.a.container, {
						[K.a.collapsed]: p,
						[K.a.hasBadges]: k,
						[K.a.liveStreaming]: y
					})
				}, M && z && r.a.createElement(v.b, {
					flair: M,
					forceSmallEmojis: x
				}), !Object(g.d)(u) && r.a.createElement(ve, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), r.a.createElement(be, {
					postOrComment: u,
					tooltipType: U ? f.c.Lightbox : void 0
				}, r.a.createElement(I.b, {
					ignore: Object(g.d)(u) || !!u.distinguishType && u.distinguishType !== c.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, r.a.createElement(Oe, {
					comment: u,
					isLivestreaming: y,
					isStrong: !!x,
					isAuthorDeleted: Object(g.d)(u)
				}, d && d))), m && r.a.createElement(Te, null, "Crowd Control"), m && r.a.createElement(Q.c, {
					className: K.a.metaText,
					key: "crowdControlSeparator"
				}), M && !z && r.a.createElement(Z, {
					flair: M,
					forceSmallEmojis: x
				}), !x && r.a.createElement(E.a, {
					className: K.a.publicPoints,
					contentId: u.id,
					metaSeparator: r.a.createElement(Q.c, {
						className: K.a.metaText
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
					compact: x,
					adminTooltipId: t,
					adminEmeritusTooltipId: o,
					cakedayTooltipId: i,
					contractorTooltipId: b,
					modTooltipId: L,
					onHideTooltip: N,
					onShowTooltip: R,
					opTooltipId: H,
					renderContractorBadge: B,
					subredditDisplayText: J
				})), !x && r.a.createElement(r.a.Fragment, null, !u.isDeleted && !w && r.a.createElement(Q.b, {
					className: K.a.metaText,
					isScoreHidden: u.isScoreHidden,
					score: u.score
				}), !w && r.a.createElement(Q.c, {
					className: K.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(Ae, X({
					key: "Created"
				}, e)), u.isStickied && Re(), u.editedAt && ge(u.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(Ne, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: a,
					ignoreLock: A,
					lockedTooltipId: j,
					onHideTooltip: N,
					onShowTooltip: R,
					openRemovalReasonModal: D,
					removeTooltipId: P,
					reportTooltipId: F,
					spamTooltipId: V
				})), r.a.createElement(T.a, {
					isOverlay: U,
					thing: u
				}))
			});
			const ye = e => {
					const {
						childrenInfo: o,
						collapsed: t,
						className: a,
						comment: i
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(ue, null, i.deletedBy === g.a.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Ae, X({
						key: "Created"
					}, e)), t && je({
						childrenInfo: o
					}))
				},
				Se = e => {
					const {
						comment: o,
						className: t,
						childrenInfo: n
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", null, r.a.createElement(Oe, {
						comment: o,
						isAuthorDeleted: Object(g.d)(o)
					})), r.a.createElement(Q.b, {
						className: K.a.metaText,
						isScoreHidden: o.isScoreHidden,
						score: o.score
					}), r.a.createElement(Q.c, {
						className: K.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Ae, X({
						key: "Created"
					}, e)), je({
						childrenInfo: n
					}))
				},
				ge = e => r.a.createElement(a.Fragment, null, r.a.createElement(Q.c, {
					className: K.a.metaText
				}), r.a.createElement(pe, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(u.d)(e))], {
					hk: "1tiB0u"
				}))),
				Oe = e => r.a.createElement(h.a, {
					className: K.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === c.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class Ae extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o,
							onCreatedClick: t
						} = e,
						n = q(e, ["comment", "onCreatedClick"]);
					return r.a.createElement(ce, {
						href: o.permalink,
						id: n.createdTooltipId,
						onClick: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, r.a.createElement("span", null, Object(u.d)(o.created)), He(n.createdTooltipId, Object(p.a)(o.created)))
				}
			}
			const je = e => {
				const {
					hasContinueThread: o,
					numChildren: t
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return r.a.createElement(he, {
					className: K.a.metaText
				}, o ? n.fbt._({
					"*": "More than {number} children",
					_1: "More than 1 child"
				}, [n.fbt._plural(t, "number")], {
					hk: "13XC7a"
				}) : n.fbt._({
					"*": "{number} children",
					_1: "1 child"
				}, [n.fbt._plural(t, "number")], {
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
							comment: o
						} = e,
						t = q(e, ["comment"]);
					return r.a.createElement(a.Fragment, null, o.isAuthorCakeday && r.a.createElement(ne, {
						"aria-label": Me(),
						id: t.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAuthorCakeday && He(t.cakedayTooltipId, Me()), o.isAdmin && r.a.createElement(Y, {
						desc: xe(),
						id: t.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAdmin && He(t.adminTooltipId, xe()), o.distinguishType === c.C.ALUMNI_ADMIN && r.a.createElement(oe, {
						"aria-label": Ce(),
						id: t.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: t.onHideTooltip
					}, "Δ"), o.distinguishType === c.C.ALUMNI_ADMIN && He(t.adminEmeritusTooltipId, Ce()), o.isMod && r.a.createElement(ae, {
						desc: fe(t.subredditDisplayText),
						id: t.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isMod && He(t.modTooltipId, fe(t.subredditDisplayText)), o.isOp && r.a.createElement(se, {
						desc: _e(),
						id: t.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isOp && He(t.opTooltipId, _e()), t.renderContractorBadge && r.a.createElement(le, {
						desc: ke(),
						id: t.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: t.onHideTooltip
					}), t.renderContractorBadge && He(t.contractorTooltipId, ke()))
				}
			}
			class Ne extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = q(e, ["comment"]);
					return r.a.createElement(a.Fragment, null, (o.approvedBy || o.isApproved) && r.a.createElement($, {
						desc: Object(w.a)(o),
						id: t.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: t.onHideTooltip
					}), (o.approvedBy || o.isApproved) && He(t.approveTooltipId, Object(w.a)(o)), Object(k.a)(o) && r.a.createElement(re, {
						desc: Object(w.c)(o),
						id: t.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(k.a)(o) && He(t.removeTooltipId, Object(w.c)(o)), Object(k.a)(o) && o.isRemoved && !o.modNote && !o.modRemovalReason && r.a.createElement(Ie, {
						onClick: t.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(k.a)(o) && !(o.isRemoved && !o.modNote && !o.modRemovalReason) && r.a.createElement(Ie, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), o.isLocked && !t.ignoreLock && r.a.createElement(ee, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: t.lockedTooltipId,
						onMouseEnter: () => {
							t.onShowTooltip(t.lockedTooltipId)
						},
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && r.a.createElement(de, {
						desc: Object(w.e)(o),
						id: t.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && He(t.spamTooltipId, Object(w.e)(o)), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && r.a.createElement(te, {
						className: Object(l.a)({
							[K.a.removed]: !!o.bannedBy
						}),
						desc: w.b,
						id: t.automodTooltipId,
						key: t.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: t.onHideTooltip
					}), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && He(t.automodTooltipId, w.b), Object(y.a)(o) && r.a.createElement(ie, {
						desc: Object(w.d)(o.numReports),
						id: t.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(y.a)(o) && He(t.reportTooltipId, Object(w.d)(o.numReports)))
				}
			}
			const Re = () => r.a.createElement(a.Fragment, null, r.a.createElement(Q.c, {
					className: K.a.metaText
				}), r.a.createElement(me, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				He = (e, o) => r.a.createElement(M.c, {
					tooltipId: e,
					text: o
				})
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, o, t) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, o, t) {
			"use strict";
			t.d(o, "a", (function() {
				return p
			})), t.d(o, "c", (function() {
				return m
			})), t.d(o, "b", (function() {
				return u
			})), t.d(o, "d", (function() {
				return h
			}));
			t("./node_modules/core-js/modules/es6.symbol.js");
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/react/index.js"),
				r = t.n(a),
				i = t("./src/lib/lessComponent.tsx"),
				d = t("./src/lib/prettyPrintNumber/index.ts"),
				s = (t("./src/lib/timeAgo/index.ts"), t("./src/reddit/controls/MetaData/index.m.less")),
				l = t.n(s),
				c = function(e, o) {
					var t = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) o.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]])
					}
					return t
				};
			const p = i.a.span("metaText", l.a),
				m = e => r.a.createElement(p, e, " · "),
				u = e => {
					var {
						isScoreHidden: o,
						score: t,
						useUpvotes: a
					} = e, i = c(e, ["isScoreHidden", "score", "useUpvotes"]);
					const s = Object(d.b)(t),
						l = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "2L3T21"
						}),
						m = o ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? l : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "gf67v"
						});
					return r.a.createElement(p, i, m)
				},
				h = e => r.a.createElement(p, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(d.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, o, t) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);
			o.a = e => a.a.createElement("svg", {
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
//# sourceMappingURL=ChatPost~ModQueuePages.550b8f14881d71031731.js.map