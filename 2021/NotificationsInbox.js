// https://www.redditstatic.com/desktop2x/NotificationsInbox.bda884f3f7fd92b30599.js
// Retrieved at 4/20/2021, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return g
			}));
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/pageTitle.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/notificationsInbox/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				l = n("./src/reddit/routes/notificationsInbox/index.ts"),
				m = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				u = n("./src/reddit/selectors/notificationsInbox.tsx"),
				p = n("./src/reddit/selectors/user.ts");
			const g = () => async (e, t) => {
				const n = t();
				if (!(Object(p.J)(n) || Object(p.I)(n))) return Object(d.a)(e, n);
				Object(m.c)(n) ? (e(b()), e(f()), await e(h())) : e(Object(a.c)("/"))
			}, b = () => Object(i.k)({
				actionSource: i.a.NotificationsInbox,
				redirectUrl: l.b
			}), f = () => o.l({
				title: Object(s.e)()
			}), h = () => async (e, t) => {
				const n = t(),
					a = Object(u.g)(t()),
					s = !(!a || !a.length),
					i = Object(p.J)(n) || Object(p.I)(n);
				if (s || !i || !Object(m.c)(n)) return;
				const o = {
					first: 10
				};
				await e(Object(c.r)()), e(Object(r.d)(o))
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/values.js"),
				s = n.n(a),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				g = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = n.n(v);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = m.a.div("BladeContainer", E.a), C = m.a.wrapped(b.a, "CloseIcon", E.a), k = m.a.div("LoadingTitleContainer", E.a), y = m.a.div("LoadingNavContainer", E.a), O = m.a.div("ShortLoadingNav", E.a), I = m.a.wrapped(g.a, "ThemedChevron", E.a), j = ({
				...e
			}) => r.a.createElement(N, null, r.a.createElement(C, null), r.a.createElement(p.k, null, r.a.createElement(p.p, null, _._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), r.a.createElement(p.o, null, r.a.createElement(k, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingTitle, e.isLoading && E.a.loading)
			})), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), r.a.createElement(I, null)), r.a.createElement(y, null, r.a.createElement(O, null), r.a.createElement(I, null)), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), r.a.createElement(I, null)), r.a.createElement(y, null, r.a.createElement(O, null), r.a.createElement(I, null)), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), r.a.createElement(I, null))))), S = Object(d.a)({
				getComponent: () => Object(u.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => r.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => r.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: h.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: f.k
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? r.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, r.a.createElement(S, {
					subredditId: e.subredditId
				})) : r.a.createElement(i.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return r
			})), n.d(t, "p", (function() {
				return o
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return _
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(s);
			const r = a.a.section("FormPage", i.a),
				o = a.a.h1("HomePageTitle", i.a),
				c = a.a.button("HomePageBreadcrumb", i.a),
				d = a.a.div("HomePageGroup", i.a),
				l = a.a.h1("FormPageTitle", i.a),
				m = a.a.div("FormPageSection", i.a),
				u = a.a.div("FormGroup", i.a),
				p = a.a.h2("FormGroupTitle", i.a),
				g = a.a.div("FormElement", i.a),
				b = a.a.div("FormGroupDescription", i.a),
				f = a.a.div("FormItem", i.a),
				h = a.a.h3("FormElementTitle", i.a),
				x = a.a.div("FormElementDescription", i.a),
				v = a.a.div("FormElementError", i.a),
				E = a.a.div("FormElementSubGroup", i.a),
				_ = a.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return N
			}));
			var a, s = n("./node_modules/lodash/throttle.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/constants/componentSizes.ts"),
				u = n("./src/reddit/constants/zIndex.ts"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = n("./src/reddit/components/TabNav/index.m.less"),
				f = n.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(a || (a = {}));
			const x = l.a.wrapped(g.a, "Gear", f.a),
				v = l.a.h3("Title", f.a),
				E = l.a.div("TabNavContainer", f.a),
				_ = l.a.div("Tabs", f.a),
				N = l.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...a
				}) => o.a.createElement(p.a, h({}, a, {
					"aria-selected": e,
					className: Object(c.a)(a.className, {
						[f.a.mIsActive]: e,
						[f.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", f.a),
				C = e => {
					switch (e) {
						case a.GEAR:
							return o.a.createElement(x, null);
						default:
							return null
					}
				},
				k = () => window.pageYOffset || window.scrollY,
				y = 75,
				O = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.f,
					willChange: "transform",
					zIndex: u.g
				};
			class I extends o.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = i()(() => {
						this.state.sticky || this.forceUnsticky ? k() < y && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : k() >= y && this.setState({
							sticky: !0
						})
					}, d.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, a = Object(c.a)({
						[f.a.mResponsive]: t
					});
					return o.a.createElement(E, {
						className: Object(c.a)(a, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, o.a.createElement(v, {
						className: Object(c.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, C(this.props.icon), this.props.title), o.a.createElement(_, {
						className: Object(c.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? O : void 0
					}, this.props.children))
				}
			}
			t.c = I
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/pages/NotificationsInbox/NavBar/index.m.less": function(e, t, n) {
			e.exports = {
				navContainer: "_12OY7TkUMEzB4Dcb45flW4",
				navHeader: "_2LFc4YaOIyX_CuErU3hk7i",
				navBar: "_3C3k7jI3ZTmLbJfMRgwMp0",
				Tab: "_2yqeFE_vFRXsXeI8F0no7I",
				tab: "_2yqeFE_vFRXsXeI8F0no7I",
				Badge: "EHcqVS0S_Zy4T26UTcl95",
				badge: "EHcqVS0S_Zy4T26UTcl95",
				navLink: "_2AmngOKrvLvv8AgoVNkerf",
				Gear: "_1-OQiyZa9rGijwU8SjAbUC",
				gear: "_1-OQiyZa9rGijwU8SjAbUC",
				MarkAsRead: "P4zM8oVx2ZbSz4I2pyce_",
				markAsRead: "P4zM8oVx2ZbSz4I2pyce_"
			}
		},
		"./src/reddit/pages/NotificationsInbox/index.m.less": function(e, t, n) {
			e.exports = {
				contentClassName: "_3fT9oQmQ-SzBAXvVS2nTCd"
			}
		},
		"./src/reddit/pages/NotificationsInbox/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				i = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/layout/page/Listing/index.tsx"),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				u = n("./src/reddit/actions/notificationsInbox/index.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				b = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				h = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				x = n("./src/reddit/helpers/trackers/inbox.ts"),
				v = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx"),
				E = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				_ = n.n(E);
			const N = "",
				C = .5,
				k = b.a.span("divider", _.a),
				y = b.a.wrapped(f.a, "NotificationUnit", _.a);
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = N, this.todayDividerNotificationId = N, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => s.a.createElement(y, {
						activeOverflowMenuId: this.props.activeOverflowMenuId,
						disableNotificationUpdates: this.props.disableNotificationUpdates,
						hideNotification: this.props.hideNotification,
						hideSubredditNotifications: this.props.hideSubredditNotifications,
						isInboxPostEmbedEnabled: this.props.isInboxPostEmbedEnabled,
						key: e.id,
						markNotificationAsRead: this.props.markNotificationAsRead,
						notification: e,
						setActiveOverflowMenuId: this.props.setActiveOverflowMenuId,
						blockAwarder: this.props.blockAwarder
					}), this.renderNotifications = () => {
						const {
							earlierNotifications: e,
							todayNotifications: t
						} = this.props, n = !(!e || !e.length), a = !(!t || !t.length);
						return s.a.createElement(s.a.Fragment, null, a && s.a.createElement(k, null, "Today"), a && s.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && s.a.createElement(k, null, "Earlier"), n && s.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
					}
				}
				componentDidMount() {
					this.props.updateInboxActivitySeenState(), this.props.sendEvent(Object(x.m)({
						badgeCount: this.props.inboxBadgeCount,
						tab: x.d.Activity
					}))
				}
				render() {
					const {
						hasNextPage: e,
						earlierNotifications: t,
						isPending: n,
						todayNotifications: a
					} = this.props, i = !!((t && t.length || 0) + (a && a.length));
					return s.a.createElement("div", {
						className: _.a.notificationsContainer
					}, !i && n && s.a.createElement(h.a, null), !i && !n && s.a.createElement(v.a, null), i && this.renderNotifications(), i && !n && e && s.a.createElement(g.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: C
					}, s.a.createElement("div", null)))
				}
			}
			var I = Object(r.c)(O),
				j = n("./src/reddit/selectors/appBadges.ts"),
				S = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				T = n("./src/reddit/selectors/notificationsInbox.tsx"),
				L = n("./src/reddit/selectors/tooltip.ts");
			const w = Object(l.c)({
				activeOverflowMenuId: L.a,
				cursor: T.c,
				earlierNotifications: T.b,
				hasNextPage: T.d,
				inboxBadgeCount: j.g,
				isInboxPostEmbedEnabled: S.b,
				isPending: T.e,
				todayNotifications: T.h
			});
			var P = Object(d.b)(w, e => ({
					clearMessageTabBadgeCount: () => e(Object(m.b)()),
					disableNotificationUpdates: t => e(Object(u.c)(t)),
					blockAwarder: t => e(Object(u.a)(t)),
					fetchNotifications: t => e(Object(u.d)(t)),
					hideNotification: t => e(Object(u.b)(t)),
					hideSubredditNotifications: (t, n) => e(Object(u.f)(t, n)),
					markNotificationAsRead: (t, n) => e(Object(u.h)(t, n)),
					setActiveOverflowMenuId: t => {
						e(Object(p.h)({
							tooltipId: t
						}))
					},
					updateInboxActivitySeenState: () => e(Object(u.i)())
				}))(I),
				A = n("./node_modules/fbt/lib/FbtPublic.js"),
				F = n("./src/reddit/components/BadgeCounter/index.tsx"),
				M = n("./src/reddit/components/TabNav/index.tsx"),
				R = n("./src/reddit/controls/InternalLink/index.tsx"),
				B = n("./src/reddit/hooks/useTracking.ts"),
				U = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				W = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				H = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				G = n.n(H);
			const z = b.a.wrapped(F.a, "Badge", G.a),
				Q = b.a.wrapped(W.a, "Gear", G.a),
				J = b.a.wrapped(U.a, "MarkAsRead", G.a),
				D = b.a.wrapped(M.a, "Tab", G.a);
			var X = e => {
				const {
					isInboxMarkAllAsReadEnabled: t,
					messagesTabBadgeCount: n,
					notificationsTabBadgeCount: a
				} = e, i = Object(B.a)(), r = !!n;
				return s.a.createElement("div", {
					className: G.a.navContainer
				}, s.a.createElement("h1", {
					className: G.a.navHeader
				}, A.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), s.a.createElement("nav", {
					className: G.a.navBar
				}, s.a.createElement("ul", null, s.a.createElement("li", null, s.a.createElement(D, {
					active: !0,
					to: "/notifications"
				}, A.fbt._("Activity", null, {
					hk: "24wHCv"
				})), s.a.createElement(z, {
					isActive: !!a,
					unreadCount: a
				})), s.a.createElement("li", null, s.a.createElement(D, {
					active: !1,
					onMouseDown: () => {
						i(Object(x.m)({
							badgeCount: n + a,
							tab: x.d.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: r ? "/message/unread" : "/message/messages"
				}, A.fbt._("Messages", null, {
					hk: "Xl3Wz"
				})), s.a.createElement(z, {
					isActive: r,
					unreadCount: n
				})), t && s.a.createElement("li", null, s.a.createElement("button", {
					className: G.a.navLink,
					onClick: () => {
						e.markAllAsRead(), i(Object(x.e)({
							isMiniInbox: !1
						}))
					}
				}, s.a.createElement(J, null), A.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), s.a.createElement("li", null, s.a.createElement(R.a, {
					className: G.a.navLink,
					onClick: () => i(Object(x.k)(x.a.Inbox)),
					to: "/settings/notifications"
				}, s.a.createElement(Q, null), A.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const q = Object(l.c)({
				isInboxMarkAllAsReadEnabled: S.a,
				messagesTabBadgeCount: j.h,
				notificationsTabBadgeCount: j.a
			});
			var K = Object(d.b)(q, e => ({
					clearMessageTabBadgeCount: () => e(Object(m.b)()),
					markAllAsRead: () => e(Object(u.g)())
				}))(e => s.a.createElement(X, e)),
				Y = n("./src/reddit/pages/NotificationsInbox/index.m.less"),
				V = n.n(Y);
			const Z = Object(o.t)();
			class $ extends s.a.Component {
				render() {
					return s.a.createElement(i.a, null, s.a.createElement(c.a, {
						contentClassName: V.a.contentClassName,
						content: s.a.createElement(P, null),
						disableFullscreen: !0,
						navBar: s.a.createElement(K, null)
					}))
				}
			}
			t.default = Z(Object(r.c)($))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.bda884f3f7fd92b30599.js.map