// https://www.redditstatic.com/desktop2x/ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit.03f185f92ab07e1ca005.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"], {
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/FocusTrap/index.ts"),
				a = s("./src/lib/portal/index.tsx"),
				l = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/constants/shortcuts.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				h = s("./src/higherOrderComponents/asModal/index.m.less"),
				m = s.n(h);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
				className: e,
				isVisible: t,
				...s
			}) => i.a.createElement("div", p({
				className: Object(o.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, s));

			function b(e) {
				class t extends n.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(c.a)(), this.ref && (this.focusTrap = new r.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(c.b)(), Object(l.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: s,
							ignoreDefaultFocus: n,
							onOverlayClick: r,
							overlayClassName: l,
							overlayCustomStyles: c,
							withOverlay: h,
							...p
						} = t, b = p;
						return i.a.createElement(a.a, {
							container: document.getElementById(d.b)
						}, i.a.createElement(u, {
							className: l,
							isVisible: h,
							onClick: this.onOverlayClick,
							style: c
						}, i.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(m.a.modal, s),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, i.a.createElement(e, b))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			s("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => i.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			class n {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class i {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const s = new i(t);
					return e.forEach(e => s.push(e)), s
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const s = t instanceof n ? t : new n(t),
						i = this.getNode(e);
					if (!i) throw new Error(`Cannot find item with key ${e}`);
					s.prev = i, s.next = i.next, i.next = s, s.next && (s.next.prev = s);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = s, this.length++
				}
				insertBefore(e, t) {
					const s = t instanceof n ? t : new n(t),
						i = this.getNode(e);
					if (!i) throw new Error(`Cannot find item with key ${e}`);
					s.next = i, s.prev = i.prev, i.prev = s, s.prev && (s.prev.next = s);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = s, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof n ? e : new n(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const s = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[s] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof n ? e : new n(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const s = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[s] = t, this.length++
				}
			}
		},
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
			s.d(t, "a", (function() {
				return y
			}));
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
				f = s.n(b);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(c.u)(),
				C = Object(r.c)({
					isFakeSubreddit: c.z
				}),
				x = Object(o.b)(C),
				y = e => {
					const t = {
						interactive: !1,
						voteState: m.a.notVoted
					};
					return i.a.createElement("div", {
						className: Object(a.a)(e.className, f.a.emptyVerticalVotes)
					}, i.a.createElement(d.d, v({
						key: "u"
					}, t)), e.children, i.a.createElement(d.c, v({
						key: "d"
					}, t)))
				},
				w = () => i.a.createElement(y, null, i.a.createElement("div", {
					className: f.a.emptyScore,
					key: "s"
				}));
			t.b = g(x(e => i.a.createElement("div", {
				className: Object(a.a)(e.className, u.a.classicPostStyles, u.a.classicAndCompactPlaceholderStyles)
			}, i.a.createElement(l.b, null, i.a.createElement(w, null)), i.a.createElement("div", {
				className: f.a.mainBody
			}, i.a.createElement("div", {
				className: f.a.thumbnailContainer
			}, i.a.createElement("div", {
				className: Object(a.a)(f.a.thumbnail, Object(h.b)(e))
			})), i.a.createElement("div", {
				className: f.a.content
			}, i.a.createElement("div", {
				key: "a"
			}, i.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(f.a.title, Object(h.b)(e))
			}), i.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(f.a.meta, Object(h.b)(e))
			})), i.a.createElement("div", {
				key: "f",
				className: f.a.flatlist
			}, i.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(f.a.flatlistExpando, Object(h.b)(e))
			}), i.a.createElement("div", {
				key: "fb",
				className: f.a.flatlistSeparator
			}), i.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(f.a.flatListItemOne, Object(h.b)(e))
			}), i.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(f.a.flatListItemTwo, Object(h.b)(e))
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
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
				f = s.n(b);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(c.u)(),
				C = Object(r.c)({
					isFakeSubreddit: c.z
				}),
				x = Object(o.b)(C),
				y = e => {
					const t = {
						interactive: !1,
						voteState: m.a.notVoted
					};
					return i.a.createElement("div", {
						className: f.a.emptyVotes
					}, i.a.createElement(d.d, v({
						key: "u"
					}, t)), i.a.createElement("div", {
						key: "s",
						className: f.a.emptyScore
					}), i.a.createElement(d.c, v({
						key: "d"
					}, t)))
				},
				w = e => i.a.createElement(l.a, {
					className: Object(h.a)(e)
				}),
				I = e => i.a.createElement("div", {
					className: f.a.flatList
				}, i.a.createElement("div", {
					className: Object(a.a)(f.a.comments, Object(h.b)(e))
				}), i.a.createElement("div", {
					className: Object(a.a)(f.a.ellipsis, Object(h.b)(e))
				}));
			t.a = g(x(e => i.a.createElement("div", {
				className: Object(a.a)(e.className, u.a.compactPostStyles, u.a.classicAndCompactPlaceholderStyles)
			}, i.a.createElement("div", {
				className: f.a.wrapper
			}, i.a.createElement(y, v({
				key: "c"
			}, e)), i.a.createElement("div", {
				key: "a",
				className: f.a.expandoContainer
			}, i.a.createElement("div", {
				className: Object(a.a)(f.a.expando, Object(h.a)(e))
			})), i.a.createElement("div", {
				key: "d",
				className: f.a.subredditIconContainer
			}, i.a.createElement(w, {
				isLoading: !1
			})), i.a.createElement("div", {
				key: "e",
				className: f.a.topLine
			}, i.a.createElement("div", {
				key: "ea",
				className: Object(a.a)(f.a.title, Object(h.b)(e))
			}), i.a.createElement("div", {
				key: "eb",
				className: Object(a.a)(f.a.meta, Object(h.b)(e))
			})), i.a.createElement(I, v({
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/components/PostLeftRail/index.m.less"),
				d = s.n(l);
			const c = 40,
				h = e => e.isRemoved ? a.a.removed : e.isReported ? a.a.reported : "transparent",
				m = Object(r.a)(e => {
					const t = h(e),
						s = {
							width: `${c}px`,
							borderLeft: `4px solid ${t}`
						};
					return i.a.createElement("div", {
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
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				b = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/reddit/components/PostLeftRail/index.tsx"),
				g = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				I = s.n(w),
				P = s("./src/reddit/components/LargePost/placeholder.m.less"),
				O = s.n(P);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = Object(C.u)(),
				E = Object(c.c)({
					isFakeSubreddit: C.z
				}),
				j = Object(d.b)(E),
				k = e => {
					const t = {
						interactive: !1,
						voteState: y.a.notVoted
					};
					return l.a.createElement("div", {
						className: O.a.emptyVerticalVotes
					}, l.a.createElement(g.d, S({
						key: "u"
					}, t)), l.a.createElement("div", {
						className: O.a.emptyScore,
						key: "s"
					}), l.a.createElement(g.c, S({
						key: "d"
					}, t)))
				},
				N = e => l.a.createElement("div", S({
					className: Object(f.a)(O.a.subredditIcon, Object(x.a)({
						isLoading: !0
					}))
				}, e));
			var T = R(j(({
					className: e,
					dispatch: t,
					pageLayer: s,
					...n
				}) => l.a.createElement("div", {
					className: Object(f.a)(I.a.baseLargeAndMediumPostStyles, e)
				}, l.a.createElement(v.b, {
					key: "a"
				}, l.a.createElement(k, n)), l.a.createElement("div", {
					className: O.a.content,
					key: "b"
				}, l.a.createElement("div", {
					className: O.a.topLine,
					key: "ba"
				}, n.isFakeSubreddit && l.a.createElement(N, {
					key: "baa"
				}), l.a.createElement("div", {
					key: "bab",
					className: Object(f.a)(O.a.topMetaOne, Object(x.b)(n))
				}), l.a.createElement("div", {
					key: "bac",
					className: Object(f.a)(O.a.topMetaTwo, Object(x.b)(n))
				})), l.a.createElement("div", {
					key: "bb",
					className: Object(f.a)(O.a.title, Object(x.b)(n))
				})), l.a.createElement("div", {
					key: "c",
					className: Object(f.a)(O.a.media, Object(x.a)(n))
				}), l.a.createElement("div", {
					className: O.a.content,
					key: "d"
				}, l.a.createElement("div", {
					className: O.a.flatlist
				}, l.a.createElement("div", {
					className: Object(f.a)(O.a.flatlistItemOne, Object(x.b)(n))
				}), l.a.createElement("div", {
					className: Object(f.a)(O.a.flatListItemTwo, Object(x.b)(n))
				})))))),
				_ = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				L = s.n(_);
			const M = {
				[p.g.Large]: [T, 2],
				[p.g.Classic]: [u.b, 10],
				[p.g.Compact]: [b.a, 30],
				[p.g.Search]: [e => l.a.createElement("div", {
					className: Object(f.a)(e.className, L.a.postContainer)
				}, l.a.createElement("div", {
					className: L.a.postContent
				}, l.a.createElement("div", {
					className: L.a.postItemMetaContainer
				}, l.a.createElement("div", {
					className: Object(f.a)(L.a.subredditName, Object(x.b)(e))
				}), l.a.createElement("div", {
					className: Object(f.a)(L.a.author, Object(x.b)(e))
				})), l.a.createElement("div", {
					className: L.a.postItemTitleContainer
				}, l.a.createElement("div", {
					className: Object(f.a)(L.a.title, Object(x.b)(e))
				}), l.a.createElement("div", {
					className: L.a.thumbnailContainer
				}, l.a.createElement("div", {
					className: Object(f.a)(L.a.thumbnail, Object(x.b)(e))
				}))), l.a.createElement("div", {
					className: L.a.flatlist
				}, l.a.createElement("div", {
					className: Object(f.a)(L.a.flatListItem, Object(x.b)(e))
				}), l.a.createElement("div", {
					className: Object(f.a)(L.a.flatListItem, Object(x.b)(e))
				}), l.a.createElement("div", {
					className: Object(f.a)(L.a.flatListItem, Object(x.b)(e))
				})))), 8]
			};

			function V(e) {
				return M[e]
			}
			const F = .1,
				A = Object(c.c)({
					loadingPostComponentForLayout: () => V
				}),
				B = Object(d.b)(A);
			class H extends l.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && m.b(this.wrapperRef), e && m.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= F;
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
			t.a = B(H)
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
				return fe
			})), s.d(t, "a", (function() {
				return ge
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
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				C = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./node_modules/react-redux/es/index.js"),
				w = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/constants/oneFeed.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/contexts/ApiContext.tsx"),
				R = s("./src/lib/makeGqlRequest/index.ts"),
				E = s("./src/redditGQL/operations/UpdateRecommendationPreferences.json");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(n || (n = {}));
			const j = (e, t) => Object(R.a)(e, {
					...E,
					variables: t
				}),
				k = (e, t) => j(e(), {
					input: {
						dislikedSimilarSubredditSeedPreference: {
							action: n.ADD,
							subredditId: t
						}
					}
				}),
				N = (e, t) => j(e(), {
					input: {
						dislikedSubredditPreference: {
							action: n.ADD,
							subredditId: t
						}
					}
				});
			var T = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				L = s("./src/reddit/hooks/useTracking.ts"),
				M = s("./src/reddit/icons/fonts/index.tsx"),
				V = s("./src/reddit/components/OneFeed/Footer.m.less"),
				F = s.n(V);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = async ({
				dispatch: e,
				gqlContext: t,
				setRecommendationFooterView: s,
				similar: n,
				subredditId: i
			}) => {
				const o = n ? k : N;
				try {
					if (!0 === (await o(t, i)).ok) return void s(P.a.ThankYouView);
					e(Object(I.d)())
				} catch (r) {
					e(Object(I.d)())
				}
			}, H = ({
				displayText: e,
				seeLessFromThisCommunity: t,
				seeLessLikeThisCommunity: s,
				seeLessOfThisPostClick: n
			}) => m.a.createElement("div", {
				className: F.a.SeeFewerPostsView
			}, m.a.createElement("div", {
				className: F.a.Title
			}, A._("What would you like to see less of?", null, {
				hk: "mw3bZ"
			})), m.a.createElement("div", null, m.a.createElement("button", {
				className: F.a.Button,
				onClick: n
			}, A._("This individual post", null, {
				hk: "103pQH"
			}))), m.a.createElement("hr", {
				className: F.a.Divider
			}), m.a.createElement("div", null, m.a.createElement("button", {
				className: F.a.Button,
				onClick: t
			}, A._("Posts from this community", null, {
				hk: "RacDp"
			}))), !!e && m.a.createElement(m.a.Fragment, null, m.a.createElement("hr", {
				className: F.a.Divider
			}), m.a.createElement("div", null, m.a.createElement("button", {
				className: F.a.Button,
				onClick: s
			}, A._("Posts from communities similar to {subreddit name}", [A._param("subreddit name", e)], {
				hk: "3pCPAD"
			}))))), W = () => m.a.createElement("div", {
				className: F.a.ThankYouView
			}, m.a.createElement("div", {
				className: F.a.Title
			}, m.a.createElement(M.a, {
				name: "checkmark",
				className: F.a.Icon
			}), A._("Thanks for letting us know!", null, {
				hk: "2VBsFC"
			})), m.a.createElement("div", {
				className: F.a.Subtitle
			}, A._("Your feedback improves your feed.", null, {
				hk: "2WLaqS"
			})));
			var U = Object(S.b)(({
					gqlContext: e,
					layout: t,
					post: s
				}) => {
					var n;
					const i = Object(y.d)(),
						o = Object(L.a)(),
						r = Object(h.useRef)(!1),
						{
							hideRecommendationFooter: a,
							recommendationFooterView: l,
							setRecommendationFooterView: d
						} = Object(_.a)(),
						c = s.belongsTo.id,
						p = s.id,
						{
							subredditId: u,
							subredditName: b
						} = (null === (n = s.recommendationContext) || void 0 === n ? void 0 : n.source) || {};
					Object(h.useEffect)(() => {
						if (l === P.a.ThankYouView) {
							const e = r.current ? () => i(Object(w.eb)(p, !0, !1, !0)) : a,
								t = setTimeout(e, 1500);
							return () => clearTimeout(t)
						}
					}, [i, a, p, l]);
					const v = Object(h.useCallback)(() => {
							r.current = !0, d(P.a.ThankYouView), o(Object(T.i)(p))
						}, [p, o, d]),
						g = Object(h.useCallback)(() => {
							B({
								dispatch: i,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !1,
								subredditId: c
							}), r.current = !0, o(Object(T.a)(p))
						}, [i, e, p, o, d, c]),
						C = Object(h.useCallback)(() => {
							u && (B({
								dispatch: i,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !0,
								subredditId: u
							}), r.current = !0, o(Object(T.l)(p)))
						}, [i, e, p, u, o, d]);
					return l && l !== P.a.None ? m.a.createElement("div", {
						className: Object(f.a)(F.a.Footer, {
							[F.a.ClassicLayout]: t === O.g.Classic,
							[F.a.CompactLayout]: t === O.g.Compact,
							[F.a.LargeLayout]: t === O.g.Large
						})
					}, l === P.a.SeeFewerPostsView && m.a.createElement(H, {
						displayText: b,
						seeLessFromThisCommunity: g,
						seeLessLikeThisCommunity: C,
						seeLessOfThisPostClick: v
					}), l === P.a.ThankYouView && m.a.createElement(W, null)) : null
				}),
				D = s("./src/reddit/components/PostList/LoadMore.tsx"),
				K = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				z = s("./src/reddit/components/Scroller/Simple.tsx"),
				q = s("./src/reddit/constants/adEvents.ts"),
				Q = s("./src/reddit/constants/componentSizes.ts"),
				Y = s("./src/reddit/contexts/OneFeed/index.ts");
			var G = function({
					children: e
				}) {
					const [t, s] = Object(h.useState)(P.a.None), n = Object(h.useCallback)(() => s(P.a.None), []), i = Object(h.useMemo)(() => ({
						hideRecommendationFooter: n,
						recommendationFooterView: t,
						setRecommendationFooterView: s
					}), [n, t, s]);
					return m.a.createElement(Y.a.Provider, {
						value: i
					}, e)
				},
				X = s("./src/reddit/controls/OutboundLink/index.tsx"),
				Z = s("./src/reddit/helpers/getClickInfo.ts"),
				J = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				$ = s("./src/reddit/models/Media/index.ts"),
				ee = s("./src/reddit/helpers/brandSafety/index.ts"),
				te = s("./src/reddit/helpers/trackers/ads.ts"),
				se = s("./src/lib/LRUCache/index.ts"),
				ne = s("./src/telemetry/index.ts"),
				ie = s("./src/telemetry/models/Timer.ts"),
				oe = s("./src/reddit/components/PostList/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), le = 500, de = 20, ce = new se.a(le), he = new se.a(le), me = new se.a(le), pe = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, ue = (e, t, s, n, i, o, r, a, l) => {
				const d = `entered-${e}-${t}-${s?`last-${n}-${i}`:""}-${o}`;
				let c = ce.get(d);
				return void 0 === c && (c = () => {
					s && r.onBottomViewed(n, i), r.trackOnPostEnteredViewport(e, t, a, l)
				}, ce.set(d, c)), c
			}, be = (e, t, s, n, i) => {
				const o = `left-${e}-${t}`;
				let r = he.get(o);
				return void 0 === r && (r = o => {
					s.trackOnPostExitedViewport(e, t, o, n, i)
				}, he.set(o, r)), r
			}, fe = (e, t, s = !1) => {
				const n = `click-${e}`;
				let i = me.get(n);
				return void 0 === i && (i = (e, n, i, o, r) => {
					if (n.isSponsored) {
						t.fireAdPixelsOfType(n, q.a.Click);
						const {
							source: e
						} = Object(b.t)(n, o);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							i && (t = Object(X.a)(n.id, i, t).url), Object(te.a)(n, r), Object(C.e)(t, C.d.BLANK)
						}
					} else t.openPost({
						postOrComment: n,
						clickInfo: Object(Z.a)(e),
						isFrontpage: s
					})
				}, me.set(n, i)), i
			}, ve = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class ge extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new se.a(le), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.isBlockingModalShowed = !1, this.updateScrollerRef = e => {
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
						this.dispatchBrandSafety(e), t && n && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e), i && o && !this.isBlockingModalShowed && e.primaryChild && e.primaryChild.index > de && this.showBlockingInterstitial()
					}, this.showBlockingInterstitial = r()(() => {
						this.props.showModalOnScroll && this.props.showModalOnScroll(), this.isBlockingModalShowed = !0
					}, de, {
						leading: !0,
						maxWait: 1e3
					}), this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = r()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, n = e(), i = [];
						n.forEach(e => i.push(e.id));
						const o = i.map(e => t[e]).filter(Boolean),
							r = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(ee.a)(o, r))
					}, v.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && ne.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = ne.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = ne.c.end(this.timerId);
						setTimeout(() => Object(ne.b)(v.n.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && ne.c.cancel(this.timerId), e.postIds.length && (this.timerId = ne.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && ne.c.has(this.timerId)) {
						const e = ne.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(ne.b)(v.n.Redesign, {
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
					this.timerId && ne.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return ne.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const n = ne.c.end(e);
					setTimeout(() => {
						s(t(n, ie.TimerType.InApp))
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
						listingKey: f,
						listingName: g,
						pageLayer: C,
						pageReferrer: y,
						redditStyle: w,
						shouldHideFlair: I,
						triggerNewPostPill: P,
						postIds: S
					} = this.props, R = 0 === t, E = `post-${n}-${e}-${t}-${s?"last-index":""}-${g}-${f}-${y}`;
					let j;
					if (void 0 === (j = this.scrollChildCache.get(E))) {
						const {
							inSubredditOrProfile: k,
							postsById: N
						} = this.props, T = N[e], _ = T.crosspostRootId && N[T.crosspostRootId] ? N[T.crosspostRootId] : T;
						T.crosspostRootId && !N[T.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", v.t.API), e.setExtra("description", `Post ${T.id} is crosspost of ${T.crosspostRootId}, but ` + `${T.crosspostRootId} details are missing in the state`), x.c.captureMessage("Crosspost parent details are missing")
						});
						const L = this.props.postComponentForLayout({
							isCrosspost: !!T.crosspostRootId,
							layout: n,
							post: _
						});
						let M = `post-list-item-[layout: ${n}]-[postId: ${e}]`;
						this.props.listingBelowVariant && f && (M += `--${f}`);
						const V = ue(e, n, s, f, g, y, this.props, t, this.props.hostPostData),
							F = be(e, n, this.props, t, C),
							A = fe(e, this.props, l),
							B = _.media && _.media.type === $.o.EMBED ? _.media.provider : null,
							H = h && !T.isSponsored,
							W = p && !T.isSponsored && !T.isScoreHidden,
							D = !!(null == T ? void 0 : T.recommendationContext);
						j = {
							estHeight: Object(J.c)(T, n),
							id: e,
							isFocusable: !(!_.media || !(n === O.g.Large || n === O.g.Classic && Object($.H)(_.media))) && ($.d.has(_.media.type) && (!B || !$.s.has(B)) && !_.isSpoiler),
							trackOnEnteredViewport: V,
							trackOnExitedViewport: F,
							render: ({
								className: h,
								height: p,
								width: v,
								remeasure: x,
								setScrollerChildRef: y,
								shouldLoadInitially: O
							}) => m.a.createElement(G, {
								key: M
							}, m.a.createElement(L, {
								availableWidth: v,
								className: h,
								currentProfileName: i,
								eventFactory: this.eventFactoryHandler,
								first: R,
								forceLoadMedia: O,
								hostPostData: o,
								inSubredditOrProfile: k,
								isCommentCountAnimationEnabled: H,
								isCommentPermalink: r,
								isCommentsPage: a,
								isCountAnimShadowTestEnabled: u,
								isFrontpage: l,
								isProfilePostListing: d,
								isTopicPage: c,
								isVoteCountAnimationEnabled: W,
								key: M,
								last: s,
								listingBelowVariant: b,
								listingIndex: t,
								listingKey: f,
								listingName: g,
								onceInViewport: P,
								onClickPost: A,
								onSizeChanged: x,
								pageLayer: C,
								postId: e,
								postIds: S,
								redditStyle: w,
								scrollerItemRef: y,
								sendEvent: this.props.sendEvent,
								shouldHideFlair: I
							}), D && m.a.createElement(U, {
								post: _,
								layout: n
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
						layout: n,
						onTryAgain: i,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const r = o;
					return m.a.createElement("div", {
						className: re.a.placeholder
					}, m.a.createElement(r, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && m.a.createElement(K.a, {
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
						className: re.a.placeholder
					}, m.a.createElement(D.a, {
						className: i,
						isLoading: !!t,
						layout: n,
						countOverride: pe[n]
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
						getInjectChildren: n,
						isTruncated: o,
						layout: r,
						location: a,
						loadMore: l,
						postIds: d,
						postsById: c,
						onLoadMore: p
					} = this.props;
					let u = d.filter(e => Boolean(c[e])).map((e, t, s) => {
						const n = t === s.length - 1;
						return this.scrollChildForPost(e, t, n, r)
					});
					n && (u = ve(u, n()));
					const b = this.props.measureScrollFPS ? `post-listings-${r}` : void 0,
						v = (a ? Object(i.e)(a) : null) || o;
					return m.a.createElement(h.Fragment, null, m.a.createElement(z.b, {
						innerRef: this.updateScrollerRef,
						className: v ? re.a.truncatedPostList : Object(f.a)(re.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: b,
						viewportTopPadding: Q.f
					}, u), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			ge.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/raf/index.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && i.a.cancel(this.frame), this.frame = i()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return r.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
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
				return Y
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
				f = s.n(b);
			const v = 500,
				g = 1e3,
				C = 40;
			var x;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(x || (x = {}));
			const y = () => ({
					[x.Max10]: 0,
					[x.Max20]: 0,
					[x.Max30]: 0,
					[x.Max40]: 0,
					[x.Max50]: 0,
					[x.Max60]: 0
				}),
				w = [x.Max10, x.Max20, x.Max30, x.Max40, x.Max50, x.Max60],
				I = e => ({
					eventHandler: e
				});

			function P({
				fn: e,
				subscriber: t,
				timeout: s
			}) {
				const n = [];
				let i, o, r;
				const a = () => {
						if (n.length < C) return;
						const e = y(),
							s = Math.min(g, n.length),
							i = n.splice(0, s);
						n.splice(0, n.length);
						const o = i[s - 1] - i[0];
						for (let t = i.shift(); i.length > 0; t = i.shift()) {
							const s = i[0] - t,
								n = Math.min(60, Math.ceil(1e3 / s));
							e[n <= 10 ? x.Max10 : 60 === n ? x.Max60 : w[Math.ceil(n / 10) - 1]] += s
						}
						const r = y();
						for (const t in e) r[t] = e[t] / o;
						t(r)
					},
					l = () => {
						void 0 !== r && (window.clearTimeout(r), r = void 0)
					},
					d = () => {
						void 0 !== i && (cancelAnimationFrame(i), i = void 0), void 0 !== o && (window.clearInterval(o), o = void 0), l(), a()
					},
					c = () => {
						i = requestAnimationFrame(() => {
							n.push(performance.now()), c()
						})
					},
					h = f()(() => {
						l(), r = window.setTimeout(d, s)
					}, p.K);
				return {
					cleanup: d,
					eventHandler: t => {
						void 0 === o ? (c(), h(), o = window.setInterval(a, v)) : h(), e(t)
					}
				}
			}
			var O = s("./src/lib/scheduler/index.ts"),
				S = s("./src/lib/domUtils/index.ts"),
				R = s("./src/lib/LinkedListMap/index.ts");
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
			class N {
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
					return new N({
						top: e,
						height: window.innerHeight
					})
				}
				return new N({
					top: 0,
					height: s
				})
			};
			var _ = s("./src/reddit/components/ResizeSensor/index.tsx"),
				L = s("./src/reddit/constants/componentSizes.ts"),
				M = s("./src/reddit/constants/elementClassNames.ts"),
				V = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/telemetry/helpers/sendEvent.ts"),
				B = s("./src/telemetry/helpers/sendTiming.ts"),
				H = s("./src/reddit/components/Scroller/Simple.m.less"),
				W = s.n(H);
			const U = L.g,
				D = 5 * p.K,
				K = 3,
				z = Object(m.c)({
					isOverlayOpen: F.i
				}),
				q = Object(c.b)(z),
				Q = {};

			function Y(e) {
				return e === document
			}

			function G(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const X = 10,
				Z = .9,
				J = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * p.K,
				ne = 400,
				ie = 8,
				oe = 5 * p.K,
				re = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				le = () => ae ? performance.now() : Date.now();

			function de(e, t) {
				return R.a.fromArray(e.children.map((e, s) => {
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
					super(e), this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						A.b.enqueue(new O.a({
							args: [e, t],
							cb: (e, t) => Object(B.a)(p.n.Redesign, {
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
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && le() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, s) => {
						const n = s || this.props.children;
						if (this.state.renderableChildren.length < n.length || e)
							if (this.hasScrolledWithinThreshold()) u.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, s ? n : void 0)
								}, se)
							});
							else {
								this.nextVisibleChildrenIndex + t <= n.length ? this.nextVisibleChildrenIndex += t : this.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, this.nextVisibleChildrenIndex);
								e.length && (this.lastVisibleElId = e[e.length - 1].id), u.a.write(() => {
									this.setState({
										renderableChildren: e
									})
								}), this.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ne) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = (e = re) => {
						let t = 0,
							s = this.state.renderableChildren.length;
						for (; t < e && s < this.props.children.length;) t += this.props.children[s].estHeight, s++;
						const n = s - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(h.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = i()(() => {
						this.handleScroll()
					}, p.K), this.pauseAllElements = () => {
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
						const t = new R.a("id");
						return this.state.renderableChildren.forEach(s => {
							const n = this.childMap.get(s.id);
							n && e(n) && t.push(n)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.K))
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
							i = new N({
								top: s,
								height: n,
								heightWithSuffix: `${n}px`
							});
						return e.rectangle = i, i
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? G(this.containerRef) : 0, this.handleContentContainerResize = i()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = u.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.K), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = u.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(S.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < Z,
								s = e < J,
								n = e < $;
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
							const i = new R.a("id");
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
								else if (h && this.loadItemIfPossible(l, h, t, s, n, a), this.elementIsVisible(d)) {
									i.push(l), !p && m && A.b.enqueue(new O.a({
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
								t && !i.has(e) && A.b.enqueue(new O.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = i, this.canFocusItems = t, this.focusedChild = o, this.primaryChild = r, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(h.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, D), null !== this.unmountItemsIdleId && (Object(h.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
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
						const s = Math.min(Math.ceil(e.timeRemaining() / K), t.length),
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
					}, p.K), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const n = s.el.firstChild;
						n && (t !== s.el.style.height && (s.el.style.height = t), n.classList.add(W.a.Hidden), this.hiddenChildren[e] = t, s.loaded && u.a.write(() => {
							s.itemRef && (s.loaded = !1, s.focused = !1, s.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const s = t.el.firstChild;
						s && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", s.classList.remove(W.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
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
									this.scrollContainer && (Object(S.c)(this.scrollContainer, n), this.callOnScrollForItemsChanged())
								}, p.K)
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
					}, this.childMap = de(e), this.containerRef = null, this.itemsInViewport = new R.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new j(X), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = oe;
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
					this.fpsMeter = this.props.trackingName ? P({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: D
					}) : I(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
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
								t = Q[e];
							r()(t) || (Q[e] = void 0, this.scrollContainer && Object(S.c)(this.scrollContainer, t))
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
					this.childMap = new R.a("id"), this.itemsInViewport = new R.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(h.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
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
					return this.scrollContainer ? Y(this.scrollContainer) ? Object(k.a)() : this.scrollContainer.scrollTop : 0
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
						this.mountableViewport = new N({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						});
						const n = 4 * t;
						this.renderableViewport = new N({
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
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && A.b.enqueue(new O.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = G(this.containerRef);
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
						className: this.hiddenChildren[e.id] ? W.a.Hidden : void 0
					}, e.render({
						className: M.k,
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
			t.b = q(Object(V.b)(ce))
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
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, s) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, s) => n => {
				const i = e(n),
					r = t(n),
					a = !i && r;
				return Object(o.a)(s.baseClassName, n.className, {
					[s.mIsInteractive]: r,
					[s.mIsActive]: i,
					[s.mIsVoteable]: a
				})
			};
			var l = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/controls/Downvote/index.m.less"),
				h = s.n(c);
			const m = {
					...h.a,
					baseClassName: h.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === d.a.downvoted,
				u = a(p, ({
					interactive: e
				}) => !1 !== e, m);
			var b = e => i.a.createElement(l.a, {
					className: u(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/controls/Upvote/index.m.less"),
				g = s.n(v);
			const C = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				x = ({
					voteState: e
				}) => e === d.a.upvoted,
				y = a(x, ({
					interactive: e
				}) => !1 !== e, C);
			var w = e => i.a.createElement(f.a, {
					className: y(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				I = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				P = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = s("./src/reddit/components/VerticalVotes/votes.m.less"),
				R = s.n(S);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => Object(o.a)({
					[R.a.compact]: e.compact,
					[R.a.dark]: Object(P.b)(Object(I.a)(e)),
					[R.a.nightmode]: e.isNightMode
				}),
				k = Object(r.a)(e => {
					const {
						voteIcons: t
					} = Object(O.a)(e), s = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						isNightMode: r,
						voteState: a,
						compact: l,
						...c
					} = e;
					return i.a.createElement("button", E({}, c, {
						className: Object(o.a)(R.a.customDownvote, j(e), {
							[R.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: s
					}))
				}),
				N = Object(r.a)(e => {
					const {
						voteIcons: t
					} = Object(O.a)(e), s = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						isNightMode: r,
						voteState: a,
						compact: l,
						...c
					} = e;
					return i.a.createElement("button", E({}, c, {
						className: Object(o.a)(R.a.customUpvote, j(e), {
							[R.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: s
					}))
				}),
				T = b,
				_ = w
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "m", (function() {
				return p
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "r", (function() {
				return b
			})), s.d(t, "s", (function() {
				return f
			})), s.d(t, "u", (function() {
				return v
			})), s.d(t, "t", (function() {
				return g
			})), s.d(t, "v", (function() {
				return C
			})), s.d(t, "w", (function() {
				return x
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "o", (function() {
				return P
			})), s.d(t, "p", (function() {
				return O
			}));
			const n = 284,
				i = 450,
				o = 800,
				r = 284,
				a = 48,
				l = 640,
				d = 1600,
				c = 1280,
				h = 40,
				m = 48,
				p = 24,
				u = 24,
				b = 312,
				f = 40,
				v = 270,
				g = 106,
				C = 5,
				x = 16,
				y = 1250,
				w = 82,
				I = 48,
				P = 36,
				O = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, s) {
			"use strict";
			var n, i;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(n || (n = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(i || (i = {}))
		},
		"./src/reddit/constants/oneFeed.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.None = "None", e.SeeFewerPostsView = "SeeFewerPostsView", e.ThankYouView = "ThankYouView"
				}(n || (n = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = 480,
				i = 960,
				o = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const r = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				a = Object(n.createContext)(r);

			function l(e) {
				const t = t => i.a.createElement(a.Consumer, null, ({
					apiContext: s,
					gqlContext: n
				}) => i.a.createElement(e, o({
					apiContext: s,
					gqlContext: n
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = i.a.createContext(!1)
		},
		"./src/reddit/contexts/OneFeed/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js");
			const r = o.createContext({
				hideRecommendationFooter: i.a,
				recommendationFooterView: null,
				setRecommendationFooterView: i.a
			});
			t.a = r
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				h = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
				u = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(u);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = i()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(l.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && r.a.createElement("span", {
						className: s
					}, e.children), r.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(h.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: i()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && r.a.createElement(c.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && r.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle,
					[b.a.modNotes]: t.isModNotesStyle
				});
				return r.a.createElement(v, f({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, s) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/TextButton/index.m.less"),
				a = s.n(r);
			t.a = e => i.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(a.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = s.n(o);
			t.a = n.a.wrapped(i.a, "unstyledInternalLink", r.a)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const i = (e, t) => {
				const s = e.some(e => e.isNSFW),
					i = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !i
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts");

			function o({
				apiError: e,
				isLoggedOut: t
			}) {
				switch (e.type) {
					case i.I.AUTHORIZATION_ERROR:
						return t ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case i.I.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case i.I.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case i.I.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case i.I.LIKELY_UBLOCK_ERROR:
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
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
			const c = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("reddit-components-BlankPost")]).then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), s.e("PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3"), s.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), s.e("PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3"), s.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), s.e("PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3"), s.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~969c2956"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), s.e("Reddit~RpanListingUnit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPos~93b34f9d"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
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
				f = e => o.a.createElement(c, e),
				v = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://d4wggo22afv97.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net"],
				g = e => e.source && e.source.url && e.isSponsored && v.some(t => e.source.url.startsWith(t)),
				C = e => !e.media || e.media.type === d.o.EMBED && !(d.b.has(e.media.provider) || g(e)),
				x = (e, t) => {
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
				layout: t,
				post: s
			}) {
				if (s.isBlank) return f;
				const n = !s.media && !!s.source && Object(r.a)(s.source.url),
					i = e && n;
				t !== l.g.Large || !C(s) || i || s.predictionTournament || (t = l.g.Medium);
				const o = b[t];
				return void 0 === o ? (Object(a.a)(void 0, `Could not find component for layout ${t}.`), f) : o
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
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(i);
			const r = ({
					isLoading: e
				}) => Object(n.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				a = e => Object(n.a)(o.a.loadingBar, r(e))
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/polished/dist/polished.es.js");
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function i(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(n.a)(e).post
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
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				l = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => i.a.createElement("i", {
				className: Object(o.a)(Object(r.b)("downvote", e.isFilled), l.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? i.a.createElement("span", d({}, s, {
				className: Object(o.a)(l.a.compactDownvoteWrapper, s.className)
			}), i.a.createElement(c, {
				className: l.a.compactDownvote,
				isFilled: t
			})) : i.a.createElement("span", d({}, s, {
				className: Object(o.a)(l.a.downvoteWrapper, s.className)
			}), i.a.createElement(c, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				l = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => i.a.createElement("i", {
				className: Object(o.a)(Object(r.b)("upvote", e.isFilled), l.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? i.a.createElement("span", d({}, s, {
				className: Object(o.a)(l.a.compactUpvoteWrapper, s.className)
			}), i.a.createElement(c, {
				className: l.a.compactUpvote,
				isFilled: t
			})) : i.a.createElement("span", d({}, s, {
				className: Object(o.a)(l.a.upvoteWrapper, s.className)
			}), i.a.createElement(c, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, s) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = s.n(i);
			t.a = n.a.button("inlineButton", o.a)
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const r = e => {
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: o.O,
						experimentName: n.Bc
					});
					return !(!t || Object(n.xf)(t))
				},
				a = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: o.O,
						experimentName: n.Bc
					}) === n.id.ListingEnabled
				}
		},
		"./src/redditGQL/operations/UpdateRecommendationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"fa7b23e7dbc7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit.03f185f92ab07e1ca005.js.map