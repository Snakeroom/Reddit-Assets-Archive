// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~0cfa6904.9bef5bd3d5b6e66d53a2.js
// Retrieved at 1/17/2020, 8:40:22 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~0cfa6904"], {
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			}));
			var s = i("./node_modules/raf/index.js"),
				n = i.n(s),
				l = i("./node_modules/react/index.js"),
				r = i.n(l);
			class o extends r.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && n.a.cancel(this.frame), this.frame = n()(this.props.onResize)
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
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, i) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/lodash/debounce.js"),
				n = i.n(s),
				l = i("./node_modules/lodash/isNil.js"),
				r = i.n(l),
				o = i("./node_modules/react/index.js"),
				h = i.n(o),
				d = i("./node_modules/react-dom/index.js"),
				a = i("./node_modules/react-redux/es/index.js"),
				c = i("./node_modules/request-idle-callback/index.js"),
				p = i("./node_modules/reselect/es/index.js"),
				u = i("./src/lib/constants/index.ts"),
				m = i("./src/lib/fastdom/index.ts"),
				f = i("./node_modules/lodash/throttle.js"),
				g = i.n(f);
			const C = 500,
				b = 1e3,
				I = 40;
			var R;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(R || (R = {}));
			const w = () => ({
					[R.Max10]: 0,
					[R.Max20]: 0,
					[R.Max30]: 0,
					[R.Max40]: 0,
					[R.Max50]: 0,
					[R.Max60]: 0
				}),
				v = [R.Max10, R.Max20, R.Max30, R.Max40, R.Max50, R.Max60],
				S = e => ({
					eventHandler: e
				});

			function T(e) {
				let {
					fn: t,
					subscriber: i,
					timeout: s
				} = e;
				const n = [];
				let l, r, o;
				const h = () => {
						if (n.length < I) return;
						const e = w(),
							t = Math.min(b, n.length),
							s = n.splice(0, t);
						n.splice(0, n.length);
						const l = s[t - 1] - s[0];
						for (let i = s.shift(); s.length > 0; i = s.shift()) {
							const t = s[0] - i,
								n = Math.min(60, Math.ceil(1e3 / t));
							e[n <= 10 ? R.Max10 : 60 === n ? R.Max60 : v[Math.ceil(n / 10) - 1]] += t
						}
						const r = w();
						for (const i in e) r[i] = e[i] / l;
						i(r)
					},
					d = () => {
						void 0 !== o && (window.clearTimeout(o), o = void 0)
					},
					a = () => {
						void 0 !== l && (cancelAnimationFrame(l), l = void 0), void 0 !== r && (window.clearInterval(r), r = void 0), d(), h()
					},
					c = () => {
						l = requestAnimationFrame(() => {
							n.push(performance.now()), c()
						})
					},
					p = g()(() => {
						d(), o = window.setTimeout(a, s)
					}, u.F);
				return {
					cleanup: a,
					eventHandler: e => {
						void 0 === r ? (c(), p(), r = window.setInterval(h, C)) : p(), t(e)
					}
				}
			}
			var x = i("./src/lib/scheduler/index.ts"),
				M = i("./src/lib/domUtils/index.ts"),
				F = i("./src/lib/LinkedListMap/index.ts");
			const O = (e, t) => e < 0 ? t + e : e % t;
			class V {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = O(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = O(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? O(this.head - this.size, this.maxSize) : this.head;
					for (let i = 0; i < this.size; i++) e(this.items[t], i, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((i, s, n) => {
						t[s] = e(i, s, n)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, i) => {
						e[i] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var y = i("./src/reddit/components/Scroller/getDocumentTop.ts");
			class H {
				constructor(e) {
					let {
						top: t,
						height: i,
						heightWithMargin: s
					} = e;
					this.height = i, this.heightWithMargin = s, this.top = t, this.bottom = this.top + this.height
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
			const P = function() {
				let {
					buffer: e,
					container: t
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				const i = r()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(y.a)() : t.scrollTop;
					return new H({
						top: e,
						height: window.innerHeight
					})
				}
				return new H({
					top: 0,
					height: i
				})
			};
			var E = i("./src/reddit/components/ResizeSensor/index.tsx"),
				z = i("./src/reddit/constants/componentSizes.ts"),
				W = i("./src/reddit/constants/elementClassNames.ts"),
				k = i("./src/reddit/contexts/InsideOverlay.tsx"),
				j = i("./src/reddit/selectors/platform.ts"),
				L = i("./src/telemetry/helpers/sendEvent.ts"),
				A = i("./src/telemetry/helpers/sendTiming.ts"),
				_ = i("./src/reddit/components/Scroller/Simple.m.less"),
				U = i.n(_);
			i.d(t, "a", (function() {
				return Q
			}));
			const D = z.h,
				N = 5 * u.F,
				K = 3,
				q = Object(p.c)({
					isOverlayOpen: j.i
				}),
				B = Object(a.b)(q),
				G = {};

			function Q(e) {
				return e === document
			}

			function X(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const Z = 10,
				Y = .9,
				J = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				ie = 2 * u.F,
				se = 400,
				ne = 8,
				le = 5 * u.F,
				re = 30,
				oe = "object" == typeof performance && "function" == typeof performance.now,
				he = () => oe ? performance.now() : Date.now();

			function de(e, t) {
				return F.a.fromArray(e.children.map((e, i) => {
					const s = t && t.get(e.id);
					return s ? (s.isFocusable = !!e.isFocusable, s.trackOnEnteredViewport = e.trackOnEnteredViewport, s.trackOnExitedViewport = e.trackOnExitedViewport, s) : {
						el: null,
						id: e.id,
						index: i,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && i < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class ae extends h.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						L.b.enqueue(new x.a({
							args: [e, t],
							cb: (e, t) => Object(A.a)(u.l.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							i = [];
						let s = this.nextVisibleChildrenIndex;
						for (; e < t && s < this.props.children.length;) {
							const t = this.props.children[s];
							i.push(t), e += t.estHeight, s++
						}
						return this.visibleChildrenCount = i.length, i
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(se / e), ne)
						} else this.renderableChildrenIndexIncrement = ne
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = le, Object(c.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(c.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && he() - this.lastScrollTime < ie, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							s = arguments.length > 2 ? arguments[2] : void 0;
						const n = s || t.props.children;
						if (t.state.renderableChildren.length < n.length || e)
							if (t.hasScrolledWithinThreshold()) m.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, s ? n : void 0)
								}, ie)
							});
							else {
								t.nextVisibleChildrenIndex + i <= n.length ? t.nextVisibleChildrenIndex += i : t.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, t.nextVisibleChildrenIndex);
								e.length && (t.lastVisibleElId = e[e.length - 1].id), m.a.write(() => {
									t.setState({
										renderableChildren: e
									})
								}), t.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + se) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
							i = 0,
							s = t.state.renderableChildren.length;
						for (; i < e && s < t.props.children.length;) i += t.props.children[s].estHeight, s++;
						const n = s - t.state.renderableChildren.length;
						return Math.max(t.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(c.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = n()(() => {
						this.handleScroll()
					}, u.F), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: i
							} = e;
							i && (e.focused = !1, t.push(i.pauseContent))
						}), m.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new F.a("id");
						return this.state.renderableChildren.forEach(i => {
							const s = this.childMap.get(i.id);
							s && e(s) && t.push(s)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(c.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, u.F))
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
							this.parentOffsetTop = e.offsetTop;
							const i = e.getBoundingClientRect().top;
							this.distanceToTop = i + this.getScrollTop()
						}
						const i = t.offsetTop + (this.parentOffsetTop || 0),
							s = t.clientHeight,
							n = "".concat(t.scrollHeight, "px"),
							l = new H({
								top: i,
								height: s,
								heightWithMargin: n
							});
						return e.rectangle = l, l
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? X(this.containerRef) : 0, this.handleContentContainerResize = n()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = m.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, u.F), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = m.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(M.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < Y,
								i = e < J,
								s = e < $;
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
							const n = new F.a("id");
							let l, r;
							const o = [];
							this.state.renderableChildren.forEach(e => {
								const h = this.childMap.get(e.id);
								let d;
								if (h && h.el) {
									if (!(d = this.getChildRectangle(h))) return;
									const {
										id: e
									} = h;
									this.elementIsHideable(d) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = d.heightWithMargin) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!h || !h.el || !h.rectangle) return void(this.measurementsInvalid && h && this.getChildRectangle(h));
								const {
									id: a,
									itemRef: c,
									trackOnEnteredViewport: p
								} = h, u = !!this.itemsInViewport.get(a);
								if (this.elementIsUnmountable(d)) c && u && h.loaded && h.isFocusable && o.push(c.pauseContent);
								else if (c && this.loadItemIfPossible(h, c, t, i, s, o), this.elementIsVisible(d)) {
									n.push(h), !u && p && L.b.enqueue(new x.a({
										cb: p,
										args: void 0
									}));
									const e = this.elementIsFocused(d);
									e && !r && (r = h.id), t && h.isFocusable && !l && e ? (l = h.id, h.focused || (h.focused = !0, c && o.push(c.focusContent))) : h.loaded && h.isFocusable && (h.focused || this.needsToPauseViewportItems) && (h.focused = !1, c && o.push(c.pauseContent))
								} else u && h.loaded && h.isFocusable && (h.focused = !1, c && o.push(c.stopContent))
							}), m.a.write(() => {
								o.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(e => {
								let {
									id: t,
									trackOnExitedViewport: i
								} = e;
								i && !n.has(t) && L.b.enqueue(new x.a({
									cb: i,
									args: [!1]
								}))
							}), this.itemsInViewport = n, this.canFocusItems = t, this.focusedChild = l, this.primaryChild = r, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(c.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, N), null !== this.unmountItemsIdleId && (Object(c.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * le, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const i = this.childMap.get(e.id);
								if (!i || !i.el || !i.itemRef) return;
								const s = this.getChildRectangle(i);
								s && this.elementIsUnmountable(s) && i.loaded && t.push(i)
							}), !t.length) return;
						const i = Math.min(Math.ceil(e.timeRemaining() / K), t.length),
							s = [];
						for (let n = 0; n < i; n++) {
							const e = t[n];
							s.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(d.unstable_batchedUpdates)(() => {
							this.scrollContainer && s.forEach(e => e())
						}), i < t.length ? this.unmountItemsIdleId = Object(c.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = n()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, u.F), this.hideChild = (e, t) => {
						const i = this.childMap.get(e);
						if (!i || !i.el) return;
						const s = i.el.firstChild;
						s && (t !== i.el.style.height && (i.el.style.height = t), s.classList.add(U.a.Hidden), this.hiddenChildren[e] = "".concat(t, "px"), i.loaded && m.a.write(() => {
							i.itemRef && i.itemRef.unmountContent()
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const i = t.el.firstChild;
						i && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = null, i.classList.remove(U.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, m.a.read(() => {
							const i = this.childMap.get(e);
							if (i && i.el && this.scrollContainer) {
								if (i.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const s = this.getScrollTop() + i.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(M.c)(this.scrollContainer, s), this.callOnScrollForItemsChanged())
								}, u.F)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: i = 0
							} = this.props, s = window.innerHeight - i, {
								top: n
							} = t.el.getBoundingClientRect();
							return n >= i + e && n < s
						}
						return !1
					}, this.childMap = de(e), this.containerRef = null, this.itemsInViewport = new F.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new V(Z), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = le;
					const i = this.getVisibleChildren();
					i.length && (this.lastVisibleElId = i[i.length - 1].id), this.nextVisibleChildrenIndex = i.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: i
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					if (this.isRenderableChildrenStateChangePending) return;
					this.state.renderableChildren.length < this.props.children.length && m.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? T({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: N
					}) : S(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (m.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (m.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(M.c)(this.scrollContainer, 0), this.setupScrollHandler(), m.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = G[e];
							r()(t) || (G[e] = void 0, this.scrollContainer && Object(M.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), m.a.read(() => {
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
				componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && m.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = de(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						i = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || i, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						G[e] = this.lastRenderPosition
					}
					this.childMap = new F.a("id"), this.itemsInViewport = new F.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(c.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						i = this.parentOffsetTop ? this.parentOffsetTop : 0,
						s = e.bottom + t - i,
						n = e.top + t - i,
						l = Math.min(this.viewport.bottom, s) - Math.max(this.viewport.top, n),
						r = l / e.height,
						o = l / this.viewport.height;
					return r > .75 || o > .9
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
					return this.scrollContainer ? Q(this.scrollContainer) ? Object(y.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = P({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, i = 2 * t;
						this.mountableViewport = new H({
							top: this.viewport.top - i,
							height: this.viewport.height + 2 * i
						});
						const s = 4 * t;
						this.renderableViewport = new H({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = he(),
						t = this.getScrollTop(),
						i = Math.abs(this.lastRenderPosition - t),
						s = e - this.lastScrollTime,
						n = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, n ? this.pixelsPerMSRing.push(i / s) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const i = this.childMap.get(e);
					i && (i.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, i) {
					const s = this.childMap.get(e);
					s && (s.itemRef = t, s.loaded = !!t && (void 0 !== i ? i : s.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, i) => {
						this._childRefFn(e, t, i)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, i, s, n, l) {
					if (t.contentIsHeavyToMount() ? s : n) {
						const s = !e.isFocusable || i;
						!e.loaded && s && (e.loaded = !0, l.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: i
						} = e;
						i && L.b.enqueue(new x.a({
							cb: i,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = X(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return h.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => h.a.createElement("div", {
						key: "scroller-".concat(e.id),
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, h.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? U.a.Hidden : void 0
					}, e.render({
						className: W.l,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: D
					})))), !!e && h.a.createElement(E.a, {
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
			t.b = B(Object(k.b)(ae))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, i) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~MembershipPaywallPage~ModListing~ModQueuePages~0cfa6904.9bef5bd3d5b6e66d53a2.js.map