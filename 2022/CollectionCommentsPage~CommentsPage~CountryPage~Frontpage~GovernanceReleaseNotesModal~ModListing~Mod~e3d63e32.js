// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32.830d3c94823a13dd2a21.js
// Retrieved at 11/7/2022, 4:30:07 PM by Reddit Dataminer v1.0.0
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
			let i;
			const n = new Map,
				o = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), i = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!o.get(t)) {
						o.set(t, s);
						const i = n.get(t);
						if (i) {
							i(e, s && !!o.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const r = (e, t) => {
					try {
						n.set(e, t), i && i.observe(e)
					} catch (s) {
						0
					}
				},
				a = e => {
					try {
						n.delete(e), i && i.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(u),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
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
					return n.a.createElement("div", {
						className: Object(a.a)(e.className, g.a.emptyVerticalVotes)
					}, n.a.createElement(d.d, f({
						key: "u"
					}, t)), e.children, n.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				x = () => n.a.createElement(P, null, n.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = C(y(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, p.a.classicPostStyles, p.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement(l.b, null, n.a.createElement(x, null)), n.a.createElement("div", {
				className: g.a.mainBody
			}, n.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(g.a.thumbnail, Object(h.b)(e))
			})), n.a.createElement("div", {
				className: g.a.content
			}, n.a.createElement("div", {
				key: "a"
			}, n.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(g.a.title, Object(h.b)(e))
			}), n.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(g.a.meta, Object(h.b)(e))
			})), n.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, n.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(g.a.flatlistExpando, Object(h.b)(e))
			}), n.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), n.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(g.a.flatListItemOne, Object(h.b)(e))
			}), n.a.createElement("div", {
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ModalStyledComponents/Modal.tsx");
			const a = e => {
				let {
					subredditName: t,
					toggleModal: s,
					onConfirm: n
				} = e;
				return o.a.createElement(r.a, {
					headerText: i.fbt._("Mute {name of subreddit to mute}", [i.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "4eAU3R"
					}),
					modalBody: i.fbt._("You won't see posts from {name of subreddit to mute} in your feeds or recommmendations anymore.", [i.fbt._param("name of subreddit to mute", `r/${t}`)], {
						hk: "1JNA6G"
					}),
					toggleModal: s,
					actionText: i.fbt._("YES, MUTE", null, {
						hk: "1eAO8C"
					}),
					cancelActionText: i.fbt._("CANCEL", null, {
						hk: "If1yt"
					}),
					onConfirm: n,
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
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(u),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
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
					return n.a.createElement("div", {
						className: g.a.emptyVotes
					}, n.a.createElement(d.d, f({
						key: "u"
					}, t)), n.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), n.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				x = e => n.a.createElement(l.a, {
					className: Object(h.a)(e)
				}),
				w = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(a.a)(g.a.comments, Object(h.b)(e))
				}), n.a.createElement("div", {
					className: Object(a.a)(g.a.ellipsis, Object(h.b)(e))
				}));
			t.a = C(y(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, p.a.compactPostStyles, p.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(P, f({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(g.a.expando, Object(h.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, n.a.createElement(x, {
				isLoading: !1
			})), n.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, n.a.createElement("div", {
				key: "ea",
				className: Object(a.a)(g.a.title, Object(h.b)(e))
			}), n.a.createElement("div", {
				key: "eb",
				className: Object(a.a)(g.a.meta, Object(h.b)(e))
			})), n.a.createElement(w, f({
				key: "f"
			}, e))))))
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
				return i
			}));
			var i, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/filterQueryParams/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/selectors/meta.ts"),
				b = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				g = s.n(b);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(i || (i = {}));
			const f = h.a.wrapped(m.b, "Row", g.a),
				C = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					origin: p.k
				}),
				v = Object(a.b)(C);
			t.b = v(e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(u.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(c.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, r.a.createElement(f, {
				displayText: n.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), r.a.createElement(u.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(d.a)(Object(c.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: i.OldestFirst
				})
			}, r.a.createElement(f, {
				displayText: n.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === i.OldestFirst
			})), r.a.createElement(u.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(d.a)(Object(c.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: i.MostReportedFirst
				})
			}, r.a.createElement(f, {
				displayText: n.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === i.MostReportedFirst
			}))))
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				r = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(o.a)(e => {
				const t = !!e.cancelActionText,
					s = !(!e.actionText || !e.onConfirm);
				return n.a.createElement(r.e, {
					style: e.style
				}, n.a.createElement(r.i, null, n.a.createElement(l.a, null, n.a.createElement(r.q, null, e.headerText), !e.hideCancel && n.a.createElement(a.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, n.a.createElement(r.b, null)))), n.a.createElement(r.l, null, e.modalBody), (t || s) && n.a.createElement(r.g, null, t && n.a.createElement(r.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), s && n.a.createElement(r.u, {
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
				return m
			})), s.d(t, "c", (function() {
				return u
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/selectors/modQueue.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.m.less"),
				h = s.n(c);
			const m = 40,
				u = e => e.isRemoved ? l.a.removed : e.isReported ? l.a.reported : "transparent",
				p = Object(a.a)(e => {
					const t = Object(o.e)(d.b) ? "transparent" : u(e),
						s = {
							width: `${m}px`,
							borderLeft: `4px solid ${t}`
						};
					return n.a.createElement("div", {
						className: Object(r.a)(h.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = p
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/PostList/Placeholder.tsx"),
				o = s("./src/reddit/components/PostList/LoadMore.m.less"),
				r = s.n(o);
			t.a = i.a.wrapped(n.a, "Component", r.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/constant.js"),
				n = s.n(i),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				l = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				h = s("./src/lib/fastdom/index.ts"),
				m = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/helpers/loadingPostComponentForLayout/index.ts");
			const p = .1,
				b = Object(c.c)({
					loadingPostComponentForLayout: () => u.a
				}),
				g = Object(d.b)(b);
			class f extends l.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && m.b(this.wrapperRef), e && m.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= p;
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
						layout: i,
						loadingPostComponentForLayout: o
					} = this.props, {
						visible: a
					} = this.state, [d, c] = o(i), h = t || c, m = n()(l.a.createElement(d, {
						isLoading: s && a
					})), u = r()(h, m);
					return l.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, l.a.Children.toArray(u))
				}
			}
			t.a = g(f)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/helpers/describeApiError/index.ts"),
				l = s("./src/reddit/components/PostList/index.m.less"),
				d = s.n(l);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: s
				} = e;
				let n = i.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return s && (n = Object(a.a)({
					apiError: s,
					isLoggedOut: !1
				})), o.a.createElement("div", {
					className: d.a.somethingWrong
				}, o.a.createElement("div", {
					className: d.a.somethingWrongText
				}, n), t && o.a.createElement(r.l, {
					onClick: t
				}, i.fbt._("Try again", null, {
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
				return Oe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i, n = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				a = s("./node_modules/lodash/last.js"),
				l = s.n(a),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				h = s("./node_modules/react/index.js"),
				m = s.n(h),
				u = s("./node_modules/shallowequal/index.js"),
				p = s.n(u),
				b = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/fastdom/index.ts"),
				v = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				P = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/actions/post.ts"),
				w = s("./src/reddit/actions/subreddit/muting.ts"),
				O = s("./src/reddit/actions/toaster.ts"),
				R = s("./src/reddit/constants/oneFeed.ts"),
				I = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/contexts/ApiContext.tsx"),
				E = s("./src/lib/makeGqlRequest/index.ts"),
				M = s("./src/redditGQL/operations/UpdateRecommendationPreferences.json");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(i || (i = {}));
			const k = (e, t) => Object(E.a)(e, {
					...M,
					variables: t
				}),
				j = (e, t) => k(e(), {
					input: {
						dislikedSimilarSubredditSeedPreference: {
							action: i.ADD,
							subredditId: t
						}
					}
				}),
				T = (e, t) => k(e(), {
					input: {
						dislikedSubredditPreference: {
							action: i.ADD,
							subredditId: t
						}
					}
				});
			var _ = s("./src/reddit/helpers/trackers/post.ts"),
				L = s("./src/reddit/helpers/trackers/subredditMuting.ts"),
				N = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				V = s("./src/reddit/hooks/useTracking.ts"),
				F = s("./src/reddit/icons/fonts/index.tsx"),
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
					setRecommendationFooterView: i,
					similar: n,
					subredditId: o,
					isCommunityMutingEnabled: r
				} = e;
				const a = n ? j : T;
				try {
					if (!0 === (await a(s, o)).ok) return void i(r ? R.a.MuteThankYouView : R.a.ThankYouView);
					t(Object(O.d)())
				} catch (l) {
					t(Object(O.d)())
				}
			}, Q = e => {
				let {
					displayText: t,
					seeLessFromThisCommunity: s,
					seeLessLikeThisCommunity: i,
					seeLessOfThisPostClick: n
				} = e;
				return m.a.createElement("div", {
					className: U.a.SeeFewerPostsView
				}, m.a.createElement("div", {
					className: U.a.Title
				}, q._("What would you like to see less of?", null, {
					hk: "mw3bZ"
				})), m.a.createElement("div", null, m.a.createElement("button", {
					className: U.a.Button,
					onClick: n
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
					onClick: i
				}, q._("Posts from communities similar to {subreddit name}", [q._param("subreddit name", t)], {
					hk: "3pCPAD"
				})))))
			}, z = () => m.a.createElement("div", {
				className: U.a.ThankYouView
			}, m.a.createElement("div", {
				className: U.a.Title
			}, m.a.createElement(F.a, {
				name: "checkmark",
				className: U.a.Icon
			}), q._("Thanks for letting us know!", null, {
				hk: "2VBsFC"
			})), m.a.createElement("div", {
				className: U.a.Subtitle
			}, q._("Your feedback improves your feed.", null, {
				hk: "2WLaqS"
			}))), K = e => {
				let {
					subredditId: t,
					subredditName: s,
					closeThankYouView: i
				} = e;
				const n = Object(P.d)(),
					[o, r] = Object(h.useState)(!1),
					a = () => {
						r(e => !e)
					},
					l = Object(V.a)();
				return m.a.createElement(m.a.Fragment, null, m.a.createElement(z, null), m.a.createElement("div", {
					className: U.a.MuteThankYouView
				}, m.a.createElement("button", {
					className: U.a.CommunityMutingTitle,
					onClick: a
				}, q._("Mute r/{subreddit name}", [q._param("subreddit name", s)], {
					hk: "2CdBMy"
				})), m.a.createElement("div", {
					className: U.a.Subtitle
				}, q._("Hide community from feeds and notifications", null, {
					hk: "2lFpIL"
				})), o && m.a.createElement(W.a, {
					subredditName: s,
					toggleModal: a,
					onConfirm: () => {
						a(), l(Object(L.b)()), s && n(Object(w.c)({
							subredditId: t,
							subredditName: s
						})), i()
					}
				})))
			};
			var G = Object(S.b)(e => {
					let {
						gqlContext: t,
						layout: s,
						post: i,
						parentPost: n
					} = e;
					var o;
					const r = Object(P.d)(),
						a = Object(V.a)(),
						l = Object(h.useRef)(!1),
						d = Object(P.e)(A.a),
						{
							hideRecommendationFooter: c,
							recommendationFooterView: u,
							setRecommendationFooterView: p
						} = Object(N.a)(),
						b = i.belongsTo.id,
						f = i.id,
						{
							subredditId: C,
							subredditName: v
						} = (null === (o = i.recommendationContext) || void 0 === o ? void 0 : o.source) || {},
						y = Object(P.e)(e => Object(H.i)(e, i, n)),
						w = Object(h.useCallback)(() => {
							const e = !d,
								t = l.current ? () => r(Object(x.eb)(f, !0, !1, e)) : c,
								s = d ? setTimeout(t, 0) : setTimeout(t, 1500);
							return () => clearTimeout(s)
						}, [r, c, f, d]);
					Object(h.useEffect)(() => {
						u !== R.a.ThankYouView || d || w()
					}, [r, c, f, u, w, d]);
					const O = Object(h.useCallback)(() => {
							l.current = !0, p(d ? R.a.MuteThankYouView : R.a.ThankYouView), a(Object(_.m)(f))
						}, [f, a, p, d]),
						S = Object(h.useCallback)(() => {
							D({
								dispatch: r,
								gqlContext: t,
								setRecommendationFooterView: p,
								similar: !1,
								subredditId: b,
								isCommunityMutingEnabled: d
							}), l.current = !0, a(Object(_.a)(f))
						}, [r, t, f, a, p, b, d]),
						E = Object(h.useCallback)(() => {
							C && (D({
								dispatch: r,
								gqlContext: t,
								setRecommendationFooterView: p,
								similar: !0,
								subredditId: C,
								isCommunityMutingEnabled: d
							}), l.current = !0, a(Object(_.p)(f)))
						}, [r, t, f, C, a, p, d]);
					return u && u !== R.a.None ? m.a.createElement("div", {
						className: Object(g.a)(U.a.Footer, {
							[U.a.ClassicLayout]: s === I.g.Classic,
							[U.a.CompactLayout]: s === I.g.Compact,
							[U.a.LargeLayout]: s === I.g.Large
						})
					}, u === R.a.SeeFewerPostsView && m.a.createElement(Q, {
						displayText: v,
						seeLessFromThisCommunity: S,
						seeLessLikeThisCommunity: E,
						seeLessOfThisPostClick: O
					}), u === R.a.MuteThankYouView && m.a.createElement(K, {
						subredditId: b,
						subredditName: y,
						closeThankYouView: w
					}), u === R.a.ThankYouView && m.a.createElement(z, null)) : null
				}),
				Y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				X = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				$ = s("./src/reddit/components/Scroller/Simple.tsx"),
				J = s("./src/reddit/constants/adEvents.ts"),
				Z = s("./src/reddit/constants/componentSizes.ts"),
				ee = s("./src/reddit/contexts/OneFeed/index.ts");
			var te = function(e) {
					let {
						children: t,
						hideRecommendationContext: s = !1
					} = e;
					const [i, n] = Object(h.useState)(R.a.None), o = Object(h.useCallback)(() => n(R.a.None), []), r = Object(h.useMemo)(() => ({
						hideRecommendationContext: s,
						hideRecommendationFooter: o,
						recommendationFooterView: i,
						setRecommendationFooterView: n
					}), [s, o, i, n]);
					return m.a.createElement(ee.a.Provider, {
						value: r
					}, t)
				},
				se = s("./src/reddit/controls/OutboundLink/index.tsx"),
				ie = s("./src/reddit/helpers/getClickInfo.ts"),
				ne = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				oe = s("./src/reddit/models/Media/index.ts"),
				re = s("./src/reddit/helpers/brandSafety/index.ts"),
				ae = s("./src/reddit/helpers/trackers/ads.ts"),
				le = s("./src/lib/LRUCache/index.ts"),
				de = s("./src/telemetry/index.ts"),
				ce = s("./src/telemetry/models/Timer.ts"),
				he = s("./src/reddit/components/PostList/index.m.less"),
				me = s.n(he);
			const {
				fbt: ue
			} = s("./node_modules/fbt/lib/FbtPublic.js"), pe = 500, be = 20, ge = new le.a(pe), fe = new le.a(pe), Ce = new le.a(pe), ve = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, ye = (e, t, s, i, n, o, r, a, l) => {
				const d = `entered-${e}-${t}-${s?`last-${i}-${n}`:""}-${o}`;
				let c = ge.get(d);
				return void 0 === c && (c = () => {
					s && r.onBottomViewed(i, n), r.trackOnPostEnteredViewport(e, t, a, l)
				}, ge.set(d, c)), c
			}, Pe = (e, t, s, i) => {
				const n = `left-${e}-${t}`;
				let o = fe.get(n);
				return void 0 === o && (o = n => {
					s.trackOnPostExitedViewport(e, t, n, i)
				}, fe.set(n, o)), o
			}, xe = function(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const i = `click-${e}`;
				let n = Ce.get(i);
				return void 0 === n && (n = (e, i, n, o, r) => {
					if (i.isSponsored) {
						t.fireAdPixelsOfType(i, J.a.Click);
						const {
							source: e
						} = Object(b.t)(i, o);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(se.a)(i.id, n, t).url), Object(ae.a)(i, r), Object(v.e)(t, v.d.BLANK)
						}
					} else t.openPost({
						postOrComment: i,
						clickInfo: Object(ie.a)(e),
						isFrontpage: s
					})
				}, Ce.set(i, n)), n
			}, we = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Oe extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new le.a(pe), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.isBlockingModalShowed = !1, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: i,
							isBlockingInterstitialEnabled: n,
							showModalOnScroll: o
						} = this.props;
						this.dispatchBrandSafety(e), t && i && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e), n && o && !this.isBlockingModalShowed && e.primaryChild && e.primaryChild.index > be && this.showBlockingInterstitial()
					}, this.showBlockingInterstitial = r()(() => {
						this.props.showModalOnScroll && this.props.showModalOnScroll(), this.isBlockingModalShowed = !0
					}, be, {
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
							subredditsById: i
						} = this.props, n = t(), o = [];
						n.forEach(e => o.push(e.id));
						const r = o.map(e => s[e]).filter(Boolean),
							a = r.map(e => i[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(re.a)(r, a))
					}, f.f, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && de.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = de.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = de.c.end(this.timerId);
						setTimeout(() => Object(de.b)(f.o.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && de.c.cancel(this.timerId), e.postIds.length && (this.timerId = de.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (C.a.read(() => this.checkAndSendScreenview()), this.timerId && de.c.has(this.timerId)) {
						const e = de.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(de.b)(f.o.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const i = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					i && i !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(i)
				}
				componentWillUnmount() {
					this.timerId && de.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return de.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const i = de.c.end(e);
					setTimeout(() => {
						s(t(i, ce.TimerType.InApp))
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
						...i
					} = this.props, {
						postsById: n,
						triggerNewPostPill: o,
						...r
					} = e, a = Object.keys(i), l = Object.keys(r);
					if (l.length !== a.length) return !0;
					if (l.some(e => {
							let t = !1;
							return t = "function" == typeof i[e] || "object" == typeof i[e] ? !p()(i[e], r[e]) : i[e] !== r[e]
						})) return !0;
					if (t === n) return !1;
					if (s !== o) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((i, o) => {
							return s({
								layout: e,
								post: t[i]
							}) !== s({
								layout: e,
								post: n[i]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, i) {
					const {
						currentProfileName: n,
						hostPostData: o,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: l,
						isLoggedOutOneFeed: d,
						isProfilePostListing: c,
						isTopicPage: h,
						isCommentCountAnimationEnabled: u,
						isVoteCountAnimationEnabled: p,
						isCountAnimShadowTestEnabled: b,
						listingBelowVariant: C,
						listingKey: v,
						listingName: P,
						pageLayer: x,
						pageReferrer: w,
						redditStyle: O,
						shouldHideFlair: R,
						shouldShowInsightsButton: S,
						triggerNewPostPill: E,
						postIds: M
					} = this.props, k = 0 === t, j = `post-${i}-${e}-${t}-${s?"last-index":""}-${P}-${v}-${w}`;
					let T;
					if (void 0 === (T = this.scrollChildCache.get(j))) {
						const {
							inSubredditOrProfile: _,
							postsById: L
						} = this.props, N = L[e], V = N.crosspostRootId && L[N.crosspostRootId] ? L[N.crosspostRootId] : N;
						let F;
						N.crosspostRootId && L[N.crosspostRootId] && (F = N), N.crosspostRootId && !L[N.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", f.v.API), e.setExtra("description", `Post ${N.id} is crosspost of ${N.crosspostRootId}, but ` + `${N.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const A = this.props.postComponentForLayout({
							isCrosspost: !!N.crosspostRootId,
							layout: i,
							post: V
						});
						let H = `post-list-item-[layout: ${i}]-[postId: ${e}]`;
						this.props.listingBelowVariant && v && (H += `--${v}`);
						const W = ye(e, i, s, v, P, w, this.props, t, this.props.hostPostData),
							B = Pe(e, i, this.props, t),
							U = xe(e, this.props, l),
							q = V.media && V.media.type === oe.o.EMBED ? V.media.provider : null,
							D = u && !N.isSponsored,
							Q = p && !N.isSponsored && !N.isScoreHidden,
							z = !!(null == N ? void 0 : N.recommendationContext);
						T = {
							estHeight: Object(ne.c)(N, i),
							id: e,
							isFocusable: !(!V.media || !(i === I.g.Large || i === I.g.Classic && Object(oe.H)(V.media))) && (oe.d.has(V.media.type) && (!q || !oe.s.has(q)) && !V.isSpoiler),
							trackOnEnteredViewport: W,
							trackOnExitedViewport: B,
							render: u => {
								let {
									className: p,
									height: f,
									width: y,
									remeasure: w,
									setScrollerChildRef: I,
									shouldLoadInitially: j
								} = u;
								return m.a.createElement(te, {
									key: H,
									hideRecommendationContext: !!d
								}, m.a.createElement(A, {
									availableWidth: y,
									className: Object(g.a)(p, this.props.postClassName),
									currentProfileName: n,
									eventFactory: this.eventFactoryHandler,
									first: k,
									forceLoadMedia: j,
									hostPostData: o,
									inSubredditOrProfile: _,
									isCommentCountAnimationEnabled: D,
									isCommentPermalink: r,
									isCommentsPage: a,
									isCountAnimShadowTestEnabled: b,
									isFrontpage: l,
									isProfilePostListing: c,
									isTopicPage: h,
									isVoteCountAnimationEnabled: Q,
									key: H,
									last: s,
									listingBelowVariant: C,
									listingIndex: t,
									listingKey: v,
									listingName: P,
									onceInViewport: E,
									onClickPost: U,
									onSizeChanged: w,
									pageLayer: x,
									postId: e,
									postIds: M,
									redditStyle: O,
									scrollerItemRef: I,
									sendEvent: this.props.sendEvent,
									shouldHideFlair: R,
									shouldShowInsightsButton: S
								}), z && m.a.createElement(G, {
									post: V,
									layout: i,
									parentPost: F
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
						layout: i,
						onTryAgain: n,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const r = o;
					return m.a.createElement("div", {
						className: me.a.placeholder
					}, m.a.createElement(r, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && m.a.createElement(X.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: i,
						loadMoreClassName: n,
						onLoadMore: o
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: me.a.placeholder
					}, m.a.createElement(Y.a, {
						className: n,
						isLoading: !!t,
						layout: i,
						countOverride: ve[i]
					}), !!e && m.a.createElement(X.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						getInjectChildren: i,
						isTruncated: o,
						layout: r,
						location: a,
						loadMore: l,
						onLoadMore: d,
						postIds: c,
						postsById: u,
						skipSubredditPosts: p
					} = this.props;
					let b = c.filter(e => Boolean(u[e]));
					if (p) {
						const e = [];
						let t = 0,
							s = 0;
						for (; s < b.length;) {
							const i = b[s++],
								n = u[i];
							t < p ? "subreddit" === n.belongsTo.type && (t += 1) : e.push(i)
						}
						b = e
					}
					let f = b.map((e, t, s) => {
						const i = t === s.length - 1;
						return this.scrollChildForPost(e, t, i, r)
					});
					i && (f = we(f, i()));
					const C = this.props.measureScrollFPS ? `post-listings-${r}` : void 0,
						v = (a ? Object(n.e)(a) : null) || o;
					return m.a.createElement(h.Fragment, null, m.a.createElement($.b, {
						innerRef: this.updateScrollerRef,
						className: v ? me.a.truncatedPostList : Object(g.a)(me.a.postList, this.props.className),
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
			Oe.defaultProps = {
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
				return G
			}));
			var i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				o = s("./node_modules/lodash/isNil.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				l = s.n(a),
				d = s("./node_modules/react-dom/index.js"),
				c = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/request-idle-callback/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/fastdom/index.ts"),
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
				x = [y.Max10, y.Max20, y.Max30, y.Max40, y.Max50, y.Max60],
				w = e => ({
					eventHandler: e
				});

			function O(e) {
				let {
					fn: t,
					subscriber: s,
					timeout: i
				} = e;
				const n = [];
				let o, r, a;
				const l = () => {
						if (n.length < v) return;
						const e = P(),
							t = Math.min(C, n.length),
							i = n.splice(0, t);
						n.splice(0, n.length);
						const o = i[t - 1] - i[0];
						for (let s = i.shift(); i.length > 0; s = i.shift()) {
							const t = i[0] - s,
								n = Math.min(60, Math.ceil(1e3 / t));
							e[n <= 10 ? y.Max10 : 60 === n ? y.Max60 : x[Math.ceil(n / 10) - 1]] += t
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
							n.push(performance.now()), h()
						})
					},
					m = g()(() => {
						d(), a = window.setTimeout(c, i)
					}, u.N);
				return {
					cleanup: c,
					eventHandler: e => {
						void 0 === r ? (h(), m(), r = window.setInterval(l, f)) : m(), t(e)
					}
				}
			}
			var R = s("./src/lib/scheduler/index.ts"),
				I = s("./src/lib/domUtils/index.ts"),
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
					return this.forEach((s, i, n) => {
						t[i] = e(s, i, n)
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
						heightWithSuffix: i
					} = e;
					this.height = s, this.heightWithSuffix = i, this.top = t, this.bottom = this.top + this.height
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
				V = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/telemetry/helpers/sendEvent.ts"),
				H = s("./src/telemetry/helpers/sendTiming.ts"),
				W = s("./src/reddit/components/Scroller/Simple.m.less"),
				B = s.n(W);
			const U = L.g,
				q = 5 * u.N,
				D = 3,
				Q = Object(m.c)({
					isOverlayOpen: F.j
				}),
				z = Object(c.b)(Q),
				K = {};

			function G(e) {
				return e === document
			}

			function Y(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const X = 10,
				$ = .9,
				J = .9,
				Z = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * u.N,
				ie = 400,
				ne = 8,
				oe = 5 * u.N,
				re = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				le = () => ae ? performance.now() : Date.now();

			function de(e, t) {
				return S.a.fromArray(e.children.map((e, s) => {
					const i = t && t.get(e.id);
					return i ? (i.isFocusable = !!e.isFocusable, i.trackOnEnteredViewport = e.trackOnEnteredViewport, i.trackOnExitedViewport = e.trackOnExitedViewport, i) : {
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
						A.b.enqueue(new R.a({
							args: [e, t],
							cb: (e, t) => Object(H.a)(u.o.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							s = [];
						let i = this.nextVisibleChildrenIndex;
						for (; e < t && i < this.props.children.length;) {
							const t = this.props.children[i];
							s.push(t), e += t.estHeight, i++
						}
						return this.visibleChildrenCount = s.length, s
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(ie / e), ne)
						} else this.renderableChildrenIndexIncrement = ne
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = oe, Object(h.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(h.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && le() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							i = arguments.length > 2 ? arguments[2] : void 0;
						const n = i || t.props.children;
						if (t.state.renderableChildren.length < n.length || e)
							if (t.hasScrolledWithinThreshold()) p.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, i ? n : void 0)
								}, se)
							});
							else {
								t.nextVisibleChildrenIndex + s <= n.length ? t.nextVisibleChildrenIndex += s : t.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, t.nextVisibleChildrenIndex);
								e.length && (t.lastVisibleElId = e[e.length - 1].id), p.a.write(() => {
									t.setState({
										renderableChildren: e
									})
								}), t.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ie) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
							s = 0,
							i = t.state.renderableChildren.length;
						for (; s < e && i < t.props.children.length;) s += t.props.children[i].estHeight, i++;
						const n = i - t.state.renderableChildren.length;
						return Math.max(t.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(h.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = n()(() => {
						this.handleScroll()
					}, u.N), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: s
							} = e;
							s && (e.focused = !1, t.push(s.pauseContent))
						}), p.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new S.a("id");
						return this.state.renderableChildren.forEach(s => {
							const i = this.childMap.get(s.id);
							i && e(i) && t.push(i)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, u.N))
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
							i = t.getBoundingClientRect().height,
							n = new j({
								top: s,
								height: i,
								heightWithSuffix: `${i}px`
							});
						return e.rectangle = n, n
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Y(this.containerRef) : 0, this.handleContentContainerResize = n()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = p.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, u.N), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = p.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(I.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < $,
								s = e < J,
								i = e < Z;
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
							const n = new S.a("id");
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
								} = l, u = !!this.itemsInViewport.get(c);
								if (this.elementIsUnmountable(d)) h && u && l.loaded && l.isFocusable && a.push(h.pauseContent);
								else if (h && this.loadItemIfPossible(l, h, t, s, i, a), this.elementIsVisible(d)) {
									n.push(l), !u && m && A.b.enqueue(new R.a({
										cb: m,
										args: void 0
									}));
									const e = this.elementIsFocused(d);
									e && !r && (r = l.id), t && l.isFocusable && !o && e ? (o = l.id, l.focused || (l.focused = !0, h && a.push(h.focusContent))) : l.loaded && l.isFocusable && (l.focused || this.needsToPauseViewportItems) && (l.focused = !1, h && a.push(h.pauseContent))
								} else u && l.loaded && l.isFocusable && (l.focused = !1, h && a.push(h.stopContent))
							}), p.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(e => {
								let {
									id: t,
									trackOnExitedViewport: s
								} = e;
								s && !n.has(t) && A.b.enqueue(new R.a({
									cb: s,
									args: [!1]
								}))
							}), this.itemsInViewport = n, this.canFocusItems = t, this.focusedChild = o, this.primaryChild = r, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, q), null !== this.unmountItemsIdleId && (Object(h.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
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
								const i = this.getChildRectangle(s);
								i && this.elementIsUnmountable(i) && s.loaded && t.push(s)
							}), !t.length) return;
						const s = Math.min(Math.ceil(e.timeRemaining() / D), t.length),
							i = [];
						for (let n = 0; n < s; n++) {
							const e = t[n];
							i.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(d.unstable_batchedUpdates)(() => {
							this.scrollContainer && i.forEach(e => e())
						}), s < t.length ? this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = n()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, u.N), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const i = s.el.firstChild;
						i && (t !== s.el.style.height && (s.el.style.height = t), i.classList.add(B.a.Hidden), this.hiddenChildren[e] = t, s.loaded && p.a.write(() => {
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
						this.measurementsInvalid = !0, p.a.read(() => {
							const s = this.childMap.get(e);
							if (s && s.el && this.scrollContainer) {
								if (s.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const i = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(I.c)(this.scrollContainer, i), this.callOnScrollForItemsChanged())
								}, u.N)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: s = 0
							} = this.props, i = window.innerHeight - s, {
								top: n
							} = t.el.getBoundingClientRect();
							return n >= s + e && n < i
						}
						return !1
					}, this.childMap = de(e), this.containerRef = null, this.itemsInViewport = new S.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new M(X), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = oe;
					const s = this.getVisibleChildren();
					s.length && (this.lastVisibleElId = s[s.length - 1].id), this.nextVisibleChildrenIndex = s.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: s
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				hasRenderedAllChildren() {
					return !(this.state.renderableChildren.length < this.props.children.length) && (this.props.onAllChildrenRendered && this.props.onAllChildrenRendered(), !0)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					this.isRenderableChildrenStateChangePending || this.hasRenderedAllChildren() || p.a.read(() => {
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
					}) : w(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (p.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (p.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(I.c)(this.scrollContainer, 0), this.setupScrollHandler(), p.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = K[e];
							r()(t) || (K[e] = void 0, this.scrollContainer && Object(I.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), p.a.read(() => {
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
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && p.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = de(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						s = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || s, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						K[e] = this.lastRenderPosition
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
						i = e.bottom + t - s,
						n = e.top + t - s,
						o = Math.min(this.viewport.bottom, i) - Math.max(this.viewport.top, n),
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
					return this.scrollContainer ? G(this.scrollContainer) ? Object(k.a)() : this.scrollContainer.scrollTop : 0
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
						const i = 4 * t;
						this.renderableViewport = new j({
							top: this.viewport.top - i,
							height: this.viewport.height + 2 * i
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = le(),
						t = this.getScrollTop(),
						s = Math.abs(this.lastRenderPosition - t),
						i = e - this.lastScrollTime,
						n = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, n ? this.pixelsPerMSRing.push(s / i) : this.lastScrollTime = e
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
					const i = this.childMap.get(e);
					i && (i.itemRef = t, i.loaded = !!t && (void 0 !== s ? s : i.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, s) => {
						this._childRefFn(e, t, s)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, s, i, n, o) {
					if (t.contentIsHeavyToMount() ? i : n) {
						const i = !e.isFocusable || s;
						!e.loaded && i && (e.loaded = !0, o.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: s
						} = e;
						s && A.b.enqueue(new R.a({
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
			t.b = z(Object(V.b)(ce))
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				l = s.n(a);
			const d = e => n.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer)
			}, n.a.createElement("div", {
				className: l.a.postContent
			}, n.a.createElement("div", {
				className: l.a.postItemMetaContainer
			}, n.a.createElement("div", {
				className: Object(o.a)(l.a.subredditName, Object(r.b)(e))
			}), n.a.createElement("div", {
				className: Object(o.a)(l.a.author, Object(r.b)(e))
			})), n.a.createElement("div", {
				className: l.a.postItemTitleContainer
			}, n.a.createElement("div", {
				className: Object(o.a)(l.a.title, Object(r.b)(e))
			}), n.a.createElement("div", {
				className: l.a.thumbnailContainer
			}, n.a.createElement("div", {
				className: Object(o.a)(l.a.thumbnail, Object(r.b)(e))
			}))), n.a.createElement("div", {
				className: l.a.flatlist
			}, n.a.createElement("div", {
				className: Object(o.a)(l.a.flatListItem, Object(r.b)(e))
			}), n.a.createElement("div", {
				className: Object(o.a)(l.a.flatListItem, Object(r.b)(e))
			}), n.a.createElement("div", {
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
			var i;
			s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.None = "None", e.SeeFewerPostsView = "SeeFewerPostsView", e.ThankYouView = "ThankYouView", e.MuteThankYouView = "MuteThankYouView"
				}(i || (i = {}))
		},
		"./src/reddit/contexts/OneFeed/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/noop.js"),
				n = s.n(i),
				o = s("./node_modules/react/index.js");
			const r = o.createContext({
				hideRecommendationContext: !1,
				hideRecommendationFooter: n.a,
				recommendationFooterView: null,
				setRecommendationFooterView: n.a
			});
			t.a = r
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");

			function o(e) {
				let {
					apiError: t,
					isLoggedOut: s
				} = e;
				switch (t.type) {
					case n.L.AUTHORIZATION_ERROR:
						return s ? i.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : i.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.L.VALIDATION_ERROR:
						return i.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.L.NOT_FOUND_ERROR:
						return i.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.L.SERVER_ERROR:
						return i.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.L.LIKELY_UBLOCK_ERROR:
						return i.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return i.fbt._("Something went wrong. Just don't panic.", null, {
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
				return M
			}));
			var i = s("./src/reddit/constants/postLayout.ts"),
				n = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				o = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/components/PostLeftRail/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				f = s.n(g),
				C = s("./src/reddit/components/LargePost/placeholder.m.less"),
				v = s.n(C);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(u.v)(),
				x = Object(d.c)({
					isFakeSubreddit: u.A
				}),
				w = Object(l.b)(x),
				O = e => {
					const t = {
						interactive: !1,
						voteState: b.a.notVoted
					};
					return a.a.createElement("div", {
						className: v.a.emptyVerticalVotes
					}, a.a.createElement(m.d, y({
						key: "u"
					}, t)), a.a.createElement("div", {
						className: v.a.emptyScore,
						key: "s"
					}), a.a.createElement(m.c, y({
						key: "d"
					}, t)))
				},
				R = e => a.a.createElement("div", y({
					className: Object(c.a)(v.a.subredditIcon, Object(p.a)({
						isLoading: !0
					}))
				}, e));
			var I = P(w(e => {
					let {
						className: t,
						dispatch: s,
						pageLayer: i,
						...n
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(f.a.baseLargeAndMediumPostStyles, t)
					}, a.a.createElement(h.b, {
						key: "a"
					}, a.a.createElement(O, n)), a.a.createElement("div", {
						className: v.a.content,
						key: "b"
					}, a.a.createElement("div", {
						className: v.a.topLine,
						key: "ba"
					}, n.isFakeSubreddit && a.a.createElement(R, {
						key: "baa"
					}), a.a.createElement("div", {
						key: "bab",
						className: Object(c.a)(v.a.topMetaOne, Object(p.b)(n))
					}), a.a.createElement("div", {
						key: "bac",
						className: Object(c.a)(v.a.topMetaTwo, Object(p.b)(n))
					})), a.a.createElement("div", {
						key: "bb",
						className: Object(c.a)(v.a.title, Object(p.b)(n))
					})), a.a.createElement("div", {
						key: "c",
						className: Object(c.a)(v.a.media, Object(p.a)(n))
					}), a.a.createElement("div", {
						className: v.a.content,
						key: "d"
					}, a.a.createElement("div", {
						className: v.a.flatlist
					}, a.a.createElement("div", {
						className: Object(c.a)(v.a.flatlistItemOne, Object(p.b)(n))
					}), a.a.createElement("div", {
						className: Object(c.a)(v.a.flatListItemTwo, Object(p.b)(n))
					}))))
				})),
				S = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const E = {
				[i.g.Large]: [I, 2],
				[i.g.Classic]: [n.b, 10],
				[i.g.Compact]: [o.a, 30],
				[i.g.Search]: [S.a, 8]
			};

			function M(e) {
				return E[e]
			}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let n = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (n += `--[${e.onlyOfType}]`), e.sort && e.sort !== i.a.NewestFirst && (n += `--[${e.sort}]`), n
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
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/logs/console.ts"),
				a = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			const c = Object(i.a)({
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
				h = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
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
				m = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~2f7e159a"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
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
				u = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~GovernanceReleaseNotesModal~ModerationPages~Multired~4b0513d5"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-LargePost~reddit-components-MediumPost"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
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
				p = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CommentsPage~ModerationPages~Reddit~reddit-components-ClassicPost~reddit-components-CompactP~d737df3e"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~1fdd9b9b"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~S~5809214e"), s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"), s.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-LargePost~reddit-components-MediumPost"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
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
					[a.g.Large]: u,
					[a.g.Medium]: p,
					[a.g.Classic]: h,
					[a.g.Compact]: m
				},
				g = e => o.a.createElement(c, e),
				f = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://d4wggo22afv97.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net", "https://www.mms.com"],
				C = e => e.source && e.source.url && e.isSponsored && f.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === l.o.EMBED && !e.isSurveyAd && !(l.b.has(e.media.provider) || C(e)),
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
					post: i
				} = e;
				if (i.isBlank) return g;
				const n = Object(d.q)(i),
					o = t && n;
				s !== a.g.Large || !v(i) || o || i.predictionTournament || Object(d.A)(i) || (s = a.g.Medium);
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
			var i = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/OneFeed/index.ts");
			t.a = function() {
				return Object(i.useContext)(n.a)
			}
		},
		"./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const r = e => Object(n.c)(e, {
				experimentEligibilitySelector: o.R,
				experimentName: i.cc
			}) === i.Md
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return h
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/comments/index.ts"),
				l = s("./src/reddit/reducers/pages/modHub/index.ts"),
				d = s("./src/reddit/selectors/experiments/modqueueActionBarUXImprovements.ts");
			Object(r.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: l.a
				}
			});
			const c = (e, t) => Object(n.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				h = Object(o.a)((e, t) => {
					var s, i, n;
					const {
						pageName: o,
						page: r
					} = t, a = c(0, t);
					if (!(null === (n = null === (i = null === (s = e.pages.modHub.modQueue[o]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === i ? void 0 : i[a]) || void 0 === n ? void 0 : n[r])) return;
					const l = e.pages.modHub.modQueue[o].itemOrder[a][r];
					return l ? l.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				m = (e, t) => {
					var s;
					const {
						pageName: i
					} = t;
					return null === (s = e.pages.modHub.modQueue[i]) || void 0 === s || !s.api || e.pages.modHub.modQueue[i].api.pending
				},
				u = (e, t) => {
					var s;
					const i = c(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[i]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				g = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				f = e => {
					var t;
					const s = e.platform && e.platform.currentPage;
					return (null === (t = null == s ? void 0 : s.meta) || void 0 === t ? void 0 : t.name) === i.Sb.MODQUEUE_PAGES
				},
				C = e => (e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === i.Sb.MODERATION_PAGES || t.meta.name === i.Sb.MODQUEUE_PAGES)
				})(e) && Object(d.a)(e) || !1
		},
		"./src/redditGQL/operations/UpdateRecommendationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"fa7b23e7dbc7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32.830d3c94823a13dd2a21.js.map