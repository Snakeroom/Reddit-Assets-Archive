// https://www.redditstatic.com/desktop2x/Frontpage~FrontpageSidebar.425a25b86809c4291d2f.js
// Retrieved at 10/22/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~FrontpageSidebar"], {
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/random.js"),
				r = n.n(a),
				i = n("./node_modules/lodash/shuffle.js"),
				o = n.n(i),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/IdCard/async.tsx"),
				b = n("./src/config.ts"),
				p = n("./src/reddit/components/LayerPromotionWidget/index.m.less"),
				g = n.n(p);
			const h = "".concat(b.a.assetPath, "/img/layer_promotion_image.png");
			var _ = () => c.a.createElement("div", null, c.a.createElement("a", {
					href: "https://reddit.com/r/Layer"
				}, c.a.createElement("img", {
					alt: s.fbt._("Layer promotion", null, {
						hk: "BpPd7"
					}),
					className: g.a.image,
					src: h
				}))),
				x = n("./node_modules/react-router-redux/es/index.js"),
				k = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				N = n("./src/reddit/components/PremiumCTA/index.m.less"),
				S = n.n(N);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class C extends c.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return c.a.createElement(k.a, null, c.a.createElement(E.a, {
						className: e,
						contentOnly: !0
					}, c.a.createElement("div", {
						className: S.a.wrapper
					}, c.a.createElement(f.a, {
						className: S.a.icon
					}), c.a.createElement("div", {
						className: S.a.content
					}, c.a.createElement("div", {
						className: S.a.title
					}, j._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), c.a.createElement("div", {
						className: S.a.description
					}, j._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					}))), c.a.createElement(y.h, {
						className: S.a.cta,
						onClick: t
					}, j._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var v = Object(l.b)(void 0, e => ({
					onClickPremium: () => e(Object(x.b)("/premium"))
				}))(C),
				O = n("./src/lib/classNames/index.ts"),
				T = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				w = n("./src/reddit/controls/InternalLink/index.tsx"),
				L = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				I = n.n(F);
			const P = e => {
					let {
						to: t,
						title: n
					} = e;
					return c.a.createElement(T.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, c.a.createElement(w.a, {
						className: I.a.Link,
						to: t,
						title: n
					}, n))
				},
				B = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: a,
						children: r,
						onToggle: i,
						onExpand: o
					} = e;
					return c.a.createElement("div", {
						className: Object(O.a)(I.a.Section, {
							[I.a.opened]: n,
							[I.a.expanded]: a
						})
					}, c.a.createElement("div", {
						className: I.a.SectionHeader,
						onClick: i
					}, c.a.createElement("div", {
						className: I.a.SectionTitle
					}, t), c.a.createElement(L.a, {
						className: I.a.SectionChevron
					})), c.a.createElement("div", {
						className: I.a.SectionBody
					}, c.a.createElement("div", {
						className: I.a.SectionContent
					}, r), c.a.createElement("div", {
						className: I.a.SectionFooter
					}, c.a.createElement(y.o, {
						className: I.a.SectionButton,
						onClick: o
					}, a ? s.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : s.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class A extends c.a.Component {
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
						return c.a.createElement(P, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => c.a.createElement(B, {
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
					if (t) return c.a.createElement(E.a, {
						className: Object(O.a)(I.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var D = A,
				W = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				R = n("./src/reddit/components/SidebarContainer/index.tsx"),
				U = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Q = n("./node_modules/lodash/sampleSize.js"),
				J = n.n(Q),
				M = n("./node_modules/request-idle-callback/index.js"),
				V = n("./src/lib/constants/index.ts"),
				Z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				K = n("./src/reddit/constants/localStorage.ts"),
				H = n("./src/reddit/contexts/ApiContext.tsx"),
				X = n("./src/reddit/featureFlags/component.tsx"),
				G = n("./src/reddit/helpers/localStorage/index.ts"),
				q = n("./src/reddit/helpers/name/index.ts"),
				Y = n("./src/lib/makeApiRequest/index.ts"),
				z = n("./src/lib/omitHeaders/index.ts"),
				$ = n("./src/reddit/constants/headers.ts");
			const ee = e => Object(Y.a)(Object(z.a)(e, [$.a]), {
				endpoint: "".concat(e.apiUrl, "/api/multi/user/CommunityAdoptionBot/m/adoption_week/"),
				method: V.db.GET,
				type: "json"
			});
			var te = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ne = n.n(te);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ae = 3, re = 30 * V.eb, ie = "SubredditAdoption";
			class oe extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = oe.cachedData || Object(G.o)(K.D) || null;
					if (!e || Date.now() - e.fetchedAt > re) {
						const t = await ee(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(G.Z)(K.D, e))
					}
					return oe.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(M.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: J()(e, ae)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? c.a.createElement("div", {
						className: ne.a.container
					}, c.a.createElement("div", {
						className: ne.a.main
					}, c.a.createElement("div", {
						className: ne.a.title
					}, c.a.createElement(Z.b, {
						className: ne.a.icon
					}), se._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), c.a.createElement("div", {
						className: ne.a.description
					}, se._("{subreddits list} and more are looking for moderators!", [se._param("subreddits list", c.a.createElement("strong", null, e.map(q.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), c.a.createElement(y.k, {
						className: ne.a.button,
						to: "/r/".concat(ie, "?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week")
					}, se._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			oe.cachedData = null;
			var de = Object(X.a)("srAdoptionWeek", Object(H.b)(oe)),
				ce = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				le = n("./src/reddit/actions/post.ts"),
				me = n("./src/reddit/components/MiniPost/index.tsx"),
				ue = n("./src/reddit/components/Widgets/Base/index.tsx");
			class be extends c.a.Component {
				render() {
					return c.a.createElement("div", null, c.a.createElement(ue.a, null, this.props.headerText), this.props.posts.map(e => c.a.createElement(me.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var pe = be,
				ge = n("./src/reddit/helpers/overlay/index.ts"),
				he = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				_e = n.n(he),
				xe = n("./src/lib/lessComponent.tsx");
			const ke = Object(l.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(ge.a)(t.permalink)),
					clearLinks: () => e(Object(le.n)())
				})),
				Ee = xe.a.button("ClearButton", _e.a);
			class ye extends c.a.Component {
				render() {
					return c.a.createElement(ue.b, null, c.a.createElement(pe, {
						className: this.props.className,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), c.a.createElement(Ee, {
						onClick: this.props.clearLinks
					}, s.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var fe = ke(ye),
				Ne = n("./src/reddit/selectors/posts.ts");
			const Se = Object(m.c)({
				recentPosts: Ne.W
			});
			var je = Object(l.b)(Se, (e, t) => ({
					openLightbox: t => () => e(Object(ge.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? c.a.createElement(k.a, null, c.a.createElement(fe, {
						className: t,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				Ce = n("./src/reddit/components/TrackingHelper/index.tsx"),
				ve = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Oe = n("./src/reddit/selectors/subreddit.ts");
			var Te = Object(l.b)(Object(m.c)({
					communities: Oe.g
				}))(Object(Ce.c)(e => c.a.createElement(ve.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				we = n("./src/reddit/constants/experiments.ts"),
				Le = n("./src/reddit/constants/subredditLeaderboard.ts"),
				Fe = n("./src/reddit/constants/tracking.ts"),
				Ie = n("./src/reddit/selectors/telemetry.ts"),
				Pe = n("./src/reddit/selectors/widgets.ts"),
				Be = n("./src/telemetry/models/Subreddit.ts");
			const Ae = e => t => n => Object.assign(Object.assign(Object.assign({}, Ie.defaults(n)), Object(Pe.b)(n, e)), {
					source: "trending_community_card",
					action: Fe.c.CLICK,
					noun: Object(Be.getSubscribeEventNoun)(e.type, t)
				}),
				De = e => t => Object.assign(Object.assign(Object.assign({}, Ie.defaults(t)), Object(Pe.b)(t, e)), {
					source: "trending_community_card",
					action: Fe.c.CLICK,
					noun: "community"
				});
			var We = n("./src/reddit/helpers/chooseVariant/index.ts");

			function Re(e) {
				return Object(We.c)(e, {
					experimentEligibilitySelector: We.a,
					experimentName: we.k
				})
			}
			var Ue = n("./src/reddit/selectors/experiments/layer.ts"),
				Qe = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				Je = n("./src/reddit/selectors/seo/linksModule.ts"),
				Me = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Ve = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const Ze = Object(m.c)({
					isMod: Me.J,
					isLoggedIn: Me.H,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					trendingSubredditIds: Oe.cb,
					currentUser: Me.i,
					frontpageLinks: Je.b,
					isOver18: Me.Y,
					showLayersSidebar: Ue.c,
					isUISimplificationAllItemsVariant: Qe.b,
					isInBFFSLeaderboardExperiment: function(e) {
						return Re(e) === we.j.RotateEven
					},
					bffsLeaderboardVariant: Re
				}),
				Ke = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending || e.isUISimplificationAllItemsVariant),
				He = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Xe = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				Ge = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: s
					} = e;
					let a, i, d, c, l;
					n && t === we.j.RotateEven ? (a = Le.q, i = Le.k, d = Le.o, c = Le.a) : (a = Le.p, i = Le.h, d = Le.n, c = []), l = [a, ...c, ...d], s && l.unshift(i);
					const m = l[r()(l.length - 1)];
					l = [], m.id !== a.id && l.push(a), s && m.id !== i.id && l.push(i);
					let u = [...c, ...d];
					return u = u.filter(e => e.id !== m.id), l = [...l, ...o()(u).slice(0, 4 - l.length)], {
						category: m,
						categories: l
					}
				};
			class qe extends c.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					};
					const {
						category: t,
						categories: n
					} = Ge(e);
					this.state = {
						isMounted: !1,
						category: t,
						categories: n
					}
				}
				render() {
					let e = 0;
					const {
						className: t,
						frontpageLinks: n,
						isLoggedIn: a,
						isOver18: r,
						listingName: i,
						trendingSubredditIds: o,
						showLayersSidebar: d,
						isUISimplificationAllItemsVariant: l
					} = this.props, {
						category: m,
						categories: b
					} = this.state, p = !l, g = !l;
					return c.a.createElement(R.a, {
						className: t
					}, p && c.a.createElement(ce.a, {
						categories: b,
						category: m,
						first: 5,
						isOver18: r,
						shouldDisplayDelta: !this.props.isMod && m.id !== Le.i,
						to: m.path
					}), d && c.a.createElement(k.a, null, c.a.createElement(_, null)), c.a.createElement(W.a, {
						placement: V.c.ABOVE_THE_FOLD,
						listingName: i,
						removeSidebarSpacer: !p,
						position: Ve.a.FIRST,
						sizes: V.h,
						placementIndex: e++
					}), Xe(this.props) && c.a.createElement(v, null), Ke(this.props) && c.a.createElement(k.a, null, c.a.createElement(Te, {
						getClickEventFactory: De,
						getSubscribeEventFactoryHandler: Ae,
						subredditIds: o,
						title: s.fbt._("Trending Communities", null, {
							hk: "2WTgEw"
						})
					})), a && c.a.createElement(k.a, null, c.a.createElement(u.a, {
						listingName: i
					})), He(this.props) && c.a.createElement(je, null), n && g && c.a.createElement(k.a, null, c.a.createElement(D, {
						links: n
					})), c.a.createElement(U.a, {
						adComponent: c.a.createElement(W.a, {
							placement: V.c.BELOW_THE_FOLD,
							listingName: i,
							position: Ve.a.BOTTOM,
							sizes: V.n,
							placementIndex: e++
						})
					}, a && c.a.createElement(de, null)))
				}
			}
			t.default = Object(l.b)(Ze)(qe)
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
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/MiniPost/index.m.less"),
				_ = n.n(h);
			const x = Object(o.a)(e => e, p.N, p.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(g.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(i.b)(x, (e, t) => ({
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
						subredditSameLine: i,
						crowdControlPreview: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(d.a)(_.a.container, e, o ? _.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: _.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(u.a, {
						post: t
					})), r.a.createElement("div", {
						className: _.a.postDetails
					}, r.a.createElement("p", {
						className: _.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(d.a)(_.a.subAndMeta, {
							[_.a.isSingleLine]: i
						})
					}, n && a && a.displayText && r.a.createElement(m.a, {
						className: _.a.SubredditLink,
						to: a.url,
						onClick: this.onClickSubreddit
					}, a.displayText), i && r.a.createElement("div", {
						className: _.a.separator
					}), !o && r.a.createElement("div", null, r.a.createElement("span", {
						className: _.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(c.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: _.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(c.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: _.a.meta
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
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/constants/subredditLeaderboard.ts"),
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
					super(e), this.sendEventClick = (e, t, n, s) => {
						this.props.sendEvent(Object(u.c)(e, t, n, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, s)
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
					if (n !== o.i)(n || n === o.e) && g(this.props.gqlContext(), {
						categoryId: n,
						filter: b.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							s = this.props.category && this.props.category.name || o.b;
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
							[o.j]: {
								rankings: n,
								subreddits: s
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = t || o.b, s = this.state[n], i = s ? s.rankings : [], d = s ? s.subreddits : {}, c = i && i[0] && i[0].id, l = d && d[c], m = !(l && l.isNSFW) || this.props.isOver18;
					return a.a.createElement(r.b, p({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: i,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: d
					}, this.props))
				}
			}
			t.a = Object(d.b)(Object(i.c)(h))
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
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
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
					const t = Object(o.a)(b.a.subredditRankItem, e.large && b.a.large),
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
					}, r.a.createElement(i.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, r.a.createElement("div", {
						className: b.a.subredditRankItemColumn
					}, !e.hasTagline && r.a.createElement("span", {
						className: b.a.rankText
					}, s), !e.hasTagline && r.a.createElement(m.a, {
						className: Object(o.a)(b.a.arrow, !n && b.a.negative),
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
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = n.n(i);
			const d = e => a.a.createElement("div", {
				className: Object(r.a)(o.a.placeholderWrapper, e.large && o.a.large)
			}, a.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), a.a.createElement("span", {
				className: o.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, n) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				taglineBanner: "_1WuTyzo7KQobFlIJHW6Pik",
				taglineBannerBackground: "_34L_D1LSVWJ0ZjeqwrFnPj",
				taglineBannerImage: "pa_89rxjdi45gbVf0w9QR",
				taglineBannerText: "rpzag8Jvbaz6Pji3oRkWZ",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chipWrapper: "_1ZBD49ybfD0rTPX_Tp3Uz3",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				taglineChip: "_2HZPVURuk0Na0mbosSZJDP",
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
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/first.js"),
				r = n.n(a),
				i = n("./node_modules/lodash/times.js"),
				o = n.n(i),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = n("./src/config.ts"),
				u = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/subredditLeaderboard.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/hooks/useButtons2020.ts"),
				k = n("./src/reddit/controls/Chip/index.m.less"),
				E = n.n(k);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = e => {
					if (Object(x.a)()) {
						const t = e.to ? {
							kind: _.a.InternalLink,
							to: e.to
						} : {};
						return c.a.createElement(_.q, y({
							className: Object(u.a)(E.a.Chip2020, {
								[E.a.isWide]: e.wide
							}),
							priority: _.b.Tertiary,
							size: _.c.XS,
							text: e.children
						}, t))
					}
					const t = e.to ? l.a : "div",
						n = Object(u.a)(E.a.chip, e.className);
					return c.a.createElement(t, {
						className: n,
						to: e.to || ""
					}, e.children)
				},
				N = n("./src/reddit/helpers/name/index.ts"),
				S = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				v = n.n(C);
			const O = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && v.a.communityBannerPlaceholder,
						a = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						} : void 0,
						r = e.categoryName === h.j ? h.h.path : h.f;
					return c.a.createElement("div", {
						className: Object(u.a)(e.className, v.a.communityBanner, n),
						style: a
					}, t && c.a.createElement("h2", {
						className: v.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.d),
						to: r
					}, e.categoryName ? (e => e === h.j ? s.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : c.a.createElement(c.a.Fragment, null, s.fbt._("Top", null, {
						hk: "4bbkOp"
					}), c.a.createElement("span", {
						className: v.a.categoryName
					}, " ", s.fbt._("{categoryName}", [s.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), s.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				T = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, a = !!(!e.rankings || !e.rankings.length) && v.a.communityBannerPlaceholder, r = n && Array.isArray(n) && 2 === n.length ? {
						background: "linear-gradient(246.35deg, ".concat(n[0], " 0%, ").concat(n[1], " 100%)")
					} : void 0, i = t.path ? t.path : h.f, o = t.image ? "".concat(t.image, ".png") : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(u.a)(e.className, v.a.taglineBanner, a)
					}, c.a.createElement("div", {
						className: v.a.taglineBannerBackground,
						style: r
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || h.d),
						to: i
					}, c.a.createElement("h2", {
						className: v.a.taglineBannerText
					}, c.a.createElement("img", {
						className: v.a.taglineBannerImage,
						src: "".concat(m.a.assetPath, "/img/discovery/").concat(o)
					}), t.tagline ? (e => c.a.createElement("span", {
						className: v.a.categoryName
					}, s.fbt._("{tagline}", [s.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				w = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const s = e.subreddits[t.id];
					return c.a.createElement(b.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.d, s.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && L),
				L = c.a.createElement(c.a.Fragment, null, o()(5, e => c.a.createElement(p.a, {
					key: e
				}))),
				F = e => {
					const t = e.isSecondaryButton ? _.n : _.k,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0;
					return c.a.createElement("div", {
						className: v.a.footer
					}, c.a.createElement(t, {
						className: v.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.d),
						to: e.to || "",
						style: n
					}, e.isSecondaryButton ? e.categoryName ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryName)], {
						hk: "3mjiTN"
					}) : s.fbt._("See All", null, {
						hk: "2OZax8"
					}) : s.fbt._("View All", null, {
						hk: "4vfmcB"
					})))
				};

			function I(e, t) {
				return t || "".concat(h.f).concat(Object(N.g)(e), "/")
			}
			const P = e => {
				return c.a.createElement("div", {
					className: v.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: v.a.chipWrapper,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || h.d, void 0, n))(t.name, n + 1)
				}, c.a.createElement(f, {
					className: e.hasTagline ? v.a.taglineChip : v.a.chip,
					key: t.name,
					to: I(t.name, t.path),
					wide: t.name === h.j
				}, t.name ? t.name === h.j ? s.fbt._("Near You", null, {
					hk: "RuM7j"
				}) : t.name : s.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: s,
					category: a,
					categories: i
				} = e, o = Object(j.a)();
				Object(d.useEffect)(() => {
					o(Object(S.d)(s || h.d))
				}, []);
				const l = r()(n),
					u = t && l && t[l.id],
					b = "".concat(m.a.assetPath, "/img/leaderboard/banner-background.png"),
					p = u ? u.bannerBackgroundImage || b : void 0,
					_ = e.to || s && I(s, a.path),
					x = a && a.tagline,
					k = a && a.gradients && Array.isArray(a.gradients) && 2 === a.gradients.length ? a.gradients[1] : void 0;
				return c.a.createElement(g.a, {
					className: e.className,
					contentOnly: !0
				}, x && c.a.createElement(T, {
					category: a,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !x && c.a.createElement(O, {
					bannerBackgroundImage: p,
					categoryName: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(w, {
					categoryName: s,
					hasTagline: !!x,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), c.a.createElement(F, {
					categoryName: s,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: k,
					onSendEventClick: e.onSendEventClick,
					to: _
				}), i && c.a.createElement(P, {
					activeCategoryName: s,
					categories: i,
					hasTagline: !!x,
					onSendEventClick: e.onSendEventClick
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
				Chip2020: "TikvS_VGUJnCRMKwmVRQn",
				chip2020: "TikvS_VGUJnCRMKwmVRQn",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
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
				i = (e, t, n) => r => Object.assign(Object.assign({}, a.defaults(r)), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				o = (e, t) => n => Object.assign(Object.assign({}, a.defaults(n)), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, n, r) => i => Object.assign(Object.assign({}, a.defaults(i)), {
					action: "click",
					actionInfo: Object.assign(Object.assign({}, a.actionInfo(i)), {
						position: r && r
					}),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~FrontpageSidebar.425a25b86809c4291d2f.js.map