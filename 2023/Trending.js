// https://www.redditstatic.com/desktop2x/Trending.638c6166aeed2b78e916.js
// Retrieved at 6/6/2023, 10:20:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Trending"], {
		"./src/reddit/actions/search/trending.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return O
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = r("./src/lib/constants/index.ts"),
				d = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/extractQueryParams/index.ts"));

			function o() {
				return Object(d.a)(window.location.href)
			}
			var a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				m = r("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				u = r("./src/reddit/models/Search/index.ts");
			var p = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/redditGQL/operations/TrendingSearches.json"),
				h = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			var g = r("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				x = r("./src/reddit/constants/experiments.ts"),
				_ = r("./src/reddit/helpers/chooseVariant/index.ts");
			var y = r("./src/reddit/selectors/telemetry.ts");
			const f = "PAGE__TRENDING_SEARCHES_LOADED",
				v = Object(s.a)(f),
				O = e => async (t, r, s) => {
					let {
						apiContext: d,
						gqlContext: f
					} = s;
					const O = r();
					if (function(e) {
							return Object(_.c)(e, {
								experimentEligibilitySelector: _.a,
								experimentName: x.Qc
							}) === x.Td
						}(O) && e === u.d.dropdown) {
						const r = (e => {
							var t, r;
							const {
								data: s
							} = e;
							return (null === (t = s.recommendation) || void 0 === t ? void 0 : t.trendingQueries) && 0 !== (null === (r = s.recommendation.trendingQueries.edges) || void 0 === r ? void 0 : r.length) ? s.recommendation.trendingQueries.edges.reduce((e, t) => {
								var r, s, i, d;
								if ("TrendingSearchElement" === (null === (r = null == t ? void 0 : t.node) || void 0 === r ? void 0 : r.__typename)) {
									const {
										contextPostInfo: r,
										queryString: o,
										id: a
									} = null == t ? void 0 : t.node;
									e.push({
										id: Object(n.a)(),
										post: r ? Object(h.f)(r) : null,
										rawQuery: o,
										searchQuery: a,
										section: u.c.trending,
										subredditInfo: "SubredditPost" === (null == r ? void 0 : r.__typename) && (null == r ? void 0 : r.subreddit) ? {
											icon: (null === (s = r.subreddit.styles) || void 0 === s ? void 0 : s.icon) || (null === (d = null === (i = r.subreddit.styles) || void 0 === i ? void 0 : i.legacyIcon) || void 0 === d ? void 0 : d.url),
											displayText: "r/" + r.subreddit.name
										} : null,
										type: u.b.text
									})
								}
								return e
							}, []) : []
						})((await (async (e, t, r) => {
							const s = {
								searchInput: {
									queryId: t,
									originPageType: r,
									ad: o().get("ad")
								}
							};
							return await Object(p.a)(e, {
								...b,
								variables: s
							}, {
								traceRequestName: "search_trending"
							})
						})(f(), y.fb(O, g.a.SERP), O.platform.currentPage ? y.v(O.platform.currentPage) : void 0)).body);
						if (r.length > 0) return t(v({
							items: r,
							subplacement: e
						})), r
					} else {
						const r = await ((e, t) => {
							const r = {
								withAds: 1,
								ad: o().get("ad"),
								subplacement: t
							};
							return Object(a.a)(Object(c.a)(e, [l.a]), {
								endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
								method: i.ob.GET,
								data: r
							})
						})(d(), e);
						if (r.ok) {
							const s = (e => {
								const t = [];
								if (e.body && e.body.trending_searches) {
									const r = e.body.trending_searches.length;
									for (let s = 0; s < r; s++) {
										const r = e.body.trending_searches[s],
											i = r.results.data.children.length > 0 ? r.results.data.children[0].data : null,
											d = {
												id: Object(n.a)(),
												post: i ? Object(m.a)(i) : null,
												rawQuery: r.query_string,
												searchQuery: r.display_string,
												section: u.c.trending,
												isWhitelisted: r.is_subreddit_whitelisted,
												subredditInfo: i ? {
													icon: i.sr_detail.community_icon || i.sr_detail.icon_img,
													displayText: i.sr_detail.display_name_prefixed
												} : null,
												subredditOccurrences: r.subreddit_occurences - 1,
												type: u.b.text
											};
										t.push(d)
									}
								}
								return t
							})(r);
							return t(v({
								items: s,
								subplacement: e
							})), s
						}
					}
					return null
				}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/polished/dist/polished.es.js"),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				o = r("./src/lib/addQueryParams/index.ts"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = r("./src/lib/prettyPrintNumber/index.ts"),
				u = r("./src/reddit/components/FlairWrapper/index.tsx"),
				p = r("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = r("./src/reddit/connectors/miniCardPost.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				g = r("./src/reddit/contexts/Post/index.tsx"),
				x = r("./src/reddit/controls/InternalLink/index.tsx"),
				_ = r("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = r("./src/reddit/helpers/name/index.ts"),
				f = r("./src/reddit/models/Flair/index.ts"),
				v = r("./src/reddit/models/Theme/index.ts"),
				O = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = r("./src/reddit/components/MiniCardPost/index.m.less"),
				C = r.n(P),
				j = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				S = r.n(j);
			const w = e => e.type === f.f.Spoiler,
				T = Object(h.v)();
			t.a = T(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: r,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: f,
					showSubredditMeta: P = !0,
					showSubredditName: j,
					subredditOrProfile: T
				} = e, N = h && h.preview && h.preview.url || void 0, k = h && h.isSponsored ? "promoted_trend" : "trending", I = h && Object(l.a)(h.permalink) || "", E = f && I || g && Object(o.a)("/search", {
					q: g.rawQuery,
					source: k
				}) || I, D = g ? g.subredditInfo && g.subredditInfo.icon : T && T.icon.url, V = g ? g.subredditInfo && g.subredditInfo.displayText : T && (T.displayText || T.name), U = h ? h.flair.filter(w) : [], A = h ? h.score : 0, R = h ? h.numComments : 0, F = h && h.isSponsored, L = Object(O.a)(e).body, W = `linear-gradient(\n      ${Object(n.f)(L,.2)},\n      ${Object(n.f)(L,.3)},\n      ${Object(n.f)(L,.4)},\n      ${Object(n.f)(L,.6)},\n      ${Object(n.f)(L,.8)},\n      ${L}\n    )`, M = d.a.createElement("div", {
					id: i,
					className: Object(a.a)(S.a.trendingPost, {
						[S.a["m-background"]]: !!N
					})
				}, d.a.createElement(x.default, {
					to: E
				}, d.a.createElement("div", {
					className: Object(a.a)(S.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(v.g)(Object(O.a)(e).body, N || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, F && d.a.createElement("div", {
					className: S.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), d.a.createElement("div", {
					className: Object(a.a)(S.a.innerContainer, C.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, d.a.createElement("h2", {
					className: h ? S.a.title : S.a.titleNoDescription
				}, e.title), h ? d.a.createElement("div", {
					className: Object(a.a)(S.a.description, r)
				}, U.length > 0 && d.a.createElement(u.a, {
					className: S.a.flair,
					titleFlair: U,
					nowrap: !0,
					post: h
				}), h.title) : d.a.createElement("div", {
					className: S.a.spacer
				}), P && D && V && d.a.createElement(_.a, {
					className: S.a.relatedSubredditMetaData,
					iconClassName: S.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", V)], {
						hk: "2YTyJf"
					})
				}), !P && h && d.a.createElement("div", {
					className: S.a.metaLine
				}, j && V && d.a.createElement("span", {
					className: S.a.meta
				}, Object(y.d)(V)), d.a.createElement("span", {
					className: S.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(A, "number", Object(m.b)(A))], {
					hk: "1Jm6il"
				})), d.a.createElement("span", {
					className: S.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(R, "number", Object(m.b)(R))], {
					hk: "311aXY"
				})))))));
				return F ? d.a.createElement(p.a, {
					post: h
				}, M) : M
			}))))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1wTtHt-VeTJLbmZj77AmN3",
				trendingPosts: "cslJXYWf-T5weuzAPoO3X",
				trendingPost: "_27FJDku8We0nUkyLPhJFnD"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "TRENDING_POSTS_CONTAINER", (function() {
				return N
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/search/trending.ts"),
				a = r("./src/reddit/components/Scroller/Simple.tsx"),
				c = r("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				l = r("./src/lib/classNames/index.ts"),
				m = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/constants/adEvents.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/search/searchImpressionId.ts"),
				h = r("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				g = r("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				_ = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				y = r.n(_);
			const f = "Carousel";
			class v extends n.a.Component {
				constructor() {
					super(...arguments), this.onPostClick = e => {
						const {
							post: t
						} = e;
						t && t.isSponsored && this.props.fireAdPixelsOfType(t, u.a.Click), Object(p.d)(p.a.SearchResults), this.props.trackPostClick(e)
					}
				}
				componentDidMount() {
					b.a.clear(h.a.Popular)
				}
				render() {
					const {
						styleCustomizations: e,
						trendingSearches: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(l.a)(y.a.container, e && e.containerClassName)
					}, n.a.createElement("div", {
						className: Object(l.a)(y.a.trendingPosts, e && e.trendingPostsClassName)
					}, t.map((t, r) => n.a.createElement(x.a, {
						postId: t.post ? t.post.id : "",
						key: t.post ? t.post.id : r,
						id: `${f}-${t.id}`,
						className: Object(l.a)(y.a.trendingPost, e && e.trendingPostClassName),
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
					fireAdPixelsOfType: (t, r) => e(Object(m.y)(t, r)),
					trackPostClick: t => e((e, r) => g.o({
						state: r(),
						trendingSearch: t,
						telemetrySource: h.a.Popular
					}))
				}))(v),
				P = r("./src/reddit/contexts/ApiContext.tsx"),
				C = r("./src/reddit/models/Search/index.ts"),
				j = r("./src/reddit/selectors/trending.ts"),
				S = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				w = r("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = "TrendingPostsContainer", k = Object(i.b)(() => Object(d.c)({
				trendingItems: e => Object(j.a)(e, C.d.tile)
			}), e => ({
				fetchTrendingItems: () => e(Object(o.b)(C.d.tile)),
				trackPostView: t => e((e, r) => g.p({
					state: r(),
					trendingSearch: t,
					telemetrySource: h.a.Popular
				}))
			})), I = 178;
			class E extends n.a.Component {
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
					e.forEach((e, r) => {
						t[r] && this.props.trackPostView(e)
					}), this.setState({
						trendingsVisibility: t
					})
				}
				onShowCardViewChanged() {
					const {
						trendingItems: e
					} = this.props, t = this.getCurrentTrendingVisibility();
					e.forEach((e, r) => {
						!this.state.trendingsVisibility[r] && t[r] && this.props.trackPostView(e)
					}), this.setState({
						trendingsVisibility: t
					})
				}
				getCurrentTrendingVisibility() {
					const {
						maxItemsCount: e,
						trendingItems: t
					} = this.props, r = new Array(e).fill(!1), s = document.getElementById(N), n = s ? s.getBoundingClientRect().bottom : 0;
					return t.forEach((e, t) => {
						const s = e.id ? document.getElementById(`${f}-${e.id}`) : void 0;
						r[t] = !!s && s.getBoundingClientRect().bottom <= n
					}), r
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
						maxItemsCount: r,
						showCardView: s,
						trendingItems: i,
						trendingPostCustomizations: d
					} = this.props, o = n.a.createElement(n.a.Fragment, null, n.a.createElement(c.a, {
						className: t
					}, T._("Trending today", null, {
						hk: "3rOxuO"
					})));
					if (!i || 0 === i.length) return n.a.createElement(w.a, {
						className: e,
						showCardView: !!s
					});
					const a = r ? i.slice(0, r) : i;
					return n.a.createElement(S.a, {
						id: N,
						className: e,
						header: o,
						showCardView: s
					}, n.a.createElement(O, {
						styleCustomizations: d,
						trendingSearches: a
					}))
				}
				render() {
					return n.a.createElement(a.b, null, this.scrollChildForItem())
				}
			}
			t.default = Object(P.b)(k(E))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/postFlair.ts"),
				o = r("./src/reddit/actions/tooltip.ts"),
				a = r("./src/reddit/models/Vote/index.ts"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/selectors/activeModalId.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				u = r("./src/reddit/selectors/postFlair.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: b.d,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.Y,
				hideNSFWPref: b.H,
				isActive: p.j,
				moderatorPermissions: m.m,
				modModeEnabled: c.W,
				showEditFlair: u.a
			}), (e, t) => {
				let {
					postId: r
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: r,
							previewFlair: s,
							selectedTemplateId: n
						} = t;
						return e(Object(d.h)({
							post: r,
							previewFlair: s,
							selectedTemplateId: n
						}))
					},
					handleVote: t => {
						const s = t === a.a.upvoted ? Object(i.ib)(r) : Object(i.v)(r);
						e(s)
					},
					onIgnoreReports: () => e(Object(i.eb)(r)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, r) => ({
				...r,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: s,
						selectedTemplateId: n
					} = e;
					return t.dispatchFlairChanged({
						post: r.post,
						previewFlair: s,
						selectedTemplateId: n
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/redditGQL/operations/TrendingSearches.json": function(e) {
			e.exports = JSON.parse('{"id":"7dfebe087245"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Trending.638c6166aeed2b78e916.js.map