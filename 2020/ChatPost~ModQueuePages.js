// https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.9b3fa17502bfd4a6736c.js
// Retrieved at 4/9/2020, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost~ModQueuePages"], {
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, o, t) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, o, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.symbol.js");
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./node_modules/react/index.js"),
				a = t.n(r),
				d = t("./node_modules/react-redux/es/index.js"),
				s = t("./node_modules/reselect/es/index.js"),
				i = t("./src/reddit/actions/tooltip.ts"),
				c = t("./src/lib/classNames/index.ts"),
				l = t("./src/lib/constants/index.ts"),
				p = t("./src/lib/humanizeDateTime/index.ts"),
				m = t("./src/lib/lessComponent.tsx"),
				u = t("./src/lib/timeAgo/index.ts"),
				h = t("./src/reddit/components/AuthorLink/index.tsx"),
				T = t("./src/reddit/components/AwardBadges/index.tsx"),
				b = t("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				I = t("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				E = t("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				v = t("./src/reddit/featureFlags/index.ts"),
				x = t("./src/reddit/selectors/economics.ts"),
				g = t("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				f = t("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				M = t.n(f);
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
			var k = Object(d.b)(() => Object(s.c)({
					post: (e, o) => {
						let {
							contentId: t
						} = o;
						return e.posts.models[t]
					},
					tippers: (e, o) => {
						if (v.d.spTopTippers(e)) return Object(x.x)(e, o)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const o = e.tippers.topTippers.ranking[e.userId] || 5,
							t = a.a.cloneElement(a.a.Children.only(e.children), {
								style: C(o)
							});
						return a.a.createElement("div", {
							className: M.a.container
						}, a.a.createElement(g.a, {
							className: M.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: o,
							subredditId: e.subredditId
						}), t)
					}
					return e.children
				})),
				_ = t("./src/reddit/components/Flair/index.tsx"),
				w = t("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = t("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = t("./src/reddit/components/InfoTextTooltip/index.tsx"),
				A = t("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = t("./src/reddit/components/PostTopMeta/index.tsx"),
				j = t("./src/reddit/helpers/isRemoved.ts"),
				L = t("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				N = t("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = t("./src/reddit/actions/comment/index.ts"),
				D = t("./src/reddit/models/Comment/index.ts"),
				H = t("./src/reddit/models/Flair/index.ts"),
				B = t("./src/reddit/icons/fonts/Admin/index.tsx"),
				P = t("./src/reddit/icons/fonts/Approve/index.tsx"),
				F = t("./src/reddit/icons/fonts/Lock/index.tsx"),
				U = t("./src/reddit/icons/fonts/helpers.tsx"),
				G = t("./src/reddit/icons/fonts/Op/index.m.less"),
				V = t.n(G);
			var W = m.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(U.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, a.a.createElement(U.a, null, e.desc)), "OpIcon", V.a),
				Q = t("./src/reddit/icons/fonts/Remove/index.tsx"),
				J = t("./src/reddit/icons/fonts/Report/index.tsx"),
				z = t("./src/reddit/icons/fonts/Spam/index.tsx"),
				K = t("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				X = t("./src/reddit/icons/svgs/Cake/index.tsx"),
				Y = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Z = t("./src/reddit/controls/MetaData/index.tsx"),
				q = t("./src/reddit/selectors/subreddit.ts"),
				$ = t("./src/reddit/selectors/userFlair.ts"),
				ee = t("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				oe = t.n(ee);

			function te() {
				return (te = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var t = arguments[o];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ne = function(e, o) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
				}
				return t
			};
			const re = m.a.wrapped(_.b, "RightPositionedAuthorFlair", oe.a),
				ae = m.a.wrapped(B.a, "AdminIcon", oe.a),
				de = m.a.wrapped(P.a, "Approve", oe.a),
				se = m.a.wrapped(F.a, "Lock", oe.a),
				ie = m.a.div("AdminEmeritus", oe.a),
				ce = m.a.wrapped(K.a, "Automoderator", oe.a),
				le = m.a.wrapped(X.a, "CakeIcon", oe.a),
				pe = m.a.wrapped(Y.a, "Moderator", oe.a),
				me = m.a.wrapped(Q.a, "Remove", oe.a),
				ue = m.a.wrapped(J.a, "Report", oe.a),
				he = m.a.wrapped(z.a, "Spam", oe.a),
				Te = m.a.wrapped(W, "Op", oe.a),
				be = m.a.wrapped(B.a, "Contractor", oe.a),
				Ie = m.a.a("MetaLink", oe.a),
				Ee = m.a.wrapped(Z.a, "EditedText", oe.a),
				ve = m.a.wrapped(Z.a, "StickiedText", oe.a),
				xe = m.a.span("DeletedText", oe.a),
				ge = m.a.wrapped(Z.a, "MetaSeparator", oe.a),
				fe = m.a.wrapped(Z.a, "CrowdControlText", oe.a),
				Me = m.a.wrapped(y.b, "AuthorHoverCard", oe.a),
				Ce = m.a.a("RemovalReason", oe.a),
				ke = m.a.wrapped(b.b, "Component", oe.a),
				_e = e => (o, t) => {
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
				Se = () => n.fbt._("Reddit admin emeritus", null, {
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
				Le = Object(d.b)(() => Object(s.c)({
					adminTooltipId: _e("CommentTopMeta--Admin--"),
					cakedayTooltipId: _e("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: _e("CommentTopMeta--AdEm--"),
					automodTooltipId: _e("CommentTopMeta--Automod--"),
					approveTooltipId: _e("CommentTopMeta--Approve--"),
					createdTooltipId: _e("CommentTopMeta--Created--"),
					contractorTooltipId: _e("CommentTopMeta--Contractor--"),
					gildedTooltipId: _e("CommentTopMeta--Gold--"),
					lockedTooltipId: _e("CommentTopMeta--Locked--"),
					modTooltipId: _e("CommentTopMeta--Mod--"),
					opTooltipId: _e("CommentTopMeta--OP--"),
					removeTooltipId: _e("CommentTopMeta--Remove--"),
					reportTooltipId: _e("CommentTopMeta--Report--"),
					spamTooltipId: _e("CommentTopMeta--Spam--"),
					hasBadges: (e, o) => {
						let {
							comment: t
						} = o;
						return !!Object(x.v)(e, t.subredditId, t.authorId).length
					},
					subredditDisplayText: (e, o) => {
						const t = Object(q.G)(e, {
							commentId: o.comment.id
						});
						return t ? t.displayText : ""
					},
					topTippersEnabled: v.d.spTopTippers,
					flairPosition: (e, o) => {
						let {
							comment: t
						} = o;
						return Object($.d)(e, {
							subredditId: t.subredditId
						})
					}
				}), (e, o) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function t() {
							((e, o, t) => {
								window.removeEventListener("focus", t), e(Object(R.N)({
									commentListNodeId: o
								})), window.setTimeout(() => e(Object(R.N)({
									commentListNodeId: o
								})), 5e3)
							})(e, o.comment.id, t)
						}))
					},
					onHideTooltip: () => e(Object(i.i)()),
					onShowTooltip: o => e(Object(i.f)({
						tooltipId: o
					})),
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
					cakedayTooltipId: d,
					children: s,
					className: i,
					collapsed: p,
					collapsedBecauseCrowdControl: m,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: b,
					compact: v,
					flair: x,
					flairPosition: g,
					hasBadges: f,
					isLivestreaming: M,
					ignoreFlairPosition: C,
					ignoreLock: k,
					language: y,
					lockedTooltipId: S,
					modTooltipId: j,
					onHideTooltip: L,
					onShowTooltip: N,
					opTooltipId: R,
					openRemovalReasonModal: B,
					removeTooltipId: P,
					renderContractorBadge: F,
					renderedInOverlay: U,
					reportTooltipId: G,
					spamTooltipId: V,
					subredditDisplayText: W,
					topTippersEnabled: Q
				} = e;
				if (u.isDeleted) return a.a.createElement(Ne, te({}, e, {
					className: Object(c.a)(i, oe.a.container, {
						[oe.a.collapsed]: p
					})
				}));
				if (p) return a.a.createElement(Re, te({}, e, {
					className: Object(c.a)(i, oe.a.container, {
						[oe.a.collapsed]: p
					})
				}));
				const J = !C && g === H.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(i, oe.a.container, {
						[oe.a.collapsed]: p,
						[oe.a.hasBadges]: f,
						[oe.a.liveStreaming]: M
					})
				}, x && J && a.a.createElement(_.b, {
					flair: x,
					forceSmallEmojis: v
				}), !Object(D.d)(u) && a.a.createElement(ke, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), a.a.createElement(Me, {
					postOrComment: u,
					tooltipType: U ? O.c.Lightbox : void 0
				}, a.a.createElement(I.b, {
					ignore: Object(D.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, a.a.createElement(He, {
					comment: u,
					isLivestreaming: M,
					isStrong: !!v,
					isAuthorDeleted: Object(D.d)(u),
					topTippersEnabled: Q
				}, s && s))), m && a.a.createElement(fe, null, "Crowd Control"), m && a.a.createElement(Z.c, {
					className: oe.a.metaText,
					key: "crowdControlSeparator"
				}), x && !J && a.a.createElement(re, {
					flair: x,
					forceSmallEmojis: v
				}), !v && a.a.createElement(w.a, {
					className: oe.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), a.a.createElement(a.a.Fragment, null, a.a.createElement(A.b, {
					commentId: u.id
				}), a.a.createElement(A.a, {
					commentId: u.id,
					commentsPageKey: h
				}), a.a.createElement(Fe, {
					comment: u,
					compact: v,
					adminTooltipId: t,
					adminEmeritusTooltipId: o,
					cakedayTooltipId: d,
					contractorTooltipId: b,
					language: y,
					modTooltipId: j,
					onHideTooltip: L,
					onShowTooltip: N,
					opTooltipId: R,
					renderContractorBadge: F,
					subredditDisplayText: W
				})), !v && a.a.createElement(a.a.Fragment, null, !u.isDeleted && a.a.createElement(Z.b, {
					className: oe.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: y,
					score: u.score
				}), a.a.createElement(Z.c, {
					className: oe.a.metaText,
					key: "scoreCreatedSeparator"
				}), a.a.createElement(Be, te({
					key: "Created"
				}, e)), u.isStickied && Ge(), u.editedAt && De(u.editedAt)), a.a.createElement(a.a.Fragment, null, a.a.createElement(Ue, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: k,
					language: y,
					lockedTooltipId: S,
					onHideTooltip: L,
					onShowTooltip: N,
					openRemovalReasonModal: B,
					removeTooltipId: P,
					reportTooltipId: G,
					spamTooltipId: V
				}), a.a.createElement(E.a, {
					className: oe.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), a.a.createElement(T.a, {
					tooltipType: U ? O.c.Lightbox : void 0,
					thing: u
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
					}, a.a.createElement(xe, null, d.deletedBy === D.a.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(Be, te({
						key: "Created"
					}, e)), t && Pe({
						childrenInfo: o
					}))
				},
				Re = e => {
					const {
						comment: o,
						language: t,
						className: n,
						childrenInfo: r
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", null, a.a.createElement(He, {
						comment: o,
						isAuthorDeleted: Object(D.d)(o),
						topTippersEnabled: !1
					})), a.a.createElement(Z.b, {
						className: oe.a.metaText,
						isScoreHidden: o.isScoreHidden,
						language: t,
						score: o.score
					}), a.a.createElement(Z.c, {
						className: oe.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(Be, te({
						key: "Created"
					}, e)), Pe({
						childrenInfo: r
					}))
				},
				De = e => a.a.createElement(r.Fragment, null, a.a.createElement(Z.c, {
					className: oe.a.metaText
				}), a.a.createElement(Ee, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(u.f)(e))], {
					hk: "1tiB0u"
				}))),
				He = e => {
					const o = a.a.createElement(h.a, {
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
					}, o) : o
				};
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
						n = ne(e, ["comment", "onCreatedClick"]);
					return a.a.createElement(Ie, {
						href: o.permalink,
						id: n.createdTooltipId,
						onClick: t,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, a.a.createElement("span", null, Object(u.f)(o.created)), Ve(n.createdTooltipId, Object(p.a)(o.created)))
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
				return a.a.createElement(ge, {
					className: oe.a.metaText
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
			class Fe extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = ne(e, ["comment"]);
					return a.a.createElement(r.Fragment, null, o.isAuthorCakeday && a.a.createElement(le, {
						"aria-label": ye(),
						id: t.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAuthorCakeday && Ve(t.cakedayTooltipId, ye()), o.isAdmin && a.a.createElement(ae, {
						desc: we(),
						id: t.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAdmin && Ve(t.adminTooltipId, we()), o.distinguishType === l.B.ALUMNI_ADMIN && a.a.createElement(ie, {
						"aria-label": Se(),
						children: "Δ",
						id: t.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.distinguishType === l.B.ALUMNI_ADMIN && Ve(t.adminEmeritusTooltipId, Se()), o.isMod && a.a.createElement(pe, {
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
					}), t.renderContractorBadge && Ve(t.contractorTooltipId, je()))
				}
			}
			class Ue extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = ne(e, ["comment"]);
					return a.a.createElement(r.Fragment, null, (o.approvedBy || o.isApproved) && a.a.createElement(de, {
						desc: Object(L.a)(o),
						id: t.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: t.onHideTooltip
					}), (o.approvedBy || o.isApproved) && Ve(t.approveTooltipId, Object(L.a)(o)), Object(j.a)(o) && a.a.createElement(me, {
						desc: Object(L.c)(o),
						id: t.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(j.a)(o) && Ve(t.removeTooltipId, Object(L.c)(o)), Object(j.a)(o) && o.isRemoved && !o.modNote && !o.modRemovalReason && a.a.createElement(Ce, {
						onClick: t.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(j.a)(o) && !(o.isRemoved && !o.modNote && !o.modRemovalReason) && a.a.createElement(Ce, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), o.isLocked && !t.ignoreLock && a.a.createElement(se, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: t.lockedTooltipId,
						onMouseEnter: () => {
							t.onShowTooltip(t.lockedTooltipId)
						},
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && a.a.createElement(he, {
						desc: Object(L.e)(t.language, o),
						id: t.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && Ve(t.spamTooltipId, Object(L.e)(t.language, o)), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && a.a.createElement(ce, {
						className: Object(c.a)({
							[oe.a.removed]: !!o.bannedBy
						}),
						desc: L.b,
						id: t.automodTooltipId,
						key: t.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: t.onHideTooltip
					}), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && Ve(t.automodTooltipId, L.b), Object(N.a)(o) && a.a.createElement(ue, {
						desc: Object(L.d)(o.numReports),
						id: t.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(N.a)(o) && Ve(t.reportTooltipId, Object(L.d)(o.numReports)))
				}
			}
			const Ge = () => a.a.createElement(r.Fragment, null, a.a.createElement(Z.c, {
					className: oe.a.metaText
				}), a.a.createElement(ve, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				Ve = (e, o) => a.a.createElement(S.c, {
					tooltipId: e,
					text: o
				})
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, o, t) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, o, t) {
			"use strict";
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				a = t("./src/config.ts");
			const d = new Set(["t2_ktrtg"]),
				s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						o = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(a.a.assetPath, "/img/badges/topTippers/").concat(o, "/rank-").concat(e, ".png")
				};
			o.a = e => r.a.createElement("img", {
				className: e.className,
				src: s(e.rank, e.creatorId && d.has(e.creatorId) ? e.creatorId : e.subredditId)
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
				r = t("./node_modules/react/index.js"),
				a = t.n(r),
				d = t("./src/lib/lessComponent.tsx"),
				s = t("./src/lib/prettyPrintNumber/index.ts"),
				i = (t("./src/lib/timeAgo/index.ts"), t("./src/reddit/controls/MetaData/index.m.less")),
				c = t.n(i),
				l = function(e, o) {
					var t = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
					}
					return t
				};
			const p = d.a.span("metaText", c.a),
				m = e => a.a.createElement(p, e, " · "),
				u = e => {
					var {
						isScoreHidden: o,
						language: t,
						score: r,
						useUpvotes: d
					} = e, i = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(s.b)(r),
						m = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(r, "number", c)], {
							hk: "2L3T21"
						}),
						u = o ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : d ? m : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(r, "number", c)], {
							hk: "gf67v"
						});
					return a.a.createElement(p, i, u)
				},
				h = (e, o) => a.a.createElement(p, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(s.b)(e))], {
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
//# sourceMappingURL=ChatPost~ModQueuePages.9b3fa17502bfd4a6736c.js.map