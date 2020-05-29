// https://www.redditstatic.com/desktop2x/Geotagging.36ebc1b7c737a2456427.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Geotagging"], {
		"./node_modules/p-debounce/index.js": function(e, t, s) {
			"use strict";
			const n = (e, t, s = {}) => {
				if (!Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
				let n, a, r = [];
				return function(...i) {
					return new Promise(o => {
						const c = s.leading && !a;
						clearTimeout(a), a = setTimeout(() => {
							a = null;
							const t = s.leading ? n : e.apply(this, i);
							for (o of r) o(t);
							r = []
						}, t), c ? (n = e.apply(this, i), o(n)) : r.push(o)
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
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				d = s.n(c);
			t.a = e => a.a.createElement("div", {
				className: Object(r.a)(d.a.container, e.className)
			}, a.a.createElement("div", {
				className: d.a.userInfo
			}, a.a.createElement(i.b, {
				className: Object(r.a)(d.a.subreddtiIcon, Object(o.a)(e))
			}), a.a.createElement("div", {
				className: d.a.titleContainer
			}, a.a.createElement("div", {
				className: Object(r.a)(d.a.title, Object(o.b)(e))
			}), a.a.createElement("div", {
				className: Object(r.a)(d.a.subtitle, Object(o.b)(e))
			}))), a.a.createElement("div", {
				className: d.a.descriptionContainer
			}, a.a.createElement("div", {
				className: Object(r.a)(d.a.description, Object(o.b)(e))
			}), a.a.createElement("div", {
				className: Object(r.a)(d.a.description, Object(o.b)(e))
			})), a.a.createElement("div", {
				className: Object(r.a)(d.a.button, Object(o.b)(e))
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
				r = s.n(a);
			t.a = n.a.div("container", r.a)
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
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = r.a.a("Link", d.a), m = Object(o.t)({
				isFrontpage: o.y
			});
			t.a = m(e => a.a.createElement(i.a, {
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
				href: "http://redditgifts.com/"
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
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/lodash/throttle.js"),
				r = s.n(a),
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
				}, o.a.createElement(d.f, {
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

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (s[n[a]] = e[n[a]])
				}
				return s
			};
			const _ = c.e[1] + 24,
				w = p.f + 8 + 152 + 32 + 16,
				j = w + _ + 8,
				k = x.a.div("Container", y.a),
				O = x.a.wrapped(e => {
					var {
						className: t
					} = e, s = S(e, ["className"]);
					return o.a.createElement(b, E({
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
						isSticky: a
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(s, {
							[y.a.StickyStyles]: a
						})
					}, t)
				};
			class v extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > w
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
					}, c.E), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							children: t,
							className: s,
							hideFooter: n
						}
					} = this, a = this.state.isAdSticky && !(!e && !t);
					return o.a.createElement(k, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(C, {
						isSticky: a
					}, e, t, !n && o.a.createElement(h.a, null)), !this.props.hideBackToTop && o.a.createElement(O, null))
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
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
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
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const S = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(E.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(E.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = S(e);
					return Object(x.f)(t)
				},
				j = e => {
					const t = _(e);
					return Object(x.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(k);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = Object(u.t)(), N = Object(r.b)(() => Object(i.c)({
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
					return e.backgroundColor = S(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, b = s ? O.a.widgetContentOnly : O.a.widgetContent, h = !n && this.props.styles, p = h ? this.getWidgetBackgroundStyles() : {}, g = h ? this.getWidgetHeaderStyles() : {};
					return a.a.createElement("div", {
						className: Object(o.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: n,
							[O.a.clickable]: !!i,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: p
					}, c && a.a.createElement("div", {
						className: O.a.widgetHeader,
						style: g
					}, a.a.createElement("div", {
						className: Object(o.a)(O.a.widgetTitle, l)
					}, a.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), a.a.createElement("div", {
						className: Object(o.a)(b, {
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
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(a);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				o = e => Object(n.a)(r.a.loadingBar, i(e))
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
		"./src/reddit/hooks/useTracking.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
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
				locationIcon: "_2ZUJtTqGkG8FaNcEC0pfn8",
				geoInput: "_3zQkXs2WfDY8-znSSSKZWY",
				autocompleteInput: "_1666yNn15AzdrLv807K16r",
				autocompleteDropdown: "vRck9east4I1o4KzJEKVb",
				highlight: "_14XBghDsBYUxmnH0Bup7QV",
				submitButton: "_3SpSQIYv5V3BmZN4ZOZcST"
			}
		},
		"./src/reddit/pages/Geotagging/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "GEOTAGGING_DISMISSED", (function() {
				return ue
			})), s.d(t, "Geotagging", (function() {
				return me
			})), s.d(t, "default", (function() {
				return be
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
					return Object.assign({}, t, {
						body: {
							data: {
								geoContributableSubreddits: s.edges.map(e => e.node)
							}
						}
					})
				}, b = s("./src/reddit/helpers/localStorage/index.ts"), h = s("./src/reddit/helpers/trackers/screenview.ts"), p = s("./src/reddit/contexts/ApiContext.tsx");

			function g() {
				const {
					gqlContext: e
				} = Object(n.useContext)(p.a);
				return e
			}
			var f = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/layout/page/Listing/index.tsx"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/pages/Geotagging/index.m.less"),
				_ = s.n(S);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function j() {
				return a.a.createElement("div", {
					className: _.a.done
				}, a.a.createElement("p", {
					className: _.a.headerText1
				}, w._("Done and done!", null, {
					hk: "1RzJEG"
				})), a.a.createElement("p", {
					className: _.a.headerText2
				}, w._("Thanks for all your help. Your contributions have helped make Reddit a better place.", null, {
					hk: "1xzgiX"
				})), a.a.createElement(x.a, {
					to: "/"
				}, a.a.createElement(E.f, null, "Go Home")))
			}
			var k = s("./src/config.ts");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function C() {
				return a.a.createElement("div", {
					className: _.a.header
				}, a.a.createElement("img", {
					className: _.a.headerImage,
					src: "".concat(k.a.assetPath, "/img/mtm-snoo.png")
				}), a.a.createElement("div", null, a.a.createElement("p", {
					className: _.a.headerText1
				}, O._("Okay, lets do this", null, {
					hk: "1AIkwG"
				})), a.a.createElement("p", {
					className: _.a.headerText2
				}, O._("Thank you for your help. Add a location to the communities below, and we will do the rest.", null, {
					hk: "fVUF3"
				}))))
			}
			var v = s("./node_modules/uuid/v4.js"),
				N = s.n(v),
				T = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/components/SubredditIcon/index.tsx"),
				I = s("./src/graphql/operations/SuggestSubredditGeoPlace.json"),
				R = async (e, t) => Object(l.a)(e, Object.assign({}, I, {
					variables: t
				})), B = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const F = "crowdsource",
				G = {
					pageType: "crowdsource_feed_geo"
				},
				L = {
					pageType: "geo_entry"
				},
				H = e => () => ({
					source: F,
					noun: "skip",
					action: "click",
					subreddit: Object(B.a)(e),
					userSubreddit: Object(B.f)(e.modPermissions, e.isSubscribed),
					actionInfo: G
				}),
				q = e => () => ({
					source: F,
					noun: "location_field",
					action: "click",
					subreddit: Object(B.a)(e),
					userSubreddit: Object(B.f)(e.modPermissions, e.isSubscribed),
					actionInfo: L
				}),
				A = J("select_location"),
				D = J("confirm_location"),
				V = J("undo_location"),
				M = z("verify_location"),
				W = z("reject_location");

			function J(e) {
				return (t, s) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(B.a)(t),
					userSubreddit: Object(B.f)(t.modPermissions, t.isSubscribed),
					actionInfo: Object.assign({}, L, {
						reason: s
					})
				})
			}

			function z(e) {
				return (t, s) => () => ({
					source: F,
					noun: e,
					action: "click",
					subreddit: Object(B.a)(t),
					userSubreddit: Object(B.f)(t.modPermissions, t.isSubscribed),
					actionInfo: Object.assign({}, G, {
						reason: s
					})
				})
			}
			var K = e => {
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
				U = s("./src/reddit/models/Toast/index.ts"),
				Q = s("./node_modules/fbt/lib/FbtPublic.js"),
				Z = s("./node_modules/p-debounce/index.js"),
				X = s.n(Z),
				Y = s("./src/lib/classNames/index.ts"),
				$ = s("./src/reddit/constants/keycodes.ts"),
				ee = s("./src/lib/sentry/index.ts"),
				te = s("./src/graphql/operations/GeoPlaceAutocomplete.json");
			const se = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(l.a)(e, Object.assign({}, te, {
							variables: t
						}))
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (a) {
					return ee.c.captureException(a), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var ne = s("./src/reddit/hooks/useOnClickOutside.ts"),
				ae = e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 13 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
					fill: "inherit",
					fillRule: "evenodd",
					transform: "translate(-4 -2)"
				}));

			function re(e) {
				const {
					value: t,
					setValue: s,
					setPlaceId: r,
					disabled: i,
					onFocus: o,
					sessionId: c
				} = e, d = g(), l = function(e, t) {
					const [s, a] = Object(n.useState)([]), r = Object(n.useMemo)(() => X()(t, 300), [t]);
					return Object(n.useEffect)(() => {
						e && r(e).then(e => {
							a(e)
						}).catch(() => a([]))
					}, [e]), s
				}(t, se(d, c)), {
					highlightValue: u,
					selectedIndex: m,
					onKeyDown: b,
					isClosed: h,
					setClosed: p
				} = function(e, t, s) {
					const [a, r] = Object(n.useState)(-1), [i, o] = Object(n.useState)(!!e.length), [c, d] = Object(n.useState)(void 0);
					return {
						highlightValue: c,
						selectedIndex: a,
						onKeyDown: n => {
							if (n.key === $.b.ArrowDown) {
								const t = Math.min(a + 1, e.length - 1);
								r(t), d(e[t])
							} else if (n.key === $.b.ArrowUp) {
								const t = Math.max(a - 1, -1);
								r(t), d(e[t])
							} else n.key === $.b.Enter && a > -1 ? (r(-1), t(e[a].name), s(e[a].id), o(!0), n.preventDefault()) : n.key === $.b.Escape ? (r(-1), o(!0)) : d(void 0)
						},
						isClosed: i,
						setClosed: o
					}
				}(l, s, r), f = "location-input-".concat(c);
				return a.a.createElement("div", {
					className: _.a.autocompleteInput
				}, a.a.createElement("label", {
					className: _.a.geoLabel,
					htmlFor: f
				}, a.a.createElement(ae, {
					className: _.a.locationIcon
				})), a.a.createElement("input", {
					className: _.a.geoInput,
					name: f,
					disabled: i,
					onKeyDown: b,
					value: u && u.name || t,
					placeholder: Q.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), r(""), p(!1)
					},
					onFocus: o
				}), l.length && !h ? a.a.createElement(ie, {
					id: c,
					items: l.map(e => e.name),
					selectedIndex: m,
					selectValue: e => {
						s(l[e].name), r(l[e].id), p(!0)
					},
					onClickOutside: () => p(!0)
				}) : null)
			}

			function ie(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: r,
					onClickOutside: i
				} = e;
				return Object(ne.a)("autocomplete-dropdown-".concat(t), i), a.a.createElement("ul", {
					className: _.a.autocompleteDropdown,
					id: "autocomplete-dropdown-".concat(t)
				}, s.map((e, t) => a.a.createElement("li", {
					key: "".concat(e).concat(t),
					onClick: () => r(t),
					className: Object(Y.a)({
						[_.a.highlight]: t === n
					})
				}, e)))
			}
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function ce(e) {
				const t = Object(b.n)(ue) || [];
				t.push(e), Object(b.P)(ue, t)
			}

			function de(e) {
				const {
					subreddit: t,
					onClose: s
				} = e, i = g(), o = Object(r.c)(), [c, d] = Object(n.useState)(""), [l, u] = Object(n.useState)(""), [m, b] = Object(n.useState)(!1), [h, p] = Object(n.useState)(!1), [y] = Object(n.useState)(() => N()()), {
					isClosed: S,
					close: w
				} = function() {
					const [e, t] = Object(n.useState)(!1);
					return {
						isClosed: e,
						close: () => {
							t(!0)
						}
					}
				}(), j = Object(f.a)();

				function k() {
					o(Object(T.e)({
						kind: U.b.SuccessMod,
						text: oe._("Nice work!", null, {
							hk: "2Wu6gX"
						})
					}))
				}
				return S || !t ? null : a.a.createElement("div", {
					className: _.a.subredditGeotag
				}, a.a.createElement("div", {
					className: _.a.subredditTitle
				}, a.a.createElement(P.b, {
					className: _.a.icon,
					subredditOrProfile: Object(B.a)(t),
					linkTo: t.path
				}), a.a.createElement(x.a, {
					to: t.path
				}, a.a.createElement("div", {
					className: _.a.title
				}, t.prefixedName)), a.a.createElement("button", {
					className: _.a.dismiss,
					onClick: function() {
						ce(t.id), j(H(t)), w(), s(t.id)
					}
				}, a.a.createElement(K, null))), a.a.createElement("p", null, t.publicDescriptionText || t.title), t.geoPlace && !h ? a.a.createElement("div", {
					className: _.a.questionContainer
				}, a.a.createElement("div", {
					className: _.a.question
				}, oe._("Is this community specific to {place}?", [oe._param("place", t.geoPlace.name)], {
					hk: "bIGM4"
				})), a.a.createElement(E.i, {
					className: _.a.rejectButton,
					onClick: function() {
						p(!0), j(W(t, t.geoPlace.id))
					}
				}, "No"), a.a.createElement(E.f, {
					className: _.a.verifyButton,
					onClick: function() {
						ce(t.id), j(M(t, t.geoPlace.id)), w(), s(t.id), k()
					}
				}, "Yes")) : a.a.createElement("form", {
					className: _.a.geoForm,
					onSubmit: async function(e) {
						e.preventDefault(), b(!0);
						try {
							await async function(e, t, s, n) {
								return R(e(), {
									input: {
										subredditId: s,
										geoPlace: {
											id: t.id,
											sessionId: n,
											source: "GOOGLE_MAPS"
										}
									}
								})
							}(i, {
								name: c,
								id: l
							}, t.id, y)
						} catch (n) {
							return b(!1), o(Object(T.e)({
								kind: U.b.Error,
								text: oe._("Something went wrong", null, {
									hk: "2PnKbu"
								}),
								duration: 5e3
							}))
						}
						b(!1), j(D(t, l)), w(), s(t.id), k()
					}
				}, a.a.createElement(re, {
					value: c,
					sessionId: y,
					setValue: d,
					setPlaceId: function(e) {
						l && !e && j(V(t, l)), u(e), e && j(A(t, e))
					},
					disabled: m,
					onFocus: () => j(q(t))
				}), l && a.a.createElement(E.i, {
					className: _.a.submitButton,
					type: "submit",
					disabled: m
				}, oe._("Submit", null, {
					hk: "3kKxBt"
				}))))
			}
			const {
				fbt: le
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ue = "geotagging-dismissed";

			function me() {
				const {
					error: e,
					loading: t,
					subreddits: s
				} = function() {
					const [e, t] = Object(n.useState)(!1), [s, a] = Object(n.useState)(!0), [r, i] = Object(n.useState)([]), o = g();
					return Object(n.useEffect)(() => {
						m(o()).then(e => {
							const t = e.body;
							a(!1), t.data.geoContributableSubreddits.forEach(e => {
								"t5_2e9s3j" === e.id && (e.geoPlace = {
									name: "San Francisco, CA, USA",
									id: "ChIJIQBpAG2ahYAR_6128GcTUEo"
								})
							});
							const s = Object(b.n)(ue) || [];
							i((t.data.geoContributableSubreddits || []).filter(e => !s.includes(e.id)))
						}).catch(e => {
							console.error(e), t(!0)
						})
					}, [o]), {
						error: e,
						loading: s,
						subreddits: r
					}
				}(), [r, o] = Object(n.useState)(0);

				function c(e) {
					o(r + 1)
				}
				return e ? a.a.createElement("div", null, a.a.createElement(C, null), le._("Error loading subreddits", null, {
					hk: "4hQNVu"
				})) : t ? a.a.createElement(a.a.Fragment, null, a.a.createElement(C, null), a.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), a.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), a.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), a.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				}), a.a.createElement(i.a, {
					isLoading: !0,
					className: _.a.subredditGeotag
				})) : r >= s.length ? a.a.createElement(j, null) : a.a.createElement(a.a.Fragment, null, a.a.createElement(C, null), s.map(e => a.a.createElement(de, {
					key: e.id,
					subreddit: e,
					onClose: c
				})))
			}

			function be(e) {
				const t = Object(r.d)(e => {
						const t = e.topics.models,
							s = Object.keys(t).find(e => "coronavirus" === t[e].slug);
						return t[s]
					}),
					s = Object(f.a)();
				return Object(n.useEffect)(() => {
					s(Object(h.c)())
				}, []), a.a.createElement(o.a, null, a.a.createElement(y.a, {
					className: _.a.Container,
					content: a.a.createElement(me, null),
					fitPageToContent: !0,
					sidebars: [null, a.a.createElement(c.a, {
						key: "right",
						className: _.a.SidebarRight,
						listingName: "geotagging"
					}, t && a.a.createElement(d.a, {
						subredditIds: t.subredditIds,
						onSeeMoreCommunities: () => {},
						topicSlug: t.slug
					}))]
				}))
			}
		}
	}
]);
//# sourceMappingURL=Geotagging.36ebc1b7c737a2456427.js.map