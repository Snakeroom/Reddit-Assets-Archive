// https://www.redditstatic.com/desktop2x/SubredditLeaderboard~Topic.ce62d9be017e62b42dfe.js
// Retrieved at 2/6/2020, 12:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard~Topic"], {
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/SidebarContainer/index.m.less"),
				o = r.n(s);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, r) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = r("./src/reddit/components/SidebarFooter/index.m.less"),
				d = r.n(a);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = o.a.a("Link", d.a);
			t.a = e => s.a.createElement(i.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: d.a.LinkContainer
			}, s.a.createElement("div", {
				className: d.a.Column
			}, s.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "4lyYaD"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, c._("Reddit App", null, {
				hk: "1ehrjP"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, c._("Reddit coins", null, {
				hk: "32iMaN"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, c._("Reddit premium", null, {
				hk: "RuO3A"
			})), s.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, c._("Reddit gifts", null, {
				hk: "2XziRN"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, c._("Communities", null, {
				hk: "3CJu37"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, c._("Top Posts", null, {
				hk: "2NOEW2"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, c._("Topics", null, {
				hk: "349RFt"
			}))), s.a.createElement("div", {
				className: d.a.Column
			}, s.a.createElement(l, {
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "1sqJKs"
			})), s.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "26ABvc"
			})), s.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "2Qmgdz"
			})), s.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "Mt40U"
			})), s.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "46IQJw"
			})), s.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("Terms", null, {
				hk: "4qRzfE"
			})), s.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("Privacy policy", null, {
				hk: "10K04G"
			})), s.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("Mod policy", null, {
				hk: "2gYc2T"
			})))), s.a.createElement("div", {
				className: d.a.Copyright
			}, c._("Reddit Inc © {year}. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/lodash/throttle.js"),
				o = r.n(s),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/i18n/components.tsx"),
				m = r("./src/reddit/components/BackToTop/index.m.less"),
				u = r.n(m),
				h = e => a.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, a.a.createElement(c.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, a.a.createElement(l.c, null, "Back to top"))),
				p = r("./src/reddit/components/SidebarFooter/index.tsx"),
				g = r("./src/reddit/constants/componentSizes.ts"),
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				y = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				_ = r.n(y),
				E = r("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
				}
				return r
			};
			const S = d.e[1] + 24,
				C = g.f + 8 + 152 + 32 + 16,
				v = C + S + 8,
				k = E.a.div("Container", _.a),
				T = E.a.wrapped(e => {
					var {
						className: t
					} = e, r = w(e, ["className"]);
					return a.a.createElement(h, x({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, r))
				}, "BackToTop", _.a),
				O = e => {
					let {
						categoriesPlacementVariant: t,
						children: r,
						className: s,
						isSticky: o
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[_.a.StickyStyles]: o,
							[_.a.LargeOffset]: Object(b.f)(t)
						})
					}, r)
				};
			class P extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > C
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							children: r,
							className: n,
							hideFooter: s
						}
					} = this, o = this.state.isAdSticky && !(!e && !r);
					return a.a.createElement(k, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(O, {
						categoriesPlacementVariant: t,
						isSticky: o
					}, e, r, !s && a.a.createElement(p.a, null)), !this.props.hideBackToTop && a.a.createElement(T, null))
				}
			}
			const j = Object(f.t)();
			t.a = j(P)
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				l = r("./src/lib/classNames/index.ts"),
				m = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/loadWithRetries/index.ts"),
				h = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = r("./src/reddit/i18n/components.tsx"),
				g = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				f = r("./src/reddit/icons/svgs/Close/index.tsx"),
				b = r("./src/reddit/selectors/moderatorPermissions.ts"),
				y = r("./src/reddit/selectors/structuredStyles.ts"),
				_ = r("./src/reddit/selectors/userPrefs.ts"),
				E = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = r.n(E),
				w = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
					}
					return r
				};
			const S = m.a.div("BladeContainer", x.a),
				C = m.a.wrapped(f.a, "CloseIcon", x.a),
				v = m.a.div("LoadingTitleContainer", x.a),
				k = m.a.div("LoadingNavContainer", x.a),
				T = m.a.div("ShortLoadingNav", x.a),
				O = m.a.wrapped(g.a, "ThemedChevron", x.a),
				P = e => {
					var t = w(e, []);
					return i.a.createElement(S, null, i.a.createElement(C, null), i.a.createElement(h.k, null, i.a.createElement(h.p, null, i.a.createElement(p.c, null, "Back to mod tools")), i.a.createElement(h.o, null, i.a.createElement(v, null, i.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingTitle, t.isLoading && x.a.loading)
					})), i.a.createElement(k, null, i.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
					}), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement(T, null), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
					}), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement(T, null), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
					}), i.a.createElement(O, null)))))
				},
				j = Object(c.a)({
					getComponent: () => Object(u.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), r.e("StructuredStyles")]).then(r.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
					ErrorComponent: () => i.a.createElement(P, {
						gradientType: "posts",
						isLoading: !1
					}),
					LoadingComponent: () => i.a.createElement(P, {
						gradientType: "posts",
						isLoading: !0
					})
				}),
				N = Object(d.c)({
					isEditing: y.j,
					isSubscriptionsPinned: _.b,
					moderatorPermissions: b.j
				});
			t.a = Object(a.b)(N)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(x.a.Container, e.isSubscriptionsPinned && x.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(j, {
					subredditId: e.subredditId
				})) : i.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return i
			})), r.d(t, "p", (function() {
				return a
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "o", (function() {
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "j", (function() {
				return x
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = r.n(s);
			const i = n.a.section("FormPage", o.a),
				a = n.a.h1("HomePageTitle", o.a),
				d = n.a.button("HomePageBreadcrumb", o.a),
				c = n.a.div("HomePageGroup", o.a),
				l = n.a.h1("FormPageTitle", o.a),
				m = n.a.div("FormPageSection", o.a),
				u = n.a.div("FormGroup", o.a),
				h = n.a.h2("FormGroupTitle", o.a),
				p = n.a.div("FormElement", o.a),
				g = n.a.div("FormGroupDescription", o.a),
				f = n.a.div("FormItem", o.a),
				b = n.a.h3("FormElementTitle", o.a),
				y = n.a.div("FormElementDescription", o.a),
				_ = n.a.div("FormElementError", o.a),
				E = n.a.div("FormElementSubGroup", o.a),
				x = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, r) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => r => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(h.widget)(r, {
					subredditId: e,
					widgetKind: t
				})
			}, h.defaults);
			var g = r("./src/reddit/i18n/components.tsx"),
				f = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = r("./src/reddit/selectors/experiments/topPosts.ts"),
				y = r("./src/reddit/selectors/structuredStyles.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/models/Theme/index.ts"),
				x = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const w = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				S = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = w(e);
					return Object(E.f)(t)
				},
				v = e => {
					const t = S(e);
					return Object(E.f)(t)
				};
			var k = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				T = r.n(k);
			const O = Object(m.t)(),
				P = Object(o.b)(() => Object(i.c)({
					forceRedditStyle: (e, t) => {
						const r = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(y.m)(e, {
								subredditId: r
							}),
							s = Object(_.R)(e);
						return n || s
					},
					nigtmode: _.R,
					subredditId: m.m,
					topPostVariant: b.d
				}));
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(p(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.borderColor = Object(f.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = S(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: n,
						headerButton: o,
						onClick: i,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, h = r ? T.a.widgetContentOnly : T.a.widgetContent, p = !n && this.props.styles, f = p ? this.getWidgetBackgroundStyles() : {}, b = p ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, T.a.widgetBackground, {
							[T.a.redditStyle]: n,
							[T.a.clickable]: !!i,
							[T.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: f
					}, d && s.a.createElement("div", {
						className: T.a.widgetHeader,
						style: b
					}, s.a.createElement("div", {
						className: Object(a.a)(T.a.widgetTitle, l)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), o), s.a.createElement("div", {
						className: Object(a.a)(h, {
							[T.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(u.n, {
						className: T.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, s.a.createElement(g.c, null, "See More")))
				}
			}
			t.a = O(P(Object(d.a)(Object(l.b)(j))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, r) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = r.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
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
		}
	}
]);
//# sourceMappingURL=SubredditLeaderboard~Topic.ce62d9be017e62b42dfe.js.map