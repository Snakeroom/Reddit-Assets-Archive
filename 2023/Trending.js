// https://www.redditstatic.com/desktop2x/Trending.081625cfd7b93e45bd53.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Trending"], {
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				u = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				h = s("./src/reddit/connectors/miniCardPost.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				P = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(y),
				S = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				v = s.n(S);
			const T = e => e.type === P.f.Spoiler,
				w = Object(b.v)();
			t.a = w(Object(g.b)(Object(h.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: h,
					trendingPost: b,
					trendingSearch: g,
					shouldOpenPost: P,
					showSubredditMeta: y = !0,
					showSubredditName: S,
					subredditOrProfile: w
				} = e, N = b && b.preview && b.preview.url || void 0, k = b && b.isSponsored ? "promoted_trend" : "trending", I = b && Object(l.a)(b.permalink) || "", D = P && I || g && Object(o.a)("/search", {
					q: g.rawQuery,
					source: k
				}) || I, E = g ? g.subredditInfo && g.subredditInfo.icon : w && w.icon.url, V = g ? g.subredditInfo && g.subredditInfo.displayText : w && (w.displayText || w.name), U = b ? b.flair.filter(T) : [], F = b ? b.score : 0, A = b ? b.numComments : 0, W = b && b.isSponsored, L = Object(O.a)(e).body, M = `linear-gradient(\n      ${Object(n.f)(L,.2)},\n      ${Object(n.f)(L,.3)},\n      ${Object(n.f)(L,.4)},\n      ${Object(n.f)(L,.6)},\n      ${Object(n.f)(L,.8)},\n      ${L}\n    )`, R = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(v.a.trendingPost, {
						[v.a["m-background"]]: !!N
					})
				}, a.a.createElement(x.default, {
					to: D
				}, a.a.createElement("div", {
					className: Object(d.a)(v.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(f.f)(Object(O.a)(e).body, N || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": M
					}
				}, W && a.a.createElement("div", {
					className: v.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(v.a.innerContainer, j.a.innerContainer, c),
					onClick: h,
					title: b ? b.title : ""
				}, a.a.createElement("h2", {
					className: b ? v.a.title : v.a.titleNoDescription
				}, e.title), b ? a.a.createElement("div", {
					className: Object(d.a)(v.a.description, s)
				}, U.length > 0 && a.a.createElement(p.a, {
					className: v.a.flair,
					titleFlair: U,
					nowrap: !0,
					post: b
				}), b.title) : a.a.createElement("div", {
					className: v.a.spacer
				}), y && E && V && a.a.createElement(C.a, {
					className: v.a.relatedSubredditMetaData,
					iconClassName: v.a.subredditIcon,
					iconUrl: E || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", V)], {
						hk: "2YTyJf"
					})
				}), !y && b && a.a.createElement("div", {
					className: v.a.metaLine
				}, S && V && a.a.createElement("span", {
					className: v.a.meta
				}, Object(_.d)(V)), a.a.createElement("span", {
					className: v.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(F, "number", Object(m.b)(F))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: v.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(A, "number", Object(m.b)(A))], {
					hk: "311aXY"
				})))))));
				return W ? a.a.createElement(u.a, {
					post: b
				}, R) : R
			}))))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1wTtHt-VeTJLbmZj77AmN3",
				trendingPosts: "cslJXYWf-T5weuzAPoO3X",
				trendingPost: "_27FJDku8We0nUkyLPhJFnD"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "TRENDING_POSTS_CONTAINER", (function() {
				return N
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/search/trending.ts"),
				d = s("./src/reddit/components/Scroller/Simple.tsx"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				b = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				g = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				C = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				_ = s.n(C);
			const P = "Carousel";
			class f extends n.a.Component {
				constructor() {
					super(...arguments), this.onPostClick = e => {
						const {
							post: t
						} = e;
						t && t.isSponsored && this.props.fireAdPixelsOfType(t, p.a.Click), Object(u.d)(u.a.SearchResults), this.props.trackPostClick(e)
					}
				}
				componentDidMount() {
					h.a.clear(b.a.Popular)
				}
				render() {
					const {
						styleCustomizations: e,
						trendingSearches: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(l.a)(_.a.container, e && e.containerClassName)
					}, n.a.createElement("div", {
						className: Object(l.a)(_.a.trendingPosts, e && e.trendingPostsClassName)
					}, t.map((t, s) => n.a.createElement(x.a, {
						postId: t.post ? t.post.id : "",
						key: t.post ? t.post.id : s,
						id: `${P}-${t.id}`,
						className: Object(l.a)(_.a.trendingPost, e && e.trendingPostClassName),
						forceLoadMedia: !0,
						showMetaLine: !1,
						title: t.searchQuery,
						trendingSearch: t,
						trendingPost: t.post,
						onPostClick: () => this.onPostClick(t)
					}))))
				}
			}
			var O = Object(i.b)(null, e => ({
					fireAdPixelsOfType: (t, s) => e(Object(m.y)(t, s)),
					trackPostClick: t => e((e, s) => g.o({
						state: s(),
						trendingSearch: t,
						telemetrySource: b.a.Popular
					}))
				}))(f),
				y = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/reddit/models/Search/index.ts"),
				S = s("./src/reddit/selectors/trending.ts"),
				v = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				T = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = "TrendingPostsContainer", k = Object(i.b)(() => Object(a.c)({
				trendingItems: e => Object(S.a)(e, j.d.tile)
			}), e => ({
				fetchTrendingItems: () => e(Object(o.b)(j.d.tile)),
				trackPostView: t => e((e, s) => g.p({
					state: s(),
					trendingSearch: t,
					telemetrySource: b.a.Popular
				}))
			})), I = 178;
			class D extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						trendingsVisibility: new Array(e.maxItemsCount).fill(!1)
					}
				}
				componentDidMount() {
					this.props.fetchTrendingItems()
				}
				componentDidUpdate(e) {
					e.trendingItems && e.trendingItems.length || !this.props.trendingItems || !this.props.trendingItems.length || this.onView(), !!e.showCardView != !!this.props.showCardView && this.onShowCardViewChanged()
				}
				getTrackOnEnteredViewportFN() {
					return () => this.onView()
				}
				onView() {
					const {
						trendingItems: e
					} = this.props, t = this.getCurrentTrendingVisibility();
					e.forEach((e, s) => {
						t[s] && this.props.trackPostView(e)
					}), this.setState({
						trendingsVisibility: t
					})
				}
				onShowCardViewChanged() {
					const {
						trendingItems: e
					} = this.props, t = this.getCurrentTrendingVisibility();
					e.forEach((e, s) => {
						!this.state.trendingsVisibility[s] && t[s] && this.props.trackPostView(e)
					}), this.setState({
						trendingsVisibility: t
					})
				}
				getCurrentTrendingVisibility() {
					const {
						maxItemsCount: e,
						trendingItems: t
					} = this.props, s = new Array(e).fill(!1), r = document.getElementById(N), n = r ? r.getBoundingClientRect().bottom : 0;
					return t.forEach((e, t) => {
						const r = e.id ? document.getElementById(`${P}-${e.id}`) : void 0;
						s[t] = !!r && r.getBoundingClientRect().bottom <= n
					}), s
				}
				scrollChildForItem() {
					return [{
						estHeight: I,
						trackOnEnteredViewport: this.getTrackOnEnteredViewportFN(),
						id: "trending-carousel",
						render: () => this.renderContainer()
					}]
				}
				renderContainer() {
					const {
						className: e,
						discoveryUnitHeaderClassName: t,
						maxItemsCount: s,
						showCardView: r,
						trendingItems: i,
						trendingPostCustomizations: a
					} = this.props, o = n.a.createElement(n.a.Fragment, null, n.a.createElement(c.a, {
						className: t
					}, w._("Trending today", null, {
						hk: "3rOxuO"
					})));
					if (!i || 0 === i.length) return n.a.createElement(T.a, {
						className: e,
						showCardView: !!r
					});
					const d = s ? i.slice(0, s) : i;
					return n.a.createElement(v.a, {
						id: N,
						className: e,
						header: o,
						showCardView: r
					}, n.a.createElement(O, {
						styleCustomizations: a,
						trendingSearches: d
					}))
				}
				render() {
					return n.a.createElement(d.b, null, this.scrollChildForItem())
				}
			}
			t.default = Object(y.b)(k(D))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: h.d,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				flairStyleTemplate: c.Y,
				hideNSFWPref: h.H,
				isActive: u.j,
				moderatorPermissions: m.m,
				modModeEnabled: c.W,
				showEditFlair: p.a
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: r,
							selectedTemplateId: n
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: r,
							selectedTemplateId: n
						}))
					},
					handleVote: t => {
						const r = t === d.a.upvoted ? Object(i.ib)(s) : Object(i.v)(s);
						e(r)
					},
					onIgnoreReports: () => e(Object(i.eb)(s)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: r,
						selectedTemplateId: n
					} = e;
					return t.dispatchFlairChanged({
						post: s.post,
						previewFlair: r,
						selectedTemplateId: n
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = b
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Trending.081625cfd7b93e45bd53.js.map