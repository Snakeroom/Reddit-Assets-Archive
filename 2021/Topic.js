// https://www.redditstatic.com/desktop2x/Topic.231632ac9acabc01f073.js
// Retrieved at 3/4/2021, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Topic"], {
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c63a85ddc7f8"}')
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
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/performanceTimings/index.tsx"),
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
			var m = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.a)(o.g),
				g = Object(n.a)(o.e),
				x = Object(n.a)(o.h),
				f = Object(n.a)(o.c),
				v = Object(n.a)(o.f),
				S = Object(n.a)(o.j),
				E = Object(n.a)(o.i),
				T = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						i = Object(m.e)(n),
						o = Object(m.d)(n),
						d = Object(b.I)(n);
					if (i || !o) return;
					e(x());
					let p = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (y(t)) {
								if (_(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (C(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: n,
											category: i
										} = s.focusRecommendations[0],
										o = [r, n],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: i,
											lastLoadedEnv: "client"
										};
									e(h(m)), p = !0
								}
							} else p = !1
						}
					} catch (v) {
						p = !1
					}
					p || e(g({
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
					var r, n;
					const o = t(),
						a = Object(m.g)(o);
					if (Object(m.f)(o) || null === a || "client" === a) {
						const s = null === (n = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(b.J)(o);
						return Object(i.i)(() => e(T()), {
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
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				O = s.n(L);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				j = "LayoutSwitch--picker",
				I = Object(c.a)(x.a),
				w = {
					[b.d.Card]: T.a,
					[b.d.Classic]: S.a,
					[b.d.Compact]: E.a
				},
				k = {
					[b.d.Card]: function(e) {
						return i.a.createElement(v.a, N({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return i.a.createElement(v.a, N({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return i.a.createElement(v.a, N({}, e, {
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
					dropdownIsOpen: Object(C.b)(j),
					isInIcons2020: y.b,
					postLayout: h.N,
					redditStyle: h.A
				}),
				V = Object(o.b)(B, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.x)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: j
					}))
				}));
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: r,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), r(t => ({
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
							onLayoutClick: n,
							postLayout: o
						} = this.props, a = r || b.e[o], c = e === a, l = s ? k[e] : w[e], u = R[e];
						return i.a.createElement(f.b, N({}, t, {
							className: Object(d.a)(O.a.LayoutItem, {
								[O.a.selected]: c
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), i.a.createElement(l, {
							className: O.a.LayoutIcon,
							onClick: c ? void 0 : n,
							isFilled: s && c && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return i.a.createElement(I, N({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: j
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, n = t || b.e[r];
					return i.a.createElement("div", {
						className: Object(d.a)(O.a.Container, e),
						id: P
					}, i.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: j,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), i.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = F(V(Object(p.c)(Object(l.a)(M))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(r.a)
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Y
			})), s.d(t, "a", (function() {
				return Z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				o = s("./node_modules/lodash/last.js"),
				a = s.n(o),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/ads/index.ts"),
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
				O = s("./src/reddit/controls/OutboundLink/index.tsx"),
				N = s("./src/reddit/helpers/getClickInfo.ts"),
				P = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				j = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/helpers/brandSafety/index.ts"),
				k = s("./src/lib/LRUCache/index.ts"),
				R = s("./src/telemetry/index.ts"),
				F = s("./src/telemetry/models/Timer.ts"),
				B = s("./src/reddit/components/PostList/index.m.less"),
				V = s.n(B);
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = 500, H = new k.a(A), W = new k.a(A), D = new k.a(A), J = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, U = x.a.div("SeeMore", V.a), G = x.a.wrapped(j.a, "ArrowRight", V.a), z = (e, t, s, r, n, i, o, a) => {
				const c = `entered-${e}-${t}-${s?`last-${r}-${n}`:""}-${i}`;
				let d = H.get(c);
				return void 0 === d && (d = () => {
					s && o.onBottomViewed(r, n), o.trackOnPostEnteredViewport(e, t, a)
				}, H.set(c, d)), d
			}, Q = (e, t, s, r, n) => {
				const i = `left-${e}-${t}`;
				let o = W.get(i);
				return void 0 === o && (o = i => {
					s.trackOnPostExitedViewport(e, t, i, r, n)
				}, W.set(i, o)), o
			}, Y = (e, t) => {
				const s = `click-${e}`;
				let r = D.get(s);
				return void 0 === r && (r = (e, s, r, n) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, y.a.Click);
						const {
							source: e
						} = Object(p.t)(s, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(O.a)(s.id, r, t).url), Object(f.d)(t, f.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(N.a)(e)
					})
				}, D.set(s, r)), r
			}, K = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Z extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new k.a(A), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = i()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, r = e(), n = [];
						r.forEach(e => n.push(e.id));
						const i = n.map(e => t[e]).filter(Boolean),
							o = i.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(w.a)(i, o))
					}, h.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && R.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = R.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = R.c.end(this.timerId);
						setTimeout(() => Object(R.b)(h.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && R.c.cancel(this.timerId), e.postIds.length && (this.timerId = R.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && R.c.has(this.timerId)) {
						const e = R.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(R.b)(h.l.Redesign, {
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
					this.timerId && R.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return R.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = R.c.end(e);
					setTimeout(() => {
						s(t(r, F.TimerType.InApp))
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
						...s
					} = this.props, {
						postsById: r,
						...n
					} = e, i = Object.keys(s), o = Object.keys(n);
					if (o.length !== i.length) return !0;
					if (o.some(e => s[e] !== n[e])) return !0;
					if (t === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((n, i) => {
							const o = 0 === i;
							return s({
								isFirstPost: o,
								layout: e,
								post: t[n]
							}) !== s({
								isFirstPost: o,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: n,
						hostPostId: i,
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: b,
						pageReferrer: g,
						postClickEventFactory: x,
						redditStyle: f,
						shouldHideFlair: S,
						isActionBarAnimationEnabled: E,
						postIds: T
					} = this.props, y = 0 === t, _ = `post-${r}-${e}-${t}-${s?"last-index":""}-${p}-${m}-${g}`;
					let L;
					if (void 0 === (L = this.scrollChildCache.get(_))) {
						const {
							inSubredditOrProfile: O,
							postsById: N
						} = this.props, j = N[e], w = j.crosspostRootId && N[j.crosspostRootId] ? N[j.crosspostRootId] : j;
						j.crosspostRootId && !N[j.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", h.q.API), e.setExtra("description", `Post ${j.id} is crosspost of ${j.crosspostRootId}, but ` + `${j.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const k = this.props.postComponentForLayout({
								isCrosspost: !!j.crosspostRootId,
								isFirstPost: y,
								layout: r,
								post: w
							}),
							R = `post-list-item-[layout: ${r}]-[postId: ${e}]`,
							F = z(e, r, s, m, p, g, this.props, t),
							B = Q(e, r, this.props, t, b),
							V = Y(e, this.props),
							M = w.media && w.media.type === I.o.EMBED ? w.media.provider : null;
						L = {
							estHeight: Object(P.c)(j, r),
							id: e,
							isFocusable: !(!w.media || !(r === C.g.Large || r === C.g.Classic && Object(I.G)(w.media))) && (I.d.has(w.media.type) && (!M || !I.s.has(M)) && !w.isSpoiler && !w.isNSFW),
							trackOnEnteredViewport: F,
							trackOnExitedViewport: B,
							render: ({
								className: t,
								height: r,
								width: h,
								remeasure: g,
								setScrollerChildRef: v,
								shouldLoadInitially: _
							}) => u.a.createElement(k, {
								className: t,
								currentProfileName: n,
								key: R,
								availableWidth: h,
								eventFactory: x,
								first: y,
								forceLoadMedia: _,
								hostPostId: i,
								inSubredditOrProfile: O,
								isActionBarAnimationEnabled: E,
								isCommentPermalink: o,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingKey: m,
								listingName: p,
								pageLayer: b,
								last: s,
								onClickPost: V,
								onSizeChanged: g,
								postId: e,
								postIds: T,
								redditStyle: f,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: S
							})
						}, this.scrollChildCache.set(_, L)
					}
					return L
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
						onTryAgain: n,
						postListPlaceholderComponent: i
					} = this.props;
					if (s) return;
					const o = i;
					return u.a.createElement("div", {
						className: V.a.placeholder
					}, u.a.createElement(o, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && u.a.createElement(E.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: n,
						onLoadMore: i
					} = this.props;
					if (!s) return u.a.createElement("div", {
						className: V.a.placeholder
					}, u.a.createElement(S.a, {
						className: n,
						isLoading: !!t,
						layout: r,
						countOverride: J[r]
					}), !!e && u.a.createElement(E.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: i,
						layout: o,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: p
					} = this.props;
					let g = d.map((e, t, s) => {
						const r = t === d.length - 1;
						return this.scrollChildForPost(e, t, r, o)
					});
					n && (g = K(g, n));
					const x = this.props.measureScrollFPS ? `post-listings-${o}` : void 0,
						f = a ? Object(r.e)(a) : null,
						v = f || i;
					return u.a.createElement(l.Fragment, null, u.a.createElement(T.b, {
						innerRef: this.updateScrollerRef,
						className: v ? V.a.truncatedPostList : Object(b.a)(V.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: _.f
					}, g), f && u.a.createElement(U, {
						className: V.a.seeMoreButton
					}, u.a.createElement(L.a, {
						className: V.a.seeMorePostsText,
						to: Object(m.a)(f, {
							type: h.Pb.Posts
						})
					}, M._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
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
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				i = s.n(n);
			t.a = r.a.div("container", i.a)
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
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/userPrefs.ts"),
				v = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				S = s.n(v);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = u.a.div("BladeContainer", S.a), y = u.a.wrapped(h.a, "CloseIcon", S.a), _ = u.a.div("LoadingTitleContainer", S.a), C = u.a.div("LoadingNavContainer", S.a), L = u.a.div("ShortLoadingNav", S.a), O = u.a.wrapped(b.a, "ThemedChevron", S.a), N = ({
				...e
			}) => o.a.createElement(T, null, o.a.createElement(y, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(p.o, null, o.a.createElement(_, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingTitle, e.isLoading && S.a.loading)
			})), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingNav, e.isLoading && S.a.loading)
			}), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement(L, null), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingNav, e.isLoading && S.a.loading)
			}), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement(L, null), o.a.createElement(O, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(S.a.LoadingNav, e.isLoading && S.a.loading)
			}), o.a.createElement(O, null))))), P = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(N, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(N, {
					gradientType: "posts",
					isLoading: !0
				})
			}), j = Object(c.c)({
				isEditing: x.i,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: g.i
			});
			t.a = Object(a.b)(j)(e => {
				const t = e.moderatorPermissions && n()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(S.a.Container, e.isSubscriptionsPinned && S.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(P, {
					subredditId: e.subredditId
				})) : o.a.createElement(i.Fragment, null, e.children)
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
				return m
			})), s.d(t, "h", (function() {
				return p
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
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = s.n(n);
			const o = r.a.section("FormPage", i.a),
				a = r.a.h1("HomePageTitle", i.a),
				c = r.a.button("HomePageBreadcrumb", i.a),
				d = r.a.div("HomePageGroup", i.a),
				l = r.a.h1("FormPageTitle", i.a),
				u = r.a.div("FormPageSection", i.a),
				m = r.a.div("FormGroup", i.a),
				p = r.a.h2("FormGroupTitle", i.a),
				b = r.a.div("FormElement", i.a),
				h = r.a.div("FormGroupDescription", i.a),
				g = r.a.div("FormItem", i.a),
				x = r.a.h3("FormElementTitle", i.a),
				f = r.a.div("FormElementDescription", i.a),
				v = r.a.div("FormElementError", i.a),
				S = r.a.div("FormElementSubGroup", i.a),
				E = r.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = s.n(d),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.wrapped(({
					border: e,
					small: t,
					...s
				}) => e ? i.a.createElement(o.i, p({}, s, {
					className: Object(u.a)(s.className, {
						[l.a.isSmall]: t
					})
				})) : i.a.createElement(o.o, p({}, s, {
					className: Object(u.a)(s.className, {
						[l.a.isSmall]: t
					})
				})), "SubscribeInternalButton", l.a),
				h = ({
					border: e,
					small: t,
					...s
				}) => {
					return Object(a.a)() ? i.a.createElement(o.q, p({}, s, {
						priority: e ? o.b.Primary : o.b.Plain,
						className: Object(u.a)(s.className, l.a.is2020),
						size: t ? o.c.S : o.c.M
					})) : i.a.createElement(b, p({}, s, {
						border: e,
						small: t,
						className: Object(u.a)(s.className, {
							[l.a.isSmall]: t
						})
					}))
				},
				g = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				x = m.a.wrapped(({
					border: e,
					small: t,
					buttonType: s,
					...r
				}) => {
					const n = g(s),
						a = Object(u.a)(r.className, {
							[l.a.isSmall]: t
						});
					return e ? i.a.createElement(o.l, p({}, r, {
						className: a
					}), n) : i.a.createElement(o.o, p({}, r, {
						className: a
					}), n)
				}, "UnsubscribeButton", l.a),
				f = ({
					buttonType: e,
					border: t,
					small: s,
					...r
				}) => {
					return Object(a.a)() ? i.a.createElement(o.q, p({}, r, {
						priority: t ? o.b.Secondary : o.b.Plain,
						className: Object(u.a)(r.className, l.a.is2020),
						size: s ? o.c.S : o.c.M,
						text: g(e)
					})) : i.a.createElement(x, p({}, r, {
						border: t,
						small: s,
						buttonType: e,
						className: Object(u.a)(r.className, {
							[l.a.isSmall]: s
						})
					}))
				};
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						small: r = !1
					} = this.props, n = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r
					};
					return this.props.userIsSubscriber ? i.a.createElement(f, p({}, n, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(h, p({}, n, {
						id: s
					}), this.props.children, Object(c.a)({
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
			const n = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				i = {
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
				}) => i[n({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(r.c)(i.a))
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
				n = s.n(r),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
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
			const O = Object(h.c)({
				isLoggedIn: _.J,
				subreddit: y.S,
				subredditAboutInfo: y.w
			});
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: s,
							subredditAboutInfo: r
						} = this.props;
						if (!s) return;
						const n = Object(T.i)(s, r);
						t(Object(u.u)(e, n))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: s
					} = this.props;
					return s ? n.a.createElement("div", {
						className: Object(o.a)(L.a.Container, e)
					}, n.a.createElement(x.b, {
						className: L.a.Icon,
						subredditOrProfile: s
					}), n.a.createElement("div", {
						className: L.a.Text
					}, n.a.createElement(S.a, {
						className: L.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: s.url
					}, n.a.createElement("div", {
						className: L.a.Name
					}, Object(E.c)(s.displayText || s.name)), n.a.createElement("div", {
						className: L.a.Members
					}, p.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [p.fbt._plural(s.subscribers, "subscribers count", Object(g.b)(s.subscribers))], {
						hk: "48BXj1"
					})))), n.a.createElement(f.a, {
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
			var P = Object(b.b)(O)(Object(d.c)(N)),
				j = s("./src/reddit/helpers/styles/mixins/loading.ts");
			var I = e => {
					const {
						className: t
					} = e, s = Object(j.b)({
						isLoading: !0
					});
					return n.a.createElement("div", {
						className: Object(o.a)(L.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(L.a.Icon, L.a.placeholder, s)
					}), n.a.createElement("div", {
						className: L.a.Text
					}, n.a.createElement("div", {
						className: L.a.Link
					}, n.a.createElement("div", {
						className: Object(o.a)(L.a.Name, L.a.placeholder, s)
					}), n.a.createElement("div", {
						className: Object(o.a)(L.a.Members, L.a.placeholder, s)
					}))), n.a.createElement("div", {
						className: L.a.SubscribeButton
					}))
				},
				w = s("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				k = s.n(w);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = 8, B = Array.from({
				length: F
			}).map((e, t) => n.a.createElement(I, {
				className: k.a.Subreddit,
				key: t
			})), V = {
				enabled: !0,
				id: "xd_103",
				layout: m.d.Large,
				surface: m.e.Topic,
				unitName: m.i,
				unitType: m.f.SubredditListing,
				url: ""
			};
			class M extends n.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.G)(V)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: s
					} = this.props, r = t.slice(0, F);
					return n.a.createElement(a.a, {
						className: Object(o.a)(k.a.Container, e)
					}, n.a.createElement("div", {
						className: k.a.Title
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), n.a.createElement("div", {
						className: k.a.SubredditList
					}, r.length > 0 ? r.map(e => n.a.createElement(P, {
						className: k.a.Subreddit,
						discoveryUnit: V,
						key: e,
						subredditId: e
					})) : B), t.length > F && n.a.createElement(i.a, {
						to: s
					}, n.a.createElement(l.o, {
						className: k.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(M)
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
				n = s.n(r),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				o = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				a = s("./src/reddit/components/TopicSidebar/index.m.less"),
				c = s.n(a);
			t.a = e => {
				const {
					children: t,
					className: s
				} = e;
				return n.a.createElement(i.a, {
					className: s
				}, t, n.a.createElement(o.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/tracking.ts");

			function y() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isProfilePostListing: p.I,
					isTopicPage: p.M,
					pageLayer: e => e
				})
			}
			const _ = y(),
				C = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.N)(e, t),
					loadMore: v.g,
					postsById: (e, t) => Object(S.S)(e, {
						...t
					}),
					postIds: Object(i.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: r
					}) => Object(S.F)(e, t, s, r)),
					subredditsById: E.Z,
					viewportDataLoaded: T.a,
					pageReferrer: p.Q,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.d
				},
				L = Object(n.c)(C),
				O = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r) => {
						e(d.H(t, r))
					},
					trackOnPostExitedViewport: (t, s, r, n, i) => {
						e(d.I(t, r, n, i))
					},
					surveyTriggerScrollCounted: () => e(Object(u.g)())
				}),
				N = Object(r.b)(L, O, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(h.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0, s.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(b.b)({
						...e
					})
				}));
			t.a = e => Object(m.c)(_(N(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(n.c)({
				userIsSubscriber: o.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(i.d([t], !0)),
				onSubscriptionsRequested: () => e(i.e()),
				onUnsubscribe: () => e(i.d([t], !1))
			}))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = n.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
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
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
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
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = ({
					message: e
				}) => i.a.createElement("div", {
					className: c.a.container
				}, i.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), i.a.createElement(o.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, r.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => i.a.createElement("div", {
					className: c.a.container
				}, i.a.createElement("h3", {
					className: c.a.title
				}, e || r.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), i.a.createElement(o.k, {
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
				n = s.n(r),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/pages/topic.ts"),
				u = s("./src/reddit/components/ListingPostList/index.tsx"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/icons/svgs/Search/index.tsx"),
				b = s("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				h = s.n(b);
			var g = e => {
					const {
						topic: t
					} = e;
					return n.a.createElement("span", {
						className: h.a.Container
					}, n.a.createElement(m.a, {
						className: h.a.Link,
						title: t.name,
						to: t.url
					}, n.a.createElement("span", {
						className: h.a.IconContainer
					}, n.a.createElement(p.a, null)), n.a.createElement("span", {
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
					topics: i
				} = e;
				return i.length ? n.a.createElement(f.a, {
					className: S.a.Container
				}, r && n.a.createElement("div", {
					className: S.a.Title
				}, n.a.createElement(x.b, {
					type: x.a.Widget
				}, r)), n.a.createElement("div", {
					className: S.a.RelatedTopicList
				}, i.slice(0, s).map(e => n.a.createElement(g, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var T = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				y = s("./src/reddit/components/TopicSidebar/index.tsx"),
				_ = s("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				C = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/helpers/trackers/screenview.ts"),
				P = s("./src/reddit/layout/page/Listing/index.tsx"),
				j = s("./src/reddit/pages/ErrorPages/index.tsx"),
				I = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				R = s.n(k);
			class F extends n.a.Component {
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
					return r.includes(s) ? n.a.createElement("div", {
						className: Object(o.a)(R.a.Tab, {
							[R.a.ActiveTab]: s === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var B = F,
				V = s("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				M = s.n(V);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var W;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(W || (W = {}));
			class D extends n.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? n.a.createElement("ul", {
						className: M.a.parentRelatedTopics
					}, e.map(({
						namePlural: e,
						url: t
					}, s) => n.a.createElement("li", {
						key: s
					}, n.a.createElement(m.a, {
						className: M.a.link,
						to: t
					}, e)))) : H._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: s,
						onTabClick: r,
						tabs: i,
						topicName: a
					} = this.props, c = {
						activeTab: e,
						onTabClick: r,
						tabs: i
					};
					return n.a.createElement("div", {
						className: Object(o.a)(M.a.Container, t)
					}, n.a.createElement("div", {
						className: Object(o.a)(M.a.Content, s === L.g.Large ? M.a.cardWidth : M.a.fullWidth)
					}, n.a.createElement("div", {
						className: M.a.Header
					}, n.a.createElement("div", {
						className: M.a.Title
					}, n.a.createElement(x.b, {
						type: x.a.TopicHeader
					}, a)), n.a.createElement("div", {
						className: M.a.Subtitle
					}, this.renderSubtitleContent())), n.a.createElement("div", {
						className: M.a.Tabs
					}, n.a.createElement(B, A({
						tab: W.Posts
					}, c), H._("Posts", null, {
						hk: "3RLrle"
					})), n.a.createElement(B, A({
						tab: W.Communities
					}, c), H._("Communities", null, {
						hk: "KIwd1"
					})), n.a.createElement(B, A({
						tab: W.RelatedTopics
					}, c), H._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var J = D,
				U = s("./src/reddit/pages/Topic/Relationship/index.m.less"),
				G = s.n(U);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Q = 5;
			class Y extends n.a.Component {
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
					return n.a.createElement(E, {
						limit: Q,
						title: e,
						topics: t
					}, this.renderSeeMoreButton())
				}
				renderSeeMoreButton() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return t.length < Q ? null : n.a.createElement(I.a, {
						onClick: this.onClick,
						to: "#"
					}, n.a.createElement(w.o, {
						className: G.a.SeeAllRelatedTopics
					}, z._("See all {=[Topic name plural]}", [z._param("=[Topic name plural]", n.a.createElement("span", {
						className: G.a.TopicName
					}, z._("{Topic name plural}", [z._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var K = Y,
				Z = s("./src/lib/prettyPrintNumber/index.ts"),
				q = s("./src/reddit/components/Flair/index.tsx"),
				X = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = s("./src/reddit/constants/posts.ts"),
				te = s("./src/reddit/helpers/name/index.ts"),
				se = s("./src/reddit/models/Flair/index.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/selectors/user.ts"),
				ie = s("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				oe = s.n(ie);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ce = Object(i.c)({
				isLoggedIn: ne.J,
				subreddit: re.S,
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
						subredditAboutInfo: i
					} = e, a = Object(te.c)(r.displayText || r.name);
					return n.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t)
					}, n.a.createElement(X.b, {
						className: oe.a.Icon,
						subredditOrProfile: r
					}), n.a.createElement("div", {
						className: oe.a.Text
					}, n.a.createElement(m.a, {
						className: oe.a.Link,
						to: r.url
					}, n.a.createElement("div", {
						className: oe.a.Name
					}, a), n.a.createElement("div", {
						className: oe.a.Meta
					}, n.a.createElement("div", {
						className: oe.a.Members
					}, ae._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [ae._plural(r.subscribers, "subscribers count", Object(Z.b)(r.subscribers))], {
						hk: "48BXj1"
					})), r.isNSFW && n.a.createElement(q.b, {
						flair: le
					}))), n.a.createElement("div", {
						className: oe.a.About
					}, i.publicDescription || ae._("Welcome to {subreddit name}", [ae._param("subreddit name", a)], {
						hk: "vZ7VH"
					})), n.a.createElement(m.a, {
						className: oe.a.VisitLink,
						to: r.url
					}, ae._("Visit", null, {
						hk: "2z3clp"
					}))), n.a.createElement($.a, {
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
				me = s("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				pe = s.n(me);

			function be(e) {
				const {
					subredditIds: t = []
				} = e;
				return n.a.createElement("div", {
					className: pe.a.SubredditList
				}, t.map(e => n.a.createElement(ue, {
					className: pe.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var he = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = s("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				xe = s.n(ge);
			class fe extends n.a.Component {
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
					return n.a.createElement("div", {
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
			class ye extends n.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: s,
							onTabClick: r
						} = this.props;
						return n.a.createElement(ve, {
							activeIndex: s,
							index: t,
							key: e.slug,
							onTabClick: r,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => n.a.createElement("div", {
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
					return t === W.RelatedTopics ? this.renderRelatedTopicsHeader() : n.a.createElement("div", {
						className: Ee.a.TabHeader
					}, n.a.createElement("div", {
						className: Ee.a.TabTitle
					}, n.a.createElement(x.b, {
						type: x.a.Widget
					}, this.renderTitle())), s && n.a.createElement(he.a, {
						className: Ee.a.PostsLayoutSwitch,
						layout: L.e[e]
					}))
				}
			}
			var _e = ye,
				Ce = s("./src/reddit/selectors/topic.ts"),
				Le = s("./src/reddit/pages/Topic/index.m.less"),
				Oe = s.n(Le);
			const {
				fbt: Ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Pe = Object(O.t)(), je = (e, t) => t.match.params.sort || a.Q, Ie = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(W.Posts), e.hasSubreddits && t.push(W.Communities), e.childRelationships.length && t.push(W.RelatedTopics), t) : t
			}, we = Object(d.b)(() => Object(i.a)((e, t) => Object(Ce.d)(e, t.match.params.topicSlug), (e, t) => Object(Ce.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Ce.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), O.N, je, e => {
				var t;
				return null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status
			}, (e, t, s, r, n, i, o, a) => ({
				layout: i,
				parentRelatedTopics: r,
				siblingRelatedTopics: n,
				sort: o,
				status: a || 200,
				tabs: Ie(s),
				timeSort: void 0,
				topic: s,
				topicName: e,
				topicNamePlural: t
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.morePostsRequested)(t.match.params))
			})), ke = (e, t) => e === W.Communities ? L.g.Large : t;
			class Re extends n.a.Component {
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
						return Object(N.f)(Object(c.a)(C.b.Topic, null, {
							topicSlug: null === (s = this.props.topic) || void 0 === s ? void 0 : s.slug
						}), this.props.sort, t, e, this.props.timeSort)
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => n.a.createElement(K, {
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
						n = r && e.tabs.includes(r) && r,
						i = e.tabs[0],
						o = s || n || i;
					return {
						activeLayout: ke(o, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: o
					}
				}
				componentDidUpdate(e) {
					var t, s;
					(null === (t = this.props.topic) || void 0 === t ? void 0 : t.id) !== (null === (s = e.topic) || void 0 === s ? void 0 : s.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: s,
						siblingRelatedTopics: r,
						status: i,
						tabs: a,
						topic: d,
						topicName: l,
						topicNamePlural: m
					} = this.props, p = t.params.topicSlug, b = Object(c.a)(C.b.Topic, null, {
						topicSlug: p
					}), {
						activeLayout: h,
						activeRelationshipIndex: g,
						activeTab: x
					} = this.state, f = C.b.Topic;
					if (404 === i) return n.a.createElement(j.b, null);
					if (500 === i) return n.a.createElement(j.b, {
						message: Ne._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!d) return null;
					const v = d.childRelationships[g],
						S = v && v.relatedTopics || [],
						L = n.a.createElement(n.a.Fragment, null, n.a.createElement(_e, {
							activeLayout: h,
							activeRelationshipIndex: g,
							activeTab: x,
							onTabClick: this.openTab,
							topic: d,
							topicName: l,
							topicNamePlural: m
						}), n.a.createElement("div", {
							className: Object(o.a)(Oe.a.TopicTab, {
								[Oe.a.active]: x === W.Communities
							})
						}, n.a.createElement(be, {
							subredditIds: d.subredditIds
						})), n.a.createElement("div", {
							className: Object(o.a)(Oe.a.TopicTab, {
								[Oe.a.active]: x === W.Posts
							})
						}, x === W.Posts && n.a.createElement(u.a, {
							forcedLayout: h,
							listingKey: b,
							listingName: f,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), n.a.createElement("div", {
							className: Object(o.a)(Oe.a.TopicTab, {
								[Oe.a.active]: x === W.RelatedTopics
							})
						}, n.a.createElement(E, {
							topics: S
						}))),
						O = x !== W.RelatedTopics,
						N = x !== W.Communities && a.includes(W.Communities),
						I = n.a.createElement("div", {
							className: Oe.a.WidgetsContainer
						}, N && n.a.createElement(_.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: d.subredditIds,
							topicUrl: d.url
						}), O && d.childRelationships.map(this.renderRelationship), n.a.createElement(E, {
							limit: 5,
							title: Ne._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: r
						}));
					return n.a.createElement(T.a, null, n.a.createElement(P.a, {
						className: Object(o.a)(Oe.a.Container, e),
						content: L,
						fitPageToContent: !0,
						forcedLayout: h,
						sidebars: [null, n.a.createElement(y.a, {
							key: "right",
							className: Oe.a.SidebarRight,
							listingName: f
						}, I)],
						navBar: n.a.createElement(J, {
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
			t.default = Pe(we(Re))
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
				return m
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
				n = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.S)(e, {
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
					const s = m(e, t);
					if (!s) return l;
					const r = Object(i.W)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : l
				},
				m = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.S)(e, {
						subredditId: s
					}) : null
				},
				p = (e, t, s, r, i) => {
					const o = i.find(e => e <= t) || -1,
						a = i.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							i = s[t],
							o = i && Object(n.I)(e, {
								postId: r
							}) || null,
							a = i && Object(n.I)(e, {
								postId: i
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				b = [3],
				h = (e, t, {
					listingKey: s
				}) => {
					const r = t.slice().sort();
					let i = -1;
					const o = Object(n.B)(e, {
							listingKey: s
						}),
						a = [];
					return b.forEach(t => {
						let s = i + t;
						if (!(s >= o.length)) {
							for (; s < o.length && !p(e, s, t, o, r);) s += 1;
							s < o.length && (a.push(s), i = s)
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
					const t = Object(o.I)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.231632ac9acabc01f073.js.map