// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.f5ba305ad983c3baa1ab.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_copyArray.js"),
				s = r("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return s(n(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_shuffleSelf.js"),
				s = r("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(s(e))
			}
		},
		"./node_modules/lodash/first.js": function(e, t, r) {
			e.exports = r("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayShuffle.js"),
				s = r("./node_modules/lodash/_baseShuffle.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? n : s)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseTimes.js"),
				s = r("./node_modules/lodash/_castFunction.js"),
				a = r("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var r = i,
					c = d(e, i);
				t = s(t), e -= i;
				for (var l = n(c, t); ++r < e;) t(r);
				return l
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1Le71sZe40-ak2-JlezTO9",
				header: "_1xEfG7rp7vrKfyvMhw4d7B",
				categoryList: "_2TokM04UC_UEG0cmYY5zqV",
				expanded: "H2nL15newZjevdZ9kmsw6",
				categoryLink: "_3p0xqZowgYYjYMOdinU151",
				active: "_1eQr_TkUOm6M6XqM8GTZqp",
				button: "_36EQoGTqXwZI27n50gESaC"
			}
		},
		"./src/reddit/components/CommunitiesDirectoryWidget/index.m.less": function(e, t, r) {
			e.exports = {
				Widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				LinkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				linkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				Title: "oaSSd7FLyCKYFcVrHeOpC",
				title: "oaSSd7FLyCKYFcVrHeOpC",
				Link: "_1EnYMKlnIu6EN56KYszO66",
				link: "_1EnYMKlnIu6EN56KYszO66"
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
				a = r.n(s);
			t.a = n.a.div("container", a.a)
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
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = r("./src/reddit/components/SidebarFooter/index.m.less"),
				d = r.n(i);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.a("Link", d.a);
			t.a = e => s.a.createElement(o.a, {
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", s.a)
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
				a = r.n(s),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/i18n/components.tsx"),
				m = r("./src/reddit/components/BackToTop/index.m.less"),
				u = r.n(m),
				p = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, i.a.createElement(c.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				g = r("./src/reddit/components/SidebarFooter/index.tsx"),
				h = r("./src/reddit/constants/componentSizes.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				E = r.n(y),
				f = r("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
				}
				return r
			};
			const k = d.e[1] + 24,
				_ = h.f + 8 + 152 + 32 + 16,
				S = _ + k + 8,
				v = f.a.div("Container", E.a),
				N = f.a.wrapped(e => {
					var {
						className: t
					} = e, r = x(e, ["className"]);
					return i.a.createElement(p, C({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, r))
				}, "BackToTop", E.a),
				j = e => {
					let {
						children: t,
						className: r,
						isSticky: s
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(r, {
							[E.a.StickyStyles]: s
						})
					}, t)
				};
			class O extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > _
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
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.H), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							children: t,
							className: r,
							hideFooter: n
						}
					} = this, s = this.state.isAdSticky && !(!e && !t);
					return i.a.createElement(v, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(j, {
						isSticky: s
					}, e, t, !n && i.a.createElement(g.a, null)), !this.props.hideBackToTop && i.a.createElement(N, null))
				}
			}
			const w = Object(b.t)();
			t.a = w(O)
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
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				l = r("./src/lib/classNames/index.ts"),
				m = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/loadWithRetries/index.ts"),
				p = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				g = r("./src/reddit/i18n/components.tsx"),
				h = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				b = r("./src/reddit/icons/svgs/Close/index.tsx"),
				y = r("./src/reddit/selectors/moderatorPermissions.ts"),
				E = r("./src/reddit/selectors/structuredStyles.ts"),
				f = r("./src/reddit/selectors/userPrefs.ts"),
				C = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = r.n(C),
				k = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
					}
					return r
				};
			const _ = m.a.div("BladeContainer", x.a),
				S = m.a.wrapped(b.a, "CloseIcon", x.a),
				v = m.a.div("LoadingTitleContainer", x.a),
				N = m.a.div("LoadingNavContainer", x.a),
				j = m.a.div("ShortLoadingNav", x.a),
				O = m.a.wrapped(h.a, "ThemedChevron", x.a),
				w = e => {
					var t = k(e, []);
					return o.a.createElement(_, null, o.a.createElement(S, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, o.a.createElement(g.c, null, "Back to mod tools")), o.a.createElement(p.o, null, o.a.createElement(v, null, o.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingTitle, t.isLoading && x.a.loading)
					})), o.a.createElement(N, null, o.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
					}), o.a.createElement(O, null)), o.a.createElement(N, null, o.a.createElement(j, null), o.a.createElement(O, null)), o.a.createElement(N, null, o.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
					}), o.a.createElement(O, null)), o.a.createElement(N, null, o.a.createElement(j, null), o.a.createElement(O, null)), o.a.createElement(N, null, o.a.createElement("div", {
						className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
					}), o.a.createElement(O, null)))))
				},
				T = Object(c.a)({
					getComponent: () => Object(u.a)(() => Promise.all([r.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), r.e("StructuredStyles")]).then(r.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
					ErrorComponent: () => o.a.createElement(w, {
						gradientType: "posts",
						isLoading: !1
					}),
					LoadingComponent: () => o.a.createElement(w, {
						gradientType: "posts",
						isLoading: !0
					})
				}),
				L = Object(d.c)({
					isEditing: E.j,
					isSubscriptionsPinned: f.b,
					moderatorPermissions: y.j
				});
			t.a = Object(i.b)(L)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(x.a.Container, e.isSubscriptionsPinned && x.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(T, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
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
				return o
			})), r.d(t, "p", (function() {
				return i
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
				return p
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "j", (function() {
				return x
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = r.n(s);
			const o = n.a.section("FormPage", a.a),
				i = n.a.h1("HomePageTitle", a.a),
				d = n.a.button("HomePageBreadcrumb", a.a),
				c = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				m = n.a.div("FormPageSection", a.a),
				u = n.a.div("FormGroup", a.a),
				p = n.a.h2("FormGroupTitle", a.a),
				g = n.a.div("FormElement", a.a),
				h = n.a.div("FormGroupDescription", a.a),
				b = n.a.div("FormItem", a.a),
				y = n.a.h3("FormElementTitle", a.a),
				E = n.a.div("FormElementDescription", a.a),
				f = n.a.div("FormElementError", a.a),
				C = n.a.div("FormElementSubGroup", a.a),
				x = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/sampleSize.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/lodash/first.js"),
				d = r.n(i),
				c = r("./node_modules/lodash/times.js"),
				l = r.n(c),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = r("./src/config.ts"),
				p = r("./src/lib/classNames/index.ts"),
				g = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				h = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = r("./src/reddit/constants/subredditLeaderboard.ts"),
				E = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/controls/Chip/index.m.less"),
				C = r.n(f);
			var x = e => {
					const t = e.to ? m.a : "div",
						r = Object(p.a)(C.a.chip, e.isActive && C.a.active, e.className);
					return o.a.createElement(t, {
						className: r,
						to: e.to || ""
					}, e.children)
				},
				k = r("./src/reddit/helpers/name/index.ts"),
				_ = r("./src/reddit/i18n/components.tsx"),
				S = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				v = r.n(S);
			const N = e => {
					const t = !(!e.rankings || !e.rankings.length),
						r = !t && v.a.communityBannerPlaceholder,
						n = e.bannerBackgroundImage ? {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						} : void 0;
					return o.a.createElement("div", {
						className: Object(p.a)(e.className, v.a.communityBanner, r),
						style: n
					}, t && o.a.createElement("h2", {
						className: v.a.communityBannerText
					}, o.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || y.c),
						to: e.categoryName === y.m ? "".concat(y.e).concat(y.m) : y.e
					}, o.a.createElement(o.a.Fragment, null, e.categoryName ? (e => e === y.m ? o.a.createElement(_.c, null, "Up-and-coming Communities") : o.a.createElement(o.a.Fragment, null, "Top", o.a.createElement("span", {
						className: v.a.categoryName
					}, " ", o.a.createElement(_.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				j = e => o.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const r = e.subreddits[t.id];
					return o.a.createElement(g.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || y.c, r.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: r
					})
				}), !e.rankings.length && O),
				O = o.a.createElement(o.a.Fragment, null, l()(5, e => o.a.createElement(h.a, {
					key: e
				}))),
				w = e => {
					const t = e.isSecondaryButton ? E.k : E.h;
					return o.a.createElement("div", {
						className: v.a.footer
					}, o.a.createElement(t, {
						className: v.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || y.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? o.a.createElement(_.c, null, "See All ", o.a.createElement(_.b, {
						name: "categoryName"
					}, e.categoryName)) : o.a.createElement(_.c, null, "See All") : o.a.createElement(_.c, null, "View all")))
				},
				T = e => o.a.createElement("div", {
					className: v.a.categoryPicker
				}, e.categories && e.categories.map(e => o.a.createElement(x, {
					className: v.a.chip,
					key: e.name,
					to: "".concat(y.e).concat(Object(k.f)(e.name), "/")
				}, e.name)));
			var L = e => {
					const t = d()(e.rankings),
						r = e.subreddits && t && e.subreddits[t.id],
						n = "".concat(u.a.assetPath, "/img/leaderboard/banner-background.png"),
						s = r ? r.bannerBackgroundImage || n : void 0,
						a = e.to || e.categoryName && "".concat(y.e).concat(Object(k.f)(e.categoryName) || "", "/");
					return o.a.createElement(b.a, {
						className: e.className,
						contentOnly: !0
					}, o.a.createElement(N, {
						bannerBackgroundImage: s,
						categoryName: e.categoryName,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings
					}), o.a.createElement(j, {
						categoryName: e.categoryName,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings,
						shouldDisplayDelta: !1,
						subreddits: e.subreddits
					}), o.a.createElement(w, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: a
					}), e.categories && o.a.createElement(T, {
						categories: e.categories
					}))
				},
				P = r("./src/reddit/components/TrackingHelper/index.tsx"),
				I = r("./src/reddit/contexts/ApiContext.tsx"),
				W = r("./src/reddit/endpoints/subreddit/models.ts"),
				B = r("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				F = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				R = r("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				H = r("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = async (e, t) => {
				const r = await Object(B.a)(e, t);
				if (r && r.ok) {
					const e = r.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(F.c)(t)
				}
			}, D = async e => {
				const t = s()(H.a, 5),
					r = await Object(W.a)(e, {
						names: t
					});
				if (r && r.ok) {
					const e = r.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(F.a)(t)
				}
			};
			class Q extends o.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, r = e && e.id;
						r !== y.l ? (r || r === y.d) && A(this.props.gqlContext(), {
							categoryId: r,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								r = e && e.subreddits,
								n = this.props.category && this.props.category.name || y.a;
							t && r && this.setState(e => Object.assign({}, e, {
								[n]: {
									rankings: t,
									subreddits: r
								}
							}))
						}).catch(e => console.error("Error >>>", e)) : D(this.props.gqlContext()).then(e => {
							if (!e) return;
							const {
								rankings: t,
								subreddits: r
							} = e;
							this.setState(e => Object.assign({}, e, {
								[y.m]: {
									rankings: t,
									subreddits: r
								}
							}))
						})
					}, this.sendEventClick = (e, t, r) => {
						this.props.sendEvent(Object(R.c)(e, t, r)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, r)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						r = this.props && this.props.category && this.props.category.id,
						n = this.props.category && this.props.category.name;
					t !== r && n && !this.state[n] && this.fetchTopSubreddits()
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						r = t || y.a,
						n = this.state[r],
						s = n ? n.rankings : [],
						a = n ? n.subreddits : {};
					return o.a.createElement(L, M({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: s,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: a
					}, this.props))
				}
			}
			t.a = Object(I.b)(Object(P.c)(Q))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/i18n/components.tsx"),
				m = e => s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 10 8",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
				}))),
				u = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				p = r.n(u);
			r.d(t, "a", (function() {
				return h
			}));
			const g = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(c.b, {
					className: p.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), s.a.createElement("span", {
					className: p.a.subredditDetailsContainer
				}, e.large ? s.a.createElement(d.a, {
					subredditName: e.subreddit.name
				}, s.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText)) : s.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText), null === e.rank && s.a.createElement("span", {
					className: p.a.smallText
				}, s.a.createElement(l.c, null, "This community hasn't been ranked yet.")))),
				h = e => {
					const t = Object(o.a)(p.a.subredditRankItem, e.large && p.a.large),
						r = e.delta && e.delta > 0,
						n = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(i.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						d = e.delta ? r ? "#46D160" : "#EA0027" : "transparent";
					return s.a.createElement("li", {
						className: p.a.listItem,
						key: e.subreddit.displayText
					}, s.a.createElement(a.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, s.a.createElement("div", {
						className: p.a.subredditRankItemColumn
					}, s.a.createElement("span", {
						className: p.a.rankText
					}, n), s.a.createElement(m, {
						className: Object(o.a)(p.a.arrow, !r && p.a.negative),
						style: {
							fill: d
						}
					}), s.a.createElement(g, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && s.a.createElement("span", {
						className: p.a.regularText
					}, e.delta ? Object(i.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = r.n(o);
			const d = e => s.a.createElement("div", {
				className: Object(a.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, s.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, r) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb"
			}
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
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/selectors/telemetry.ts");
			const g = (e, t) => r => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(r, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var h = r("./src/reddit/i18n/components.tsx"),
				b = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				y = r("./src/reddit/selectors/experiments/topPosts.ts"),
				E = r("./src/reddit/selectors/structuredStyles.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/models/Theme/index.ts"),
				x = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const k = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = k(e);
					return Object(C.f)(t)
				},
				v = e => {
					const t = _(e);
					return Object(C.f)(t)
				};
			var N = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = r.n(N);
			const O = Object(m.t)(),
				w = Object(a.b)(() => Object(o.c)({
					forceRedditStyle: (e, t) => {
						const r = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(E.m)(e, {
								subredditId: r
							}),
							s = Object(f.Q)(e);
						return n || s
					},
					nigtmode: f.Q,
					subredditId: m.m,
					topPostVariant: y.d
				}));
			class T extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(g(e, t)), this.setState({
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
					return e.backgroundColor = k(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = S(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: r,
						forceRedditStyle: n,
						headerButton: a,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = r ? j.a.widgetContentOnly : j.a.widgetContent, g = !n && this.props.styles, b = g ? this.getWidgetBackgroundStyles() : {}, y = g ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(i.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: n,
							[j.a.clickable]: !!o,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: o,
						style: b
					}, d && s.a.createElement("div", {
						className: j.a.widgetHeader,
						style: y
					}, s.a.createElement("div", {
						className: Object(i.a)(j.a.widgetTitle, l)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), a), s.a.createElement("div", {
						className: Object(i.a)(p, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(u.n, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, s.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = O(w(Object(d.a)(Object(l.c)(T))))
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, r) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/categories.tsx"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = e => t => Object.assign({}, s.defaults(t), {
					action: "click",
					noun: Object(n.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, r) => a => Object.assign({}, s.defaults(a), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.d)(t),
						name: r && r.toLowerCase()
					}
				}),
				i = (e, t) => r => Object.assign({}, s.defaults(r), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, r) => a => Object.assign({}, s.defaults(a), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.d)(t),
						name: r && r.toLowerCase()
					}
				})
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
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
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
		"./src/reddit/pages/SubredditLeaderboard/index.m.less": function(e, t, r) {
			e.exports = {
				SidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				sidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				SidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				sidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				bannerBackground: "_1xtP5WlAH3pNEC6rHXHeXD",
				bannerContentContainer: "_3cH0x5dE0jolJn0db5DqCT",
				bannerHeader: "_2N_HhXeWtDPq6aBy9lSnQK",
				bannerDescription: "_28W4vqZux6r8Ji5kDHIH2g",
				mainContent: "_3GPSAJ3Tfj_PbjPQbBl707",
				mainContentHeader: "HDnd1PwEGlAuS4a0n11JH",
				mainContentHeaderText: "_FryWXes2c2GhZzBHd7Rz",
				mainContentRankChangeText: "NF1HHniDqzG-0fox1nFBs",
				subredditRankingsList: "UGHNtX0DV78XSU_nT_p_l"
			}
		},
		"./src/reddit/pages/SubredditLeaderboard/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/shuffle.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				p = r("./src/reddit/constants/subredditLeaderboard.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				b = r("./src/reddit/helpers/trackers/screenview.ts"),
				y = r("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				E = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				f = r("./src/reddit/layout/page/Listing/index.tsx"),
				C = r("./src/reddit/i18n/components.tsx"),
				x = r("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				k = r.n(x);
			const _ = () => o.a.createElement("div", {
				className: k.a.bannerBackground
			}, o.a.createElement("div", {
				className: k.a.bannerContentContainer
			}, o.a.createElement("h1", {
				className: k.a.bannerHeader
			}, o.a.createElement(C.c, null, "Today's Top Growing Communities")), o.a.createElement("span", {
				className: k.a.bannerDescription
			}, o.a.createElement(C.c, null, "Browse Reddit's top growing communities. Find the top communities in your favorite category."))));
			var S = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				v = r("./node_modules/lodash/last.js"),
				N = r.n(v),
				j = r("./node_modules/lodash/times.js"),
				O = r.n(j),
				w = r("./node_modules/lodash/upperFirst.js"),
				T = r.n(w),
				L = r("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				P = r("./src/reddit/actions/subreddit/topSubreddits.ts"),
				I = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				W = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				B = r("./src/reddit/selectors/subreddit.ts"),
				F = r("./src/reddit/selectors/subredditLeaderboard.ts"),
				R = r("./src/reddit/selectors/user.ts");
			const H = 25,
				M = .5,
				A = Object(d.c)({
					hasPreviousPage: (e, t) => {
						let {
							categoryId: r
						} = t;
						return Object(F.c)(e, r)
					},
					hasNextPage: (e, t) => {
						let {
							categoryId: r
						} = t;
						return Object(F.b)(e, r)
					},
					isMod: R.H,
					rankings: (e, t) => {
						let {
							categoryId: r
						} = t;
						return Object(B.K)(e, r)
					},
					subreddits: B.V
				}),
				D = Object(i.b)(A, e => ({
					fetchMoreSubreddits: (t, r) => e(Object(P.a)(t, r))
				}));
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							r = this.makeCategoryRankingsKey();
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, r)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(y.d)(e, this.props.categoryName || p.c)), this.renderSubredditRankItemPlaceholders = () => o.a.createElement(o.a.Fragment, null, O()(5, e => o.a.createElement(W.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map(t => {
						const r = this.props.subreddits[t.id];
						return o.a.createElement(I.a, {
							delta: t.rankDelta,
							key: r.id,
							large: !0,
							onItemClick: () => this.sendLeaderboardSubredditEventClick(r),
							rank: t.rank,
							shouldDisplayDelta: e,
							subreddit: r
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: r,
						rankings: n
					} = this.props, s = N()(n), a = s && s.cursor, o = Object(L.a)(t, r);
					return {
						after: a,
						categoryId: e === p.a ? p.d : e,
						first: H,
						isOnlyModIncluded: o
					}
				}
				makeCategoryRankingsKey() {
					const {
						categoryId: e,
						categoryName: t
					} = this.props;
					return Object(F.d)(e, t === p.h, t === p.m)
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: r,
						isMod: n,
						rankings: s
					} = this.props, a = t || r, i = e === p.m, d = n && !i;
					return o.a.createElement("div", {
						className: k.a.mainContent
					}, o.a.createElement("div", {
						className: k.a.mainContentHeader
					}, o.a.createElement("h2", null, o.a.createElement("span", {
						className: k.a.mainContentHeaderText
					}, e ? i ? o.a.createElement(C.c, null, "Up-and-coming Communities") : o.a.createElement(C.c, null, "Today's Top Growing in", " ", o.a.createElement(C.b, {
						name: "categoryName"
					}, T()(e))) : o.a.createElement(C.c, null, "Today's Top Growing Communities"))), d && o.a.createElement("span", {
						className: k.a.mainContentRankChangeText
					}, o.a.createElement(C.c, null, "Rank Change"))), o.a.createElement("ol", {
						className: k.a.subredditRankingsList
					}, s ? this.renderSubredditRankItems(d) : this.renderSubredditRankItemPlaceholders(), a && o.a.createElement(S.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: M,
						rootMargin: "0px 0px 0px 0px"
					}, o.a.createElement("li", null, o.a.createElement(W.a, {
						large: !0
					})))))
				}
			}
			var G = Object(m.c)(D(Q)),
				J = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				K = r("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				V = r.n(K);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const z = e => {
				const {
					category: t,
					children: r,
					className: n,
					isActive: s,
					tabIndex: a
				} = e, i = Object(c.a)(V.a.categoryLink, s && V.a.active, n);
				return o.a.createElement("li", null, o.a.createElement(J.a, U({}, t.anchorProps, {
					className: i,
					"data-active": s,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: a,
					to: t.path || ""
				}), r, t.customIcon))
			};
			var X = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Y = r("./src/reddit/controls/Button/index.tsx"),
				Z = r("./src/reddit/helpers/name/index.ts");
			const q = 36;
			class $ extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: r
						} = this.props, {
							isExpanded: n
						} = this.state;
						if (!t || n || !r) return;
						return r < e.findIndex(e => e.name === t) + 1
					}, this.toggleExpanded = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}), this.props.onMoreLessClick)
					}
				}
				componentDidMount() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				componentDidUpdate() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				renderCategoryList() {
					const {
						categories: e,
						categoryItemClassName: t,
						categoryItemHeight: r = q,
						categoryListContainerClassName: n,
						children: s,
						childrenOffset: a = 0,
						currentCategoryName: i,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: m
					} = this.state, u = !m && d && r * d, p = a + (e ? r * e.length : 0), g = Object(c.a)(V.a.categoryList, m && V.a.expanded), h = e => !(!i || i !== Object(Z.f)(e)), b = o.a.createElement("ul", {
						className: g,
						style: {
							height: u || p
						}
					}, s, e && e.map((e, n) => {
						const s = a + n * r;
						return o.a.createElement(z, {
							category: e,
							className: t,
							isActive: h(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: u && s >= u ? -1 : 0
						}, e.name)
					}));
					return o.a.createElement("div", {
						className: Object(c.a)(V.a.categoryListContainer, n)
					}, b)
				}
				render() {
					const {
						buttonClassName: e,
						buttonText: t = "Show",
						categories: r,
						className: n,
						header: s,
						headerClassName: a,
						initialNumberOfCategories: i
					} = this.props, d = r && i && r.length > i, l = d && !this.state.isExpanded ? "".concat(t, " More") : "".concat(t, " Less"), m = Object(c.a)(n, V.a.container);
					return o.a.createElement(X.a, {
						className: m,
						contentOnly: !0
					}, o.a.createElement("div", {
						className: Object(c.a)(V.a.header, a)
					}, o.a.createElement("h2", null, s || o.a.createElement(C.c, null, "Categories"))), this.renderCategoryList(), d && o.a.createElement(Y.n, {
						className: Object(c.a)(V.a.button, e),
						onClick: this.toggleExpanded
					}, o.a.createElement(C.c, null, l)))
				}
			}
			var ee = $,
				te = r("./src/lib/lessComponent.tsx"),
				re = r("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				ne = r.n(re);
			const se = te.a.a("Link", ne.a),
				ae = e => {
					const t = "#" === e ? "0" : e.toLowerCase();
					return o.a.createElement(se, {
						href: "/subreddits/".concat(t, "-1"),
						key: e
					}, e)
				};
			var oe = e => o.a.createElement(X.a, {
					className: ne.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: ne.a.Title
				}, o.a.createElement(C.c, null, "Browse Communities A-Z")), o.a.createElement("div", {
					className: ne.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(ae))),
				ie = r("./src/reddit/components/SidebarContainer/index.tsx"),
				de = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				ce = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				le = r("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const me = e => {
					const t = e.categoryName && Object(Z.f)(e.categoryName);
					return o.a.createElement("div", {
						className: k.a.SidebarLeft
					}, o.a.createElement(ie.a, null, o.a.createElement(ee, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				ue = e => {
					const t = e.widgetCategories[0],
						r = e.widgetCategories[1];
					return o.a.createElement("div", {
						className: k.a.SidebarRight
					}, o.a.createElement(ie.a, null, o.a.createElement(le.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(de.a, null), o.a.createElement(ce.a, null, o.a.createElement(le.a, {
						category: r,
						className: k.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(oe, null))))
				};
			var pe = r("./src/reddit/selectors/category.ts"),
				ge = r("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				he = r("./src/reddit/selectors/moderatorPermissions.ts");
			const be = Object(g.t)(),
				ye = (e, t) => {
					let {
						match: r
					} = t;
					return Object(h.b)(r.params.categoryName || "")
				},
				Ee = Object(u.Nb)(p.f),
				fe = Object(d.c)({
					categories: e => Object(pe.c)(e, {
						categoriesOrder: Ee
					}),
					categoryId: (e, t) => {
						const r = ye(0, t);
						return r === p.m ? p.l : r ? e.categories.nameToId[r] : p.a
					},
					categoryName: ye,
					isMod: he.h,
					isUpAndComingExperiment: ge.b
				}),
				Ce = Object(i.b)(fe),
				xe = {
					id: p.a,
					name: p.b,
					path: p.e
				},
				ke = {
					customIcon: o.a.createElement(E.a, null),
					id: p.g,
					name: p.h
				};
			class _e extends o.a.Component {
				constructor(e) {
					super(e), this.getWidgetCategories = () => {
						const {
							categories: e
						} = this.props, t = e.filter(this.filterActiveCategory);
						return s()(t).slice(0, 2)
					}, this.updateWidgetCategories = e => {
						const {
							categories: t,
							categoryName: r
						} = this.props;
						if (e.categoryName !== r || e.categories.length !== t.length) {
							const e = this.getWidgetCategories();
							this.setWidgetCategories(e)
						}
					}, this.setWidgetCategories = e => this.setState({
						widgetCategories: e
					}), this.filterCategories = e => this.filterActiveCategory(e), this.filterActiveCategory = e => e.name !== this.props.categoryName, this.resetScrollPosition = () => {
						window.scrollTo(0, 0)
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(y.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, r) => this.props.sendEvent(Object(y.b)(e, t, r)), this.state = {
						widgetCategories: []
					}
				}
				componentDidMount() {
					const e = this.getWidgetCategories();
					this.setWidgetCategories(e), this.props.sendEvent(Object(b.c)())
				}
				componentDidUpdate(e) {
					this.resetScrollPosition(), this.updateWidgetCategories(e)
				}
				render() {
					const {
						className: e,
						isMod: t,
						isUpAndComingExperiment: r
					} = this.props, n = [xe, ...r ? [p.k] : [], ...this.props.categories];
					t && n.unshift(ke);
					const s = Object(h.a)(p.e, n),
						a = t && this.props.categoryName === p.h,
						i = this.props.categoryId ? this.props.categoryName : a ? p.h : void 0,
						d = this.props.categoryId ? this.props.categoryId : a ? p.g : p.a;
					return o.a.createElement(l.a, null, o.a.createElement(f.a, {
						className: Object(c.a)(e, k.a.mainContent),
						content: o.a.createElement(G, {
							categoryId: d,
							categoryName: i
						}),
						disableFullscreen: !0,
						navBar: o.a.createElement(_, null),
						sidebars: [o.a.createElement(me, {
							categories: s,
							categoryName: i || p.b,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), o.a.createElement(ue, {
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = be(Ce(Object(m.c)(_e)))
		}
	}
]);
//# sourceMappingURL=SubredditLeaderboard.f5ba305ad983c3baa1ab.js.map