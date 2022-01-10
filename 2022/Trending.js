// https://www.redditstatic.com/desktop2x/Trending.2638d1ce234692d40ef2.js
// Retrieved at 1/10/2022, 2:00:04 PM by Reddit Dataminer v1.0.0
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
				a = s("./src/lib/constants/index.ts"),
				d = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/extractQueryParams/index.ts"));
			var o = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				p = s("./src/reddit/models/Search/index.ts");
			var u = (e, t) => {
				const s = {
					withAds: 1,
					ad: Object(d.a)(window.location.href).get("ad"),
					subplacement: t
				};
				return Object(o.a)(Object(c.a)(e, [l.a]), {
					endpoint: `${e.apiUrl}/api/trending_searches_v1.json`,
					method: a.jb.GET,
					data: s
				})
			};
			const b = "PAGE__TRENDING_SEARCHES_LOADED",
				h = Object(r.a)(b),
				g = e => async (t, s, {
					apiContext: r
				}) => {
					const n = await u(r(), e);
					if (n.ok) {
						const s = (e => {
							const t = [];
							if (e.body && e.body.trending_searches) {
								const s = e.body.trending_searches.length;
								for (let r = 0; r < s; r++) {
									const s = e.body.trending_searches[r],
										n = s.results.data.children.length > 0 ? s.results.data.children[0].data : null,
										a = {
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
									t.push(a)
								}
							}
							return t
						})(n);
						return t(h({
							items: s,
							subplacement: e
						})), s
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
				a = s.n(i),
				d = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				u = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(P),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				v = s.n(w);
			const T = e => e.type === O.f.Spoiler,
				S = Object(h.u)();
			t.a = S(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: O,
					showSubredditMeta: P = !0,
					showSubredditName: w,
					subredditOrProfile: S
				} = e, N = h && h.preview && h.preview.url || void 0, k = h && h.isSponsored ? "promoted_trend" : "trending", E = h && Object(l.a)(h.permalink) || "", I = O && E || g && Object(d.a)("/search", {
					q: g.rawQuery,
					source: k
				}) || E, D = g ? g.subredditInfo && g.subredditInfo.icon : S && S.icon.url, U = g ? g.subredditInfo && g.subredditInfo.displayText : S && (S.displayText || S.name), V = h ? h.flair.filter(T) : [], A = h ? h.score : 0, R = h ? h.numComments : 0, F = h && h.isSponsored, L = Object(y.a)(e).body, W = `linear-gradient(\n      ${Object(n.f)(L,.2)},\n      ${Object(n.f)(L,.3)},\n      ${Object(n.f)(L,.4)},\n      ${Object(n.f)(L,.6)},\n      ${Object(n.f)(L,.8)},\n      ${L}\n    )`, M = a.a.createElement("div", {
					id: i,
					className: Object(o.a)(v.a.trendingPost, {
						[v.a["m-background"]]: !!N
					})
				}, a.a.createElement(_.a, {
					to: I
				}, a.a.createElement("div", {
					className: Object(o.a)(v.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(f.g)(Object(y.a)(e).body, N || Object(y.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, F && a.a.createElement("div", {
					className: v.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(o.a)(v.a.innerContainer, j.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? v.a.title : v.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(o.a)(v.a.description, s)
				}, V.length > 0 && a.a.createElement(p.a, {
					className: v.a.flair,
					titleFlair: V,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: v.a.spacer
				}), P && D && U && a.a.createElement(x.a, {
					className: v.a.relatedSubredditMetaData,
					iconClassName: v.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", U)], {
						hk: "2YTyJf"
					})
				}), !P && h && a.a.createElement("div", {
					className: v.a.metaLine
				}, w && U && a.a.createElement("span", {
					className: v.a.meta
				}, Object(C.c)(U)), a.a.createElement("span", {
					className: v.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(A, "number", Object(m.b)(A))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: v.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(R, "number", Object(m.b)(R))], {
					hk: "311aXY"
				})))))));
				return F ? a.a.createElement(u.a, {
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
				return T
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/search/trending.ts"),
				o = s("./src/reddit/components/Scroller/Simple.tsx"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				h = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				g = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				_ = s.n(g);
			const x = "Carousel";
			class C extends n.a.Component {
				constructor() {
					super(...arguments), this.onPostClick = e => {
						const {
							post: t
						} = e;
						t && t.isSponsored && this.props.fireAdPixelsOfType(t, p.a.Click), Object(u.e)(u.a.SearchResults), this.props.trackPostClick(e)
					}
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
					}, t.map((t, s) => n.a.createElement(h.a, {
						postId: t.post ? t.post.id : "",
						key: t.post ? t.post.id : s,
						id: `${x}-${t.id}`,
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
					fireAdPixelsOfType: (t, s) => e(Object(m.z)(t, s)),
					trackPostClick: t => e((e, s) => b.v(s(), t, b.a.POPULAR_CAROUSEL))
				}))(C),
				f = s("./src/reddit/contexts/ApiContext.tsx"),
				y = s("./src/reddit/models/Search/index.ts"),
				P = s("./src/reddit/selectors/trending.ts"),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = "TrendingPostsContainer", S = Object(i.b)(() => Object(a.c)({
				trendingItems: e => Object(P.a)(e, y.d.tile)
			}), e => ({
				fetchTrendingItems: () => e(Object(d.b)(y.d.tile)),
				trackPostView: t => e((e, s) => b.w(s(), t, b.a.POPULAR_CAROUSEL))
			})), N = 178;
			class k extends n.a.Component {
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
						const r = e.id ? document.getElementById(`${x}-${e.id}`) : void 0;
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
					} = this.props, d = n.a.createElement(n.a.Fragment, null, n.a.createElement(c.a, {
						className: t
					}, v._("Trending today", null, {
						hk: "3rOxuO"
					})));
					if (!i || 0 === i.length) return n.a.createElement(w.a, {
						className: e,
						showCardView: !!r
					});
					const o = s ? i.slice(0, s) : i;
					return n.a.createElement(j.a, {
						id: T,
						className: e,
						header: d,
						showCardView: r
					}, n.a.createElement(O, {
						styleCustomizations: a,
						trendingSearches: o
					}))
				}
				render() {
					return n.a.createElement(o.b, null, this.scrollChildForItem())
				}
			}
			t.default = Object(f.b)(S(k))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				o = s("./src/reddit/models/Vote/index.ts"),
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
				flairStyleTemplate: c.U,
				hideNSFWPref: b.C,
				isActive: u.j,
				moderatorPermissions: m.l,
				modModeEnabled: c.S,
				showEditFlair: p.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				}) => e(Object(a.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: r
				})),
				handleVote: s => {
					const r = s === o.a.upvoted ? Object(i.jb)(t) : Object(i.w)(t);
					e(r)
				},
				onIgnoreReports: () => e(Object(i.fb)(t)),
				onOpenReportsDropdown: t => e(Object(d.h)({
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Trending.2638d1ce234692d40ef2.js.map