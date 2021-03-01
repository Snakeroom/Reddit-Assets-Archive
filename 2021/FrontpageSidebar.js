// https://www.redditstatic.com/desktop2x/FrontpageSidebar.4ab45ce2f43fe184a3d0.js
// Retrieved at 3/1/2021, 3:10:04 PM by Reddit Dataminer v1.0.0
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
		"./src/graphql/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				r = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				o = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(s.a)(a.n),
				l = Object(s.a)(a.m),
				m = Object(s.a)(a.l),
				u = Object(s.a)(a.a),
				p = Object(s.a)(a.b),
				b = Object(s.a)(a.c),
				g = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					n(c());
					const g = t === r.i ? async function() {
						const t = await Object(i.a)(a(), e);
						if (!t.ok) {
							const e = t.error;
							return n(m({
								error: e
							})), null
						}
						const s = t.body,
							r = s && s.data && s.data.nearbySubreddits;
						return Object(d.a)(r)
					}: async function() {
						const t = await Object(o.a)(a(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(m({
								error: e
							}))
						}
						const s = t.body,
							r = s && s.data && s.data.subredditLeaderboard;
						return Object(d.b)(r)
					}, h = await g();
					if (!h) return;
					const {
						pageInfo: _,
						rankings: f,
						subreddits: k
					} = h;
					n(u({
						subreddits: k
					})), n(p({
						categoryRankingsKey: t,
						rankings: f
					})), n(b({
						categoryRankingsKey: t,
						pageInfo: _
					})), n(l())
				}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/random.js"),
				r = n.n(a),
				i = n("./node_modules/lodash/shuffle.js"),
				o = n.n(i),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/subreddit.ts"),
				p = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				b = n("./src/reddit/components/IdCard/async.tsx"),
				g = n("./node_modules/react-router-redux/es/index.js"),
				h = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				E = n("./src/reddit/components/PremiumCTA/index.m.less"),
				y = n.n(E);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class N extends c.a.Component {
				render() {
					const {
						className: e,
						isInIcons2020: t,
						onClickPremium: n
					} = this.props;
					return c.a.createElement(h.a, null, c.a.createElement(_.a, {
						className: e,
						contentOnly: !0
					}, c.a.createElement("div", {
						className: y.a.wrapper
					}, t ? c.a.createElement(k.a, {
						name: "premium",
						isFilled: !0,
						className: y.a.icon
					}) : c.a.createElement(x.a, {
						className: y.a.icon
					}), c.a.createElement("div", {
						className: y.a.content
					}, c.a.createElement("div", {
						className: y.a.title
					}, S._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), c.a.createElement("div", {
						className: y.a.description
					}, S._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					}))), c.a.createElement(f.h, {
						className: y.a.cta,
						onClick: n
					}, S._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var j = Object(l.b)(void 0, e => ({
					onClickPremium: () => e(Object(g.b)("/premium"))
				}))(N),
				C = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				O = n("./src/reddit/controls/InternalLink/index.tsx"),
				T = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				w = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				I = n.n(w);
			const F = ({
					to: e,
					title: t
				}) => c.a.createElement(v.a, {
					subredditName: t,
					tooltipPosition: ["right", "top"]
				}, c.a.createElement(O.a, {
					className: I.a.Link,
					to: e,
					title: t
				}, t)),
				P = ({
					title: e,
					isOpened: t,
					isExpanded: n,
					children: a,
					onToggle: r,
					onExpand: i
				}) => c.a.createElement("div", {
					className: Object(C.a)(I.a.Section, {
						[I.a.opened]: t,
						[I.a.expanded]: n
					})
				}, c.a.createElement("div", {
					className: I.a.SectionHeader,
					onClick: r
				}, c.a.createElement("div", {
					className: I.a.SectionTitle
				}, e), c.a.createElement(T.a, {
					className: I.a.SectionChevron
				})), c.a.createElement("div", {
					className: I.a.SectionBody
				}, c.a.createElement("div", {
					className: I.a.SectionContent
				}, a), c.a.createElement("div", {
					className: I.a.SectionFooter
				}, c.a.createElement(f.o, {
					className: I.a.SectionButton,
					onClick: i
				}, n ? s.fbt._("Less", null, {
					hk: "PF0lJ"
				}) : s.fbt._("See more", null, {
					hk: "439kAh"
				})))));
			class A extends c.a.Component {
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
					}) => c.a.createElement(F, {
						key: t,
						to: e,
						title: t
					}), this.renderSection = (e, t) => c.a.createElement(P, {
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
					if (t) return c.a.createElement(_.a, {
						className: Object(C.a)(I.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var L = A,
				B = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				R = n("./src/reddit/components/SidebarContainer/index.tsx"),
				D = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				W = n("./node_modules/lodash/sampleSize.js"),
				U = n.n(W),
				G = n("./node_modules/request-idle-callback/index.js"),
				q = n("./src/lib/constants/index.ts"),
				Q = n("./src/reddit/components/SubredditIcon/index.tsx"),
				V = n("./src/reddit/constants/localStorage.ts"),
				M = n("./src/reddit/contexts/ApiContext.tsx"),
				J = n("./src/reddit/featureFlags/component.tsx"),
				K = n("./src/reddit/helpers/localStorage/index.ts"),
				Z = n("./src/reddit/helpers/name/index.ts"),
				H = n("./src/lib/makeApiRequest/index.ts"),
				X = n("./src/lib/omitHeaders/index.ts"),
				Y = n("./src/reddit/constants/headers.ts");
			const z = e => Object(H.a)(Object(X.a)(e, [Y.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: q.cb.GET,
				type: "json"
			});
			var $ = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 3, se = 30 * q.db, ae = "SubredditAdoption";
			class re extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = re.cachedData || Object(K.q)(V.a.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > se) {
						const t = await z(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(K.hb)(V.a.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return re.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(G.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: U()(e, ne)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? c.a.createElement("div", {
						className: ee.a.container
					}, c.a.createElement("div", {
						className: ee.a.main
					}, c.a.createElement("div", {
						className: ee.a.title
					}, c.a.createElement(Q.b, {
						className: ee.a.icon
					}), te._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), c.a.createElement("div", {
						className: ee.a.description
					}, te._("{subreddits list} and more are looking for moderators!", [te._param("subreddits list", c.a.createElement("strong", null, e.map(Z.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), c.a.createElement(f.k, {
						className: ee.a.button,
						to: `/r/${ae}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, te._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			re.cachedData = null;
			var ie = Object(J.a)("srAdoptionWeek", Object(M.b)(re)),
				oe = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				de = n("./src/reddit/actions/post.ts"),
				ce = n("./src/reddit/components/MiniPost/index.tsx"),
				le = n("./src/reddit/components/Widgets/Base/index.tsx");
			class me extends c.a.Component {
				render() {
					return c.a.createElement("div", null, c.a.createElement(le.a, null, this.props.headerText), this.props.posts.map(e => c.a.createElement(ce.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var ue = me,
				pe = n("./src/reddit/helpers/overlay/index.ts"),
				be = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				ge = n.n(be),
				he = n("./src/lib/lessComponent.tsx");
			const _e = Object(l.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink)),
					clearLinks: () => e(Object(de.o)())
				})),
				fe = he.a.button("ClearButton", ge.a);
			class ke extends c.a.Component {
				render() {
					return c.a.createElement(le.b, null, c.a.createElement(ue, {
						className: this.props.className,
						headerText: s.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), c.a.createElement(fe, {
						onClick: this.props.clearLinks
					}, s.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var xe = _e(ke),
				Ee = n("./src/reddit/selectors/posts.ts");
			const ye = Object(m.c)({
				recentPosts: Ee.R
			});
			var Se = Object(l.b)(ye, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink))
				}))(({
					className: e,
					recentPosts: t
				}) => t && t.length ? c.a.createElement(h.a, null, c.a.createElement(xe, {
					className: e,
					headerText: s.fbt._("Recent posts", null, {
						hk: "1olaOT"
					}),
					posts: t
				})) : null),
				Ne = n("./src/reddit/components/TrackingHelper/index.tsx"),
				je = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Ce = n("./src/reddit/selectors/subreddit.ts");
			var ve = Object(l.b)(Object(m.c)({
					communities: Ce.f
				}))(Object(Ne.c)(e => c.a.createElement(je.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				Oe = n("./src/reddit/constants/experiments.ts"),
				Te = n("./src/reddit/constants/subredditLeaderboard.ts"),
				we = n("./src/reddit/constants/tracking.ts"),
				Ie = n("./src/reddit/selectors/telemetry.ts"),
				Fe = n("./src/reddit/selectors/widgets.ts"),
				Pe = n("./src/telemetry/models/Subreddit.ts");
			const Ae = e => t => n => ({
					...Ie.defaults(n),
					...Object(Fe.b)(n, e),
					source: "trending_community_card",
					action: we.c.CLICK,
					noun: Object(Pe.getSubscribeEventNoun)(e.type, t)
				}),
				Le = e => t => ({
					...Ie.defaults(t),
					...Object(Fe.b)(t, e),
					source: "trending_community_card",
					action: we.c.CLICK,
					noun: "community"
				});
			var Be = n("./src/reddit/models/GoodContent/index.ts"),
				Re = n("./src/reddit/helpers/chooseVariant/index.ts");

			function De(e) {
				return Object(Re.c)(e, {
					experimentEligibilitySelector: Re.a,
					experimentName: Oe.q
				})
			}
			var We = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				Ue = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ge = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				qe = n("./src/reddit/selectors/seo/linksModule.ts"),
				Qe = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				Ve = n("./src/reddit/selectors/user.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var Me = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const Je = "c1020",
				Ke = "videos",
				Ze = Object(m.c)({
					isMod: Ve.K,
					isLoggedIn: Ve.I,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					trendingSubredditIds: Ce.bb,
					currentUser: Ve.i,
					frontpageLinks: qe.b,
					isOver18: Ve.bb,
					isUISimplificationAllItemsVariant: Ge.b,
					isInBFFSLeaderboardExperiment: function(e) {
						return De(e) === Oe.p.RotateEven
					},
					isInIcons2020: We.b,
					bffsLeaderboardVariant: De,
					inRpanTopVideoEntrypointExperiment: Ue.d,
					rankings: e => Object(Ce.N)(e, Je)
				}),
				He = e => !((e.inRpanTopVideoEntrypointExperiment ? !e.rankings : !e.trendingSubredditIds.length) || e.currentUser && !e.currentUser.showTrending || e.isUISimplificationAllItemsVariant),
				Xe = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Ye = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				ze = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: s
					} = e;
					let a, i, d, c, l;
					n && t === Oe.p.RotateEven ? (a = Te.q, i = Te.k, d = Te.o, c = Te.a) : (a = Te.p, i = Te.h, d = Te.n, c = []), l = [a, ...c, ...d], s && l.unshift(i);
					const m = l[r()(l.length - 1)];
					l = [], m.id !== a.id && l.push(a), s && m.id !== i.id && l.push(i);
					let u = [...c, ...d];
					return u = u.filter(e => e.id !== m.id), l = [...l, ...o()(u).slice(0, 4 - l.length)], {
						category: m,
						categories: l
					}
				};
			class $e extends c.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.getVideoSubredditIds = () => {
						if (!this.props.rankings) return;
						let e = [];
						const t = {
							t5_2fqotw: "RedditMasterClasses",
							t5_2ry83: "whereintheworld",
							t5_2dptgf: "TheYouShow",
							t5_2dptrd: "RedditSessions",
							t5_2r7gr: "talentShow",
							t5_2dpthm: "RedditInTheKitchen",
							t5_2dpu97: "GlamourSchool",
							t5_2q0682: "readwithme",
							t5_2dptqa: "TheGamerLounge",
							t5_32g3v: "AnimalsOnReddit",
							t5_2vh7th: "tabletoplive",
							t5_2tmxc: "shortcircuit",
							t5_2dpsxy: "TheArtistStudio"
						};
						if (!(e = this.props.rankings.slice(0, 5).map(e => e.id)).some(e => -1 !== Object.keys(t).indexOf(e))) {
							const n = Object.keys(t)[r()(Object.keys(t).length - 1)];
							e.push(n), this.props.subredditAboutRequested(t[n])
						}
						return e
					};
					const {
						category: t,
						categories: n
					} = ze(e);
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
						isOver18: r,
						listingName: i,
						trendingSubredditIds: o,
						isUISimplificationAllItemsVariant: d,
						inRpanTopVideoEntrypointExperiment: l,
						isInIcons2020: m
					} = this.props, {
						category: u,
						categories: p
					} = this.state, g = !d, _ = !d, f = this.getVideoSubredditIds();
					return c.a.createElement(R.a, {
						className: t
					}, g && c.a.createElement(oe.a, {
						categories: p,
						category: u,
						first: 5,
						isOver18: r,
						shouldDisplayDelta: !this.props.isMod && u.id !== Te.i,
						to: u.path
					}), c.a.createElement(B.a, {
						placement: q.c.ABOVE_THE_FOLD,
						listingName: i,
						removeSidebarSpacer: !g,
						position: Me.a.FIRST,
						sizes: q.h,
						placementIndex: e++
					}), Ye(this.props) && c.a.createElement(j, {
						isInIcons2020: m
					}), He(this.props) && c.a.createElement(h.a, null, c.a.createElement(ve, {
						getClickEventFactory: Le,
						getSubscribeEventFactoryHandler: Ae,
						subredditIds: l && f ? f : o,
						title: l ? s.fbt._("Top Video Communities", null, {
							hk: "SSdYX"
						}) : s.fbt._("Trending Communities", null, {
							hk: "2WTgEw"
						})
					})), a && c.a.createElement(h.a, null, c.a.createElement(b.a, {
						listingName: i
					})), Xe(this.props) && c.a.createElement(Se, null), n && _ && c.a.createElement(h.a, null, c.a.createElement(L, {
						links: n
					})), c.a.createElement(D.a, {
						adComponent: c.a.createElement(B.a, {
							placement: q.c.BELOW_THE_FOLD,
							listingName: i,
							position: Me.a.BOTTOM,
							sizes: q.n,
							placementIndex: e++
						})
					}, a && c.a.createElement(ie, null)))
				}
			}
			const et = Object(l.b)(Ze, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: Je,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: Be.b.PG13
							},
							isOnlyModIncluded: !1
						},
						n = Object(Qe.d)(Je, Ke);
					e(Object(p.a)(t, n))
				},
				subredditAboutRequested: t => e(Object(u.t)(t))
			}));
			t.default = et($e)
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
				p = n("./src/reddit/helpers/overlay/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/MiniPost/index.m.less"),
				_ = n.n(h);
			const f = Object(o.a)(e => e, b.I, b.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(g.L)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				k = Object(i.b)(f, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
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
			t.a = k(x)
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
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							s = this.props.category && this.props.category.name || o.b;
						t && n && this.setState(e => ({
							...e,
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
						this.setState(e => ({
							...e,
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
					return a.a.createElement(r.b, b({
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
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				m = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/icons/svgs/Triangle/index.tsx"),
				b = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				g = n.n(b);
			const h = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(l.b, {
					className: g.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("span", {
					className: g.a.subredditDetailsContainer
				}, e.large ? r.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, r.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText)) : r.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText), null === e.rank && r.a.createElement("span", {
					className: g.a.smallText
				}, s.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				_ = e => {
					const t = Object(m.b)(),
						n = Object(o.a)(g.a.subredditRankItem, e.large && g.a.large),
						s = e.delta && e.delta > 0,
						a = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						c = e.delta ? s ? "#46D160" : "#EA0027" : "transparent";
					return r.a.createElement("li", {
						className: g.a.listItem,
						key: e.subreddit.displayText
					}, r.a.createElement(i.a, {
						className: n,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, r.a.createElement("div", {
						className: g.a.subredditRankItemColumn
					}, !e.hasTagline && r.a.createElement("span", {
						className: g.a.rankText
					}, a), !e.hasTagline && t ? r.a.createElement(u.a, {
						className: g.a.arrow,
						name: s ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: c
						}
					}) : r.a.createElement(p.a, {
						className: Object(o.a)(g.a.arrow, !s && g.a.negative),
						style: {
							fill: c
						}
					}), r.a.createElement(h, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && r.a.createElement("span", {
						className: g.a.regularText
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
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/subredditLeaderboard.ts"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				k = n("./src/reddit/controls/Chip/index.m.less"),
				x = n.n(k);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var y = e => {
					if (Object(f.a)()) {
						const t = e.to ? {
							kind: _.a.InternalLink,
							to: e.to
						} : {};
						return c.a.createElement(_.q, E({
							className: Object(u.a)(x.a.Chip2020, {
								[x.a.isWide]: e.wide
							}),
							priority: _.b.Tertiary,
							size: _.c.XS,
							text: e.children
						}, t))
					}
					const t = e.to ? l.a : "div",
						n = Object(u.a)(x.a.chip, e.className);
					return c.a.createElement(t, {
						className: n,
						to: e.to || ""
					}, e.children)
				},
				S = n("./src/reddit/helpers/name/index.ts"),
				N = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				v = n.n(C);
			const O = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && v.a.communityBannerPlaceholder,
						a = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
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
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, i = t.path ? t.path : h.f, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
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
						src: `${m.a.assetPath}/img/discovery/${o}`
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
					return c.a.createElement(p.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.d, s.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && I),
				I = c.a.createElement(c.a.Fragment, null, o()(5, e => c.a.createElement(b.a, {
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

			function P(e, t) {
				return t || `${h.f}${Object(S.g)(e)}/`
			}
			const A = e => {
				return c.a.createElement("div", {
					className: v.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: v.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || h.d, void 0, n))(t.name, n + 1)
				}, c.a.createElement(y, {
					className: e.hasTagline ? v.a.taglineChip : v.a.chip,
					key: t.name,
					to: P(t.name, t.path),
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
					o(Object(N.d)(s || h.d))
				}, []);
				const l = r()(n),
					u = t && l && t[l.id],
					p = `${m.a.assetPath}/img/leaderboard/banner-background.png`,
					b = u ? u.bannerBackgroundImage || p : void 0,
					_ = e.to || s && P(s, a.path),
					f = a && a.tagline,
					k = a && a.gradients && Array.isArray(a.gradients) && 2 === a.gradients.length ? a.gradients[1] : void 0;
				return c.a.createElement(g.a, {
					className: e.className,
					contentOnly: !0
				}, f && c.a.createElement(T, {
					category: a,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !f && c.a.createElement(O, {
					bannerBackgroundImage: b,
					categoryName: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(w, {
					categoryName: s,
					hasTagline: !!f,
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
				}), i && c.a.createElement(A, {
					activeCategoryName: s,
					categories: i,
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
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "g", (function() {
				return k
			}));
			const s = "DEFAULT",
				a = "",
				r = "All Communities",
				i = "top",
				o = "MOD",
				d = "moderating",
				c = "LOCAL_COMMUNITIES",
				l = "near-you",
				m = "/subreddits/leaderboard/",
				u = {
					id: a,
					name: a,
					path: `${m}`
				},
				p = {
					id: c,
					name: l,
					path: `${m}${l}/`
				},
				b = [{
					name: "Sports",
					id: "c1015",
					path: `${m}sports/`
				}, {
					name: "News",
					id: "c1009",
					path: `${m}news/`
				}, {
					name: "Gaming",
					id: "c1019",
					path: `${m}gaming/`
				}, {
					name: "Aww",
					id: "c1000",
					path: `${m}aww/`
				}],
				g = {
					id: a,
					name: a,
					path: `${m}`,
					image: "popcorn-snoo",
					tagline: "Trending communities are so hot right now",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				h = {
					id: c,
					name: l,
					path: `${m}${l}/`,
					image: "magnifying-glass-snoo",
					tagline: "Local communities —\nSee what’s near you",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				_ = [{
					name: "Sports",
					id: "c1015",
					path: `${m}sports/`,
					image: "basketball-snoo",
					tagline: "Sports communities are the real MVP",
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					id: "c1009",
					path: `${m}news/`,
					image: "newsie-snoo",
					tagline: "News communities to keep you informed",
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					id: "c1019",
					path: `${m}gaming/`,
					image: "esports-snoo",
					tagline: "Gaming communities taking it to the next level",
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					id: "c1000",
					path: `${m}aww/`,
					image: "cat-snoo",
					tagline: "Aww communities —\nget in on this cuteness",
					gradients: ["#F3B54F", "#EC5428"]
				}],
				f = [{
					name: "Beauty",
					id: "c1023",
					path: `${m}beauty/`,
					image: "makeup-snoo",
					tagline: "Beauty communities make us all look good",
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					id: "c1002",
					path: `${m}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: "Fashion communities are always in style",
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					id: "c1003",
					path: `${m}food/`,
					image: "cookbooks-snoo",
					tagline: "Food communities to make you go mmmm",
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					id: "c1006",
					path: `${m}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: "Fitness communities that know how to work it",
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					id: "c1010",
					path: `${m}outdoors/`,
					image: "telescope-snoo",
					tagline: "Outdoor communities —\nthey’re really out there",
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					id: "c1013",
					path: `${m}relationships/`,
					image: "childrensbooks-snoo",
					tagline: "Relationship communities understand all the feels",
					gradients: ["#F08C3A", "#D72E33"]
				}],
				k = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/graphql/operations/GetNearbySubreddits.json"),
				a = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/graphql/operations/TopSubreddits.json"),
				a = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, {
				...s,
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
			const a = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						a = [];
					for (const {
							node: r,
							...i
						} of e) {
						const e = Object(s.a)(r);
						n[e.id] = e, a.push(i)
					}
					return {
						pageInfo: t,
						rankings: a,
						subreddits: n
					}
				},
				r = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: a,
							...r
						} of e) {
						const e = Object(s.a)(a);
						t[e.id] = {
							...e,
							bannerBackgroundImage: a && a.styles && a.styles.bannerBackgroundImage
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
						a = [];
					let r = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(s.a)(i);
						n[e.id] = {
							...e,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, a.push({
							id: e.id,
							rank: r
						}), r += 1
					}
					return {
						rankings: a,
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
			var s = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...a.defaults(t),
					action: "click",
					noun: Object(s.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, n) => r => ({
					...a.defaults(r),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				o = (e, t) => n => ({
					...a.defaults(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(s.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, n, r) => i => ({
					...a.defaults(i),
					action: "click",
					actionInfo: {
						...a.actionInfo(i),
						position: r && r
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(s.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => ({
					...a.defaults(n),
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
				o = (e, t) => t === s.m ? s.l : t === s.j ? s.i : e || s.b,
				d = (e, t) => {
					const n = e.subreddits.rankings,
						s = t && Object(a.f)(e, {
							categoryName: t
						}),
						r = n[o(s && s.id || null, t)];
					return !(!r || !r.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.4ab45ce2f43fe184a3d0.js.map