// https://www.redditstatic.com/desktop2x/Frontpage~FrontpageSidebar.50d7ff628ce8d5324c79.js
// Retrieved at 10/7/2020, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~FrontpageSidebar"], {
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
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
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
					return i.a.createElement(u.a, null, i.a.createElement(b.a, {
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
					}))), i.a.createElement(p.h, {
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
				N = n("./src/lib/classNames/index.ts"),
				y = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				j = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				C = n.n(j);
			const O = e => {
					let {
						to: t,
						title: n
					} = e;
					return i.a.createElement(y.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, i.a.createElement(S.a, {
						className: C.a.Link,
						to: t,
						title: n
					}, n))
				},
				v = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: a,
						children: r,
						onToggle: o,
						onExpand: d
					} = e;
					return i.a.createElement("div", {
						className: Object(N.a)(C.a.Section, {
							[C.a.opened]: n,
							[C.a.expanded]: a
						})
					}, i.a.createElement("div", {
						className: C.a.SectionHeader,
						onClick: o
					}, i.a.createElement("div", {
						className: C.a.SectionTitle
					}, t), i.a.createElement(f.a, {
						className: C.a.SectionChevron
					})), i.a.createElement("div", {
						className: C.a.SectionBody
					}, i.a.createElement("div", {
						className: C.a.SectionContent
					}, r), i.a.createElement("div", {
						className: C.a.SectionFooter
					}, i.a.createElement(p.o, {
						className: C.a.SectionButton,
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
						return i.a.createElement(O, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => i.a.createElement(v, {
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
					if (t) return i.a.createElement(b.a, {
						className: Object(N.a)(C.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var w = T,
				F = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				L = n("./src/reddit/components/SidebarContainer/index.tsx"),
				P = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				I = n("./node_modules/lodash/sampleSize.js"),
				B = n.n(I),
				A = n("./node_modules/request-idle-callback/index.js"),
				D = n("./src/lib/constants/index.ts"),
				W = n("./src/reddit/components/SubredditIcon/index.tsx"),
				R = n("./src/reddit/constants/localStorage.ts"),
				U = n("./src/reddit/contexts/ApiContext.tsx"),
				Q = n("./src/reddit/featureFlags/component.tsx"),
				J = n("./src/reddit/helpers/localStorage/index.ts"),
				M = n("./src/reddit/helpers/name/index.ts"),
				Z = n("./src/lib/makeApiRequest/index.ts"),
				H = n("./src/lib/omitHeaders/index.ts"),
				K = n("./src/reddit/constants/headers.ts");
			const X = e => Object(Z.a)(Object(H.a)(e, [K.a]), {
				endpoint: "".concat(e.apiUrl, "/api/multi/user/CommunityAdoptionBot/m/adoption_week/"),
				method: D.db.GET,
				type: "json"
			});
			var G = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				V = n.n(G);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), q = 3, z = 30 * D.eb, $ = "SubredditAdoption";
			class ee extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = ee.cachedData || Object(J.o)(R.D) || null;
					if (!e || Date.now() - e.fetchedAt > z) {
						const t = await X(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(J.Z)(R.D, e))
					}
					return ee.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(A.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: B()(e, q)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? i.a.createElement("div", {
						className: V.a.container
					}, i.a.createElement("div", {
						className: V.a.main
					}, i.a.createElement("div", {
						className: V.a.title
					}, i.a.createElement(W.b, {
						className: V.a.icon
					}), Y._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), i.a.createElement("div", {
						className: V.a.description
					}, Y._("{subreddits list} and more are looking for moderators!", [Y._param("subreddits list", i.a.createElement("strong", null, e.map(M.b).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), i.a.createElement(p.k, {
						className: V.a.button,
						to: "/r/".concat($, "?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week")
					}, Y._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			ee.cachedData = null;
			var te = Object(Q.a)("srAdoptionWeek", Object(U.b)(ee)),
				ne = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				se = n("./src/reddit/actions/post.ts"),
				ae = n("./src/reddit/components/MiniPost/index.tsx"),
				re = n("./src/reddit/components/Widgets/Base/index.tsx");
			class oe extends i.a.Component {
				render() {
					return i.a.createElement("div", null, i.a.createElement(re.a, null, this.props.headerText), this.props.posts.map(e => i.a.createElement(ae.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var ie = oe,
				de = n("./src/reddit/helpers/overlay/index.ts"),
				ce = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				le = n.n(ce),
				me = n("./src/lib/lessComponent.tsx");
			const ue = Object(d.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink)),
					clearLinks: () => e(Object(se.n)())
				})),
				be = me.a.button("ClearButton", le.a);
			class pe extends i.a.Component {
				render() {
					return i.a.createElement(re.b, null, i.a.createElement(ie, {
						className: this.props.className,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), i.a.createElement(be, {
						onClick: this.props.clearLinks
					}, s.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var ge = ue(pe),
				he = n("./src/reddit/selectors/posts.ts");
			const xe = Object(c.c)({
				recentPosts: he.W
			});
			var _e = Object(d.b)(xe, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? i.a.createElement(u.a, null, i.a.createElement(ge, {
						className: t,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				ke = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ee = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Ne = n("./src/reddit/selectors/subreddit.ts");
			var ye = Object(d.b)(Object(c.c)({
					communities: Ne.g
				}))(Object(ke.c)(e => i.a.createElement(Ee.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				Se = n("./src/reddit/constants/subredditLeaderboard.ts"),
				fe = n("./src/reddit/constants/tracking.ts"),
				je = n("./src/reddit/selectors/telemetry.ts"),
				Ce = n("./src/reddit/selectors/widgets.ts"),
				Oe = n("./src/telemetry/models/Subreddit.ts");
			const ve = e => t => n => Object.assign(Object.assign(Object.assign({}, je.defaults(n)), Object(Ce.b)(n, e)), {
					source: "trending_community_card",
					action: fe.c.CLICK,
					noun: Object(Oe.getSubscribeEventNoun)(e.type, t)
				}),
				Te = e => t => Object.assign(Object.assign(Object.assign({}, je.defaults(t)), Object(Ce.b)(t, e)), {
					source: "trending_community_card",
					action: fe.c.CLICK,
					noun: "community"
				});
			var we = n("./src/reddit/selectors/seo/linksModule.ts"),
				Fe = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Le = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const Pe = Object(c.c)({
					isMod: Fe.J,
					isLoggedIn: Fe.H,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					trendingSubredditIds: Ne.bb,
					currentUser: Fe.i,
					frontpageLinks: we.b,
					isOver18: Fe.Y
				}),
				Ie = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				Be = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Ae = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold));
			class De extends i.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.state = {
						isMounted: !1,
						random: Math.random(),
						randomIndex: r()(Se.l.length)
					}
				}
				render() {
					let e = 0;
					const {
						className: t,
						frontpageLinks: n,
						isLoggedIn: a,
						isOver18: r,
						shouldShowLocalRecommendations: o,
						listingName: d,
						trendingSubredditIds: c
					} = this.props, m = o, b = [...Se.l];
					m && b.unshift(Se.g);
					let p = Se.m;
					return m && (p = b[this.state.randomIndex]), i.a.createElement(L.a, {
						className: t
					}, i.a.createElement(ne.a, {
						categories: b,
						category: p,
						first: 5,
						isOver18: r,
						shouldDisplayDelta: !this.props.isMod && p.id !== Se.h,
						to: p.path
					}), i.a.createElement(F.a, {
						placement: D.c.ABOVE_THE_FOLD,
						listingName: d,
						position: Le.a.FIRST,
						sizes: D.h,
						placementIndex: e++
					}), Ae(this.props) && i.a.createElement(E, null), Ie(this.props) && i.a.createElement(u.a, null, i.a.createElement(ye, {
						getClickEventFactory: Te,
						getSubscribeEventFactoryHandler: ve,
						subredditIds: c,
						title: s.fbt._("Trending Communities", null, {
							hk: "2WTgEw"
						})
					})), a && i.a.createElement(u.a, null, i.a.createElement(l.a, {
						listingName: d
					})), Be(this.props) && i.a.createElement(_e, null), n && i.a.createElement(u.a, null, i.a.createElement(w, {
						links: n
					})), i.a.createElement(P.a, {
						adComponent: i.a.createElement(F.a, {
							placement: D.c.BELOW_THE_FOLD,
							listingName: d,
							position: Le.a.BOTTOM,
							sizes: D.n,
							placementIndex: e++
						})
					}, a && i.a.createElement(te, null)))
				}
			}
			t.default = Object(d.b)(Pe)(De)
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
				b = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/MiniPost/index.m.less"),
				x = n.n(h);
			const _ = Object(i.a)(e => e, p.N, p.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(g.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(o.b)(_, (e, t) => ({
					openLightbox: t => e(Object(b.a)(t.permalink))
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
				buttonFontXS: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontXs: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontS: "_2wKWEQ-jbYxfuGUxCG8h09",
				buttonFontM: "gDNmuWsQQtIKbOsMxXWEo",
				buttonFontL: "_16efVdvn26v_1Oo2lbTnwG",
				buttonFontXL: "_2YqGgd9hmqUohHovWDx40Q",
				buttonFontXl: "_2YqGgd9hmqUohHovWDx40Q",
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
		"./src/reddit/components/SubredditAdoptionWidget/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_32gg9k8mE7XAO33Q0lKRlU",
				main: "_39QHoSGxWS9OKtoNU9jEE_",
				title: "_27oRfx5g78dJfAJl_8Npk3",
				icon: "_2t2xQcM_0PlqIR0rm5VRfJ",
				description: "_2HAYUIdDUchBheTwqmKIcq",
				button: "_3GA-tK1xBiDrxLJRZR3IIB"
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
				b = n("./src/reddit/models/GoodContent/index.ts");

			function p() {
				return (p = Object.assign || function(e) {
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
						filter: b.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							s = this.props.category && this.props.category.name || i.a;
						t && n && this.setState(e => Object.assign(Object.assign({}, e), {
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
						this.setState(e => Object.assign(Object.assign({}, e), {
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
					return a.a.createElement(r.b, p({
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
				m = n("./src/reddit/icons/svgs/Triangle/index.tsx"),
				u = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				b = n.n(u);
			const p = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(l.b, {
					className: b.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("span", {
					className: b.a.subredditDetailsContainer
				}, e.large ? r.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, r.a.createElement("span", {
					className: b.a.regularText
				}, e.subreddit.displayText)) : r.a.createElement("span", {
					className: b.a.regularText
				}, e.subreddit.displayText), null === e.rank && r.a.createElement("span", {
					className: b.a.smallText
				}, s.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				g = e => {
					const t = Object(i.a)(b.a.subredditRankItem, e.large && b.a.large),
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
						className: b.a.listItem,
						key: e.subreddit.displayText
					}, r.a.createElement(o.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, r.a.createElement("div", {
						className: b.a.subredditRankItemColumn
					}, r.a.createElement("span", {
						className: b.a.rankText
					}, s), r.a.createElement(m.a, {
						className: Object(i.a)(b.a.arrow, !n && b.a.negative),
						style: {
							fill: a
						}
					}), r.a.createElement(p, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && r.a.createElement("span", {
						className: b.a.regularText
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
				return C
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
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
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
				N = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				S = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				j = n.n(f);
			const C = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && j.a.communityBannerPlaceholder,
						a = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						} : void 0,
						r = e.categoryName === h.i ? h.g.path : h.e;
					return c.a.createElement("div", {
						className: Object(u.a)(e.className, j.a.communityBanner, n),
						style: a
					}, t && c.a.createElement("h2", {
						className: j.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.c),
						to: r
					}, e.categoryName ? (e => e === h.i ? s.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : c.a.createElement(c.a.Fragment, null, s.fbt._("Top", null, {
						hk: "4bbkOp"
					}), c.a.createElement("span", {
						className: j.a.categoryName
					}, " ", s.fbt._("{categoryName}", [s.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), s.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				O = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const s = e.subreddits[t.id];
					return c.a.createElement(b.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.c, s.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && v),
				v = c.a.createElement(c.a.Fragment, null, i()(5, e => c.a.createElement(p.a, {
					key: e
				}))),
				T = e => {
					const t = e.isSecondaryButton ? x.n : x.k;
					return c.a.createElement("div", {
						className: j.a.footer
					}, c.a.createElement(t, {
						className: j.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryName)], {
						hk: "3mjiTN"
					}) : s.fbt._("See All", null, {
						hk: "2OZax8"
					}) : s.fbt._("View All", null, {
						hk: "4vfmcB"
					})))
				};

			function w(e) {
				return "".concat(h.e).concat(Object(N.f)(e), "/")
			}
			const F = e => c.a.createElement("div", {
				className: j.a.categoryPicker
			}, e.categories && e.categories.map(t => e.activeCategoryName === t.name ? null : c.a.createElement(E, {
				className: j.a.chip,
				key: t.name,
				to: w(t.name)
			}, t.name === h.i ? s.fbt._("Near You", null, {
				hk: "RuM7j"
			}) : t.name)));
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: s,
					categories: a
				} = e, o = Object(S.a)();
				Object(d.useEffect)(() => {
					o(Object(y.d)(s || h.c))
				}, []);
				const i = r()(n),
					l = t && i && t[i.id],
					u = "".concat(m.a.assetPath, "/img/leaderboard/banner-background.png"),
					b = l ? l.bannerBackgroundImage || u : void 0,
					p = e.to || s && w(s);
				return c.a.createElement(g.a, {
					className: e.className,
					contentOnly: !0
				}, c.a.createElement(C, {
					bannerBackgroundImage: b,
					categoryName: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(O, {
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
					to: p
				}), a && c.a.createElement(F, {
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
			const r = e => t => Object.assign(Object.assign({}, a.defaults(t)), {
					action: "click",
					noun: Object(s.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, n) => r => Object.assign(Object.assign({}, a.defaults(r)), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				i = (e, t) => n => Object.assign(Object.assign({}, a.defaults(n)), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, n) => r => Object.assign(Object.assign({}, a.defaults(r)), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => Object.assign(Object.assign({}, a.defaults(n)), {
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/Triangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 10 8",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~FrontpageSidebar.50d7ff628ce8d5324c79.js.map