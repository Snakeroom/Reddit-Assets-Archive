// https://www.redditstatic.com/desktop2x/FrontpageSidebar.ec6683fc5dc20226597c.js
// Retrieved at 2/6/2020, 4:10:16 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./node_modules/lodash/first.js": function(e, t, n) {
			e.exports = n("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/IdCard/async.tsx"),
				i = n("./src/config.ts"),
				d = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/components/LayerPromotionWidget/index.m.less"),
				m = n.n(l);
			const u = "".concat(i.a.assetPath, "/img/layer_promotion_image.png");
			var p = () => a.a.createElement("div", null, a.a.createElement("a", {
					href: "http://reddit.com/r/Layer"
				}, a.a.createElement("img", {
					alt: Object(d.c)("Layer promotion"),
					className: m.a.image,
					src: u
				}))),
				b = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/i18n/components.tsx"),
				k = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				y = n("./src/reddit/components/PremiumCTA/index.m.less"),
				_ = n.n(y);
			class N extends a.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return a.a.createElement(g.a, null, a.a.createElement(E.a, {
						className: e,
						contentOnly: !0
					}, a.a.createElement("div", {
						className: _.a.wrapper
					}, a.a.createElement(k.a, {
						className: _.a.icon
					}), a.a.createElement("div", {
						className: _.a.content
					}, a.a.createElement("div", {
						className: _.a.title
					}, a.a.createElement(x.c, null, "Reddit Premium")), a.a.createElement("div", {
						className: _.a.description
					}, a.a.createElement(x.c, null, "The best Reddit experience, with monthly Coins"))), a.a.createElement(h.e, {
						className: _.a.cta,
						onClick: t
					}, a.a.createElement(x.c, null, "Try Now")))))
				}
			}
			var C = Object(r.b)(void 0, e => ({
					onClickPremium: () => e(Object(b.b)("/premium"))
				}))(N),
				S = n("./src/lib/classNames/index.ts"),
				O = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				j = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				f = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				T = n.n(f);
			const L = e => {
					let {
						to: t,
						title: n
					} = e;
					return a.a.createElement(O.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(j.a, {
						className: T.a.Link,
						to: t,
						title: n
					}, n))
				},
				F = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: s,
						children: r,
						onToggle: o,
						onExpand: c
					} = e;
					return a.a.createElement("div", {
						className: Object(S.a)(T.a.Section, {
							[T.a.opened]: n,
							[T.a.expanded]: s
						})
					}, a.a.createElement("div", {
						className: T.a.SectionHeader,
						onClick: o
					}, a.a.createElement("div", {
						className: T.a.SectionTitle
					}, t), a.a.createElement(v.a, {
						className: T.a.SectionChevron
					})), a.a.createElement("div", {
						className: T.a.SectionBody
					}, a.a.createElement("div", {
						className: T.a.SectionContent
					}, r), a.a.createElement("div", {
						className: T.a.SectionFooter
					}, a.a.createElement(h.n, {
						className: T.a.SectionButton,
						onClick: c
					}, a.a.createElement(x.c, null, s ? "Less" : "See more")))))
				};
			class P extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(t => {
							let {
								openedSection: n
							} = t;
							return n === e ? {
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
							title: n
						} = e;
						return a.a.createElement(L, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => a.a.createElement(F, {
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
					if (t) return a.a.createElement(E.a, {
						className: Object(S.a)(T.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var I = P,
				w = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				B = n("./src/reddit/components/SidebarContainer/index.tsx"),
				A = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				D = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				W = n("./src/reddit/actions/post.ts"),
				R = n("./src/app/strings/index.ts"),
				U = n("./src/lib/prettyPrintNumber/index.ts"),
				Q = n("./src/lib/timeAgo/index.ts"),
				J = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				H = n("./src/reddit/components/Thumbnail/index.tsx"),
				X = n("./src/reddit/helpers/overlay/index.ts"),
				Z = n("./src/reddit/selectors/posts.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				K = n("./src/reddit/selectors/user.ts"),
				V = n("./src/reddit/components/MiniPost/index.m.less"),
				Y = n.n(V);
			const G = Object(o.a)(e => e, Z.I, Z.c, K.P, (e, t, n, s) => {
				return {
					crosspost: n,
					language: s,
					post: t,
					subredditOrProfile: Object(M.J)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class q extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n()
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
						showSubreddit: n = !1,
						subredditOrProfile: s
					} = this.props;
					return a.a.createElement("div", {
						className: Object(S.a)(Y.a.container, e),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: Y.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(H.a, {
						post: t
					})), a.a.createElement("div", {
						className: Y.a.postDetails
					}, a.a.createElement("p", {
						className: Y.a.title,
						title: t.title
					}, t.title), n && s && s.displayText && a.a.createElement(J.a, {
						to: s.url,
						onClick: this.onClickSubreddit
					}, s.displayText), a.a.createElement("div", null, a.a.createElement("span", {
						className: Y.a.meta
					}, Object(R.c)(this.props.language, "posts.points.noun", t.score, {
						count: Object(U.b)(t.score)
					})), a.a.createElement("span", {
						className: Y.a.meta
					}, Object(R.c)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(U.b)(t.numComments)
					})), a.a.createElement("span", {
						className: Y.a.meta
					}, Object(Q.d)(this.props.language, t.created / 1e3, !0, !0)))))
				}
			}
			var z = Object(r.b)(G, (e, t) => ({
					openLightbox: t => e(Object(X.a)(t.permalink))
				}))(q),
				$ = n("./src/reddit/components/Widgets/Base/index.tsx");
			class ee extends a.a.Component {
				render() {
					return a.a.createElement("div", null, a.a.createElement($.a, null, this.props.headerText), this.props.posts.map(e => a.a.createElement(z, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var te = ee,
				ne = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				se = n.n(ne),
				ae = n("./src/lib/lessComponent.tsx");
			const re = Object(r.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(X.a)(t.permalink)),
					clearLinks: () => e(Object(W.p)())
				})),
				oe = ae.a.button("ClearButton", se.a);
			class ce extends a.a.Component {
				render() {
					return a.a.createElement($.b, null, a.a.createElement(te, {
						className: this.props.className,
						headerText: Object(d.c)("Recent posts"),
						language: this.props.language,
						posts: this.props.posts
					}), a.a.createElement(oe, {
						onClick: this.props.clearLinks
					}, Object(d.c)("Clear")))
				}
			}
			var ie = re(ce);
			const de = Object(o.c)({
				language: K.P,
				recentPosts: Z.R
			});
			var le = Object(r.b)(de, (e, t) => ({
					openLightbox: t => () => e(Object(X.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n,
						language: s
					} = e;
					return n && n.length ? a.a.createElement(g.a, null, a.a.createElement(ie, {
						className: t,
						language: s,
						headerText: Object(d.c)("Recent posts"),
						posts: n
					})) : null
				}),
				me = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ue = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var pe = Object(r.b)(Object(o.c)({
					communities: M.g
				}))(Object(me.b)(e => a.a.createElement(ue.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				be = n("./src/reddit/featureFlags/index.ts"),
				ge = n("./src/reddit/constants/subredditLeaderboard.ts"),
				Ee = n("./src/reddit/constants/tracking.ts"),
				he = n("./src/reddit/selectors/telemetry.ts"),
				xe = n("./src/reddit/selectors/widgets.ts"),
				ke = n("./src/telemetry/models/Subreddit.ts");
			const ye = e => t => n => Object.assign({}, he.defaults(n), Object(xe.b)(n, e), {
					source: "trending_community_card",
					action: Ee.c.CLICK,
					noun: Object(ke.getSubscribeEventNoun)(e.type, t)
				}),
				_e = e => t => Object.assign({}, he.defaults(t), Object(xe.b)(t, e), {
					source: "trending_community_card",
					action: Ee.c.CLICK,
					noun: "community"
				});
			var Ne = n("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				Ce = n("./src/reddit/selectors/seo/linksModule.ts"),
				Se = n("./src/lib/constants/index.ts"),
				Oe = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const je = Object(o.c)({
					isMod: K.H,
					isLoggedIn: e => e.user.temporaryGQL.isLoggedIn,
					isUpAndComingExperiment: Ne.b,
					trendingSubredditIds: M.X,
					currentUser: K.i,
					frontpageLinks: Ce.b,
					showLayersSidebar: be.d.layersEmbedQuickLink
				}),
				ve = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				fe = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Te = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold));
			class Le extends a.a.Component {
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
						className: t,
						frontpageLinks: n,
						isLoggedIn: s,
						isUpAndComingExperiment: r,
						listingName: o,
						trendingSubredditIds: i,
						showLayersSidebar: l
					} = this.props;
					return a.a.createElement(B.a, {
						className: t
					}, a.a.createElement(D.a, {
						categories: ge.i,
						category: r ? ge.k : ge.j,
						first: 5,
						shouldDisplayDelta: this.props.isMod,
						to: r ? "".concat(ge.e).concat(ge.m) : ge.e
					}), l && a.a.createElement(g.a, null, a.a.createElement(p, null)), a.a.createElement(w.a, {
						placement: Se.c.ABOVE_THE_FOLD,
						listingName: o,
						position: Oe.a.FIRST,
						sizes: Se.h,
						placementIndex: e++
					}), Te(this.props) && a.a.createElement(C, null), ve(this.props) && a.a.createElement(g.a, null, a.a.createElement(pe, {
						getClickEventFactory: _e,
						getSubscribeEventFactoryHandler: ye,
						subredditIds: i,
						title: Object(d.c)("Trending Communities")
					})), s && a.a.createElement(g.a, null, a.a.createElement(c.a, {
						listingName: o
					})), fe(this.props) && a.a.createElement(le, null), n && a.a.createElement(g.a, null, a.a.createElement(I, {
						links: n
					})), a.a.createElement(A.a, {
						adComponent: a.a.createElement(w.a, {
							placement: Se.c.BELOW_THE_FOLD,
							listingName: o,
							position: Oe.a.BOTTOM,
							sizes: Se.m,
							placementIndex: e++
						})
					}))
				}
			}
			t.default = Object(r.b)(je)(Le)
		},
		"./src/reddit/components/LayerPromotionWidget/index.m.less": function(e, t, n) {
			e.exports = {
				image: "_18FHrNt95IT6Hc8F5tj_21"
			}
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4",
				cta: "_1Cg0rke34k99vLcCo_aCP1"
			}
		},
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = n.n(a);
			const o = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", r.a);
			t.a = o
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/sampleSize.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./node_modules/lodash/first.js"),
				i = n.n(c),
				d = n("./node_modules/lodash/times.js"),
				l = n.n(d),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./src/config.ts"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				g = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				E = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/subredditLeaderboard.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/Chip/index.m.less"),
				y = n.n(k);
			var _ = e => {
					const t = e.to ? m.a : "div",
						n = Object(p.a)(y.a.chip, e.isActive && y.a.active, e.className);
					return o.a.createElement(t, {
						className: n,
						to: e.to || ""
					}, e.children)
				},
				N = n("./src/reddit/helpers/name/index.ts"),
				C = n("./src/reddit/i18n/components.tsx"),
				S = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				O = n.n(S);
			const j = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && O.a.communityBannerPlaceholder;
					return o.a.createElement("div", {
						className: Object(p.a)(e.className, O.a.communityBanner, n),
						style: {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						}
					}, t && o.a.createElement("h2", {
						className: O.a.communityBannerText
					}, o.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.c),
						to: e.categoryName === h.m ? "".concat(h.e).concat(h.m) : h.e
					}, o.a.createElement(o.a.Fragment, null, e.categoryName ? (e => e === h.m ? o.a.createElement(C.c, null, "Up-and-coming Communities") : o.a.createElement(o.a.Fragment, null, "Top", o.a.createElement("span", {
						className: O.a.categoryName
					}, " ", o.a.createElement(C.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				v = e => o.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const n = e.subreddits[t.id];
					return o.a.createElement(b.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.c, n.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: n
					})
				}), !e.rankings.length && f),
				f = o.a.createElement(o.a.Fragment, null, l()(5, e => o.a.createElement(g.a, {
					key: e
				}))),
				T = e => {
					const t = e.isSecondaryButton ? x.k : x.h;
					return o.a.createElement("div", {
						className: O.a.footer
					}, o.a.createElement(t, {
						className: O.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? o.a.createElement(C.c, null, "See All ", o.a.createElement(C.b, {
						name: "categoryName"
					}, e.categoryName)) : o.a.createElement(C.c, null, "See All") : o.a.createElement(C.c, null, "View all")))
				},
				L = e => o.a.createElement("div", {
					className: O.a.categoryPicker
				}, e.categories && e.categories.map(e => o.a.createElement(_, {
					className: O.a.chip,
					key: e.name,
					to: "".concat(h.e).concat(Object(N.f)(e.name), "/")
				}, e.name)));
			var F = e => {
					const t = i()(e.rankings),
						n = e.subreddits && t && e.subreddits[t.id],
						s = "".concat(u.a.assetPath, "/img/leaderboard/banner-background.png"),
						a = n ? n.bannerBackgroundImage || s : void 0,
						r = e.to || e.categoryName && "".concat(h.e).concat(Object(N.f)(e.categoryName) || "", "/");
					return o.a.createElement(E.a, {
						className: e.className,
						contentOnly: !0
					}, o.a.createElement(j, {
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
					}), o.a.createElement(T, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: r
					}), e.categories && o.a.createElement(L, {
						categories: e.categories
					}))
				},
				P = n("./src/reddit/components/TrackingHelper/index.tsx"),
				I = n("./src/reddit/contexts/ApiContext.tsx"),
				w = n("./src/reddit/endpoints/subreddit/models.ts"),
				B = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				A = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				D = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				W = n("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const U = async (e, t) => {
				const n = await Object(B.a)(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(A.c)(t)
				}
			}, Q = async e => {
				const t = a()(W.a, 5),
					n = await Object(w.a)(e, {
						names: t
					});
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(A.a)(t)
				}
			};
			class J extends o.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, n = e && e.id;
						n !== h.l ? (n || n === h.d) && U(this.props.gqlContext(), {
							categoryId: n,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								n = e && e.subreddits,
								s = this.props.category && this.props.category.name || h.a;
							t && n && this.setState(e => Object.assign({}, e, {
								[s]: {
									rankings: t,
									subreddits: n
								}
							}))
						}).catch(e => console.error("Error >>>", e)) : Q(this.props.gqlContext()).then(e => {
							if (!e) return;
							const {
								rankings: t,
								subreddits: n
							} = e;
							this.setState(e => Object.assign({}, e, {
								[h.m]: {
									rankings: t,
									subreddits: n
								}
							}))
						})
					}, this.sendEventClick = (e, t, n) => {
						this.props.sendEvent(Object(D.c)(e, t, n)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						n = this.props && this.props.category && this.props.category.id,
						s = this.props.category && this.props.category.name;
					t !== n && s && !this.state[s] && this.fetchTopSubreddits()
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						n = t || h.a,
						s = this.state[n],
						a = s ? s.rankings : [],
						r = s ? s.subreddits : {};
					return o.a.createElement(F, R({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: a,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: r
					}, this.props))
				}
			}
			t.a = Object(I.b)(Object(P.b)(J))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/i18n/components.tsx"),
				m = e => a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 10 8",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
				}))),
				u = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				p = n.n(u);
			n.d(t, "a", (function() {
				return g
			}));
			const b = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(d.b, {
					className: p.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: p.a.subredditDetailsContainer
				}, e.large ? a.a.createElement(i.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: p.a.smallText
				}, a.a.createElement(l.c, null, "This community hasn't been ranked yet.")))),
				g = e => {
					const t = Object(o.a)(p.a.subredditRankItem, e.large && p.a.large),
						n = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(c.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						i = e.delta ? n ? "#46D160" : "#EA0027" : "transparent";
					return a.a.createElement("li", {
						className: p.a.listItem,
						key: e.subreddit.displayText
					}, a.a.createElement(r.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: p.a.subredditRankItemColumn
					}, a.a.createElement("span", {
						className: p.a.rankText
					}, s), a.a.createElement(m, {
						className: Object(o.a)(p.a.arrow, !n && p.a.negative),
						style: {
							fill: i
						}
					}), a.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: p.a.regularText
					}, e.delta ? Object(c.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				c = n.n(o);
			const i = e => a.a.createElement("div", {
				className: Object(r.a)(c.a.placeholderWrapper, e.large && c.a.large)
			}, a.a.createElement("span", {
				className: c.a.subredditIconLoading
			}), a.a.createElement("span", {
				className: c.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, n) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, n) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, a.defaults(t), {
					action: "click",
					noun: Object(s.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, n) => r => Object.assign({}, a.defaults(r), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => Object.assign({}, a.defaults(n), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				i = (e, t, n) => r => Object.assign({}, a.defaults(r), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				})
		}
	}
]);
//# sourceMappingURL=FrontpageSidebar.ec6683fc5dc20226597c.js.map