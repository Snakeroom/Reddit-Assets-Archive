// https://www.redditstatic.com/desktop2x/Geotagging.4011a143c0e2be9efe71.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, s) {
			"use strict";
			const n = (e, t, s = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let n, r, a = [];
				return function(...i) {
					return new Promise(o => {
						const c = s.leading && !r;
						clearTimeout(r), r = setTimeout(() => {
							r = null;
							const t = s.leading ? n : e.apply(this, i);
							for (o of a) o(t);
							a = []
						}, t), c ? (n = e.apply(this, i), o(n)) : a.push(o)
					})
				}
			};
			e.exports = n, e.exports.default = n
		},
		"./src/graphql/operations/GeoContributableSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"9f61c6bd8f6d"}')
		},
		"./src/graphql/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"8a89fd7c7db1"}')
		},
		"./src/graphql/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/graphql/operations/SuggestSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"aea8f624d4b7"}')
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/uuid/v4.js"),
				i = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx");
			var d, l = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./node_modules/p-debounce/index.js"),
				m = s.n(u),
				b = s("./src/reddit/constants/keycodes.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/lib/sentry/index.ts"),
				g = s("./src/graphql/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(d || (d = {}));
			const f = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(p.a)(e, {
							...g,
							variables: t
						})
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (r) {
					return h.c.captureException(r), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var x = s("./src/reddit/hooks/useGqlContext.ts"),
				_ = s("./src/reddit/hooks/useOnClickOutside.ts"),
				E = s("./src/reddit/icons/svgs/Location/index.tsx"),
				S = s("./src/reddit/components/GeoForm/index.m.less"),
				y = s.n(S);

			function v(e) {
				const {
					value: t,
					setValue: s,
					setPlace: a,
					disabled: i,
					onFocus: c,
					sessionId: d,
					className: u
				} = e, p = Object(x.a)(), [h, g] = Object(n.useState)(!1), _ = function(e, t, s) {
					const [r, a] = Object(n.useState)([]), i = Object(n.useMemo)(() => m()(s, 300), [s]);
					return Object(n.useEffect)(() => {
						e && t && i(e).then(e => {
							a(e)
						}).catch(() => a([]))
					}, [e]), r
				}(t, h, f(p, d)), {
					highlightValue: S,
					selectedIndex: v,
					onKeyDown: k,
					isClosed: O,
					setClosed: C
				} = function(e, t, s) {
					const [r, a] = Object(n.useState)(-1), [i, o] = Object(n.useState)(!!e.length), [c, d] = Object(n.useState)(void 0);
					return {
						highlightValue: c,
						selectedIndex: r,
						onKeyDown: n => {
							if (n.key === b.b.ArrowDown) {
								const t = Math.min(r + 1, e.length - 1);
								a(t), d(e[t])
							} else if (n.key === b.b.ArrowUp) {
								const t = Math.max(r - 1, -1);
								a(t), d(e[t])
							} else n.key === b.b.Enter && r > -1 ? (a(-1), t(e[r].name), s(e[r]), o(!0), n.preventDefault()) : n.key === b.b.Escape ? (a(-1), o(!0)) : d(void 0)
						},
						isClosed: i,
						setClosed: o
					}
				}(_, s, a), N = `location-input-${d}`;
				return r.a.createElement("div", {
					className: y.a.autocompleteInput
				}, r.a.createElement("label", {
					className: y.a.geoLabel,
					htmlFor: N
				}, r.a.createElement(E.a, {
					className: y.a.locationIcon
				})), r.a.createElement("input", {
					className: Object(o.a)(y.a.geoInput, u),
					name: N,
					disabled: i,
					onKeyDown: k,
					value: S && S.name || t,
					placeholder: l.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), a(void 0), C(!1)
					},
					onFocus: () => {
						g(!0), c()
					},
					onBlur: () => g(!1)
				}), _.length && !O ? r.a.createElement(j, {
					id: d,
					items: _.map(e => e.name),
					selectedIndex: v,
					selectValue: e => {
						s(_[e].name), a(_[e]), C(!0)
					},
					onClickOutside: () => C(!0)
				}) : null)
			}

			function j(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: a,
					onClickOutside: i
				} = e;
				return Object(_.a)(`autocomplete-dropdown-${t}`, i), r.a.createElement("ul", {
					className: y.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, s.map((e, t) => r.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => a(t),
					className: Object(o.a)({
						[y.a.highlight]: t === n
					})
				}, e)))
			}
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = () => {};

			function C(e) {
				const {
					className: t,
					initialValue: s,
					initialPlace: a,
					disabled: d = !1,
					onFocus: l = O,
					onPlace: u = O,
					onValue: m = O,
					inputClassName: b
				} = e, p = function() {
					const [e, t] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => t(!0), []), e
				}(), [h] = Object(n.useState)(() => i()()), [g, f] = Object(n.useState)(s || ""), [x, _] = Object(n.useState)(a);
				return p ? r.a.createElement("form", {
					className: Object(o.a)(y.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == a ? void 0 : a.id) !== (null == x ? void 0 : x.id) && e.onSubmit({
							name: g,
							place: x,
							sessionId: h
						})
					}
				}, r.a.createElement(v, {
					className: b,
					value: g,
					sessionId: h,
					setValue: e => {
						f(e), m(e)
					},
					setPlace: e => {
						_(e), u(e)
					},
					disabled: d,
					onFocus: l
				}), x && x.id !== (null == a ? void 0 : a.id) && r.a.createElement(c.l, {
					className: y.a.submitButton,
					type: "submit",
					disabled: d
				}, k._("Submit", null, {
					hk: "3kKxBt"
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
				container: "_2ObyNmd6TiLgPGR5-1jj_R",
				userInfo: "_3_4sSzkdFVidwJjdKcy3N1",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				titleContainer: "_1PHQ-ZJkmjaCiPbk9dZtbl",
				title: "_11V3zVIqp59I7JvzWnky0w",
				subtitle: "_1udmVL2hhq7PSlgxTaeJw2",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				descriptionContainer: "_3zCQAIsCB1OIYQILnEJD61",
				button: "DEgV8HnF3Dr9R22X_SHUw"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(a.a)(d.a.container, e.className)
			}, r.a.createElement("div", {
				className: d.a.userInfo
			}, r.a.createElement(i.b, {
				className: Object(a.a)(d.a.subreddtiIcon, Object(o.a)(e))
			}), r.a.createElement("div", {
				className: d.a.titleContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(d.a.title, Object(o.b)(e))
			}), r.a.createElement("div", {
				className: Object(a.a)(d.a.subtitle, Object(o.b)(e))
			}))), r.a.createElement("div", {
				className: d.a.descriptionContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(d.a.description, Object(o.b)(e))
			}), r.a.createElement("div", {
				className: Object(a.a)(d.a.description, Object(o.b)(e))
			})), r.a.createElement("div", {
				className: Object(a.a)(d.a.button, Object(o.b)(e))
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
				a = s.n(r);
			t.a = n.a.div("container", a.a)
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = a.a.a("Link", d.a), m = Object(o.t)({
				isFrontpage: o.y
			});
			t.a = m(e => r.a.createElement(i.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: d.a.LinkContainer
			}, r.a.createElement("div", {
				className: d.a.Column
			}, r.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: d.a.Column
			}, r.a.createElement(u, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: d.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
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
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var b = e => o.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, o.a.createElement(d.i, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				p = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				x = s.n(f),
				_ = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = c.e[1] + 24,
				y = h.f + 8 + 152 + 32 + 16,
				v = y + S + 8,
				j = _.a.div("Container", x.a),
				k = _.a.wrapped(({
					className: e,
					...t
				}) => o.a.createElement(b, E({
					className: e,
					style: {
						top: "calc(100vh - 40px)"
					}
				}, t)), "BackToTop", x.a),
				O = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: r
				}) => o.a.createElement("div", {
					className: Object(n.a)(t, {
						[x.a.StickyStyles]: r && !s,
						[x.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class C extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > y
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
					}, c.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							className: n,
							hideFooter: r
						}
					} = this, a = this.state.isAdSticky && !(!e && !s);
					return o.a.createElement(j, {
						className: n,
						innerRef: this.setWrapperRef
					}, o.a.createElement(O, {
						isFakeOverlay: t,
						isSticky: a
					}, e, s, !r && o.a.createElement(p.a, null)), !this.props.hideBackToTop && o.a.createElement(k, null))
				}
			}
			const N = Object(g.t)();
			t.a = N(C)
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
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				b = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/userPrefs.ts"),
				_ = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = s.n(_);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = u.a.div("BladeContainer", E.a), v = u.a.wrapped(h.a, "CloseIcon", E.a), j = u.a.div("LoadingTitleContainer", E.a), k = u.a.div("LoadingNavContainer", E.a), O = u.a.div("ShortLoadingNav", E.a), C = u.a.wrapped(p.a, "ThemedChevron", E.a), N = ({
				...e
			}) => i.a.createElement(y, null, i.a.createElement(v, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, S._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), i.a.createElement(b.o, null, i.a.createElement(j, null, i.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingTitle, e.isLoading && E.a.loading)
			})), i.a.createElement(k, null, i.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), i.a.createElement(C, null)), i.a.createElement(k, null, i.a.createElement(O, null), i.a.createElement(C, null)), i.a.createElement(k, null, i.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), i.a.createElement(C, null)), i.a.createElement(k, null, i.a.createElement(O, null), i.a.createElement(C, null)), i.a.createElement(k, null, i.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), i.a.createElement(C, null))))), w = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: f.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: g.i
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(w, {
					subredditId: e.subredditId
				})) : i.a.createElement(a.Fragment, null, e.children)
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
				return i
			})), s.d(t, "p", (function() {
				return o
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
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
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "j", (function() {
				return S
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = s.n(r);
			const i = n.a.section("FormPage", a.a),
				o = n.a.h1("HomePageTitle", a.a),
				c = n.a.button("HomePageBreadcrumb", a.a),
				d = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				u = n.a.div("FormPageSection", a.a),
				m = n.a.div("FormGroup", a.a),
				b = n.a.h2("FormGroupTitle", a.a),
				p = n.a.div("FormElement", a.a),
				h = n.a.div("FormGroupDescription", a.a),
				g = n.a.div("FormItem", a.a),
				f = n.a.h3("FormElementTitle", a.a),
				x = n.a.div("FormElementDescription", a.a),
				_ = n.a.div("FormElementError", a.a),
				E = n.a.div("FormElementSubGroup", a.a),
				S = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = s.n(d),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.wrapped(({
					border: e,
					small: t,
					...s
				}) => e ? a.a.createElement(i.i, b({}, s, {
					className: Object(u.a)(s.className, {
						[l.a.isSmall]: t
					})
				})) : a.a.createElement(i.o, b({}, s, {
					className: Object(u.a)(s.className, {
						[l.a.isSmall]: t
					})
				})), "SubscribeInternalButton", l.a),
				h = ({
					border: e,
					small: t,
					...s
				}) => {
					return Object(o.a)() ? a.a.createElement(i.q, b({}, s, {
						priority: e ? i.b.Primary : i.b.Plain,
						className: Object(u.a)(s.className, l.a.is2020),
						size: t ? i.c.S : i.c.M
					})) : a.a.createElement(p, b({}, s, {
						border: e,
						small: t,
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: t
						})
					}))
				},
				g = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = m.a.wrapped(({
					border: e,
					small: t,
					buttonType: s,
					...n
				}) => {
					const r = g(s),
						o = Object(u.a)(n.className, {
							[l.a.isSmall]: t
						});
					return e ? a.a.createElement(i.l, b({}, n, {
						className: o
					}), r) : a.a.createElement(i.o, b({}, n, {
						className: o
					}), r)
				}, "UnsubscribeButton", l.a),
				x = ({
					buttonType: e,
					border: t,
					small: s,
					...n
				}) => {
					return Object(o.a)() ? a.a.createElement(i.q, b({}, n, {
						priority: t ? i.b.Secondary : i.b.Plain,
						className: Object(u.a)(n.className, l.a.is2020),
						size: s ? i.c.S : i.c.M,
						text: g(e)
					})) : a.a.createElement(f, b({}, n, {
						border: t,
						small: s,
						buttonType: e,
						className: Object(u.a)(n.className, {
							[l.a.isSmall]: s
						})
					}))
				};
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: s,
						small: n = !1
					} = this.props, r = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? a.a.createElement(x, b({}, r, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(h, b({}, r, {
						id: s
					}), this.props.children, Object(c.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => a[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.c)(a.a))
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
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				x = s("./src/reddit/components/SubscribeButton/index.tsx"),
				_ = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/helpers/name/index.ts"),
				y = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				O = s.n(k);
			const C = Object(h.c)({
				isLoggedIn: j.J,
				subreddit: v.S,
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
						const r = Object(y.i)(s, n);
						t(Object(u.u)(e, r))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? r.a.createElement("div", {
						className: Object(i.a)(O.a.Container, e)
					}, r.a.createElement(f.b, {
						className: O.a.Icon,
						subredditOrProfile: s
					}), r.a.createElement("div", {
						className: O.a.Text
					}, r.a.createElement(E.a, {
						className: O.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, r.a.createElement("div", {
						className: O.a.Name
					}, Object(S.c)(s.displayText || s.name)), r.a.createElement("div", {
						className: O.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(x.a, {
						border: !1,
						className: Object(i.a)(O.a.SubscribeButton, {
							[O.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: _.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var w = Object(p.b)(C)(Object(d.c)(N)),
				T = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var P = e => {
					const {
						className: t
					} = e, s = Object(T.b)({
						isLoading: !0
					});
					return r.a.createElement("div", {
						className: Object(i.a)(O.a.Container, t)
					}, r.a.createElement("div", {
						className: Object(i.a)(O.a.Icon, O.a.placeholder, s)
					}), r.a.createElement("div", {
						className: O.a.Text
					}, r.a.createElement("div", {
						className: O.a.Link
					}, r.a.createElement("div", {
						className: Object(i.a)(O.a.Name, O.a.placeholder, s)
					}), r.a.createElement("div", {
						className: Object(i.a)(O.a.Members, O.a.placeholder, s)
					}))), r.a.createElement("div", {
						className: O.a.SubscribeButton
					}))
				},
				I = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				L = s.n(I);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = 8, G = Array.from({
				length: B
			}).map((e, t) => r.a.createElement(P, {
				className: L.a.Subreddit,
				key: t
			})), R = {
				enabled: !0,
				id: "xd_103",
				layout: m.d.Large,
				surface: m.e.Topic,
				unitName: m.i,
				unitType: m.f.SubredditListing,
				url: ""
			};
			class M extends r.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.G)(R)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, n = t.slice(0, B);
					return r.a.createElement(o.a, {
						className: Object(i.a)(L.a.Container, e)
					}, r.a.createElement("div", {
						className: L.a.Title
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, F._("Top Communities", null, {
						hk: "46yzcK"
					}))), r.a.createElement("div", {
						className: L.a.SubredditList
					}, n.length > 0 ? n.map(e => r.a.createElement(w, {
						className: L.a.Subreddit,
						discoveryUnit: R,
						key: e,
						subredditId: e
					})) : G), t.length > B && r.a.createElement(a.a, {
						to: s
					}, r.a.createElement(l.o, {
						className: L.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, F._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(M)
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
				a = s("./src/reddit/components/SidebarContainer/index.tsx"),
				i = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				o = s("./src/reddit/components/TopicSidebar/index.m.less"),
				c = s.n(o);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return r.a.createElement(a.a, {
					className: s
				}, t, r.a.createElement(i.a, {
					className: c.a.StickyBottom
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				p = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
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
			var j = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(j);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.t)(), N = Object(a.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.U)(e);
					return n || r
				},
				nigtmode: f.U,
				subredditId: u.m,
				topPostVariant: h.d
			}));
			class w extends r.a.Component {
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
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: a,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, b = s ? k.a.widgetContentOnly : k.a.widgetContent, p = !n && this.props.styles, h = p ? this.getWidgetBackgroundStyles() : {}, g = p ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: h
					}, c && r.a.createElement("div", {
						className: k.a.widgetHeader,
						style: g
					}, r.a.createElement("div", {
						className: Object(o.a)(k.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), a), r.a.createElement("div", {
						className: Object(o.a)(b, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.o, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = C(N(Object(c.a)(Object(l.c)(w))))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: i.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/graphql/operations/SetSubredditGeoPlace.json");
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
			t.a = async (e, t) => Object(n.a)(e, {
				...r,
				variables: a(t)
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
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = s.n(r);
			const i = ({
					isLoading: e
				}) => Object(n.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				o = e => Object(n.a)(a.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			}));
			var n, r, a = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post"
			}(r || (r = {}));
			const o = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: a.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.post(s, e),
					subreddit: i.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.defaults(s)
				})
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/reddit/contexts/ApiContext.tsx");

			function a() {
				const {
					gqlContext: e
				} = Object(n.useContext)(r.a);
				return e
			}
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e, t) {
				const s = Object(n.useCallback)(s => {
					if (!t) return;
					const n = document.getElementById(e);
					n && (n.contains(s.target) || t(s))
				}, [e, t]);
				Object(n.useEffect)(() => {
					if (t) return document.body.addEventListener("click", s), () => {
						document.body.removeEventListener("click", s)
					}
				}, [t, s])
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = s.n(i);
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
		"./src/reddit/icons/svgs/HamburgerClose/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				height: "20",
				width: "20",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M11.41 10l4.29-4.29a1 1 0 0 0-1.41-1.41L10 8.59l-4.29-4.3a1 1 0 0 0-1.42 1.42L8.59 10l-4.3 4.29A1 1 0 1 0 5.7 15.7l4.3-4.29 4.29 4.29a1 1 0 0 0 1.41-1.41z",
				fill: "inherit"
			}))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				o = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				c = s("./src/reddit/components/TopicSidebar/index.tsx"),
				d = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				u = s("./src/graphql/operations/GeoContributableSubreddits.json"),
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
				}, b = s("./src/reddit/helpers/localStorage/index.ts"), p = s("./src/reddit/helpers/trackers/screenview.ts"), h = s("./src/reddit/hooks/useGqlContext.ts"), g = s("./src/reddit/hooks/useTracking.ts"), f = s("./src/reddit/layout/page/Listing/index.tsx"), x = s("./node_modules/react-router-dom/esm/react-router-dom.js"), _ = s("./src/reddit/controls/Button/index.tsx"), E = s("./src/reddit/pages/Geotagging/index.m.less"), S = s.n(E);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");

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
				}, r.a.createElement(_.i, null, "Go Home")))
			}
			var j = s("./src/config.ts");
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function O() {
				return r.a.createElement("div", {
					className: S.a.header
				}, r.a.createElement("img", {
					className: S.a.headerImage,
					src: `${j.a.assetPath}/img/mtm-snoo.png`
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
			var C = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				w = s("./src/reddit/components/SubredditIcon/index.tsx"),
				T = s("./src/graphql/operations/SuggestSubredditGeoPlace.json"),
				P = s("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				I = async (e, t) => Object(l.a)(e, {
					...T,
					variables: Object(P.b)(t)
				}), L = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const F = "crowdsource",
				B = {
					pageType: "crowdsource_feed_geo"
				},
				G = {
					pageType: "geo_entry"
				},
				R = e => () => ({
					source: F,
					noun: "skip",
					action: "click",
					subreddit: Object(L.a)(e),
					userSubreddit: Object(L.g)(e.modPermissions, e.isSubscribed),
					actionInfo: B
				}),
				M = e => () => ({
					source: F,
					noun: "location_field",
					action: "click",
					subreddit: Object(L.a)(e),
					userSubreddit: Object(L.g)(e.modPermissions, e.isSubscribed),
					actionInfo: G
				}),
				H = U("select_location"),
				A = U("confirm_location"),
				J = U("undo_location"),
				W = q("verify_location"),
				D = q("reject_location");

			function U(e) {
				return (t, s) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(L.a)(t),
					userSubreddit: Object(L.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...G,
						reason: s
					}
				})
			}

			function q(e) {
				return (t, s) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(L.a)(t),
					userSubreddit: Object(L.g)(t.modPermissions, t.isSubscribed),
					actionInfo: {
						...B,
						reason: s
					}
				})
			}
			var Q = s("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				z = s("./src/reddit/models/Toast/index.ts");
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Y(e) {
				const t = Object(b.q)(Z) || [];
				t.push(e), Object(b.hb)(Z, t)
			}

			function K(e) {
				const {
					subreddit: t,
					onClose: s
				} = e, i = Object(h.a)(), o = Object(a.d)(), [c, d] = Object(n.useState)(void 0), [l, u] = Object(n.useState)(!1), [m, b] = Object(n.useState)(!1), {
					isClosed: p,
					close: f
				} = function() {
					const [e, t] = Object(n.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), E = Object(g.a)();

				function y() {
					o(Object(C.e)({
						kind: z.b.SuccessMod,
						text: V._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return p || !t ? null : r.a.createElement("div", {
					className: S.a.subredditGeotag
				}, r.a.createElement("div", {
					className: S.a.subredditTitle
				}, r.a.createElement(w.b, {
					className: S.a.icon,
					subredditOrProfile: Object(L.a)(t),
					linkTo: t.path
				}), r.a.createElement(x.a, {
					to: t.path
				}, r.a.createElement("div", {
					className: S.a.title
				}, t.prefixedName)), r.a.createElement("button", {
					className: S.a.dismiss,
					onClick: function() {
						Y(t.id), E(R(t)), f(), s(t.id)
					}
				}, r.a.createElement(Q.a, null))), r.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? r.a.createElement("div", {
					className: S.a.questionContainer
				}, r.a.createElement("div", {
					className: S.a.question
				}, V._("Is this community specific to {place}?", [V._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), r.a.createElement(_.l, {
					className: S.a.rejectButton,
					onClick: function() {
						b(!0), E(D(t, t.geoPlace.id))
					}
				}, "No"), r.a.createElement(_.i, {
					className: S.a.verifyButton,
					onClick: function() {
						Y(t.id), E(W(t, t.geoPlace.id)), f(), s(t.id), y()
					}
				}, "Yes")) : r.a.createElement(N.a, {
					disabled: l,
					onFocus: () => E(M(t)),
					onPlace: function(e) {
						c && !e && E(J(t, c.id)), d(e), e && E(H(t, e.id))
					},
					onSubmit: async function({
						place: e,
						sessionId: n
					}) {
						if (!e) return;
						u(!0);
						const r = await I(i(), {
							subredditId: t.id,
							placeId: e.id,
							source: e.source,
							sessionId: n
						});
						if (u(!1), !r.ok) return o(Object(C.e)({
							kind: z.b.Error,
							text: V._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						E(A(t, e.id)), f(), s(t.id), y()
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
					const [e, t] = Object(n.useState)(!1), [s, r] = Object(n.useState)(!0), [a, i] = Object(n.useState)([]), o = Object(h.a)();
					return Object(n.useEffect)(() => {
						m(o()).then(e => {
							const t = e.body;
							r(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const s = Object(b.q)(Z) || [];
							i((t.data.geoContributableSubreddits || []).filter(e => !s.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [o]), {
						error: e,
						loading: s,
						subreddits: a
					}
				}(), [a, o] = Object(n.useState)(0);

				function c(e) {
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
				})) : a >= s.length ? r.a.createElement(v, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(O, null), s.map(e => r.a.createElement(K, {
					key: e.id,
					subreddit: e,
					onClose: c
				})))
			}

			function ee(e) {
				const t = Object(a.e)(e => {
						var t, s;
						const n = null === (s = null === (t = e.pages) || void 0 === t ? void 0 : t.topics) || void 0 === s ? void 0 : s.models;
						if (!n) return;
						const r = Object.keys(n).find(e => "coronavirus" === n[e].slug);
						return n[r]
					}),
					s = Object(g.a)();
				return Object(n.useEffect)(() => {
					s(Object(p.d)())
				}, []), r.a.createElement(o.a, null, r.a.createElement(f.a, {
					className: S.a.Container,
					content: r.a.createElement($, null),
					fitPageToContent: !0,
					sidebars: [null, r.a.createElement(c.a, {
						key: "right",
						className: S.a.SidebarRight,
						listingName: "geotagging"
					}, t && r.a.createElement(d.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicUrl: t.url
					}))]
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.4011a143c0e2be9efe71.js.map