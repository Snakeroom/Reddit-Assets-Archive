// https://www.redditstatic.com/desktop2x/Trending.494573f9f5a11c58a7f5.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
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
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/Translated/index.tsx"),
				u = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				h = s("./src/reddit/connectors/miniCardPost.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				P = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				j = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = s("./src/reddit/components/MiniCardPost/index.m.less"),
				y = s.n(v),
				T = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				N = s.n(T);
			const k = e => e.type === j.f.Spoiler,
				S = Object(b.t)(),
				w = e => {
					const {
						backgroundWrapperClassName: t,
						descriptionClassName: s,
						innerContainerClassName: n,
						onPostClick: c,
						trendingPost: h,
						trendingSearch: b,
						shouldOpenPost: j,
						showSubredditMeta: v = !0,
						showSubredditName: T,
						subredditOrProfile: S
					} = e, w = h && h.preview && h.preview.url || void 0, D = h && h.isSponsored ? "promoted_trend" : "trending", f = h && Object(d.a)(h.permalink) || "", E = j && f || b && Object(i.a)("/search", {
						q: b.rawQuery,
						source: D
					}) || f, I = b ? b.subredditInfo && b.subredditInfo.icon : S && S.icon.url, U = b ? b.subredditInfo && b.subredditInfo.displayText : S && (S.displayText || S.name), M = h ? h.flair.filter(k) : [], V = h ? h.score : 0, W = h ? h.numComments : 0, A = h && h.isSponsored, F = Object(_.a)(e).body, L = "linear-gradient(\n      ".concat(Object(r.j)(F, .2), ",\n      ").concat(Object(r.j)(F, .3), ",\n      ").concat(Object(r.j)(F, .4), ",\n      ").concat(Object(r.j)(F, .6), ",\n      ").concat(Object(r.j)(F, .8), ",\n      ").concat(F, "\n    )"), Y = a.a.createElement("div", {
						className: Object(o.a)(N.a.trendingPost, {
							[N.a["m-background"]]: !!w
						})
					}, a.a.createElement(g.a, {
						to: E
					}, a.a.createElement("div", {
						className: Object(o.a)(N.a.backgroundWrapper, y.a.backgroundWrapper, t),
						style: {
							background: Object(C.g)(Object(_.a)(e).body, w || Object(_.a)(e).banner.backgroundImage, "cover"),
							"--SearchDiscoveryUnits-TrendingPosts-Post-background": L
						}
					}, A && a.a.createElement("div", {
						className: N.a.promoted
					}, a.a.createElement(O.c, null, "promoted")), a.a.createElement("div", {
						className: Object(o.a)(N.a.innerContainer, y.a.innerContainer, n),
						onClick: c,
						title: h ? h.title : ""
					}, a.a.createElement("h2", {
						className: h ? N.a.title : N.a.titleNoDescription
					}, e.title), h ? a.a.createElement("div", {
						className: Object(o.a)(N.a.description, s)
					}, M.length > 0 && a.a.createElement(m.a, {
						className: N.a.flair,
						titleFlair: M,
						nowrap: !0,
						post: h,
						showCategoryTag: !1
					}), h.title) : a.a.createElement("div", {
						className: N.a.spacer
					}), v && I && U && a.a.createElement(x.a, {
						className: N.a.relatedSubredditMetaData,
						iconClassName: N.a.subredditIcon,
						iconUrl: I || void 0,
						suffix: a.a.createElement(p.a, {
							msgId: "search.subredditMetaData.andMore",
							replacements: {
								displayText: U
							}
						})
					}), !v && h && a.a.createElement("div", {
						className: N.a.metaLine
					}, T && U && a.a.createElement("span", {
						className: N.a.meta
					}, Object(P.b)(U)), a.a.createElement("span", {
						className: N.a.meta
					}, a.a.createElement(O.c, null, "".concat(Object(l.b)(V), " "), a.a.createElement(O.a, {
						count: V,
						name: "score",
						plural: "points",
						singular: "point"
					}))), a.a.createElement("span", {
						className: N.a.meta
					}, a.a.createElement(O.c, null, "".concat(Object(l.b)(W), " "), a.a.createElement(O.a, {
						count: W,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))))));
					return A ? a.a.createElement(u.a, {
						post: h,
						children: Y
					}) : Y
				};
			class D extends a.a.Component {
				componentDidMount() {
					const {
						trackPostView: e,
						trendingSearch: t
					} = this.props;
					e && e(t)
				}
				render() {
					return w(this.props)
				}
			}
			t.a = S(Object(h.a)(Object(c.a)(D)))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/search/trending.ts"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				u = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				h = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				b = s.n(h);
			class g extends n.a.Component {
				constructor() {
					super(...arguments), this.onPostClick = e => {
						const {
							post: t
						} = e;
						t && t.isSponsored && this.props.fireAdPixelsOfType(t, m.a.Click), this.props.trackPostClick(e)
					}
				}
				render() {
					const {
						styleCustomizations: e,
						trendingSearches: t,
						trackPostView: s
					} = this.props;
					return n.a.createElement("div", {
						className: Object(d.a)(b.a.container, e && e.containerClassName)
					}, n.a.createElement("div", {
						className: Object(d.a)(b.a.trendingPosts, e && e.trendingPostsClassName)
					}, t.map((t, r) => n.a.createElement(u.a, {
						className: Object(d.a)(b.a.trendingPost, e && e.trendingPostClassName),
						forceLoadMedia: !0,
						showMetaLine: !1,
						title: t.searchQuery,
						trendingSearch: t,
						trackPostView: s,
						key: t.post ? t.post.id : r,
						trendingPost: t.post,
						postId: t.post ? t.post.id : "",
						onPostClick: () => this.onPostClick(t)
					}))))
				}
			}
			var x = Object(a.b)(null, e => ({
					fireAdPixelsOfType: (t, s) => e(Object(l.y)(t, s)),
					trackPostView: t => e((e, s) => p.H(s(), t)),
					trackPostClick: t => e((e, s) => p.G(s(), t))
				}))(g),
				P = s("./src/reddit/components/Translated/index.tsx"),
				O = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/reddit/selectors/trending.ts"),
				C = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				_ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const v = Object(a.b)(() => Object(i.c)({
				trendingItems: j.a
			}), e => ({
				fetchTrendingItems: () => e(Object(o.b)())
			}));
			class y extends n.a.Component {
				componentDidMount() {
					this.props.fetchTrendingItems()
				}
				render() {
					const e = n.a.createElement(n.a.Fragment, null, n.a.createElement(c.a, {
						className: this.props.discoveryUnitHeaderClassName
					}, n.a.createElement(P.a, {
						msgId: "discoveryUnits.trendingToday"
					})));
					if (!this.props.trendingItems || 0 === this.props.trendingItems.length) return n.a.createElement(_.a, {
						className: this.props.className,
						showCardView: !!this.props.showCardView
					});
					const t = this.props.maxItemsCount ? this.props.trendingItems.slice(0, this.props.maxItemsCount) : this.props.trendingItems;
					return n.a.createElement(C.a, {
						className: this.props.className,
						header: e,
						showCardView: this.props.showCardView
					}, n.a.createElement(x, {
						styleCustomizations: this.props.trendingPostCustomizations,
						trendingSearches: t
					}))
				}
			}
			t.default = Object(O.b)(v(y))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: h.b,
				crosspostRoot: u.c,
				crosspostSubredditOrProfile: u.d,
				currentUser: h.i,
				flairStyleTemplate: d.P,
				hideNSFWPref: h.y,
				isActive: u.h,
				language: h.O,
				moderatorPermissions: m.i,
				modModeEnabled: d.N,
				post: u.M,
				showEditFlair: p.a,
				subredditOrProfile: u.Y,
				userIsOp: h.eb
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
						return e(Object(i.h)({
							post: s,
							previewFlair: r,
							selectedTemplateId: n
						}))
					},
					handleVote: t => {
						const r = t === c.a.upvoted ? Object(a.X)(s) : Object(a.u)(s);
						e(r)
					},
					onIgnoreReports: () => e(Object(a.V)(s)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign({}, s, e, t, {
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
			}));
			t.a = b
		}
	}
]);
//# sourceMappingURL=Trending.494573f9f5a11c58a7f5.js.map