// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic.e9db0738a712d4793fe7.js
// Retrieved at 2/6/2020, 4:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic"], {
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(r.a)
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				n = s.n(o),
				i = s("./node_modules/lodash/last.js"),
				d = s.n(i),
				c = s("./node_modules/react/index.js"),
				a = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				p = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/fastdom/index.ts"),
				g = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts"),
				b = s("./src/lib/sentry/index.ts"),
				f = s("./src/reddit/components/PostList/LoadMore.tsx"),
				w = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				S = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				k = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/helpers/getClickInfo.ts"),
				O = s("./src/reddit/helpers/pixels.ts"),
				L = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				j = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				R = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				I = s("./src/telemetry/index.ts"),
				N = s("./src/telemetry/models/Timer.ts"),
				B = s("./src/reddit/components/PostList/index.m.less"),
				M = s.n(B),
				A = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
					}
					return s
				};
			const F = 500,
				V = new T.a(F),
				W = new T.a(F),
				H = new T.a(F),
				K = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				D = g.a.div("SeeMore", M.a),
				U = g.a.wrapped(j.a, "ArrowRight", M.a),
				z = (e, t, s, r, o, n, i, d) => {
					const c = s ? "last-".concat(r, "-").concat(o) : "",
						a = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(n);
					let l = V.get(a);
					return void 0 === l && (l = () => {
						s && i.onBottomViewed(r, o), i.trackOnPostEnteredViewport(e, t, d)
					}, V.set(a, l)), l
				},
				J = (e, t, s, r) => {
					const o = "left-".concat(e, "-").concat(t);
					let n = W.get(o);
					return void 0 === n && (n = o => {
						s.trackOnPostExitedViewport(e, t, o, r)
					}, W.set(o, n)), n
				},
				Z = (e, t) => {
					const s = "click-".concat(e);
					let r = H.get(s);
					return void 0 === r && (r = (e, s) => {
						s.isSponsored && Object(O.a)(s.events, E.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(y.d)(s.source.outboundUrl, y.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(v.a)(e)
						})
					}, H.set(s, r)), r
				},
				X = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(F), this.updateScrollerRef = e => {
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
							subredditsById: r
						} = this.props, o = t(), n = [];
						o.forEach(e => n.push(e.id));
						const i = n.map(e => s[e]).filter(Boolean),
							d = i.map(e => r[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(R.a)(i, d))
					}, m.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && I.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = I.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = I.c.end(this.timerId);
						setTimeout(() => Object(I.b)(m.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && I.c.cancel(this.timerId), e.postIds.length && (this.timerId = I.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (u.a.read(() => this.checkAndSendScreenview()), this.timerId && I.c.has(this.timerId)) {
						const e = I.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(I.b)(m.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && I.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && d()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return I.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = I.c.end(e);
					setTimeout(() => {
						s(t(r, N.TimerType.InApp))
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
						r = A(t, ["postsById"]),
						{
							postsById: o
						} = e,
						n = A(e, ["postsById"]),
						i = Object.keys(r),
						d = Object.keys(n);
					if (d.length !== i.length) return !0;
					if (d.some(e => r[e] !== n[e])) return !0;
					if (s === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((r, n) => {
							const i = 0 === n;
							return t({
								isFirstPost: i,
								layout: e,
								post: s[r]
							}) !== t({
								isFirstPost: i,
								layout: e,
								post: o[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: o,
						isCommentPermalink: n,
						isCommentsPage: i,
						isFrontpage: d,
						isProfilePostListing: c,
						listingKey: l,
						listingName: p,
						pageLayer: h,
						pageReferrer: u,
						postClickEvent: g,
						redditStyle: y
					} = this.props, f = 0 === t, w = s ? "last-index" : "", S = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(w, "-").concat(p, "-").concat(l, "-").concat(u);
					let x;
					if (void 0 === (x = this.scrollChildCache.get(S))) {
						const {
							inSubredditOrProfile: w,
							postsById: E
						} = this.props, C = E[e], P = C.crosspostRootId && E[C.crosspostRootId] ? E[C.crosspostRootId] : C;
						C.crosspostRootId && !E[C.crosspostRootId] && b.c.withScope(e => {
							e.setExtra("errorType", m.p.API), e.setExtra("description", "Post ".concat(C.id, " is crosspost of ").concat(C.crosspostRootId, ", but ") + "".concat(C.crosspostRootId, " details are missing in the state")), b.c.captureMessage("Crosspost parent details are missing")
						});
						const v = this.props.postComponentForLayout({
								isCrosspost: !!C.crosspostRootId,
								isFirstPost: f,
								layout: r,
								post: P
							}),
							O = "post-list-item-[layout: ".concat(r, "]-[postId: ").concat(e, "]"),
							j = z(e, r, s, l, p, u, this.props, t),
							R = J(e, r, this.props, t),
							T = Z(e, this.props),
							I = P.media && P.media.type === _.n.EMBED ? P.media.provider : null;
						x = {
							estHeight: Object(L.c)(C, r),
							id: e,
							isFocusable: !(!P.media || r !== k.g.Large) && (_.d.has(P.media.type) && (!I || !_.q.has(I)) && !P.isSpoiler && !P.isNSFW),
							trackOnEnteredViewport: j,
							trackOnExitedViewport: R,
							render: t => {
								let {
									className: r,
									height: m,
									width: u,
									remeasure: b,
									setScrollerChildRef: S,
									shouldLoadInitially: x
								} = t;
								return a.a.createElement(v, {
									className: r,
									currentProfileName: o,
									key: O,
									availableWidth: u,
									eventFactory: g,
									first: f,
									forceLoadMedia: x,
									inSubredditOrProfile: w,
									isCommentPermalink: n,
									isCommentsPage: i,
									isFrontpage: d,
									isProfilePostListing: c,
									listingKey: l,
									listingName: p,
									pageLayer: h,
									last: s,
									onClickPost: T,
									onSizeChanged: b,
									postId: e,
									redditStyle: y,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: S
								})
							}
						}, this.scrollChildCache.set(S, x)
					}
					return x
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return a.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: r,
						onTryAgain: o,
						postListPlaceholderComponent: n
					} = this.props;
					if (s) return;
					const i = n;
					return a.a.createElement("div", {
						className: M.a.placeholder
					}, a.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && a.a.createElement(w.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: o,
						onLoadMore: n
					} = this.props;
					if (!s) return a.a.createElement("div", {
						className: M.a.placeholder
					}, a.a.createElement(f.a, {
						className: o,
						isLoading: !!t,
						layout: r,
						countOverride: K[r]
					}), !!e && a.a.createElement(w.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isTruncated: n,
						layout: i,
						location: d,
						loadMore: l,
						postIds: u,
						onLoadMore: g
					} = this.props;
					let y = u.map((e, t, s) => {
						const r = t === u.length - 1;
						return this.scrollChildForPost(e, t, r, i)
					});
					o && (y = X(y, o));
					const b = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						f = d ? Object(r.e)(d) : null,
						w = f || n;
					return a.a.createElement(c.Fragment, null, a.a.createElement(S.b, {
						innerRef: this.updateScrollerRef,
						className: w ? M.a.truncatedPostList : Object(h.a)(M.a.postList, this.props.className),
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
					}, y), f && a.a.createElement(D, {
						className: M.a.seeMoreButton
					}, a.a.createElement(P.a, {
						className: M.a.seeMorePostsText,
						to: Object(p.a)(f, {
							type: m.Kb.Posts
						})
					}, a.a.createElement(x.a, {
						msgId: "search.seeMorePosts"
					}), a.a.createElement(U, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			q.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: a.a.Fragment
			}
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(d);
			const {
				fbt: a
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = n.a.a("Link", c.a);
			t.a = e => o.a.createElement(i.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: c.a.LinkContainer
			}, o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, a._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, a._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, a._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, a._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, a._("Reddit gifts", null, {
				hk: "2XziRN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, a._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, a._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, a._("Topics", null, {
				hk: "349RFt"
			}))), o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://about.reddit.com"
			}, a._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, a._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, a._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, a._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, a._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, a._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, a._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, a._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, a._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: c.a.Copyright
			}, a._("Reddit Inc © {year}. All rights reserved", [a._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				n = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/components/BackToTop/index.m.less"),
				h = s.n(p),
				m = e => d.a.createElement("div", {
					className: Object(r.a)(e.className, h.a.container),
					style: e.style
				}, d.a.createElement(a.f, {
					className: h.a.button,
					onClick: () => window.scroll(0, 0)
				}, d.a.createElement(l.c, null, "Back to top"))),
				u = s("./src/reddit/components/SidebarFooter/index.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(b),
				w = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (s[r[o]] = e[r[o]])
				}
				return s
			};
			const E = c.e[1] + 24,
				C = g.f + 8 + 152 + 32 + 16,
				k = C + E + 8,
				P = w.a.div("Container", f.a),
				v = w.a.wrapped(e => {
					var {
						className: t
					} = e, s = x(e, ["className"]);
					return d.a.createElement(m, S({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				O = e => {
					let {
						children: t,
						className: s,
						isSticky: o
					} = e;
					return d.a.createElement("div", {
						className: Object(r.a)(s, {
							[f.a.StickyStyles]: o
						})
					}, t)
				};
			class L extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
						shouldFooterSticky: this.windowHeight > C
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = n()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							children: t,
							className: s,
							hideFooter: r
						}
					} = this, o = this.state.isAdSticky && !(!e && !t);
					return d.a.createElement(P, {
						className: s,
						innerRef: this.setWrapperRef
					}, d.a.createElement(O, {
						isSticky: o
					}, e, t, !r && d.a.createElement(u.a, null)), !this.props.hideBackToTop && d.a.createElement(v, null))
				}
			}
			const j = Object(y.t)();
			t.a = j(L)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/selectors/telemetry.ts");
			const u = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(m.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, m.defaults);
			var g = s("./src/reddit/i18n/components.tsx"),
				y = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/models/Theme/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = E(e);
					return Object(S.f)(t)
				},
				P = e => {
					const t = C(e);
					return Object(S.f)(t)
				};
			var v = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = s.n(v);
			const L = Object(p.t)(),
				j = Object(n.b)(() => Object(i.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(p.m)(e, t) || void 0,
							r = t.redditStyle || Object(f.m)(e, {
								subredditId: s
							}),
							o = Object(w.R)(e);
						return r || o
					},
					nigtmode: w.R,
					subredditId: p.m,
					topPostVariant: b.d
				}));
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(u(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.borderColor = Object(y.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = P(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: r,
						headerButton: n,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: p
					} = this.props, m = s ? O.a.widgetContentOnly : O.a.widgetContent, u = !r && this.props.styles, y = u ? this.getWidgetBackgroundStyles() : {}, b = u ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(d.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: r,
							[O.a.clickable]: !!i,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: i,
						style: y
					}, c && o.a.createElement("div", {
						className: O.a.widgetHeader,
						style: b
					}, o.a.createElement("div", {
						className: Object(d.a)(O.a.widgetTitle, l)
					}, o.a.createElement(a.b, {
						type: a.a.Widget
					}, c)), n), o.a.createElement("div", {
						className: Object(d.a)(m, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(h.n, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, o.a.createElement(g.c, null, "See More")))
				}
			}
			t.a = L(j(Object(c.a)(Object(l.b)(_))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts");

			function w() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					pageLayer: e => e
				})
			}
			const S = w(),
				x = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: u.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.K)(e, t),
					loadMore: g.g,
					postsById: y.T,
					postIds: Object(n.a)((e, t) => {
						let {
							listingKey: s,
							listingName: r,
							inSubredditOrProfile: o
						} = t;
						return Object(y.F)(e, s, r, o)
					}),
					subredditsById: b.V,
					viewportDataLoaded: f.a,
					pageReferrer: l.N,
					postListPlaceholderComponent: () => m.a
				},
				E = Object(o.c)(x),
				C = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(d.A(t))
					},
					trackOnPostEnteredViewport: (t, s, r) => {
						e(d.D(t, r))
					},
					trackOnPostExitedViewport: (t, s, r, o) => {
						e(d.E(t, r, o))
					}
				}),
				k = Object(r.b)(E, C, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: h.f,
					postComponentForLayout: e => Object(p.b)(Object.assign({}, e))
				}));
			t.a = e => Object(a.b)(S(k(e)))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === r.a.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic.e9db0738a712d4793fe7.js.map