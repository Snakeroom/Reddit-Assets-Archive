// https://www.redditstatic.com/desktop2x/Frontpage~ModListing.9b7b0a517ee0af864187.js
// Retrieved at 2/6/2020, 12:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing"], {
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/upperFirst.js"),
				r = s.n(o),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/components/EmptySubreddit.m.less"),
				y = s.n(g),
				b = s("./src/lib/lessComponent.tsx");
			const P = b.a.div("PrimaryText", y.a),
				f = b.a.div("SecondaryText", y.a),
				E = b.a.div("MainContentWrapper", y.a),
				x = b.a.div("MainContent", y.a),
				L = b.a.wrapped(u.a, "BackgroundPlaceholder", y.a),
				C = b.a.wrapped(h.h, "SubmitLink", y.a),
				S = b.a.img("SnooImg", y.a),
				I = b.a.div("EmptyHomepage", y.a),
				O = e => {
					switch (e) {
						case d.N.RISING:
							return Object(p.c)("Create a new post and take all the glory");
						case d.N.TOP:
						case d.N.CONTROVERSIAL:
							return null;
						default:
							return Object(p.c)("Be the first to till this fertile land.")
					}
				},
				w = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const o = O(s);
					return i.a.createElement(x, null, i.a.createElement(P, null, (e => {
						switch (e) {
							case d.N.RISING:
								return Object(p.c)("Looks like nothing is rising fast enough in this subreddit");
							case d.N.TOP:
							case d.N.CONTROVERSIAL:
								return Object(p.c)("No posts were found using the ".concat(r()(e), " sort. Try changing the sort."));
							default:
								return Object(p.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(c.a)(t) && !!o && i.a.createElement(i.a.Fragment, null, i.a.createElement(f, null, O(s)), i.a.createElement(C, {
						to: "/r/".concat(t, "/submit")
					}, i.a.createElement(l.c, null, "Add a post"))))
				},
				v = () => i.a.createElement(x, null, i.a.createElement(S, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), i.a.createElement(P, null, i.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), i.a.createElement(C, {
					to: "/r/popular"
				}, i.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = b.a.wrapped(e => i.a.createElement(I, null, i.a.createElement(L, {
				isLoading: !1,
				layout: m.g.Classic
			}), i.a.createElement(E, null, e.subreddit ? i.a.createElement(w, e) : i.a.createElement(v, null))), "Component", y.a)
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(o.a)
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return z
			})), s.d(t, "a", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				n = s.n(r),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-dom/index.js"),
				p = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/fastdom/index.ts"),
				g = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts"),
				b = s("./src/lib/sentry/index.ts"),
				P = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				E = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/Translated/index.tsx"),
				L = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				S = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/getClickInfo.ts"),
				w = s("./src/reddit/helpers/pixels.ts"),
				v = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				j = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/helpers/brandSafety/index.ts"),
				R = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				K = s("./src/reddit/components/PostList/index.m.less"),
				T = s.n(K),
				A = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
					}
					return s
				};
			const B = 500,
				F = new R.a(B),
				V = new R.a(B),
				H = new R.a(B),
				W = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				D = g.a.div("SeeMore", T.a),
				U = g.a.wrapped(j.a, "ArrowRight", T.a),
				Z = (e, t, s, o, r, n, i, a) => {
					const d = s ? "last-".concat(o, "-").concat(r) : "",
						c = "entered-".concat(e, "-").concat(t, "-").concat(d, "-").concat(n);
					let l = F.get(c);
					return void 0 === l && (l = () => {
						s && i.onBottomViewed(o, r), i.trackOnPostEnteredViewport(e, t, a)
					}, F.set(c, l)), l
				},
				q = (e, t, s, o) => {
					const r = "left-".concat(e, "-").concat(t);
					let n = V.get(r);
					return void 0 === n && (n = r => {
						s.trackOnPostExitedViewport(e, t, r, o)
					}, V.set(r, n)), n
				},
				z = (e, t) => {
					const s = "click-".concat(e);
					let o = H.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && Object(w.a)(s.events, L.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(y.d)(s.source.outboundUrl, y.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(O.a)(e)
						})
					}, H.set(s, o)), o
				},
				J = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class G extends c.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new R.a(B), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = n()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: o
						} = this.props, r = t(), n = [];
						r.forEach(e => n.push(e.id));
						const i = n.map(e => s[e]).filter(Boolean),
							a = i.map(e => o[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(k.a)(i, a))
					}, h.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(h.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (u.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(h.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = N.c.end(e);
					setTimeout(() => {
						s(t(o, M.TimerType.InApp))
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
					const t = this.props,
						{
							postsById: s
						} = t,
						o = A(t, ["postsById"]),
						{
							postsById: r
						} = e,
						n = A(e, ["postsById"]),
						i = Object.keys(o),
						a = Object.keys(n);
					if (a.length !== i.length) return !0;
					if (a.some(e => o[e] !== n[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((o, n) => {
							const i = 0 === n;
							return t({
								isFirstPost: i,
								layout: e,
								post: s[o]
							}) !== t({
								isFirstPost: i,
								layout: e,
								post: r[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: r,
						isCommentPermalink: n,
						isCommentsPage: i,
						isFrontpage: a,
						isProfilePostListing: d,
						listingKey: l,
						listingName: p,
						pageLayer: m,
						pageReferrer: u,
						postClickEvent: g,
						redditStyle: y
					} = this.props, P = 0 === t, f = s ? "last-index" : "", E = "post-".concat(o, "-").concat(e, "-").concat(t, "-").concat(f, "-").concat(p, "-").concat(l, "-").concat(u);
					let x;
					if (void 0 === (x = this.scrollChildCache.get(E))) {
						const {
							inSubredditOrProfile: f,
							postsById: L
						} = this.props, C = L[e], I = C.crosspostRootId && L[C.crosspostRootId] ? L[C.crosspostRootId] : C;
						C.crosspostRootId && !L[C.crosspostRootId] && b.c.withScope(e => {
							e.setExtra("errorType", h.p.API), e.setExtra("description", "Post ".concat(C.id, " is crosspost of ").concat(C.crosspostRootId, ", but ") + "".concat(C.crosspostRootId, " details are missing in the state")), b.c.captureMessage("Crosspost parent details are missing")
						});
						const O = this.props.postComponentForLayout({
								isCrosspost: !!C.crosspostRootId,
								isFirstPost: P,
								layout: o,
								post: I
							}),
							w = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							j = Z(e, o, s, l, p, u, this.props, t),
							k = q(e, o, this.props, t),
							R = z(e, this.props),
							N = I.media && I.media.type === _.n.EMBED ? I.media.provider : null;
						x = {
							estHeight: Object(v.c)(C, o),
							id: e,
							isFocusable: !(!I.media || o !== S.g.Large) && (_.d.has(I.media.type) && (!N || !_.q.has(N)) && !I.isSpoiler && !I.isNSFW),
							trackOnEnteredViewport: j,
							trackOnExitedViewport: k,
							render: t => {
								let {
									className: o,
									height: h,
									width: u,
									remeasure: b,
									setScrollerChildRef: E,
									shouldLoadInitially: x
								} = t;
								return c.a.createElement(O, {
									className: o,
									currentProfileName: r,
									key: w,
									availableWidth: u,
									eventFactory: g,
									first: P,
									forceLoadMedia: x,
									inSubredditOrProfile: f,
									isCommentPermalink: n,
									isCommentsPage: i,
									isFrontpage: a,
									isProfilePostListing: d,
									listingKey: l,
									listingName: p,
									pageLayer: m,
									last: s,
									onClickPost: R,
									onSizeChanged: b,
									postId: e,
									redditStyle: y,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: E
								})
							}
						}, this.scrollChildCache.set(E, x)
					}
					return x
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return c.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: r,
						postListPlaceholderComponent: n
					} = this.props;
					if (s) return;
					const i = n;
					return c.a.createElement("div", {
						className: T.a.placeholder
					}, c.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && c.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: r,
						onLoadMore: n
					} = this.props;
					if (!s) return c.a.createElement("div", {
						className: T.a.placeholder
					}, c.a.createElement(P.a, {
						className: r,
						isLoading: !!t,
						layout: o,
						countOverride: W[o]
					}), !!e && c.a.createElement(f.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: n,
						layout: i,
						location: a,
						loadMore: l,
						postIds: u,
						onLoadMore: g
					} = this.props;
					let y = u.map((e, t, s) => {
						const o = t === u.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					r && (y = J(y, r));
					const b = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						P = a ? Object(o.e)(a) : null,
						f = P || n;
					return c.a.createElement(d.Fragment, null, c.a.createElement(E.b, {
						innerRef: this.updateScrollerRef,
						className: f ? T.a.truncatedPostList : Object(m.a)(T.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: g,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: b,
						viewportTopPadding: C.f
					}, y), P && c.a.createElement(D, {
						className: T.a.seeMoreButton
					}, c.a.createElement(I.a, {
						className: T.a.seeMorePostsText,
						to: Object(p.a)(P, {
							type: h.Kb.Posts
						})
					}, c.a.createElement(x.a, {
						msgId: "search.seeMorePosts"
					}), c.a.createElement(U, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			G.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: c.a.Fragment
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					pageLayer: e => e
				})
			}
			const E = f(),
				x = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: u.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.L)(e, t),
					loadMore: g.g,
					postsById: y.T,
					postIds: Object(n.a)((e, t) => {
						let {
							listingKey: s,
							listingName: o,
							inSubredditOrProfile: r
						} = t;
						return Object(y.F)(e, s, o, r)
					}),
					subredditsById: b.W,
					viewportDataLoaded: P.a,
					pageReferrer: l.O,
					postListPlaceholderComponent: () => h.a
				},
				L = Object(r.c)(x),
				C = (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(a.A(t))
					},
					trackOnPostEnteredViewport: (t, s, o) => {
						e(a.D(t, o))
					},
					trackOnPostExitedViewport: (t, s, o, r) => {
						e(a.E(t, o, r))
					}
				}),
				S = Object(o.b)(L, C, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: m.f,
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(c.b)(E(S(e)))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === o.a.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		}
	}
]);
//# sourceMappingURL=Frontpage~ModListing.9b7b0a517ee0af864187.js.map