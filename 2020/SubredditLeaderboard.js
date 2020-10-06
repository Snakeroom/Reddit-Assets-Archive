// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.3bced8078da07d10d7ec.js
// Retrieved at 10/6/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_copyArray.js"),
				n = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return n(r(e))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var s = Math.floor,
				r = Math.random;
			e.exports = function(e, t) {
				return e + s(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_shuffleSelf.js"),
				n = s("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(n(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var s = -1,
					n = e.length,
					a = n - 1;
				for (t = void 0 === t ? n : t; ++s < t;) {
					var o = r(s, a),
						i = e[o];
					e[o] = e[s], e[s] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/first.js": function(e, t, s) {
			e.exports = s("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayShuffle.js"),
				n = s("./node_modules/lodash/_baseShuffle.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? r : n)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var s = i,
					c = d(e, i);
				t = n(t), e -= i;
				for (var l = r(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommunitiesDirectoryWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.a("Link", c.a), u = Object(i.t)({
				isFrontpage: i.y
			});
			t.a = u(e => n.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: c.a.LinkContainer
			}, n.a.createElement("div", {
				className: c.a.Column
			}, n.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(m, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), n.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), n.a.createElement(m, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(m, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), n.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), n.a.createElement("div", {
				className: c.a.Column
			}, n.a.createElement(m, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(m, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), n.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/throttle.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var p = e => i.a.createElement("div", {
					className: Object(r.a)(e.className, m.a.container),
					style: e.style
				}, i.a.createElement(c.i, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, u._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				g = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(y),
				k = s("./src/lib/lessComponent.tsx");

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
			const C = d.e[1] + 24,
				E = h.f + 8 + 152 + 32 + 16,
				v = E + C + 8,
				S = k.a.div("Container", f.a),
				j = k.a.wrapped(e => {
					var {
						className: t
					} = e, s = x(e, ["className"]);
					return i.a.createElement(p, _({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				N = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: n,
						isSticky: a
					} = e;
					return i.a.createElement("div", {
						className: Object(r.a)(s, {
							[f.a.StickyStyles]: a && !n,
							[f.a.StickyStylesFakeOverlay]: !!n
						})
					}, t)
				};
			class O extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > E
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
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: t,
							children: s,
							className: r,
							hideFooter: n
						}
					} = this, a = this.state.isAdSticky && !(!e && !s);
					return i.a.createElement(S, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(N, {
						isFakeOverlay: t,
						isSticky: a
					}, e, s, !n && i.a.createElement(g.a, null)), !this.props.hideBackToTop && i.a.createElement(j, null))
				}
			}
			const w = Object(b.t)();
			t.a = w(O)
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				g = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				k = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = s.n(k),
				x = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = m.a.div("BladeContainer", _.a), v = m.a.wrapped(h.a, "CloseIcon", _.a), S = m.a.div("LoadingTitleContainer", _.a), j = m.a.div("LoadingNavContainer", _.a), N = m.a.div("ShortLoadingNav", _.a), O = m.a.wrapped(g.a, "ThemedChevron", _.a), w = e => {
				var t = x(e, []);
				return o.a.createElement(E, null, o.a.createElement(v, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, C._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(p.o, null, o.a.createElement(S, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingTitle, t.isLoading && _.a.loading)
				})), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement(N, null), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement(N, null), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), o.a.createElement(O, null)))))
			}, T = Object(c.a)({
				getComponent: () => Object(u.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), L = Object(d.c)({
				isEditing: y.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: b.j
			});
			t.a = Object(i.b)(L)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(T, {
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
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "j", (function() {
				return x
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = s.n(n);
			const o = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				d = r.a.button("HomePageBreadcrumb", a.a),
				c = r.a.div("HomePageGroup", a.a),
				l = r.a.h1("FormPageTitle", a.a),
				m = r.a.div("FormPageSection", a.a),
				u = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				g = r.a.div("FormElement", a.a),
				h = r.a.div("FormGroupDescription", a.a),
				b = r.a.div("FormItem", a.a),
				y = r.a.h3("FormElementTitle", a.a),
				f = r.a.div("FormElementDescription", a.a),
				k = r.a.div("FormElementError", a.a),
				_ = r.a.div("FormElementSubGroup", a.a),
				x = r.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/constants/subredditLeaderboard.ts"),
				d = s("./src/reddit/contexts/ApiContext.tsx"),
				c = s("./src/reddit/endpoints/subreddit/local.ts"),
				l = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				u = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				p = s("./src/reddit/models/GoodContent/index.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = async (e, t) => {
				const s = await Object(l.a)(e, t);
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(m.c)(t)
				}
			};
			class b extends n.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, s) => {
						this.props.sendEvent(Object(u.c)(e, t, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, s)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						s = this.props && this.props.category && this.props.category.id,
						r = this.props.category && this.props.category.name;
					t !== s && r && !this.state[r] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, s = e && e.id;
					if (s !== i.h)(s || s === i.d) && h(this.props.gqlContext(), {
						categoryId: s,
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							s = e && e.subreddits,
							r = this.props.category && this.props.category.name || i.a;
						t && s && this.setState(e => Object.assign(Object.assign({}, e), {
							[r]: {
								rankings: t,
								subreddits: s
							}
						}))
					}).catch(e => console.error("Error >>>", e));
					else {
						const e = await async function(e, t) {
							const s = await Object(c.a)(e, t);
							if (s && s.ok) {
								const e = s.body,
									t = e && e.data && e.data.nearbySubreddits;
								return Object(m.a)(t)
							}
						}(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: s,
							subreddits: r
						} = e;
						this.setState(e => Object.assign(Object.assign({}, e), {
							[i.i]: {
								rankings: s,
								subreddits: r
							}
						}))
					}
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						s = t || i.a,
						r = this.state[s],
						o = r ? r.rankings : [],
						d = r ? r.subreddits : {},
						c = o && o[0] && o[0].id,
						l = d && d[c],
						m = !(l && l.isNSFW) || this.props.isOver18;
					return n.a.createElement(a.b, g({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: o,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: d
					}, this.props))
				}
			}
			t.a = Object(d.b)(Object(o.c)(b))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/icons/svgs/Triangle/index.tsx"),
				u = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				p = s.n(u);
			const g = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, {
					className: p.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: p.a.subredditDetailsContainer
				}, e.large ? a.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: p.a.smallText
				}, r.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				h = e => {
					const t = Object(i.a)(p.a.subredditRankItem, e.large && p.a.large),
						s = e.delta && e.delta > 0,
						r = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						n = e.delta ? s ? "#46D160" : "#EA0027" : "transparent";
					return a.a.createElement("li", {
						className: p.a.listItem,
						key: e.subreddit.displayText
					}, a.a.createElement(o.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: p.a.subredditRankItemColumn
					}, a.a.createElement("span", {
						className: p.a.rankText
					}, r), a.a.createElement(m.a, {
						className: Object(i.a)(p.a.arrow, !s && p.a.negative),
						style: {
							fill: n
						}
					}), a.a.createElement(g, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: p.a.regularText
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = s.n(o);
			const d = e => n.a.createElement("div", {
				className: Object(a.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, n.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), n.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/first.js"),
				a = s.n(n),
				o = s("./node_modules/lodash/times.js"),
				i = s.n(o),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = s("./src/config.ts"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				g = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/subredditLeaderboard.ts"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/Chip/index.m.less"),
				k = s.n(f);
			var _ = e => {
					const t = e.to ? l.a : "div",
						s = Object(u.a)(k.a.chip, e.isActive && k.a.active, e.className);
					return c.a.createElement(t, {
						className: s,
						to: e.to || ""
					}, e.children)
				},
				x = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				E = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				S = s.n(v);
			const j = e => {
					const t = !(!e.rankings || !e.rankings.length),
						s = !t && S.a.communityBannerPlaceholder,
						n = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						} : void 0,
						a = e.categoryName === b.i ? b.g.path : b.e;
					return c.a.createElement("div", {
						className: Object(u.a)(e.className, S.a.communityBanner, s),
						style: n
					}, t && c.a.createElement("h2", {
						className: S.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || b.c),
						to: a
					}, e.categoryName ? (e => e === b.i ? r.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : c.a.createElement(c.a.Fragment, null, r.fbt._("Top", null, {
						hk: "4bbkOp"
					}), c.a.createElement("span", {
						className: S.a.categoryName
					}, " ", r.fbt._("{categoryName}", [r.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), r.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				N = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, s) => {
					const r = e.subreddits[t.id];
					return c.a.createElement(p.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || b.c, r.name),
						rank: s,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: r
					})
				}), !e.rankings.length && O),
				O = c.a.createElement(c.a.Fragment, null, i()(5, e => c.a.createElement(g.a, {
					key: e
				}))),
				w = e => {
					const t = e.isSecondaryButton ? y.n : y.k;
					return c.a.createElement("div", {
						className: S.a.footer
					}, c.a.createElement(t, {
						className: S.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || b.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? r.fbt._("See All {categoryName}", [r.fbt._param("categoryName", e.categoryName)], {
						hk: "3mjiTN"
					}) : r.fbt._("See All", null, {
						hk: "2OZax8"
					}) : r.fbt._("View All", null, {
						hk: "4vfmcB"
					})))
				};

			function T(e) {
				return "".concat(b.e).concat(Object(x.f)(e), "/")
			}
			const L = e => c.a.createElement("div", {
				className: S.a.categoryPicker
			}, e.categories && e.categories.map(t => e.activeCategoryName === t.name ? null : c.a.createElement(_, {
				className: S.a.chip,
				key: t.name,
				to: T(t.name)
			}, t.name === b.i ? r.fbt._("Near You", null, {
				hk: "RuM7j"
			}) : t.name)));
			t.b = e => {
				const {
					subreddits: t,
					rankings: s,
					categoryName: r,
					categories: n
				} = e, o = Object(E.a)();
				Object(d.useEffect)(() => {
					o(Object(C.d)(r || b.c))
				}, []);
				const i = a()(s),
					l = t && i && t[i.id],
					u = "".concat(m.a.assetPath, "/img/leaderboard/banner-background.png"),
					p = l ? l.bannerBackgroundImage || u : void 0,
					g = e.to || r && T(r);
				return c.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, c.a.createElement(j, {
					bannerBackgroundImage: p,
					categoryName: r,
					onSendEventClick: e.onSendEventClick,
					rankings: s,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(N, {
					categoryName: r,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: s,
					shouldDisplayDelta: !1,
					subreddits: t
				}), c.a.createElement(w, {
					categoryName: r,
					isSecondaryButton: e.isSecondaryButton,
					onSendEventClick: e.onSendEventClick,
					to: g
				}), n && c.a.createElement(L, {
					categories: n,
					activeCategoryName: r
				}))
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts");
			const g = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				y = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = x(e);
					return Object(k.f)(t)
				},
				v = e => {
					const t = C(e);
					return Object(k.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = s.n(S);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(m.t)(), w = Object(a.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						r = t.redditStyle || Object(y.m)(e, {
							subredditId: s
						}),
						n = Object(f.S)(e);
					return r || n
				},
				nigtmode: f.S,
				subredditId: m.m,
				topPostVariant: b.d
			}));
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: r,
						headerButton: a,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? j.a.widgetContentOnly : j.a.widgetContent, g = !r && this.props.styles, h = g ? this.getWidgetBackgroundStyles() : {}, b = g ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(i.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: r,
							[j.a.clickable]: !!o,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: o,
						style: h
					}, d && n.a.createElement("div", {
						className: j.a.widgetHeader,
						style: b
					}, n.a.createElement("div", {
						className: Object(i.a)(j.a.widgetTitle, l)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), a), n.a.createElement("div", {
						className: Object(i.a)(p, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(u.o, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, N._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(w(Object(d.a)(Object(l.c)(T))))
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, s) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			}));
			var r = s("./src/reddit/constants/categories.tsx"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => t => Object.assign(Object.assign({}, n.defaults(t)), {
					action: "click",
					noun: Object(r.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, s) => a => Object.assign(Object.assign({}, n.defaults(a)), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: s && s.toLowerCase()
					}
				}),
				i = (e, t) => s => Object.assign(Object.assign({}, n.defaults(s)), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(r.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, s) => a => Object.assign(Object.assign({}, n.defaults(a)), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: s && s.toLowerCase()
					}
				}),
				c = (e, t) => s => Object.assign(Object.assign({}, n.defaults(s)), {
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(e),
						name: t && t.toLowerCase()
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
		},
		"./src/reddit/icons/svgs/Triangle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 10 8",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
			})))
		},
		"./src/reddit/pages/SubredditLeaderboard/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/SubredditLeaderboard/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/lodash/shuffle.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/constants/subredditLeaderboard.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				b = s("./src/reddit/helpers/trackers/screenview.ts"),
				y = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				f = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				k = s("./src/reddit/layout/page/Listing/index.tsx"),
				_ = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				C = s.n(x);
			const E = () => o.a.createElement("div", {
				className: C.a.bannerBackground
			}, o.a.createElement("div", {
				className: C.a.bannerContentContainer
			}, o.a.createElement("h1", {
				className: C.a.bannerHeader
			}, _.fbt._("Today's Top Growing Communities", null, {
				hk: "1J28A5"
			})), o.a.createElement("span", {
				className: C.a.bannerDescription
			}, _.fbt._("Browse Reddit's top growing communities. Find the top communities in your favorite category.", null, {
				hk: "4w2yrj"
			}))));
			var v = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				S = s("./node_modules/lodash/last.js"),
				j = s.n(S),
				N = s("./node_modules/lodash/times.js"),
				O = s.n(N),
				w = s("./node_modules/lodash/upperFirst.js"),
				T = s.n(w),
				L = s("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				P = s("./src/reddit/actions/subreddit/topSubreddits.ts"),
				I = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				F = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				W = s("./src/reddit/models/GoodContent/index.ts"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/subredditLeaderboard.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const M = 25,
				H = .5,
				A = Object(d.c)({
					hasPreviousPage: (e, t) => {
						let {
							categoryId: s
						} = t;
						return Object(R.c)(e, s)
					},
					hasNextPage: (e, t) => {
						let {
							categoryId: s
						} = t;
						return Object(R.b)(e, s)
					},
					isMod: D.I,
					rankings: (e, t) => {
						let {
							categoryId: s
						} = t;
						return Object(B.N)(e, s)
					},
					subreddits: B.Z
				}),
				G = Object(i.b)(A, e => ({
					fetchMoreSubreddits: (t, s) => e(Object(P.a)(t, s))
				}));
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							s = Object(R.d)(this.props.categoryId, this.props.categoryName);
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, s)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(y.e)(e, this.props.categoryName || p.c)), this.renderSubredditRankItemPlaceholders = () => o.a.createElement(o.a.Fragment, null, O()(5, e => o.a.createElement(F.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map((t, s) => {
						const r = this.props.subreddits[t.id];
						return o.a.createElement(I.a, {
							delta: t.rankDelta,
							key: r.id,
							large: !0,
							onItemClick: () => this.sendLeaderboardSubredditEventClick(r),
							rank: s,
							shouldDisplayDelta: e,
							subreddit: r
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: s,
						rankings: r
					} = this.props, n = j()(r), a = n && n.cursor, o = Object(L.a)(t, s);
					return {
						after: a,
						categoryId: e === p.a ? p.d : e,
						filter: W.a,
						first: M,
						isOnlyModIncluded: o
					}
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: s,
						isMod: r,
						rankings: n
					} = this.props, a = t || s, i = e === p.i, d = r && !i;
					return o.a.createElement("div", {
						className: C.a.mainContent
					}, o.a.createElement("div", {
						className: C.a.mainContentHeader
					}, o.a.createElement("h2", null, o.a.createElement("span", {
						className: C.a.mainContentHeaderText
					}, e ? i ? _.fbt._("Local Communities Near You", null, {
						hk: "2PsgJz"
					}) : _.fbt._("Today's Top Growing in {categoryName}", [_.fbt._param("categoryName", T()(e))], {
						hk: "4pneAv"
					}) : _.fbt._("Today's Top Growing Communities", null, {
						hk: "6LoyD"
					}))), d && o.a.createElement("span", {
						className: C.a.mainContentRankChangeText
					}, _.fbt._("Rank Change", null, {
						hk: "1DVGfi"
					}))), o.a.createElement("ol", {
						className: C.a.subredditRankingsList
					}, n ? this.renderSubredditRankItems(d) : this.renderSubredditRankItemPlaceholders(), a && o.a.createElement(v.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: H,
						rootMargin: "0px 0px 0px 0px"
					}, o.a.createElement("li", null, o.a.createElement(F.a, {
						large: !0
					})))))
				}
			}
			var J = Object(m.c)(G(Q)),
				V = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				K = s("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				Y = s.n(K);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const z = e => {
				const {
					category: t,
					children: s,
					className: r,
					isActive: n,
					tabIndex: a
				} = e, i = Object(c.a)(Y.a.categoryLink, n && Y.a.active, r);
				return o.a.createElement("li", null, o.a.createElement(V.a, Z({}, t.anchorProps, {
					className: i,
					"data-active": n,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: a,
					to: t.path || ""
				}), s, t.customIcon))
			};
			var U = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				X = s("./src/reddit/controls/Button/index.tsx"),
				q = s("./src/reddit/helpers/name/index.ts");
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = 36;
			class te extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: s
						} = this.props, {
							isExpanded: r
						} = this.state;
						if (!t || r || !s) return;
						return s < e.findIndex(e => e.name === t) + 1
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
						categoryItemHeight: s = ee,
						categoryListContainerClassName: r,
						children: n,
						childrenOffset: a = 0,
						currentCategoryName: i,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: m
					} = this.state, u = !m && d && s * d, g = a + (e ? s * e.length : 0), h = Object(c.a)(Y.a.categoryList, m && Y.a.expanded), b = e => !(!i || i !== Object(q.f)(e)), y = o.a.createElement("ul", {
						className: h,
						style: {
							height: u || g
						}
					}, n, e && e.map((e, r) => {
						const n = a + r * s;
						return o.a.createElement(z, {
							category: e,
							className: t,
							isActive: b(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: u && n >= u ? -1 : 0
						}, e.name === p.i ? $._("Near You", null, {
							hk: "3YIOzZ"
						}) : e.name)
					}));
					return o.a.createElement("div", {
						className: Object(c.a)(Y.a.categoryListContainer, r)
					}, y)
				}
				render() {
					const {
						buttonClassName: e,
						categories: t,
						className: s,
						header: r,
						headerClassName: n,
						initialNumberOfCategories: a
					} = this.props, i = t && a && t.length > a, d = Object(c.a)(s, Y.a.container);
					return o.a.createElement(U.a, {
						className: d,
						contentOnly: !0
					}, o.a.createElement("div", {
						className: Object(c.a)(Y.a.header, n)
					}, o.a.createElement("h2", null, r || $._("Categories", null, {
						hk: "46zLMb"
					}))), this.renderCategoryList(), i && o.a.createElement(X.o, {
						className: Object(c.a)(Y.a.button, e),
						onClick: this.toggleExpanded
					}, i && !this.state.isExpanded ? $._("Show More", null, {
						hk: "1pCiqD"
					}) : $._("Show Less", null, {
						hk: "2qT4h7"
					})))
				}
			}
			var se = te,
				re = s("./src/lib/lessComponent.tsx"),
				ne = s("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				ae = s.n(ne);
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ie = re.a.a("Link", ae.a), de = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return o.a.createElement(ie, {
					href: "/subreddits/".concat(t, "-1"),
					key: e
				}, e)
			};
			var ce = e => o.a.createElement(U.a, {
					className: ae.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: ae.a.Title
				}, oe._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), o.a.createElement("div", {
					className: ae.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(de))),
				le = s("./src/reddit/components/SidebarContainer/index.tsx"),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				ue = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				pe = s("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const ge = e => {
					const t = e.categoryName && Object(q.f)(e.categoryName);
					return o.a.createElement("div", {
						className: C.a.SidebarLeft
					}, o.a.createElement(le.a, null, o.a.createElement(se, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				he = e => {
					const t = e.widgetCategories[0],
						s = e.widgetCategories[1];
					return o.a.createElement("div", {
						className: C.a.SidebarRight
					}, o.a.createElement(le.a, null, o.a.createElement(pe.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(me.a, null), o.a.createElement(ue.a, null, o.a.createElement(pe.a, {
						category: s,
						className: C.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(ce, null))))
				};
			var be = s("./src/reddit/selectors/category.ts"),
				ye = s("./src/reddit/selectors/moderatorPermissions.ts");
			const fe = Object(g.t)(),
				ke = (e, t) => {
					let {
						match: s
					} = t;
					return Object(h.b)(s.params.categoryName || "")
				},
				_e = Object(u.Bc)(p.f),
				xe = Object(d.c)({
					categories: e => Object(be.c)(e, {
						categoriesOrder: _e
					}),
					categoryId: (e, t) => {
						const s = ke(0, t);
						return s === p.i ? p.h : s ? Object(be.g)(e, {
							categoryName: s
						}) : p.a
					},
					categoryName: ke,
					isMod: ye.h,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				Ce = Object(i.b)(xe),
				Ee = {
					id: p.a,
					name: p.b,
					path: p.e
				},
				ve = {
					customIcon: o.a.createElement(f.a, null),
					id: p.j,
					name: p.k
				};
			class Se extends o.a.Component {
				constructor(e) {
					super(e), this.getWidgetCategories = () => {
						const {
							categories: e
						} = this.props, t = e.filter(this.filterActiveCategory);
						return n()(t).slice(0, 2)
					}, this.updateWidgetCategories = e => {
						const {
							categories: t,
							categoryName: s
						} = this.props;
						if (e.categoryName !== s || e.categories.length !== t.length) {
							const e = this.getWidgetCategories();
							this.setWidgetCategories(e)
						}
					}, this.setWidgetCategories = e => this.setState({
						widgetCategories: e
					}), this.filterCategories = e => this.filterActiveCategory(e), this.filterActiveCategory = e => e.name !== this.props.categoryName, this.resetScrollPosition = () => {
						window.scrollTo(0, 0)
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(y.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, s) => this.props.sendEvent(Object(y.b)(e, t, s)), this.state = {
						widgetCategories: []
					}
				}
				componentDidMount() {
					const e = this.getWidgetCategories();
					this.setWidgetCategories(e), this.props.sendEvent(Object(b.d)())
				}
				componentDidUpdate(e) {
					this.resetScrollPosition(), this.updateWidgetCategories(e)
				}
				render() {
					const {
						className: e,
						isMod: t,
						shouldShowLocalRecommendations: s
					} = this.props, r = [Ee, ...s ? [p.g] : [], ...this.props.categories];
					t && r.unshift(ve);
					const n = Object(h.a)(p.e, r),
						a = t && this.props.categoryName === p.k,
						i = this.props.categoryId ? this.props.categoryName : a ? p.k : void 0,
						d = this.props.categoryId ? this.props.categoryId : a ? p.j : p.a;
					return o.a.createElement(l.a, null, o.a.createElement(k.a, {
						className: Object(c.a)(e, C.a.mainContent),
						content: o.a.createElement(J, {
							categoryId: d,
							categoryName: i
						}),
						disableFullscreen: !0,
						navBar: o.a.createElement(E, null),
						sidebars: [o.a.createElement(ge, {
							key: "left",
							categories: n,
							categoryName: i || p.b,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), o.a.createElement(he, {
							key: "right",
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = fe(Ce(Object(m.c)(Se)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.3bced8078da07d10d7ec.js.map