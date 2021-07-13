// https://www.redditstatic.com/desktop2x/Geotagging.f53c3efb3d4d676b5732.js
// Retrieved at 7/13/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, s) {
			"use strict";
			const n = (e, t, s = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let n, r, i = [];
				return function(...a) {
					return new Promise(o => {
						const c = s.leading && !r;
						clearTimeout(r), r = setTimeout(() => {
							r = null;
							const t = s.leading ? n : e.apply(this, a);
							for (o of i) o(t);
							i = []
						}, t), c ? (n = e.apply(this, a), o(n)) : i.push(o)
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
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/uuid/v4.js"),
				a = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx");
			var d, l = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./node_modules/p-debounce/index.js"),
				m = s.n(u),
				b = s("./src/lib/hooks/useOnClickOutside.ts"),
				p = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				f = s("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(d || (d = {}));
			const x = (e, t) => async s => {
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
					return g.c.captureException(r), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var _ = s("./src/reddit/hooks/useGqlContext.ts"),
				E = s("./src/reddit/icons/svgs/Location/index.tsx"),
				S = s("./src/reddit/components/GeoForm/index.m.less"),
				y = s.n(S);

			function v(e) {
				const {
					value: t,
					setValue: s,
					setPlace: i,
					disabled: a,
					onFocus: c,
					sessionId: d,
					className: u
				} = e, b = Object(_.a)(), [h, g] = Object(n.useState)(!1), f = function(e, t, s) {
					const [r, i] = Object(n.useState)([]), a = Object(n.useMemo)(() => m()(s, 300), [s]);
					return Object(n.useEffect)(() => {
						e && t && a(e).then(e => {
							i(e)
						}).catch(() => i([]))
					}, [e]), r
				}(t, h, x(b, d)), {
					highlightValue: S,
					selectedIndex: v,
					onKeyDown: O,
					isClosed: j,
					setClosed: C
				} = function(e, t, s) {
					const [r, i] = Object(n.useState)(-1), [a, o] = Object(n.useState)(!!e.length), [c, d] = Object(n.useState)(void 0);
					return {
						highlightValue: c,
						selectedIndex: r,
						onKeyDown: n => {
							if (n.key === p.b.ArrowDown) {
								const t = Math.min(r + 1, e.length - 1);
								i(t), d(e[t])
							} else if (n.key === p.b.ArrowUp) {
								const t = Math.max(r - 1, -1);
								i(t), d(e[t])
							} else n.key === p.b.Enter && r > -1 ? (i(-1), t(e[r].name), s(e[r]), o(!0), n.preventDefault()) : n.key === p.b.Escape ? (i(-1), o(!0)) : d(void 0)
						},
						isClosed: a,
						setClosed: o
					}
				}(f, s, i), N = `location-input-${d}`;
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
					disabled: a,
					onKeyDown: O,
					value: S && S.name || t,
					placeholder: l.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), i(void 0), C(!1)
					},
					onFocus: () => {
						g(!0), c()
					},
					onBlur: () => g(!1)
				}), f.length && !j ? r.a.createElement(k, {
					id: d,
					items: f.map(e => e.name),
					selectedIndex: v,
					selectValue: e => {
						s(f[e].name), i(f[e]), C(!0)
					},
					onClickOutside: () => C(!0)
				}) : null)
			}

			function k(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: i,
					onClickOutside: a
				} = e;
				return Object(b.a)(`autocomplete-dropdown-${t}`, a), r.a.createElement("ul", {
					className: y.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, s.map((e, t) => r.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => i(t),
					className: Object(o.a)({
						[y.a.highlight]: t === n
					})
				}, e)))
			}
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = () => {};

			function C(e) {
				const {
					className: t,
					initialValue: s,
					initialPlace: i,
					disabled: d = !1,
					onFocus: l = j,
					onPlace: u = j,
					onValue: m = j,
					inputClassName: b
				} = e, p = function() {
					const [e, t] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => t(!0), []), e
				}(), [h] = Object(n.useState)(() => a()()), [g, f] = Object(n.useState)(s || ""), [x, _] = Object(n.useState)(i);
				return p ? r.a.createElement("form", {
					className: Object(o.a)(y.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == i ? void 0 : i.id) !== (null == x ? void 0 : x.id) && e.onSubmit({
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
				}), x && x.id !== (null == i ? void 0 : i.id) && r.a.createElement(c.l, {
					className: y.a.submitButton,
					type: "submit",
					disabled: d
				}, O._("Submit", null, {
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
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				o = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(o);
			const d = e => r.a.createElement("div", {
				className: Object(i.a)(c.a.container, e.className),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: c.a.userInfo
			}, r.a.createElement("div", {
				className: Object(i.a)(c.a.subreddtiIcon, Object(a.a)(e))
			}), r.a.createElement("div", {
				className: c.a.titleContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(c.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(i.a)(c.a.subtitle, Object(a.b)(e))
			}))), r.a.createElement("div", {
				className: c.a.descriptionContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(c.a.description, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(i.a)(c.a.description, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(i.a)(c.a.button, Object(a.b)(e))
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
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/components/SidebarFooter/index.m.less"),
				m = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = i.a.a("Link", m.a), h = Object(l.c)({
				isNavbarLikeMwebEnabled: d.a
			}), g = Object(a.b)(h), f = Object(c.t)({
				isFrontpage: c.y
			});
			t.a = f(g(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? r.a.createElement(o.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: m.a.LinkContainer
			}, r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(p, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, b._("User Agreement", null, {
				hk: "2RA6JL"
			})), r.a.createElement(p, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, b._("Privacy policy", null, {
				hk: "10K04G"
			}))), r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(p, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, b._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(p, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, b._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), r.a.createElement("div", {
				className: m.a.Copyright
			}, b._("© {year} Reddit, Inc. All rights reserved.", [b._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : r.a.createElement(o.a, {
				className: m.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: m.a.LinkContainer
			}, r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(p, {
				href: "https://www.reddithelp.com"
			}, b._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(p, {
				href: "https://www.reddit.com/coins"
			}, b._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(p, {
				href: "https://www.reddit.com/premium"
			}, b._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(p, {
				href: "https://redditgifts.com/"
			}, b._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(p, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, b._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(p, {
				href: "https://www.reddit.com/posts/2020/"
			}, b._("Rereddit", null, {
				hk: "1z3k7C"
			})), r.a.createElement(p, {
				href: "https://www.reddit.com/topics/a-1/"
			}, b._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: m.a.Column
			}, r.a.createElement(p, {
				href: "https://about.reddit.com"
			}, b._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(p, {
				href: "https://about.reddit.com/careers/"
			}, b._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(p, {
				href: "https://about.reddit.com/press/"
			}, b._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(p, {
				href: "https://www.redditinc.com/advertising"
			}, b._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(p, {
				href: "http://www.redditblog.com/"
			}, b._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(p, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, b._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(p, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, b._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(p, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, b._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(p, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, b._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: m.a.Copyright
			}, b._("Reddit Inc © {year} . All rights reserved", [b._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
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
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				if (e) {
					const e = document.getElementById(d.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = ({
					className: e,
					isOverlay: t,
					style: s
				}) => o.a.createElement("div", {
					className: Object(n.a)(e, m.a.container),
					style: s
				}, o.a.createElement(l.i, {
					className: m.a.button,
					onClick: () => p(t)
				}, b._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				g = s("./src/reddit/components/SidebarFooter/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				E = s.n(_),
				S = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = c.e[1] + 24,
				k = f.f + 8 + 152 + 16,
				O = k + v + 8,
				j = S.a.div("Container", E.a),
				C = S.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => o.a.createElement(h, y({
					className: e,
					isOverlay: t,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, s)), "BackToTop", E.a),
				N = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: r
				}) => o.a.createElement("div", {
					className: Object(n.a)(t, {
						[E.a.StickyStyles]: r && !s,
						[E.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class w extends a.Component {
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
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.I), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: i,
							pageLayer: a
						}
					} = this, c = this.state.isAdSticky && !(!t && !n);
					return o.a.createElement(j, {
						className: r,
						innerRef: this.setWrapperRef
					}, o.a.createElement(N, {
						isFakeOverlay: s,
						isSticky: c
					}, t, n, !i && o.a.createElement(g.a, null)), !this.props.hideBackToTop && o.a.createElement(C, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(x.t)();
			t.a = T(w)
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = u.a.div("BladeContainer", E.a), v = u.a.wrapped(h.a, "CloseIcon", E.a), k = u.a.div("LoadingTitleContainer", E.a), O = u.a.div("LoadingNavContainer", E.a), j = u.a.div("ShortLoadingNav", E.a), C = u.a.wrapped(p.a, "ThemedChevron", E.a), N = ({
				...e
			}) => a.a.createElement(y, null, a.a.createElement(v, null), a.a.createElement(b.k, null, a.a.createElement(b.p, null, S._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), a.a.createElement(b.o, null, a.a.createElement(k, null, a.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingTitle, e.isLoading && E.a.loading)
			})), a.a.createElement(O, null, a.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), a.a.createElement(C, null)), a.a.createElement(O, null, a.a.createElement(j, null), a.a.createElement(C, null)), a.a.createElement(O, null, a.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), a.a.createElement(C, null)), a.a.createElement(O, null, a.a.createElement(j, null), a.a.createElement(C, null)), a.a.createElement(O, null, a.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), a.a.createElement(C, null))))), w = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => a.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => a.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: f.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: g.l
			});
			t.a = Object(o.b)(T)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(w, {
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
				i = s.n(r);
			const a = n.a.section("FormPage", i.a),
				o = n.a.h1("HomePageTitle", i.a),
				c = n.a.button("HomePageBreadcrumb", i.a),
				d = n.a.div("HomePageGroup", i.a),
				l = n.a.h1("FormPageTitle", i.a),
				u = n.a.div("FormPageSection", i.a),
				m = n.a.div("FormGroup", i.a),
				b = n.a.h2("FormGroupTitle", i.a),
				p = n.a.div("FormElement", i.a),
				h = n.a.div("FormGroupDescription", i.a),
				g = n.a.div("FormItem", i.a),
				f = n.a.h3("FormElementTitle", i.a),
				x = n.a.div("FormElementDescription", i.a),
				_ = n.a.div("FormElementError", i.a),
				E = n.a.div("FormElementSubGroup", i.a),
				S = n.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...s
				}) => i.a.createElement(a.q, u({}, s, {
					priority: e ? a.b.Primary : a.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: t ? a.c.S : a.c.M
				})),
				b = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				p = ({
					buttonType: e,
					border: t,
					small: s,
					...n
				}) => i.a.createElement(a.q, u({}, n, {
					priority: t ? a.b.Secondary : a.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: s ? a.c.S : a.c.M,
					text: b(e)
				}));
			class h extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						small: n = !1,
						isFullWidth: r = !1
					} = this.props, a = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n,
						isFullWidth: r
					};
					return this.props.userIsSubscriber ? i.a.createElement(p, u({}, a, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(m, u({}, a, {
						id: s
					}), this.props.children, Object(o.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				i = {
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
				a = ({
					type: e,
					key: t
				}) => i[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.c)(i.a))
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
				k = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				j = s.n(O);
			const C = Object(h.c)({
				isLoggedIn: k.K,
				subreddit: v.S,
				subredditAboutInfo: v.u
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
						className: Object(a.a)(j.a.Container, e)
					}, r.a.createElement(f.b, {
						className: j.a.Icon,
						subredditOrProfile: s
					}), r.a.createElement("div", {
						className: j.a.Text
					}, r.a.createElement(E.a, {
						className: j.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, r.a.createElement("div", {
						className: j.a.Name
					}, Object(S.c)(s.displayText || s.name)), r.a.createElement("div", {
						className: j.a.Members
					}, b.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [b.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), r.a.createElement(x.a, {
						border: !1,
						className: Object(a.a)(j.a.SubscribeButton, {
							[j.a.hidden]: !t
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
						className: Object(a.a)(L.a.Container, e)
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
					})) : G), t.length > B && r.a.createElement(i.a, {
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
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				o = s("./src/reddit/components/TopicSidebar/index.m.less"),
				c = s.n(o);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return r.a.createElement(i.a, {
					className: s
				}, t, r.a.createElement(a.a, {
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(k);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.t)(), N = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.W)(e);
					return n || r
				},
				nigtmode: f.W,
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
						headerButton: i,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, b = s ? O.a.widgetContentOnly : O.a.widgetContent, p = !n && this.props.styles, h = p ? this.getWidgetBackgroundStyles() : {}, g = p ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: n,
							[O.a.clickable]: !!a,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: h
					}, c && r.a.createElement("div", {
						className: O.a.widgetHeader,
						style: g
					}, r.a.createElement("div", {
						className: Object(o.a)(O.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), i), r.a.createElement("div", {
						className: Object(o.a)(b, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.o, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
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
				i = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: a.eb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(i.d([t], !0)),
				onSubscriptionsRequested: () => e(i.e()),
				onUnsubscribe: () => e(i.d([t], !1))
			}))
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
			const a = ({
					isLoading: e
				}) => Object(n.a)(i.a.loadingBackground, {
					[i.a["m-loading"]]: e
				}),
				o = e => Object(n.a)(i.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
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
					widget: Object(a.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.defaults
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.post(s, e),
					subreddit: a.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.defaults(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.defaults(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: n.TOPIC,
					...a.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/reddit/contexts/ApiContext.tsx");

			function i() {
				const {
					gqlContext: e
				} = Object(n.useContext)(r.a);
				return e
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
				return X
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
				c = s("./src/reddit/components/TopicSidebar/index.tsx"),
				d = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
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
			var k = s("./src/config.ts");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function j() {
				return r.a.createElement("div", {
					className: S.a.header
				}, r.a.createElement("img", {
					className: S.a.headerImage,
					src: `${k.a.assetPath}/img/mtm-snoo.png`
				}), r.a.createElement("div", null, r.a.createElement("p", {
					className: S.a.headerText1
				}, O._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), r.a.createElement("p", {
					className: S.a.headerText2
				}, O._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var C = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				w = s("./src/reddit/components/SubredditIcon/index.tsx"),
				T = s("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				P = s("./src/redditGQL/operations/SuggestSubredditGeoPlace.json"),
				I = async (e, t) => Object(l.a)(e, {
					...P,
					variables: Object(T.b)(t)
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
				W = Q("select_location"),
				A = Q("confirm_location"),
				H = Q("undo_location"),
				D = U("verify_location"),
				J = U("reject_location");

			function Q(e) {
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

			function U(e) {
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
			var q = s("./src/reddit/icons/svgs/HamburgerClose/index.tsx"),
				K = s("./src/reddit/models/Toast/index.ts");
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Y(e) {
				const t = Object(b.y)(X) || [];
				t.push(e), Object(b.yb)(X, t)
			}

			function V(e) {
				const {
					subreddit: t,
					onClose: s
				} = e, a = Object(h.a)(), o = Object(i.d)(), [c, d] = Object(n.useState)(void 0), [l, u] = Object(n.useState)(!1), [m, b] = Object(n.useState)(!1), {
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
					o(Object(C.f)({
						kind: K.b.SuccessMod,
						text: z._("Nice work!", null, {
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
				}, r.a.createElement(q.a, null))), r.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? r.a.createElement("div", {
					className: S.a.questionContainer
				}, r.a.createElement("div", {
					className: S.a.question
				}, z._("Is this community specific to {place}?", [z._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), r.a.createElement(_.l, {
					className: S.a.rejectButton,
					onClick: function() {
						b(!0), E(J(t, t.geoPlace.id))
					}
				}, "No"), r.a.createElement(_.i, {
					className: S.a.verifyButton,
					onClick: function() {
						Y(t.id), E(D(t, t.geoPlace.id)), f(), s(t.id), y()
					}
				}, "Yes")) : r.a.createElement(N.a, {
					disabled: l,
					onFocus: () => E(M(t)),
					onPlace: function(e) {
						c && !e && E(H(t, c.id)), d(e), e && E(W(t, e.id))
					},
					onSubmit: async function({
						place: e,
						sessionId: n
					}) {
						if (!e) return;
						u(!0);
						const r = await I(a(), {
							subredditId: t.id,
							placeId: e.id,
							source: e.source,
							sessionId: n
						});
						if (u(!1), !r.ok) return o(Object(C.f)({
							kind: K.b.Error,
							text: z._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						E(A(t, e.id)), f(), s(t.id), y()
					}
				}))
			}
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = "geotagging-dismissed";

			function $() {
				const {
					error: e,
					loading: t,
					subreddits: s
				} = function() {
					const [e, t] = Object(n.useState)(!1), [s, r] = Object(n.useState)(!0), [i, a] = Object(n.useState)([]), o = Object(h.a)();
					return Object(n.useEffect)(() => {
						m(o()).then(e => {
							const t = e.body;
							r(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const s = Object(b.y)(X) || [];
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

				function c(e) {
					o(i + 1)
				}
				return e ? r.a.createElement("div", null, r.a.createElement(j, null), Z._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null), r.a.createElement(a.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				}), r.a.createElement(a.a, {
					isLoading: !0,
					className: S.a.subredditGeotag
				})) : i >= s.length ? r.a.createElement(v, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null), s.map(e => r.a.createElement(V, {
					key: e.id,
					subreddit: e,
					onClose: c
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
		},
		"./src/redditGQL/operations/GeoContributableSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"9f61c6bd8f6d"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Geotagging.f53c3efb3d4d676b5732.js.map