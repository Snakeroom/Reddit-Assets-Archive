// https://www.redditstatic.com/desktop2x/FrontpageSidebar.02034fc5687e69a30cf5.js
// Retrieved at 12/13/2022, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_copyArray.js"),
				a = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return a(s(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_shuffleSelf.js"),
				a = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(a(e))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayShuffle.js"),
				a = n("./node_modules/lodash/_baseShuffle.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (i(e) ? s : a)(e)
			}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/random.js"),
				a = n.n(s),
				i = n("./node_modules/lodash/shuffle.js"),
				o = n.n(i),
				r = n("./node_modules/react/index.js"),
				l = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/subreddit.ts"),
				b = n("./src/reddit/components/IdCard/async.tsx"),
				p = n("./node_modules/react-router-redux/es/index.js"),
				h = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/components/PremiumCTA/index.m.less"),
				x = n.n(k);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class E extends l.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return l.a.createElement(h.a, null, l.a.createElement(_.a, {
						className: e,
						contentOnly: !0
					}, l.a.createElement("div", {
						className: x.a.wrapper
					}, l.a.createElement("div", {
						className: x.a.contentWrapper
					}, l.a.createElement(f.a, {
						name: "premium",
						isFilled: !0,
						className: x.a.icon
					}), l.a.createElement("div", {
						className: x.a.content
					}, l.a.createElement("div", {
						className: x.a.title
					}, N._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), l.a.createElement("div", {
						className: x.a.description
					}, N._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), l.a.createElement(g.k, {
						isFullWidth: !0,
						onClick: t
					}, N._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var S = Object(d.b)(void 0, e => ({
					onClickPremium: () => e(Object(p.b)("/premium"))
				}))(E),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/lib/classNames/index.ts"),
				w = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				F = n("./src/reddit/endpoints/goodContent/index.ts"),
				C = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				j = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				T = n.n(j);
			const A = e => {
					let {
						to: t,
						title: n
					} = e;
					return l.a.createElement(w.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, l.a.createElement(v.default, {
						className: T.a.Link,
						to: t,
						title: n
					}, n))
				},
				P = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: s,
						children: a,
						onToggle: i,
						onExpand: o
					} = e;
					return l.a.createElement("div", {
						className: Object(O.a)(T.a.Section, {
							[T.a.opened]: n,
							[T.a.expanded]: s
						})
					}, l.a.createElement("div", {
						className: T.a.SectionHeader,
						onClick: i
					}, l.a.createElement("div", {
						className: T.a.SectionTitle
					}, t), l.a.createElement(C.a, {
						className: T.a.SectionChevron
					})), l.a.createElement("div", {
						className: T.a.SectionBody
					}, l.a.createElement("div", {
						className: T.a.SectionContent
					}, a), l.a.createElement("div", {
						className: T.a.SectionFooter
					}, l.a.createElement(g.r, {
						className: T.a.SectionButton,
						onClick: o
					}, s ? y.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : y.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class L extends l.a.Component {
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
						return l.a.createElement(A, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => l.a.createElement(P, {
						key: e.title,
						title: Object(F.b)(e.title),
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
					if (t) return l.a.createElement(_.a, {
						className: Object(O.a)(T.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var B = L,
				R = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				I = n("./src/reddit/components/SidebarContainer/index.tsx"),
				U = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				D = n("./node_modules/lodash/sampleSize.js"),
				W = n.n(D),
				G = n("./node_modules/request-idle-callback/index.js"),
				M = n("./src/lib/constants/index.ts"),
				K = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Q = n("./src/reddit/constants/localStorage.ts"),
				J = n("./src/reddit/contexts/ApiContext.tsx"),
				H = n("./src/reddit/featureFlags/component.tsx"),
				q = n("./src/reddit/helpers/localStorage/index.ts"),
				X = n("./src/reddit/helpers/name/index.ts"),
				Z = n("./src/lib/makeApiRequest/index.ts"),
				z = n("./src/lib/omitHeaders/index.ts"),
				V = n("./src/reddit/constants/headers.ts");
			const Y = e => Object(Z.a)(Object(z.a)(e, [V.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: M.ob.GET,
				type: "json"
			});
			var $ = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 3, se = 30 * M.pb, ae = "SubredditAdoption";
			class ie extends l.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = ie.cachedData || Object(q.A)(Q.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > se) {
						const t = await Y(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(q.zb)(Q.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return ie.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(G.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: W()(e, ne)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? l.a.createElement("div", {
						className: ee.a.container
					}, l.a.createElement("div", {
						className: ee.a.main
					}, l.a.createElement("div", {
						className: ee.a.title
					}, l.a.createElement(K.b, {
						className: ee.a.icon
					}), te._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), l.a.createElement("div", {
						className: ee.a.description
					}, te._("{subreddits list} and more are looking for moderators!", [te._param("subreddits list", l.a.createElement("strong", null, e.map(X.d).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), l.a.createElement(g.n, {
						className: ee.a.button,
						to: `/r/${ae}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, te._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			ie.cachedData = null;
			var oe = Object(H.a)("srAdoptionWeek", Object(J.b)(ie)),
				re = n("./src/reddit/actions/post.ts"),
				le = n("./src/reddit/components/MiniPost/index.tsx"),
				de = n("./src/reddit/components/Widgets/Base/index.tsx");
			class ce extends l.a.Component {
				render() {
					return l.a.createElement("div", null, l.a.createElement(de.a, null, this.props.headerText), this.props.posts.map(e => l.a.createElement(le.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var ue = ce,
				me = n("./src/reddit/helpers/overlay/index.ts"),
				be = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				pe = n.n(be),
				he = n("./src/lib/lessComponent.tsx");
			const _e = Object(d.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(me.a)(t.permalink)),
					clearLinks: () => e(Object(re.s)())
				})),
				ge = he.a.button("ClearButton", pe.a);
			class fe extends l.a.Component {
				render() {
					return l.a.createElement(de.b, null, l.a.createElement(ue, {
						className: this.props.className,
						headerText: y.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), l.a.createElement(ge, {
						onClick: this.props.clearLinks
					}, y.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var ke = _e(fe),
				xe = n("./src/reddit/selectors/posts.ts");
			const Ne = Object(u.c)({
				recentPosts: xe.R
			});
			var Ee = Object(d.b)(Ne, (e, t) => ({
					openLightbox: t => () => e(Object(me.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? l.a.createElement(h.a, null, l.a.createElement(ke, {
						className: t,
						headerText: y.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				Se = n("./src/config.ts"),
				ye = n("./src/lib/env/index.ts"),
				Oe = n("./src/reddit/controls/Chip/index.tsx"),
				we = n("./src/reddit/helpers/trackers/widgets.ts"),
				ve = n("./src/reddit/hooks/useTracking.ts");
			const Fe = [{
				getName: () => y.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => y.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => y.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => y.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => y.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => y.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => y.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => y.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => y.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => y.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => y.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => y.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => y.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => y.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => y.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => y.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => y.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => y.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => y.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => y.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => y.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => y.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => y.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => y.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => y.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => y.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => y.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => y.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => y.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => y.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => y.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => y.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => y.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => y.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => y.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => y.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => y.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => y.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => y.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => y.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => y.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => y.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var Ce = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				je = n.n(Ce);
			const Te = () => {
					const e = `${Se.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = y.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						n = {
							backgroundImage: `url(${e})`
						};
					return l.a.createElement("div", {
						className: je.a.banner,
						style: n
					}, l.a.createElement("h2", {
						className: je.a.bannerText
					}, t))
				},
				Ae = e => `/t/${e}?activeTab=communities`,
				Pe = e => {
					const t = e.topic.getName();
					return l.a.createElement("div", {
						className: je.a.itemContainer
					}, l.a.createElement(Oe.a, {
						to: Ae(e.topic.url),
						onClick: () => e.sendEvent(Object(we.c)(t))
					}, t))
				};
			var Le = l.a.memo(e => {
					const t = Object(ve.a)();
					Object(r.useEffect)(() => t(Object(we.d)()), []);
					const n = Fe.map(e => ({
						value: e,
						sort: Object(ye.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return l.a.createElement(_.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, l.a.createElement(Te, null), l.a.createElement("div", {
						className: je.a.container
					}, n.map(e => l.a.createElement(Pe, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Be = n("./src/reddit/constants/experiments.ts"),
				Re = n("./src/reddit/constants/subredditLeaderboard.ts"),
				Ie = n("./src/reddit/helpers/chooseVariant/index.ts");

			function Ue(e) {
				return Object(Ie.c)(e, {
					experimentEligibilitySelector: Ie.a,
					experimentName: Be.q
				})
			}
			var De = n("./src/reddit/selectors/experiments/utils.ts");
			const We = Object(u.a)(e => Object(Ie.c)(e, {
					experimentName: Be.ue,
					experimentEligibilitySelector: Ie.a
				}), De.a),
				Ge = Object(u.a)(We, e => e === Be.ye.Enabled);
			var Me = n("./src/reddit/selectors/user.ts");
			var Ke = n("./src/reddit/selectors/seo/linksModule.ts"),
				Qe = n("./src/reddit/selectors/subreddit.ts"),
				Je = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				He = n("./src/reddit/selectors/meta.ts");
			const qe = Object(u.c)({
					isMod: Me.T,
					isLoggedIn: Me.R,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					currentUser: Me.m,
					frontpageLinks: Ke.b,
					isOver18: Me.mb,
					isInBFFSLeaderboardExperiment: function(e) {
						return Ue(e) === Be.p.RotateEven
					},
					bffsLeaderboardVariant: Ue,
					rankings: e => Object(Qe.T)(e, "c1020"),
					shouldShowTopicsWidget: e => (function(e) {
						return Object(Ie.c)(e, {
							experimentEligibilitySelector: Me.S,
							experimentName: Be.Uc
						}) === Be.Rd
					})(e),
					isNavbarLikeMwebEnabled: c.a,
					locale: He.j,
					isInLeaderboardTakeoverExperiment: Ge
				}),
				Xe = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Ze = e => !(!e.currentUser || e.currentUser.isGold),
				ze = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: s,
						isInLeaderboardTakeoverExperiment: i
					} = e;
					if (i) {
						const e = [...Re.h];
						return {
							category: e[a()(e.length - 1)],
							categories: e
						}
					}
					let r, l, d, c, u;
					n && t === Be.p.RotateEven ? (r = Re.u, l = Re.n, d = Re.s, c = Re.a) : (r = Re.t, l = Re.j, d = Re.r, c = []), u = [r, ...c, ...d], s && u.unshift(l);
					const m = u[a()(u.length - 1)];
					u = [], m.id !== r.id && u.push(r), s && m.id !== l.id && u.push(l);
					let b = [...c, ...d];
					return b = b.filter(e => e.id !== m.id), u = [...u, ...o()(b).slice(0, 4 - u.length)], {
						category: m,
						categories: u
					}
				};
			class Ve extends l.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					};
					const {
						category: t,
						categories: n
					} = ze(e);
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
						isLoggedIn: s,
						listingName: a,
						shouldShowTopicsWidget: i,
						isNavbarLikeMwebEnabled: o
					} = this.props, r = !o;
					return l.a.createElement(I.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, l.a.createElement(R.a, {
						placement: M.e.ABOVE_THE_FOLD,
						listingName: a,
						removeSidebarSpacer: !1,
						position: Je.a.FIRST,
						sizes: M.j,
						placementIndex: e++
					}), Ze(this.props) && l.a.createElement(S, null), i && l.a.createElement(h.a, null, l.a.createElement(Le, null)), s && l.a.createElement(h.a, null, l.a.createElement(b.a, {
						listingName: a
					})), Xe(this.props) && l.a.createElement(Ee, null), n && r && l.a.createElement(h.a, null, l.a.createElement(B, {
						links: n
					})), l.a.createElement(U.a, {
						adComponent: l.a.createElement(R.a, {
							placement: M.e.BELOW_THE_FOLD,
							listingName: a,
							position: Je.a.BOTTOM,
							sizes: M.q,
							placementIndex: e++
						})
					}, s && l.a.createElement(oe, null)))
				}
			}
			const Ye = Object(d.b)(qe, e => ({
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = Ye(Ve)
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
				i = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/Thumbnail/index.tsx"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/MiniPost/index.m.less"),
				g = n.n(_);
			const f = Object(r.a)(e => e, p.G, p.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(h.Q)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(o.b)(f, (e, t) => ({
					openLightbox: t => e(Object(b.a)(t.permalink))
				}));
			class x extends i.a.PureComponent {
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
						crowdControlPreview: r
					} = this.props;
					return i.a.createElement("div", {
						className: Object(l.a)(g.a.container, e, r ? g.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, i.a.createElement("div", {
						className: g.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, i.a.createElement(m.b, {
						post: t
					})), i.a.createElement("div", {
						className: g.a.postDetails
					}, i.a.createElement("p", {
						className: g.a.title,
						title: t.title
					}, t.title), i.a.createElement("div", {
						className: Object(l.a)(g.a.subAndMeta, {
							[g.a.isSingleLine]: o
						})
					}, n && a && a.displayText && i.a.createElement(u.a, {
						className: g.a.SubredditLink,
						to: a.url,
						onClick: this.onClickSubreddit
					}, a.displayText), o && i.a.createElement("div", {
						className: g.a.separator
					}), !r && i.a.createElement("div", null, i.a.createElement("span", {
						className: g.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), i.a.createElement("span", {
						className: g.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), i.a.createElement("span", {
						className: g.a.meta
					}, Object(c.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = k(x)
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
				i = n.n(a);
			const o = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", i.a);
			t.a = o
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
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "i", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = "DEFAULT",
				i = "",
				o = "All Communities",
				r = s.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				l = "top",
				d = "MOD",
				c = "moderating",
				u = s.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				b = "near-you",
				p = s.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				h = "/subreddits/leaderboard/",
				_ = {
					id: i,
					name: i,
					path: `${h}`
				},
				g = {
					id: m,
					name: b,
					path: `${h}${b}/`
				},
				f = [{
					name: "Sports",
					displayText: s.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${h}sports/`
				}, {
					name: "News",
					displayText: s.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${h}news/`
				}, {
					name: "Gaming",
					displayText: s.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${h}gaming/`
				}, {
					name: "Aww",
					displayText: s.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${h}aww/`
				}],
				k = {
					id: i,
					name: i,
					path: `${h}`,
					image: "popcorn-snoo",
					tagline: s.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				x = {
					id: m,
					name: b,
					path: `${h}${b}/`,
					image: "magnifying-glass-snoo",
					tagline: s.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				N = [{
					name: "Sports",
					displayText: s.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${h}sports/`,
					image: "basketball-snoo",
					tagline: s.fbt._("Sports communities are the real MVP", null, {
						hk: "1zKdF8"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					displayText: s.fbt._("News", null, {
						hk: "17cLQ8"
					}),
					id: "c1009",
					path: `${h}news/`,
					image: "newsie-snoo",
					tagline: s.fbt._("News communities to keep you informed", null, {
						hk: "4pGDSm"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					displayText: s.fbt._("Gaming", null, {
						hk: "2aDSZz"
					}),
					id: "c1019",
					path: `${h}gaming/`,
					image: "esports-snoo",
					tagline: s.fbt._("Gaming communities taking it to the next level", null, {
						hk: "2zM7JE"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					displayText: s.fbt._("Aww", null, {
						hk: "3ecS9m"
					}),
					id: "c1000",
					path: `${h}aww/`,
					image: "cat-snoo",
					tagline: s.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				E = [{
					name: "E3 Gaming",
					displayText: s.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${h}e3/`
				}],
				S = [{
					name: "Beauty",
					displayText: s.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${h}beauty/`,
					image: "makeup-snoo",
					tagline: s.fbt._("Beauty communities make us all look good", null, {
						hk: "2z1nzQ"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					displayText: s.fbt._("Fashion", null, {
						hk: "22tnM2"
					}),
					id: "c1002",
					path: `${h}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: s.fbt._("Fashion communities are always in style", null, {
						hk: "4pNEnH"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					displayText: s.fbt._("Food", null, {
						hk: "2Bq28v"
					}),
					id: "c1003",
					path: `${h}food/`,
					image: "cookbooks-snoo",
					tagline: s.fbt._("Food communities to make you go mmmm", null, {
						hk: "3OGpOa"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					displayText: s.fbt._("Fitness", null, {
						hk: "4ruQRK"
					}),
					id: "c1006",
					path: `${h}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: s.fbt._("Fitness communities that know how to work it", null, {
						hk: "3Ow48z"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					displayText: s.fbt._("Outdoors", null, {
						hk: "1Can0U"
					}),
					id: "c1010",
					path: `${h}outdoors/`,
					image: "telescope-snoo",
					tagline: s.fbt._("Outdoor communities — they’re really out there", null, {
						hk: "1sfigF"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					displayText: s.fbt._("Relationships", null, {
						hk: "QnBO3"
					}),
					id: "c1013",
					path: `${h}relationships/`,
					image: "childrensbooks-snoo",
					tagline: s.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				y = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, n) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/controls/Chip/index.m.less"),
				l = n.n(r);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: o.b.InternalLink,
					to: e.to
				} : {};
				return a.a.createElement(o.t, d({
					className: Object(i.a)(l.a.Chip, {
						[l.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: o.c.Tertiary,
					size: o.d.XS,
					text: e.children
				}, t))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.02034fc5687e69a30cf5.js.map