// https://www.redditstatic.com/desktop2x/Trending.79ed808129f86a93bfbc.js
// Retrieved at 8/2/2021, 2:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Trending"], {
		"./src/reddit/actions/search/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./node_modules/uuid/v4.js"),
				i = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/extractQueryParams/index.ts"));
			var d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = s("./src/reddit/models/Search/index.ts");
			var u = e => {
				const t = {
					withAds: 1,
					ad: Object(a.a)(window.location.href).get("ad")
				};
				return Object(d.a)(Object(c.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: o.hb.GET,
					data: t
				})
			};
			const b = "PAGE__TRENDING_SEARCHES_LOADED",
				h = Object(r.a)(b),
				g = () => async (e, t, {
					apiContext: s
				}) => {
					const r = await u(s());
					if (r.ok) {
						const t = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const s = e.body.trending_searches.length;
								for (let r = 0; r < s; r++) {
									const s = e.body.trending_searches[r],
										n = s.results.data.children.length > 0 ? s.results.data.children[0].data : null,
										o = {
											id: i()(),
											post: n ? Object(m.a)(n) : null,
											rawQuery: s.query_string,
											searchQuery: s.display_string,
											section: p.c.trending,
											isWhitelisted: s.is_subreddit_whitelisted,
											subredditInfo: n ? {
												icon: n.sr_detail.community_icon || n.sr_detail.icon_img,
												displayText: n.sr_detail.display_name_prefixed
											} : null,
											subredditOccurrences: s.subreddit_occurences - 1,
											type: p.b.text
										};
									t.push(o)
								}
							}
							return t
						})(r);
						return e(h({
							items: t
						})), t
					}
					return null
				}
		},
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
				o = s.n(i),
				a = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				u = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				y = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(P),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				v = s.n(w);
			const T = e => e.type === y.f.Spoiler,
				k = Object(h.t)();
			t.a = k(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: y,
					showSubredditMeta: P = !0,
					showSubredditName: w,
					subredditOrProfile: k
				} = e, N = h && h.preview && h.preview.url || void 0, E = h && h.isSponsored ? "promoted_trend" : "trending", S = h && Object(l.a)(h.permalink) || "", I = y && S || g && Object(a.a)("/search", {
					q: g.rawQuery,
					source: E
				}) || S, D = g ? g.subredditInfo && g.subredditInfo.icon : k && k.icon.url, U = g ? g.subredditInfo && g.subredditInfo.displayText : k && (k.displayText || k.name), A = h ? h.flair.filter(T) : [], V = h ? h.score : 0, R = h ? h.numComments : 0, F = h && h.isSponsored, L = Object(f.a)(e).body, W = `linear-gradient(\n      ${Object(n.g)(L,.2)},\n      ${Object(n.g)(L,.3)},\n      ${Object(n.g)(L,.4)},\n      ${Object(n.g)(L,.6)},\n      ${Object(n.g)(L,.8)},\n      ${L}\n    )`, M = o.a.createElement("div", {
					id: i,
					className: Object(d.a)(v.a.trendingPost, {
						[v.a["m-background"]]: !!N
					})
				}, o.a.createElement(x.a, {
					to: I
				}, o.a.createElement("div", {
					className: Object(d.a)(v.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(O.g)(Object(f.a)(e).body, N || Object(f.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, F && o.a.createElement("div", {
					className: v.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), o.a.createElement("div", {
					className: Object(d.a)(v.a.innerContainer, j.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, o.a.createElement("h2", {
					className: h ? v.a.title : v.a.titleNoDescription
				}, e.title), h ? o.a.createElement("div", {
					className: Object(d.a)(v.a.description, s)
				}, A.length > 0 && o.a.createElement(p.a, {
					className: v.a.flair,
					titleFlair: A,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : o.a.createElement("div", {
					className: v.a.spacer
				}), P && D && U && o.a.createElement(_.a, {
					className: v.a.relatedSubredditMetaData,
					iconClassName: v.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", U)], {
						hk: "2YTyJf"
					})
				}), !P && h && o.a.createElement("div", {
					className: v.a.metaLine
				}, w && U && o.a.createElement("span", {
					className: v.a.meta
				}, Object(C.c)(U)), o.a.createElement("span", {
					className: v.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(V, "number", Object(m.b)(V))], {
					hk: "1Jm6il"
				})), o.a.createElement("span", {
					className: v.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(R, "number", Object(m.b)(R))], {
					hk: "311aXY"
				})))))));
				return F ? o.a.createElement(u.a, {
					post: h
				}, M) : M
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
				return v
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/search/trending.ts"),
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
			const _ = "Carousel";
			class C extends n.a.Component {
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
						postId: t.post ? t.post.id : "",
						key: t.post ? t.post.id : s,
						id: `${_}-${t.id}`,
						className: Object(l.a)(x.a.trendingPost, e && e.trendingPostClassName),
						forceLoadMedia: !0,
						showMetaLine: !1,
						title: t.searchQuery,
						trendingSearch: t,
						trendingPost: t.post,
						onPostClick: () => this.onPostClick(t)
					}))))
				}
			}
			var y = Object(i.b)(null, e => ({
					fireAdPixelsOfType: (t, s) => e(Object(m.z)(t, s)),
					trackPostClick: t => e((e, s) => b.E(s(), t, b.a.POPULAR_CAROUSEL))
				}))(C),
				O = s("./src/reddit/contexts/ApiContext.tsx"),
				f = s("./src/reddit/selectors/trending.ts"),
				P = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "TrendingPostsContainer", T = Object(i.b)(() => Object(o.c)({
				trendingItems: f.a
			}), e => ({
				fetchTrendingItems: () => e(Object(a.b)()),
				trackPostView: t => e((e, s) => b.F(s(), t, b.a.POPULAR_CAROUSEL))
			})), k = 178;
			class N extends n.a.Component {
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
					} = this.props, s = new Array(e).fill(!1), r = document.getElementById(v), n = r ? r.getBoundingClientRect().bottom : 0;
					return t.forEach((e, t) => {
						const r = e.id ? document.getElementById(`${_}-${e.id}`) : void 0;
						s[t] = !!r && r.getBoundingClientRect().bottom <= n
					}), s
				}
				scrollChildForItem() {
					return [{
						estHeight: k,
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
						trendingPostCustomizations: o
					} = this.props, a = n.a.createElement(n.a.Fragment, null, n.a.createElement(c.a, {
						className: t
					}, w._("Trending today", null, {
						hk: "3rOxuO"
					})));
					if (!i || 0 === i.length) return n.a.createElement(j.a, {
						className: e,
						showCardView: !!r
					});
					const d = s ? i.slice(0, s) : i;
					return n.a.createElement(P.a, {
						id: v,
						className: e,
						header: a,
						showCardView: r
					}, n.a.createElement(y, {
						styleCustomizations: o,
						trendingSearches: d
					}))
				}
				render() {
					return n.a.createElement(d.b, null, this.scrollChildForItem())
				}
			}
			t.default = Object(O.b)(T(N))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
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
				flairStyleTemplate: c.T,
				hideNSFWPref: b.B,
				isActive: u.j,
				moderatorPermissions: m.k,
				modModeEnabled: c.R,
				showEditFlair: p.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				}) => e(Object(o.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				})),
				handleVote: s => {
					const r = s === d.a.upvoted ? Object(i.db)(t) : Object(i.w)(t);
					e(r)
				},
				onIgnoreReports: () => e(Object(i.Z)(t)),
				onOpenReportsDropdown: t => e(Object(a.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: r
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: r
				})
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				a = Object(r.createContext)(o);

			function d(e) {
				const t = t => n.a.createElement(a.Consumer, null, ({
					apiContext: s,
					gqlContext: r
				}) => n.a.createElement(e, i({
					apiContext: s,
					gqlContext: r
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/selectors/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = e => e.trending.models
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Trending.79ed808129f86a93bfbc.js.map