// https://www.redditstatic.com/desktop2x/NotificationsInbox.e9a787b97de7b368b24e.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./src/reddit/components/NotificationUnit/Component.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/controls/MetaData/index.tsx"),
				u = n("./src/reddit/icons/svgs/ChatNew/index.tsx"),
				p = n("./src/reddit/icons/svgs/Discover/index.tsx"),
				v = n("./src/reddit/icons/svgs/Follow/index.tsx"),
				f = n("./src/reddit/icons/svgs/LiveNotif/index.tsx"),
				g = n("./src/reddit/icons/svgs/Menu/index.tsx"),
				x = n("./src/reddit/icons/svgs/Reply/index.tsx"),
				h = n("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				b = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				E = n("./src/reddit/icons/svgs/Top/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Trophy/index.tsx"),
				N = n("./src/reddit/icons/svgs/User/index.tsx"),
				y = n("./src/reddit/models/NotificationInbox/index.ts"),
				w = n("./src/reddit/components/NotificationUnit/index.m.less"),
				C = n.n(w);
			const L = Object(a.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-DefaultNotificationUnit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-NotificationUnit-DefaultNotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/DefaultNotificationUnit.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/NotificationUnit/DefaultNotificationUnit.tsx"
					}
				}),
				j = Object(a.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-MiniNotificationUnit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-NotificationUnit-MiniNotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/MiniNotificationUnit.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/NotificationUnit/MiniNotificationUnit.tsx"
					}
				}),
				S = Object(a.a)({
					resolved: {},
					chunkName: () => "reddit-components-NotificationUnit-NotificationButton",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-NotificationUnit-NotificationButton").then(n.bind(null, "./src/reddit/components/NotificationUnit/NotificationButton.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/NotificationUnit/NotificationButton.tsx"
					}
				}),
				k = l.a.wrapped(g.a, "MenuIcon", C.a),
				O = l.a.wrapped(p.a, "NotifIcon", C.a),
				T = l.a.wrapped(v.a, "NotifIcon", C.a),
				I = l.a.wrapped(f.a, "NotifIcon", C.a),
				P = l.a.wrapped(x.a, "NotifIcon", C.a),
				U = l.a.wrapped(b.a, "NotifIcon", C.a),
				M = l.a.wrapped(E.a, "NotifIcon", C.a),
				R = l.a.wrapped(_.a, "NotifIcon", C.a),
				F = l.a.wrapped(N.a, "NotifIcon", C.a),
				A = l.a.wrapped(h.a, "ReplyButtonIcon", C.a),
				B = l.a.wrapped(u.a, "ButtonIcon", C.a),
				H = e => {
					switch (e) {
						case y.a.CakeDay:
							return o.a.createElement(R, null);
						case y.a.Discover:
							return o.a.createElement(O, null);
						case y.a.Following:
							return o.a.createElement(T, null);
						case y.a.Live:
							return o.a.createElement(I, null);
						case y.a.Reply:
							return o.a.createElement(P, null);
						case y.a.Rising:
							return o.a.createElement(U, null);
						case y.a.Top:
							return o.a.createElement(M, null);
						case y.a.User:
						default:
							return o.a.createElement(F, null)
					}
				},
				z = e => {
					switch (e) {
						case y.a.CakeDay:
							return {
								icon: o.a.createElement(A, null), text: s.fbt._("Share", null, {
									hk: "1Xp7qb"
								})
							};
						case y.a.Discover:
							return {
								text: s.fbt._("See More Posts", null, {
									hk: "1E5hXu"
								})
							};
						case y.a.Following:
							return {
								icon: o.a.createElement(B, null), text: s.fbt._("Start Chat", null, {
									hk: "17YRUm"
								})
							}
					}
				},
				D = e => {
					let {
						className: t,
						notification: n
					} = e;
					const a = e => o.a.createElement(L, {
							key: e.id,
							unit: e
						}),
						s = e => o.a.createElement(j, {
							key: e.id,
							unit: e
						});
					return o.a.createElement("li", {
						className: Object(c.a)(t, (e => Object(c.a)(C.a.notificationContainer, {
							[C.a.unread]: e
						}))(!!n.isUnread)),
						key: n.id
					}, o.a.createElement("span", {
						className: C.a.imgsCol
					}, o.a.createElement("img", {
						alt: n.altText,
						className: C.a.imgLarge,
						src: n.imageUrl
					}), o.a.createElement("span", {
						className: C.a.imgSmall
					}, H(n.notificationType))), o.a.createElement("span", {
						className: C.a.contentCol
					}, o.a.createElement("span", {
						className: C.a.titleArea
					}, o.a.createElement("span", null, o.a.createElement("span", {
						className: C.a.title
					}, "Live in "), o.a.createElement("span", {
						className: C.a.titleBold
					}, n.subredditName), o.a.createElement(m.c, null), o.a.createElement("span", {
						className: C.a.time
					}, Object(d.a)(n.createdAt, !0))), o.a.createElement("button", {
						className: C.a.menuButton
					}, o.a.createElement(k, null))), (e => {
						if (!e || !e.units) return null;
						const {
							unitType: t,
							units: n
						} = e;
						return t === y.b.Default ? n.map(a) : n.map(s)
					})(n), (e => {
						const {
							isUnread: t,
							notificationType: n
						} = e, a = z(n);
						return a ? o.a.createElement(S, {
							icon: a.icon,
							isUnread: !!t,
							text: a.text
						}) : null
					})(n)))
				};
			t.a = D
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationContainer: "_1uSdK9e2HutbQJQIyqFqML",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				imgsCol: "_15ij9b3BIyKJEVyhXMfaep",
				imgLarge: "_2H0VQzb1kY-7ksVeZ4gO1w",
				imgSmall: "_37G0ny8H5OzyUBpxt_CSKS",
				contentCol: "_1uOLxtlzmKIlS5HIisAJxh",
				titleArea: "_1OTquoGknI7EVxx2Pcr5fr",
				title: "_180jOSBDwwE60X5UR8zt3-",
				titleBold: "_2MtZtJz3WCLLh2fN9h92da",
				time: "_K0_7RZucnd_cwOpVPzOY",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				defaultUnitTextContent: "_3RaKv8t_KZX3LnMjJrIsS6",
				miniUnitContentContainer: "_2TQviVDHQIM1QsbllOCz-H",
				miniUnitTextContent: "_1lQJBLDjcj-X9-np1Ty6mK",
				miniUnitImg: "_2YFGUewdw5UTEnhorhY1hy",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_"
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/lodash/values.js"),
				s = n.n(a),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				v = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				h = n("./src/reddit/selectors/userPrefs.ts"),
				b = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = n.n(b),
				_ = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
					}
					return n
				};
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = m.a.div("BladeContainer", E.a), w = m.a.wrapped(f.a, "CloseIcon", E.a), C = m.a.div("LoadingTitleContainer", E.a), L = m.a.div("LoadingNavContainer", E.a), j = m.a.div("ShortLoadingNav", E.a), S = m.a.wrapped(v.a, "ThemedChevron", E.a), k = e => {
				var t = _(e, []);
				return r.a.createElement(y, null, r.a.createElement(w, null), r.a.createElement(p.k, null, r.a.createElement(p.p, null, N._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), r.a.createElement(p.o, null, r.a.createElement(C, null, r.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingTitle, t.isLoading && E.a.loading)
				})), r.a.createElement(L, null, r.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), r.a.createElement(S, null)), r.a.createElement(L, null, r.a.createElement(j, null), r.a.createElement(S, null)), r.a.createElement(L, null, r.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), r.a.createElement(S, null)), r.a.createElement(L, null, r.a.createElement(j, null), r.a.createElement(S, null)), r.a.createElement(L, null, r.a.createElement("div", {
					className: Object(d.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), r.a.createElement(S, null)))))
			}, O = Object(l.a)({
				getComponent: () => Object(u.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => r.a.createElement(k, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => r.a.createElement(k, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: x.j,
				isSubscriptionsPinned: h.b,
				moderatorPermissions: g.j
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? r.a.createElement("div", {
					className: Object(d.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, r.a.createElement(O, {
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
				return l
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
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
				l = a.a.div("HomePageGroup", i.a),
				d = a.a.h1("FormPageTitle", i.a),
				m = a.a.div("FormPageSection", i.a),
				u = a.a.div("FormGroup", i.a),
				p = a.a.h2("FormGroupTitle", i.a),
				v = a.a.div("FormElement", i.a),
				f = a.a.div("FormGroupDescription", i.a),
				g = a.a.div("FormItem", i.a),
				x = a.a.h3("FormElementTitle", i.a),
				h = a.a.div("FormElementDescription", i.a),
				b = a.a.div("FormElementError", i.a),
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
				return x
			})), n.d(t, "a", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				v = n("./src/reddit/components/TabNav/index.m.less"),
				f = n.n(v);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var x, h = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
				}
				return n
			};
			! function(e) {
				e.GEAR = "gear"
			}(x || (x = {}));
			const b = l.a.wrapped(p.a, "Gear", f.a),
				E = l.a.h3("Title", f.a),
				_ = l.a.div("TabNavContainer", f.a),
				N = l.a.div("Tabs", f.a),
				y = l.a.wrapped(e => {
					var {
						active: t,
						children: n,
						enabled: a
					} = e, s = h(e, ["active", "children", "enabled"]);
					return r.a.createElement(u.a, g({}, s, {
						"aria-selected": t,
						className: Object(o.a)(s.className, {
							[f.a.mIsActive]: t,
							[f.a.mIsEnabled]: !1 !== a
						}),
						role: "tab"
					}), n)
				}, "Tab", f.a),
				w = e => {
					switch (e) {
						case x.GEAR:
							return r.a.createElement(b, null);
						default:
							return null
					}
				},
				C = () => window.pageYOffset || window.scrollY,
				L = 75,
				j = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: d.f,
					willChange: "transform",
					zIndex: m.g
				};
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = s()(() => {
						this.state.sticky || this.forceUnsticky ? C() < L && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : C() >= L && this.setState({
							sticky: !0
						})
					}, c.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
					} = this.props, a = Object(o.a)({
						[f.a.mResponsive]: t
					});
					return r.a.createElement(_, {
						className: Object(o.a)(a, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, r.a.createElement(E, {
						className: Object(o.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, w(this.props.icon), this.props.title), r.a.createElement(N, {
						className: Object(o.a)(a, {
							[f.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? j : void 0
					}, this.props.children))
				}
			}
			t.c = S
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				l = n.n(c),
				d = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
					}
					return n
				};
			const m = r.a.span("metaText", l.a),
				u = e => i.a.createElement(m, e, " · "),
				p = e => {
					var {
						isScoreHidden: t,
						score: n,
						useUpvotes: s
					} = e, r = d(e, ["isScoreHidden", "score", "useUpvotes"]);
					const c = Object(o.b)(n),
						l = a.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [a.fbt._plural(n, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? a.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? l : a.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [a.fbt._plural(n, "number", c)], {
							hk: "gf67v"
						});
					return i.a.createElement(m, r, u)
				},
				v = e => i.a.createElement(m, null, a.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [a.fbt._plural(e, "number", Object(o.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/icons/svgs/ChatNew/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16"
			}, s.a.createElement("path", {
				d: "M10.625 8.656h-1.97v1.97c0 .36-.293.655-.655.655-.362 0-.656-.293-.656-.655v-1.97h-1.97c-.36 0-.655-.293-.655-.655 0-.362.293-.656.655-.656h1.97v-1.97c0-.36.293-.655.655-.655.362 0 .656.293.656.655v1.97h1.97c.36 0 .655.293.655.655 0 .362-.293.656-.655.656M8 1C4.14 1 1 4.14 1 8c0 1.222.317 2.372.87 3.373l-.824 2.476c-.105.313-.024.66.21.894.167.167.39.256.62.256.09 0 .185-.015.275-.045l2.478-.825c1 .553 2.15.87 3.372.87 3.86 0 7-3.14 7-7s-3.14-7-7-7"
			}))
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
		"./src/reddit/icons/svgs/Discover/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 12 12"
			}, s.a.createElement("g", {
				clipPath: "url(#clip0)"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M2.154 8.7a1.47 1.47 0 01-1.386-.9L.306 6.666a1.5 1.5 0 01.81-1.962l1.248-.516 1.607 3.88-1.247.518c-.18.076-.374.115-.57.114zm2.665-.945l6.383-2.079a.9.9 0 00.534-.48.888.888 0 000-.72l-1.338-3.24a.924.924 0 00-.522-.498.894.894 0 00-.714.042L3.174 3.816l1.645 3.94zm2.537 4.427a.905.905 0 00.906-.008.906.906 0 00.312-1.236l-1.29-2.142a1.494 1.494 0 00-2.568 0l-1.29 2.142a.902.902 0 001.548.924L6 10.152l1.026 1.71c.08.133.194.244.33.32z",
				fill: "inherit"
			})), s.a.createElement("defs", null, s.a.createElement("clipPath", {
				id: "clip0"
			}, s.a.createElement("path", {
				fill: "currentColor",
				d: "M0 0h12v12H0z"
			}))))
		},
		"./src/reddit/icons/svgs/Follow/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 12 12"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M5.574 11.496c.135.057.28.087.426.09.154.006.307-.021.45-.078l.059-.03c.61-.302 5.341-2.644 5.341-6.678 0-1.86-1.05-3.714-3.45-3.714-.895 0-1.755.346-2.4.966a3.462 3.462 0 00-2.4-.966C1.2 1.086.15 2.94.15 4.8c0 4.2 5.202 6.6 5.424 6.696z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/LiveNotif/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 12 12"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6 3.3a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zM5.1 6a.9.9 0 111.8 0 .9.9 0 01-1.8 0z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6 .6a5.4 5.4 0 100 10.8A5.4 5.4 0 006 .6zM2.4 6a3.6 3.6 0 117.2 0 3.6 3.6 0 01-7.2 0z",
				fill: "#inherit"
			}))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Reply/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 12 12"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.934 5.208C10.16 3.365 7.503 2.586 5.1 2.613v-.812a.593.593 0 00-.358-.55.595.595 0 00-.647.107L.997 4.198a.302.302 0 000 .442l3.098 2.84a.594.594 0 00.647.106.593.593 0 00.358-.55V6.21c1.914-.075 3.025.186 3.462.83.422.621.276 1.716-.434 3.255a.3.3 0 00.478.343c2.728-2.576 2.772-4.374 2.328-5.429",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				o = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(o.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, s.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var a, s;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e[e.Default = 0] = "Default", e[e.Mini = 1] = "Mini"
				}(a || (a = {})),
				function(e) {
					e[e.CakeDay = 0] = "CakeDay", e[e.Discover = 1] = "Discover", e[e.Following = 2] = "Following", e[e.Live = 3] = "Live", e[e.Reply = 4] = "Reply", e[e.Rising = 5] = "Rising", e[e.Top = 6] = "Top", e[e.User = 7] = "User"
				}(s || (s = {}))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y"
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
				markAsRead: "P4zM8oVx2ZbSz4I2pyce_"
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
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/NotificationUnit/Component.tsx"),
				m = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				u = n.n(m);
			const p = l.a.wrapped(d.a, "NotificationUnit", u.a);
			var v = e => {
				let {
					notifications: t
				} = e;
				const n = t && t.length > 0;
				return s.a.createElement("ul", {
					className: u.a.notificationsContainer
				}, n && t.map(e => s.a.createElement(p, {
					notification: e
				})))
			};
			var f = e => s.a.createElement(v, {
					notifications: []
				}),
				g = n("./node_modules/react-redux/es/index.js"),
				x = n("./node_modules/reselect/es/index.js"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/reddit/components/BadgeCounter/index.tsx"),
				E = n("./src/reddit/components/TabNav/index.tsx"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx");
			var N = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
					clipRule: "evenodd",
					d: "M14.03 9.53l-5 5a.748.748 0 01-1.06 0l-2-2a.75.75 0 111.06-1.061l1.47 1.47 4.47-4.47a.75.75 0 111.06 1.061m4.5-3.378l-8-5a.999.999 0 00-1.06 0l-8 5A.999.999 0 001 7v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7a1 1 0 00-.47-.848",
					fillRule: "evenodd"
				})),
				y = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				w = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				C = n.n(w);
			const L = l.a.wrapped(b.a, "Badge", C.a),
				j = l.a.wrapped(y.a, "Gear", C.a),
				S = l.a.wrapped(N, "MarkAsRead", C.a),
				k = l.a.wrapped(E.a, "Tab", C.a);
			var O = e => {
					const {
						unreadNotifications: t
					} = e, n = t && t.inboxCount || 0;
					return s.a.createElement("div", {
						className: C.a.navContainer
					}, s.a.createElement("h1", {
						className: C.a.navHeader
					}, h.fbt._("Notifications", null, {
						hk: "18kEAD"
					})), s.a.createElement("nav", {
						className: C.a.navBar
					}, s.a.createElement("ul", null, s.a.createElement("li", null, s.a.createElement(k, {
						active: !0,
						to: "/notifications"
					}, "Activity"), s.a.createElement(L, {
						isActive: !!n,
						unreadCount: n
					})), s.a.createElement("li", null, s.a.createElement(k, {
						active: !1,
						to: "/message/inbox"
					}, "Messages")), s.a.createElement("li", null, s.a.createElement("button", {
						className: C.a.navLink
					}, s.a.createElement(S, null), "Mark as read")), s.a.createElement("li", null, s.a.createElement(_.a, {
						className: C.a.navLink,
						to: "/settings/account"
					}, s.a.createElement(j, null), "Settings")))))
				},
				T = n("./src/reddit/selectors/user.ts");
			const I = Object(x.c)({
				unreadNotifications: T.gb
			});
			var P = Object(g.b)(I)(e => s.a.createElement(O, e));
			const U = Object(o.t)();
			class M extends s.a.Component {
				render() {
					return s.a.createElement(i.a, null, s.a.createElement(c.a, {
						content: s.a.createElement(f, null),
						disableFullscreen: !0,
						navBar: s.a.createElement(P, null)
					}))
				}
			}
			t.default = U(Object(r.c)(M))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.e9a787b97de7b368b24e.js.map