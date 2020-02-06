// https://www.redditstatic.com/desktop2x/AuthorHovercard~Settings~SubredditWiki.df59756998747984a2ec.js
// Retrieved at 2/6/2020, 12:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Settings~SubredditWiki"], {
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: r,
					className: n,
					sendEvent: a,
					contextId: o
				} = e;
				return s.a.createElement(i.f, {
					onClick: () => {
						t(), a(Object(c.b)(o))
					},
					className: n
				}, r)
			};
			l.displayName = "ChatButton";
			const u = Object(a.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.a)(n, r))
					}
				}
			});
			t.a = u(Object(d.b)(l))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/tooltip.ts"),
				i = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/selectors/gov.ts"),
				l = r("./src/reddit/selectors/meta.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				m = r("./src/reddit/selectors/tooltip.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/selectors/userFlair.ts"),
				b = r("./src/config.ts"),
				g = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = r("./src/lib/lessComponent.tsx"),
				x = r("./src/lib/prettyPrintNumber/index.ts"),
				I = r("./src/lib/timeAgo/index.ts"),
				h = r("./src/reddit/i18n/components.tsx"),
				L = r("./src/reddit/components/ChatButton/index.tsx"),
				E = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				w = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = r("./src/reddit/components/SubscribeButton/index.tsx"),
				_ = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				j = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				O = r("./src/reddit/icons/svgs/Karma/index.tsx"),
				H = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				M = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				y = r("./src/reddit/i18n/utils.ts"),
				N = r("./src/reddit/actions/inContextModeration.ts"),
				P = r("./src/reddit/actions/modal.ts"),
				U = r("./src/reddit/actions/subredditModeration.ts"),
				T = r("./src/reddit/constants/modals.ts"),
				A = r("./src/reddit/components/Hovercards/helpers.ts"),
				k = r("./src/reddit/icons/svgs/Ban/index.tsx"),
				S = r("./src/reddit/icons/svgs/Mute/index.tsx"),
				B = r("./src/reddit/icons/svgs/Unban/index.tsx"),
				F = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Z = r("./src/reddit/selectors/subredditModeration.ts"),
				D = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				K = r.n(D);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js"), V = C.a.wrapped(k.a, "BanIcon", K.a), q = C.a.wrapped(S.a, "MuteIcon", K.a), Y = C.a.wrapped(B.a, "UnbanIcon", K.a), z = Object(o.c)({
				hasModMailPermissions: Object(u.a)(F.c.mail),
				isUserBanned: (e, t) => !!Object(Z.g)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(p.db)(e, {
					userName: t.username
				})
			});
			class Q extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: n,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: d,
						toggleMuteModal: i
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(A.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(_.e(t))
						}
					}, s.a.createElement(Y, null), R._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(A.a, {
						role: "button",
						onClick: () => {
							d(), o(_.a(t))
						}
					}, s.a.createElement(V, null), R._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(A.a, {
						role: "button",
						onClick: () => {
							i(), o(_.d(t))
						}
					}, s.a.createElement(q, null), R._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var G = Object(a.b)(z, (e, t) => {
					let {
						username: r,
						subredditId: n,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(U.nb)(n, t)),
						requestUserBanInfo: () => e(Object(U.Z)(n, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(N.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(U.X)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(N.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(P.i)(T.a.MUTE_USER))
						}
					}
				})(Q),
				W = r("./src/reddit/actions/userFlair.ts"),
				J = r("./src/reddit/icons/svgs/Tag/index.tsx"),
				X = r("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				$ = r.n(X);
			const ee = C.a.wrapped(J.a, "FlairIcon", $.a);
			var te = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(W.p)(t.subredditId, t.username))
				}))(e => s.a.createElement(A.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(_.c(e.contextId))
					}
				}, s.a.createElement(ee, null), s.a.createElement(h.c, null, "Edit user flair"))),
				re = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ne = r.n(re);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = C.a.div("SubredditIcon", ne.a),
				oe = C.a.wrapped(f.a, "SubscribeButton", ne.a),
				de = C.a.wrapped(L.a, "ChatButton", ne.a),
				ie = C.a.wrapped(O.a, "KarmaIcon", ne.a),
				ce = C.a.wrapped(H.a, "PremiumIcon", ne.a),
				le = C.a.wrapped(g.a, "UserNameLink", ne.a),
				ue = C.a.div("UserNameMetaData", ne.a),
				me = C.a.div("MetaDataItem", ne.a),
				pe = C.a.div("Bullet", ne.a),
				ve = C.a.div("UserNameContainer", ne.a),
				be = C.a.div("UserInfoContainer", ne.a),
				ge = C.a.div("PostKarma", ne.a),
				Ce = C.a.div("CommentKarma", ne.a),
				xe = C.a.div("KarmaCount", ne.a),
				Ie = C.a.div("KarmaLabel", ne.a),
				he = C.a.div("BannerImage", ne.a),
				Le = C.a.div("UserContainer", ne.a),
				Ee = C.a.div("BottomSpacer", ne.a),
				we = C.a.div("Container", ne.a),
				fe = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(le, {
					to: "/user/".concat(e.userName, "/")
				}, "u/".concat(e.userName)), e.user.isEmployee && s.a.createElement(j.a, {
					className: ne.a.adminIcon,
					title: Object(y.c)("Reddit admin")
				}), e.user.isGold && s.a.createElement(g.a, {
					to: "/premium"
				}, s.a.createElement(ce, null))), s.a.createElement(ue, null, e.user.username && s.a.createElement(me, null, e.user.username, s.a.createElement(pe, null, "•")), s.a.createElement(me, null, Object(I.d)(e.language, e.user.created)))),
				_e = e => s.a.createElement(be, null, s.a.createElement(ie, null), s.a.createElement(ge, null, s.a.createElement(xe, null, Object(x.b)(e.user.postKarma)), s.a.createElement(Ie, null, s.a.createElement(h.c, null, "Post Karma"))), s.a.createElement(Ce, null, s.a.createElement(xe, null, Object(x.b)(e.user.commentKarma)), s.a.createElement(Ie, null, s.a.createElement(h.c, null, "Comment Karma")))),
				je = Object(w.a)(e => {
					const {
						className: t,
						contextId: r,
						hideNSFWPref: n,
						hoverId: a,
						isCurrentUser: o,
						isLoggedIn: d,
						origin: i,
						language: c,
						moderatorPermissions: l,
						sendEvent: u,
						style: m,
						subredditId: p,
						userName: v,
						user: g,
						userFlair: C
					} = e;
					if (!g) return s.a.createElement(we, {
						style: m
					});
					const x = g.isNSFW && n,
						I = g.accountIcon || "".concat(b.a.assetPath, "/img/snoo_user_placeholder.png"),
						h = l && l.flair,
						L = l && l.access,
						w = C && C.templateIds && C.templateIds.length > 0,
						f = C && C.displaySettings && C.displaySettings.isEnabled,
						{
							awardedLastMonth: j
						} = g,
						O = x ? "".concat(b.a.assetPath, "/img/user-info-banner.png") : e.user.bannerImage,
						H = x ? "".concat(b.a.assetPath, "/img/avatar_over18_square.png") : I;
					return s.a.createElement(we, {
						className: t,
						id: a,
						style: m
					}, s.a.createElement(he, {
						style: {
							backgroundImage: "url('".concat(O, "')")
						}
					}), s.a.createElement(Le, null, s.a.createElement(ve, null, s.a.createElement(ae, {
						style: {
							background: "url('".concat(H, "')"),
							backgroundSize: "contain"
						}
					}), s.a.createElement(fe, {
						language: c,
						origin: i,
						user: g,
						userName: v
					})), s.a.createElement(_e, {
						language: c,
						user: g,
						userName: v
					}), j && s.a.createElement(M.a, {
						recentAwardings: j,
						username: v
					}), d && !o && s.a.createElement(de, {
						contextId: r,
						userId: g.id
					}, Object(y.c)("Start Chat")), g.hasUserProfile && !o && s.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(_.g)(e ? "unfollow" : "follow", r),
						small: !0
					})), L && r && !o && p && s.a.createElement(G, {
						contextId: r,
						language: c,
						subredditId: p,
						sendEvent: u,
						username: v
					}), h && r && w && f && p && s.a.createElement(te, {
						contextId: r,
						language: c,
						subredditId: p,
						sendEvent: u,
						username: v
					}), s.a.createElement(E.i, {
						contextId: r,
						subredditId: p,
						user: g
					}), !(L || d) && s.a.createElement(Ee, null))
				});
			var Oe = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return s.a.createElement(je, se({
					isOpen: t
				}, e))
			};
			const He = Object(o.c)({
					tokenName: c.o,
					activeTooltipId: m.a,
					isCurrentUser: (e, t) => {
						const r = Object(p.i)(e);
						return !!r && Object(i.f)(r) === t.userName
					},
					isLoggedIn: p.G,
					hideNSFWPref: p.y,
					language: p.P,
					moderatorPermissions: u.j,
					origin: l.h,
					user: p.db,
					userFlair: v.c
				}),
				Me = Object(a.b)(He, (e, t) => ({
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Me(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Oe, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				isCurrentUser: e.isCurrentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				language: e.language,
				moderatorPermissions: e.moderatorPermissions,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				sendEvent: e.sendEvent,
				subredditId: e.subredditId,
				tokenName: e.tokenName,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userName: e.userName
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				BanIcon: "_2g595huO3XJ8C5PGbnTIcH",
				banIcon: "_2g595huO3XJ8C5PGbnTIcH",
				MuteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				muteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				UnbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3",
				unbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less": function(e, t, r) {
			e.exports = {
				FlairIcon: "_2xaYvwRfHZMRW_6lyBpV4v",
				flairIcon: "_2xaYvwRfHZMRW_6lyBpV4v"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				SubredditIcon: "_59_dv7TVnod9oIzsOdPEM",
				subredditIcon: "_59_dv7TVnod9oIzsOdPEM",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(i.d)(t.authorOrSubredditName))
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const v = Object(d.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var b = Object(o.b)(v, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.t)(t.authorOrSubredditName))
					}
				})),
				g = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				C = r.n(g);
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return L
			}));
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || (this.props.onOpenUserDropdown(), this.props.sendHoverEvent())
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const I = a.a.wrapped(x, "HoverDiv", C.a),
				h = m(I),
				L = b(I)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				o = r.n(a);
			const d = n.a.wrapped(s.a, "UserActionItem", o.a),
				i = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: a
					} = e;
					let o = s;
					return r && (o = "".concat(o, "--").concat(r)), a && (o = "".concat(o, "--").concat(a)), t && (o = "".concat(o, "--").concat(t)), n && (o = "".concat(o, "--").concat(n)), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				l = r("./src/reddit/i18n/components.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				m = r.n(u);
			const p = Object(o.c)({
				isInGoldProfileGildedExperiment: c.a
			});
			class v extends s.a.PureComponent {
				render() {
					const {
						isInGoldProfileGildedExperiment: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: a
					} = t, o = n.icon32 ? n.icon32.url : n.icon.url, c = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: m.a.AwardedLastMonth,
						href: e ? "/user/".concat(r, "/gilded") : "".concat(d.a.oldRedditUrl, "/user/").concat(r, "/gilded")
					}, s.a.createElement("div", {
						className: m.a.iconColumn
					}, s.a.createElement("img", {
						alt: c,
						className: m.a.icon,
						src: o
					}), a > 1 && s.a.createElement("span", {
						className: m.a.count
					}, "+".concat(Object(i.b)(a - 1)))), s.a.createElement("div", {
						className: m.a.textColumn
					}, a > 1 ? s.a.createElement(l.c, null, "Received the ", s.a.createElement(l.b, {
						name: "award-name"
					}, n.name), " Award and more in the past 30 days") : s.a.createElement(l.c, null, "Received the ", s.a.createElement(l.b, {
						name: "award-name"
					}, n.name), " Award in the past 30 days")))
				}
			}
			t.a = Object(a.b)(p)(v)
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				SnooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				snooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function d(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function i(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function c(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				d = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, d.a.admin, {
					[d.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		},
		"./src/reddit/selectors/experiments/goldProfileGildedAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => !!(e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(a.G)(e),
					experimentName: n.K
				});
				return Object(n.Qb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/platform.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = new Set(["pollstest", "whatssnoo"]),
				i = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog"]),
				c = e => d.has(e.toLowerCase()) || i.has(e.toLowerCase()),
				l = e => d.has((Object(a.e)(e) || "").toLowerCase()) || i.has((Object(a.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: o.G,
					experimentName: n.db
				}) === n.kb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "n", (function() {
				return L
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "s", (function() {
				return f
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "m", (function() {
				return H
			})), r.d(t, "r", (function() {
				return M
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				a = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				d = r("./src/reddit/selectors/postCreations.ts");
			const i = [],
				c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = f(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const r = E(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
					const r = E(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				v = (e, t) => {
					const r = E(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(o.b)(e)) {
						const t = Object(d.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const r = a.d.spPolls(e) || a.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				C = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				I = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				L = (e, t) => {
					const r = O(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				E = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				w = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				f = (e, t) => {
					const r = w(e, t);
					return r && r.walletProvider
				},
				_ = (e, t) => {
					const r = f(e, t),
						n = w(e, t);
					return r && r.provider || n && n.provider
				},
				j = (e, t) => {
					const r = _(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby
				},
				O = (e, t) => {
					const r = f(e, t),
						n = _(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const a = r && r.extra && r.extra.contracts,
						o = a && a.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				H = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = f(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				M = (e, t) => {
					const r = w(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=AuthorHovercard~Settings~SubredditWiki.df59756998747984a2ec.js.map