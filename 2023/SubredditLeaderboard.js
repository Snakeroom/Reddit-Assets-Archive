// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.fe88abe138b300688312.js
// Retrieved at 1/4/2023, 10:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
		"./node_modules/lodash/times.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseTimes.js"),
				s = r("./node_modules/lodash/_castFunction.js"),
				a = r("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				o = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > i) return [];
				var r = o,
					c = d(e, o);
				t = s(t), e -= o;
				for (var l = n(c, t); ++r < e;) t(r);
				return l
			}
		},
		"./src/reddit/actions/category/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			})), r.d(t, "b", (function() {
				return x
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/categories/index.ts"),
				a = (r("./node_modules/lodash/isEmpty.js"), r("./node_modules/react-router-redux/es/index.js"), r("./src/lib/makeActionCreator/index.ts")),
				i = r("./src/reddit/constants/categories.tsx"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				u = r("./src/reddit/constants/experiments.ts");
			r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var m = r("./src/reddit/helpers/localStorage/index.ts"),
				b = r("./src/reddit/selectors/category.ts"),
				p = r("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: s.a
				}
			});
			const g = Object(a.a)(p.c),
				h = Object(a.a)(p.b),
				y = Object(a.a)(p.a),
				k = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						a = Object(b.h)(s),
						m = Object(b.g)(s);
					if (a || m) return;
					e(g());
					const p = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: o.ob.GET
					}))(n());
					if (p.ok) {
						const {
							categories: t,
							categoryIds: r
						} = (e => {
							const t = {},
								r = [];
							return e.forEach((e, n) => {
								const s = {
									attr: e.category_attr,
									color: e.category_color || i.a[n % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(u.lg)(e.category_name)
								};
								r.push(s.id), t[s.id] = s
							}), {
								categories: t,
								categoryIds: r
							}
						})(p.body);
						e(h({
							categories: t,
							categoryIds: r
						}))
					} else e(y(p.error))
				}, f = (Object(a.a)(p.g), Object(a.a)(p.f), Object(a.a)(p.e), Object(a.a)(p.d)), x = e => async (t, r) => {
					const n = Object(b.j)(r(), {
						id: e
					});
					t(f({
						categoryId: e,
						rank: n + 1
					})), Object(m.hb)(Object(b.d)(r()))
				}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "checkIsModCategory", (function() {
				return h
			})), r.d(t, "subredditLeaderboardPageRequested", (function() {
				return y
			})), r.d(t, "subredditLeaderboardPageDataRequested", (function() {
				return k
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/pageTitle/index.ts"),
				s = r("./src/reddit/actions/category/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				o = r("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = r("./src/reddit/actions/users.ts"),
				c = r("./src/reddit/constants/listings.ts"),
				l = r("./src/reddit/constants/subredditLeaderboard.ts"),
				u = r("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				m = r("./src/reddit/models/GoodContent/index.ts"),
				b = r("./src/reddit/selectors/category.ts"),
				p = r("./src/reddit/selectors/subredditLeaderboard.ts"),
				g = r("./src/reddit/selectors/user.ts");
			const h = (e, t) => t && e === l.n,
				y = e => async (t, r) => {
					t(Object(a.k)({
						actionSource: a.a.SubredditLeaderboard,
						redirectUrl: c.c[c.b.SubredditLeaderboard]
					})), t(i.m({
						title: Object(n.q)()
					}));
					const s = e.params && e.params.categoryName,
						o = s && Object(u.b)(s);
					await t(k(o))
				}, k = e => async (t, r) => {
					await t(Object(s.a)());
					const n = r(),
						a = Object(g.T)(n);
					if (Object(p.a)(n, e)) return;
					const i = e && Object(b.e)(n, {
							categoryName: e
						}),
						c = e === l.k ? l.j : i && i.id || l.e,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(c, h(e, a)),
						y = Object(p.d)(c, e);
					await Promise.all([t(Object(o.b)(u, y)), t(Object(d.s)())])
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return g
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/subreddit/constants.ts"),
				a = r("./src/reddit/constants/subredditLeaderboard.ts"),
				i = r("./src/reddit/endpoints/subreddit/local.ts"),
				o = r("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(n.a)(s.r),
				l = Object(n.a)(s.q),
				u = Object(n.a)(s.p),
				m = Object(n.a)(s.a),
				b = Object(n.a)(s.b),
				p = Object(n.a)(s.c),
				g = (e, t) => async (r, n, s) => {
					let {
						gqlContext: g
					} = s;
					r(c());
					const h = t === a.j ? async function() {
						const t = await Object(i.a)(g(), e);
						if (!t.ok) {
							const e = t.error;
							return r(u({
								error: e
							})), null
						}
						const n = t.body,
							s = n && n.data && n.data.nearbySubreddits;
						return Object(d.a)(s)
					}: async function() {
						const t = await Object(o.a)(g(), e);
						if (!t.ok) {
							const e = t.error;
							return void r(u({
								error: e
							}))
						}
						const n = t.body,
							s = n && n.data && n.data.subredditLeaderboard;
						return Object(d.b)(s)
					}, y = await h();
					if (!y) return;
					const {
						pageInfo: k,
						rankings: f,
						subreddits: x
					} = y;
					r(m({
						subreddits: x
					})), r(b({
						categoryRankingsKey: t,
						rankings: f
					})), r(p({
						categoryRankingsKey: t,
						pageInfo: k
					})), r(l())
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/constants/elementIds.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/BackToTop/index.m.less"),
				c = r.n(d);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: r,
					style: n
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(t, c.a.container),
					style: n
				}, s.a.createElement(o.a, {
					className: c.a.button,
					onClick: () => u(r)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/constants/location.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/trackers/navigation.ts"),
				g = r("./src/reddit/selectors/experiments/countrySites.ts"),
				h = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				y = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				k = r("./src/reddit/selectors/meta.ts"),
				f = r("./src/redditGQL/types.ts"),
				x = r("./src/reddit/components/SidebarFooter/index.m.less"),
				C = r.n(x);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js"), S = d.a.a("Link", C.a), _ = Object(i.c)({
				countryCode: k.b,
				d2xPdpSideRailRecsVariant: h.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: h.b,
				isNavbarLikeMwebEnabled: y.a
			}), v = Object(a.b)(_), O = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), N = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return s.a.createElement("div", {
					className: C.a.GreyRereddit
				}, r, !!m.c[t] && s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), t === f.k.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), t === f.k.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), s.a.createElement("div", {
					className: C.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(v(Object(c.c)(e => {
				const t = Object(a.f)().getState(),
					r = Object(g.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.fd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.fd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.fd.LargeImagePreview ? e.reredditButtons : [];
					return s.a.createElement(N, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return r.includes(t) || "en" === t ? s.a.createElement(S, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, n[t]) : null
				};
				return s.a.createElement(l.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === f.k.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === f.k.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: C.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: C.a.LinkContainer
				}, s.a.createElement("div", {
					className: C.a.Column
				}, n("en"), n("fr"), n("it")), s.a.createElement("div", {
					className: C.a.Column
				}, n("de"), n("es"), n("pt"))), s.a.createElement("div", {
					className: C.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/lodash/throttle.js"),
				a = r.n(s),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/reddit/components/BackToTop/index.tsx"),
				l = r("./src/reddit/components/SidebarFooter/index.tsx"),
				u = r("./src/reddit/constants/componentSizes.ts"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				p = r.n(b),
				g = r("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = d.g[1] + 24,
				k = u.f + 8,
				f = k + 152 + 16,
				x = f + y + 8,
				C = g.a.div("Container", p.a),
				E = g.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...n
					} = e;
					return o.a.createElement(c.a, h({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?k:8}px)`
						}
					}, n))
				}, "BackToTop", p.a),
				S = e => {
					let {
						children: t,
						className: r,
						isFakeOverlay: s,
						isSticky: a,
						shouldStickToBottom: i
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(r, {
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
						shouldFooterSticky: this.windowHeight > f
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
					}, d.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: r,
							children: n,
							className: s,
							hideFooter: a,
							pageLayer: i,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !n), m = this.state.isBottomSticky;
					return o.a.createElement(C, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(S, {
						isFakeOverlay: r,
						isSticky: u,
						shouldStickToBottom: m
					}, t, n, d, !a && o.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(E, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const v = Object(m.v)();
			t.a = v(_)
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
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/lessComponent.tsx"),
				m = r("./src/lib/loadWithRetries/index.ts"),
				b = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = r("./src/reddit/icons/svgs/Close/index.tsx"),
				h = r("./src/reddit/selectors/moderatorPermissions.ts"),
				y = r("./src/reddit/selectors/structuredStyles.ts"),
				k = r("./src/reddit/selectors/userPrefs.ts"),
				f = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = r.n(f);
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", x.a), S = u.a.wrapped(g.a, "CloseIcon", x.a), _ = u.a.div("LoadingTitleContainer", x.a), v = u.a.div("LoadingNavContainer", x.a), O = u.a.div("ShortLoadingNav", x.a), N = u.a.wrapped(p.a, "ThemedChevron", x.a), j = e => {
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
				getComponent: () => Object(m.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("StructuredStyles")]).then(r.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
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
				isSubscriptionsPinned: k.c,
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return i
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "o", (function() {
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "j", (function() {
				return C
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = r.n(s);
			const i = n.a.section("FormPage", a.a),
				o = n.a.h1("HomePageTitle", a.a),
				d = n.a.button("HomePageBreadcrumb", a.a),
				c = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				u = n.a.div("FormPageSection", a.a),
				m = n.a.div("FormGroup", a.a),
				b = n.a.h2("FormGroupTitle", a.a),
				p = n.a.div("FormElement", a.a),
				g = n.a.div("FormGroupDescription", a.a),
				h = n.a.div("FormItem", a.a),
				y = n.a.h3("FormElementTitle", a.a),
				k = n.a.div("FormElementDescription", a.a),
				f = n.a.div("FormElementError", a.a),
				x = n.a.div("FormElementSubGroup", a.a),
				C = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, r) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = r("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = r("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
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
							onSubscribe: r,
							onUnsubscribe: n,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							priority: g,
							isShredditParityEnabled: h,
							...y
						} = this.props, k = this.state.isHovered, f = Object(d.a)({
							type: t.type,
							key: k ? "unsubscribe" : "subscribed"
						}), x = y.shouldReverseColor ? o.c.Secondary : o.c.Primary;
						return s.a.createElement(o.t, u({
							className: e,
							priority: g || x,
							rplStyle: h,
							text: f,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: o.d.XSP
						}, y))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: r,
							onUnsubscribe: n,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							priority: g,
							isShredditParityEnabled: h,
							...y
						} = this.props, k = Object(d.a)({
							type: t.type,
							key: "subscribe"
						}), f = y.shouldReverseColor ? o.c.Secondary : o.c.Primary;
						return s.a.createElement(o.t, u({
							className: e,
							priority: g || f,
							size: o.d.XSP,
							rplStyle: h,
							text: k,
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
						doNotHideOtherSubscribeButtons: r
					} = this.props;
					return t ? this.state.hasJustSubscribed || r ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(a.c)(b))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = r.n(i);
			const d = e => s.a.createElement("div", {
				className: Object(a.a)(o.a.placeholderWrapper, e.fullWidth && o.a.fullWidth, e.large && o.a.large)
			}, s.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: o.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, r) {
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
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/trackers/widgets.ts"),
				p = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = r("./src/reddit/selectors/experiments/topPosts.ts"),
				h = r("./src/reddit/selectors/structuredStyles.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/models/Theme/index.ts"),
				f = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = x(e);
					return Object(k.f)(t)
				},
				S = e => {
					const t = C(e);
					return Object(k.f)(t)
				};
			var _ = r("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				v = r.n(_);
			const {
				fbt: O
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = Object(u.v)(), j = Object(a.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const r = Object(u.o)(e, t) || void 0,
						n = t.redditStyle || Object(h.l)(e, {
							subredditId: r
						}),
						s = Object(y.fb)(e);
					return n || s
				},
				nigtmode: y.fb,
				subredditId: u.o,
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
						contentOnly: r,
						forceRedditStyle: n,
						headerButton: a,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, g = r ? v.a.widgetContentOnly : v.a.widgetContent, h = !n && this.props.styles, y = h ? this.getWidgetBackgroundStyles() : {}, k = h ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(o.a)(t, v.a.widgetBackground, {
							[v.a.redditStyle]: n,
							[v.a.clickable]: !!d,
							[v.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: y
					}, u && s.a.createElement("div", {
						className: Object(o.a)(v.a.widgetHeader, {
							[v.a.clickable]: !!l
						}),
						id: i,
						style: {
							...k,
							...this.props.headerStyles
						},
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
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = "DEFAULT",
				a = "",
				i = "All Communities",
				o = n.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				d = "top",
				c = "MOD",
				l = "moderating",
				u = n.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				b = "near-you",
				p = n.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				g = "/subreddits/leaderboard/",
				h = {
					id: m,
					name: b,
					path: `${g}${b}/`
				},
				y = (n.fbt._("Sports", null, {
					hk: "41sK5Y"
				}), n.fbt._("News", null, {
					hk: "5WND6"
				}), n.fbt._("Gaming", null, {
					hk: "4qweUx"
				}), n.fbt._("Aww", null, {
					hk: "3qJjbL"
				}), n.fbt._("Trending communities are so hot right now", null, {
					hk: "1yqJn4"
				}), n.fbt._("Local communities — See what’s near you", null, {
					hk: "s70l7"
				}), n.fbt._("Sports", null, {
					hk: "11CI4F"
				}), n.fbt._("Sports communities are the real MVP", null, {
					hk: "1zKdF8"
				}), n.fbt._("News", null, {
					hk: "17cLQ8"
				}), n.fbt._("News communities to keep you informed", null, {
					hk: "4pGDSm"
				}), n.fbt._("Gaming", null, {
					hk: "2aDSZz"
				}), n.fbt._("Gaming communities taking it to the next level", null, {
					hk: "2zM7JE"
				}), n.fbt._("Aww", null, {
					hk: "3ecS9m"
				}), n.fbt._("Aww communities — get in on this cuteness", null, {
					hk: "1uAb8e"
				}), n.fbt._("E3 Gaming", null, {
					hk: "289tR6"
				}), n.fbt._("Beauty", null, {
					hk: "4mzjuL"
				}), n.fbt._("Beauty communities make us all look good", null, {
					hk: "2z1nzQ"
				}), n.fbt._("Fashion", null, {
					hk: "22tnM2"
				}), n.fbt._("Fashion communities are always in style", null, {
					hk: "4pNEnH"
				}), n.fbt._("Food", null, {
					hk: "2Bq28v"
				}), n.fbt._("Food communities to make you go mmmm", null, {
					hk: "3OGpOa"
				}), n.fbt._("Fitness", null, {
					hk: "4ruQRK"
				}), n.fbt._("Fitness communities that know how to work it", null, {
					hk: "3Ow48z"
				}), n.fbt._("Outdoors", null, {
					hk: "1Can0U"
				}), n.fbt._("Outdoor communities — they’re really out there", null, {
					hk: "1sfigF"
				}), n.fbt._("Relationships", null, {
					hk: "QnBO3"
				}), n.fbt._("Relationship communities understand all the feels", null, {
					hk: "27KPX"
				}), ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"])
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, r) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/controls/Chip/index.m.less"),
				d = r.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
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
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetNearbySubreddits.json"),
				a = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			});
			async function o(e, t) {
				const r = await i(e, t);
				if (r && r.ok) {
					const e = r.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(a.a)(t)
				}
			}
			t.a = i
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/helpers/name/index.ts");
			const s = (e, t) => t.map(t => {
					const r = Object(n.i)(t.name),
						s = r.split(" & ").join("_and_");
					return {
						...t,
						name: r,
						path: t.path || `${e}${s}/`
					}
				}),
				a = e => Object(n.i)(e).split("_and_").join(" & ")
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			r("./node_modules/lodash/isEmpty.js");
			var n = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = e => {
					let {
						edges: t,
						pageInfo: r
					} = e;
					const s = {},
						a = [];
					for (const {
							node: i,
							...o
						} of t) {
						const e = Object(n.a)(i);
						s[e.id] = e, a.push(o)
					}
					return {
						pageInfo: r,
						rankings: a,
						subreddits: s
					}
				},
				a = e => {
					let {
						edges: t
					} = e;
					const r = {},
						s = [];
					for (const {
							node: a,
							...i
						} of t) {
						const e = Object(n.a)(a);
						r[e.id] = {
							...e,
							bannerBackgroundImage: a && a.styles && a.styles.bannerBackgroundImage
						}, s.push(i)
					}
					return {
						rankings: s,
						subreddits: r
					}
				},
				i = e => {
					let {
						edges: t,
						pageInfo: r
					} = e;
					const s = {},
						a = [];
					let i = 0;
					for (const {
							node: o
						} of t) {
						const e = Object(n.a)(o);
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
						pageInfo: r
					}
				}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			}));
			var n, s, a = r("./src/reddit/constants/tracking.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const o = (e, t) => r => ({
					source: s.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.yb)(r, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				d = (e, t) => r => ({
					source: s.POST,
					action: a.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(r, e),
					subreddit: i.lb(r),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(r)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: a.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
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
				i = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = r.n(i);
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
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/constants/colors.ts");
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
		"./src/reddit/models/GoodContent/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = {
				isBlacklistedSubredditsExcluded: !0,
				isNsfwExcluded: !0,
				maxRating: "R"
			}
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
				i = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/constants/subredditLeaderboard.ts"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				h = r("./src/reddit/helpers/trackers/screenview.ts"),
				y = r("./src/reddit/constants/categories.tsx"),
				k = r("./src/reddit/selectors/telemetry.ts");
			const f = e => t => ({
					...k.o(t),
					action: "click",
					noun: Object(y.d)(e),
					source: "leaderboard_category"
				}),
				x = (e, t, r) => n => ({
					...k.o(n),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(y.d)(t),
						name: r && r.toLowerCase()
					}
				}),
				C = (e, t) => r => ({
					...k.o(r),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(y.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				E = (e, t, r, n) => s => ({
					...k.o(s),
					action: "click",
					actionInfo: {
						...k.d(s),
						position: n && n
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(y.d)(t),
						name: r && r.toLowerCase()
					}
				});
			var S = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				_ = r("./src/reddit/layout/page/Listing/index.tsx"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				N = r.n(O);
			const j = () => i.a.createElement("div", {
				className: N.a.bannerBackground
			}, i.a.createElement("div", {
				className: N.a.bannerContentContainer
			}, i.a.createElement("h1", {
				className: N.a.bannerHeader
			}, v.fbt._("Today's Top Growing Communities", null, {
				hk: "1J28A5"
			})), i.a.createElement("span", {
				className: N.a.bannerDescription
			}, v.fbt._("Browse Reddit's top growing communities. Find the top communities in your favorite category.", null, {
				hk: "4w2yrj"
			}))));
			var T = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				w = r("./node_modules/lodash/last.js"),
				L = r.n(w),
				P = r("./node_modules/lodash/times.js"),
				I = r.n(P),
				B = r("./node_modules/lodash/upperFirst.js"),
				D = r.n(B),
				F = r("./node_modules/react-router/esm/react-router.js"),
				R = r("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				M = r("./src/reddit/actions/subreddit/topSubreddits.ts"),
				W = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				A = r("./src/lib/prettyPrintNumber/index.ts"),
				G = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				H = r("./src/reddit/components/SubredditIcon/index.tsx"),
				z = r("./src/reddit/components/SubscribeButton/Inline.tsx"),
				Q = r("./src/reddit/constants/posts.ts"),
				J = r("./src/reddit/controls/Button/index.tsx"),
				K = r("./src/reddit/icons/fonts/index.tsx"),
				q = r("./src/reddit/selectors/experiments/shredditParity.ts"),
				V = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				U = r.n(V);
			const Z = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(H.b, {
					className: U.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), i.a.createElement("span", {
					className: Object(c.a)(U.a.subredditDetailsContainer, {
						[U.a.handleOverflow]: e.shouldShowJoinButton
					})
				}, e.large ? i.a.createElement(G.a, {
					subredditName: e.subreddit.name
				}, i.a.createElement("span", {
					className: U.a.regularText
				}, e.subreddit.displayText)) : i.a.createElement("span", {
					className: U.a.regularText
				}, e.subreddit.displayText), null === e.rank && i.a.createElement("span", {
					className: U.a.smallText
				}, v.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				X = e => {
					const t = Object(o.e)(q.a),
						r = Object(c.a)(U.a.subredditRankItem, e.large && U.a.large, {
							[U.a.handleOverflow]: e.isOnFrontpage
						}),
						n = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(A.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						a = e.delta ? n ? "#46D160" : "#EA0027" : "transparent",
						d = e.isOnLeaderboardPage && e.large;
					return i.a.createElement("li", {
						className: Object(c.a)(U.a.listItem, {
							[U.a.handleOverflow]: e.isOnFrontpage
						}),
						key: `${e.subreddit.displayText}-${e.large}`
					}, i.a.createElement(W.a, {
						className: r,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, i.a.createElement("div", {
						className: Object(c.a)(U.a.subredditRankItemColumn, {
							[U.a.handleOverflow]: e.isOnFrontpage
						})
					}, !e.hasTagline && i.a.createElement("span", {
						className: U.a.rankText
					}, s), !e.hasTagline && i.a.createElement(K.a, {
						className: U.a.arrow,
						name: n ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: a
						}
					}), i.a.createElement(Z, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit,
						shouldShowJoinButton: (d || e.isOnFrontpage) && !e.subreddit.isSubscribed && !e.large
					})), e.shouldDisplayDelta && i.a.createElement("span", {
						className: U.a.regularText
					}, e.delta ? Object(A.b)(Math.abs(e.delta)) : 0)), (d || e.isOnFrontpage) && i.a.createElement("div", {
						className: Object(c.a)(e.large ? U.a.LeaderboardSubscribeButton : U.a.WidgetSubscribeButton, {
							[U.a.noDelta]: !e.shouldDisplayDelta
						})
					}, i.a.createElement(z.a, {
						getEventFactory: t => e.large ? ((e, t) => r => ({
							...k.o(r),
							action: "click",
							source: "leaderboard_subreddit",
							noun: t ? "unsubscribe" : "subscribe",
							subreddit: {
								name: e && e.toLowerCase()
							}
						}))(e.subreddit.name, t) : ((e, t) => r => ({
							...k.o(r),
							action: "click",
							source: "leaderboard_right_rail",
							noun: t ? "unsubscribe" : "subscribe",
							subreddit: {
								name: e && e.toLowerCase()
							}
						}))(e.subreddit.name, t),
						identifier: {
							name: e.subreddit.name,
							type: Q.a.SUBREDDIT
						},
						size: J.d.XSP,
						priority: t ? J.c.Secondary : void 0,
						rplStyle: t
					})))
				};
			var Y = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				$ = r("./src/reddit/models/GoodContent/index.ts"),
				ee = r("./src/reddit/selectors/platform.ts"),
				te = r("./src/reddit/selectors/subreddit.ts"),
				re = r("./src/reddit/selectors/subredditLeaderboard.ts"),
				ne = r("./src/reddit/selectors/user.ts");
			const se = 25,
				ae = .5,
				ie = Object(d.c)({
					hasPreviousPage: (e, t) => {
						let {
							categoryId: r
						} = t;
						return Object(re.c)(e, r)
					},
					hasNextPage: (e, t) => {
						let {
							categoryId: r
						} = t;
						return Object(re.b)(e, r)
					},
					isMod: ne.T,
					rankings: (e, t) => {
						let {
							categoryId: r
						} = t;
						return Object(te.T)(e, r)
					},
					subreddits: te.fb,
					isOnLeaderboardPage: e => !!Object(ee.i)(e),
					isOnFrontpage: e => !!Object(ee.g)(e)
				}),
				oe = Object(o.b)(ie, e => ({
					fetchMoreSubreddits: (t, r) => e(Object(M.b)(t, r))
				}));
			class de extends i.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							r = Object(re.d)(this.props.categoryId, this.props.categoryName);
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, r)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(C(e, this.props.categoryName || b.d)), this.renderSubredditRankItemPlaceholders = () => i.a.createElement(i.a.Fragment, null, I()(5, e => i.a.createElement(Y.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map((t, r) => {
						const n = this.props.subreddits[t.id];
						return i.a.createElement(X, {
							delta: t.rankDelta,
							key: n.id,
							large: !0,
							onItemClick: () => this.sendLeaderboardSubredditEventClick(n),
							rank: r,
							shouldDisplayDelta: e,
							subreddit: n,
							isOnLeaderboardPage: this.props.isOnLeaderboardPage,
							isOnFrontpage: this.props.isOnFrontpage
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: r,
						rankings: n
					} = this.props, s = L()(n), a = s && s.cursor, i = Object(R.checkIsModCategory)(t, r);
					return {
						after: a,
						categoryId: e === b.b ? b.e : e,
						filter: $.a,
						first: se,
						isOnlyModIncluded: i
					}
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: r,
						isMod: n,
						rankings: s,
						categoryDisplayText: a
					} = this.props, o = t || r, d = e === b.k, c = n && !d;
					return d ? i.a.createElement(F.c, {
						to: "/subreddits/leaderboard/"
					}) : i.a.createElement("div", {
						className: N.a.mainContent
					}, i.a.createElement("div", {
						className: N.a.mainContentHeader
					}, i.a.createElement("h2", null, i.a.createElement("span", {
						className: N.a.mainContentHeaderText
					}, e ? d ? v.fbt._("Local Communities Near You", null, {
						hk: "2PsgJz"
					}) : v.fbt._("Today's Top Growing in {categoryName}", [v.fbt._param("categoryName", D()(a || e))], {
						hk: "4pneAv"
					}) : v.fbt._("Today's Top Growing Communities", null, {
						hk: "6LoyD"
					}))), c && i.a.createElement("span", {
						className: N.a.mainContentRankChangeText
					}, v.fbt._("Rank Change", null, {
						hk: "1DVGfi"
					}))), i.a.createElement("ol", {
						className: N.a.subredditRankingsList
					}, s ? this.renderSubredditRankItems(c) : this.renderSubredditRankItemPlaceholders(), o && i.a.createElement(T.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: ae,
						rootMargin: "0px 0px 0px 0px"
					}, i.a.createElement("li", null, i.a.createElement(Y.a, {
						large: !0
					})))))
				}
			}
			var ce = Object(u.c)(oe(de)),
				le = r("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				ue = r.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const be = e => {
				const {
					category: t,
					children: r,
					className: n,
					isActive: s,
					tabIndex: a
				} = e, o = Object(c.a)(ue.a.categoryLink, s && ue.a.active, n);
				return i.a.createElement("li", null, i.a.createElement(W.a, me({}, t.anchorProps, {
					className: o,
					"data-active": s,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: a,
					to: t.path || ""
				}), r, t.customIcon))
			};
			var pe = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ge = r("./src/reddit/helpers/name/index.ts");
			const {
				fbt: he
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ye = 36;
			class ke extends i.a.Component {
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
						categoryItemHeight: r = ye,
						categoryListContainerClassName: n,
						children: s,
						childrenOffset: a = 0,
						currentCategoryName: o,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: u
					} = this.state, m = !u && d && r * d, p = a + (e ? r * e.length : 0), g = Object(c.a)(ue.a.categoryList, u && ue.a.expanded), h = e => !(!o || o !== Object(ge.i)(e)), y = i.a.createElement("ul", {
						className: g,
						style: {
							height: m || p
						}
					}, s, e && e.map((e, n) => {
						const s = a + n * r;
						return e.name === b.k ? null : i.a.createElement(be, {
							category: e,
							className: t,
							isActive: h(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: m && s >= m ? -1 : 0
						}, e.name === b.k ? b.i : e.displayText || e.name)
					}));
					return i.a.createElement("div", {
						className: Object(c.a)(ue.a.categoryListContainer, n)
					}, y)
				}
				render() {
					const {
						buttonClassName: e,
						categories: t,
						className: r,
						header: n,
						headerClassName: s,
						initialNumberOfCategories: a
					} = this.props, o = t && a && t.length > a, d = Object(c.a)(r, ue.a.container);
					return i.a.createElement(pe.a, {
						className: d,
						contentOnly: !0
					}, i.a.createElement("div", {
						className: Object(c.a)(ue.a.header, s)
					}, i.a.createElement("h2", null, n || he._("Categories", null, {
						hk: "46zLMb"
					}))), this.renderCategoryList(), o && i.a.createElement(J.r, {
						className: Object(c.a)(ue.a.button, e),
						onClick: this.toggleExpanded
					}, o && !this.state.isExpanded ? he._("Show More", null, {
						hk: "1pCiqD"
					}) : he._("Show Less", null, {
						hk: "2qT4h7"
					})))
				}
			}
			var fe = ke,
				xe = r("./src/lib/lessComponent.tsx"),
				Ce = r("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				Ee = r.n(Ce);
			const {
				fbt: Se
			} = r("./node_modules/fbt/lib/FbtPublic.js"), _e = xe.a.a("Link", Ee.a), ve = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return i.a.createElement(_e, {
					href: `/subreddits/${t}-1`,
					key: e
				}, e)
			};
			var Oe = e => i.a.createElement(pe.a, {
					className: Ee.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, i.a.createElement("div", {
					className: Ee.a.Title
				}, Se._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), i.a.createElement("div", {
					className: Ee.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(ve))),
				Ne = r("./src/reddit/components/SidebarContainer/index.tsx"),
				je = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				Te = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				we = r("./node_modules/lodash/first.js"),
				Le = r.n(we),
				Pe = r("./src/config.ts"),
				Ie = r("./src/reddit/controls/Chip/index.tsx"),
				Be = r("./src/reddit/hooks/useTracking.ts");
			const De = e => {
					const t = !(!e.rankings || !e.rankings.length),
						r = !t && U.a.communityBannerPlaceholder,
						n = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						s = e.categoryName === b.k && b.h.path ? b.h.path : b.f;
					return i.a.createElement("div", {
						className: Object(c.a)(e.className, U.a.communityBanner, r),
						style: n
					}, t && i.a.createElement("h2", {
						className: U.a.communityBannerText
					}, i.a.createElement(W.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || b.d),
						to: s
					}, e.categoryName ? ((e, t) => e === b.k ? v.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : v.fbt._("Top {categoryName} Communities", [v.fbt._param("categoryName", i.a.createElement("span", {
						className: U.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : v.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				Fe = e => {
					const {
						category: t
					} = e, {
						gradients: r
					} = t, n = !!(!e.rankings || !e.rankings.length) && U.a.communityBannerPlaceholder, s = r && Array.isArray(r) && 2 === r.length ? {
						background: `linear-gradient(246.35deg, ${r[0]} 0%, ${r[1]} 100%)`
					} : void 0, a = t.path ? t.path : b.f, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return i.a.createElement("div", {
						className: Object(c.a)(e.className, U.a.taglineBanner, n)
					}, i.a.createElement("div", {
						className: U.a.taglineBannerBackground,
						style: s
					}, i.a.createElement(W.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || b.d),
						to: a
					}, i.a.createElement("h2", {
						className: U.a.taglineBannerText
					}, i.a.createElement("img", {
						className: U.a.taglineBannerImage,
						src: `${Pe.a.assetPath}/img/discovery/${o}`
					}), t.tagline ? (e => i.a.createElement("span", {
						className: U.a.categoryName
					}, v.fbt._("{tagline}", [v.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : v.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				Re = e => i.a.createElement("ol", null, e.rankings && e.rankings.map((t, r) => {
					const n = e.subreddits[t.id];
					return i.a.createElement(X, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || b.d, n.name),
						rank: r,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: n,
						isOnLeaderboardPage: e.isOnLeaderboardPage,
						isOnFrontpage: e.isOnFrontpage
					})
				}), !e.rankings.length && Me),
				Me = i.a.createElement(i.a.Fragment, null, I()(5, e => i.a.createElement(Y.a, {
					key: e
				}))),
				We = e => {
					const t = Object(o.e)(q.a),
						r = e.isSecondaryButton || t ? J.q : J.n,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						s = e.isSecondaryButton ? e.categoryDisplayText ? v.fbt._("See All {categoryName}", [v.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? v.fbt._("See All {categoryName}", [v.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : v.fbt._("See All", null, {
							hk: "2OZax8"
						}) : v.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return i.a.createElement("div", {
						className: U.a.footer
					}, i.a.createElement(r, {
						className: U.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || b.d),
						to: e.to || "",
						style: n,
						rplStyle: t
					}, s))
				};

			function Ae(e, t) {
				return t || `${b.f}${Object(ge.i)(e)}/`
			}
			const Ge = e => {
				return i.a.createElement("div", {
					className: U.a.categoryPicker
				}, e.categories && e.categories.map((t, r) => e.activeCategoryName === t.name ? null : t.name !== b.k && i.a.createElement("span", {
					className: U.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, r) => e.onSendEventClick("bottom_leaderboards", t || b.d, void 0, r))(t.name, r + 1)
				}, i.a.createElement(Ie.a, {
					className: e.hasTagline ? U.a.taglineChip : U.a.chip,
					key: t.name,
					to: Ae(t.name, t.path),
					wide: t.name === b.k
				}, t.name ? t.name === b.k ? b.i : t.displayText || t.name : v.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			var He = e => {
					const {
						subreddits: t,
						rankings: r,
						categoryName: n,
						categoryDisplayText: s,
						category: o,
						categories: d
					} = e, c = Object(Be.a)();
					Object(a.useEffect)(() => {
						c(((e, t) => r => ({
							...k.o(r),
							action: "view",
							noun: "leaderboard_right_rail",
							source: "leaderboard_right_rail",
							subreddit: {
								categoryName: Object(y.d)(e),
								name: t && t.toLowerCase()
							}
						}))(n || b.d))
					}, []);
					const l = Le()(r),
						u = t && l && t[l.id],
						m = `${Pe.a.assetPath}/img/leaderboard/banner-background.png`,
						p = u ? u.bannerBackgroundImage || m : void 0,
						g = e.to || n && Ae(n, o.path),
						h = o && o.tagline,
						f = o && o.gradients && Array.isArray(o.gradients) && 2 === o.gradients.length ? o.gradients[1] : void 0;
					return i.a.createElement(pe.a, {
						className: e.className,
						contentOnly: !0
					}, h && i.a.createElement(Fe, {
						category: o,
						onSendEventClick: e.onSendEventClick,
						rankings: r
					}), !h && i.a.createElement(De, {
						bannerBackgroundImage: p,
						categoryName: n,
						categoryDisplayText: s,
						onSendEventClick: e.onSendEventClick,
						rankings: r,
						shouldDisplayBannerImg: e.shouldDisplayBannerImg
					}), i.a.createElement(Re, {
						categoryName: n,
						hasTagline: !!h,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: r,
						shouldDisplayDelta: !1,
						subreddits: t,
						isOnLeaderboardPage: e.isOnLeaderboardPage,
						isOnFrontpage: e.isOnFrontpage
					}), i.a.createElement(We, {
						categoryName: n,
						categoryDisplayText: s,
						isSecondaryButton: e.isSecondaryButton,
						linkColor: f,
						onSendEventClick: e.onSendEventClick,
						to: g
					}), d && i.a.createElement(Ge, {
						activeCategoryName: n,
						categories: d,
						hasTagline: !!h,
						onSendEventClick: e.onSendEventClick
					}))
				},
				ze = r("./src/reddit/contexts/ApiContext.tsx"),
				Qe = r("./src/reddit/endpoints/subreddit/local.ts"),
				Je = r("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				Ke = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");

			function qe() {
				return (qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ve = Object(d.c)({
					isOnLeaderboardPage: e => !!Object(ee.i)(e),
					isOnFrontpage: e => !!Object(ee.g)(e)
				}),
				Ue = Object(o.b)(Ve, e => ({
					updateSubredditModels: t => e(Object(M.a)({
						subreddits: t
					}))
				})),
				Ze = async (e, t) => {
					const r = await Object(Je.a)(e, t);
					if (r && r.ok) {
						const e = r.body,
							t = e && e.data && e.data.subredditLeaderboard;
						return Object(Ke.c)(t)
					}
				};
			class Xe extends i.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, r, n) => {
						this.props.sendEvent(E(e, t, r, n)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, r, n)
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
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, r = e && e.id;
					if (r === b.j) {
						const e = await Object(Qe.b)(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: r,
							subreddits: n
						} = e;
						return this.props.updateSubredditModels(n), void this.setState(e => ({
							...e,
							[b.k]: {
								rankings: r,
								subreddits: n
							}
						}))
					}(r || r === b.e) && Ze(this.props.gqlContext(), {
						categoryId: r,
						filter: $.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							r = e && e.subreddits;
						r && this.props.updateSubredditModels(r);
						const n = this.props.category && this.props.category.name || b.b;
						t && r && this.setState(e => ({
							...e,
							[n]: {
								rankings: t,
								subreddits: r
							}
						}))
					}).catch(e => console.error("Error >>>", e))
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, r = e && e.displayText, n = t || b.b, s = this.state[n], a = s ? s.rankings : [], o = s ? s.subreddits : {}, d = a && a[0] && a[0].id, c = o && o[d], l = !(c && c.isNSFW) || this.props.isOver18;
					return i.a.createElement(He, qe({
						categoryName: t,
						categoryDisplayText: r,
						onSendEventClick: this.sendEventClick,
						rankings: a,
						shouldDisplayBannerImg: l,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: o
					}, this.props))
				}
			}
			var Ye = Ue(Object(ze.b)(Object(u.c)(Xe)));
			const $e = e => {
					const t = e.categoryName && Object(ge.i)(e.categoryName);
					return i.a.createElement("div", {
						className: N.a.SidebarLeft
					}, i.a.createElement(Ne.a, null, i.a.createElement(fe, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				et = e => {
					const t = e.widgetCategories[0],
						r = e.widgetCategories[1];
					return i.a.createElement("div", {
						className: N.a.SidebarRight
					}, i.a.createElement(Ne.a, null, i.a.createElement(Ye, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(je.a, null), i.a.createElement(Te.a, null, i.a.createElement(Ye, {
						category: r,
						className: N.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(Oe, null))))
				};
			var tt = r("./src/reddit/selectors/category.ts"),
				rt = r("./src/reddit/selectors/moderatorPermissions.ts");
			const nt = Object(p.v)(),
				st = (e, t) => {
					let {
						match: r
					} = t;
					return Object(g.b)(r.params.categoryName || "")
				},
				at = Object(m.kg)(b.g),
				it = Object(d.c)({
					categories: e => Object(tt.b)(e, {
						categoriesOrder: at
					}),
					categoryId: (e, t) => {
						const r = st(0, t);
						return r === b.k ? b.j : r ? Object(tt.f)(e, {
							categoryName: r
						}) : b.b
					},
					categoryName: st,
					isMod: rt.k,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				ot = Object(o.b)(it),
				dt = {
					id: b.b,
					name: b.c,
					path: b.f,
					displayText: b.a
				},
				ct = {
					customIcon: i.a.createElement(S.a, null),
					id: b.m,
					name: b.n,
					displayText: b.l
				};
			class lt extends i.a.Component {
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
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(f(e)), this.sendFeaturedCategoryEventClick = (e, t, r) => this.props.sendEvent(x(e, t, r)), this.state = {
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
						isMod: r,
						shouldShowLocalRecommendations: n
					} = this.props, s = [dt, ...n ? [b.h] : [], ...this.props.categories];
					r && s.unshift(ct);
					const a = Object(g.a)(b.f, s),
						o = r && this.props.categoryName === b.n,
						d = this.props.categoryId ? this.props.categoryName : o ? b.n : void 0,
						u = this.props.categoryId ? this.props.categoryId : o ? b.m : b.b,
						m = (null === (e = a.find(e => e.id === u)) || void 0 === e ? void 0 : e.displayText) || "";
					return i.a.createElement(l.a, null, i.a.createElement(_.a, {
						className: Object(c.a)(t, N.a.mainContent),
						content: i.a.createElement(ce, {
							categoryId: u,
							categoryName: d,
							categoryDisplayText: m
						}),
						disableFullscreen: !0,
						navBar: i.a.createElement(j, null),
						sidebars: [i.a.createElement($e, {
							key: "left",
							categories: a,
							categoryName: d || b.c,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), i.a.createElement(et, {
							key: "right",
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = nt(ot(Object(u.c)(lt)))
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/index.ts"),
				i = r("./src/reddit/selectors/experiments/utils.ts"),
				o = r("./src/reddit/selectors/meta.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(o.h)(e) && Object(a.f)(e),
					experimentName: n.oc
				}), i.a),
				l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(a.f)(e),
					experimentName: n.nc
				}), i.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/subredditLeaderboard.ts"),
				s = r("./src/reddit/selectors/category.ts");
			const a = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				o = (e, t) => t === n.n ? n.m : t === n.k ? n.j : e || n.b,
				d = (e, t) => {
					const r = e.subreddits.rankings,
						n = t && Object(s.e)(e, {
							categoryName: t
						}),
						a = r[o(n && n.id || null, t)];
					return !(!a || !a.length)
				}
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"1ea6a2fd1417"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"fe5a2ea90910"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.fe88abe138b300688312.js.map