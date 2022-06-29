// https://www.redditstatic.com/desktop2x/Geotagging.9ec5b3e75daf17832206.js
// Retrieved at 6/29/2022, 9:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, n) {
			"use strict";
			const s = (e, t, n = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let s, r, a = [];
				return function(...i) {
					return new Promise(o => {
						const c = n.leading && !r;
						clearTimeout(r), r = setTimeout(() => {
							r = null;
							const t = n.leading ? s : e.apply(this, i);
							for (o of a) o(t);
							a = []
						}, t), c ? (s = e.apply(this, i), o(s)) : a.push(o)
					})
				}
			};
			e.exports = s, e.exports.default = s
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/uuid/v4.js"),
				c = n.n(o),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/hooks/useMounted.ts"),
				m = n("./node_modules/p-debounce/index.js"),
				b = n.n(m),
				p = n("./src/lib/hooks/useOnClickOutside.ts"),
				h = n("./src/reddit/constants/keycodes.ts"),
				g = n("./src/lib/makeGqlRequest/index.ts"),
				f = n("./src/lib/sentry/index.ts"),
				x = n("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(s || (s = {}));
			const E = (e, t) => async n => {
				let s;
				try {
					s = await async function(e, t) {
						return Object(g.a)(e, {
							...x,
							variables: t
						})
					}(e(), {
						query: n,
						sessionId: t
					})
				} catch (r) {
					return f.c.captureException(r), []
				}
				return s.body.data.geoPlaceAutocomplete || []
			};
			var _ = n("./src/reddit/hooks/useGqlContext.ts"),
				y = n("./src/reddit/icons/svgs/Location/index.tsx"),
				S = n("./src/reddit/components/GeoForm/index.m.less"),
				k = n.n(S);

			function v(e) {
				const {
					value: t,
					setValue: n,
					setPlace: s,
					disabled: o,
					onFocus: c,
					sessionId: l,
					className: u
				} = e, m = Object(_.a)(), [p, g] = Object(a.useState)(!1), f = function(e, t, n) {
					const [s, r] = Object(a.useState)([]), i = Object(a.useMemo)(() => b()(n, 300), [n]);
					return Object(a.useEffect)(() => {
						e && t && i(e).then(e => {
							r(e)
						}).catch(() => r([]))
					}, [e]), s
				}(t, p, E(m, l)), {
					highlightValue: x,
					selectedIndex: S,
					onKeyDown: v,
					isClosed: w,
					setClosed: O
				} = function(e, t, n) {
					const [s, r] = Object(a.useState)(-1), [i, o] = Object(a.useState)(!!e.length), [c, d] = Object(a.useState)(void 0);
					return {
						highlightValue: c,
						selectedIndex: s,
						onKeyDown: a => {
							if (a.key === h.b.ArrowDown) {
								const t = Math.min(s + 1, e.length - 1);
								r(t), d(e[t])
							} else if (a.key === h.b.ArrowUp) {
								const t = Math.max(s - 1, -1);
								r(t), d(e[t])
							} else a.key === h.b.Enter && s > -1 ? (r(-1), t(e[s].name), n(e[s]), o(!0), a.preventDefault()) : a.key === h.b.Escape ? (r(-1), o(!0)) : d(void 0)
						},
						isClosed: i,
						setClosed: o
					}
				}(f, n, s), j = `location-input-${l}`;
				return i.a.createElement("div", {
					className: k.a.autocompleteInput
				}, i.a.createElement("label", {
					className: k.a.geoLabel,
					htmlFor: j
				}, i.a.createElement(y.a, {
					className: k.a.locationIcon
				})), i.a.createElement("input", {
					className: Object(d.a)(k.a.geoInput, u),
					name: j,
					disabled: o,
					onKeyDown: v,
					value: x && x.name || t,
					placeholder: r.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						n(e.currentTarget.value), s(void 0), O(!1)
					},
					onFocus: () => {
						g(!0), c()
					},
					onBlur: () => g(!1)
				}), f.length && !w ? i.a.createElement(C, {
					id: l,
					items: f.map(e => e.name),
					selectedIndex: S,
					selectValue: e => {
						n(f[e].name), s(f[e]), O(!0)
					},
					onClickOutside: () => O(!0)
				}) : null)
			}

			function C(e) {
				const {
					id: t,
					items: n,
					selectedIndex: s,
					selectValue: r,
					onClickOutside: a
				} = e;
				return Object(p.a)(`autocomplete-dropdown-${t}`, a), i.a.createElement("ul", {
					className: k.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, n.map((e, t) => i.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => r(t),
					className: Object(d.a)({
						[k.a.highlight]: t === s
					})
				}, e)))
			}
			const w = () => {};

			function O(e) {
				const {
					className: t,
					initialValue: n,
					initialPlace: s,
					disabled: o = !1,
					onFocus: m = w,
					onPlace: b = w,
					onValue: p = w,
					inputClassName: h
				} = e, g = Object(u.a)(), [f] = Object(a.useState)(() => c()()), [x, E] = Object(a.useState)(n || ""), [_, y] = Object(a.useState)(s);
				return g ? i.a.createElement("form", {
					className: Object(d.a)(k.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == s ? void 0 : s.id) !== (null == _ ? void 0 : _.id) && e.onSubmit({
							name: x,
							place: _,
							sessionId: f
						})
					}
				}, i.a.createElement(v, {
					className: h,
					value: x,
					sessionId: f,
					setValue: e => {
						E(e), p(e)
					},
					setPlace: e => {
						y(e), b(e)
					},
					disabled: o,
					onFocus: m
				}), _ && _.id !== (null == s ? void 0 : s.id) && i.a.createElement(l.o, {
					className: k.a.submitButton,
					type: "submit",
					disabled: o
				}, r.fbt._("Submit", null, {
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
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				o = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = n.n(o);
			const d = e => r.a.createElement("div", {
				className: Object(a.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(a.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(a.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(a.a)(c.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(a.a)(c.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("container", a.a)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/location.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				g = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				E = n("./src/reddit/selectors/meta.ts"),
				_ = n("./src/reddit/components/SidebarFooter/index.m.less"),
				y = n.n(_);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = c.a.a("Link", y.a), v = Object(i.c)({
				countryCode: E.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), C = Object(a.b)(v), w = Object(b.u)({
				isFrontpage: b.A,
				isCountrySitePage: b.y
			}), O = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: y.a.GreyRereddit
				}, n, r.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(k, {
					href: "https://www.reddit.com/coins"
				}, S._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(k, {
					href: "https://www.reddit.com/premium"
				}, S._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && r.a.createElement(r.a.Fragment, null, r.a.createElement(k, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement(k, {
					href: "https://www.redditinc.com/"
				}, S._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/careers"
				}, S._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/press"
				}, S._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/advertising"
				}, S._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(k, {
					href: "http://www.redditblog.com/"
				}, S._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(k, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, S._("Mod policy", null, {
					hk: "2gYc2T"
				})), r.a.createElement("div", {
					className: y.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = w(C(Object(d.c)(e => {
				const t = Object(a.f)().getState(),
					n = Object(g.a)(t, Object(o.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, S._("© {year} Reddit, Inc. All rights reserved.", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(k, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Ic.GreyRereddit ? e.reredditButtons : [];
					return r.a.createElement(O, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(k, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(k, {
					href: "https://www.reddit.com/coins"
				}, S._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(k, {
					href: "https://www.reddit.com/premium"
				}, S._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(k, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, S._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(k, {
					href: `https://www.reddit.com${Object(p.a)()}`
				}, S._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(k, {
					href: "https://www.reddit.com/topics/a-1/"
				}, S._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(k, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(k, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(k, {
					href: "https://www.redditinc.com/"
				}, S._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/careers"
				}, S._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/press"
				}, S._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/advertising"
				}, S._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(k, {
					href: "http://www.redditblog.com/"
				}, S._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(k, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(k, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, S._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: y.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
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
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = e => {
					let {
						className: t,
						isOverlay: n,
						style: r
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(t, m.a.container),
						style: r
					}, o.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => p(n)
					}, b._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				g = n("./src/reddit/components/SidebarFooter/index.tsx"),
				f = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				_ = n.n(E),
				y = n("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = c.e[1] + 24,
				v = f.f + 8,
				C = v + 152 + 16,
				w = C + k + 8,
				O = y.a.div("Container", _.a),
				j = y.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return o.a.createElement(h, S({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?v:8}px)`
						}
					}, s))
				}, "BackToTop", _.a),
				N = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: a,
						shouldStickToBottom: i
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(n, {
							[_.a.BottomStickyStyles]: i,
							[_.a.StickyStyles]: !i && a && !r,
							[_.a.StickyStylesFakeOverlay]: !i && !!r
						})
					}, t)
				};
			class T extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > w,
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
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							children: s,
							className: r,
							hideFooter: a,
							pageLayer: i,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, l = this.state.isAdSticky && !(!t && !s), u = this.state.isBottomSticky;
					return o.a.createElement(O, {
						className: r,
						innerRef: this.setWrapperRef
					}, o.a.createElement(N, {
						isFakeOverlay: n,
						isSticky: l,
						shouldStickToBottom: u
					}, t, s, c, !a && o.a.createElement(g.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && o.a.createElement(j, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const P = Object(x.u)();
			t.a = P(T)
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
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = n.n(E);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = u.a.div("BladeContainer", _.a), k = u.a.wrapped(h.a, "CloseIcon", _.a), v = u.a.div("LoadingTitleContainer", _.a), C = u.a.div("LoadingNavContainer", _.a), w = u.a.div("ShortLoadingNav", _.a), O = u.a.wrapped(p.a, "ThemedChevron", _.a), j = e => {
				let {
					...t
				} = e;
				return i.a.createElement(S, null, i.a.createElement(k, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(b.o, null, i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingTitle, t.isLoading && _.a.loading)
				})), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(O, null)), i.a.createElement(C, null, i.a.createElement(w, null), i.a.createElement(O, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(O, null)), i.a.createElement(C, null, i.a.createElement(w, null), i.a.createElement(O, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), i.a.createElement(O, null)))))
			}, N = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: f.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: g.o
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(N, {
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
				return c
			})), n.d(t, "o", (function() {
				return d
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
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return y
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const i = s.a.section("FormPage", a.a),
				o = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				d = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				b = s.a.h2("FormGroupTitle", a.a),
				p = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				g = s.a.div("FormItem", a.a),
				f = s.a.h3("FormElementTitle", a.a),
				x = s.a.div("FormElementDescription", a.a),
				E = s.a.div("FormElementError", a.a),
				_ = s.a.div("FormElementSubGroup", a.a),
				y = s.a.li("FormListItem", a.a)
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
				r = n.n(s),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./node_modules/react-redux/es/index.js"),
				h = n("./node_modules/reselect/es/index.js"),
				g = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/components/SubscribeButton/index.tsx"),
				E = n("./src/reddit/constants/posts.ts"),
				_ = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				S = n("./src/reddit/helpers/widgets/index.tsx"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				w = n.n(C);
			const O = Object(h.c)({
				isLoggedIn: v.Q,
				subreddit: k.U,
				subredditAboutInfo: k.v
			});
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: n,
							subredditAboutInfo: s
						} = this.props;
						if (!n) return;
						const r = Object(S.c)(n, s);
						t(Object(u.n)(e, r))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: n
					} = this.props;
					return n ? r.a.createElement("div", {
						className: Object(i.a)(w.a.Container, e)
					}, r.a.createElement(f.b, {
						className: w.a.Icon,
						subredditOrProfile: n
					}), r.a.createElement("div", {
						className: w.a.Text
					}, r.a.createElement(_.default, {
						className: w.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: n.url
					}, r.a.createElement("div", {
						className: w.a.Name
					}, Object(y.c)(n.displayText || n.name)), r.a.createElement("div", {
						className: w.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(n.subscribers, "subscribers count", Object(g.b)(n.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(x.a, {
						border: !1,
						className: Object(i.a)(w.a.SubscribeButton, {
							[w.a.hidden]: !t
						}),
						identifier: {
							name: n.name,
							type: E.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var N = Object(p.b)(O)(Object(d.c)(j)),
				T = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var P = e => {
					const {
						className: t
					} = e, n = Object(T.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(i.a)(w.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(i.a)(w.a.Icon, w.a.placeholder, n)
					}), r.a.createElement("div", {
						className: w.a.Text
					}, r.a.createElement("div", {
						className: w.a.Link
					}, r.a.createElement("div", {
						className: Object(i.a)(w.a.Name, w.a.placeholder, n)
					}), r.a.createElement("div", {
						className: Object(i.a)(w.a.Members, w.a.placeholder, n)
					}))), r.a.createElement("div", {
						className: w.a.SubscribeButton
					}))
				},
				I = n("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				L = n.n(I);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = 8, R = Array.from({
				length: F
			}).map((e, t) => r.a.createElement(P, {
				className: L.a.Subreddit,
				key: t
			})), B = {
				enabled: !0,
				id: "xd_103",
				layout: m.c.Large,
				surface: m.d.Topic,
				unitName: m.h,
				unitType: m.e.SubredditListing,
				url: ""
			};
			class M extends r.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.w)(B)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: n
					} = this.props, s = t.slice(0, F);
					return r.a.createElement(o.a, {
						className: Object(i.a)(L.a.Container, e)
					}, r.a.createElement("div", {
						className: L.a.Title
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, G._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: L.a.SubredditList
					}, s.length > 0 ? s.map(e => r.a.createElement(N, {
						className: L.a.Subreddit,
						discoveryUnit: B,
						key: e,
						subredditId: e
					})) : R), t.length > F && r.a.createElement(a.a, {
						to: n
					}, r.a.createElement(l.r, {
						className: L.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, G._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(M)
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
				r = n.n(s),
				a = n("./src/reddit/components/SidebarContainer/index.tsx"),
				i = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				o = n("./src/reddit/components/TopicSidebar/index.m.less"),
				c = n.n(o);
			t.a = e => {
				const {
					children: t,
					className: n
				} = e;
				return r.a.createElement(a.a, {
					className: n
				}, t, r.a.createElement(i.a, {
					className: c.a.StickyBottom
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/widgets.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(E.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(E.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = _(e);
					return Object(x.f)(t)
				},
				k = e => {
					const t = y(e);
					return Object(x.f)(t)
				};
			var v = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = n.n(v);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(u.u)(), j = Object(a.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(g.l)(e, {
							subredditId: n
						}),
						r = Object(f.db)(e);
					return s || r
				},
				nigtmode: f.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = S(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = k(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: a,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, h = n ? C.a.widgetContentOnly : C.a.widgetContent, g = !s && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: s,
							[C.a.clickable]: !!c,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: c,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(o.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: i,
						style: x,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(o.a)(C.a.widgetTitle, b)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), a), r.a.createElement("div", {
						className: Object(o.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(j(Object(c.a)(Object(l.c)(N))))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const a = e => ({
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
				...r,
				variables: a(t)
			})
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				o = e => Object(s.a)(a.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, a = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const o = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(i.vb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				c = (e, t) => n => ({
					source: r.POST,
					action: a.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: i.I(n, e),
					subreddit: i.hb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...i.n(n)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: a.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...i.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: s.TOPIC,
					...i.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => t(!0), []), e
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					height: "20",
					width: "20",
					viewBox: "0 0 20 20"
				}, r.a.createElement("path", {
					d: "M11.41 10l4.29-4.29a1 1 0 0 0-1.41-1.41L10 8.59l-4.29-4.3a1 1 0 0 0-1.42 1.42L8.59 10l-4.3 4.29A1 1 0 1 0 5.7 15.7l4.3-4.29 4.29 4.29a1 1 0 0 0 1.41-1.41z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				o = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				c = n("./src/reddit/components/TopicSidebar/index.tsx"),
				d = n("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
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
				}, b = n("./src/reddit/helpers/localStorage/index.ts"), p = n("./src/reddit/helpers/trackers/screenview.ts"), h = n("./src/reddit/hooks/useGqlContext.ts"), g = n("./src/reddit/hooks/useTracking.ts"), f = n("./src/reddit/layout/page/Listing/index.tsx"), x = n("./node_modules/react-router-dom/esm/react-router-dom.js"), E = n("./src/reddit/controls/Button/index.tsx"), _ = n("./src/reddit/pages/Geotagging/index.m.less"), y = n.n(_);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function k() {
				return r.a.createElement("div", {
					className: y.a.done
				}, r.a.createElement("p", {
					className: y.a.headerText1
				}, S._("Done and done!", null, {
					hk: "1RzJEG"
				})), r.a.createElement("p", {
					className: y.a.headerText2
				}, S._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), r.a.createElement(x.a, {
					to: "/"
				}, r.a.createElement(E.l, null, "Go Home")))
			}
			var v = n("./src/config.ts");
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function w() {
				return r.a.createElement("div", {
					className: y.a.header
				}, r.a.createElement("img", {
					className: y.a.headerImage,
					src: `${v.a.assetPath}/img/mtm-snoo.png`
				}), r.a.createElement("div", null, r.a.createElement("p", {
					className: y.a.headerText1
				}, C._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), r.a.createElement("p", {
					className: y.a.headerText2
				}, C._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var O = n("./src/reddit/actions/toaster.ts"),
				j = n("./src/reddit/components/GeoForm/GeoForm.tsx"),
				N = n("./src/reddit/components/SubredditIcon/index.tsx"),
				T = n("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				P = n("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				I = async (e, t) => Object(l.a)(e, {
					...P,
					variables: Object(T.b)(t)
				}), L = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const G = "crowdsource",
				F = {
					pageType: "crowdsource_feed_geo"
				},
				R = {
					pageType: "geo_entry"
				},
				B = e => () => ({
					source: G,
					noun: "skip",
					action: "click",
					subreddit: Object(L.a)(e),
					userSubreddit: Object(L.g)(e.modPermissions, e.isSubscribed),
					actionInfo: F
				}),
				M = e => () => ({
					source: G,
					noun: "location_field",
					action: "click",
					subreddit: Object(L.a)(e),
					userSubreddit: Object(L.g)(e.modPermissions, e.isSubscribed),
					actionInfo: R
				}),
				A = J("select_location"),
				D = J("confirm_location"),
				W = J("undo_location"),
				H = Q("verify_location"),
				z = Q("reject_location");

			function J(e) {
				return (t, n) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(L.a)(t),
					userSubreddit: Object(L.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...R,
						reason: n
					}
				})
			}

			function Q(e) {
				return (t, n) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(L.a)(t),
					userSubreddit: Object(L.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...F,
						reason: n
					}
				})
			}
			var q = n("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				K = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Y(e) {
				const t = Object(b.A)(Z) || [];
				t.push(e), Object(b.Eb)(Z, t)
			}

			function V(e) {
				const {
					subreddit: t,
					onClose: n
				} = e, i = Object(h.a)(), o = Object(a.d)(), [c, d] = Object(s.useState)(void 0), [l, u] = Object(s.useState)(!1), [m, b] = Object(s.useState)(!1), {
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
				}(), _ = Object(g.a)();

				function S() {
					o(Object(O.f)({
						kind: K.b.SuccessMod,
						text: U._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : r.a.createElement("div", {
					className: y.a.subredditGeotag
				}, r.a.createElement("div", {
					className: y.a.subredditTitle
				}, r.a.createElement(N.b, {
					className: y.a.icon,
					subredditOrProfile: Object(L.a)(t),
					linkTo: t.path
				}), r.a.createElement(x.a, {
					to: t.path
				}, r.a.createElement("div", {
					className: y.a.title
				}, t.prefixedName)), r.a.createElement("button", {
					className: y.a.dismiss,
					onClick: function() {
						Y(t.id), _(B(t)), f(), n(t.id)
					}
				}, r.a.createElement(q.a, null))), r.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? r.a.createElement("div", {
					className: y.a.questionContainer
				}, r.a.createElement("div", {
					className: y.a.question
				}, U._("Is this community specific to {place}?", [U._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), r.a.createElement(E.o, {
					className: y.a.rejectButton,
					onClick: function() {
						b(!0), _(z(t, t.geoPlace.id))
					}
				}, "No"), r.a.createElement(E.l, {
					className: y.a.verifyButton,
					onClick: function() {
						Y(t.id), _(H(t, t.geoPlace.id)), f(), n(t.id), S()
					}
				}, "Yes")) : r.a.createElement(j.a, {
					disabled: l,
					onFocus: () => _(M(t)),
					onPlace: function(e) {
						c && !e && _(W(t, c.id)), d(e), e && _(A(t, e.id))
					},
					onSubmit: async function(e) {
						let {
							place: s,
							sessionId: r
						} = e;
						if (!s) return;
						u(!0);
						const a = await I(i(), {
							subredditId: t.id,
							placeId: s.id,
							source: s.source,
							sessionId: r
						});
						if (u(!1), !a.ok) return o(Object(O.f)({
							kind: K.b.Error,
							text: U._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						_(D(t, s.id)), f(), n(t.id), S()
					}
				}))
			}
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = "geotagging-dismissed";

			function $() {
				const {
					error: e,
					loading: t,
					subreddits: n
				} = function() {
					const [e, t] = Object(s.useState)(!1), [n, r] = Object(s.useState)(!0), [a, i] = Object(s.useState)([]), o = Object(h.a)();
					return Object(s.useEffect)(() => {
						m(o()).then(e => {
							const t = e.body;
							r(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const n = Object(b.A)(Z) || [];
							i((t.data.geoContributableSubreddits || []).filter(e => !n.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [o]), {
						error: e,
						loading: n,
						subreddits: a
					}
				}(), [a, o] = Object(s.useState)(0);

				function c(e) {
					o(a + 1)
				}
				return e ? r.a.createElement("div", null, r.a.createElement(w, null), X._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null), r.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				})) : a >= n.length ? r.a.createElement(k, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null), n.map(e => r.a.createElement(V, {
					key: e.id,
					subreddit: e,
					onClose: c
				})))
			}

			function ee(e) {
				const t = Object(a.e)(e => {
						var t, n;
						const s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.topics) || void 0 === n ? void 0 : n.models;
						if (!s) return;
						const r = Object.keys(s).find(e => "coronavirus" === s[e].slug);
						return s[r]
					}),
					n = Object(g.a)();
				return Object(s.useEffect)(() => {
					n(Object(p.d)())
				}, []), r.a.createElement(o.a, null, r.a.createElement(f.a, {
					className: y.a.Container,
					content: r.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, r.a.createElement(c.a, {
						key: "right",
						className: y.a.SidebarRight,
						listingName: "geotagging"
					}, t && r.a.createElement(d.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicUrl: t.url
					}))]
				}))
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				o = n("./src/reddit/selectors/meta.ts"),
				c = n("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(o.g)(e) && Object(a.f)(e),
					experimentName: s.oc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(o.g)(e) && Object(a.f)(e),
					experimentName: s.nc
				}), i.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.9ec5b3e75daf17832206.js.map