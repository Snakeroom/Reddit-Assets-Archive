// https://www.redditstatic.com/desktop2x/FrontpageSidebar.e10fa7b51234f36414ba.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./node_modules/lodash/first.js": function(e, t, s) {
			e.exports = s("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/IdCard/async.tsx"),
				c = s("./src/config.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/components/LayerPromotionWidget/index.m.less"),
				m = s.n(l);
			const p = "".concat(c.a.assetPath, "/img/layer_promotion_image.png");
			var u = () => a.a.createElement("div", null, a.a.createElement("a", {
					href: "http://reddit.com/r/Layer"
				}, a.a.createElement("img", {
					alt: Object(d.c)("Layer promotion"),
					className: m.a.image,
					src: p
				}))),
				b = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/i18n/components.tsx"),
				k = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				y = s("./src/reddit/components/PremiumCTA/index.m.less"),
				O = s.n(y);
			class j extends a.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return a.a.createElement(g.a, null, a.a.createElement(h.a, {
						className: e,
						contentOnly: !0
					}, a.a.createElement("div", {
						className: O.a.wrapper
					}, a.a.createElement(k.a, {
						className: O.a.icon
					}), a.a.createElement("div", {
						className: O.a.content
					}, a.a.createElement("div", {
						className: O.a.title
					}, a.a.createElement(x.c, null, "Reddit Premium")), a.a.createElement("div", {
						className: O.a.description
					}, a.a.createElement(x.c, null, "The best Reddit experience, with monthly Coins"))), a.a.createElement(E.e, {
						className: O.a.cta,
						onClick: t
					}, a.a.createElement(x.c, null, "Try Now")))))
				}
			}
			var N = Object(r.b)(void 0, e => ({
					onClickPremium: () => e(Object(b.b)("/premium"))
				}))(j),
				C = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/makeListingKey/index.ts"),
				S = s("./src/reddit/actions/subreddit.ts"),
				v = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				P = s("./src/reddit/components/SidebarPostList/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				w = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				I = s("./src/reddit/selectors/categoriesPlacement.ts"),
				F = s("./src/reddit/selectors/discoveryUnit.ts"),
				U = s("./node_modules/lodash/uniq.js"),
				B = s.n(U),
				W = s("./src/lib/makeOnboardingSubredditsKey/index.ts"),
				A = s("./src/reddit/constants/categories.tsx"),
				D = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				R = s("./src/reddit/selectors/meta.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts");
			const H = Object(_.a)(T.b.Popular, C.N.TOP),
				Q = Object(i.a)(e => Object(M.O)(e, {
					listingKey: H
				}), e => B()(e.map(e => e.belongsTo.id))),
				K = (Object(i.a)(e => {
					const t = Q(e);
					return Object(V.Z)(e, {
						subredditIds: t
					})
				}, e => e.map(e => e.name)), e => {
					const t = {
							city: Object(R.a)(e),
							country: Object(R.b)(e),
							region: Object(R.i)(e)
						},
						s = Object(W.a)(t);
					return Object(V.q)(e, {
						key: s
					})
				}),
				Z = Object(i.a)(K, A.d);
			var J = s("./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less"),
				G = s.n(J);
			const X = 2,
				q = 5,
				Y = Object(i.c)({
					discoveryUnit: e => Object(F.c)(e, {
						unitName: w.g
					}),
					geoObject: I.a,
					posts: e => {
						const t = Z(e),
							s = Object(_.a)(t, C.N.HOT);
						return Object(P.b)(e, {
							listingKey: s
						})
					},
					subredditName: Z
				});
			class z extends a.a.Component {
				constructor() {
					super(...arguments), this.loadMorePosts = (e, t) => {
						t - e <= X && this.props.loadMorePosts(this.props.subredditName)
					}, this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.B)(this.props.discoveryUnit, e))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e,
						geoObject: t,
						posts: s,
						subredditName: n
					} = this.props;
					if (0 === s.length) return null;
					const r = Object(_.a)(n, C.N.HOT);
					return a.a.createElement(h.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, a.a.createElement(v.a, {
						showIcon: !0
					}, a.a.createElement("span", {
						className: G.a.GeoObject
					}, t), a.a.createElement(x.c, null, "trends")), a.a.createElement(P.a, {
						listingKey: r,
						listingName: T.b.Popular,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: q
					}))
				}
			}
			var $ = Object(r.b)(Y, e => ({
				loadMorePosts: t => e(Object(S.r)({
					sort: C.N.TOP,
					subredditName: t
				}))
			}))(Object(f.b)(z));
			const ee = Object(_.a)(T.b.Popular, C.N.TOP),
				te = 2,
				se = 5,
				ne = Object(i.c)({
					discoveryUnit: e => Object(F.c)(e, {
						unitName: w.j
					})
				});
			class ae extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.B)(this.props.discoveryUnit, e))
					}, this.loadMorePosts = (e, t) => {
						t - e <= te && this.props.loadMorePosts()
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e
					} = this.props;
					return a.a.createElement(h.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, a.a.createElement(v.a, {
						showIcon: !0
					}, a.a.createElement(x.c, null, "Top popular for the month")), a.a.createElement(P.a, {
						listingKey: ee,
						listingName: T.b.Popular,
						moreButtonText: a.a.createElement(x.c, null, "Refresh"),
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: se
					}))
				}
			}
			var re = Object(r.b)(ne, e => ({
					loadMorePosts: () => e(Object(S.r)({
						sort: C.N.TOP,
						subredditName: T.b.Popular
					}))
				}))(Object(f.b)(ae)),
				ie = s("./src/lib/classNames/index.ts"),
				oe = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ce = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				de = s("./src/reddit/helpers/overlay/index.ts"),
				le = s("./src/lib/isUrl/index.ts"),
				me = s("./src/lib/prettyPrintNumber/index.ts"),
				pe = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ue = s("./src/reddit/components/Thumbnail/index.tsx"),
				be = s("./src/reddit/helpers/name/index.ts"),
				ge = s("./src/reddit/models/Flair/index.ts"),
				he = s("./src/reddit/components/SidebarTrendingPostList/SmallPost/index.m.less"),
				Ee = s.n(he);
			const xe = e => e.type === ge.f.Nsfw || e.type === ge.f.Spoiler,
				ke = Object(i.c)({
					subredditOrProfile: M.U
				});
			class ye extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							trendingSearch: t,
							containerOnClick: s
						} = this.props;
						t.post && (e(t.post), s && s(t.post.id))
					}, this.onClickThumbnail = e => {
						const {
							trendingSearch: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && t.post && s(t.post.id)
					}
				}
				render() {
					const {
						className: e,
						subredditOrProfile: t,
						trendingSearch: s
					} = this.props, {
						post: n
					} = s, r = !!n && s.isWhitelisted && Object(le.a)(Object(ue.b)({
						post: n
					})), i = n && s.isWhitelisted && n.flair.filter(xe), o = s.subredditInfo && s.subredditInfo.displayText || t && (t.displayText || t.name), c = n ? n.title : "", d = n ? n.score : 0, l = n ? n.numComments : 0;
					return a.a.createElement("div", {
						className: Object(ie.a)(Ee.a.container, e),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: Ee.a.mainLine
					}, !!n && r && a.a.createElement("div", {
						className: Ee.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(ue.a, {
						post: n
					})), a.a.createElement("div", {
						className: Object(ie.a)(Ee.a.title, !r && Ee.a.titleSingle),
						title: c
					}, n && i && i.length > 0 && a.a.createElement(pe.a, {
						className: Ee.a.flair,
						titleFlair: i,
						nowrap: !0,
						post: n,
						showCategoryTag: !1
					}), c)), a.a.createElement("div", {
						className: Ee.a.metaLine
					}, o && a.a.createElement("span", {
						className: Ee.a.meta
					}, Object(be.b)(o)), a.a.createElement("span", {
						className: Ee.a.meta
					}, a.a.createElement(x.c, null, "".concat(Object(me.b)(d), " "), a.a.createElement(x.a, {
						count: d,
						name: "score",
						plural: "points",
						singular: "point"
					}))), a.a.createElement("span", {
						className: Ee.a.meta
					}, a.a.createElement(x.c, null, "".concat(Object(me.b)(l), " "), a.a.createElement(x.a, {
						count: l,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					})))))
				}
			}
			var Oe = Object(r.b)(ke, e => ({
					openLightbox: t => e(Object(de.a)(t.permalink))
				}))(ye),
				je = s("./src/reddit/components/SidebarTrendingPostList/index.m.less"),
				Ne = s.n(je);
			const Ce = 5;
			class _e extends a.a.Component {
				constructor() {
					super(...arguments), this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							trendingSearches: s
						} = this.props, [n] = s, a = n.post;
						a && (t(a), e && e(a.id))
					}, this.renderSmallPost = e => {
						const {
							onPostClick: t,
							onPostVisible: s
						} = this.props, n = e.post ? e.post.id : "";
						return a.a.createElement(ce.a, {
							onPostVisible: s,
							postId: n
						}, a.a.createElement(Oe, {
							className: Ne.a.smallPost,
							containerOnClick: t,
							key: n,
							postId: n,
							thumbnailOnClick: t,
							trendingSearch: e
						}))
					}
				}
				render() {
					const {
						className: e,
						onPostVisible: t,
						trendingSearches: s
					} = this.props;
					if (0 === s.length) return null;
					const [n, ...r] = s.slice(0, Ce), i = n.post ? n.post.id : "";
					return a.a.createElement("div", {
						className: Object(ie.a)(Ne.a.container, e)
					}, a.a.createElement(ce.a, {
						onPostVisible: t,
						postId: i
					}, a.a.createElement(oe.a, {
						backgroundWrapperClassName: Ne.a.largePostBackgroundWrapper,
						descriptionClassName: Ne.a.largePostDescription,
						innerContainerClassName: Ne.a.largePostInnerContainer,
						onPostClick: this.openLargePost,
						postId: i,
						shouldOpenPost: !0,
						showSubredditMeta: !1,
						showSubredditName: !0,
						trendingPost: n.post,
						trendingSearch: n
					})), r.map(this.renderSmallPost))
				}
			}
			var Se = Object(r.b)(null, e => ({
					openPost: t => e(Object(de.a)(t.permalink))
				}))(_e),
				ve = s("./src/reddit/selectors/trending.ts");
			const Pe = Object(i.c)({
				discoveryUnit: e => Object(F.c)(e, {
					unitName: w.o
				}),
				trendingSearches: Object(i.a)(ve.a, e => e.filter(e => e.post))
			});
			class fe extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.B)(this.props.discoveryUnit, e))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e,
						trendingSearches: t
					} = this.props;
					return 0 === t.length ? null : a.a.createElement(h.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, a.a.createElement(v.a, {
						showIcon: !0
					}, a.a.createElement(x.c, null, "Trends")), a.a.createElement(Se, {
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						trendingSearches: t
					}))
				}
			}
			var Te = Object(r.b)(Pe)(Object(f.b)(fe)),
				Le = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				we = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ie = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Fe = s("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				Ue = s.n(Fe);
			const Be = e => {
					let {
						to: t,
						title: s
					} = e;
					return a.a.createElement(Le.a, {
						subredditName: s,
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(we.a, {
						className: Ue.a.Link,
						to: t,
						title: s
					}, s))
				},
				We = e => {
					let {
						title: t,
						isOpened: s,
						isExpanded: n,
						children: r,
						onToggle: i,
						onExpand: o
					} = e;
					return a.a.createElement("div", {
						className: Object(ie.a)(Ue.a.Section, {
							[Ue.a.opened]: s,
							[Ue.a.expanded]: n
						})
					}, a.a.createElement("div", {
						className: Ue.a.SectionHeader,
						onClick: i
					}, a.a.createElement("div", {
						className: Ue.a.SectionTitle
					}, t), a.a.createElement(Ie.a, {
						className: Ue.a.SectionChevron
					})), a.a.createElement("div", {
						className: Ue.a.SectionBody
					}, a.a.createElement("div", {
						className: Ue.a.SectionContent
					}, r), a.a.createElement("div", {
						className: Ue.a.SectionFooter
					}, a.a.createElement(E.n, {
						className: Ue.a.SectionButton,
						onClick: o
					}, a.a.createElement(x.c, null, n ? "Less" : "See more")))))
				};
			class Ae extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(t => {
							let {
								openedSection: s
							} = t;
							return s === e ? {
								openedSection: -1,
								isSectionExpanded: !1
							} : {
								openedSection: e,
								isSectionExpanded: !1
							}
						})
					}, this.onExpand = () => {
						this.setState(e => {
							let {
								isSectionExpanded: t
							} = e;
							return {
								isSectionExpanded: !t
							}
						})
					}, this.renderLink = e => {
						let {
							url: t,
							title: s
						} = e;
						return a.a.createElement(Be, {
							key: s,
							to: t,
							title: s
						})
					}, this.renderSection = (e, t) => a.a.createElement(We, {
						key: e.title,
						title: e.title,
						isOpened: this.isOpened(t),
						isExpanded: this.isExpanded(t),
						onToggle: () => this.onToggle(t),
						onExpand: this.onExpand
					}, e.links.map(this.renderLink))
				}
				isOpened(e) {
					return this.state.openedSection === e
				}
				isExpanded(e) {
					return this.state.isSectionExpanded && this.isOpened(e)
				}
				render() {
					const {
						className: e,
						links: t
					} = this.props;
					if (t) return a.a.createElement(h.a, {
						className: Object(ie.a)(Ue.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var De = Ae,
				Re = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				Me = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ve = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				He = s("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				Qe = s("./src/reddit/actions/post.ts"),
				Ke = s("./src/app/strings/index.ts"),
				Ze = s("./src/lib/timeAgo/index.ts"),
				Je = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				Ge = s("./src/reddit/selectors/user.ts"),
				Xe = s("./src/reddit/components/MiniPost/index.m.less"),
				qe = s.n(Xe);
			const Ye = Object(i.a)(e => e, M.I, M.c, Ge.P, (e, t, s, n) => {
				return {
					crosspost: s,
					language: n,
					post: t,
					subredditOrProfile: Object(V.M)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class ze extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s()
					}, this.onClickSubreddit = e => {
						const {
							subredditOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}, this.onClickThumbnail = e => {
						const {
							thumbnailOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: s = !1,
						subredditOrProfile: n
					} = this.props;
					return a.a.createElement("div", {
						className: Object(ie.a)(qe.a.container, e),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: qe.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(ue.a, {
						post: t
					})), a.a.createElement("div", {
						className: qe.a.postDetails
					}, a.a.createElement("p", {
						className: qe.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && a.a.createElement(Je.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), a.a.createElement("div", null, a.a.createElement("span", {
						className: qe.a.meta
					}, Object(Ke.c)(this.props.language, "posts.points.noun", t.score, {
						count: Object(me.b)(t.score)
					})), a.a.createElement("span", {
						className: qe.a.meta
					}, Object(Ke.c)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(me.b)(t.numComments)
					})), a.a.createElement("span", {
						className: qe.a.meta
					}, Object(Ze.d)(this.props.language, t.created / 1e3, !0, !0)))))
				}
			}
			var $e = Object(r.b)(Ye, (e, t) => ({
					openLightbox: t => e(Object(de.a)(t.permalink))
				}))(ze),
				et = s("./src/reddit/components/Widgets/Base/index.tsx");
			class tt extends a.a.Component {
				render() {
					return a.a.createElement("div", null, a.a.createElement(et.a, null, this.props.headerText), this.props.posts.map(e => a.a.createElement($e, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var st = tt,
				nt = s("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				at = s.n(nt),
				rt = s("./src/lib/lessComponent.tsx");
			const it = Object(r.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink)),
					clearLinks: () => e(Object(Qe.p)())
				})),
				ot = rt.a.button("ClearButton", at.a);
			class ct extends a.a.Component {
				render() {
					return a.a.createElement(et.b, null, a.a.createElement(st, {
						className: this.props.className,
						headerText: Object(d.c)("Recent posts"),
						language: this.props.language,
						posts: this.props.posts
					}), a.a.createElement(ot, {
						onClick: this.props.clearLinks
					}, Object(d.c)("Clear")))
				}
			}
			var dt = it(ct);
			const lt = Object(i.c)({
				language: Ge.P,
				recentPosts: M.R
			});
			var mt = Object(r.b)(lt, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: s,
						language: n
					} = e;
					return s && s.length ? a.a.createElement(g.a, null, a.a.createElement(dt, {
						className: t,
						language: n,
						headerText: Object(d.c)("Recent posts"),
						posts: s
					})) : null
				}),
				pt = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			const ut = Object(r.b)(Object(i.c)({
				communities: V.g
			}));

			function bt() {
				return (bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const gt = 5;
			class ht extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.showNextChunk = () => {
						this.setState((e, t) => {
							const s = Math.ceil(t.communities.length / gt);
							return {
								chunkIdx: e.chunkIdx < s - 1 ? e.chunkIdx + 1 : 0
							}
						})
					}
				}
				componentDidUpdate(e) {
					this.props.communities !== e.communities && this.setState(e => e.chunkIdx > 0 ? {
						chunkIdx: 0
					} : null)
				}
				render() {
					const {
						className: e,
						communities: t,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						railsWidgetsVariant: r,
						sendEvent: i,
						title: o
					} = this.props, {
						chunkIdx: c
					} = this.state, l = {
						className: e,
						sendEvent: i,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						title: o
					};
					if (r) {
						const e = t.slice(c * gt, (c + 1) * gt);
						return a.a.createElement(pt.b, bt({}, l, {
							bottomButtonText: t.length > gt ? Object(d.c)("See More") : "",
							communities: e,
							onBottomButtonClick: this.showNextChunk,
							railsWidgetsVariant: r
						}))
					}
					return a.a.createElement(pt.b, bt({}, l, {
						communities: t
					}))
				}
			}
			var Et = ut(Object(f.b)(ht)),
				xt = s("./src/reddit/featureFlags/index.ts"),
				kt = s("./src/reddit/constants/subredditLeaderboard.ts"),
				yt = s("./src/reddit/constants/tracking.ts"),
				Ot = s("./src/reddit/selectors/telemetry.ts"),
				jt = s("./src/reddit/selectors/widgets.ts"),
				Nt = s("./src/telemetry/models/Subreddit.ts");
			const Ct = e => t => s => Object.assign({}, Ot.defaults(s), Object(jt.b)(s, e), {
					source: "trending_community_card",
					action: yt.c.CLICK,
					noun: Object(Nt.getSubscribeEventNoun)(e.type, t)
				}),
				_t = e => t => Object.assign({}, Ot.defaults(t), Object(jt.b)(t, e), {
					source: "trending_community_card",
					action: yt.c.CLICK,
					noun: "community"
				});
			var St = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				vt = s("./src/reddit/selectors/seo/linksModule.ts"),
				Pt = s("./src/reddit/helpers/createBannerProperties/index.ts");
			const ft = Object(i.c)({
					isMod: Ge.H,
					isLoggedIn: e => e.user.temporaryGQL.isLoggedIn,
					isUpAndComingExperiment: St.b,
					trendingSubredditIds: V.ab,
					currentUser: Ge.i,
					frontpageLinks: vt.b,
					showLayersSidebar: xt.d.layersEmbedQuickLink
				}),
				Tt = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				Lt = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				wt = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold));
			class It extends a.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.state = {
						isMounted: !1
					}
				}
				render() {
					let e = 0;
					const {
						categoriesPlacementVariant: t,
						className: s,
						frontpageLinks: n,
						isLoggedIn: r,
						isUpAndComingExperiment: i,
						listingName: c,
						railsWidgetsVariant: l,
						trendingSubredditIds: m,
						showLayersSidebar: p
					} = this.props;
					return a.a.createElement(Me.a, {
						className: s
					}, a.a.createElement(He.a, {
						categories: kt.i,
						category: i ? kt.k : kt.j,
						first: 5,
						shouldDisplayDelta: this.props.isMod,
						to: i ? "".concat(kt.e).concat(kt.m) : kt.e
					}), p && a.a.createElement(g.a, null, a.a.createElement(u, null)), a.a.createElement(Re.a, {
						placement: C.c.ABOVE_THE_FOLD,
						listingName: c,
						position: Pt.a.FIRST,
						sizes: C.h,
						placementIndex: e++
					}), Object(D.a)(l) && a.a.createElement(g.a, null, a.a.createElement($, null)), Object(D.b)(l) && a.a.createElement(g.a, null, a.a.createElement(re, null)), Object(D.c)(l) && a.a.createElement(g.a, null, a.a.createElement(Te, null)), !l && wt(this.props) && a.a.createElement(N, null), Tt(this.props) && a.a.createElement(g.a, null, a.a.createElement(Et, {
						getClickEventFactory: _t,
						getSubscribeEventFactoryHandler: Ct,
						railsWidgetsVariant: l,
						subredditIds: m,
						title: Object(d.c)("Trending Communities")
					})), r && a.a.createElement(g.a, null, a.a.createElement(o.a, {
						listingName: c
					})), Lt(this.props) && a.a.createElement(mt, null), n && a.a.createElement(g.a, null, a.a.createElement(De, {
						links: n
					})), a.a.createElement(Ve.a, {
						adComponent: a.a.createElement(Re.a, {
							placement: C.c.BELOW_THE_FOLD,
							listingName: c,
							position: Pt.a.BOTTOM,
							sizes: C.m,
							placementIndex: e++
						}),
						categoriesPlacementVariant: t,
						railsWidgetsVariant: l
					}))
				}
			}
			t.default = Object(r.b)(ft)(It)
		},
		"./src/reddit/components/LayerPromotionWidget/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_18FHrNt95IT6Hc8F5tj_21"
			}
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4",
				cta: "_1Cg0rke34k99vLcCo_aCP1"
			}
		},
		"./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less": function(e, t, s) {
			e.exports = {
				GeoObject: "_1i52oG5xjHm7jqKUlami21",
				geoObject: "_1i52oG5xjHm7jqKUlami21"
			}
		},
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2P7APx0UZzT7G61J3taHT1",
				titleFontH2: "RwS_Oc-tCzFs9JqbyJt7y",
				titleFontH3: "_3efLiav9fPpnRcDjg9Gwg",
				titleFontH4: "_3hvxMzKYjdkuu40CSxKjAu",
				titleFontH5: "_3WpmjCstbhZ90uNfolTEpK",
				titleFontH6: "_2aXJlh_wJ7xa9WJa1Ffc1Q",
				metadataFont: "_2uQdSEwqQ-dgsfQ5DUyRNy",
				flairFont: "_2_0QEUNGrG4wZY0ofsNi1h",
				labelsFont: "Ak2Fs_jf7fnNIs6Xajto6",
				actionFont: "_2yOueT_7JFLAAiCNPTQjfk",
				smallButtonFont: "_1j9G7RzwWzCEXRfBup8qCr",
				largeButtonFont: "_21SizvLABo7WuGdVrlWB3E",
				tabFont: "_1nbCityPGTvrop_yKHkhp_",
				strongTextFont: "_1rRA9Vf6uOXrFjUcJJcmOL",
				extraSmallFont: "_35NIohQQNO8kbNHfaERcv4",
				bodyFontH1: "_1J85q0678QbXBAlUsUtzth",
				bodyFontH2: "-XsUf9E0eP4ePrgs3Yf81",
				bodyFontH3: "_22-90BPqugW8lJQPIjwpNd",
				bodyFontH4: "_2DU9sYq9m0gC27PMeSCeRK",
				bodyFontH5: "_2F6ZjEPUyXIS06JZc1JsHQ",
				bodyFontH6: "XnmQfbUmMrXwd2eQYT_6a",
				bodyFont: "_3Jp6jLYRWtZI2hmJA9eurC",
				bodyFontSmall: "_2eo_q38bKZsZzaxO_TC6ni",
				bodyFontMono: "_24Qs54CbgE_djlerYbZ1zl",
				Link: "_13rO9T2auFedwF7O7V72O6",
				link: "_13rO9T2auFedwF7O7V72O6",
				SectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				sectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				SectionTitle: "_2dowUVQFB6EDFymNiITj65",
				sectionTitle: "_2dowUVQFB6EDFymNiITj65",
				SectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				sectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				SectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				sectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				SectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				sectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				SectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				sectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				SectionButton: "dRr-wxcoswiadnFKXkm8G",
				sectionButton: "dRr-wxcoswiadnFKXkm8G",
				Section: "_2pK6e4VBPMQxDuw2kXyIIb",
				section: "_2pK6e4VBPMQxDuw2kXyIIb",
				opened: "_3U7bizV5Ex3dWwKwNODf9R",
				expanded: "_1Rwg1da6VQnIycp8lVYXom",
				Widget: "_3Fe8ia7wR8lbatMEJ6BchP",
				widget: "_3Fe8ia7wR8lbatMEJ6BchP"
			}
		},
		"./src/reddit/components/SidebarTrendingPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1krn-WWFNj-mY6pgxAtmTx",
				title: "_3zJYcwZRQR6PCnf10HuZGw",
				mainLine: "_11ESdMiPEZ3makcieIRfzK",
				thumbnailContainer: "_2yyovSXEnlXq-cmzTBGVSr",
				titleSingle: "_3iL3BLNEPj5E-KpaQ9hoSb",
				flair: "_2CJokp6ttLJys6iHljtVQ_",
				metaLine: "_1RAZe2feup7ElvffqHCDN8",
				meta: "_1p6_aI2KRaeJrjjMHJAWIW"
			}
		},
		"./src/reddit/components/SidebarTrendingPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1onjAGFGh8TpXfwlqM-NOA",
				largePostBackgroundWrapper: "_3Cq2ksLR87ZU-5hRe7alNN",
				largePostDescription: "_1xgGnApLgA_EEM-VvxbN-q",
				largePostInnerContainer: "_1wLLT_duObCLHH5C1q4KF",
				smallPost: "_3_Mtxl2b3N31eCyeBm29kQ"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/sampleSize.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/lodash/first.js"),
				c = s.n(o),
				d = s("./node_modules/lodash/times.js"),
				l = s.n(d),
				m = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./src/config.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				g = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = s("./src/reddit/constants/subredditLeaderboard.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/controls/Chip/index.m.less"),
				y = s.n(k);
			var O = e => {
					const t = e.to ? m.a : "div",
						s = Object(u.a)(y.a.chip, e.isActive && y.a.active, e.className);
					return i.a.createElement(t, {
						className: s,
						to: e.to || ""
					}, e.children)
				},
				j = s("./src/reddit/helpers/name/index.ts"),
				N = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				_ = s.n(C);
			const S = e => {
					const t = !(!e.rankings || !e.rankings.length),
						s = !t && _.a.communityBannerPlaceholder;
					return i.a.createElement("div", {
						className: Object(u.a)(e.className, _.a.communityBanner, s),
						style: {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						}
					}, t && i.a.createElement("h2", {
						className: _.a.communityBannerText
					}, i.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || E.c),
						to: e.categoryName === E.m ? "".concat(E.e).concat(E.m) : E.e
					}, i.a.createElement(i.a.Fragment, null, e.categoryName ? (e => e === E.m ? i.a.createElement(N.c, null, "Up-and-coming Communities") : i.a.createElement(i.a.Fragment, null, "Top", i.a.createElement("span", {
						className: _.a.categoryName
					}, " ", i.a.createElement(N.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				v = e => i.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const s = e.subreddits[t.id];
					return i.a.createElement(b.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || E.c, s.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && P),
				P = i.a.createElement(i.a.Fragment, null, l()(5, e => i.a.createElement(g.a, {
					key: e
				}))),
				f = e => {
					const t = e.isSecondaryButton ? x.k : x.h;
					return i.a.createElement("div", {
						className: _.a.footer
					}, i.a.createElement(t, {
						className: _.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || E.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? i.a.createElement(N.c, null, "See All ", i.a.createElement(N.b, {
						name: "categoryName"
					}, e.categoryName)) : i.a.createElement(N.c, null, "See All") : i.a.createElement(N.c, null, "View all")))
				},
				T = e => i.a.createElement("div", {
					className: _.a.categoryPicker
				}, e.categories && e.categories.map(e => i.a.createElement(O, {
					className: _.a.chip,
					key: e.name,
					to: "".concat(E.e).concat(Object(j.f)(e.name), "/")
				}, e.name)));
			var L = e => {
					const t = c()(e.rankings),
						s = e.subreddits && t && e.subreddits[t.id],
						n = "".concat(p.a.assetPath, "/img/leaderboard/banner-background.png"),
						a = s ? s.bannerBackgroundImage || n : void 0,
						r = e.to || e.categoryName && "".concat(E.e).concat(Object(j.f)(e.categoryName) || "", "/");
					return i.a.createElement(h.a, {
						className: e.className,
						contentOnly: !0
					}, i.a.createElement(S, {
						bannerBackgroundImage: a,
						categoryName: e.categoryName,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings
					}), i.a.createElement(v, {
						categoryName: e.categoryName,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings,
						shouldDisplayDelta: !1,
						subreddits: e.subreddits
					}), i.a.createElement(f, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: r
					}), e.categories && i.a.createElement(T, {
						categories: e.categories
					}))
				},
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/contexts/ApiContext.tsx"),
				F = s("./src/reddit/endpoints/subreddit/models.ts"),
				U = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				B = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				W = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				A = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = async (e, t) => {
				const s = await Object(U.a)(e, t);
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(B.c)(t)
				}
			}, M = async e => {
				const t = a()(A.a, 5),
					s = await Object(F.a)(e, {
						names: t
					});
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(B.a)(t)
				}
			};
			class V extends i.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, s = e && e.id;
						s !== E.l ? (s || s === E.d) && R(this.props.gqlContext(), {
							categoryId: s,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								s = e && e.subreddits,
								n = this.props.category && this.props.category.name || E.a;
							t && s && this.setState(e => Object.assign({}, e, {
								[n]: {
									rankings: t,
									subreddits: s
								}
							}))
						}).catch(e => console.error("Error >>>", e)) : M(this.props.gqlContext()).then(e => {
							if (!e) return;
							const {
								rankings: t,
								subreddits: s
							} = e;
							this.setState(e => Object.assign({}, e, {
								[E.m]: {
									rankings: t,
									subreddits: s
								}
							}))
						})
					}, this.sendEventClick = (e, t, s) => {
						this.props.sendEvent(Object(W.c)(e, t, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, s)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						s = this.props && this.props.category && this.props.category.id,
						n = this.props.category && this.props.category.name;
					t !== s && n && !this.state[n] && this.fetchTopSubreddits()
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						s = t || E.a,
						n = this.state[s],
						a = n ? n.rankings : [],
						r = n ? n.subreddits : {};
					return i.a.createElement(L, D({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: a,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: r
					}, this.props))
				}
			}
			t.a = Object(I.b)(Object(w.b)(V))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = e => a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 10 8",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
				}))),
				p = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				u = s.n(p);
			s.d(t, "a", (function() {
				return g
			}));
			const b = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(d.b, {
					className: u.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: u.a.subredditDetailsContainer
				}, e.large ? a.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: u.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: u.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: u.a.smallText
				}, a.a.createElement(l.c, null, "This community hasn't been ranked yet.")))),
				g = e => {
					const t = Object(i.a)(u.a.subredditRankItem, e.large && u.a.large),
						s = e.delta && e.delta > 0,
						n = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(o.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						c = e.delta ? s ? "#46D160" : "#EA0027" : "transparent";
					return a.a.createElement("li", {
						className: u.a.listItem,
						key: e.subreddit.displayText
					}, a.a.createElement(r.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: u.a.subredditRankItemColumn
					}, a.a.createElement("span", {
						className: u.a.rankText
					}, n), a.a.createElement(m, {
						className: Object(i.a)(u.a.arrow, !s && u.a.negative),
						style: {
							fill: c
						}
					}), a.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: u.a.regularText
					}, e.delta ? Object(o.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = s.n(i);
			const c = e => a.a.createElement("div", {
				className: Object(r.a)(o.a.placeholderWrapper, e.large && o.a.large)
			}, a.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), a.a.createElement("span", {
				className: o.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb"
			}
		},
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, s) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, s) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, a.defaults(t), {
					action: "click",
					noun: Object(n.f)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, s) => r => Object.assign({}, a.defaults(r), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.f)(t),
						name: s && s.toLowerCase()
					}
				}),
				o = (e, t) => s => Object.assign({}, a.defaults(s), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.f)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, s) => r => Object.assign({}, a.defaults(r), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.f)(t),
						name: s && s.toLowerCase()
					}
				})
		}
	}
]);
//# sourceMappingURL=FrontpageSidebar.e10fa7b51234f36414ba.js.map