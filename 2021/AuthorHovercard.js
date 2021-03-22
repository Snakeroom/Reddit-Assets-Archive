// https://www.redditstatic.com/desktop2x/AuthorHovercard.5066265c1ea87d831e8f.js
// Retrieved at 3/22/2021, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var i = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/actions/login.ts"),
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
				Object(i.a)(Object(c.a)(e)(r)), Object(d.J)(r) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL)) : await t(Object(s.h)())
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return r
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const i = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				r = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return R
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "b", (function() {
				return P
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var b = n("./src/graphql/operations/SubscribedSubreddits.json"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var x = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				C = n("./src/reddit/models/GqlTopLevelField.ts"),
				g = n("./src/reddit/models/User/index.ts");

			function I(e) {
				const t = [],
					n = [],
					i = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== g.c.AvailableRedditor) continue;
					const e = Object(x.a)(a.node.profile);
					i[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: r
				} = e.identity;
				for (const a of r.edges) {
					if (a.node.__typename !== C.a.Subreddit) continue;
					const e = Object(_.a)(a.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: i,
					subreddits: s
				}
			}
			var O = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/profile.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/subscriptions.ts"),
				E = n("./src/reddit/selectors/user.ts");
			const k = () => i.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				N = Object(o.a)(d.c),
				S = Object(o.a)(d.b),
				A = Object(o.a)(d.a),
				T = Object(o.a)(d.h),
				R = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const i = t();
					if (!i.user.account || i.subscriptions.api.fetched) return;
					e(S());
					const s = await (e => Object(h.a)(e, b))(n());
					if (s.ok) {
						const t = I(s.body.data);
						e(N(t))
					} else e(A({
						error: s.error
					}))
				}),
				L = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				F = (e, t, n) => async (o, d, {
					apiContext: b
				}) => {
					let h = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(w.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(y.m)(d(), e.name),
						name: `${s.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(E.J)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.j)());
					const x = Object(E.i)(d());
					if (x) {
						const t = h.length,
							n = e.length;
						if (h = h.filter(e => !L(x, e)), (e = e.filter(e => !L(x, e))).length !== n || h.length !== t) {
							const e = i.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, O.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					if (o(T({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: i
						}) => Object(f.a)(Object(m.a)(e, [p.a]), {
							method: s.cb.POST,
							endpoint: Object(v.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: i ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(b(), {
							subredditNames: h.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?r.d.subreddit:r.d.profile}${e[0].name}` : `${i.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? i.fbt._("Sucсessfully {verb} {communityname}", [i.fbt._param("verb", t ? "followed" : "unfollowed"), i.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : i.fbt._("Sucсessfully {verb} {communityname}", [i.fbt._param("verb", t ? "joined" : "left"), i.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(T({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = i.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(s, O.b.Error)))
					}
				}, M = Object(o.a)(d.f), B = e => async (t, n, {
					apiContext: i
				}) => {
					const o = n(),
						r = Object(w.L)(o, {
							identifier: e
						});
					if (!r) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? r.name : `u_${r.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						b = c.indexOf(e.id),
						h = d.indexOf(e.id),
						v = -1 === b && -1 === h,
						x = o.subreddits.models,
						_ = o.profiles.models;
					t(M({
						makeFavorite: v,
						identifier: e,
						subredditModels: x,
						profileModels: _
					}));
					const C = {
							type: e.type,
							name: r.name
						},
						g = () => Object(w.gb)(n(), {
							identifier: C
						});
					(g() || (await t(F([C], !0)), g())) && ((await ((e, t, n) => Object(f.a)(Object(m.a)(e, [p.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(i(), a, v)).ok || (t(M({
						makeFavorite: !v,
						identifier: e,
						subredditModels: x,
						profileModels: _
					})), t(Object(l.f)({
						text: k(),
						kind: O.b.Error
					}))))
				}, U = Object(o.a)(d.d), H = e => async (t, n, {
					apiContext: i
				}) => {
					const o = n().multireddits.models,
						r = () => {
							t(Object(l.f)({
								text: k(),
								kind: O.b.Error
							}))
						},
						a = o[e];
					if (!a) return void r();
					const c = !a.isFavorited;
					t(U({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(f.a)(Object(m.a)(e, [p.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, c)).ok || (t(U({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), r())
				}, D = Object(o.a)(d.e), P = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n(),
						a = r.multireddits.models;
					if (!Object(E.J)(r)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: i.fbt._("Sorry, failed to {followAction}", [i.fbt._param("followAction", e ? i.fbt._("follow", null, {
									hk: "2I4uia"
								}) : i.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: O.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(D({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(f.a)(Object(m.a)(e, [p.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(D({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			var i = n("./src/lib/loadableAction/index.ts");
			const s = Object(i.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				o = Object(i.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				r = Object(i.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				a = Object(i.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(i.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				d = Object(i.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				l = Object(i.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				isHighlighted: "_2fUisaQtUa1Fxx6-R5fDhH"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(a);
			t.a = ({
				className: e,
				isActive: t,
				unreadCount: n
			}) => t ? s.a.createElement("span", {
				className: Object(o.a)(e, c.a.badgeCounter, {
					[c.a.isHighlighted]: t && n <= 0
				})
			}, n > 0 && Object(r.b)(n)) : null
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/reddit/components/Hovercards/helpers.ts"),
				r = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const f = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class m extends s.a.Component {
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
					}), n = `${t}-hover-id`, i = e.author || e.postOrComment.author;
					return s.a.createElement(r.a, {
						authorOrSubredditName: i,
						className: e.hoverDivClassName,
						hoverId: n,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, s.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: n,
						sendEvent: e.sendEvent,
						subredditId: f(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: i
					}))
				}
			}
			t.default = Object(l.c)(m)
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return A
			})), n.d(t, "b", (function() {
				return B
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/BadgeCounter/index.tsx"),
				d = n("./node_modules/lodash/omit.js"),
				l = n.n(d),
				u = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				f = n("./src/reddit/components/ResizeSensor/index.tsx"),
				m = n("./src/reddit/components/InboxTooltip/index.m.less"),
				p = n.n(m);
			const b = 3;
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.ref = o.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= b) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: i,
						hideSubredditNotifications: s,
						index: r,
						isInboxPostEmbedEnabled: a,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: m
					} = this.props, h = r + 1 <= b;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.ref,
						className: p.a.notificationResizeWrapper
					}, o.a.createElement(u.a, {
						activeOverflowMenuId: e,
						disableMessageTypeNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: i,
						hideSubredditNotifications: s,
						isInboxPostEmbedEnabled: a,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: d,
						setActiveOverflowMenuId: l,
						onItemClick: m
					}), !!h && o.a.createElement(f.a, {
						onResize: this.handleResize
					})))
				}
			}
			var v = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				x = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const C = {},
				g = "",
				I = 0,
				O = "200px";
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.container = o.a.createRef(), this.state = {
						notificationHeights: C
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > I && this.props.setActiveOverflowMenuId(g)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state;
						let t = 0;
						for (const n in e) t += e[n];
						return 0 === t ? O : t
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.renderNotifications = () => {
						const e = l()(this.props, ["notifications"]),
							{
								notificationHeights: t
							} = this.state;
						return this.props.notifications.map((n, i) => o.a.createElement(h, _({}, e, {
							index: i,
							key: i,
							notification: n,
							notificationHeight: t[i],
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
					} = this.props, n = !(!t || !t.length), i = this.getContainerHeight();
					return o.a.createElement("div", {
						className: p.a.notificationList,
						ref: this.container,
						style: {
							height: i,
							maxHeight: i
						}
					}, n ? this.renderNotifications() : e ? o.a.createElement(v.a, null) : o.a.createElement(x.a, null))
				}
			}
			var w = n("./src/reddit/controls/InternalLink/index.tsx"),
				j = n("./src/reddit/helpers/trackers/inbox.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				N = n("./src/reddit/icons/svgs/Settings/index.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const A = [],
				T = a.a.div("StyledDropdown", p.a),
				R = a.a.wrapped(N.a, "Gear", p.a),
				L = a.a.wrapped(k.a, "MarkAsRead", p.a),
				F = ({
					onMessagesClick: e,
					onBarClick: t,
					markAllAsRead: n,
					messagesBadgeCount: a,
					isInboxMarkAllAsReadEnabled: d,
					sendInboxClickSettings: l
				}) => {
					const u = !!a,
						f = Object(s.useCallback)(() => {
							e(), t()
						}, [e, t]),
						m = Object(s.useCallback)(() => {
							l(), t()
						}, [l, t]);
					return o.a.createElement("nav", {
						className: p.a.topNav
					}, o.a.createElement("span", {
						className: p.a.topNavTitle
					}, i.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), o.a.createElement("span", {
						className: p.a.topNavLinks
					}, o.a.createElement("span", {
						className: p.a.messagesLinkContainer
					}, o.a.createElement(w.a, {
						className: Object(r.a)(p.a.messagesLink, {
							[p.a.mActive]: u
						}),
						onClick: f,
						to: u ? "/message/unread" : "/message/messages"
					}, i.fbt._("Messages", null, {
						hk: "hulKY"
					})), o.a.createElement(c.a, {
						className: p.a.badgeCount,
						isActive: u,
						unreadCount: a
					})), d && o.a.createElement("button", {
						className: p.a.navLink,
						onClick: n
					}, o.a.createElement(L, null)), o.a.createElement(w.a, {
						className: p.a.navLink,
						onClick: m,
						to: "/settings/notifications"
					}, o.a.createElement(R, null))))
				},
				M = e => o.a.createElement("div", {
					className: p.a.bottomBar
				}, o.a.createElement(w.a, {
					className: p.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, i.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				B = e => {
					const t = Object(E.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: i,
							isInboxMarkAllAsReadEnabled: s,
							isPending: r,
							messagesBadgeCount: a,
							notifications: c,
							hideTooltip: d
						} = e,
						l = !(!c || !c.length);
					return o.a.createElement(T, null, o.a.createElement("div", {
						className: p.a.tooltipContainer
					}, o.a.createElement(F, {
						isInboxMarkAllAsReadEnabled: s,
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(j.d)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: a,
						onMessagesClick: () => {
							t(Object(j.l)({
								badgeCount: i,
								tab: j.c.Messages
							})), t(Object(j.e)()), n()
						},
						sendInboxClickSettings: () => t(Object(j.j)(j.a.MiniInbox)),
						onBarClick: d
					}), o.a.createElement(y, S({}, e, {
						isPending: r,
						onItemClick: d
					})), (l || r) && o.a.createElement(M, {
						sendInboxClickSeeAll: () => t(Object(j.i)()),
						onBarClick: d
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
			var i = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(i.a)({
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
			t.a = s
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/reddit/components/NotificationUnit/index.m.less"),
				r = n.n(o);
			const a = () => s.a.createElement("li", {
					className: r.a.placeholderWrapper
				}, s.a.createElement("span", {
					className: r.a.placeholderAvatar
				}), s.a.createElement("span", {
					className: r.a.placeholderContent
				})),
				c = () => s.a.createElement("ol", null, s.a.createElement(a, null), s.a.createElement(a, null), s.a.createElement(a, null))
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
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var i = n("./node_modules/raf/index.js"),
				s = n.n(i),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
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
				return i
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return O
			}));
			var i, s, o, r, a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(i || (i = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.DisableNotificationType = "disable_notification_type"
			}(s || (s = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(r || (r = {}));
			const l = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => s => ({
					...c.defaults(s),
					action: a.c.VIEW,
					noun: "inbox_notification",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				}),
				u = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => s => {
					Object(d.a)({
						...c.defaults(s),
						action: "receive",
						noun: "inbox_notification",
						source: r.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: i
						}
					})
				},
				f = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => s => ({
					...c.defaults(s),
					action: a.c.CLICK,
					noun: "inbox_notification",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				}),
				m = ({
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
				p = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...c.defaults(t),
					action: a.c.VIEW,
					noun: "mini_inbox",
					source: r.Inbox,
					inbox: {
						badgeCount: e,
						tab: i.Activity
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
				h = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => s => ({
					...c.defaults(s),
					action: a.c.CLICK,
					noun: "inbox_notification_overflow",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				}),
				v = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => s => ({
					...c.defaults(s),
					action: a.c.VIEW,
					noun: "inbox_notification_overflow",
					source: r.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				}),
				x = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: s
				}) => o => ({
					...c.defaults(o),
					action: a.c.CLICK,
					noun: "overflow_option",
					source: r.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: i
					},
					notification: {
						type: s
					},
					actionInfo: {
						...c.actionInfo(o),
						type: e
					}
				}),
				_ = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: s
				}) => o => ({
					...c.defaults(o),
					action: a.c.UNDO,
					noun: "overflow_option",
					source: r.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: i
					},
					notification: {
						type: s
					},
					actionInfo: {
						...c.actionInfo(o),
						type: e
					}
				}),
				C = e => t => ({
					...c.defaults(t),
					action: a.c.CLICK,
					noun: "notification_app_settings",
					source: r.Inbox,
					actionInfo: {
						...c.actionInfo(t),
						pageType: e
					}
				}),
				g = () => e => ({
					...c.defaults(e),
					action: a.c.CLICK,
					noun: "see_all",
					source: r.Inbox,
					actionInfo: {
						...c.actionInfo(e),
						pageType: o.MiniInbox
					}
				}),
				I = () => e => ({
					...c.defaults(e),
					action: a.c.CLICK,
					noun: "messages",
					source: r.Inbox
				}),
				O = ({
					isMiniInbox: e
				}) => t => ({
					...c.defaults(t),
					action: a.c.CLICK,
					noun: "mark_all_as_read",
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
			var i = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = {
					goldPurchase: {
						offerContext: i.a.AvatarNewGear
					}
				},
				a = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(s.a)(t) && Object.assign(n, r), n
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
			var i = n("./node_modules/react/index.js"),
				s = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				clipRule: "evenodd",
				d: "M14.03 9.53l-5 5a.748.748 0 01-1.06 0l-2-2a.75.75 0 111.06-1.061l1.47 1.47 4.47-4.47a.75.75 0 111.06 1.061m4.5-3.378l-8-5a.999.999 0 00-1.06 0l-8 5A.999.999 0 001 7v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7a1 1 0 00-.47-.848",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(s);
			t.a = i.a.div("inlineRow", o.a)
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				}, i.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), o.a.createElement("p", {
					className: d.a.emptyDescription
				}, i.fbt._("This is where you get updates on your activity and recommendations", null, {
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
			var i = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts");
			const a = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var n;
				switch (t.type) {
					case s.o:
						const {
							avatarMarketingEvent: i
						} = t.payload;
						return i ? function(e) {
							const {
								startsAt: t,
								endsAt: n,
								webAssetUrls: i
							} = e, s = t && new Date(t) <= new Date, o = !!n && new Date(n) < new Date, r = i || null;
							return {
								active: !!s && !o && !!r,
								assetUrls: r
							}
						}(i) : a;
					case o.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === r.a.SNOOVATAR_MODAL ? a : e;
					default:
						return e
				}
			};
			t.a = Object(i.c)({
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
			var i = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				r = n("./src/reddit/selectors/experiments/econ/avatarMarketing.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(i.a)(r.a, e => {
					var t, n;
					const i = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing;
					return (null == i ? void 0 : i.active) ? i.assetUrls && i.assetUrls[0] : null
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
				return f
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var i = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				o = n("./src/reddit/models/SubredditModeration/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const i = Object(r.mb)(e, {
						userName: n
					});
					if (!i) return;
					const s = a(e, {
						subredditId: t
					});
					return s ? s[i.id] : void 0
				},
				d = Object(i.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : s.a
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
				f = e => e.features.banned.search.api.pending,
				m = e => e.features.banned.search.result,
				p = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/experiments/econ/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(i.rb)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.5066265c1ea87d831e8f.js.map