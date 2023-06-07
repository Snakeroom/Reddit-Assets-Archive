// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32.e2d5cbe8de3c03dfa3fa.js
// Retrieved at 6/7/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"], {
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let n;
			const i = new Map,
				o = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!o.get(t)) {
						o.set(t, s);
						const n = i.get(t);
						if (n) {
							n(e, s && !!o.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const r = (e, t) => {
					try {
						i.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				a = e => {
					try {
						i.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(p),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(c.v)(),
				v = Object(r.c)({
					isFakeSubreddit: c.A
				}),
				y = Object(o.b)(v),
				P = e => {
					const t = {
						interactive: !1,
						voteState: m.a.notVoted
					};
					return i.a.createElement("div", {
						className: Object(a.a)(e.className, g.a.emptyVerticalVotes)
					}, i.a.createElement(d.d, f({
						key: "u"
					}, t)), e.children, i.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				w = () => i.a.createElement(P, null, i.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.a = C(y(e => i.a.createElement("div", {
				className: Object(a.a)(e.className, u.a.classicPostStyles, u.a.classicAndCompactPlaceholderStyles)
			}, i.a.createElement(l.b, null, i.a.createElement(w, null)), i.a.createElement("div", {
				className: g.a.mainBody
			}, i.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, i.a.createElement("div", {
				className: Object(a.a)(g.a.thumbnail, Object(h.b)(e))
			})), i.a.createElement("div", {
				className: g.a.content
			}, i.a.createElement("div", {
				key: "a"
			}, i.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(g.a.title, Object(h.b)(e))
			}), i.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(g.a.meta, Object(h.b)(e))
			})), i.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, i.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(g.a.flatlistExpando, Object(h.b)(e))
			}), i.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), i.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(g.a.flatListItemOne, Object(h.b)(e))
			}), i.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(g.a.flatListItemTwo, Object(h.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/CommunityMuting/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./src/reddit/components/ModalStyledComponents/Modal.tsx");
			const a = e => {
				let {
					subredditName: t,
					toggleModal: s,
					onConfirm: i
				} = e;
				return o.a.createElement(r.a, {
					headerText: n.fbt._("Mute {name of subreddit to mute}", [n.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "4eAU3R"
					}),
					modalBody: n.fbt._("You won't see posts from {name of subreddit to mute} in your feeds or recommmendations anymore.", [n.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "1JNA6G"
					}),
					toggleModal: s,
					actionText: n.fbt._("YES, MUTE", null, {
						hk: "1eAO8C"
					}),
					cancelActionText: n.fbt._("CANCEL", null, {
						hk: "If1yt"
					}),
					onConfirm: i,
					withOverlay: !0
				})
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				subredditIcon: "CgxUJgu3x2x0HIb96uJcV",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, i = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				f = s.n(g);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(n || (n = {}));
			const C = m.a.wrapped(p.b, "Row", f.a),
				v = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: b.l
				}),
				y = Object(a.b)(v);
			t.b = y(e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(u.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(h.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, r.a.createElement(C, {
				displayText: i.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), r.a.createElement(u.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(d.a)(Object(h.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: n.OldestFirst
				})
			}, r.a.createElement(C, {
				displayText: i.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === n.OldestFirst
			})), [c.wb.Modqueue, c.wb.Reports].includes(e.currentPage.urlParams.pageName) && r.a.createElement(u.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(d.a)(Object(h.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: n.MostReportedFirst
				})
			}, r.a.createElement(C, {
				displayText: i.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === n.MostReportedFirst
			}))))
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				r = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(o.a)(e => {
				const t = !!e.cancelActionText,
					s = !(!e.actionText || !e.onConfirm);
				return i.a.createElement(r.e, {
					style: e.style
				}, i.a.createElement(r.i, null, i.a.createElement(l.a, null, i.a.createElement(r.q, null, e.headerText), !e.hideCancel && i.a.createElement(a.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, i.a.createElement(r.b, null)))), i.a.createElement(r.l, null, e.modalBody), (t || s) && i.a.createElement(r.g, null, t && i.a.createElement(r.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), s && i.a.createElement(r.u, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/OneFeed/Footer.m.less": function(e, t, s) {
			e.exports = {
				Footer: "_3AaWcDg070_adHsR2kuysq",
				footer: "_3AaWcDg070_adHsR2kuysq",
				ClassicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				classicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				LargeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				largeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				SeeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				seeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				Title: "_21u1WVXVWqUtM7v_Y0c9_0",
				title: "_21u1WVXVWqUtM7v_Y0c9_0",
				Button: "_3FNnHKnM8zvRUpKS2hqoVu",
				button: "_3FNnHKnM8zvRUpKS2hqoVu",
				Divider: "_5XRkOTBpwyH-aTpv3Uj2",
				divider: "_5XRkOTBpwyH-aTpv3Uj2",
				MuteThankYouView: "_15k2ydh8mxGtI2wxNW_lBA",
				muteThankYouView: "_15k2ydh8mxGtI2wxNW_lBA",
				ThankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				thankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				Icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				CommunityMutingTitle: "HHkkaXqGVK3_gJrR3VcQS",
				communityMutingTitle: "HHkkaXqGVK3_gJrR3VcQS",
				Subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8",
				subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8"
			}
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				h = s("./src/reddit/hooks/usePageLayer.ts"),
				m = s("./src/reddit/selectors/modQueue.ts"),
				p = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(p);
			const b = 40,
				g = e => e.isRemoved ? l.a.removed : e.isReported ? l.a.reported : "transparent",
				f = Object(a.a)(e => {
					const t = Object(h.a)(),
						s = Object(o.e)(e => d.e[Object(c.V)(e, {
							pageLayer: t
						})] === d.d.Card),
						n = Object(o.e)(e => Object(m.b)(e, s)) ? "transparent" : g(e),
						a = {
							width: `${b}px`,
							borderLeft: `4px solid ${n}`
						};
					return i.a.createElement("div", {
						className: Object(r.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : a
					}, e.children)
				});
			t.b = f
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/PostList/Placeholder.tsx"),
				o = s("./src/reddit/components/PostList/LoadMore.m.less"),
				r = s.n(o);
			t.a = n.a.wrapped(i.a, "Component", r.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/constant.js"),
				i = s.n(n),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				l = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				h = s("./src/lib/fastdom/index.ts"),
				m = s("./src/lib/intersectionObserver/index.ts"),
				p = s("./src/reddit/helpers/loadingPostComponentForLayout/index.ts");
			const u = .1,
				b = Object(c.c)({
					loadingPostComponentForLayout: () => p.a
				}),
				g = Object(d.b)(b);
			class f extends l.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && m.b(this.wrapperRef), e && m.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= u;
						h.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && m.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: n,
						loadingPostComponentForLayout: o
					} = this.props, {
						visible: a
					} = this.state, [d, c] = o(n), h = t || c, m = i()(l.a.createElement(d, {
						isLoading: s && a
					})), p = r()(h, m);
					return l.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, l.a.Children.toArray(p))
				}
			}
			t.a = g(f)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/helpers/describeApiError/index.ts"),
				l = s("./src/reddit/components/PostList/index.m.less"),
				d = s.n(l);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: s
				} = e;
				let i = n.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return s && (i = Object(a.a)({
					apiError: s,
					isLoggedOut: !1
				})), o.a.createElement("div", {
					className: d.a.somethingWrong
				}, o.a.createElement("div", {
					className: d.a.somethingWrongText
				}, i), t && o.a.createElement(r.l, {
					onClick: t
				}, n.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			}
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return xe
			})), s.d(t, "a", (function() {
				return Ie
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, i = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				a = s("./node_modules/lodash/last.js"),
				l = s.n(a),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				h = s("./node_modules/react/index.js"),
				m = s.n(h),
				p = s("./node_modules/shallowequal/index.js"),
				u = s.n(p),
				b = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/fastdom/index.ts"),
				v = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				P = s("./node_modules/react-redux/es/index.js"),
				w = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/actions/subreddit/muting.ts"),
				O = s("./src/reddit/actions/toaster.ts"),
				I = s("./src/reddit/constants/oneFeed.ts"),
				R = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/contexts/ApiContext.tsx"),
				E = s("./src/lib/makeGqlRequest/index.ts"),
				M = s("./src/redditGQL/operations/UpdateRecommendationPreferences.json");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(n || (n = {}));
			const k = (e, t) => Object(E.a)(e, {
					...M,
					variables: t
				}),
				j = (e, t) => k(e(), {
					input: {
						dislikedSimilarSubredditSeedPreference: {
							action: n.ADD,
							subredditId: t
						}
					}
				}),
				T = (e, t) => k(e(), {
					input: {
						dislikedSubredditPreference: {
							action: n.ADD,
							subredditId: t
						}
					}
				});
			var _ = s("./src/reddit/helpers/trackers/post.ts"),
				L = s("./src/reddit/helpers/trackers/subredditMuting.ts"),
				N = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				F = s("./src/reddit/hooks/useTracking.ts"),
				V = s("./src/reddit/icons/fonts/index.tsx"),
				A = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				H = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/components/CommunityMuting/index.tsx"),
				B = s("./src/reddit/components/OneFeed/Footer.m.less"),
				U = s.n(B);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = async e => {
				let {
					dispatch: t,
					gqlContext: s,
					setRecommendationFooterView: n,
					similar: i,
					subredditId: o,
					isCommunityMutingEnabled: r
				} = e;
				const a = i ? j : T;
				try {
					if (!0 === (await a(s, o)).ok) return void n(r ? I.a.MuteThankYouView : I.a.ThankYouView);
					t(Object(O.d)())
				} catch (l) {
					t(Object(O.d)())
				}
			}, G = e => {
				let {
					displayText: t,
					seeLessFromThisCommunity: s,
					seeLessLikeThisCommunity: n,
					seeLessOfThisPostClick: i
				} = e;
				return m.a.createElement("div", {
					className: U.a.SeeFewerPostsView
				}, m.a.createElement("div", {
					className: U.a.Title
				}, q._("What would you like to see less of?", null, {
					hk: "mw3bZ"
				})), m.a.createElement("div", null, m.a.createElement("button", {
					className: U.a.Button,
					onClick: i
				}, q._("This individual post", null, {
					hk: "103pQH"
				}))), m.a.createElement("hr", {
					className: U.a.Divider
				}), m.a.createElement("div", null, m.a.createElement("button", {
					className: U.a.Button,
					onClick: s
				}, q._("Posts from this community", null, {
					hk: "RacDp"
				}))), !!t && m.a.createElement(m.a.Fragment, null, m.a.createElement("hr", {
					className: U.a.Divider
				}), m.a.createElement("div", null, m.a.createElement("button", {
					className: U.a.Button,
					onClick: n
				}, q._("Posts from communities similar to {subreddit name}", [q._param("subreddit name", t)], {
					hk: "3pCPAD"
				})))))
			}, K = () => m.a.createElement("div", {
				className: U.a.ThankYouView
			}, m.a.createElement("div", {
				className: U.a.Title
			}, m.a.createElement(V.a, {
				name: "checkmark",
				className: U.a.Icon
			}), q._("Thanks for letting us know!", null, {
				hk: "2VBsFC"
			})), m.a.createElement("div", {
				className: U.a.Subtitle
			}, q._("Your feedback improves your feed.", null, {
				hk: "2WLaqS"
			}))), Q = e => {
				let {
					subredditId: t,
					subredditName: s,
					postId: n,
					closeThankYouView: i
				} = e;
				const o = Object(P.d)(),
					[r, a] = Object(h.useState)(!1),
					l = () => {
						a(e => !e)
					},
					d = Object(F.a)();
				return m.a.createElement(m.a.Fragment, null, m.a.createElement(K, null), m.a.createElement("div", {
					className: U.a.MuteThankYouView
				}, m.a.createElement("button", {
					className: U.a.CommunityMutingTitle,
					onClick: l
				}, q._("Mute r/{subreddit name}", [q._param("subreddit name", s)], {
					hk: "2CdBMy"
				})), m.a.createElement("div", {
					className: U.a.Subtitle
				}, q._("Hide community from feeds and notifications", null, {
					hk: "2lFpIL"
				})), r && m.a.createElement(W.a, {
					subredditName: s,
					toggleModal: l,
					onConfirm: () => {
						l(), d(Object(L.a)({
							subredditId: t,
							postId: n
						})), s && o(Object(x.c)({
							subredditId: t,
							subredditName: s
						})), i()
					}
				})))
			};
			var z = Object(S.b)(e => {
					let {
						gqlContext: t,
						layout: s,
						post: n,
						parentPost: i
					} = e;
					var o;
					const r = Object(P.d)(),
						a = Object(F.a)(),
						l = Object(h.useRef)(!1),
						d = Object(P.e)(A.a),
						{
							hideRecommendationFooter: c,
							recommendationFooterView: p,
							setRecommendationFooterView: u
						} = Object(N.a)(),
						b = n.belongsTo.id,
						f = n.id,
						{
							subredditId: C,
							subredditName: v
						} = (null === (o = n.recommendationContext) || void 0 === o ? void 0 : o.source) || {},
						y = Object(P.e)(e => Object(H.i)(e, n, i)),
						x = Object(h.useCallback)(() => {
							const e = !d,
								t = l.current ? () => r(Object(w.db)(f, !0, !1, e)) : c,
								s = d ? setTimeout(t, 0) : setTimeout(t, 1500);
							return () => clearTimeout(s)
						}, [r, c, f, d]);
					Object(h.useEffect)(() => {
						p !== I.a.ThankYouView || d || x()
					}, [r, c, f, p, x, d]);
					const O = Object(h.useCallback)(() => {
							l.current = !0, u(d ? I.a.MuteThankYouView : I.a.ThankYouView), a(Object(_.p)(f))
						}, [f, a, u, d]),
						S = Object(h.useCallback)(() => {
							D({
								dispatch: r,
								gqlContext: t,
								setRecommendationFooterView: u,
								similar: !1,
								subredditId: b,
								isCommunityMutingEnabled: d
							}), l.current = !0, a(Object(_.d)(f))
						}, [r, t, f, a, u, b, d]),
						E = Object(h.useCallback)(() => {
							C && (D({
								dispatch: r,
								gqlContext: t,
								setRecommendationFooterView: u,
								similar: !0,
								subredditId: C,
								isCommunityMutingEnabled: d
							}), l.current = !0, a(Object(_.s)(f)))
						}, [r, t, f, C, a, u, d]);
					return p && p !== I.a.None ? m.a.createElement("div", {
						className: Object(g.a)(U.a.Footer, {
							[U.a.ClassicLayout]: s === R.g.Classic,
							[U.a.CompactLayout]: s === R.g.Compact,
							[U.a.LargeLayout]: s === R.g.Large
						})
					}, p === I.a.SeeFewerPostsView && m.a.createElement(G, {
						displayText: v,
						seeLessFromThisCommunity: S,
						seeLessLikeThisCommunity: E,
						seeLessOfThisPostClick: O
					}), p === I.a.MuteThankYouView && m.a.createElement(Q, {
						subredditId: b,
						postId: f,
						subredditName: y,
						closeThankYouView: x
					}), p === I.a.ThankYouView && m.a.createElement(K, null)) : null
				}),
				Y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				$ = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				X = s("./src/reddit/components/Scroller/Simple.tsx"),
				J = s("./src/reddit/constants/adEvents.ts"),
				Z = s("./src/reddit/constants/componentSizes.ts"),
				ee = s("./src/reddit/contexts/OneFeed/index.ts");
			var te = function(e) {
					let {
						children: t,
						hideRecommendationContext: s = !1
					} = e;
					const [n, i] = Object(h.useState)(I.a.None), o = Object(h.useCallback)(() => i(I.a.None), []), r = Object(h.useMemo)(() => ({
						hideRecommendationContext: s,
						hideRecommendationFooter: o,
						recommendationFooterView: n,
						setRecommendationFooterView: i
					}), [s, o, n, i]);
					return m.a.createElement(ee.a.Provider, {
						value: r
					}, t)
				},
				se = s("./src/reddit/controls/OutboundLink/index.tsx"),
				ne = s("./src/reddit/helpers/getClickInfo.ts"),
				ie = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				oe = s("./src/reddit/models/Media/index.ts"),
				re = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/reddit/helpers/brandSafety/index.ts"),
				le = s("./src/reddit/helpers/trackers/ads.ts"),
				de = s("./src/lib/LRUCache/index.ts"),
				ce = s("./src/telemetry/index.ts"),
				he = s("./src/telemetry/models/Timer.ts"),
				me = s("./src/reddit/components/PostList/index.m.less"),
				pe = s.n(me);
			const {
				fbt: ue
			} = s("./node_modules/fbt/lib/FbtPublic.js"), be = 500, ge = 20, fe = new de.a(be), Ce = new de.a(be), ve = new de.a(be), ye = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, Pe = (e, t, s, n, i, o, r, a, l) => {
				const d = `entered-${e}-${t}-${s?`last-${n}-${i}`:""}-${o}`;
				let c = fe.get(d);
				return void 0 === c && (c = () => {
					s && r.onBottomViewed(n, i), r.trackOnPostEnteredViewport(e, t, a, l)
				}, fe.set(d, c)), c
			}, we = (e, t, s, n) => {
				const i = `left-${e}-${t}`;
				let o = Ce.get(i);
				return void 0 === o && (o = i => {
					s.trackOnPostExitedViewport(e, t, i, n)
				}, Ce.set(i, o)), o
			}, xe = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const n = `click-${e}`;
				let i = ve.get(n);
				return void 0 === i && (i = (e, n, i, o, r) => {
					if (n.isSponsored) {
						t.fireAdPixelsOfType(n, J.a.Click);
						const {
							source: a
						} = Object(b.t)(n, o);
						if (a && a.outboundUrl) {
							let e = a.outboundUrl;
							i && (e = Object(se.a)(n.id, i, e).url), Object(le.a)(n, r), Object(v.e)(e, v.d.BLANK)
						} else Object(re.A)(n) && t.openPost({
							postOrComment: n,
							clickInfo: Object(ne.a)(e),
							isFrontpage: s
						})
					} else t.openPost({
						postOrComment: n,
						clickInfo: Object(ne.a)(e),
						isFrontpage: s
					})
				}, ve.set(n, i)), i
			}, Oe = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Ie extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new de.a(be), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.isBlockingModalShowed = !1, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: n,
							isBlockingInterstitialEnabled: i,
							showModalOnScroll: o
						} = this.props;
						this.dispatchBrandSafety(e), t && n && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e), i && o && !this.isBlockingModalShowed && e.primaryChild && e.primaryChild.index > ge && this.showBlockingInterstitial()
					}, this.showBlockingInterstitial = r()(() => {
						this.props.showModalOnScroll && this.props.showModalOnScroll(), this.isBlockingModalShowed = !0
					}, ge, {
						leading: !0,
						maxWait: 1e3
					}), this.surveyTriggerListener = c()(e => {
						let {
							primaryChild: t
						} = e;
						this.viewportHeight && t && t.rectangle && t.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, i = t(), o = [];
						i.forEach(e => o.push(e.id));
						const r = o.map(e => s[e]).filter(Boolean),
							a = r.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(ae.a)(r, a))
					}, f.f, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && ce.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = ce.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = ce.c.end(this.timerId);
						setTimeout(() => Object(ce.b)(f.n.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && ce.c.cancel(this.timerId), e.postIds.length && (this.timerId = ce.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (C.a.read(() => this.checkAndSendScreenview()), this.timerId && ce.c.has(this.timerId)) {
						const e = ce.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(ce.b)(f.n.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const n = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					n && n !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(n)
				}
				componentWillUnmount() {
					this.timerId && ce.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && l()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return ce.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const n = ce.c.end(e);
					setTimeout(() => {
						s(t(n, he.TimerType.InApp))
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
						...n
					} = this.props, {
						postsById: i,
						triggerNewPostPill: o,
						...r
					} = e, a = Object.keys(n), l = Object.keys(r);
					if (l.length !== a.length) return !0;
					if (l.some(e => {
							let t = !1;
							return t = "function" == typeof n[e] || "object" == typeof n[e] ? !u()(n[e], r[e]) : n[e] !== r[e]
						})) return !0;
					if (t === i) return !1;
					if (s !== o) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((n, o) => {
							return s({
								layout: e,
								post: t[n]
							}) !== s({
								layout: e,
								post: i[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: i,
						hostPostData: o,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: l,
						isProfilePostListing: d,
						isTopicPage: c,
						isCommentCountAnimationEnabled: h,
						isVoteCountAnimationEnabled: p,
						isCountAnimShadowTestEnabled: u,
						listingBelowVariant: b,
						listingKey: C,
						listingName: v,
						pageLayer: P,
						pageReferrer: w,
						redditStyle: x,
						shouldHideFlair: O,
						shouldShowInsightsButton: I,
						triggerNewPostPill: S,
						postIds: E,
						isLoggedIn: M
					} = this.props, k = 0 === t, j = `post-${n}-${e}-${t}-${s?"last-index":""}-${v}-${C}-${w}`;
					let T;
					if (void 0 === (T = this.scrollChildCache.get(j))) {
						const {
							inSubredditOrProfile: _,
							postsById: L
						} = this.props, N = L[e], F = N.crosspostRootId && L[N.crosspostRootId] ? L[N.crosspostRootId] : N;
						let V;
						N.crosspostRootId && L[N.crosspostRootId] && (V = N), N.crosspostRootId && !L[N.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", f.u.API), e.setExtra("description", `Post ${N.id} is crosspost of ${N.crosspostRootId}, but ` + `${N.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const A = this.props.postComponentForLayout({
							isCrosspost: !!N.crosspostRootId,
							layout: n,
							post: F
						});
						let H = `post-list-item-[layout: ${n}]-[postId: ${e}]`;
						this.props.listingBelowVariant && C && (H += `--${C}`);
						const W = Pe(e, n, s, C, v, w, this.props, t, this.props.hostPostData),
							B = we(e, n, this.props, t),
							U = xe(e, this.props, l),
							q = F.media && F.media.type === oe.o.EMBED ? F.media.provider : null,
							D = h && !N.isSponsored,
							G = p && !N.isSponsored && !N.isScoreHidden,
							K = !!(null == N ? void 0 : N.recommendationContext);
						T = {
							estHeight: Object(ie.c)(N, n),
							id: e,
							isFocusable: !(!F.media || n !== R.g.Large) && (oe.c.has(F.media.type) && (!q || !oe.s.has(q)) && !F.isSpoiler),
							trackOnEnteredViewport: W,
							trackOnExitedViewport: B,
							render: h => {
								let {
									className: p,
									height: f,
									width: y,
									remeasure: w,
									setScrollerChildRef: R,
									shouldLoadInitially: j
								} = h;
								return m.a.createElement(te, {
									key: H,
									hideRecommendationContext: !M
								}, m.a.createElement(A, {
									availableWidth: y,
									className: Object(g.a)(p, this.props.postClassName),
									currentProfileName: i,
									eventFactory: this.eventFactoryHandler,
									first: k,
									forceLoadMedia: j,
									hostPostData: o,
									inSubredditOrProfile: _,
									isCommentCountAnimationEnabled: D,
									isCommentPermalink: r,
									isCommentsPage: a,
									isCountAnimShadowTestEnabled: u,
									isFrontpage: l,
									isProfilePostListing: d,
									isTopicPage: c,
									isVoteCountAnimationEnabled: G,
									key: H,
									last: s,
									listingBelowVariant: b,
									listingIndex: t,
									listingKey: C,
									listingName: v,
									onceInViewport: S,
									onClickPost: U,
									onSizeChanged: w,
									pageLayer: P,
									postId: e,
									postIds: E,
									redditStyle: x,
									scrollerItemRef: R,
									sendEvent: this.props.sendEvent,
									shouldHideFlair: O,
									shouldShowInsightsButton: I
								}), K && m.a.createElement(z, {
									post: F,
									layout: n,
									parentPost: V
								}))
							}
						}, this.scrollChildCache.set(j, T)
					}
					return T
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: i,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const r = o;
					return m.a.createElement("div", {
						className: pe.a.placeholder
					}, m.a.createElement(r, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && m.a.createElement($.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: i,
						onLoadMore: o
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: pe.a.placeholder
					}, m.a.createElement(Y.a, {
						className: i,
						isLoading: !!t,
						layout: n,
						countOverride: ye[n]
					}), !!e && m.a.createElement($.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						getInjectChildren: n,
						isTruncated: o,
						layout: r,
						location: a,
						loadMore: l,
						onLoadMore: d,
						postIds: c,
						postsById: p,
						skipSubredditPosts: u
					} = this.props;
					let b = c.filter(e => Boolean(p[e]));
					if (u) {
						const e = [];
						let t = 0,
							s = 0;
						for (; s < b.length;) {
							const n = b[s++],
								i = p[n];
							t < u ? "subreddit" === i.belongsTo.type && (t += 1) : e.push(n)
						}
						b = e
					}
					let f = b.map((e, t, s) => {
						const n = t === s.length - 1;
						return this.scrollChildForPost(e, t, n, r)
					});
					n && (f = Oe(f, n()));
					const C = this.props.measureScrollFPS ? `post-listings-${r}` : void 0,
						v = (a ? Object(i.e)(a) : null) || o;
					return m.a.createElement(h.Fragment, null, m.a.createElement(X.b, {
						innerRef: this.updateScrollerRef,
						className: v ? pe.a.truncatedPostList : Object(g.a)(pe.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: d,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: C,
						viewportTopPadding: Z.f
					}, f), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Ie.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
			}
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, s) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return z
			}));
			var n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				o = s("./node_modules/lodash/isNil.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				l = s.n(a),
				d = s("./node_modules/react-dom/index.js"),
				c = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/request-idle-callback/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/fastdom/index.ts"),
				b = s("./node_modules/lodash/throttle.js"),
				g = s.n(b);
			const f = 500,
				C = 1e3,
				v = 40;
			var y;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(y || (y = {}));
			const P = () => ({
					[y.Max10]: 0,
					[y.Max20]: 0,
					[y.Max30]: 0,
					[y.Max40]: 0,
					[y.Max50]: 0,
					[y.Max60]: 0
				}),
				w = [y.Max10, y.Max20, y.Max30, y.Max40, y.Max50, y.Max60],
				x = e => ({
					eventHandler: e
				});

			function O(e) {
				let {
					fn: t,
					subscriber: s,
					timeout: n
				} = e;
				const i = [];
				let o, r, a;
				const l = () => {
						if (i.length < v) return;
						const e = P(),
							t = Math.min(C, i.length),
							n = i.splice(0, t);
						i.splice(0, i.length);
						const o = n[t - 1] - n[0];
						for (let s = n.shift(); n.length > 0; s = n.shift()) {
							const t = n[0] - s,
								i = Math.min(60, Math.ceil(1e3 / t));
							e[i <= 10 ? y.Max10 : 60 === i ? y.Max60 : w[Math.ceil(i / 10) - 1]] += t
						}
						const r = P();
						for (const s in e) r[s] = e[s] / o;
						s(r)
					},
					d = () => {
						void 0 !== a && (window.clearTimeout(a), a = void 0)
					},
					c = () => {
						void 0 !== o && (cancelAnimationFrame(o), o = void 0), void 0 !== r && (window.clearInterval(r), r = void 0), d(), l()
					},
					h = () => {
						o = requestAnimationFrame(() => {
							i.push(performance.now()), h()
						})
					},
					m = g()(() => {
						d(), a = window.setTimeout(c, n)
					}, p.M);
				return {
					cleanup: c,
					eventHandler: e => {
						void 0 === r ? (h(), m(), r = window.setInterval(l, f)) : m(), t(e)
					}
				}
			}
			var I = s("./src/lib/scheduler/index.ts"),
				R = s("./src/lib/domUtils/index.ts"),
				S = s("./src/lib/LinkedListMap/index.ts");
			const E = (e, t) => e < 0 ? t + e : e % t;
			class M {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = E(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = E(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? E(this.head - this.size, this.maxSize) : this.head;
					for (let s = 0; s < this.size; s++) e(this.items[t], s, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((s, n, i) => {
						t[n] = e(s, n, i)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, s) => {
						e[s] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var k = s("./src/reddit/components/Scroller/getDocumentTop.ts");
			class j {
				constructor(e) {
					let {
						top: t,
						height: s,
						heightWithSuffix: n
					} = e;
					this.height = s, this.heightWithSuffix = n, this.top = t, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const T = function() {
				let {
					buffer: e,
					container: t
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				const s = r()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(k.a)() : t.scrollTop;
					return new j({
						top: e,
						height: window.innerHeight
					})
				}
				return new j({
					top: 0,
					height: s
				})
			};
			var _ = s("./src/reddit/components/ResizeSensor/index.tsx"),
				L = s("./src/reddit/constants/componentSizes.ts"),
				N = s("./src/reddit/constants/elementClassNames.ts"),
				F = s("./src/reddit/contexts/InsideOverlay.tsx"),
				V = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/telemetry/helpers/sendEvent.ts"),
				H = s("./src/telemetry/helpers/sendTiming.ts"),
				W = s("./src/reddit/components/Scroller/Simple.m.less"),
				B = s.n(W);
			const U = L.g,
				q = 5 * p.M,
				D = 3,
				G = Object(m.c)({
					isOverlayOpen: V.i
				}),
				K = Object(c.b)(G),
				Q = {};

			function z(e) {
				return e === document
			}

			function Y(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const $ = 10,
				X = .9,
				J = .9,
				Z = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * p.M,
				ne = 400,
				ie = 8,
				oe = 5 * p.M,
				re = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				le = () => ae ? performance.now() : Date.now();

			function de(e, t) {
				return S.a.fromArray(e.children.map((e, s) => {
					const n = t && t.get(e.id);
					return n ? (n.isFocusable = !!e.isFocusable, n.trackOnEnteredViewport = e.trackOnEnteredViewport, n.trackOnExitedViewport = e.trackOnExitedViewport, n) : {
						el: null,
						id: e.id,
						index: s,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && s < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class ce extends l.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						A.b.enqueue(new I.a({
							args: [e, t],
							cb: (e, t) => Object(H.a)(p.n.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							s = [];
						let n = this.nextVisibleChildrenIndex;
						for (; e < t && n < this.props.children.length;) {
							const t = this.props.children[n];
							s.push(t), e += t.estHeight, n++
						}
						return this.visibleChildrenCount = s.length, s
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(ne / e), ie)
						} else this.renderableChildrenIndexIncrement = ie
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = oe, Object(h.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(h.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && le() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							n = arguments.length > 2 ? arguments[2] : void 0;
						const i = n || t.props.children;
						if (t.state.renderableChildren.length < i.length || e)
							if (t.hasScrolledWithinThreshold()) u.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, n ? i : void 0)
								}, se)
							});
							else {
								t.nextVisibleChildrenIndex + s <= i.length ? t.nextVisibleChildrenIndex += s : t.nextVisibleChildrenIndex = i.length;
								const e = i.slice(0, t.nextVisibleChildrenIndex);
								e.length && (t.lastVisibleElId = e[e.length - 1].id), u.a.write(() => {
									t.setState({
										renderableChildren: e
									})
								}), t.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ne) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
							s = 0,
							n = t.state.renderableChildren.length;
						for (; s < e && n < t.props.children.length;) s += t.props.children[n].estHeight, n++;
						const i = n - t.state.renderableChildren.length;
						return Math.max(t.renderableChildrenIndexIncrement, i)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(h.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = i()(() => {
						this.handleScroll()
					}, p.M), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: s
							} = e;
							s && (e.focused = !1, t.push(s.pauseContent))
						}), u.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new S.a("id");
						return this.state.renderableChildren.forEach(s => {
							const n = this.childMap.get(s.id);
							n && e(n) && t.push(n)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.M))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const s = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = s + this.getScrollTop()
						}
						const s = t.offsetTop + this.parentOffsetTop,
							n = t.getBoundingClientRect().height,
							i = new j({
								top: s,
								height: n,
								heightWithSuffix: `${n}px`
							});
						return e.rectangle = i, i
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Y(this.containerRef) : 0, this.handleContentContainerResize = i()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = u.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.M), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = u.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(R.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < X,
								s = e < J,
								n = e < Z;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const i = new S.a("id");
							let o, r;
							const a = [];
							this.state.renderableChildren.forEach(e => {
								const l = this.childMap.get(e.id);
								let d;
								if (l && l.el) {
									if (!(d = this.getChildRectangle(l))) return;
									const {
										id: e
									} = l;
									this.elementIsHideable(d) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = `${d.height+10}px`) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!l || !l.el || !l.rectangle) return void(this.measurementsInvalid && l && this.getChildRectangle(l));
								const {
									id: c,
									itemRef: h,
									trackOnEnteredViewport: m
								} = l, p = !!this.itemsInViewport.get(c);
								if (this.elementIsUnmountable(d)) h && p && l.loaded && l.isFocusable && a.push(h.pauseContent);
								else if (h && this.loadItemIfPossible(l, h, t, s, n, a), this.elementIsVisible(d)) {
									i.push(l), !p && m && A.b.enqueue(new I.a({
										cb: m,
										args: void 0
									}));
									const e = this.elementIsFocused(d);
									e && !r && (r = l.id), t && l.isFocusable && !o && e ? (o = l.id, l.focused || (l.focused = !0, h && a.push(h.focusContent))) : l.loaded && l.isFocusable && (l.focused || this.needsToPauseViewportItems) && (l.focused = !1, h && a.push(h.pauseContent))
								} else p && l.loaded && l.isFocusable && (l.focused = !1, h && a.push(h.stopContent))
							}), u.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(e => {
								let {
									id: t,
									trackOnExitedViewport: s
								} = e;
								s && !i.has(t) && A.b.enqueue(new I.a({
									cb: s,
									args: [!1]
								}))
							}), this.itemsInViewport = i, this.canFocusItems = t, this.focusedChild = o, this.primaryChild = r, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, q), null !== this.unmountItemsIdleId && (Object(h.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * oe, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const s = this.childMap.get(e.id);
								if (!s || !s.el || !s.itemRef) return;
								const n = this.getChildRectangle(s);
								n && this.elementIsUnmountable(n) && s.loaded && t.push(s)
							}), !t.length) return;
						const s = Math.min(Math.ceil(e.timeRemaining() / D), t.length),
							n = [];
						for (let i = 0; i < s; i++) {
							const e = t[i];
							n.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(d.unstable_batchedUpdates)(() => {
							this.scrollContainer && n.forEach(e => e())
						}), s < t.length ? this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = i()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.M), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const n = s.el.firstChild;
						n && (t !== s.el.style.height && (s.el.style.height = t), n.classList.add(B.a.Hidden), this.hiddenChildren[e] = t, s.loaded && u.a.write(() => {
							s.itemRef && (s.loaded = !1, s.focused = !1, s.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const s = t.el.firstChild;
						s && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", s.classList.remove(B.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, u.a.read(() => {
							const s = this.childMap.get(e);
							if (s && s.el && this.scrollContainer) {
								if (s.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const n = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(R.c)(this.scrollContainer, n), this.callOnScrollForItemsChanged())
								}, p.M)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: s = 0
							} = this.props, n = window.innerHeight - s, {
								top: i
							} = t.el.getBoundingClientRect();
							return i >= s + e && i < n
						}
						return !1
					}, this.childMap = de(e), this.containerRef = null, this.itemsInViewport = new S.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new M($), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = oe;
					const s = this.getVisibleChildren();
					s.length && (this.lastVisibleElId = s[s.length - 1].id), this.nextVisibleChildrenIndex = s.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: s
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				hasRenderedAllChildren() {
					return !(this.state.renderableChildren.length < this.props.children.length) && (this.props.onAllChildrenRendered && this.props.onAllChildrenRendered(), !0)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					this.isRenderableChildrenStateChangePending || this.hasRenderedAllChildren() || u.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? O({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: q
					}) : x(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (u.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (u.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(R.c)(this.scrollContainer, 0), this.setupScrollHandler(), u.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = Q[e];
							r()(t) || (Q[e] = void 0, this.scrollContainer && Object(R.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), u.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && u.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = de(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						s = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || s, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						Q[e] = this.lastRenderPosition
					}
					this.childMap = new S.a("id"), this.itemsInViewport = new S.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(h.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						s = this.parentOffsetTop ? this.parentOffsetTop : 0,
						n = e.bottom + t - s,
						i = e.top + t - s,
						o = Math.min(this.viewport.bottom, n) - Math.max(this.viewport.top, i),
						r = o / e.height,
						a = o / this.viewport.height;
					return r > .75 || a > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? z(this.scrollContainer) ? Object(k.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = T({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, s = 2 * t;
						this.mountableViewport = new j({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						});
						const n = 4 * t;
						this.renderableViewport = new j({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = le(),
						t = this.getScrollTop(),
						s = Math.abs(this.lastRenderPosition - t),
						n = e - this.lastScrollTime,
						i = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, i ? this.pixelsPerMSRing.push(s / n) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const s = this.childMap.get(e);
					s && (s.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, s) {
					const n = this.childMap.get(e);
					n && (n.itemRef = t, n.loaded = !!t && (void 0 !== s ? s : n.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, s) => {
						this._childRefFn(e, t, s)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, s, n, i, o) {
					if (t.contentIsHeavyToMount() ? n : i) {
						const n = !e.isFocusable || s;
						!e.loaded && n && (e.loaded = !0, o.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: s
						} = e;
						s && A.b.enqueue(new I.a({
							cb: s,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = Y(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return l.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => l.a.createElement("div", {
						key: `scroller-${e.id}`,
						"data-scroller-first": 0 === t ? "" : void 0,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, l.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? B.a.Hidden : void 0
					}, e.render({
						className: N.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: U
					})))), !!e && l.a.createElement(_.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = K(Object(F.b)(ce))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, s) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/components/SearchPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				l = s.n(a);
			const d = e => i.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer)
			}, i.a.createElement("div", {
				className: l.a.postContent
			}, i.a.createElement("div", {
				className: l.a.postItemMetaContainer
			}, i.a.createElement("div", {
				className: Object(o.a)(l.a.subredditName, Object(r.b)(e))
			}), i.a.createElement("div", {
				className: Object(o.a)(l.a.author, Object(r.b)(e))
			})), i.a.createElement("div", {
				className: l.a.postItemTitleContainer
			}, i.a.createElement("div", {
				className: Object(o.a)(l.a.title, Object(r.b)(e))
			}), i.a.createElement("div", {
				className: l.a.thumbnailContainer
			}, i.a.createElement("div", {
				className: Object(o.a)(l.a.thumbnail, Object(r.b)(e))
			}))), i.a.createElement("div", {
				className: l.a.flatlist
			}, i.a.createElement("div", {
				className: Object(o.a)(l.a.flatListItem, Object(r.b)(e))
			}), i.a.createElement("div", {
				className: Object(o.a)(l.a.flatListItem, Object(r.b)(e))
			}), i.a.createElement("div", {
				className: Object(o.a)(l.a.flatListItem, Object(r.b)(e))
			}))))
		},
		"./src/reddit/components/SearchPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2486DvSWPD-F9xM1LaS9AZ",
				postContent: "-epve_JNERIUWcWNKZJF6",
				postItemMetaContainer: "_2dzkHWoQ7wLdDsEAwyw1NL",
				subredditName: "_1cE9WBao1CSNnKKQd97erN",
				author: "dXH0UqIq_Mtkd24573Rs5",
				postItemTitleContainer: "_1NHO6pCrlHfrC6Q-_d-3kZ",
				title: "aHlABuIzfJ3NbabTwjGN8",
				thumbnail: "_1wEL9K8jt2pgaYL1hhQt_P",
				thumbnailContainer: "_22TlQsT52A1DMzjuJNEb7b",
				flatlist: "_2ztqeqAwKeO-Fwjjpm3ou2",
				flatListItem: "hKjLaaNx-nWjCGihE3wwZ"
			}
		},
		"./src/reddit/constants/oneFeed.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.None = "None", e.SeeFewerPostsView = "SeeFewerPostsView", e.ThankYouView = "ThankYouView", e.MuteThankYouView = "MuteThankYouView"
				}(n || (n = {}))
		},
		"./src/reddit/contexts/OneFeed/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js");
			const r = o.createContext({
				hideRecommendationContext: !1,
				hideRecommendationFooter: i.a,
				recommendationFooterView: null,
				setRecommendationFooterView: i.a
			});
			t.a = r
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts");

			function o(e) {
				let {
					apiError: t,
					isLoggedOut: s
				} = e;
				switch (t.type) {
					case i.K.AUTHORIZATION_ERROR:
						return s ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case i.K.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case i.K.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case i.K.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case i.K.LIKELY_UBLOCK_ERROR:
						return n.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/loadingPostComponentForLayout/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return H
			}));
			var n = s("./src/reddit/constants/postLayout.ts"),
				i = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = s("./src/reddit/models/Vote/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				g = s.n(b),
				f = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				C = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(m.v)(),
				P = Object(l.c)({
					isFakeSubreddit: m.A
				}),
				w = Object(a.b)(P),
				x = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return r.a.createElement("div", {
						className: C.a.emptyVotes
					}, r.a.createElement(h.d, v({
						key: "u"
					}, t)), r.a.createElement("div", {
						key: "s",
						className: C.a.emptyScore
					}), r.a.createElement(h.c, v({
						key: "d"
					}, t)))
				},
				O = e => r.a.createElement(c.a, {
					className: Object(p.a)(e)
				}),
				I = e => r.a.createElement("div", {
					className: C.a.flatList
				}, r.a.createElement("div", {
					className: Object(d.a)(C.a.comments, Object(p.b)(e))
				}), r.a.createElement("div", {
					className: Object(d.a)(C.a.ellipsis, Object(p.b)(e))
				}));
			var R = y(w(e => r.a.createElement("div", {
					className: Object(d.a)(e.className, g.a.compactPostStyles, g.a.classicAndCompactPlaceholderStyles)
				}, r.a.createElement("div", {
					className: C.a.wrapper
				}, r.a.createElement(x, v({
					key: "c"
				}, e)), r.a.createElement("div", {
					key: "a",
					className: C.a.expandoContainer
				}, r.a.createElement("div", {
					className: Object(d.a)(C.a.expando, Object(p.a)(e))
				})), r.a.createElement("div", {
					key: "d",
					className: C.a.subredditIconContainer
				}, r.a.createElement(O, {
					isLoading: !1
				})), r.a.createElement("div", {
					key: "e",
					className: C.a.topLine
				}, r.a.createElement("div", {
					key: "ea",
					className: Object(d.a)(C.a.title, Object(p.b)(e))
				}), r.a.createElement("div", {
					key: "eb",
					className: Object(d.a)(C.a.meta, Object(p.b)(e))
				})), r.a.createElement(I, v({
					key: "f"
				}, e)))))),
				S = s("./src/reddit/components/PostLeftRail/index.tsx"),
				E = s("./src/reddit/components/LargePost/placeholder.m.less"),
				M = s.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = Object(m.v)(),
				T = Object(l.c)({
					isFakeSubreddit: m.A
				}),
				_ = Object(a.b)(T),
				L = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return r.a.createElement("div", {
						className: M.a.emptyVerticalVotes
					}, r.a.createElement(h.d, k({
						key: "u"
					}, t)), r.a.createElement("div", {
						className: M.a.emptyScore,
						key: "s"
					}), r.a.createElement(h.c, k({
						key: "d"
					}, t)))
				},
				N = e => r.a.createElement("div", k({
					className: Object(d.a)(M.a.subredditIcon, Object(p.a)({
						isLoading: !0
					}))
				}, e));
			var F = j(_(e => {
					let {
						className: t,
						dispatch: s,
						pageLayer: n,
						...i
					} = e;
					return r.a.createElement("div", {
						className: Object(d.a)(g.a.baseLargeAndMediumPostStyles, t)
					}, r.a.createElement(S.b, {
						key: "a"
					}, r.a.createElement(L, i)), r.a.createElement("div", {
						className: M.a.content,
						key: "b"
					}, r.a.createElement("div", {
						className: M.a.topLine,
						key: "ba"
					}, i.isFakeSubreddit && r.a.createElement(N, {
						key: "baa"
					}), r.a.createElement("div", {
						key: "bab",
						className: Object(d.a)(M.a.topMetaOne, Object(p.b)(i))
					}), r.a.createElement("div", {
						key: "bac",
						className: Object(d.a)(M.a.topMetaTwo, Object(p.b)(i))
					})), r.a.createElement("div", {
						key: "bb",
						className: Object(d.a)(M.a.title, Object(p.b)(i))
					})), r.a.createElement("div", {
						key: "c",
						className: Object(d.a)(M.a.media, Object(p.a)(i))
					}), r.a.createElement("div", {
						className: M.a.content,
						key: "d"
					}, r.a.createElement("div", {
						className: M.a.flatlist
					}, r.a.createElement("div", {
						className: Object(d.a)(M.a.flatlistItemOne, Object(p.b)(i))
					}), r.a.createElement("div", {
						className: Object(d.a)(M.a.flatListItemTwo, Object(p.b)(i))
					}))))
				})),
				V = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const A = {
				[n.g.Large]: [F, 2],
				[n.g.Classic]: [i.a, 10],
				[n.g.Compact]: [R, 30],
				[n.g.Search]: [V.a, 8]
			};

			function H(e) {
				return A[e]
			}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let i = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (i += `--[${e.onlyOfType}]`), e.sort && e.sort !== n.a.NewestFirst && (i += `--[${e.sort}]`), i
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./src/lib/logs/console.ts"),
				a = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("reddit-components-BlankPost")]).then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				h = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				m = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				u = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPag~0596d05c"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), s.e("Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[a.g.Large]: p,
					[a.g.Medium]: u,
					[a.g.Classic]: h,
					[a.g.Compact]: m
				},
				g = e => o.a.createElement(c, e),
				f = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://d4wggo22afv97.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net", "https://www.mms.com"],
				C = e => e.source && e.source.url && e.isSponsored && f.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === l.o.EMBED && !e.isSurveyAd && !(l.a.has(e.media.provider) || C(e)),
				y = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case a.g.Medium:
							return 188;
						case a.g.Classic:
							return 96;
						case a.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function P(e) {
				let {
					isCrosspost: t,
					layout: s,
					post: n
				} = e;
				if (n.isBlank) return g;
				const i = Object(d.q)(n),
					o = t && i;
				s !== a.g.Large || !v(n) || o || n.predictionTournament || Object(d.A)(n) || (s = a.g.Medium);
				const l = b[s];
				return void 0 === l ? (Object(r.a)(void 0, `Could not find component for layout ${s}.`), g) : l
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh",
				singleLineEllipsis: "_2RFRmGwuh0BemW7iUA3-VB"
			}
		},
		"./src/reddit/hooks/useRecommendationPostContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s("./src/reddit/contexts/OneFeed/index.ts");
			t.a = function() {
				return Object(n.useContext)(i.a)
			}
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/comments/index.ts"),
				l = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(r.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: l.a
				}
			});
			const d = (e, t) => Object(i.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				c = Object(o.a)((e, t) => {
					var s, n, i;
					const {
						pageName: o,
						page: r
					} = t, a = d(0, t);
					if (null === (i = null === (n = null === (s = e.pages.modHub.modQueue[o]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === n ? void 0 : n[a]) || void 0 === i ? void 0 : i[r]) return e.pages.modHub.modQueue[o].itemOrder[a][r] || []
				}),
				h = Object(o.a)((e, t) => {
					const s = c(e, t);
					return s ? s.map(t => e.posts.models[t] || e.features.comments.models[t]) : void 0
				}),
				m = (e, t) => {
					var s;
					const {
						pageName: n
					} = t;
					return null === (s = e.pages.modHub.modQueue[n]) || void 0 === s || !s.api || e.pages.modHub.modQueue[n].api.pending
				},
				p = (e, t) => {
					var s;
					const n = d(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[n]
				},
				u = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				g = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				f = e => {
					var t;
					const s = e.platform && e.platform.currentPage;
					return (null === (t = null == s ? void 0 : s.meta) || void 0 === t ? void 0 : t.name) === n.Sb.MODQUEUE_PAGES
				},
				C = (e, t) => (e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === n.Sb.MODERATION_PAGES || t.meta.name === n.Sb.MODQUEUE_PAGES)
				})(e) && t || !1
		},
		"./src/redditGQL/operations/UpdateRecommendationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"fa7b23e7dbc7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32.e2d5cbe8de3c03dfa3fa.js.map