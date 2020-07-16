// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e.ba9a980c299508cbdab3.js
// Retrieved at 7/16/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(h),
				g = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				b = s.n(g);

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
				v = Object(n.b)(E),
				x = e => {
					const t = {
						interactive: !1,
						voteState: m.a.notVoted
					};
					return r.a.createElement("div", {
						className: b.a.emptyVotes
					}, r.a.createElement(d.d, y({
						key: "u"
					}, t)), r.a.createElement("div", {
						key: "s",
						className: b.a.emptyScore
					}), r.a.createElement(d.c, y({
						key: "d"
					}, t)))
				},
				O = e => r.a.createElement(c.a, {
					className: Object(p.a)(e)
				}),
				L = e => r.a.createElement("div", {
					className: b.a.flatList
				}, r.a.createElement("div", {
					className: Object(a.a)(b.a.comments, Object(p.b)(e))
				}), r.a.createElement("div", {
					className: Object(a.a)(b.a.ellipsis, Object(p.b)(e))
				}));
			t.a = f(v(e => r.a.createElement("div", {
				className: Object(a.a)(e.className, u.a.compactPostStyles, u.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement("div", {
				className: b.a.wrapper
			}, r.a.createElement(x, y({
				key: "c"
			}, e)), r.a.createElement("div", {
				key: "a",
				className: b.a.expandoContainer
			}, r.a.createElement("div", {
				className: Object(a.a)(b.a.expando, Object(p.a)(e))
			})), r.a.createElement("div", {
				key: "d",
				className: b.a.subredditIconContainer
			}, r.a.createElement(O, {
				isLoading: !1
			})), r.a.createElement("div", {
				key: "e",
				className: b.a.topLine
			}, r.a.createElement("div", {
				key: "ea",
				className: Object(a.a)(b.a.title, Object(p.b)(e))
			}), r.a.createElement("div", {
				key: "eb",
				className: Object(a.a)(b.a.meta, Object(p.b)(e))
			})), r.a.createElement(L, y({
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
				r = s("./src/reddit/components/PostList/Placeholder.tsx"),
				n = s("./src/reddit/components/PostList/LoadMore.m.less"),
				i = s.n(n);
			t.a = o.a.wrapped(r.a, "Component", i.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/constant.js"),
				r = s.n(o),
				n = s("./node_modules/lodash/times.js"),
				i = s.n(n),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/fastdom/index.ts"),
				m = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				g = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				b = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				y = s("./src/reddit/components/PostLeftRail/index.tsx"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				E = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				O = s("./src/reddit/models/Vote/index.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				P = s.n(L),
				S = s("./src/reddit/components/LargePost/placeholder.m.less"),
				C = s.n(S);

			function j() {
				return (j = Object.assign || function(e) {
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
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const w = Object(v.t)(),
				k = Object(l.c)({
					isFakeSubreddit: v.x
				}),
				I = Object(d.b)(k),
				R = e => {
					const t = {
						interactive: !1,
						voteState: O.a.notVoted
					};
					return c.a.createElement("div", {
						className: C.a.emptyVerticalVotes
					}, c.a.createElement(E.d, j({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: C.a.emptyScore,
						key: "s"
					}), c.a.createElement(E.c, j({
						key: "d"
					}, t)))
				},
				N = e => {
					var {
						isLoading: t
					} = e, s = _(e, ["isLoading"]);
					return c.a.createElement(f.b, j({
						className: Object(x.a)({
							isLoading: t
						})
					}, s))
				};
			var M = w(I(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: o
				} = e, r = _(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(b.a)(P.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(y.b, {
					key: "a"
				}, c.a.createElement(R, r)), c.a.createElement("div", {
					className: C.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: C.a.topLine,
					key: "ba"
				}, r.isFakeSubreddit && c.a.createElement(N, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(b.a)(C.a.topMetaOne, Object(x.b)(r))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(b.a)(C.a.topMetaTwo, Object(x.b)(r))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(b.a)(C.a.title, Object(x.b)(r))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(b.a)(C.a.media, Object(x.a)(r))
				}), c.a.createElement("div", {
					className: C.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: C.a.flatlist
				}, c.a.createElement("div", {
					className: Object(b.a)(C.a.flatlistItemOne, Object(x.b)(r))
				}), c.a.createElement("div", {
					className: Object(b.a)(C.a.flatListItemTwo, Object(x.b)(r))
				}))))
			}));
			const T = {
				[h.g.Large]: [M, 2],
				[h.g.Classic]: [u.b, 10],
				[h.g.Compact]: [g.a, 30]
			};

			function V(e) {
				return T[e]
			}
			const A = .1,
				F = Object(l.c)({
					loadingPostComponentForLayout: () => V
				}),
				U = Object(d.b)(F);
			class B extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && m.b(this.wrapperRef), e && m.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= A;
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
						loadingPostComponentForLayout: n
					} = this.props, {
						visible: a
					} = this.state, [d, l] = n(o), p = t || l, m = r()(c.a.createElement(d, {
						isLoading: s && a
					})), h = i()(p, m);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(h))
				}
			}
			t.a = U(B)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/helpers/describeApiError/index.ts"),
				c = s("./src/reddit/components/PostList/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: s
				} = e;
				let r = o.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return s && (r = Object(a.a)({
					apiError: s,
					isLoggedOut: !1
				})), n.a.createElement("div", {
					className: d.a.somethingWrong
				}, n.a.createElement("div", {
					className: d.a.somethingWrongText
				}, r), t && n.a.createElement(i.f, {
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
				return G
			})), s.d(t, "a", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				p = s.n(l),
				m = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts"),
				f = s("./src/lib/sentry/index.ts"),
				E = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				O = s("./src/reddit/constants/adEvents.ts"),
				L = s("./src/reddit/constants/componentSizes.ts"),
				P = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				j = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				w = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/helpers/brandSafety/index.ts"),
				R = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				T = s("./src/reddit/components/PostList/index.m.less"),
				V = s.n(T),
				A = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
					}
					return s
				};
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = 500, B = new R.a(U), K = new R.a(U), H = new R.a(U), D = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, W = b.a.div("SeeMore", V.a), Q = b.a.wrapped(w.a, "ArrowRight", V.a), q = (e, t, s, o, r, n, i, a) => {
				const c = s ? "last-".concat(o, "-").concat(r) : "",
					d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(n);
				let l = B.get(d);
				return void 0 === l && (l = () => {
					s && i.onBottomViewed(o, r), i.trackOnPostEnteredViewport(e, t, a)
				}, B.set(d, l)), l
			}, J = (e, t, s, o) => {
				const r = "left-".concat(e, "-").concat(t);
				let n = K.get(r);
				return void 0 === n && (n = r => {
					s.trackOnPostExitedViewport(e, t, r, o)
				}, K.set(r, n)), n
			}, G = (e, t) => {
				const s = "click-".concat(e);
				let o = H.get(s);
				return void 0 === o && (o = (e, s, o) => {
					if (s.isSponsored && t.fireAdPixelsOfType(s, O.a.Click), s.isSponsored && s.source && s.source.outboundUrl) {
						let e = s.source.outboundUrl;
						o && (e = Object(C.a)(s.id, o, s.source.outboundUrl)), Object(y.d)(e, y.c.BLANK)
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(j.a)(e)
					})
				}, H.set(s, o)), o
			}, X = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Y extends p.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new R.a(U), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(e => {
						let {
							primaryChild: t
						} = e;
						this.viewportHeight && t && t.rectangle && t.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = n()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: o
						} = this.props, r = t(), n = [];
						r.forEach(e => n.push(e.id));
						const i = n.map(e => s[e]).filter(Boolean),
							a = i.map(e => o[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(I.a)(i, a))
					}, u.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1)
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = N.c.end(e);
					setTimeout(() => {
						s(t(o, M.TimerType.InApp))
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
						o = A(t, ["postsById"]),
						{
							postsById: r
						} = e,
						n = A(e, ["postsById"]),
						i = Object.keys(o),
						a = Object.keys(n);
					if (a.length !== i.length) return !0;
					if (a.some(e => o[e] !== n[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((o, n) => {
							const i = 0 === n;
							return t({
								isFirstPost: i,
								layout: e,
								post: s[o]
							}) !== t({
								isFirstPost: i,
								layout: e,
								post: r[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: r,
						hostPostId: n,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: m,
						listingName: h,
						pageLayer: g,
						pageReferrer: b,
						postClickEvent: y,
						redditStyle: E,
						shouldHideFlair: v
					} = this.props, x = 0 === t, O = s ? "last-index" : "", L = "post-".concat(o, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(h, "-").concat(m, "-").concat(b);
					let S;
					if (void 0 === (S = this.scrollChildCache.get(L))) {
						const {
							inSubredditOrProfile: O,
							postsById: C
						} = this.props, j = C[e], w = j.crosspostRootId && C[j.crosspostRootId] ? C[j.crosspostRootId] : j;
						j.crosspostRootId && !C[j.crosspostRootId] && f.c.withScope(e => {
							e.setExtra("errorType", u.q.API), e.setExtra("description", "Post ".concat(j.id, " is crosspost of ").concat(j.crosspostRootId, ", but ") + "".concat(j.crosspostRootId, " details are missing in the state")), f.c.captureMessage("Crosspost parent details are missing")
						});
						const I = this.props.postComponentForLayout({
								isCrosspost: !!j.crosspostRootId,
								isFirstPost: x,
								layout: o,
								post: w
							}),
							R = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							N = q(e, o, s, m, h, b, this.props, t),
							M = J(e, o, this.props, t),
							T = G(e, this.props),
							V = w.media && w.media.type === k.o.EMBED ? w.media.provider : null;
						S = {
							estHeight: Object(_.c)(j, o),
							id: e,
							isFocusable: !(!w.media || !(o === P.g.Large || o === P.g.Classic && Object(k.G)(w.media))) && (k.d.has(w.media.type) && (!V || !k.s.has(V)) && !w.isSpoiler && !w.isNSFW),
							trackOnEnteredViewport: N,
							trackOnExitedViewport: M,
							render: t => {
								let {
									className: o,
									height: u,
									width: b,
									remeasure: f,
									setScrollerChildRef: L,
									shouldLoadInitially: P
								} = t;
								return p.a.createElement(I, {
									className: o,
									currentProfileName: r,
									key: R,
									availableWidth: b,
									eventFactory: y,
									first: x,
									forceLoadMedia: P,
									hostPostId: n,
									inSubredditOrProfile: O,
									isCommentPermalink: i,
									isCommentsPage: a,
									isFrontpage: c,
									isProfilePostListing: d,
									isTopicPage: l,
									listingKey: m,
									listingName: h,
									pageLayer: g,
									last: s,
									onClickPost: T,
									onSizeChanged: f,
									postId: e,
									redditStyle: E,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: L,
									shouldHideFlair: v
								})
							}
						}, this.scrollChildCache.set(L, S)
					}
					return S
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return p.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: r,
						postListPlaceholderComponent: n
					} = this.props;
					if (s) return;
					const i = n;
					return p.a.createElement("div", {
						className: V.a.placeholder
					}, p.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && p.a.createElement(v.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: r,
						onLoadMore: n
					} = this.props;
					if (!s) return p.a.createElement("div", {
						className: V.a.placeholder
					}, p.a.createElement(E.a, {
						className: r,
						isLoading: !!t,
						layout: o,
						countOverride: D[o]
					}), !!e && p.a.createElement(v.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: n,
						layout: i,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: g
					} = this.props;
					let b = d.map((e, t, s) => {
						const o = t === d.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					r && (b = X(b, r));
					const y = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						f = a ? Object(o.e)(a) : null,
						E = f || n;
					return p.a.createElement(l.Fragment, null, p.a.createElement(x.b, {
						innerRef: this.updateScrollerRef,
						className: E ? V.a.truncatedPostList : Object(h.a)(V.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: g,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: y,
						viewportTopPadding: L.f
					}, b), f && p.a.createElement(W, {
						className: V.a.seeMoreButton
					}, p.a.createElement(S.a, {
						className: V.a.seeMorePostsText,
						to: Object(m.a)(f, {
							type: u.Nb.Posts
						})
					}, F._("See More Posts", null, {
						hk: "3o0CqI"
					}), p.a.createElement(Q, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Y.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: p.a.Fragment
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");

			function n(e) {
				let {
					apiError: t,
					isLoggedOut: s
				} = e;
				switch (t.type) {
					case r.E.AUTHORIZATION_ERROR:
						return s ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case r.E.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case r.E.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case r.E.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case r.E.LIKELY_UBLOCK_ERROR:
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
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~ProfileOverview~P~6ef4688e.ba9a980c299508cbdab3.js.map