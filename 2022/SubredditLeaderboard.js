// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.6c3d2e1553aef9374494.js
// Retrieved at 8/10/2022, 7:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
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
		"./src/reddit/actions/category/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/categories/index.ts"),
				a = (n("./node_modules/lodash/isEmpty.js"), n("./node_modules/react-router-redux/es/index.js"), n("./src/lib/makeActionCreator/index.ts")),
				i = n("./src/reddit/constants/categories.tsx"),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/constants/experiments.ts");
			n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var m = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/selectors/category.ts"),
				p = n("./src/reddit/actions/category/constants.ts");
			Object(r.a)({
				features: {
					categories: s.a
				}
			});
			const g = Object(a.a)(p.c),
				h = Object(a.a)(p.b),
				y = Object(a.a)(p.a),
				f = () => async (e, t, n) => {
					let {
						apiContext: r
					} = n;
					const s = t(),
						a = Object(b.h)(s),
						m = Object(b.g)(s);
					if (a || m) return;
					e(g());
					const p = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: o.jb.GET
					}))(r());
					if (p.ok) {
						const {
							categories: t,
							categoryIds: n
						} = (e => {
							const t = {},
								n = [];
							return e.forEach((e, r) => {
								const s = {
									attr: e.category_attr,
									color: e.category_color || i.a[r % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(u.ig)(e.category_name)
								};
								n.push(s.id), t[s.id] = s
							}), {
								categories: t,
								categoryIds: n
							}
						})(p.body);
						e(h({
							categories: t,
							categoryIds: n
						}))
					} else e(y(p.error))
				}, k = (Object(a.a)(p.g), Object(a.a)(p.f), Object(a.a)(p.e), Object(a.a)(p.d)), x = e => async (t, n) => {
					const r = Object(b.j)(n(), {
						id: e
					});
					t(k({
						categoryId: e,
						rank: r + 1
					})), Object(m.lb)(Object(b.d)(n()))
				}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "checkIsModCategory", (function() {
				return h
			})), n.d(t, "subredditLeaderboardPageRequested", (function() {
				return y
			})), n.d(t, "subredditLeaderboardPageDataRequested", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/pageTitle/index.ts"),
				s = n("./src/reddit/actions/category/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/constants/listings.ts"),
				l = n("./src/reddit/constants/subredditLeaderboard.ts"),
				u = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				m = n("./src/reddit/models/GoodContent/index.ts"),
				b = n("./src/reddit/selectors/category.ts"),
				p = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				g = n("./src/reddit/selectors/user.ts");
			const h = (e, t) => t && e === l.q,
				y = e => async (t, n) => {
					t(Object(a.k)({
						actionSource: a.a.SubredditLeaderboard,
						redirectUrl: c.c[c.b.SubredditLeaderboard]
					})), t(i.m({
						title: Object(r.o)()
					}));
					const s = e.params && e.params.categoryName,
						o = s && Object(u.b)(s);
					await t(f(o))
				}, f = e => async (t, n) => {
					await t(Object(s.a)());
					const r = n(),
						a = Object(g.R)(r);
					if (Object(p.a)(r, e)) return;
					const i = e && Object(b.e)(r, {
							categoryName: e
						}),
						c = e === l.m ? l.l : i && i.id || l.f,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(c, h(e, a)),
						y = Object(p.d)(c, e);
					await Promise.all([t(Object(o.b)(u, y)), t(Object(d.t)())])
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				o = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(r.a)(s.n),
				l = Object(r.a)(s.m),
				u = Object(r.a)(s.l),
				m = Object(r.a)(s.a),
				b = Object(r.a)(s.b),
				p = Object(r.a)(s.c),
				g = (e, t) => async (n, r, s) => {
					let {
						gqlContext: g
					} = s;
					n(c());
					const h = t === a.l ? async function() {
						const t = await Object(i.a)(g(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const r = t.body,
							s = r && r.data && r.data.nearbySubreddits;
						return Object(d.a)(s)
					}: async function() {
						const t = await Object(o.a)(g(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const r = t.body,
							s = r && r.data && r.data.subredditLeaderboard;
						return Object(d.b)(s)
					}, y = await h();
					if (!y) return;
					const {
						pageInfo: f,
						rankings: k,
						subreddits: x
					} = y;
					n(m({
						subreddits: x
					})), n(b({
						categoryRankingsKey: t,
						rankings: k
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
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/elementIds.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/BackToTop/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: r
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(t, c.a.container),
					style: r
				}, s.a.createElement(o.l, {
					className: c.a.button,
					onClick: () => u(n)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
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
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/location.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/trackers/navigation.ts"),
				g = n("./src/reddit/selectors/experiments/countrySites.ts"),
				h = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				y = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = n("./src/reddit/selectors/meta.ts"),
				k = n("./src/reddit/components/SidebarFooter/index.m.less"),
				x = n.n(k);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = d.a.a("Link", x.a), S = Object(i.c)({
				countryCode: f.b,
				d2xPdpSideRailRecsVariant: h.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: h.b,
				isNavbarLikeMwebEnabled: y.a
			}), _ = Object(a.b)(S), v = Object(b.u)({
				isFrontpage: b.A,
				isCountrySitePage: b.y
			}), O = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return s.a.createElement("div", {
					className: x.a.GreyRereddit
				}, n, !!m.c[t] && s.a.createElement("div", {
					className: x.a.LinkContainer
				}, s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: x.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: x.a.LinkContainer
				}, s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: x.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = v(_(Object(c.c)(e => {
				const t = Object(a.f)().getState(),
					n = Object(g.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Rc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Rc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Rc.LargeImagePreview ? e.reredditButtons : [];
					return s.a.createElement(O, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage) return null;
				const r = t => {
					const r = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, r[t]) : null
				};
				return s.a.createElement(l.a, {
					className: x.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: x.a.LinkContainer
				}, s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: x.a.Column
				}, s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: x.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: x.a.Column
				}, r("en"), r("fr"), r("it")), s.a.createElement("div", {
					className: x.a.Column
				}, r("de"), r("es"), r("pt"))), s.a.createElement("div", {
					className: x.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
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
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
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
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				p = n.n(b),
				g = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = d.e[1] + 24,
				f = u.f + 8,
				k = f + 152 + 16,
				x = k + y + 8,
				C = g.a.div("Container", p.a),
				E = g.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...r
					} = e;
					return o.a.createElement(c.a, h({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?f:8}px)`
						}
					}, r))
				}, "BackToTop", p.a),
				S = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: a,
						shouldStickToBottom: i
					} = e;
					return o.a.createElement("div", {
						className: Object(r.a)(n, {
							[p.a.BottomStickyStyles]: i,
							[p.a.StickyStyles]: !i && a && !s,
							[p.a.StickyStylesFakeOverlay]: !i && !!s
						})
					}, t)
				};
			class _ extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > x,
						shouldFooterSticky: this.windowHeight > k
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
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
							pageLayer: i,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !r), m = this.state.isBottomSticky;
					return o.a.createElement(C, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(S, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: m
					}, t, r, d, !a && o.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(E, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const v = Object(m.u)();
			t.a = v(_)
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
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				y = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/userPrefs.ts"),
				k = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = n.n(k);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", x.a), S = u.a.wrapped(g.a, "CloseIcon", x.a), _ = u.a.div("LoadingTitleContainer", x.a), v = u.a.div("LoadingNavContainer", x.a), O = u.a.div("ShortLoadingNav", x.a), N = u.a.wrapped(p.a, "ThemedChevron", x.a), j = e => {
				let {
					...t
				} = e;
				return i.a.createElement(E, null, i.a.createElement(S, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, C._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(b.o, null, i.a.createElement(_, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingTitle, t.isLoading && x.a.loading)
				})), i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(N, null)), i.a.createElement(v, null, i.a.createElement(O, null), i.a.createElement(N, null)), i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(N, null)), i.a.createElement(v, null, i.a.createElement(O, null), i.a.createElement(N, null)), i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(N, null)))))
			}, T = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), w = Object(d.c)({
				isEditing: y.i,
				isSubscriptionsPinned: f.c,
				moderatorPermissions: h.n
			});
			t.a = Object(o.b)(w)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(x.a.Container, e.isSubscriptionsPinned && x.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(T, {
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
				return b
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return C
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
				b = r.a.h2("FormGroupTitle", a.a),
				p = r.a.div("FormElement", a.a),
				g = r.a.div("FormGroupDescription", a.a),
				h = r.a.div("FormItem", a.a),
				y = r.a.h3("FormElementTitle", a.a),
				f = r.a.div("FormElementDescription", a.a),
				k = r.a.div("FormElementError", a.a),
				x = r.a.div("FormElementSubGroup", a.a),
				C = r.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							...g
						} = this.props, h = this.state.isHovered, y = Object(d.a)({
							type: t.type,
							key: h ? "unsubscribe" : "subscribed"
						});
						return s.a.createElement(o.t, u({
							className: e,
							priority: g.shouldReverseColor ? o.c.Primary : o.c.Secondary,
							text: y,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: o.d.XSP
						}, g))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							toggleEmailVerificationTooltip: g,
							emailEnablementJoinFollowVoteVariant: h,
							...y
						} = this.props, f = Object(d.a)({
							type: t.type,
							key: "subscribe"
						});
						return s.a.createElement(o.t, u({
							className: e,
							priority: y.shouldReverseColor ? o.c.Secondary : o.c.Primary,
							size: o.d.XSP,
							text: f,
							onClick: this.onClick
						}, y, {
							id: `subscribe-button-${a}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(a.c)(b))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/subredditLeaderboard.ts"),
				u = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reddit/endpoints/subreddit/local.ts"),
				b = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				p = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				g = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				h = n("./src/reddit/models/GoodContent/index.ts"),
				y = n("./src/reddit/selectors/platform.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(i.c)({
					isOnLeaderboardPage: e => !!Object(y.h)(e),
					isOnFrontpage: e => !!Object(y.g)(e)
				}),
				x = Object(a.b)(k, e => ({
					updateSubredditModels: t => e(Object(o.a)({
						subreddits: t
					}))
				})),
				C = async (e, t) => {
					const n = await Object(b.a)(e, t);
					if (n && n.ok) {
						const e = n.body,
							t = e && e.data && e.data.subredditLeaderboard;
						return Object(p.c)(t)
					}
				};
			class E extends s.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n, r) => {
						this.props.sendEvent(Object(g.c)(e, t, n, r)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, r)
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
					if (n === l.l) {
						const e = await Object(m.b)(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: r
						} = e;
						return this.props.updateSubredditModels(r), void this.setState(e => ({
							...e,
							[l.m]: {
								rankings: n,
								subreddits: r
							}
						}))
					}(n || n === l.f) && C(this.props.gqlContext(), {
						categoryId: n,
						filter: h.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits;
						n && this.props.updateSubredditModels(n);
						const r = this.props.category && this.props.category.name || l.c;
						t && n && this.setState(e => ({
							...e,
							[r]: {
								rankings: t,
								subreddits: n
							}
						}))
					}).catch(e => console.error("Error >>>", e))
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = e && e.displayText, r = t || l.c, a = this.state[r], i = a ? a.rankings : [], o = a ? a.subreddits : {}, c = i && i[0] && i[0].id, u = o && o[c], m = !(u && u.isNSFW) || this.props.isOver18;
					return s.a.createElement(d.b, f({
						categoryName: t,
						categoryDisplayText: n,
						onSendEventClick: this.sendEventClick,
						rankings: i,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: o
					}, this.props))
				}
			}
			t.a = x(Object(u.b)(Object(c.c)(E)))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				y = n.n(h);
			const f = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, {
					className: y.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: Object(o.a)(y.a.subredditDetailsContainer, {
						[y.a.handleOverflow]: e.shouldShowJoinButton
					})
				}, e.large ? a.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: y.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: y.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: y.a.smallText
				}, r.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				k = e => {
					const t = Object(o.a)(y.a.subredditRankItem, e.large && y.a.large, {
							[y.a.handleOverflow]: e.isOnFrontpage
						}),
						n = e.delta && e.delta > 0,
						r = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						s = e.delta ? n ? "#46D160" : "#EA0027" : "transparent",
						c = e.isOnLeaderboardPage && e.large;
					return a.a.createElement("li", {
						className: Object(o.a)(y.a.listItem, {
							[y.a.handleOverflow]: e.isOnFrontpage
						}),
						key: `${e.subreddit.displayText}-${e.large}`
					}, a.a.createElement(i.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: Object(o.a)(y.a.subredditRankItemColumn, {
							[y.a.handleOverflow]: e.isOnFrontpage
						})
					}, !e.hasTagline && a.a.createElement("span", {
						className: y.a.rankText
					}, r), !e.hasTagline && a.a.createElement(g.a, {
						className: y.a.arrow,
						name: n ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: s
						}
					}), a.a.createElement(f, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit,
						shouldShowJoinButton: (c || e.isOnFrontpage) && !e.subreddit.isSubscribed && !e.large
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: y.a.regularText
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)), (c || e.isOnFrontpage) && a.a.createElement("div", {
						className: Object(o.a)(e.large ? y.a.LeaderboardSubscribeButton : y.a.WidgetSubscribeButton, {
							[y.a.noDelta]: !e.shouldDisplayDelta
						})
					}, a.a.createElement(u.a, {
						getEventFactory: t => e.large ? Object(p.g)(e.subreddit.name, t) : Object(p.d)(e.subreddit.name, t),
						identifier: {
							name: e.subreddit.name,
							type: m.a.SUBREDDIT
						},
						size: b.d.XSP
					})))
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
				className: Object(a.a)(o.a.placeholderWrapper, e.fullWidth && o.a.fullWidth, e.large && o.a.large)
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
				handleOverflow: "_1mEfDz-ZrTiw9KxnSpAXBy",
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
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb",
				fullWidth: "_1MG43W0qN1RYkFlwxoV_tQ",
				LeaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				leaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				noDelta: "-i9ZUMkweo4ZSITdQHUmw",
				WidgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8",
				widgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
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
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/subredditLeaderboard.ts"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/Chip/index.tsx"),
				k = n("./src/reddit/helpers/name/index.ts"),
				x = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				C = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				S = n.n(E);
			const _ = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && S.a.communityBannerPlaceholder,
						s = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						a = e.categoryName === h.m && h.j.path ? h.j.path : h.g;
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, S.a.communityBanner, n),
						style: s
					}, t && c.a.createElement("h2", {
						className: S.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.e),
						to: a
					}, e.categoryName ? ((e, t) => e === h.m ? r.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : r.fbt._("Top {categoryName} Communities", [r.fbt._param("categoryName", c.a.createElement("span", {
						className: S.a.categoryName
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
					} = t, s = !!(!e.rankings || !e.rankings.length) && S.a.communityBannerPlaceholder, a = n && Array.isArray(n) && 2 === n.length ? {
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, i = t.path ? t.path : h.g, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, S.a.taglineBanner, s)
					}, c.a.createElement("div", {
						className: S.a.taglineBannerBackground,
						style: a
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || h.e),
						to: i
					}, c.a.createElement("h2", {
						className: S.a.taglineBannerText
					}, c.a.createElement("img", {
						className: S.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${o}`
					}), t.tagline ? (e => c.a.createElement("span", {
						className: S.a.categoryName
					}, r.fbt._("{tagline}", [r.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				O = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const r = e.subreddits[t.id];
					return c.a.createElement(b.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.e, r.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: r,
						isOnLeaderboardPage: e.isOnLeaderboardPage,
						isOnFrontpage: e.isOnFrontpage
					})
				}), !e.rankings.length && N),
				N = c.a.createElement(c.a.Fragment, null, o()(5, e => c.a.createElement(p.a, {
					key: e
				}))),
				j = e => {
					const t = e.isSecondaryButton ? y.q : y.n,
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
						className: S.a.footer
					}, c.a.createElement(t, {
						className: S.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.e),
						to: e.to || "",
						style: n
					}, s))
				};

			function T(e, t) {
				return t || `${h.g}${Object(k.h)(e)}/`
			}
			const w = e => {
				return c.a.createElement("div", {
					className: S.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: S.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || h.e, void 0, n))(t.name, n + 1)
				}, c.a.createElement(f.a, {
					className: e.hasTagline ? S.a.taglineChip : S.a.chip,
					key: t.name,
					to: T(t.name, t.path),
					wide: t.name === h.m
				}, t.name ? t.name === h.m ? h.k : t.displayText || t.name : r.fbt._("Top", null, {
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
				} = e, l = Object(C.a)();
				Object(d.useEffect)(() => {
					l(Object(x.e)(r || h.e))
				}, []);
				const m = a()(n),
					b = t && m && t[m.id],
					p = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					y = b ? b.bannerBackgroundImage || p : void 0,
					f = e.to || r && T(r, i.path),
					k = i && i.tagline,
					E = i && i.gradients && Array.isArray(i.gradients) && 2 === i.gradients.length ? i.gradients[1] : void 0;
				return c.a.createElement(g.a, {
					className: e.className,
					contentOnly: !0
				}, k && c.a.createElement(v, {
					category: i,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !k && c.a.createElement(_, {
					bannerBackgroundImage: y,
					categoryName: r,
					categoryDisplayText: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(O, {
					categoryName: r,
					hasTagline: !!k,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t,
					isOnLeaderboardPage: e.isOnLeaderboardPage,
					isOnFrontpage: e.isOnFrontpage
				}), c.a.createElement(j, {
					categoryName: r,
					categoryDisplayText: s,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: E,
					onSendEventClick: e.onSendEventClick,
					to: f
				}), o && c.a.createElement(w, {
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
				b = n("./src/reddit/helpers/trackers/widgets.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = n("./src/reddit/selectors/experiments/topPosts.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/models/Theme/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = x(e);
					return Object(f.f)(t)
				},
				S = e => {
					const t = C(e);
					return Object(f.f)(t)
				};
			var _ = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				v = n.n(_);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = Object(u.u)(), j = Object(a.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(h.l)(e, {
							subredditId: n
						}),
						s = Object(y.db)(e);
					return r || s
				},
				nigtmode: y.db,
				subredditId: u.n,
				topPostVariant: g.d
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
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = S(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: a,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, g = n ? v.a.widgetContentOnly : v.a.widgetContent, h = !r && this.props.styles, y = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(o.a)(t, v.a.widgetBackground, {
							[v.a.redditStyle]: r,
							[v.a.clickable]: !!d,
							[v.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: d,
						style: y
					}, u && s.a.createElement("div", {
						className: Object(o.a)(v.a.widgetHeader, {
							[v.a.clickable]: !!l
						}),
						id: i,
						style: f,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(o.a)(v.a.widgetTitle, b)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), a), s.a.createElement("div", {
						className: Object(o.a)(g, {
							[v.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: v.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = N(j(Object(d.a)(Object(l.c)(T))))
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
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "i", (function() {
				return _
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
				b = "near-you",
				p = r.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				g = "/subreddits/leaderboard/",
				h = {
					id: a,
					name: a,
					path: `${g}`
				},
				y = {
					id: m,
					name: b,
					path: `${g}${b}/`
				},
				f = [{
					name: "Sports",
					displayText: r.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${g}sports/`
				}, {
					name: "News",
					displayText: r.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${g}news/`
				}, {
					name: "Gaming",
					displayText: r.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${g}gaming/`
				}, {
					name: "Aww",
					displayText: r.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${g}aww/`
				}],
				k = {
					id: a,
					name: a,
					path: `${g}`,
					image: "popcorn-snoo",
					tagline: r.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				x = {
					id: m,
					name: b,
					path: `${g}${b}/`,
					image: "magnifying-glass-snoo",
					tagline: r.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				C = [{
					name: "Sports",
					displayText: r.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${g}sports/`,
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
					path: `${g}news/`,
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
					path: `${g}gaming/`,
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
					path: `${g}aww/`,
					image: "cat-snoo",
					tagline: r.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				E = [{
					name: "E3 Gaming",
					displayText: r.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${g}e3/`
				}],
				S = [{
					name: "Beauty",
					displayText: r.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${g}beauty/`,
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
					path: `${g}fashion/`,
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
					path: `${g}food/`,
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
					path: `${g}health_and_fitness/`,
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
					path: `${g}outdoors/`,
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
					path: `${g}relationships/`,
					image: "childrensbooks-snoo",
					tagline: r.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				_ = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
					kind: i.b.InternalLink,
					to: e.to
				} : {};
				return s.a.createElement(i.t, c({
					className: Object(a.a)(d.a.Chip, {
						[d.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.c.Tertiary,
					size: i.d.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				a = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			});
			async function o(e, t) {
				const n = await i(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(a.a)(t)
				}
			}
			t.a = i
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
					const n = Object(r.h)(t.name),
						s = n.split(" & ").join("_and_");
					return {
						...t,
						name: n,
						path: t.path || `${e}${s}/`
					}
				}),
				a = e => Object(r.h)(e).split("_and_").join(" & ")
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
			const s = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const s = {},
						a = [];
					for (const {
							node: i,
							...o
						} of t) {
						const e = Object(r.a)(i);
						s[e.id] = e, a.push(o)
					}
					return {
						pageInfo: n,
						rankings: a,
						subreddits: s
					}
				},
				a = e => {
					let {
						edges: t
					} = e;
					const n = {},
						s = [];
					for (const {
							node: a,
							...i
						} of t) {
						const e = Object(r.a)(a);
						n[e.id] = {
							...e,
							bannerBackgroundImage: a && a.styles && a.styles.bannerBackgroundImage
						}, s.push(i)
					}
					return {
						rankings: s,
						subreddits: n
					}
				},
				i = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const s = {},
						a = [];
					let i = 0;
					for (const {
							node: o
						} of t) {
						const e = Object(r.a)(o);
						s[e.id] = {
							...e,
							publicDescription: null == o ? void 0 : o.publicDescriptionText,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, a.push({
							id: e.id,
							rank: i
						}), i += 1
					}
					return {
						rankings: a,
						subreddits: s,
						pageInfo: n
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			}));
			var r = n("./src/reddit/constants/categories.tsx"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...s.n(t),
					action: "click",
					noun: Object(r.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, n) => a => ({
					...s.n(a),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				o = (e, t) => n => ({
					...s.n(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(r.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t) => n => ({
					...s.n(n),
					action: "click",
					source: "leaderboard_subreddit",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
					}
				}),
				c = (e, t, n, a) => i => ({
					...s.n(i),
					action: "click",
					actionInfo: {
						...s.d(i),
						position: a && a
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				l = (e, t) => n => ({
					...s.n(n),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(e),
						name: t && t.toLowerCase()
					}
				}),
				u = (e, t) => n => ({
					...s.n(n),
					action: "click",
					source: "leaderboard_right_rail",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
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
					widget: Object(i.wb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				d = (e, t) => n => ({
					source: s.POST,
					action: a.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: i.J(n, e),
					subreddit: i.ib(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...i.n(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: a.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...i.n(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: r.TOPIC,
					...i.n(t),
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
				fill: e.isUnread ? a.a.orangered : "none"
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
				b = n("./src/reddit/constants/subredditLeaderboard.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				h = n("./src/reddit/helpers/trackers/screenview.ts"),
				y = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				f = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				k = n("./src/reddit/layout/page/Listing/index.tsx"),
				x = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				E = n.n(C);
			const S = () => i.a.createElement("div", {
				className: E.a.bannerBackground
			}, i.a.createElement("div", {
				className: E.a.bannerContentContainer
			}, i.a.createElement("h1", {
				className: E.a.bannerHeader
			}, x.fbt._("Today's Top Growing Communities", null, {
				hk: "1J28A5"
			})), i.a.createElement("span", {
				className: E.a.bannerDescription
			}, x.fbt._("Browse Reddit's top growing communities. Find the top communities in your favorite category.", null, {
				hk: "4w2yrj"
			}))));
			var _ = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				v = n("./node_modules/lodash/last.js"),
				O = n.n(v),
				N = n("./node_modules/lodash/times.js"),
				j = n.n(N),
				T = n("./node_modules/lodash/upperFirst.js"),
				w = n.n(T),
				L = n("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				P = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				I = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				B = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				F = n("./src/reddit/models/GoodContent/index.ts"),
				R = n("./src/reddit/selectors/platform.ts"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				W = n("./src/reddit/selectors/user.ts");
			const A = 25,
				G = .5,
				H = Object(d.c)({
					hasPreviousPage: (e, t) => {
						let {
							categoryId: n
						} = t;
						return Object(M.c)(e, n)
					},
					hasNextPage: (e, t) => {
						let {
							categoryId: n
						} = t;
						return Object(M.b)(e, n)
					},
					isMod: W.R,
					rankings: (e, t) => {
						let {
							categoryId: n
						} = t;
						return Object(D.Q)(e, n)
					},
					subreddits: D.cb,
					isOnLeaderboardPage: e => !!Object(R.h)(e),
					isOnFrontpage: e => !!Object(R.g)(e)
				}),
				z = Object(o.b)(H, e => ({
					fetchMoreSubreddits: (t, n) => e(Object(P.b)(t, n))
				}));
			class J extends i.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							n = Object(M.d)(this.props.categoryId, this.props.categoryName);
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, n)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(y.f)(e, this.props.categoryName || b.e)), this.renderSubredditRankItemPlaceholders = () => i.a.createElement(i.a.Fragment, null, j()(5, e => i.a.createElement(B.a, {
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
							subreddit: r,
							isOnLeaderboardPage: this.props.isOnLeaderboardPage,
							isOnFrontpage: this.props.isOnFrontpage
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: n,
						rankings: r
					} = this.props, s = O()(r), a = s && s.cursor, i = Object(L.checkIsModCategory)(t, n);
					return {
						after: a,
						categoryId: e === b.c ? b.f : e,
						filter: F.a,
						first: A,
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
					} = this.props, o = t || n, d = e === b.m, c = r && !d;
					return i.a.createElement("div", {
						className: E.a.mainContent
					}, i.a.createElement("div", {
						className: E.a.mainContentHeader
					}, i.a.createElement("h2", null, i.a.createElement("span", {
						className: E.a.mainContentHeaderText
					}, e ? d ? x.fbt._("Local Communities Near You", null, {
						hk: "2PsgJz"
					}) : x.fbt._("Today's Top Growing in {categoryName}", [x.fbt._param("categoryName", w()(a || e))], {
						hk: "4pneAv"
					}) : x.fbt._("Today's Top Growing Communities", null, {
						hk: "6LoyD"
					}))), c && i.a.createElement("span", {
						className: E.a.mainContentRankChangeText
					}, x.fbt._("Rank Change", null, {
						hk: "1DVGfi"
					}))), i.a.createElement("ol", {
						className: E.a.subredditRankingsList
					}, s ? this.renderSubredditRankItems(c) : this.renderSubredditRankItemPlaceholders(), o && i.a.createElement(_.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: G,
						rootMargin: "0px 0px 0px 0px"
					}, i.a.createElement("li", null, i.a.createElement(B.a, {
						large: !0
					})))))
				}
			}
			var Q = Object(u.c)(z(J)),
				q = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				V = n("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				K = n.n(V);

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
					isActive: s,
					tabIndex: a
				} = e, o = Object(c.a)(K.a.categoryLink, s && K.a.active, r);
				return i.a.createElement("li", null, i.a.createElement(q.a, U({}, t.anchorProps, {
					className: o,
					"data-active": s,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: a,
					to: t.path || ""
				}), n, t.customIcon))
			};
			var X = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Y = n("./src/reddit/controls/Button/index.tsx"),
				$ = n("./src/reddit/helpers/name/index.ts");
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = 36;
			class ne extends i.a.Component {
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
						categoryItemHeight: n = te,
						categoryListContainerClassName: r,
						children: s,
						childrenOffset: a = 0,
						currentCategoryName: o,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: u
					} = this.state, m = !u && d && n * d, p = a + (e ? n * e.length : 0), g = Object(c.a)(K.a.categoryList, u && K.a.expanded), h = e => !(!o || o !== Object($.h)(e)), y = i.a.createElement("ul", {
						className: g,
						style: {
							height: m || p
						}
					}, s, e && e.map((e, r) => {
						const s = a + r * n;
						return i.a.createElement(Z, {
							category: e,
							className: t,
							isActive: h(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: m && s >= m ? -1 : 0
						}, e.name === b.m ? b.k : e.displayText || e.name)
					}));
					return i.a.createElement("div", {
						className: Object(c.a)(K.a.categoryListContainer, r)
					}, y)
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
					return i.a.createElement(X.a, {
						className: d,
						contentOnly: !0
					}, i.a.createElement("div", {
						className: Object(c.a)(K.a.header, s)
					}, i.a.createElement("h2", null, r || ee._("Categories", null, {
						hk: "46zLMb"
					}))), this.renderCategoryList(), o && i.a.createElement(Y.r, {
						className: Object(c.a)(K.a.button, e),
						onClick: this.toggleExpanded
					}, o && !this.state.isExpanded ? ee._("Show More", null, {
						hk: "1pCiqD"
					}) : ee._("Show Less", null, {
						hk: "2qT4h7"
					})))
				}
			}
			var re = ne,
				se = n("./src/lib/lessComponent.tsx"),
				ae = n("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				ie = n.n(ae);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = se.a.a("Link", ie.a), ce = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return i.a.createElement(de, {
					href: `/subreddits/${t}-1`,
					key: e
				}, e)
			};
			var le = e => i.a.createElement(X.a, {
					className: ie.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, i.a.createElement("div", {
					className: ie.a.Title
				}, oe._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), i.a.createElement("div", {
					className: ie.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(ce))),
				ue = n("./src/reddit/components/SidebarContainer/index.tsx"),
				me = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				be = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				pe = n("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const ge = e => {
					const t = e.categoryName && Object($.h)(e.categoryName);
					return i.a.createElement("div", {
						className: E.a.SidebarLeft
					}, i.a.createElement(ue.a, null, i.a.createElement(re, {
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
						className: E.a.SidebarRight
					}, i.a.createElement(ue.a, null, i.a.createElement(pe.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(me.a, null), i.a.createElement(be.a, null, i.a.createElement(pe.a, {
						category: n,
						className: E.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(le, null))))
				};
			var ye = n("./src/reddit/selectors/category.ts"),
				fe = n("./src/reddit/selectors/moderatorPermissions.ts");
			const ke = Object(p.u)(),
				xe = (e, t) => {
					let {
						match: n
					} = t;
					return Object(g.b)(n.params.categoryName || "")
				},
				Ce = Object(m.hg)(b.i),
				Ee = Object(d.c)({
					categories: e => Object(ye.b)(e, {
						categoriesOrder: Ce
					}),
					categoryId: (e, t) => {
						const n = xe(0, t);
						return n === b.m ? b.l : n ? Object(ye.f)(e, {
							categoryName: n
						}) : b.c
					},
					categoryName: xe,
					isMod: fe.k,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				Se = Object(o.b)(Ee),
				_e = {
					id: b.c,
					name: b.d,
					path: b.g,
					displayText: b.b
				},
				ve = {
					customIcon: i.a.createElement(f.a, null),
					id: b.p,
					name: b.q,
					displayText: b.o
				};
			class Oe extends i.a.Component {
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
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(y.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, n) => this.props.sendEvent(Object(y.b)(e, t, n)), this.state = {
						widgetCategories: []
					}
				}
				componentDidMount() {
					const e = this.getWidgetCategories();
					this.setWidgetCategories(e), this.props.sendEvent(Object(h.e)())
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
					} = this.props, s = [_e, ...r ? [b.j] : [], ...this.props.categories];
					n && s.unshift(ve);
					const a = Object(g.a)(b.g, s),
						o = n && this.props.categoryName === b.q,
						d = this.props.categoryId ? this.props.categoryName : o ? b.q : void 0,
						u = this.props.categoryId ? this.props.categoryId : o ? b.p : b.c,
						m = (null === (e = a.find(e => e.id === u)) || void 0 === e ? void 0 : e.displayText) || "";
					return i.a.createElement(l.a, null, i.a.createElement(k.a, {
						className: Object(c.a)(t, E.a.mainContent),
						content: i.a.createElement(Q, {
							categoryId: u,
							categoryName: d,
							categoryDisplayText: m
						}),
						disableFullscreen: !0,
						navBar: i.a.createElement(S, null),
						sidebars: [i.a.createElement(ge, {
							key: "left",
							categories: a,
							categoryName: d || b.d,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), i.a.createElement(he, {
							key: "right",
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = ke(Se(Object(u.c)(Oe)))
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				o = n("./src/reddit/selectors/meta.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(o.h)(e) && Object(a.f)(e),
					experimentName: r.rc
				}), i.a),
				l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(a.f)(e),
					experimentName: r.qc
				}), i.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
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
						r = t && Object(s.e)(e, {
							categoryName: t
						}),
						a = n[o(r && r.id || null, t)];
					return !(!a || !a.length)
				}
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"6104afd3cdeb"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.6c3d2e1553aef9374494.js.map