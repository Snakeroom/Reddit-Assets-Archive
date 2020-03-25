// https://www.redditstatic.com/desktop2x/FrontpageSidebar.735fd5831b3c6401dc93.js
// Retrieved at 3/25/2020, 3:40:07 PM by Reddit Dataminer v1.0.0
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/IdCard/async.tsx"),
				d = n("./src/config.ts"),
				l = n("./src/reddit/components/LayerPromotionWidget/index.m.less"),
				m = n.n(l);
			const u = "".concat(d.a.assetPath, "/img/layer_promotion_image.png");
			var p = () => r.a.createElement("div", null, r.a.createElement("a", {
					href: "http://reddit.com/r/Layer"
				}, r.a.createElement("img", {
					alt: s.fbt._("Layer promotion", null, {
						hk: "2Wkyxv"
					}),
					className: m.a.image,
					src: u
				}))),
				b = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/i18n/components.tsx"),
				k = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				_ = n("./src/reddit/components/PremiumCTA/index.m.less"),
				y = n.n(_);
			class N extends r.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return r.a.createElement(g.a, null, r.a.createElement(h.a, {
						className: e,
						contentOnly: !0
					}, r.a.createElement("div", {
						className: y.a.wrapper
					}, r.a.createElement(k.a, {
						className: y.a.icon
					}), r.a.createElement("div", {
						className: y.a.content
					}, r.a.createElement("div", {
						className: y.a.title
					}, r.a.createElement(E.c, null, "Reddit Premium")), r.a.createElement("div", {
						className: y.a.description
					}, r.a.createElement(E.c, null, "The best Reddit experience, with monthly Coins"))), r.a.createElement(x.e, {
						className: y.a.cta,
						onClick: t
					}, r.a.createElement(E.c, null, "Try Now")))))
				}
			}
			var S = Object(o.b)(void 0, e => ({
					onClickPremium: () => e(Object(b.b)("/premium"))
				}))(N),
				C = n("./src/lib/classNames/index.ts"),
				f = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				j = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				O = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				T = n.n(O);
			const L = e => {
					let {
						to: t,
						title: n
					} = e;
					return r.a.createElement(f.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, r.a.createElement(j.a, {
						className: T.a.Link,
						to: t,
						title: n
					}, n))
				},
				P = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: a,
						children: o,
						onToggle: i,
						onExpand: c
					} = e;
					return r.a.createElement("div", {
						className: Object(C.a)(T.a.Section, {
							[T.a.opened]: n,
							[T.a.expanded]: a
						})
					}, r.a.createElement("div", {
						className: T.a.SectionHeader,
						onClick: i
					}, r.a.createElement("div", {
						className: T.a.SectionTitle
					}, t), r.a.createElement(v.a, {
						className: T.a.SectionChevron
					})), r.a.createElement("div", {
						className: T.a.SectionBody
					}, r.a.createElement("div", {
						className: T.a.SectionContent
					}, o), r.a.createElement("div", {
						className: T.a.SectionFooter
					}, r.a.createElement(x.n, {
						className: T.a.SectionButton,
						onClick: c
					}, a ? s.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : s.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class F extends r.a.Component {
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
						return r.a.createElement(L, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => r.a.createElement(P, {
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
					if (t) return r.a.createElement(h.a, {
						className: Object(C.a)(T.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var w = F,
				I = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				A = n("./src/reddit/components/SidebarContainer/index.tsx"),
				B = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				D = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				W = n("./src/reddit/actions/post.ts"),
				R = n("./src/reddit/components/MiniPost/index.tsx"),
				U = n("./src/reddit/components/Widgets/Base/index.tsx");
			class Q extends r.a.Component {
				render() {
					return r.a.createElement("div", null, r.a.createElement(U.a, null, this.props.headerText), this.props.posts.map(e => r.a.createElement(R.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var J = Q,
				M = n("./src/reddit/helpers/overlay/index.ts"),
				H = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				Z = n.n(H),
				X = n("./src/lib/lessComponent.tsx");
			const V = Object(o.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(M.a)(t.permalink)),
					clearLinks: () => e(Object(W.v)())
				})),
				K = X.a.button("ClearButton", Z.a);
			class G extends r.a.Component {
				render() {
					return r.a.createElement(U.b, null, r.a.createElement(J, {
						className: this.props.className,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						language: this.props.language,
						posts: this.props.posts
					}), r.a.createElement(K, {
						onClick: this.props.clearLinks
					}, s.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var Y = V(G),
				q = n("./src/reddit/selectors/posts.ts"),
				z = n("./src/reddit/selectors/user.ts");
			const $ = Object(i.c)({
				language: z.O,
				recentPosts: q.V
			});
			var ee = Object(o.b)($, (e, t) => ({
					openLightbox: t => () => e(Object(M.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n,
						language: a
					} = e;
					return n && n.length ? r.a.createElement(g.a, null, r.a.createElement(Y, {
						className: t,
						language: a,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				te = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				se = n("./src/reddit/selectors/subreddit.ts");
			var ae = Object(o.b)(Object(i.c)({
					communities: se.g
				}))(Object(te.c)(e => r.a.createElement(ne.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				re = n("./src/reddit/featureFlags/index.ts"),
				oe = n("./src/reddit/constants/subredditLeaderboard.ts"),
				ie = n("./src/reddit/constants/tracking.ts"),
				ce = n("./src/reddit/selectors/telemetry.ts"),
				de = n("./src/reddit/selectors/widgets.ts"),
				le = n("./src/telemetry/models/Subreddit.ts");
			const me = e => t => n => Object.assign({}, ce.defaults(n), Object(de.b)(n, e), {
					source: "trending_community_card",
					action: ie.c.CLICK,
					noun: Object(le.getSubscribeEventNoun)(e.type, t)
				}),
				ue = e => t => Object.assign({}, ce.defaults(t), Object(de.b)(t, e), {
					source: "trending_community_card",
					action: ie.c.CLICK,
					noun: "community"
				});
			var pe = n("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				be = n("./src/reddit/selectors/seo/linksModule.ts"),
				ge = n("./src/lib/constants/index.ts"),
				he = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const xe = Object(i.c)({
					isMod: z.H,
					isLoggedIn: e => e.user.temporaryGQL.isLoggedIn,
					isUpAndComingExperiment: pe.b,
					trendingSubredditIds: se.X,
					currentUser: z.i,
					frontpageLinks: be.b,
					showLayersSidebar: re.d.layersEmbedQuickLink
				}),
				Ee = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				ke = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				_e = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold));
			class ye extends r.a.Component {
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
						isLoggedIn: a,
						isUpAndComingExperiment: o,
						listingName: i,
						trendingSubredditIds: d,
						showLayersSidebar: l
					} = this.props;
					return r.a.createElement(A.a, {
						className: t
					}, r.a.createElement(D.a, {
						categories: oe.i,
						category: o ? oe.k : oe.j,
						first: 5,
						shouldDisplayDelta: this.props.isMod,
						to: o ? "".concat(oe.e).concat(oe.m) : oe.e
					}), l && r.a.createElement(g.a, null, r.a.createElement(p, null)), r.a.createElement(I.a, {
						placement: ge.c.ABOVE_THE_FOLD,
						listingName: i,
						position: he.a.FIRST,
						sizes: ge.i,
						placementIndex: e++
					}), _e(this.props) && r.a.createElement(S, null), Ee(this.props) && r.a.createElement(g.a, null, r.a.createElement(ae, {
						getClickEventFactory: ue,
						getSubscribeEventFactoryHandler: me,
						subredditIds: d,
						title: s.fbt._("Trending Communities", null, {
							hk: "2WTgEw"
						})
					})), a && r.a.createElement(g.a, null, r.a.createElement(c.a, {
						listingName: i
					})), ke(this.props) && r.a.createElement(ee, null), n && r.a.createElement(g.a, null, r.a.createElement(w, {
						links: n
					})), r.a.createElement(B.a, {
						adComponent: r.a.createElement(I.a, {
							placement: ge.c.BELOW_THE_FOLD,
							listingName: i,
							position: he.a.BOTTOM,
							sizes: ge.n,
							placementIndex: e++
						})
					}))
				}
			}
			t.default = Object(o.b)(xe)(ye)
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
				subAndMeta: "_3GMQrxl5pvXDUEFvUjr9Qh",
				isSingleLine: "dZATEZTPQCHPtvhujPV0L",
				separator: "_2q6RJ3jSwGkeuWcg6aU-nY",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/MiniPost/index.m.less"),
				E = n.n(x);
			const k = Object(i.a)(e => e, b.M, b.c, h.O, (e, t, n, s) => {
					return {
						crosspost: n,
						language: s,
						post: t,
						subredditOrProfile: Object(g.J)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				_ = Object(o.b)(k, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class y extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: n,
							post: s
						} = this.props;
						n ? window.open(s.permalink) : t(s), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: n,
							subredditOrProfile: s
						} = this.props;
						e.stopPropagation(), t && s && (e.preventDefault(), window.open(s.url)), n && n()
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
						subredditOrProfile: a,
						subredditSameLine: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(c.a)(E.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: E.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(u.a, {
						post: t
					})), r.a.createElement("div", {
						className: E.a.postDetails
					}, r.a.createElement("p", {
						className: E.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(c.a)(E.a.subAndMeta, {
							[E.a.isSingleLine]: o
						})
					}, n && a && a.displayText && r.a.createElement(m.a, {
						to: a.url,
						onClick: this.onClickSubreddit
					}, a.displayText), o && r.a.createElement("div", {
						className: E.a.separator
					}), r.a.createElement("div", null, r.a.createElement("span", {
						className: E.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: E.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: E.a.meta
					}, Object(l.d)(this.props.language, t.created / 1e3, !0, !0))))))
				}
			}
			t.a = _(y)
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
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./node_modules/lodash/first.js"),
				d = n.n(c),
				l = n("./node_modules/lodash/times.js"),
				m = n.n(l),
				u = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./src/config.ts"),
				b = n("./src/lib/classNames/index.ts"),
				g = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				h = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				x = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = n("./src/reddit/constants/subredditLeaderboard.ts"),
				k = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Chip/index.m.less"),
				y = n.n(_);
			var N = e => {
					const t = e.to ? u.a : "div",
						n = Object(b.a)(y.a.chip, e.isActive && y.a.active, e.className);
					return o.a.createElement(t, {
						className: n,
						to: e.to || ""
					}, e.children)
				},
				S = n("./src/reddit/helpers/name/index.ts"),
				C = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				f = n.n(C);
			const j = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && f.a.communityBannerPlaceholder,
						s = e.bannerBackgroundImage ? {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						} : void 0;
					return o.a.createElement("div", {
						className: Object(b.a)(e.className, f.a.communityBanner, n),
						style: s
					}, t && o.a.createElement("h2", {
						className: f.a.communityBannerText
					}, o.a.createElement(u.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || E.c),
						to: e.categoryName === E.m ? "".concat(E.e).concat(E.m) : E.e
					}, o.a.createElement(o.a.Fragment, null, e.categoryName ? (e => e === E.m ? i.fbt._("Up-and-coming Communities", null, {
						hk: "1K101k"
					}) : o.a.createElement(o.a.Fragment, null, i.fbt._("Top", null, {
						hk: "4bbkOp"
					}), o.a.createElement("span", {
						className: f.a.categoryName
					}, " ", i.fbt._("{categoryName}", [i.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), i.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				v = e => o.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const n = e.subreddits[t.id];
					return o.a.createElement(g.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || E.c, n.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: n
					})
				}), !e.rankings.length && O),
				O = o.a.createElement(o.a.Fragment, null, m()(5, e => o.a.createElement(h.a, {
					key: e
				}))),
				T = e => {
					const t = e.isSecondaryButton ? k.k : k.h;
					return o.a.createElement("div", {
						className: f.a.footer
					}, o.a.createElement(t, {
						className: f.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || E.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? i.fbt._("See All {categoryName}", [i.fbt._param("categoryName", e.categoryName)], {
						hk: "3mjiTN"
					}) : i.fbt._("See All", null, {
						hk: "2OZax8"
					}) : i.fbt._("View all", null, {
						hk: "Txpck"
					})))
				},
				L = e => o.a.createElement("div", {
					className: f.a.categoryPicker
				}, e.categories && e.categories.map(e => o.a.createElement(N, {
					className: f.a.chip,
					key: e.name,
					to: "".concat(E.e).concat(Object(S.f)(e.name), "/")
				}, e.name)));
			var P = e => {
					const t = d()(e.rankings),
						n = e.subreddits && t && e.subreddits[t.id],
						s = "".concat(p.a.assetPath, "/img/leaderboard/banner-background.png"),
						a = n ? n.bannerBackgroundImage || s : void 0,
						r = e.to || e.categoryName && "".concat(E.e).concat(Object(S.f)(e.categoryName) || "", "/");
					return o.a.createElement(x.a, {
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
				F = n("./src/reddit/components/TrackingHelper/index.tsx"),
				w = n("./src/reddit/contexts/ApiContext.tsx"),
				I = n("./src/reddit/endpoints/subreddit/models.ts"),
				A = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				B = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
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
				const n = await Object(A.a)(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(B.c)(t)
				}
			}, Q = async e => {
				const t = a()(W.a, 5),
					n = await Object(I.a)(e, {
						names: t
					});
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(B.a)(t)
				}
			};
			class J extends o.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, n = e && e.id;
						n !== E.l ? (n || n === E.d) && U(this.props.gqlContext(), {
							categoryId: n,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								n = e && e.subreddits,
								s = this.props.category && this.props.category.name || E.a;
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
								[E.m]: {
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
						n = t || E.a,
						s = this.state[n],
						a = s ? s.rankings : [],
						r = s ? s.subreddits : {};
					return o.a.createElement(P, R({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: a,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: r
					}, this.props))
				}
			}
			t.a = Object(w.b)(Object(F.c)(J))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				m = e => r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 10 8",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
				}))),
				u = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				p = n.n(u);
			n.d(t, "a", (function() {
				return g
			}));
			const b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(l.b, {
					className: p.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("span", {
					className: p.a.subredditDetailsContainer
				}, e.large ? r.a.createElement(d.a, {
					subredditName: e.subreddit.name
				}, r.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText)) : r.a.createElement("span", {
					className: p.a.regularText
				}, e.subreddit.displayText), null === e.rank && r.a.createElement("span", {
					className: p.a.smallText
				}, s.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				g = e => {
					const t = Object(i.a)(p.a.subredditRankItem, e.large && p.a.large),
						n = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(c.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						a = e.delta ? n ? "#46D160" : "#EA0027" : "transparent";
					return r.a.createElement("li", {
						className: p.a.listItem,
						key: e.subreddit.displayText
					}, r.a.createElement(o.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, r.a.createElement("div", {
						className: p.a.subredditRankItemColumn
					}, r.a.createElement("span", {
						className: p.a.rankText
					}, s), r.a.createElement(m, {
						className: Object(i.a)(p.a.arrow, !n && p.a.negative),
						style: {
							fill: a
						}
					}), r.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && r.a.createElement("span", {
						className: p.a.regularText
					}, e.delta ? Object(c.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = n.n(o);
			const c = e => a.a.createElement("div", {
				className: Object(r.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, a.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), a.a.createElement("span", {
				className: i.a.subredditNameLoading
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
				return i
			})), n.d(t, "c", (function() {
				return c
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
				i = (e, t) => n => Object.assign({}, a.defaults(n), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, n) => r => Object.assign({}, a.defaults(r), {
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
//# sourceMappingURL=FrontpageSidebar.735fd5831b3c6401dc93.js.map