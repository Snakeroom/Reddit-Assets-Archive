// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e.700e38ca68a568bf8364.js
// Retrieved at 3/23/2020, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e"], {
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(h),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(b);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(l.t)(),
				E = Object(i.c)({
					isFakeSubreddit: l.x
				}),
				x = Object(r.b)(E),
				O = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return n.a.createElement("div", {
						className: g.a.emptyVotes
					}, n.a.createElement(d.d, y({
						key: "u"
					}, t)), n.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), n.a.createElement(d.c, y({
						key: "d"
					}, t)))
				},
				L = e => n.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				v = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(a.a)(g.a.comments, Object(m.b)(e))
				}), n.a.createElement("div", {
					className: Object(a.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = f(x(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, u.a.compactPostStyles, u.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(O, y({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(g.a.expando, Object(m.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, n.a.createElement(L, {
				isLoading: !1
			})), n.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, n.a.createElement("div", {
				key: "ea",
				className: Object(a.a)(g.a.title, Object(m.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(a.a)(g.a.meta, Object(m.b)(e))
			})), n.a.createElement(v, y({
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
				i = s.n(r);
			t.a = o.a.wrapped(n.a, "Component", i.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/times.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				E = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				P = s.n(v),
				S = s("./src/reddit/components/LargePost/placeholder.m.less"),
				j = s.n(S);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const k = Object(x.t)(),
				w = Object(l.c)({
					isFakeSubreddit: x.x
				}),
				I = Object(d.b)(w),
				R = e => {
					const t = {
						interactive: !1,
						voteState: L.a.notVoted
					};
					return c.a.createElement("div", {
						className: j.a.emptyVerticalVotes
					}, c.a.createElement(E.d, C({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: j.a.emptyScore,
						key: "s"
					}), c.a.createElement(E.c, C({
						key: "d"
					}, t)))
				},
				N = e => {
					var {
						isLoading: t
					} = e, s = _(e, ["isLoading"]);
					return c.a.createElement(f.b, C({
						className: Object(O.a)({
							isLoading: t
						})
					}, s))
				};
			var M = k(I(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: o
				} = e, n = _(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(g.a)(P.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(y.b, {
					key: "a"
				}, c.a.createElement(R, n)), c.a.createElement("div", {
					className: j.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: j.a.topLine,
					key: "ba"
				}, n.isFakeSubreddit && c.a.createElement(N, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(j.a.topMetaOne, Object(O.b)(n))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(j.a.topMetaTwo, Object(O.b)(n))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(j.a.title, Object(O.b)(n))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(g.a)(j.a.media, Object(O.a)(n))
				}), c.a.createElement("div", {
					className: j.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: j.a.flatlist
				}, c.a.createElement("div", {
					className: Object(g.a)(j.a.flatlistItemOne, Object(O.b)(n))
				}), c.a.createElement("div", {
					className: Object(g.a)(j.a.flatListItemTwo, Object(O.b)(n))
				}))))
			}));
			const V = {
				[h.g.Large]: [M, 2],
				[h.g.Classic]: [u.b, 10],
				[h.g.Compact]: [b.a, 30]
			};

			function T(e) {
				return V[e]
			}
			const A = .1,
				F = Object(l.c)({
					loadingPostComponentForLayout: () => T
				}),
				B = Object(d.b)(F);
			class U extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= A;
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
						visible: a
					} = this.state, [d, l] = r(o), m = t || l, p = n()(c.a.createElement(d, {
						isLoading: s && a
					})), h = i()(m, p);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(h))
				}
			}
			t.a = B(U)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(i.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: n
				} = e;
				let i = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return n && (i = Object(c.a)({
					apiError: n,
					language: t,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: l.a.somethingWrong
				}, r.a.createElement("div", {
					className: l.a.somethingWrongText
				}, i), s && r.a.createElement(a.f, {
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
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return q
			})), s.d(t, "a", (function() {
				return X
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				f = s("./src/reddit/components/PostList/LoadMore.tsx"),
				E = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				O = s("./src/reddit/components/Translated/index.tsx"),
				L = s("./src/reddit/constants/adEvents.ts"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				P = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/helpers/getClickInfo.ts"),
				C = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/helpers/brandSafety/index.ts"),
				I = s("./src/lib/LRUCache/index.ts"),
				R = s("./src/telemetry/index.ts"),
				N = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				V = s.n(M),
				T = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const A = 500,
				F = new I.a(A),
				B = new I.a(A),
				U = new I.a(A),
				K = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				D = b.a.div("SeeMore", V.a),
				W = b.a.wrapped(_.a, "ArrowRight", V.a),
				H = (e, t, s, o, n, r, i, a) => {
					const c = s ? "last-".concat(o, "-").concat(n) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(r);
					let l = F.get(d);
					return void 0 === l && (l = () => {
						s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
					}, F.set(d, l)), l
				},
				Q = (e, t, s, o) => {
					const n = "left-".concat(e, "-").concat(t);
					let r = B.get(n);
					return void 0 === r && (r = n => {
						s.trackOnPostExitedViewport(e, t, n, o)
					}, B.set(n, r)), r
				},
				q = (e, t) => {
					const s = "click-".concat(e);
					let o = U.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, L.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(j.a)(e)
						})
					}, U.set(s, o)), o
				},
				J = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class X extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new I.a(A), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: o
						} = this.props, n = t(), r = [];
						n.forEach(e => r.push(e.id));
						const i = r.map(e => s[e]).filter(Boolean),
							a = i.map(e => o[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(w.a)(i, a))
					}, h.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && R.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = R.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = R.c.end(this.timerId);
						setTimeout(() => Object(R.b)(h.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && R.c.cancel(this.timerId), e.postIds.length && (this.timerId = R.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (u.a.read(() => this.checkAndSendScreenview()), this.timerId && R.c.has(this.timerId)) {
						const e = R.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(R.b)(h.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && R.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return R.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = R.c.end(e);
					setTimeout(() => {
						s(t(o, N.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						o = T(t, ["postsById"]),
						{
							postsById: n
						} = e,
						r = T(e, ["postsById"]),
						i = Object.keys(o),
						a = Object.keys(r);
					if (a.length !== i.length) return !0;
					if (a.some(e => o[e] !== r[e])) return !0;
					if (s === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const i = 0 === r;
							return t({
								isFirstPost: i,
								layout: e,
								post: s[o]
							}) !== t({
								isFirstPost: i,
								layout: e,
								post: n[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						isCommentPermalink: r,
						isCommentsPage: i,
						isFrontpage: a,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: u,
						pageReferrer: b,
						postClickEvent: g,
						redditStyle: f
					} = this.props, E = 0 === t, x = s ? "last-index" : "", O = "post-".concat(o, "-").concat(e, "-").concat(t, "-").concat(x, "-").concat(p, "-").concat(m, "-").concat(b);
					let L;
					if (void 0 === (L = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: x,
							postsById: v
						} = this.props, S = v[e], j = S.crosspostRootId && v[S.crosspostRootId] ? v[S.crosspostRootId] : S;
						S.crosspostRootId && !v[S.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", h.q.API), e.setExtra("description", "Post ".concat(S.id, " is crosspost of ").concat(S.crosspostRootId, ", but ") + "".concat(S.crosspostRootId, " details are missing in the state")), y.c.captureMessage("Crosspost parent details are missing")
						});
						const _ = this.props.postComponentForLayout({
								isCrosspost: !!S.crosspostRootId,
								isFirstPost: E,
								layout: o,
								post: j
							}),
							w = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							I = H(e, o, s, m, p, b, this.props, t),
							R = Q(e, o, this.props, t),
							N = q(e, this.props),
							M = j.media && j.media.type === k.n.EMBED ? j.media.provider : null;
						L = {
							estHeight: Object(C.c)(S, o),
							id: e,
							isFocusable: !(!j.media || o !== P.g.Large) && (k.d.has(j.media.type) && (!M || !k.q.has(M)) && !j.isSpoiler && !j.isNSFW),
							trackOnEnteredViewport: I,
							trackOnExitedViewport: R,
							render: t => {
								let {
									className: o,
									height: h,
									width: b,
									remeasure: y,
									setScrollerChildRef: O,
									shouldLoadInitially: L
								} = t;
								return d.a.createElement(_, {
									className: o,
									currentProfileName: n,
									key: w,
									availableWidth: b,
									eventFactory: g,
									first: E,
									forceLoadMedia: L,
									inSubredditOrProfile: x,
									isCommentPermalink: r,
									isCommentsPage: i,
									isFrontpage: a,
									isProfilePostListing: c,
									isTopicPage: l,
									listingKey: m,
									listingName: p,
									pageLayer: u,
									last: s,
									onClickPost: N,
									onSizeChanged: y,
									postId: e,
									redditStyle: f,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: O
								})
							}
						}, this.scrollChildCache.set(O, L)
					}
					return L
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return d.a.createElement("div", {
						className: V.a.placeholder
					}, d.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && d.a.createElement(E.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: V.a.placeholder
					}, d.a.createElement(f.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: K[o]
					}), !!e && d.a.createElement(E.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: l,
						postIds: u,
						onLoadMore: b
					} = this.props;
					let g = u.map((e, t, s) => {
						const o = t === u.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (g = J(g, n));
					const y = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						f = a ? Object(o.e)(a) : null,
						E = f || r;
					return d.a.createElement(c.Fragment, null, d.a.createElement(x.b, {
						innerRef: this.updateScrollerRef,
						className: E ? V.a.truncatedPostList : Object(p.a)(V.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: y,
						viewportTopPadding: v.f
					}, g), f && d.a.createElement(D, {
						className: V.a.seeMoreButton
					}, d.a.createElement(S.a, {
						className: V.a.seeMorePostsText,
						to: Object(m.a)(f, {
							type: h.Mb.Posts
						})
					}, d.a.createElement(O.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(W, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			X.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: r
				} = e;
				switch (t.type) {
					case n.E.AUTHORIZATION_ERROR:
						return s ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.E.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.E.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.E.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.E.LIKELY_UBLOCK_ERROR:
						return o.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e.700e38ca68a568bf8364.js.map