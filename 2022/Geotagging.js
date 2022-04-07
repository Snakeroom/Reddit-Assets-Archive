// https://www.redditstatic.com/desktop2x/Geotagging.a26b692cf4397dc852ef.js
// Retrieved at 4/7/2022, 12:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, n) {
			"use strict";
			const a = (e, t, n = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let a, s, r = [];
				return function(...i) {
					return new Promise(o => {
						const d = n.leading && !s;
						clearTimeout(s), s = setTimeout(() => {
							s = null;
							const t = n.leading ? a : e.apply(this, i);
							for (o of r) o(t);
							r = []
						}, t), d ? (a = e.apply(this, i), o(a)) : r.push(o)
					})
				}
			};
			e.exports = a, e.exports.default = a
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
				return N
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				S = n("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(l || (l = {}));
			const f = (e, t) => async n => {
				let a;
				try {
					a = await async function(e, t) {
						return Object(h.a)(e, {
							...S,
							variables: t
						})
					}(e(), {
						query: n,
						sessionId: t
					})
				} catch (s) {
					return g.c.captureException(s), []
				}
				return a.body.data.geoPlaceAutocomplete || []
			};
			var E = n("./src/reddit/hooks/useGqlContext.ts"),
				x = n("./src/reddit/icons/svgs/Location/index.tsx"),
				y = n("./src/reddit/components/GeoForm/index.m.less"),
				_ = n.n(y);

			function C(e) {
				const {
					value: t,
					setValue: n,
					setPlace: i,
					disabled: o,
					onFocus: c,
					sessionId: l,
					className: u
				} = e, b = Object(E.a)(), [h, g] = Object(s.useState)(!1), S = function(e, t, n) {
					const [a, r] = Object(s.useState)([]), i = Object(s.useMemo)(() => m()(n, 300), [n]);
					return Object(s.useEffect)(() => {
						e && t && i(e).then(e => {
							r(e)
						}).catch(() => r([]))
					}, [e]), a
				}(t, h, f(b, l)), {
					highlightValue: y,
					selectedIndex: C,
					onKeyDown: k,
					isClosed: N,
					setClosed: O
				} = function(e, t, n) {
					const [a, r] = Object(s.useState)(-1), [i, o] = Object(s.useState)(!!e.length), [d, c] = Object(s.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: a,
						onKeyDown: s => {
							if (s.key === p.b.ArrowDown) {
								const t = Math.min(a + 1, e.length - 1);
								r(t), c(e[t])
							} else if (s.key === p.b.ArrowUp) {
								const t = Math.max(a - 1, -1);
								r(t), c(e[t])
							} else s.key === p.b.Enter && a > -1 ? (r(-1), t(e[a].name), n(e[a]), o(!0), s.preventDefault()) : s.key === p.b.Escape ? (r(-1), o(!0)) : c(void 0)
						},
						isClosed: i,
						setClosed: o
					}
				}(S, n, i), T = `location-input-${l}`;
				return r.a.createElement("div", {
					className: _.a.autocompleteInput
				}, r.a.createElement("label", {
					className: _.a.geoLabel,
					htmlFor: T
				}, r.a.createElement(x.a, {
					className: _.a.locationIcon
				})), r.a.createElement("input", {
					className: Object(d.a)(_.a.geoInput, u),
					name: T,
					disabled: o,
					onKeyDown: k,
					value: y && y.name || t,
					placeholder: a.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						n(e.currentTarget.value), i(void 0), O(!1)
					},
					onFocus: () => {
						g(!0), c()
					},
					onBlur: () => g(!1)
				}), S.length && !N ? r.a.createElement(v, {
					id: l,
					items: S.map(e => e.name),
					selectedIndex: C,
					selectValue: e => {
						n(S[e].name), i(S[e]), O(!0)
					},
					onClickOutside: () => O(!0)
				}) : null)
			}

			function v(e) {
				const {
					id: t,
					items: n,
					selectedIndex: a,
					selectValue: s,
					onClickOutside: i
				} = e;
				return Object(b.a)(`autocomplete-dropdown-${t}`, i), r.a.createElement("ul", {
					className: _.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, n.map((e, t) => r.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => s(t),
					className: Object(d.a)({
						[_.a.highlight]: t === a
					})
				}, e)))
			}
			const k = () => {};

			function N(e) {
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
					const [e, t] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => t(!0), []), e
				}(), [g] = Object(s.useState)(() => o()()), [S, f] = Object(s.useState)(n || ""), [E, x] = Object(s.useState)(i);
				return h ? r.a.createElement("form", {
					className: Object(d.a)(_.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == i ? void 0 : i.id) !== (null == E ? void 0 : E.id) && e.onSubmit({
							name: S,
							place: E,
							sessionId: g
						})
					}
				}, r.a.createElement(C, {
					className: p,
					value: S,
					sessionId: g,
					setValue: e => {
						f(e), b(e)
					},
					setPlace: e => {
						x(e), m(e)
					},
					disabled: l,
					onFocus: u
				}), E && E.id !== (null == i ? void 0 : i.id) && r.a.createElement(c.o, {
					className: _.a.submitButton,
					type: "submit",
					disabled: l
				}, a.fbt._("Submit", null, {
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				o = n("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = n.n(o);
			const c = e => s.a.createElement("div", {
				className: Object(r.a)(d.a.communityContainer, e.sidebar && d.a.sidebar),
				"data-testid": "community-placeholder"
			}, s.a.createElement("div", {
				className: Object(r.a)(d.a.subreddtiIcon, Object(i.a)(e))
			}), s.a.createElement("div", {
				className: d.a.contentContainer
			}, s.a.createElement("div", {
				className: Object(r.a)(d.a.subredditInfo, e.sidebar && d.a.sidebar)
			}, s.a.createElement("div", {
				className: Object(r.a)(d.a.title, Object(i.b)(e))
			}), s.a.createElement("div", {
				className: Object(r.a)(d.a.author, Object(i.b)(e))
			})), !e.sidebar && s.a.createElement("div", {
				className: Object(r.a)(d.a.description, Object(i.b)(e))
			})), s.a.createElement("div", {
				className: Object(r.a)(d.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SidebarContainer/index.m.less"),
				r = n.n(s);
			t.a = a.a.div("container", r.a)
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
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
				S = n("./src/reddit/selectors/meta.ts"),
				f = n("./src/reddit/components/SidebarFooter/index.m.less"),
				E = n.n(f);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.a("Link", E.a), _ = Object(i.c)({
				isCountrySitesEnabled: h.b,
				isNavbarLikeMwebEnabled: g.a,
				countryCode: S.b
			}), C = Object(r.b)(_), v = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = v(C(Object(c.c)(e => {
				const t = Object(r.f)().getState(),
					n = Object(h.a)(t, Object(o.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(l.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: E.a.LinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, x._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, x._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, x._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, x._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: E.a.Copyright
				}, x._("© {year} Reddit, Inc. All rights reserved.", [x._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const a = t => {
					const a = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(y, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, a[t]) : null
				};
				return s.a.createElement(l.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: E.a.LinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, x._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/coins"
				}, x._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/premium"
				}, x._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(y, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, x._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(y, {
					href: `https://www.reddit.com${Object(b.a)()}`
				}, x._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/topics/a-1/"
				}, x._("Topics", null, {
					hk: "349RFt"
				}))), !!u.b[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, x._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, x._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, x._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: E.a.Column
				}, s.a.createElement(y, {
					href: "https://www.redditinc.com/"
				}, x._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/careers"
				}, x._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/press"
				}, x._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/advertising"
				}, x._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(y, {
					href: "http://www.redditblog.com/"
				}, x._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, x._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, x._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, x._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(y, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, x._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: E.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: E.a.Column
				}, a("en"), a("fr"), a("it")), s.a.createElement("div", {
					className: E.a.Column
				}, a("de"), a("es"))), s.a.createElement("div", {
					className: E.a.Copyright
				}, x._("Reddit Inc © {year}. All rights reserved", [x._param("year", (new Date).getFullYear().toString())], {
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
			var a = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
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
						style: s
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(t, m.a.container),
						style: s
					}, o.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => p(n)
					}, b._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				g = n("./src/reddit/components/SidebarFooter/index.tsx"),
				S = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				x = n.n(E),
				y = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const C = d.e[1] + 24,
				v = S.f + 8,
				k = v + 152 + 16,
				N = k + C + 8,
				O = y.a.div("Container", x.a),
				T = y.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...a
					} = e;
					return o.a.createElement(h, _({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?v:8}px)`
						}
					}, a))
				}, "BackToTop", x.a),
				w = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: r
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(n, {
							[x.a.StickyStyles]: r && !s,
							[x.a.StickyStylesFakeOverlay]: !!s
						})
					}, t)
				};
			class j extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > N,
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
					}, this.handleResize = r()(() => {
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
							children: a,
							className: s,
							hideFooter: r,
							pageLayer: i
						}
					} = this, d = this.state.isAdSticky && !(!t && !a);
					return o.a.createElement(O, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(w, {
						isFakeOverlay: n,
						isSticky: d
					}, t, a, !r && o.a.createElement(g.a, null)), !this.props.hideBackToTop && o.a.createElement(T, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const P = Object(f.u)();
			t.a = P(j)
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
			var a = n("./node_modules/lodash/values.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				S = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = n.n(E);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", x.a), C = u.a.wrapped(h.a, "CloseIcon", x.a), v = u.a.div("LoadingTitleContainer", x.a), k = u.a.div("LoadingNavContainer", x.a), N = u.a.div("ShortLoadingNav", x.a), O = u.a.wrapped(p.a, "ThemedChevron", x.a), T = e => {
				let {
					...t
				} = e;
				return i.a.createElement(_, null, i.a.createElement(C, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(b.o, null, i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingTitle, t.isLoading && x.a.loading)
				})), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement(N, null), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement(N, null), i.a.createElement(O, null)), i.a.createElement(k, null, i.a.createElement("div", {
					className: Object(l.a)(x.a.LoadingNav, t.isLoading && x.a.loading)
				}), i.a.createElement(O, null)))))
			}, w = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(T, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(T, {
					gradientType: "posts",
					isLoading: !0
				})
			}), j = Object(d.c)({
				isEditing: S.i,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: g.n
			});
			t.a = Object(o.b)(j)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(x.a.Container, e.isSubscriptionsPinned && x.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(w, {
					subredditId: e.subredditId
				})) : i.a.createElement(r.Fragment, null, e.children)
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
				return S
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "j", (function() {
				return y
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(s);
			const i = a.a.section("FormPage", r.a),
				o = a.a.h1("HomePageTitle", r.a),
				d = a.a.button("HomePageBreadcrumb", r.a),
				c = a.a.div("HomePageGroup", r.a),
				l = a.a.h1("FormPageTitle", r.a),
				u = a.a.div("FormPageSection", r.a),
				m = a.a.div("FormGroup", r.a),
				b = a.a.h2("FormGroupTitle", r.a),
				p = a.a.div("FormElement", r.a),
				h = a.a.div("FormGroupDescription", r.a),
				g = a.a.div("FormItem", r.a),
				S = a.a.h3("FormElementTitle", r.a),
				f = a.a.div("FormElementDescription", r.a),
				E = a.a.div("FormElementError", r.a),
				x = a.a.div("FormElementSubGroup", r.a),
				y = a.a.li("FormListItem", r.a)
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				S = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubscribeButton/index.tsx"),
				E = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				_ = n("./src/reddit/helpers/widgets/index.tsx"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				N = n.n(k);
			const O = Object(h.c)({
				isLoggedIn: v.P,
				subreddit: C.S,
				subredditAboutInfo: C.t
			});
			class T extends s.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: n,
							subredditAboutInfo: a
						} = this.props;
						if (!n) return;
						const s = Object(_.c)(n, a);
						t(Object(u.n)(e, s))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: n
					} = this.props;
					return n ? s.a.createElement("div", {
						className: Object(i.a)(N.a.Container, e)
					}, s.a.createElement(S.b, {
						className: N.a.Icon,
						subredditOrProfile: n
					}), s.a.createElement("div", {
						className: N.a.Text
					}, s.a.createElement(x.a, {
						className: N.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: n.url
					}, s.a.createElement("div", {
						className: N.a.Name
					}, Object(y.c)(n.displayText || n.name)), s.a.createElement("div", {
						className: N.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(n.subscribers, "subscribers count", Object(g.b)(n.subscribers))], {
						hk: "48BXj1"
					})))), s.a.createElement(f.a, {
						border: !1,
						className: Object(i.a)(N.a.SubscribeButton, {
							[N.a.hidden]: !t
						}),
						identifier: {
							name: n.name,
							type: E.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var w = Object(p.b)(O)(Object(c.c)(T)),
				j = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var P = e => {
					const {
						className: t
					} = e, n = Object(j.b)({
						isLoading: !0
					});
					return s.a.createElement("div", {
						className: Object(i.a)(N.a.Container, t)
					}, s.a.createElement("div", {
						className: Object(i.a)(N.a.Icon, N.a.placeholder, n)
					}), s.a.createElement("div", {
						className: N.a.Text
					}, s.a.createElement("div", {
						className: N.a.Link
					}, s.a.createElement("div", {
						className: Object(i.a)(N.a.Name, N.a.placeholder, n)
					}), s.a.createElement("div", {
						className: Object(i.a)(N.a.Members, N.a.placeholder, n)
					}))), s.a.createElement("div", {
						className: N.a.SubscribeButton
					}))
				},
				I = n("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				G = n.n(I);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = 8, F = Array.from({
				length: M
			}).map((e, t) => s.a.createElement(P, {
				className: G.a.Subreddit,
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
			class R extends s.a.Component {
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
					} = this.props, a = t.slice(0, M);
					return s.a.createElement(o.a, {
						className: Object(i.a)(G.a.Container, e)
					}, s.a.createElement("div", {
						className: G.a.Title
					}, s.a.createElement(d.b, {
						type: d.a.Widget
					}, L._("Top Communities", null, {
						hk: "46yzcK"
					}))), s.a.createElement("div", {
						className: G.a.SubredditList
					}, a.length > 0 ? a.map(e => s.a.createElement(w, {
						className: G.a.Subreddit,
						discoveryUnit: B,
						key: e,
						subredditId: e
					})) : F), t.length > M && s.a.createElement(r.a, {
						to: n
					}, s.a.createElement(l.r, {
						className: G.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, L._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(c.c)(R)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/SidebarContainer/index.tsx"),
				i = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				o = n("./src/reddit/components/TopicSidebar/index.m.less"),
				d = n.n(o);
			t.a = e => {
				const {
					children: t,
					className: n
				} = e;
				return s.a.createElement(r.a, {
					className: n
				}, t, s.a.createElement(i.a, {
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
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
				S = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/models/Theme/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(E.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(E.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = x(e);
					return Object(f.f)(t)
				},
				C = e => {
					const t = y(e);
					return Object(f.f)(t)
				};
			var v = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(v);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(u.u)(), T = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						a = t.redditStyle || Object(g.l)(e, {
							subredditId: n
						}),
						s = Object(S.cb)(e);
					return a || s
				},
				nigtmode: S.cb,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class w extends s.a.Component {
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: a,
						headerButton: r,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, h = n ? k.a.widgetContentOnly : k.a.widgetContent, g = !a && this.props.styles, S = g ? this.getWidgetBackgroundStyles() : {}, f = g ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(o.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: a,
							[k.a.clickable]: !!d,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": a,
						onClick: d,
						style: S
					}, u && s.a.createElement("div", {
						className: Object(o.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!l
						}),
						id: i,
						style: f,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(o.a)(k.a.widgetTitle, b)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), r), s.a.createElement("div", {
						className: Object(o.a)(h, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, N._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(T(Object(d.a)(Object(l.c)(w))))
		},
		"./src/reddit/constants/location.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var a = n("./src/redditGQL/types.ts");
			const s = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				r = {
					[a.e.De]: s[a.e.De],
					[a.e.At]: s[a.e.At]
				}
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			}));
			var a = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const r = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(a.a)(e, {
				...s,
				variables: r(t)
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
			var a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(s);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(a.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				o = e => Object(a.a)(r.a.loadingBar, i(e))
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
			var a, s, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(a || (a = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const o = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: a.SEE_MORE,
					widget: Object(i.ub)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				d = (e, t) => n => ({
					source: s.POST,
					action: r.c.CLICK,
					noun: a.REREDDIT_PROMO,
					post: i.H(n, e),
					subreddit: i.gb(n),
					...t && {
						banner: {
							buttonText: t,
							id: a.REREDDIT_PROMO
						}
					},
					...i.n(n)
				}),
				c = () => e => ({
					source: s.SIDEBAR,
					action: r.c.VIEW,
					noun: a.TOPICS_WIDGET,
					...i.n(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: a.TOPIC,
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(o.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					height: "20",
					width: "20",
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
					d: "M11.41 10l4.29-4.29a1 1 0 0 0-1.41-1.41L10 8.59l-4.29-4.3a1 1 0 0 0-1.42 1.42L8.59 10l-4.3 4.29A1 1 0 1 0 5.7 15.7l4.3-4.29 4.29 4.29a1 1 0 0 0 1.41-1.41z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
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
				return X
			})), n.d(t, "Geotagging", (function() {
				return $
			})), n.d(t, "default", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
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
				}, b = n("./src/reddit/helpers/localStorage/index.ts"), p = n("./src/reddit/helpers/trackers/screenview.ts"), h = n("./src/reddit/hooks/useGqlContext.ts"), g = n("./src/reddit/hooks/useTracking.ts"), S = n("./src/reddit/layout/page/Listing/index.tsx"), f = n("./node_modules/react-router-dom/esm/react-router-dom.js"), E = n("./src/reddit/controls/Button/index.tsx"), x = n("./src/reddit/pages/Geotagging/index.m.less"), y = n.n(x);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function C() {
				return s.a.createElement("div", {
					className: y.a.done
				}, s.a.createElement("p", {
					className: y.a.headerText1
				}, _._("Done and done!", null, {
					hk: "1RzJEG"
				})), s.a.createElement("p", {
					className: y.a.headerText2
				}, _._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), s.a.createElement(f.a, {
					to: "/"
				}, s.a.createElement(E.l, null, "Go Home")))
			}
			var v = n("./src/config.ts");
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function N() {
				return s.a.createElement("div", {
					className: y.a.header
				}, s.a.createElement("img", {
					className: y.a.headerImage,
					src: `${v.a.assetPath}/img/mtm-snoo.png`
				}), s.a.createElement("div", null, s.a.createElement("p", {
					className: y.a.headerText1
				}, k._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), s.a.createElement("p", {
					className: y.a.headerText2
				}, k._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var O = n("./src/reddit/actions/toaster.ts"),
				T = n("./src/reddit/components/GeoForm/GeoForm.tsx"),
				w = n("./src/reddit/components/SubredditIcon/index.tsx"),
				j = n("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				P = n("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				I = async (e, t) => Object(l.a)(e, {
					...P,
					variables: Object(j.b)(t)
				}), G = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const L = "crowdsource",
				M = {
					pageType: "crowdsource_feed_geo"
				},
				F = {
					pageType: "geo_entry"
				},
				B = e => () => ({
					source: L,
					noun: "skip",
					action: "click",
					subreddit: Object(G.a)(e),
					userSubreddit: Object(G.g)(e.modPermissions, e.isSubscribed),
					actionInfo: M
				}),
				R = e => () => ({
					source: L,
					noun: "location_field",
					action: "click",
					subreddit: Object(G.a)(e),
					userSubreddit: Object(G.g)(e.modPermissions, e.isSubscribed),
					actionInfo: F
				}),
				A = J("select_location"),
				H = J("confirm_location"),
				D = J("undo_location"),
				W = U("verify_location"),
				K = U("reject_location");

			function J(e) {
				return (t, n) => () => ({
					source: L,
					noun: e,
					action: "click",
					subreddit: Object(G.a)(t),
					userSubreddit: Object(G.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...F,
						reason: n
					}
				})
			}

			function U(e) {
				return (t, n) => () => ({
					source: L,
					noun: e,
					action: "click",
					subreddit: Object(G.a)(t),
					userSubreddit: Object(G.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...M,
						reason: n
					}
				})
			}
			var z = n("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				Q = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function q(e) {
				const t = Object(b.B)(X) || [];
				t.push(e), Object(b.Fb)(X, t)
			}

			function Y(e) {
				const {
					subreddit: t,
					onClose: n
				} = e, i = Object(h.a)(), o = Object(r.d)(), [d, c] = Object(a.useState)(void 0), [l, u] = Object(a.useState)(!1), [m, b] = Object(a.useState)(!1), {
					isClosed: p,
					close: S
				} = function() {
					const [e, t] = Object(a.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), x = Object(g.a)();

				function _() {
					o(Object(O.f)({
						kind: Q.b.SuccessMod,
						text: V._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : s.a.createElement("div", {
					className: y.a.subredditGeotag
				}, s.a.createElement("div", {
					className: y.a.subredditTitle
				}, s.a.createElement(w.b, {
					className: y.a.icon,
					subredditOrProfile: Object(G.a)(t),
					linkTo: t.path
				}), s.a.createElement(f.a, {
					to: t.path
				}, s.a.createElement("div", {
					className: y.a.title
				}, t.prefixedName)), s.a.createElement("button", {
					className: y.a.dismiss,
					onClick: function() {
						q(t.id), x(B(t)), S(), n(t.id)
					}
				}, s.a.createElement(z.a, null))), s.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? s.a.createElement("div", {
					className: y.a.questionContainer
				}, s.a.createElement("div", {
					className: y.a.question
				}, V._("Is this community specific to {place}?", [V._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), s.a.createElement(E.o, {
					className: y.a.rejectButton,
					onClick: function() {
						b(!0), x(K(t, t.geoPlace.id))
					}
				}, "No"), s.a.createElement(E.l, {
					className: y.a.verifyButton,
					onClick: function() {
						q(t.id), x(W(t, t.geoPlace.id)), S(), n(t.id), _()
					}
				}, "Yes")) : s.a.createElement(T.a, {
					disabled: l,
					onFocus: () => x(R(t)),
					onPlace: function(e) {
						d && !e && x(D(t, d.id)), c(e), e && x(A(t, e.id))
					},
					onSubmit: async function(e) {
						let {
							place: a,
							sessionId: s
						} = e;
						if (!a) return;
						u(!0);
						const r = await I(i(), {
							subredditId: t.id,
							placeId: a.id,
							source: a.source,
							sessionId: s
						});
						if (u(!1), !r.ok) return o(Object(O.f)({
							kind: Q.b.Error,
							text: V._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						x(H(t, a.id)), S(), n(t.id), _()
					}
				}))
			}
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = "geotagging-dismissed";

			function $() {
				const {
					error: e,
					loading: t,
					subreddits: n
				} = function() {
					const [e, t] = Object(a.useState)(!1), [n, s] = Object(a.useState)(!0), [r, i] = Object(a.useState)([]), o = Object(h.a)();
					return Object(a.useEffect)(() => {
						m(o()).then(e => {
							const t = e.body;
							s(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const n = Object(b.B)(X) || [];
							i((t.data.geoContributableSubreddits || []).filter(e => !n.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [o]), {
						error: e,
						loading: n,
						subreddits: r
					}
				}(), [r, o] = Object(a.useState)(0);

				function d(e) {
					o(r + 1)
				}
				return e ? s.a.createElement("div", null, s.a.createElement(N, null), Z._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? s.a.createElement(s.a.Fragment, null, s.a.createElement(N, null), s.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), s.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), s.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), s.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				}), s.a.createElement(i.a, {
					isLoading: !0,
					className: y.a.subredditGeotag
				})) : r >= n.length ? s.a.createElement(C, null) : s.a.createElement(s.a.Fragment, null, s.a.createElement(N, null), n.map(e => s.a.createElement(Y, {
					key: e.id,
					subreddit: e,
					onClose: d
				})))
			}

			function ee(e) {
				const t = Object(r.e)(e => {
						var t, n;
						const a = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.topics) || void 0 === n ? void 0 : n.models;
						if (!a) return;
						const s = Object.keys(a).find(e => "coronavirus" === a[e].slug);
						return a[s]
					}),
					n = Object(g.a)();
				return Object(a.useEffect)(() => {
					n(Object(p.d)())
				}, []), s.a.createElement(o.a, null, s.a.createElement(S.a, {
					className: y.a.Container,
					content: s.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, s.a.createElement(d.a, {
						key: "right",
						className: y.a.SidebarRight,
						listingName: "geotagging"
					}, t && s.a.createElement(c.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.a26b692cf4397dc852ef.js.map