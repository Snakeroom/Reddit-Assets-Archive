// https://www.redditstatic.com/desktop2x/AuthorHovercard.e080203918a09f9b1b89.js
// Retrieved at 3/2/2021, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/actions/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const i = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				o = Object(s.a)(i)
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/actions/login.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => async e => {
				e(Object(r.r)({
					forceFetch: !0
				})), await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			}, u = e => async (t, n) => {
				const r = n();
				Object(s.a)(Object(c.a)(e)(r)), Object(d.J)(r) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL)) : await t(Object(i.h)())
			}
		},
		"./src/reddit/actions/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return _
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "f", (function() {
				return U
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "o", (function() {
				return z
			})), n.d(t, "n", (function() {
				return G
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "l", (function() {
				return J
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "k", (function() {
				return Y
			})), n.d(t, "p", (function() {
				return Z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./node_modules/lodash/isEmpty.js"),
				r = n.n(o),
				a = n("./src/reddit/actions/authorFlair.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/flair/index.ts"),
				l = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/models/User/index.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/selectors/userFlair.ts");
			const _ = "USER_FLAIR_DATA__MUTATED",
				h = "AUTHOR_FLAIR_DATA__MUTATED",
				x = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				v = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING"),
				E = Object(i.a)(x),
				C = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED"),
				I = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				g = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				S = Object(i.a)(I),
				O = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				R = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				A = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING"),
				T = Object(i.a)(R),
				N = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED"),
				L = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				j = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING"),
				w = Object(i.a)(L),
				y = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED"),
				k = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				U = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				D = Object(i.a)(k),
				M = Object(i.a)("STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS"),
				F = Object(i.a)(U),
				H = "USERFLAIR_FETCH_SUCCESS",
				B = Object(i.a)(H),
				P = Object(i.a)(_),
				V = Object(i.a)(h),
				z = (e, t, n, s, i) => async (o, r, {
					apiContext: a
				}) => {
					const c = r(),
						u = c.user.account,
						m = u ? Object(b.e)(u) : void 0,
						_ = {
							...Object(p.c)(c, {
								subredditId: i
							}).displaySettings,
							isUserEnabled: n
						},
						h = {
							userName: s,
							subredditId: i,
							applied: e,
							displaySettings: _
						};
					o(s === m ? P(h) : V(h));
					const x = Object(f.S)(c, {
							subredditId: i
						}),
						v = t && e ? Object(l.g)(e) : void 0;
					Object(d.g)(a(), s, x.name, t, v), Object(d.i)(a(), n, x.name)
				}, G = (e, t) => async (n, s, {
					apiContext: i
				}) => {
					const o = s(),
						r = Object(f.S)(o, {
							subredditId: e
						}).name;
					n(v());
					const a = await Object(d.l)(i(), r, t);
					if (a.ok) {
						n(E({
							subredditId: e,
							isEnabled: t
						}))
					} else n(C());
					return a.ok
				}, W = (e, t) => async (n, s, {
					apiContext: i
				}) => {
					const o = s(),
						r = Object(f.S)(o, {
							subredditId: e
						}).name;
					n(g());
					const a = await Object(d.j)(i(), t, u.d.UserFlair, r);
					if (a.ok) {
						n(S({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(O());
					return a.ok
				}, J = (e, t) => async (n, i, {
					apiContext: o
				}) => {
					const r = i(),
						a = Object(f.S)(r, {
							subredditId: t
						}).name;
					n(A());
					const l = await Object(d.f)(o(), e, a, u.d.UserFlair),
						b = l.ok && !(l.body && !1 === l.body.success);
					if (b) {
						const e = {
							subredditId: t,
							template: l.body
						};
						n(T(e));
						const i = Object(c.d)(s.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), m.b.SuccessMod);
						n(Object(c.e)(i))
					} else {
						n(N());
						const i = Object(c.d)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), m.b.Error, s.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), J(e, t));
						n(Object(c.e)(i))
					}
					return b
				}, K = (e, t) => async (n, i, {
					apiContext: o
				}) => {
					const r = i(),
						a = Object(f.S)(r, {
							subredditId: t
						}).name;
					if (n(j()), (await Object(d.b)(o(), e, a)).ok) {
						n(w({
							subredditId: t,
							templateId: e
						}));
						const i = Object(c.d)(s.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), m.b.SuccessMod);
						n(Object(c.e)(i))
					} else {
						n(y());
						const i = Object(c.d)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), m.b.Error, s.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), K(e, t));
						n(Object(c.e)(i))
					}
				}, Y = (e, t) => async (n, i, {
					apiContext: o
				}) => {
					const r = i(),
						a = Object(f.S)(r, {
							subredditId: t
						}).name,
						l = Object(p.c)(r, {
							subredditId: t
						}).templateIds;
					if (n(D({
							subredditId: t,
							templateIds: e
						})), (await Object(d.e)(o(), a, u.d.UserFlair, e)).ok) {
						n(M());
						const e = Object(c.d)(s.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), m.b.SuccessMod);
						n(Object(c.e)(e))
					} else {
						n(F({
							subredditId: t,
							templateIds: l
						}));
						const i = Object(c.d)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), m.b.Error, s.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), Y(e, t));
						n(Object(c.e)(i))
					}
				}, Z = (e, t) => async (n, i, {
					apiContext: o
				}) => {
					const l = i(),
						u = l.userFlair;
					if (u && u[e] && u[e].displaySettings.isEnabled && r()(u[e].templateIds)) {
						const i = Object(f.S)(l, {
								subredditId: e
							}).name,
							r = await Object(d.d)(o(), i);
						if (r.ok) n(B(r.body)), n(Object(a.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(c.d)(s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), m.b.Error);
							n(Object(c.e)(e))
						}
					} else n(Object(a.b)({
						username: t,
						subredditId: e
					}))
				}
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				isHighlighted: "_2fUisaQtUa1Fxx6-R5fDhH"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(a);
			t.a = ({
				className: e,
				isActive: t,
				unreadCount: n
			}) => t ? i.a.createElement("span", {
				className: Object(o.a)(e, c.a.badgeCounter, {
					[c.a.isHighlighted]: t && n <= 0
				})
			}, n > 0 && Object(r.b)(n)) : null
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/components/Hovercards/helpers.ts"),
				r = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class b extends i.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(u.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || d.a,
						tooltipType: e.tooltipType
					}), n = `${t}-hover-id`, s = e.author || e.postOrComment.author;
					return i.a.createElement(r.a, {
						authorOrSubredditName: s,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, i.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: s
					}))
				}
			}
			t.default = Object(l.c)(b)
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "c", (function() {
				return V
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/omit.js"),
				o = n.n(i),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/BadgeCounter/index.tsx"),
				m = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				b = n("./src/reddit/components/ResizeSensor/index.tsx"),
				f = n("./src/reddit/components/InboxTooltip/index.m.less"),
				p = n.n(f);
			const _ = 3;
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.ref = a.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= _) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: i,
						index: o,
						isInboxPostEmbedEnabled: r,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l
					} = this.props, u = o + 1 <= _;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						ref: this.ref,
						className: p.a.notificationResizeWrapper
					}, a.a.createElement(m.a, {
						activeOverflowMenuId: e,
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: i,
						isInboxPostEmbedEnabled: r,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l
					}), !!u && a.a.createElement(b.a, {
						onResize: this.handleResize
					})))
				}
			}
			var x = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				v = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = {},
				I = "",
				g = 0,
				S = "200px";
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.container = a.a.createRef(), this.state = {
						notificationHeights: C
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > g && this.props.setActiveOverflowMenuId(I)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state;
						let t = 0;
						for (const n in e) t += e[n];
						return 0 === t ? S : t
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.renderNotifications = () => {
						const e = o()(this.props, ["notifications"]),
							{
								notificationHeights: t
							} = this.state;
						return this.props.notifications.map((n, s) => a.a.createElement(h, E({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						isPending: e,
						notifications: t
					} = this.props, n = !(!t || !t.length), s = this.getContainerHeight();
					return a.a.createElement("div", {
						className: p.a.notificationList,
						ref: this.container,
						style: {
							height: s,
							maxHeight: s
						}
					}, n ? this.renderNotifications() : e ? a.a.createElement(x.a, null) : a.a.createElement(v.a, null))
				}
			}
			var R = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				A = n("./src/reddit/controls/Dropdown/index.tsx"),
				T = n("./src/reddit/controls/InternalLink/index.tsx"),
				N = n("./src/reddit/helpers/trackers/inbox.ts"),
				L = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				w = n("./src/reddit/icons/svgs/Settings/index.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = "INBOX--TOOLTIP",
				U = [],
				D = l.a.wrapped(A.a, "StyledDropdown", p.a),
				M = Object(R.a)(D, [c.a.Click]),
				F = l.a.wrapped(w.a, "Gear", p.a),
				H = l.a.wrapped(j.a, "MarkAsRead", p.a),
				B = e => {
					const t = !!e.messagesBadgeCount;
					return a.a.createElement("nav", {
						className: p.a.topNav
					}, a.a.createElement("span", {
						className: p.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), a.a.createElement("span", {
						className: p.a.topNavLinks
					}, a.a.createElement("span", {
						className: p.a.messagesLinkContainer
					}, a.a.createElement(T.a, {
						className: Object(d.a)(p.a.messagesLink, {
							[p.a.mActive]: t
						}),
						onClick: e.onMessagesClick,
						to: t ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					})), a.a.createElement(u.a, {
						className: p.a.badgeCount,
						isActive: t,
						unreadCount: e.messagesBadgeCount
					})), e.isInboxMarkAllAsReadEnabled && a.a.createElement("button", {
						className: p.a.navLink,
						onClick: e.markAllAsRead
					}, a.a.createElement(H, null)), a.a.createElement(T.a, {
						className: p.a.navLink,
						onClick: e.sendInboxClickSettings,
						to: "/settings/notifications"
					}, a.a.createElement(F, null))))
				},
				P = e => a.a.createElement("div", {
					className: p.a.bottomBar
				}, a.a.createElement(T.a, {
					className: p.a.bottomLink,
					onClick: e.sendInboxClickSeeAll,
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				V = e => {
					const t = Object(L.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isInboxMarkAllAsReadEnabled: i,
							isOpen: r,
							isPending: c,
							messagesBadgeCount: d,
							notifications: l
						} = e,
						u = !(!l || !l.length),
						m = o()(e, ["isOpen"]);
					return a.a.createElement(M, {
						id: k,
						isOpen: r,
						tooltipId: k,
						isFixed: !0,
						tooltipPosition: ["right", "top"]
					}, a.a.createElement("div", {
						className: p.a.tooltipContainer
					}, a.a.createElement(B, {
						isInboxMarkAllAsReadEnabled: i,
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(N.d)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: d,
						onMessagesClick: () => {
							t(Object(N.k)({
								badgeCount: s,
								tab: N.c.Messages
							})), t(Object(N.e)()), n()
						},
						sendInboxClickSettings: () => t(Object(N.j)(N.a.MiniInbox))
					}), a.a.createElement(O, y({}, m, {
						isPending: c
					})), (u || c) && a.a.createElement(P, {
						sendInboxClickSeeAll: () => t(Object(N.i)())
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				Gear: "_3KogLgBmag36_tCz2x_A4v",
				gear: "_3KogLgBmag36_tCz2x_A4v",
				MarkAsRead: "y24rxfGSKrlV1jVQxeu3I",
				markAsRead: "y24rxfGSKrlV1jVQxeu3I",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz"
			}
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = i
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				r = n.n(o);
			const a = () => i.a.createElement("li", {
					className: r.a.placeholderWrapper
				}, i.a.createElement("span", {
					className: r.a.placeholderAvatar
				}), i.a.createElement("span", {
					className: r.a.placeholderContent
				})),
				c = () => i.a.createElement("ol", null, i.a.createElement(a, null), i.a.createElement(a, null), i.a.createElement(a, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				title: "_180jOSBDwwE60X5UR8zt3-",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				NotificationButton: "_3Ai1gn9teWMTX_g8CIyRdY",
				notificationButton: "_3Ai1gn9teWMTX_g8CIyRdY",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overlowMenuContainer: "w_ehW50Lg2v1-XfJ1CWEe",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO"
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/raf/index.js"),
				i = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && i.a.cancel(this.frame), this.frame = i()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return r.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			}));
			var s, i, o, r, a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.DisableNotificationType = "disable_notification_type"
			}(i || (i = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(r || (r = {}));
			const d = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => i => ({
					...c.defaults(i),
					action: a.c.VIEW,
					noun: "inbox_notification",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				l = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => i => ({
					...c.defaults(i),
					action: a.c.CLICK,
					noun: "inbox_notification",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				u = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...c.defaults(n),
					action: a.c.VIEW,
					noun: "inbox",
					source: r.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				m = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...c.defaults(t),
					action: a.c.VIEW,
					noun: "mini_inbox",
					source: r.Inbox,
					inbox: {
						badgeCount: e,
						tab: s.Activity
					}
				}),
				b = ({
					badgeCount: e
				}) => t => ({
					...c.defaults(t),
					action: a.c.CLICK,
					noun: "inbox",
					source: r.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				f = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => i => ({
					...c.defaults(i),
					action: a.c.CLICK,
					noun: "inbox_notification_overflow",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => i => ({
					...c.defaults(i),
					action: a.c.VIEW,
					noun: "inbox_notification_overflow",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				_ = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: i
				}) => o => ({
					...c.defaults(o),
					action: a.c.CLICK,
					noun: "overflow_option",
					source: r.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: i
					},
					actionInfo: {
						...c.actionInfo(o),
						type: e
					}
				}),
				h = e => t => ({
					...c.defaults(t),
					action: a.c.CLICK,
					noun: "notification_app_settings",
					source: r.Inbox,
					actionInfo: {
						...c.actionInfo(t),
						pageType: e
					}
				}),
				x = () => e => ({
					...c.defaults(e),
					action: a.c.CLICK,
					noun: "see_all",
					source: r.Inbox,
					actionInfo: {
						...c.actionInfo(e),
						pageType: o.MiniInbox
					}
				}),
				v = () => e => ({
					...c.defaults(e),
					action: a.c.CLICK,
					noun: "messages",
					source: r.Inbox
				}),
				E = ({
					isMiniInbox: e
				}) => t => ({
					...c.defaults(t),
					action: a.c.CLICK,
					noun: "marked_as_read",
					source: r.Inbox,
					actionInfo: e ? {
						...c.actionInfo(t),
						pageType: o.MiniInbox
					} : {}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				i = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				a = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(i.a)(t) && Object.assign(n, r), n
				},
				c = e => ({
					...o.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				d = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.defaults(e),
					...r
				})
		},
		"./src/reddit/icons/svgs/MarkAsRead/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				clipRule: "evenodd",
				d: "M14.03 9.53l-5 5a.748.748 0 01-1.06 0l-2-2a.75.75 0 111.06-1.061l1.47 1.47 4.47-4.47a.75.75 0 111.06 1.061m4.5-3.378l-8-5a.999.999 0 00-1.06 0l-8 5A.999.999 0 001 7v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7a1 1 0 00-.47-.848",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("g", {
				fill: "inherit"
			}, i.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = function({
				className: e
			}) {
				return i.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					fill: "inherit"
				}, i.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				r = n("./src/lib/lessComponent.tsx");
			var a = e => o.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				c = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				d = n.n(c);
			const l = r.a.wrapped(a, "BellOutline", d.a),
				u = () => o.a.createElement("div", {
					className: d.a.emptyState
				}, o.a.createElement(l, null), o.a.createElement("h1", {
					className: d.a.emptyTitle
				}, s.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), o.a.createElement("p", {
					className: d.a.emptyDescription
				}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
					hk: "27V2PG"
				})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyTitle: "qVJaimYNUSSDa5PIOSZoi",
				emptyDescription: "ytrwXC5fcR-1vocS1eSbT",
				BellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				bellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts");
			const a = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var n;
				switch (t.type) {
					case i.o:
						const {
							avatarMarketingEvent: s
						} = t.payload;
						return s ? function(e) {
							const {
								startsAt: t,
								endsAt: n,
								webAssetUrls: s
							} = e, i = t && new Date(t) <= new Date, o = !!n && new Date(n) < new Date, r = s || null;
							return {
								active: !!i && !o && !!r,
								assetUrls: r
							}
						}(s) : a;
					case o.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === r.a.SNOOVATAR_MODAL ? a : e;
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: c
			})
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				r = n("./src/reddit/selectors/experiments/econ/avatarMarketing.ts");
			Object(i.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(s.a)(r.a, e => {
					var t, n;
					const s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing;
					return (null == s ? void 0 : s.active) ? s.assetUrls && s.assetUrls[0] : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const s = Object(r.lb)(e, {
						userName: n
					});
					if (!s) return;
					const i = a(e, {
						subredditId: t
					});
					return i ? i[s.id] : void 0
				},
				d = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : i.b
				}),
				l = (e, {
					subredditId: t
				}) => {
					const n = Object(o.d)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				b = e => e.features.banned.search.result,
				f = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(i.a)(s.mb)
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => t => {
				const n = Object(i.c)(t, {
					experimentEligibilitySelector: i.a,
					experimentName: e
				});
				return !(!n || Object(s.sd)(n))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.e080203918a09f9b1b89.js.map