// https://www.redditstatic.com/desktop2x/Trending.f5cb3f97b6fe442338af.js
// Retrieved at 6/30/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
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
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/FlairWrapper/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				u = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				P = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/components/MiniCardPost/index.m.less"),
				f = s.n(C),
				v = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				y = s.n(v);
			const k = e => e.type === P.f.Spoiler,
				N = Object(h.t)();
			t.a = N(Object(u.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: c,
					onPostClick: u,
					trendingPost: h,
					trendingSearch: P,
					shouldOpenPost: C,
					showSubredditMeta: v = !0,
					showSubredditName: N,
					subredditOrProfile: T,
					trackPostView: w
				} = e;
				Object(a.useEffect)(() => {
					w && w(P)
				}, [w, P]);
				const S = h && h.preview && h.preview.url || void 0,
					D = h && h.isSponsored ? "promoted_trend" : "trending",
					I = h && Object(l.a)(h.permalink) || "",
					U = C && I || P && Object(o.a)("/search", {
						q: P.rawQuery,
						source: D
					}) || I,
					E = P ? P.subredditInfo && P.subredditInfo.icon : T && T.icon.url,
					V = P ? P.subredditInfo && P.subredditInfo.displayText : T && (T.displayText || T.name),
					W = h ? h.flair.filter(k) : [],
					F = h ? h.score : 0,
					L = h ? h.numComments : 0,
					M = h && h.isSponsored,
					A = Object(j.a)(e).body,
					R = "linear-gradient(\n      ".concat(Object(n.g)(A, .2), ",\n      ").concat(Object(n.g)(A, .3), ",\n      ").concat(Object(n.g)(A, .4), ",\n      ").concat(Object(n.g)(A, .6), ",\n      ").concat(Object(n.g)(A, .8), ",\n      ").concat(A, "\n    )"),
					Y = i.a.createElement("div", {
						className: Object(d.a)(y.a.trendingPost, {
							[y.a["m-background"]]: !!S
						})
					}, i.a.createElement(g.a, {
						to: U
					}, i.a.createElement("div", {
						className: Object(d.a)(y.a.backgroundWrapper, f.a.backgroundWrapper, t),
						style: {
							background: Object(O.g)(Object(j.a)(e).body, S || Object(j.a)(e).banner.backgroundImage, "cover"),
							"--SearchDiscoveryUnits-TrendingPosts-Post-background": R
						}
					}, M && i.a.createElement("div", {
						className: y.a.promoted
					}, r.fbt._("promoted", null, {
						hk: "1mLJfa"
					})), i.a.createElement("div", {
						className: Object(d.a)(y.a.innerContainer, f.a.innerContainer, c),
						onClick: u,
						title: h ? h.title : ""
					}, i.a.createElement("h2", {
						className: h ? y.a.title : y.a.titleNoDescription
					}, e.title), h ? i.a.createElement("div", {
						className: Object(d.a)(y.a.description, s)
					}, W.length > 0 && i.a.createElement(p.a, {
						className: y.a.flair,
						titleFlair: W,
						nowrap: !0,
						post: h,
						showCategoryTag: !1
					}), h.title) : i.a.createElement("div", {
						className: y.a.spacer
					}), v && E && V && i.a.createElement(x.a, {
						className: y.a.relatedSubredditMetaData,
						iconClassName: y.a.subredditIcon,
						iconUrl: E || void 0,
						suffix: r.fbt._("{subredditName} and more", [r.fbt._param("subredditName", V)], {
							hk: "2YTyJf"
						})
					}), !v && h && i.a.createElement("div", {
						className: y.a.metaLine
					}, N && V && i.a.createElement("span", {
						className: y.a.meta
					}, Object(_.b)(V)), i.a.createElement("span", {
						className: y.a.meta
					}, r.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [r.fbt._plural(F, "number", Object(m.b)(F))], {
						hk: "1Jm6il"
					})), i.a.createElement("span", {
						className: y.a.meta
					}, r.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [r.fbt._plural(L, "number", Object(m.b)(L))], {
						hk: "311aXY"
					})))))));
				return M ? i.a.createElement(b.a, {
					post: h
				}, Y) : Y
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/search/trending.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				b = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				u = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),
				h = s.n(u);
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
						className: Object(c.a)(h.a.container, e && e.containerClassName)
					}, n.a.createElement("div", {
						className: Object(c.a)(h.a.trendingPosts, e && e.trendingPostsClassName)
					}, t.map((t, r) => n.a.createElement(b.a, {
						className: Object(c.a)(h.a.trendingPost, e && e.trendingPostClassName),
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
					fireAdPixelsOfType: (t, s) => e(Object(l.C)(t, s)),
					trackPostView: t => e((e, s) => p.J(s(), t)),
					trackPostClick: t => e((e, s) => p.I(s(), t))
				}))(g),
				_ = s("./src/reddit/contexts/ApiContext.tsx"),
				P = s("./src/reddit/selectors/trending.ts"),
				O = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx");
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = Object(a.b)(() => Object(i.c)({
				trendingItems: P.a
			}), e => ({
				fetchTrendingItems: () => e(Object(o.b)())
			}));
			class v extends n.a.Component {
				componentDidMount() {
					this.props.fetchTrendingItems()
				}
				render() {
					const e = n.a.createElement(n.a.Fragment, null, n.a.createElement(d.a, {
						className: this.props.discoveryUnitHeaderClassName
					}, C._("Trending today", null, {
						hk: "3rOxuO"
					})));
					if (!this.props.trendingItems || 0 === this.props.trendingItems.length) return n.a.createElement(j.a, {
						className: this.props.className,
						showCardView: !!this.props.showCardView
					});
					const t = this.props.maxItemsCount ? this.props.trendingItems.slice(0, this.props.maxItemsCount) : this.props.trendingItems;
					return n.a.createElement(O.a, {
						className: this.props.className,
						header: e,
						showCardView: this.props.showCardView
					}, n.a.createElement(x, {
						styleCustomizations: this.props.trendingPostCustomizations,
						trendingSearches: t
					}))
				}
			}
			t.default = Object(_.b)(f(v))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const h = Object(r.b)(() => Object(n.c)({
				activeModalId: l.a,
				autoplayPref: u.b,
				crosspostRoot: b.d,
				crosspostSubredditOrProfile: b.e,
				currentUser: u.i,
				flairStyleTemplate: c.R,
				hideNSFWPref: u.z,
				isActive: b.j,
				moderatorPermissions: m.i,
				modModeEnabled: c.P,
				post: b.O,
				showEditFlair: p.a,
				subredditOrProfile: b.bb,
				userIsOp: u.hb
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
						const r = t === d.a.upvoted ? Object(a.db)(s) : Object(a.z)(s);
						e(r)
					},
					onIgnoreReports: () => e(Object(a.bb)(s)),
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
			}), {
				forwardRef: !0
			});
			t.a = h
		}
	}
]);
//# sourceMappingURL=Trending.f5cb3f97b6fe442338af.js.map