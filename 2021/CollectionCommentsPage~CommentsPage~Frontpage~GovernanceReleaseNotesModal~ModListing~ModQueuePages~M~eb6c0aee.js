// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee.e5e03af45e8fd753ca63.js
// Retrieved at 11/4/2021, 7:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"], {
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
				return y
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
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(p),
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
			const C = Object(c.u)(),
				v = Object(r.c)({
					isFakeSubreddit: c.y
				}),
				P = Object(o.b)(v),
				y = e => {
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
				w = () => n.a.createElement(y, null, n.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = C(P(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, u.a.classicPostStyles, u.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement(l.b, null, n.a.createElement(w, null)), n.a.createElement("div", {
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
				p = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(p),
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
			const C = Object(c.u)(),
				v = Object(r.c)({
					isFakeSubreddit: c.y
				}),
				P = Object(o.b)(v),
				y = e => {
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
				w = e => n.a.createElement(l.a, {
					className: Object(h.a)(e)
				}),
				x = e => n.a.createElement("div", {
					className: g.a.flatList
				}, n.a.createElement("div", {
					className: Object(a.a)(g.a.comments, Object(h.b)(e))
				}), n.a.createElement("div", {
					className: Object(a.a)(g.a.ellipsis, Object(h.b)(e))
				}));
			t.a = C(P(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, u.a.compactPostStyles, u.a.classicAndCompactPlaceholderStyles)
			}, n.a.createElement("div", {
				className: g.a.wrapper
			}, n.a.createElement(y, f({
				key: "c"
			}, e)), n.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, n.a.createElement("div", {
				className: Object(a.a)(g.a.expando, Object(h.a)(e))
			})), n.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, n.a.createElement(w, {
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
			})), n.a.createElement(x, f({
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
				ThankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				thankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				Icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
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
				return c
			})), s.d(t, "c", (function() {
				return h
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/components/PostLeftRail/index.m.less"),
				d = s.n(l);
			const c = 40,
				h = e => e.isRemoved ? a.b.removed : e.isReported ? a.b.reported : "transparent",
				m = Object(r.a)(e => {
					const t = h(e),
						s = {
							width: `${c}px`,
							borderLeft: `4px solid ${t}`
						};
					return n.a.createElement("div", {
						className: Object(o.a)(d.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = m
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
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/reddit/components/PostLeftRail/index.tsx"),
				C = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				x = s.n(w),
				R = s("./src/reddit/components/LargePost/placeholder.m.less"),
				I = s.n(R);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(v.u)(),
				E = Object(c.c)({
					isFakeSubreddit: v.y
				}),
				j = Object(d.b)(E),
				k = e => {
					const t = {
						interactive: !1,
						voteState: y.a.notVoted
					};
					return l.a.createElement("div", {
						className: I.a.emptyVerticalVotes
					}, l.a.createElement(C.d, S({
						key: "u"
					}, t)), l.a.createElement("div", {
						className: I.a.emptyScore,
						key: "s"
					}), l.a.createElement(C.c, S({
						key: "d"
					}, t)))
				},
				M = e => l.a.createElement("div", S({
					className: Object(g.a)(I.a.subredditIcon, Object(P.a)({
						isLoading: !0
					}))
				}, e));
			var T = O(j(({
					className: e,
					dispatch: t,
					pageLayer: s,
					...i
				}) => l.a.createElement("div", {
					className: Object(g.a)(x.a.baseLargeAndMediumPostStyles, e)
				}, l.a.createElement(f.b, {
					key: "a"
				}, l.a.createElement(k, i)), l.a.createElement("div", {
					className: I.a.content,
					key: "b"
				}, l.a.createElement("div", {
					className: I.a.topLine,
					key: "ba"
				}, i.isFakeSubreddit && l.a.createElement(M, {
					key: "baa"
				}), l.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(I.a.topMetaOne, Object(P.b)(i))
				}), l.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(I.a.topMetaTwo, Object(P.b)(i))
				})), l.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(I.a.title, Object(P.b)(i))
				})), l.a.createElement("div", {
					key: "c",
					className: Object(g.a)(I.a.media, Object(P.a)(i))
				}), l.a.createElement("div", {
					className: I.a.content,
					key: "d"
				}, l.a.createElement("div", {
					className: I.a.flatlist
				}, l.a.createElement("div", {
					className: Object(g.a)(I.a.flatlistItemOne, Object(P.b)(i))
				}), l.a.createElement("div", {
					className: Object(g.a)(I.a.flatListItemTwo, Object(P.b)(i))
				})))))),
				L = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				_ = s.n(L);
			const V = {
				[p.g.Large]: [T, 2],
				[p.g.Classic]: [u.b, 10],
				[p.g.Compact]: [b.a, 30],
				[p.g.Search]: [e => l.a.createElement("div", {
					className: Object(g.a)(e.className, _.a.postContainer)
				}, l.a.createElement("div", {
					className: _.a.postContent
				}, l.a.createElement("div", {
					className: _.a.postItemMetaContainer
				}, l.a.createElement("div", {
					className: Object(g.a)(_.a.subredditName, Object(P.b)(e))
				}), l.a.createElement("div", {
					className: Object(g.a)(_.a.author, Object(P.b)(e))
				})), l.a.createElement("div", {
					className: _.a.postItemTitleContainer
				}, l.a.createElement("div", {
					className: Object(g.a)(_.a.title, Object(P.b)(e))
				}), l.a.createElement("div", {
					className: _.a.thumbnailContainer
				}, l.a.createElement("div", {
					className: Object(g.a)(_.a.thumbnail, Object(P.b)(e))
				}))), l.a.createElement("div", {
					className: _.a.flatlist
				}, l.a.createElement("div", {
					className: Object(g.a)(_.a.flatListItem, Object(P.b)(e))
				}), l.a.createElement("div", {
					className: Object(g.a)(_.a.flatListItem, Object(P.b)(e))
				}), l.a.createElement("div", {
					className: Object(g.a)(_.a.flatListItem, Object(P.b)(e))
				})))), 8]
			};

			function F(e) {
				return V[e]
			}
			const N = .1,
				A = Object(c.c)({
					loadingPostComponentForLayout: () => F
				}),
				H = Object(d.b)(A);
			class W extends l.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && m.b(this.wrapperRef), e && m.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= N;
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
					})), p = r()(h, m);
					return l.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, l.a.Children.toArray(p))
				}
			}
			t.a = H(W)
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
				return ye
			})), s.d(t, "a", (function() {
				return xe
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
				p = s("./node_modules/shallowequal/index.js"),
				u = s.n(p),
				b = s("./src/lib/addQueryParams/index.ts"),
				g = s("./src/lib/ads/index.ts"),
				f = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts"),
				w = s("./src/lib/sentry/index.ts"),
				x = s("./node_modules/react-redux/es/index.js"),
				R = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/actions/toaster.ts"),
				S = s("./src/reddit/constants/oneFeed.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/lib/makeGqlRequest/index.ts"),
				k = s("./src/redditGQL/operations/UpdateRecommendationPreferences.json");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(i || (i = {}));
			const M = (e, t) => Object(j.a)(e, {
					...k,
					variables: t
				}),
				T = (e, t) => M(e(), {
					input: {
						dislikedSimilarSubredditSeedPreference: {
							action: i.ADD,
							subredditId: t
						}
					}
				}),
				L = (e, t) => M(e(), {
					input: {
						dislikedSubredditPreference: {
							action: i.ADD,
							subredditId: t
						}
					}
				});
			var _ = s("./src/reddit/helpers/trackers/post.ts"),
				V = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				F = s("./src/reddit/hooks/useTracking.ts"),
				N = s("./src/reddit/icons/fonts/index.tsx"),
				A = s("./src/reddit/components/OneFeed/Footer.m.less"),
				H = s.n(A);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = async ({
				dispatch: e,
				gqlContext: t,
				setRecommendationFooterView: s,
				similar: i,
				subredditId: n
			}) => {
				const o = i ? T : L;
				try {
					if (!0 === (await o(t, n)).ok) return void s(S.a.ThankYouView);
					e(Object(I.d)())
				} catch (r) {
					e(Object(I.d)())
				}
			}, U = ({
				displayText: e,
				seeLessFromThisCommunity: t,
				seeLessLikeThisCommunity: s,
				seeLessOfThisPostClick: i
			}) => m.a.createElement("div", {
				className: H.a.SeeFewerPostsView
			}, m.a.createElement("div", {
				className: H.a.Title
			}, W._("What would you like to see less of?", null, {
				hk: "mw3bZ"
			})), m.a.createElement("div", null, m.a.createElement("button", {
				className: H.a.Button,
				onClick: i
			}, W._("This individual post", null, {
				hk: "103pQH"
			}))), m.a.createElement("hr", {
				className: H.a.Divider
			}), m.a.createElement("div", null, m.a.createElement("button", {
				className: H.a.Button,
				onClick: t
			}, W._("Posts from this community", null, {
				hk: "RacDp"
			}))), !!e && m.a.createElement(m.a.Fragment, null, m.a.createElement("hr", {
				className: H.a.Divider
			}), m.a.createElement("div", null, m.a.createElement("button", {
				className: H.a.Button,
				onClick: s
			}, W._("Posts from communities similar to {subreddit name}", [W._param("subreddit name", e)], {
				hk: "3pCPAD"
			}))))), q = () => m.a.createElement("div", {
				className: H.a.ThankYouView
			}, m.a.createElement("div", {
				className: H.a.Title
			}, m.a.createElement(N.a, {
				name: "checkmark",
				className: H.a.Icon
			}), W._("Thanks for letting us know!", null, {
				hk: "2VBsFC"
			})), m.a.createElement("div", {
				className: H.a.Subtitle
			}, W._("Your feedback improves your feed.", null, {
				hk: "2WLaqS"
			})));
			var D = Object(E.b)(({
					gqlContext: e,
					layout: t,
					post: s
				}) => {
					var i;
					const n = Object(x.d)(),
						o = Object(F.a)(),
						r = Object(h.useRef)(!1),
						{
							hideRecommendationFooter: a,
							recommendationFooterView: l,
							setRecommendationFooterView: d
						} = Object(V.a)(),
						c = s.belongsTo.id,
						p = s.id,
						{
							subredditId: u,
							subredditName: b
						} = (null === (i = s.recommendationContext) || void 0 === i ? void 0 : i.source) || {};
					Object(h.useEffect)(() => {
						if (l === S.a.ThankYouView) {
							const e = r.current ? () => n(Object(R.Y)(p, !0, !1, !0)) : a,
								t = setTimeout(e, 1500);
							return () => clearTimeout(t)
						}
					}, [n, a, p, l]);
					const g = Object(h.useCallback)(() => {
							r.current = !0, d(S.a.ThankYouView), o(Object(_.j)(p))
						}, [p, o, d]),
						C = Object(h.useCallback)(() => {
							B({
								dispatch: n,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !1,
								subredditId: c
							}), r.current = !0, o(Object(_.b)(p))
						}, [n, e, p, o, d, c]),
						v = Object(h.useCallback)(() => {
							u && (B({
								dispatch: n,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !0,
								subredditId: u
							}), r.current = !0, o(Object(_.m)(p)))
						}, [n, e, p, u, o, d]);
					return l && l !== S.a.None ? m.a.createElement("div", {
						className: Object(f.a)(H.a.Footer, {
							[H.a.ClassicLayout]: t === O.g.Classic,
							[H.a.CompactLayout]: t === O.g.Compact,
							[H.a.LargeLayout]: t === O.g.Large
						})
					}, l === S.a.SeeFewerPostsView && m.a.createElement(U, {
						displayText: b,
						seeLessFromThisCommunity: C,
						seeLessLikeThisCommunity: v,
						seeLessOfThisPostClick: g
					}), l === S.a.ThankYouView && m.a.createElement(q, null)) : null
				}),
				z = s("./src/reddit/components/PostList/LoadMore.tsx"),
				K = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				G = s("./src/reddit/components/Scroller/Simple.tsx"),
				Q = s("./src/reddit/constants/adEvents.ts"),
				Y = s("./src/reddit/constants/componentSizes.ts"),
				J = s("./src/reddit/contexts/OneFeed/index.ts");
			var X = function({
					children: e
				}) {
					const [t, s] = Object(h.useState)(S.a.None), i = Object(h.useCallback)(() => s(S.a.None), []), n = Object(h.useMemo)(() => ({
						hideRecommendationFooter: i,
						recommendationFooterView: t,
						setRecommendationFooterView: s
					}), [i, t, s]);
					return m.a.createElement(J.a.Provider, {
						value: n
					}, e)
				},
				Z = s("./src/reddit/controls/InternalLink/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				ee = s("./src/reddit/helpers/getClickInfo.ts"),
				te = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				se = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				ie = s("./src/reddit/models/Media/index.ts"),
				ne = s("./src/reddit/helpers/brandSafety/index.ts"),
				oe = s("./src/reddit/helpers/trackers/ads.ts"),
				re = s("./src/lib/LRUCache/index.ts"),
				ae = s("./src/telemetry/index.ts"),
				le = s("./src/telemetry/models/Timer.ts"),
				de = s("./src/reddit/components/PostList/index.m.less"),
				ce = s.n(de);
			const {
				fbt: he
			} = s("./node_modules/fbt/lib/FbtPublic.js"), me = 500, pe = new re.a(me), ue = new re.a(me), be = new re.a(me), ge = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, fe = P.a.div("SeeMore", ce.a), Ce = P.a.wrapped(se.a, "ArrowRight", ce.a), ve = (e, t, s, i, n, o, r, a, l) => {
				const d = `entered-${e}-${t}-${s?`last-${i}-${n}`:""}-${o}`;
				let c = pe.get(d);
				return void 0 === c && (c = () => {
					s && r.onBottomViewed(i, n), r.trackOnPostEnteredViewport(e, t, a, l)
				}, pe.set(d, c)), c
			}, Pe = (e, t, s, i, n) => {
				const o = `left-${e}-${t}`;
				let r = ue.get(o);
				return void 0 === r && (r = o => {
					s.trackOnPostExitedViewport(e, t, o, i, n)
				}, ue.set(o, r)), r
			}, ye = (e, t, s = !1) => {
				const i = `click-${e}`;
				let n = be.get(i);
				return void 0 === n && (n = (e, i, n, o, r) => {
					if (i.isSponsored) {
						t.fireAdPixelsOfType(i, Q.a.Click);
						const {
							source: e
						} = Object(g.t)(i, o);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object($.a)(i.id, n, t).url), Object(oe.a)(i, r), Object(y.e)(t, y.d.BLANK)
						}
					} else t.openPost({
						postOrComment: i,
						clickInfo: Object(ee.a)(e),
						isFrontpage: s
					})
				}, be.set(i, n)), n
			}, we = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class xe extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new re.a(me), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: i
						} = this.props;
						this.dispatchBrandSafety(e), t && i && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = r()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, i = e(), n = [];
						i.forEach(e => n.push(e.id));
						const o = n.map(e => t[e]).filter(Boolean),
							r = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(ne.a)(o, r))
					}, C.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && ae.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = ae.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = ae.c.end(this.timerId);
						setTimeout(() => Object(ae.b)(C.m.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && ae.c.cancel(this.timerId), e.postIds.length && (this.timerId = ae.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (v.a.read(() => this.checkAndSendScreenview()), this.timerId && ae.c.has(this.timerId)) {
						const e = ae.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(ae.b)(C.m.Redesign, {
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
					this.timerId && ae.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return ae.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const i = ae.c.end(e);
					setTimeout(() => {
						s(t(i, le.TimerType.InApp))
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
							return t = "function" == typeof i[e] || "object" == typeof i[e] ? !u()(i[e], r[e]) : i[e] !== r[e]
						})) return !0;
					if (t === n) return !1;
					if (s !== o) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((i, o) => {
							const r = 0 === o;
							return s({
								isFirstPost: r,
								layout: e,
								post: t[i]
							}) !== s({
								isFirstPost: r,
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
						isProfilePostListing: d,
						isTopicPage: c,
						isCommentCountAnimationEnabled: h,
						isVoteCountAnimationEnabled: p,
						isCountAnimShadowTestEnabled: u,
						listingBelowVariant: b,
						listingKey: g,
						listingName: f,
						pageLayer: v,
						pageReferrer: P,
						redditStyle: y,
						shouldHideFlair: x,
						triggerNewPostPill: R,
						postIds: I
					} = this.props, S = 0 === t, E = `post-${i}-${e}-${t}-${s?"last-index":""}-${f}-${g}-${P}`;
					let j;
					if (void 0 === (j = this.scrollChildCache.get(E))) {
						const {
							inSubredditOrProfile: k,
							postsById: M
						} = this.props, T = M[e], L = T.crosspostRootId && M[T.crosspostRootId] ? M[T.crosspostRootId] : T;
						T.crosspostRootId && !M[T.crosspostRootId] && w.c.withScope(e => {
							e.setExtra("errorType", C.s.API), e.setExtra("description", `Post ${T.id} is crosspost of ${T.crosspostRootId}, but ` + `${T.crosspostRootId} details are missing in the state`), w.c.captureMessage("Crosspost parent details are missing")
						});
						const _ = this.props.postComponentForLayout({
							isCrosspost: !!T.crosspostRootId,
							isFirstPost: S,
							layout: i,
							post: L
						});
						let V = `post-list-item-[layout: ${i}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (V += `--${g}`);
						const F = ve(e, i, s, g, f, P, this.props, t, this.props.hostPostData),
							N = Pe(e, i, this.props, t, v),
							A = ye(e, this.props, l),
							H = L.media && L.media.type === ie.o.EMBED ? L.media.provider : null,
							W = h && !T.isSponsored,
							B = p && !T.isSponsored && !T.isScoreHidden,
							U = !!(null == T ? void 0 : T.recommendationContext);
						j = {
							estHeight: Object(te.c)(T, i),
							id: e,
							isFocusable: !(!L.media || !(i === O.g.Large || i === O.g.Classic && Object(ie.H)(L.media))) && (ie.d.has(L.media.type) && (!H || !ie.s.has(H)) && !L.isSpoiler),
							trackOnEnteredViewport: F,
							trackOnExitedViewport: N,
							render: ({
								className: h,
								height: p,
								width: C,
								remeasure: P,
								setScrollerChildRef: w,
								shouldLoadInitially: O
							}) => m.a.createElement(X, {
								key: V
							}, m.a.createElement(_, {
								availableWidth: C,
								className: h,
								currentProfileName: n,
								eventFactory: this.eventFactoryHandler,
								first: S,
								forceLoadMedia: O,
								hostPostData: o,
								inSubredditOrProfile: k,
								isCommentCountAnimationEnabled: W,
								isCommentPermalink: r,
								isCommentsPage: a,
								isCountAnimShadowTestEnabled: u,
								isFrontpage: l,
								isProfilePostListing: d,
								isTopicPage: c,
								isVoteCountAnimationEnabled: B,
								key: V,
								last: s,
								listingBelowVariant: b,
								listingIndex: t,
								listingKey: g,
								listingName: f,
								onceInViewport: R,
								onClickPost: A,
								onSizeChanged: P,
								pageLayer: v,
								postId: e,
								postIds: I,
								redditStyle: y,
								scrollerItemRef: w,
								sendEvent: this.props.sendEvent,
								shouldHideFlair: x
							}), U && m.a.createElement(D, {
								post: L,
								layout: i
							}))
						}, this.scrollChildCache.set(E, j)
					}
					return j
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
						className: ce.a.placeholder
					}, m.a.createElement(r, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && m.a.createElement(K.a, {
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
						className: ce.a.placeholder
					}, m.a.createElement(z.a, {
						className: n,
						isLoading: !!t,
						layout: i,
						countOverride: ge[i]
					}), !!e && m.a.createElement(K.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: i,
						isSerpExperimentOverride: o,
						isTruncated: r,
						layout: a,
						location: l,
						loadMore: d,
						postIds: c,
						postsById: p,
						onLoadMore: u
					} = this.props;
					let g = c.filter(e => Boolean(p[e])).map((e, t, s) => {
						const i = t === s.length - 1;
						return this.scrollChildForPost(e, t, i, a)
					});
					i && (g = we(g, i));
					const v = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						P = l ? Object(n.e)(l) : null,
						y = P || r;
					return m.a.createElement(h.Fragment, null, m.a.createElement(G.b, {
						innerRef: this.updateScrollerRef,
						className: y ? ce.a.truncatedPostList : Object(f.a)(ce.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: v,
						viewportTopPadding: Y.f
					}, g), !o && P && m.a.createElement(fe, {
						className: ce.a.seeMoreButton
					}, m.a.createElement(Z.a, {
						className: ce.a.seeMorePostsText,
						to: Object(b.a)(P, {
							type: C.Yb.Posts
						})
					}, he._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(Ce, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			xe.defaultProps = {
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
				return Q
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
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/fastdom/index.ts"),
				b = s("./node_modules/lodash/throttle.js"),
				g = s.n(b);
			const f = 500,
				C = 1e3,
				v = 40;
			var P;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(P || (P = {}));
			const y = () => ({
					[P.Max10]: 0,
					[P.Max20]: 0,
					[P.Max30]: 0,
					[P.Max40]: 0,
					[P.Max50]: 0,
					[P.Max60]: 0
				}),
				w = [P.Max10, P.Max20, P.Max30, P.Max40, P.Max50, P.Max60],
				x = e => ({
					eventHandler: e
				});

			function R({
				fn: e,
				subscriber: t,
				timeout: s
			}) {
				const i = [];
				let n, o, r;
				const a = () => {
						if (i.length < v) return;
						const e = y(),
							s = Math.min(C, i.length),
							n = i.splice(0, s);
						i.splice(0, i.length);
						const o = n[s - 1] - n[0];
						for (let t = n.shift(); n.length > 0; t = n.shift()) {
							const s = n[0] - t,
								i = Math.min(60, Math.ceil(1e3 / s));
							e[i <= 10 ? P.Max10 : 60 === i ? P.Max60 : w[Math.ceil(i / 10) - 1]] += s
						}
						const r = y();
						for (const t in e) r[t] = e[t] / o;
						t(r)
					},
					l = () => {
						void 0 !== r && (window.clearTimeout(r), r = void 0)
					},
					d = () => {
						void 0 !== n && (cancelAnimationFrame(n), n = void 0), void 0 !== o && (window.clearInterval(o), o = void 0), l(), a()
					},
					c = () => {
						n = requestAnimationFrame(() => {
							i.push(performance.now()), c()
						})
					},
					h = g()(() => {
						l(), r = window.setTimeout(d, s)
					}, p.J);
				return {
					cleanup: d,
					eventHandler: t => {
						void 0 === o ? (c(), h(), o = window.setInterval(a, f)) : h(), e(t)
					}
				}
			}
			var I = s("./src/lib/scheduler/index.ts"),
				S = s("./src/lib/domUtils/index.ts"),
				O = s("./src/lib/LinkedListMap/index.ts");
			const E = (e, t) => e < 0 ? t + e : e % t;
			class j {
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
			class M {
				constructor({
					top: e,
					height: t,
					heightWithSuffix: s
				}) {
					this.height = t, this.heightWithSuffix = s, this.top = e, this.bottom = this.top + this.height
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
			const T = ({
				buffer: e,
				container: t
			} = {}) => {
				const s = r()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(k.a)() : t.scrollTop;
					return new M({
						top: e,
						height: window.innerHeight
					})
				}
				return new M({
					top: 0,
					height: s
				})
			};
			var L = s("./src/reddit/components/ResizeSensor/index.tsx"),
				_ = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/elementClassNames.ts"),
				F = s("./src/reddit/contexts/InsideOverlay.tsx"),
				N = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/telemetry/helpers/sendEvent.ts"),
				H = s("./src/telemetry/helpers/sendTiming.ts"),
				W = s("./src/reddit/components/Scroller/Simple.m.less"),
				B = s.n(W);
			const U = _.g,
				q = 5 * p.J,
				D = 3,
				z = Object(m.c)({
					isOverlayOpen: N.i
				}),
				K = Object(c.b)(z),
				G = {};

			function Q(e) {
				return e === document
			}

			function Y(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const J = 10,
				X = .9,
				Z = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * p.J,
				ie = 400,
				ne = 8,
				oe = 5 * p.J,
				re = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				le = () => ae ? performance.now() : Date.now();

			function de(e, t) {
				return O.a.fromArray(e.children.map((e, s) => {
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
					super(e), this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						A.b.enqueue(new I.a({
							args: [e, t],
							cb: (e, t) => Object(H.a)(p.m.Redesign, {
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
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && le() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, s) => {
						const i = s || this.props.children;
						if (this.state.renderableChildren.length < i.length || e)
							if (this.hasScrolledWithinThreshold()) u.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, s ? i : void 0)
								}, se)
							});
							else {
								this.nextVisibleChildrenIndex + t <= i.length ? this.nextVisibleChildrenIndex += t : this.nextVisibleChildrenIndex = i.length;
								const e = i.slice(0, this.nextVisibleChildrenIndex);
								e.length && (this.lastVisibleElId = e[e.length - 1].id), u.a.write(() => {
									this.setState({
										renderableChildren: e
									})
								}), this.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ie) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = (e = re) => {
						let t = 0,
							s = this.state.renderableChildren.length;
						for (; t < e && s < this.props.children.length;) t += this.props.children[s].estHeight, s++;
						const i = s - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, i)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(h.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = n()(() => {
						this.handleScroll()
					}, p.J), this.pauseAllElements = () => {
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
						const t = new O.a("id");
						return this.state.renderableChildren.forEach(s => {
							const i = this.childMap.get(s.id);
							i && e(i) && t.push(i)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.J))
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
							n = new M({
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
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = u.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.J), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = u.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(S.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < X,
								s = e < Z,
								i = e < $;
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
							const n = new O.a("id");
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
									this.elementIsHideable(d) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = d.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!l || !l.el || !l.rectangle) return void(this.measurementsInvalid && l && this.getChildRectangle(l));
								const {
									id: c,
									itemRef: h,
									trackOnEnteredViewport: m
								} = l, p = !!this.itemsInViewport.get(c);
								if (this.elementIsUnmountable(d)) h && p && l.loaded && l.isFocusable && a.push(h.pauseContent);
								else if (h && this.loadItemIfPossible(l, h, t, s, i, a), this.elementIsVisible(d)) {
									n.push(l), !p && m && A.b.enqueue(new I.a({
										cb: m,
										args: void 0
									}));
									const e = this.elementIsFocused(d);
									e && !r && (r = l.id), t && l.isFocusable && !o && e ? (o = l.id, l.focused || (l.focused = !0, h && a.push(h.focusContent))) : l.loaded && l.isFocusable && (l.focused || this.needsToPauseViewportItems) && (l.focused = !1, h && a.push(h.pauseContent))
								} else p && l.loaded && l.isFocusable && (l.focused = !1, h && a.push(h.stopContent))
							}), u.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !n.has(e) && A.b.enqueue(new I.a({
									cb: t,
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
					}, p.J), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const i = s.el.firstChild;
						i && (t !== s.el.style.height && (s.el.style.height = t), i.classList.add(B.a.Hidden), this.hiddenChildren[e] = t, s.loaded && u.a.write(() => {
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
								const i = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(S.c)(this.scrollContainer, i), this.callOnScrollForItemsChanged())
								}, p.J)
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
					}, this.childMap = de(e), this.containerRef = null, this.itemsInViewport = new O.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new j(J), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = oe;
					const t = this.getVisibleChildren();
					t.length && (this.lastVisibleElId = t[t.length - 1].id), this.nextVisibleChildrenIndex = t.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: t
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
					this.fpsMeter = this.props.trackingName ? R({
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
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(S.c)(this.scrollContainer, 0), this.setupScrollHandler(), u.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = G[e];
							r()(t) || (G[e] = void 0, this.scrollContainer && Object(S.c)(this.scrollContainer, t))
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
						G[e] = this.lastRenderPosition
					}
					this.childMap = new O.a("id"), this.itemsInViewport = new O.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(h.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
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
					return this.scrollContainer ? Q(this.scrollContainer) ? Object(k.a)() : this.scrollContainer.scrollTop : 0
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
						this.mountableViewport = new M({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						});
						const i = 4 * t;
						this.renderableViewport = new M({
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
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && A.b.enqueue(new I.a({
							cb: t,
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
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, l.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? B.a.Hidden : void 0
					}, e.render({
						className: V.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: U
					})))), !!e && l.a.createElement(L.a, {
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
					e.None = "None", e.SeeFewerPostsView = "SeeFewerPostsView", e.ThankYouView = "ThankYouView"
				}(i || (i = {}))
		},
		"./src/reddit/contexts/OneFeed/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/noop.js"),
				n = s.n(i),
				o = s("./node_modules/react/index.js");
			const r = o.createContext({
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

			function o({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case n.H.AUTHORIZATION_ERROR:
						return t ? i.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : i.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.H.VALIDATION_ERROR:
						return i.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.H.NOT_FOUND_ERROR:
						return i.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.H.SERVER_ERROR:
						return i.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.H.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return y
			}));
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
			const c = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("reddit-components-BlankPost")]).then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePo~5f1ac562"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePo~5f1ac562"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
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
				p = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePo~5f1ac562"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
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
				u = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePo~5f1ac562"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Reddit~StandalonePostPage~reddit-components-MediumPost"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
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
					[l.g.Large]: p,
					[l.g.Medium]: u,
					[l.g.Classic]: h,
					[l.g.Compact]: m
				},
				g = e => o.a.createElement(c, e),
				f = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net"],
				C = e => e.source && e.source.url && e.isSponsored && f.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === d.o.EMBED && !(d.b.has(e.media.provider) || C(e)),
				P = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case l.g.Medium:
							return 188;
						case l.g.Classic:
							return 96;
						case l.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function y({
				isCrosspost: e,
				isFirstPost: t,
				layout: s,
				post: i
			}) {
				if (i.isBlank) return g;
				const n = !i.media && !!i.source && Object(r.a)(i.source.url),
					o = e && n;
				s !== l.g.Large || !v(i) || o || i.predictionTournament || (s = l.g.Medium);
				const d = b[s];
				return void 0 === d ? (Object(a.a)(void 0, `Could not find component for layout ${s}.`), g) : t && i.isSponsored && s === l.g.Large ? u : d
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
		"./src/redditGQL/operations/UpdateRecommendationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"fa7b23e7dbc7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee.e5e03af45e8fd753ca63.js.map