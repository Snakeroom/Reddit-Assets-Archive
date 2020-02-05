// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~6436273f.1aa2ae113bcef2da186c.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~6436273f"], {
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let o;
			const n = new Map,
				r = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), o = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!r.get(t)) {
						r.set(t, s);
						const o = n.get(t);
						if (o) {
							o(e, s && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						n.set(e, t), o && o.observe(e)
					} catch (s) {
						0
					}
				},
				c = e => {
					try {
						n.delete(e), o && o.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				l = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				P = s.n(u),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(d.t)(),
				v = Object(a.c)({
					isFakeSubreddit: d.x
				}),
				f = Object(r.b)(v),
				y = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return n.a.createElement("div", {
						className: Object(c.a)(e.className, g.a.emptyVerticalVotes)
					}, n.a.createElement(l.d, h({
						key: "u"
					}, t)), e.children, n.a.createElement(l.c, h({
						key: "d"
					}, t)))
				},
				C = () => n.a.createElement(y, null, n.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = x(f(e => n.a.createElement("div", {
				className: Object(c.a)(e.className, P.a.classicPostStyles, P.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement(i.b, null, n.a.createElement(C, null)), n.a.createElement("div", {
				className: g.a.mainBody
			}, n.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, n.a.createElement("div", {
				className: Object(c.a)(g.a.thumbnail, Object(m.b)(e))
			})), n.a.createElement("div", {
				className: g.a.content
			}, n.a.createElement("div", {
				key: "a"
			}, n.a.createElement("div", {
				key: "aa",
				className: Object(c.a)(g.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "ab",
				className: Object(c.a)(g.a.meta, Object(m.b)(e))
			})), n.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, n.a.createElement("div", {
				key: "fa",
				className: Object(c.a)(g.a.flatlistExpando, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), n.a.createElement("div", {
				key: "fc",
				className: Object(c.a)(g.a.flatListItemOne, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "fd",
				className: Object(c.a)(g.a.flatListItemTwo, Object(m.b)(e))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				P = s.n(u),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(d.t)(),
				v = Object(a.c)({
					isFakeSubreddit: d.x
				}),
				f = Object(r.b)(v),
				y = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return n.a.createElement("div", {
						className: g.a.emptyVotes
					}, n.a.createElement(l.d, h({
						key: "u"
					}, t)), n.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), n.a.createElement(l.c, h({
						key: "d"
					}, t)))
				},
				C = e => n.a.createElement(i.a, {
					className: Object(m.a)(e)
				}),
				O = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(c.a)(g.a.comments, Object(m.b)(e))
				}), n.a.createElement("div", {
					className: Object(c.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = x(f(e => n.a.createElement("div", {
				className: Object(c.a)(e.className, P.a.compactPostStyles, P.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(y, h({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(c.a)(g.a.expando, Object(m.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, n.a.createElement(C, {
				isLoading: !1
			})), n.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, n.a.createElement("div", {
				key: "ea",
				className: Object(c.a)(g.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(c.a)(g.a.meta, Object(m.b)(e))
			})), n.a.createElement(O, h({
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
				return P
			})), s.d(t, "c", (function() {
				return g
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				p = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(p);
			const P = 40,
				b = Object(r.b)(() => Object(a.c)({
					isInAdLeftSidebarExperiment: m.a
				})),
				g = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(d.a)(e).button : e.isRemoved ? l.a.removed : e.isReported ? l.a.reported : "transparent",
				h = Object(i.a)(e => {
					const t = g(e),
						s = {
							width: "".concat(P, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return n.a.createElement("div", {
						className: Object(c.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = b(h)
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				a = s.n(r);
			t.a = o.a.wrapped(n.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/times.js"),
				a = s.n(r),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				h = s("./src/reddit/components/PostLeftRail/index.tsx"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				j = s.n(O),
				_ = s("./src/reddit/components/LargePost/placeholder.m.less"),
				E = s.n(_);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const N = Object(f.t)(),
				M = Object(d.c)({
					isFakeSubreddit: f.x
				}),
				S = Object(l.b)(M),
				k = e => {
					const t = {
						interactive: !1,
						voteState: C.a.notVoted
					};
					return i.a.createElement("div", {
						className: E.a.emptyVerticalVotes
					}, i.a.createElement(v.d, L({
						key: "u"
					}, t)), i.a.createElement("div", {
						className: E.a.emptyScore,
						key: "s"
					}), i.a.createElement(v.c, L({
						key: "d"
					}, t)))
				},
				R = e => {
					var {
						isLoading: t
					} = e, s = w(e, ["isLoading"]);
					return i.a.createElement(x.b, L({
						className: Object(y.a)({
							isLoading: t
						})
					}, s))
				};
			var A = N(S(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: o
				} = e, n = w(e, ["className", "dispatch", "pageLayer"]);
				return i.a.createElement("div", {
					className: Object(g.a)(j.a.baseLargeAndMediumPostStyles, t)
				}, i.a.createElement(h.b, {
					key: "a"
				}, i.a.createElement(k, n)), i.a.createElement("div", {
					className: E.a.content,
					key: "b"
				}, i.a.createElement("div", {
					className: E.a.topLine,
					key: "ba"
				}, n.isFakeSubreddit && i.a.createElement(R, {
					key: "baa",
					isLoading: !1
				}), i.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(E.a.topMetaOne, Object(y.b)(n))
				}), i.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(E.a.topMetaTwo, Object(y.b)(n))
				})), i.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(E.a.title, Object(y.b)(n))
				})), i.a.createElement("div", {
					key: "c",
					className: Object(g.a)(E.a.media, Object(y.a)(n))
				}), i.a.createElement("div", {
					className: E.a.content,
					key: "d"
				}, i.a.createElement("div", {
					className: E.a.flatlist
				}, i.a.createElement("div", {
					className: Object(g.a)(E.a.flatlistItemOne, Object(y.b)(n))
				}), i.a.createElement("div", {
					className: Object(g.a)(E.a.flatListItemTwo, Object(y.b)(n))
				}))))
			}));
			const I = {
				[u.g.Large]: [A, 2],
				[u.g.Classic]: [P.b, 10],
				[u.g.Compact]: [b.a, 30]
			};

			function V(e) {
				return I[e]
			}
			const F = .1,
				D = Object(d.c)({
					loadingPostComponentForLayout: () => V
				}),
				T = Object(l.b)(D);
			class B extends i.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= F;
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
						layout: o,
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: c
					} = this.state, [l, d] = r(o), m = t || d, p = n()(i.a.createElement(l, {
						isLoading: s && c
					})), u = a()(m, p);
					return i.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, i.a.Children.toArray(u))
				}
			}
			t.a = T(B)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/helpers/describeApiError/index.ts"),
				l = s("./src/reddit/components/PostList/index.m.less"),
				d = s.n(l);
			t.a = Object(a.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: n
				} = e;
				let a = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (a = Object(i.a)({
					apiError: n,
					language: t,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: d.a.somethingWrong
				}, r.a.createElement("div", {
					className: d.a.somethingWrongText
				}, a), s && r.a.createElement(c.f, {
					onClick: s
				}, o.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const a = Object(n.c)({
				language: r.P
			});

			function c(e) {
				return Object(o.b)(a)(e)
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/lodash/throttle.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
				u = s("./src/reddit/controls/Dropdown/row.m.less"),
				P = s.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			class h extends a.a.Component {
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
					}, s = Object(c.a)(P.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(i.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(c.a)(P.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(d.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(c.a)(P.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const o = Object(c.a)(P.a.row, t, {
					[P.a.mIsInteractive]: !s.noHover,
					[P.a.mIsSelected]: s.isSelected
				});
				return a.a.createElement(h, b({
					className: o
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
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(r);
			t.a = o.a.wrapped(n.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: r
				} = e;
				switch (t.type) {
					case n.D.AUTHORIZATION_ERROR:
						return s ? Object(o.a)(r, "error.type.notLoggedIn") : Object(o.a)(r, "error.type.notAuthorized");
					case n.D.VALIDATION_ERROR:
						return Object(o.a)(r, "error.type.validation");
					case n.D.NOT_FOUND_ERROR:
						return Object(o.a)(r, "error.type.notFound");
					case n.D.SERVER_ERROR:
						return Object(o.a)(r, "error.type.server");
					case n.D.LIKELY_UBLOCK_ERROR:
						return Object(o.a)(r, "error.type.blocked");
					default:
						return Object(o.a)(r, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return y
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/isUrl/index.ts"),
				c = s("./src/lib/logs/console.ts"),
				i = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/models/Media/index.ts");
			const d = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-BlankPost").then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~1993415f"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~ProfileCom~ea0c62ce"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~ProfileComments~Prof~567b6c5c"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936"), s.e("CollectionCommentsPage~CommentsPage~Poll~ProfileComments~ProfileOverview~ProfilePrivate~SearchResult~e716b036"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~1993415f"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~ProfileCom~ea0c62ce"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~ProfileComments~Prof~567b6c5c"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936"), s.e("CollectionCommentsPage~CommentsPage~Poll~ProfileComments~ProfileOverview~ProfilePrivate~SearchResult~e716b036"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~1993415f"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~ProfileCom~ea0c62ce"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~ProfileComments~Prof~567b6c5c"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936"), s.e("CollectionCommentsPage~CommentsPage~Poll~ProfileComments~ProfileOverview~ProfilePrivate~SearchResult~e716b036"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				P = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~1993415f"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~PostDraft~ProfileCom~ea0c62ce"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~PostCreation~ProfileComments~Prof~567b6c5c"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936"), s.e("Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[i.g.Large]: u,
					[i.g.Medium]: P,
					[i.g.Classic]: m,
					[i.g.Compact]: p
				},
				g = e => r.a.createElement(d, e),
				h = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				x = e => e.source && e.source.url && e.isSponsored && h.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === l.n.EMBED && !(l.b.has(e.media.provider) || x(e)),
				f = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case i.g.Medium:
							return 188;
						case i.g.Classic:
							return 96;
						case i.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function y(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: o,
					post: n
				} = e;
				if (n.isBlank) return g;
				const r = !n.media && !!n.source && Object(a.a)(n.source.url),
					l = t && r;
				o === i.g.Large && v(n) && !l && (o = i.g.Medium);
				const d = b[o];
				return void 0 === d ? (Object(c.a)(void 0, "Could not find component for layout ".concat(o, ".")), g) : s && n.isSponsored && o === i.g.Large ? P : d
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = s.n(a);
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
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.a
				});
				return !!t && !Object(o.Sb)(t)
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~P~6436273f.1aa2ae113bcef2da186c.js.map