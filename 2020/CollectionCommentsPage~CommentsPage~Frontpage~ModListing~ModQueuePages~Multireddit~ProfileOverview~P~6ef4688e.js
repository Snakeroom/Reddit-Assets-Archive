// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e.b633269bceb04599a6fb.js
// Retrieved at 6/1/2020, 1:10:05 PM by Reddit Dataminer v1.0.0
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
				p = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
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
						voteState: m.a.notVoted
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
				v = e => n.a.createElement(c.a, {
					className: Object(p.a)(e)
				}),
				L = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(a.a)(g.a.comments, Object(p.b)(e))
				}), n.a.createElement("div", {
					className: Object(a.a)(g.a.ellipsis, Object(p.b)(e))
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
				className: Object(a.a)(g.a.expando, Object(p.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, n.a.createElement(v, {
				isLoading: !1
			})), n.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, n.a.createElement("div", {
				key: "ea",
				className: Object(a.a)(g.a.title, Object(p.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(a.a)(g.a.meta, Object(p.b)(e))
			})), n.a.createElement(L, y({
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
				p = s("./src/lib/fastdom/index.ts"),
				m = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				E = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				P = s.n(L),
				C = s("./src/reddit/components/LargePost/placeholder.m.less"),
				S = s.n(C);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
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
						voteState: v.a.notVoted
					};
					return c.a.createElement("div", {
						className: S.a.emptyVerticalVotes
					}, c.a.createElement(E.d, _({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: S.a.emptyScore,
						key: "s"
					}), c.a.createElement(E.c, _({
						key: "d"
					}, t)))
				},
				N = e => {
					var {
						isLoading: t
					} = e, s = j(e, ["isLoading"]);
					return c.a.createElement(f.b, _({
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
				} = e, n = j(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(g.a)(P.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(y.b, {
					key: "a"
				}, c.a.createElement(R, n)), c.a.createElement("div", {
					className: S.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: S.a.topLine,
					key: "ba"
				}, n.isFakeSubreddit && c.a.createElement(N, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(S.a.topMetaOne, Object(O.b)(n))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(S.a.topMetaTwo, Object(O.b)(n))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(S.a.title, Object(O.b)(n))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(g.a)(S.a.media, Object(O.a)(n))
				}), c.a.createElement("div", {
					className: S.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: S.a.flatlist
				}, c.a.createElement("div", {
					className: Object(g.a)(S.a.flatlistItemOne, Object(O.b)(n))
				}), c.a.createElement("div", {
					className: Object(g.a)(S.a.flatListItemTwo, Object(O.b)(n))
				}))))
			}));
			const V = {
				[h.g.Large]: [M, 2],
				[h.g.Classic]: [u.b, 10],
				[h.g.Compact]: [b.a, 30]
			};

			function A(e) {
				return V[e]
			}
			const T = .1,
				F = Object(l.c)({
					loadingPostComponentForLayout: () => A
				}),
				B = Object(d.b)(F);
			class U extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && m.b(this.wrapperRef), e && m.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= T;
						p.a.write(() => {
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
					this.mounted = !1, this.wrapperRef && m.b(this.wrapperRef)
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
					} = this.state, [d, l] = r(o), p = t || l, m = n()(c.a.createElement(d, {
						isLoading: s && a
					})), h = i()(p, m);
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
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/helpers/describeApiError/index.ts"),
				c = s("./src/reddit/components/PostList/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: s
				} = e;
				let n = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return s && (n = Object(a.a)({
					apiError: s,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: d.a.somethingWrong
				}, r.a.createElement("div", {
					className: d.a.somethingWrongText
				}, n), t && r.a.createElement(i.f, {
					onClick: t
				}, o.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			}
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
				return Q
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/opener/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				E = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/constants/adEvents.ts"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				C = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/helpers/brandSafety/index.ts"),
				k = s("./src/lib/LRUCache/index.ts"),
				w = s("./src/telemetry/index.ts"),
				I = s("./src/telemetry/models/Timer.ts"),
				R = s("./src/reddit/components/PostList/index.m.less"),
				N = s.n(R),
				M = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = 500, T = new k.a(A), F = new k.a(A), B = new k.a(A), U = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, K = u.a.div("SeeMore", N.a), D = u.a.wrapped(S.a, "ArrowRight", N.a), W = (e, t, s, o, n, r, i, a) => {
				const c = s ? "last-".concat(o, "-").concat(n) : "",
					d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(r);
				let l = T.get(d);
				return void 0 === l && (l = () => {
					s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
				}, T.set(d, l)), l
			}, H = (e, t, s, o) => {
				const n = "left-".concat(e, "-").concat(t);
				let r = F.get(n);
				return void 0 === r && (r = n => {
					s.trackOnPostExitedViewport(e, t, n, o)
				}, F.set(n, r)), r
			}, Q = (e, t) => {
				const s = "click-".concat(e);
				let o = B.get(s);
				return void 0 === o && (o = (e, s) => {
					s.isSponsored && t.fireAdPixelsOfType(s, x.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(b.d)(s.source.outboundUrl, b.c.BLANK) : t.openPost({
						postOrComment: s,
						clickInfo: Object(P.a)(e)
					})
				}, B.set(s, o)), o
			}, q = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class J extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new k.a(A), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
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
						this.props.adBrandSafetyStatusReceived(Object(j.a)(i, a))
					}, m.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && w.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = w.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = w.c.end(this.timerId);
						setTimeout(() => Object(w.b)(m.k.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && w.c.cancel(this.timerId), e.postIds.length && (this.timerId = w.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && w.c.has(this.timerId)) {
						const e = w.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(w.b)(m.k.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && w.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return w.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = w.c.end(e);
					setTimeout(() => {
						s(t(o, I.TimerType.InApp))
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
						o = M(t, ["postsById"]),
						{
							postsById: n
						} = e,
						r = M(e, ["postsById"]),
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
						listingKey: p,
						listingName: h,
						pageLayer: u,
						pageReferrer: b,
						postClickEvent: y,
						redditStyle: f
					} = this.props, E = 0 === t, x = s ? "last-index" : "", O = "post-".concat(o, "-").concat(e, "-").concat(t, "-").concat(x, "-").concat(h, "-").concat(p, "-").concat(b);
					let L;
					if (void 0 === (L = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: x,
							postsById: P
						} = this.props, S = P[e], j = S.crosspostRootId && P[S.crosspostRootId] ? P[S.crosspostRootId] : S;
						S.crosspostRootId && !P[S.crosspostRootId] && g.c.withScope(e => {
							e.setExtra("errorType", m.p.API), e.setExtra("description", "Post ".concat(S.id, " is crosspost of ").concat(S.crosspostRootId, ", but ") + "".concat(S.crosspostRootId, " details are missing in the state")), g.c.captureMessage("Crosspost parent details are missing")
						});
						const k = this.props.postComponentForLayout({
								isCrosspost: !!S.crosspostRootId,
								isFirstPost: E,
								layout: o,
								post: j
							}),
							w = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							I = W(e, o, s, p, h, b, this.props, t),
							R = H(e, o, this.props, t),
							N = Q(e, this.props),
							M = j.media && j.media.type === _.n.EMBED ? j.media.provider : null;
						L = {
							estHeight: Object(C.c)(S, o),
							id: e,
							isFocusable: !(!j.media || !(o === v.g.Large || o === v.g.Classic && Object(_.B)(j.media))) && (_.d.has(j.media.type) && (!M || !_.q.has(M)) && !j.isSpoiler && !j.isNSFW),
							trackOnEnteredViewport: I,
							trackOnExitedViewport: R,
							render: t => {
								let {
									className: o,
									height: m,
									width: b,
									remeasure: g,
									setScrollerChildRef: O,
									shouldLoadInitially: v
								} = t;
								return d.a.createElement(k, {
									className: o,
									currentProfileName: n,
									key: w,
									availableWidth: b,
									eventFactory: y,
									first: E,
									forceLoadMedia: v,
									inSubredditOrProfile: x,
									isCommentPermalink: r,
									isCommentsPage: i,
									isFrontpage: a,
									isProfilePostListing: c,
									isTopicPage: l,
									listingKey: p,
									listingName: h,
									pageLayer: u,
									last: s,
									onClickPost: N,
									onSizeChanged: g,
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
						className: N.a.placeholder
					}, d.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && d.a.createElement(f.a, {
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
						className: N.a.placeholder
					}, d.a.createElement(y.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: U[o]
					}), !!e && d.a.createElement(f.a, {
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
						loadMore: h,
						postIds: u,
						onLoadMore: b
					} = this.props;
					let g = u.map((e, t, s) => {
						const o = t === u.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (g = q(g, n));
					const y = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						f = a ? Object(o.e)(a) : null,
						x = f || r;
					return d.a.createElement(c.Fragment, null, d.a.createElement(E.b, {
						innerRef: this.updateScrollerRef,
						className: x ? N.a.truncatedPostList : Object(p.a)(N.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: h && h.token ? h.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: y,
						viewportTopPadding: O.f
					}, g), f && d.a.createElement(K, {
						className: N.a.seeMoreButton
					}, d.a.createElement(L.a, {
						className: N.a.seeMorePostsText,
						to: Object(l.a)(f, {
							type: m.Kb.Posts
						})
					}, V._("See More Posts", null, {
						hk: "3o0CqI"
					}), d.a.createElement(D, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
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
					isLoggedOut: s
				} = e;
				switch (t.type) {
					case n.C.AUTHORIZATION_ERROR:
						return s ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.C.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.C.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.C.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.C.LIKELY_UBLOCK_ERROR:
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
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e.b633269bceb04599a6fb.js.map