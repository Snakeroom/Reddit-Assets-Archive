// https://www.redditstatic.com/desktop2x/ModListing~Reddit~Subreddit.7a6614858e659df90478.js
// Retrieved at 4/18/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~Reddit~Subreddit"], {
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				c = n("./src/lib/portal/index.tsx"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = e => {
				let {
					className: t,
					isVisible: n,
					...s
				} = e;
				return r.a.createElement("div", p({
					className: Object(o.a)(m.a.overlay, t, {
						[m.a.mIsVisible]: n
					})
				}, s))
			};

			function f(e) {
				class t extends s.Component {
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
						}), Object(l.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(a.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: i,
							overlayClassName: a,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, f = p;
						return r.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, r.a.createElement(b, {
							className: a,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, f))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => r.a.createElement(e, t)
			}
		},
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const t = t => r.a.createElement(o.b.Consumer, null, n => r.a.createElement(e, i({
					theme: n
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class r {
				constructor(e) {
					this.active = !1, this.onKeyDown = e => {
						if ("Tab" === e.key || 9 === e.keyCode) {
							const [t, n] = this.getTabbableNodes();
							if (!t || !n) return;
							e.shiftKey && e.target === t ? (e.preventDefault(), this.tryToFocusNode(n)) : e.shiftKey || e.target !== n || (e.preventDefault(), this.tryToFocusNode(t))
						}
					}, this.container = e
				}
				activate() {
					this.active || (this.active = !0, document.addEventListener("keydown", this.onKeyDown, !0))
				}
				deactivate() {
					this.active && (document.removeEventListener("keydown", this.onKeyDown, !0), this.active = !1)
				}
				getTabbableNodes() {
					const e = this.container.querySelectorAll(s);
					return [e[0], e[e.length - 1]]
				}
				tryToFocusNode(e) {
					e !== document.activeElement && e.focus && e.focus()
				}
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
					return e.forEach(e => n.push(e)), n
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
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(r.a)(() => Promise.all([n.e(2), n.e("vendors~RealtimeGQLSubscriptionAsync"), n.e("RealtimeGQLSubscriptionAsync")]).then(n.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				i = Object(s.a)(r),
				c = Object(s.a)(o)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			}));
			const s = "PAGE__MOD_LISTING_PAGE_PENDING",
				r = "PAGE__MOD_LISTING_PAGE_LOADED",
				o = "PAGE__MOD_LISTING_PAGE_FAILED",
				i = "MOD_LISTING_MORE_POSTS_PENDING",
				c = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				l = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				u = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				p = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle/index.ts"),
				r = n("./src/reddit/actions/gold/powerups.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				i = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				m = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t();
				if (e(Object(o.m)({
						title: Object(s.i)()
					})), await e(Object(a.t)()), !Object(m.Q)(n)) return;
				await e(Object(i.q)());
				const p = Object(d.b)(n),
					b = Object(l.a)(n);
				if (p) return await e(Object(r.d)(b));
				await e(Object(c.f)()), await e(Object(r.o)());
				const f = Object(u.c)(n);
				if (f && f.length) {
					const t = f.map(e => e.id);
					await e(Object(r.d)(t))
				}
			}
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				c = Object(s.a)(o),
				a = Object(s.a)(i),
				d = (e, t) => async (n, s) => {
					const o = s();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? n(a({
						listingKey: e
					})) : r.l(o, e) : n(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/react/index.js");
			const s = e => new Promise((t, n) => {
				const s = new Image;
				s.onload = () => t(s), s.onerror = n, s.src = e
			})
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(r.createContext)(null),
				p = Object(r.createContext)(null);
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const f = c.f + 10,
				h = o.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(a.a);
					return o.a.createElement(m.Consumer, null, r => r && o.a.createElement("div", {
						className: Object(i.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(i.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				v = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lottie-web/build/player/lottie.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/reddit/components/LottieAnimation/util.ts");
			const a = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: n,
						assetUrl: s,
						className: a,
						hidden: d,
						loop: l,
						useCanvasRenderer: u,
						onClick: m,
						prefersReducedAnimation: p
					} = e,
					[b, f] = Object(o.useState)(n);
				Object(o.useEffect)(() => {
					s ? Object(c.a)(s).then(f) : n && f(n)
				}, [s, n]);
				const [h, v] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || h || !b) return;
					const n = r.a.loadAnimation({
						autoplay: !1,
						renderer: u ? "canvas" : "svg",
						loop: l,
						container: e,
						animationData: b
					});
					v(n)
				}, [l, t, h, b]), Object(o.useEffect)(() => {
					if (h)
						if (d) h.stop();
						else if (p) {
						const e = h.getDuration(!0);
						h.goToAndPlay(e, !0)
					} else h.goToAndPlay(0)
				}, [d, p, h]);
				const O = Object(o.useCallback)(() => {
					h && h.goToAndPlay(0)
				}, [h]);
				return i.a.createElement("div", {
					className: a,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: m || O
				})
			});
			t.a = a
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./src/reddit/components/ImageWithFallback/index.tsx");
			const s = {};

			function r(e) {
				let t = s[e];
				return t || (t = s[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o);
			class c extends i.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
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
					return i.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r, o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(s || (s = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(r || (r = {}));
			var d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/helpers/postCollection.ts");
			const u = [d.Ob.COMMENTS, d.Ob.COLLECTION_COMMENTS],
				m = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						r = e === d.Ob.COLLECTION_COMMENTS || t && Object(l.a)(t),
						o = d.W.has(e),
						i = d.Db.has(e),
						c = e === d.Ob.SUBREDDIT,
						a = e === d.Ob.TOPIC;
					let m, p, b;
					return o && !c || i ? m = s.HeaderSelector : r ? m = s.Collection : n ? m = s.PostComments : a && (m = s.TopicHeader), (o || i || r || n) && (p = s.Widget), (o || n) && (b = s.PostItem), [m, p, b]
				};
			var p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/selectors/platform.ts"),
				f = n("./src/reddit/components/SEOTitle/index.m.less"),
				h = n.n(f);
			const v = e => {
					let {
						level: t,
						children: n
					} = e;
					const s = `h${t}`;
					return i.a.createElement(s, {
						className: h.a.Title
					}, n)
				},
				O = Object(p.u)(),
				x = Object(c.b)(() => Object(a.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(b.n)(e, {
						page: n
					})
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && n.meta && n.meta.name
				}, (e, t) => {
					let {
						type: n
					} = t;
					return n
				}, (e, t, n) => ({
					level: m(t, e).indexOf(n) + 1 || void 0
				})));
			class g extends i.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? i.a.createElement(v, {
						level: t
					}, e) : i.a.createElement(i.a.Fragment, null, e)
				}
			}
			t.b = O(x(g))
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class i extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var c = Object(o.a)(i);
			t.a = e => r.a.createElement(c, e)
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				PlanetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				planetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				BackupImage: "RK004G8fbNOkGdNLEzm67",
				backupImage: "RK004G8fbNOkGdNLEzm67",
				iconContainer: "_7nyhK_sDI_8i22XNdcMzb",
				editableIcon: "_1AxWRIyg1lV9-r_CmqYj0o",
				flexContainer: "-Mpi2pdgifDBOdpUYX2vh",
				clickableUploadText: "_3H6u2CWhsluIPVF14GpEaA",
				inTopBar: "_1UpdjN7u66BU606z97t4HS",
				emptyUploadButton: "ndkYE2hc8Y-V3NHpSYvxA",
				transition: "_1iA7YdCRjbU9Rd_2VNGvsw",
				emptyEditableIcon: "_1h9JeZaSDxkh67Ns3QVUP2",
				emptyPlusButton: "Dh1qxsy_tIctL9f4LEzv9",
				imageUploader: "JBITiVY1zX1mMDq-sHkru",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				u = n("./src/reddit/constants/colors.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/SubredditIcon/index.m.less"),
				O = n.n(v);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = d.a.wrapped(l.a, "UserIcon", O.a),
				j = d.a.img("Image", O.a),
				E = e => {
					let {
						iconColor: t,
						...n
					} = e;
					return i.a.createElement(j, x({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				y = d.a.div("BackupImage", O.a),
				N = Object(m.u)();
			t.b = N(e => {
				var t;
				const n = Object(c.e)(h.db);
				let o, d, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(p.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(f.h)(e.subredditOrProfile) ? l = i.a.createElement(g, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (o = t, d = n)
				} else o = e.shouldHideNsfwIcon ? `${s.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || u.a.alienblue;
				return o ? l = i.a.createElement(E, {
					alt: r.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: d,
					role: "presentation",
					src: o
				}) : l || (l = i.a.createElement(b.a, {
					name: "community",
					isFilled: !n,
					className: Object(a.a)(O.a.defaultCommunityIcon, e.className, {
						[O.a.mNightmode]: n
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? u.a.alienblue : d
					} : {
						color: e.redditStyle ? u.a.alienblue : d
					}
				})), e.linkTo ? i.a.createElement("a", x({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo
				}), l) : i.a.createElement(i.a.Fragment, null, l)
			})
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = n("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = n.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: n
				} = e, a = Object(s.useRef)(null), l = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && n && n()
					})
				}, [n]);
				return Object(i.a)(a, l), r.a.createElement(c.a, {
					ref: a,
					className: Object(o.a)(d.a.presenceDot, {
						[d.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = n.n(c);
			t.a = function(e) {
				let {
					backgroundClassName: t,
					className: n,
					headshot: r
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarWrapper, n)
				}, o.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarBackground, t)
				}), o.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, o.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: r
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, n) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				isProfileIcon: "_1lxVpLf3223Gve3gRhbG-R",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				withoutBorder: "_1cG4OXwlWElX_dWTGCA2ew",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				nftAnimation: "_3fhlcUDP9SJN47QMfuzW_j",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = n.n(d);
			const u = `${s.a.assetPath}/img/avatar_over18_square.png`,
				m = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: n,
					isCurrentUser: s,
					isNightMode: o,
					isNSFW: d,
					nsfwIconUrl: p,
					shouldHideNSFW: b
				} = e;
				if (s && m(n) || !s && !n) return i.a.createElement(a.a, {
					className: Object(c.a)(l.a.DefaultUserIcon, t, {
						[l.a.mNightmode]: o
					})
				});
				const f = !s && d && b ? p || u : n;
				return i.a.createElement("img", {
					alt: r.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(c.a)(l.a.UserIcon, t),
					src: f
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/realtime/GQLSubscription/async.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				p = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				b = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/LottieAnimation/index.tsx"),
				v = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				O = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				x = n.n(O);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = () => {},
				E = Object(c.c)({
					currentUser: f.k,
					isNightMode: f.db,
					shouldHideNSFW: f.F,
					user: f.Ab,
					isProfileAvatarChangeFixEnabled: v.a
				}),
				y = Object(i.b)(E);
			t.a = y(e => {
				const {
					authorId: t,
					collapsed: n,
					currentUser: i,
					iconUrl: c,
					isCommentAuthorBlocked: f,
					isHighlighted: v,
					isNft: O,
					isNSFW: E,
					shouldUseOnlineOverride: y,
					isOnlineOverrideValue: N,
					isOnlineStatusLoadTest: I,
					isProfileIcon: C,
					omitResponsivePresenceWrapper: _,
					onPresenceIndicatorInViewport: w,
					shouldShowPresenceIndicator: S,
					user: k,
					userName: T,
					isProfileAvatarChangeFixEnabled: P,
					...D
				} = e, L = !!i && Object(u.e)(i) === T, A = L ? i : k, U = A && A.accountIcon || c, R = k ? k.isNSFW : E, B = Object(d.b)(U) && !f, M = B ? o.a.createElement(p.a, {
					headshot: U,
					className: e.className
				}) : o.a.createElement(b.b, g({}, D, {
					iconUrl: f && n ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : U,
					isCurrentUser: L,
					isNSFW: R
				})), [F, W] = Object(r.useState)(!1), H = Object(r.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), q = Object(r.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					W(t)
				}, []), G = Object(r.useRef)(null), [V, K] = Object(r.useState)(!1), z = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, s = 1 !== n;
						t ? K(!0) : s && K(!1)
					})
				}, []), Q = Object(r.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(G, z, Q.current), _ ? M : o.a.createElement("div", {
					className: Object(s.a)(x.a.userIconWrapper, {
						[x.a.nftUserIcon]: O,
						[x.a.hasHeadShotWrapper]: B,
						[x.a.isProfileIcon]: C && P
					}),
					ref: G
				}, O && o.a.createElement(h.a, {
					className: Object(s.a)(x.a.nftAnimation, {
						[x.a.withoutBorder]: Object(d.f)(c)
					}),
					assetUrl: Object(d.a)(c),
					loop: !0
				}), M, S && (F || y && N) && o.a.createElement(m.default, {
					showPresence: !0,
					isHighlighted: v,
					onceInViewport: w
				}), (S || I) && !y && V && o.a.createElement(a.a, {
					variables: H,
					onData: S ? q : j,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return D
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, n) => s => {
				const r = e(s),
					i = t(s),
					c = !r && i;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: r,
					[n.mIsVoteable]: c
				})
			};
			var a = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.downvoted
				},
				b = c(p, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, m);
			var f = e => r.a.createElement(a.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				h = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = n("./src/reddit/controls/Upvote/index.m.less"),
				O = n.n(v);
			const x = {
					...O.a,
					baseClassName: O.a.Upvote
				},
				g = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.upvoted
				},
				j = c(g, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, x);
			var E = e => r.a.createElement(h.a, {
					className: j(e),
					compact: e.compact,
					isFilled: g(e)
				}),
				y = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				N = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				_ = n.n(C);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => Object(o.a)({
					[_.a.compact]: e.compact,
					[_.a.dark]: Object(N.b)(Object(y.a)(e)),
					[_.a.nightmode]: e.isNightMode
				}),
				k = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: i,
						voteState: c,
						compact: a,
						...l
					} = e;
					return r.a.createElement("button", w({}, l, {
						className: Object(o.a)(_.a.customDownvote, S(e), {
							[_.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				T = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: i,
						voteState: c,
						compact: a,
						...l
					} = e;
					return r.a.createElement("button", w({}, l, {
						className: Object(o.a)(_.a.customUpvote, S(e), {
							[_.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				P = f,
				D = E
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				c = n("./src/reddit/selectors/structuredStyles.ts"),
				a = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: c.a,
				isEditing: c.i,
				isBladeEditorDirty: c.h,
				isModalOpen: Object(i.b)(a.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(o.h)(n))
				}
			})
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "p", (function() {
				return I
			}));
			const s = 284,
				r = 450,
				o = 800,
				i = 284,
				c = 48,
				a = 640,
				d = 1600,
				l = 1280,
				u = 40,
				m = 48,
				p = 24,
				b = 24,
				f = 312,
				h = 40,
				v = 270,
				O = 106,
				x = 5,
				g = 16,
				j = 1250,
				E = 82,
				y = 48,
				N = 36,
				I = 40
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			}));
			const s = "DraftEditor-contentwrapper",
				r = "public-DraftStyleDefault-block",
				o = "data-offset-key",
				i = "hovered",
				c = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "RichTextJSON-root",
				m = "ImageBox-image",
				p = "content-type-link",
				b = "styled-outbound-link",
				f = "ListingLayout-backgroundContainer",
				h = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(r || (r = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = 480,
				r = 960,
				o = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const i = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					},
					gqlRealtime2Context: () => {
						throw new Error("Component attempted to make an API request with no GqlRealtime2Context")
					}
				},
				c = Object(s.createContext)(i);

			function a(e) {
				const t = t => r.a.createElement(c.Consumer, null, n => {
					let {
						apiContext: s,
						gqlContext: i,
						gqlRealtime2Context: c
					} = n;
					return r.a.createElement(e, o({
						apiContext: s,
						gqlContext: i,
						gqlRealtime2Context: c
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const i = r.a.createContext(!1);

			function c(e) {
				function t(t) {
					return r.a.createElement(i.Consumer, null, n => r.a.createElement(e, o({}, t, {
						isOverlay: n
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext(!1)
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/TextButton/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(c.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
				const t = e.getFullYear(),
					n = e.getMonth();
				return `/posts/${n>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function r(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(s.b)(e) < .6;

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.a.bodyText,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.b.bodyText;
				return o(e) ? n : t
			}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.Y(e),
					profile: s.Q(e),
					subreddit: s.gb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(t)
				}),
				i = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...r(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return C
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "n", (function() {
				return q
			})), n.d(t, "m", (function() {
				return G
			})), n.d(t, "t", (function() {
				return z
			})), n.d(t, "x", (function() {
				return Q
			})), n.d(t, "e", (function() {
				return Y
			})), n.d(t, "d", (function() {
				return X
			})), n.d(t, "v", (function() {
				return ee
			})), n.d(t, "u", (function() {
				return te
			})), n.d(t, "w", (function() {
				return ne
			})), n.d(t, "h", (function() {
				return se
			}));
			var s = n("./node_modules/lodash/pick.js"),
				r = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makePostDraftPageKey/index.ts"),
				c = n("./src/reddit/constants/parameters.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = n("./src/reddit/helpers/routeKey/index.ts"),
				u = n("./src/reddit/helpers/trackers/postComposer.ts"),
				m = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = n("./src/reddit/models/Comment/index.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/routes/subreddit/index.ts"),
				h = n("./src/reddit/selectors/profile.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/lib/makePostCreationPageKey/index.ts"),
				x = n("./src/lib/makeSearchKey/index.ts"),
				g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				j = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				E = n("./src/reddit/helpers/trackers/searchResults.ts"),
				y = n("./src/reddit/selectors/postDraft.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/telemetry/index.ts");
			const C = (e, t, n, s, a, u) => {
					const {
						route: h
					} = e, {
						name: v
					} = h.meta;
					if (!v) return;
					const g = t.platform.currentPage;
					switch (v) {
						case o.Ob.COMMENTS: {
							const {
								partialCommentId: r,
								partialPostId: o
							} = e.match.params, i = Object(b.t)(o), c = Object(l.a)(e, t, t.posts.models[i]);
							if (!c) return;
							const a = r && Object(p.h)(r),
								{
									sortToUse: u
								} = Object(d.a)(t, i);
							Object(I.a)(D(c, i, a, n, s, u)(t));
							break
						}
						case o.Ob.INDEX:
						case o.Ob.LISTING:
						case o.Ob.MULTIREDDIT:
						case o.Ob.SUBREDDIT: {
							const r = Object(l.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: i,
								queryParams: c,
								path: a
							} = e.match, {
								sort: d = (r.sort ? r.sort : o.X.HOT)
							} = i, u = c.t, m = a === f.a;
							Object(I.a)(w({
								key: r.listingKey,
								sort: d,
								timerType: n,
								timerMillis: s,
								timeSort: u,
								isPredictionsPage: m
							})(t));
							break
						}
						case o.Ob.TOPIC: {
							const r = Object(l.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: i
							} = e.match, c = r.sort ? r.sort : o.Y, {
								sort: a = c
							} = i;
							Object(I.a)(w({
								key: r.listingKey,
								sort: a,
								timerType: n,
								timerMillis: s
							})(t));
							break
						}
						case o.Ob.PROFILE_OVERVIEW: {
							const r = Object(l.d)(e, t);
							if (!r) return;
							const {
								params: i,
								queryParams: c
							} = e.match, {
								sort: a = o.Fb
							} = i, d = c.t;
							Object(I.a)(S(r, a, n, s, d)(t));
							break
						}
						case o.Ob.PROFILE_POSTS: {
							const r = Object(l.d)(e, t);
							if (!r) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = o.Fb,
								t: a = o.Gb
							} = i;
							Object(I.a)(k(r, c, n, s, a)(t));
							break
						}
						case o.Ob.PROFILE_COMMENTS: {
							const r = Object(l.d)(e, t);
							if (!r) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = o.Fb,
								t: a = o.Gb
							} = i;
							Object(I.a)(T(r, c, n, s, a)(t));
							break
						}
						case o.Ob.PROFILE_PRIVATE: {
							const r = Object(l.d)(e, t);
							if (!r) return;
							Object(I.a)(P(r)(s, n)(t));
							break
						}
						case o.Ob.FOLLOWERS:
							M(t);
							break;
						case o.Ob.PROFILE_MODERATION:
							u && A(t, !0);
							break;
						case o.Ob.SETTINGS: {
							const r = e;
							Object(I.a)(K(n, s)(t)), r.match.params.page === o.ec.Profile && Object(m.l)(t);
							break
						}
						case o.Ob.POST_CREATION:
							if (u && a) {
								const e = Object(O.a)(a);
								Object(I.a)(L(e, n, s)(t))
							}
							break;
						case o.Ob.POST_DRAFT: {
							const {
								draftId: r
							} = e.match.params, o = Object(i.a)(e.match.params);
							if (!o) return;
							F(t, o, r, n, s);
							break
						}
						case o.Ob.SUBREDDIT_WIKI:
							Object(I.a)(J(n, s)(t));
							break;
						case o.Ob.COINS:
							Object(I.a)(W(n, s)(t)), Object(I.a)(H()(t));
							break;
						case o.Ob.PREMIUM:
							Object(I.a)(q(n, s)(t)), Object(I.a)(G()(t));
							break;
						case o.Ob.APPEAL:
							Object(I.a)(V(n, s)(t));
							break;
						case o.Ob.INBOX_PAGES:
							u && B(t);
							break;
						case o.Ob.MODERATION_PAGES:
							u && U(t, !0, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case o.Ob.COLLECTION_COMMENTS:
							u && ne(t, !0);
							break;
						case o.Ob.MODQUEUE_PAGES:
							u && R(t, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case o.Ob.SUBREDDIT_LEADERBOARD:
							u && Object(I.a)(Y()(t));
							break;
						case o.Ob.SEARCH_RESULTS:
							if (u) {
								const o = Object(l.e)(e, t);
								if (!o) return;
								Object(I.a)(ee(o, Object(x.e)(r()(g && g.queryParams || {}, c.v)), n, s, g)(t))
							}
							break;
						case o.Ob.PUBLIC_ACCESS_NETWORK:
							u && Object(I.a)(z()(t));
							break;
						case o.Ob.GEOTAGGING:
							u && Object(I.a)(X()(t));
							break;
						case o.Ob.SUBREDDIT_CREATION:
							u && Object(I.a)(Q()(t));
							break;
						case o.Ob.MOD_LISTING:
							u && se(t, !0)
					}
				},
				_ = e => ({
					...N.n(e),
					userPreferences: N.pb(e)
				}),
				w = e => {
					let {
						key: t,
						sort: n,
						timerType: s,
						timerMillis: r,
						timeSort: o,
						flairTitle: i,
						isPredictionsPage: c
					} = e;
					return e => {
						const {
							api: a
						} = e.listings.postOrder, d = !a.error[t] && !a.pending[t], l = c ? {
							paneName: "predictions",
							reason: "predictions_tournament"
						} : {};
						return {
							source: "global",
							action: "view",
							noun: "screen",
							..._(e),
							actionInfo: N.d(e, {
								success: d,
								...l
							}),
							customFeed: N.l(e),
							listing: N.y(e, t, {
								sort: n,
								sortTime: o
							}),
							subreddit: N.gb(e),
							timer: N.mb(s, r),
							userSubreddit: N.qb(e),
							adblock: N.e(e),
							postFlair: {
								title: i
							},
							predictions: c ? Object(N.O)(e) : void 0
						}
					}
				},
				S = (e, t, n, s, r) => o => {
					const i = N.y(o, e);
					i && (i.sort = t, r && (i.sortTime = r));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._(o),
						actionInfo: N.d(o, {
							success: a
						}),
						profile: N.Q(o),
						snoovatar: N.db(o),
						subreddit: N.gb(o),
						timer: N.mb(n, s),
						userSubreddit: N.qb(o),
						adblock: N.e(o)
					}
				},
				k = (e, t, n, s, r) => o => {
					const i = N.y(o, e);
					i && (i.sort = t, r && (i.sortTime = r));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._(o),
						actionInfo: N.d(o, {
							success: a
						}),
						profile: N.Q(o),
						subreddit: N.gb(o),
						timer: N.mb(n, s),
						userSubreddit: N.qb(o),
						adblock: N.e(o)
					}
				},
				T = (e, t, n, s, r) => o => {
					const i = N.T(o, e);
					i && (i.sort = t, r && (i.sortTime = r));
					const {
						api: c
					} = o.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._(o),
						actionInfo: N.d(o, {
							success: a
						}),
						profile: N.Q(o),
						subreddit: N.gb(o),
						timer: N.mb(n, s),
						userSubreddit: N.qb(o),
						adblock: N.e(o)
					}
				},
				P = e => (t, n) => s => {
					const r = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._(s),
						actionInfo: N.d(s, {
							success: r
						}),
						profile: N.Q(s),
						subreddit: N.gb(s),
						timer: N.mb(n, t),
						userSubreddit: N.qb(s),
						adblock: N.e(s)
					}
				},
				D = (e, t, n, s, r, o) => i => {
					const {
						api: c
					} = i.pages.comments, a = !c.error[e] && !c.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						..._(i),
						actionInfo: N.d(i, {
							success: a
						}),
						post: N.H(i, t),
						profile: N.Q(i),
						subreddit: N.gb(i),
						timer: N.mb(s, r),
						userSubreddit: N.qb(i),
						adblock: N.e(i),
						postEvent: N.K(i, {
							postId: t
						}),
						postCollection: N.J(i, {
							postId: t
						}),
						listing: N.y(i, void 0, {
							sort: o
						})
					};
					return n && (d.comment = N.h(i, n)), d
				},
				L = (e, t, n) => s => {
					const r = s.creations.api.page.fetched[e],
						o = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._(s),
						actionInfo: N.d(s, {
							success: r
						}),
						post: o ? N.H(s, o) : void 0,
						subreddit: N.gb(s),
						timer: N.mb(t, n),
						userSubreddit: N.qb(s),
						adblock: N.e(s)
					}
				},
				A = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						actionInfo: N.d(e, {
							success: t
						})
					})
				},
				U = (e, t, n, s) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						actionInfo: N.d(e, {
							success: t
						}),
						profile: N.R(e, Object(h.m)(e, s)),
						subreddit: N.hb(e, Object(v.D)(e, n)),
						userSubreddit: N.qb(e),
						adblock: N.e(e)
					})
				},
				R = (e, t, n) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						profile: N.R(e, Object(h.m)(e, n)),
						subreddit: N.hb(e, Object(v.D)(e, t)),
						userSubreddit: N.qb(e),
						adblock: N.e(e)
					})
				},
				B = e => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						actionInfo: N.d(e)
					})
				},
				M = e => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						actionInfo: N.d(e)
					})
				},
				F = (e, t, n, s, r) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!n,
						c = Object(y.h)(e, n);
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						actionInfo: N.d(e, {
							success: i
						}),
						subreddit: N.gb(e),
						timer: N.mb(s, r),
						userSubreddit: N.qb(e),
						adblock: N.e(e),
						...c ? Object(u.r)(e, c) : {}
					})
				},
				W = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					..._(n),
					timer: N.mb(e, t),
					adblock: N.e(n)
				}),
				H = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._(e)
				}),
				q = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					..._(n),
					timer: N.mb(e, t),
					adblock: N.e(n)
				}),
				G = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._(e)
				}),
				V = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					..._(n),
					timer: N.mb(e, t)
				}),
				K = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._(n),
					timer: N.mb(e, t)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: N.gb(e),
					..._(e)
				}),
				Q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._(e)
				}),
				Y = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					..._(e)
				}),
				J = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._(n),
					customFeed: N.l(n),
					subreddit: N.gb(n),
					timer: N.mb(e, t),
					userSubreddit: N.qb(n),
					adblock: N.e(n)
				}),
				X = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._(e)
				}),
				Z = {
					source: "global",
					action: a.c.VIEW,
					noun: "screen"
				},
				$ = e => !!e && {
					correlationId: Object(g.c)(g.a.SearchResults)
				},
				ee = (e, t, n, s, r, i) => c => {
					var a, d;
					let l = !0;
					if (t.type.indexOf(o.dc.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.dc.Subreddits) > -1 || t.type.indexOf(o.dc.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const u = N.F(c, r);
					return {
						...E.g(c, t),
						...Z,
						...N.n(c),
						actionInfo: N.d(c, {
							success: l,
							paneName: u
						}),
						timer: N.mb(n, s),
						search: {
							...N.Z(c, t, j.a.SERP, !0, r || void 0),
							sort: null !== (a = t.sort) && void 0 !== a ? a : o.Rb,
							range: null !== (d = t.t) && void 0 !== d ? d : o.Sb
						},
						...$(i),
						userPreferences: N.bb(c)
					}
				},
				te = (e, t, n) => s => ({
					...N.n(s),
					...Z,
					actionInfo: {
						...N.d(s),
						pageType: "search_dropdown"
					},
					search: {
						...N.Z(s, e, j.a.Typeahead, !0, t || void 0)
					},
					...$(n),
					userPreferences: N.bb(s)
				}),
				ne = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						actionInfo: N.d(e, {
							success: t
						})
					})
				},
				se = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._(e),
						actionInfo: N.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js");
			t.a = function(e, t, n) {
				Object(s.useEffect)(() => {
					const s = e && e.current;
					if (!s || "undefined" == typeof IntersectionObserver) return;
					const r = new IntersectionObserver(t, n);
					return r.observe(s), () => {
						r.unobserve(s)
					}
				}, [e, t, n])
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				a = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), a.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", d({}, s, {
					className: Object(o.a)(a.a.compactDownvoteWrapper, s.className)
				}), r.a.createElement(l, {
					className: a.a.compactDownvote,
					isFilled: n
				})) : r.a.createElement("span", d({}, s, {
					className: Object(o.a)(a.a.downvoteWrapper, s.className)
				}), r.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				a = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), a.a.upvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", d({}, s, {
					className: Object(o.a)(a.a.compactUpvoteWrapper, s.className)
				}), r.a.createElement(l, {
					className: a.a.compactUpvote,
					isFilled: n
				})) : r.a.createElement("span", d({}, s, {
					className: Object(o.a)(a.a.upvoteWrapper, s.className)
				}), r.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = e => {
				let {
					className: t,
					isFilled: n,
					name: s,
					...a
				} = e;
				return r.a.createElement("i", c({
					className: Object(o.a)(t, Object(i.b)(s, n))
				}, a))
			};
			a.displayName = "Icon";
			const d = (e, t) => n => r.a.createElement(a, c({
				name: e
			}, t, n, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == n ? void 0 : n.isFilled),
				className: Object(o.a)(null == t ? void 0 : t.className, null == n ? void 0 : n.className)
			}));
			t.a = a
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, n) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = n.n(i);
			t.a = Object(s.forwardRef)((e, t) => {
				let {
					className: n,
					isHighlighted: s,
					outlineClassName: i
				} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(c.a.defaultInactiveState, n),
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					width: "12",
					height: "12",
					ref: t
				}, r.a.createElement("circle", {
					cx: "6",
					cy: "6",
					r: "4"
				}), r.a.createElement("path", {
					className: Object(o.a)(c.a.outline, i, {
						[c.a.highlighted]: s
					}),
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
				}))
			})
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), r.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), r.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), r.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), r.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), r.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), r.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), r.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), r.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), r.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), r.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), r.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), r.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), r.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), r.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), r.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/models/Theme/index.ts"),
				a = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: i,
					...d
				} = e, m = Object(a.a)(e), p = {
					"--pseudo-before-background": t || Object(c.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return r.a.createElement("div", u({
					className: Object(o.a)(l.a.backgroundContainer, n),
					style: p
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.u)(),
				f = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.R)(e, t)
				}),
				h = Object(o.b)(f);
			t.a = b(h(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: o,
					fitPageToContent: i,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: b,
					layout: f,
					pageLayer: h,
					...v
				} = e;
				return r.a.createElement("div", p({
					className: Object(c.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: f === a.g.Large || Object(d.O)(h),
						[m.a.mDisableFullScreen]: s && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!b,
						[m.a.mCanFlexFullWidth]: !i,
						[m.a.onlyChildMargin]: !n
					})
				}, v))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				i = n("./src/reddit/layout/page/Listing/Content.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				b = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: f,
					contentBanner: h,
					contentClassName: v,
					contentNavBar: O,
					disableFullscreen: x,
					fitPageToContent: g,
					forcedLayout: j,
					hideOnlyChildMargin: E,
					isCollectionLayout: y,
					isPageSwapped: N,
					maxWidth: I,
					navBar: C,
					redditStyle: _,
					sidebar: w,
					sidebars: S,
					trendingUnit: k,
					subredditId: T
				} = e, P = k ? "28px" : "0", D = N ? {
					marginRight: `${a.q}px`,
					marginTop: P
				} : {
					marginLeft: `${a.q}px`,
					marginTop: P
				}, L = w && r.a.createElement("div", {
					className: Object(c.a)(b.a.sidebar, y ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: D
				}, w), A = r.a.createElement(i.a, {
					hideOnlyChildMargin: E,
					className: v,
					disableFullscreen: x,
					fitPageToContent: g,
					forcedLayout: j,
					isCollectionLayout: y
				}, h, f);
				let U;
				U = S ? r.a.createElement(r.a.Fragment, null, S[0], A, S[1]) : N ? r.a.createElement(r.a.Fragment, null, L, A) : r.a.createElement(r.a.Fragment, null, A, L);
				const R = x ? `${I||l.a+2*a.m}px` : "100%",
					B = Object(s.useContext)(u.a);
				return r.a.createElement(m.a, {
					subredditId: T
				}, r.a.createElement("div", {
					className: Object(c.a)(b.a.outerContainer, d.i, n, {
						[b.a.outerContainerExp]: B
					}),
					ref: p
				}, r.a.createElement(o.a, {
					className: d.h,
					redditStyle: _,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: b.a.innerContainer
				}, C, O, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: R
					}
				}, k), r.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: R
					}
				}, U))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = n.n(r);
			t.a = s.a.button("inlineButton", o.a)
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/powerups.ts");
			const i = "/powerups",
				c = {
					action: o.a,
					chunk: r.s.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Powerups").then(n.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Ob.POWERUPS,
						isResponsive: !0
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
					experimentName: s.Wd,
					experimentEligibilitySelector: r.a
				}) === s.ge.Enabled,
				i = e => Object(r.c)(e, {
					experimentName: s.Xd,
					experimentEligibilitySelector: r.a,
					expEventOverride: !1
				}) === s.he.Enabled
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/constants/posts.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				d = n("./src/reddit/selectors/experiments/utils.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = e => e.subreddits.progressModule,
				f = e => {
					const t = Object(u.c)(e);
					if (!t) return;
					if (!Object(l.n)(e, {
							subredditId: t
						})) return;
					if (Object(p.N)(e)) return h(e);
					const n = Object(m.G)(e, {
						identifier: {
							id: t,
							type: i.a.SUBREDDIT
						}
					});
					if (!n || !n.created) return;
					const s = n.created;
					return s ? s * r.Tb < 1639443600180 ? void 0 : h(e) : void 0
				},
				h = Object(s.a)(e => Object(c.c)(e, {
					experimentName: o.Zd,
					experimentEligibilitySelector: a.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.t)
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/featureFlags/subredditPoints.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/selectors/gold/powerups/index.ts");
			const a = e => {
					const t = Object(r.a)(e);
					if (!t) return null;
					const n = Object(o.N)(e),
						i = [];
					for (const r of t) {
						const t = e.subreddits.models[r];
						if (!t) return null;
						const o = Object(c.h)(e, {
							subredditId: r
						});
						s.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !n || i.push({
							id: r,
							displayText: t.displayText,
							hasPowerups: o
						})
					}
					return i
				},
				d = Object(i.a)(a, e => !!(null == e ? void 0 : e.length))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~Reddit~Subreddit.7a6614858e659df90478.js.map