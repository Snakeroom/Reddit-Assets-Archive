// https://www.redditstatic.com/desktop2x/FrontpageSidebar.4f946c57d78caca73ead.js
// Retrieved at 7/28/2022, 9:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_copyArray.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return r(s(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_shuffleSelf.js"),
				r = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(r(e))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayShuffle.js"),
				r = n("./node_modules/lodash/_baseShuffle.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? s : r)(e)
			}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/subreddit/constants.ts"),
				a = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				o = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(s.a)(r.m),
				l = Object(s.a)(r.l),
				u = Object(s.a)(r.k),
				m = Object(s.a)(r.a),
				b = Object(s.a)(r.b),
				p = Object(s.a)(r.c),
				g = (e, t) => async (n, s, r) => {
					let {
						gqlContext: g
					} = r;
					n(c());
					const h = t === a.l ? async function() {
						const t = await Object(i.a)(g(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const s = t.body,
							r = s && s.data && s.data.nearbySubreddits;
						return Object(d.a)(r)
					}: async function() {
						const t = await Object(o.a)(g(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const s = t.body,
							r = s && s.data && s.data.subredditLeaderboard;
						return Object(d.b)(r)
					}, k = await h();
					if (!k) return;
					const {
						pageInfo: _,
						rankings: f,
						subreddits: x
					} = k;
					n(m({
						subreddits: x
					})), n(b({
						categoryRankingsKey: t,
						rankings: f
					})), n(p({
						categoryRankingsKey: t,
						pageInfo: _
					})), n(l())
				}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/random.js"),
				r = n.n(s),
				a = n("./node_modules/lodash/shuffle.js"),
				i = n.n(a),
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
				k = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
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
					return d.a.createElement(h.a, null, d.a.createElement(k.a, {
						className: e,
						contentOnly: !0
					}, d.a.createElement("div", {
						className: y.a.wrapper
					}, d.a.createElement("div", {
						className: y.a.contentWrapper
					}, d.a.createElement(f.a, {
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
					})))), d.a.createElement(_.k, {
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
				O = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/lib/classNames/index.ts"),
				j = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				T = n("./src/reddit/controls/InternalLink/index.tsx"),
				C = n("./src/reddit/endpoints/goodContent/index.ts"),
				w = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				B = n.n(F);
			const P = e => {
					let {
						to: t,
						title: n
					} = e;
					return d.a.createElement(j.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, d.a.createElement(T.default, {
						className: B.a.Link,
						to: t,
						title: n
					}, n))
				},
				L = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: s,
						children: r,
						onToggle: a,
						onExpand: i
					} = e;
					return d.a.createElement("div", {
						className: Object(v.a)(B.a.Section, {
							[B.a.opened]: n,
							[B.a.expanded]: s
						})
					}, d.a.createElement("div", {
						className: B.a.SectionHeader,
						onClick: a
					}, d.a.createElement("div", {
						className: B.a.SectionTitle
					}, t), d.a.createElement(w.a, {
						className: B.a.SectionChevron
					})), d.a.createElement("div", {
						className: B.a.SectionBody
					}, d.a.createElement("div", {
						className: B.a.SectionContent
					}, r), d.a.createElement("div", {
						className: B.a.SectionFooter
					}, d.a.createElement(_.r, {
						className: B.a.SectionButton,
						onClick: i
					}, s ? O.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : O.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class I extends d.a.Component {
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
						return d.a.createElement(P, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => d.a.createElement(L, {
						key: e.title,
						title: Object(C.b)(e.title),
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
					if (t) return d.a.createElement(k.a, {
						className: Object(v.a)(B.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var A = I,
				D = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				R = n("./src/reddit/components/SidebarContainer/index.tsx"),
				W = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				G = n("./node_modules/lodash/sampleSize.js"),
				M = n.n(G),
				U = n("./node_modules/request-idle-callback/index.js"),
				Q = n("./src/lib/constants/index.ts"),
				q = n("./src/reddit/components/SubredditIcon/index.tsx"),
				J = n("./src/reddit/constants/localStorage.ts"),
				Z = n("./src/reddit/contexts/ApiContext.tsx"),
				H = n("./src/reddit/featureFlags/component.tsx"),
				K = n("./src/reddit/helpers/localStorage/index.ts"),
				z = n("./src/reddit/helpers/name/index.ts"),
				X = n("./src/lib/makeApiRequest/index.ts"),
				V = n("./src/lib/omitHeaders/index.ts"),
				Y = n("./src/reddit/constants/headers.ts");
			const $ = e => Object(X.a)(Object(V.a)(e, [Y.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: Q.jb.GET,
				type: "json"
			});
			var ee = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = 3, re = 30 * Q.kb, ae = "SubredditAdoption";
			class ie extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = ie.cachedData || Object(K.A)(J.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > re) {
						const t = await $(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(K.Eb)(J.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return ie.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(U.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: M()(e, se)
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
					}, d.a.createElement(q.b, {
						className: te.a.icon
					}), ne._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), d.a.createElement("div", {
						className: te.a.description
					}, ne._("{subreddits list} and more are looking for moderators!", [ne._param("subreddits list", d.a.createElement("strong", null, e.map(z.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), d.a.createElement(_.n, {
						className: te.a.button,
						to: `/r/${ae}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, ne._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			ie.cachedData = null;
			var oe = Object(H.a)("srAdoptionWeek", Object(Z.b)(ie)),
				de = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				ce = n("./src/reddit/actions/post.ts"),
				le = n("./src/reddit/components/MiniPost/index.tsx"),
				ue = n("./src/reddit/components/Widgets/Base/index.tsx");
			class me extends d.a.Component {
				render() {
					return d.a.createElement("div", null, d.a.createElement(ue.a, null, this.props.headerText), this.props.posts.map(e => d.a.createElement(le.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var be = me,
				pe = n("./src/reddit/helpers/overlay/index.ts"),
				ge = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				he = n.n(ge),
				ke = n("./src/lib/lessComponent.tsx");
			const _e = Object(c.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink)),
					clearLinks: () => e(Object(ce.t)())
				})),
				fe = ke.a.button("ClearButton", he.a);
			class xe extends d.a.Component {
				render() {
					return d.a.createElement(ue.b, null, d.a.createElement(be, {
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
			var ye = _e(xe),
				Ne = n("./src/reddit/selectors/posts.ts");
			const Ee = Object(u.c)({
				recentPosts: Ne.R
			});
			var Se = Object(c.b)(Ee, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? d.a.createElement(h.a, null, d.a.createElement(ye, {
						className: t,
						headerText: O.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				Oe = n("./src/config.ts"),
				ve = n("./src/lib/env/index.ts"),
				je = n("./src/reddit/controls/Chip/index.tsx"),
				Te = n("./src/reddit/helpers/trackers/widgets.ts"),
				Ce = n("./src/reddit/hooks/useTracking.ts");
			const we = [{
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
			var Fe = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Be = n.n(Fe);
			const Pe = () => {
					const e = `${Oe.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = O.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						n = {
							backgroundImage: `url(${e})`
						};
					return d.a.createElement("div", {
						className: Be.a.banner,
						style: n
					}, d.a.createElement("h2", {
						className: Be.a.bannerText
					}, t))
				},
				Le = e => `/t/${e}?activeTab=communities`,
				Ie = e => {
					const t = e.topic.getName();
					return d.a.createElement("div", {
						className: Be.a.itemContainer
					}, d.a.createElement(je.a, {
						to: Le(e.topic.url),
						onClick: () => e.sendEvent(Object(Te.c)(t))
					}, t))
				};
			var Ae = d.a.memo(e => {
					const t = Object(Ce.a)();
					Object(o.useEffect)(() => t(Object(Te.d)()), []);
					const n = we.map(e => ({
						value: e,
						sort: Object(ve.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return d.a.createElement(k.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, d.a.createElement(Pe, null), d.a.createElement("div", {
						className: Be.a.container
					}, n.map(e => d.a.createElement(Ie, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				De = n("./src/reddit/constants/experiments.ts"),
				Re = n("./src/reddit/constants/subredditLeaderboard.ts"),
				We = n("./src/reddit/models/GoodContent/index.ts"),
				Ge = n("./src/reddit/helpers/chooseVariant/index.ts");

			function Me(e) {
				return Object(Ge.c)(e, {
					experimentEligibilitySelector: Ge.a,
					experimentName: De.C
				})
			}
			var Ue = n("./src/reddit/selectors/experiments/utils.ts");
			const Qe = Object(u.a)(e => Object(Ge.c)(e, {
					experimentName: De.de,
					experimentEligibilitySelector: Ge.a
				}), Ue.a),
				qe = Object(u.a)(Qe, e => e === De.ee.Enabled);
			var Je = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				Ze = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				He = n("./src/reddit/selectors/user.ts");
			var Ke = n("./src/reddit/selectors/seo/linksModule.ts"),
				ze = n("./src/reddit/selectors/subreddit.ts"),
				Xe = n("./src/reddit/selectors/subredditLeaderboard.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Ve = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ye = n("./src/reddit/selectors/meta.ts");
			const $e = "c1020",
				et = "videos",
				tt = Object(u.c)({
					isMod: He.R,
					isLoggedIn: He.P,
					isLoggedOutOneFeed: Je.a,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					currentUser: He.k,
					frontpageLinks: Ke.b,
					isOver18: He.kb,
					isInBFFSLeaderboardExperiment: function(e) {
						return Me(e) === De.B.RotateEven
					},
					bffsLeaderboardVariant: Me,
					inRpanTopVideoEntrypointExperiment: Ze.e,
					rankings: e => Object(ze.P)(e, $e),
					shouldShowTopicsWidget: e => {
						const t = Object(Ze.e)(e),
							n = !!Object(ze.P)(e, $e);
						return (!t || !n) && function(e) {
							return Object(Ge.c)(e, {
								experimentEligibilitySelector: He.Q,
								experimentName: De.Ac
							}) === De.Ad
						}(e)
					},
					isNavbarLikeMwebEnabled: l.a,
					locale: Ye.j,
					isInLeaderboardTakeoverExperiment: qe
				}),
				nt = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				st = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold) || e.isLoggedOutOneFeed),
				rt = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: s,
						isInLeaderboardTakeoverExperiment: a
					} = e;
					if (a) {
						const e = [...Re.h];
						return {
							category: e[r()(e.length - 1)],
							categories: e
						}
					}
					let o, d, c, l, u;
					n && t === De.B.RotateEven ? (o = Re.u, d = Re.n, c = Re.s, l = Re.a) : (o = Re.t, d = Re.j, c = Re.r, l = []), u = [o, ...l, ...c], s && u.unshift(d);
					const m = u[r()(u.length - 1)];
					u = [], m.id !== o.id && u.push(o), s && m.id !== d.id && u.push(d);
					let b = [...l, ...c];
					return b = b.filter(e => e.id !== m.id), u = [...u, ...i()(b).slice(0, 4 - u.length)], {
						category: m,
						categories: u
					}
				};
			class at extends d.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					};
					const {
						category: t,
						categories: n
					} = rt(e);
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
						isOver18: r,
						listingName: a,
						shouldShowTopicsWidget: i,
						isNavbarLikeMwebEnabled: o
					} = this.props, {
						category: c,
						categories: l
					} = this.state, u = !o;
					return d.a.createElement(R.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, d.a.createElement(de.a, {
						categories: l,
						category: c,
						first: 5,
						isOver18: r,
						shouldDisplayDelta: !this.props.isMod && c.id !== Re.l,
						to: c.path
					}), d.a.createElement(D.a, {
						placement: Q.c.ABOVE_THE_FOLD,
						listingName: a,
						removeSidebarSpacer: !1,
						position: Ve.a.FIRST,
						sizes: Q.h,
						placementIndex: e++
					}), st(this.props) && d.a.createElement(S, null), i && d.a.createElement(h.a, null, d.a.createElement(Ae, null)), s && d.a.createElement(h.a, null, d.a.createElement(p.a, {
						listingName: a
					})), nt(this.props) && d.a.createElement(Se, null), n && u && d.a.createElement(h.a, null, d.a.createElement(A, {
						links: n
					})), d.a.createElement(W.a, {
						adComponent: d.a.createElement(D.a, {
							placement: Q.c.BELOW_THE_FOLD,
							listingName: a,
							position: Ve.a.BOTTOM,
							sizes: Q.o,
							placementIndex: e++
						})
					}, s && d.a.createElement(oe, null)))
				}
			}
			const it = Object(c.b)(tt, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: $e,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: We.b.PG13
							},
							isOnlyModIncluded: !1
						},
						n = Object(Xe.d)($e, et);
					e(Object(b.b)(t, n))
				},
				subredditAboutRequested: t => e(Object(m.u)(t))
			}));
			t.default = it(at)
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
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
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
				k = n.n(h);
			const _ = Object(o.a)(e => e, p.G, p.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(g.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				f = Object(i.b)(_, (e, t) => ({
					openLightbox: t => e(Object(b.a)(t.permalink))
				}));
			class x extends a.a.PureComponent {
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
						subredditOrProfile: r,
						subredditSameLine: i,
						crowdControlPreview: o
					} = this.props;
					return a.a.createElement("div", {
						className: Object(d.a)(k.a.container, e, o ? k.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: k.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(m.a, {
						post: t
					})), a.a.createElement("div", {
						className: k.a.postDetails
					}, a.a.createElement("p", {
						className: k.a.title,
						title: t.title
					}, t.title), a.a.createElement("div", {
						className: Object(d.a)(k.a.subAndMeta, {
							[k.a.isSingleLine]: i
						})
					}, n && r && r.displayText && a.a.createElement(u.a, {
						className: k.a.SubredditLink,
						to: r.url,
						onClick: this.onClickSubreddit
					}, r.displayText), i && a.a.createElement("div", {
						className: k.a.separator
					}), !o && a.a.createElement("div", null, a.a.createElement("span", {
						className: k.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(t.score, "number", Object(c.b)(t.score))], {
						hk: "1Jm6il"
					})), a.a.createElement("span", {
						className: k.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(t.numComments, "number", Object(c.b)(t.numComments))], {
						hk: "2jjoyt"
					})), a.a.createElement("span", {
						className: k.a.meta
					}, Object(l.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = f(x)
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
				r = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = n.n(r);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", a.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: s,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							...g
						} = this.props, h = this.state.isHovered, k = Object(d.a)({
							type: t.type,
							key: h ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(o.t, u({
							className: e,
							priority: g.shouldReverseColor ? o.c.Primary : o.c.Secondary,
							text: k,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: o.d.XSP
						}, g))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: s,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							toggleEmailVerificationTooltip: g,
							emailEnablementJoinFollowVoteVariant: h,
							...k
						} = this.props, _ = Object(d.a)({
							type: t.type,
							key: "subscribe"
						});
						return r.a.createElement(o.t, u({
							className: e,
							priority: k.shouldReverseColor ? o.c.Secondary : o.c.Primary,
							size: o.d.XSP,
							text: _,
							onClick: this.onClick
						}, k, {
							id: `subscribe-button-${a}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : r.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(a.c)(b))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/subredditLeaderboard.ts"),
				u = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reddit/endpoints/subreddit/local.ts"),
				b = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				p = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				g = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				h = n("./src/reddit/models/GoodContent/index.ts"),
				k = n("./src/reddit/selectors/platform.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(i.c)({
					isOnLeaderboardPage: e => !!Object(k.h)(e),
					isOnFrontpage: e => !!Object(k.g)(e)
				}),
				x = Object(a.b)(f, e => ({
					updateSubredditModels: t => e(Object(o.a)({
						subreddits: t
					}))
				})),
				y = async (e, t) => {
					const n = await Object(b.a)(e, t);
					if (n && n.ok) {
						const e = n.body,
							t = e && e.data && e.data.subredditLeaderboard;
						return Object(p.c)(t)
					}
				};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n, s) => {
						this.props.sendEvent(Object(g.c)(e, t, n, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, s)
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
					if (n === l.l) {
						const e = await Object(m.b)(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: s
						} = e;
						return this.props.updateSubredditModels(s), void this.setState(e => ({
							...e,
							[l.m]: {
								rankings: n,
								subreddits: s
							}
						}))
					}(n || n === l.f) && y(this.props.gqlContext(), {
						categoryId: n,
						filter: h.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits;
						n && this.props.updateSubredditModels(n);
						const s = this.props.category && this.props.category.name || l.c;
						t && n && this.setState(e => ({
							...e,
							[s]: {
								rankings: t,
								subreddits: n
							}
						}))
					}).catch(e => console.error("Error >>>", e))
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = e && e.displayText, s = t || l.c, a = this.state[s], i = a ? a.rankings : [], o = a ? a.subreddits : {}, c = i && i[0] && i[0].id, u = o && o[c], m = !(u && u.isNSFW) || this.props.isOver18;
					return r.a.createElement(d.b, _({
						categoryName: t,
						categoryDisplayText: n,
						onSendEventClick: this.sendEventClick,
						rankings: i,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: o
					}, this.props))
				}
			}
			t.a = x(Object(u.b)(Object(c.c)(N)))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				k = n.n(h);
			const _ = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, {
					className: k.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: Object(o.a)(k.a.subredditDetailsContainer, {
						[k.a.handleOverflow]: e.shouldShowJoinButton
					})
				}, e.large ? a.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: k.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: k.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: k.a.smallText
				}, s.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				f = e => {
					const t = Object(o.a)(k.a.subredditRankItem, e.large && k.a.large, {
							[k.a.handleOverflow]: e.isOnFrontpage
						}),
						n = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						r = e.delta ? n ? "#46D160" : "#EA0027" : "transparent",
						c = e.isOnLeaderboardPage && e.large;
					return a.a.createElement("li", {
						className: Object(o.a)(k.a.listItem, {
							[k.a.handleOverflow]: e.isOnFrontpage
						}),
						key: `${e.subreddit.displayText}-${e.large}`
					}, a.a.createElement(i.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: Object(o.a)(k.a.subredditRankItemColumn, {
							[k.a.handleOverflow]: e.isOnFrontpage
						})
					}, !e.hasTagline && a.a.createElement("span", {
						className: k.a.rankText
					}, s), !e.hasTagline && a.a.createElement(g.a, {
						className: k.a.arrow,
						name: n ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: r
						}
					}), a.a.createElement(_, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit,
						shouldShowJoinButton: (c || e.isOnFrontpage) && !e.subreddit.isSubscribed && !e.large
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: k.a.regularText
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)), (c || e.isOnFrontpage) && a.a.createElement("div", {
						className: Object(o.a)(e.large ? k.a.LeaderboardSubscribeButton : k.a.WidgetSubscribeButton, {
							[k.a.noDelta]: !e.shouldDisplayDelta
						})
					}, a.a.createElement(u.a, {
						getEventFactory: t => e.large ? Object(p.g)(e.subreddit.name, t) : Object(p.d)(e.subreddit.name, t),
						identifier: {
							name: e.subreddit.name,
							type: m.a.SUBREDDIT
						},
						size: b.d.XSP
					})))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = n.n(i);
			const d = e => r.a.createElement("div", {
				className: Object(a.a)(o.a.placeholderWrapper, e.fullWidth && o.a.fullWidth, e.large && o.a.large)
			}, r.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), r.a.createElement("span", {
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
				handleOverflow: "_1mEfDz-ZrTiw9KxnSpAXBy",
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
				fullWidth: "_1MG43W0qN1RYkFlwxoV_tQ",
				LeaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				leaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				noDelta: "-i9ZUMkweo4ZSITdQHUmw",
				WidgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8",
				widgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/first.js"),
				a = n.n(r),
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
				k = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/controls/Chip/index.tsx"),
				f = n("./src/reddit/helpers/name/index.ts"),
				x = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				N = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				E = n.n(N);
			const S = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && E.a.communityBannerPlaceholder,
						r = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						a = e.categoryName === h.m && h.j.path ? h.j.path : h.g;
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, E.a.communityBanner, n),
						style: r
					}, t && c.a.createElement("h2", {
						className: E.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.e),
						to: a
					}, e.categoryName ? ((e, t) => e === h.m ? s.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : s.fbt._("Top {categoryName} Communities", [s.fbt._param("categoryName", c.a.createElement("span", {
						className: E.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				O = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, r = !!(!e.rankings || !e.rankings.length) && E.a.communityBannerPlaceholder, a = n && Array.isArray(n) && 2 === n.length ? {
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, i = t.path ? t.path : h.g, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, E.a.taglineBanner, r)
					}, c.a.createElement("div", {
						className: E.a.taglineBannerBackground,
						style: a
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
					}, s.fbt._("{tagline}", [s.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : s.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				v = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const s = e.subreddits[t.id];
					return c.a.createElement(b.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.e, s.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s,
						isOnLeaderboardPage: e.isOnLeaderboardPage,
						isOnFrontpage: e.isOnFrontpage
					})
				}), !e.rankings.length && j),
				j = c.a.createElement(c.a.Fragment, null, o()(5, e => c.a.createElement(p.a, {
					key: e
				}))),
				T = e => {
					const t = e.isSecondaryButton ? k.q : k.n,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						r = e.isSecondaryButton ? e.categoryDisplayText ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? s.fbt._("See All {categoryName}", [s.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : s.fbt._("See All", null, {
							hk: "2OZax8"
						}) : s.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return c.a.createElement("div", {
						className: E.a.footer
					}, c.a.createElement(t, {
						className: E.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.e),
						to: e.to || "",
						style: n
					}, r))
				};

			function C(e, t) {
				return t || `${h.g}${Object(f.h)(e)}/`
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
					to: C(t.name, t.path),
					wide: t.name === h.m
				}, t.name ? t.name === h.m ? h.k : t.displayText || t.name : s.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: s,
					categoryDisplayText: r,
					category: i,
					categories: o
				} = e, l = Object(y.a)();
				Object(d.useEffect)(() => {
					l(Object(x.e)(s || h.e))
				}, []);
				const m = a()(n),
					b = t && m && t[m.id],
					p = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					k = b ? b.bannerBackgroundImage || p : void 0,
					_ = e.to || s && C(s, i.path),
					f = i && i.tagline,
					N = i && i.gradients && Array.isArray(i.gradients) && 2 === i.gradients.length ? i.gradients[1] : void 0;
				return c.a.createElement(g.a, {
					className: e.className,
					contentOnly: !0
				}, f && c.a.createElement(O, {
					category: i,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !f && c.a.createElement(S, {
					bannerBackgroundImage: k,
					categoryName: s,
					categoryDisplayText: r,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(v, {
					categoryName: s,
					hasTagline: !!f,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t,
					isOnLeaderboardPage: e.isOnLeaderboardPage,
					isOnFrontpage: e.isOnFrontpage
				}), c.a.createElement(T, {
					categoryName: s,
					categoryDisplayText: r,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: N,
					onSendEventClick: e.onSendEventClick,
					to: _
				}), o && c.a.createElement(w, {
					activeCategoryName: s,
					categories: o,
					hasTagline: !!f,
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
				return r
			})), n.d(t, "f", (function() {
				return a
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
				return k
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "u", (function() {
				return f
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = "DEFAULT",
				a = "",
				i = "All Communities",
				o = s.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				d = "top",
				c = "MOD",
				l = "moderating",
				u = s.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				b = "near-you",
				p = s.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				g = "/subreddits/leaderboard/",
				h = {
					id: a,
					name: a,
					path: `${g}`
				},
				k = {
					id: m,
					name: b,
					path: `${g}${b}/`
				},
				_ = [{
					name: "Sports",
					displayText: s.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${g}sports/`
				}, {
					name: "News",
					displayText: s.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${g}news/`
				}, {
					name: "Gaming",
					displayText: s.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${g}gaming/`
				}, {
					name: "Aww",
					displayText: s.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${g}aww/`
				}],
				f = {
					id: a,
					name: a,
					path: `${g}`,
					image: "popcorn-snoo",
					tagline: s.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				x = {
					id: m,
					name: b,
					path: `${g}${b}/`,
					image: "magnifying-glass-snoo",
					tagline: s.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				y = [{
					name: "Sports",
					displayText: s.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${g}sports/`,
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
					path: `${g}news/`,
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
					path: `${g}gaming/`,
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
					path: `${g}aww/`,
					image: "cat-snoo",
					tagline: s.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				N = [{
					name: "E3 Gaming",
					displayText: s.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${g}e3/`
				}],
				E = [{
					name: "Beauty",
					displayText: s.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${g}beauty/`,
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
					path: `${g}fashion/`,
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
					path: `${g}food/`,
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
					path: `${g}health_and_fitness/`,
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
					path: `${g}outdoors/`,
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
					path: `${g}relationships/`,
					image: "childrensbooks-snoo",
					tagline: s.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				S = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Chip/index.m.less"),
				d = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
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
				return r.a.createElement(i.t, c({
					className: Object(a.a)(d.a.Chip, {
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
				r = n("./src/redditGQL/operations/GetNearbySubreddits.json"),
				a = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			});
			async function o(e, t) {
				const n = await i(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(a.a)(t)
				}
			}
			t.a = i
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var s = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const r = {},
						a = [];
					for (const {
							node: i,
							...o
						} of t) {
						const e = Object(s.a)(i);
						r[e.id] = e, a.push(o)
					}
					return {
						pageInfo: n,
						rankings: a,
						subreddits: r
					}
				},
				a = e => {
					let {
						edges: t
					} = e;
					const n = {},
						r = [];
					for (const {
							node: a,
							...i
						} of t) {
						const e = Object(s.a)(a);
						n[e.id] = {
							...e,
							bannerBackgroundImage: a && a.styles && a.styles.bannerBackgroundImage
						}, r.push(i)
					}
					return {
						rankings: r,
						subreddits: n
					}
				},
				i = e => {
					let {
						edges: t,
						pageInfo: n
					} = e;
					const r = {},
						a = [];
					let i = 0;
					for (const {
							node: o
						} of t) {
						const e = Object(s.a)(o);
						r[e.id] = {
							...e,
							publicDescription: null == o ? void 0 : o.publicDescriptionText,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, a.push({
							id: e.id,
							rank: i
						}), i += 1
					}
					return {
						rankings: a,
						subreddits: r,
						pageInfo: n
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/categories.tsx"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...r.n(t),
					action: "click",
					noun: Object(s.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, n) => a => ({
					...r.n(a),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				o = (e, t) => n => ({
					...r.n(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t) => n => ({
					...r.n(n),
					action: "click",
					source: "leaderboard_subreddit",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
					}
				}),
				c = (e, t, n, a) => i => ({
					...r.n(i),
					action: "click",
					actionInfo: {
						...r.d(i),
						position: a && a
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				l = (e, t) => n => ({
					...r.n(n),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(e),
						name: t && t.toLowerCase()
					}
				}),
				u = (e, t) => n => ({
					...r.n(n),
					action: "click",
					source: "leaderboard_right_rail",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				r = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: s.R
				}
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/subredditLeaderboard.ts"),
				r = n("./src/reddit/selectors/category.ts");
			const a = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				o = (e, t) => t === s.q ? s.p : t === s.m ? s.l : e || s.c,
				d = (e, t) => {
					const n = e.subreddits.rankings,
						s = t && Object(r.e)(e, {
							categoryName: t
						}),
						a = n[o(s && s.id || null, t)];
					return !(!a || !a.length)
				}
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"6104afd3cdeb"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.4f946c57d78caca73ead.js.map