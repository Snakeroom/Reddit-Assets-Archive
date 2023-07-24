// https://www.redditstatic.com/desktop2x/FrontpageSidebar.521972540deb1ef0704d.js
// Retrieved at 7/24/2023, 1:20:03 PM by Reddit Dataminer v1.0.0
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
				_ = n("./src/reddit/selectors/experiments/econ/index.ts"),
				h = n("./src/reddit/components/PremiumCTA/index.m.less"),
				g = n.n(h);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(o.c)({
				isCoinsSunsetEnabled: _.d
			});
			class N extends a.a.Component {
				render() {
					const {
						className: e,
						isCoinsSunsetEnabled: t,
						onClickPremium: n
					} = this.props;
					return a.a.createElement(m.a, null, a.a.createElement(u.a, {
						className: e,
						contentOnly: !0
					}, a.a.createElement("div", {
						className: g.a.wrapper
					}, a.a.createElement("div", {
						className: g.a.contentWrapper
					}, a.a.createElement(p.a, {
						name: "premium",
						isFilled: !0,
						className: g.a.icon
					}), a.a.createElement("div", {
						className: g.a.content
					}, a.a.createElement("div", {
						className: g.a.title
					}, x._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), a.a.createElement("div", {
						className: g.a.description
					}, t ? x._("The best Reddit experience", null, {
						hk: "2b8OUU"
					}) : x._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					})))), a.a.createElement(b.k, {
						isFullWidth: !0,
						onClick: n
					}, x._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var f = Object(r.b)(k, e => ({
					onClickPremium: () => e(Object(c.b)("/premium"))
				}))(N),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/lib/classNames/index.ts"),
				O = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				C = n("./src/reddit/endpoints/goodContent/index.ts"),
				F = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				y = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				j = n.n(y);
			const w = e => {
					let {
						to: t,
						title: n
					} = e;
					return a.a.createElement(O.a, {
						subredditName: n,
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(v.default, {
						className: j.a.Link,
						to: t,
						title: n
					}, n))
				},
				P = e => {
					let {
						title: t,
						isOpened: n,
						isExpanded: s,
						children: r,
						onToggle: i,
						onExpand: o
					} = e;
					return a.a.createElement("div", {
						className: Object(S.a)(j.a.Section, {
							[j.a.opened]: n,
							[j.a.expanded]: s
						})
					}, a.a.createElement("div", {
						className: j.a.SectionHeader,
						onClick: i
					}, a.a.createElement("div", {
						className: j.a.SectionTitle
					}, t), a.a.createElement(F.a, {
						className: j.a.SectionChevron
					})), a.a.createElement("div", {
						className: j.a.SectionBody
					}, a.a.createElement("div", {
						className: j.a.SectionContent
					}, r), a.a.createElement("div", {
						className: j.a.SectionFooter
					}, a.a.createElement(b.r, {
						className: j.a.SectionButton,
						onClick: o
					}, s ? E.fbt._("Less", null, {
						hk: "PF0lJ"
					}) : E.fbt._("See more", null, {
						hk: "439kAh"
					})))))
				};
			class T extends a.a.Component {
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
						return a.a.createElement(w, {
							key: n,
							to: t,
							title: n
						})
					}, this.renderSection = (e, t) => a.a.createElement(P, {
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
					if (t) return a.a.createElement(u.a, {
						className: Object(S.a)(j.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var A = T,
				L = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				R = n("./src/reddit/components/SidebarContainer/index.tsx"),
				U = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				B = n("./node_modules/lodash/sampleSize.js"),
				W = n.n(B),
				I = n("./node_modules/request-idle-callback/index.js"),
				D = n("./src/lib/constants/index.ts"),
				K = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Q = n("./src/reddit/constants/localStorage.ts"),
				G = n("./src/reddit/contexts/ApiContext.tsx"),
				H = n("./src/reddit/featureFlags/component.tsx"),
				J = n("./src/reddit/helpers/localStorage/index.ts"),
				M = n("./src/reddit/helpers/name/index.ts"),
				X = n("./src/lib/makeApiRequest/index.ts"),
				q = n("./src/lib/omitHeaders/index.ts"),
				Z = n("./src/reddit/constants/headers.ts");
			const z = e => Object(X.a)(Object(q.a)(e, [Z.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: D.ob.GET,
				type: "json"
			});
			var V = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				Y = n.n(V);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = 3, te = 30 * D.pb, ne = "SubredditAdoption";
			class se extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = se.cachedData || Object(J.G)(Q.b.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > te) {
						const t = await z(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(J.Lb)(Q.b.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return se.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(I.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: W()(e, ee)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? a.a.createElement("div", {
						className: Y.a.container
					}, a.a.createElement("div", {
						className: Y.a.main
					}, a.a.createElement("div", {
						className: Y.a.title
					}, a.a.createElement(K.b, {
						className: Y.a.icon
					}), $._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), a.a.createElement("div", {
						className: Y.a.description
					}, $._("{subreddits list} and more are looking for moderators!", [$._param("subreddits list", a.a.createElement("strong", null, e.map(M.d).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), a.a.createElement(b.n, {
						className: Y.a.button,
						to: `/r/${ne}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, $._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			se.cachedData = null;
			var ae = Object(H.a)("srAdoptionWeek", Object(G.b)(se)),
				re = n("./src/reddit/actions/post.ts"),
				ie = n("./src/reddit/components/MiniPost/index.tsx"),
				oe = n("./src/reddit/components/Widgets/Base/index.tsx");
			class le extends a.a.Component {
				render() {
					return a.a.createElement("div", null, a.a.createElement(oe.a, null, this.props.headerText), this.props.posts.map(e => a.a.createElement(ie.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var de = le,
				ce = n("./src/reddit/helpers/overlay/index.ts"),
				me = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				ue = n.n(me),
				be = n("./src/lib/lessComponent.tsx");
			const pe = Object(r.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(ce.a)(t.permalink)),
					clearLinks: () => e(Object(re.s)())
				})),
				_e = be.a.button("ClearButton", ue.a);
			class he extends a.a.Component {
				render() {
					return a.a.createElement(oe.b, null, a.a.createElement(de, {
						className: this.props.className,
						headerText: E.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), a.a.createElement(_e, {
						onClick: this.props.clearLinks
					}, E.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var ge = pe(he),
				xe = n("./src/reddit/selectors/posts.ts");
			const ke = Object(o.c)({
				recentPosts: xe.Q
			});
			var Ne = Object(r.b)(ke, (e, t) => ({
					openLightbox: t => () => e(Object(ce.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: n
					} = e;
					return n && n.length ? a.a.createElement(m.a, null, a.a.createElement(ge, {
						className: t,
						headerText: E.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: n
					})) : null
				}),
				fe = n("./src/config.ts"),
				Ee = n("./src/lib/env/index.ts"),
				Se = n("./src/reddit/controls/Chip/index.m.less"),
				Oe = n.n(Se);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ce = e => {
					const t = e.to ? {
						kind: b.b.InternalLink,
						to: e.to
					} : {};
					return a.a.createElement(b.t, ve({
						className: Object(S.a)(Oe.a.Chip, {
							[Oe.a.isWide]: e.wide
						}),
						onClick: e.onClick,
						priority: b.c.Tertiary,
						size: b.d.XS,
						text: e.children
					}, t))
				},
				Fe = n("./src/reddit/helpers/trackers/widgets.ts"),
				ye = n("./src/reddit/hooks/useTracking.ts");
			const je = [{
				getName: () => E.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => E.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => E.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => E.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => E.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => E.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => E.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => E.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => E.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => E.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => E.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => E.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => E.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => E.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => E.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => E.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => E.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => E.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => E.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => E.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => E.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => E.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => E.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => E.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => E.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => E.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => E.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => E.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => E.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => E.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => E.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => E.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => E.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => E.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => E.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => E.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => E.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => E.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => E.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => E.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => E.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => E.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var we = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Pe = n.n(we);
			const Te = () => {
					const e = `${fe.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = E.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						n = {
							backgroundImage: `url(${e})`
						};
					return a.a.createElement("div", {
						className: Pe.a.banner,
						style: n
					}, a.a.createElement("h2", {
						className: Pe.a.bannerText
					}, t))
				},
				Ae = e => `/t/${e}?activeTab=communities`,
				Le = e => {
					const t = e.topic.getName();
					return a.a.createElement("div", {
						className: Pe.a.itemContainer
					}, a.a.createElement(Ce, {
						to: Ae(e.topic.url),
						onClick: () => e.sendEvent(Object(Fe.c)(t))
					}, t))
				};
			var Re = a.a.memo(e => {
					const t = Object(ye.a)();
					Object(s.useEffect)(() => t(Object(Fe.d)()), []);
					const n = je.map(e => ({
						value: e,
						sort: Object(Ee.d)() ? .5 : Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return a.a.createElement(u.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, a.a.createElement(Te, null), a.a.createElement("div", {
						className: Pe.a.container
					}, n.map(e => a.a.createElement(Le, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Ue = n("./src/reddit/constants/experiments.ts"),
				Be = n("./src/reddit/helpers/chooseVariant/index.ts"),
				We = n("./src/reddit/selectors/user.ts");
			var Ie = n("./src/reddit/selectors/seo/linksModule.ts"),
				De = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const Ke = Object(o.c)({
					isLoggedIn: We.R,
					currentUser: We.m,
					frontpageLinks: Ie.b,
					shouldShowTopicsWidget: e => (function(e) {
						return Object(Be.c)(e, {
							experimentEligibilitySelector: We.S,
							experimentName: Ue.cd
						}) === Ue.Zd
					})(e),
					isNavbarLikeMwebEnabled: i.a
				}),
				Qe = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				Ge = e => !(!e.currentUser || e.currentUser.isGold);
			class He extends a.a.Component {
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
					return a.a.createElement(R.a, {
						className: t,
						"data-testid": "frontpage-sidebar"
					}, a.a.createElement(L.a, {
						placement: D.e.ABOVE_THE_FOLD,
						listingName: r,
						removeSidebarSpacer: !1,
						position: De.a.FIRST,
						sizes: D.j,
						placementIndex: e++
					}), Ge(this.props) && a.a.createElement(f, null), i && a.a.createElement(m.a, null, a.a.createElement(Re, null)), s && a.a.createElement(m.a, null, a.a.createElement(d.a, {
						listingName: r
					})), Qe(this.props) && a.a.createElement(Ne, null), n && l && a.a.createElement(m.a, null, a.a.createElement(A, {
						links: n
					})), a.a.createElement(U.a, {
						adComponent: a.a.createElement(L.a, {
							placement: D.e.BELOW_THE_FOLD,
							listingName: r,
							position: De.a.BOTTOM,
							sizes: D.p,
							placementIndex: e++
						})
					}, s && a.a.createElement(ae, null)))
				}
			}
			const Je = Object(r.b)(Ke, e => ({
				subredditAboutRequested: t => e(Object(l.u)(t))
			}));
			t.default = Je(He)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.521972540deb1ef0704d.js.map