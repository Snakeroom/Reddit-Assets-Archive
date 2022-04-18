// https://www.redditstatic.com/desktop2x/Trending.d9a54a5d9af5f85e1925.js
// Retrieved at 4/18/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
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
					method: a.kb.GET,
					data: s
				})
			};
			const b = "PAGE__TRENDING_SEARCHES_LOADED",
				h = Object(r.a)(b),
				g = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const a = await u(n(), e);
					if (a.ok) {
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
						})(a);
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
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(P),
				w = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				S = s.n(w);
			const v = e => e.type === C.f.Spoiler,
				T = Object(h.u)();
			t.a = T(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: C,
					showSubredditMeta: P = !0,
					showSubredditName: w,
					subredditOrProfile: T
				} = e, k = h && h.preview && h.preview.url || void 0, N = h && h.isSponsored ? "promoted_trend" : "trending", E = h && Object(l.a)(h.permalink) || "", I = C && E || g && Object(d.a)("/search", {
					q: g.rawQuery,
					source: N
				}) || E, D = g ? g.subredditInfo && g.subredditInfo.icon : T && T.icon.url, V = g ? g.subredditInfo && g.subredditInfo.displayText : T && (T.displayText || T.name), U = h ? h.flair.filter(v) : [], A = h ? h.score : 0, F = h ? h.numComments : 0, R = h && h.isSponsored, L = Object(O.a)(e).body, W = `linear-gradient(\n      ${Object(n.f)(L,.2)},\n      ${Object(n.f)(L,.3)},\n      ${Object(n.f)(L,.4)},\n      ${Object(n.f)(L,.6)},\n      ${Object(n.f)(L,.8)},\n      ${L}\n    )`, M = a.a.createElement("div", {
					id: i,
					className: Object(o.a)(S.a.trendingPost, {
						[S.a["m-background"]]: !!k
					})
				}, a.a.createElement(x.a, {
					to: I
				}, a.a.createElement("div", {
					className: Object(o.a)(S.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(f.g)(Object(O.a)(e).body, k || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, R && a.a.createElement("div", {
					className: S.a.promoted
				}, r.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(o.a)(S.a.innerContainer, j.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? S.a.title : S.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(o.a)(S.a.description, s)
				}, U.length > 0 && a.a.createElement(p.a, {
					className: S.a.flair,
					titleFlair: U,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: S.a.spacer
				}), P && D && V && a.a.createElement(_.a, {
					className: S.a.relatedSubredditMetaData,
					iconClassName: S.a.subredditIcon,
					iconUrl: D || void 0,
					suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", V)], {
						hk: "2YTyJf"
					})
				}), !P && h && a.a.createElement("div", {
					className: S.a.metaLine
				}, w && V && a.a.createElement("span", {
					className: S.a.meta
				}, Object(y.c)(V)), a.a.createElement("span", {
					className: S.a.meta
				}, r.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [r.fbt._plural(A, "number", Object(m.b)(A))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: S.a.meta
				}, r.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [r.fbt._plural(F, "number", Object(m.b)(F))], {
					hk: "311aXY"
				})))))));
				return R ? a.a.createElement(u.a, {
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
				return k
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
				b = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				h = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				g = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				x = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				_ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				y = s.n(_);
			const C = "Carousel";
			class f extends n.a.Component {
				constructor() {
					super(...arguments), this.onPostClick = e => {
						const {
							post: t
						} = e;
						t && t.isSponsored && this.props.fireAdPixelsOfType(t, p.a.Click), Object(u.e)(u.a.SearchResults), this.props.trackPostClick(e)
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
					}, t.map((t, s) => n.a.createElement(x.a, {
						postId: t.post ? t.post.id : "",
						key: t.post ? t.post.id : s,
						id: `${C}-${t.id}`,
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
					fireAdPixelsOfType: (t, s) => e(Object(m.z)(t, s)),
					trackPostClick: t => e((e, s) => g.u({
						state: s(),
						trendingSearch: t,
						telemetrySource: h.a.Popular
					}))
				}))(f),
				P = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/reddit/models/Search/index.ts"),
				w = s("./src/reddit/selectors/trending.ts"),
				S = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				v = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = "TrendingPostsContainer", N = Object(i.b)(() => Object(a.c)({
				trendingItems: e => Object(w.a)(e, j.d.tile)
			}), e => ({
				fetchTrendingItems: () => e(Object(d.b)(j.d.tile)),
				trackPostView: t => e((e, s) => g.v({
					state: s(),
					trendingSearch: t,
					telemetrySource: h.a.Popular
				}))
			})), E = 178;
			class I extends n.a.Component {
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
					} = this.props, s = new Array(e).fill(!1), r = document.getElementById(k), n = r ? r.getBoundingClientRect().bottom : 0;
					return t.forEach((e, t) => {
						const r = e.id ? document.getElementById(`${C}-${e.id}`) : void 0;
						s[t] = !!r && r.getBoundingClientRect().bottom <= n
					}), s
				}
				scrollChildForItem() {
					return [{
						estHeight: E,
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
					}, T._("Trending today", null, {
						hk: "3rOxuO"
					})));
					if (!i || 0 === i.length) return n.a.createElement(v.a, {
						className: e,
						showCardView: !!r
					});
					const o = s ? i.slice(0, s) : i;
					return n.a.createElement(S.a, {
						id: k,
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
			t.default = Object(P.b)(N(I))
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
				flairStyleTemplate: c.V,
				hideNSFWPref: b.F,
				isActive: u.j,
				moderatorPermissions: m.m,
				modModeEnabled: c.T,
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
						const r = t === o.a.upvoted ? Object(i.kb)(s) : Object(i.w)(s);
						e(r)
					},
					onIgnoreReports: () => e(Object(i.gb)(s)),
					onOpenReportsDropdown: t => e(Object(d.h)({
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
			t.a = h
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Trending.d9a54a5d9af5f85e1925.js.map