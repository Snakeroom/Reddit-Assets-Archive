// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.ce32dc086b440cf70ecf.js
// Retrieved at 7/14/2021, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_copyArray.js"),
				s = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return s(r(e))
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
				s = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(s(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					s = e.length,
					a = s - 1;
				for (t = void 0 === t ? s : t; ++n < t;) {
					var i = r(n, a),
						o = e[i];
					e[i] = e[n], e[n] = o
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayShuffle.js"),
				s = n("./node_modules/lodash/_baseShuffle.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? r : s)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				o = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > i) return [];
				var n = o,
					c = d(e, o);
				t = s(t), e -= o;
				for (var l = r(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "checkIsModCategory", (function() {
				return b
			})), n.d(t, "subredditLeaderboardPageRequested", (function() {
				return f
			})), n.d(t, "subredditLeaderboardPageDataRequested", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/pageTitle.ts"),
				s = n("./src/reddit/actions/category/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/constants/listings.ts"),
				l = n("./src/reddit/constants/subredditLeaderboard.ts"),
				u = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				m = n("./src/reddit/models/GoodContent/index.ts"),
				g = n("./src/reddit/selectors/category.ts"),
				p = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const b = (e, t) => t && e === l.q,
				f = e => async (t, n) => {
					t(Object(a.k)({
						actionSource: a.a.SubredditLeaderboard,
						redirectUrl: c.c[c.b.SubredditLeaderboard]
					})), t(i.l({
						title: Object(r.l)()
					}));
					const s = e.params && e.params.categoryName,
						o = s && Object(u.b)(s);
					await t(y(o))
				}, y = e => async (t, n) => {
					await t(Object(s.a)());
					const r = n(),
						a = Object(h.K)(r);
					if (Object(p.a)(r, e)) return;
					const i = e && Object(g.f)(r, {
							categoryName: e
						}),
						c = e === l.m ? l.l : i && i.id || l.f,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(c, b(e, a)),
						f = Object(p.d)(c, e);
					await Promise.all([t(Object(o.a)(u, f)), t(Object(d.r)())])
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				o = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(r.a)(s.m),
				l = Object(r.a)(s.l),
				u = Object(r.a)(s.k),
				m = Object(r.a)(s.a),
				g = Object(r.a)(s.b),
				p = Object(r.a)(s.c),
				h = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					n(c());
					const h = t === a.l ? async function() {
						const t = await Object(i.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const r = t.body,
							a = r && r.data && r.data.nearbySubreddits;
						return Object(d.a)(a)
					}: async function() {
						const t = await Object(o.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const r = t.body,
							a = r && r.data && r.data.subredditLeaderboard;
						return Object(d.b)(a)
					}, b = await h();
					if (!b) return;
					const {
						pageInfo: f,
						rankings: y,
						subreddits: k
					} = b;
					n(m({
						subreddits: k
					})), n(g({
						categoryRankingsKey: t,
						rankings: y
					})), n(p({
						categoryRankingsKey: t,
						pageInfo: f
					})), n(l())
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
				s = n("./src/reddit/components/SidebarContainer/index.m.less"),
				a = n.n(s);
			t.a = r.a.div("container", a.a)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SidebarFooter/index.m.less"),
				m = n.n(u);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = a.a.a("Link", m.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: c.a
			}), b = Object(i.b)(h), f = Object(d.t)({
				isFrontpage: d.y
			});
			t.a = f(b(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? s.a.createElement(o.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: m.a.LinkContainer
			}, s.a.createElement("div", {
				className: m.a.Column
			}, s.a.createElement(p, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, g._("User Agreement", null, {
				hk: "2RA6JL"
			})), s.a.createElement(p, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, g._("Privacy policy", null, {
				hk: "10K04G"
			}))), s.a.createElement("div", {
				className: m.a.Column
			}, s.a.createElement(p, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, g._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(p, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, g._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), s.a.createElement("div", {
				className: m.a.Copyright
			}, g._("© {year} Reddit, Inc. All rights reserved.", [g._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : s.a.createElement(o.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: m.a.LinkContainer
			}, s.a.createElement("div", {
				className: m.a.Column
			}, s.a.createElement(p, {
				href: "https://www.reddithelp.com"
			}, g._("help", null, {
				hk: "4lyYaD"
			})), s.a.createElement(p, {
				href: "https://www.reddit.com/coins"
			}, g._("Reddit coins", null, {
				hk: "32iMaN"
			})), s.a.createElement(p, {
				href: "https://www.reddit.com/premium"
			}, g._("Reddit premium", null, {
				hk: "RuO3A"
			})), s.a.createElement(p, {
				href: "https://redditgifts.com/"
			}, g._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(p, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, g._("Communities", null, {
				hk: "3CJu37"
			})), s.a.createElement(p, {
				href: "https://www.reddit.com/posts/2020/"
			}, g._("Rereddit", null, {
				hk: "1z3k7C"
			})), s.a.createElement(p, {
				href: "https://www.reddit.com/topics/a-1/"
			}, g._("Topics", null, {
				hk: "349RFt"
			})))), s.a.createElement("div", {
				className: m.a.Column
			}, s.a.createElement(p, {
				href: "https://about.reddit.com"
			}, g._("about", null, {
				hk: "1sqJKs"
			})), s.a.createElement(p, {
				href: "https://about.reddit.com/careers/"
			}, g._("careers", null, {
				hk: "26ABvc"
			})), s.a.createElement(p, {
				href: "https://about.reddit.com/press/"
			}, g._("press", null, {
				hk: "2Qmgdz"
			})), s.a.createElement(p, {
				href: "https://www.redditinc.com/advertising"
			}, g._("advertise", null, {
				hk: "Mt40U"
			})), s.a.createElement(p, {
				href: "http://www.redditblog.com/"
			}, g._("blog", null, {
				hk: "46IQJw"
			})), s.a.createElement(p, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, g._("Terms", null, {
				hk: "4qRzfE"
			})), s.a.createElement(p, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, g._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(p, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, g._("Privacy policy", null, {
				hk: "10K04G"
			})), s.a.createElement(p, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, g._("Mod policy", null, {
				hk: "2gYc2T"
			})))), s.a.createElement("div", {
				className: m.a.Copyright
			}, g._("Reddit Inc © {year} . All rights reserved", [g._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
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
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", s.a)
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				if (e) {
					const e = document.getElementById(c.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = ({
					className: e,
					isOverlay: t,
					style: n
				}) => o.a.createElement("div", {
					className: Object(r.a)(e, m.a.container),
					style: n
				}, o.a.createElement(l.i, {
					className: m.a.button,
					onClick: () => p(t)
				}, g._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				b = n("./src/reddit/components/SidebarFooter/index.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				_ = n.n(k),
				E = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = d.e[1] + 24,
				S = f.f + 8 + 152 + 16,
				v = S + C + 8,
				N = E.a.div("Container", _.a),
				T = E.a.wrapped(({
					className: e,
					isOverlay: t,
					...n
				}) => o.a.createElement(h, x({
					className: e,
					isOverlay: t,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, n)), "BackToTop", _.a),
				w = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: s
				}) => o.a.createElement("div", {
					className: Object(r.a)(t, {
						[_.a.StickyStyles]: s && !n,
						[_.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class O extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > S
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
					}, d.I), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: r,
							className: s,
							hideFooter: a,
							pageLayer: i
						}
					} = this, d = this.state.isAdSticky && !(!t && !r);
					return o.a.createElement(N, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(w, {
						isFakeOverlay: n,
						isSticky: d
					}, t, r, !a && o.a.createElement(b.a, null)), !this.props.hideBackToTop && o.a.createElement(T, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const j = Object(y.t)();
			t.a = j(O)
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
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				g = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				y = n("./src/reddit/selectors/userPrefs.ts"),
				k = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = n.n(k);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = u.a.div("BladeContainer", _.a), C = u.a.wrapped(h.a, "CloseIcon", _.a), S = u.a.div("LoadingTitleContainer", _.a), v = u.a.div("LoadingNavContainer", _.a), N = u.a.div("ShortLoadingNav", _.a), T = u.a.wrapped(p.a, "ThemedChevron", _.a), w = ({
				...e
			}) => i.a.createElement(x, null, i.a.createElement(C, null), i.a.createElement(g.k, null, i.a.createElement(g.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), i.a.createElement(g.o, null, i.a.createElement(S, null, i.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingTitle, e.isLoading && _.a.loading)
			})), i.a.createElement(v, null, i.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), i.a.createElement(T, null)), i.a.createElement(v, null, i.a.createElement(N, null), i.a.createElement(T, null)), i.a.createElement(v, null, i.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), i.a.createElement(T, null)), i.a.createElement(v, null, i.a.createElement(N, null), i.a.createElement(T, null)), i.a.createElement(v, null, i.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), i.a.createElement(T, null))))), O = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), j = Object(d.c)({
				isEditing: f.i,
				isSubscriptionsPinned: y.b,
				moderatorPermissions: b.l
			});
			t.a = Object(o.b)(j)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(O, {
					subredditId: e.subredditId
				})) : i.a.createElement(a.Fragment, null, e.children)
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
				return i
			})), n.d(t, "p", (function() {
				return o
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
				return g
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return E
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(s);
			const i = r.a.section("FormPage", a.a),
				o = r.a.h1("HomePageTitle", a.a),
				d = r.a.button("HomePageBreadcrumb", a.a),
				c = r.a.div("HomePageGroup", a.a),
				l = r.a.h1("FormPageTitle", a.a),
				u = r.a.div("FormPageSection", a.a),
				m = r.a.div("FormGroup", a.a),
				g = r.a.h2("FormGroupTitle", a.a),
				p = r.a.div("FormElement", a.a),
				h = r.a.div("FormGroupDescription", a.a),
				b = r.a.div("FormItem", a.a),
				f = r.a.h3("FormElementTitle", a.a),
				y = r.a.div("FormElementDescription", a.a),
				k = r.a.div("FormElementError", a.a),
				_ = r.a.div("FormElementSubGroup", a.a),
				E = r.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/constants/subredditLeaderboard.ts"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/reddit/endpoints/subreddit/local.ts"),
				l = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
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
					return Object(u.c)(t)
				}
			};
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n, r) => {
						this.props.sendEvent(Object(m.c)(e, t, n, r)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, r)
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
					if (n !== o.l)(n || n === o.f) && h(this.props.gqlContext(), {
						categoryId: n,
						filter: g.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							r = this.props.category && this.props.category.name || o.c;
						t && n && this.setState(e => ({
							...e,
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
								return Object(u.a)(t)
							}
						}(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: r
						} = e;
						this.setState(e => ({
							...e,
							[o.m]: {
								rankings: n,
								subreddits: r
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = e && e.displayText, r = t || o.c, i = this.state[r], d = i ? i.rankings : [], c = i ? i.subreddits : {}, l = d && d[0] && d[0].id, u = c && c[l], m = !(u && u.isNSFW) || this.props.isOver18;
					return s.a.createElement(a.b, p({
						categoryName: t,
						categoryDisplayText: n,
						onSendEventClick: this.sendEventClick,
						rankings: d,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: c
					}, this.props))
				}
			}
			t.a = Object(d.b)(Object(i.c)(b))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				g = n.n(m);
			const p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, {
					className: g.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: g.a.subredditDetailsContainer
				}, e.large ? a.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: g.a.smallText
				}, r.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				h = e => {
					const t = Object(o.a)(g.a.subredditRankItem, e.large && g.a.large),
						n = e.delta && e.delta > 0,
						r = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						s = e.delta ? n ? "#46D160" : "#EA0027" : "transparent";
					return a.a.createElement("li", {
						className: g.a.listItem,
						key: e.subreddit.displayText
					}, a.a.createElement(i.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: g.a.subredditRankItemColumn
					}, !e.hasTagline && a.a.createElement("span", {
						className: g.a.rankText
					}, r), !e.hasTagline && a.a.createElement(u.a, {
						className: g.a.arrow,
						name: n ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: s
						}
					}), a.a.createElement(p, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && a.a.createElement("span", {
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
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = n.n(i);
			const d = e => s.a.createElement("div", {
				className: Object(a.a)(o.a.placeholderWrapper, e.large && o.a.large)
			}, s.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: o.a.subredditNameLoading
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
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/first.js"),
				a = n.n(s),
				i = n("./node_modules/lodash/times.js"),
				o = n.n(i),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./src/config.ts"),
				m = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/subredditLeaderboard.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/Chip/index.tsx"),
				k = n("./src/reddit/helpers/name/index.ts"),
				_ = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				x = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				C = n.n(x);
			const S = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && C.a.communityBannerPlaceholder,
						s = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						a = e.categoryName === b.m && b.j.path ? b.j.path : b.g;
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, C.a.communityBanner, n),
						style: s
					}, t && c.a.createElement("h2", {
						className: C.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || b.e),
						to: a
					}, e.categoryName ? ((e, t) => e === b.m ? r.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : r.fbt._("Top {categoryName} Communities", [r.fbt._param("categoryName", c.a.createElement("span", {
						className: C.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				v = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, s = !!(!e.rankings || !e.rankings.length) && C.a.communityBannerPlaceholder, a = n && Array.isArray(n) && 2 === n.length ? {
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, i = t.path ? t.path : b.g, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, C.a.taglineBanner, s)
					}, c.a.createElement("div", {
						className: C.a.taglineBannerBackground,
						style: a
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || b.e),
						to: i
					}, c.a.createElement("h2", {
						className: C.a.taglineBannerText
					}, c.a.createElement("img", {
						className: C.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${o}`
					}), t.tagline ? (e => c.a.createElement("span", {
						className: C.a.categoryName
					}, r.fbt._("{tagline}", [r.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				N = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const r = e.subreddits[t.id];
					return c.a.createElement(g.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || b.e, r.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: r
					})
				}), !e.rankings.length && T),
				T = c.a.createElement(c.a.Fragment, null, o()(5, e => c.a.createElement(p.a, {
					key: e
				}))),
				w = e => {
					const t = e.isSecondaryButton ? f.n : f.k,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						s = e.isSecondaryButton ? e.categoryDisplayText ? r.fbt._("See All {categoryName}", [r.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? r.fbt._("See All {categoryName}", [r.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : r.fbt._("See All", null, {
							hk: "2OZax8"
						}) : r.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return c.a.createElement("div", {
						className: C.a.footer
					}, c.a.createElement(t, {
						className: C.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || b.e),
						to: e.to || "",
						style: n
					}, s))
				};

			function O(e, t) {
				return t || `${b.g}${Object(k.g)(e)}/`
			}
			const j = e => {
				return c.a.createElement("div", {
					className: C.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: C.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || b.e, void 0, n))(t.name, n + 1)
				}, c.a.createElement(y.a, {
					className: e.hasTagline ? C.a.taglineChip : C.a.chip,
					key: t.name,
					to: O(t.name, t.path),
					wide: t.name === b.m
				}, t.name ? t.name === b.m ? b.k : t.displayText || t.name : r.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: r,
					categoryDisplayText: s,
					category: i,
					categories: o
				} = e, l = Object(E.a)();
				Object(d.useEffect)(() => {
					l(Object(_.d)(r || b.e))
				}, []);
				const m = a()(n),
					g = t && m && t[m.id],
					p = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					f = g ? g.bannerBackgroundImage || p : void 0,
					y = e.to || r && O(r, i.path),
					k = i && i.tagline,
					x = i && i.gradients && Array.isArray(i.gradients) && 2 === i.gradients.length ? i.gradients[1] : void 0;
				return c.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, k && c.a.createElement(v, {
					category: i,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !k && c.a.createElement(S, {
					bannerBackgroundImage: f,
					categoryName: r,
					categoryDisplayText: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(N, {
					categoryName: r,
					hasTagline: !!k,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), c.a.createElement(w, {
					categoryName: r,
					categoryDisplayText: s,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: x,
					onSendEventClick: e.onSendEventClick,
					to: y
				}), o && c.a.createElement(j, {
					activeCategoryName: r,
					categories: o,
					hasTagline: !!k,
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
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/trackers/widgets.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				b = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				x = e => {
					const t = _(e);
					return Object(y.f)(t)
				},
				C = e => {
					const t = E(e);
					return Object(y.f)(t)
				};
			var S = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				v = n.n(S);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = Object(u.t)(), w = Object(a.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						r = t.redditStyle || Object(b.l)(e, {
							subredditId: n
						}),
						s = Object(f.V)(e);
					return r || s
				},
				nigtmode: f.V,
				subredditId: u.m,
				topPostVariant: h.d
			}));
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(g.b)(e, t)), this.setState({
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = x(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: a,
						onClick: i,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, g = n ? v.a.widgetContentOnly : v.a.widgetContent, p = !r && this.props.styles, h = p ? this.getWidgetBackgroundStyles() : {}, b = p ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(o.a)(t, v.a.widgetBackground, {
							[v.a.redditStyle]: r,
							[v.a.clickable]: !!i,
							[v.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: i,
						style: h
					}, d && s.a.createElement("div", {
						className: v.a.widgetHeader,
						style: b
					}, s.a.createElement("div", {
						className: Object(o.a)(v.a.widgetTitle, l)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), a), s.a.createElement("div", {
						className: Object(o.a)(g, {
							[v.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.o, {
						className: v.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, N._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = T(w(Object(d.a)(Object(l.c)(O))))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "p", (function() {
				return c
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "i", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = "DEFAULT",
				a = "",
				i = "All Communities",
				o = r.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				d = "top",
				c = "MOD",
				l = "moderating",
				u = r.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				g = "near-you",
				p = r.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				h = "/subreddits/leaderboard/",
				b = {
					id: a,
					name: a,
					path: `${h}`
				},
				f = {
					id: m,
					name: g,
					path: `${h}${g}/`
				},
				y = [{
					name: "Sports",
					displayText: r.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${h}sports/`
				}, {
					name: "News",
					displayText: r.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${h}news/`
				}, {
					name: "Gaming",
					displayText: r.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${h}gaming/`
				}, {
					name: "Aww",
					displayText: r.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${h}aww/`
				}],
				k = {
					id: a,
					name: a,
					path: `${h}`,
					image: "popcorn-snoo",
					tagline: r.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				_ = {
					id: m,
					name: g,
					path: `${h}${g}/`,
					image: "magnifying-glass-snoo",
					tagline: r.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				E = [{
					name: "Sports",
					displayText: r.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${h}sports/`,
					image: "basketball-snoo",
					tagline: r.fbt._("Sports communities are the real MVP", null, {
						hk: "1zKdF8"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					displayText: r.fbt._("News", null, {
						hk: "17cLQ8"
					}),
					id: "c1009",
					path: `${h}news/`,
					image: "newsie-snoo",
					tagline: r.fbt._("News communities to keep you informed", null, {
						hk: "4pGDSm"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					displayText: r.fbt._("Gaming", null, {
						hk: "2aDSZz"
					}),
					id: "c1019",
					path: `${h}gaming/`,
					image: "esports-snoo",
					tagline: r.fbt._("Gaming communities taking it to the next level", null, {
						hk: "2zM7JE"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					displayText: r.fbt._("Aww", null, {
						hk: "3ecS9m"
					}),
					id: "c1000",
					path: `${h}aww/`,
					image: "cat-snoo",
					tagline: r.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				x = [{
					name: "E3 Gaming",
					displayText: r.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${h}e3/`
				}],
				C = [{
					name: "Beauty",
					displayText: r.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${h}beauty/`,
					image: "makeup-snoo",
					tagline: r.fbt._("Beauty communities make us all look good", null, {
						hk: "2z1nzQ"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					displayText: r.fbt._("Fashion", null, {
						hk: "22tnM2"
					}),
					id: "c1002",
					path: `${h}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: r.fbt._("Fashion communities are always in style", null, {
						hk: "4pNEnH"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					displayText: r.fbt._("Food", null, {
						hk: "2Bq28v"
					}),
					id: "c1003",
					path: `${h}food/`,
					image: "cookbooks-snoo",
					tagline: r.fbt._("Food communities to make you go mmmm", null, {
						hk: "3OGpOa"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					displayText: r.fbt._("Fitness", null, {
						hk: "4ruQRK"
					}),
					id: "c1006",
					path: `${h}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: r.fbt._("Fitness communities that know how to work it", null, {
						hk: "3Ow48z"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					displayText: r.fbt._("Outdoors", null, {
						hk: "1Can0U"
					}),
					id: "c1010",
					path: `${h}outdoors/`,
					image: "telescope-snoo",
					tagline: r.fbt._("Outdoor communities — they’re really out there", null, {
						hk: "1sfigF"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					displayText: r.fbt._("Relationships", null, {
						hk: "QnBO3"
					}),
					id: "c1013",
					path: `${h}relationships/`,
					image: "childrensbooks-snoo",
					tagline: r.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				S = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, n) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Chip/index.m.less"),
				d = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: i.a.InternalLink,
					to: e.to
				} : {};
				return s.a.createElement(i.q, c({
					className: Object(a.a)(d.a.Chip, {
						[d.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.b.Tertiary,
					size: i.c.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/GetNearbySubreddits.json");
			t.a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/helpers/name/index.ts");
			const s = (e, t) => t.map(t => {
					const n = Object(r.g)(t.name),
						s = n.split(" & ").join("_and_");
					return {
						...t,
						name: n,
						path: t.path || `${e}${s}/`
					}
				}),
				a = e => Object(r.g)(e).split("_and_").join(" & ")
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var r = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					for (const {
							node: a,
							...i
						} of e) {
						const e = Object(r.a)(a);
						n[e.id] = e, s.push(i)
					}
					return {
						pageInfo: t,
						rankings: s,
						subreddits: n
					}
				},
				a = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: s,
							...a
						} of e) {
						const e = Object(r.a)(s);
						t[e.id] = {
							...e,
							bannerBackgroundImage: s && s.styles && s.styles.bannerBackgroundImage
						}, n.push(a)
					}
					return {
						rankings: n,
						subreddits: t
					}
				},
				i = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					let a = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(r.a)(i);
						n[e.id] = {
							...e,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, s.push({
							id: e.id,
							rank: a
						}), a += 1
					}
					return {
						rankings: s,
						subreddits: n,
						pageInfo: t
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/categories.tsx"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...s.defaults(t),
					action: "click",
					noun: Object(r.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, n) => a => ({
					...s.defaults(a),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				o = (e, t) => n => ({
					...s.defaults(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(r.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, n, a) => i => ({
					...s.defaults(i),
					action: "click",
					actionInfo: {
						...s.actionInfo(i),
						position: a && a
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => ({
					...s.defaults(n),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var r, s, a = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const o = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(i.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				d = (e, t) => n => ({
					source: s.POST,
					action: a.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: i.post(n, e),
					subreddit: i.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...i.defaults(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: a.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...i.defaults(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: r.TOPIC,
					...i.defaults(t),
					topicMetadata: {
						displayName: e
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
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(i);
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
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? a.b.orangered : "none"
			}))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				s = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: r.R
				}
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
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/constants/subredditLeaderboard.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				b = n("./src/reddit/helpers/trackers/screenview.ts"),
				f = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				y = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				k = n("./src/reddit/layout/page/Listing/index.tsx"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				E = n("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				x = n.n(E);
			const C = () => i.a.createElement("div", {
				className: x.a.bannerBackground
			}, i.a.createElement("div", {
				className: x.a.bannerContentContainer
			}, i.a.createElement("h1", {
				className: x.a.bannerHeader
			}, _.fbt._("Today's Top Growing Communities", null, {
				hk: "1J28A5"
			})), i.a.createElement("span", {
				className: x.a.bannerDescription
			}, _.fbt._("Browse Reddit's top growing communities. Find the top communities in your favorite category.", null, {
				hk: "4w2yrj"
			}))));
			var S = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				v = n("./node_modules/lodash/last.js"),
				N = n.n(v),
				T = n("./node_modules/lodash/times.js"),
				w = n.n(T),
				O = n("./node_modules/lodash/upperFirst.js"),
				j = n.n(O),
				L = n("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				P = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				I = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				F = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				B = n("./src/reddit/models/GoodContent/index.ts"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				W = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				R = n("./src/reddit/selectors/user.ts");
			const M = 25,
				A = .5,
				G = Object(d.c)({
					hasPreviousPage: (e, {
						categoryId: t
					}) => Object(W.c)(e, t),
					hasNextPage: (e, {
						categoryId: t
					}) => Object(W.b)(e, t),
					isMod: R.K,
					rankings: (e, {
						categoryId: t
					}) => Object(D.N)(e, t),
					subreddits: D.Z
				}),
				H = Object(o.b)(G, e => ({
					fetchMoreSubreddits: (t, n) => e(Object(P.a)(t, n))
				}));
			class Q extends i.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							n = Object(W.d)(this.props.categoryId, this.props.categoryName);
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, n)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(f.e)(e, this.props.categoryName || g.e)), this.renderSubredditRankItemPlaceholders = () => i.a.createElement(i.a.Fragment, null, w()(5, e => i.a.createElement(F.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map((t, n) => {
						const r = this.props.subreddits[t.id];
						return i.a.createElement(I.a, {
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
					} = this.props, s = N()(r), a = s && s.cursor, i = Object(L.checkIsModCategory)(t, n);
					return {
						after: a,
						categoryId: e === g.c ? g.f : e,
						filter: B.a,
						first: M,
						isOnlyModIncluded: i
					}
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: n,
						isMod: r,
						rankings: s,
						categoryDisplayText: a
					} = this.props, o = t || n, d = e === g.m, c = r && !d;
					return i.a.createElement("div", {
						className: x.a.mainContent
					}, i.a.createElement("div", {
						className: x.a.mainContentHeader
					}, i.a.createElement("h2", null, i.a.createElement("span", {
						className: x.a.mainContentHeaderText
					}, e ? d ? _.fbt._("Local Communities Near You", null, {
						hk: "2PsgJz"
					}) : _.fbt._("Today's Top Growing in {categoryName}", [_.fbt._param("categoryName", j()(a || e))], {
						hk: "4pneAv"
					}) : _.fbt._("Today's Top Growing Communities", null, {
						hk: "6LoyD"
					}))), c && i.a.createElement("span", {
						className: x.a.mainContentRankChangeText
					}, _.fbt._("Rank Change", null, {
						hk: "1DVGfi"
					}))), i.a.createElement("ol", {
						className: x.a.subredditRankingsList
					}, s ? this.renderSubredditRankItems(c) : this.renderSubredditRankItemPlaceholders(), o && i.a.createElement(S.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: A,
						rootMargin: "0px 0px 0px 0px"
					}, i.a.createElement("li", null, i.a.createElement(F.a, {
						large: !0
					})))))
				}
			}
			var J = Object(u.c)(H(Q)),
				q = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				z = n("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				K = n.n(z);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = e => {
				const {
					category: t,
					children: n,
					className: r,
					isActive: s,
					tabIndex: a
				} = e, o = Object(c.a)(K.a.categoryLink, s && K.a.active, r);
				return i.a.createElement("li", null, i.a.createElement(q.a, V({}, t.anchorProps, {
					className: o,
					"data-active": s,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: a,
					to: t.path || ""
				}), n, t.customIcon))
			};
			var Z = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Y = n("./src/reddit/controls/Button/index.tsx"),
				X = n("./src/reddit/helpers/name/index.ts");
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = 36;
			class te extends i.a.Component {
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
						children: s,
						childrenOffset: a = 0,
						currentCategoryName: o,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: u
					} = this.state, m = !u && d && n * d, p = a + (e ? n * e.length : 0), h = Object(c.a)(K.a.categoryList, u && K.a.expanded), b = e => !(!o || o !== Object(X.g)(e)), f = i.a.createElement("ul", {
						className: h,
						style: {
							height: m || p
						}
					}, s, e && e.map((e, r) => {
						const s = a + r * n;
						return i.a.createElement(U, {
							category: e,
							className: t,
							isActive: b(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: m && s >= m ? -1 : 0
						}, e.name === g.m ? g.k : e.displayText || e.name)
					}));
					return i.a.createElement("div", {
						className: Object(c.a)(K.a.categoryListContainer, r)
					}, f)
				}
				render() {
					const {
						buttonClassName: e,
						categories: t,
						className: n,
						header: r,
						headerClassName: s,
						initialNumberOfCategories: a
					} = this.props, o = t && a && t.length > a, d = Object(c.a)(n, K.a.container);
					return i.a.createElement(Z.a, {
						className: d,
						contentOnly: !0
					}, i.a.createElement("div", {
						className: Object(c.a)(K.a.header, s)
					}, i.a.createElement("h2", null, r || $._("Categories", null, {
						hk: "46zLMb"
					}))), this.renderCategoryList(), o && i.a.createElement(Y.o, {
						className: Object(c.a)(K.a.button, e),
						onClick: this.toggleExpanded
					}, o && !this.state.isExpanded ? $._("Show More", null, {
						hk: "1pCiqD"
					}) : $._("Show Less", null, {
						hk: "2qT4h7"
					})))
				}
			}
			var ne = te,
				re = n("./src/lib/lessComponent.tsx"),
				se = n("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				ae = n.n(se);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = re.a.a("Link", ae.a), de = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return i.a.createElement(oe, {
					href: `/subreddits/${t}-1`,
					key: e
				}, e)
			};
			var ce = e => i.a.createElement(Z.a, {
					className: ae.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, i.a.createElement("div", {
					className: ae.a.Title
				}, ie._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), i.a.createElement("div", {
					className: ae.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(de))),
				le = n("./src/reddit/components/SidebarContainer/index.tsx"),
				ue = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				me = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ge = n("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const pe = e => {
					const t = e.categoryName && Object(X.g)(e.categoryName);
					return i.a.createElement("div", {
						className: x.a.SidebarLeft
					}, i.a.createElement(le.a, null, i.a.createElement(ne, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				he = e => {
					const t = e.widgetCategories[0],
						n = e.widgetCategories[1];
					return i.a.createElement("div", {
						className: x.a.SidebarRight
					}, i.a.createElement(le.a, null, i.a.createElement(ge.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(ue.a, null), i.a.createElement(me.a, null, i.a.createElement(ge.a, {
						category: n,
						className: x.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(ce, null))))
				};
			var be = n("./src/reddit/selectors/category.ts"),
				fe = n("./src/reddit/selectors/moderatorPermissions.ts");
			const ye = Object(p.t)(),
				ke = (e, {
					match: t
				}) => Object(h.b)(t.params.categoryName || ""),
				_e = Object(m.Vd)(g.i),
				Ee = Object(d.c)({
					categories: e => Object(be.c)(e, {
						categoriesOrder: _e
					}),
					categoryId: (e, t) => {
						const n = ke(0, t);
						return n === g.m ? g.l : n ? Object(be.g)(e, {
							categoryName: n
						}) : g.c
					},
					categoryName: ke,
					isMod: fe.j,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				xe = Object(o.b)(Ee),
				Ce = {
					id: g.c,
					name: g.d,
					path: g.g,
					displayText: g.b
				},
				Se = {
					customIcon: i.a.createElement(y.a, null),
					id: g.p,
					name: g.q,
					displayText: g.o
				};
			class ve extends i.a.Component {
				constructor(e) {
					super(e), this.getWidgetCategories = () => {
						const {
							categories: e
						} = this.props, t = e.filter(this.filterActiveCategory);
						return s()(t).slice(0, 2)
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
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(f.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, n) => this.props.sendEvent(Object(f.b)(e, t, n)), this.state = {
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
					var e;
					const {
						className: t,
						isMod: n,
						shouldShowLocalRecommendations: r
					} = this.props, s = [Ce, ...r ? [g.j] : [], ...this.props.categories];
					n && s.unshift(Se);
					const a = Object(h.a)(g.g, s),
						o = n && this.props.categoryName === g.q,
						d = this.props.categoryId ? this.props.categoryName : o ? g.q : void 0,
						u = this.props.categoryId ? this.props.categoryId : o ? g.p : g.c,
						m = (null === (e = a.find(e => e.id === u)) || void 0 === e ? void 0 : e.displayText) || "";
					return i.a.createElement(l.a, null, i.a.createElement(k.a, {
						className: Object(c.a)(t, x.a.mainContent),
						content: i.a.createElement(J, {
							categoryId: u,
							categoryName: d,
							categoryDisplayText: m
						}),
						disableFullscreen: !0,
						navBar: i.a.createElement(C, null),
						sidebars: [i.a.createElement(pe, {
							key: "left",
							categories: a,
							categoryName: d || g.d,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), i.a.createElement(he, {
							key: "right",
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = ye(xe(Object(u.c)(ve)))
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/subredditLeaderboard.ts"),
				s = n("./src/reddit/selectors/category.ts");
			const a = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				o = (e, t) => t === r.q ? r.p : t === r.m ? r.l : e || r.c,
				d = (e, t) => {
					const n = e.subreddits.rankings,
						r = t && Object(s.f)(e, {
							categoryName: t
						}),
						a = n[o(r && r.id || null, t)];
					return !(!a || !a.length)
				}
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.ce32dc086b440cf70ecf.js.map