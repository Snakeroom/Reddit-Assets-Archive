// https://www.redditstatic.com/desktop2x/FrontpageSidebar.df507756dab6bb456ce0.js
// Retrieved at 12/8/2022, 7:30:04 PM by Reddit Dataminer v1.0.0
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
				r = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (r(e) ? s : a)(e)
			}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				r = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				o = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const l = Object(s.a)(a.r),
				c = Object(s.a)(a.q),
				u = Object(s.a)(a.p),
				m = Object(s.a)(a.a),
				b = Object(s.a)(a.b),
				p = Object(s.a)(a.c),
				h = (e, t) => async (n, s, a) => {
					let {
						gqlContext: h
					} = a;
					n(l());
					const g = t === r.l ? async function() {
						const t = await Object(i.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const s = t.body,
							a = s && s.data && s.data.nearbySubreddits;
						return Object(d.a)(a)
					}: async function() {
						const t = await Object(o.a)(h(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const s = t.body,
							a = s && s.data && s.data.subredditLeaderboard;
						return Object(d.b)(a)
					}, _ = await g();
					if (!_) return;
					const {
						pageInfo: f,
						rankings: k,
						subreddits: x
					} = _;
					n(m({
						subreddits: x
					})), n(b({
						categoryRankingsKey: t,
						rankings: k
					})), n(p({
						categoryRankingsKey: t,
						pageInfo: f
					})), n(c())
				}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/random.js"),
				a = n.n(s),
				r = n("./node_modules/lodash/shuffle.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/subreddit.ts"),
				b = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				p = n("./src/reddit/components/IdCard/async.tsx"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/components/PremiumCTA/index.m.less"),
				N = n.n(x);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class S extends d.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return d.a.createElement(g.a, null, d.a.createElement(_.a, {
						className: e,
						contentOnly: !0
					}, d.a.createElement("div", {
						className: N.a.wrapper
					}, d.a.createElement("div", {
						className: N.a.contentWrapper
					}, d.a.createElement(k.a, {
						name: "premium",
						isFilled: !0,
						className: N.a.icon
					}), d.a.createElement("div", {
						className: N.a.content
					}, d.a.createElement("div", {
						className: N.a.title
					}, E._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), d.a.createElement("div", {
						className: N.a.description
					}, E._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), d.a.createElement(f.k, {
						isFullWidth: !0,
						onClick: t
					}, E._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var y = Object(l.b)(void 0, e => ({
					onClickPremium: () => e(Object(h.b)("/premium"))
				}))(S),
				O = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				w = n("./src/reddit/controls/InternalLink/index.tsx"),
				T = n("./src/reddit/endpoints/goodContent/index.ts"),
				C = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				P = n.n(F);
			const A = e => {
					let {
						to: t,
						title: n
					} = e;
					return d.a.createElement(v.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, d.a.createElement(w.default, {
						className: P.a.Link,
						to: t,
						title: n
					}, n))
				},
				L = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: s,
						children: a,
						onToggle: r,
						onExpand: i
					} = e;
					return d.a.createElement("div", {
						className: Object(j.a)(P.a.Section, {
							[P.a.opened]: n,
							[P.a.expanded]: s
						})
					}, d.a.createElement("div", {
						className: P.a.SectionHeader,
						onClick: r
					}, d.a.createElement("div", {
						className: P.a.SectionTitle
					}, t), d.a.createElement(C.a, {
						className: P.a.SectionChevron
					})), d.a.createElement("div", {
						className: P.a.SectionBody
					}, d.a.createElement("div", {
						className: P.a.SectionContent
					}, a), d.a.createElement("div", {
						className: P.a.SectionFooter
					}, d.a.createElement(f.r, {
						className: P.a.SectionButton,
						onClick: i
					}, s ? O.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : O.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class R extends d.a.Component {
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
						return d.a.createElement(A, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => d.a.createElement(L, {
						key: e.title,
						title: Object(T.b)(e.title),
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
					if (t) return d.a.createElement(_.a, {
						className: Object(j.a)(P.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var I = R,
				B = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				G = n("./src/reddit/components/SidebarContainer/index.tsx"),
				D = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				U = n("./node_modules/lodash/sampleSize.js"),
				W = n.n(U),
				q = n("./node_modules/request-idle-callback/index.js"),
				Q = n("./src/lib/constants/index.ts"),
				K = n("./src/reddit/components/SubredditIcon/index.tsx"),
				M = n("./src/reddit/constants/localStorage.ts"),
				H = n("./src/reddit/contexts/ApiContext.tsx"),
				J = n("./src/reddit/featureFlags/component.tsx"),
				X = n("./src/reddit/helpers/localStorage/index.ts"),
				z = n("./src/reddit/helpers/name/index.ts"),
				Z = n("./src/lib/makeApiRequest/index.ts"),
				V = n("./src/lib/omitHeaders/index.ts"),
				Y = n("./src/reddit/constants/headers.ts");
			const $ = e => Object(Z.a)(Object(V.a)(e, [Y.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: Q.ob.GET,
				type: "json"
			});
			var ee = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = 3, ae = 30 * Q.pb, re = "SubredditAdoption";
			class ie extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = ie.cachedData || Object(X.C)(M.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > ae) {
						const t = await $(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(X.Kb)(M.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return ie.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(q.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: W()(e, se)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? d.a.createElement("div", {
						className: te.a.container
					}, d.a.createElement("div", {
						className: te.a.main
					}, d.a.createElement("div", {
						className: te.a.title
					}, d.a.createElement(K.b, {
						className: te.a.icon
					}), ne._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), d.a.createElement("div", {
						className: te.a.description
					}, ne._("{subreddits list} and more are looking for moderators!", [ne._param("subreddits list", d.a.createElement("strong", null, e.map(z.d).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), d.a.createElement(f.n, {
						className: te.a.button,
						to: `/r/${re}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, ne._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			ie.cachedData = null;
			var oe = Object(J.a)("srAdoptionWeek", Object(H.b)(ie)),
				de = n("./src/reddit/actions/post.ts"),
				le = n("./src/reddit/components/MiniPost/index.tsx"),
				ce = n("./src/reddit/components/Widgets/Base/index.tsx");
			class ue extends d.a.Component {
				render() {
					return d.a.createElement("div", null, d.a.createElement(ce.a, null, this.props.headerText), this.props.posts.map(e => d.a.createElement(le.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var me = ue,
				be = n("./src/reddit/helpers/overlay/index.ts"),
				pe = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				he = n.n(pe),
				ge = n("./src/lib/lessComponent.tsx");
			const _e = Object(l.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(be.a)(t.permalink)),
					clearLinks: () => e(Object(de.s)())
				})),
				fe = ge.a.button("ClearButton", he.a);
			class ke extends d.a.Component {
				render() {
					return d.a.createElement(ce.b, null, d.a.createElement(me, {
						className: this.props.className,
						headerText: O.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), d.a.createElement(fe, {
						onClick: this.props.clearLinks
					}, O.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var xe = _e(ke),
				Ne = n("./src/reddit/selectors/posts.ts");
			const Ee = Object(u.c)({
				recentPosts: Ne.R
			});
			var Se = Object(l.b)(Ee, (e, t) => ({
					openLightbox: t => () => e(Object(be.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? d.a.createElement(g.a, null, d.a.createElement(xe, {
						className: t,
						headerText: O.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				ye = n("./src/config.ts"),
				Oe = n("./src/lib/env/index.ts"),
				je = n("./src/reddit/controls/Chip/index.tsx"),
				ve = n("./src/reddit/helpers/trackers/widgets.ts"),
				we = n("./src/reddit/hooks/useTracking.ts");
			const Te = [{
				getName: () => O.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => O.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => O.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => O.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => O.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => O.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => O.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => O.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => O.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => O.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => O.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => O.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => O.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => O.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => O.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => O.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => O.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => O.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => O.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => O.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => O.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => O.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => O.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => O.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => O.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => O.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => O.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => O.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => O.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => O.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => O.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => O.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => O.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => O.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => O.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => O.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => O.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => O.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => O.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => O.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => O.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => O.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var Ce = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Fe = n.n(Ce);
			const Pe = () => {
					const e = `${ye.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = O.fbt._("Find Your Next Community!", null, {
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
				Le = e => {
					const t = e.topic.getName();
					return d.a.createElement("div", {
						className: Fe.a.itemContainer
					}, d.a.createElement(je.a, {
						to: Ae(e.topic.url),
						onClick: () => e.sendEvent(Object(ve.c)(t))
					}, t))
				};
			var Re = d.a.memo(e => {
					const t = Object(we.a)();
					Object(o.useEffect)(() => t(Object(ve.d)()), []);
					const n = Te.map(e => ({
						value: e,
						sort: Object(Oe.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return d.a.createElement(_.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, d.a.createElement(Pe, null), d.a.createElement("div", {
						className: Fe.a.container
					}, n.map(e => d.a.createElement(Le, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Ie = n("./src/reddit/constants/experiments.ts"),
				Be = n("./src/reddit/constants/subredditLeaderboard.ts"),
				Ge = n("./src/reddit/models/GoodContent/index.ts"),
				De = n("./src/reddit/helpers/chooseVariant/index.ts");

			function Ue(e) {
				return Object(De.c)(e, {
					experimentEligibilitySelector: De.a,
					experimentName: Ie.q
				})
			}
			var We = n("./src/reddit/selectors/experiments/utils.ts");
			const qe = Object(u.a)(e => Object(De.c)(e, {
					experimentName: Ie.te,
					experimentEligibilitySelector: De.a
				}), We.a),
				Qe = Object(u.a)(qe, e => e === Ie.xe.Enabled);
			var Ke = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Me = n("./src/reddit/selectors/user.ts");
			var He = n("./src/reddit/selectors/seo/linksModule.ts"),
				Je = n("./src/reddit/selectors/subreddit.ts"),
				Xe = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				ze = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ze = n("./src/reddit/selectors/meta.ts");
			const Ve = "c1020",
				Ye = "videos",
				$e = Object(u.c)({
					isMod: Me.T,
					isLoggedIn: Me.R,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					currentUser: Me.m,
					frontpageLinks: He.b,
					isOver18: Me.mb,
					isInBFFSLeaderboardExperiment: function(e) {
						return Ue(e) === Ie.p.RotateEven
					},
					bffsLeaderboardVariant: Ue,
					inRpanTopVideoEntrypointExperiment: Ke.e,
					rankings: e => Object(Je.T)(e, Ve),
					shouldShowTopicsWidget: e => {
						const t = Object(Ke.e)(e),
							n = !!Object(Je.T)(e, Ve);
						return (!t || !n) && function(e) {
							return Object(De.c)(e, {
								experimentEligibilitySelector: Me.S,
								experimentName: Ie.Sc
							}) === Ie.Qd
						}(e)
					},
					isNavbarLikeMwebEnabled: c.a,
					locale: Ze.j,
					isInLeaderboardTakeoverExperiment: Qe
				}),
				et = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				tt = e => !(!e.currentUser || e.currentUser.isGold),
				nt = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: s,
						isInLeaderboardTakeoverExperiment: r
					} = e;
					if (r) {
						const e = [...Be.h];
						return {
							category: e[a()(e.length - 1)],
							categories: e
						}
					}
					let o, d, l, c, u;
					n && t === Ie.p.RotateEven ? (o = Be.u, d = Be.n, l = Be.s, c = Be.a) : (o = Be.t, d = Be.j, l = Be.r, c = []), u = [o, ...c, ...l], s && u.unshift(d);
					const m = u[a()(u.length - 1)];
					u = [], m.id !== o.id && u.push(o), s && m.id !== d.id && u.push(d);
					let b = [...c, ...l];
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
					} = nt(e);
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
						isLoggedIn: s,
						listingName: a,
						shouldShowTopicsWidget: r,
						isNavbarLikeMwebEnabled: i
					} = this.props, o = !i;
					return d.a.createElement(G.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, d.a.createElement(B.a, {
						placement: Q.e.ABOVE_THE_FOLD,
						listingName: a,
						removeSidebarSpacer: !1,
						position: ze.a.FIRST,
						sizes: Q.j,
						placementIndex: e++
					}), tt(this.props) && d.a.createElement(y, null), r && d.a.createElement(g.a, null, d.a.createElement(Re, null)), s && d.a.createElement(g.a, null, d.a.createElement(p.a, {
						listingName: a
					})), et(this.props) && d.a.createElement(Se, null), n && o && d.a.createElement(g.a, null, d.a.createElement(I, {
						links: n
					})), d.a.createElement(D.a, {
						adComponent: d.a.createElement(B.a, {
							placement: Q.e.BELOW_THE_FOLD,
							listingName: a,
							position: ze.a.BOTTOM,
							sizes: Q.q,
							placementIndex: e++
						})
					}, s && d.a.createElement(oe, null)))
				}
			}
			const at = Object(l.b)($e, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: Ve,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: Ge.b.PG13
							},
							isOnlyModIncluded: !1
						},
						n = Object(Xe.d)(Ve, Ye);
					e(Object(b.b)(t, n))
				},
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = at(st)
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
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/Thumbnail/index.tsx"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/MiniPost/index.m.less"),
				_ = n.n(g);
			const f = Object(o.a)(e => e, p.G, p.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(h.Q)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(i.b)(f, (e, t) => ({
					openLightbox: t => e(Object(b.a)(t.permalink))
				}));
			class x extends r.a.PureComponent {
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
					}, r.a.createElement(m.b, {
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
					}, n && a && a.displayText && r.a.createElement(u.a, {
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
					}, [s.fbt._plural(t.score, "number", Object(l.b)(t.score))], {
						hk: "1Jm6il"
					})), r.a.createElement("span", {
						className: _.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(l.b)(t.numComments))], {
						hk: "2jjoyt"
					})), r.a.createElement("span", {
						className: _.a.meta
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
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
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
				return g
			})), n.d(t, "j", (function() {
				return _
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
				r = "",
				i = "All Communities",
				o = s.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				d = "top",
				l = "MOD",
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
				g = {
					id: r,
					name: r,
					path: `${h}`
				},
				_ = {
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
					id: r,
					name: r,
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
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Chip/index.m.less"),
				d = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: i.b.InternalLink,
					to: e.to
				} : {};
				return a.a.createElement(i.t, l({
					className: Object(r.a)(d.a.Chip, {
						[d.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.c.Tertiary,
					size: i.d.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				r = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(s.a)(e, {
				...a,
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
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const a = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const a = {},
						r = [];
					for (const {
							node: i,
							...o
						} of t) {
						const e = Object(s.a)(i);
						a[e.id] = e, r.push(o)
					}
					return {
						pageInfo: n,
						rankings: r,
						subreddits: a
					}
				},
				r = e => {
					let {
						edges: t
					} = e;
					const n = {},
						a = [];
					for (const {
							node: r,
							...i
						} of t) {
						const e = Object(s.a)(r);
						n[e.id] = {
							...e,
							bannerBackgroundImage: r && r.styles && r.styles.bannerBackgroundImage
						}, a.push(i)
					}
					return {
						rankings: a,
						subreddits: n
					}
				},
				i = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const a = {},
						r = [];
					let i = 0;
					for (const {
							node: o
						} of t) {
						const e = Object(s.a)(o);
						a[e.id] = {
							...e,
							publicDescription: null == o ? void 0 : o.publicDescriptionText,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, r.push({
							id: e.id,
							rank: i
						}), i += 1
					}
					return {
						rankings: r,
						subreddits: a,
						pageInfo: n
					}
				}
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				a = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: s.R
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
			var s = n("./src/reddit/constants/subredditLeaderboard.ts"),
				a = n("./src/reddit/selectors/category.ts");
			const r = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				o = (e, t) => t === s.q ? s.p : t === s.m ? s.l : e || s.c,
				d = (e, t) => {
					const n = e.subreddits.rankings,
						s = t && Object(a.e)(e, {
							categoryName: t
						}),
						r = n[o(s && s.id || null, t)];
					return !(!r || !r.length)
				}
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"1ea6a2fd1417"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"fe5a2ea90910"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.df507756dab6bb456ce0.js.map