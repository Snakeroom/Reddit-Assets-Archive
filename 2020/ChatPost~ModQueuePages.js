// https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.990e02281b759b70b313.js
// Retrieved at 4/6/2020, 12:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~ModQueuePages"], {
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, o) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				DonationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				donationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
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
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				a = o.n(r),
				s = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/lib/classNames/index.ts"),
				l = o("./src/lib/constants/index.ts"),
				p = o("./src/lib/humanizeDateTime/index.ts"),
				m = o("./src/lib/lessComponent.tsx"),
				u = o("./src/lib/timeAgo/index.ts"),
				h = o("./src/reddit/components/AuthorLink/index.tsx"),
				T = o("./src/reddit/components/AwardBadges/index.tsx"),
				b = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				I = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				E = o("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				x = o("./src/reddit/featureFlags/index.ts"),
				g = o("./src/reddit/selectors/economics.ts"),
				v = o("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				f = o("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				M = o.n(f);
			const C = e => {
				switch (e) {
					case 1:
						return {
							color: "#FF2500", fontWeight: 700
						};
					case 2:
						return {
							color: "#FF7300", fontWeight: 700
						};
					case 3:
						return {
							color: "#FFA200", fontWeight: 700
						};
					default:
						return {}
				}
			};
			var k = Object(s.b)(() => Object(i.c)({
					post: (e, t) => {
						let {
							contentId: o
						} = t;
						return e.posts.models[o]
					},
					tippers: (e, t) => {
						if (x.d.spTopTippers(e)) return Object(g.x)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							o = a.a.cloneElement(a.a.Children.only(e.children), {
								style: C(t)
							});
						return a.a.createElement("div", {
							className: M.a.container
						}, a.a.createElement(v.a, {
							className: M.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), o)
					}
					return e.children
				})),
				_ = o("./src/reddit/components/Flair/index.tsx"),
				w = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				A = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = o("./src/reddit/components/PostTopMeta/index.tsx"),
				j = o("./src/reddit/helpers/isRemoved.ts"),
				L = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				N = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = o("./src/reddit/actions/comment/index.ts"),
				D = o("./src/reddit/models/Comment/index.ts"),
				H = o("./src/reddit/models/Flair/index.ts"),
				B = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				P = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				F = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				U = o("./src/reddit/icons/fonts/helpers.tsx"),
				V = o("./src/reddit/icons/fonts/Op/index.m.less"),
				G = o.n(V);
			var W = m.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(U.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, a.a.createElement(U.a, null, e.desc)), "OpIcon", G.a),
				Q = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				J = o("./src/reddit/icons/fonts/Report/index.tsx"),
				z = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				K = o("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				X = o("./src/reddit/icons/svgs/Cake/index.tsx"),
				Y = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Z = o("./src/reddit/controls/MetaData/index.tsx"),
				q = o("./src/reddit/selectors/experiments/publicAwarding.ts"),
				$ = o("./src/reddit/selectors/subreddit.ts"),
				ee = o("./src/reddit/selectors/userFlair.ts"),
				te = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				oe = o.n(te);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
				}
				return o
			};
			const ae = m.a.wrapped(_.b, "RightPositionedAuthorFlair", oe.a),
				se = m.a.wrapped(B.a, "AdminIcon", oe.a),
				ie = m.a.wrapped(P.a, "Approve", oe.a),
				de = m.a.wrapped(F.a, "Lock", oe.a),
				ce = m.a.div("AdminEmeritus", oe.a),
				le = m.a.wrapped(K.a, "Automoderator", oe.a),
				pe = m.a.wrapped(X.a, "CakeIcon", oe.a),
				me = m.a.wrapped(Y.a, "Moderator", oe.a),
				ue = m.a.wrapped(Q.a, "Remove", oe.a),
				he = m.a.wrapped(J.a, "Report", oe.a),
				Te = m.a.wrapped(z.a, "Spam", oe.a),
				be = m.a.wrapped(W, "Op", oe.a),
				Ie = m.a.wrapped(B.a, "Contractor", oe.a),
				Ee = m.a.a("MetaLink", oe.a),
				xe = m.a.wrapped(Z.a, "EditedText", oe.a),
				ge = m.a.wrapped(Z.a, "StickiedText", oe.a),
				ve = m.a.span("DeletedText", oe.a),
				fe = m.a.wrapped(Z.a, "MetaSeparator", oe.a),
				Me = m.a.wrapped(Z.a, "CrowdControlText", oe.a),
				Ce = m.a.wrapped(y.b, "AuthorHoverCard", oe.a),
				ke = m.a.a("RemovalReason", oe.a),
				_e = m.a.wrapped(b.b, "Component", oe.a),
				we = e => (t, o) => {
					let {
						comment: n,
						renderedInOverlay: r
					} = o;
					return "".concat(e).concat(n.id).concat(r ? "inOverlay" : "")
				},
				ye = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				Ae = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				Oe = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Se = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				je = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Le = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Ne = Object(s.b)(() => Object(i.c)({
					adminTooltipId: we("CommentTopMeta--Admin--"),
					cakedayTooltipId: we("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: we("CommentTopMeta--AdEm--"),
					automodTooltipId: we("CommentTopMeta--Automod--"),
					approveTooltipId: we("CommentTopMeta--Approve--"),
					createdTooltipId: we("CommentTopMeta--Created--"),
					contractorTooltipId: we("CommentTopMeta--Contractor--"),
					gildedTooltipId: we("CommentTopMeta--Gold--"),
					lockedTooltipId: we("CommentTopMeta--Locked--"),
					modTooltipId: we("CommentTopMeta--Mod--"),
					opTooltipId: we("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object(q.a)(e),
					removeTooltipId: we("CommentTopMeta--Remove--"),
					reportTooltipId: we("CommentTopMeta--Report--"),
					spamTooltipId: we("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: o
						} = t;
						return !!Object(g.v)(e, o.subredditId, o.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const o = Object($.G)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					topTippersEnabled: x.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: o
						} = t;
						return Object(ee.d)(e, {
							subredditId: o.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function o() {
							((e, t, o) => {
								window.removeEventListener("focus", o), e(Object(R.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(R.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, o)
						}))
					},
					onHideTooltip: () => e(Object(d.i)()),
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(o => e(o.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Ne(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: o,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: s,
					children: i,
					className: d,
					collapsed: p,
					collapsedBecauseCrowdControl: m,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: b,
					compact: x,
					flair: g,
					flairPosition: v,
					hasBadges: f,
					isLivestreaming: M,
					ignoreFlairPosition: C,
					ignoreLock: k,
					language: y,
					lockedTooltipId: A,
					modTooltipId: j,
					onHideTooltip: L,
					onShowTooltip: N,
					opTooltipId: R,
					openRemovalReasonModal: B,
					publicAwardersEnabled: P,
					removeTooltipId: F,
					renderContractorBadge: U,
					renderedInOverlay: V,
					reportTooltipId: G,
					spamTooltipId: W,
					subredditDisplayText: Q,
					topTippersEnabled: J
				} = e;
				if (u.isDeleted) return a.a.createElement(Re, ne({}, e, {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: p
					})
				}));
				if (p) return a.a.createElement(De, ne({}, e, {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: p
					})
				}));
				const z = !C && v === H.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: p,
						[oe.a.hasBadges]: f,
						[oe.a.liveStreaming]: M
					})
				}, g && z && a.a.createElement(_.b, {
					flair: g,
					forceSmallEmojis: x
				}), !Object(D.d)(u) && a.a.createElement(_e, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), a.a.createElement(Ce, {
					postOrComment: u,
					tooltipType: V ? S.c.Lightbox : void 0
				}, a.a.createElement(I.b, {
					ignore: Object(D.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, a.a.createElement(Be, {
					comment: u,
					isLivestreaming: M,
					isStrong: !!x,
					isAuthorDeleted: Object(D.d)(u),
					topTippersEnabled: J
				}, i && i))), m && a.a.createElement(Me, null, "Crowd Control"), m && a.a.createElement(Z.c, {
					className: oe.a.metaText,
					key: "crowdControlSeparator"
				}), g && !z && a.a.createElement(ae, {
					flair: g,
					forceSmallEmojis: x
				}), !x && a.a.createElement(w.a, {
					className: oe.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), a.a.createElement(a.a.Fragment, null, a.a.createElement(O.b, {
					commentId: u.id
				}), a.a.createElement(O.a, {
					commentId: u.id,
					commentsPageKey: h
				}), a.a.createElement(Ue, {
					comment: u,
					compact: x,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: s,
					contractorTooltipId: b,
					language: y,
					modTooltipId: j,
					onHideTooltip: L,
					onShowTooltip: N,
					opTooltipId: R,
					renderContractorBadge: U,
					subredditDisplayText: Q
				})), !x && a.a.createElement(a.a.Fragment, null, !u.isDeleted && a.a.createElement(Z.b, {
					className: oe.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: y,
					score: u.score
				}), a.a.createElement(Z.c, {
					className: oe.a.metaText,
					key: "scoreCreatedSeparator"
				}), a.a.createElement(Pe, ne({
					key: "Created"
				}, e)), u.isStickied && Ge(), u.editedAt && He(u.editedAt)), a.a.createElement(a.a.Fragment, null, a.a.createElement(Ve, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: k,
					language: y,
					lockedTooltipId: A,
					onHideTooltip: L,
					onShowTooltip: N,
					openRemovalReasonModal: B,
					removeTooltipId: F,
					reportTooltipId: G,
					spamTooltipId: W
				}), a.a.createElement(E.a, {
					className: oe.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), a.a.createElement(T.a, {
					showAwarders: P,
					tooltipType: V ? S.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Re = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: r,
						comment: s
					} = e;
					return a.a.createElement("div", {
						className: r
					}, a.a.createElement(ve, null, s.deletedBy === D.a.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(Pe, ne({
						key: "Created"
					}, e)), o && Fe({
						childrenInfo: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: o,
						className: n,
						childrenInfo: r
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", null, a.a.createElement(Be, {
						comment: t,
						isAuthorDeleted: Object(D.d)(t),
						topTippersEnabled: !1
					})), a.a.createElement(Z.b, {
						className: oe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: o,
						score: t.score
					}), a.a.createElement(Z.c, {
						className: oe.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(Pe, ne({
						key: "Created"
					}, e)), Fe({
						childrenInfo: r
					}))
				},
				He = e => a.a.createElement(r.Fragment, null, a.a.createElement(Z.c, {
					className: oe.a.metaText
				}), a.a.createElement(xe, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(u.f)(e))], {
					hk: "1tiB0u"
				}))),
				Be = e => {
					const t = a.a.createElement(h.a, {
						className: oe.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.B.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? a.a.createElement(k, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Pe extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							onCreatedClick: o
						} = e,
						n = re(e, ["comment", "onCreatedClick"]);
					return a.a.createElement(Ee, {
						href: t.permalink,
						id: n.createdTooltipId,
						onClick: o,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, a.a.createElement("span", null, Object(u.f)(t.created)), We(n.createdTooltipId, Object(p.a)(t.created)))
				}
			}
			const Fe = e => {
				const {
					hasContinueThread: t,
					numChildren: o
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return a.a.createElement(fe, {
					className: oe.a.metaText
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
			class Ue extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						o = re(e, ["comment"]);
					return a.a.createElement(r.Fragment, null, t.isAuthorCakeday && a.a.createElement(pe, {
						"aria-label": Ae(),
						id: o.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isAuthorCakeday && We(o.cakedayTooltipId, Ae()), t.isAdmin && a.a.createElement(se, {
						desc: ye(),
						id: o.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isAdmin && We(o.adminTooltipId, ye()), t.distinguishType === l.B.ALUMNI_ADMIN && a.a.createElement(ce, {
						"aria-label": Oe(),
						children: "Δ",
						id: o.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && We(o.adminEmeritusTooltipId, Oe()), t.isMod && a.a.createElement(me, {
						desc: Se(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isMod && We(o.modTooltipId, Se(o.subredditDisplayText)), t.isOp && a.a.createElement(be, {
						desc: je(),
						id: o.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.isOp && We(o.opTooltipId, je()), o.renderContractorBadge && a.a.createElement(Ie, {
						desc: Le(),
						id: o.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: o.onHideTooltip
					}), o.renderContractorBadge && We(o.contractorTooltipId, Le()))
				}
			}
			class Ve extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						o = re(e, ["comment"]);
					return a.a.createElement(r.Fragment, null, (t.approvedBy || t.isApproved) && a.a.createElement(ie, {
						desc: Object(L.a)(o.language, t),
						id: o.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: o.onHideTooltip
					}), (t.approvedBy || t.isApproved) && We(o.approveTooltipId, Object(L.a)(o.language, t)), Object(j.a)(t) && a.a.createElement(ue, {
						desc: Object(L.c)(o.language, t),
						id: o.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip
					}), Object(j.a)(t) && We(o.removeTooltipId, Object(L.c)(o.language, t)), Object(j.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && a.a.createElement(ke, {
						onClick: o.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(j.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && a.a.createElement(ke, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: o.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), t.isLocked && !o.ignoreLock && a.a.createElement(de, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: o.lockedTooltipId,
						onMouseEnter: () => {
							o.onShowTooltip(o.lockedTooltipId)
						},
						onMouseLeave: o.onHideTooltip
					}), t.bannedBy && t.isSpam && a.a.createElement(Te, {
						desc: Object(L.e)(o.language, t),
						id: o.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: o.onHideTooltip
					}), t.bannedBy && t.isSpam && We(o.spamTooltipId, Object(L.e)(o.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && a.a.createElement(le, {
						className: Object(c.a)({
							[oe.a.removed]: !!t.bannedBy
						}),
						desc: Object(L.b)(o.language),
						id: o.automodTooltipId,
						key: o.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: o.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && We(o.automodTooltipId, Object(L.b)(o.language)), Object(N.a)(t) && a.a.createElement(he, {
						desc: Object(L.d)(o.language, t.numReports),
						id: o.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: o.onHideTooltip
					}), Object(N.a)(t) && We(o.reportTooltipId, Object(L.d)(o.language, t.numReports)))
				}
			}
			const Ge = () => a.a.createElement(r.Fragment, null, a.a.createElement(Z.c, {
					className: oe.a.metaText
				}), a.a.createElement(ge, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				We = (e, t) => a.a.createElement(A.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, o) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/react/index.js"),
				r = o.n(n),
				a = o("./src/config.ts");
			const s = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(a.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => r.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && s.has(e.creatorId) ? e.creatorId : e.subredditId)
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
				return p
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "d", (function() {
				return h
			}));
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				a = o.n(r),
				s = o("./src/lib/lessComponent.tsx"),
				i = o("./src/lib/prettyPrintNumber/index.ts"),
				d = (o("./src/lib/timeAgo/index.ts"), o("./src/reddit/controls/MetaData/index.m.less")),
				c = o.n(d),
				l = function(e, t) {
					var o = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (o[n[r]] = e[n[r]])
					}
					return o
				};
			const p = s.a.span("metaText", c.a),
				m = e => a.a.createElement(p, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						language: o,
						score: r,
						useUpvotes: s
					} = e, d = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(i.b)(r),
						m = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(r, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? m : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(r, "number", c)], {
							hk: "gf67v"
						});
					return a.a.createElement(p, d, u)
				},
				h = (e, t) => a.a.createElement(p, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);
			t.a = e => r.a.createElement("svg", {
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
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.tb
				});
				return Object(n.bc)(t) ? void 0 : t
			}
		}
	}
]);
//# sourceMappingURL=ChatPost~ModQueuePages.990e02281b759b70b313.js.map