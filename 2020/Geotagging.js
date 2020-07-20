// https://www.redditstatic.com/desktop2x/Geotagging.1bde2e375f783006da8c.js
// Retrieved at 7/20/2020, 11:00:14 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, s) {
			"use strict";
			const n = (e, t, s = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let n, a, o = [];
				return function(...r) {
					return new Promise(i => {
						const c = s.leading && !a;
						clearTimeout(a), a = setTimeout(() => {
							a = null;
							const t = s.leading ? n : e.apply(this, r);
							for (i of o) i(t);
							o = []
						}, t), c ? (n = e.apply(this, r), i(n)) : o.push(i)
					})
				}
			};
			e.exports = n, e.exports.default = n
		},
		"./src/graphql/operations/GeoContributableSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"38cfee4ab6a5"}')
		},
		"./src/graphql/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"d2920615716e"}')
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
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/uuid/v4.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx");
			var d = s("./node_modules/fbt/lib/FbtPublic.js"),
				l = s("./node_modules/p-debounce/index.js"),
				u = s.n(l),
				m = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/lib/sentry/index.ts"),
				p = s("./src/graphql/operations/GeoPlaceAutocomplete.json");
			const g = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(b.a)(e, Object.assign({}, p, {
							variables: t
						}))
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (a) {
					return h.c.captureException(a), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var f = s("./src/reddit/hooks/useGqlContext.ts"),
				y = s("./src/reddit/hooks/useOnClickOutside.ts"),
				x = e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 13 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
					fill: "inherit",
					fillRule: "evenodd",
					transform: "translate(-4 -2)"
				})),
				j = s("./src/reddit/components/GeoForm/index.m.less"),
				E = s.n(j);

			function _(e) {
				const {
					value: t,
					setValue: s,
					setPlaceId: o,
					disabled: r,
					onFocus: c,
					sessionId: l,
					className: b
				} = e, h = Object(f.a)(), [p, y] = Object(n.useState)(!1), j = function(e, t, s) {
					const [a, o] = Object(n.useState)([]), r = Object(n.useMemo)(() => u()(s, 300), [s]);
					return Object(n.useEffect)(() => {
						e && t && r(e).then(e => {
							o(e)
						}).catch(() => o([]))
					}, [e]), a
				}(t, p, g(h, l)), {
					highlightValue: _,
					selectedIndex: k,
					onKeyDown: w,
					isClosed: O,
					setClosed: C
				} = function(e, t, s) {
					const [a, o] = Object(n.useState)(-1), [r, i] = Object(n.useState)(!!e.length), [c, d] = Object(n.useState)(void 0);
					return {
						highlightValue: c,
						selectedIndex: a,
						onKeyDown: n => {
							if (n.key === m.b.ArrowDown) {
								const t = Math.min(a + 1, e.length - 1);
								o(t), d(e[t])
							} else if (n.key === m.b.ArrowUp) {
								const t = Math.max(a - 1, -1);
								o(t), d(e[t])
							} else n.key === m.b.Enter && a > -1 ? (o(-1), t(e[a].name), s(e[a].id), i(!0), n.preventDefault()) : n.key === m.b.Escape ? (o(-1), i(!0)) : d(void 0)
						},
						isClosed: r,
						setClosed: i
					}
				}(j, s, o), v = "location-input-".concat(l);
				return a.a.createElement("div", {
					className: E.a.autocompleteInput
				}, a.a.createElement("label", {
					className: E.a.geoLabel,
					htmlFor: v
				}, a.a.createElement(x, {
					className: E.a.locationIcon
				})), a.a.createElement("input", {
					className: Object(i.a)(E.a.geoInput, b),
					name: v,
					disabled: r,
					onKeyDown: w,
					value: _ && _.name || t,
					placeholder: d.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), o(""), C(!1)
					},
					onFocus: () => {
						y(!0), c()
					},
					onBlur: () => y(!1)
				}), j.length && !O ? a.a.createElement(S, {
					id: l,
					items: j.map(e => e.name),
					selectedIndex: k,
					selectValue: e => {
						s(j[e].name), o(j[e].id), C(!0)
					},
					onClickOutside: () => C(!0)
				}) : null)
			}

			function S(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: o,
					onClickOutside: r
				} = e;
				return Object(y.a)("autocomplete-dropdown-".concat(t), r), a.a.createElement("ul", {
					className: E.a.autocompleteDropdown,
					id: "autocomplete-dropdown-".concat(t)
				}, s.map((e, t) => a.a.createElement("li", {
					key: "".concat(e).concat(t),
					onClick: () => o(t),
					className: Object(i.a)({
						[E.a.highlight]: t === n
					})
				}, e)))
			}
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = () => {};

			function O(e) {
				const {
					className: t,
					initialValue: s,
					initialPlaceId: o,
					disabled: d = !1,
					onFocus: l = w,
					onPlace: u = w,
					onValue: m = w,
					inputClassName: b
				} = e, h = function() {
					const [e, t] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => t(!0), []), e
				}(), [p] = Object(n.useState)(() => r()()), [g, f] = Object(n.useState)(s || ""), [y, x] = Object(n.useState)(o || "");
				return h ? a.a.createElement("form", {
					className: Object(i.a)(E.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), y !== o && e.onSubmit({
							name: g,
							placeId: y,
							sessionId: p
						})
					}
				}, a.a.createElement(_, {
					className: b,
					value: g,
					sessionId: p,
					setValue: e => {
						f(e), m(e)
					},
					setPlaceId: e => {
						x(e), u(e)
					},
					disabled: d,
					onFocus: l
				}), y && y !== o && a.a.createElement(c.i, {
					className: E.a.submitButton,
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
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = s.n(c);
			t.a = e => a.a.createElement("div", {
				className: Object(o.a)(d.a.container, e.className)
			}, a.a.createElement("div", {
				className: d.a.userInfo
			}, a.a.createElement(r.b, {
				className: Object(o.a)(d.a.subreddtiIcon, Object(i.a)(e))
			}), a.a.createElement("div", {
				className: d.a.titleContainer
			}, a.a.createElement("div", {
				className: Object(o.a)(d.a.title, Object(i.b)(e))
			}), a.a.createElement("div", {
				className: Object(o.a)(d.a.subtitle, Object(i.b)(e))
			}))), a.a.createElement("div", {
				className: d.a.descriptionContainer
			}, a.a.createElement("div", {
				className: Object(o.a)(d.a.description, Object(i.b)(e))
			}), a.a.createElement("div", {
				className: Object(o.a)(d.a.description, Object(i.b)(e))
			})), a.a.createElement("div", {
				className: Object(o.a)(d.a.button, Object(i.b)(e))
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
				a = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(a);
			t.a = n.a.div("container", o.a)
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
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = o.a.a("Link", d.a), m = Object(i.t)({
				isFrontpage: i.y
			});
			t.a = m(e => a.a.createElement(r.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, a.a.createElement("div", {
				className: d.a.LinkContainer
			}, a.a.createElement("div", {
				className: d.a.Column
			}, a.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), a.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && a.a.createElement(a.a.Fragment, null, a.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), a.a.createElement("div", {
				className: d.a.Column
			}, a.a.createElement(u, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), a.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), a.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), a.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), a.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), a.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), a.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), a.a.createElement("div", {
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/lodash/throttle.js"),
				o = s.n(a),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var b = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				p = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = s.n(f),
				x = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const _ = c.e[1] + 24,
				S = p.f + 8 + 152 + 32 + 16,
				k = S + _ + 8,
				w = x.a.div("Container", y.a),
				O = x.a.wrapped(e => {
					var {
						className: t
					} = e, s = E(e, ["className"]);
					return i.a.createElement(b, j({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", y.a),
				C = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: a,
						isSticky: o
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(s, {
							[y.a.StickyStyles]: o && !a,
							[y.a.StickyStylesFakeOverlay]: !!a
						})
					}, t)
				};
			class v extends r.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
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
					}, this.handleResize = o()(() => {
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
							hideFooter: a
						}
					} = this, o = this.state.isAdSticky && !(!e && !s);
					return i.a.createElement(w, {
						className: n,
						innerRef: this.setWrapperRef
					}, i.a.createElement(C, {
						isFakeOverlay: t,
						isSticky: o
					}, e, s, !a && i.a.createElement(h.a, null)), !this.props.hideBackToTop && i.a.createElement(O, null))
				}
			}
			const N = Object(g.t)();
			t.a = N(v)
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
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(b.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, b.defaults);
			var p = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(j.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(j.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = E(e);
					return Object(x.f)(t)
				},
				k = e => {
					const t = _(e);
					return Object(x.f)(t)
				};
			var w = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(w);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = Object(u.t)(), N = Object(o.b)(() => Object(r.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(f.m)(e, {
							subredditId: s
						}),
						a = Object(y.S)(e);
					return n || a
				},
				nigtmode: y.S,
				subredditId: u.m,
				topPostVariant: g.d
			}));
			class T extends a.a.Component {
				constructor() {
					super(...arguments), this.contentRef = a.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
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
					return e.backgroundColor = E(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = S(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = k(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						onClick: r,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, b = s ? O.a.widgetContentOnly : O.a.widgetContent, h = !n && this.props.styles, p = h ? this.getWidgetBackgroundStyles() : {}, g = h ? this.getWidgetHeaderStyles() : {};
					return a.a.createElement("div", {
						className: Object(i.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: n,
							[O.a.clickable]: !!r,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: r,
						style: p
					}, c && a.a.createElement("div", {
						className: O.a.widgetHeader,
						style: g
					}, a.a.createElement("div", {
						className: Object(i.a)(O.a.widgetTitle, l)
					}, a.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), o), a.a.createElement("div", {
						className: Object(i.a)(b, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && a.a.createElement(m.n, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = v(N(Object(c.a)(Object(l.c)(T))))
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
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(a);
			const r = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(n.a)(o.a.loadingBar, r(e))
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(n.useContext)(a.a);
				return e
			}
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js");

			function a(e, t) {
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				return Y
			})), s.d(t, "default", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				i = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				c = s("./src/reddit/components/TopicSidebar/index.tsx"),
				d = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				u = s("./src/graphql/operations/GeoContributableSubreddits.json"),
				m = async e => {
					const t = await Object(l.a)(e, u),
						{
							geoContributableSubreddits: s
						} = t.body.data;
					return Object.assign({}, t, {
						body: {
							data: {
								geoContributableSubreddits: s.edges.map(e => e.node)
							}
						}
					})
				}, b = s("./src/reddit/helpers/localStorage/index.ts"), h = s("./src/reddit/helpers/trackers/screenview.ts"), p = s("./src/reddit/hooks/useGqlContext.ts"), g = s("./src/reddit/hooks/useTracking.ts"), f = s("./src/reddit/layout/page/Listing/index.tsx"), y = s("./node_modules/react-router-dom/esm/react-router-dom.js"), x = s("./src/reddit/controls/Button/index.tsx"), j = s("./src/reddit/pages/Geotagging/index.m.less"), E = s.n(j);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function S() {
				return a.a.createElement("div", {
					className: E.a.done
				}, a.a.createElement("p", {
					className: E.a.headerText1
				}, _._("Done and done!", null, {
					hk: "1RzJEG"
				})), a.a.createElement("p", {
					className: E.a.headerText2
				}, _._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), a.a.createElement(y.a, {
					to: "/"
				}, a.a.createElement(x.f, null, "Go Home")))
			}
			var k = s("./src/config.ts");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function O() {
				return a.a.createElement("div", {
					className: E.a.header
				}, a.a.createElement("img", {
					className: E.a.headerImage,
					src: "".concat(k.a.assetPath, "/img/mtm-snoo.png")
				}), a.a.createElement("div", null, a.a.createElement("p", {
					className: E.a.headerText1
				}, w._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), a.a.createElement("p", {
					className: E.a.headerText2
				}, w._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var C = s("./src/reddit/actions/toaster.ts"),
				v = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				N = s("./src/reddit/components/SubredditIcon/index.tsx"),
				T = s("./src/graphql/operations/SuggestSubredditGeoPlace.json"),
				P = async (e, t) => Object(l.a)(e, Object.assign({}, T, {
					variables: t
				})), I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const F = "crowdsource",
				G = {
					pageType: "crowdsource_feed_geo"
				},
				R = {
					pageType: "geo_entry"
				},
				B = e => () => ({
					source: F,
					noun: "skip",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.f)(e.modPermissions, e.isSubscribed),
					actionInfo: G
				}),
				L = e => () => ({
					source: F,
					noun: "location_field",
					action: "click",
					subreddit: Object(I.a)(e),
					userSubreddit: Object(I.f)(e.modPermissions, e.isSubscribed),
					actionInfo: R
				}),
				q = V("select_location"),
				H = V("confirm_location"),
				A = V("undo_location"),
				D = W("verify_location"),
				M = W("reject_location");

			function V(e) {
				return (t, s) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.f)(t.modPermissions, t.isSubscribed),
					actionInfo: Object.assign({}, R, {
						reason: s
					})
				})
			}

			function W(e) {
				return (t, s) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(I.a)(t),
					userSubreddit: Object(I.f)(t.modPermissions, t.isSubscribed),
					actionInfo: Object.assign({}, G, {
						reason: s
					})
				})
			}
			var J = e => {
					let {
						className: t
					} = e;
					return a.a.createElement("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						height: "20",
						width: "20",
						viewBox: "0 0 20 20"
					}, a.a.createElement("path", {
						d: "M11.41 10l4.29-4.29a1 1 0 0 0-1.41-1.41L10 8.59l-4.29-4.3a1 1 0 0 0-1.42 1.42L8.59 10l-4.3 4.29A1 1 0 1 0 5.7 15.7l4.3-4.29 4.29 4.29a1 1 0 0 0 1.41-1.41z",
						fill: "inherit"
					}))
				},
				U = s("./src/reddit/models/Toast/index.ts");
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function z(e) {
				const t = Object(b.o)(X) || [];
				t.push(e), Object(b.W)(X, t)
			}

			function K(e) {
				const {
					subreddit: t,
					onClose: s
				} = e, r = Object(p.a)(), i = Object(o.c)(), [c, d] = Object(n.useState)(""), [l, u] = Object(n.useState)(!1), [m, b] = Object(n.useState)(!1), {
					isClosed: h,
					close: f
				} = function() {
					const [e, t] = Object(n.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), j = Object(g.a)();

				function _() {
					i(Object(C.e)({
						kind: U.b.SuccessMod,
						text: Z._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return h || !t ? null : a.a.createElement("div", {
					className: E.a.subredditGeotag
				}, a.a.createElement("div", {
					className: E.a.subredditTitle
				}, a.a.createElement(N.b, {
					className: E.a.icon,
					subredditOrProfile: Object(I.a)(t),
					linkTo: t.path
				}), a.a.createElement(y.a, {
					to: t.path
				}, a.a.createElement("div", {
					className: E.a.title
				}, t.prefixedName)), a.a.createElement("button", {
					className: E.a.dismiss,
					onClick: function() {
						z(t.id), j(B(t)), f(), s(t.id)
					}
				}, a.a.createElement(J, null))), a.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !m ? a.a.createElement("div", {
					className: E.a.questionContainer
				}, a.a.createElement("div", {
					className: E.a.question
				}, Z._("Is this community specific to {place}?", [Z._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), a.a.createElement(x.i, {
					className: E.a.rejectButton,
					onClick: function() {
						b(!0), j(M(t, t.geoPlace.id))
					}
				}, "No"), a.a.createElement(x.f, {
					className: E.a.verifyButton,
					onClick: function() {
						z(t.id), j(D(t, t.geoPlace.id)), f(), s(t.id), _()
					}
				}, "Yes")) : a.a.createElement(v.a, {
					disabled: l,
					onFocus: () => j(L(t)),
					onPlace: function(e) {
						c && !e && j(A(t, c)), d(e), e && j(q(t, e))
					},
					onSubmit: async function(e) {
						let {
							placeId: n,
							sessionId: a
						} = e;
						if (!n) return;
						u(!0);
						const o = await P(r(), {
							input: {
								subredditId: t.id,
								geoPlace: {
									id: n,
									sessionId: a,
									source: "GOOGLE_MAPS"
								}
							}
						});
						if (u(!1), !o.ok) return i(Object(C.e)({
							kind: U.b.Error,
							text: Z._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						j(H(t, n)), f(), s(t.id), _()
					}
				}))
			}
			const {
				fbt: Q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = "geotagging-dismissed";

			function Y() {
				const {
					error: e,
					loading: t,
					subreddits: s
				} = function() {
					const [e, t] = Object(n.useState)(!1), [s, a] = Object(n.useState)(!0), [o, r] = Object(n.useState)([]), i = Object(p.a)();
					return Object(n.useEffect)(() => {
						m(i()).then(e => {
							const t = e.body;
							a(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const s = Object(b.o)(X) || [];
							r((t.data.geoContributableSubreddits || []).filter(e => !s.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [i]), {
						error: e,
						loading: s,
						subreddits: o
					}
				}(), [o, i] = Object(n.useState)(0);

				function c(e) {
					i(o + 1)
				}
				return e ? a.a.createElement("div", null, a.a.createElement(O, null), Q._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? a.a.createElement(a.a.Fragment, null, a.a.createElement(O, null), a.a.createElement(r.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), a.a.createElement(r.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), a.a.createElement(r.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), a.a.createElement(r.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				}), a.a.createElement(r.a, {
					isLoading: !0,
					className: E.a.subredditGeotag
				})) : o >= s.length ? a.a.createElement(S, null) : a.a.createElement(a.a.Fragment, null, a.a.createElement(O, null), s.map(e => a.a.createElement(K, {
					key: e.id,
					subreddit: e,
					onClose: c
				})))
			}

			function $(e) {
				const t = Object(o.d)(e => {
						const t = e.topics.models,
							s = Object.keys(t).find(e => "coronavirus" === t[e].slug);
						return t[s]
					}),
					s = Object(g.a)();
				return Object(n.useEffect)(() => {
					s(Object(h.c)())
				}, []), a.a.createElement(i.a, null, a.a.createElement(f.a, {
					className: E.a.Container,
					content: a.a.createElement(Y, null),
					fitPageToContent: !0,
					sidebars: [null, a.a.createElement(c.a, {
						key: "right",
						className: E.a.SidebarRight,
						listingName: "geotagging"
					}, t && a.a.createElement(d.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicUrl: t.url
					}))]
				}))
			}
		}
	}
]);
//# sourceMappingURL=Geotagging.1bde2e375f783006da8c.js.map