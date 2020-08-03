// https://www.redditstatic.com/desktop2x/Trending.4be8cf33ebb664aed1db.js
// Retrieved at 8/3/2020, 10:10:05 AM by Reddit Dataminer v1.0.0
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
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/models/Flair/index.ts"),
				_ = s("./src/reddit/models/Theme/index.ts"),
				P = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/reddit/components/MiniCardPost/index.m.less"),
				f = s.n(y),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = s.n(j);
			const T = e => e.type === O.f.Spoiler,
				v = Object(h.t)();
			t.a = v(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: O,
					shouldOpenPost: y,
					showSubredditMeta: j = !0,
					showSubredditName: v,
					subredditOrProfile: N
				} = e, S = h && h.preview && h.preview.url || void 0, k = h && h.isSponsored ? "promoted_trend" : "trending", E = h && Object(l.a)(h.permalink) || "", I = y && E || O && Object(o.a)("/search", {
					q: O.rawQuery,
					source: k
				}) || E, D = O ? O.subredditInfo && O.subredditInfo.icon : N && N.icon.url, U = O ? O.subredditInfo && O.subredditInfo.displayText : N && (N.displayText || N.name), V = h ? h.flair.filter(T) : [], A = h ? h.score : 0, F = h ? h.numComments : 0, R = h && h.isSponsored, L = Object(P.a)(e).body, W = "linear-gradient(\n      ".concat(Object(n.g)(L, .2), ",\n      ").concat(Object(n.g)(L, .3), ",\n      ").concat(Object(n.g)(L, .4), ",\n      ").concat(Object(n.g)(L, .6), ",\n      ").concat(Object(n.g)(L, .8), ",\n      ").concat(L, "\n    )"), M = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!S
					})
				}, a.a.createElement(g.a, {
					to: I
				}, a.a.createElement("div", {
					className: Object(d.a)(w.a.backgroundWrapper, f.a.backgroundWrapper, t),
					style: {
						background: Object(_.g)(Object(P.a)(e).body, S || Object(P.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, R && a.a.createElement("div", {
					className: w.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(w.a.innerContainer, f.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? w.a.title : w.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(w.a.description, s)
				}, V.length > 0 && a.a.createElement(p.a, {
					className: w.a.flair,
					titleFlair: V,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: w.a.spacer
				}), j && D && U && a.a.createElement(x.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", U)], {
						hk: "2YTyJf"
					})
				}), !j && h && a.a.createElement("div", {
					className: w.a.metaLine
				}, v && U && a.a.createElement("span", {
					className: w.a.meta
				}, Object(C.b)(U)), a.a.createElement("span", {
					className: w.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(A, "number", Object(m.b)(A))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: w.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(F, "number", Object(m.b)(F))], {
					hk: "311aXY"
				})))))));
				return R ? a.a.createElement(u.a, {
					post: h
				}, M) : M
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
			s.r(t), s.d(t, "TRENDING_POSTS_CONTAINER", (function() {
				return T
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
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				h = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				g = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				x = s.n(g);
			const C = "Carousel";
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.onPostClick = e => {
						const {
							post: t
						} = e;
						t && t.isSponsored && this.props.fireAdPixelsOfType(t, p.a.Click), Object(u.d)(u.a.SearchResults), this.props.trackPostClick(e)
					}
				}
				render() {
					const {
						styleCustomizations: e,
						trendingSearches: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(l.a)(x.a.container, e && e.containerClassName)
					}, n.a.createElement("div", {
						className: Object(l.a)(x.a.trendingPosts, e && e.trendingPostsClassName)
					}, t.map((t, s) => n.a.createElement(h.a, {
						id: "".concat(C, "-").concat(t.id),
						className: Object(l.a)(x.a.trendingPost, e && e.trendingPostClassName),
						forceLoadMedia: !0,
						showMetaLine: !1,
						title: t.searchQuery,
						trendingSearch: t,
						key: t.post ? t.post.id : s,
						trendingPost: t.post,
						postId: t.post ? t.post.id : "",
						onPostClick: () => this.onPostClick(t)
					}))))
				}
			}
			var _ = Object(i.b)(null, e => ({
					fireAdPixelsOfType: (t, s) => e(Object(m.z)(t, s)),
					trackPostClick: t => e((e, s) => b.E(s(), t, b.a.POPULAR_CAROUSEL))
				}))(O),
				P = s("./src/reddit/contexts/ApiContext.tsx"),
				y = s("./src/reddit/selectors/trending.ts"),
				f = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = "TrendingPostsContainer", v = Object(i.b)(() => Object(a.c)({
				trendingItems: y.a
			}), e => ({
				fetchTrendingItems: () => e(Object(o.b)()),
				trackPostView: t => e((e, s) => b.F(s(), t, b.a.POPULAR_CAROUSEL))
			})), N = 178;
			class S extends n.a.Component {
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
					} = this.props, s = new Array(e).fill(!1), r = document.getElementById(T), n = r ? r.getBoundingClientRect().bottom : 0;
					return t.forEach((e, t) => {
						const r = e.id ? document.getElementById("".concat(C, "-").concat(e.id)) : void 0;
						s[t] = !!r && r.getBoundingClientRect().bottom <= n
					}), s
				}
				scrollChildForItem() {
					return [{
						estHeight: N,
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
					if (!i || 0 === i.length) return n.a.createElement(j.a, {
						className: e,
						showCardView: !!r
					});
					const d = s ? i.slice(0, s) : i;
					return n.a.createElement(f.a, {
						id: T,
						className: e,
						header: o,
						showCardView: r
					}, n.a.createElement(_, {
						styleCustomizations: a,
						trendingSearches: d
					}))
				}
				render() {
					return n.a.createElement(d.b, null, this.scrollChildForItem())
				}
			}
			t.default = Object(P.b)(v(S))
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
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				currentUser: b.i,
				flairStyleTemplate: c.R,
				hideNSFWPref: b.z,
				isActive: u.i,
				moderatorPermissions: m.i,
				modModeEnabled: c.P,
				post: u.M,
				showEditFlair: p.a,
				subredditOrProfile: u.Z,
				userIsOp: b.hb
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
						const r = t === d.a.upvoted ? Object(i.Y)(s) : Object(i.w)(s);
						e(r)
					},
					onIgnoreReports: () => e(Object(i.W)(s)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
				onFlairChanged: s => {
					let {
						previewFlair: r,
						selectedTemplateId: n
					} = s;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: r,
						selectedTemplateId: n
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		}
	}
]);
//# sourceMappingURL=Trending.4be8cf33ebb664aed1db.js.map