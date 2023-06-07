// https://www.redditstatic.com/desktop2x/NotificationsInbox.04f84b7b44c9bf2d3951.js
// Retrieved at 6/7/2023, 12:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return m
			}));
			var i = n("./src/lib/pageTitle/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/actions/notificationsInbox/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = n("./src/reddit/routes/notificationsInbox/index.ts"),
				l = n("./src/reddit/selectors/notificationsInbox.tsx"),
				u = n("./src/reddit/selectors/user.ts");
			const m = () => async (e, t) => {
				const n = t();
				if (!(Object(u.S)(n) || Object(u.R)(n))) return Object(c.a)(e, n);
				e(b()), e(f()), await e(p())
			}, b = () => Object(a.k)({
				actionSource: a.a.NotificationsInbox,
				redirectUrl: d.b
			}), f = () => r.n({
				title: Object(i.j)()
			}), p = () => async (e, t) => {
				const n = t(),
					i = Object(l.g)(t()),
					a = !(!i || !i.length),
					r = Object(u.S)(n) || Object(u.R)(n);
				if (a || !r) return;
				const c = {
					first: 10
				};
				await e(Object(o.s)()), e(Object(s.d)(c))
			}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return h
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = n("./src/reddit/actions/notificationsInbox/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(a.a)(o.z),
				b = Object(a.a)(o.y),
				f = Object(a.a)(o.x),
				p = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				g = e => {
					switch (e) {
						case l.c.OFF:
							return i.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return i.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return i.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const h = e => {
				let {
					subredditId: t,
					notificationLevel: n,
					successCallback: a,
					undoCallback: o
				} = e;
				return async (e, l, h) => {
					let {
						gqlContext: v
					} = h;
					var x, C, E;
					e(b());
					const _ = p(n),
						N = await Object(d.b)(v(), t, _);
					if ((null === (C = null === (x = N.error) || void 0 === x ? void 0 : x.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(N.body) && (null === (E = N.body.data.updateSubredditNotificationSettings.errors) || void 0 === E ? void 0 : E.length)) return e(f()), e(Object(c.f)({
						kind: u.b.Error,
						text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					N.ok && (e(Object(s.c)({
						subredditId: t,
						notificationLevel: n
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: n
							}
						}
					})), a && a(), e(o ? Object(c.f)(Object(c.e)(g(n), u.b.Undo, i.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(r.i)(t, o))) : Object(c.f)(Object(c.e)(g(n), u.b.SuccessCommunityGreen))))
				}
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
			var i = n("./node_modules/lodash/values.js"),
				a = n.n(i),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				f = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				p = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/userPrefs.ts"),
				x = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				C = n.n(x);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", C.a), N = u.a.wrapped(p.a, "CloseIcon", C.a), y = u.a.div("LoadingTitleContainer", C.a), O = u.a.div("LoadingNavContainer", C.a), S = u.a.div("ShortLoadingNav", C.a), k = u.a.wrapped(f.a, "ThemedChevron", C.a), L = e => {
				let {
					...t
				} = e;
				return r.a.createElement(_, null, r.a.createElement(N, null), r.a.createElement(b.k, null, r.a.createElement(b.p, null, E._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), r.a.createElement(b.o, null, r.a.createElement(y, null, r.a.createElement("div", {
					className: Object(l.a)(C.a.LoadingTitle, t.isLoading && C.a.loading)
				})), r.a.createElement(O, null, r.a.createElement("div", {
					className: Object(l.a)(C.a.LoadingNav, t.isLoading && C.a.loading)
				}), r.a.createElement(k, null)), r.a.createElement(O, null, r.a.createElement(S, null), r.a.createElement(k, null)), r.a.createElement(O, null, r.a.createElement("div", {
					className: Object(l.a)(C.a.LoadingNav, t.isLoading && C.a.loading)
				}), r.a.createElement(k, null)), r.a.createElement(O, null, r.a.createElement(S, null), r.a.createElement(k, null)), r.a.createElement(O, null, r.a.createElement("div", {
					className: Object(l.a)(C.a.LoadingNav, t.isLoading && C.a.loading)
				}), r.a.createElement(k, null)))))
			}, j = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => r.a.createElement(L, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => r.a.createElement(L, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(c.c)({
				isEditing: h.i,
				isSubscriptionsPinned: v.c,
				moderatorPermissions: g.n
			});
			t.a = Object(o.b)(I)(e => {
				const t = e.moderatorPermissions && a()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? r.a.createElement("div", {
					className: Object(l.a)(C.a.Container, e.isSubscriptionsPinned && C.a.isSubscriptionPinned)
				}, e.children, r.a.createElement(j, {
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
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
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
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			}));
			var i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(a);
			const r = i.a.section("FormPage", s.a),
				o = i.a.h1("HomePageTitle", s.a),
				c = i.a.button("HomePageBreadcrumb", s.a),
				d = i.a.div("HomePageGroup", s.a),
				l = i.a.h1("FormPageTitle", s.a),
				u = i.a.div("FormPageSection", s.a),
				m = i.a.div("FormGroup", s.a),
				b = i.a.h2("FormGroupTitle", s.a),
				f = i.a.div("FormElement", s.a),
				p = i.a.div("FormGroupDescription", s.a),
				g = i.a.div("FormItem", s.a),
				h = i.a.h3("FormElementTitle", s.a),
				v = i.a.div("FormElementDescription", s.a),
				x = i.a.div("FormElementError", s.a),
				C = i.a.div("FormElementSubGroup", s.a),
				E = i.a.li("FormListItem", s.a)
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
				return i
			})), n.d(t, "a", (function() {
				return _
			}));
			var i, a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				b = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = n("./src/reddit/components/TabNav/index.m.less"),
				g = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(i || (i = {}));
			const v = l.a.wrapped(f.a, "Gear", g.a),
				x = l.a.h3("Title", g.a),
				C = l.a.div("TabNavContainer", g.a),
				E = l.a.div("Tabs", g.a),
				_ = l.a.wrapped(e => {
					let {
						active: t,
						children: n,
						enabled: i,
						...a
					} = e;
					return o.a.createElement(b.default, h({}, a, {
						"aria-selected": t,
						className: Object(c.a)(a.className, {
							[g.a.mIsActive]: t,
							[g.a.mIsEnabled]: !1 !== i
						}),
						role: "tab"
					}), n)
				}, "Tab", g.a),
				N = e => {
					switch (e) {
						case i.GEAR:
							return o.a.createElement(v, null);
						default:
							return null
					}
				},
				y = () => window.pageYOffset || window.scrollY,
				O = 75,
				S = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: m.f
				};
			class k extends o.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = s()(() => {
						this.state.sticky || this.forceUnsticky ? y() < O && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : y() >= O && this.setState({
							sticky: !0
						})
					}, d.N), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					} = this.props, i = Object(c.a)({
						[g.a.mResponsive]: t
					});
					return o.a.createElement(C, {
						className: Object(c.a)(i, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, o.a.createElement(x, {
						className: Object(c.a)(i, {
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, N(this.props.icon), this.props.title), o.a.createElement(E, {
						className: Object(c.a)(i, {
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? S : void 0
					}, this.props.children))
				}
			}
			t.c = k
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(o.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				a = n.n(i);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsBannersContainer: "_30M-VGAobP1YuoM04brOVT",
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
			}
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
			var i = n("./node_modules/react/index.js"),
				a = n.n(i),
				s = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/layout/page/Listing/index.tsx"),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				m = n("./src/reddit/actions/notificationsInbox/index.ts"),
				b = n("./src/reddit/actions/subreddit/notifications.ts"),
				f = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				h = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				x = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				C = n("./src/reddit/helpers/trackers/inbox.ts"),
				E = n("./src/reddit/components/InboxBanner/CommonBanner.tsx"),
				_ = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				N = n.n(_);
			const y = e => a.a.createElement("div", {
				className: N.a.notificationsBannersContainer
			}, a.a.createElement(E.a, null));
			var O = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = "", L = .5, j = h.a.span("divider", N.a), I = h.a.wrapped(v.a, "NotificationUnit", N.a);
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = k, this.todayDividerNotificationId = k, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => a.a.createElement(I, {
						activeOverflowMenuId: this.props.activeOverflowMenuId,
						decreaseSubredditNotifications: this.props.decreaseSubredditNotifications,
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
						} = this.props, n = !(!e || !e.length), i = !(!t || !t.length);
						return a.a.createElement(a.a.Fragment, null, i && a.a.createElement(j, null, S._("Today", null, {
							hk: "2FZ72w"
						})), i && a.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && a.a.createElement(j, null, S._("Earlier", null, {
							hk: "1p7PDF"
						})), n && a.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
					}
				}
				componentDidMount() {
					this.props.updateInboxActivitySeenState(), this.props.sendEvent(Object(C.t)({
						badgeCount: this.props.inboxBadgeCount,
						tab: C.f.Activity
					}))
				}
				render() {
					const {
						hasNextPage: e,
						earlierNotifications: t,
						isPending: n,
						todayNotifications: i,
						userId: s
					} = this.props, r = !!((t && t.length || 0) + (i && i.length));
					return a.a.createElement(a.a.Fragment, null, s && a.a.createElement(y, {
						userId: s
					}), a.a.createElement("div", {
						className: N.a.notificationsContainer
					}, !r && n && a.a.createElement(x.a, null), !r && !n && a.a.createElement(O.a, null), r && this.renderNotifications(), r && !n && e && a.a.createElement(g.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: L
					}, a.a.createElement("div", null))))
				}
			}
			var T = Object(r.c)(w),
				F = n("./src/reddit/selectors/appBadges.ts"),
				P = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				A = n("./src/reddit/selectors/notificationsInbox.tsx"),
				M = n("./src/reddit/selectors/tooltip.ts"),
				U = n("./src/reddit/selectors/user.ts");
			const R = Object(l.c)({
				activeOverflowMenuId: M.a,
				cursor: A.c,
				earlierNotifications: A.b,
				hasNextPage: A.d,
				inboxBadgeCount: F.h,
				isInboxPostEmbedEnabled: P.a,
				isPending: A.e,
				todayNotifications: A.i,
				userId: U.Fb
			});
			var B = Object(d.b)(R, e => ({
					clearMessageTabBadgeCount: () => e(Object(u.b)()),
					decreaseSubredditNotifications: (t, n) => e(Object(b.d)({
						subredditId: t,
						notificationLevel: p.c.LOW,
						undoCallback: n
					})),
					disableNotificationUpdates: t => e(Object(m.c)(t)),
					blockAwarder: t => e(Object(m.a)(t)),
					fetchNotifications: t => e(Object(m.d)(t)),
					hideNotification: t => e(Object(m.b)(t)),
					hideSubredditNotifications: (t, n) => e(Object(m.f)(t, n)),
					markNotificationAsRead: (t, n) => e(Object(m.h)(t, n)),
					setActiveOverflowMenuId: t => {
						e(Object(f.h)({
							tooltipId: t
						}))
					},
					updateInboxActivitySeenState: () => e(Object(m.j)())
				}))(T),
				W = n("./node_modules/fbt/lib/FbtPublic.js"),
				H = n("./src/reddit/components/BadgeCounter/index.tsx"),
				J = n("./src/reddit/components/TabNav/index.tsx"),
				G = n("./src/reddit/controls/InternalLink/index.tsx"),
				z = n("./src/reddit/hooks/useTracking.ts"),
				Q = n("./src/reddit/icons/fonts/index.tsx"),
				D = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				q = n.n(D);
			const Y = h.a.wrapped(H.a, "Badge", q.a),
				X = h.a.wrapped(J.a, "Tab", q.a);
			var V = e => {
				const {
					messagesTabBadgeCount: t,
					notificationsTabBadgeCount: n
				} = e, i = Object(z.a)(), s = !!t;
				return a.a.createElement("div", {
					className: q.a.navContainer
				}, a.a.createElement("h1", {
					className: q.a.navHeader
				}, W.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), a.a.createElement("nav", {
					className: q.a.navBar
				}, a.a.createElement("ul", null, a.a.createElement("li", null, a.a.createElement(X, {
					active: !0,
					to: "/notifications"
				}, W.fbt._("Activity", null, {
					hk: "24wHCv"
				}), a.a.createElement(Y, {
					isActive: !!n,
					unreadCount: n
				}))), a.a.createElement("li", null, a.a.createElement(X, {
					active: !1,
					onMouseDown: () => {
						i(Object(C.t)({
							badgeCount: t + n,
							tab: C.f.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: s ? "/message/unread" : "/message/messages"
				}, W.fbt._("Messages", null, {
					hk: "Xl3Wz"
				}), a.a.createElement(Y, {
					isActive: s,
					unreadCount: t
				}))), a.a.createElement("li", null, a.a.createElement("button", {
					className: q.a.navLink,
					onClick: () => {
						e.markAllAsRead(), i(Object(C.g)({
							isMiniInbox: !1
						}))
					}
				}, a.a.createElement(Q.a, {
					name: "mark_read",
					className: q.a.icon
				}), W.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), a.a.createElement("li", null, a.a.createElement(G.default, {
					className: q.a.navLink,
					onClick: () => i(Object(C.m)(C.c.Inbox)),
					to: "/settings/notifications"
				}, a.a.createElement(Q.a, {
					name: "settings",
					className: q.a.icon
				}), W.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const K = Object(l.c)({
				messagesTabBadgeCount: F.i,
				notificationsTabBadgeCount: F.a
			});
			var Z = Object(d.b)(K, e => ({
				clearMessageTabBadgeCount: () => e(Object(u.b)()),
				markAllAsRead: () => e(Object(m.g)())
			}))(e => a.a.createElement(V, e));
			const $ = Object(o.v)();
			class ee extends a.a.Component {
				render() {
					return a.a.createElement(s.a, null, a.a.createElement(c.a, {
						hideOnlyChildMargin: !0,
						content: a.a.createElement(B, null),
						disableFullscreen: !0,
						navBar: a.a.createElement(Z, null)
					}))
				}
			}
			t.default = $(Object(r.c)(ee))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.04f84b7b44c9bf2d3951.js.map