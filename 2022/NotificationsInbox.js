// https://www.redditstatic.com/desktop2x/NotificationsInbox.a441e8c36a74f5dc3f08.js
// Retrieved at 3/28/2022, 10:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return f
			}));
			var i = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/pageTitle/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/notificationsInbox/index.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				l = n("./src/reddit/routes/notificationsInbox/index.ts"),
				u = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				m = n("./src/reddit/selectors/notificationsInbox.tsx"),
				b = n("./src/reddit/selectors/user.ts");
			const f = () => async (e, t) => {
				const n = t();
				if (!(Object(b.P)(n) || Object(b.O)(n))) return Object(d.a)(e, n);
				Object(u.b)(n) ? (e(p()), e(g()), await e(h())) : e(Object(i.c)("/"))
			}, p = () => Object(a.k)({
				actionSource: a.a.NotificationsInbox,
				redirectUrl: l.b
			}), g = () => o.m({
				title: Object(s.h)()
			}), h = () => async (e, t) => {
				const n = t(),
					i = Object(m.g)(t()),
					s = !(!i || !i.length),
					a = Object(b.P)(n) || Object(b.O)(n);
				if (s || !a || !Object(u.b)(n)) return;
				const o = {
					first: 10
				};
				await e(Object(c.t)()), e(Object(r.d)(o))
			}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = n("./src/reddit/actions/notificationsInbox/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(o.u),
				b = Object(s.a)(o.t),
				f = Object(s.a)(o.s),
				p = e => {
					switch (e) {
						case l.b.OFF:
							return i.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return i.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return i.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = ({
				subredditId: e,
				notificationLevel: t,
				successCallback: n,
				undoCallback: s
			}) => async (o, g, {
				gqlContext: h
			}) => {
				var v, x, C;
				o(b());
				const E = (e => {
						switch (e) {
							case l.b.FREQUENT:
								return {
									isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
								};
							case l.b.LOW:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
								};
							case l.b.OFF:
							default:
								return {
									isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
								}
						}
					})(t),
					_ = await Object(d.b)(h(), e, E);
				if ((null === (x = null === (v = _.error) || void 0 === v ? void 0 : v.fields) || void 0 === x ? void 0 : x.length) || function(e) {
						return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
					}(_.body) && (null === (C = _.body.data.updateSubredditNotificationSettings.errors) || void 0 === C ? void 0 : C.length)) return o(f()), o(Object(c.f)({
					kind: u.b.Error,
					text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				_.ok && (o(Object(a.c)({
					subredditId: e,
					notificationLevel: t
				})), o(m({
					subredditAboutInfo: {
						[e]: {
							notificationLevel: t
						}
					}
				})), n && n(), o(s ? Object(c.f)(Object(c.e)(p(t), u.b.Undo, i.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(r.i)(e, s))) : Object(c.f)(Object(c.e)(p(t), u.b.SuccessCommunityGreen))))
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
				s = n.n(i),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", C.a), N = u.a.wrapped(p.a, "CloseIcon", C.a), O = u.a.div("LoadingTitleContainer", C.a), y = u.a.div("LoadingNavContainer", C.a), k = u.a.div("ShortLoadingNav", C.a), j = u.a.wrapped(f.a, "ThemedChevron", C.a), S = ({
				...e
			}) => r.a.createElement(_, null, r.a.createElement(N, null), r.a.createElement(b.k, null, r.a.createElement(b.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), r.a.createElement(b.o, null, r.a.createElement(O, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingTitle, e.isLoading && C.a.loading)
			})), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingNav, e.isLoading && C.a.loading)
			}), r.a.createElement(j, null)), r.a.createElement(y, null, r.a.createElement(k, null), r.a.createElement(j, null)), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingNav, e.isLoading && C.a.loading)
			}), r.a.createElement(j, null)), r.a.createElement(y, null, r.a.createElement(k, null), r.a.createElement(j, null)), r.a.createElement(y, null, r.a.createElement("div", {
				className: Object(l.a)(C.a.LoadingNav, e.isLoading && C.a.loading)
			}), r.a.createElement(j, null))))), L = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => r.a.createElement(S, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => r.a.createElement(S, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(c.c)({
				isEditing: h.i,
				isSubscriptionsPinned: v.b,
				moderatorPermissions: g.m
			});
			t.a = Object(o.b)(I)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? r.a.createElement("div", {
					className: Object(l.a)(C.a.Container, e.isSubscriptionsPinned && C.a.isSubscriptionPinned)
				}, e.children, r.a.createElement(L, {
					subredditId: e.subredditId
				})) : r.a.createElement(a.Fragment, null, e.children)
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
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(s);
			const r = i.a.section("FormPage", a.a),
				o = i.a.h1("HomePageTitle", a.a),
				c = i.a.button("HomePageBreadcrumb", a.a),
				d = i.a.div("HomePageGroup", a.a),
				l = i.a.h1("FormPageTitle", a.a),
				u = i.a.div("FormPageSection", a.a),
				m = i.a.div("FormGroup", a.a),
				b = i.a.h2("FormGroupTitle", a.a),
				f = i.a.div("FormElement", a.a),
				p = i.a.div("FormGroupDescription", a.a),
				g = i.a.div("FormItem", a.a),
				h = i.a.h3("FormElementTitle", a.a),
				v = i.a.div("FormElementDescription", a.a),
				x = i.a.div("FormElementError", a.a),
				C = i.a.div("FormElementSubGroup", a.a),
				E = i.a.li("FormListItem", a.a)
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
			var i, s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
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
				_ = l.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...i
				}) => o.a.createElement(b.a, h({}, i, {
					"aria-selected": e,
					className: Object(c.a)(i.className, {
						[g.a.mIsActive]: e,
						[g.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", g.a),
				N = e => {
					switch (e) {
						case i.GEAR:
							return o.a.createElement(v, null);
						default:
							return null
					}
				},
				O = () => window.pageYOffset || window.scrollY,
				y = 75,
				k = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: m.f
				};
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = a()(() => {
						this.state.sticky || this.forceUnsticky ? O() < y && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : O() >= y && this.setState({
							sticky: !0
						})
					}, d.K), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? k : void 0
					}, this.props.children))
				}
			}
			t.c = j
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var i = n("./node_modules/react/index.js");

			function s() {
				const [e, t] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(o.a.chevron, e.className),
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
				s = n.n(i),
				a = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
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
				E = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx"),
				_ = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				N = n("./src/reddit/hooks/useIsClient.ts"),
				O = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				y = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				k = n.n(y);
			const j = e => {
				const t = Object(d.e)(O.e),
					n = Object(N.a)(),
					[i, a] = Object(_.a)(e.userId),
					r = t && !i;
				return n && r ? s.a.createElement("div", {
					className: k.a.notificationsBannersContainer
				}, r && s.a.createElement(E.a, {
					onClose: a,
					pageType: C.c.Inbox
				})) : null
			};
			var S = n("./src/reddit/pages/NotificationsInbox/Content/EmptyStateViews/EmptyStateComponent.tsx");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = "", w = .5, T = h.a.span("divider", k.a), P = h.a.wrapped(v.a, "NotificationUnit", k.a);
			class F extends s.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = I, this.todayDividerNotificationId = I, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => s.a.createElement(P, {
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
						return s.a.createElement(s.a.Fragment, null, i && s.a.createElement(T, null, L._("Today", null, {
							hk: "2FZ72w"
						})), i && s.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && s.a.createElement(T, null, L._("Earlier", null, {
							hk: "1p7PDF"
						})), n && s.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
					}
				}
				componentDidMount() {
					this.props.updateInboxActivitySeenState(), this.props.sendEvent(Object(C.v)({
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
						userId: a
					} = this.props, r = !!((t && t.length || 0) + (i && i.length));
					return s.a.createElement(s.a.Fragment, null, a && s.a.createElement(j, {
						userId: a
					}), s.a.createElement("div", {
						className: k.a.notificationsContainer
					}, !r && n && s.a.createElement(x.a, null), !r && !n && s.a.createElement(S.a, {
						isLoggedIn: !0
					}), r && this.renderNotifications(), r && !n && e && s.a.createElement(g.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: w
					}, s.a.createElement("div", null))))
				}
			}
			var A = Object(r.c)(F),
				M = n("./src/reddit/selectors/appBadges.ts"),
				U = n("./src/reddit/selectors/notificationsInbox.tsx"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				R = n("./src/reddit/selectors/user.ts");
			const W = Object(l.c)({
				activeOverflowMenuId: B.a,
				cursor: U.c,
				earlierNotifications: U.b,
				hasNextPage: U.d,
				inboxBadgeCount: M.g,
				isInboxPostEmbedEnabled: O.a,
				isPending: U.e,
				todayNotifications: U.i,
				userId: R.Ab
			});
			var H = Object(d.b)(W, e => ({
					clearMessageTabBadgeCount: () => e(Object(u.b)()),
					decreaseSubredditNotifications: (t, n) => e(Object(b.b)({
						subredditId: t,
						notificationLevel: p.b.LOW,
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
				}))(A),
				J = n("./node_modules/fbt/lib/FbtPublic.js"),
				G = n("./src/reddit/components/BadgeCounter/index.tsx"),
				z = n("./src/reddit/components/TabNav/index.tsx"),
				Q = n("./src/reddit/controls/InternalLink/index.tsx"),
				D = n("./src/reddit/hooks/useTracking.ts"),
				q = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				X = n.n(Y);
			const K = h.a.wrapped(G.a, "Badge", X.a),
				V = h.a.wrapped(z.a, "Tab", X.a);
			var Z = e => {
				const {
					messagesTabBadgeCount: t,
					notificationsTabBadgeCount: n
				} = e, i = Object(D.a)(), a = !!t;
				return s.a.createElement("div", {
					className: X.a.navContainer
				}, s.a.createElement("h1", {
					className: X.a.navHeader
				}, J.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), s.a.createElement("nav", {
					className: X.a.navBar
				}, s.a.createElement("ul", null, s.a.createElement("li", null, s.a.createElement(V, {
					active: !0,
					to: "/notifications"
				}, J.fbt._("Activity", null, {
					hk: "24wHCv"
				}), s.a.createElement(K, {
					isActive: !!n,
					unreadCount: n
				}))), s.a.createElement("li", null, s.a.createElement(V, {
					active: !1,
					onMouseDown: () => {
						i(Object(C.v)({
							badgeCount: t + n,
							tab: C.f.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: a ? "/message/unread" : "/message/messages"
				}, J.fbt._("Messages", null, {
					hk: "Xl3Wz"
				}), s.a.createElement(K, {
					isActive: a,
					unreadCount: t
				}))), s.a.createElement("li", null, s.a.createElement("button", {
					className: X.a.navLink,
					onClick: () => {
						e.markAllAsRead(), i(Object(C.i)({
							isMiniInbox: !1
						}))
					}
				}, s.a.createElement(q.a, {
					name: "mark_read",
					className: X.a.icon
				}), J.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), s.a.createElement("li", null, s.a.createElement(Q.a, {
					className: X.a.navLink,
					onClick: () => i(Object(C.o)(C.c.Inbox)),
					to: "/settings/notifications"
				}, s.a.createElement(q.a, {
					name: "settings",
					className: X.a.icon
				}), J.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const $ = Object(l.c)({
				messagesTabBadgeCount: M.h,
				notificationsTabBadgeCount: M.a
			});
			var ee = Object(d.b)($, e => ({
				clearMessageTabBadgeCount: () => e(Object(u.b)()),
				markAllAsRead: () => e(Object(m.g)())
			}))(e => s.a.createElement(Z, e));
			const te = Object(o.u)();
			class ne extends s.a.Component {
				render() {
					return s.a.createElement(a.a, null, s.a.createElement(c.a, {
						hideOnlyChildMargin: !0,
						content: s.a.createElement(H, null),
						disableFullscreen: !0,
						navBar: s.a.createElement(ee, null)
					}))
				}
			}
			t.default = te(Object(r.c)(ne))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.a441e8c36a74f5dc3f08.js.map