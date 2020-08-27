// https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.28675442d03732d85572.js
// Retrieved at 8/27/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
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
				a = t.n(r),
				d = t("./node_modules/react-redux/es/index.js"),
				i = t("./node_modules/reselect/es/index.js"),
				s = t("./src/reddit/hooks/useTracking.ts"),
				c = t("./src/reddit/actions/modal.ts"),
				p = t("./src/reddit/actions/tooltip.ts"),
				l = t("./src/lib/addQueryParams/index.ts"),
				m = t("./src/lib/classNames/index.ts"),
				u = t("./src/lib/constants/index.ts"),
				h = t("./src/lib/humanizeDateTime/index.ts"),
				T = t("./src/lib/lessComponent.tsx"),
				b = t("./src/lib/timeAgo/index.ts"),
				I = t("./src/reddit/constants/modals.ts"),
				v = t("./src/reddit/helpers/trackers/powerups.ts"),
				x = t("./src/reddit/components/AuthorLink/index.tsx"),
				_ = t("./src/reddit/components/AwardBadges/index.tsx"),
				E = t("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = t("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				C = t("./src/reddit/components/Flair/index.tsx"),
				M = t("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = t("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = t("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = t("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = t("./src/reddit/components/PostTopMeta/index.tsx"),
				g = t("./src/reddit/selectors/economics.ts"),
				A = t("./src/reddit/helpers/isRemoved.ts"),
				O = t("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				j = t("./src/reddit/helpers/showReportIndicator/index.ts"),
				L = t("./src/reddit/actions/comment/index.ts"),
				R = t("./src/reddit/models/Comment/index.ts"),
				N = t("./src/reddit/models/Flair/index.ts"),
				D = t("./src/reddit/icons/fonts/Admin/index.tsx"),
				H = t("./src/reddit/icons/fonts/Approve/index.tsx"),
				P = t("./src/reddit/icons/fonts/Lock/index.tsx"),
				B = t("./src/reddit/icons/fonts/helpers.tsx"),
				U = t("./src/reddit/icons/fonts/Op/index.m.less"),
				z = t.n(U);
			var G = T.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(B.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, a.a.createElement(B.a, null, e.desc)), "OpIcon", z.a),
				Q = t("./src/reddit/icons/fonts/Remove/index.tsx"),
				V = t("./src/reddit/icons/fonts/Report/index.tsx"),
				F = t("./src/reddit/icons/fonts/Spam/index.tsx"),
				Z = t("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				K = t("./src/reddit/icons/svgs/Cake/index.tsx"),
				W = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				J = t("./src/reddit/icons/svgs/Powerup/index.tsx"),
				X = t("./src/reddit/controls/MetaData/index.tsx"),
				q = t("./src/reddit/selectors/subreddit.ts"),
				Y = t("./src/reddit/selectors/userFlair.ts"),
				$ = t("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ee = t.n($);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var t = arguments[o];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			var te = function(e, o) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
				}
				return t
			};
			const ne = T.a.wrapped(C.b, "RightPositionedAuthorFlair", ee.a),
				re = T.a.wrapped(D.a, "AdminIcon", ee.a),
				ae = T.a.wrapped(H.a, "ApproveIcon", ee.a),
				de = T.a.wrapped(P.a, "LockIcon", ee.a),
				ie = T.a.div("AdminEmeritus", ee.a),
				se = T.a.wrapped(Z.a, "AutomoderatorIcon", ee.a),
				ce = T.a.wrapped(J.a, "TopSupporterIcon", ee.a),
				pe = T.a.wrapped(K.a, "CakeIcon", ee.a),
				le = T.a.wrapped(W.a, "ModeratorIcon", ee.a),
				me = T.a.wrapped(Q.a, "RemoveIcon", ee.a),
				ue = T.a.wrapped(V.a, "ReportIcon", ee.a),
				he = T.a.wrapped(F.a, "SpamIcon", ee.a),
				Te = T.a.wrapped(G, "OpIcon", ee.a),
				be = T.a.wrapped(D.a, "ContractorIcon", ee.a),
				Ie = T.a.a("MetaLink", ee.a),
				ve = T.a.wrapped(X.a, "EditedText", ee.a),
				xe = T.a.wrapped(X.a, "StickiedText", ee.a),
				_e = T.a.span("DeletedText", ee.a),
				Ee = T.a.wrapped(X.a, "MetaSeparator", ee.a),
				fe = T.a.wrapped(X.a, "CrowdControlText", ee.a),
				Ce = T.a.wrapped(k.b, "AuthorHoverCard", ee.a),
				Me = T.a.a("RemovalReason", ee.a),
				ke = T.a.wrapped(E.b, "Component", ee.a),
				Se = e => (o, t) => {
					let {
						comment: n,
						renderedInOverlay: r
					} = t;
					return "".concat(e).concat(n.id).concat(r ? "inOverlay" : "")
				},
				we = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				ye = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				ge = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Ae = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				Oe = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				je = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Le = () => n.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Re = Object(d.b)(() => Object(i.c)({
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
						const t = Object(q.I)(e, {
							commentId: o.comment.id
						});
						return t ? t.displayText : ""
					},
					flairPosition: (e, o) => {
						let {
							comment: t
						} = o;
						return Object(Y.d)(e, {
							subredditId: t.subredditId
						})
					}
				}), (e, o) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function t() {
							((e, o, t) => {
								window.removeEventListener("focus", t), e(Object(L.N)({
									commentListNodeId: o
								})), window.setTimeout(() => e(Object(L.N)({
									commentListNodeId: o
								})), 5e3)
							})(e, o.comment.id, t)
						}))
					},
					onHideTooltip: () => e(Object(p.i)()),
					onShowTooltip: o => e(Object(p.f)({
						tooltipId: o
					})),
					openPowerupsModal: () => e(Object(c.i)(I.a.ECON_POWERUPS_PURCHASE)),
					openRemovalReasonModal: () => {
						t.e("removalReasonActions").then(t.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => e(t.fetchReasonsAndOpenModal(o.comment.subredditId, [o.comment.id])))
					}
				}));
			o.a = Re(e => {
				const {
					adminEmeritusTooltipId: o,
					adminTooltipId: t,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: d,
					children: i,
					className: c,
					collapsed: p,
					collapsedBecauseCrowdControl: l,
					comment: h,
					commentsPageKey: T,
					contractorTooltipId: b,
					compact: I,
					flair: x,
					flairPosition: E,
					hasBadges: k,
					isAvatarsInCommentsEnabled: S,
					isLivestreaming: g,
					ignoreFlairPosition: A,
					ignoreLock: O,
					lockedTooltipId: j,
					modTooltipId: L,
					onHideTooltip: D,
					onShowTooltip: H,
					opTooltipId: P,
					openPowerupsModal: B,
					openRemovalReasonModal: U,
					removeTooltipId: z,
					renderContractorBadge: G,
					renderTopSupporterBadge: Q,
					renderedInOverlay: V,
					reportTooltipId: F,
					spamTooltipId: Z,
					subredditDisplayText: K,
					topSupporterTooltipId: W
				} = e, J = Object(s.a)();
				if (h.isDeleted) return a.a.createElement(Ne, oe({}, e, {
					className: Object(m.a)(c, ee.a.container, {
						[ee.a.collapsed]: p
					})
				}));
				if (p) return a.a.createElement(De, oe({}, e, {
					className: Object(m.a)(c, ee.a.container, {
						[ee.a.collapsed]: p
					})
				}));
				const q = !A && E === N.b.Left;
				return a.a.createElement("div", {
					className: Object(m.a)(c, ee.a.container, {
						[ee.a.collapsed]: p,
						[ee.a.hasBadges]: k,
						[ee.a.liveStreaming]: g
					})
				}, x && q && a.a.createElement(C.b, {
					flair: x,
					forceSmallEmojis: I
				}), !Object(R.d)(h) && a.a.createElement(ke, {
					showAddCustom: !0,
					subredditId: h.subredditId,
					userId: h.authorId,
					uniqueIdentifier: h.id
				}), a.a.createElement(Ce, {
					postOrComment: h,
					tooltipType: V ? y.c.Lightbox : void 0
				}, a.a.createElement(f.b, {
					ignore: Object(R.d)(h) || !!h.distinguishType && h.distinguishType !== u.C.NONE,
					subredditId: h.subredditId,
					userId: h.authorId
				}, a.a.createElement(Pe, {
					comment: h,
					isLivestreaming: g,
					isStrong: !!I,
					isAuthorDeleted: Object(R.d)(h)
				}, i && i))), l && a.a.createElement(fe, null, "Crowd Control"), l && a.a.createElement(X.c, {
					className: ee.a.metaText,
					key: "crowdControlSeparator"
				}), x && !q && a.a.createElement(ne, {
					flair: x,
					forceSmallEmojis: I
				}), !I && a.a.createElement(M.a, {
					className: ee.a.publicPoints,
					contentId: h.id,
					metaSeparator: a.a.createElement(X.c, {
						className: ee.a.metaText
					}),
					subredditId: h.subredditId,
					userId: h.authorId,
					username: h.author
				}), a.a.createElement(a.a.Fragment, null, a.a.createElement(w.b, {
					commentId: h.id
				}), a.a.createElement(w.a, {
					commentId: h.id,
					commentsPageKey: T
				}), a.a.createElement(ze, {
					comment: h,
					compact: I,
					adminTooltipId: t,
					adminEmeritusTooltipId: o,
					cakedayTooltipId: d,
					contractorTooltipId: b,
					modTooltipId: L,
					onHideTooltip: D,
					onShowTooltip: H,
					openPowerupsModal: () => {
						J(Object(v.f)("comment")), B()
					},
					opTooltipId: P,
					renderContractorBadge: G,
					renderTopSupporterBadge: Q,
					subredditDisplayText: K,
					topSupporterTooltipId: W
				})), !I && a.a.createElement(a.a.Fragment, null, !h.isDeleted && !S && a.a.createElement(X.b, {
					className: ee.a.metaText,
					isScoreHidden: h.isScoreHidden,
					score: h.score
				}), !S && a.a.createElement(X.c, {
					className: ee.a.metaText,
					key: "scoreCreatedSeparator"
				}), a.a.createElement(Be, oe({
					key: "Created"
				}, e)), h.isStickied && Qe(), h.editedAt && He(h.editedAt)), a.a.createElement(a.a.Fragment, null, a.a.createElement(Ge, {
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
				})), a.a.createElement(_.a, {
					thing: h,
					tooltipType: V ? y.c.Lightbox : void 0
				}))
			});
			const Ne = e => {
					const {
						childrenInfo: o,
						collapsed: t,
						className: r,
						comment: d
					} = e;
					return a.a.createElement("div", {
						className: r
					}, a.a.createElement(_e, null, d.deletedBy === R.a.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(Be, oe({
						key: "Created"
					}, e)), t && Ue({
						childrenInfo: o
					}))
				},
				De = e => {
					const {
						comment: o,
						className: t,
						childrenInfo: n
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", null, a.a.createElement(Pe, {
						comment: o,
						isAuthorDeleted: Object(R.d)(o)
					})), a.a.createElement(X.b, {
						className: ee.a.metaText,
						isScoreHidden: o.isScoreHidden,
						score: o.score
					}), a.a.createElement(X.c, {
						className: ee.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(Be, oe({
						key: "Created"
					}, e)), Ue({
						childrenInfo: n
					}))
				},
				He = e => a.a.createElement(r.Fragment, null, a.a.createElement(X.c, {
					className: ee.a.metaText
				}), a.a.createElement(ve, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(b.d)(e))], {
					hk: "1tiB0u"
				}))),
				Pe = e => a.a.createElement(x.a, {
					className: ee.a.CommentAuthorLink,
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
			class Be extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o,
							onCreatedClick: t
						} = e,
						n = te(e, ["comment", "onCreatedClick"]);
					return a.a.createElement(Ie, {
						href: Object(l.a)(o.permalink, {
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
					}, Object(b.d)(o.created), Ve(n.createdTooltipId, Object(h.a)(o.created)))
				}
			}
			const Ue = e => {
				const {
					hasContinueThread: o,
					numChildren: t
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return a.a.createElement(Ee, {
					className: ee.a.metaText
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
			class ze extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = te(e, ["comment"]);
					return a.a.createElement(r.Fragment, null, o.isAuthorCakeday && a.a.createElement(pe, {
						"aria-label": ye(),
						id: t.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAuthorCakeday && Ve(t.cakedayTooltipId, ye()), o.isAdmin && a.a.createElement(re, {
						desc: we(),
						id: t.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAdmin && Ve(t.adminTooltipId, we()), o.distinguishType === u.C.ALUMNI_ADMIN && a.a.createElement(ie, {
						"aria-label": ge(),
						id: t.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: t.onHideTooltip
					}, "Δ"), o.distinguishType === u.C.ALUMNI_ADMIN && Ve(t.adminEmeritusTooltipId, ge()), o.isMod && a.a.createElement(le, {
						desc: Ae(t.subredditDisplayText),
						id: t.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isMod && Ve(t.modTooltipId, Ae(t.subredditDisplayText)), o.isOp && a.a.createElement(Te, {
						desc: Oe(),
						id: t.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isOp && Ve(t.opTooltipId, Oe()), t.renderContractorBadge && a.a.createElement(be, {
						desc: je(),
						id: t.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: t.onHideTooltip
					}), t.renderContractorBadge && Ve(t.contractorTooltipId, je()), t.renderTopSupporterBadge && a.a.createElement(ce, {
						desc: Le(),
						id: t.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: t.onHideTooltip,
						onClick: t.openPowerupsModal
					}), t.renderTopSupporterBadge && Ve(t.topSupporterTooltipId, Le()))
				}
			}
			class Ge extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = te(e, ["comment"]);
					return a.a.createElement(r.Fragment, null, (o.approvedBy || o.isApproved) && a.a.createElement(ae, {
						desc: Object(O.a)(o),
						id: t.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: t.onHideTooltip
					}), (o.approvedBy || o.isApproved) && Ve(t.approveTooltipId, Object(O.a)(o)), Object(A.a)(o) && a.a.createElement(me, {
						desc: Object(O.c)(o),
						id: t.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(A.a)(o) && Ve(t.removeTooltipId, Object(O.c)(o)), Object(A.a)(o) && o.isRemoved && !o.modNote && !o.modRemovalReason && a.a.createElement(Me, {
						onClick: t.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(A.a)(o) && !(o.isRemoved && !o.modNote && !o.modRemovalReason) && a.a.createElement(Me, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), o.isLocked && !t.ignoreLock && a.a.createElement(de, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: t.lockedTooltipId,
						onMouseEnter: () => {
							t.onShowTooltip(t.lockedTooltipId)
						},
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && a.a.createElement(he, {
						desc: Object(O.e)(o),
						id: t.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && Ve(t.spamTooltipId, Object(O.e)(o)), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && a.a.createElement(se, {
						className: Object(m.a)({
							[ee.a.removed]: !!o.bannedBy
						}),
						desc: O.b,
						id: t.automodTooltipId,
						key: t.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: t.onHideTooltip
					}), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && Ve(t.automodTooltipId, O.b), Object(j.a)(o) && a.a.createElement(ue, {
						desc: Object(O.d)(o.numReports),
						id: t.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(j.a)(o) && Ve(t.reportTooltipId, Object(O.d)(o.numReports)))
				}
			}
			const Qe = () => a.a.createElement(r.Fragment, null, a.a.createElement(X.c, {
					className: ee.a.metaText
				}), a.a.createElement(xe, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				Ve = (e, o) => a.a.createElement(S.c, {
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
				return l
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
				a = t.n(r),
				d = t("./src/lib/lessComponent.tsx"),
				i = t("./src/lib/prettyPrintNumber/index.ts"),
				s = (t("./src/lib/timeAgo/index.ts"), t("./src/reddit/controls/MetaData/index.m.less")),
				c = t.n(s),
				p = function(e, o) {
					var t = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
					}
					return t
				};
			const l = d.a.span("metaText", c.a),
				m = e => a.a.createElement(l, e, " · "),
				u = e => {
					var {
						isScoreHidden: o,
						score: t,
						useUpvotes: r
					} = e, d = p(e, ["isScoreHidden", "score", "useUpvotes"]);
					const s = Object(i.b)(t),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "2L3T21"
						}),
						m = o ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : r ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", s)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, d, m)
				},
				h = e => a.a.createElement(l, null, n.fbt._({
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
				return a
			})), t.d(o, "b", (function() {
				return d
			})), t.d(o, "c", (function() {
				return i
			})), t.d(o, "d", (function() {
				return s
			})), t.d(o, "e", (function() {
				return c
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./src/lib/humanizeUTCDate/index.tsx");
			const a = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				d = n.fbt._("Action taken by Automoderator", null, {
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
				s = e => n.fbt._({
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
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, o, t) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
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
//# sourceMappingURL=ChatPost~ModQueuePages.28675442d03732d85572.js.map