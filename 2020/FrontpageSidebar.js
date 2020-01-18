// https://www.redditstatic.com/desktop2x/FrontpageSidebar.a25bccf52bb97d50dc7c.js
// Retrieved at 1/18/2020, 1:07:53 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/FrontpageSidebar/Communities/Community/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1BlAvWVMCHrKuk1aBiD0rO",
				icon: "SdGgakyQ3Q1wV1BG02KpS",
				name: "_3UvQsAqQD7ZaeOwhy_dmq"
			}
		},
		"./src/reddit/components/FrontpageSidebar/Communities/Community/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1JH-ukr83Pz2SZd5gYfjin",
				icon: "_1fk4TxaaWwKgRCawvegijy",
				name: "_2oFobGD6mMTl7VOWU4WEzg",
				link: "eizo6O6TAwt9GD2gH-eXI",
				unsubscribe: "x0jD2G0P19ywQfbEuUczh",
				unsubscribeIcon: "_37iZf6F-3XPLqF7SZ0AmYC"
			}
		},
		"./src/reddit/components/FrontpageSidebar/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				title: "Akj-sMP73429cfA-JV1_p",
				description: "_2wBIRCyBuaNPTzZ3B2VMkb",
				community: "Ncc60HBC_dv44qnV2OevV"
			}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/IdCard/index.tsx"),
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
				h = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/i18n/components.tsx"),
				k = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				y = s("./src/reddit/components/PremiumCTA/index.m.less"),
				O = s.n(y);
			class N extends a.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return a.a.createElement(h.a, null, a.a.createElement(g.a, {
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
					}, a.a.createElement(E.c, null, "Reddit Premium")), a.a.createElement("div", {
						className: O.a.description
					}, a.a.createElement(E.c, null, "The best Reddit experience, with monthly Coins"))), a.a.createElement(x.e, {
						className: O.a.cta,
						onClick: t
					}, a.a.createElement(E.c, null, "Try Now")))))
				}
			}
			var j = Object(r.b)(void 0, e => ({
					onClickPremium: () => e(Object(b.b)("/premium"))
				}))(N),
				C = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/makeListingKey/index.ts"),
				S = s("./src/reddit/actions/subreddit.ts"),
				v = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				P = s("./src/reddit/components/SidebarPostList/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/listings.ts"),
				w = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				L = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				I = s("./src/reddit/selectors/categoriesPlacement.ts"),
				F = s("./src/reddit/selectors/discoveryUnit.ts"),
				B = s("./node_modules/lodash/uniq.js"),
				U = s.n(B),
				A = s("./src/lib/makeOnboardingSubredditsKey/index.ts"),
				D = s("./src/reddit/constants/categories.tsx"),
				M = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				W = s("./src/reddit/selectors/meta.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts");
			const H = Object(_.a)(T.b.Popular, C.N.TOP),
				Q = Object(o.a)(e => Object(R.O)(e, {
					listingKey: H
				}), e => U()(e.map(e => e.belongsTo.id))),
				K = (Object(o.a)(e => {
					const t = Q(e);
					return Object(V.Z)(e, {
						subredditIds: t
					})
				}, e => e.map(e => e.name)), e => {
					const t = {
							city: Object(W.a)(e),
							country: Object(W.b)(e),
							region: Object(W.h)(e)
						},
						s = Object(A.a)(t);
					return Object(V.q)(e, {
						key: s
					})
				}),
				J = Object(o.a)(K, D.d);
			var Z = s("./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less"),
				G = s.n(Z);
			const q = 2,
				X = 5,
				Y = Object(o.c)({
					discoveryUnit: e => Object(F.f)(e, {
						unitName: L.g
					}),
					geoObject: I.a,
					posts: e => {
						const t = J(e),
							s = Object(_.a)(t, C.N.HOT);
						return Object(P.b)(e, {
							listingKey: s
						})
					},
					subredditName: J
				});
			class z extends a.a.Component {
				constructor() {
					super(...arguments), this.loadMorePosts = (e, t) => {
						t - e <= q && this.props.loadMorePosts(this.props.subredditName)
					}, this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.B)(this.props.discoveryUnit, e))
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
					return a.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, a.a.createElement(v.a, {
						showIcon: !0
					}, a.a.createElement("span", {
						className: G.a.GeoObject
					}, t), a.a.createElement(E.c, null, "trends")), a.a.createElement(P.a, {
						listingKey: r,
						listingName: T.b.Popular,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: X
					}))
				}
			}
			var $ = Object(r.b)(Y, e => ({
				loadMorePosts: t => e(Object(S.u)({
					sort: C.N.TOP,
					subredditName: t
				}))
			}))(Object(f.b)(z));
			const ee = Object(_.a)(T.b.Popular, C.N.TOP),
				te = 2,
				se = 5,
				ne = Object(o.c)({
					discoveryUnit: e => Object(F.f)(e, {
						unitName: L.p
					})
				});
			class ae extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.B)(this.props.discoveryUnit, e))
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
					return a.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, a.a.createElement(v.a, {
						showIcon: !0
					}, a.a.createElement(E.c, null, "Top popular for the month")), a.a.createElement(P.a, {
						listingKey: ee,
						listingName: T.b.Popular,
						moreButtonText: a.a.createElement(E.c, null, "Refresh"),
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: se
					}))
				}
			}
			var re = Object(r.b)(ne, e => ({
					loadMorePosts: () => e(Object(S.u)({
						sort: C.N.TOP,
						subredditName: T.b.Popular
					}))
				}))(Object(f.b)(ae)),
				oe = s("./src/lib/classNames/index.ts"),
				ie = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ce = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				de = s("./src/reddit/helpers/overlay/index.ts"),
				le = s("./src/lib/isUrl/index.ts"),
				me = s("./src/lib/prettyPrintNumber/index.ts"),
				pe = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ue = s("./src/reddit/components/Thumbnail/index.tsx"),
				be = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/models/Flair/index.ts"),
				ge = s("./src/reddit/components/SidebarTrendingPostList/SmallPost/index.m.less"),
				xe = s.n(ge);
			const Ee = e => e.type === he.f.Nsfw || e.type === he.f.Spoiler,
				ke = Object(o.c)({
					subredditOrProfile: R.U
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
					})), o = n && s.isWhitelisted && n.flair.filter(Ee), i = s.subredditInfo && s.subredditInfo.displayText || t && (t.displayText || t.name), c = n ? n.title : "", d = n ? n.score : 0, l = n ? n.numComments : 0;
					return a.a.createElement("div", {
						className: Object(oe.a)(xe.a.container, e),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: xe.a.mainLine
					}, !!n && r && a.a.createElement("div", {
						className: xe.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(ue.a, {
						post: n
					})), a.a.createElement("div", {
						className: Object(oe.a)(xe.a.title, !r && xe.a.titleSingle),
						title: c
					}, n && o && o.length > 0 && a.a.createElement(pe.a, {
						className: xe.a.flair,
						titleFlair: o,
						nowrap: !0,
						post: n,
						showCategoryTag: !1
					}), c)), a.a.createElement("div", {
						className: xe.a.metaLine
					}, i && a.a.createElement("span", {
						className: xe.a.meta
					}, Object(be.b)(i)), a.a.createElement("span", {
						className: xe.a.meta
					}, a.a.createElement(E.c, null, "".concat(Object(me.b)(d), " "), a.a.createElement(E.a, {
						count: d,
						name: "score",
						plural: "points",
						singular: "point"
					}))), a.a.createElement("span", {
						className: xe.a.meta
					}, a.a.createElement(E.c, null, "".concat(Object(me.b)(l), " "), a.a.createElement(E.a, {
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
				Ne = s("./src/reddit/components/SidebarTrendingPostList/index.m.less"),
				je = s.n(Ne);
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
							className: je.a.smallPost,
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
					const [n, ...r] = s.slice(0, Ce), o = n.post ? n.post.id : "";
					return a.a.createElement("div", {
						className: Object(oe.a)(je.a.container, e)
					}, a.a.createElement(ce.a, {
						onPostVisible: t,
						postId: o
					}, a.a.createElement(ie.a, {
						backgroundWrapperClassName: je.a.largePostBackgroundWrapper,
						descriptionClassName: je.a.largePostDescription,
						innerContainerClassName: je.a.largePostInnerContainer,
						onPostClick: this.openLargePost,
						postId: o,
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
			const Pe = Object(o.c)({
				discoveryUnit: e => Object(F.f)(e, {
					unitName: L.t
				}),
				trendingSearches: Object(o.a)(ve.a, e => e.filter(e => e.post))
			});
			class fe extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(w.B)(this.props.discoveryUnit, e))
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
					return 0 === t.length ? null : a.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, a.a.createElement(v.a, {
						showIcon: !0
					}, a.a.createElement(E.c, null, "Trends")), a.a.createElement(Se, {
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						trendingSearches: t
					}))
				}
			}
			var Te = Object(r.b)(Pe)(Object(f.b)(fe)),
				we = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				Le = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ie = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Fe = s("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				Be = s.n(Fe);
			const Ue = e => {
					let {
						to: t,
						title: s
					} = e;
					return a.a.createElement(we.a, {
						subredditName: s,
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(Le.a, {
						className: Be.a.Link,
						to: t,
						title: s
					}, s))
				},
				Ae = e => {
					let {
						title: t,
						isOpened: s,
						isExpanded: n,
						children: r,
						onToggle: o,
						onExpand: i
					} = e;
					return a.a.createElement("div", {
						className: Object(oe.a)(Be.a.Section, {
							[Be.a.opened]: s,
							[Be.a.expanded]: n
						})
					}, a.a.createElement("div", {
						className: Be.a.SectionHeader,
						onClick: o
					}, a.a.createElement("div", {
						className: Be.a.SectionTitle
					}, t), a.a.createElement(Ie.a, {
						className: Be.a.SectionChevron
					})), a.a.createElement("div", {
						className: Be.a.SectionBody
					}, a.a.createElement("div", {
						className: Be.a.SectionContent
					}, r), a.a.createElement("div", {
						className: Be.a.SectionFooter
					}, a.a.createElement(x.n, {
						className: Be.a.SectionButton,
						onClick: i
					}, a.a.createElement(E.c, null, n ? "Less" : "See more")))))
				};
			class De extends a.a.Component {
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
						return a.a.createElement(Ue, {
							key: s,
							to: t,
							title: s
						})
					}, this.renderSection = (e, t) => a.a.createElement(Ae, {
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
					if (t) return a.a.createElement(g.a, {
						className: Object(oe.a)(Be.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var Me = De,
				We = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				Re = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ve = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				He = s("./node_modules/lodash/sampleSize.js"),
				Qe = s.n(He),
				Ke = s("./node_modules/request-idle-callback/index.js"),
				Je = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ze = s("./src/reddit/constants/localStorage.ts"),
				Ge = s("./src/reddit/contexts/ApiContext.tsx"),
				qe = s("./src/reddit/featureFlags/component.tsx"),
				Xe = s("./src/reddit/helpers/localStorage/index.ts"),
				Ye = s("./src/lib/makeApiRequest/index.ts"),
				ze = s("./src/lib/omitHeaders/index.ts"),
				$e = s("./src/reddit/constants/headers.ts");
			const et = e => Object(Ye.b)(Object(ze.a)(e, [$e.a]), {
				endpoint: "".concat(e.apiUrl, "/api/multi/user/CommunityAdoptionBot/m/adoption_week/"),
				method: C.bb.GET,
				type: "json"
			});
			var tt = s("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				st = s.n(tt);
			const {
				fbt: nt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), at = 3, rt = 30 * C.cb, ot = "SubredditAdoption";
			class it extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = it.cachedData || Object(Xe.n)(Ze.B) || null;
					if (!e || Date.now() - e.fetchedAt > rt) {
						const t = await et(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(Xe.Q)(Ze.B, e))
					}
					return it.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(Ke.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: Qe()(e, at)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? a.a.createElement("div", {
						className: st.a.container
					}, a.a.createElement("div", {
						className: st.a.main
					}, a.a.createElement("div", {
						className: st.a.title
					}, a.a.createElement(Je.b, {
						className: st.a.icon
					}), nt._("Subreddit adoption week", null, {
						hk: "LxkrU"
					})), a.a.createElement("div", {
						className: st.a.description
					}, nt._("{subreddits list} and more are looking for moderators!", [nt._param("subreddits list", a.a.createElement("strong", null, e.map(be.b).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), a.a.createElement(x.h, {
						className: st.a.button,
						to: "/r/".concat(ot, "?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week")
					}, nt._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			it.cachedData = null;
			var ct = Object(qe.a)("srAdoptionWeek", Object(Ge.b)(it)),
				dt = s("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				lt = s("./src/reddit/actions/post.ts"),
				mt = s("./src/reddit/components/MiniPost/index.tsx"),
				pt = s("./src/reddit/components/Widgets/Base/index.tsx");
			class ut extends a.a.Component {
				render() {
					return a.a.createElement("div", null, a.a.createElement(pt.a, null, this.props.headerText), this.props.posts.map(e => a.a.createElement(mt.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var bt = ut,
				ht = s("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				gt = s.n(ht),
				xt = s("./src/lib/lessComponent.tsx");
			const Et = Object(r.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink)),
					clearLinks: () => e(Object(lt.m)())
				})),
				kt = xt.a.button("ClearButton", gt.a);
			class yt extends a.a.Component {
				render() {
					return a.a.createElement(pt.b, null, a.a.createElement(bt, {
						className: this.props.className,
						headerText: Object(d.c)("Recent posts"),
						language: this.props.language,
						posts: this.props.posts
					}), a.a.createElement(kt, {
						onClick: this.props.clearLinks
					}, Object(d.c)("Clear")))
				}
			}
			var Ot = Et(yt),
				Nt = s("./src/reddit/selectors/user.ts");
			const jt = Object(o.c)({
				language: Nt.S,
				recentPosts: R.R
			});
			var Ct = Object(r.b)(jt, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: s,
						language: n
					} = e;
					return s && s.length ? a.a.createElement(h.a, null, a.a.createElement(Ot, {
						className: t,
						language: n,
						headerText: Object(d.c)("Recent posts"),
						posts: s
					})) : null
				}),
				_t = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			const St = Object(r.b)(Object(o.c)({
				communities: V.g
			}));

			function vt() {
				return (vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Pt = 5;
			class ft extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.showNextChunk = () => {
						this.setState((e, t) => {
							const s = Math.ceil(t.communities.length / Pt);
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
						sendEvent: o,
						title: i
					} = this.props, {
						chunkIdx: c
					} = this.state, l = {
						className: e,
						sendEvent: o,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						title: i
					};
					if (r) {
						const e = t.slice(c * Pt, (c + 1) * Pt);
						return a.a.createElement(_t.b, vt({}, l, {
							bottomButtonText: t.length > Pt ? Object(d.c)("See More") : "",
							communities: e,
							onBottomButtonClick: this.showNextChunk,
							railsWidgetsVariant: r
						}))
					}
					return a.a.createElement(_t.b, vt({}, l, {
						communities: t
					}))
				}
			}
			var Tt = St(Object(f.b)(ft)),
				wt = s("./src/reddit/featureFlags/index.ts"),
				Lt = s("./src/reddit/constants/subredditLeaderboard.ts"),
				It = s("./src/reddit/constants/tracking.ts"),
				Ft = s("./src/reddit/selectors/telemetry.ts"),
				Bt = s("./src/reddit/selectors/widgets.ts"),
				Ut = s("./src/telemetry/models/Subreddit.ts");
			const At = e => t => s => Object.assign({}, Ft.defaults(s), Object(Bt.b)(s, e), {
					source: "trending_community_card",
					action: It.c.CLICK,
					noun: Object(Ut.getSubscribeEventNoun)(e.type, t)
				}),
				Dt = e => t => Object.assign({}, Ft.defaults(t), Object(Bt.b)(t, e), {
					source: "trending_community_card",
					action: It.c.CLICK,
					noun: "community"
				});
			var Mt = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				Wt = s("./src/reddit/selectors/monthsToMinutes.ts"),
				Rt = s("./src/reddit/selectors/seo/linksModule.ts"),
				Vt = s("./src/reddit/constants/page.ts"),
				Ht = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Qt = s("./src/reddit/actions/tooltip.ts"),
				Kt = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Jt = s("./src/reddit/models/MonthsToMinutes/index.ts"),
				Zt = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Gt = s("./src/reddit/actions/subscription/index.ts"),
				qt = s("./src/reddit/constants/posts.ts"),
				Xt = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				Yt = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				zt = s("./src/reddit/components/FrontpageSidebar/Communities/Community/index.m.less"),
				$t = s.n(zt);
			const es = Object(o.c)({
				subreddit: V.B
			});
			class ts extends a.a.Component {
				constructor() {
					super(...arguments), this.sendClickEvent = () => {
						this.props.sendEvent(Object(Xt.c)(this.props.subredditName))
					}, this.onUnsubscribeClick = () => {
						this.props.unsubscribe(), this.props.sendEvent(Object(Xt.d)(this.props.subredditName))
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? a.a.createElement("div", {
						className: Object(oe.a)($t.a.container, e)
					}, a.a.createElement(Je.b, {
						className: $t.a.icon,
						subredditOrProfile: t
					}), a.a.createElement("div", {
						className: $t.a.name
					}, a.a.createElement(Zt.a, {
						className: $t.a.link,
						to: t.url,
						onMouseDown: this.sendClickEvent
					}, Object(be.b)(t.displayText || t.name))), a.a.createElement("button", {
						className: $t.a.unsubscribe,
						onClick: this.onUnsubscribeClick
					}, a.a.createElement(Yt.a, {
						className: $t.a.unsubscribeIcon
					}))) : null
				}
			}
			var ss = Object(r.b)(es, (e, t) => ({
					unsubscribe: () => {
						const s = {
							name: t.subredditName,
							type: qt.a.SUBREDDIT
						};
						e(Object(Gt.d)([s], !1))
					}
				}))(Object(f.b)(ts)),
				ns = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				as = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				rs = s("./src/reddit/components/FrontpageSidebar/Communities/Community/Placeholder/index.m.less"),
				os = s.n(rs);
			var is = Object(ns.a)(e => {
					const {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: Object(oe.a)(os.a.container, t)
					}, a.a.createElement(Je.b, {
						className: os.a.icon,
						primaryColor: e.theme ? Object(as.a)(e).field : void 0
					}), a.a.createElement("div", {
						className: os.a.name
					}))
				}),
				cs = s("./src/reddit/components/FrontpageSidebar/Communities/index.m.less"),
				ds = s.n(cs);
			const ls = "my-communities-title",
				ms = "my-communities-description",
				ps = Object(o.c)({
					subredditNames: Wt.f
				});
			class us extends a.a.Component {
				constructor() {
					super(...arguments), this.renderCommunity = (e, t) => a.a.createElement(ss, {
						className: ds.a.community,
						key: e,
						subredditName: e
					}), this.renderCommunityPlaceholder = (e, t) => a.a.createElement(is, {
						className: ds.a.community,
						key: t
					}), this.showTitleTooltip = () => {
						this.props.onShowTooltip(ls)
					}, this.showDescriptionTooltip = () => {
						this.props.onShowTooltip(ms)
					}
				}
				render() {
					const {
						className: e,
						onHideTooltip: t,
						subredditNames: s
					} = this.props, n = Jt.b - s.length;
					return a.a.createElement(g.a, {
						className: e
					}, a.a.createElement("div", {
						className: ds.a.title,
						id: ls,
						onMouseEnter: this.showTitleTooltip,
						onMouseLeave: t
					}, a.a.createElement(E.c, null, "Starter communities")), a.a.createElement(Kt.c, {
						tooltipId: ls,
						text: Object(d.c)("Manage your communities")
					}), a.a.createElement("div", {
						className: ds.a.description,
						id: ms,
						onMouseEnter: this.showDescriptionTooltip,
						onMouseLeave: t
					}, a.a.createElement(E.c, null, "You can join up to 10 communities before creating an account")), a.a.createElement(Kt.c, {
						tooltipId: ms,
						text: Object(d.c)("You can remove any communities you don’t want to see in your home feed by tapping x.")
					}), s.map(this.renderCommunity), Array.from({
						length: n
					}).map(this.renderCommunityPlaceholder))
				}
			}
			var bs = Object(r.b)(ps, e => ({
				onHideTooltip: () => e(Object(Qt.h)()),
				onShowTooltip: t => e(Object(Qt.f)({
					tooltipId: t
				}))
			}))(us);
			const hs = Object(o.c)({
					isMod: Nt.K,
					isLoggedIn: e => e.user.temporaryGQL.isLoggedIn,
					isUpAndComingExperiment: Mt.b,
					trendingSubredditIds: V.ab,
					currentUser: Nt.i,
					frontpageIsHome: Wt.g,
					frontpageLinks: Rt.b,
					showLayersSidebar: wt.d.layersEmbedQuickLink
				}),
				gs = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				xs = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Es = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				ks = e => !e.currentUser && e.frontpageIsHome && e.listingName === Vt.d.Frontpage;
			class ys extends a.a.Component {
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
						isUpAndComingExperiment: o,
						listingName: c,
						railsWidgetsVariant: l,
						trendingSubredditIds: m,
						showLayersSidebar: p
					} = this.props;
					return a.a.createElement(Re.a, {
						className: s
					}, a.a.createElement(dt.a, {
						categories: Lt.i,
						category: o ? Lt.k : Lt.j,
						first: 5,
						shouldDisplayDelta: this.props.isMod,
						to: o ? "".concat(Lt.e).concat(Lt.m) : Lt.e
					}), p && a.a.createElement(h.a, null, a.a.createElement(u, null)), !l && ks(this.props) && a.a.createElement(h.a, null, a.a.createElement(bs, null)), a.a.createElement(We.a, {
						placement: C.c.ABOVE_THE_FOLD,
						listingName: c,
						position: Ht.a.FIRST,
						sizes: C.h,
						placementIndex: e++
					}), Object(M.a)(l) && a.a.createElement(h.a, null, a.a.createElement($, null)), Object(M.b)(l) && a.a.createElement(h.a, null, a.a.createElement(re, null)), Object(M.c)(l) && a.a.createElement(h.a, null, a.a.createElement(Te, null)), !l && Es(this.props) && a.a.createElement(j, null), gs(this.props) && a.a.createElement(h.a, null, a.a.createElement(Tt, {
						getClickEventFactory: Dt,
						getSubscribeEventFactoryHandler: At,
						railsWidgetsVariant: l,
						subredditIds: m,
						title: Object(d.c)("Trending Communities")
					})), r && a.a.createElement(h.a, null, a.a.createElement(i.e, {
						listingName: c
					})), xs(this.props) && a.a.createElement(Ct, null), n && a.a.createElement(h.a, null, a.a.createElement(Me, {
						links: n
					})), a.a.createElement(Ve.a, {
						adComponent: a.a.createElement(We.a, {
							placement: C.c.BELOW_THE_FOLD,
							listingName: c,
							position: Ht.a.BOTTOM,
							sizes: C.m,
							placementIndex: e++
						}),
						categoriesPlacementVariant: t,
						railsWidgetsVariant: l
					}, r && a.a.createElement(ct, null)))
				}
			}
			t.default = Object(r.b)(hs)(ys)
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
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/Thumbnail/index.tsx"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/MiniPost/index.m.less"),
				E = s.n(x);
			const k = Object(o.a)(e => e, b.J, b.c, g.S, (e, t, s, n) => {
					return {
						crosspost: s,
						language: n,
						post: t,
						subredditOrProfile: Object(h.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				y = Object(r.b)(k, (e, t) => ({
					openLightbox: t => e(Object(u.a)(t.permalink))
				}));
			class O extends a.a.PureComponent {
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
						className: Object(c.a)(E.a.container, e),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: E.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(p.a, {
						post: t
					})), a.a.createElement("div", {
						className: E.a.postDetails
					}, a.a.createElement("p", {
						className: E.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && a.a.createElement(m.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), a.a.createElement("div", null, a.a.createElement("span", {
						className: E.a.meta
					}, Object(i.c)(this.props.language, "posts.points.noun", t.score, {
						count: Object(d.b)(t.score)
					})), a.a.createElement("span", {
						className: E.a.meta
					}, Object(i.c)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(d.b)(t.numComments)
					})), a.a.createElement("span", {
						className: E.a.meta
					}, Object(l.d)(this.props.language, t.created / 1e3, !0, !0)))))
				}
			}
			t.a = y(O)
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
		"./src/reddit/components/SubredditAdoptionWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_32gg9k8mE7XAO33Q0lKRlU",
				main: "_39QHoSGxWS9OKtoNU9jEE_",
				title: "_27oRfx5g78dJfAJl_8Npk3",
				icon: "_2t2xQcM_0PlqIR0rm5VRfJ",
				description: "_2HAYUIdDUchBheTwqmKIcq",
				button: "_3GA-tK1xBiDrxLJRZR3IIB"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/sampleSize.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/lodash/first.js"),
				c = s.n(i),
				d = s("./node_modules/lodash/times.js"),
				l = s.n(d),
				m = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./src/config.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				h = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/constants/subredditLeaderboard.ts"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/controls/Chip/index.m.less"),
				y = s.n(k);
			var O = e => {
					const t = e.to ? m.a : "div",
						s = Object(u.a)(y.a.chip, e.isActive && y.a.active, e.className);
					return o.a.createElement(t, {
						className: s,
						to: e.to || ""
					}, e.children)
				},
				N = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				_ = s.n(C);
			const S = e => {
					const t = !(!e.rankings || !e.rankings.length),
						s = !t && _.a.communityBannerPlaceholder;
					return o.a.createElement("div", {
						className: Object(u.a)(e.className, _.a.communityBanner, s),
						style: {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						}
					}, t && o.a.createElement("h2", {
						className: _.a.communityBannerText
					}, o.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || x.c),
						to: e.categoryName === x.m ? "".concat(x.e).concat(x.m) : x.e
					}, o.a.createElement(o.a.Fragment, null, e.categoryName ? (e => e === x.m ? o.a.createElement(j.c, null, "Up-and-coming Communities") : o.a.createElement(o.a.Fragment, null, "Top", o.a.createElement("span", {
						className: _.a.categoryName
					}, " ", o.a.createElement(j.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				v = e => o.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const s = e.subreddits[t.id];
					return o.a.createElement(b.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || x.c, s.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && P),
				P = o.a.createElement(o.a.Fragment, null, l()(5, e => o.a.createElement(h.a, {
					key: e
				}))),
				f = e => {
					const t = e.isSecondaryButton ? E.k : E.h;
					return o.a.createElement("div", {
						className: _.a.footer
					}, o.a.createElement(t, {
						className: _.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || x.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? o.a.createElement(j.c, null, "See All ", o.a.createElement(j.b, {
						name: "categoryName"
					}, e.categoryName)) : o.a.createElement(j.c, null, "See All") : o.a.createElement(j.c, null, "View all")))
				},
				T = e => o.a.createElement("div", {
					className: _.a.categoryPicker
				}, e.categories && e.categories.map(e => o.a.createElement(O, {
					className: _.a.chip,
					key: e.name,
					to: "".concat(x.e).concat(Object(N.f)(e.name), "/")
				}, e.name)));
			var w = e => {
					const t = c()(e.rankings),
						s = e.subreddits && t && e.subreddits[t.id],
						n = "".concat(p.a.assetPath, "/img/leaderboard/banner-background.png"),
						a = s ? s.bannerBackgroundImage || n : void 0,
						r = e.to || e.categoryName && "".concat(x.e).concat(Object(N.f)(e.categoryName) || "", "/");
					return o.a.createElement(g.a, {
						className: Object(u.a)(e.className, _.a.widget),
						contentOnly: !0
					}, o.a.createElement(S, {
						bannerBackgroundImage: a,
						categoryName: e.categoryName,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings
					}), o.a.createElement(v, {
						categoryName: e.categoryName,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings,
						shouldDisplayDelta: !1,
						subreddits: e.subreddits
					}), o.a.createElement(f, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: r
					}), e.categories && o.a.createElement(T, {
						categories: e.categories
					}))
				},
				L = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/contexts/ApiContext.tsx"),
				F = s("./src/reddit/endpoints/subreddit/models.ts"),
				B = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				U = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				A = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				D = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = async (e, t) => {
				const s = await Object(B.a)(e, t);
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(U.c)(t)
				}
			}, R = async e => {
				const t = a()(D.a, 5),
					s = await Object(F.a)(e, {
						names: t
					});
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(U.a)(t)
				}
			};
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, s = e && e.id;
						s !== x.l ? (s || s === x.d) && W(this.props.gqlContext(), {
							categoryId: s,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								s = e && e.subreddits,
								n = this.props.category && this.props.category.name || x.a;
							t && s && this.setState(e => Object.assign({}, e, {
								[n]: {
									rankings: t,
									subreddits: s
								}
							}))
						}).catch(e => console.error("Error >>>", e)) : R(this.props.gqlContext()).then(e => {
							if (!e) return;
							const {
								rankings: t,
								subreddits: s
							} = e;
							this.setState(e => Object.assign({}, e, {
								[x.m]: {
									rankings: t,
									subreddits: s
								}
							}))
						})
					}, this.sendEventClick = (e, t, s) => {
						this.props.sendEvent(Object(A.c)(e, t, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, s)
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
						s = t || x.a,
						n = this.state[s],
						a = n ? n.rankings : [],
						r = n ? n.subreddits : {};
					return o.a.createElement(w, M({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: a,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: r
					}, this.props))
				}
			}
			t.a = Object(I.b)(Object(L.b)(V))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
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
				return h
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
				h = e => {
					const t = Object(o.a)(u.a.subredditRankItem, e.large && u.a.large),
						s = e.delta && e.delta > 0,
						n = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(i.b)(e);
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
						className: Object(o.a)(u.a.arrow, !s && u.a.negative),
						style: {
							fill: c
						}
					}), a.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: u.a.regularText
					}, e.delta ? Object(i.b)(Math.abs(e.delta)) : 0)))
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
				o = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = s.n(o);
			const c = e => a.a.createElement("div", {
				className: Object(r.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, a.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), a.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_160axjzy-Hx7ANXMr87Rbe",
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
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, a.defaults(t), {
					action: "click",
					noun: Object(n.g)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, s) => r => Object.assign({}, a.defaults(r), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.g)(t),
						name: s && s.toLowerCase()
					}
				}),
				i = (e, t) => s => Object.assign({}, a.defaults(s), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.g)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, s) => r => Object.assign({}, a.defaults(r), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.g)(t),
						name: s && s.toLowerCase()
					}
				})
		}
	}
]);
//# sourceMappingURL=FrontpageSidebar.a25bccf52bb97d50dc7c.js.map