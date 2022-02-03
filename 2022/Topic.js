// https://www.redditstatic.com/desktop2x/Topic.2f864799eab6d88cd84c.js
// Retrieved at 2/3/2022, 4:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Topic"], {
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				i = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asTooltip.tsx"),
				d = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = a("./src/reddit/actions/preferences.ts"),
				u = a("./src/reddit/actions/tooltip.ts"),
				p = a("./src/reddit/components/TrackingHelper/index.tsx"),
				b = a("./src/reddit/constants/postLayout.ts"),
				h = a("./src/reddit/contexts/PageLayer/index.tsx"),
				x = a("./src/reddit/contexts/Tooltip.ts"),
				T = a("./src/reddit/controls/Dropdown/index.tsx"),
				_ = a("./src/reddit/controls/Dropdown/Row.tsx"),
				g = a("./src/reddit/icons/fonts/index.tsx"),
				v = a("./src/reddit/selectors/telemetry.ts"),
				E = a("./src/reddit/selectors/tooltip.ts"),
				f = a("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				S = a.n(f);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				L = "LayoutSwitch--picker",
				y = Object(c.a)(T.a),
				P = {
					[b.d.Card]: function(e) {
						return i.a.createElement(g.a, N({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return i.a.createElement(g.a, N({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return i.a.createElement(g.a, N({}, e, {
							name: "view_compact"
						}))
					}
				},
				O = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				j = Object(h.u)(),
				k = Object(o.c)({
					dropdownIsOpen: Object(E.b)(L),
					postLayout: h.R,
					redditStyle: h.D
				}),
				w = Object(r.b)(k, e => ({
					onListingLayoutChange: (t, a) => e(Object(m.y)(t, a)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: L
					}))
				}));
			class I extends i.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: a,
							sendEvent: s,
							subredditId: n
						} = this.props;
						t ? t(e) : (a(e, n), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(v.ab)(t),
							subreddit: Object(v.ib)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: a,
							onLayoutClick: s,
							postLayout: n
						} = this.props, r = a || b.e[n], o = e === r, c = P[e], l = O[e];
						return i.a.createElement(_.b, N({}, t, {
							className: Object(d.a)(S.a.LayoutItem, {
								[S.a.selected]: o,
								[S.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: S.a.LayoutItemIconWrapper,
							isSelected: o,
							noHover: o,
							onClick: o ? void 0 : () => this.changeLayout(e),
							textClassName: S.a.LayoutItemTextClassName
						}), i.a.createElement(c, {
							className: S.a.LayoutIcon,
							onClick: o ? void 0 : s,
							isFilled: o && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return i.a.createElement(y, N({}, e, {
							className: S.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: S.a.DropdownRow,
							rowIconClassName: S.a.DropdownRowIcon,
							rowSelectedClassName: S.a.DropdownRowSelected,
							tooltipId: L
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: a,
						postLayout: s
					} = this.props, n = t || b.e[s];
					return i.a.createElement("div", {
						className: Object(d.a)(S.a.Container, e),
						id: C
					}, i.a.createElement("div", {
						className: S.a.DropdownContainer,
						onClick: a
					}, this.renderItem(n, {
						id: L,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), i.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = j(w(Object(p.c)(Object(l.a)(I))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/reddit/components/PostList/index.tsx"),
				n = a("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(s.a)
		},
		"./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_3tJhQnCiKKw7zk005rnKPi",
				container: "_3tJhQnCiKKw7zk005rnKPi",
				Link: "_1UplSBT2HFX_QHDhVZMx8r",
				link: "_1UplSBT2HFX_QHDhVZMx8r",
				Name: "_36r6mQVhaj58SDTd9Wt-eY",
				name: "_36r6mQVhaj58SDTd9Wt-eY",
				IconContainer: "_1OzhHh5MZVj92UtAsjBwp5",
				iconContainer: "_1OzhHh5MZVj92UtAsjBwp5"
			}
		},
		"./src/reddit/components/RelatedTopicList/index.m.less": function(e, t, a) {
			e.exports = {
				RelatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				relatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				Title: "_5MwovlatIWVRLVWJt1vCL",
				title: "_5MwovlatIWVRLVWJt1vCL"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/lodash/values.js"),
				n = a.n(s),
				i = a("./node_modules/react/index.js"),
				r = a.n(i),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				d = a("./src/higherOrderComponents/makeAsync.tsx"),
				l = a("./src/lib/classNames/index.ts"),
				m = a("./src/lib/lessComponent.tsx"),
				u = a("./src/lib/loadWithRetries/index.ts"),
				p = a("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = a("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = a("./src/reddit/icons/svgs/Close/index.tsx"),
				x = a("./src/reddit/selectors/moderatorPermissions.ts"),
				T = a("./src/reddit/selectors/structuredStyles.ts"),
				_ = a("./src/reddit/selectors/userPrefs.ts"),
				g = a("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				v = a.n(g);
			const {
				fbt: E
			} = a("./node_modules/fbt/lib/FbtPublic.js"), f = m.a.div("BladeContainer", v.a), S = m.a.wrapped(h.a, "CloseIcon", v.a), N = m.a.div("LoadingTitleContainer", v.a), C = m.a.div("LoadingNavContainer", v.a), L = m.a.div("ShortLoadingNav", v.a), y = m.a.wrapped(b.a, "ThemedChevron", v.a), P = ({
				...e
			}) => r.a.createElement(f, null, r.a.createElement(S, null), r.a.createElement(p.k, null, r.a.createElement(p.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), r.a.createElement(p.o, null, r.a.createElement(N, null, r.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingTitle, e.isLoading && v.a.loading)
			})), r.a.createElement(C, null, r.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingNav, e.isLoading && v.a.loading)
			}), r.a.createElement(y, null)), r.a.createElement(C, null, r.a.createElement(L, null), r.a.createElement(y, null)), r.a.createElement(C, null, r.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingNav, e.isLoading && v.a.loading)
			}), r.a.createElement(y, null)), r.a.createElement(C, null, r.a.createElement(L, null), r.a.createElement(y, null)), r.a.createElement(C, null, r.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingNav, e.isLoading && v.a.loading)
			}), r.a.createElement(y, null))))), O = Object(d.a)({
				getComponent: () => Object(u.a)(() => Promise.all([a.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), a.e("StructuredStyles")]).then(a.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => r.a.createElement(P, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => r.a.createElement(P, {
					gradientType: "posts",
					isLoading: !0
				})
			}), j = Object(c.c)({
				isEditing: T.i,
				isSubscriptionsPinned: _.b,
				moderatorPermissions: x.m
			});
			t.a = Object(o.b)(j)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? r.a.createElement("div", {
					className: Object(l.a)(v.a.Container, e.isSubscriptionsPinned && v.a.isSubscriptionPinned)
				}, e.children, r.a.createElement(O, {
					subredditId: e.subredditId
				})) : r.a.createElement(i.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, a) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, a) {
			"use strict";
			a.d(t, "k", (function() {
				return r
			})), a.d(t, "p", (function() {
				return o
			})), a.d(t, "n", (function() {
				return c
			})), a.d(t, "o", (function() {
				return d
			})), a.d(t, "m", (function() {
				return l
			})), a.d(t, "l", (function() {
				return m
			})), a.d(t, "f", (function() {
				return u
			})), a.d(t, "h", (function() {
				return p
			})), a.d(t, "a", (function() {
				return b
			})), a.d(t, "g", (function() {
				return h
			})), a.d(t, "i", (function() {
				return x
			})), a.d(t, "e", (function() {
				return T
			})), a.d(t, "b", (function() {
				return _
			})), a.d(t, "c", (function() {
				return g
			})), a.d(t, "d", (function() {
				return v
			})), a.d(t, "j", (function() {
				return E
			}));
			var s = a("./src/lib/lessComponent.tsx"),
				n = a("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = a.n(n);
			const r = s.a.section("FormPage", i.a),
				o = s.a.h1("HomePageTitle", i.a),
				c = s.a.button("HomePageBreadcrumb", i.a),
				d = s.a.div("HomePageGroup", i.a),
				l = s.a.h1("FormPageTitle", i.a),
				m = s.a.div("FormPageSection", i.a),
				u = s.a.div("FormGroup", i.a),
				p = s.a.h2("FormGroupTitle", i.a),
				b = s.a.div("FormElement", i.a),
				h = s.a.div("FormGroupDescription", i.a),
				x = s.a.div("FormItem", i.a),
				T = s.a.h3("FormElementTitle", i.a),
				_ = s.a.div("FormElementDescription", i.a),
				g = s.a.div("FormElementError", i.a),
				v = s.a.div("FormElementSubGroup", i.a),
				E = s.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_1wPkPx87vMrQd9QW79-Ar7",
				container: "_1wPkPx87vMrQd9QW79-Ar7",
				SubscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				subscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				Icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				placeholder: "_3D4_gGvFd4EDWKz4ueGNqu",
				Text: "_1O31lH4tpbJwYBKW2NmwXi",
				text: "_1O31lH4tpbJwYBKW2NmwXi",
				Link: "_3IPnsAjx27sBpv53euPc2G",
				link: "_3IPnsAjx27sBpv53euPc2G",
				Name: "_34EJPxBGGouPQbmc0Z-LmB",
				name: "_34EJPxBGGouPQbmc0Z-LmB",
				Members: "_106YuYJJ3FE95a4NDxNg6k",
				members: "_106YuYJJ3FE95a4NDxNg6k",
				hidden: "_2zUZgN0OEXf0LMxsR-7L6l"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, a) {
			e.exports = {
				Title: "_3T1Jtiyqnd1l1V9fcLf20J",
				title: "_3T1Jtiyqnd1l1V9fcLf20J",
				SubredditList: "_34o8T80OdRMyo2wr1IA3t6",
				subredditList: "_34o8T80OdRMyo2wr1IA3t6",
				Subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				SeeMore: "_24xqgM4izvcvOOe3qlOjF",
				seeMore: "_24xqgM4izvcvOOe3qlOjF"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = a("./src/reddit/components/SEOTitle/index.tsx"),
				d = a("./src/reddit/components/TrackingHelper/index.tsx"),
				l = a("./src/reddit/controls/Button/index.tsx"),
				m = a("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				u = a("./src/reddit/models/DiscoveryUnit/index.ts"),
				p = a("./node_modules/fbt/lib/FbtPublic.js"),
				b = a("./node_modules/react-redux/es/index.js"),
				h = a("./node_modules/reselect/es/index.js"),
				x = a("./src/lib/prettyPrintNumber/index.ts"),
				T = a("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = a("./src/reddit/components/SubscribeButton/index.tsx"),
				g = a("./src/reddit/constants/posts.ts"),
				v = a("./src/reddit/controls/InternalLink/index.tsx"),
				E = a("./src/reddit/helpers/name/index.ts"),
				f = a("./src/reddit/helpers/widgets/index.tsx"),
				S = a("./src/reddit/selectors/subreddit.ts"),
				N = a("./src/reddit/selectors/user.ts"),
				C = a("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				L = a.n(C);
			const y = Object(h.c)({
				isLoggedIn: N.K,
				subreddit: S.R,
				subredditAboutInfo: S.s
			});
			class P extends n.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: a,
							subredditAboutInfo: s
						} = this.props;
						if (!a) return;
						const n = Object(f.c)(a, s);
						t(Object(m.o)(e, n))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: a
					} = this.props;
					return a ? n.a.createElement("div", {
						className: Object(r.a)(L.a.Container, e)
					}, n.a.createElement(T.b, {
						className: L.a.Icon,
						subredditOrProfile: a
					}), n.a.createElement("div", {
						className: L.a.Text
					}, n.a.createElement(v.a, {
						className: L.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: a.url
					}, n.a.createElement("div", {
						className: L.a.Name
					}, Object(E.c)(a.displayText || a.name)), n.a.createElement("div", {
						className: L.a.Members
					}, p.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [p.fbt._plural(a.subscribers, "subscribers count", Object(x.b)(a.subscribers))], {
						hk: "48BXj1"
					})))), n.a.createElement(_.a, {
						border: !1,
						className: Object(r.a)(L.a.SubscribeButton, {
							[L.a.hidden]: !t
						}),
						identifier: {
							name: a.name,
							type: g.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var O = Object(b.b)(y)(Object(d.c)(P)),
				j = a("./src/reddit/helpers/styles/mixins/loading.ts");
			var k = e => {
					const {
						className: t
					} = e, a = Object(j.b)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: Object(r.a)(L.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(r.a)(L.a.Icon, L.a.placeholder, a)
					}), n.a.createElement("div", {
						className: L.a.Text
					}, n.a.createElement("div", {
						className: L.a.Link
					}, n.a.createElement("div", {
						className: Object(r.a)(L.a.Name, L.a.placeholder, a)
					}), n.a.createElement("div", {
						className: Object(r.a)(L.a.Members, L.a.placeholder, a)
					}))), n.a.createElement("div", {
						className: L.a.SubscribeButton
					}))
				},
				w = a("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = a.n(w);
			const {
				fbt: R
			} = a("./node_modules/fbt/lib/FbtPublic.js"), F = 8, W = Array.from({
				length: F
			}).map((e, t) => n.a.createElement(k, {
				className: I.a.Subreddit,
				key: t
			})), H = {
				enabled: !0,
				id: "xd_103",
				layout: u.c.Large,
				surface: u.d.Topic,
				unitName: u.h,
				unitType: u.e.SubredditListing,
				url: ""
			};
			class D extends n.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(m.x)(H)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: a
					} = this.props, s = t.slice(0, F);
					return n.a.createElement(o.a, {
						className: Object(r.a)(I.a.Container, e)
					}, n.a.createElement("div", {
						className: I.a.Title
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), n.a.createElement("div", {
						className: I.a.SubredditList
					}, s.length > 0 ? s.map(e => n.a.createElement(O, {
						className: I.a.Subreddit,
						discoveryUnit: H,
						key: e,
						subredditId: e
					})) : W), t.length > F && n.a.createElement(i.a, {
						to: a
					}, n.a.createElement(l.r, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(D)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, a) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/reddit/components/SidebarContainer/index.tsx"),
				r = a("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				o = a("./src/reddit/components/TopicSidebar/index.m.less"),
				c = a.n(o);
			t.a = e => {
				const {
					children: t,
					className: a
				} = e;
				return n.a.createElement(i.a, {
					className: a
				}, t, n.a.createElement(r.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = n.a.createContext({})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, a) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, a) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return d
			})), a.d(t, "a", (function() {
				return l
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				i = a.n(n),
				r = a("./src/reddit/controls/Button/index.tsx"),
				o = a("./src/reddit/pages/ErrorPages/index.m.less"),
				c = a.n(o);
			const d = ({
					message: e
				}) => i.a.createElement("div", {
					className: c.a.container
				}, i.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), i.a.createElement(r.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => i.a.createElement("div", {
					className: c.a.container
				}, i.a.createElement("h3", {
					className: c.a.title
				}, e || s.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), i.a.createElement(r.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/Topic/Relationship/index.m.less": function(e, t, a) {
			e.exports = {
				SeeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				seeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				TopicName: "dJ3xe2Nf-vhZ6EYI5mouf",
				topicName: "dJ3xe2Nf-vhZ6EYI5mouf"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_3oYTbP0ZV-MANTieSFQJh4",
				container: "_3oYTbP0ZV-MANTieSFQJh4",
				Icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				Text: "_2Q3cQEpLSLir19P36HjMsM",
				text: "_2Q3cQEpLSLir19P36HjMsM",
				Link: "_2WjUac0CWJTaeqSTapZxRS",
				link: "_2WjUac0CWJTaeqSTapZxRS",
				Name: "_2wytGTWEsoZfbD_7szYe7p",
				name: "_2wytGTWEsoZfbD_7szYe7p",
				Meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				Members: "wipHspsmXyJJfAajdJPON",
				members: "wipHspsmXyJJfAajdJPON",
				About: "_3qHKAeck1ZFLJpNms-2TDT",
				about: "_3qHKAeck1ZFLJpNms-2TDT",
				VisitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				visitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				SubscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				subscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				hidden: "_2s4ITweJE8SSEgLGNY1LCw"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/index.m.less": function(e, t, a) {
			e.exports = {
				SubredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				subredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				Subreddit: "JJ2QSl-i_fI5G_NYIXnSe",
				subreddit: "JJ2QSl-i_fI5G_NYIXnSe"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less": function(e, t, a) {
			e.exports = {
				RelationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				relationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				"m-active": "_1SmckvvCqb57y8BYkTM8ew",
				mActive: "_1SmckvvCqb57y8BYkTM8ew"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/index.m.less": function(e, t, a) {
			e.exports = {
				TabHeader: "a44uJVg_2f6Tls24pgm7O",
				tabHeader: "a44uJVg_2f6Tls24pgm7O",
				TabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q",
				tabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less": function(e, t, a) {
			e.exports = {
				Tab: "zB167v8VzkVM9pUFETGba",
				tab: "zB167v8VzkVM9pUFETGba",
				ActiveTab: "_1jUOuw0_aUnqYgs8j-VWYa",
				activeTab: "_1jUOuw0_aUnqYgs8j-VWYa"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_ZTq8EBsRouOv-sGGDFEG",
				container: "_ZTq8EBsRouOv-sGGDFEG",
				Content: "_1gOnjMfh6AZJPpWVWm4hdl",
				content: "_1gOnjMfh6AZJPpWVWm4hdl",
				cardWidth: "kt6mctm16gX4BAz4UkP7F",
				fullWidth: "_13SEe8eTugXMSewCNKUSur",
				Header: "_6HVKzUwnWtxEz7ZXIZ52z",
				header: "_6HVKzUwnWtxEz7ZXIZ52z",
				Title: "_3xUDHcNgeNVz7fD8H1kUy7",
				title: "_3xUDHcNgeNVz7fD8H1kUy7",
				Subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				Tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				link: "_28pKATphngn0NYq1jxqIW2",
				"parent-related-topics": "_1b2AsSM880_ExPtu4kLbtn",
				parentRelatedTopics: "_1b2AsSM880_ExPtu4kLbtn"
			}
		},
		"./src/reddit/pages/Topic/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_34DPWmU2xtTM5k6LzxRyBK",
				container: "_34DPWmU2xtTM5k6LzxRyBK",
				SidebarRight: "xN-Lax46afWDvxNsgO_qV",
				sidebarRight: "xN-Lax46afWDvxNsgO_qV",
				TopicTab: "_1w8swivzpCaiRZVhoHJCf2",
				topicTab: "_1w8swivzpCaiRZVhoHJCf2",
				active: "ADUh7gkavNOAWKFsG3XAh",
				WidgetsContainer: "_XJz3g54OuK0zp0Pm8QcB",
				widgetsContainer: "_XJz3g54OuK0zp0Pm8QcB"
			}
		},
		"./src/reddit/pages/Topic/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./node_modules/reselect/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/constants/index.ts"),
				c = a("./src/lib/makeListingKey/index.ts"),
				d = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/reddit/actions/pages/topic.ts"),
				m = a("./src/reddit/components/ListingPostList/index.tsx"),
				u = a("./src/reddit/controls/InternalLink/index.tsx"),
				p = a("./src/reddit/icons/svgs/Search/index.tsx"),
				b = a("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				h = a.n(b);
			var x = e => {
					const {
						topic: t
					} = e;
					return n.a.createElement("span", {
						className: h.a.Container
					}, n.a.createElement(u.a, {
						className: h.a.Link,
						title: t.name,
						to: t.url
					}, n.a.createElement("span", {
						className: h.a.IconContainer
					}, n.a.createElement(p.a, null)), n.a.createElement("span", {
						className: h.a.Name
					}, t.namePlural)))
				},
				T = a("./src/reddit/components/SEOTitle/index.tsx"),
				_ = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = a("./src/reddit/components/RelatedTopicList/index.m.less"),
				v = a.n(g);

			function E(e) {
				const {
					children: t,
					limit: a,
					title: s,
					topics: i
				} = e;
				return i.length ? n.a.createElement(_.a, {
					className: v.a.Container
				}, s && n.a.createElement("div", {
					className: v.a.Title
				}, n.a.createElement(T.b, {
					type: T.a.Widget
				}, s)), n.a.createElement("div", {
					className: v.a.RelatedTopicList
				}, i.slice(0, a).map(e => n.a.createElement(x, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var f = a("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				S = a("./src/reddit/components/TopicSidebar/index.tsx"),
				N = a("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				C = a("./src/reddit/constants/listings.ts"),
				L = a("./src/reddit/constants/postLayout.ts"),
				y = a("./src/reddit/contexts/PageLayer/index.tsx"),
				P = a("./src/reddit/helpers/trackers/screenview.ts"),
				O = a("./src/reddit/layout/page/Listing/index.tsx"),
				j = a("./src/reddit/pages/ErrorPages/index.tsx"),
				k = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = a("./src/reddit/controls/Button/index.tsx"),
				I = a("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				R = a.n(I);
			class F extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							onTabClick: e,
							tab: t
						} = this.props;
						e(t)
					}
				}
				render() {
					const {
						activeTab: e,
						children: t,
						tab: a,
						tabs: s
					} = this.props;
					return s.includes(a) ? n.a.createElement("div", {
						className: Object(r.a)(R.a.Tab, {
							[R.a.ActiveTab]: a === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var W = F,
				H = a("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				D = a.n(H);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: B
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var M;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(M || (M = {}));
			class A extends n.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? n.a.createElement("ul", {
						className: D.a.parentRelatedTopics
					}, e.map(({
						namePlural: e,
						url: t
					}, a) => n.a.createElement("li", {
						key: a
					}, n.a.createElement(u.a, {
						className: D.a.link,
						to: t
					}, e)))) : B._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: a,
						onTabClick: s,
						tabs: i,
						topicName: o
					} = this.props, c = {
						activeTab: e,
						onTabClick: s,
						tabs: i
					};
					return n.a.createElement("div", {
						className: Object(r.a)(D.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(r.a)(D.a.Content, a === L.g.Large ? D.a.cardWidth : D.a.fullWidth)
					}, n.a.createElement("div", {
						className: D.a.Header
					}, n.a.createElement("div", {
						className: D.a.Title
					}, n.a.createElement(T.b, {
						type: T.a.TopicHeader
					}, o)), n.a.createElement("div", {
						className: D.a.Subtitle
					}, this.renderSubtitleContent())), n.a.createElement("div", {
						className: D.a.Tabs
					}, n.a.createElement(W, J({
						tab: M.Posts
					}, c), B._("Posts", null, {
						hk: "3RLrle"
					})), n.a.createElement(W, J({
						tab: M.Communities
					}, c), B._("Communities", null, {
						hk: "KIwd1"
					})), n.a.createElement(W, J({
						tab: M.RelatedTopics
					}, c), B._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var G = A,
				z = a("./src/reddit/pages/Topic/Relationship/index.m.less"),
				U = a.n(z);
			const {
				fbt: Y
			} = a("./node_modules/fbt/lib/FbtPublic.js"), V = 5;
			class Q extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(M.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return n.a.createElement(E, {
						limit: V,
						title: e,
						topics: t
					}, this.renderSeeMoreButton())
				}
				renderSeeMoreButton() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return t.length < V ? null : n.a.createElement(k.a, {
						onClick: this.onClick,
						to: "#"
					}, n.a.createElement(w.r, {
						className: U.a.SeeAllRelatedTopics
					}, Y._("See all {=[Topic name plural]}", [Y._param("=[Topic name plural]", n.a.createElement("span", {
						className: U.a.TopicName
					}, Y._("{Topic name plural}", [Y._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var K = Q,
				q = a("./src/lib/prettyPrintNumber/index.ts"),
				Z = a("./src/reddit/components/Flair/index.tsx"),
				X = a("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = a("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = a("./src/reddit/constants/posts.ts"),
				te = a("./src/reddit/helpers/name/index.ts"),
				ae = a("./src/reddit/models/Flair/index.ts"),
				se = a("./src/reddit/selectors/subreddit.ts"),
				ne = a("./src/reddit/selectors/user.ts"),
				ie = a("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				re = a.n(ie);
			const {
				fbt: oe
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(i.c)({
				isLoggedIn: ne.K,
				subreddit: se.R,
				subredditAboutInfo: (e, {
					subredditId: t
				}) => e.subreddits.about[t]
			}), de = Object(d.b)(ce), le = {
				text: "nsfw",
				type: ae.f.Nsfw
			};
			var me = de(e => {
					const {
						className: t,
						isLoggedIn: a,
						subreddit: s,
						subredditAboutInfo: i
					} = e, o = Object(te.c)(s.displayText || s.name);
					return n.a.createElement("div", {
						className: Object(r.a)(re.a.Container, t)
					}, n.a.createElement(X.b, {
						className: re.a.Icon,
						subredditOrProfile: s
					}), n.a.createElement("div", {
						className: re.a.Text
					}, n.a.createElement(u.a, {
						className: re.a.Link,
						to: s.url
					}, n.a.createElement("div", {
						className: re.a.Name
					}, o), n.a.createElement("div", {
						className: re.a.Meta
					}, n.a.createElement("div", {
						className: re.a.Members
					}, oe._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [oe._plural(s.subscribers, "subscribers count", Object(q.b)(s.subscribers))], {
						hk: "48BXj1"
					})), s.isNSFW && n.a.createElement(Z.b, {
						flair: le
					}))), n.a.createElement("div", {
						className: re.a.About
					}, i.publicDescription || oe._("Welcome to {subreddit name}", [oe._param("subreddit name", o)], {
						hk: "vZ7VH"
					})), n.a.createElement(u.a, {
						className: re.a.VisitLink,
						to: s.url
					}, oe._("Visit", null, {
						hk: "2z3clp"
					}))), n.a.createElement($.a, {
						className: Object(r.a)(re.a.SubscribeButton, {
							[re.a.hidden]: !a
						}),
						identifier: {
							name: s.name,
							type: ee.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				ue = a("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				pe = a.n(ue);

			function be(e) {
				const {
					subredditIds: t = []
				} = e;
				return n.a.createElement("div", {
					className: pe.a.SubredditList
				}, t.map(e => n.a.createElement(me, {
					className: pe.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var he = a("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				xe = a("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				Te = a.n(xe);
			class _e extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(M.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: a
					} = this.props, s = a === e;
					return n.a.createElement("div", {
						className: Object(r.a)(Te.a.RelationshipTab, {
							[Te.a.mActive]: s
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var ge = _e,
				ve = a("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				Ee = a.n(ve);
			const {
				fbt: fe
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class Se extends n.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: a,
							onTabClick: s
						} = this.props;
						return n.a.createElement(ge, {
							activeIndex: a,
							index: t,
							key: e.slug,
							onTabClick: s,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => n.a.createElement("div", {
						className: Ee.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === M.Posts ? fe._("Posts about {topic name}", [fe._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === M.Communities ? fe._("Communities related to {topic name}", [fe._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, a = t === M.Posts;
					return t === M.RelatedTopics ? this.renderRelatedTopicsHeader() : n.a.createElement("div", {
						className: Ee.a.TabHeader
					}, n.a.createElement("div", {
						className: Ee.a.TabTitle
					}, n.a.createElement(T.b, {
						type: T.a.Widget
					}, this.renderTitle())), a && n.a.createElement(he.a, {
						className: Ee.a.PostsLayoutSwitch,
						layout: L.e[e]
					}))
				}
			}
			var Ne = Se,
				Ce = a("./src/reddit/selectors/topic.ts"),
				Le = a("./src/reddit/pages/Topic/index.m.less"),
				ye = a.n(Le);
			const {
				fbt: Pe
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Oe = Object(y.u)(), je = (e, t) => t.match.params.sort || o.X, ke = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(M.Posts), e.hasSubreddits && t.push(M.Communities), e.childRelationships.length && t.push(M.RelatedTopics), t) : t
			}, we = Object(d.b)(() => Object(i.a)((e, t) => Object(Ce.d)(e, t.match.params.topicSlug), (e, t) => Object(Ce.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), y.R, je, e => {
				var t;
				return null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status
			}, (e, t, a, s, n, i, r, o) => ({
				layout: i,
				parentRelatedTopics: s,
				siblingRelatedTopics: n,
				sort: r,
				status: o || 200,
				tabs: ke(a),
				timeSort: void 0,
				topic: a,
				topicName: e,
				topicNamePlural: t
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.morePostsRequested)(t.match.params))
			})), Ie = (e, t) => e === M.Communities ? L.g.Large : t;
			class Re extends n.a.Component {
				constructor(e) {
					super(e), this.openTab = (e, t = 0) => {
						this.setState({
							activeLayout: Ie(e, this.props.layout),
							activeRelationshipIndex: t,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(M.Communities)
					}, this.onViewed = (e, t) => {
						var a;
						return Object(P.f)({
							key: Object(c.a)(C.b.Topic, null, {
								topicSlug: null === (a = this.props.topic) || void 0 === a ? void 0 : a.slug
							}),
							sort: this.props.sort,
							timerType: t,
							timerMillis: e,
							timeSort: this.props.timeSort
						})
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => n.a.createElement(K, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: L.g.Large,
						activeRelationshipIndex: 0,
						activeTab: void 0
					}
				}
				static getDerivedStateFromProps(e, t) {
					const a = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						s = e.pageLayer && e.pageLayer.queryParams.activeTab,
						n = s && e.tabs.includes(s) && s,
						i = e.tabs[0],
						r = a || n || i;
					return {
						activeLayout: Ie(r, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: r
					}
				}
				componentDidUpdate(e) {
					var t, a, s;
					const n = null === (t = e.topic) || void 0 === t ? void 0 : t.id,
						i = null === (a = this.props.topic) || void 0 === a ? void 0 : a.id;
					n && i !== (null === (s = e.topic) || void 0 === s ? void 0 : s.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: a,
						siblingRelatedTopics: s,
						status: i,
						tabs: o,
						topic: d,
						topicName: l,
						topicNamePlural: u
					} = this.props, p = t.params.topicSlug, b = Object(c.a)(C.b.Topic, null, {
						topicSlug: p
					}), {
						activeLayout: h,
						activeRelationshipIndex: x,
						activeTab: T
					} = this.state, _ = C.b.Topic;
					if (404 === i) return n.a.createElement(j.b, null);
					if (500 === i) return n.a.createElement(j.b, {
						message: Pe._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!d) return null;
					const g = d.childRelationships[x],
						v = g && g.relatedTopics || [],
						L = n.a.createElement(n.a.Fragment, null, n.a.createElement(Ne, {
							activeLayout: h,
							activeRelationshipIndex: x,
							activeTab: T,
							onTabClick: this.openTab,
							topic: d,
							topicName: l,
							topicNamePlural: u
						}), n.a.createElement("div", {
							className: Object(r.a)(ye.a.TopicTab, {
								[ye.a.active]: T === M.Communities
							})
						}, n.a.createElement(be, {
							subredditIds: d.subredditIds
						})), n.a.createElement("div", {
							className: Object(r.a)(ye.a.TopicTab, {
								[ye.a.active]: T === M.Posts
							})
						}, T === M.Posts && n.a.createElement(m.a, {
							forcedLayout: h,
							listingKey: b,
							listingName: _,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), n.a.createElement("div", {
							className: Object(r.a)(ye.a.TopicTab, {
								[ye.a.active]: T === M.RelatedTopics
							})
						}, n.a.createElement(E, {
							topics: v
						}))),
						y = T !== M.RelatedTopics,
						P = T !== M.Communities && o.includes(M.Communities),
						k = n.a.createElement("div", {
							className: ye.a.WidgetsContainer
						}, P && n.a.createElement(N.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: d.subredditIds,
							topicUrl: d.url
						}), y && d.childRelationships.map(this.renderRelationship), n.a.createElement(E, {
							limit: 5,
							title: Pe._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: s
						}));
					return n.a.createElement(f.a, null, n.a.createElement(O.a, {
						className: Object(r.a)(ye.a.Container, e),
						content: L,
						fitPageToContent: !0,
						forcedLayout: h,
						sidebars: [null, n.a.createElement(S.a, {
							key: "right",
							className: ye.a.SidebarRight,
							listingName: _
						}, k)],
						navBar: n.a.createElement(G, {
							activeTab: T,
							layout: h,
							onTabClick: this.openTab,
							parentRelatedTopics: a,
							tabs: o,
							topicName: l
						})
					}))
				}
			}
			t.default = Oe(we(Re))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.2f864799eab6d88cd84c.js.map