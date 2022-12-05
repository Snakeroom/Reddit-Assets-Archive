// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.a9e16a76cf3b60491c3d.js
// Retrieved at 12/5/2022, 10:00:04 AM by Reddit Dataminer v1.0.0
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
				return f
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
				p = r("./src/reddit/selectors/category.ts"),
				b = r("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: s.a
				}
			});
			const g = Object(a.a)(b.c),
				h = Object(a.a)(b.b),
				y = Object(a.a)(b.a),
				f = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						a = Object(p.h)(s),
						m = Object(p.g)(s);
					if (a || m) return;
					e(g());
					const b = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: o.ob.GET
					}))(n());
					if (b.ok) {
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
									displayText: Object(u.ug)(e.category_name)
								};
								r.push(s.id), t[s.id] = s
							}), {
								categories: t,
								categoryIds: r
							}
						})(b.body);
						e(h({
							categories: t,
							categoryIds: r
						}))
					} else e(y(b.error))
				}, k = (Object(a.a)(b.g), Object(a.a)(b.f), Object(a.a)(b.e), Object(a.a)(b.d)), x = e => async (t, r) => {
					const n = Object(p.j)(r(), {
						id: e
					});
					t(k({
						categoryId: e,
						rank: n + 1
					})), Object(m.rb)(Object(p.d)(r()))
				}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "checkIsModCategory", (function() {
				return h
			})), r.d(t, "subredditLeaderboardPageRequested", (function() {
				return y
			})), r.d(t, "subredditLeaderboardPageDataRequested", (function() {
				return f
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
				p = r("./src/reddit/selectors/category.ts"),
				b = r("./src/reddit/selectors/subredditLeaderboard.ts"),
				g = r("./src/reddit/selectors/user.ts");
			const h = (e, t) => t && e === l.q,
				y = e => async (t, r) => {
					t(Object(a.k)({
						actionSource: a.a.SubredditLeaderboard,
						redirectUrl: c.c[c.b.SubredditLeaderboard]
					})), t(i.m({
						title: Object(n.r)()
					}));
					const s = e.params && e.params.categoryName,
						o = s && Object(u.b)(s);
					await t(f(o))
				}, f = e => async (t, r) => {
					await t(Object(s.a)());
					const n = r(),
						a = Object(g.S)(n);
					if (Object(b.a)(n, e)) return;
					const i = e && Object(p.e)(n, {
							categoryName: e
						}),
						c = e === l.m ? l.l : i && i.id || l.f,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(c, h(e, a)),
						y = Object(b.d)(c, e);
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
				p = Object(n.a)(s.b),
				b = Object(n.a)(s.c),
				g = (e, t) => async (r, n, s) => {
					let {
						gqlContext: g
					} = s;
					r(c());
					const h = t === a.l ? async function() {
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
						pageInfo: f,
						rankings: k,
						subreddits: x
					} = y;
					r(m({
						subreddits: x
					})), r(p({
						categoryRankingsKey: t,
						rankings: k
					})), r(b({
						categoryRankingsKey: t,
						pageInfo: f
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
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/timeAgo/index.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/constants/elementIds.ts"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/localStorage/index.ts"),
				m = r("./src/reddit/selectors/telemetry.ts");
			var p = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				b = r("./src/config.ts"),
				g = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/pages/Recap/Components/BananaPill/index.m.less"),
				f = r.n(y);
			var k = e => {
					let {
						ref: t,
						onMouseEnter: r,
						onSetTimer: i,
						onBananaPillClick: o,
						setAltTextWidth: d,
						setTimerByObserver: c
					} = e;
					const l = Object(n.useCallback)(e => {
							if (e) {
								const t = e.clientWidth;
								d(t + 32)
							}
						}, []),
						u = Object(a.e)(h.R),
						m = encodeURIComponent(b.a.redditUrl + "/r/recap"),
						y = b.a.accountManagerOrigin,
						k = u ? "/r/recap" : `${y}/login/?dest=${m}`;
					return s.a.createElement("a", {
						ref: t,
						href: k,
						className: f.a.bananaPill,
						onMouseEnter: r,
						onMouseLeave: i,
						onClick: o
					}, s.a.createElement("img", {
						className: f.a.icon,
						src: `${b.a.assetPath}/img/recap/banana_pill.png`,
						alt: g.fbt._("banana", null, {
							hk: "1fs9mn"
						})
					}), s.a.createElement("span", {
						className: f.a.text
					}, "+1"), g.fbt._("{=Back to Top}", [g.fbt._param("=Back to Top", s.a.createElement("span", {
						ref: l,
						className: f.a.altText
					}, g.fbt._("Back to Top", null, {
						hk: "4BTAZ0"
					})))], {
						hk: "4Foziy"
					}), s.a.createElement(p.a, {
						onChange: c,
						rootMargin: "0px 0px 0px 0px",
						threshold: .5
					}, s.a.createElement("div", null)))
				},
				x = r("./src/reddit/constants/experiments.ts"),
				E = r("./src/reddit/helpers/chooseVariant/index.ts");
			const C = e => {
				return Object(E.c)(e, {
					experimentEligibilitySelector: E.a,
					experimentName: x.qf
				}) === x.Ld
			};
			var S = r("./src/reddit/selectors/experiments/shredditParity.ts"),
				_ = r("./src/reddit/selectors/recapGame.ts"),
				v = r("./src/reddit/components/BackToTop/index.m.less"),
				O = r.n(v);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), T = e => {
				if (e) {
					const e = document.getElementById(c.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: r,
					style: c
				} = e;
				const p = Object(d.b)(),
					b = Object(n.useRef)(null),
					[g, y] = Object(n.useState)(!1),
					[f, x] = Object(n.useState)(),
					[E, v] = Object(n.useState)(),
					[w, P] = Object(n.useState)(0),
					L = Object(a.e)(h.l),
					I = Object(a.e)(C),
					B = Object(a.e)(S.a),
					D = Object(a.e)(_.a),
					F = L ? L.id : "anonymous",
					R = "on" === D.recapGameState,
					M = () => {
						g && v(setTimeout(() => {
							b.current && (b.current.classList.add(O.a.transform), b.current.style.width = `${w}px`)
						}, 4750)), g && x(setTimeout(() => {
							y(!1), Object(u.Ub)(F, !1)
						}, 5e3))
					};
				return Object(n.useEffect)(() => {
					R || setTimeout(() => {
						const e = Object(u.O)(F);
						e ? Object(o.e)(e.lastSeenTime) >= 24 && e.dropSkip === u.a.NONE ? y(!0) : Date.now() >= new Date(2022, 10, 16).getTime() && e.dropSkip !== u.a.THIRD && y(!0) : y(!0)
					})
				}, [F, R]), s.a.createElement("div", {
					className: Object(i.a)(t, O.a.container),
					style: c
				}, g && I && !r && !R ? s.a.createElement(k, {
					ref: b,
					onBananaPillClick: () => {
						f && clearTimeout(f), E && clearTimeout(E), y(!1), Object(u.Ub)(F, !0), p((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...m.o(e)
						}))())
					},
					onMouseEnter: () => {
						f && clearTimeout(f), E && clearTimeout(E), b.current && (b.current.classList.remove(O.a.transform), b.current.style.width = "65px")
					},
					onSetTimer: M,
					setAltTextWidth: P,
					setTimerByObserver: e => {
						e.isIntersecting && (M(), p((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...m.o(e)
						}))()))
					}
				}) : s.a.createElement(l.a, N({
					className: O.a.button,
					onClick: () => T(r)
				}, B && {
					priority: l.c.Secondary,
					rplStyle: !0
				}), j._("Back to Top", null, {
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
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/helpers/trackers/navigation.ts"),
				g = r("./src/reddit/selectors/experiments/countrySites.ts"),
				h = r("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				y = r("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = r("./src/reddit/selectors/meta.ts"),
				k = r("./src/redditGQL/types.ts"),
				x = r("./src/reddit/components/SidebarFooter/index.m.less"),
				E = r.n(x);
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js"), S = d.a.a("Link", E.a), _ = Object(i.c)({
				countryCode: f.b,
				d2xPdpSideRailRecsVariant: h.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: h.b,
				isNavbarLikeMwebEnabled: y.a
			}), v = Object(a.b)(_), O = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), N = e => {
				let {
					countryCode: t,
					reredditContent: r
				} = e;
				return s.a.createElement("div", {
					className: E.a.GreyRereddit
				}, r, !!m.c[t] && s.a.createElement("div", {
					className: E.a.LinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), t === k.j.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), t === k.j.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: E.a.LinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), s.a.createElement("div", {
					className: E.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(v(Object(c.c)(e => {
				const t = Object(a.f)().getState(),
					r = Object(g.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.bd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.bd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.bd.LargeImagePreview ? e.reredditButtons : [];
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
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return s.a.createElement(l.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && s.a.createElement("div", {
					className: E.a.LinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === k.j.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === k.j.De && s.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), s.a.createElement("div", {
					className: E.a.LinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(S, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: E.a.LinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, n("en"), n("fr"), n("it")), s.a.createElement("div", {
					className: E.a.Column
				}, n("de"), n("es"), n("pt"))), s.a.createElement("div", {
					className: E.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
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
				p = r("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = r.n(p),
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
				f = u.f + 8,
				k = f + 152 + 16,
				x = k + y + 8,
				E = g.a.div("Container", b.a),
				C = g.a.wrapped(e => {
					let {
						className: t,
						isOverlay: r,
						...n
					} = e;
					return o.a.createElement(c.a, h({
						className: t,
						isOverlay: r,
						style: {
							top: `calc(100vh - ${r?f:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
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
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && a && !s,
							[b.a.StickyStylesFakeOverlay]: !i && !!s
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
					return o.a.createElement(E, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(S, {
						isFakeOverlay: r,
						isSticky: u,
						shouldStickToBottom: m
					}, t, n, d, !a && o.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(C, {
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
				p = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = r("./src/reddit/icons/svgs/Close/index.tsx"),
				h = r("./src/reddit/selectors/moderatorPermissions.ts"),
				y = r("./src/reddit/selectors/structuredStyles.ts"),
				f = r("./src/reddit/selectors/userPrefs.ts"),
				k = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = r.n(k);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js"), C = u.a.div("BladeContainer", x.a), S = u.a.wrapped(g.a, "CloseIcon", x.a), _ = u.a.div("LoadingTitleContainer", x.a), v = u.a.div("LoadingNavContainer", x.a), O = u.a.div("ShortLoadingNav", x.a), N = u.a.wrapped(b.a, "ThemedChevron", x.a), j = e => {
				let {
					...t
				} = e;
				return i.a.createElement(C, null, i.a.createElement(S, null), i.a.createElement(p.k, null, i.a.createElement(p.p, null, E._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(p.o, null, i.a.createElement(_, null, i.a.createElement("div", {
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
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "j", (function() {
				return E
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
				p = n.a.h2("FormGroupTitle", a.a),
				b = n.a.div("FormElement", a.a),
				g = n.a.div("FormGroupDescription", a.a),
				h = n.a.div("FormItem", a.a),
				y = n.a.h3("FormElementTitle", a.a),
				f = n.a.div("FormElementDescription", a.a),
				k = n.a.div("FormElementError", a.a),
				x = n.a.div("FormElementSubGroup", a.a),
				E = n.a.li("FormListItem", a.a)
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
			class p extends s.a.Component {
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
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: g,
							isShredditParityEnabled: h,
							...y
						} = this.props, f = this.state.isHovered, k = Object(d.a)({
							type: t.type,
							key: f ? "unsubscribe" : "subscribed"
						}), x = y.shouldReverseColor ? o.c.Secondary : o.c.Primary;
						return s.a.createElement(o.t, u({
							className: e,
							priority: g || x,
							rplStyle: h,
							text: k,
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
							getEventFactory: p,
							onSubscriptionsRequested: b,
							priority: g,
							isShredditParityEnabled: h,
							...y
						} = this.props, f = Object(d.a)({
							type: t.type,
							key: "subscribe"
						}), k = y.shouldReverseColor ? o.c.Secondary : o.c.Primary;
						return s.a.createElement(o.t, u({
							className: e,
							priority: g || k,
							size: o.d.XSP,
							rplStyle: h,
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
						doNotHideOtherSubscribeButtons: r
					} = this.props;
					return t ? this.state.hasJustSubscribed || r ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(a.c)(p))
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
				p = r("./src/reddit/helpers/trackers/widgets.ts"),
				b = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = r("./src/reddit/selectors/experiments/topPosts.ts"),
				h = r("./src/reddit/selectors/structuredStyles.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/models/Theme/index.ts"),
				k = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = x(e);
					return Object(f.f)(t)
				},
				S = e => {
					const t = E(e);
					return Object(f.f)(t)
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
						s = Object(y.eb)(e);
					return n || s
				},
				nigtmode: y.eb,
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
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = S(this.props), e
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
						titleClassName: p,
						truncateThreshold: b
					} = this.props, g = r ? v.a.widgetContentOnly : v.a.widgetContent, h = !n && this.props.styles, y = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
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
							...f,
							...this.props.headerStyles
						},
						onClick: l
					}, s.a.createElement("div", {
						className: Object(o.a)(v.a.widgetTitle, p)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), a), s.a.createElement("div", {
						className: Object(o.a)(g, {
							[v.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
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
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "p", (function() {
				return c
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "s", (function() {
				return E
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "i", (function() {
				return _
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
				p = "near-you",
				b = n.fbt._("Near You", null, {
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
					name: p,
					path: `${g}${p}/`
				},
				f = [{
					name: "Sports",
					displayText: n.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${g}sports/`
				}, {
					name: "News",
					displayText: n.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${g}news/`
				}, {
					name: "Gaming",
					displayText: n.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${g}gaming/`
				}, {
					name: "Aww",
					displayText: n.fbt._("Aww", null, {
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
					tagline: n.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				x = {
					id: m,
					name: p,
					path: `${g}${p}/`,
					image: "magnifying-glass-snoo",
					tagline: n.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				E = [{
					name: "Sports",
					displayText: n.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${g}sports/`,
					image: "basketball-snoo",
					tagline: n.fbt._("Sports communities are the real MVP", null, {
						hk: "1zKdF8"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					displayText: n.fbt._("News", null, {
						hk: "17cLQ8"
					}),
					id: "c1009",
					path: `${g}news/`,
					image: "newsie-snoo",
					tagline: n.fbt._("News communities to keep you informed", null, {
						hk: "4pGDSm"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					displayText: n.fbt._("Gaming", null, {
						hk: "2aDSZz"
					}),
					id: "c1019",
					path: `${g}gaming/`,
					image: "esports-snoo",
					tagline: n.fbt._("Gaming communities taking it to the next level", null, {
						hk: "2zM7JE"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					displayText: n.fbt._("Aww", null, {
						hk: "3ecS9m"
					}),
					id: "c1000",
					path: `${g}aww/`,
					image: "cat-snoo",
					tagline: n.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				C = [{
					name: "E3 Gaming",
					displayText: n.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${g}e3/`
				}],
				S = [{
					name: "Beauty",
					displayText: n.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${g}beauty/`,
					image: "makeup-snoo",
					tagline: n.fbt._("Beauty communities make us all look good", null, {
						hk: "2z1nzQ"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					displayText: n.fbt._("Fashion", null, {
						hk: "22tnM2"
					}),
					id: "c1002",
					path: `${g}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: n.fbt._("Fashion communities are always in style", null, {
						hk: "4pNEnH"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					displayText: n.fbt._("Food", null, {
						hk: "2Bq28v"
					}),
					id: "c1003",
					path: `${g}food/`,
					image: "cookbooks-snoo",
					tagline: n.fbt._("Food communities to make you go mmmm", null, {
						hk: "3OGpOa"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					displayText: n.fbt._("Fitness", null, {
						hk: "4ruQRK"
					}),
					id: "c1006",
					path: `${g}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: n.fbt._("Fitness communities that know how to work it", null, {
						hk: "3Ow48z"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					displayText: n.fbt._("Outdoors", null, {
						hk: "1Can0U"
					}),
					id: "c1010",
					path: `${g}outdoors/`,
					image: "telescope-snoo",
					tagline: n.fbt._("Outdoor communities — they’re really out there", null, {
						hk: "1sfigF"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					displayText: n.fbt._("Relationships", null, {
						hk: "QnBO3"
					}),
					id: "c1013",
					path: `${g}relationships/`,
					image: "childrensbooks-snoo",
					tagline: n.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				_ = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
					subreddit: i.kb(r),
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
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = {
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
					maxRating: n.R
				}
		},
		"./src/reddit/pages/Recap/Components/BananaPill/index.m.less": function(e, t, r) {
			e.exports = {
				bananaPill: "luTPauejzUjrGQIJmBJMt",
				transform: "T2syrzYJQrK2MbUsJ1ZIs",
				icon: "_2DvitLaA7xyv9xsNJWP3t4",
				text: "BE8_V9hkF52QnKXfBAL2e",
				altText: "_2RhoXA1ZtjfGQFhaJvg2Hu",
				bouncing: "_1bv5w7rQU4LQw-ZO3MYGBc"
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
				p = r("./src/reddit/constants/subredditLeaderboard.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				h = r("./src/reddit/helpers/trackers/screenview.ts"),
				y = r("./src/reddit/constants/categories.tsx"),
				f = r("./src/reddit/selectors/telemetry.ts");
			const k = e => t => ({
					...f.o(t),
					action: "click",
					noun: Object(y.d)(e),
					source: "leaderboard_category"
				}),
				x = (e, t, r) => n => ({
					...f.o(n),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(y.d)(t),
						name: r && r.toLowerCase()
					}
				}),
				E = (e, t) => r => ({
					...f.o(r),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(y.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				C = (e, t, r, n) => s => ({
					...f.o(s),
					action: "click",
					actionInfo: {
						...f.d(s),
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
				P = r.n(w),
				L = r("./node_modules/lodash/times.js"),
				I = r.n(L),
				B = r("./node_modules/lodash/upperFirst.js"),
				D = r.n(B),
				F = r("./node_modules/react-router/esm/react-router.js"),
				R = r("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				M = r("./src/reddit/actions/subreddit/topSubreddits.ts"),
				A = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				W = r("./src/lib/prettyPrintNumber/index.ts"),
				G = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				H = r("./src/reddit/components/SubredditIcon/index.tsx"),
				z = r("./src/reddit/components/SubscribeButton/Inline.tsx"),
				Q = r("./src/reddit/constants/posts.ts"),
				J = r("./src/reddit/controls/Button/index.tsx"),
				q = r("./src/reddit/icons/fonts/index.tsx"),
				U = r("./src/reddit/selectors/experiments/shredditParity.ts"),
				K = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				V = r.n(K);
			const Z = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(H.b, {
					className: V.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), i.a.createElement("span", {
					className: Object(c.a)(V.a.subredditDetailsContainer, {
						[V.a.handleOverflow]: e.shouldShowJoinButton
					})
				}, e.large ? i.a.createElement(G.a, {
					subredditName: e.subreddit.name
				}, i.a.createElement("span", {
					className: V.a.regularText
				}, e.subreddit.displayText)) : i.a.createElement("span", {
					className: V.a.regularText
				}, e.subreddit.displayText), null === e.rank && i.a.createElement("span", {
					className: V.a.smallText
				}, v.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				X = e => {
					const t = Object(o.e)(U.a),
						r = Object(c.a)(V.a.subredditRankItem, e.large && V.a.large, {
							[V.a.handleOverflow]: e.isOnFrontpage
						}),
						n = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(W.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						a = e.delta ? n ? "#46D160" : "#EA0027" : "transparent",
						d = e.isOnLeaderboardPage && e.large;
					return i.a.createElement("li", {
						className: Object(c.a)(V.a.listItem, {
							[V.a.handleOverflow]: e.isOnFrontpage
						}),
						key: `${e.subreddit.displayText}-${e.large}`
					}, i.a.createElement(A.a, {
						className: r,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, i.a.createElement("div", {
						className: Object(c.a)(V.a.subredditRankItemColumn, {
							[V.a.handleOverflow]: e.isOnFrontpage
						})
					}, !e.hasTagline && i.a.createElement("span", {
						className: V.a.rankText
					}, s), !e.hasTagline && i.a.createElement(q.a, {
						className: V.a.arrow,
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
						className: V.a.regularText
					}, e.delta ? Object(W.b)(Math.abs(e.delta)) : 0)), (d || e.isOnFrontpage) && i.a.createElement("div", {
						className: Object(c.a)(e.large ? V.a.LeaderboardSubscribeButton : V.a.WidgetSubscribeButton, {
							[V.a.noDelta]: !e.shouldDisplayDelta
						})
					}, i.a.createElement(z.a, {
						getEventFactory: t => e.large ? ((e, t) => r => ({
							...f.o(r),
							action: "click",
							source: "leaderboard_subreddit",
							noun: t ? "unsubscribe" : "subscribe",
							subreddit: {
								name: e && e.toLowerCase()
							}
						}))(e.subreddit.name, t) : ((e, t) => r => ({
							...f.o(r),
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
					isMod: ne.S,
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
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(E(e, this.props.categoryName || p.e)), this.renderSubredditRankItemPlaceholders = () => i.a.createElement(i.a.Fragment, null, I()(5, e => i.a.createElement(Y.a, {
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
					} = this.props, s = P()(n), a = s && s.cursor, i = Object(R.checkIsModCategory)(t, r);
					return {
						after: a,
						categoryId: e === p.c ? p.f : e,
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
					} = this.props, o = t || r, d = e === p.m, c = n && !d;
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
			const pe = e => {
				const {
					category: t,
					children: r,
					className: n,
					isActive: s,
					tabIndex: a
				} = e, o = Object(c.a)(ue.a.categoryLink, s && ue.a.active, n);
				return i.a.createElement("li", null, i.a.createElement(A.a, me({}, t.anchorProps, {
					className: o,
					"data-active": s,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: a,
					to: t.path || ""
				}), r, t.customIcon))
			};
			var be = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ge = r("./src/reddit/helpers/name/index.ts");
			const {
				fbt: he
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ye = 36;
			class fe extends i.a.Component {
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
					} = this.state, m = !u && d && r * d, b = a + (e ? r * e.length : 0), g = Object(c.a)(ue.a.categoryList, u && ue.a.expanded), h = e => !(!o || o !== Object(ge.i)(e)), y = i.a.createElement("ul", {
						className: g,
						style: {
							height: m || b
						}
					}, s, e && e.map((e, n) => {
						const s = a + n * r;
						return e.name === p.m ? null : i.a.createElement(pe, {
							category: e,
							className: t,
							isActive: h(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: m && s >= m ? -1 : 0
						}, e.name === p.m ? p.k : e.displayText || e.name)
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
					return i.a.createElement(be.a, {
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
			var ke = fe,
				xe = r("./src/lib/lessComponent.tsx"),
				Ee = r("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				Ce = r.n(Ee);
			const {
				fbt: Se
			} = r("./node_modules/fbt/lib/FbtPublic.js"), _e = xe.a.a("Link", Ce.a), ve = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return i.a.createElement(_e, {
					href: `/subreddits/${t}-1`,
					key: e
				}, e)
			};
			var Oe = e => i.a.createElement(be.a, {
					className: Ce.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, i.a.createElement("div", {
					className: Ce.a.Title
				}, Se._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), i.a.createElement("div", {
					className: Ce.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(ve))),
				Ne = r("./src/reddit/components/SidebarContainer/index.tsx"),
				je = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				Te = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				we = r("./node_modules/lodash/first.js"),
				Pe = r.n(we),
				Le = r("./src/config.ts"),
				Ie = r("./src/reddit/controls/Chip/index.tsx"),
				Be = r("./src/reddit/hooks/useTracking.ts");
			const De = e => {
					const t = !(!e.rankings || !e.rankings.length),
						r = !t && V.a.communityBannerPlaceholder,
						n = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						s = e.categoryName === p.m && p.j.path ? p.j.path : p.g;
					return i.a.createElement("div", {
						className: Object(c.a)(e.className, V.a.communityBanner, r),
						style: n
					}, t && i.a.createElement("h2", {
						className: V.a.communityBannerText
					}, i.a.createElement(A.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || p.e),
						to: s
					}, e.categoryName ? ((e, t) => e === p.m ? v.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : v.fbt._("Top {categoryName} Communities", [v.fbt._param("categoryName", i.a.createElement("span", {
						className: V.a.categoryName
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
					} = t, n = !!(!e.rankings || !e.rankings.length) && V.a.communityBannerPlaceholder, s = r && Array.isArray(r) && 2 === r.length ? {
						background: `linear-gradient(246.35deg, ${r[0]} 0%, ${r[1]} 100%)`
					} : void 0, a = t.path ? t.path : p.g, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return i.a.createElement("div", {
						className: Object(c.a)(e.className, V.a.taglineBanner, n)
					}, i.a.createElement("div", {
						className: V.a.taglineBannerBackground,
						style: s
					}, i.a.createElement(A.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || p.e),
						to: a
					}, i.a.createElement("h2", {
						className: V.a.taglineBannerText
					}, i.a.createElement("img", {
						className: V.a.taglineBannerImage,
						src: `${Le.a.assetPath}/img/discovery/${o}`
					}), t.tagline ? (e => i.a.createElement("span", {
						className: V.a.categoryName
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
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || p.e, n.name),
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
				Ae = e => {
					const t = Object(o.e)(U.a),
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
						className: V.a.footer
					}, i.a.createElement(r, {
						className: V.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || p.e),
						to: e.to || "",
						style: n,
						rplStyle: t
					}, s))
				};

			function We(e, t) {
				return t || `${p.g}${Object(ge.i)(e)}/`
			}
			const Ge = e => {
				return i.a.createElement("div", {
					className: V.a.categoryPicker
				}, e.categories && e.categories.map((t, r) => e.activeCategoryName === t.name ? null : t.name !== p.m && i.a.createElement("span", {
					className: V.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, r) => e.onSendEventClick("bottom_leaderboards", t || p.e, void 0, r))(t.name, r + 1)
				}, i.a.createElement(Ie.a, {
					className: e.hasTagline ? V.a.taglineChip : V.a.chip,
					key: t.name,
					to: We(t.name, t.path),
					wide: t.name === p.m
				}, t.name ? t.name === p.m ? p.k : t.displayText || t.name : v.fbt._("Top", null, {
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
							...f.o(r),
							action: "view",
							noun: "leaderboard_right_rail",
							source: "leaderboard_right_rail",
							subreddit: {
								categoryName: Object(y.d)(e),
								name: t && t.toLowerCase()
							}
						}))(n || p.e))
					}, []);
					const l = Pe()(r),
						u = t && l && t[l.id],
						m = `${Le.a.assetPath}/img/leaderboard/banner-background.png`,
						b = u ? u.bannerBackgroundImage || m : void 0,
						g = e.to || n && We(n, o.path),
						h = o && o.tagline,
						k = o && o.gradients && Array.isArray(o.gradients) && 2 === o.gradients.length ? o.gradients[1] : void 0;
					return i.a.createElement(be.a, {
						className: e.className,
						contentOnly: !0
					}, h && i.a.createElement(Fe, {
						category: o,
						onSendEventClick: e.onSendEventClick,
						rankings: r
					}), !h && i.a.createElement(De, {
						bannerBackgroundImage: b,
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
					}), i.a.createElement(Ae, {
						categoryName: n,
						categoryDisplayText: s,
						isSecondaryButton: e.isSecondaryButton,
						linkColor: k,
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
				qe = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ke = Object(d.c)({
					isOnLeaderboardPage: e => !!Object(ee.i)(e),
					isOnFrontpage: e => !!Object(ee.g)(e)
				}),
				Ve = Object(o.b)(Ke, e => ({
					updateSubredditModels: t => e(Object(M.a)({
						subreddits: t
					}))
				})),
				Ze = async (e, t) => {
					const r = await Object(Je.a)(e, t);
					if (r && r.ok) {
						const e = r.body,
							t = e && e.data && e.data.subredditLeaderboard;
						return Object(qe.c)(t)
					}
				};
			class Xe extends i.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, r, n) => {
						this.props.sendEvent(C(e, t, r, n)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, r, n)
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
					if (r === p.l) {
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
							[p.m]: {
								rankings: r,
								subreddits: n
							}
						}))
					}(r || r === p.f) && Ze(this.props.gqlContext(), {
						categoryId: r,
						filter: $.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							r = e && e.subreddits;
						r && this.props.updateSubredditModels(r);
						const n = this.props.category && this.props.category.name || p.c;
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
					} = this.props, t = e && e.name, r = e && e.displayText, n = t || p.c, s = this.state[n], a = s ? s.rankings : [], o = s ? s.subreddits : {}, d = a && a[0] && a[0].id, c = o && o[d], l = !(c && c.isNSFW) || this.props.isOver18;
					return i.a.createElement(He, Ue({
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
			var Ye = Ve(Object(ze.b)(Object(u.c)(Xe)));
			const $e = e => {
					const t = e.categoryName && Object(ge.i)(e.categoryName);
					return i.a.createElement("div", {
						className: N.a.SidebarLeft
					}, i.a.createElement(Ne.a, null, i.a.createElement(ke, {
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
			const nt = Object(b.v)(),
				st = (e, t) => {
					let {
						match: r
					} = t;
					return Object(g.b)(r.params.categoryName || "")
				},
				at = Object(m.tg)(p.i),
				it = Object(d.c)({
					categories: e => Object(tt.b)(e, {
						categoriesOrder: at
					}),
					categoryId: (e, t) => {
						const r = st(0, t);
						return r === p.m ? p.l : r ? Object(tt.f)(e, {
							categoryName: r
						}) : p.c
					},
					categoryName: st,
					isMod: rt.k,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				ot = Object(o.b)(it),
				dt = {
					id: p.c,
					name: p.d,
					path: p.g,
					displayText: p.b
				},
				ct = {
					customIcon: i.a.createElement(S.a, null),
					id: p.p,
					name: p.q,
					displayText: p.o
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
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(k(e)), this.sendFeaturedCategoryEventClick = (e, t, r) => this.props.sendEvent(x(e, t, r)), this.state = {
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
					} = this.props, s = [dt, ...n ? [p.j] : [], ...this.props.categories];
					r && s.unshift(ct);
					const a = Object(g.a)(p.g, s),
						o = r && this.props.categoryName === p.q,
						d = this.props.categoryId ? this.props.categoryName : o ? p.q : void 0,
						u = this.props.categoryId ? this.props.categoryId : o ? p.p : p.c,
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
							categoryName: d || p.d,
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
					experimentName: n.mc
				}), i.a),
				l = Object(d.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(a.f)(e),
					experimentName: n.lc
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
				o = (e, t) => t === n.q ? n.p : t === n.m ? n.l : e || n.c,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.a9e16a76cf3b60491c3d.js.map