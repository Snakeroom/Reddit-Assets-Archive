// https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.ebb6f843783f7110871f.js
// Retrieved at 10/20/2020, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~ModQueuePages"], {
		"./src/lib/humanizeUTCDate/index.tsx": function(e, o, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.regexp.replace.js");
			o.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
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
				ApproveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				approveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				LockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				lockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AutomoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				automoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				RemoveIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				removeIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				ReportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				reportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				SpamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				spamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
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
				r = t("./node_modules/react/index.js"),
				s = t.n(r),
				a = t("./node_modules/react-redux/es/index.js"),
				i = t("./node_modules/reselect/es/index.js"),
				d = t("./src/reddit/hooks/useTracking.ts"),
				c = t("./src/reddit/actions/gold/powerups.ts"),
				l = t("./src/reddit/actions/tooltip.ts"),
				p = t("./src/lib/addQueryParams/index.ts"),
				m = t("./src/lib/classNames/index.ts"),
				u = t("./src/lib/constants/index.ts"),
				h = t("./src/lib/humanizeDateTime/index.ts"),
				b = t("./src/lib/lessComponent.tsx"),
				T = t("./src/lib/timeAgo/index.ts"),
				I = t("./src/reddit/helpers/trackers/powerups.ts"),
				v = t("./src/reddit/components/AuthorLink/index.tsx"),
				x = t("./src/reddit/components/AwardBadges/index.tsx"),
				f = t("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				E = t("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				M = t("./src/reddit/components/Flair/index.tsx"),
				_ = t("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				C = t("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = t("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = t("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = t("./src/reddit/components/PostTopMeta/index.tsx"),
				g = t("./src/reddit/selectors/economics.ts"),
				w = t("./src/reddit/helpers/isRemoved.ts"),
				A = t("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				O = t("./src/reddit/helpers/showReportIndicator/index.ts"),
				j = t("./src/reddit/actions/comment/index.ts"),
				L = t("./src/reddit/models/Comment/index.ts"),
				R = t("./src/reddit/models/Flair/index.ts"),
				N = t("./src/reddit/icons/fonts/Admin/index.tsx"),
				D = t("./src/reddit/icons/fonts/Approve/index.tsx"),
				H = t("./src/reddit/icons/fonts/Lock/index.tsx"),
				B = t("./src/reddit/icons/fonts/helpers.tsx"),
				P = t("./src/reddit/icons/fonts/Op/index.m.less"),
				U = t.n(P);
			var z = b.a.wrapped(e => s.a.createElement("i", {
					className: "".concat(Object(B.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(B.a, null, e.desc)), "OpIcon", U.a),
				G = t("./src/reddit/icons/fonts/Remove/index.tsx"),
				Q = t("./src/reddit/icons/fonts/Report/index.tsx"),
				V = t("./src/reddit/icons/fonts/Spam/index.tsx"),
				F = t("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Z = t("./src/reddit/icons/svgs/Cake/index.tsx"),
				J = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				K = t("./src/reddit/icons/svgs/Powerup/index.tsx"),
				W = t("./src/reddit/controls/MetaData/index.tsx"),
				X = t("./src/reddit/selectors/subreddit.ts"),
				q = t("./src/reddit/selectors/userFlair.ts"),
				Y = t("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				$ = t.n(Y);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var t = arguments[o];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			var oe = function(e, o) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
				}
				return t
			};
			const te = b.a.wrapped(M.b, "RightPositionedAuthorFlair", $.a),
				ne = b.a.wrapped(N.a, "AdminIcon", $.a),
				re = b.a.wrapped(D.a, "ApproveIcon", $.a),
				se = b.a.wrapped(H.a, "LockIcon", $.a),
				ae = b.a.div("AdminEmeritus", $.a),
				ie = b.a.wrapped(F.a, "AutomoderatorIcon", $.a),
				de = b.a.wrapped(K.a, "TopSupporterIcon", $.a),
				ce = b.a.wrapped(Z.a, "CakeIcon", $.a),
				le = b.a.wrapped(J.a, "ModeratorIcon", $.a),
				pe = b.a.wrapped(G.a, "RemoveIcon", $.a),
				me = b.a.wrapped(Q.a, "ReportIcon", $.a),
				ue = b.a.wrapped(V.a, "SpamIcon", $.a),
				he = b.a.wrapped(z, "OpIcon", $.a),
				be = b.a.wrapped(N.a, "ContractorIcon", $.a),
				Te = b.a.a("MetaLink", $.a),
				Ie = b.a.wrapped(W.a, "EditedText", $.a),
				ve = b.a.wrapped(W.a, "StickiedText", $.a),
				xe = b.a.span("DeletedText", $.a),
				fe = b.a.wrapped(W.a, "MetaSeparator", $.a),
				Ee = b.a.wrapped(W.a, "CrowdControlText", $.a),
				Me = b.a.wrapped(C.b, "AuthorHoverCard", $.a),
				_e = b.a.a("RemovalReason", $.a),
				Ce = b.a.wrapped(f.b, "Component", $.a),
				Se = e => (o, t) => {
					let {
						comment: n,
						renderedInOverlay: r
					} = t;
					return "".concat(e).concat(n.id).concat(r ? "inOverlay" : "")
				},
				ke = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				ye = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				ge = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				we = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				Ae = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Oe = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				je = () => n.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Le = Object(a.b)(() => Object(i.c)({
					adminTooltipId: Se("CommentTopMeta--Admin--"),
					cakedayTooltipId: Se("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Se("CommentTopMeta--AdEm--"),
					automodTooltipId: Se("CommentTopMeta--Automod--"),
					approveTooltipId: Se("CommentTopMeta--Approve--"),
					createdTooltipId: Se("CommentTopMeta--Created--"),
					contractorTooltipId: Se("CommentTopMeta--Contractor--"),
					gildedTooltipId: Se("CommentTopMeta--Gold--"),
					lockedTooltipId: Se("CommentTopMeta--Locked--"),
					modTooltipId: Se("CommentTopMeta--Mod--"),
					opTooltipId: Se("CommentTopMeta--OP--"),
					removeTooltipId: Se("CommentTopMeta--Remove--"),
					reportTooltipId: Se("CommentTopMeta--Report--"),
					spamTooltipId: Se("CommentTopMeta--Spam--"),
					topSupporterTooltipId: Se("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, o) => {
						let {
							comment: t
						} = o;
						return !!Object(g.r)(e, t.subredditId, t.authorId).length
					},
					subredditDisplayText: (e, o) => {
						const t = Object(X.J)(e, {
							commentId: o.comment.id
						});
						return t ? t.displayText : ""
					},
					flairPosition: (e, o) => {
						let {
							comment: t
						} = o;
						return Object(q.d)(e, {
							subredditId: t.subredditId
						})
					}
				}), (e, o) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function t() {
							((e, o, t) => {
								window.removeEventListener("focus", t), e(Object(j.N)({
									commentListNodeId: o
								})), window.setTimeout(() => e(Object(j.N)({
									commentListNodeId: o
								})), 5e3)
							})(e, o.comment.id, t)
						}))
					},
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: o => e(Object(l.f)({
						tooltipId: o
					})),
					openPowerupsModal: () => e(Object(c.b)()),
					openRemovalReasonModal: () => {
						t.e("removalReasonActions").then(t.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => e(t.fetchReasonsAndOpenModal(o.comment.subredditId, [o.comment.id])))
					}
				}));
			o.a = Le(e => {
				const {
					adminEmeritusTooltipId: o,
					adminTooltipId: t,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: a,
					children: i,
					className: c,
					collapsed: l,
					collapsedBecauseCrowdControl: p,
					comment: h,
					commentsPageKey: b,
					contractorTooltipId: T,
					compact: v,
					flair: f,
					flairPosition: C,
					hasBadges: S,
					isAvatarsInCommentsEnabled: g,
					isLivestreaming: w,
					ignoreFlairPosition: A,
					ignoreLock: O,
					lockedTooltipId: j,
					modTooltipId: N,
					onHideTooltip: D,
					onShowTooltip: H,
					opTooltipId: B,
					openPowerupsModal: P,
					openRemovalReasonModal: U,
					removeTooltipId: z,
					renderContractorBadge: G,
					renderTopSupporterBadge: Q,
					renderedInOverlay: V,
					reportTooltipId: F,
					spamTooltipId: Z,
					subredditDisplayText: J,
					topSupporterTooltipId: K
				} = e, X = Object(d.a)();
				if (h.isDeleted) return s.a.createElement(Re, ee({}, e, {
					className: Object(m.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				if (l) return s.a.createElement(Ne, ee({}, e, {
					className: Object(m.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				const q = !A && C === R.b.Left;
				return s.a.createElement("div", {
					className: Object(m.a)(c, $.a.container, {
						[$.a.collapsed]: l,
						[$.a.hasBadges]: S,
						[$.a.liveStreaming]: w
					})
				}, f && q && s.a.createElement(M.b, {
					flair: f,
					forceSmallEmojis: v
				}), !Object(L.e)(h) && s.a.createElement(Ce, {
					showAddCustom: !0,
					subredditId: h.subredditId,
					userId: h.authorId,
					uniqueIdentifier: h.id
				}), s.a.createElement(Me, {
					postOrComment: h,
					tooltipType: V ? y.c.Lightbox : void 0
				}, s.a.createElement(E.b, {
					ignore: Object(L.e)(h) || !!h.distinguishType && h.distinguishType !== u.C.NONE,
					subredditId: h.subredditId,
					userId: h.authorId
				}, s.a.createElement(He, {
					comment: h,
					isLivestreaming: w,
					isStrong: !!v,
					isAuthorDeleted: Object(L.e)(h)
				}, i && i))), p && s.a.createElement(Ee, null, "Crowd Control"), p && s.a.createElement(W.c, {
					className: $.a.metaText,
					key: "crowdControlSeparator"
				}), f && !q && s.a.createElement(te, {
					flair: f,
					forceSmallEmojis: v
				}), !v && s.a.createElement(_.a, {
					className: $.a.publicPoints,
					contentId: h.id,
					metaSeparator: s.a.createElement(W.c, {
						className: $.a.metaText
					}),
					subredditId: h.subredditId,
					userId: h.authorId,
					username: h.author
				}), s.a.createElement(s.a.Fragment, null, s.a.createElement(k.b, {
					commentId: h.id
				}), s.a.createElement(k.a, {
					commentId: h.id,
					commentsPageKey: b
				}), s.a.createElement(Ue, {
					comment: h,
					compact: v,
					adminTooltipId: t,
					adminEmeritusTooltipId: o,
					cakedayTooltipId: a,
					contractorTooltipId: T,
					modTooltipId: N,
					onHideTooltip: D,
					onShowTooltip: H,
					openPowerupsModal: () => {
						X(Object(I.e)("comment")), P()
					},
					opTooltipId: B,
					renderContractorBadge: G,
					renderTopSupporterBadge: Q,
					subredditDisplayText: J,
					topSupporterTooltipId: K
				})), !v && s.a.createElement(s.a.Fragment, null, !h.isDeleted && !g && s.a.createElement(W.b, {
					className: $.a.metaText,
					isScoreHidden: h.isScoreHidden,
					score: h.score
				}), !g && s.a.createElement(W.c, {
					className: $.a.metaText,
					key: "scoreCreatedSeparator"
				}), s.a.createElement(Be, ee({
					key: "Created"
				}, e)), h.isStickied && Ge(), h.editedAt && De(h.editedAt)), s.a.createElement(s.a.Fragment, null, s.a.createElement(ze, {
					comment: h,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: O,
					lockedTooltipId: j,
					onHideTooltip: D,
					onShowTooltip: H,
					openRemovalReasonModal: U,
					removeTooltipId: z,
					reportTooltipId: F,
					spamTooltipId: Z
				})), s.a.createElement(x.a, {
					thing: h,
					tooltipType: V ? y.c.Lightbox : void 0
				}))
			});
			const Re = e => {
					const {
						childrenInfo: o,
						collapsed: t,
						className: r,
						comment: a
					} = e;
					return s.a.createElement("div", {
						className: r
					}, s.a.createElement(xe, null, a.deletedBy === L.b.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), s.a.createElement(Be, ee({
						key: "Created"
					}, e)), t && Pe({
						childrenInfo: o
					}))
				},
				Ne = e => {
					const {
						comment: o,
						className: t,
						childrenInfo: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement("div", null, s.a.createElement(He, {
						comment: o,
						isAuthorDeleted: Object(L.e)(o)
					})), s.a.createElement(W.b, {
						className: $.a.metaText,
						isScoreHidden: o.isScoreHidden,
						score: o.score
					}), s.a.createElement(W.c, {
						className: $.a.metaText,
						key: "scoreCreatedSeparator"
					}), s.a.createElement(Be, ee({
						key: "Created"
					}, e)), Pe({
						childrenInfo: n
					}))
				},
				De = e => s.a.createElement(r.Fragment, null, s.a.createElement(W.c, {
					className: $.a.metaText
				}), s.a.createElement(Ie, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(T.d)(e))], {
					hk: "1tiB0u"
				}))),
				He = e => s.a.createElement(v.a, {
					className: $.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class Be extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o,
							onCreatedClick: t
						} = e,
						n = oe(e, ["comment", "onCreatedClick"]);
					return s.a.createElement(Te, {
						href: Object(p.a)(o.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: n.createdTooltipId,
						onClick: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, Object(T.d)(o.created), Qe(n.createdTooltipId, Object(h.a)(o.created)))
				}
			}
			const Pe = e => {
				const {
					hasContinueThread: o,
					numChildren: t
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return s.a.createElement(fe, {
					className: $.a.metaText
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
			class Ue extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = oe(e, ["comment"]);
					return s.a.createElement(r.Fragment, null, o.isAuthorCakeday && s.a.createElement(ce, {
						"aria-label": ye(),
						id: t.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAuthorCakeday && Qe(t.cakedayTooltipId, ye()), o.isAdmin && s.a.createElement(ne, {
						desc: ke(),
						id: t.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAdmin && Qe(t.adminTooltipId, ke()), o.distinguishType === u.C.ALUMNI_ADMIN && s.a.createElement(ae, {
						"aria-label": ge(),
						id: t.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: t.onHideTooltip
					}, "Δ"), o.distinguishType === u.C.ALUMNI_ADMIN && Qe(t.adminEmeritusTooltipId, ge()), o.isMod && s.a.createElement(le, {
						desc: we(t.subredditDisplayText),
						id: t.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isMod && Qe(t.modTooltipId, we(t.subredditDisplayText)), o.isOp && s.a.createElement(he, {
						desc: Ae(),
						id: t.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isOp && Qe(t.opTooltipId, Ae()), t.renderContractorBadge && s.a.createElement(be, {
						desc: Oe(),
						id: t.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: t.onHideTooltip
					}), t.renderContractorBadge && Qe(t.contractorTooltipId, Oe()), t.renderTopSupporterBadge && s.a.createElement(de, {
						desc: je(),
						id: t.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: t.onHideTooltip,
						onClick: t.openPowerupsModal
					}), t.renderTopSupporterBadge && Qe(t.topSupporterTooltipId, je()))
				}
			}
			class ze extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = oe(e, ["comment"]);
					return s.a.createElement(r.Fragment, null, (o.approvedBy || o.isApproved) && s.a.createElement(re, {
						desc: Object(A.a)(o),
						id: t.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: t.onHideTooltip
					}), (o.approvedBy || o.isApproved) && Qe(t.approveTooltipId, Object(A.a)(o)), Object(w.a)(o) && s.a.createElement(pe, {
						desc: Object(A.c)(o),
						id: t.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(w.a)(o) && Qe(t.removeTooltipId, Object(A.c)(o)), Object(w.a)(o) && o.isRemoved && !o.modNote && !o.modRemovalReason && s.a.createElement(_e, {
						onClick: t.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(w.a)(o) && !(o.isRemoved && !o.modNote && !o.modRemovalReason) && s.a.createElement(_e, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), o.isLocked && !t.ignoreLock && s.a.createElement(se, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: t.lockedTooltipId,
						onMouseEnter: () => {
							t.onShowTooltip(t.lockedTooltipId)
						},
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && s.a.createElement(ue, {
						desc: Object(A.e)(o),
						id: t.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && Qe(t.spamTooltipId, Object(A.e)(o)), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && s.a.createElement(ie, {
						className: Object(m.a)({
							[$.a.removed]: !!o.bannedBy
						}),
						desc: A.b,
						id: t.automodTooltipId,
						key: t.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: t.onHideTooltip
					}), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && Qe(t.automodTooltipId, A.b), Object(O.a)(o) && s.a.createElement(me, {
						desc: Object(A.d)(o.numReports),
						id: t.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(O.a)(o) && Qe(t.reportTooltipId, Object(A.d)(o.numReports)))
				}
			}
			const Ge = () => s.a.createElement(r.Fragment, null, s.a.createElement(W.c, {
					className: $.a.metaText
				}), s.a.createElement(ve, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				Qe = (e, o) => s.a.createElement(S.c, {
					tooltipId: e,
					text: o
				})
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, o, t) {
			"use strict";
			t.d(o, "c", (function() {
				return n
			})), t.d(o, "a", (function() {
				return r
			})), t.d(o, "b", (function() {
				return s
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				s = e => (e.numReports || 0) > 0
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
				r = t("./node_modules/react/index.js"),
				s = t.n(r),
				a = t("./src/lib/lessComponent.tsx"),
				i = t("./src/lib/prettyPrintNumber/index.ts"),
				d = (t("./src/lib/timeAgo/index.ts"), t("./src/reddit/controls/MetaData/index.m.less")),
				c = t.n(d),
				l = function(e, o) {
					var t = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
					}
					return t
				};
			const p = a.a.span("metaText", c.a),
				m = e => s.a.createElement(p, e, " · "),
				u = e => {
					var {
						isScoreHidden: o,
						score: t,
						useUpvotes: r
					} = e, a = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const d = Object(i.b)(t),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", d)], {
							hk: "2L3T21"
						}),
						m = o ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : r ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", d)], {
							hk: "gf67v"
						});
					return s.a.createElement(p, a, m)
				},
				h = e => s.a.createElement(p, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, o, t) {
			"use strict";
			o.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, o, t) {
			"use strict";
			t.d(o, "a", (function() {
				return s
			})), t.d(o, "b", (function() {
				return a
			})), t.d(o, "c", (function() {
				return i
			})), t.d(o, "d", (function() {
				return d
			})), t.d(o, "e", (function() {
				return c
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./src/lib/humanizeUTCDate/index.tsx");
			const s = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
					let o = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (o = o + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", "u/".concat(e.bannedBy))], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (o = o + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), o
				},
				d = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, o, t) {
			"use strict";
			o.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/fonts/helpers.tsx"),
				i = t("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = t.n(i);
			o.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(a.b)("approve"), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/fonts/helpers.tsx"),
				i = t("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = t.n(i);
			o.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(a.b)("lock"), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, o, t) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/fonts/helpers.tsx"),
				i = t("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = t.n(i);
			o.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(a.b)("remove"), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/fonts/helpers.tsx"),
				i = t("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = t.n(i);
			o.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(a.b)("report"), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/fonts/helpers.tsx"),
				i = t("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = t.n(i);
			o.a = e => r.a.createElement("i", {
				className: Object(s.a)(Object(a.b)("spam"), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n);
			o.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, o, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n);
			o.a = e => r.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), r.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), r.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), r.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.ebb6f843783f7110871f.js.map