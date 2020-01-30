// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd.055f12ec70f7122bf2f3.js
// Retrieved at 1/30/2020, 6:30:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd"], {
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let a;
			const n = new Map,
				r = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), a = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!r.get(t)) {
						r.set(t, s);
						const a = n.get(t);
						if (a) {
							a(e, s && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const o = (e, t) => {
					try {
						n.set(e, t), a && a.observe(e)
					} catch (s) {
						0
					}
				},
				c = e => {
					try {
						n.delete(e), a && a.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				l = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				x = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(d.t)(),
				O = Object(o.c)({
					isFakeSubreddit: d.y
				}),
				h = Object(r.b)(O),
				j = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return n.a.createElement("div", {
						className: Object(c.a)(e.className, y.a.emptyVerticalVotes)
					}, n.a.createElement(l.d, f({
						key: "u"
					}, t)), e.children, n.a.createElement(l.c, f({
						key: "d"
					}, t)))
				},
				E = () => n.a.createElement(j, null, n.a.createElement("div", {
					className: y.a.emptyScore,
					key: "s"
				}));
			t.b = v(h(e => n.a.createElement("div", {
				className: Object(c.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement(i.b, null, n.a.createElement(E, null)), n.a.createElement("div", {
				className: y.a.mainBody
			}, n.a.createElement("div", {
				className: y.a.thumbnailContainer
			}, n.a.createElement("div", {
				className: Object(c.a)(y.a.thumbnail, Object(m.b)(e))
			})), n.a.createElement("div", {
				className: y.a.content
			}, n.a.createElement("div", {
				key: "a"
			}, n.a.createElement("div", {
				key: "aa",
				className: Object(c.a)(y.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "ab",
				className: Object(c.a)(y.a.meta, Object(m.b)(e))
			})), n.a.createElement("div", {
				key: "f",
				className: y.a.flatlist
			}, n.a.createElement("div", {
				key: "fa",
				className: Object(c.a)(y.a.flatlistExpando, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fb",
				className: y.a.flatlistSeparator
			}), n.a.createElement("div", {
				key: "fc",
				className: Object(c.a)(y.a.flatListItemOne, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fd",
				className: Object(c.a)(y.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				x = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				y = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(d.t)(),
				O = Object(o.c)({
					isFakeSubreddit: d.y
				}),
				h = Object(r.b)(O),
				j = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return n.a.createElement("div", {
						className: y.a.emptyVotes
					}, n.a.createElement(l.d, f({
						key: "u"
					}, t)), n.a.createElement("div", {
						key: "s",
						className: y.a.emptyScore
					}), n.a.createElement(l.c, f({
						key: "d"
					}, t)))
				},
				E = e => n.a.createElement(i.a, {
					className: Object(m.a)(e)
				}),
				_ = e => n.a.createElement("div", {
					className: y.a.flatList
				}, n.a.createElement("div", {
					className: Object(c.a)(y.a.comments, Object(m.b)(e))
				}), n.a.createElement("div", {
					className: Object(c.a)(y.a.ellipsis, Object(m.b)(e))
				}));
			t.a = v(h(e => n.a.createElement("div", {
				className: Object(c.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: y.a.wrapper
			}, n.a.createElement(j, f({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: y.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(c.a)(y.a.expando, Object(m.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: y.a.subredditIconContainer
			}, n.a.createElement(E, {
				isLoading: !1
			})), n.a.createElement("div", {
				key: "e",
				className: y.a.topLine
			}, n.a.createElement("div", {
				key: "ea",
				className: Object(c.a)(y.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(c.a)(y.a.meta, Object(m.b)(e))
			})), n.a.createElement(_, f({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return y
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				p = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(p);
			const b = 40,
				x = Object(r.b)(() => Object(o.c)({
					isInAdLeftSidebarExperiment: m.a
				})),
				y = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(d.a)(e).button : e.isRemoved ? l.a.removed : e.isReported ? l.a.reported : "transparent",
				f = Object(i.a)(e => {
					const t = y(e),
						s = {
							width: "".concat(b, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return n.a.createElement("div", {
						className: Object(c.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = x(f)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/lodash/constant.js"),
				n = s.n(a),
				r = s("./node_modules/lodash/times.js"),
				o = s.n(r),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				x = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				y = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				f = s("./src/reddit/components/PostLeftRail/index.tsx"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				O = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				g = s.n(_),
				w = s("./src/reddit/components/LargePost/placeholder.m.less"),
				N = s.n(w);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			const P = Object(h.t)(),
				k = Object(d.c)({
					isFakeSubreddit: h.y
				}),
				C = Object(l.b)(k),
				I = e => {
					const t = {
						interactive: !1,
						voteState: E.a.notVoted
					};
					return i.a.createElement("div", {
						className: N.a.emptyVerticalVotes
					}, i.a.createElement(O.d, L({
						key: "u"
					}, t)), i.a.createElement("div", {
						className: N.a.emptyScore,
						key: "s"
					}), i.a.createElement(O.c, L({
						key: "d"
					}, t)))
				},
				M = e => {
					var {
						isLoading: t
					} = e, s = S(e, ["isLoading"]);
					return i.a.createElement(v.b, L({
						className: Object(j.a)({
							isLoading: t
						})
					}, s))
				};
			var V = P(C(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: a
				} = e, n = S(e, ["className", "dispatch", "pageLayer"]);
				return i.a.createElement("div", {
					className: Object(y.a)(g.a.baseLargeAndMediumPostStyles, t)
				}, i.a.createElement(f.b, {
					key: "a"
				}, i.a.createElement(I, n)), i.a.createElement("div", {
					className: N.a.content,
					key: "b"
				}, i.a.createElement("div", {
					className: N.a.topLine,
					key: "ba"
				}, n.isFakeSubreddit && i.a.createElement(M, {
					key: "baa",
					isLoading: !1
				}), i.a.createElement("div", {
					key: "bab",
					className: Object(y.a)(N.a.topMetaOne, Object(j.b)(n))
				}), i.a.createElement("div", {
					key: "bac",
					className: Object(y.a)(N.a.topMetaTwo, Object(j.b)(n))
				})), i.a.createElement("div", {
					key: "bb",
					className: Object(y.a)(N.a.title, Object(j.b)(n))
				})), i.a.createElement("div", {
					key: "c",
					className: Object(y.a)(N.a.media, Object(j.a)(n))
				}), i.a.createElement("div", {
					className: N.a.content,
					key: "d"
				}, i.a.createElement("div", {
					className: N.a.flatlist
				}, i.a.createElement("div", {
					className: Object(y.a)(N.a.flatlistItemOne, Object(j.b)(n))
				}), i.a.createElement("div", {
					className: Object(y.a)(N.a.flatListItemTwo, Object(j.b)(n))
				}))))
			}));
			const A = {
				[u.g.Large]: [V, 2],
				[u.g.Classic]: [b.b, 10],
				[u.g.Compact]: [x.a, 30]
			};

			function R(e) {
				return A[e]
			}
			const T = .1,
				D = Object(d.c)({
					loadingPostComponentForLayout: () => R
				}),
				Q = Object(l.b)(D);
			class U extends i.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= T;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && p.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: a,
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: c
					} = this.state, [l, d] = r(a), m = t || d, p = n()(i.a.createElement(l, {
						isLoading: s && c
					})), u = o()(m, p);
					return i.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, i.a.Children.toArray(u))
				}
			}
			t.a = Q(U)
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const o = Object(n.c)({
				language: r.S
			});

			function c(e) {
				return Object(a.b)(o)(e)
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/lodash/throttle.js"),
				n = s.n(a),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
				u = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(u);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(c.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(i.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(c.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(d.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(c.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = y(e, ["className"]);
				const a = Object(c.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected
				});
				return o.a.createElement(f, x({
					className: a
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(r);
			t.a = a.a.wrapped(n.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = s.n(o);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", c.a);
			t.a = i
		},
		"./src/reddit/selectors/experiments/adSidebar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: a.a
				});
				return !!t && !Object(a.Yb)(t)
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileCo~ae34fcbd.055f12ec70f7122bf2f3.js.map