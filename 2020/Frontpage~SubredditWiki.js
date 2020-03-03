// https://www.redditstatic.com/desktop2x/Frontpage~SubredditWiki.0cdbea732fc71104c067.js
// Retrieved at 3/2/2020, 7:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~SubredditWiki"], {
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/doubleclickForPublishers/index.ts"),
				l = n("./src/lib/intersectionObserver/index.ts"),
				m = n("./src/lib/objectSelector/index.ts"),
				u = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/components/BannerAd/index.m.less"),
				y = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const f = x.a.div("Container", y.a),
				v = x.a.div("LoadingHitbox", y.a),
				C = e => setTimeout(() => {
					throw e
				}, 0);
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					C(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: n,
						sizes: s = []
					} = this.props;
					try {
						return this.frame && c.a(this.frame, {
							id: e,
							slot: t,
							properties: n,
							sizes: s
						})
					} catch (r) {
						C(r)
					}
				}
				destroySlot() {
					try {
						this.frame && c.b(this.frame)
					} catch (e) {
						C(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(h.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						C(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && c.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && c.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: n
					} = this.props;
					return t ? r.a.createElement(f, {
						"data-slot": t
					}, r.a.createElement(v, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: n,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: n
					})
				}
			}
			O.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(a.b)(() => Object(i.c)({
				properties: Object(m.a)((e, t) => {
					const n = e.platform.currentPage;
					if (!n) return {};
					const s = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(o.a)("".concat(s).concat(n.url), n.queryParams), Object(p.y)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const n = e.platform.currentPage;
					return n && n.meta ? c.c(t.listingName, n.meta.name) : ""
				}
			}))(Object(b.b)(O))
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/app/strings/index.ts"),
				r = n("./src/config.ts"),
				a = n("./node_modules/lodash/random.js"),
				i = n.n(a),
				o = n("./node_modules/react/index.js"),
				d = n.n(o),
				c = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/lessComponent.tsx");
			const u = m.a.div("BannerContainer", l.a),
				p = m.a.wrapped(e => d.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", l.a),
				b = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			t.a = () => {
				const e = i()(0, b.length - 1),
					{
						img: t,
						href: n
					} = b[e];
				return d.a.createElement(u, {
					className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
					"data-before-content": Object(s.a)("en", "sidebar.sponsored")
				}, d.a.createElement("a", {
					href: r.a.redditUrl + n,
					target: "_blank"
				}, d.a.createElement(p, {
					src: r.a.assetPath + t
				})))
			}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("IdCard~SubredditWiki"), n.e("IdCard")]).then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/components/BannerAd/index.tsx"),
				l = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = n("./src/reddit/helpers/adCount/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				g = n.n(h),
				y = n("./src/lib/lessComponent.tsx");
			const x = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), n.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				f = Object(o.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: s
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(p.a)(n, r, s)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				v = Object(i.b)(f),
				C = y.a.wrapped(c.a, "BannerAd", g.a),
				O = y.a.wrapped(u.a, "ThemedWidget", g.a),
				E = y.a.div("SidebarAdPlaceholder", g.a),
				_ = (e, t, n) => {
					let s = "";
					return t && (s += "overlay-"), s += "sidebar-".concat(e), null != n && (s += "-".concat(n)), s
				},
				S = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(b.B)(e.media) && e.media.content)),
				A = e => !!e && e.isBlank;
			class N extends a.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: n,
						isOverlay: s,
						placementIndex: r,
						refreshKey: i,
						listingName: o,
						placement: c,
						sizes: u,
						position: p,
						redditStyle: b,
						forcePlaceholder: h,
						forceHouseAd: g,
						waitForProgrammatic: y
					} = this.props;
					return h || t || !S(n) && y ? a.a.createElement(m.a, null, a.a.createElement(O, {
						className: e,
						contentOnly: !0,
						redditStyle: b
					}, a.a.createElement(E, {
						"data-before-content": Object(d.a)("en", "sidebar.sponsored")
					}))) : g ? a.a.createElement(m.a, null, a.a.createElement(O, {
						className: e,
						contentOnly: !0,
						redditStyle: b
					}, a.a.createElement(l.a, null))) : S(n) ? a.a.createElement(m.a, null, a.a.createElement(x, {
						post: n,
						refreshKey: i,
						listingName: o,
						placement: c,
						placementIndex: r
					})) : a.a.createElement(m.a, null, a.a.createElement(O, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: b
					}, A(n) && a.a.createElement(x, {
						post: n,
						refreshKey: i,
						listingName: o,
						placement: c,
						placementIndex: r
					}), a.a.createElement(C, {
						id: _(c, s, r),
						sizes: u,
						placement: c,
						listingName: o,
						refreshKey: i,
						position: p,
						dataBeforeContent: Object(d.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = v(N)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/selectors/brandSafety.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const u = Object(i.t)();
			t.a = u(Object(a.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: s
				} = t;
				const r = Object(o.b)(e, {
						listingName: n,
						pageLayer: s
					}),
					a = Object(d.x)(e),
					i = Object(o.e)(e);
				return {
					canShowAd: r && !a,
					forcePlaceholder: !Object(o.c)(e),
					isAdsDisabled: a,
					viewIsUnsafe: i
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: s,
					pageLayer: a
				} = e, i = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !n && t && a ? r.a.createElement(c.a, l({
					forceHouseAd: s
				}, i)) : null
			}))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", r.a)
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(o),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const l = a.a.div("WidgetBackground", d.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, n = c(e, ["children"]);
					return r.a.createElement("div", n, r.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/app/strings/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				p = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(o.c)({
				language: b.P
			});
			var g = Object(a.b)(h, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				y = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = n("./src/reddit/i18n/utils.ts"),
				O = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				S = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				A = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				N = n.n(A);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "b", (function() {
				return B
			})), n.d(t, "a", (function() {
				return P
			}));
			const B = e => r.a.createElement(y.a, {
					className: Object(c.a)(N.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: N.a.container
				}, e.isLoading ? r.a.createElement(v.a, {
					className: N.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: N.a.errorMsg
				}, e.errorMsg || Object(C.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(P, j({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(f.n, {
					className: N.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(o.c)({
					hideNSFWPref: b.y,
					language: b.P
				}),
				P = Object(a.b)(w)(e => r.a.createElement("div", {
					className: N.a.communityItemContainer
				}, r.a.createElement(E.a, {
					widthRight: x.t
				}, r.a.createElement("div", {
					className: N.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: N.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(O.a, {
					className: N.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: N.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: N.a.communityName,
					to: Object(S.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(S.b)(e.name, e.type)), r.a.createElement("div", {
					className: N.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: N.a.subscriberCount
				}, Object(d.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(m.b, {
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(v.a, {
					className: Object(c.a)(N.a.communityCta, N.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(f.n, {
					className: Object(c.a)(N.a.communityCta, {
						[N.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(g, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: N.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === s.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/isFakeSubreddit/index.ts"),
				r = n("./src/reddit/constants/postLayout.ts");
			const a = Math.floor(100 * Math.random());
			var i;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(i || (i = {}));
			t.b = (e, t, n, i, o) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: n,
					layout: r.b[t.prefs.layout]
				};
				return i && !Object(s.a)(i.name) && (d.subreddit = i.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = a, o && (d.position = o), d
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(o);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		}
	}
]);
//# sourceMappingURL=Frontpage~SubredditWiki.0cdbea732fc71104c067.js.map