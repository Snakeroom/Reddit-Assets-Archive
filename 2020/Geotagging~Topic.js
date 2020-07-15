// https://www.redditstatic.com/desktop2x/Geotagging~Topic.0fc386955000dd94643e.js
// Retrieved at 7/15/2020, 12:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging~Topic"], {
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loadWithRetries/index.ts"),
				b = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				h = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = s.n(h),
				S = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = m.a.div("BladeContainer", E.a), y = m.a.wrapped(_.a, "CloseIcon", E.a), O = m.a.div("LoadingTitleContainer", E.a), j = m.a.div("LoadingNavContainer", E.a), C = m.a.div("ShortLoadingNav", E.a), L = m.a.wrapped(p.a, "ThemedChevron", E.a), T = e => {
				var t = S(e, []);
				return o.a.createElement(N, null, o.a.createElement(y, null), o.a.createElement(b.k, null, o.a.createElement(b.p, null, v._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(b.o, null, o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingTitle, t.isLoading && E.a.loading)
				})), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), o.a.createElement(L, null)), o.a.createElement(j, null, o.a.createElement(C, null), o.a.createElement(L, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), o.a.createElement(L, null)), o.a.createElement(j, null, o.a.createElement(C, null), o.a.createElement(L, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), o.a.createElement(L, null)))))
			}, P = Object(l.a)({
				getComponent: () => Object(u.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(T, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(T, {
					gradientType: "posts",
					isLoading: !0
				})
			}), B = Object(c.c)({
				isEditing: g.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: x.j
			});
			t.a = Object(i.b)(B)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(d.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(P, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return o
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return l
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "j", (function() {
				return S
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = s.n(n);
			const o = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				c = r.a.button("HomePageBreadcrumb", a.a),
				l = r.a.div("HomePageGroup", a.a),
				d = r.a.h1("FormPageTitle", a.a),
				m = r.a.div("FormPageSection", a.a),
				u = r.a.div("FormGroup", a.a),
				b = r.a.h2("FormGroupTitle", a.a),
				p = r.a.div("FormElement", a.a),
				_ = r.a.div("FormGroupDescription", a.a),
				x = r.a.div("FormItem", a.a),
				g = r.a.h3("FormElementTitle", a.a),
				f = r.a.div("FormElementDescription", a.a),
				h = r.a.div("FormElementError", a.a),
				E = r.a.div("FormElementSubGroup", a.a),
				S = r.a.li("FormListItem", a.a)
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
				return j
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const g = p.a.button("IconButton", u.a),
				f = p.a.wrapped(l.a, "SubscribeIcon", u.a),
				h = p.a.wrapped(c.a, "UnsubscribeIcon", u.a),
				E = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = x(e, ["border", "small"]);
					return a.a.createElement(g, r, a.a.createElement(f, {
						className: Object(b.a)(r.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", u.a),
				S = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = x(e, ["border", "small"]);
					return t ? a.a.createElement(i.f, _({}, r, {
						className: Object(b.a)(r.className, {
							[u.a.isSmall]: s
						})
					})) : a.a.createElement(i.n, _({}, r, {
						className: Object(b.a)(r.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", u.a),
				v = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? a.a.createElement(E, _({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : a.a.createElement(S, _({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				},
				N = p.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: r
					} = e, n = x(e, ["border", "small", "type"]);
					return a.a.createElement(g, n, a.a.createElement(h, {
						className: Object(b.a)(o.n, n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				y = p.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: n
					} = e, o = x(e, ["border", "small", "type"]);
					const c = a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === n ? r.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : r.fbt._("Following", null, {
							hk: "1wQlVR"
						})), a.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === n ? r.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : r.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(b.a)(o.className, {
							[u.a.isSmall]: s
						});
					return t ? a.a.createElement(i.i, _({}, o, {
						className: l,
						children: c
					})) : a.a.createElement(i.n, _({}, o, {
						className: l,
						children: c
					}))
				}, "UnsubscribeButton", u.a),
				O = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? a.a.createElement(N, _({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : a.a.createElement(y, _({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				};
			class j extends a.a.Component {
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
						small: n = !1
					} = this.props, o = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? a.a.createElement(O, _({}, o, {
						type: this.props.identifier.type
					})) : a.a.createElement(v, _({}, o, {
						id: r
					}), this.props.children, Object(d.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				a = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: s
					} = e;
					return a[n({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(a.a))
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				u = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./node_modules/react-redux/es/index.js"),
				_ = s("./node_modules/reselect/es/index.js"),
				x = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				j = s.n(O);
			const C = Object(_.c)({
				isLoggedIn: y.H,
				subreddit: N.R,
				subredditAboutInfo: N.w
			});
			class L extends n.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: r
						} = this.props;
						if (!s) return;
						const n = Object(v.i)(s, r);
						t(Object(m.t)(e, n))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? n.a.createElement("div", {
						className: Object(o.a)(j.a.Container, e)
					}, n.a.createElement(g.b, {
						className: j.a.Icon,
						subredditOrProfile: s
					}), n.a.createElement("div", {
						className: j.a.Text
					}, n.a.createElement(E.a, {
						className: j.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, n.a.createElement("div", {
						className: j.a.Name
					}, Object(S.b)(s.displayText || s.name)), n.a.createElement("div", {
						className: j.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(s.subscribers, "subscribers count", Object(x.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), n.a.createElement(f.a, {
						border: !1,
						className: Object(o.a)(j.a.SubscribeButton, {
							[j.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: h.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var T = Object(p.b)(C)(Object(l.c)(L)),
				P = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var B = e => {
					const {
						className: t
					} = e, s = Object(P.b)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: Object(o.a)(j.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(j.a.Icon, j.a.placeholder, s)
					}), n.a.createElement("div", {
						className: j.a.Text
					}, n.a.createElement("div", {
						className: j.a.Link
					}, n.a.createElement("div", {
						className: Object(o.a)(j.a.Name, j.a.placeholder, s)
					}), n.a.createElement("div", {
						className: Object(o.a)(j.a.Members, j.a.placeholder, s)
					}))), n.a.createElement("div", {
						className: j.a.SubscribeButton
					}))
				},
				k = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = s.n(k);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, A = Array.from({
				length: F
			}).map((e, t) => n.a.createElement(B, {
				className: I.a.Subreddit,
				key: t
			})), J = {
				enabled: !0,
				id: "xd_103",
				layout: u.d.Large,
				surface: u.e.Topic,
				unitName: u.i,
				unitType: u.f.SubredditListing,
				url: ""
			};
			class W extends n.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(m.D)(J)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, r = t.slice(0, F);
					return n.a.createElement(i.a, {
						className: Object(o.a)(I.a.Container, e)
					}, n.a.createElement("div", {
						className: I.a.Title
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, w._("Top Communities", null, {
						hk: "46yzcK"
					}))), n.a.createElement("div", {
						className: I.a.SubredditList
					}, r.length > 0 ? r.map(e => n.a.createElement(T, {
						className: I.a.Subreddit,
						discoveryUnit: J,
						key: e,
						subredditId: e
					})) : A), t.length > F && n.a.createElement(a.a, {
						to: s
					}, n.a.createElement(d.n, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, w._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(l.c)(W)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				o = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				i = s("./src/reddit/components/TopicSidebar/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return n.a.createElement(a.a, {
					className: s
				}, t, n.a.createElement(o.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				userIsSubscriber: o.cb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(a.d([s], !0)),
					onSubscriptionsRequested: () => e(a.e()),
					onUnsubscribe: () => e(a.d([s], !1))
				}
			})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
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
		}
	}
]);
//# sourceMappingURL=Geotagging~Topic.0fc386955000dd94643e.js.map