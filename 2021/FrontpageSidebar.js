// https://www.redditstatic.com/desktop2x/FrontpageSidebar.7429f03a04f5cf777b1e.js
// Retrieved at 8/30/2021, 3:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_copyArray.js"),
				s = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return s(a(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_shuffleSelf.js"),
				s = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return a(s(e))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_arrayShuffle.js"),
				s = n("./node_modules/lodash/_baseShuffle.js"),
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (r(e) ? a : s)(e)
			}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/subreddit/constants.ts"),
				r = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				o = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(a.a)(s.m),
				l = Object(a.a)(s.l),
				u = Object(a.a)(s.k),
				m = Object(a.a)(s.a),
				b = Object(a.a)(s.b),
				p = Object(a.a)(s.c),
				g = (e, t) => async (n, a, {
					gqlContext: s
				}) => {
					n(c());
					const g = t === r.l ? async function() {
						const t = await Object(i.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const a = t.body,
							r = a && a.data && a.data.nearbySubreddits;
						return Object(d.a)(r)
					}: async function() {
						const t = await Object(o.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const a = t.body,
							r = a && a.data && a.data.subredditLeaderboard;
						return Object(d.b)(r)
					}, h = await g();
					if (!h) return;
					const {
						pageInfo: f,
						rankings: _,
						subreddits: k
					} = h;
					n(m({
						subreddits: k
					})), n(b({
						categoryRankingsKey: t,
						rankings: _
					})), n(p({
						categoryRankingsKey: t,
						pageInfo: f
					})), n(l())
				}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/lodash/random.js"),
				s = n.n(a),
				r = n("./node_modules/lodash/shuffle.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/subreddit.ts"),
				b = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				p = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./node_modules/react-router-redux/es/index.js"),
				h = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/components/PremiumCTA/index.m.less"),
				y = n.n(x);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class E extends d.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return d.a.createElement(h.a, null, d.a.createElement(f.a, {
						className: e,
						contentOnly: !0
					}, d.a.createElement("div", {
						className: y.a.wrapper
					}, d.a.createElement("div", {
						className: y.a.contentWrapper
					}, d.a.createElement(k.a, {
						name: "premium",
						isFilled: !0,
						className: y.a.icon
					}), d.a.createElement("div", {
						className: y.a.content
					}, d.a.createElement("div", {
						className: y.a.title
					}, N._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), d.a.createElement("div", {
						className: y.a.description
					}, N._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), d.a.createElement(_.h, {
						isFullWidth: !0,
						onClick: t
					}, N._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var S = Object(c.b)(void 0, e => ({
					onClickPremium: () => e(Object(g.b)("/premium"))
				}))(E),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/lib/classNames/index.ts"),
				T = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				j = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				w = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				F = n.n(w);
			const P = ({
					to: e,
					title: t
				}) => d.a.createElement(T.a, {
					subredditName: t,
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(O.a, {
					className: F.a.Link,
					to: e,
					title: t
				}, t)),
				A = ({
					title: e,
					isOpened: t,
					isExpanded: n,
					children: a,
					onToggle: s,
					onExpand: r
				}) => d.a.createElement("div", {
					className: Object(C.a)(F.a.Section, {
						[F.a.opened]: t,
						[F.a.expanded]: n
					})
				}, d.a.createElement("div", {
					className: F.a.SectionHeader,
					onClick: s
				}, d.a.createElement("div", {
					className: F.a.SectionTitle
				}, e), d.a.createElement(j.a, {
					className: F.a.SectionChevron
				})), d.a.createElement("div", {
					className: F.a.SectionBody
				}, d.a.createElement("div", {
					className: F.a.SectionContent
				}, a), d.a.createElement("div", {
					className: F.a.SectionFooter
				}, d.a.createElement(_.o, {
					className: F.a.SectionButton,
					onClick: r
				}, n ? v.fbt._("Less", null, {
					hk: "PF0lJ"
				}) : v.fbt._("See more", null, {
					hk: "439kAh"
				})))));
			class I extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(({
							openedSection: t
						}) => t === e ? {
							openedSection: -1,
							isSectionExpanded: !1
						} : {
							openedSection: e,
							isSectionExpanded: !1
						})
					}, this.onExpand = () => {
						this.setState(({
							isSectionExpanded: e
						}) => ({
							isSectionExpanded: !e
						}))
					}, this.renderLink = ({
						url: e,
						title: t
					}) => d.a.createElement(P, {
						key: t,
						to: e,
						title: t
					}), this.renderSection = (e, t) => d.a.createElement(A, {
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
					if (t) return d.a.createElement(f.a, {
						className: Object(C.a)(F.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var B = I,
				L = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				D = n("./src/reddit/components/SidebarContainer/index.tsx"),
				R = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				W = n("./node_modules/lodash/sampleSize.js"),
				G = n.n(W),
				U = n("./node_modules/request-idle-callback/index.js"),
				q = n("./src/lib/constants/index.ts"),
				Q = n("./src/reddit/components/SubredditIcon/index.tsx"),
				M = n("./src/reddit/constants/localStorage.ts"),
				J = n("./src/reddit/contexts/ApiContext.tsx"),
				K = n("./src/reddit/featureFlags/component.tsx"),
				Z = n("./src/reddit/helpers/localStorage/index.ts"),
				V = n("./src/reddit/helpers/name/index.ts"),
				H = n("./src/lib/makeApiRequest/index.ts"),
				X = n("./src/lib/omitHeaders/index.ts"),
				z = n("./src/reddit/constants/headers.ts");
			const Y = e => Object(H.a)(Object(X.a)(e, [z.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: q.ib.GET,
				type: "json"
			});
			var $ = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 3, ae = 30 * q.jb, se = "SubredditAdoption";
			class re extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = re.cachedData || Object(Z.B)(M.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > ae) {
						const t = await Y(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(Z.Fb)(M.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return re.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(U.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: G()(e, ne)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? d.a.createElement("div", {
						className: ee.a.container
					}, d.a.createElement("div", {
						className: ee.a.main
					}, d.a.createElement("div", {
						className: ee.a.title
					}, d.a.createElement(Q.b, {
						className: ee.a.icon
					}), te._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), d.a.createElement("div", {
						className: ee.a.description
					}, te._("{subreddits list} and more are looking for moderators!", [te._param("subreddits list", d.a.createElement("strong", null, e.map(V.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), d.a.createElement(_.k, {
						className: ee.a.button,
						to: `/r/${se}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, te._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			re.cachedData = null;
			var ie = Object(K.a)("srAdoptionWeek", Object(J.b)(re)),
				oe = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				de = n("./src/reddit/actions/post.ts"),
				ce = n("./src/reddit/components/MiniPost/index.tsx"),
				le = n("./src/reddit/components/Widgets/Base/index.tsx");
			class ue extends d.a.Component {
				render() {
					return d.a.createElement("div", null, d.a.createElement(le.a, null, this.props.headerText), this.props.posts.map(e => d.a.createElement(ce.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var me = ue,
				be = n("./src/reddit/helpers/overlay/index.ts"),
				pe = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				ge = n.n(pe),
				he = n("./src/lib/lessComponent.tsx");
			const fe = Object(c.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(be.a)(t.permalink)),
					clearLinks: () => e(Object(de.t)())
				})),
				_e = he.a.button("ClearButton", ge.a);
			class ke extends d.a.Component {
				render() {
					return d.a.createElement(le.b, null, d.a.createElement(me, {
						className: this.props.className,
						headerText: v.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), d.a.createElement(_e, {
						onClick: this.props.clearLinks
					}, v.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var xe = fe(ke),
				ye = n("./src/reddit/selectors/posts.ts");
			const Ne = Object(u.c)({
				recentPosts: ye.R
			});
			var Ee = Object(c.b)(Ne, (e, t) => ({
					openLightbox: t => () => e(Object(be.a)(t.permalink))
				}))(({
					className: e,
					recentPosts: t
				}) => t && t.length ? d.a.createElement(h.a, null, d.a.createElement(xe, {
					className: e,
					headerText: v.fbt._("Recent posts", null, {
						hk: "1olaOT"
					}),
					posts: t
				})) : null),
				Se = n("./src/config.ts"),
				ve = n("./src/lib/env/index.ts"),
				Ce = n("./src/reddit/controls/Chip/index.tsx"),
				Te = n("./src/reddit/helpers/trackers/widgets.ts"),
				Oe = n("./src/reddit/hooks/useTracking.ts");
			const je = [{
				getName: () => v.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => v.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => v.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => v.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => v.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => v.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => v.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => v.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => v.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => v.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => v.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => v.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => v.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => v.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => v.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => v.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => v.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => v.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => v.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => v.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => v.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => v.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => v.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => v.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => v.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => v.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => v.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => v.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => v.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => v.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => v.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => v.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => v.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => v.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => v.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => v.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => v.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => v.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => v.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => v.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => v.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => v.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var we = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Fe = n.n(we);
			const Pe = () => {
					const e = `${Se.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = v.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						n = {
							backgroundImage: `url(${e})`
						};
					return d.a.createElement("div", {
						className: Fe.a.banner,
						style: n
					}, d.a.createElement("h2", {
						className: Fe.a.bannerText
					}, t))
				},
				Ae = e => `/t/${e}?activeTab=communities`,
				Ie = e => {
					const t = e.topic.getName();
					return d.a.createElement("div", {
						className: Fe.a.itemContainer
					}, d.a.createElement(Ce.a, {
						to: Ae(e.topic.url),
						onClick: () => e.sendEvent(Object(Te.c)(t))
					}, t))
				};
			var Be = d.a.memo(e => {
					const t = Object(Oe.a)();
					Object(o.useEffect)(() => t(Object(Te.d)()), []);
					const n = je.map(e => ({
						value: e,
						sort: Object(ve.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return d.a.createElement(f.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, d.a.createElement(Pe, null), d.a.createElement("div", {
						className: Fe.a.container
					}, n.map(e => d.a.createElement(Ie, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Le = n("./src/reddit/constants/experiments.ts"),
				De = n("./src/reddit/constants/subredditLeaderboard.ts"),
				Re = n("./src/reddit/models/GoodContent/index.ts"),
				We = n("./src/reddit/helpers/chooseVariant/index.ts");

			function Ge(e) {
				return Object(We.c)(e, {
					experimentEligibilitySelector: We.a,
					experimentName: Le.x
				})
			}
			var Ue = n("./src/reddit/selectors/experiments/utils.ts");
			const qe = Object(u.a)(e => Object(We.c)(e, {
					experimentName: Le.Oc,
					experimentEligibilitySelector: We.a
				}), Ue.a),
				Qe = Object(u.a)(qe, e => e === Le.Qc.Enabled);
			var Me = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Je = n("./src/reddit/selectors/user.ts");
			var Ke = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				Ze = n("./src/reddit/selectors/seo/linksModule.ts"),
				Ve = n("./src/reddit/selectors/subreddit.ts"),
				He = n("./src/reddit/selectors/subredditLeaderboard.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Xe = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				ze = n("./src/reddit/selectors/meta.ts");
			const Ye = "c1020",
				$e = "videos",
				et = Object(u.c)({
					isMod: Je.L,
					isLoggedIn: Je.J,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					currentUser: Je.k,
					frontpageLinks: Ze.b,
					isOver18: Je.eb,
					isUISimplificationAllItemsVariant: Ke.b,
					isInBFFSLeaderboardExperiment: function(e) {
						return Ge(e) === Le.w.RotateEven
					},
					bffsLeaderboardVariant: Ge,
					inRpanTopVideoEntrypointExperiment: Me.e,
					rankings: e => Object(Ve.O)(e, Ye),
					shouldShowTopicsWidget: e => {
						const t = Object(Me.e)(e),
							n = !!Object(Ve.O)(e, Ye);
						return (!t || !n) && (!Object(Ke.b)(e) && function(e) {
							return Object(We.c)(e, {
								experimentEligibilitySelector: Je.K,
								experimentName: Le.ob
							}) === Le.jc
						}(e))
					},
					isNavbarLikeMwebEnabled: l.a,
					locale: ze.i,
					isInLeaderboardTakeoverExperiment: Qe
				}),
				tt = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				nt = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				at = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: a,
						isInLeaderboardTakeoverExperiment: r
					} = e;
					if (r) {
						const e = [...De.h];
						return {
							category: e[s()(e.length - 1)],
							categories: e
						}
					}
					let o, d, c, l, u;
					n && t === Le.w.RotateEven ? (o = De.u, d = De.n, c = De.s, l = De.a) : (o = De.t, d = De.j, c = De.r, l = []), u = [o, ...l, ...c], a && u.unshift(d);
					const m = u[s()(u.length - 1)];
					u = [], m.id !== o.id && u.push(o), a && m.id !== d.id && u.push(d);
					let b = [...l, ...c];
					return b = b.filter(e => e.id !== m.id), u = [...u, ...i()(b).slice(0, 4 - u.length)], {
						category: m,
						categories: u
					}
				};
			class st extends d.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					};
					const {
						category: t,
						categories: n
					} = at(e);
					!e.rankings && e.inRpanTopVideoEntrypointExperiment && e.fetchTopSubreddits(), this.state = {
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
						isOver18: s,
						listingName: r,
						isUISimplificationAllItemsVariant: i,
						shouldShowTopicsWidget: o,
						isNavbarLikeMwebEnabled: c
					} = this.props, {
						category: l,
						categories: u
					} = this.state, m = !i, b = !i && !c;
					return d.a.createElement(D.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, m && d.a.createElement(oe.a, {
						categories: u,
						category: l,
						first: 5,
						isOver18: s,
						shouldDisplayDelta: !this.props.isMod && l.id !== De.l,
						to: l.path
					}), d.a.createElement(L.a, {
						placement: q.c.ABOVE_THE_FOLD,
						listingName: r,
						removeSidebarSpacer: !m,
						position: Xe.a.FIRST,
						sizes: q.h,
						placementIndex: e++
					}), nt(this.props) && d.a.createElement(S, null), o && d.a.createElement(h.a, null, d.a.createElement(Be, null)), a && d.a.createElement(h.a, null, d.a.createElement(p.a, {
						listingName: r
					})), tt(this.props) && d.a.createElement(Ee, null), n && b && d.a.createElement(h.a, null, d.a.createElement(B, {
						links: n
					})), d.a.createElement(R.a, {
						adComponent: d.a.createElement(L.a, {
							placement: q.c.BELOW_THE_FOLD,
							listingName: r,
							position: Xe.a.BOTTOM,
							sizes: q.o,
							placementIndex: e++
						})
					}, a && d.a.createElement(ie, null)))
				}
			}
			const rt = Object(c.b)(et, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: Ye,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: Re.b.PG13
							},
							isOnlyModIncluded: !1
						},
						n = Object(He.d)(Ye, $e);
					e(Object(b.a)(t, n))
				},
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = rt(st)
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/lib/timeAgo/index.ts"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/Thumbnail/index.tsx"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/MiniPost/index.m.less"),
				f = n.n(h);
			const _ = Object(o.a)(e => e, p.I, p.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(g.L)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(i.b)(_, (e, t) => ({
					openLightbox: t => e(Object(b.a)(t.permalink))
				}));
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: n,
							post: a
						} = this.props;
						n ? window.open(a.permalink) : t(a), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: n,
							subredditOrProfile: a
						} = this.props;
						e.stopPropagation(), t && a && (e.preventDefault(), window.open(a.url)), n && n()
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
						subredditOrProfile: s,
						subredditSameLine: i,
						crowdControlPreview: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(d.a)(f.a.container, e, o ? f.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: f.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(m.a, {
						post: t
					})), r.a.createElement("div", {
						className: f.a.postDetails
					}, r.a.createElement("p", {
						className: f.a.title,
						title: t.title
					}, t.title), r.a.createElement("div", {
						className: Object(d.a)(f.a.subAndMeta, {
							[f.a.isSingleLine]: i
						})
					}, n && s && s.displayText && r.a.createElement(u.a, {
						className: f.a.SubredditLink,
						to: s.url,
						onClick: this.onClickSubreddit
					}, s.displayText), i && r.a.createElement("div", {
						className: f.a.separator
					}), !o && r.a.createElement("div", null, r.a.createElement("span", {
						className: f.a.meta
					}, a.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [a.fbt._plural(t.score, "number", Object(c.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: f.a.meta
					}, a.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [a.fbt._plural(t.numComments, "number", Object(c.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: f.a.meta
					}, Object(l.a)(t.created / 1e3, !0))))))
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
			var a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = n.n(s);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(a.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/constants/subredditLeaderboard.ts"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/reddit/endpoints/subreddit/local.ts"),
				l = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				b = n("./src/reddit/models/GoodContent/index.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const g = async (e, t) => {
				const n = await Object(l.a)(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(u.c)(t)
				}
			};
			class h extends s.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n, a) => {
						this.props.sendEvent(Object(m.c)(e, t, n, a)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, a)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						n = this.props && this.props.category && this.props.category.id,
						a = this.props.category && this.props.category.name;
					t !== n && a && !this.state[a] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, n = e && e.id;
					if (n !== o.l)(n || n === o.f) && g(this.props.gqlContext(), {
						categoryId: n,
						filter: b.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							a = this.props.category && this.props.category.name || o.c;
						t && n && this.setState(e => ({
							...e,
							[a]: {
								rankings: t,
								subreddits: n
							}
						}))
					}).catch(e => console.error("Error >>>", e));
					else {
						const e = await Object(c.b)(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: a
						} = e;
						this.setState(e => ({
							...e,
							[o.m]: {
								rankings: n,
								subreddits: a
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = e && e.displayText, a = t || o.c, i = this.state[a], d = i ? i.rankings : [], c = i ? i.subreddits : {}, l = d && d[0] && d[0].id, u = c && c[l], m = !(u && u.isNSFW) || this.props.isOver18;
					return s.a.createElement(r.b, p({
						categoryName: t,
						categoryDisplayText: n,
						onSendEventClick: this.sendEventClick,
						rankings: d,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: c
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				b = n.n(m);
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
				}, a.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				g = e => {
					const t = Object(o.a)(b.a.subredditRankItem, e.large && b.a.large),
						n = e.delta && e.delta > 0,
						a = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						s = e.delta ? n ? "#46D160" : "#EA0027" : "transparent";
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
					}, a), !e.hasTagline && r.a.createElement(u.a, {
						className: b.a.arrow,
						name: n ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: s
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = n.n(i);
			const d = e => s.a.createElement("div", {
				className: Object(r.a)(o.a.placeholderWrapper, e.fullWidth && o.a.fullWidth, e.large && o.a.large)
			}, s.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), s.a.createElement("span", {
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
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb",
				fullWidth: "_1MG43W0qN1RYkFlwxoV_tQ"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/first.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/times.js"),
				o = n.n(i),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./src/config.ts"),
				m = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/subredditLeaderboard.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Chip/index.tsx"),
				k = n("./src/reddit/helpers/name/index.ts"),
				x = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				N = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				E = n.n(N);
			const S = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && E.a.communityBannerPlaceholder,
						s = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						r = e.categoryName === h.m && h.j.path ? h.j.path : h.g;
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, E.a.communityBanner, n),
						style: s
					}, t && c.a.createElement("h2", {
						className: E.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.e),
						to: r
					}, e.categoryName ? ((e, t) => e === h.m ? a.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : a.fbt._("Top {categoryName} Communities", [a.fbt._param("categoryName", c.a.createElement("span", {
						className: E.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : a.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				v = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, s = !!(!e.rankings || !e.rankings.length) && E.a.communityBannerPlaceholder, r = n && Array.isArray(n) && 2 === n.length ? {
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, i = t.path ? t.path : h.g, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, E.a.taglineBanner, s)
					}, c.a.createElement("div", {
						className: E.a.taglineBannerBackground,
						style: r
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || h.e),
						to: i
					}, c.a.createElement("h2", {
						className: E.a.taglineBannerText
					}, c.a.createElement("img", {
						className: E.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${o}`
					}), t.tagline ? (e => c.a.createElement("span", {
						className: E.a.categoryName
					}, a.fbt._("{tagline}", [a.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : a.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				C = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const a = e.subreddits[t.id];
					return c.a.createElement(b.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.e, a.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: a
					})
				}), !e.rankings.length && T),
				T = c.a.createElement(c.a.Fragment, null, o()(5, e => c.a.createElement(p.a, {
					key: e
				}))),
				O = e => {
					const t = e.isSecondaryButton ? f.n : f.k,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						s = e.isSecondaryButton ? e.categoryDisplayText ? a.fbt._("See All {categoryName}", [a.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? a.fbt._("See All {categoryName}", [a.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : a.fbt._("See All", null, {
							hk: "2OZax8"
						}) : a.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return c.a.createElement("div", {
						className: E.a.footer
					}, c.a.createElement(t, {
						className: E.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.e),
						to: e.to || "",
						style: n
					}, s))
				};

			function j(e, t) {
				return t || `${h.g}${Object(k.g)(e)}/`
			}
			const w = e => {
				return c.a.createElement("div", {
					className: E.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: E.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || h.e, void 0, n))(t.name, n + 1)
				}, c.a.createElement(_.a, {
					className: e.hasTagline ? E.a.taglineChip : E.a.chip,
					key: t.name,
					to: j(t.name, t.path),
					wide: t.name === h.m
				}, t.name ? t.name === h.m ? h.k : t.displayText || t.name : a.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: a,
					categoryDisplayText: s,
					category: i,
					categories: o
				} = e, l = Object(y.a)();
				Object(d.useEffect)(() => {
					l(Object(x.d)(a || h.e))
				}, []);
				const m = r()(n),
					b = t && m && t[m.id],
					p = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					f = b ? b.bannerBackgroundImage || p : void 0,
					_ = e.to || a && j(a, i.path),
					k = i && i.tagline,
					N = i && i.gradients && Array.isArray(i.gradients) && 2 === i.gradients.length ? i.gradients[1] : void 0;
				return c.a.createElement(g.a, {
					className: e.className,
					contentOnly: !0
				}, k && c.a.createElement(v, {
					category: i,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !k && c.a.createElement(S, {
					bannerBackgroundImage: f,
					categoryName: a,
					categoryDisplayText: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(C, {
					categoryName: a,
					hasTagline: !!k,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), c.a.createElement(O, {
					categoryName: a,
					categoryDisplayText: s,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: N,
					onSendEventClick: e.onSendEventClick,
					to: _
				}), o && c.a.createElement(w, {
					activeCategoryName: a,
					categories: o,
					hasTagline: !!k,
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
				return s
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "p", (function() {
				return c
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "i", (function() {
				return S
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = "DEFAULT",
				r = "",
				i = "All Communities",
				o = a.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				d = "top",
				c = "MOD",
				l = "moderating",
				u = a.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				b = "near-you",
				p = a.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				g = "/subreddits/leaderboard/",
				h = {
					id: r,
					name: r,
					path: `${g}`
				},
				f = {
					id: m,
					name: b,
					path: `${g}${b}/`
				},
				_ = [{
					name: "Sports",
					displayText: a.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${g}sports/`
				}, {
					name: "News",
					displayText: a.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${g}news/`
				}, {
					name: "Gaming",
					displayText: a.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${g}gaming/`
				}, {
					name: "Aww",
					displayText: a.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${g}aww/`
				}],
				k = {
					id: r,
					name: r,
					path: `${g}`,
					image: "popcorn-snoo",
					tagline: a.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				x = {
					id: m,
					name: b,
					path: `${g}${b}/`,
					image: "magnifying-glass-snoo",
					tagline: a.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				y = [{
					name: "Sports",
					displayText: a.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${g}sports/`,
					image: "basketball-snoo",
					tagline: a.fbt._("Sports communities are the real MVP", null, {
						hk: "1zKdF8"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					displayText: a.fbt._("News", null, {
						hk: "17cLQ8"
					}),
					id: "c1009",
					path: `${g}news/`,
					image: "newsie-snoo",
					tagline: a.fbt._("News communities to keep you informed", null, {
						hk: "4pGDSm"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					displayText: a.fbt._("Gaming", null, {
						hk: "2aDSZz"
					}),
					id: "c1019",
					path: `${g}gaming/`,
					image: "esports-snoo",
					tagline: a.fbt._("Gaming communities taking it to the next level", null, {
						hk: "2zM7JE"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					displayText: a.fbt._("Aww", null, {
						hk: "3ecS9m"
					}),
					id: "c1000",
					path: `${g}aww/`,
					image: "cat-snoo",
					tagline: a.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				N = [{
					name: "E3 Gaming",
					displayText: a.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${g}e3/`
				}],
				E = [{
					name: "Beauty",
					displayText: a.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${g}beauty/`,
					image: "makeup-snoo",
					tagline: a.fbt._("Beauty communities make us all look good", null, {
						hk: "2z1nzQ"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					displayText: a.fbt._("Fashion", null, {
						hk: "22tnM2"
					}),
					id: "c1002",
					path: `${g}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: a.fbt._("Fashion communities are always in style", null, {
						hk: "4pNEnH"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					displayText: a.fbt._("Food", null, {
						hk: "2Bq28v"
					}),
					id: "c1003",
					path: `${g}food/`,
					image: "cookbooks-snoo",
					tagline: a.fbt._("Food communities to make you go mmmm", null, {
						hk: "3OGpOa"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					displayText: a.fbt._("Fitness", null, {
						hk: "4ruQRK"
					}),
					id: "c1006",
					path: `${g}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: a.fbt._("Fitness communities that know how to work it", null, {
						hk: "3Ow48z"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					displayText: a.fbt._("Outdoors", null, {
						hk: "1Can0U"
					}),
					id: "c1010",
					path: `${g}outdoors/`,
					image: "telescope-snoo",
					tagline: a.fbt._("Outdoor communities — they’re really out there", null, {
						hk: "1sfigF"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					displayText: a.fbt._("Relationships", null, {
						hk: "QnBO3"
					}),
					id: "c1013",
					path: `${g}relationships/`,
					image: "childrensbooks-snoo",
					tagline: a.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				S = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const i = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				o = Object(a.createContext)(i);

			function d(e) {
				const t = t => s.a.createElement(o.Consumer, null, ({
					apiContext: n,
					gqlContext: a
				}) => s.a.createElement(e, r({
					apiContext: n,
					gqlContext: a
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Chip/index.m.less"),
				d = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: i.a.InternalLink,
					to: e.to
				} : {};
				return s.a.createElement(i.q, c({
					className: Object(r.a)(d.a.Chip, {
						[d.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.b.Tertiary,
					size: i.c.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				r = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(a.a)(e, {
				...s,
				variables: t
			});
			async function o(e, t) {
				const n = await i(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(r.a)(t)
				}
			}
			t.a = i
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(a.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var a = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					for (const {
							node: r,
							...i
						} of e) {
						const e = Object(a.a)(r);
						n[e.id] = e, s.push(i)
					}
					return {
						pageInfo: t,
						rankings: s,
						subreddits: n
					}
				},
				r = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: s,
							...r
						} of e) {
						const e = Object(a.a)(s);
						t[e.id] = {
							...e,
							bannerBackgroundImage: s && s.styles && s.styles.bannerBackgroundImage
						}, n.push(r)
					}
					return {
						rankings: n,
						subreddits: t
					}
				},
				i = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					let r = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(a.a)(i);
						n[e.id] = {
							...e,
							publicDescription: null == i ? void 0 : i.publicDescriptionText,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, s.push({
							id: e.id,
							rank: r
						}), r += 1
					}
					return {
						rankings: s,
						subreddits: n,
						pageInfo: t
					}
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
			var a = n("./src/reddit/constants/categories.tsx"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...s.defaults(t),
					action: "click",
					noun: Object(a.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, n) => r => ({
					...s.defaults(r),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(a.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				o = (e, t) => n => ({
					...s.defaults(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(a.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, n, r) => i => ({
					...s.defaults(i),
					action: "click",
					actionInfo: {
						...s.actionInfo(i),
						position: r && r
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(a.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => ({
					...s.defaults(n),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(a.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			}));
			const a = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				s = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: a.R
				}
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			}));
			var a = n("./src/reddit/constants/subredditLeaderboard.ts"),
				s = n("./src/reddit/selectors/category.ts");
			const r = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				o = (e, t) => t === a.q ? a.p : t === a.m ? a.l : e || a.c,
				d = (e, t) => {
					const n = e.subreddits.rankings,
						a = t && Object(s.f)(e, {
							categoryName: t
						}),
						r = n[o(a && a.id || null, t)];
					return !(!r || !r.length)
				}
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c7e8c482d1bf"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.7429f03a04f5cf777b1e.js.map