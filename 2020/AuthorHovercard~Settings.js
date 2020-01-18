// https://www.redditstatic.com/desktop2x/AuthorHovercard~Settings.bcb3e30b7cc262c73863.js
// Retrieved at 1/17/2020, 11:00:23 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Settings"], {
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/actions/chat/toggle.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: s,
					className: r
				} = e;
				return n.a.createElement(i.f, {
					onClick: t,
					className: r
				}, s)
			};
			l.displayName = "ChatButton";
			const u = Object(a.b)(null, (e, t) => ({
				onStartChat: () => {
					const {
						contextId: s,
						userId: r,
						sendEvent: n
					} = t;
					e(Object(o.a)(r, s)), n(Object(d.b)(s))
				}
			}));
			t.a = u(Object(c.b)(l))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/User/index.ts"),
				d = s("./src/reddit/selectors/gov.ts"),
				l = s("./src/reddit/selectors/meta.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/tooltip.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/userFlair.ts"),
				v = s("./src/config.ts"),
				C = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = s("./src/lib/lessComponent.tsx"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/lib/timeAgo/index.ts"),
				I = s("./src/reddit/i18n/components.tsx"),
				E = s("./src/reddit/components/ChatButton/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				w = s("./src/reddit/components/SubscribeButton/index.tsx"),
				j = s("./src/reddit/helpers/trackers/authorHovercard.ts"),
				O = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				N = s("./src/reddit/icons/svgs/Karma/index.tsx"),
				f = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				H = s("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				M = s("./src/reddit/i18n/utils.ts"),
				y = s("./src/reddit/actions/inContextModeration.ts"),
				U = s("./src/reddit/actions/modal.ts"),
				B = s("./src/reddit/actions/subredditModeration.ts"),
				S = s("./src/reddit/constants/modals.ts"),
				T = s("./src/reddit/components/Hovercards/helpers.ts"),
				A = s("./src/reddit/icons/svgs/Ban/index.tsx"),
				P = s("./src/reddit/icons/svgs/Mute/index.tsx"),
				F = s("./src/reddit/icons/svgs/Unban/index.tsx"),
				D = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				k = s("./src/reddit/selectors/subredditModeration.ts"),
				Z = s("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				K = s.n(Z);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = g.a.wrapped(A.a, "BanIcon", K.a), V = g.a.wrapped(P.a, "MuteIcon", K.a), Y = g.a.wrapped(F.a, "UnbanIcon", K.a), Q = Object(o.c)({
				hasModMailPermissions: Object(u.a)(D.c.mail),
				isUserBanned: (e, t) => !!Object(k.g)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(p.hb)(e, {
					userName: t.username
				})
			});
			class z extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: s,
						isUserBanned: r,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: c,
						toggleMuteModal: i
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, r ? n.a.createElement(T.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(j.e(t))
						}
					}, n.a.createElement(Y, null), J._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(T.a, {
						role: "button",
						onClick: () => {
							c(), o(j.a(t))
						}
					}, n.a.createElement(R, null), J._("Ban User", null, {
						hk: "3OhuLx"
					})), s && n.a.createElement(T.a, {
						role: "button",
						onClick: () => {
							i(), o(j.d(t))
						}
					}, n.a.createElement(V, null), J._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var q = Object(a.b)(Q, (e, t) => {
					let {
						username: s,
						subredditId: r,
						contextId: n
					} = t;
					return {
						onUnbanUser: t => e(Object(B.nb)(r, t)),
						requestUserBanInfo: () => e(Object(B.Z)(r, {
							username: s
						})),
						toggleBanModal: () => {
							e(Object(y.c)({
								username: s,
								subredditId: r,
								contextId: n
							})), e(Object(B.X)(r, s))
						},
						toggleMuteModal: () => {
							e(Object(y.d)({
								username: s,
								subredditId: r,
								contextId: n
							})), e(Object(U.i)(S.a.MUTE_USER))
						}
					}
				})(z),
				W = s("./src/reddit/actions/userFlair.ts"),
				X = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				G = s("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),
				$ = s.n(G);
			const ee = g.a.wrapped(X.a, "FlairIcon", $.a);
			var te = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(W.p)(t.subredditId, t.username))
				}))(e => n.a.createElement(T.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(j.c(e.contextId))
					}
				}, n.a.createElement(ee, null), n.a.createElement(I.c, null, "Edit user flair"))),
				se = s("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				re = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = g.a.div("SubredditIcon", re.a),
				oe = g.a.wrapped(w.a, "SubscribeButton", re.a),
				ce = g.a.wrapped(E.a, "ChatButton", re.a),
				ie = g.a.wrapped(N.a, "KarmaIcon", re.a),
				de = g.a.wrapped(f.a, "PremiumIcon", re.a),
				le = g.a.wrapped(C.a, "UserNameLink", re.a),
				ue = g.a.div("UserNameMetaData", re.a),
				me = g.a.div("MetaDataItem", re.a),
				pe = g.a.div("Bullet", re.a),
				be = g.a.div("UserNameContainer", re.a),
				ve = g.a.div("UserInfoContainer", re.a),
				Ce = g.a.div("PostKarma", re.a),
				ge = g.a.div("CommentKarma", re.a),
				he = g.a.div("KarmaCount", re.a),
				xe = g.a.div("KarmaLabel", re.a),
				Ie = g.a.div("BannerImage", re.a),
				Ee = g.a.div("UserContainer", re.a),
				Le = g.a.div("BottomSpacer", re.a),
				_e = g.a.div("Container", re.a),
				we = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(le, {
					to: "/user/".concat(e.userName, "/")
				}, "u/".concat(e.userName)), e.user.isEmployee && n.a.createElement(O.a, {
					className: re.a.adminIcon,
					title: Object(M.c)("Reddit admin")
				}), e.user.isGold && n.a.createElement(C.a, {
					to: "/premium"
				}, n.a.createElement(de, null))), n.a.createElement(ue, null, e.user.username && n.a.createElement(me, null, e.user.username, n.a.createElement(pe, null, "•")), n.a.createElement(me, null, Object(x.d)(e.language, e.user.created)))),
				je = e => n.a.createElement(ve, null, n.a.createElement(ie, null), n.a.createElement(Ce, null, n.a.createElement(he, null, Object(h.b)(e.user.postKarma)), n.a.createElement(xe, null, n.a.createElement(I.c, null, "Post Karma"))), n.a.createElement(ge, null, n.a.createElement(he, null, Object(h.b)(e.user.commentKarma)), n.a.createElement(xe, null, n.a.createElement(I.c, null, "Comment Karma")))),
				Oe = Object(_.a)(e => {
					const {
						className: t,
						contextId: s,
						hideNSFWPref: r,
						hoverId: a,
						isCurrentUser: o,
						isLoggedIn: c,
						origin: i,
						language: d,
						moderatorPermissions: l,
						sendEvent: u,
						style: m,
						subredditId: p,
						userName: b,
						user: C,
						userFlair: g
					} = e;
					if (!C) return n.a.createElement(_e, {
						style: m
					});
					const h = C.isNSFW && r,
						x = C.accountIcon || "".concat(v.a.assetPath, "/img/snoo_user_placeholder.png"),
						I = l && l.flair,
						E = l && l.access,
						_ = g && g.templateIds && g.templateIds.length > 0,
						w = g && g.displaySettings && g.displaySettings.isEnabled,
						{
							awardedLastMonth: O
						} = C,
						N = h ? "".concat(v.a.assetPath, "/img/user-info-banner.png") : e.user.bannerImage,
						f = h ? "".concat(v.a.assetPath, "/img/avatar_over18_square.png") : x;
					return n.a.createElement(_e, {
						className: t,
						id: a,
						style: m
					}, n.a.createElement(Ie, {
						style: {
							backgroundImage: "url('".concat(N, "')")
						}
					}), n.a.createElement(Ee, null, n.a.createElement(be, null, n.a.createElement(ae, {
						style: {
							background: "url('".concat(f, "')"),
							backgroundSize: "contain"
						}
					}), n.a.createElement(we, {
						language: d,
						origin: i,
						user: C,
						userName: b
					})), n.a.createElement(je, {
						language: d,
						user: C,
						userName: b
					}), O && n.a.createElement(H.a, {
						recentAwardings: O,
						username: b
					}), c && !o && n.a.createElement(ce, {
						contextId: s,
						userId: C.id
					}, Object(M.c)("Start Chat")), C.hasUserProfile && !o && n.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(j.g)(e ? "unfollow" : "follow", s),
						small: !0
					})), E && s && !o && p && n.a.createElement(q, {
						contextId: s,
						language: d,
						subredditId: p,
						sendEvent: u,
						username: b
					}), I && s && _ && w && p && n.a.createElement(te, {
						contextId: s,
						language: d,
						subredditId: p,
						sendEvent: u,
						username: b
					}), n.a.createElement(L.i, {
						contextId: s,
						subredditId: p,
						user: C
					}), !(E || c) && n.a.createElement(Le, null))
				});
			var Ne = e => {
				const t = e.activeTooltipId === e.tooltipId;
				return n.a.createElement(Oe, ne({
					isOpen: t
				}, e))
			};
			const fe = Object(o.c)({
					tokenName: d.o,
					activeTooltipId: m.a,
					isCurrentUser: (e, t) => {
						const s = Object(p.i)(e);
						return !!s && Object(i.f)(s) === t.userName
					},
					isLoggedIn: p.J,
					hideNSFWPref: p.z,
					language: p.S,
					moderatorPermissions: u.j,
					origin: l.g,
					user: p.hb,
					userFlair: b.c
				}),
				He = Object(a.b)(fe, (e, t) => ({
					onHideTooltip: () => e(Object(c.h)())
				}));
			t.a = He(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(Ne, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, s) {
			e.exports = {
				BanIcon: "_2g595huO3XJ8C5PGbnTIcH",
				banIcon: "_2g595huO3XJ8C5PGbnTIcH",
				MuteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				muteIcon: "_1qnIs5F_qVlqqqY9ZvtGHT",
				UnbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3",
				unbanIcon: "_3gnOs3YMjVI2NyE6rZjyL3"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less": function(e, t, s) {
			e.exports = {
				FlairIcon: "_2xaYvwRfHZMRW_6lyBpV4v",
				flairIcon: "_2xaYvwRfHZMRW_6lyBpV4v"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, s) {
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
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, s) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const u = Object(c.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.h)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(i.d)(t.authorOrSubredditName))
					}
				})),
				p = s("./src/reddit/actions/subreddit.ts");
			const b = Object(c.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var v = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.h)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.v)(t.authorOrSubredditName))
					}
				})),
				C = s("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				g = s.n(C);
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return E
			}));
			class h extends n.a.Component {
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
					return n.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const x = a.a.wrapped(h, "HoverDiv", g.a),
				I = m(x),
				E = v(x)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				a = s("./src/reddit/components/Hovercards/helpers.m.less"),
				o = s.n(a);
			const c = r.a.wrapped(n.a, "UserActionItem", o.a),
				i = e => {
					const {
						author: t,
						itemId: s,
						subredditName: r,
						tooltipIdPrefix: n,
						tooltipType: a
					} = e;
					let o = n;
					return s && (o = "".concat(o, "--").concat(s)), a && (o = "".concat(o, "--").concat(a)), t && (o = "".concat(o, "--").concat(t)), r && (o = "".concat(o, "--").concat(r)), o
				}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/config.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				m = s.n(u);
			const p = Object(o.c)({
				isInGoldProfileGildedExperiment: d.a
			});
			class b extends n.a.PureComponent {
				render() {
					const {
						isInGoldProfileGildedExperiment: e,
						recentAwardings: t,
						username: s
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: a
					} = t, o = r.icon32 ? r.icon32.url : r.icon.url, d = r.description ? r.description : r.name;
					return n.a.createElement("a", {
						className: m.a.AwardedLastMonth,
						href: e ? "/user/".concat(s, "/gilded") : "".concat(c.a.oldRedditUrl, "/user/").concat(s, "/gilded")
					}, n.a.createElement("div", {
						className: m.a.iconColumn
					}, n.a.createElement("img", {
						alt: d,
						className: m.a.icon,
						src: o
					}), a > 1 && n.a.createElement("span", {
						className: m.a.count
					}, "+".concat(Object(i.b)(a - 1)))), n.a.createElement("div", {
						className: m.a.textColumn
					}, a > 1 ? n.a.createElement(l.c, null, "Received the ", n.a.createElement(l.b, {
						name: "award-name"
					}, r.name), " Award and more in the past 30 days") : n.a.createElement(l.c, null, "Received the ", n.a.createElement(l.b, {
						name: "award-name"
					}, r.name), " Award in the past 30 days")))
				}
			}
			t.a = Object(a.b)(p)(b)
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return N
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const h = v.a.button("IconButton", p.a),
				x = v.a.wrapped(l.a, "SubscribeIcon", p.a),
				I = v.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				E = v.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return n.a.createElement(h, r, n.a.createElement(x, {
						className: Object(b.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				L = v.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return t ? n.a.createElement(c.f, C({}, r, {
						className: Object(b.a)(r.className, {
							[p.a.isSmall]: s
						})
					})) : n.a.createElement(c.n, C({}, r, {
						className: Object(b.a)(r.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				_ = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? n.a.createElement(E, C({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : n.a.createElement(L, C({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				w = v.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: a
					} = e, c = g(e, ["border", "language", "small", "type"]);
					return n.a.createElement(h, c, n.a.createElement(I, {
						className: Object(b.a)(o.o, c.className, {
							[p.a.isSmall]: r
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				j = v.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: r,
						type: a
					} = e, o = g(e, ["border", "language", "small", "type"]);
					const d = n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? Object(i.c)("Joined") : Object(i.c)("Following")), n.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === a ? Object(i.c)("Leave") : Object(i.c)("Unfollow"))),
						l = Object(b.a)(o.className, {
							[p.a.isSmall]: r
						});
					return t ? n.a.createElement(c.i, C({}, o, {
						className: l,
						children: d
					})) : n.a.createElement(c.n, C({}, o, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				O = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? n.a.createElement(w, C({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : n.a.createElement(j, C({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: r,
						language: o,
						small: c = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: c
					};
					return this.props.userIsSubscriber ? n.a.createElement(O, C({}, i, {
						language: o,
						type: this.props.identifier.type
					})) : n.a.createElement(_, C({}, i, {
						id: r
					}), this.props.children, Object(a.a)(o, "subscriptions.".concat(Object(u.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.b)(a.a))
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				c = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(e.className, c.a.admin, {
					[c.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Mute/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
		},
		"./src/reddit/selectors/experiments/goldProfileGildedAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const o = e => !!(e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(a.J)(e),
					experimentName: r.I
				});
				return Object(r.Sb)(t) ? void 0 : t
			})(e)
		}
	}
]);
//# sourceMappingURL=AuthorHovercard~Settings.bcb3e30b7cc262c73863.js.map