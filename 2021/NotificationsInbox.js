// https://www.redditstatic.com/desktop2x/NotificationsInbox.295d9bc1d181cbe79e54.js
// Retrieved at 7/26/2021, 3:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return g
			}));
			var a = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/lib/pageTitle.ts"),
				s = n("./src/reddit/actions/modal.ts"),
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
				Object(m.g)(n) ? (e(b()), e(f()), await e(h())) : e(Object(a.c)("/"))
			}, b = () => Object(s.k)({
				actionSource: s.a.NotificationsInbox,
				redirectUrl: l.b
			}), f = () => o.l({
				title: Object(i.e)()
			}), h = () => async (e, t) => {
				const n = t(),
					a = Object(u.g)(t()),
					i = !(!a || !a.length),
					s = Object(p.J)(n) || Object(p.I)(n);
				if (i || !s || !Object(m.g)(n)) return;
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
				i = n.n(a),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				C = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = m.a.div("BladeContainer", C.a), N = m.a.wrapped(b.a, "CloseIcon", C.a), k = m.a.div("LoadingTitleContainer", C.a), y = m.a.div("LoadingNavContainer", C.a), O = m.a.div("ShortLoadingNav", C.a), L = m.a.wrapped(g.a, "ThemedChevron", C.a), j = ({
				...e
			}) => r.a.createElement(_, null, r.a.createElement(N, null), r.a.createElement(p.k, null, r.a.createElement(p.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), r.a.createElement(p.o, null, r.a.createElement(k, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingTitle, e.isLoading && C.a.loading)
			})), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingNav, e.isLoading && C.a.loading)
			}), r.a.createElement(L, null)), r.a.createElement(y, null, r.a.createElement(O, null), r.a.createElement(L, null)), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingNav, e.isLoading && C.a.loading)
			}), r.a.createElement(L, null)), r.a.createElement(y, null, r.a.createElement(O, null), r.a.createElement(L, null)), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingNav, e.isLoading && C.a.loading)
			}), r.a.createElement(L, null))))), S = Object(d.a)({
				getComponent: () => Object(u.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => r.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => r.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(c.c)({
				isEditing: h.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: f.l
			});
			t.a = Object(o.b)(I)(e => {
				const t = e.moderatorPermissions && i()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? r.a.createElement("div", {
					className: Object(l.a)(C.a.Container, e.isSubscriptionsPinned && C.a.isSubscriptionPinned)
				}, e.children, r.a.createElement(S, {
					subredditId: e.subredditId
				})) : r.a.createElement(s.Fragment, null, e.children)
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
				return C
			})), n.d(t, "j", (function() {
				return E
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(i);
			const r = a.a.section("FormPage", s.a),
				o = a.a.h1("HomePageTitle", s.a),
				c = a.a.button("HomePageBreadcrumb", s.a),
				d = a.a.div("HomePageGroup", s.a),
				l = a.a.h1("FormPageTitle", s.a),
				m = a.a.div("FormPageSection", s.a),
				u = a.a.div("FormGroup", s.a),
				p = a.a.h2("FormGroupTitle", s.a),
				g = a.a.div("FormElement", s.a),
				b = a.a.div("FormGroupDescription", s.a),
				f = a.a.div("FormItem", s.a),
				h = a.a.h3("FormElementTitle", s.a),
				x = a.a.div("FormElementDescription", s.a),
				v = a.a.div("FormElementError", s.a),
				C = a.a.div("FormElementSubGroup", s.a),
				E = a.a.li("FormListItem", s.a)
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
				return _
			}));
			var a, i = n("./node_modules/lodash/throttle.js"),
				s = n.n(i),
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
				C = l.a.div("TabNavContainer", f.a),
				E = l.a.div("Tabs", f.a),
				_ = l.a.wrapped(({
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
				N = e => {
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
					zIndex: u.f
				};
			class L extends o.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = s()(() => {
						this.state.sticky || this.forceUnsticky ? k() < y && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : k() >= y && this.setState({
							sticky: !0
						})
					}, d.I), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					return o.a.createElement(C, {
						className: Object(c.a)(a, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, o.a.createElement(v, {
						className: Object(c.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, N(this.props.icon), this.props.title), o.a.createElement(E, {
						className: Object(c.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? O : void 0
					}, this.props.children))
				}
			}
			t.c = L
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(r);
			t.a = e => i.a.createElement("svg", {
				className: Object(s.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, i.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), i.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				i = n.n(a);
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
				markAsRead: "P4zM8oVx2ZbSz4I2pyce_",
				icon: "aCHarFGuSgOLfpM8Sh-Yn"
			}
		},
		"./src/reddit/pages/NotificationsInbox/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				i = n.n(a),
				s = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
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
				C = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				E = n.n(C);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = "", k = .5, y = b.a.span("divider", E.a), O = b.a.wrapped(f.a, "NotificationUnit", E.a);
			class L extends i.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = N, this.todayDividerNotificationId = N, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => i.a.createElement(O, {
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
						return i.a.createElement(i.a.Fragment, null, a && i.a.createElement(y, null, _._("Today", null, {
							hk: "2FZ72w"
						})), a && i.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && i.a.createElement(y, null, _._("Earlier", null, {
							hk: "1p7PDF"
						})), n && i.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
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
					} = this.props, s = !!((t && t.length || 0) + (a && a.length));
					return i.a.createElement("div", {
						className: E.a.notificationsContainer
					}, !s && n && i.a.createElement(h.a, null), !s && !n && i.a.createElement(v.a, null), s && this.renderNotifications(), s && !n && e && i.a.createElement(g.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: k
					}, i.a.createElement("div", null)))
				}
			}
			var j = Object(r.c)(L),
				S = n("./src/reddit/selectors/appBadges.ts"),
				I = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				T = n("./src/reddit/selectors/notificationsInbox.tsx"),
				w = n("./src/reddit/selectors/tooltip.ts");
			const P = Object(l.c)({
				activeOverflowMenuId: w.a,
				cursor: T.c,
				earlierNotifications: T.b,
				hasNextPage: T.d,
				inboxBadgeCount: S.g,
				isInboxPostEmbedEnabled: I.f,
				isPending: T.e,
				todayNotifications: T.h
			});
			var F = Object(d.b)(P, e => ({
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
				}))(j),
				A = n("./node_modules/fbt/lib/FbtPublic.js"),
				M = n("./src/reddit/components/BadgeCounter/index.tsx"),
				R = n("./src/reddit/components/TabNav/index.tsx"),
				B = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./src/reddit/hooks/useTracking.ts"),
				W = n("./src/reddit/icons/fonts/index.tsx"),
				H = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				G = n.n(H);
			const z = b.a.wrapped(M.a, "Badge", G.a),
				J = b.a.wrapped(R.a, "Tab", G.a);
			var Q = e => {
				const {
					messagesTabBadgeCount: t,
					notificationsTabBadgeCount: n
				} = e, a = Object(U.a)(), s = !!t;
				return i.a.createElement("div", {
					className: G.a.navContainer
				}, i.a.createElement("h1", {
					className: G.a.navHeader
				}, A.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), i.a.createElement("nav", {
					className: G.a.navBar
				}, i.a.createElement("ul", null, i.a.createElement("li", null, i.a.createElement(J, {
					active: !0,
					to: "/notifications"
				}, A.fbt._("Activity", null, {
					hk: "24wHCv"
				}), i.a.createElement(z, {
					isActive: !!n,
					unreadCount: n
				}))), i.a.createElement("li", null, i.a.createElement(J, {
					active: !1,
					onMouseDown: () => {
						a(Object(x.m)({
							badgeCount: t + n,
							tab: x.d.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: s ? "/message/unread" : "/message/messages"
				}, A.fbt._("Messages", null, {
					hk: "Xl3Wz"
				}), i.a.createElement(z, {
					isActive: s,
					unreadCount: t
				}))), i.a.createElement("li", null, i.a.createElement("button", {
					className: G.a.navLink,
					onClick: () => {
						e.markAllAsRead(), a(Object(x.e)({
							isMiniInbox: !1
						}))
					}
				}, i.a.createElement(W.a, {
					name: "mark_read",
					className: G.a.icon
				}), A.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), i.a.createElement("li", null, i.a.createElement(B.a, {
					className: G.a.navLink,
					onClick: () => a(Object(x.k)(x.a.Inbox)),
					to: "/settings/notifications"
				}, i.a.createElement(W.a, {
					name: "settings",
					className: G.a.icon
				}), A.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const D = Object(l.c)({
				messagesTabBadgeCount: S.h,
				notificationsTabBadgeCount: S.a
			});
			var q = Object(d.b)(D, e => ({
				clearMessageTabBadgeCount: () => e(Object(m.b)()),
				markAllAsRead: () => e(Object(u.g)())
			}))(e => i.a.createElement(Q, e));
			const X = Object(o.t)();
			class K extends i.a.Component {
				render() {
					return i.a.createElement(s.a, null, i.a.createElement(c.a, {
						hideOnlyChildMargin: !0,
						content: i.a.createElement(F, null),
						disableFullscreen: !0,
						navBar: i.a.createElement(q, null)
					}))
				}
			}
			t.default = X(Object(r.c)(K))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.295d9bc1d181cbe79e54.js.map