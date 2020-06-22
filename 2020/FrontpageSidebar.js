// https://www.redditstatic.com/desktop2x/FrontpageSidebar.de424cb2764557d82ffe.js
// Retrieved at 6/22/2020, 5:50:05 PM by Reddit Dataminer v1.0.0
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
				a = n("./node_modules/lodash/random.js"),
				r = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/IdCard/async.tsx"),
				m = n("./node_modules/react-router-redux/es/index.js"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				h = n("./src/reddit/components/PremiumCTA/index.m.less"),
				x = n.n(h);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class k extends i.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return i.a.createElement(u.a, null, i.a.createElement(p.a, {
						className: e,
						contentOnly: !0
					}, i.a.createElement("div", {
						className: x.a.wrapper
					}, i.a.createElement(g.a, {
						className: x.a.icon
					}), i.a.createElement("div", {
						className: x.a.content
					}, i.a.createElement("div", {
						className: x.a.title
					}, _._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), i.a.createElement("div", {
						className: x.a.description
					}, _._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					}))), i.a.createElement(b.e, {
						className: x.a.cta,
						onClick: t
					}, _._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var E = Object(d.b)(void 0, e => ({
					onClickPremium: () => e(Object(m.b)("/premium"))
				}))(k),
				y = n("./src/lib/classNames/index.ts"),
				N = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				C = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				S = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				j = n.n(S);
			const v = e => {
					let {
						to: t,
						title: n
					} = e;
					return i.a.createElement(N.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, i.a.createElement(f.a, {
						className: j.a.Link,
						to: t,
						title: n
					}, n))
				},
				O = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: a,
						children: r,
						onToggle: o,
						onExpand: d
					} = e;
					return i.a.createElement("div", {
						className: Object(y.a)(j.a.Section, {
							[j.a.opened]: n,
							[j.a.expanded]: a
						})
					}, i.a.createElement("div", {
						className: j.a.SectionHeader,
						onClick: o
					}, i.a.createElement("div", {
						className: j.a.SectionTitle
					}, t), i.a.createElement(C.a, {
						className: j.a.SectionChevron
					})), i.a.createElement("div", {
						className: j.a.SectionBody
					}, i.a.createElement("div", {
						className: j.a.SectionContent
					}, r), i.a.createElement("div", {
						className: j.a.SectionFooter
					}, i.a.createElement(b.n, {
						className: j.a.SectionButton,
						onClick: d
					}, a ? s.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : s.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class T extends i.a.Component {
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
						return i.a.createElement(v, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => i.a.createElement(O, {
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
					if (t) return i.a.createElement(p.a, {
						className: Object(y.a)(j.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var L = T,
				w = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				P = n("./src/reddit/components/SidebarContainer/index.tsx"),
				F = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				I = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				B = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/components/MiniPost/index.tsx"),
				D = n("./src/reddit/components/Widgets/Base/index.tsx");
			class R extends i.a.Component {
				render() {
					return i.a.createElement("div", null, i.a.createElement(D.a, null, this.props.headerText), this.props.posts.map(e => i.a.createElement(A.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var W = R,
				U = n("./src/reddit/helpers/overlay/index.ts"),
				J = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				M = n.n(J),
				Q = n("./src/lib/lessComponent.tsx");
			const Z = Object(d.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(U.a)(t.permalink)),
					clearLinks: () => e(Object(B.v)())
				})),
				V = Q.a.button("ClearButton", M.a);
			class H extends i.a.Component {
				render() {
					return i.a.createElement(D.b, null, i.a.createElement(W, {
						className: this.props.className,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), i.a.createElement(V, {
						onClick: this.props.clearLinks
					}, s.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var X = Z(H),
				G = n("./src/reddit/selectors/posts.ts");
			const K = Object(c.c)({
				recentPosts: G.X
			});
			var Y = Object(d.b)(K, (e, t) => ({
					openLightbox: t => () => e(Object(U.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? i.a.createElement(u.a, null, i.a.createElement(X, {
						className: t,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				q = n("./src/reddit/components/TrackingHelper/index.tsx"),
				z = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				$ = n("./src/reddit/selectors/subreddit.ts");
			var ee = Object(d.b)(Object(c.c)({
					communities: $.g
				}))(Object(q.c)(e => i.a.createElement(z.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				te = n("./src/reddit/constants/experiments.ts"),
				ne = n("./src/reddit/constants/subredditLeaderboard.ts"),
				se = n("./src/reddit/constants/tracking.ts"),
				ae = n("./src/reddit/selectors/telemetry.ts"),
				re = n("./src/reddit/selectors/widgets.ts"),
				oe = n("./src/telemetry/models/Subreddit.ts");
			const ie = e => t => n => Object.assign({}, ae.defaults(n), Object(re.b)(n, e), {
					source: "trending_community_card",
					action: se.c.CLICK,
					noun: Object(oe.getSubscribeEventNoun)(e.type, t)
				}),
				de = e => t => Object.assign({}, ae.defaults(t), Object(re.b)(t, e), {
					source: "trending_community_card",
					action: se.c.CLICK,
					noun: "community"
				});
			var ce = n("./src/reddit/selectors/experiments/localCommunitiesLeaderboard.ts"),
				le = n("./src/reddit/selectors/seo/linksModule.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				ue = n("./src/lib/constants/index.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var pe = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const be = Object(c.c)({
					isMod: me.I,
					isLoggedIn: me.G,
					isInLocalCommunitiesExperiment: ce.a,
					localCommunitiesVariant: ce.b,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					trendingSubredditIds: $.ab,
					currentUser: me.i,
					frontpageLinks: le.b,
					isOver18: me.V
				}),
				ge = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				he = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				xe = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold));
			class _e extends i.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.state = {
						isMounted: !1,
						random: Math.random(),
						randomIndex: r()(ne.l.length)
					}
				}
				render() {
					let e = 0;
					const {
						className: t,
						frontpageLinks: n,
						isLoggedIn: a,
						isOver18: r,
						isInLocalCommunitiesExperiment: o,
						shouldShowLocalRecommendations: d,
						localCommunitiesVariant: c,
						listingName: m,
						trendingSubredditIds: p
					} = this.props, b = o && d, g = [...ne.l];
					b && g.unshift(ne.g);
					const h = c === te.Cb.Rotate,
						x = c === te.Cb.RotateAll;
					let _ = ne.m;
					return b && (h ? _ = this.state.random > .5 ? ne.g : ne.m : x && (_ = g[this.state.randomIndex])), i.a.createElement(P.a, {
						className: t
					}, i.a.createElement(I.a, {
						categories: g,
						category: _,
						first: 5,
						isOver18: r,
						shouldDisplayDelta: !this.props.isMod && _.id !== ne.h,
						to: _.path
					}), i.a.createElement(w.a, {
						placement: ue.c.ABOVE_THE_FOLD,
						listingName: m,
						position: pe.a.FIRST,
						sizes: ue.h,
						placementIndex: e++
					}), xe(this.props) && i.a.createElement(E, null), ge(this.props) && i.a.createElement(u.a, null, i.a.createElement(ee, {
						getClickEventFactory: de,
						getSubscribeEventFactoryHandler: ie,
						subredditIds: p,
						title: s.fbt._("Trending Communities", null, {
							hk: "2WTgEw"
						})
					})), a && i.a.createElement(u.a, null, i.a.createElement(l.a, {
						listingName: m
					})), he(this.props) && i.a.createElement(Y, null), n && i.a.createElement(u.a, null, i.a.createElement(L, {
						links: n
					})), i.a.createElement(F.a, {
						adComponent: i.a.createElement(w.a, {
							placement: ue.c.BELOW_THE_FOLD,
							listingName: m,
							position: pe.a.BOTTOM,
							sizes: ue.n,
							placementIndex: e++
						})
					}))
				}
			}
			t.default = Object(d.b)(be)(_e)
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				crowdControlPreview: "_1R-_n2amB7t3lRrMWDZFYz",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				SubredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
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
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/MiniPost/index.m.less"),
				x = n.n(h);
			const _ = Object(i.a)(e => e, b.O, b.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(g.L)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(o.b)(_, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class E extends r.a.PureComponent {
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
						subredditSameLine: o,
						crowdControlPreview: i
					} = this.props;
					return r.a.createElement("div", {
						className: Object(d.a)(x.a.container, e, i ? x.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: x.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(u.a, {
						post: t
					})), r.a.createElement("div", {
						className: x.a.postDetails
					}, r.a.createElement("p", {
						className: x.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(d.a)(x.a.subAndMeta, {
							[x.a.isSingleLine]: o
						})
					}, n && a && a.displayText && r.a.createElement(m.a, {
						className: x.a.SubredditLink,
						to: a.url,
						onClick: this.onClickSubreddit
					}, a.displayText), o && r.a.createElement("div", {
						className: x.a.separator
					}), !i && r.a.createElement("div", null, r.a.createElement("span", {
						className: x.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(c.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: x.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(c.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: x.a.meta
					}, Object(l.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = k(E)
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/constants/subredditLeaderboard.ts"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/reddit/endpoints/subreddit/local.ts"),
				l = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				u = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				p = n("./src/reddit/models/GoodContent/index.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = async (e, t) => {
				const n = await Object(l.a)(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(m.c)(t)
				}
			};
			class h extends a.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n) => {
						this.props.sendEvent(Object(u.c)(e, t, n)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n)
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
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, n = e && e.id;
					if (n !== i.h)(n || n === i.d) && g(this.props.gqlContext(), {
						categoryId: n,
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							s = this.props.category && this.props.category.name || i.a;
						t && n && this.setState(e => Object.assign({}, e, {
							[s]: {
								rankings: t,
								subreddits: n
							}
						}))
					}).catch(e => console.error("Error >>>", e));
					else {
						const e = await async function(e, t) {
							const n = await Object(c.a)(e, t);
							if (n && n.ok) {
								const e = n.body,
									t = e && e.data && e.data.nearbySubreddits;
								return Object(m.a)(t)
							}
						}(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: s
						} = e;
						this.setState(e => Object.assign({}, e, {
							[i.i]: {
								rankings: n,
								subreddits: s
							}
						}))
					}
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						n = t || i.a,
						s = this.state[n],
						o = s ? s.rankings : [],
						d = s ? s.subreddits : {},
						c = o && o[0] && o[0].id,
						l = d && d[c],
						m = !(l && l.isNSFW) || this.props.isOver18;
					return a.a.createElement(r.b, b({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: o,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: d
					}, this.props))
				}
			}
			t.a = Object(d.b)(Object(o.c)(h))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
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
			const b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(l.b, {
					className: p.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("span", {
					className: p.a.subredditDetailsContainer
				}, e.large ? r.a.createElement(c.a, {
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
							const t = Object(d.b)(e);
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
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = n.n(o);
			const d = e => a.a.createElement("div", {
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
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/first.js"),
				r = n.n(a),
				o = n("./node_modules/lodash/times.js"),
				i = n.n(o),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = n("./src/config.ts"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/subredditLeaderboard.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Chip/index.m.less"),
				k = n.n(_);
			var E = e => {
					const t = e.to ? l.a : "div",
						n = Object(u.a)(k.a.chip, e.isActive && k.a.active, e.className);
					return c.a.createElement(t, {
						className: n,
						to: e.to || ""
					}, e.children)
				},
				y = n("./src/reddit/helpers/name/index.ts"),
				N = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				S = n.n(C);
			const j = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && S.a.communityBannerPlaceholder,
						a = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						} : void 0,
						r = e.categoryName === h.i ? h.g.path : h.e;
					return c.a.createElement("div", {
						className: Object(u.a)(e.className, S.a.communityBanner, n),
						style: a
					}, t && c.a.createElement("h2", {
						className: S.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.c),
						to: r
					}, e.categoryName ? (e => e === h.i ? s.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : c.a.createElement(c.a.Fragment, null, s.fbt._("Top", null, {
						hk: "4bbkOp"
					}), c.a.createElement("span", {
						className: S.a.categoryName
					}, " ", s.fbt._("{categoryName}", [s.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), s.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				v = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const s = e.subreddits[t.id];
					return c.a.createElement(p.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.c, s.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && O),
				O = c.a.createElement(c.a.Fragment, null, i()(5, e => c.a.createElement(b.a, {
					key: e
				}))),
				T = e => {
					const t = e.isSecondaryButton ? x.k : x.h;
					return c.a.createElement("div", {
						className: S.a.footer
					}, c.a.createElement(t, {
						className: S.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryName)], {
						hk: "3mjiTN"
					}) : s.fbt._("See All", null, {
						hk: "2OZax8"
					}) : s.fbt._("View all", null, {
						hk: "Txpck"
					})))
				};

			function L(e) {
				return "".concat(h.e).concat(Object(y.f)(e), "/")
			}
			const w = e => c.a.createElement("div", {
				className: S.a.categoryPicker
			}, e.categories && e.categories.map(t => e.activeCategoryName === t.name ? null : c.a.createElement(E, {
				className: S.a.chip,
				key: t.name,
				to: L(t.name)
			}, t.name === h.i ? s.fbt._("Near You", null, {
				hk: "RuM7j"
			}) : t.name)));
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: s,
					categories: a
				} = e, o = Object(f.a)();
				Object(d.useEffect)(() => {
					o(Object(N.d)(s || ""))
				}, []);
				const i = r()(n),
					l = t && i && t[i.id],
					u = "".concat(m.a.assetPath, "/img/leaderboard/banner-background.png"),
					p = l ? l.bannerBackgroundImage || u : void 0,
					b = e.to || s && L(s);
				return c.a.createElement(g.a, {
					className: e.className,
					contentOnly: !0
				}, c.a.createElement(j, {
					bannerBackgroundImage: p,
					categoryName: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(v, {
					categoryName: s,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), c.a.createElement(T, {
					categoryName: s,
					isSecondaryButton: e.isSecondaryButton,
					onSendEventClick: e.onSendEventClick,
					to: b
				}), a && c.a.createElement(w, {
					categories: a,
					activeCategoryName: s
				}))
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
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
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
				d = (e, t, n) => r => Object.assign({}, a.defaults(r), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => Object.assign({}, a.defaults(n), {
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/selectors/experiments/localCommunitiesLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");

			function r(e) {
				const t = o(e);
				return t === s.Cb.Rotate || t === s.Cb.RotateAll
			}

			function o(e) {
				if (e.user.prefs.showLocationBasedRecommendations) return Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: s.Bb
				})
			}
		}
	}
]);
//# sourceMappingURL=FrontpageSidebar.de424cb2764557d82ffe.js.map