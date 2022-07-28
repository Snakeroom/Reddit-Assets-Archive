// https://www.redditstatic.com/desktop2x/Geotagging.6821cb5a98c6636dbf05.js
// Retrieved at 7/28/2022, 5:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, s) {
			"use strict";
			const n = (e, t, s = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let n, r, i = [];
				return function(...a) {
					return new Promise(o => {
						const d = s.leading && !r;
						clearTimeout(r), r = setTimeout(() => {
							r = null;
							const t = s.leading ? n : e.apply(this, a);
							for (o of i) o(t);
							i = []
						}, t), d ? (n = e.apply(this, a), o(n)) : i.push(o)
					})
				}
			};
			e.exports = n, e.exports.default = n
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/elementIds.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/components/BackToTop/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: n
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(t, c.a.container),
					style: n
				}, r.a.createElement(o.l, {
					className: c.a.button,
					onClick: () => u(s)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./node_modules/uuid/v4.js"),
				d = s.n(o),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/hooks/useMounted.ts"),
				m = s("./node_modules/p-debounce/index.js"),
				b = s.n(m),
				p = s("./src/lib/hooks/useOnClickOutside.ts"),
				g = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				f = s("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(n || (n = {}));
			const S = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(h.a)(e, {
							...f,
							variables: t
						})
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (r) {
					return x.c.captureException(r), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var _ = s("./src/reddit/hooks/useGqlContext.ts"),
				E = s("./src/reddit/icons/svgs/Location/index.tsx"),
				y = s("./src/reddit/components/GeoForm/index.m.less"),
				v = s.n(y);

			function O(e) {
				const {
					value: t,
					setValue: s,
					setPlace: n,
					disabled: o,
					onFocus: d,
					sessionId: l,
					className: u
				} = e, m = Object(_.a)(), [p, h] = Object(i.useState)(!1), x = function(e, t, s) {
					const [n, r] = Object(i.useState)([]), a = Object(i.useMemo)(() => b()(s, 300), [s]);
					return Object(i.useEffect)(() => {
						e && t && a(e).then(e => {
							r(e)
						}).catch(() => r([]))
					}, [e]), n
				}(t, p, S(m, l)), {
					highlightValue: f,
					selectedIndex: y,
					onKeyDown: O,
					isClosed: j,
					setClosed: k
				} = function(e, t, s) {
					const [n, r] = Object(i.useState)(-1), [a, o] = Object(i.useState)(!!e.length), [d, c] = Object(i.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: n,
						onKeyDown: i => {
							if (i.key === g.b.ArrowDown) {
								const t = Math.min(n + 1, e.length - 1);
								r(t), c(e[t])
							} else if (i.key === g.b.ArrowUp) {
								const t = Math.max(n - 1, -1);
								r(t), c(e[t])
							} else i.key === g.b.Enter && n > -1 ? (r(-1), t(e[n].name), s(e[n]), o(!0), i.preventDefault()) : i.key === g.b.Escape ? (r(-1), o(!0)) : c(void 0)
						},
						isClosed: a,
						setClosed: o
					}
				}(x, s, n), N = `location-input-${l}`;
				return a.a.createElement("div", {
					className: v.a.autocompleteInput
				}, a.a.createElement("label", {
					className: v.a.geoLabel,
					htmlFor: N
				}, a.a.createElement(E.a, {
					className: v.a.locationIcon
				})), a.a.createElement("input", {
					className: Object(c.a)(v.a.geoInput, u),
					name: N,
					disabled: o,
					onKeyDown: O,
					value: f && f.name || t,
					placeholder: r.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), n(void 0), k(!1)
					},
					onFocus: () => {
						h(!0), d()
					},
					onBlur: () => h(!1)
				}), x.length && !j ? a.a.createElement(C, {
					id: l,
					items: x.map(e => e.name),
					selectedIndex: y,
					selectValue: e => {
						s(x[e].name), n(x[e]), k(!0)
					},
					onClickOutside: () => k(!0)
				}) : null)
			}

			function C(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: r,
					onClickOutside: i
				} = e;
				return Object(p.a)(`autocomplete-dropdown-${t}`, i), a.a.createElement("ul", {
					className: v.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, s.map((e, t) => a.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => r(t),
					className: Object(c.a)({
						[v.a.highlight]: t === n
					})
				}, e)))
			}
			const j = () => {};

			function k(e) {
				const {
					className: t,
					initialValue: s,
					initialPlace: n,
					disabled: o = !1,
					onFocus: m = j,
					onPlace: b = j,
					onValue: p = j,
					inputClassName: g
				} = e, h = Object(u.a)(), [x] = Object(i.useState)(() => d()()), [f, S] = Object(i.useState)(s || ""), [_, E] = Object(i.useState)(n);
				return h ? a.a.createElement("form", {
					className: Object(c.a)(v.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == n ? void 0 : n.id) !== (null == _ ? void 0 : _.id) && e.onSubmit({
							name: f,
							place: _,
							sessionId: x
						})
					}
				}, a.a.createElement(O, {
					className: g,
					value: f,
					sessionId: x,
					setValue: e => {
						S(e), p(e)
					},
					setPlace: e => {
						E(e), b(e)
					},
					disabled: o,
					onFocus: m
				}), _ && _.id !== (null == n ? void 0 : n.id) && a.a.createElement(l.o, {
					className: v.a.submitButton,
					type: "submit",
					disabled: o
				}, r.fbt._("Submit", null, {
					hk: "4aU3dh"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				o = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = s.n(o);
			const c = e => r.a.createElement("div", {
				className: Object(i.a)(d.a.communityContainer, e.sidebar && d.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(i.a)(d.a.subreddtiIcon, Object(a.a)(e))
			}), r.a.createElement("div", {
				className: d.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(d.a.subredditInfo, e.sidebar && d.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(i.a)(d.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(i.a)(d.a.author, Object(a.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(i.a)(d.a.description, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(i.a)(d.a.buttonContainer, Object(a.a)(e))
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				i = s.n(r);
			t.a = n.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				p = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				h = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = s("./src/reddit/components/SidebarFooter/index.m.less"),
				f = s.n(x);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.a("Link", f.a), E = Object(a.c)({
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: p.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: h.a
			}), y = Object(i.b)(E), v = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			}), O = e => {
				let {
					reredditContent: t
				} = e;
				return r.a.createElement("div", {
					className: f.a.GreyRereddit
				}, t, r.a.createElement("div", {
					className: f.a.LinkContainer
				}, r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: f.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = v(y(Object(c.c)(e => {
				const t = Object(i.f)().getState(),
					s = Object(p.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Lc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Lc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Lc.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(O, {
						reredditContent: t
					})
				}
				if (!e.isFrontpage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(_, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: f.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: f.a.LinkContainer
				}, r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: f.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: f.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: f.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: f.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				p = s.n(b),
				g = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = d.e[1] + 24,
				f = u.f + 8,
				S = f + 152 + 16,
				_ = S + x + 8,
				E = g.a.div("Container", p.a),
				y = g.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return o.a.createElement(c.a, h({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?f:8}px)`
						}
					}, n))
				}, "BackToTop", p.a),
				v = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: i,
						shouldStickToBottom: a
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(s, {
							[p.a.BottomStickyStyles]: a,
							[p.a.StickyStyles]: !a && i && !r,
							[p.a.StickyStylesFakeOverlay]: !a && !!r
						})
					}, t)
				};
			class O extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
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
					}, this.handleResize = i()(() => {
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
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: i,
							pageLayer: a,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !n), m = this.state.isBottomSticky;
					return o.a.createElement(E, {
						className: r,
						innerRef: this.setWrapperRef
					}, o.a.createElement(v, {
						isFakeOverlay: s,
						isSticky: u,
						shouldStickToBottom: m
					}, t, n, d, !i && o.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(y, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const C = Object(m.u)();
			t.a = C(O)
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
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				b = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				h = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				S = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = s.n(S);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = u.a.div("BladeContainer", _.a), v = u.a.wrapped(g.a, "CloseIcon", _.a), O = u.a.div("LoadingTitleContainer", _.a), C = u.a.div("LoadingNavContainer", _.a), j = u.a.div("ShortLoadingNav", _.a), k = u.a.wrapped(p.a, "ThemedChevron", _.a), N = e => {
				let {
					...t
				} = e;
				return a.a.createElement(y, null, a.a.createElement(v, null), a.a.createElement(b.k, null, a.a.createElement(b.p, null, E._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), a.a.createElement(b.o, null, a.a.createElement(O, null, a.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingTitle, t.isLoading && _.a.loading)
				})), a.a.createElement(C, null, a.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement(j, null), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement(j, null), a.a.createElement(k, null)), a.a.createElement(C, null, a.a.createElement("div", {
					className: Object(l.a)(_.a.LoadingNav, t.isLoading && _.a.loading)
				}), a.a.createElement(k, null)))))
			}, T = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => a.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => a.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), P = Object(d.c)({
				isEditing: x.i,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: h.n
			});
			t.a = Object(o.b)(P)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(T, {
					subredditId: e.subredditId
				})) : a.a.createElement(i.Fragment, null, e.children)
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return a
			})), s.d(t, "p", (function() {
				return o
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "j", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = s.n(r);
			const a = n.a.section("FormPage", i.a),
				o = n.a.h1("HomePageTitle", i.a),
				d = n.a.button("HomePageBreadcrumb", i.a),
				c = n.a.div("HomePageGroup", i.a),
				l = n.a.h1("FormPageTitle", i.a),
				u = n.a.div("FormPageSection", i.a),
				m = n.a.div("FormGroup", i.a),
				b = n.a.h2("FormGroupTitle", i.a),
				p = n.a.div("FormElement", i.a),
				g = n.a.div("FormGroupDescription", i.a),
				h = n.a.div("FormItem", i.a),
				x = n.a.h3("FormElementTitle", i.a),
				f = n.a.div("FormElementDescription", i.a),
				S = n.a.div("FormElementError", i.a),
				_ = n.a.div("FormElementSubGroup", i.a),
				E = n.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./node_modules/react-redux/es/index.js"),
				g = s("./node_modules/reselect/es/index.js"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/index.tsx"),
				S = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				y = s("./src/reddit/helpers/widgets/index.tsx"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				j = s.n(C);
			const k = Object(g.c)({
				isLoggedIn: O.Q,
				subreddit: v.V,
				subredditAboutInfo: v.w
			});
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: n
						} = this.props;
						if (!s) return;
						const r = Object(y.c)(s, n);
						t(Object(u.n)(e, r))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? r.a.createElement("div", {
						className: Object(a.a)(j.a.Container, e)
					}, r.a.createElement(x.b, {
						className: j.a.Icon,
						subredditOrProfile: s
					}), r.a.createElement("div", {
						className: j.a.Text
					}, r.a.createElement(_.default, {
						className: j.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, r.a.createElement("div", {
						className: j.a.Name
					}, Object(E.c)(s.displayText || s.name)), r.a.createElement("div", {
						className: j.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(s.subscribers, "subscribers count", Object(h.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(f.a, {
						border: !1,
						className: Object(a.a)(j.a.SubscribeButton, {
							[j.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: S.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var T = Object(p.b)(k)(Object(c.c)(N)),
				P = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var w = e => {
					const {
						className: t
					} = e, s = Object(P.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(a.a)(j.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(a.a)(j.a.Icon, j.a.placeholder, s)
					}), r.a.createElement("div", {
						className: j.a.Text
					}, r.a.createElement("div", {
						className: j.a.Link
					}, r.a.createElement("div", {
						className: Object(a.a)(j.a.Name, j.a.placeholder, s)
					}), r.a.createElement("div", {
						className: Object(a.a)(j.a.Members, j.a.placeholder, s)
					}))), r.a.createElement("div", {
						className: j.a.SubscribeButton
					}))
				},
				L = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				I = s.n(L);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, R = Array.from({
				length: F
			}).map((e, t) => r.a.createElement(w, {
				className: I.a.Subreddit,
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
						topicUrl: s
					} = this.props, n = t.slice(0, F);
					return r.a.createElement(o.a, {
						className: Object(a.a)(I.a.Container, e)
					}, r.a.createElement("div", {
						className: I.a.Title
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, G._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: I.a.SubredditList
					}, n.length > 0 ? n.map(e => r.a.createElement(T, {
						className: I.a.Subreddit,
						discoveryUnit: B,
						key: e,
						subredditId: e
					})) : R), t.length > F && r.a.createElement(i.a, {
						to: s
					}, r.a.createElement(l.r, {
						className: I.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, G._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(c.c)(M)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				o = s("./src/reddit/components/TopicSidebar/index.m.less"),
				d = s.n(o);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return r.a.createElement(i.a, {
					className: s
				}, t, r.a.createElement(a.a, {
					className: d.a.StickyBottom
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				p = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(S.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(S.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = _(e);
					return Object(f.f)(t)
				},
				v = e => {
					const t = E(e);
					return Object(f.f)(t)
				};
			var O = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = s.n(O);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.u)(), N = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						n = t.redditStyle || Object(h.l)(e, {
							subredditId: s
						}),
						r = Object(x.db)(e);
					return n || r
				},
				nigtmode: x.db,
				subredditId: u.n,
				topPostVariant: g.d
			}));
			class T extends r.a.Component {
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: i,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, g = s ? C.a.widgetContentOnly : C.a.widgetContent, h = !n && this.props.styles, x = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: n,
							[C.a.clickable]: !!d,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: x
					}, u && r.a.createElement("div", {
						className: Object(o.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: a,
						style: f,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(o.a)(C.a.widgetTitle, b)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), i), r.a.createElement("div", {
						className: Object(o.a)(g, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(N(Object(d.a)(Object(l.c)(T))))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const i = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(n.a)(e, {
				...r,
				variables: i(t)
			})
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(r);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				o = e => Object(n.a)(i.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, i = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const o = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.vb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				d = (e, t) => s => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.I(s, e),
					subreddit: a.hb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.n(s)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...a.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => t(!0), []), e
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(o.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/pages/Geotagging/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/Geotagging/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "GEOTAGGING_DISMISSED", (function() {
				return Z
			})), s.d(t, "Geotagging", (function() {
				return $
			})), s.d(t, "default", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				o = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				d = s("./src/reddit/components/TopicSidebar/index.tsx"),
				c = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				u = s("./src/redditGQL/operations/GeoContributableSubreddits.json"),
				m = async e => {
					const t = await Object(l.a)(e, u),
						{
							geoContributableSubreddits: s
						} = t.body.data;
					return {
						...t,
						body: {
							data: {
								geoContributableSubreddits: s.edges.map(e => e.node)
							}
						}
					}
				}, b = s("./src/reddit/helpers/localStorage/index.ts"), p = s("./src/reddit/helpers/trackers/screenview.ts"), g = s("./src/reddit/hooks/useGqlContext.ts"), h = s("./src/reddit/hooks/useTracking.ts"), x = s("./src/reddit/layout/page/Listing/index.tsx"), f = s("./node_modules/react-router-dom/esm/react-router-dom.js"), S = s("./src/reddit/controls/Button/index.tsx"), _ = s("./src/reddit/pages/Geotagging/index.m.less"), E = s.n(_);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function v() {
				return r.a.createElement("div", {
					className: E.a.done
				}, r.a.createElement("p", {
					className: E.a.headerText1
				}, y._("Done and done!", null, {
					hk: "1RzJEG"
				})), r.a.createElement("p", {
					className: E.a.headerText2
				}, y._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), r.a.createElement(f.a, {
					to: "/"
				}, r.a.createElement(S.l, null, "Go Home")))
			}
			var O = s("./src/config.ts");
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function j() {
				return r.a.createElement("div", {
					className: E.a.header
				}, r.a.createElement("img", {
					className: E.a.headerImage,
					src: `${O.a.assetPath}/img/mtm-snoo.png`
				}), r.a.createElement("div", null, r.a.createElement("p", {
					className: E.a.headerText1
				}, C._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), r.a.createElement("p", {
					className: E.a.headerText2
				}, C._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var k = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				T = s("./src/reddit/components/SubredditIcon/index.tsx"),
				P = s("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				w = s("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				L = async (e, t) => Object(l.a)(e, {
					...w,
					variables: Object(P.b)(t)
				}), I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
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
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: F
				}),
				M = e => () => ({
					source: G,
					noun: "location_field",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.g)(e.modPermissions, e.isSubscribed),
					actionInfo: R
				}),
				A = Q("select_location"),
				W = Q("confirm_location"),
				H = Q("undo_location"),
				D = q("verify_location"),
				J = q("reject_location");

			function Q(e) {
				return (t, s) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...R,
						reason: s
					}
				})
			}

			function q(e) {
				return (t, s) => () => ({
					source: G,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...F,
						reason: s
					}
				})
			}
			var K = s("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				U = s("./src/reddit/models/Toast/index.ts");
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function z(e) {
				const t = Object(b.A)(Z) || [];
				t.push(e), Object(b.Eb)(Z, t)
			}

			function Y(e) {
				const {
					subreddit: t,
					onClose: s
				} = e, a = Object(g.a)(), o = Object(i.d)(), [d, c] = Object(n.useState)(void 0), [l, u] = Object(n.useState)(!1), [m, b] = Object(n.useState)(!1), {
					isClosed: p,
					close: x
				} = function() {
					const [e, t] = Object(n.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), _ = Object(h.a)();

				function y() {
					o(Object(k.f)({
						kind: U.b.SuccessMod,
						text: V._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : r.a.createElement("div", {
					className: E.a.subredditGeotag
				}, r.a.createElement("div", {
					className: E.a.subredditTitle
				}, r.a.createElement(T.b, {
					className: E.a.icon,
					subredditOrProfile: Object(I.a)(t),
					linkTo: t.path
				}), r.a.createElement(f.a, {
					to: t.path
				}, r.a.createElement("div", {
					className: E.a.title
				}, t.prefixedName)), r.a.createElement("button", {
					className: E.a.dismiss,
					onClick: function() {
						z(t.id), _(B(t)), x(), s(t.id)
					}
				}, r.a.createElement(K.a, null))), r.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? r.a.createElement("div", {
					className: E.a.questionContainer
				}, r.a.createElement("div", {
					className: E.a.question
				}, V._("Is this community specific to {place}?", [V._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), r.a.createElement(S.o, {
					className: E.a.rejectButton,
					onClick: function() {
						b(!0), _(J(t, t.geoPlace.id))
					}
				}, "No"), r.a.createElement(S.l, {
					className: E.a.verifyButton,
					onClick: function() {
						z(t.id), _(D(t, t.geoPlace.id)), x(), s(t.id), y()
					}
				}, "Yes")) : r.a.createElement(N.a, {
					disabled: l,
					onFocus: () => _(M(t)),
					onPlace: function(e) {
						d && !e && _(H(t, d.id)), c(e), e && _(A(t, e.id))
					},
					onSubmit: async function(e) {
						let {
							place: n,
							sessionId: r
						} = e;
						if (!n) return;
						u(!0);
						const i = await L(a(), {
							subredditId: t.id,
							placeId: n.id,
							source: n.source,
							sessionId: r
						});
						if (u(!1), !i.ok) return o(Object(k.f)({
							kind: U.b.Error,
							text: V._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						_(W(t, n.id)), x(), s(t.id), y()
					}
				}))
			}
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = "geotagging-dismissed";

			function $() {
				const {
					error: e,
					loading: t,
					subreddits: s
				} = function() {
					const [e, t] = Object(n.useState)(!1), [s, r] = Object(n.useState)(!0), [i, a] = Object(n.useState)([]), o = Object(g.a)();
					return Object(n.useEffect)(() => {
						m(o()).then(e => {
							const t = e.body;
							r(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const s = Object(b.A)(Z) || [];
							a((t.data.geoContributableSubreddits || []).filter(e => !s.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [o]), {
						error: e,
						loading: s,
						subreddits: i
					}
				}(), [i, o] = Object(n.useState)(0);

				function d(e) {
					o(i + 1)
				}
				return e ? r.a.createElement("div", null, r.a.createElement(j, null), X._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null), r.a.createElement(a.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				})) : i >= s.length ? r.a.createElement(v, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null), s.map(e => r.a.createElement(Y, {
					key: e.id,
					subreddit: e,
					onClose: d
				})))
			}

			function ee(e) {
				const t = Object(i.e)(e => {
						var t, s;
						const n = null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.topics) || void 0 === s ? void 0 : s.models;
						if (!n) return;
						const r = Object.keys(n).find(e => "coronavirus" === n[e].slug);
						return n[r]
					}),
					s = Object(h.a)();
				return Object(n.useEffect)(() => {
					s(Object(p.d)())
				}, []), r.a.createElement(o.a, null, r.a.createElement(x.a, {
					className: E.a.Container,
					content: r.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, r.a.createElement(d.a, {
						key: "right",
						className: E.a.SidebarRight,
						listingName: "geotagging"
					}, t && r.a.createElement(c.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicUrl: t.url
					}))]
				}))
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts"),
				o = s("./src/reddit/selectors/meta.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(o.h)(e) && Object(i.f)(e),
					experimentName: n.oc
				}), a.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(i.f)(e),
					experimentName: n.nc
				}), a.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.6821cb5a98c6636dbf05.js.map