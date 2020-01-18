// https://www.redditstatic.com/desktop2x/Trending.e19d252aaee508c9c93f.js
// Retrieved at 1/18/2020, 4:15:26 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Trending"], {
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
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
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/index.tsx"),
				u = s("./src/reddit/components/Translated/index.tsx"),
				h = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				j = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				P = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = s("./src/reddit/components/MiniCardPost/index.m.less"),
				N = s.n(v),
				_ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				T = s.n(_);
			const k = e => e.type === P.f.Spoiler,
				E = Object(b.t)();
			t.a = E(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: r,
					onPostClick: c,
					trendingPost: p,
					trendingSearch: b,
					shouldOpenPost: P,
					showSubredditMeta: v = !0,
					showSubredditName: _,
					subredditOrProfile: E
				} = e, S = p && p.preview && p.preview.url || void 0, D = p && p.isSponsored ? "promoted_trend" : "trending", w = p && Object(d.a)(p.permalink) || "", U = P && w || b && Object(i.a)("/search", {
					q: b.rawQuery,
					source: D
				}) || w, f = b ? b.subredditInfo && b.subredditInfo.icon : E && E.icon.url, V = b ? b.subredditInfo && b.subredditInfo.displayText : E && (E.displayText || E.name), I = p ? p.flair.filter(k) : [], W = p ? p.score : 0, A = p ? p.numComments : 0, L = p && p.isSponsored, M = Object(O.a)(e).body, Y = "linear-gradient(\n      ".concat(Object(n.j)(M, .2), ",\n      ").concat(Object(n.j)(M, .3), ",\n      ").concat(Object(n.j)(M, .4), ",\n      ").concat(Object(n.j)(M, .6), ",\n      ").concat(Object(n.j)(M, .8), ",\n      ").concat(M, "\n    )"), H = a.a.createElement("div", {
					className: Object(o.a)(T.a.trendingPost, {
						[T.a["m-background"]]: !!S
					})
				}, a.a.createElement(x.a, {
					to: U
				}, a.a.createElement("div", {
					className: Object(o.a)(T.a.backgroundWrapper, N.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(O.a)(e).body, S || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": Y
					}
				}, L && a.a.createElement("div", {
					className: T.a.promoted
				}, a.a.createElement(C.c, null, "promoted")), a.a.createElement("div", {
					className: Object(o.a)(T.a.innerContainer, N.a.innerContainer, r),
					onClick: c,
					title: p ? p.title : ""
				}, a.a.createElement("h2", {
					className: p ? T.a.title : T.a.titleNoDescription
				}, e.title), p ? a.a.createElement("div", {
					className: Object(o.a)(T.a.description, s)
				}, I.length > 0 && a.a.createElement(m.a, {
					className: T.a.flair,
					titleFlair: I,
					nowrap: !0,
					post: p,
					showCategoryTag: !1
				}), p.title) : a.a.createElement("div", {
					className: T.a.spacer
				}), v && f && V && a.a.createElement(g.a, {
					className: T.a.relatedSubredditMetaData,
					iconClassName: T.a.subredditIcon,
					iconUrl: f || void 0,
					suffix: a.a.createElement(u.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: V
						}
					})
				}), !v && p && a.a.createElement("div", {
					className: T.a.metaLine
				}, _ && V && a.a.createElement("span", {
					className: T.a.meta
				}, Object(j.b)(V)), a.a.createElement("span", {
					className: T.a.meta
				}, a.a.createElement(C.c, null, "".concat(Object(l.b)(W), " "), a.a.createElement(C.a, {
					count: W,
					name: "score",
					plural: "points",
					singular: "point"
				}))), a.a.createElement("span", {
					className: T.a.meta
				}, a.a.createElement(C.c, null, "".concat(Object(l.b)(A), " "), a.a.createElement(C.a, {
					count: A,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return L ? a.a.createElement(h.a, {
					post: p,
					children: H
				}) : H
			})))
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
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/search/trending.ts"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/helpers/pixels.ts"),
				p = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				u = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				h = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				b = s.n(h);
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onPostClick = e => {
						const {
							post: t
						} = e;
						t && t.isSponsored && Object(m.a)(t.events, l.a.Click), this.props.trackPostClick(e)
					}
				}
				render() {
					const {
						styleCustomizations: e,
						trendingSearches: t,
						trackPostView: s
					} = this.props;
					return r.a.createElement("div", {
						className: Object(d.a)(b.a.container, e && e.containerClassName)
					}, r.a.createElement("div", {
						className: Object(d.a)(b.a.trendingPosts, e && e.trendingPostsClassName)
					}, t.map((t, n) => (s(t), r.a.createElement(u.a, {
						className: Object(d.a)(b.a.trendingPost, e && e.trendingPostClassName),
						forceLoadMedia: !0,
						showMetaLine: !1,
						title: t.searchQuery,
						trendingSearch: t,
						key: t.post ? t.post.id : n,
						trendingPost: t.post,
						postId: t.post ? t.post.id : "",
						onPostClick: () => this.onPostClick(t)
					})))))
				}
			}
			var g = Object(a.b)(null, e => ({
					trackPostView: t => e((e, s) => p.L(s(), t)),
					trackPostClick: t => e((e, s) => p.K(s(), t))
				}))(x),
				j = s("./src/reddit/components/Translated/index.tsx"),
				C = s("./src/reddit/contexts/ApiContext.tsx"),
				P = s("./src/reddit/selectors/trending.ts"),
				y = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				O = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const v = Object(a.b)(() => Object(i.c)({
				trendingItems: P.a
			}), e => ({
				fetchTrendingItems: () => e(Object(o.b)())
			}));
			class N extends r.a.Component {
				componentDidMount() {
					this.props.fetchTrendingItems()
				}
				render() {
					const e = r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, {
						className: this.props.discoveryUnitHeaderClassName
					}, r.a.createElement(j.a, {
						msgId: "discoveryUnits.trendingToday"
					})));
					if (!this.props.trendingItems || 0 === this.props.trendingItems.length) return r.a.createElement(O.a, {
						className: this.props.className,
						exploreV2Variant: this.props.exploreV2Variant,
						showCardView: !!this.props.showCardView
					});
					const t = this.props.maxItemsCount ? this.props.trendingItems.slice(0, this.props.maxItemsCount) : this.props.trendingItems;
					return r.a.createElement(y.a, {
						className: this.props.className,
						exploreV2Variant: this.props.exploreV2Variant,
						header: e,
						showCardView: this.props.showCardView
					}, r.a.createElement(g, {
						styleCustomizations: this.props.trendingPostCustomizations,
						trendingSearches: t
					}))
				}
			}
			t.default = Object(C.b)(v(N))
		}
	}
]);
//# sourceMappingURL=Trending.e19d252aaee508c9c93f.js.map