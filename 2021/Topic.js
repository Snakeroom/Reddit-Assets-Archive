// https://www.redditstatic.com/desktop2x/Topic.5434cb49c2dc1d52b956.js
// Retrieved at 5/26/2021, 1:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Topic"], {
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "b", (function() {
				return L
			}));
			var r, i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/performanceTimings/index.tsx"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(i.a)(o.g),
				g = Object(i.a)(o.e),
				x = Object(i.a)(o.h),
				f = Object(i.a)(o.c),
				v = Object(i.a)(o.f),
				S = Object(i.a)(o.j),
				E = Object(i.a)(o.i),
				T = () => async (e, t, {
					gqlContext: s
				}) => {
					const i = t(),
						n = Object(p.e)(i),
						o = Object(p.d)(i),
						d = Object(b.J)(i);
					if (n || !o) return;
					e(x());
					let m = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							i = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (i.ok && i.body) {
							const {
								data: t
							} = i.body;
							if (y(t)) {
								if (_(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (C(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: i,
											category: n
										} = s.focusRecommendations[0],
										o = [r, i],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(r),
										p = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [i.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: n,
											lastLoadedEnv: "client"
										};
									e(h(p)), m = !0
								}
							} else m = !1
						}
					} catch (v) {
						m = !1
					}
					m || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !_(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, L = () => async (e, t, s) => {
					var r, i;
					const o = t(),
						a = Object(p.g)(o);
					if (Object(p.f)(o) || null === a || "client" === a) {
						const s = null === (i = null === (r = Object(m.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
							a = Object(b.K)(o);
						return Object(n.i)(() => e(T()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				E = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				T = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				y = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				L = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				P = s.n(L);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				w = Object(c.a)(x.a),
				I = {
					[b.d.Card]: T.a,
					[b.d.Classic]: S.a,
					[b.d.Compact]: E.a
				},
				k = {
					[b.d.Card]: function(e) {
						return n.a.createElement(v.a, O({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return n.a.createElement(v.a, O({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return n.a.createElement(v.a, O({}, e, {
							name: "view_compact"
						}))
					}
				},
				R = {
					[b.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				F = Object(h.t)(),
				B = Object(a.c)({
					dropdownIsOpen: Object(C.b)(N),
					isInIcons2020: y.a,
					postLayout: h.O,
					redditStyle: h.A
				}),
				M = Object(o.b)(B, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.v)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: N
					}))
				}));
			class A extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: r,
							subredditId: i
						} = this.props;
						t ? t(e) : (s(e, i), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(_.screen)(t),
							subreddit: Object(_.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: s,
							layout: r,
							onLayoutClick: i,
							postLayout: o
						} = this.props, a = r || b.e[o], c = e === a, l = s ? k[e] : I[e], u = R[e];
						return n.a.createElement(f.b, O({}, t, {
							className: Object(d.a)(P.a.LayoutItem, {
								[P.a.selected]: c
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: P.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: P.a.LayoutItemTextClassName
						}), n.a.createElement(l, {
							className: P.a.LayoutIcon,
							onClick: c ? void 0 : i,
							isFilled: s && c && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(w, O({}, e, {
							className: P.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: P.a.DropdownRow,
							rowIconClassName: P.a.DropdownRowIcon,
							rowSelectedClassName: P.a.DropdownRowSelected,
							tooltipId: N
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, i = t || b.e[r];
					return n.a.createElement("div", {
						className: Object(d.a)(P.a.Container, e),
						id: j
					}, n.a.createElement("div", {
						className: P.a.DropdownContainer,
						onClick: s
					}, this.renderItem(i, {
						id: N,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), n.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = F(M(Object(m.c)(Object(l.a)(A))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				i = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(i.a)(r.a)
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return q
			})), s.d(t, "a", (function() {
				return Z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/history/esm/history.js"),
				i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				o = s("./node_modules/lodash/last.js"),
				a = s.n(o),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/lib/ads/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				x = s("./src/lib/lessComponent.tsx"),
				f = s("./src/lib/opener/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				S = s("./src/reddit/components/PostList/LoadMore.tsx"),
				E = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				T = s("./src/reddit/components/Scroller/Simple.tsx"),
				y = s("./src/reddit/constants/adEvents.ts"),
				_ = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx"),
				O = s("./src/reddit/helpers/getClickInfo.ts"),
				j = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				N = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/helpers/brandSafety/index.ts"),
				k = s("./src/reddit/helpers/trackers/ads.ts"),
				R = s("./src/lib/LRUCache/index.ts"),
				F = s("./src/telemetry/index.ts"),
				B = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				A = s.n(M);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 500, W = new R.a(V), D = new R.a(V), U = new R.a(V), J = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, G = x.a.div("SeeMore", A.a), z = x.a.wrapped(N.a, "ArrowRight", A.a), K = (e, t, s, r, i, n, o, a) => {
				const c = `entered-${e}-${t}-${s?`last-${r}-${i}`:""}-${n}`;
				let d = W.get(c);
				return void 0 === d && (d = () => {
					s && o.onBottomViewed(r, i), o.trackOnPostEnteredViewport(e, t, a)
				}, W.set(c, d)), d
			}, Y = (e, t, s, r, i) => {
				const n = `left-${e}-${t}`;
				let o = D.get(n);
				return void 0 === o && (o = n => {
					s.trackOnPostExitedViewport(e, t, n, r, i)
				}, D.set(n, o)), o
			}, q = (e, t) => {
				const s = `click-${e}`;
				let r = U.get(s);
				return void 0 === r && (r = (e, s, r, i, n) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, y.a.Click);
						const {
							source: e
						} = Object(m.t)(s, i);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(P.a)(s.id, r, t).url), Object(k.a)(s, n), Object(f.d)(t, f.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(O.a)(e)
					})
				}, U.set(s, r)), r
			}, Q = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Z extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new R.a(V), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = n()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, r = e(), i = [];
						r.forEach(e => i.push(e.id));
						const n = i.map(e => t[e]).filter(Boolean),
							o = n.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(I.a)(n, o))
					}, h.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && F.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = F.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = F.c.end(this.timerId);
						setTimeout(() => Object(F.b)(h.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && F.c.cancel(this.timerId), e.postIds.length && (this.timerId = F.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && F.c.has(this.timerId)) {
						const e = F.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(F.b)(h.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const r = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					r && r !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(r)
				}
				componentWillUnmount() {
					this.timerId && F.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return F.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = F.c.end(e);
					setTimeout(() => {
						s(t(r, B.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						triggerNewPostPill: s,
						...r
					} = this.props, {
						postsById: i,
						triggerNewPostPill: n,
						...o
					} = e, a = Object.keys(r), c = Object.keys(o);
					if (c.length !== a.length) return !0;
					if (c.some(e => r[e] !== o[e])) return !0;
					if (t === i) return !1;
					if (s !== n) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((r, n) => {
							const o = 0 === n;
							return s({
								isFirstPost: o,
								layout: e,
								post: t[r]
							}) !== s({
								isFirstPost: o,
								layout: e,
								post: i[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: i,
						hostPostData: n,
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: p,
						listingName: m,
						pageLayer: b,
						pageReferrer: g,
						postClickEventFactory: x,
						redditStyle: f,
						shouldHideFlair: S,
						isActionBarAnimationEnabled: E,
						triggerNewPostPill: T,
						postIds: y
					} = this.props, _ = 0 === t, L = `post-${r}-${e}-${t}-${s?"last-index":""}-${m}-${p}-${g}`;
					let P;
					if (void 0 === (P = this.scrollChildCache.get(L))) {
						const {
							inSubredditOrProfile: O,
							postsById: N
						} = this.props, I = N[e], k = I.crosspostRootId && N[I.crosspostRootId] ? N[I.crosspostRootId] : I;
						I.crosspostRootId && !N[I.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", h.q.API), e.setExtra("description", `Post ${I.id} is crosspost of ${I.crosspostRootId}, but ` + `${I.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const R = this.props.postComponentForLayout({
								isCrosspost: !!I.crosspostRootId,
								isFirstPost: _,
								layout: r,
								post: k
							}),
							F = `post-list-item-[layout: ${r}]-[postId: ${e}]`,
							B = K(e, r, s, p, m, g, this.props, t),
							M = Y(e, r, this.props, t, b),
							A = q(e, this.props),
							H = k.media && k.media.type === w.o.EMBED ? k.media.provider : null;
						P = {
							estHeight: Object(j.c)(I, r),
							id: e,
							isFocusable: !(!k.media || !(r === C.g.Large || r === C.g.Classic && Object(w.G)(k.media))) && (w.d.has(k.media.type) && (!H || !w.s.has(H)) && !k.isSpoiler && !k.isNSFW),
							trackOnEnteredViewport: B,
							trackOnExitedViewport: M,
							render: ({
								className: r,
								height: h,
								width: g,
								remeasure: v,
								setScrollerChildRef: C,
								shouldLoadInitially: L
							}) => u.a.createElement(R, {
								className: r,
								currentProfileName: i,
								key: F,
								availableWidth: g,
								eventFactory: x,
								first: _,
								forceLoadMedia: L,
								hostPostData: n,
								inSubredditOrProfile: O,
								isActionBarAnimationEnabled: E,
								isCommentPermalink: o,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingKey: p,
								listingName: m,
								pageLayer: b,
								last: s,
								onClickPost: A,
								onSizeChanged: v,
								postId: e,
								postIds: y,
								redditStyle: f,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: C,
								shouldHideFlair: S,
								onceInViewport: () => {
									null == T || T(t)
								}
							})
						}, this.scrollChildCache.set(L, P)
					}
					return P
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return u.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: r,
						onTryAgain: i,
						postListPlaceholderComponent: n
					} = this.props;
					if (s) return;
					const o = n;
					return u.a.createElement("div", {
						className: A.a.placeholder
					}, u.a.createElement(o, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && u.a.createElement(E.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: i,
						onLoadMore: n
					} = this.props;
					if (!s) return u.a.createElement("div", {
						className: A.a.placeholder
					}, u.a.createElement(S.a, {
						className: i,
						isLoading: !!t,
						layout: r,
						countOverride: J[r]
					}), !!e && u.a.createElement(E.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: i,
						isTruncated: n,
						layout: o,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: m
					} = this.props;
					let g = d.map((e, t, s) => {
						const r = t === d.length - 1;
						return this.scrollChildForPost(e, t, r, o)
					});
					i && (g = Q(g, i));
					const x = this.props.measureScrollFPS ? `post-listings-${o}` : void 0,
						f = a ? Object(r.e)(a) : null,
						v = f || n;
					return u.a.createElement(l.Fragment, null, u.a.createElement(T.b, {
						innerRef: this.updateScrollerRef,
						className: v ? A.a.truncatedPostList : Object(b.a)(A.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: m,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: _.f
					}, g), f && u.a.createElement(G, {
						className: A.a.seeMoreButton
					}, u.a.createElement(L.a, {
						className: A.a.seeMorePostsText,
						to: Object(p.a)(f, {
							type: h.Sb.Posts
						})
					}, H._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(z, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Z.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
			}
		},
		"./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3tJhQnCiKKw7zk005rnKPi",
				container: "_3tJhQnCiKKw7zk005rnKPi",
				Link: "_1UplSBT2HFX_QHDhVZMx8r",
				link: "_1UplSBT2HFX_QHDhVZMx8r",
				Name: "_36r6mQVhaj58SDTd9Wt-eY",
				name: "_36r6mQVhaj58SDTd9Wt-eY",
				IconContainer: "_1OzhHh5MZVj92UtAsjBwp5",
				iconContainer: "_1OzhHh5MZVj92UtAsjBwp5"
			}
		},
		"./src/reddit/components/RelatedTopicList/index.m.less": function(e, t, s) {
			e.exports = {
				RelatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				relatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				Title: "_5MwovlatIWVRLVWJt1vCL",
				title: "_5MwovlatIWVRLVWJt1vCL"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarContainer/index.m.less"),
				n = s.n(i);
			t.a = r.a.div("container", n.a)
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/values.js"),
				i = s.n(r),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/loadWithRetries/index.ts"),
				m = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				S = s.n(v);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = u.a.div("BladeContainer", S.a), y = u.a.wrapped(h.a, "CloseIcon", S.a), _ = u.a.div("LoadingTitleContainer", S.a), C = u.a.div("LoadingNavContainer", S.a), L = u.a.div("ShortLoadingNav", S.a), P = u.a.wrapped(b.a, "ThemedChevron", S.a), O = ({
				...e
			}) => o.a.createElement(T, null, o.a.createElement(y, null), o.a.createElement(m.k, null, o.a.createElement(m.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(m.o, null, o.a.createElement(_, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingTitle, e.isLoading && S.a.loading)
			})), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingNav, e.isLoading && S.a.loading)
			}), o.a.createElement(P, null)), o.a.createElement(C, null, o.a.createElement(L, null), o.a.createElement(P, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingNav, e.isLoading && S.a.loading)
			}), o.a.createElement(P, null)), o.a.createElement(C, null, o.a.createElement(L, null), o.a.createElement(P, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingNav, e.isLoading && S.a.loading)
			}), o.a.createElement(P, null))))), j = Object(d.a)({
				getComponent: () => Object(p.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(O, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(O, {
					gradientType: "posts",
					isLoading: !0
				})
			}), N = Object(c.c)({
				isEditing: x.i,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: g.k
			});
			t.a = Object(a.b)(N)(e => {
				const t = e.moderatorPermissions && i()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(S.a.Container, e.isSubscriptionsPinned && S.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(j, {
					subredditId: e.subredditId
				})) : o.a.createElement(n.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return o
			})), s.d(t, "p", (function() {
				return a
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "j", (function() {
				return E
			}));
			var r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = s.n(i);
			const o = r.a.section("FormPage", n.a),
				a = r.a.h1("HomePageTitle", n.a),
				c = r.a.button("HomePageBreadcrumb", n.a),
				d = r.a.div("HomePageGroup", n.a),
				l = r.a.h1("FormPageTitle", n.a),
				u = r.a.div("FormPageSection", n.a),
				p = r.a.div("FormGroup", n.a),
				m = r.a.h2("FormGroupTitle", n.a),
				b = r.a.div("FormElement", n.a),
				h = r.a.div("FormGroupDescription", n.a),
				g = r.a.div("FormItem", n.a),
				x = r.a.h3("FormElementTitle", n.a),
				f = r.a.div("FormElementDescription", n.a),
				v = r.a.div("FormElementError", n.a),
				S = r.a.div("FormElementSubGroup", n.a),
				E = r.a.li("FormListItem", n.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ({
					border: e,
					small: t,
					...s
				}) => n.a.createElement(o.q, u({}, s, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				m = e => n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), n.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: s,
					...r
				}) => n.a.createElement(o.q, u({}, r, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: s ? o.c.S : o.c.M,
					text: m(e)
				}));
			class h extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: s,
						small: r = !1,
						isFullWidth: i = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r,
						isFullWidth: i
					};
					return this.props.userIsSubscriber ? n.a.createElement(b, u({}, o, {
						buttonType: this.props.identifier.type
					})) : n.a.createElement(p, u({}, o, {
						id: s
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				n = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => n[i({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				n = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(i.a)(Object(r.c)(n.a))
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1wPkPx87vMrQd9QW79-Ar7",
				container: "_1wPkPx87vMrQd9QW79-Ar7",
				SubscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				subscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				Icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				placeholder: "_3D4_gGvFd4EDWKz4ueGNqu",
				Text: "_1O31lH4tpbJwYBKW2NmwXi",
				text: "_1O31lH4tpbJwYBKW2NmwXi",
				Link: "_3IPnsAjx27sBpv53euPc2G",
				link: "_3IPnsAjx27sBpv53euPc2G",
				Name: "_34EJPxBGGouPQbmc0Z-LmB",
				name: "_34EJPxBGGouPQbmc0Z-LmB",
				Members: "_106YuYJJ3FE95a4NDxNg6k",
				members: "_106YuYJJ3FE95a4NDxNg6k",
				hidden: "_2zUZgN0OEXf0LMxsR-7L6l"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, s) {
			e.exports = {
				Title: "_3T1Jtiyqnd1l1V9fcLf20J",
				title: "_3T1Jtiyqnd1l1V9fcLf20J",
				SubredditList: "_34o8T80OdRMyo2wr1IA3t6",
				subredditList: "_34o8T80OdRMyo2wr1IA3t6",
				Subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				SeeMore: "_24xqgM4izvcvOOe3qlOjF",
				seeMore: "_24xqgM4izvcvOOe3qlOjF"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/prettyPrintNumber/index.ts"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/index.tsx"),
				v = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				T = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				L = s.n(C);
			const P = Object(h.c)({
				isLoggedIn: _.K,
				subreddit: y.U,
				subredditAboutInfo: y.w
			});
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: r
						} = this.props;
						if (!s) return;
						const i = Object(T.i)(s, r);
						t(Object(u.u)(e, i))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? i.a.createElement("div", {
						className: Object(o.a)(L.a.Container, e)
					}, i.a.createElement(x.b, {
						className: L.a.Icon,
						subredditOrProfile: s
					}), i.a.createElement("div", {
						className: L.a.Text
					}, i.a.createElement(S.a, {
						className: L.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, i.a.createElement("div", {
						className: L.a.Name
					}, Object(E.c)(s.displayText || s.name)), i.a.createElement("div", {
						className: L.a.Members
					}, m.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [m.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), i.a.createElement(f.a, {
						border: !1,
						className: Object(o.a)(L.a.SubscribeButton, {
							[L.a.hidden]: !t
						}),
						identifier: {
							name: s.name,
							type: v.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var j = Object(b.b)(P)(Object(d.c)(O)),
				N = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var w = e => {
					const {
						className: t
					} = e, s = Object(N.b)({
						isLoading: !0
					});
					return i.a.createElement("div", {
						className: Object(o.a)(L.a.Container, t)
					}, i.a.createElement("div", {
						className: Object(o.a)(L.a.Icon, L.a.placeholder, s)
					}), i.a.createElement("div", {
						className: L.a.Text
					}, i.a.createElement("div", {
						className: L.a.Link
					}, i.a.createElement("div", {
						className: Object(o.a)(L.a.Name, L.a.placeholder, s)
					}), i.a.createElement("div", {
						className: Object(o.a)(L.a.Members, L.a.placeholder, s)
					}))), i.a.createElement("div", {
						className: L.a.SubscribeButton
					}))
				},
				I = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				k = s.n(I);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, B = Array.from({
				length: F
			}).map((e, t) => i.a.createElement(w, {
				className: k.a.Subreddit,
				key: t
			})), M = {
				enabled: !0,
				id: "xd_103",
				layout: p.d.Large,
				surface: p.e.Topic,
				unitName: p.i,
				unitType: p.f.SubredditListing,
				url: ""
			};
			class A extends i.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.G)(M)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, r = t.slice(0, F);
					return i.a.createElement(a.a, {
						className: Object(o.a)(k.a.Container, e)
					}, i.a.createElement("div", {
						className: k.a.Title
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), i.a.createElement("div", {
						className: k.a.SubredditList
					}, r.length > 0 ? r.map(e => i.a.createElement(j, {
						className: k.a.Subreddit,
						discoveryUnit: M,
						key: e,
						subredditId: e
					})) : B), t.length > F && i.a.createElement(n.a, {
						to: s
					}, i.a.createElement(l.o, {
						className: k.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(A)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./src/reddit/components/SidebarContainer/index.tsx"),
				o = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				a = s("./src/reddit/components/TopicSidebar/index.m.less"),
				c = s.n(a);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return i.a.createElement(n.a, {
					className: s
				}, t, i.a.createElement(o.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				S = s("./src/reddit/selectors/listings.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function _() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isPredictionsPage: m.L,
					isProfilePostListing: m.I,
					isTopicPage: m.N,
					pageLayer: e => e
				})
			}
			const C = _(),
				L = {
					apiError: S.c,
					apiPending: S.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(S.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(T.F)(e, t.listingName);
							return Object(v.j)(e, {
								subredditId: s
							})
						}
						return Object(E.P)(e, {
							...t
						})
					},
					postIds: Object(n.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: r,
						inSubredditOrProfile: i
					}) => {
						if (r) {
							const t = Object(T.F)(e, s);
							return Object(v.k)(e, {
								subredditId: t
							})
						}
						return Object(E.C)(e, t, s, i)
					}),
					subredditsById: T.bb,
					viewportDataLoaded: y.a,
					pageReferrer: m.R,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.d
				},
				P = Object(i.c)(L),
				O = (e, t) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.I(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.x(t, s))
					},
					trackOnPostEnteredViewport: (s, r, i) => {
						e(d.L(s, i, t.hostPostData))
					},
					trackOnPostExitedViewport: (t, s, r, i, n) => {
						e(d.M(t, r, i, n))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				j = Object(r.b)(P, O, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(h.g)(e, t, "post", s.listingKey, s.hostPostData, s.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(b.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(C(j(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(i.c)({
				userIsSubscriber: o.hb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(n.d([t], !0)),
				onSubscriptionsRequested: () => e(n.e()),
				onUnsubscribe: () => e(n.d([t], !1))
			}))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = i.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const i = (e, t) => {
				const s = e.some(e => e.isNSFW),
					i = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !i
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", n({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(n.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, i.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), i.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", n({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", n({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", n({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = ({
					message: e
				}) => n.a.createElement("div", {
					className: c.a.container
				}, n.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), n.a.createElement(o.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => n.a.createElement("div", {
					className: c.a.container
				}, n.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), n.a.createElement(o.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/Topic/Relationship/index.m.less": function(e, t, s) {
			e.exports = {
				SeeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				seeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				TopicName: "dJ3xe2Nf-vhZ6EYI5mouf",
				topicName: "dJ3xe2Nf-vhZ6EYI5mouf"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3oYTbP0ZV-MANTieSFQJh4",
				container: "_3oYTbP0ZV-MANTieSFQJh4",
				Icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				Text: "_2Q3cQEpLSLir19P36HjMsM",
				text: "_2Q3cQEpLSLir19P36HjMsM",
				Link: "_2WjUac0CWJTaeqSTapZxRS",
				link: "_2WjUac0CWJTaeqSTapZxRS",
				Name: "_2wytGTWEsoZfbD_7szYe7p",
				name: "_2wytGTWEsoZfbD_7szYe7p",
				Meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				Members: "wipHspsmXyJJfAajdJPON",
				members: "wipHspsmXyJJfAajdJPON",
				About: "_3qHKAeck1ZFLJpNms-2TDT",
				about: "_3qHKAeck1ZFLJpNms-2TDT",
				VisitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				visitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				SubscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				subscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				hidden: "_2s4ITweJE8SSEgLGNY1LCw"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				subredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				Subreddit: "JJ2QSl-i_fI5G_NYIXnSe",
				subreddit: "JJ2QSl-i_fI5G_NYIXnSe"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less": function(e, t, s) {
			e.exports = {
				RelationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				relationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				"m-active": "_1SmckvvCqb57y8BYkTM8ew",
				mActive: "_1SmckvvCqb57y8BYkTM8ew"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/index.m.less": function(e, t, s) {
			e.exports = {
				TabHeader: "a44uJVg_2f6Tls24pgm7O",
				tabHeader: "a44uJVg_2f6Tls24pgm7O",
				TabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q",
				tabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less": function(e, t, s) {
			e.exports = {
				Tab: "zB167v8VzkVM9pUFETGba",
				tab: "zB167v8VzkVM9pUFETGba",
				ActiveTab: "_1jUOuw0_aUnqYgs8j-VWYa",
				activeTab: "_1jUOuw0_aUnqYgs8j-VWYa"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_ZTq8EBsRouOv-sGGDFEG",
				container: "_ZTq8EBsRouOv-sGGDFEG",
				Content: "_1gOnjMfh6AZJPpWVWm4hdl",
				content: "_1gOnjMfh6AZJPpWVWm4hdl",
				cardWidth: "kt6mctm16gX4BAz4UkP7F",
				fullWidth: "_13SEe8eTugXMSewCNKUSur",
				Header: "_6HVKzUwnWtxEz7ZXIZ52z",
				header: "_6HVKzUwnWtxEz7ZXIZ52z",
				Title: "_3xUDHcNgeNVz7fD8H1kUy7",
				title: "_3xUDHcNgeNVz7fD8H1kUy7",
				Subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				Tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				link: "_28pKATphngn0NYq1jxqIW2",
				"parent-related-topics": "_1b2AsSM880_ExPtu4kLbtn",
				parentRelatedTopics: "_1b2AsSM880_ExPtu4kLbtn"
			}
		},
		"./src/reddit/pages/Topic/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_34DPWmU2xtTM5k6LzxRyBK",
				container: "_34DPWmU2xtTM5k6LzxRyBK",
				SidebarRight: "xN-Lax46afWDvxNsgO_qV",
				sidebarRight: "xN-Lax46afWDvxNsgO_qV",
				TopicTab: "_1w8swivzpCaiRZVhoHJCf2",
				topicTab: "_1w8swivzpCaiRZVhoHJCf2",
				active: "ADUh7gkavNOAWKFsG3XAh",
				WidgetsContainer: "_XJz3g54OuK0zp0Pm8QcB",
				widgetsContainer: "_XJz3g54OuK0zp0Pm8QcB"
			}
		},
		"./src/reddit/pages/Topic/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/ListingPostList/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/Search/index.tsx"),
				b = s("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				h = s.n(b);
			var g = e => {
					const {
						topic: t
					} = e;
					return i.a.createElement("span", {
						className: h.a.Container
					}, i.a.createElement(p.a, {
						className: h.a.Link,
						title: t.name,
						to: t.url
					}, i.a.createElement("span", {
						className: h.a.IconContainer
					}, i.a.createElement(m.a, null)), i.a.createElement("span", {
						className: h.a.Name
					}, t.namePlural)))
				},
				x = s("./src/reddit/components/SEOTitle/index.tsx"),
				f = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = s("./src/reddit/components/RelatedTopicList/index.m.less"),
				S = s.n(v);

			function E(e) {
				const {
					children: t,
					limit: s,
					title: r,
					topics: n
				} = e;
				return n.length ? i.a.createElement(f.a, {
					className: S.a.Container
				}, r && i.a.createElement("div", {
					className: S.a.Title
				}, i.a.createElement(x.b, {
					type: x.a.Widget
				}, r)), i.a.createElement("div", {
					className: S.a.RelatedTopicList
				}, n.slice(0, s).map(e => i.a.createElement(g, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var T = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				y = s("./src/reddit/components/TopicSidebar/index.tsx"),
				_ = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				C = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/trackers/screenview.ts"),
				j = s("./src/reddit/layout/page/Listing/index.tsx"),
				N = s("./src/reddit/pages/ErrorPages/index.tsx"),
				w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				R = s.n(k);
			class F extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							onTabClick: e,
							tab: t
						} = this.props;
						e(t)
					}
				}
				render() {
					const {
						activeTab: e,
						children: t,
						tab: s,
						tabs: r
					} = this.props;
					return r.includes(s) ? i.a.createElement("div", {
						className: Object(o.a)(R.a.Tab, {
							[R.a.ActiveTab]: s === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var B = F,
				M = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				A = s.n(M);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var W;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(W || (W = {}));
			class D extends i.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? i.a.createElement("ul", {
						className: A.a.parentRelatedTopics
					}, e.map(({
						namePlural: e,
						url: t
					}, s) => i.a.createElement("li", {
						key: s
					}, i.a.createElement(p.a, {
						className: A.a.link,
						to: t
					}, e)))) : V._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: s,
						onTabClick: r,
						tabs: n,
						topicName: a
					} = this.props, c = {
						activeTab: e,
						onTabClick: r,
						tabs: n
					};
					return i.a.createElement("div", {
						className: Object(o.a)(A.a.Container, t)
					}, i.a.createElement("div", {
						className: Object(o.a)(A.a.Content, s === L.g.Large ? A.a.cardWidth : A.a.fullWidth)
					}, i.a.createElement("div", {
						className: A.a.Header
					}, i.a.createElement("div", {
						className: A.a.Title
					}, i.a.createElement(x.b, {
						type: x.a.TopicHeader
					}, a)), i.a.createElement("div", {
						className: A.a.Subtitle
					}, this.renderSubtitleContent())), i.a.createElement("div", {
						className: A.a.Tabs
					}, i.a.createElement(B, H({
						tab: W.Posts
					}, c), V._("Posts", null, {
						hk: "3RLrle"
					})), i.a.createElement(B, H({
						tab: W.Communities
					}, c), V._("Communities", null, {
						hk: "KIwd1"
					})), i.a.createElement(B, H({
						tab: W.RelatedTopics
					}, c), V._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var U = D,
				J = s("./src/reddit/pages/Topic/Relationship/index.m.less"),
				G = s.n(J);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = 5;
			class Y extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(W.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return i.a.createElement(E, {
						limit: K,
						title: e,
						topics: t
					}, this.renderSeeMoreButton())
				}
				renderSeeMoreButton() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return t.length < K ? null : i.a.createElement(w.a, {
						onClick: this.onClick,
						to: "#"
					}, i.a.createElement(I.o, {
						className: G.a.SeeAllRelatedTopics
					}, z._("See all {=[Topic name plural]}", [z._param("=[Topic name plural]", i.a.createElement("span", {
						className: G.a.TopicName
					}, z._("{Topic name plural}", [z._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var q = Y,
				Q = s("./src/lib/prettyPrintNumber/index.ts"),
				Z = s("./src/reddit/components/Flair/index.tsx"),
				X = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = s("./src/reddit/constants/posts.ts"),
				te = s("./src/reddit/helpers/name/index.ts"),
				se = s("./src/reddit/models/Flair/index.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				oe = s.n(ne);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(n.c)({
				isLoggedIn: ie.K,
				subreddit: re.U,
				subredditAboutInfo: (e, {
					subredditId: t
				}) => e.subreddits.about[t]
			}), de = Object(d.b)(ce), le = {
				text: "nsfw",
				type: se.f.Nsfw
			};
			var ue = de(e => {
					const {
						className: t,
						isLoggedIn: s,
						subreddit: r,
						subredditAboutInfo: n
					} = e, a = Object(te.c)(r.displayText || r.name);
					return i.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t)
					}, i.a.createElement(X.b, {
						className: oe.a.Icon,
						subredditOrProfile: r
					}), i.a.createElement("div", {
						className: oe.a.Text
					}, i.a.createElement(p.a, {
						className: oe.a.Link,
						to: r.url
					}, i.a.createElement("div", {
						className: oe.a.Name
					}, a), i.a.createElement("div", {
						className: oe.a.Meta
					}, i.a.createElement("div", {
						className: oe.a.Members
					}, ae._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [ae._plural(r.subscribers, "subscribers count", Object(Q.b)(r.subscribers))], {
						hk: "48BXj1"
					})), r.isNSFW && i.a.createElement(Z.b, {
						flair: le
					}))), i.a.createElement("div", {
						className: oe.a.About
					}, n.publicDescription || ae._("Welcome to {subreddit name}", [ae._param("subreddit name", a)], {
						hk: "vZ7VH"
					})), i.a.createElement(p.a, {
						className: oe.a.VisitLink,
						to: r.url
					}, ae._("Visit", null, {
						hk: "2z3clp"
					}))), i.a.createElement($.a, {
						className: Object(o.a)(oe.a.SubscribeButton, {
							[oe.a.hidden]: !s
						}),
						identifier: {
							name: r.name,
							type: ee.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				pe = s("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				me = s.n(pe);

			function be(e) {
				const {
					subredditIds: t = []
				} = e;
				return i.a.createElement("div", {
					className: me.a.SubredditList
				}, t.map(e => i.a.createElement(ue, {
					className: me.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var he = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = s("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				xe = s.n(ge);
			class fe extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(W.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: s
					} = this.props, r = s === e;
					return i.a.createElement("div", {
						className: Object(o.a)(xe.a.RelationshipTab, {
							[xe.a.mActive]: r
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var ve = fe,
				Se = s("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				Ee = s.n(Se);
			const {
				fbt: Te
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class ye extends i.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: s,
							onTabClick: r
						} = this.props;
						return i.a.createElement(ve, {
							activeIndex: s,
							index: t,
							key: e.slug,
							onTabClick: r,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => i.a.createElement("div", {
						className: Ee.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === W.Posts ? Te._("Posts about {topic name}", [Te._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === W.Communities ? Te._("Communities related to {topic name}", [Te._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, s = t === W.Posts;
					return t === W.RelatedTopics ? this.renderRelatedTopicsHeader() : i.a.createElement("div", {
						className: Ee.a.TabHeader
					}, i.a.createElement("div", {
						className: Ee.a.TabTitle
					}, i.a.createElement(x.b, {
						type: x.a.Widget
					}, this.renderTitle())), s && i.a.createElement(he.a, {
						className: Ee.a.PostsLayoutSwitch,
						layout: L.e[e]
					}))
				}
			}
			var _e = ye,
				Ce = s("./src/reddit/selectors/topic.ts"),
				Le = s("./src/reddit/pages/Topic/index.m.less"),
				Pe = s.n(Le);
			const {
				fbt: Oe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), je = Object(P.t)(), Ne = (e, t) => t.match.params.sort || a.S, we = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(W.Posts), e.hasSubreddits && t.push(W.Communities), e.childRelationships.length && t.push(W.RelatedTopics), t) : t
			}, Ie = Object(d.b)(() => Object(n.a)((e, t) => Object(Ce.d)(e, t.match.params.topicSlug), (e, t) => Object(Ce.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), P.O, Ne, e => {
				var t;
				return null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status
			}, (e, t, s, r, i, n, o, a) => ({
				layout: n,
				parentRelatedTopics: r,
				siblingRelatedTopics: i,
				sort: o,
				status: a || 200,
				tabs: we(s),
				timeSort: void 0,
				topic: s,
				topicName: e,
				topicNamePlural: t
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.morePostsRequested)(t.match.params))
			})), ke = (e, t) => e === W.Communities ? L.g.Large : t;
			class Re extends i.a.Component {
				constructor(e) {
					super(e), this.openTab = (e, t = 0) => {
						this.setState({
							activeLayout: ke(e, this.props.layout),
							activeRelationshipIndex: t,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(W.Communities)
					}, this.onViewed = (e, t) => {
						var s;
						return Object(O.f)(Object(c.a)(C.b.Topic, null, {
							topicSlug: null === (s = this.props.topic) || void 0 === s ? void 0 : s.slug
						}), this.props.sort, t, e, this.props.timeSort)
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => i.a.createElement(q, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: L.g.Large,
						activeRelationshipIndex: 0,
						activeTab: void 0
					}
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						r = e.pageLayer && e.pageLayer.queryParams.activeTab,
						i = r && e.tabs.includes(r) && r,
						n = e.tabs[0],
						o = s || i || n;
					return {
						activeLayout: ke(o, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: o
					}
				}
				componentDidUpdate(e) {
					var t, s, r;
					const i = null === (t = e.topic) || void 0 === t ? void 0 : t.id,
						n = null === (s = this.props.topic) || void 0 === s ? void 0 : s.id;
					i && n !== (null === (r = e.topic) || void 0 === r ? void 0 : r.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: s,
						siblingRelatedTopics: r,
						status: n,
						tabs: a,
						topic: d,
						topicName: l,
						topicNamePlural: p
					} = this.props, m = t.params.topicSlug, b = Object(c.a)(C.b.Topic, null, {
						topicSlug: m
					}), {
						activeLayout: h,
						activeRelationshipIndex: g,
						activeTab: x
					} = this.state, f = C.b.Topic;
					if (404 === n) return i.a.createElement(N.b, null);
					if (500 === n) return i.a.createElement(N.b, {
						message: Oe._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!d) return null;
					const v = d.childRelationships[g],
						S = v && v.relatedTopics || [],
						L = i.a.createElement(i.a.Fragment, null, i.a.createElement(_e, {
							activeLayout: h,
							activeRelationshipIndex: g,
							activeTab: x,
							onTabClick: this.openTab,
							topic: d,
							topicName: l,
							topicNamePlural: p
						}), i.a.createElement("div", {
							className: Object(o.a)(Pe.a.TopicTab, {
								[Pe.a.active]: x === W.Communities
							})
						}, i.a.createElement(be, {
							subredditIds: d.subredditIds
						})), i.a.createElement("div", {
							className: Object(o.a)(Pe.a.TopicTab, {
								[Pe.a.active]: x === W.Posts
							})
						}, x === W.Posts && i.a.createElement(u.a, {
							forcedLayout: h,
							listingKey: b,
							listingName: f,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), i.a.createElement("div", {
							className: Object(o.a)(Pe.a.TopicTab, {
								[Pe.a.active]: x === W.RelatedTopics
							})
						}, i.a.createElement(E, {
							topics: S
						}))),
						P = x !== W.RelatedTopics,
						O = x !== W.Communities && a.includes(W.Communities),
						w = i.a.createElement("div", {
							className: Pe.a.WidgetsContainer
						}, O && i.a.createElement(_.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: d.subredditIds,
							topicUrl: d.url
						}), P && d.childRelationships.map(this.renderRelationship), i.a.createElement(E, {
							limit: 5,
							title: Oe._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: r
						}));
					return i.a.createElement(T.a, null, i.a.createElement(j.a, {
						className: Object(o.a)(Pe.a.Container, e),
						content: L,
						fitPageToContent: !0,
						forcedLayout: h,
						sidebars: [null, i.a.createElement(y.a, {
							key: "right",
							className: Pe.a.SidebarRight,
							listingName: f
						}, w)],
						navBar: i.a.createElement(U, {
							activeTab: x,
							layout: h,
							onTabClick: this.openTab,
							parentRelatedTopics: s,
							tabs: a,
							topicName: l
						})
					}))
				}
			}
			t.default = je(Ie(Re))
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return S
			}));
			var r = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				n = s("./src/reddit/selectors/subreddit.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(n.U)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				l = [],
				u = (e, t) => {
					const s = p(e, t);
					if (!s) return l;
					const r = Object(n.Y)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(n.U)(e, {
						subredditId: s
					}) : null
				},
				m = (e, t, s, r, n) => {
					const o = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							n = s[t],
							o = n && Object(i.F)(e, {
								postId: r
							}) || null,
							a = n && Object(i.F)(e, {
								postId: n
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				b = [3],
				h = (e, t, {
					listingKey: s
				}) => {
					const r = t.slice().sort();
					let n = -1;
					const o = Object(i.y)(e, {
							listingKey: s
						}),
						a = [];
					return b.forEach(t => {
						let s = n + t;
						if (!(s >= o.length)) {
							for (; s < o.length && !m(e, s, t, o, r);) s += 1;
							s < o.length && (a.push(s), n = s)
						}
					}), a
				},
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				f = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				S = e => {
					const t = Object(o.J)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						i = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && i
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.5434cb49c2dc1d52b956.js.map