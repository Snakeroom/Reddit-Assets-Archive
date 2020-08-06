// https://www.redditstatic.com/desktop2x/Frontpage~Subreddit~SubredditWiki.46fa5060ff8ea8e7207b.js
// Retrieved at 8/6/2020, 6:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~Subreddit~SubredditWiki"], {
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/config.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/doubleclickForPublishers/index.ts"),
				m = r("./src/lib/intersectionObserver/index.ts"),
				u = r("./src/lib/objectSelector/index.ts"),
				h = r("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/helpers/trackers/ads.ts"),
				y = r("./src/reddit/components/BannerAd/index.m.less"),
				g = r.n(y),
				x = r("./src/lib/lessComponent.tsx");
			const C = x.a.div("Container", g.a),
				v = x.a.div("LoadingHitbox", g.a),
				O = e => setTimeout(() => {
					throw e
				}, 0);
			class S extends s.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					O(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: r,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && l.a(this.frame, {
							id: e,
							slot: t,
							properties: r,
							sizes: n
						})
					} catch (s) {
						O(s)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						O(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= o.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(f.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						O(e)
					}
					this.loader && m.a(this.loader, e => {
						this.isWithinLoadingDistance = !0, this.refreshedOnce || (this.frame && l.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.refresh(this.props), this.refreshedOnce = !0), this.props.isRefreshableAd && (!this.refreshInterval && e.isIntersecting && null != this.props.refreshCount ? this.props.refreshCount < o.a.dfpRefreshSlotIntervalLimit && (this.refreshInterval = window.setInterval(this.refreshPeriodically.bind(this), o.a.dfpRefreshSlotInterval)) : this.refreshInterval && !e.isIntersecting && (window.clearInterval(this.refreshInterval), this.refreshInterval = null))
					})
				}
				componentWillUnmount() {
					this.loader && m.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && l.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3) return this.refresh(e), void(this.refreshedOnce = !0)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: r
					} = this.props;
					return t ? s.a.createElement(C, {
						"data-slot": t
					}, s.a.createElement(v, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), s.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: r,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : s.a.createElement("div", {
						className: r
					})
				}
			}
			S.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(a.b)(() => Object(i.c)({
				properties: Object(u.a)((e, t) => {
					const r = e.platform.currentPage;
					if (!r) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(h.b)(t.placement, e.user, Object(d.a)("".concat(n).concat(r.url), r.queryParams), Object(p.z)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const r = e.platform.currentPage;
					return r && r.meta ? l.c(t.listingName, r.meta.name) : ""
				}
			}))(Object(b.c)(S))
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./src/config.ts"),
				d = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = r.n(d),
				l = r("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				u = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				h = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				p = .5;
			class b extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < p || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								r = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, r), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: r
					} = this.state, a = r ? i.a.createElement(u, {
						src: o.a.assetPath + t
					}) : i.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: p
					}, i.a.createElement(u, {
						src: o.a.assetPath + t
					}));
					return i.a.createElement(m, {
						bannerRef: this.bannerRef,
						className: h,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a))
				}
			}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("IdCard~SubredditWiki"), r.e("IdCard")]).then(r.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, r) {
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
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r.n(n),
				a = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = r("./node_modules/lodash/random.js"),
				o = r.n(i),
				d = r("./node_modules/react/index.js"),
				c = r.n(d),
				l = r("./node_modules/react-redux/es/index.js"),
				m = r("./node_modules/reselect/es/index.js"),
				u = r("./src/config.ts"),
				h = r("./src/reddit/components/BannerAd/index.tsx"),
				p = r("./src/reddit/components/FakeBannerAd/index.tsx"),
				b = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				y = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = r("./src/reddit/helpers/adCount/index.ts"),
				x = r("./src/reddit/helpers/trackers/ads.ts"),
				C = r("./src/reddit/models/Media/index.ts"),
				v = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				S = r.n(O),
				E = r("./src/lib/constants/index.ts"),
				_ = r("./src/lib/lessComponent.tsx");
			const A = Object(a.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), r.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				w = Object(m.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: n
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(g.a)(r, s, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					IsSubredditOrCommentsPage: e => Object(v.r)(e) === E.Bb.SUBREDDIT || Object(v.r)(e) === E.Bb.COMMENTS
				}),
				N = Object(l.b)(w),
				j = _.a.wrapped(h.a, "BannerAd", S.a),
				B = _.a.wrapped(y.a, "ThemedWidget", S.a),
				I = _.a.div("SidebarAdPlaceholder", S.a),
				P = (e, t) => !(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && (t && e === E.c.BELOW_THE_FOLD),
				k = (e, t, r) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != r && (n += "-".concat(r)), n
				},
				L = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(C.G)(e.media) && e.media.content)),
				F = e => !!e && e.isBlank,
				R = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				D = Object(f.c)(class extends c.a.Component {
					shouldComponentUpdate(e, t) {
						const {
							className: r,
							redditStyle: n
						} = this.props;
						return r !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= u.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(x.d)(e, t, r))
					}
					render() {
						const e = o()(0, R.length - 1),
							{
								img: t,
								href: r
							} = R[e],
							{
								className: n,
								placement: s,
								redditStyle: a,
								removeSidebarSpacer: i
							} = this.props,
							d = i ? c.a.Fragment : b.a;
						return c.a.createElement(d, null, c.a.createElement(B, {
							className: n,
							contentOnly: !0,
							redditStyle: a
						}, c.a.createElement(p.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						})))
					}
				});
			class T extends c.a.Component {
				constructor(e) {
					super(e), this.incrementRefreshCounter = this.incrementRefreshCounter.bind(this), this.state = {
						refreshCount: 0
					}
				}
				incrementRefreshCounter() {
					this.setState(e => ({
						refreshCount: e.refreshCount + 1
					}))
				}
				render() {
					const {
						className: e,
						pending: t,
						post: r,
						isOverlay: s,
						placementIndex: a,
						refreshKey: i,
						listingName: o,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: u,
						forcePlaceholder: h,
						forceHouseAd: p,
						waitForProgrammatic: f,
						IsSubredditOrCommentsPage: y,
						removeSidebarSpacer: g
					} = this.props, x = n.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), C = g ? c.a.Fragment : b.a;
					return h || t || !L(r) && f ? c.a.createElement(C, null, c.a.createElement(B, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, c.a.createElement(I, {
						"data-before-content": x
					}))) : p ? c.a.createElement(D, {
						className: e,
						redditStyle: u,
						placement: d,
						removeSidebarSpacer: g
					}) : L(r) ? c.a.createElement(C, null, c.a.createElement(A, {
						post: r,
						refreshKey: i,
						listingName: o,
						placement: d,
						placementIndex: a
					})) : c.a.createElement(C, null, c.a.createElement(B, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, F(r) && c.a.createElement(A, {
						post: r,
						refreshKey: i,
						listingName: o,
						placement: d,
						placementIndex: a
					}), c.a.createElement(j, {
						id: k(d, s, a),
						isRefreshableAd: P(d, y),
						incrementRefreshCounter: this.incrementRefreshCounter,
						sizes: l,
						placement: d,
						listingName: o,
						refreshKey: i,
						refreshCount: this.state.refreshCount,
						position: m,
						dataBeforeContent: x
					})))
				}
			}
			t.a = N(T)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				o = r("./src/reddit/selectors/brandSafety.ts"),
				d = r("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
				}
				return r
			};
			const h = Object(i.t)();
			t.a = h(Object(a.b)((e, t) => {
				let {
					listingName: r,
					pageLayer: n
				} = t;
				const s = Object(o.b)(e, {
						listingName: r,
						pageLayer: n
					}),
					a = Object(c.y)(e) || Object(d.a)(e),
					i = Object(o.e)(e);
				return {
					canShowAd: s && !a,
					forcePlaceholder: !Object(o.c)(e),
					isAdsDisabled: a,
					viewIsUnsafe: i
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: r,
					viewIsUnsafe: n,
					pageLayer: a
				} = e, i = u(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !r && t && a ? s.a.createElement(l.a, m({
					forceHouseAd: n
				}, i)) : null
			}))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", s.a)
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/SEOTitle/index.tsx"),
				o = r("./src/reddit/components/Widgets/Base/index.m.less"),
				d = r.n(o),
				c = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
					}
					return r
				};
			const l = a.a.div("WidgetBackground", d.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, r = c(e, ["children"]);
					return s.a.createElement("div", r, s.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return A
			})), r.d(t, "a", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/Flair/index.tsx"),
				m = r("./src/reddit/components/SubscribeButton/index.tsx"),
				u = r("./src/reddit/actions/subscription/index.ts");
			var h = Object(i.b)(null, (e, t) => {
					const r = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, r)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, r))
					}
				})(r("./src/reddit/components/SubscribeButton/Base.tsx").a),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/constants/componentSizes.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				y = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				x = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = r("./src/reddit/models/Flair/index.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				S = r("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				E = r.n(S);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => a.a.createElement(p.a, {
					className: Object(c.a)(E.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: E.a.container
				}, e.isLoading ? a.a.createElement(y.a, {
					className: E.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: E.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(N, _({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(f.n, {
					className: E.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(d.c)({
					hideNSFWPref: v.z
				}),
				N = Object(i.b)(w)(e => a.a.createElement("div", {
					className: E.a.communityItemContainer
				}, a.a.createElement(x.a, {
					widthRight: b.t
				}, a.a.createElement("div", {
					className: E.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: E.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(g.a, {
					className: E.a.planetIcon,
					"data-redditstyle": !0
				})), a.a.createElement("div", {
					className: E.a.communityDescriptionContainer
				}, a.a.createElement(o.a, {
					className: E.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(O.b)(e.name, e.type),
					to: Object(O.a)(e.name, e.type)
				}, Object(O.b)(e.name, e.type)), a.a.createElement("div", {
					className: E.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: E.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(l.b, {
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(y.a, {
					className: Object(c.a)(E.a.communityCta, E.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(f.n, {
					className: Object(c.a)(E.a.communityCta, {
						[E.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? a.a.createElement(h, {
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
				}) : a.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && a.a.createElement("p", {
					title: e.description,
					className: E.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/posts.ts"),
				s = r("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === n.a.PROFILE ? Object(s.c)(e) : Object(s.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, r) {
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
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/isFakeSubreddit/index.ts"),
				s = r("./src/reddit/constants/postLayout.ts");
			const a = Math.floor(100 * Math.random());
			var i;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(i || (i = {}));
			t.b = (e, t, r, i, o) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: r,
					layout: s.b[t.prefs.layout]
				};
				return i && !Object(n.a)(i.name) && (d.subreddit = i.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = a, o && (d.position = o), d
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, r) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = r.n(o);
			t.a = Object(a.a)(e => s.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/constants/postLayout.ts"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(a.N)(e, {})] === s.d.Card,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.E
				}) === n.O.Treatment
		}
	}
]);
//# sourceMappingURL=Frontpage~Subreddit~SubredditWiki.46fa5060ff8ea8e7207b.js.map