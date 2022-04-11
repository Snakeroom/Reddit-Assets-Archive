// https://www.redditstatic.com/desktop2x/Geotagging.33883f824d3b4d9f702d.js
// Retrieved at 4/11/2022, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, n) {
			"use strict";
			const s = (e, t, n = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let s, r, a = [];
				return function(...i) {
					return new Promise(o => {
						const d = n.leading && !r;
						clearTimeout(r), r = setTimeout(() => {
							r = null;
							const t = n.leading ? s : e.apply(this, i);
							for (o of a) o(t);
							a = []
						}, t), d ? (s = e.apply(this, i), o(s)) : a.push(o)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/uuid/v4.js"),
				o = n.n(i),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx");
			var l, u = n("./node_modules/p-debounce/index.js"),
				m = n.n(u),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				p = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				g = n("./src/lib/sentry/index.ts"),
				f = n("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(l || (l = {}));
			const x = (e, t) => async n => {
				let s;
				try {
					s = await async function(e, t) {
						return Object(h.a)(e, {
							...f,
							variables: t
						})
					}(e(), {
						query: n,
						sessionId: t
					})
				} catch (r) {
					return g.c.captureException(r), []
				}
				return s.body.data.geoPlaceAutocomplete || []
			};
			var _ = n("./src/reddit/hooks/useGqlContext.ts"),
				E = n("./src/reddit/icons/svgs/Location/index.tsx"),
				S = n("./src/reddit/components/GeoForm/index.m.less"),
				y = n.n(S);

			function v(e) {
				const {
					value: t,
					setValue: n,
					setPlace: i,
					disabled: o,
					onFocus: c,
					sessionId: l,
					className: u
				} = e, b = Object(_.a)(), [h, g] = Object(r.useState)(!1), f = function(e, t, n) {
					const [s, a] = Object(r.useState)([]), i = Object(r.useMemo)(() => m()(n, 300), [n]);
					return Object(r.useEffect)(() => {
						e && t && i(e).then(e => {
							a(e)
						}).catch(() => a([]))
					}, [e]), s
				}(t, h, x(b, l)), {
					highlightValue: S,
					selectedIndex: v,
					onKeyDown: k,
					isClosed: O,
					setClosed: j
				} = function(e, t, n) {
					const [s, a] = Object(r.useState)(-1), [i, o] = Object(r.useState)(!!e.length), [d, c] = Object(r.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: s,
						onKeyDown: r => {
							if (r.key === p.b.ArrowDown) {
								const t = Math.min(s + 1, e.length - 1);
								a(t), c(e[t])
							} else if (r.key === p.b.ArrowUp) {
								const t = Math.max(s - 1, -1);
								a(t), c(e[t])
							} else r.key === p.b.Enter && s > -1 ? (a(-1), t(e[s].name), n(e[s]), o(!0), r.preventDefault()) : r.key === p.b.Escape ? (a(-1), o(!0)) : c(void 0)
						},
						isClosed: i,
						setClosed: o
					}
				}(f, n, i), w = `location-input-${l}`;
				return a.a.createElement("div", {
					className: y.a.autocompleteInput
				}, a.a.createElement("label", {
					className: y.a.geoLabel,
					htmlFor: w
				}, a.a.createElement(E.a, {
					className: y.a.locationIcon
				})), a.a.createElement("input", {
					className: Object(d.a)(y.a.geoInput, u),
					name: w,
					disabled: o,
					onKeyDown: k,
					value: S && S.name || t,
					placeholder: s.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						n(e.currentTarget.value), i(void 0), j(!1)
					},
					onFocus: () => {
						g(!0), c()
					},
					onBlur: () => g(!1)
				}), f.length && !O ? a.a.createElement(C, {
					id: l,
					items: f.map(e => e.name),
					selectedIndex: v,
					selectValue: e => {
						n(f[e].name), i(f[e]), j(!0)
					},
					onClickOutside: () => j(!0)
				}) : null)
			}

			function C(e) {
				const {
					id: t,
					items: n,
					selectedIndex: s,
					selectValue: r,
					onClickOutside: i
				} = e;
				return Object(b.a)(`autocomplete-dropdown-${t}`, i), a.a.createElement("ul", {
					className: y.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, n.map((e, t) => a.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => r(t),
					className: Object(d.a)({
						[y.a.highlight]: t === s
					})
				}, e)))
			}
			const k = () => {};

			function O(e) {
				const {
					className: t,
					initialValue: n,
					initialPlace: i,
					disabled: l = !1,
					onFocus: u = k,
					onPlace: m = k,
					onValue: b = k,
					inputClassName: p
				} = e, h = function() {
					const [e, t] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => t(!0), []), e
				}(), [g] = Object(r.useState)(() => o()()), [f, x] = Object(r.useState)(n || ""), [_, E] = Object(r.useState)(i);
				return h ? a.a.createElement("form", {
					className: Object(d.a)(y.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == i ? void 0 : i.id) !== (null == _ ? void 0 : _.id) && e.onSubmit({
							name: f,
							place: _,
							sessionId: g
						})
					}
				}, a.a.createElement(v, {
					className: p,
					value: f,
					sessionId: g,
					setValue: e => {
						x(e), b(e)
					},
					setPlace: e => {
						E(e), m(e)
					},
					disabled: l,
					onFocus: u
				}), _ && _.id !== (null == i ? void 0 : i.id) && a.a.createElement(c.o, {
					className: y.a.submitButton,
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
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				o = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = n.n(o);
			const c = e => r.a.createElement("div", {
				className: Object(a.a)(d.a.communityContainer, e.sidebar && d.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(a.a)(d.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: d.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(d.a.subredditInfo, e.sidebar && d.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(a.a)(d.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(a.a)(d.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(a.a)(d.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(a.a)(d.a.buttonContainer, Object(i.a)(e))
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
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/location.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				p = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				g = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = n("./src/reddit/selectors/meta.ts"),
				x = n("./src/reddit/components/SidebarFooter/index.m.less"),
				_ = n.n(x);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = d.a.a("Link", _.a), y = Object(i.c)({
				isCountrySitesEnabled: h.b,
				isNavbarLikeMwebEnabled: g.a,
				countryCode: f.b
			}), v = Object(a.b)(y), C = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = C(v(Object(c.c)(e => {
				const t = Object(a.f)().getState(),
					n = Object(h.a)(t, Object(o.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(l.a, {
					className: _.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: _.a.LinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: _.a.Copyright
				}, E._("© {year} Reddit, Inc. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(S, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(l.a, {
					className: _.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: _.a.LinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(S, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(S, {
					href: "https://www.reddit.com/coins"
				}, E._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(S, {
					href: "https://www.reddit.com/premium"
				}, E._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(S, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, E._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(S, {
					href: `https://www.reddit.com${Object(b.a)()}`
				}, E._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(S, {
					href: "https://www.reddit.com/topics/a-1/"
				}, E._("Topics", null, {
					hk: "349RFt"
				}))), !!u.c[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(S, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: _.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: _.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/"
				}, E._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/careers"
				}, E._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/press"
				}, E._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/advertising"
				}, E._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(S, {
					href: "http://www.redditblog.com/"
				}, E._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(S, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, E._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: _.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: _.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: _.a.Column
				}, s("de"), s("es"))), r.a.createElement("div", {
					className: _.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
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
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				if (e) {
					const e = document.getElementById(c.d);
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
				_ = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				E = n.n(_),
				S = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = d.e[1] + 24,
				C = f.f + 8,
				k = C + 152 + 16,
				O = k + v + 8,
				j = S.a.div("Container", E.a),
				w = S.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return o.a.createElement(h, y({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?C:8}px)`
						}
					}, s))
				}, "BackToTop", E.a),
				N = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: a
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(n, {
							[E.a.StickyStyles]: a && !r,
							[E.a.StickyStylesFakeOverlay]: !!r
						})
					}, t)
				};
			class T extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > O,
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
							pageLayer: i
						}
					} = this, d = this.state.isAdSticky && !(!t && !s);
					return o.a.createElement(j, {
						className: r,
						innerRef: this.setWrapperRef
					}, o.a.createElement(N, {
						isFakeOverlay: n,
						isSticky: d
					}, t, s, !a && o.a.createElement(g.a, null)), !this.props.hideBackToTop && o.a.createElement(w, {
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
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = n.n(_);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = u.a.div("BladeContainer", E.a), v = u.a.wrapped(h.a, "CloseIcon", E.a), C = u.a.div("LoadingTitleContainer", E.a), k = u.a.div("LoadingNavContainer", E.a), O = u.a.div("ShortLoadingNav", E.a), j = u.a.wrapped(p.a, "ThemedChevron", E.a), w = e => {
				let {
					...t
				} = e;
				return i.a.createElement(y, null, i.a.createElement(v, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, S._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(b.o, null, i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingTitle, t.isLoading && E.a.loading)
				})), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), i.a.createElement(j, null)), i.a.createElement(k, null, i.a.createElement(O, null), i.a.createElement(j, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), i.a.createElement(j, null)), i.a.createElement(k, null, i.a.createElement(O, null), i.a.createElement(j, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(E.a.LoadingNav, t.isLoading && E.a.loading)
				}), i.a.createElement(j, null)))))
			}, N = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(d.c)({
				isEditing: f.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: g.n
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
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
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return S
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const i = s.a.section("FormPage", a.a),
				o = s.a.h1("HomePageTitle", a.a),
				d = s.a.button("HomePageBreadcrumb", a.a),
				c = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				b = s.a.h2("FormGroupTitle", a.a),
				p = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				g = s.a.div("FormItem", a.a),
				f = s.a.h3("FormElementTitle", a.a),
				x = s.a.div("FormElementDescription", a.a),
				_ = s.a.div("FormElementError", a.a),
				E = s.a.div("FormElementSubGroup", a.a),
				S = s.a.li("FormListItem", a.a)
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
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./node_modules/react-redux/es/index.js"),
				h = n("./node_modules/reselect/es/index.js"),
				g = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/components/SubscribeButton/index.tsx"),
				_ = n("./src/reddit/constants/posts.ts"),
				E = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/helpers/widgets/index.tsx"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				O = n.n(k);
			const j = Object(h.c)({
				isLoggedIn: C.Q,
				subreddit: v.S,
				subredditAboutInfo: v.t
			});
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: n,
							subredditAboutInfo: s
						} = this.props;
						if (!n) return;
						const r = Object(y.c)(n, s);
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
						className: Object(i.a)(O.a.Container, e)
					}, r.a.createElement(f.b, {
						className: O.a.Icon,
						subredditOrProfile: n
					}), r.a.createElement("div", {
						className: O.a.Text
					}, r.a.createElement(E.a, {
						className: O.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: n.url
					}, r.a.createElement("div", {
						className: O.a.Name
					}, Object(S.c)(n.displayText || n.name)), r.a.createElement("div", {
						className: O.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(n.subscribers, "subscribers count", Object(g.b)(n.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(x.a, {
						border: !1,
						className: Object(i.a)(O.a.SubscribeButton, {
							[O.a.hidden]: !t
						}),
						identifier: {
							name: n.name,
							type: _.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var N = Object(p.b)(j)(Object(c.c)(w)),
				T = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var P = e => {
					const {
						className: t
					} = e, n = Object(T.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(i.a)(O.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(i.a)(O.a.Icon, O.a.placeholder, n)
					}), r.a.createElement("div", {
						className: O.a.Text
					}, r.a.createElement("div", {
						className: O.a.Link
					}, r.a.createElement("div", {
						className: Object(i.a)(O.a.Name, O.a.placeholder, n)
					}), r.a.createElement("div", {
						className: Object(i.a)(O.a.Members, O.a.placeholder, n)
					}))), r.a.createElement("div", {
						className: O.a.SubscribeButton
					}))
				},
				L = n("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = n.n(L);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = 8, B = Array.from({
				length: G
			}).map((e, t) => r.a.createElement(P, {
				className: I.a.Subreddit,
				key: t
			})), R = {
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
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.w)(R)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: n
					} = this.props, s = t.slice(0, G);
					return r.a.createElement(o.a, {
						className: Object(i.a)(I.a.Container, e)
					}, r.a.createElement("div", {
						className: I.a.Title
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, F._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: I.a.SubredditList
					}, s.length > 0 ? s.map(e => r.a.createElement(N, {
						className: I.a.Subreddit,
						discoveryUnit: R,
						key: e,
						subredditId: e
					})) : B), t.length > G && r.a.createElement(a.a, {
						to: n
					}, r.a.createElement(l.r, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, F._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(c.c)(M)
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
				d = n.n(o);
			t.a = e => {
				const {
					children: t,
					className: n
				} = e;
				return r.a.createElement(a.a, {
					className: n
				}, t, r.a.createElement(i.a, {
					className: d.a.StickyBottom
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
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/widgets.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				S = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = E(e);
					return Object(x.f)(t)
				},
				v = e => {
					const t = S(e);
					return Object(x.f)(t)
				};
			var C = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(C);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), w = Object(a.b)(() => Object(i.c)({
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
					return e.backgroundColor = E(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = S(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: a,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, h = n ? k.a.widgetContentOnly : k.a.widgetContent, g = !s && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: s,
							[k.a.clickable]: !!d,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(o.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!l
						}),
						id: i,
						style: x,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(o.a)(k.a.widgetTitle, b)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), a), r.a.createElement("div", {
						className: Object(o.a)(h, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(w(Object(d.a)(Object(l.c)(N))))
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
				return d
			})), n.d(t, "d", (function() {
				return c
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
					widget: Object(i.ub)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				d = (e, t) => n => ({
					source: r.POST,
					action: a.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: i.H(n, e),
					subreddit: i.gb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...i.n(n)
				}),
				c = () => e => ({
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
				}, b = n("./src/reddit/helpers/localStorage/index.ts"), p = n("./src/reddit/helpers/trackers/screenview.ts"), h = n("./src/reddit/hooks/useGqlContext.ts"), g = n("./src/reddit/hooks/useTracking.ts"), f = n("./src/reddit/layout/page/Listing/index.tsx"), x = n("./node_modules/react-router-dom/esm/react-router-dom.js"), _ = n("./src/reddit/controls/Button/index.tsx"), E = n("./src/reddit/pages/Geotagging/index.m.less"), S = n.n(E);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function v() {
				return r.a.createElement("div", {
					className: S.a.done
				}, r.a.createElement("p", {
					className: S.a.headerText1
				}, y._("Done and done!", null, {
					hk: "1RzJEG"
				})), r.a.createElement("p", {
					className: S.a.headerText2
				}, y._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), r.a.createElement(x.a, {
					to: "/"
				}, r.a.createElement(_.l, null, "Go Home")))
			}
			var C = n("./src/config.ts");
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function O() {
				return r.a.createElement("div", {
					className: S.a.header
				}, r.a.createElement("img", {
					className: S.a.headerImage,
					src: `${C.a.assetPath}/img/mtm-snoo.png`
				}), r.a.createElement("div", null, r.a.createElement("p", {
					className: S.a.headerText1
				}, k._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), r.a.createElement("p", {
					className: S.a.headerText2
				}, k._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var j = n("./src/reddit/actions/toaster.ts"),
				w = n("./src/reddit/components/GeoForm/GeoForm.tsx"),
				N = n("./src/reddit/components/SubredditIcon/index.tsx"),
				T = n("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				P = n("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				L = async (e, t) => Object(l.a)(e, {
					...P,
					variables: Object(T.b)(t)
				}), I = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const F = "crowdsource",
				G = {
					pageType: "crowdsource_feed_geo"
				},
				B = {
					pageType: "geo_entry"
				},
				R = e => () => ({
					source: F,
					noun: "skip",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: G
				}),
				M = e => () => ({
					source: F,
					noun: "location_field",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: B
				}),
				W = z("select_location"),
				H = z("confirm_location"),
				A = z("undo_location"),
				D = J("verify_location"),
				Q = J("reject_location");

			function z(e) {
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

			function J(e) {
				return (t, n) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...G,
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
				const t = Object(b.B)(Z) || [];
				t.push(e), Object(b.Fb)(Z, t)
			}

			function V(e) {
				const {
					subreddit: t,
					onClose: n
				} = e, i = Object(h.a)(), o = Object(a.d)(), [d, c] = Object(s.useState)(void 0), [l, u] = Object(s.useState)(!1), [m, b] = Object(s.useState)(!1), {
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
				}(), E = Object(g.a)();

				function y() {
					o(Object(j.f)({
						kind: K.b.SuccessMod,
						text: U._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : r.a.createElement("div", {
					className: S.a.subredditGeotag
				}, r.a.createElement("div", {
					className: S.a.subredditTitle
				}, r.a.createElement(N.b, {
					className: S.a.icon,
					subredditOrProfile: Object(I.a)(t),
					linkTo: t.path
				}), r.a.createElement(x.a, {
					to: t.path
				}, r.a.createElement("div", {
					className: S.a.title
				}, t.prefixedName)), r.a.createElement("button", {
					className: S.a.dismiss,
					onClick: function() {
						Y(t.id), E(R(t)), f(), n(t.id)
					}
				}, r.a.createElement(q.a, null))), r.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? r.a.createElement("div", {
					className: S.a.questionContainer
				}, r.a.createElement("div", {
					className: S.a.question
				}, U._("Is this community specific to {place}?", [U._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), r.a.createElement(_.o, {
					className: S.a.rejectButton,
					onClick: function() {
						b(!0), E(Q(t, t.geoPlace.id))
					}
				}, "No"), r.a.createElement(_.l, {
					className: S.a.verifyButton,
					onClick: function() {
						Y(t.id), E(D(t, t.geoPlace.id)), f(), n(t.id), y()
					}
				}, "Yes")) : r.a.createElement(w.a, {
					disabled: l,
					onFocus: () => E(M(t)),
					onPlace: function(e) {
						d && !e && E(A(t, d.id)), c(e), e && E(W(t, e.id))
					},
					onSubmit: async function(e) {
						let {
							place: s,
							sessionId: r
						} = e;
						if (!s) return;
						u(!0);
						const a = await L(i(), {
							subredditId: t.id,
							placeId: s.id,
							source: s.source,
							sessionId: r
						});
						if (u(!1), !a.ok) return o(Object(j.f)({
							kind: K.b.Error,
							text: U._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						E(H(t, s.id)), f(), n(t.id), y()
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
							const n = Object(b.B)(Z) || [];
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

				function d(e) {
					o(a + 1)
				}
				return e ? r.a.createElement("div", null, r.a.createElement(O, null), X._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(O, null), r.a.createElement(i.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(i.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				})) : a >= n.length ? r.a.createElement(v, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(O, null), n.map(e => r.a.createElement(V, {
					key: e.id,
					subreddit: e,
					onClose: d
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
					className: S.a.Container,
					content: r.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, r.a.createElement(d.a, {
						key: "right",
						className: S.a.SidebarRight,
						listingName: "geotagging"
					}, t && r.a.createElement(c.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.33883f824d3b4d9f702d.js.map