// https://www.redditstatic.com/desktop2x/Geotagging~Topic.e1f3b95b37c8a977987c.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging~Topic"], {
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				a = s.n(n);
			t.a = r.a.div("container", a.a)
		},
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
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				h = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				S = s.n(h),
				E = function(e, t) {
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = m.a.div("BladeContainer", S.a), y = m.a.wrapped(x.a, "CloseIcon", S.a), O = m.a.div("LoadingTitleContainer", S.a), j = m.a.div("LoadingNavContainer", S.a), C = m.a.div("ShortLoadingNav", S.a), T = m.a.wrapped(p.a, "ThemedChevron", S.a), L = e => {
				var t = E(e, []);
				return o.a.createElement(N, null, o.a.createElement(y, null), o.a.createElement(b.k, null, o.a.createElement(b.p, null, v._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(b.o, null, o.a.createElement(O, null, o.a.createElement("div", {
					className: Object(d.a)(S.a.LoadingTitle, t.isLoading && S.a.loading)
				})), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(d.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), o.a.createElement(T, null)), o.a.createElement(j, null, o.a.createElement(C, null), o.a.createElement(T, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(d.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), o.a.createElement(T, null)), o.a.createElement(j, null, o.a.createElement(C, null), o.a.createElement(T, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(d.a)(S.a.LoadingNav, t.isLoading && S.a.loading)
				}), o.a.createElement(T, null)))))
			}, P = Object(l.a)({
				getComponent: () => Object(u.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(L, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(L, {
					gradientType: "posts",
					isLoading: !0
				})
			}), B = Object(c.c)({
				isEditing: g.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: _.j
			});
			t.a = Object(i.b)(B)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(d.a)(S.a.Container, e.isSubscriptionsPinned && S.a.isSubscriptionPinned)
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
				return x
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "j", (function() {
				return E
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
				x = r.a.div("FormGroupDescription", a.a),
				_ = r.a.div("FormItem", a.a),
				g = r.a.h3("FormElementTitle", a.a),
				f = r.a.div("FormElementDescription", a.a),
				h = r.a.div("FormElementError", a.a),
				S = r.a.div("FormElementSubGroup", a.a),
				E = r.a.li("FormListItem", a.a)
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
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/hooks/useButtons2020.ts"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				b = s.n(u),
				p = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
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
			const f = x.a.button("IconButton", b.a),
				h = x.a.wrapped(d.a, "SubscribeIcon", b.a),
				S = x.a.wrapped(l.a, "UnsubscribeIcon", b.a),
				E = x.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return a.a.createElement(f, r, a.a.createElement(h, {
						className: Object(p.a)(r.className, {
							[b.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", b.a),
				v = x.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, r = g(e, ["border", "small"]);
					return t ? a.a.createElement(i.i, _({}, r, {
						className: Object(p.a)(r.className, {
							[b.a.isSmall]: s
						})
					})) : a.a.createElement(i.o, _({}, r, {
						className: Object(p.a)(r.className, {
							[b.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", b.a),
				N = e => {
					var {
						icon: t,
						border: s,
						small: r
					} = e, n = g(e, ["icon", "border", "small"]);
					const o = Object(c.a)();
					return t ? a.a.createElement(E, _({}, n, {
						border: s,
						small: r,
						className: Object(p.a)(n.className, {
							[b.a.isSmall]: r
						})
					})) : o ? a.a.createElement(i.q, _({}, n, {
						priority: s ? i.b.Primary : i.b.Tertiary,
						className: Object(p.a)(n.className, b.a.is2020),
						size: r ? i.c.S : i.c.M
					})) : a.a.createElement(v, _({}, n, {
						border: s,
						small: r,
						className: Object(p.a)(n.className, {
							[b.a.isSmall]: r
						})
					}))
				},
				y = x.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: r
					} = e, n = g(e, ["border", "small", "type"]);
					return a.a.createElement(f, n, a.a.createElement(S, {
						className: Object(p.a)(o.n, n.className, {
							[b.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", b.a),
				O = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: b.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: b.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				j = x.a.wrapped(e => {
					var {
						border: t,
						small: s,
						buttonType: r
					} = e, n = g(e, ["border", "small", "buttonType"]);
					const o = O(r),
						c = Object(p.a)(n.className, {
							[b.a.isSmall]: s
						});
					return t ? a.a.createElement(i.l, _({}, n, {
						className: c
					}), o) : a.a.createElement(i.o, _({}, n, {
						className: c
					}), o)
				}, "UnsubscribeButton", b.a),
				C = e => {
					var {
						buttonType: t,
						border: s,
						small: r,
						icon: n
					} = e, o = g(e, ["buttonType", "border", "small", "icon"]);
					const l = Object(c.a)();
					return n ? a.a.createElement(y, _({}, o, {
						border: s,
						small: r,
						buttonType: t,
						className: Object(p.a)(o.className, {
							[b.a.isSmall]: r
						})
					})) : l ? a.a.createElement(i.q, _({}, o, {
						priority: s ? i.b.Secondary : i.b.Tertiary,
						className: Object(p.a)(o.className, b.a.is2020),
						size: r ? i.c.S : i.c.M,
						text: O(t)
					})) : a.a.createElement(j, _({}, o, {
						border: s,
						small: r,
						buttonType: t,
						className: Object(p.a)(o.className, {
							[b.a.isSmall]: r
						})
					}))
				};
			class T extends a.a.Component {
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
					return this.props.userIsSubscriber ? a.a.createElement(C, _({}, o, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(N, _({}, o, {
						id: r
					}), this.props.children, Object(m.a)({
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
				x = s("./node_modules/reselect/es/index.js"),
				_ = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				j = s.n(O);
			const C = Object(x.c)({
				isLoggedIn: y.H,
				subreddit: N.S,
				subredditAboutInfo: N.x
			});
			class T extends n.a.Component {
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
						t(Object(m.u)(e, n))
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
					}, n.a.createElement(S.a, {
						className: j.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, n.a.createElement("div", {
						className: j.a.Name
					}, Object(E.b)(s.displayText || s.name)), n.a.createElement("div", {
						className: j.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(s.subscribers, "subscribers count", Object(_.b)(s.subscribers))], {
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
			var L = Object(p.b)(C)(Object(l.c)(T)),
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
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = 8, A = Array.from({
				length: w
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
			class M extends n.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(m.G)(J)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, r = t.slice(0, w);
					return n.a.createElement(i.a, {
						className: Object(o.a)(I.a.Container, e)
					}, n.a.createElement("div", {
						className: I.a.Title
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, F._("Top Communities", null, {
						hk: "46yzcK"
					}))), n.a.createElement("div", {
						className: I.a.SubredditList
					}, r.length > 0 ? r.map(e => n.a.createElement(L, {
						className: I.a.Subreddit,
						discoveryUnit: J,
						key: e,
						subredditId: e
					})) : A), t.length > w && n.a.createElement(a.a, {
						to: s
					}, n.a.createElement(d.o, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, F._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(l.c)(M)
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
				userIsSubscriber: o.fb
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging~Topic.e1f3b95b37c8a977987c.js.map