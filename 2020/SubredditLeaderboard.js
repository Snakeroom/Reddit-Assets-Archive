// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.aa14cfc29d6be3e3d158.js
// Retrieved at 10/26/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard", "FrontpageSidebar"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_copyArray.js"),
				a = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return a(r(e))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				r = Math.random;
			e.exports = function(e, t) {
				return e + n(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_shuffleSelf.js"),
				a = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(a(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					a = e.length,
					s = a - 1;
				for (t = void 0 === t ? a : t; ++n < t;) {
					var o = r(n, s),
						i = e[o];
					e[o] = e[n], e[n] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/first.js": function(e, t, n) {
			e.exports = n("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayShuffle.js"),
				a = n("./node_modules/lodash/_baseShuffle.js"),
				s = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (s(e) ? r : a)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				a = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > o) return [];
				var n = i,
					c = d(e, i);
				t = a(t), e -= i;
				for (var l = r(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunitiesDirectoryWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SidebarContainer/index.m.less"),
				s = n.n(a);
			t.a = r.a.div("container", s.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/components/SidebarFooter/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = s.a.a("Link", c.a), u = Object(i.t)({
				isFrontpage: i.y
			});
			t.a = u(e => a.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, a.a.createElement("div", {
				className: c.a.LinkContainer
			}, a.a.createElement("div", {
				className: c.a.Column
			}, a.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), a.a.createElement(m, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && a.a.createElement(a.a.Fragment, null, a.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), a.a.createElement("div", {
				className: c.a.Column
			}, a.a.createElement(m, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), a.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), a.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), a.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), a.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), a.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), a.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), a.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), a.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				a = n.n(r),
				s = n("./src/lib/lessComponent.tsx");
			t.a = s.a.div("Component", a.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var g = e => i.a.createElement("div", {
					className: Object(r.a)(e.className, m.a.container),
					style: e.style
				}, i.a.createElement(c.i, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, u._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				p = n("./src/reddit/components/SidebarFooter/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = n.n(y),
				k = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			const E = d.e[1] + 24,
				x = h.f + 8 + 152 + 32 + 16,
				v = x + E + 8,
				S = k.a.div("Container", f.a),
				j = k.a.wrapped(e => {
					var {
						className: t
					} = e, n = C(e, ["className"]);
					return i.a.createElement(g, _({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, n))
				}, "BackToTop", f.a),
				N = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: a,
						isSticky: s
					} = e;
					return i.a.createElement("div", {
						className: Object(r.a)(n, {
							[f.a.StickyStyles]: s && !a,
							[f.a.StickyStylesFakeOverlay]: !!a
						})
					}, t)
				};
			class O extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > x
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
					}, this.handleResize = s()(() => {
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
							children: n,
							className: r,
							hideFooter: a
						}
					} = this, s = this.state.isAdSticky && !(!e && !n);
					return i.a.createElement(S, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(N, {
						isFakeOverlay: t,
						isSticky: s
					}, e, n, !a && i.a.createElement(p.a, null)), !this.props.hideBackToTop && i.a.createElement(j, null))
				}
			}
			const w = Object(b.t)();
			t.a = w(O)
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
			var r = n("./node_modules/lodash/values.js"),
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loadWithRetries/index.ts"),
				g = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				y = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/userPrefs.ts"),
				k = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = n.n(k),
				C = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
					}
					return n
				};
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = m.a.div("BladeContainer", _.a), v = m.a.wrapped(h.a, "CloseIcon", _.a), S = m.a.div("LoadingTitleContainer", _.a), j = m.a.div("LoadingNavContainer", _.a), N = m.a.div("ShortLoadingNav", _.a), O = m.a.wrapped(p.a, "ThemedChevron", _.a), w = e => {
				var t = C(e, []);
				return o.a.createElement(x, null, o.a.createElement(v, null), o.a.createElement(g.k, null, o.a.createElement(g.p, null, E._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(g.o, null, o.a.createElement(S, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingTitle, t.isLoading && _.a.loading)
				})), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement(N, null), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement(N, null), o.a.createElement(O, null)), o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), o.a.createElement(O, null)))))
			}, T = Object(c.a)({
				getComponent: () => Object(u.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), P = Object(d.c)({
				isEditing: y.j,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: b.j
			});
			t.a = Object(i.b)(P)(e => {
				const t = e.moderatorPermissions && a()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(T, {
					subredditId: e.subredditId
				})) : o.a.createElement(s.Fragment, null, e.children)
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
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return C
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(a);
			const o = r.a.section("FormPage", s.a),
				i = r.a.h1("HomePageTitle", s.a),
				d = r.a.button("HomePageBreadcrumb", s.a),
				c = r.a.div("HomePageGroup", s.a),
				l = r.a.h1("FormPageTitle", s.a),
				m = r.a.div("FormPageSection", s.a),
				u = r.a.div("FormGroup", s.a),
				g = r.a.h2("FormGroupTitle", s.a),
				p = r.a.div("FormElement", s.a),
				h = r.a.div("FormGroupDescription", s.a),
				b = r.a.div("FormItem", s.a),
				y = r.a.h3("FormElementTitle", s.a),
				f = r.a.div("FormElementDescription", s.a),
				k = r.a.div("FormElementError", s.a),
				_ = r.a.div("FormElementSubGroup", s.a),
				C = r.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/constants/subredditLeaderboard.ts"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/reddit/endpoints/subreddit/local.ts"),
				l = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				u = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				g = n("./src/reddit/models/GoodContent/index.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = async (e, t) => {
				const n = await Object(l.a)(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(m.c)(t)
				}
			};
			class b extends a.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n, r) => {
						this.props.sendEvent(Object(u.c)(e, t, n, r)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, r)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						n = this.props && this.props.category && this.props.category.id,
						r = this.props.category && this.props.category.name;
					t !== n && r && !this.state[r] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, n = e && e.id;
					if (n !== i.i)(n || n === i.e) && h(this.props.gqlContext(), {
						categoryId: n,
						filter: g.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							r = this.props.category && this.props.category.name || i.b;
						t && n && this.setState(e => Object.assign(Object.assign({}, e), {
							[r]: {
								rankings: t,
								subreddits: n
							}
						}))
					}).catch(e => console.error("Error >>>", e));
					else {
						const e = await async function(e, t) {
							const n = await Object(c.a)(e, t);
							if (n && n.ok) {
								const e = n.body,
									t = e && e.data && e.data.nearbySubreddits;
								return Object(m.a)(t)
							}
						}(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: r
						} = e;
						this.setState(e => Object.assign(Object.assign({}, e), {
							[i.j]: {
								rankings: n,
								subreddits: r
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = t || i.b, r = this.state[n], o = r ? r.rankings : [], d = r ? r.subreddits : {}, c = o && o[0] && o[0].id, l = d && d[c], m = !(l && l.isNSFW) || this.props.isOver18;
					return a.a.createElement(s.b, p({
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
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				m = n("./src/reddit/icons/svgs/Triangle/index.tsx"),
				u = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				g = n.n(u);
			const p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(l.b, {
					className: g.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), s.a.createElement("span", {
					className: g.a.subredditDetailsContainer
				}, e.large ? s.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, s.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText)) : s.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText), null === e.rank && s.a.createElement("span", {
					className: g.a.smallText
				}, r.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				h = e => {
					const t = Object(i.a)(g.a.subredditRankItem, e.large && g.a.large),
						n = e.delta && e.delta > 0,
						r = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						a = e.delta ? n ? "#46D160" : "#EA0027" : "transparent";
					return s.a.createElement("li", {
						className: g.a.listItem,
						key: e.subreddit.displayText
					}, s.a.createElement(o.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, s.a.createElement("div", {
						className: g.a.subredditRankItemColumn
					}, !e.hasTagline && s.a.createElement("span", {
						className: g.a.rankText
					}, r), !e.hasTagline && s.a.createElement(m.a, {
						className: Object(i.a)(g.a.arrow, !n && g.a.negative),
						style: {
							fill: a
						}
					}), s.a.createElement(p, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && s.a.createElement("span", {
						className: g.a.regularText
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = n.n(o);
			const d = e => a.a.createElement("div", {
				className: Object(s.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, a.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), a.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, n) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				taglineBanner: "_1WuTyzo7KQobFlIJHW6Pik",
				taglineBannerBackground: "_34L_D1LSVWJ0ZjeqwrFnPj",
				taglineBannerImage: "pa_89rxjdi45gbVf0w9QR",
				taglineBannerText: "rpzag8Jvbaz6Pji3oRkWZ",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chipWrapper: "_1ZBD49ybfD0rTPX_Tp3Uz3",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				taglineChip: "_2HZPVURuk0Na0mbosSZJDP",
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
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/first.js"),
				s = n.n(a),
				o = n("./node_modules/lodash/times.js"),
				i = n.n(o),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = n("./src/config.ts"),
				u = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/subredditLeaderboard.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/hooks/useButtons2020.ts"),
				k = n("./src/reddit/controls/Chip/index.m.less"),
				_ = n.n(k);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var E = e => {
					if (Object(f.a)()) {
						const t = e.to ? {
							kind: y.a.InternalLink,
							to: e.to
						} : {};
						return c.a.createElement(y.q, C({
							className: Object(u.a)(_.a.Chip2020, {
								[_.a.isWide]: e.wide
							}),
							priority: y.b.Tertiary,
							size: y.c.XS,
							text: e.children
						}, t))
					}
					const t = e.to ? l.a : "div",
						n = Object(u.a)(_.a.chip, e.className);
					return c.a.createElement(t, {
						className: n,
						to: e.to || ""
					}, e.children)
				},
				x = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				S = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				N = n.n(j);
			const O = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && N.a.communityBannerPlaceholder,
						a = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						} : void 0,
						s = e.categoryName === b.j ? b.h.path : b.f;
					return c.a.createElement("div", {
						className: Object(u.a)(e.className, N.a.communityBanner, n),
						style: a
					}, t && c.a.createElement("h2", {
						className: N.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || b.d),
						to: s
					}, e.categoryName ? (e => e === b.j ? r.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : c.a.createElement(c.a.Fragment, null, r.fbt._("Top", null, {
						hk: "4bbkOp"
					}), c.a.createElement("span", {
						className: N.a.categoryName
					}, " ", r.fbt._("{categoryName}", [r.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), r.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				w = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, a = !!(!e.rankings || !e.rankings.length) && N.a.communityBannerPlaceholder, s = n && Array.isArray(n) && 2 === n.length ? {
						background: "linear-gradient(246.35deg, ".concat(n[0], " 0%, ").concat(n[1], " 100%)")
					} : void 0, o = t.path ? t.path : b.f, i = t.image ? "".concat(t.image, ".png") : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(u.a)(e.className, N.a.taglineBanner, a)
					}, c.a.createElement("div", {
						className: N.a.taglineBannerBackground,
						style: s
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || b.d),
						to: o
					}, c.a.createElement("h2", {
						className: N.a.taglineBannerText
					}, c.a.createElement("img", {
						className: N.a.taglineBannerImage,
						src: "".concat(m.a.assetPath, "/img/discovery/").concat(i)
					}), t.tagline ? (e => c.a.createElement("span", {
						className: N.a.categoryName
					}, r.fbt._("{tagline}", [r.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				T = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const r = e.subreddits[t.id];
					return c.a.createElement(g.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || b.d, r.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: r
					})
				}), !e.rankings.length && P),
				P = c.a.createElement(c.a.Fragment, null, i()(5, e => c.a.createElement(p.a, {
					key: e
				}))),
				L = e => {
					const t = e.isSecondaryButton ? y.n : y.k,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0;
					return c.a.createElement("div", {
						className: N.a.footer
					}, c.a.createElement(t, {
						className: N.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || b.d),
						to: e.to || "",
						style: n
					}, e.isSecondaryButton ? e.categoryName ? r.fbt._("See All {categoryName}", [r.fbt._param("categoryName", e.categoryName)], {
						hk: "3mjiTN"
					}) : r.fbt._("See All", null, {
						hk: "2OZax8"
					}) : r.fbt._("View All", null, {
						hk: "4vfmcB"
					})))
				};

			function I(e, t) {
				return t || "".concat(b.f).concat(Object(x.g)(e), "/")
			}
			const W = e => {
				return c.a.createElement("div", {
					className: N.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: N.a.chipWrapper,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || b.d, void 0, n))(t.name, n + 1)
				}, c.a.createElement(E, {
					className: e.hasTagline ? N.a.taglineChip : N.a.chip,
					key: t.name,
					to: I(t.name, t.path),
					wide: t.name === b.j
				}, t.name ? t.name === b.j ? r.fbt._("Near You", null, {
					hk: "RuM7j"
				}) : t.name : r.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: r,
					category: a,
					categories: o
				} = e, i = Object(S.a)();
				Object(d.useEffect)(() => {
					i(Object(v.d)(r || b.d))
				}, []);
				const l = s()(n),
					u = t && l && t[l.id],
					g = "".concat(m.a.assetPath, "/img/leaderboard/banner-background.png"),
					p = u ? u.bannerBackgroundImage || g : void 0,
					y = e.to || r && I(r, a.path),
					f = a && a.tagline,
					k = a && a.gradients && Array.isArray(a.gradients) && 2 === a.gradients.length ? a.gradients[1] : void 0;
				return c.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, f && c.a.createElement(w, {
					category: a,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !f && c.a.createElement(O, {
					bannerBackgroundImage: p,
					categoryName: r,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(T, {
					categoryName: r,
					hasTagline: !!f,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), c.a.createElement(L, {
					categoryName: r,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: k,
					onSendEventClick: e.onSendEventClick,
					to: y
				}), o && c.a.createElement(W, {
					activeCategoryName: r,
					categories: o,
					hasTagline: !!f,
					onSendEventClick: e.onSendEventClick
				}))
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => n => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(g.widget)(n, {
					subredditId: e,
					widgetKind: t
				})
			}, g.defaults);
			var h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				y = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				x = e => {
					const t = C(e);
					return Object(k.f)(t)
				},
				v = e => {
					const t = E(e);
					return Object(k.f)(t)
				};
			var S = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = n.n(S);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(m.t)(), w = Object(s.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(m.m)(e, t) || void 0,
						r = t.redditStyle || Object(y.m)(e, {
							subredditId: n
						}),
						a = Object(f.T)(e);
					return r || a
				},
				nigtmode: f.T,
				subredditId: m.m,
				topPostVariant: b.d
			}));
			class T extends a.a.Component {
				constructor() {
					super(...arguments), this.contentRef = a.a.createRef(), this.state = {
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = x(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: s,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, g = n ? j.a.widgetContentOnly : j.a.widgetContent, p = !r && this.props.styles, h = p ? this.getWidgetBackgroundStyles() : {}, b = p ? this.getWidgetHeaderStyles() : {};
					return a.a.createElement("div", {
						className: Object(i.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: r,
							[j.a.clickable]: !!o,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: o,
						style: h
					}, d && a.a.createElement("div", {
						className: j.a.widgetHeader,
						style: b
					}, a.a.createElement("div", {
						className: Object(i.a)(j.a.widgetTitle, l)
					}, a.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), s), a.a.createElement("div", {
						className: Object(i.a)(g, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && a.a.createElement(u.o, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, N._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(w(Object(d.a)(Object(l.c)(T))))
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, n) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				Chip2020: "TikvS_VGUJnCRMKwmVRQn",
				chip2020: "TikvS_VGUJnCRMKwmVRQn",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => Object.assign(Object.assign({}, a.defaults(t)), {
					action: "click",
					noun: Object(r.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, n) => s => Object.assign(Object.assign({}, a.defaults(s)), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				i = (e, t) => n => Object.assign(Object.assign({}, a.defaults(n)), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(r.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, n, s) => o => Object.assign(Object.assign({}, a.defaults(o)), {
					action: "click",
					actionInfo: Object.assign(Object.assign({}, a.actionInfo(o)), {
						position: s && s
					}),
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => Object.assign(Object.assign({}, a.defaults(n)), {
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(i.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/Triangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 10 8",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
			})))
		},
		"./src/reddit/pages/SubredditLeaderboard/index.m.less": function(e, t, n) {
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
		"./src/reddit/pages/SubredditLeaderboard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/shuffle.js"),
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/constants/subredditLeaderboard.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				b = n("./src/reddit/helpers/trackers/screenview.ts"),
				y = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				f = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				k = n("./src/reddit/layout/page/Listing/index.tsx"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				E = n.n(C);
			const x = () => o.a.createElement("div", {
				className: E.a.bannerBackground
			}, o.a.createElement("div", {
				className: E.a.bannerContentContainer
			}, o.a.createElement("h1", {
				className: E.a.bannerHeader
			}, _.fbt._("Today's Top Growing Communities", null, {
				hk: "1J28A5"
			})), o.a.createElement("span", {
				className: E.a.bannerDescription
			}, _.fbt._("Browse Reddit's top growing communities. Find the top communities in your favorite category.", null, {
				hk: "4w2yrj"
			}))));
			var v = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				S = n("./node_modules/lodash/last.js"),
				j = n.n(S),
				N = n("./node_modules/lodash/times.js"),
				O = n.n(N),
				w = n("./node_modules/lodash/upperFirst.js"),
				T = n.n(w),
				P = n("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				L = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				I = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				W = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				B = n("./src/reddit/models/GoodContent/index.ts"),
				F = n("./src/reddit/selectors/subreddit.ts"),
				R = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				D = n("./src/reddit/selectors/user.ts");
			const M = 25,
				A = .5,
				H = Object(d.c)({
					hasPreviousPage: (e, t) => {
						let {
							categoryId: n
						} = t;
						return Object(R.c)(e, n)
					},
					hasNextPage: (e, t) => {
						let {
							categoryId: n
						} = t;
						return Object(R.b)(e, n)
					},
					isMod: D.J,
					rankings: (e, t) => {
						let {
							categoryId: n
						} = t;
						return Object(F.O)(e, n)
					},
					subreddits: F.ab
				}),
				Q = Object(i.b)(H, e => ({
					fetchMoreSubreddits: (t, n) => e(Object(L.a)(t, n))
				}));
			class G extends o.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							n = Object(R.d)(this.props.categoryId, this.props.categoryName);
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, n)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(y.e)(e, this.props.categoryName || g.d)), this.renderSubredditRankItemPlaceholders = () => o.a.createElement(o.a.Fragment, null, O()(5, e => o.a.createElement(W.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map((t, n) => {
						const r = this.props.subreddits[t.id];
						return o.a.createElement(I.a, {
							delta: t.rankDelta,
							key: r.id,
							large: !0,
							onItemClick: () => this.sendLeaderboardSubredditEventClick(r),
							rank: n,
							shouldDisplayDelta: e,
							subreddit: r
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: n,
						rankings: r
					} = this.props, a = j()(r), s = a && a.cursor, o = Object(P.a)(t, n);
					return {
						after: s,
						categoryId: e === g.b ? g.e : e,
						filter: B.a,
						first: M,
						isOnlyModIncluded: o
					}
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: n,
						isMod: r,
						rankings: a
					} = this.props, s = t || n, i = e === g.j, d = r && !i;
					return o.a.createElement("div", {
						className: E.a.mainContent
					}, o.a.createElement("div", {
						className: E.a.mainContentHeader
					}, o.a.createElement("h2", null, o.a.createElement("span", {
						className: E.a.mainContentHeaderText
					}, e ? i ? _.fbt._("Local Communities Near You", null, {
						hk: "2PsgJz"
					}) : _.fbt._("Today's Top Growing in {categoryName}", [_.fbt._param("categoryName", T()(e))], {
						hk: "4pneAv"
					}) : _.fbt._("Today's Top Growing Communities", null, {
						hk: "6LoyD"
					}))), d && o.a.createElement("span", {
						className: E.a.mainContentRankChangeText
					}, _.fbt._("Rank Change", null, {
						hk: "1DVGfi"
					}))), o.a.createElement("ol", {
						className: E.a.subredditRankingsList
					}, a ? this.renderSubredditRankItems(d) : this.renderSubredditRankItemPlaceholders(), s && o.a.createElement(v.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: A,
						rootMargin: "0px 0px 0px 0px"
					}, o.a.createElement("li", null, o.a.createElement(W.a, {
						large: !0
					})))))
				}
			}
			var J = Object(m.c)(Q(G)),
				V = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				K = n("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				z = n.n(K);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = e => {
				const {
					category: t,
					children: n,
					className: r,
					isActive: a,
					tabIndex: s
				} = e, i = Object(c.a)(z.a.categoryLink, a && z.a.active, r);
				return o.a.createElement("li", null, o.a.createElement(V.a, U({}, t.anchorProps, {
					className: i,
					"data-active": a,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: s,
					to: t.path || ""
				}), n, t.customIcon))
			};
			var Y = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				X = n("./src/reddit/controls/Button/index.tsx"),
				q = n("./src/reddit/helpers/name/index.ts");
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = 36;
			class te extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: n
						} = this.props, {
							isExpanded: r
						} = this.state;
						if (!t || r || !n) return;
						return n < e.findIndex(e => e.name === t) + 1
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
						categoryItemHeight: n = ee,
						categoryListContainerClassName: r,
						children: a,
						childrenOffset: s = 0,
						currentCategoryName: i,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: m
					} = this.state, u = !m && d && n * d, p = s + (e ? n * e.length : 0), h = Object(c.a)(z.a.categoryList, m && z.a.expanded), b = e => !(!i || i !== Object(q.g)(e)), y = o.a.createElement("ul", {
						className: h,
						style: {
							height: u || p
						}
					}, a, e && e.map((e, r) => {
						const a = s + r * n;
						return o.a.createElement(Z, {
							category: e,
							className: t,
							isActive: b(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: u && a >= u ? -1 : 0
						}, e.name === g.j ? $._("Near You", null, {
							hk: "3YIOzZ"
						}) : e.name)
					}));
					return o.a.createElement("div", {
						className: Object(c.a)(z.a.categoryListContainer, r)
					}, y)
				}
				render() {
					const {
						buttonClassName: e,
						categories: t,
						className: n,
						header: r,
						headerClassName: a,
						initialNumberOfCategories: s
					} = this.props, i = t && s && t.length > s, d = Object(c.a)(n, z.a.container);
					return o.a.createElement(Y.a, {
						className: d,
						contentOnly: !0
					}, o.a.createElement("div", {
						className: Object(c.a)(z.a.header, a)
					}, o.a.createElement("h2", null, r || $._("Categories", null, {
						hk: "46zLMb"
					}))), this.renderCategoryList(), i && o.a.createElement(X.o, {
						className: Object(c.a)(z.a.button, e),
						onClick: this.toggleExpanded
					}, i && !this.state.isExpanded ? $._("Show More", null, {
						hk: "1pCiqD"
					}) : $._("Show Less", null, {
						hk: "2qT4h7"
					})))
				}
			}
			var ne = te,
				re = n("./src/lib/lessComponent.tsx"),
				ae = n("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				se = n.n(ae);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ie = re.a.a("Link", se.a), de = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return o.a.createElement(ie, {
					href: "/subreddits/".concat(t, "-1"),
					key: e
				}, e)
			};
			var ce = e => o.a.createElement(Y.a, {
					className: se.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: se.a.Title
				}, oe._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), o.a.createElement("div", {
					className: se.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(de))),
				le = n("./src/reddit/components/SidebarContainer/index.tsx"),
				me = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				ue = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ge = n("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const pe = e => {
					const t = e.categoryName && Object(q.g)(e.categoryName);
					return o.a.createElement("div", {
						className: E.a.SidebarLeft
					}, o.a.createElement(le.a, null, o.a.createElement(ne, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				he = e => {
					const t = e.widgetCategories[0],
						n = e.widgetCategories[1];
					return o.a.createElement("div", {
						className: E.a.SidebarRight
					}, o.a.createElement(le.a, null, o.a.createElement(ge.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(me.a, null), o.a.createElement(ue.a, null, o.a.createElement(ge.a, {
						category: n,
						className: E.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(ce, null))))
				};
			var be = n("./src/reddit/selectors/category.ts"),
				ye = n("./src/reddit/selectors/moderatorPermissions.ts");
			const fe = Object(p.t)(),
				ke = (e, t) => {
					let {
						match: n
					} = t;
					return Object(h.b)(n.params.categoryName || "")
				},
				_e = Object(u.Xc)(g.g),
				Ce = Object(d.c)({
					categories: e => Object(be.c)(e, {
						categoriesOrder: _e
					}),
					categoryId: (e, t) => {
						const n = ke(0, t);
						return n === g.j ? g.i : n ? Object(be.g)(e, {
							categoryName: n
						}) : g.b
					},
					categoryName: ke,
					isMod: ye.h,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				Ee = Object(i.b)(Ce),
				xe = {
					id: g.b,
					name: g.c,
					path: g.f
				},
				ve = {
					customIcon: o.a.createElement(f.a, null),
					id: g.l,
					name: g.m
				};
			class Se extends o.a.Component {
				constructor(e) {
					super(e), this.getWidgetCategories = () => {
						const {
							categories: e
						} = this.props, t = e.filter(this.filterActiveCategory);
						return a()(t).slice(0, 2)
					}, this.updateWidgetCategories = e => {
						const {
							categories: t,
							categoryName: n
						} = this.props;
						if (e.categoryName !== n || e.categories.length !== t.length) {
							const e = this.getWidgetCategories();
							this.setWidgetCategories(e)
						}
					}, this.setWidgetCategories = e => this.setState({
						widgetCategories: e
					}), this.filterCategories = e => this.filterActiveCategory(e), this.filterActiveCategory = e => e.name !== this.props.categoryName, this.resetScrollPosition = () => {
						window.scrollTo(0, 0)
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(y.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, n) => this.props.sendEvent(Object(y.b)(e, t, n)), this.state = {
						widgetCategories: []
					}
				}
				componentDidMount() {
					const e = this.getWidgetCategories();
					this.setWidgetCategories(e), this.props.sendEvent(Object(b.e)())
				}
				componentDidUpdate(e) {
					this.resetScrollPosition(), this.updateWidgetCategories(e)
				}
				render() {
					const {
						className: e,
						isMod: t,
						shouldShowLocalRecommendations: n
					} = this.props, r = [xe, ...n ? [g.h] : [], ...this.props.categories];
					t && r.unshift(ve);
					const a = Object(h.a)(g.f, r),
						s = t && this.props.categoryName === g.m,
						i = this.props.categoryId ? this.props.categoryName : s ? g.m : void 0,
						d = this.props.categoryId ? this.props.categoryId : s ? g.l : g.b;
					return o.a.createElement(l.a, null, o.a.createElement(k.a, {
						className: Object(c.a)(e, E.a.mainContent),
						content: o.a.createElement(J, {
							categoryId: d,
							categoryName: i
						}),
						disableFullscreen: !0,
						navBar: o.a.createElement(x, null),
						sidebars: [o.a.createElement(pe, {
							key: "left",
							categories: a,
							categoryName: i || g.c,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), o.a.createElement(he, {
							key: "right",
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = fe(Ee(Object(m.c)(Se)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.aa14cfc29d6be3e3d158.js.map