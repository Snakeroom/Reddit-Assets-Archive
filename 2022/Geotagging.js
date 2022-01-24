// https://www.redditstatic.com/desktop2x/Geotagging.5694fcf43646c64eb140.js
// Retrieved at 1/24/2022, 12:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, n) {
			"use strict";
			const s = (e, t, n = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let s, a, r = [];
				return function(...o) {
					return new Promise(i => {
						const d = n.leading && !a;
						clearTimeout(a), a = setTimeout(() => {
							a = null;
							const t = n.leading ? s : e.apply(this, o);
							for (i of r) i(t);
							r = []
						}, t), d ? (s = e.apply(this, o), i(s)) : r.push(i)
					})
				}
			};
			e.exports = s, e.exports.default = s
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/uuid/v4.js"),
				i = n.n(o),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx");
			var l, u = n("./node_modules/p-debounce/index.js"),
				m = n.n(u),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				p = n("./src/reddit/constants/keycodes.ts"),
				g = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/lib/sentry/index.ts"),
				f = n("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(l || (l = {}));
			const h = (e, t) => async n => {
				let s;
				try {
					s = await async function(e, t) {
						return Object(g.a)(e, {
							...f,
							variables: t
						})
					}(e(), {
						query: n,
						sessionId: t
					})
				} catch (a) {
					return x.c.captureException(a), []
				}
				return s.body.data.geoPlaceAutocomplete || []
			};
			var _ = n("./src/reddit/hooks/useGqlContext.ts"),
				E = n("./src/reddit/icons/svgs/Location/index.tsx"),
				S = n("./src/reddit/components/GeoForm/index.m.less"),
				v = n.n(S);

			function j(e) {
				const {
					value: t,
					setValue: n,
					setPlace: o,
					disabled: i,
					onFocus: c,
					sessionId: l,
					className: u
				} = e, b = Object(_.a)(), [g, x] = Object(a.useState)(!1), f = function(e, t, n) {
					const [s, r] = Object(a.useState)([]), o = Object(a.useMemo)(() => m()(n, 300), [n]);
					return Object(a.useEffect)(() => {
						e && t && o(e).then(e => {
							r(e)
						}).catch(() => r([]))
					}, [e]), s
				}(t, g, h(b, l)), {
					highlightValue: S,
					selectedIndex: j,
					onKeyDown: O,
					isClosed: C,
					setClosed: P
				} = function(e, t, n) {
					const [s, r] = Object(a.useState)(-1), [o, i] = Object(a.useState)(!!e.length), [d, c] = Object(a.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: s,
						onKeyDown: a => {
							if (a.key === p.b.ArrowDown) {
								const t = Math.min(s + 1, e.length - 1);
								r(t), c(e[t])
							} else if (a.key === p.b.ArrowUp) {
								const t = Math.max(s - 1, -1);
								r(t), c(e[t])
							} else a.key === p.b.Enter && s > -1 ? (r(-1), t(e[s].name), n(e[s]), i(!0), a.preventDefault()) : a.key === p.b.Escape ? (r(-1), i(!0)) : c(void 0)
						},
						isClosed: o,
						setClosed: i
					}
				}(f, n, o), y = `location-input-${l}`;
				return r.a.createElement("div", {
					className: v.a.autocompleteInput
				}, r.a.createElement("label", {
					className: v.a.geoLabel,
					htmlFor: y
				}, r.a.createElement(E.a, {
					className: v.a.locationIcon
				})), r.a.createElement("input", {
					className: Object(d.a)(v.a.geoInput, u),
					name: y,
					disabled: i,
					onKeyDown: O,
					value: S && S.name || t,
					placeholder: s.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						n(e.currentTarget.value), o(void 0), P(!1)
					},
					onFocus: () => {
						x(!0), c()
					},
					onBlur: () => x(!1)
				}), f.length && !C ? r.a.createElement(N, {
					id: l,
					items: f.map(e => e.name),
					selectedIndex: j,
					selectValue: e => {
						n(f[e].name), o(f[e]), P(!0)
					},
					onClickOutside: () => P(!0)
				}) : null)
			}

			function N(e) {
				const {
					id: t,
					items: n,
					selectedIndex: s,
					selectValue: a,
					onClickOutside: o
				} = e;
				return Object(b.a)(`autocomplete-dropdown-${t}`, o), r.a.createElement("ul", {
					className: v.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, n.map((e, t) => r.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => a(t),
					className: Object(d.a)({
						[v.a.highlight]: t === s
					})
				}, e)))
			}
			const O = () => {};

			function C(e) {
				const {
					className: t,
					initialValue: n,
					initialPlace: o,
					disabled: l = !1,
					onFocus: u = O,
					onPlace: m = O,
					onValue: b = O,
					inputClassName: p
				} = e, g = function() {
					const [e, t] = Object(a.useState)(!1);
					return Object(a.useEffect)(() => t(!0), []), e
				}(), [x] = Object(a.useState)(() => i()()), [f, h] = Object(a.useState)(n || ""), [_, E] = Object(a.useState)(o);
				return g ? r.a.createElement("form", {
					className: Object(d.a)(v.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == o ? void 0 : o.id) !== (null == _ ? void 0 : _.id) && e.onSubmit({
							name: f,
							place: _,
							sessionId: x
						})
					}
				}, r.a.createElement(j, {
					className: p,
					value: f,
					sessionId: x,
					setValue: e => {
						h(e), b(e)
					},
					setPlace: e => {
						E(e), m(e)
					},
					disabled: l,
					onFocus: u
				}), _ && _.id !== (null == o ? void 0 : o.id) && r.a.createElement(c.o, {
					className: v.a.submitButton,
					type: "submit",
					disabled: l
				}, s.fbt._("Submit", null, {
					hk: "4aU3dh"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, n) {
			e.exports = {
				geoForm: "dnC9V9HtkUxsmza-vEXgC",
				geoLabel: "_3T9bJ1ttSXUxb9rxZI9jMC",
				locationIcon: "_2Jm0p-hd1-KYZJI9iP3n6",
				geoInput: "_2O28-fZaU1kYnMmsiMKw3y",
				autocompleteInput: "oP84ZJjEgYLr154hrXHd8",
				autocompleteDropdown: "_1pwsnPyclgUCyjdfT0xWmx",
				highlight: "_1kfPE4TrjHsTFgvmrF1s33"
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				h = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = n.n(_);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = u.a.div("BladeContainer", E.a), j = u.a.wrapped(g.a, "CloseIcon", E.a), N = u.a.div("LoadingTitleContainer", E.a), O = u.a.div("LoadingNavContainer", E.a), C = u.a.div("ShortLoadingNav", E.a), P = u.a.wrapped(p.a, "ThemedChevron", E.a), y = ({
				...e
			}) => o.a.createElement(v, null, o.a.createElement(j, null), o.a.createElement(b.k, null, o.a.createElement(b.p, null, S._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(b.o, null, o.a.createElement(N, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingTitle, e.isLoading && E.a.loading)
			})), o.a.createElement(O, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), o.a.createElement(P, null)), o.a.createElement(O, null, o.a.createElement(C, null), o.a.createElement(P, null)), o.a.createElement(O, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), o.a.createElement(P, null)), o.a.createElement(O, null, o.a.createElement(C, null), o.a.createElement(P, null)), o.a.createElement(O, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), o.a.createElement(P, null))))), k = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(y, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(y, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(d.c)({
				isEditing: f.i,
				isSubscriptionsPinned: h.b,
				moderatorPermissions: x.m
			});
			t.a = Object(i.b)(T)(e => {
				const t = e.moderatorPermissions && a()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(k, {
					subredditId: e.subredditId
				})) : o.a.createElement(r.Fragment, null, e.children)
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
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return S
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(a);
			const o = s.a.section("FormPage", r.a),
				i = s.a.h1("HomePageTitle", r.a),
				d = s.a.button("HomePageBreadcrumb", r.a),
				c = s.a.div("HomePageGroup", r.a),
				l = s.a.h1("FormPageTitle", r.a),
				u = s.a.div("FormPageSection", r.a),
				m = s.a.div("FormGroup", r.a),
				b = s.a.h2("FormGroupTitle", r.a),
				p = s.a.div("FormElement", r.a),
				g = s.a.div("FormGroupDescription", r.a),
				x = s.a.div("FormItem", r.a),
				f = s.a.h3("FormElementTitle", r.a),
				h = s.a.div("FormElementDescription", r.a),
				_ = s.a.div("FormElementError", r.a),
				E = s.a.div("FormElementSubGroup", r.a),
				S = s.a.li("FormListItem", r.a)
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./node_modules/react-redux/es/index.js"),
				g = n("./node_modules/reselect/es/index.js"),
				x = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				h = n("./src/reddit/components/SubscribeButton/index.tsx"),
				_ = n("./src/reddit/constants/posts.ts"),
				E = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/helpers/widgets/index.tsx"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				C = n.n(O);
			const P = Object(g.c)({
				isLoggedIn: N.J,
				subreddit: j.R,
				subredditAboutInfo: j.s
			});
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: n,
							subredditAboutInfo: s
						} = this.props;
						if (!n) return;
						const a = Object(v.c)(n, s);
						t(Object(u.o)(e, a))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: n
					} = this.props;
					return n ? a.a.createElement("div", {
						className: Object(o.a)(C.a.Container, e)
					}, a.a.createElement(f.b, {
						className: C.a.Icon,
						subredditOrProfile: n
					}), a.a.createElement("div", {
						className: C.a.Text
					}, a.a.createElement(E.a, {
						className: C.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: n.url
					}, a.a.createElement("div", {
						className: C.a.Name
					}, Object(S.c)(n.displayText || n.name)), a.a.createElement("div", {
						className: C.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(n.subscribers, "subscribers count", Object(x.b)(n.subscribers))], {
						hk: "48BXj1"
					})))), a.a.createElement(h.a, {
						border: !1,
						className: Object(o.a)(C.a.SubscribeButton, {
							[C.a.hidden]: !t
						}),
						identifier: {
							name: n.name,
							type: _.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var k = Object(p.b)(P)(Object(c.c)(y)),
				T = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var L = e => {
					const {
						className: t
					} = e, n = Object(T.b)({
						isLoading: !0
					});
					return a.a.createElement("div", {
						className: Object(o.a)(C.a.Container, t)
					}, a.a.createElement("div", {
						className: Object(o.a)(C.a.Icon, C.a.placeholder, n)
					}), a.a.createElement("div", {
						className: C.a.Text
					}, a.a.createElement("div", {
						className: C.a.Link
					}, a.a.createElement("div", {
						className: Object(o.a)(C.a.Name, C.a.placeholder, n)
					}), a.a.createElement("div", {
						className: Object(o.a)(C.a.Members, C.a.placeholder, n)
					}))), a.a.createElement("div", {
						className: C.a.SubscribeButton
					}))
				},
				G = n("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = n.n(G);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = 8, B = Array.from({
				length: w
			}).map((e, t) => a.a.createElement(L, {
				className: I.a.Subreddit,
				key: t
			})), M = {
				enabled: !0,
				id: "xd_103",
				layout: m.c.Large,
				surface: m.d.Topic,
				unitName: m.h,
				unitType: m.e.SubredditListing,
				url: ""
			};
			class A extends a.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.x)(M)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: n
					} = this.props, s = t.slice(0, w);
					return a.a.createElement(i.a, {
						className: Object(o.a)(I.a.Container, e)
					}, a.a.createElement("div", {
						className: I.a.Title
					}, a.a.createElement(d.b, {
						type: d.a.Widget
					}, F._("Top Communities", null, {
						hk: "46yzcK"
					}))), a.a.createElement("div", {
						className: I.a.SubredditList
					}, s.length > 0 ? s.map(e => a.a.createElement(k, {
						className: I.a.Subreddit,
						discoveryUnit: M,
						key: e,
						subredditId: e
					})) : B), t.length > w && a.a.createElement(r.a, {
						to: n
					}, a.a.createElement(l.r, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, F._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(c.c)(A)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/SidebarContainer/index.tsx"),
				o = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				i = n("./src/reddit/components/TopicSidebar/index.m.less"),
				d = n.n(i);
			t.a = e => {
				const {
					children: t,
					className: n
				} = e;
				return a.a.createElement(r.a, {
					className: n
				}, t, a.a.createElement(o.a, {
					className: d.a.StickyBottom
				}))
			}
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const r = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(s.a)(e, {
				...a,
				variables: r(t)
			})
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
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = ({
				className: e
			}) => a.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				height: "20",
				width: "20",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M11.41 10l4.29-4.29a1 1 0 0 0-1.41-1.41L10 8.59l-4.29-4.3a1 1 0 0 0-1.42 1.42L8.59 10l-4.3 4.29A1 1 0 1 0 5.7 15.7l4.3-4.29 4.29 4.29a1 1 0 0 0 1.41-1.41z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-4 -2)"
			}))
		},
		"./src/reddit/pages/Geotagging/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2yH_bZH7lpry9aDdEOc6oE",
				container: "_2yH_bZH7lpry9aDdEOc6oE",
				SidebarRight: "_1dAUfZ1jfT9iRqliJIp-g3",
				sidebarRight: "_1dAUfZ1jfT9iRqliJIp-g3",
				done: "_3fIqwculXO1m-X4qXfzMmj",
				header: "trdNFblRGU53TIgWs55-C",
				subredditGeotag: "_1FsT8cGpWm7niRd2fv6aTQ",
				headerImage: "_1epe3P_wwaFpIK8ErFkLeH",
				headerText1: "_3ghPv2k3rgilTXQ67uCYwl",
				headerText2: "_2TPDK7lDyPkuawyt7XPwoz",
				subredditTitle: "_2lduP2futOZoCSpMSHOYaq",
				icon: "_1MYfbl4HkxnO1N7P9qTUFS",
				title: "_1e-KMyhUQkoIqpI-lPvQBy",
				dismiss: "_1ovT9aLdqmbMQwMh8DRQXY",
				questionContainer: "_7hcGNi6hdkuZsvP96n7fF",
				question: "_5tRl6ocijGVd3flWmGP2N",
				rejectButton: "_24ychlJYsrb8mjSdvHXVQH",
				verifyButton: "s-JUfFbwWSUXJPLJ9yPQt",
				geoForm: "lR6NprBUjfHeHVxUVrnby",
				geoLabel: "_2yCQrkg9Kg2bgZg9q8LIfr",
				submitButton: "_3SpSQIYv5V3BmZN4ZOZcST"
			}
		},
		"./src/reddit/pages/Geotagging/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "GEOTAGGING_DISMISSED", (function() {
				return Z
			})), n.d(t, "Geotagging", (function() {
				return $
			})), n.d(t, "default", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				d = n("./src/reddit/components/TopicSidebar/index.tsx"),
				c = n("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/redditGQL/operations/GeoContributableSubreddits.json"),
				m = async e => {
					const t = await Object(l.a)(e, u),
						{
							geoContributableSubreddits: n
						} = t.body.data;
					return {
						...t,
						body: {
							data: {
								geoContributableSubreddits: n.edges.map(e => e.node)
							}
						}
					}
				}, b = n("./src/reddit/helpers/localStorage/index.ts"), p = n("./src/reddit/helpers/trackers/screenview.ts"), g = n("./src/reddit/hooks/useGqlContext.ts"), x = n("./src/reddit/hooks/useTracking.ts"), f = n("./src/reddit/layout/page/Listing/index.tsx"), h = n("./node_modules/react-router-dom/esm/react-router-dom.js"), _ = n("./src/reddit/controls/Button/index.tsx"), E = n("./src/reddit/pages/Geotagging/index.m.less"), S = n.n(E);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function j() {
				return a.a.createElement("div", {
					className: S.a.done
				}, a.a.createElement("p", {
					className: S.a.headerText1
				}, v._("Done and done!", null, {
					hk: "1RzJEG"
				})), a.a.createElement("p", {
					className: S.a.headerText2
				}, v._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), a.a.createElement(h.a, {
					to: "/"
				}, a.a.createElement(_.l, null, "Go Home")))
			}
			var N = n("./src/config.ts");
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function C() {
				return a.a.createElement("div", {
					className: S.a.header
				}, a.a.createElement("img", {
					className: S.a.headerImage,
					src: `${N.a.assetPath}/img/mtm-snoo.png`
				}), a.a.createElement("div", null, a.a.createElement("p", {
					className: S.a.headerText1
				}, O._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), a.a.createElement("p", {
					className: S.a.headerText2
				}, O._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var P = n("./src/reddit/actions/toaster.ts"),
				y = n("./src/reddit/components/GeoForm/GeoForm.tsx"),
				k = n("./src/reddit/components/SubredditIcon/index.tsx"),
				T = n("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				L = n("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				G = async (e, t) => Object(l.a)(e, {
					...L,
					variables: Object(T.b)(t)
				}), I = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const F = "crowdsource",
				w = {
					pageType: "crowdsource_feed_geo"
				},
				B = {
					pageType: "geo_entry"
				},
				M = e => () => ({
					source: F,
					noun: "skip",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: w
				}),
				A = e => () => ({
					source: F,
					noun: "location_field",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: B
				}),
				Q = D("select_location"),
				H = D("confirm_location"),
				J = D("undo_location"),
				W = R("verify_location"),
				q = R("reject_location");

			function D(e) {
				return (t, n) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...B,
						reason: n
					}
				})
			}

			function R(e) {
				return (t, n) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...w,
						reason: n
					}
				})
			}
			var U = n("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				K = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z(e) {
				const t = Object(b.B)(Z) || [];
				t.push(e), Object(b.Eb)(Z, t)
			}

			function X(e) {
				const {
					subreddit: t,
					onClose: n
				} = e, o = Object(g.a)(), i = Object(r.d)(), [d, c] = Object(s.useState)(void 0), [l, u] = Object(s.useState)(!1), [m, b] = Object(s.useState)(!1), {
					isClosed: p,
					close: f
				} = function() {
					const [e, t] = Object(s.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), E = Object(x.a)();

				function v() {
					i(Object(P.f)({
						kind: K.b.SuccessMod,
						text: Y._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : a.a.createElement("div", {
					className: S.a.subredditGeotag
				}, a.a.createElement("div", {
					className: S.a.subredditTitle
				}, a.a.createElement(k.b, {
					className: S.a.icon,
					subredditOrProfile: Object(I.a)(t),
					linkTo: t.path
				}), a.a.createElement(h.a, {
					to: t.path
				}, a.a.createElement("div", {
					className: S.a.title
				}, t.prefixedName)), a.a.createElement("button", {
					className: S.a.dismiss,
					onClick: function() {
						z(t.id), E(M(t)), f(), n(t.id)
					}
				}, a.a.createElement(U.a, null))), a.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? a.a.createElement("div", {
					className: S.a.questionContainer
				}, a.a.createElement("div", {
					className: S.a.question
				}, Y._("Is this community specific to {place}?", [Y._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), a.a.createElement(_.o, {
					className: S.a.rejectButton,
					onClick: function() {
						b(!0), E(q(t, t.geoPlace.id))
					}
				}, "No"), a.a.createElement(_.l, {
					className: S.a.verifyButton,
					onClick: function() {
						z(t.id), E(W(t, t.geoPlace.id)), f(), n(t.id), v()
					}
				}, "Yes")) : a.a.createElement(y.a, {
					disabled: l,
					onFocus: () => E(A(t)),
					onPlace: function(e) {
						d && !e && E(J(t, d.id)), c(e), e && E(Q(t, e.id))
					},
					onSubmit: async function({
						place: e,
						sessionId: s
					}) {
						if (!e) return;
						u(!0);
						const a = await G(o(), {
							subredditId: t.id,
							placeId: e.id,
							source: e.source,
							sessionId: s
						});
						if (u(!1), !a.ok) return i(Object(P.f)({
							kind: K.b.Error,
							text: Y._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						E(H(t, e.id)), f(), n(t.id), v()
					}
				}))
			}
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = "geotagging-dismissed";

			function $() {
				const {
					error: e,
					loading: t,
					subreddits: n
				} = function() {
					const [e, t] = Object(s.useState)(!1), [n, a] = Object(s.useState)(!0), [r, o] = Object(s.useState)([]), i = Object(g.a)();
					return Object(s.useEffect)(() => {
						m(i()).then(e => {
							const t = e.body;
							a(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const n = Object(b.B)(Z) || [];
							o((t.data.geoContributableSubreddits || []).filter(e => !n.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [i]), {
						error: e,
						loading: n,
						subreddits: r
					}
				}(), [r, i] = Object(s.useState)(0);

				function d(e) {
					i(r + 1)
				}
				return e ? a.a.createElement("div", null, a.a.createElement(C, null), V._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? a.a.createElement(a.a.Fragment, null, a.a.createElement(C, null), a.a.createElement(o.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), a.a.createElement(o.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), a.a.createElement(o.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), a.a.createElement(o.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), a.a.createElement(o.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				})) : r >= n.length ? a.a.createElement(j, null) : a.a.createElement(a.a.Fragment, null, a.a.createElement(C, null), n.map(e => a.a.createElement(X, {
					key: e.id,
					subreddit: e,
					onClose: d
				})))
			}

			function ee(e) {
				const t = Object(r.e)(e => {
						var t, n;
						const s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.topics) || void 0 === n ? void 0 : n.models;
						if (!s) return;
						const a = Object.keys(s).find(e => "coronavirus" === s[e].slug);
						return s[a]
					}),
					n = Object(x.a)();
				return Object(s.useEffect)(() => {
					n(Object(p.d)())
				}, []), a.a.createElement(i.a, null, a.a.createElement(f.a, {
					className: S.a.Container,
					content: a.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, a.a.createElement(d.a, {
						key: "right",
						className: S.a.SidebarRight,
						listingName: "geotagging"
					}, t && a.a.createElement(c.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicUrl: t.url
					}))]
				}))
			}
		},
		"./src/redditGQL/operations/GeoContributableSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"534aaec9778e"}')
		},
		"./src/redditGQL/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"8a89fd7c7db1"}')
		},
		"./src/redditGQL/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/redditGQL/operations/SuggestSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"aea8f624d4b7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.5694fcf43646c64eb140.js.map