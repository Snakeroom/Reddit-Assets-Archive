// https://www.redditstatic.com/desktop2x/FrontpageSidebar.bb26065cf359bfb3e40c.js
// Retrieved at 5/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				o = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/subreddit.ts"),
				d = n("./src/reddit/components/IdCard/async.tsx"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/components/PremiumCTA/index.m.less"),
				h = n.n(_);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class x extends a.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return a.a.createElement(m.a, null, a.a.createElement(u.a, {
						className: e,
						contentOnly: !0
					}, a.a.createElement("div", {
						className: h.a.wrapper
					}, a.a.createElement("div", {
						className: h.a.contentWrapper
					}, a.a.createElement(p.a, {
						name: "premium",
						isFilled: !0,
						className: h.a.icon
					}), a.a.createElement("div", {
						className: h.a.content
					}, a.a.createElement("div", {
						className: h.a.title
					}, g._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), a.a.createElement("div", {
						className: h.a.description
					}, g._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), a.a.createElement(b.k, {
						isFullWidth: !0,
						onClick: t
					}, g._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var k = Object(r.b)(void 0, e => ({
					onClickPremium: () => e(Object(c.b)("/premium"))
				}))(x),
				N = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/lib/classNames/index.ts"),
				E = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/endpoints/goodContent/index.ts"),
				v = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				C = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				F = n.n(C);
			const y = e => {
					let {
						to: t,
						title: n
					} = e;
					return a.a.createElement(E.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(S.default, {
						className: F.a.Link,
						to: t,
						title: n
					}, n))
				},
				j = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: s,
						children: r,
						onToggle: i,
						onExpand: o
					} = e;
					return a.a.createElement("div", {
						className: Object(f.a)(F.a.Section, {
							[F.a.opened]: n,
							[F.a.expanded]: s
						})
					}, a.a.createElement("div", {
						className: F.a.SectionHeader,
						onClick: i
					}, a.a.createElement("div", {
						className: F.a.SectionTitle
					}, t), a.a.createElement(v.a, {
						className: F.a.SectionChevron
					})), a.a.createElement("div", {
						className: F.a.SectionBody
					}, a.a.createElement("div", {
						className: F.a.SectionContent
					}, r), a.a.createElement("div", {
						className: F.a.SectionFooter
					}, a.a.createElement(b.r, {
						className: F.a.SectionButton,
						onClick: o
					}, s ? N.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : N.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class w extends a.a.Component {
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
						return a.a.createElement(y, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => a.a.createElement(j, {
						key: e.title,
						title: Object(O.b)(e.title),
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
					if (t) return a.a.createElement(u.a, {
						className: Object(f.a)(F.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var P = w,
				T = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				A = n("./src/reddit/components/SidebarContainer/index.tsx"),
				L = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				R = n("./node_modules/lodash/sampleSize.js"),
				W = n.n(R),
				B = n("./node_modules/request-idle-callback/index.js"),
				U = n("./src/lib/constants/index.ts"),
				I = n("./src/reddit/components/SubredditIcon/index.tsx"),
				D = n("./src/reddit/constants/localStorage.ts"),
				K = n("./src/reddit/contexts/ApiContext.tsx"),
				Q = n("./src/reddit/featureFlags/component.tsx"),
				G = n("./src/reddit/helpers/localStorage/index.ts"),
				H = n("./src/reddit/helpers/name/index.ts"),
				J = n("./src/lib/makeApiRequest/index.ts"),
				M = n("./src/lib/omitHeaders/index.ts"),
				q = n("./src/reddit/constants/headers.ts");
			const X = e => Object(J.a)(Object(M.a)(e, [q.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: U.pb.GET,
				type: "json"
			});
			var Z = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				z = n.n(Z);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = 3, $ = 30 * U.qb, ee = "SubredditAdoption";
			class te extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = te.cachedData || Object(G.G)(D.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > $) {
						const t = await X(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(G.Lb)(D.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return te.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(B.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: W()(e, Y)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? a.a.createElement("div", {
						className: z.a.container
					}, a.a.createElement("div", {
						className: z.a.main
					}, a.a.createElement("div", {
						className: z.a.title
					}, a.a.createElement(I.b, {
						className: z.a.icon
					}), V._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), a.a.createElement("div", {
						className: z.a.description
					}, V._("{subreddits list} and more are looking for moderators!", [V._param("subreddits list", a.a.createElement("strong", null, e.map(H.d).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), a.a.createElement(b.n, {
						className: z.a.button,
						to: `/r/${ee}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, V._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			te.cachedData = null;
			var ne = Object(Q.a)("srAdoptionWeek", Object(K.b)(te)),
				se = n("./src/reddit/actions/post.ts"),
				ae = n("./src/reddit/components/MiniPost/index.tsx"),
				re = n("./src/reddit/components/Widgets/Base/index.tsx");
			class ie extends a.a.Component {
				render() {
					return a.a.createElement("div", null, a.a.createElement(re.a, null, this.props.headerText), this.props.posts.map(e => a.a.createElement(ae.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var oe = ie,
				le = n("./src/reddit/helpers/overlay/index.ts"),
				de = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				ce = n.n(de),
				me = n("./src/lib/lessComponent.tsx");
			const ue = Object(r.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(le.a)(t.permalink)),
					clearLinks: () => e(Object(se.s)())
				})),
				be = me.a.button("ClearButton", ce.a);
			class pe extends a.a.Component {
				render() {
					return a.a.createElement(re.b, null, a.a.createElement(oe, {
						className: this.props.className,
						headerText: N.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), a.a.createElement(be, {
						onClick: this.props.clearLinks
					}, N.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var _e = ue(pe),
				he = n("./src/reddit/selectors/posts.ts");
			const ge = Object(o.c)({
				recentPosts: he.Q
			});
			var xe = Object(r.b)(ge, (e, t) => ({
					openLightbox: t => () => e(Object(le.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? a.a.createElement(m.a, null, a.a.createElement(_e, {
						className: t,
						headerText: N.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				ke = n("./src/config.ts"),
				Ne = n("./src/lib/env/index.ts"),
				fe = n("./src/reddit/controls/Chip/index.m.less"),
				Ee = n.n(fe);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Oe = e => {
					const t = e.to ? {
						kind: b.b.InternalLink,
						to: e.to
					} : {};
					return a.a.createElement(b.t, Se({
						className: Object(f.a)(Ee.a.Chip, {
							[Ee.a.isWide]: e.wide
						}),
						onClick: e.onClick,
						priority: b.c.Tertiary,
						size: b.d.XS,
						text: e.children
					}, t))
				},
				ve = n("./src/reddit/helpers/trackers/widgets.ts"),
				Ce = n("./src/reddit/hooks/useTracking.ts");
			const Fe = [{
				getName: () => N.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => N.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => N.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => N.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => N.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => N.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => N.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => N.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => N.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => N.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => N.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => N.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => N.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => N.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => N.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => N.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => N.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => N.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => N.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => N.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => N.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => N.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => N.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => N.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => N.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => N.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => N.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => N.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => N.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => N.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => N.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => N.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => N.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => N.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => N.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => N.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => N.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => N.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => N.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => N.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => N.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => N.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var ye = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				je = n.n(ye);
			const we = () => {
					const e = `${ke.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = N.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						n = {
							backgroundImage: `url(${e})`
						};
					return a.a.createElement("div", {
						className: je.a.banner,
						style: n
					}, a.a.createElement("h2", {
						className: je.a.bannerText
					}, t))
				},
				Pe = e => `/t/${e}?activeTab=communities`,
				Te = e => {
					const t = e.topic.getName();
					return a.a.createElement("div", {
						className: je.a.itemContainer
					}, a.a.createElement(Oe, {
						to: Pe(e.topic.url),
						onClick: () => e.sendEvent(Object(ve.c)(t))
					}, t))
				};
			var Ae = a.a.memo(e => {
					const t = Object(Ce.a)();
					Object(s.useEffect)(() => t(Object(ve.d)()), []);
					const n = Fe.map(e => ({
						value: e,
						sort: Object(Ne.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return a.a.createElement(u.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, a.a.createElement(we, null), a.a.createElement("div", {
						className: je.a.container
					}, n.map(e => a.a.createElement(Te, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Le = n("./src/reddit/constants/experiments.ts"),
				Re = n("./src/reddit/helpers/chooseVariant/index.ts"),
				We = n("./src/reddit/selectors/user.ts");
			var Be = n("./src/reddit/selectors/seo/linksModule.ts"),
				Ue = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const Ie = Object(o.c)({
					isLoggedIn: We.R,
					currentUser: We.m,
					frontpageLinks: Be.b,
					shouldShowTopicsWidget: e => (function(e) {
						return Object(Re.c)(e, {
							experimentEligibilitySelector: We.S,
							experimentName: Le.Wc
						}) === Le.Td
					})(e),
					isNavbarLikeMwebEnabled: i.a
				}),
				De = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Ke = e => !(!e.currentUser || e.currentUser.isGold);
			class Qe extends a.a.Component {
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
						listingName: r,
						shouldShowTopicsWidget: i,
						isNavbarLikeMwebEnabled: o
					} = this.props, l = !o;
					return a.a.createElement(A.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, a.a.createElement(T.a, {
						placement: U.e.ABOVE_THE_FOLD,
						listingName: r,
						removeSidebarSpacer: !1,
						position: Ue.a.FIRST,
						sizes: U.j,
						placementIndex: e++
					}), Ke(this.props) && a.a.createElement(k, null), i && a.a.createElement(m.a, null, a.a.createElement(Ae, null)), s && a.a.createElement(m.a, null, a.a.createElement(d.a, {
						listingName: r
					})), De(this.props) && a.a.createElement(xe, null), n && l && a.a.createElement(m.a, null, a.a.createElement(P, {
						links: n
					})), a.a.createElement(L.a, {
						adComponent: a.a.createElement(T.a, {
							placement: U.e.BELOW_THE_FOLD,
							listingName: r,
							position: Ue.a.BOTTOM,
							sizes: U.q,
							placementIndex: e++
						})
					}, s && a.a.createElement(ne, null)))
				}
			}
			const Ge = Object(r.b)(Ie, e => ({
				subredditAboutRequested: t => e(Object(l.u)(t))
			}));
			t.default = Ge(Qe)
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
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/MiniPost/index.m.less"),
				g = n.n(h);
			const x = Object(o.a)(e => e, p.F, p.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(_.Q)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(i.b)(x, (e, t) => ({
					openLightbox: t => e(Object(b.a)(t.permalink))
				}));
			class N extends r.a.PureComponent {
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
						className: Object(l.a)(g.a.container, e, o ? g.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: g.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(u.b, {
						post: t
					})), r.a.createElement("div", {
						className: g.a.postDetails
					}, r.a.createElement("p", {
						className: g.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(l.a)(g.a.subAndMeta, {
							[g.a.isSingleLine]: i
						})
					}, n && a && a.displayText && r.a.createElement(m.a, {
						className: g.a.SubredditLink,
						to: a.url,
						onClick: this.onClickSubreddit
					}, a.displayText), i && r.a.createElement("div", {
						className: g.a.separator
					}), !o && r.a.createElement("div", null, r.a.createElement("span", {
						className: g.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: g.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: g.a.meta
					}, Object(c.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = k(N)
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				contentWrapper: "_1ms8iFlWXJNWcT29GKsv69",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4"
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
				strongTextFont: "_1rRA9Vf6uOXrFjUcJJcmOL",
				tabFont: "_1nbCityPGTvrop_yKHkhp_",
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
				bodyFontH6Small: "_2uzxWjIkraNLW3Wk4Hg-LD",
				bodyFont: "_3Jp6jLYRWtZI2hmJA9eurC",
				bodyFontSmall: "_2eo_q38bKZsZzaxO_TC6ni",
				bodyFontMono: "_24Qs54CbgE_djlerYbZ1zl",
				landingPageTitleFontH1: "TicKHVx_6_RI-XpeX2xpp",
				landingPageTitleFontH2: "_3HjrUcqam0Ub7uymUq7f_U",
				landingPageTitleFontH3: "_3MImQ6BDBkR7P78SEKqOkL",
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
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, n) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less": function(e, t, n) {
			e.exports = {
				itemContainer: "_1ULKkr1Vw-TKylAevPBQl3",
				linkItem: "_1cK4Hfav56VzzWNW6SF7Kj",
				container: "_1rKh-fSjtA_kUJNOHsvtAZ",
				banner: "_2E8lSyj68M9zN75kARoqfq",
				bannerText: "_1giVw239PHkSdxzG2aP5wH"
			}
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, n) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.bb26065cf359bfb3e40c.js.map