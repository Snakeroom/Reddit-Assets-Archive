// https://www.redditstatic.com/desktop2x/ChatPost~ModQueuePages.ef2c22ecae8e4a9fb7e1.js
// Retrieved at 3/11/2020, 1:00:05 PM by Reddit Dataminer v1.0.0
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
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				s = t("./node_modules/reselect/es/index.js"),
				d = t("./src/app/strings/index.ts"),
				i = t("./src/reddit/actions/tooltip.ts"),
				c = t("./src/lib/classNames/index.ts"),
				l = t("./src/lib/constants/index.ts"),
				p = t("./src/lib/humanizeDateTime/index.ts"),
				m = t("./src/lib/lessComponent.tsx"),
				u = t("./src/lib/timeAgo/index.ts"),
				T = t("./src/reddit/components/AuthorLink/index.tsx"),
				h = t("./src/reddit/components/AwardBadges/index.tsx"),
				b = t("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				g = t("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				I = t("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				E = t("./src/reddit/featureFlags/index.ts"),
				x = t("./src/reddit/selectors/economics.ts"),
				v = t("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				C = t("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				O = t.n(C);
			const M = e => {
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
			var j = Object(r.b)(() => Object(s.c)({
					post: (e, o) => {
						let {
							contentId: t
						} = o;
						return e.posts.models[t]
					},
					tippers: (e, o) => {
						if (E.d.spTopTippers(e)) return Object(x.v)(e, o)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const o = e.tippers.topTippers.ranking[e.userId] || 5,
							t = a.a.cloneElement(a.a.Children.only(e.children), {
								style: M(o)
							});
						return a.a.createElement("div", {
							className: O.a.container
						}, a.a.createElement(v.a, {
							className: O.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: o,
							subredditId: e.subredditId
						}), t)
					}
					return e.children
				})),
				w = t("./src/reddit/components/Flair/index.tsx"),
				y = t("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				A = t("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = t("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = t("./src/reddit/components/JSAPIContainers/index.tsx"),
				k = t("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = t("./src/reddit/helpers/isRemoved.ts"),
				L = t("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				N = t("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = t("./src/reddit/i18n/utils.ts"),
				H = t("./src/reddit/actions/comment/index.ts"),
				D = t("./src/reddit/models/Comment/index.ts"),
				B = t("./src/reddit/models/Flair/index.ts"),
				P = t("./src/reddit/icons/fonts/Admin/index.tsx"),
				F = t("./src/reddit/icons/fonts/Approve/index.tsx"),
				U = t("./src/reddit/icons/fonts/Lock/index.tsx"),
				G = t("./src/reddit/icons/fonts/helpers.tsx"),
				W = t("./src/reddit/icons/fonts/Op/index.m.less"),
				Q = t.n(W);
			var V = m.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(G.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, a.a.createElement(G.a, null, e.desc)), "OpIcon", Q.a),
				J = t("./src/reddit/icons/fonts/Remove/index.tsx"),
				z = t("./src/reddit/icons/fonts/Report/index.tsx"),
				K = t("./src/reddit/icons/fonts/Spam/index.tsx"),
				X = t("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Y = t("./src/reddit/icons/svgs/Cake/index.tsx"),
				Z = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				q = t("./src/reddit/controls/MetaData/index.tsx"),
				$ = t("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = t("./src/reddit/selectors/subreddit.ts"),
				oe = t("./src/reddit/selectors/userFlair.ts"),
				te = t("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ne = t.n(te);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var t = arguments[o];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, o) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) o.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]])
				}
				return t
			};
			const se = m.a.wrapped(w.b, "RightPositionedAuthorFlair", ne.a),
				de = m.a.wrapped(P.a, "AdminIcon", ne.a),
				ie = m.a.wrapped(F.a, "Approve", ne.a),
				ce = m.a.wrapped(U.a, "Lock", ne.a),
				le = m.a.div("AdminEmeritus", ne.a),
				pe = m.a.wrapped(X.a, "Automoderator", ne.a),
				me = m.a.wrapped(Y.a, "CakeIcon", ne.a),
				ue = m.a.wrapped(Z.a, "Moderator", ne.a),
				Te = m.a.wrapped(J.a, "Remove", ne.a),
				he = m.a.wrapped(z.a, "Report", ne.a),
				be = m.a.wrapped(K.a, "Spam", ne.a),
				ge = m.a.wrapped(V, "Op", ne.a),
				Ie = m.a.wrapped(P.a, "Contractor", ne.a),
				Ee = m.a.a("MetaLink", ne.a),
				xe = m.a.wrapped(q.a, "EditedText", ne.a),
				ve = m.a.wrapped(q.a, "StickiedText", ne.a),
				Ce = m.a.span("DeletedText", ne.a),
				Oe = m.a.wrapped(q.a, "MetaSeparator", ne.a),
				Me = m.a.wrapped(q.a, "CrowdControlText", ne.a),
				je = m.a.wrapped(A.b, "AuthorHoverCard", ne.a),
				we = m.a.a("RemovalReason", ne.a),
				ye = m.a.wrapped(b.b, "Component", ne.a),
				Ae = Object(d.c)("comment.children"),
				Se = Object(d.c)("comment.moreThanChildren"),
				fe = e => (o, t) => {
					let {
						comment: n,
						renderedInOverlay: a
					} = t;
					return "".concat(e).concat(n.id).concat(a ? "inOverlay" : "")
				},
				ke = Object(d.d)("comment.tooltips.admin"),
				_e = Object(d.d)("comment.tooltips.cakeday"),
				Le = Object(d.d)("comment.tooltips.adminEmeritus"),
				Ne = Object(d.d)("comment.tooltips.moderator"),
				Re = Object(d.d)("comment.tooltips.op"),
				He = Object(d.d)("comment.tooltips.contractor"),
				De = Object(r.b)(() => Object(s.c)({
					adminTooltipId: fe("CommentTopMeta--Admin--"),
					cakedayTooltipId: fe("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: fe("CommentTopMeta--AdEm--"),
					automodTooltipId: fe("CommentTopMeta--Automod--"),
					approveTooltipId: fe("CommentTopMeta--Approve--"),
					createdTooltipId: fe("CommentTopMeta--Created--"),
					contractorTooltipId: fe("CommentTopMeta--Contractor--"),
					gildedTooltipId: fe("CommentTopMeta--Gold--"),
					lockedTooltipId: fe("CommentTopMeta--Locked--"),
					modTooltipId: fe("CommentTopMeta--Mod--"),
					opTooltipId: fe("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: fe("CommentTopMeta--Remove--"),
					reportTooltipId: fe("CommentTopMeta--Report--"),
					spamTooltipId: fe("CommentTopMeta--Spam--"),
					hasBadges: (e, o) => {
						let {
							comment: t
						} = o;
						return !!Object(x.t)(e, t.subredditId, t.authorId).length
					},
					subredditDisplayText: (e, o) => {
						const t = Object(ee.G)(e, {
							commentId: o.comment.id
						});
						return t ? t.displayText : ""
					},
					topTippersEnabled: E.d.spTopTippers,
					flairPosition: (e, o) => {
						let {
							comment: t
						} = o;
						return Object(oe.d)(e, {
							subredditId: t.subredditId
						})
					}
				}), (e, o) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function t() {
							((e, o, t) => {
								window.removeEventListener("focus", t), e(Object(H.N)({
									commentListNodeId: o
								})), window.setTimeout(() => e(Object(H.N)({
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
			o.a = De(e => {
				const {
					adminEmeritusTooltipId: o,
					adminTooltipId: t,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: s,
					children: d,
					className: i,
					collapsed: p,
					collapsedBecauseCrowdControl: m,
					comment: u,
					commentsPageKey: T,
					contractorTooltipId: b,
					compact: E,
					flair: x,
					flairPosition: v,
					hasBadges: C,
					isLivestreaming: O,
					ignoreFlairPosition: M,
					ignoreLock: j,
					language: A,
					lockedTooltipId: S,
					modTooltipId: _,
					onHideTooltip: L,
					onShowTooltip: N,
					opTooltipId: R,
					openRemovalReasonModal: H,
					publicAwardersEnabled: P,
					removeTooltipId: F,
					renderContractorBadge: U,
					renderedInOverlay: G,
					reportTooltipId: W,
					spamTooltipId: Q,
					subredditDisplayText: V,
					topTippersEnabled: J
				} = e;
				if (u.isDeleted) return a.a.createElement(Be, ae({}, e, {
					className: Object(c.a)(i, ne.a.container, {
						[ne.a.collapsed]: p
					})
				}));
				if (p) return a.a.createElement(Pe, ae({}, e, {
					className: Object(c.a)(i, ne.a.container, {
						[ne.a.collapsed]: p
					})
				}));
				const z = !M && v === B.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(i, ne.a.container, {
						[ne.a.collapsed]: p,
						[ne.a.hasBadges]: C,
						[ne.a.liveStreaming]: O
					})
				}, x && z && a.a.createElement(w.b, {
					flair: x,
					forceSmallEmojis: E
				}), !Object(D.d)(u) && a.a.createElement(ye, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), a.a.createElement(je, {
					postOrComment: u,
					tooltipType: G ? k.c.Lightbox : void 0
				}, a.a.createElement(g.b, {
					ignore: Object(D.d)(u) || !!u.distinguishType && u.distinguishType !== l.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, a.a.createElement(Ue, {
					comment: u,
					isLivestreaming: O,
					isStrong: !!E,
					isAuthorDeleted: Object(D.d)(u),
					topTippersEnabled: J
				}, d && d))), m && a.a.createElement(Me, null, "Crowd Control"), m && a.a.createElement(q.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), x && !z && a.a.createElement(se, {
					flair: x,
					forceSmallEmojis: E
				}), !E && a.a.createElement(y.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), a.a.createElement(a.a.Fragment, null, a.a.createElement(f.b, {
					commentId: u.id
				}), a.a.createElement(f.a, {
					commentId: u.id,
					commentsPageKey: T
				}), a.a.createElement(Qe, {
					comment: u,
					compact: E,
					adminTooltipId: t,
					adminEmeritusTooltipId: o,
					cakedayTooltipId: s,
					contractorTooltipId: b,
					language: A,
					modTooltipId: _,
					onHideTooltip: L,
					onShowTooltip: N,
					opTooltipId: R,
					renderContractorBadge: U,
					subredditDisplayText: V
				})), !E && a.a.createElement(a.a.Fragment, null, !u.isDeleted && a.a.createElement(q.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: A,
					score: u.score
				}), a.a.createElement(q.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), a.a.createElement(Ge, ae({
					key: "Created"
				}, e)), u.isStickied && Je(A), u.editedAt && Fe(A, u.editedAt)), a.a.createElement(a.a.Fragment, null, a.a.createElement(Ve, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: j,
					language: A,
					lockedTooltipId: S,
					onHideTooltip: L,
					onShowTooltip: N,
					openRemovalReasonModal: H,
					removeTooltipId: F,
					reportTooltipId: W,
					spamTooltipId: Q
				}), a.a.createElement(I.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), a.a.createElement(h.a, {
					showAwarders: P,
					tooltipType: G ? k.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Be = e => {
					const {
						language: o,
						childrenInfo: t,
						collapsed: n,
						className: r,
						comment: s
					} = e;
					return a.a.createElement("div", {
						className: r
					}, a.a.createElement(Ce, null, s.deletedBy === D.a.User ? Object(d.a)(o, "comment.commentDeletedByAuthor") : Object(d.a)(o, "comment.commentDeletedByMod")), a.a.createElement(Ge, ae({
						key: "Created"
					}, e)), n && We({
						childrenInfo: t,
						language: o
					}))
				},
				Pe = e => {
					const {
						comment: o,
						language: t,
						className: n,
						childrenInfo: r
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", null, a.a.createElement(Ue, {
						comment: o,
						isAuthorDeleted: Object(D.d)(o),
						topTippersEnabled: !1
					})), a.a.createElement(q.b, {
						className: ne.a.metaText,
						isScoreHidden: o.isScoreHidden,
						language: t,
						score: o.score
					}), a.a.createElement(q.c, {
						className: ne.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(Ge, ae({
						key: "Created"
					}, e)), We({
						childrenInfo: r,
						language: t
					}))
				},
				Fe = (e, o) => a.a.createElement(n.Fragment, null, a.a.createElement(q.c, {
					className: ne.a.metaText
				}), a.a.createElement(xe, null, Object(d.a)(e, "comment.edited", {
					time: Object(u.d)(e, o)
				}))),
				Ue = e => {
					const o = a.a.createElement(T.a, {
						className: ne.a.CommentAuthorLink,
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
					return e.topTippersEnabled ? a.a.createElement(j, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, o) : o
				};
			class Ge extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o,
							language: t,
							onCreatedClick: n
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return a.a.createElement(Ee, {
						href: o.permalink,
						id: r.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, a.a.createElement("span", null, Object(u.d)(t, o.created)), ze(r.createdTooltipId, Object(p.a)(o.created)))
				}
			}
			const We = e => {
				const {
					hasContinueThread: o,
					numChildren: t
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return a.a.createElement(Oe, {
					className: ne.a.metaText
				}, "(", o ? Se(e.language, t, {
					numChildren: t
				}) : Ae(e.language, t, {
					numChildren: t
				}), ")")
			};
			class Qe extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = re(e, ["comment"]);
					return a.a.createElement(n.Fragment, null, o.isAuthorCakeday && a.a.createElement(me, {
						"aria-label": _e(t.language),
						id: t.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAuthorCakeday && ze(t.cakedayTooltipId, _e(t.language)), o.isAdmin && a.a.createElement(de, {
						desc: ke(t.language),
						id: t.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isAdmin && ze(t.adminTooltipId, ke(t.language)), o.distinguishType === l.C.ALUMNI_ADMIN && a.a.createElement(le, {
						"aria-label": Le(t.language),
						children: "Δ",
						id: t.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.distinguishType === l.C.ALUMNI_ADMIN && ze(t.adminEmeritusTooltipId, Le(t.language)), o.isMod && a.a.createElement(ue, {
						desc: Ne(t.language, {
							displayText: t.subredditDisplayText
						}),
						id: t.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isMod && ze(t.modTooltipId, Ne(t.language, {
						displayText: t.subredditDisplayText
					})), o.isOp && a.a.createElement(ge, {
						desc: Re(t.language),
						id: t.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.isOp && ze(t.opTooltipId, Re(t.language)), t.renderContractorBadge && a.a.createElement(Ie, {
						desc: He(t.language),
						id: t.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: t.onHideTooltip
					}), t.renderContractorBadge && ze(t.contractorTooltipId, He(t.language)))
				}
			}
			class Ve extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: o
						} = e,
						t = re(e, ["comment"]);
					return a.a.createElement(n.Fragment, null, (o.approvedBy || o.isApproved) && a.a.createElement(ie, {
						desc: Object(L.a)(t.language, o),
						id: t.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: t.onHideTooltip
					}), (o.approvedBy || o.isApproved) && ze(t.approveTooltipId, Object(L.a)(t.language, o)), Object(_.a)(o) && a.a.createElement(Te, {
						desc: Object(L.c)(t.language, o),
						id: t.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(_.a)(o) && ze(t.removeTooltipId, Object(L.c)(t.language, o)), Object(_.a)(o) && o.isRemoved && !o.modNote && !o.modRemovalReason && a.a.createElement(we, {
						onClick: t.openRemovalReasonModal
					}, Object(d.a)(t.language, "modTools.addARemovalReason")), Object(_.a)(o) && !(o.isRemoved && !o.modNote && !o.modRemovalReason) && a.a.createElement(we, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: t.onHideTooltip
					}, Object(d.a)(t.language, "modTools.removalReason")), o.isLocked && !t.ignoreLock && a.a.createElement(ce, {
						desc: Object(R.c)("Locked"),
						id: t.lockedTooltipId,
						onMouseEnter: () => {
							t.onShowTooltip(t.lockedTooltipId)
						},
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && a.a.createElement(be, {
						desc: Object(L.e)(t.language, o),
						id: t.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: t.onHideTooltip
					}), o.bannedBy && o.isSpam && ze(t.spamTooltipId, Object(L.e)(t.language, o)), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && a.a.createElement(pe, {
						className: Object(c.a)({
							[ne.a.removed]: !!o.bannedBy
						}),
						desc: Object(L.b)(t.language),
						id: t.automodTooltipId,
						key: t.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: t.onHideTooltip
					}), ("AutoModerator" === o.bannedBy || "AutoModerator" === o.approvedBy) && ze(t.automodTooltipId, Object(L.b)(t.language)), Object(N.a)(o) && a.a.createElement(he, {
						desc: Object(L.d)(t.language, o.numReports),
						id: t.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: t.onHideTooltip
					}), Object(N.a)(o) && ze(t.reportTooltipId, Object(L.d)(t.language, o.numReports)))
				}
			}
			const Je = e => a.a.createElement(n.Fragment, null, a.a.createElement(q.c, {
					className: ne.a.metaText
				}), a.a.createElement(ve, null, Object(d.a)(e, "comment.stickied"))),
				ze = (e, o) => a.a.createElement(S.c, {
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
				a = t.n(n),
				r = t("./src/config.ts");
			const s = new Set(["t2_ktrtg"]),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						o = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(o, "/rank-").concat(e, ".png")
				};
			o.a = e => a.a.createElement("img", {
				className: e.className,
				src: d(e.rank, e.creatorId && s.has(e.creatorId) ? e.creatorId : e.subredditId)
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
				return m
			})), t.d(o, "c", (function() {
				return u
			})), t.d(o, "b", (function() {
				return h
			})), t.d(o, "d", (function() {
				return b
			}));
			t("./node_modules/core-js/modules/es6.symbol.js");
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				r = t("./src/app/strings/index.ts"),
				s = t("./src/lib/lessComponent.tsx"),
				d = t("./src/lib/prettyPrintNumber/index.ts"),
				i = (t("./src/lib/timeAgo/index.ts"), t("./src/reddit/i18n/utils.ts")),
				c = t("./src/reddit/controls/MetaData/index.m.less"),
				l = t.n(c),
				p = function(e, o) {
					var t = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) o.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]])
					}
					return t
				};
			const m = s.a.span("metaText", l.a),
				u = e => a.a.createElement(m, e, " · "),
				T = Object(r.c)("comment.point"),
				h = e => {
					var {
						isScoreHidden: o,
						language: t,
						score: n,
						useUpvotes: r
					} = e, s = p(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(d.b)(n),
						l = Object(i.c)("\n    ".concat(Object(i.b)("score", c), " ").concat(Object(i.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						u = o ? Object(i.c)("Score hidden") : r ? l : T(t, n, {
							count: c
						});
					return a.a.createElement(m, s, u)
				},
				b = (e, o) => {
					const t = Object(r.b)(o, "posts.comments.noun", e, {
						count: Object(d.b)(e)
					});
					return a.a.createElement(m, null, t)
				}
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
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, o, t) {
			"use strict";
			t.d(o, "a", (function() {
				return r
			}));
			var n = t("./src/reddit/constants/experiments.ts"),
				a = t("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const o = Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.gb
				});
				return Object(n.Nb)(o) ? void 0 : o
			}
		}
	}
]);
//# sourceMappingURL=ChatPost~ModQueuePages.ef2c22ecae8e4a9fb7e1.js.map