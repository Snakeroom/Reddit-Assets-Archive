// https://www.redditstatic.com/desktop2x/NotificationsInbox.53b11130ab20bf2ada27.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return u
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/notificationsInbox/index.ts"),
				r = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/routes/notificationsInbox/index.ts"),
				d = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				l = n("./src/reddit/selectors/notificationsInbox.tsx"),
				m = n("./src/reddit/selectors/user.ts");
			const u = () => async (e, t) => {
				const n = t();
				if (!(Object(m.K)(n) || Object(m.J)(n))) return Object(o.a)(e, n);
				Object(d.d)(n) ? (e(p()), await e(g())) : e(Object(s.c)("/"))
			}, p = () => Object(a.k)({
				actionSource: a.a.NotificationsInbox,
				redirectUrl: c.b
			}), g = () => async (e, t) => {
				const n = t(),
					s = Object(l.g)(t()),
					a = !(!s || !s.length),
					o = Object(m.K)(n) || Object(m.J)(n);
				if (a || !o || !Object(d.d)(n)) return;
				const c = {
					first: 10
				};
				await e(Object(r.r)()), e(Object(i.d)(c))
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
			var s = n("./node_modules/lodash/values.js"),
				a = n.n(s),
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
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = m.a.div("BladeContainer", E.a), N = m.a.wrapped(b.a, "CloseIcon", E.a), y = m.a.div("LoadingTitleContainer", E.a), j = m.a.div("LoadingNavContainer", E.a), O = m.a.div("ShortLoadingNav", E.a), k = m.a.wrapped(g.a, "ThemedChevron", E.a), T = ({
				...e
			}) => r.a.createElement(_, null, r.a.createElement(N, null), r.a.createElement(p.k, null, r.a.createElement(p.p, null, C._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), r.a.createElement(p.o, null, r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingTitle, e.isLoading && E.a.loading)
			})), r.a.createElement(j, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), r.a.createElement(k, null)), r.a.createElement(j, null, r.a.createElement(O, null), r.a.createElement(k, null)), r.a.createElement(j, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), r.a.createElement(k, null)), r.a.createElement(j, null, r.a.createElement(O, null), r.a.createElement(k, null)), r.a.createElement(j, null, r.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), r.a.createElement(k, null))))), S = Object(d.a)({
				getComponent: () => Object(u.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => r.a.createElement(T, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => r.a.createElement(T, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(c.c)({
				isEditing: h.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: f.k
			});
			t.a = Object(o.b)(I)(e => {
				const t = e.moderatorPermissions && a()(e.moderatorPermissions).some(e => e);
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
				return C
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(a);
			const r = s.a.section("FormPage", i.a),
				o = s.a.h1("HomePageTitle", i.a),
				c = s.a.button("HomePageBreadcrumb", i.a),
				d = s.a.div("HomePageGroup", i.a),
				l = s.a.h1("FormPageTitle", i.a),
				m = s.a.div("FormPageSection", i.a),
				u = s.a.div("FormGroup", i.a),
				p = s.a.h2("FormGroupTitle", i.a),
				g = s.a.div("FormElement", i.a),
				b = s.a.div("FormGroupDescription", i.a),
				f = s.a.div("FormItem", i.a),
				h = s.a.h3("FormElementTitle", i.a),
				x = s.a.div("FormElementDescription", i.a),
				v = s.a.div("FormElementError", i.a),
				E = s.a.div("FormElementSubGroup", i.a),
				C = s.a.li("FormListItem", i.a)
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
				return s
			})), n.d(t, "a", (function() {
				return _
			}));
			var s, a = n("./node_modules/lodash/throttle.js"),
				i = n.n(a),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(s || (s = {}));
			const x = l.a.wrapped(g.a, "Gear", f.a),
				v = l.a.h3("Title", f.a),
				E = l.a.div("TabNavContainer", f.a),
				C = l.a.div("Tabs", f.a),
				_ = l.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...s
				}) => o.a.createElement(p.a, h({}, s, {
					"aria-selected": e,
					className: Object(c.a)(s.className, {
						[f.a.mIsActive]: e,
						[f.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", f.a),
				N = e => {
					switch (e) {
						case s.GEAR:
							return o.a.createElement(x, null);
						default:
							return null
					}
				},
				y = () => window.pageYOffset || window.scrollY,
				j = 75,
				O = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: m.f,
					willChange: "transform",
					zIndex: u.g
				};
			class k extends o.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = i()(() => {
						this.state.sticky || this.forceUnsticky ? y() < j && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : y() >= j && this.setState({
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
					} = this.props, s = Object(c.a)({
						[f.a.mResponsive]: t
					});
					return o.a.createElement(E, {
						className: Object(c.a)(s, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, o.a.createElement(v, {
						className: Object(c.a)(s, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, N(this.props.icon), this.props.title), o.a.createElement(C, {
						className: Object(c.a)(s, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? O : void 0
					}, this.props.children))
				}
			}
			t.c = k
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-helmet/es/Helmet.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/pageTitle.ts"),
				d = n("./src/reddit/helpers/tabBadging/index.ts"),
				l = n("./src/reddit/selectors/appBadges.ts");
			const m = Object(o.a)(l.c, e => ({
				badgeCount: e
			}));
			class u extends s.Component {
				constructor() {
					super(...arguments), this.title = Object(c.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(c.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(d.b)(this.props.badgeCount > 0), a.a.createElement(i.b, null, a.a.createElement("title", null, this.getTitle()))
				}
			}
			t.a = Object(r.b)(m)(u)
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(i.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, a.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("polygon", {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/lib/pageTitle.ts"),
				r = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				o = n("./src/reddit/components/TitleTagManager/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/layout/page/Listing/index.tsx"),
				m = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				g = n("./src/reddit/actions/notificationsInbox/index.ts"),
				b = n("./src/reddit/actions/tooltip.ts"),
				f = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				h = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				v = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				E = n("./src/reddit/helpers/trackers/inbox.ts"),
				C = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx"),
				_ = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				N = n.n(_);
			const y = "",
				j = .5,
				O = h.a.span("divider", N.a),
				k = h.a.wrapped(x.a, "NotificationUnit", N.a);
			class T extends a.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = y, this.todayDividerNotificationId = y, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => a.a.createElement(k, {
						activeOverflowMenuId: this.props.activeOverflowMenuId,
						disableMessageTypeNotifications: this.props.disableMessageTypeNotifications,
						disableNotificationUpdates: this.props.disableNotificationUpdates,
						hideNotification: this.props.hideNotification,
						hideSubredditNotifications: this.props.hideSubredditNotifications,
						isInboxPostEmbedEnabled: this.props.isInboxPostEmbedEnabled,
						key: e.id,
						markNotificationAsRead: this.props.markNotificationAsRead,
						notification: e,
						setActiveOverflowMenuId: this.props.setActiveOverflowMenuId
					}), this.renderNotifications = () => {
						const {
							earlierNotifications: e,
							todayNotifications: t
						} = this.props, n = !(!e || !e.length), s = !(!t || !t.length);
						return a.a.createElement(a.a.Fragment, null, s && a.a.createElement(O, null, "Today"), s && a.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && a.a.createElement(O, null, "Earlier"), n && a.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
					}
				}
				componentDidMount() {
					this.props.updateInboxActivitySeenState(), this.props.sendEvent(Object(E.l)({
						badgeCount: this.props.inboxBadgeCount,
						tab: E.c.Activity
					}))
				}
				render() {
					const {
						hasNextPage: e,
						earlierNotifications: t,
						isPending: n,
						todayNotifications: s
					} = this.props, i = !!((t && t.length || 0) + (s && s.length));
					return a.a.createElement("div", {
						className: N.a.notificationsContainer
					}, !i && n && a.a.createElement(v.a, null), !i && !n && a.a.createElement(C.a, null), i && this.renderNotifications(), i && !n && e && a.a.createElement(f.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: j
					}, a.a.createElement("div", null)))
				}
			}
			var S = Object(c.c)(T),
				I = n("./src/reddit/selectors/appBadges.ts"),
				L = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				P = n("./src/reddit/selectors/notificationsInbox.tsx"),
				w = n("./src/reddit/selectors/tooltip.ts");
			const A = Object(u.c)({
				activeOverflowMenuId: w.a,
				cursor: P.c,
				earlierNotifications: P.b,
				hasNextPage: P.d,
				inboxBadgeCount: I.h,
				isInboxPostEmbedEnabled: L.c,
				isPending: P.e,
				todayNotifications: P.h
			});
			var F = Object(m.b)(A, e => ({
					clearMessageTabBadgeCount: () => e(Object(p.b)()),
					disableMessageTypeNotifications: (t, n) => e(Object(g.b)(t, n)),
					disableNotificationUpdates: t => e(Object(g.c)(t)),
					fetchNotifications: t => e(Object(g.d)(t)),
					hideNotification: t => e(Object(g.a)(t)),
					hideSubredditNotifications: (t, n) => e(Object(g.f)(t, n)),
					markNotificationAsRead: (t, n) => e(Object(g.h)(t, n)),
					setActiveOverflowMenuId: t => {
						e(Object(b.h)({
							tooltipId: t
						}))
					},
					updateInboxActivitySeenState: () => e(Object(g.i)())
				}))(S),
				M = n("./node_modules/fbt/lib/FbtPublic.js"),
				R = n("./src/reddit/components/BadgeCounter/index.tsx"),
				B = n("./src/reddit/components/TabNav/index.tsx"),
				U = n("./src/reddit/controls/InternalLink/index.tsx"),
				W = n("./src/reddit/hooks/useTracking.ts"),
				H = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				G = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				z = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				Q = n.n(z);
			const J = h.a.wrapped(R.a, "Badge", Q.a),
				D = h.a.wrapped(G.a, "Gear", Q.a),
				K = h.a.wrapped(H.a, "MarkAsRead", Q.a),
				X = h.a.wrapped(B.a, "Tab", Q.a);
			var q = e => {
				const {
					isInboxMarkAllAsReadEnabled: t,
					messagesTabBadgeCount: n,
					notificationsTabBadgeCount: s
				} = e, i = Object(W.a)(), r = !!n;
				return a.a.createElement("div", {
					className: Q.a.navContainer
				}, a.a.createElement("h1", {
					className: Q.a.navHeader
				}, M.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), a.a.createElement("nav", {
					className: Q.a.navBar
				}, a.a.createElement("ul", null, a.a.createElement("li", null, a.a.createElement(X, {
					active: !0,
					to: "/notifications"
				}, M.fbt._("Activity", null, {
					hk: "24wHCv"
				})), a.a.createElement(J, {
					isActive: !!s,
					unreadCount: s
				})), a.a.createElement("li", null, a.a.createElement(X, {
					active: !1,
					onMouseDown: () => {
						i(Object(E.l)({
							badgeCount: n + s,
							tab: E.c.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: r ? "/message/unread" : "/message/messages"
				}, M.fbt._("Messages", null, {
					hk: "Xl3Wz"
				})), a.a.createElement(J, {
					isActive: r,
					unreadCount: n
				})), t && a.a.createElement("li", null, a.a.createElement("button", {
					className: Q.a.navLink,
					onClick: () => {
						e.markAllAsRead(), i(Object(E.d)({
							isMiniInbox: !1
						}))
					}
				}, a.a.createElement(K, null), M.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), a.a.createElement("li", null, a.a.createElement(U.a, {
					className: Q.a.navLink,
					onClick: () => i(Object(E.j)(E.a.Inbox)),
					to: "/settings/notifications"
				}, a.a.createElement(D, null), M.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const Y = Object(u.c)({
				isInboxMarkAllAsReadEnabled: L.b,
				messagesTabBadgeCount: I.i,
				notificationsTabBadgeCount: I.a
			});
			var V = Object(m.b)(Y, e => ({
					clearMessageTabBadgeCount: () => e(Object(p.b)()),
					markAllAsRead: () => e(Object(g.g)())
				}))(e => a.a.createElement(q, e)),
				Z = n("./src/reddit/pages/NotificationsInbox/index.m.less"),
				$ = n.n(Z);
			const ee = Object(d.t)();
			class te extends a.a.Component {
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(o.a, {
						title: Object(i.e)().toString()
					}), a.a.createElement(r.a, null, a.a.createElement(l.a, {
						contentClassName: $.a.contentClassName,
						content: a.a.createElement(F, null),
						disableFullscreen: !0,
						navBar: a.a.createElement(V, null)
					})))
				}
			}
			t.default = ee(Object(c.c)(te))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.53b11130ab20bf2ada27.js.map