// https://www.redditstatic.com/desktop2x/ModListing.ca6487fbcae2ff5a7ecc.js
// Retrieved at 3/10/2022, 5:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var r = [];
					n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, n.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, n.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, n.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, n.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, r) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== r[t - 1]
						}))
					}, n.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, n.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, n.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							r = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var o = n.element,
								i = a(o),
								d = this._rootContainsTarget(o),
								c = n.entry,
								u = t && d && this._computeTargetAndRootIntersection(o, r),
								l = n.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: r,
									intersectionRect: u
								});
							c ? t && d ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(r, s) {
						if ("none" != e.getComputedStyle(r).display) {
							for (var n, o, i, d, u, l, m, p, b = a(r), h = c(r), f = !1; !f;) {
								var y = null,
									g = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == g.display) return;
								if (h == this.root || h == t ? (f = !0, y = s) : h != t.body && h != t.documentElement && "visible" != g.overflow && (y = a(h)), y && (n = y, o = b, i = void 0, d = void 0, u = void 0, l = void 0, m = void 0, p = void 0, i = Math.max(n.top, o.top), d = Math.min(n.bottom, o.bottom), u = Math.max(n.left, o.left), l = Math.min(n.right, o.right), p = d - i, !(b = (m = l - u) >= 0 && p >= 0 && {
										top: i,
										bottom: d,
										left: u,
										right: l,
										width: m,
										height: p
									}))) break;
								h = c(h)
							}
							return b
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var r = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: r.clientWidth || s.clientWidth,
								width: r.clientWidth || s.clientWidth,
								bottom: r.clientHeight || s.clientHeight,
								height: r.clientHeight || s.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, r) {
								return "px" == t.unit ? t.value : t.value * (r % 2 ? e.width : e.height) / 100
							})),
							r = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return r.width = r.right - r.left, r.height = r.bottom - r.top, r
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (r !== s)
							for (var n = 0; n < this.thresholds.length; n++) {
								var o = this.thresholds[n];
								if (o == r || o == s || o < r != o < s) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = s
				}

				function s(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						r = t.width * t.height,
						s = this.intersectionRect,
						n = s.width * s.height;
					this.intersectionRatio = r ? n / r : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var r, s, n, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							r(), n = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, r, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, r, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
				}

				function i(e, t, r, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, r, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (r) {}
					return t ? (t.width && t.height || (t = {
						top: t.top,
						right: t.right,
						bottom: t.bottom,
						left: t.left,
						width: t.right - t.left,
						height: t.bottom - t.top
					}), t) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function d(e, t) {
					for (var r = t; r;) {
						if (r == e) return !0;
						r = c(r)
					}
					return !1
				}

				function c(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseTimes.js"),
				n = r("./node_modules/lodash/_castFunction.js"),
				o = r("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var r = a,
					c = d(e, a);
				t = n(t), e -= a;
				for (var u = s(c, t); ++r < e;) t(r);
				return u
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, s) {
				var n = r ? r.call(s, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					i = Object.keys(t);
				if (o.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < o.length; d++) {
					var c = o[d];
					if (!a(c)) return !1;
					var u = e[c],
						l = t[c];
					if (!1 === (n = r ? r.call(s, u, l, c) : void 0) || void 0 === n && u !== l) return !1
				}
				return !0
			}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, r) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/FocusTrap/index.ts"),
				a = r("./src/lib/portal/index.tsx"),
				d = r("./src/reddit/actions/shortcuts/utils.ts"),
				c = r("./src/reddit/constants/shortcuts.ts"),
				u = r("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				l = r("./src/higherOrderComponents/asModal/index.m.less"),
				m = r.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ({
				className: e,
				isVisible: t,
				...r
			}) => n.a.createElement("div", p({
				className: Object(o.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, r));

			function h(e) {
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
						}), Object(u.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: r,
							ignoreDefaultFocus: s,
							onOverlayClick: i,
							overlayClassName: d,
							overlayCustomStyles: u,
							withOverlay: l,
							...p
						} = t, h = p;
						return n.a.createElement(a.a, {
							container: document.getElementById(c.b)
						}, n.a.createElement(b, {
							className: d,
							isVisible: l,
							onClick: this.onOverlayClick,
							style: u
						}, n.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(m.a.modal, r),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, n.a.createElement(e, h))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			r("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => n.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class n {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const r = new n(t);
					return e.forEach(e => r.push(e)), r
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
					const r = t instanceof s ? t : new s(t),
						n = this.getNode(e);
					if (!n) throw new Error(`Cannot find item with key ${e}`);
					r.prev = n, r.next = n.next, n.next = r, r.next && (r.next.prev = r);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = r, this.length++
				}
				insertBefore(e, t) {
					const r = t instanceof s ? t : new s(t),
						n = this.getNode(e);
					if (!n) throw new Error(`Cannot find item with key ${e}`);
					r.next = n, r.prev = n.prev, n.prev = r, r.prev && (r.prev.next = r);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = r, this.length++
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
					const r = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
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
					const r = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
				}
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "b", (function() {
				return C
			}));
			var s, n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/performanceTimings/index.tsx"),
				i = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var c, u = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = r("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const h = Object(n.a)(i.g),
				f = Object(n.a)(i.e),
				y = Object(n.a)(i.h),
				g = Object(n.a)(i.c),
				v = Object(n.a)(i.f),
				x = Object(n.a)(i.j),
				O = Object(n.a)(i.i),
				_ = () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t(),
						o = Object(m.e)(n),
						i = Object(m.d)(n),
						c = Object(b.N)(n);
					if (o || !i) return;
					e(y());
					let p = !1;
					try {
						const t = c ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, r) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (j(t)) {
								if (w(t)) {
									e(g({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (I(t)) {
									const r = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: n,
											category: o
										} = r.focusRecommendations[0],
										i = [s, n],
										a = Object(l.d)(i),
										d = Object(u.b)(i),
										c = Object(l.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(m)), p = !0
								}
							} else p = !1
						}
					} catch (v) {
						p = !1
					}
					p || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations;
					return !(!r || 0 !== r.length)
				}, I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations,
						s = t && t.type;
					return !!(r && !w(e) && s === c.GEO && r[0] && r[0].recommendedSubreddit && r[0].interactedSubreddit)
				}, C = () => async (e, t, r) => {
					var s, n;
					const i = t(),
						a = Object(m.g)(i);
					if (Object(m.f)(i) || null === a || "client" === a) {
						const r = null === (n = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(b.O)(i);
						return Object(o.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: r,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				i = Object(s.a)(n),
				a = Object(s.a)(o)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "SUBREDDIT__MODERATION_LOG_LOADED",
				n = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modListingDataPending", (function() {
				return T
			})), r.d(t, "modListingDataLoaded", (function() {
				return P
			})), r.d(t, "modListingDataFailed", (function() {
				return L
			})), r.d(t, "modListingPageRequested", (function() {
				return F
			})), r.d(t, "morePostsPending", (function() {
				return B
			})), r.d(t, "morePostsLoaded", (function() {
				return A
			})), r.d(t, "morePostsFailed", (function() {
				return D
			})), r.d(t, "moreModListingRequested", (function() {
				return H
			})), r.d(t, "hideSubredditSuccess", (function() {
				return U
			})), r.d(t, "hideSubredditPending", (function() {
				return q
			})), r.d(t, "hideSubredditFailed", (function() {
				return K
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return W
			})), r.d(t, "unhideSubredditPending", (function() {
				return G
			})), r.d(t, "unhideSubredditFailed", (function() {
				return Q
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return J
			})), r.d(t, "hideSubreddit", (function() {
				return z
			})), r.d(t, "unhideSubreddit", (function() {
				return X
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				o = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/platform.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/page.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				p = r("./src/config.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				y = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = r("./src/reddit/helpers/name/index.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				x = (e, t) => Object(b.a)(e, {
					data: t,
					endpoint: Object(y.a)(Object(v.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.jb.GET
				});
			const O = (e, t, r, s) => Object(b.a)(Object(h.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(g.c)(r)}`,
					method: s ? i.jb.PUT : i.jb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(g.h)(r)
						})
					}
				}),
				_ = (e, t, r) => O(e, t, r, !0),
				j = (e, t, r) => O(e, t, r, !1);
			var w = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				C = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = r("./src/reddit/helpers/trackers/screenview.ts"),
				S = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/routes/modListing/index.ts"),
				M = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/pages/modListing/constants.ts");
			const T = Object(a.a)(N.f),
				P = Object(a.a)(N.e),
				L = Object(a.a)(N.d),
				R = (e, t) => async (r, n, o) => {
					const i = n();
					if (i.listings.postOrder.api.pending[e]) return;
					r(T({
						key: e
					}));
					const a = await Object(C.a)("modListing", () => x(o.apiContext(), t)),
						d = `error-${e}`;
					a.ok ? (r(P({
						key: e,
						meta: i.meta,
						...a.body
					})), r(u.g(d))) : (r(L({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(I.a)(r, i) : r(u.f({
						id: d,
						kind: S.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: R(e, t)
					})))
				}, F = (e, t) => async (r, n) => {
					const {
						sort: a = i.X
					} = e.params, u = Object(k.d)(e.path), p = u ? l.f : l.e, b = Object(d.a)(p, a, e.queryParams), h = n(), f = h.listings.postOrder.ids[b], y = h.listings.postOrder.api.error[b];
					if (h.listings.postOrder.api.pending[b] || f && !y && !t) return void(f && r(c.m({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const g = V(e.queryParams);
					await r(R(b, {
						...o()(e.queryParams, m.m),
						...o()(e.queryParams, m.l),
						filtered: !!u || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(w.a)(a, g)
					})), r(c.m({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(E.h)(n(), !0)
				}, B = Object(a.a)(N.i), A = Object(a.a)(N.h), D = Object(a.a)(N.g), H = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						a = n.platform.currentPage;
					if (!a) return;
					const {
						sort: c = i.X
					} = e, u = a.queryParams, p = Object(k.d)(a.url), b = p ? l.f : l.e, h = Object(d.a)(b, c, u), f = n.listings.postOrder.loadMore[h];
					if (!f) return;
					const y = n.listings.postOrder.api.pending[h],
						g = n.listings.postOrder.fetchedTokens,
						v = !(!g[h] || !g[h][f.token]);
					if (y || v) return;
					const O = V(u);
					t(B({
						key: h,
						fetchedToken: f.token
					}));
					const _ = await x(s(), {
							after: f.token,
							dist: f.dist,
							filtered: !!p || void 0,
							sort: c,
							t: Object(w.a)(c, O),
							...o()(u, m.m)
						}),
						j = n.listings.postOrder.ids[h],
						I = {
							..._.body,
							postIds: (_.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					_.ok ? t(A({
						key: h,
						fetchedToken: f.token,
						meta: n.meta,
						...I
					})) : t(D({
						key: h,
						error: _.error,
						fetchedToken: f.token,
						...I
					}))
				};

			function V(e) {
				const t = m.B in e && e[m.B].toUpperCase() || "";
				return t in i.hc && i.hc[t]
			}
			const U = Object(a.a)(N.c),
				q = Object(a.a)(N.b),
				K = Object(a.a)(N.a),
				W = Object(a.a)(N.l),
				G = Object(a.a)(N.k),
				Q = Object(a.a)(N.j),
				J = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const o = s(),
						i = Object(M.k)(o),
						[a, d, c, u] = t ? [q, U, K, _] : [G, W, Q, j];
					if (!i || !i.displayText) return;
					const {
						currentPage: l
					} = o.platform;
					if (!l || !l.routeMatch) return;
					r(a(e));
					const m = await u(n(), i.displayText, e);
					m.ok ? (await r(F(l.routeMatch.match, !0)), r(d(e))) : r(c(m.body))
				}, z = e => J(e, !0), X = e => J(e, !1)
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/pageTitle/index.ts"),
				n = r("./src/reddit/actions/gold/powerups.ts"),
				o = r("./src/reddit/actions/platform.ts"),
				i = r("./src/reddit/actions/subreddit.ts"),
				a = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/actions/users.ts"),
				c = r("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				l = r("./src/reddit/selectors/subscriptions.ts"),
				m = r("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const r = t();
				if (e(Object(o.m)({
						title: Object(s.h)()
					})), await e(Object(d.t)()), !Object(m.O)(r)) return;
				await e(Object(i.q)());
				const p = Object(c.b)(r),
					b = Object(u.a)(r);
				if (p) return await e(Object(n.d)(b));
				await e(Object(a.e)()), await e(Object(n.o)());
				const h = Object(l.c)(r);
				if (h && h.length) {
					const t = h.map(e => e.id);
					await e(Object(n.d)(t))
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: async () => r.e("CommunityTopicSurvey").then(r.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = n
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/config.ts"),
				i = r("./src/reddit/components/ContentSurvey/index.m.less"),
				a = r.n(i),
				d = r("./src/reddit/helpers/trackers/contentTag.ts"),
				c = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				survey: e,
				subredditId: t
			}) {
				const [r, i] = Object(s.useState)(!1), p = Object(c.a)();
				return Object(s.useEffect)(() => p(Object(d.h)()), [p]), n.a.createElement("div", {
					className: a.a.feedBanner,
					onClick: function() {
						i(!0), p(Object(d.g)())
					}
				}, n.a.createElement("div", {
					className: a.a.notepadSnoo
				}, n.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), n.a.createElement("div", {
					className: a.a.bannerCopy
				}, n.a.createElement("p", {
					className: a.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), n.a.createElement("p", {
					className: a.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), n.a.createElement(u.a, {
					name: "caret_right",
					className: a.a.chevron
				}), r && n.a.createElement(l.a, {
					withOverlay: !0,
					subredditId: t,
					survey: e,
					onClose: () => i(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e(5), r.e(7)]).then(r.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				i = Object(n.a)(o);
			t.a = i
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, r) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, r) {
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
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/upperFirst.js"),
				o = r.n(n),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				d = r("./src/config.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/isFakeSubreddit/index.ts"),
				l = r("./src/reddit/constants/postLayout.ts"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/components/PostList/Placeholder.tsx"),
				b = r("./src/reddit/components/EmptySubreddit.m.less"),
				h = r.n(b),
				f = r("./src/lib/classNames/index.ts"),
				y = r("./src/lib/lessComponent.tsx"),
				g = r("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const v = y.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				x = y.a.wrapped(m.n, "SubmitLink", h.a),
				O = e => {
					switch (e) {
						case c.W.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case c.W.TOP:
						case c.W.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				_ = ({
					listingName: e,
					sort: t
				}) => {
					const r = O(t);
					return a.a.createElement("div", {
						className: h.a.MainContent
					}, a.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case c.W.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case c.W.TOP:
							case c.W.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(t)), e && !Object(u.a)(e) && !!r && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: h.a.SecondaryText
					}, O(t)), a.a.createElement(x, {
						to: `/r/${e}/submit`
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				j = () => a.a.createElement("div", {
					className: h.a.MainContent
				}, a.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${d.a.assetPath}/img/snoo_discovery@1x.png`
				}), a.a.createElement("div", {
					className: h.a.PrimaryText
				}, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), a.a.createElement(x, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => a.a.createElement(a.a.Fragment, null, e.subreddit && a.a.createElement(g.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), a.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(f.a)(h.a.Component, h.a.EmptyHomepage)
			}, a.a.createElement(v, {
				isLoading: !1,
				layout: l.g.Classic
			}), a.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? a.a.createElement(_, e) : a.a.createElement(j, null))))
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/componentSizes.ts"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/JumpToContent/index.m.less"),
				l = r.n(u);
			const m = Object(n.createContext)(null),
				p = Object(n.createContext)(null);
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
			const h = a.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(n.useState)("-500px"), r = Object(n.useContext)(d.a);
					return o.a.createElement(m.Consumer, null, n => n && o.a.createElement("div", {
						className: Object(i.a)(l.a.wrapper, {
							[l.a.wrapperExp]: r
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(c.t, {
						kind: c.b.Button,
						priority: c.c.Plain,
						className: l.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const r = e.currentTarget.clientWidth + 55;
							t(`-${r}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							n.focus(), n.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(i.a)(l.a.rightBorder, {
							[l.a.rightBorderExp]: r
						})
					})))
				}),
				y = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/PostList/index.tsx"),
				n = r("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(s.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./src/reddit/contexts/NavbarExp.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/ModHub/Content/index.m.less"),
				u = r.n(c);
			t.a = e => {
				const t = Object(o.useContext)(a.a);
				return i.a.createElement("div", {
					className: Object(d.a)(u.a.noPermissions, {
						[u.a.noPermissionsExp]: t
					})
				}, i.a.createElement("img", {
					className: u.a.rememberTheHuman,
					src: `${s.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? n.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : n.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), i.a.createElement("div", {
					className: u.a.noPermissionsSmallText
				}, e.isModerator ? n.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? n.fbt._("You must be a moderator of {subredditName} to view this page", [n.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : n.fbt._("You must be a moderator to view this page", null, {
					hk: "2N7TXH"
				})))
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, r) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsExp: "_30KCF1VJPMgbkHOfEhoE2p",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, r) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, r) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, r) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, r) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "o", (function() {
				return y
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "m", (function() {
				return v
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "t", (function() {
				return S
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "r", (function() {
				return M
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "c", (function() {
				return P
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/controls/Input/ModalInput.tsx"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				u = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				l = r.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = n.a.wrapped(c.a, "CloseIcon", l.a),
				b = n.a.section("ModalBody", l.a),
				h = n.a.section("ModalPostPreview", l.a),
				f = n.a.p("ModalText", l.a),
				y = n.a.div("ModalSmallText", l.a),
				g = n.a.div("ModalDescriptionText", l.a),
				v = n.a.div("ModalMetaText", l.a),
				x = n.a.label("ModalFormItem", l.a),
				O = n.a.wrapped(d.a, "ModalInput", l.a),
				_ = n.a.label("ModalInputLabel", l.a),
				j = n.a.footer("ModalFooter", l.a),
				w = n.a.header("ModalHeader", l.a),
				I = n.a.div("ModalTitle", l.a),
				C = n.a.div("ModalAnnotation", l.a),
				E = n.a.div("ModalMain", l.a),
				S = n.a.textarea("TextArea", l.a),
				k = n.a.wrapped(a.l, "WarningButton", l.a),
				M = n.a.wrapped(a.l, "PrimaryButton", l.a),
				N = n.a.wrapped(a.o, "CancelButton", l.a),
				T = n.a.wrapped(a.r, "RemoveButton", l.a),
				P = ({
					className: e,
					...t
				}) => i.a.createElement(a.t, m({
					kind: a.b.Button,
					priority: a.c.Primary,
					className: Object(s.a)(l.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, r) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, r) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = r.n(m),
				b = r("./src/lib/lessComponent.tsx");
			const h = b.a.wrapped(u.b, "SubredditIcon", p.a),
				f = b.a.span("Label", p.a),
				y = Object(c.c)({
					subredditOrProfile: l.K
				});
			var g = Object(d.b)(y)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, o.a.createElement(o.a.Fragment, null, o.a.createElement(h, {
				subredditOrProfile: t
			}), o.a.createElement(f, null, t.displayText))));
			var v = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: r
				}) => {
					const s = r.map(t => o.a.createElement(g, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return o.a.createElement("div", {
						className: t
					}, s)
				},
				x = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				O = r.n(x);
			const _ = b.a.div("CommunityCount", O.a),
				j = b.a.wrapped(v, "SubredditsOrProfiles", O.a),
				w = b.a.wrapped(i.a, "SidebarSubreddit", O.a),
				I = b.a.wrapped(i.a, "ModalSubreddit", O.a);
			var C;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(C || (C = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: r,
					onSeeMoreDetails: n,
					subredditCategory: i = {
						name: s.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, d = t ? w : I, c = r.length, u = t && r.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(_, null, s.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [s.fbt._plural(c, "number"), s.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), c > 0 && o.a.createElement(j, {
					subredditsOrProfilesIds: t ? r.slice(0, 4) : r
				}, (t, r) => o.a.createElement(d, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, r)), c > 0 && u && o.a.createElement(a.r, {
					onClick: n
				}, s.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/PowerupsCncModule/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupsCncModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.resolve().then(r.bind(null, "./src/reddit/components/PowerupsCncModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsCncModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCncModule/index.m.less": function(e, t, r) {
			e.exports = {
				feedBanner: "_2I3Bfot0_z2fpeo6zu0l2J",
				powerupsLogo: "TQxDD5iDKrkEL8_gkvPUG",
				bolt: "lLsxHGuplL1k0pxt72AKH",
				bannerText: "_3yaV1tcyLQQaYxZ9yj1uPA",
				heading: "_2lL5MmI9e4lUGXlgHCdMMq",
				description: "_2Q6-RCjBdZlxyT48OReije",
				chevron: "_1GgOcxnjXNupiwBONGaA3T"
			}
		},
		"./src/reddit/components/PowerupsCncModule/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isPowerupsCncModuleHiddenBySpamLimit", (function() {
				return g
			}));
			var s = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/opener/index.ts"),
				d = r("./src/reddit/constants/localStorage.ts"),
				c = r("./src/reddit/helpers/localStorage/index.ts"),
				u = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/routes/powerups/index.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/components/PowerupsCncModule/index.m.less"),
				f = r.n(h);
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				return Object(c.j)(d.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e) > 1
			};
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(l.a)(),
					r = Object(i.e)(t => Object(b.S)(t, {
						subredditId: e
					})),
					h = !!r;
				return Object(n.useEffect)(() => {
					h && (Object(c.U)(d.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e), g(e) || t(Object(u.c)()))
				}, [t, h, e]), h ? o.a.createElement("a", {
					className: f.a.feedBanner,
					onClick: () => {
						t(Object(u.b)())
					},
					href: `${s.a.redditUrl}${p.a}`,
					rel: a.c,
					target: "_blank"
				}, o.a.createElement("div", {
					className: f.a.powerupsLogo
				}, o.a.createElement("img", {
					className: f.a.bolt,
					src: `${s.a.assetPath}/img/powerups/powerups-cnc.svg`,
					alt: y._("powerups lightning bolt", null, {
						hk: "2QR5Up"
					})
				})), o.a.createElement("div", {
					className: f.a.bannerText
				}, o.a.createElement("p", {
					className: f.a.heading
				}, y._("Give {subreddit name} members a way to give back", [y._param("subreddit name", r.displayText)], {
					hk: "4poXz"
				})), o.a.createElement("p", {
					className: f.a.description
				}, y._("Harness the power of your community to unlock special perks and features using Powerups.", null, {
					hk: "fJGis"
				}))), o.a.createElement(m.a, {
					name: "caret_right",
					className: f.a.chevron
				})) : null
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/raf/index.js"),
				n = r.n(s),
				o = r("./node_modules/react/index.js"),
				i = r.n(o);
			class a extends i.a.Component {
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
					return i.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class i extends n.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return n.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var a = Object(o.a)(i);
			t.a = e => n.a.createElement(a, e)
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, r) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return M
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "d", (function() {
				return P
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, r) => s => {
				const n = e(s),
					i = t(s),
					a = !n && i;
				return Object(o.a)(r.baseClassName, s.className, {
					[r.mIsInteractive]: i,
					[r.mIsActive]: n,
					[r.mIsVoteable]: a
				})
			};
			var d = r("./src/reddit/icons/fonts/Downvote/index.tsx"),
				c = r("./src/reddit/models/Vote/index.ts"),
				u = r("./src/reddit/controls/Downvote/index.m.less"),
				l = r.n(u);
			const m = {
					...l.a,
					baseClassName: l.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === c.a.downvoted,
				b = a(p, ({
					interactive: e
				}) => !1 !== e, m);
			var h = e => n.a.createElement(d.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				f = r("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = r("./src/reddit/controls/Upvote/index.m.less"),
				g = r.n(y);
			const v = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				x = ({
					voteState: e
				}) => e === c.a.upvoted,
				O = a(x, ({
					interactive: e
				}) => !1 !== e, v);
			var _ = e => n.a.createElement(f.a, {
					className: O(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				j = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				w = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				E = r.n(C);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(o.a)({
					[E.a.compact]: e.compact,
					[E.a.dark]: Object(w.b)(Object(j.a)(e)),
					[E.a.nightmode]: e.isNightMode
				}),
				M = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: i,
						voteState: a,
						compact: d,
						...u
					} = e;
					return n.a.createElement("button", S({}, u, {
						className: Object(o.a)(E.a.customDownvote, k(e), {
							[E.a.voted]: e.voteState === c.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				N = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: i,
						voteState: a,
						compact: d,
						...u
					} = e;
					return n.a.createElement("button", S({}, u, {
						className: Object(o.a)(E.a.customUpvote, k(e), {
							[E.a.voted]: e.voteState === c.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				T = h,
				P = _
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return j
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "b", (function() {
				return E
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/objectSelector/index.ts"),
				i = r("./src/reddit/actions/ads/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/index.ts"),
				d = r("./src/reddit/actions/gold/tooltips.ts"),
				c = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/actions/postList.ts"),
				l = r("./src/reddit/actions/survey/index.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = r("./src/reddit/helpers/trackers/post.ts"),
				f = r("./src/reddit/components/PostList/Placeholder.tsx"),
				y = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/selectors/experiments/survey.ts"),
				v = r("./src/reddit/selectors/listings.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/tracking.ts");

			function j() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const w = j(),
				I = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: y.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: v.g,
					postsById: x.S,
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: r,
						inSubredditOrProfile: s
					}) => Object(x.D)(e, t, r, s)),
					subredditsById: O.Z,
					viewportDataLoaded: _.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: g.e
				},
				C = Object(n.c)(I),
				E = e => ({
					onBottomViewed: (t, r) => e(u.c(t, r)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, r) => {
						e(c.z(t, r))
					},
					trackOnPostEnteredViewport: (t, r, s, n) => {
						e(c.O(t, s, n))
					},
					trackOnPostExitedViewport: (t, r, s, n, o) => {
						e(c.P(t, s, n, o))
					},
					showModalOnScroll: () => e(c.bb()),
					surveyTriggerScrollCounted: () => e(Object(l.l)())
				}),
				S = e => Object(b.b)({
					...e
				}),
				k = (e, t, r, s) => {
					const {
						listingKey: n,
						hostPostData: o,
						listingBelowVariant: i
					} = s;
					return Object(h.h)(e, t, "post", n, o, i, void 0)
				},
				M = Object(s.b)(C, E, (e, t, r) => ({
					...e,
					...t,
					...r,
					postComponentForLayout: S,
					postClickEventFactory: k
				}));
			t.a = e => Object(m.c)(w(M(e)))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/structuredStyles/index.ts"),
				i = r("./src/reddit/selectors/activeModalId.ts"),
				a = r("./src/reddit/selectors/structuredStyles.ts"),
				d = r("./src/reddit/constants/modals.ts");
			const c = Object(n.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(d.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(c, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "s", (function() {
				return f
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "p", (function() {
				return I
			}));
			const s = 284,
				n = 450,
				o = 800,
				i = 284,
				a = 48,
				d = 640,
				c = 1600,
				u = 1280,
				l = 40,
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				f = 40,
				y = 270,
				g = 106,
				v = 5,
				x = 16,
				O = 1250,
				_ = 82,
				j = 48,
				w = 36,
				I = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(n || (n = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const s = 480,
				n = 960,
				o = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
					}
				},
				a = Object(s.createContext)(i);

			function d(e) {
				const t = t => n.a.createElement(a.Consumer, null, ({
					apiContext: r,
					gqlContext: s
				}) => n.a.createElement(e, o({
					apiContext: r,
					gqlContext: s
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = n.a.createContext(!1)
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/controls/Input/index.m.less"),
				u = r.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === d.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...r
					} = this.props;
					return n.a.createElement("input", l({
						className: Object(i.a)(u.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, r) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/TextButton/index.m.less"),
				a = r.n(i);
			t.a = e => n.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(a.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e = new Date) => {
				const t = e.getFullYear();
				return `/posts/${e.getMonth()>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/brcast/dist/brcast.es.js");
			const n = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: r
				} = e;
				let s = r && `r/${r}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (s += `--[${e.onlyOfType}]`), s
			}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/polished/dist/polished.es.js");
			var s = r("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function n(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return s
			})), r.d(t, "g", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "i", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "d", (function() {
				return y
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				n = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				u = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				l = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				y = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return d
			}));
			r("./src/reddit/constants/categories.tsx");
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = e => ({
					screen: s.ab(e),
					profile: s.R(e),
					subreddit: s.ib(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...n(t)
				}),
				i = e => t => ({
					...n(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...n(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				d = e => t => ({
					...n(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Downvote/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => n.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), d.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? n.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.compactDownvoteWrapper, r.className)
			}), n.a.createElement(u, {
				className: d.a.compactDownvote,
				isFilled: t
			})) : n.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.downvoteWrapper, r.className)
			}), n.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Upvote/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => n.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), d.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? n.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.compactUpvoteWrapper, r.className)
			}), n.a.createElement(u, {
				className: d.a.compactUpvote,
				isFilled: t
			})) : n.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.upvoteWrapper, r.className)
			}), n.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/constants/colors.ts");
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.a.orangered : "none"
			}))
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, r) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/reddit/models/Theme/index.ts"),
				d = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = r("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				u = r.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.a)(e => {
				const {
					backgroundColor: t,
					className: r,
					redditStyle: s,
					theme: i,
					...c
				} = e, m = Object(d.a)(e), p = {
					"--pseudo-before-background": t || Object(a.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return n.a.createElement("div", l({
					className: Object(o.a)(u.a.backgroundContainer, r),
					style: p
				}, c))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, r) {
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
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/postLayout.ts"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/selectors/structuredStyles.ts"),
				l = r("./src/reddit/layout/page/Listing/Content.m.less"),
				m = r.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(c.u)(),
				h = Object(i.c)({
					isEditing: u.i,
					layout: (e, t) => t.forcedLayout || Object(c.R)(e, t)
				}),
				f = Object(o.b)(h);
			t.a = b(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: r,
				dispatch: s,
				fitPageToContent: o,
				forcedLayout: i,
				isCollectionLayout: u,
				isEditing: l,
				layout: b,
				pageLayer: h,
				...f
			}) => n.a.createElement("div", p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: b === d.g.Large || Object(c.O)(h),
					[m.a.mDisableFullScreen]: r && !u,
					[m.a.mClassicWidth]: u,
					[m.a.mIsEditing]: !!l,
					[m.a.mCanFlexFullWidth]: !o,
					[m.a.onlyChildMargin]: !t
				})
			}, f))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, r) {
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
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				i = r("./src/reddit/layout/page/Listing/Content.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/componentSizes.ts"),
				c = r("./src/reddit/constants/elementClassNames.ts"),
				u = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				m = r("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = r("./src/reddit/layout/page/Listing/index.m.less"),
				b = r.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: r,
					containerRef: p,
					content: h,
					contentBanner: f,
					contentClassName: y,
					contentNavBar: g,
					disableFullscreen: v,
					fitPageToContent: x,
					forcedLayout: O,
					hideOnlyChildMargin: _,
					isCollectionLayout: j,
					isPageSwapped: w,
					maxWidth: I,
					navBar: C,
					redditStyle: E,
					sidebar: S,
					sidebars: k,
					trendingUnit: M,
					subredditId: N
				} = e, T = M ? "28px" : "0", P = w ? {
					marginRight: `${d.q}px`,
					marginTop: T
				} : {
					marginLeft: `${d.q}px`,
					marginTop: T
				}, L = S && n.a.createElement("div", {
					className: Object(a.a)(b.a.sidebar, j ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: P
				}, S), R = n.a.createElement(i.a, {
					hideOnlyChildMargin: _,
					className: y,
					disableFullscreen: v,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: j
				}, f, h);
				let F;
				F = k ? n.a.createElement(n.a.Fragment, null, k[0], R, k[1]) : w ? n.a.createElement(n.a.Fragment, null, L, R) : n.a.createElement(n.a.Fragment, null, R, L);
				const B = v ? `${I||u.a+2*d.m}px` : "100%",
					A = Object(s.useContext)(l.a);
				return n.a.createElement(m.a, {
					subredditId: N
				}, n.a.createElement("div", {
					className: Object(a.a)(b.a.outerContainer, c.i, r, {
						[b.a.outerContainerExp]: A
					}),
					ref: p
				}, n.a.createElement(o.a, {
					className: c.h,
					redditStyle: E,
					backgroundColor: t
				}), n.a.createElement("div", {
					className: b.a.innerContainer
				}, C, g, (e => e.hero ? n.a.createElement(n.a.Fragment, null, e.hero) : null)(e), n.a.createElement("div", {
					style: {
						maxWidth: B
					}
				}, M), n.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: B
					}
				}, F))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.m.less"),
				o = r.n(n);
			t.a = s.a.div("inlineRow", o.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, r) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = r.n(n);
			t.a = s.a.button("inlineButton", o.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = r.n(a);
			t.a = Object(o.a)(e => n.a.createElement("div", {
				className: Object(i.a)(d.a.exapndLeftContainer, e.className)
			}, n.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/lodash/fromPairs.js"),
				n = r.n(s),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/extractQueryParams/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/modListing/index.ts"),
				p = r("./src/reddit/components/EmptySubreddit.tsx"),
				b = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = r("./src/reddit/components/JumpToContent/index.tsx"),
				f = r("./src/reddit/components/ListingPostList/index.tsx"),
				y = r("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				g = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./src/higherOrderComponents/asModal/index.tsx"),
				x = r("./src/reddit/actions/modal.ts"),
				O = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				j = r("./src/reddit/controls/TextButton/index.tsx"),
				w = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				I = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				C = r("./src/reddit/selectors/activeModalId.ts"),
				E = r("./src/reddit/selectors/modQueue.ts"),
				S = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				k = r.n(S);
			const {
				fbt: M
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = Object(v.a)(e => i.a.createElement(O.e, {
				className: k.a.modalBody
			}, i.a.createElement(O.i, null, i.a.createElement(I.a, null, i.a.createElement(O.q, {
				className: k.a.modalTitle
			}, i.a.createElement(w.a, {
				className: k.a.modIcon
			}), M._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(j.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(O.b, null)))), i.a.createElement(O.l, {
				className: k.a.modalMain
			}, i.a.createElement("div", {
				className: k.a.modalDescription
			}, M._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(_.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), T = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: k.a.feedDetailsTitle
			}, i.a.createElement(w.a, {
				className: k.a.modIcon
			}), M._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: k.a.feedDetailsDescription
			}, M._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(_.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: k.a.loadingBar
			})), P = Object(d.c)({
				isModalOpen: Object(C.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: E.e
			});
			var L = Object(a.b)(P, (e, {}) => ({
					toggleModal: () => e(Object(x.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: r,
						toggleModal: s
					} = e;
					return r ? i.a.createElement(i.a.Fragment, null, i.a.createElement(T, {
						moderatedCommunitiesIds: r,
						onSeeMoreDetails: s
					}), t && i.a.createElement(N, {
						moderatedCommunitiesIds: r,
						onCloseModal: s,
						onOverlayClick: s,
						withOverlay: !0
					})) : null
				}),
				R = r("./node_modules/react-router-redux/es/index.js"),
				F = r("./src/reddit/components/TrackingHelper/index.tsx"),
				B = r("./src/reddit/contexts/PageLayer/index.tsx"),
				A = r("./src/reddit/controls/Button/index.tsx");
			const D = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				H = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				V = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var U = r("./src/reddit/routes/modListing/index.ts");
			const q = e => e.modListingPage.filteredSubreddits.api.pending;
			var K = r("./src/reddit/constants/keycodes.ts"),
				W = r("./src/reddit/layout/row/Inline/index.tsx"),
				G = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Q = r.n(G);
			const J = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: q
			});
			class z extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(D()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === K.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(W.a, null, i.a.createElement("input", {
						className: Q.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: g.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), i.a.createElement(A.l, {
						"aria-label": g.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, g.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && i.a.createElement("div", {
						className: Q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var X = Object(a.b)(J, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(F.c)(z)),
				Y = r("./src/lib/lessComponent.tsx"),
				Z = r("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = r("./src/lib/classNames/index.ts"),
				ee = r("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => i.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear", e.isFilled), e.className)
				}),
				re = r("./src/reddit/selectors/profile.ts"),
				se = r("./src/reddit/selectors/subreddit.ts"),
				ne = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				oe = r.n(ne);
			const ie = Y.a.wrapped(Z.b, "SubredditIcon", oe.a),
				ae = Object(d.c)({
					isApiPending: q,
					subredditOrProfile: (e, t) => {
						const r = Object(se.x)(e, {
							subredditName: t.subredditName
						});
						if (!r) {
							const r = (e => e.startsWith(c.jc) ? e.slice(2) : e)(t.subredditName);
							return r && Object(re.j)(e, {
								profileName: r
							}) || null
						}
						return r
					}
				});
			class de extends i.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(H()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? i.a.createElement(_.a, {
						className: oe.a.row,
						to: e.subredditOrProfile.url
					}, i.a.createElement(ie, {
						subredditOrProfile: e.subredditOrProfile
					}), i.a.createElement("span", {
						className: oe.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && i.a.createElement("button", {
						"aria-label": g.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: oe.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, i.a.createElement(te, null))) : null
				}
			}
			var ce = Object(a.b)(ae, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(F.c)(de)),
				ue = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				le = r.n(ue);
			const {
				fbt: me
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var pe = ({
					hiddenSubredditsNames: e
				}) => {
					const t = e.map(e => i.a.createElement(ce, {
						key: e,
						subredditName: e
					}));
					return i.a.createElement(i.a.Fragment, null, e.length ? i.a.createElement("div", {
						className: le.a.rows
					}, t) : i.a.createElement("div", {
						className: le.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				be = r("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				he = r.n(be);
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(B.u)({
				filtered: e => !!e && Object(U.d)(e.url)
			}), ge = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ve extends i.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(V(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", {
						className: he.a.container
					}, i.a.createElement("div", {
						className: he.a.hideCommunitiesHeader
					}, fe._("Hide communities", null, {
						hk: "15OtHo"
					})), i.a.createElement(A.r, {
						className: he.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? fe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : fe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && i.a.createElement("div", {
						className: he.a.inputContainer
					}, i.a.createElement(X, null), i.a.createElement(pe, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var xe = ye(Object(a.b)(ge, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(R.b)(t ? U.a : U.b))
				}))(Object(F.c)(ve))),
				Oe = r("./src/reddit/components/SidebarContainer/index.tsx"),
				_e = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				je = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var we = () => i.a.createElement(Oe.a, null, i.a.createElement(je.a, {
					title: g.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(L, null), i.a.createElement(xe, null)), i.a.createElement(_e.a, null)),
				Ie = r("./src/reddit/constants/page.ts"),
				Ce = r("./src/reddit/constants/parameters.ts"),
				Ee = r("./src/reddit/helpers/trackers/screenview.ts"),
				Se = r("./src/reddit/layout/page/Listing/index.tsx"),
				ke = r("./src/reddit/selectors/moderatorPermissions.ts");
			const Me = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || c.W.HOT, (e, {
					match: t
				}) => Object(U.d)(t.path), ke.j, ke.d, (e, t, r, s, o) => {
					const i = n()([...Object(u.a)(e)]),
						a = Ce.B in i && i[Ce.B].toUpperCase(),
						d = "string" == typeof a && a in c.hc ? c.hc[a] : c.ic,
						m = r ? Ie.f : Ie.e;
					return {
						filtered: r,
						isModerator: s,
						isModeratorWithPostPerms: o,
						listingKey: Object(l.a)(m, t, i),
						listingName: m,
						sort: t,
						timeSort: d
					}
				}),
				Ne = Object(a.b)(Me, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Te extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ee.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e
					}), this.renderEmptySubreddit = () => i.a.createElement(p.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? U.b : U.a;
					return i.a.createElement("div", null, this.props.isModeratorWithPostPerms ? i.a.createElement(Se.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(b.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), i.a.createElement(h.a, null), i.a.createElement(f.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: i.a.createElement(we, null)
					}) : i.a.createElement(y.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Ne(Te)
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				d = r("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				c = r("./src/reddit/components/PowerupsCncModule/index.tsx"),
				u = r("./src/reddit/components/PowerupsCncModule/async.ts"),
				l = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/constants/postLayout.ts"),
				p = r("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts");
			const h = Object(s.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), r.e(5), r.e("NewCommunityProgress")]).then(r.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function f({
				postLayout: e,
				subredditId: t,
				subredditSubscribers: r
			}) {
				var s;
				const n = Object(i.e)(e => e.subreddits.survey[t]),
					f = Object(i.e)(e => e.subreddits.progressModule[t]),
					y = Object(i.e)(e => Object(b.b)(e, {
						subredditId: t
					})),
					g = Object(i.e)(p.a),
					v = g !== l.ce.NewModule;
				return (null === (s = null == f ? void 0 : f.cards) || void 0 === s ? void 0 : s.length) > 0 && v ? o.a.createElement(h, {
					closeModuleOnMount: !!e && e !== m.g.Large,
					subredditId: t,
					progressModule: f
				}) : e !== m.g.Large ? null : (null == n ? void 0 : n.isEligible) && !(null == n ? void 0 : n.response) && (!g || g && r > 100) ? o.a.createElement(d.a, {
					subredditId: t,
					survey: n
				}) : y && !Object(c.isPowerupsCncModuleHiddenBySpamLimit)(t) ? o.a.createElement(u.a, {
					subredditId: t
				}) : o.a.createElement(a.a, {
					subredditId: t
				})
			}
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/subredditModeration/constants.ts");
			var o = (e = null, t) => {
					switch (t.type) {
						case n.g:
						case n.f:
							return null;
						case n.e:
							return t.payload;
						default:
							return e
					}
				},
				i = r("./src/reddit/models/SubredditModeration/index.ts");
			const a = {};
			var d = (e = a, t) => {
					switch (t.type) {
						case n.g: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(i.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case n.f:
						case n.e: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(i.e)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				c = Object(s.c)({
					error: o,
					pending: d
				});
			const u = {};
			var l = (e = u, t) => {
				switch (t.type) {
					case n.f: {
						const {
							fetchedToken: r,
							subredditId: s
						} = t.payload, n = Object(i.e)(s, r);
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case n.f: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				b = r("./node_modules/icepick/icepick.js");
			const h = {};
			var f = (e = h, t) => {
				switch (t.type) {
					case n.d:
					case n.f: {
						const {
							subredditId: r,
							approvedSubmitters: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(b.merge)(e, n)
					}
					case n.k: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var y = (e = null, t) => {
				switch (t.type) {
					case n.j:
					case n.i:
						return null;
					case n.h:
						return t.payload;
					default:
						return e
				}
			};
			var g = (e = !1, t) => {
					switch (t.type) {
						case n.j:
							return !0;
						case n.i:
						case n.h:
							return !1;
						default:
							return e
					}
				},
				v = Object(s.c)({
					error: y,
					pending: g
				});
			var x = (e = null, t) => {
					switch (t.type) {
						case n.j:
							return null;
						case n.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(s.c)({
					api: v,
					result: x
				});
			const _ = {};
			var j = (e = _, t) => {
					switch (t.type) {
						case n.f: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case n.k: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case n.d: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				w = Object(s.c)({
					api: c,
					fetchedTokens: l,
					loadMore: p,
					models: f,
					search: O,
					userOrder: j
				}),
				I = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var C = (e = null, t) => {
				switch (t.type) {
					case I.g:
					case I.i:
						return null;
					case I.f:
						return t.payload;
					default:
						return e
				}
			};
			var E = (e = !1, t) => {
					switch (t.type) {
						case I.i:
							return !0;
						case I.g:
						case I.f:
							return !1;
						default:
							return e
					}
				},
				S = Object(s.c)({
					error: C,
					pending: E
				}),
				k = r("./node_modules/lodash/merge.js"),
				M = r.n(k),
				N = r("./node_modules/lodash/omit.js"),
				T = r.n(N);
			const P = {};
			var L = (e = P, t) => {
				switch (t.type) {
					case I.g:
					case I.k: {
						const {
							subredditId: r,
							flairedUsers: s
						} = t.payload;
						return M()({
							...e
						}, {
							[r]: s
						})
					}
					case I.c: {
						const {
							subredditId: r,
							userName: s
						} = t.payload, n = T()(e[r], s);
						return {
							...e,
							[r]: n
						}
					}
					case I.a:
					case I.b:
					case I.h:
						const {
							subredditId: r, userName: s, applied: n
						} = t.payload;
						return n ? {
							...e,
							[r]: {
								...e[r],
								[s]: n
							}
						} : e;
					default:
						return e
				}
			};
			const R = {};
			var F = (e = R, t) => {
				switch (t.type) {
					case I.g: {
						const {
							key: r,
							pageInfo: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			var B = (e = null, t) => {
				switch (t.type) {
					case I.l:
					case I.k:
						return null;
					case I.j:
						return t.payload;
					default:
						return e
				}
			};
			var A = (e = !1, t) => {
					switch (t.type) {
						case I.l:
							return !0;
						case I.k:
						case I.j:
							return !1;
						default:
							return e
					}
				},
				D = Object(s.c)({
					error: B,
					pending: A
				});
			var H = (e = null, t) => {
					switch (t.type) {
						case I.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case I.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				V = Object(s.c)({
					api: D,
					result: H
				});
			const U = {};
			var q = (e = U, t) => {
					switch (t.type) {
						case I.g: {
							const {
								key: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case I.a: {
							const {
								key: r,
								userName: s
							} = t.payload;
							if (!r) return e;
							if (!e[r].includes(s)) {
								const t = [...e[r], s];
								return {
									...e,
									[r]: t
								}
							}
							return e
						}
						case I.c: {
							const {
								userName: r
							} = t.payload, s = {};
							for (const t in e) s[t] = e[t].filter(e => e !== r);
							return s
						}
						default:
							return e
					}
				},
				K = Object(s.c)({
					api: S,
					models: L,
					pageInfo: F,
					search: V,
					userOrder: q
				}),
				W = r("./src/reddit/actions/moderationLog/constants.ts");
			const G = {};
			var Q = (e = G, t) => {
				switch (t.type) {
					case W.b: {
						const {
							actionIds: r,
							key: s,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: r
							}
						}
					}
					default:
						return e
				}
			};
			const J = {};
			var z = (e = J, t) => {
					switch (t.type) {
						case W.b: {
							const {
								normalizedModerationLog: r,
								subredditId: s
							} = t.payload, n = {};
							r.forEach(e => {
								n[e.id] = e
							});
							const o = {
								[s]: n
							};
							return M()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				X = Object(s.c)({
					itemOrder: Q,
					models: z
				});
			var Y = (e = null, t) => {
				switch (t.type) {
					case W.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case W.b: {
						const {
							hasNextPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case W.b: {
						const {
							hasPreviousPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const re = [];
			var se = (e = re, t) => {
				switch (t.type) {
					case W.a: {
						const {
							normalizedModerators: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var ne = (e = null, t) => {
					switch (t.type) {
						case W.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(s.c)({
					actions: X,
					endCursor: Y,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: se,
					startCursor: ne
				});
			const ie = {};
			var ae = (e = ie, t) => {
				switch (t.type) {
					case n.K:
					case n.u: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload.response || t.payload, n = {
							[r]: s
						};
						return Object(b.merge)(e, n)
					}
					case n.y: {
						const {
							subredditId: r,
							userId: s,
							permissions: n
						} = t.payload;
						return Object(b.setIn)(e, [r, s, "modPermissions"], n)
					}
					case n.eb: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			const de = {};
			var ce = (e = de, t) => {
				switch (t.type) {
					case n.v:
					case n.u: {
						const {
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: null
						} : e
					}
					case n.t: {
						const {
							error: r,
							key: s,
							subredditId: n
						} = t.payload;
						return n ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			const ue = {};
			var le = (e = ue, t) => {
					switch (t.type) {
						case n.t:
						case n.u: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case n.v: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				me = Object(s.c)({
					error: ce,
					pending: le
				});
			const pe = {};
			var be = (e = pe, t) => {
					switch (t.type) {
						case n.u: {
							const {
								subredditId: r,
								response: s,
								key: n
							} = t.payload;
							return Object(b.setIn)(e, [r, n], s.moderatorIds)
						}
						case n.eb: {
							const {
								subredditId: r,
								userId: s,
								key: n
							} = t.payload, o = e[r][n].filter(e => e !== s);
							return Object(b.setIn)(e, [r, n], o)
						}
						default:
							return e
					}
				},
				he = Object(s.c)({
					data: be,
					api: me
				});
			var fe = (e = null, t) => {
				switch (t.type) {
					case n.B:
					case n.A:
						return null;
					case n.z:
						return t.payload;
					default:
						return e
				}
			};
			var ye = (e = !1, t) => {
					switch (t.type) {
						case n.A:
						case n.z:
							return !1;
						case n.B:
							return !0;
						default:
							return e
					}
				},
				ge = Object(s.c)({
					error: fe,
					pending: ye
				});
			const ve = {};
			var xe = (e = ve, t) => {
				switch (t.type) {
					case n.A: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload;
						return Object(b.set)(e, r, s)
					}
					case n.bb: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					case n.c: {
						const r = t.payload,
							{
								subredditId: s,
								moderators: n
							} = r,
							o = {
								[s]: n
							};
						return Object(b.merge)(e, o)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var _e = (e = Oe, t) => {
					switch (t.type) {
						case n.A: {
							const {
								subredditId: r,
								moderatorIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case n.bb: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, n = e[r].filter(e => e !== s);
							return {
								...e,
								[r]: n
							}
						}
						case n.c: {
							const r = t.payload,
								{
									subredditId: s,
									moderatorIds: n
								} = r,
								o = [...e[s] || [], ...n];
							return {
								...e,
								[s]: o
							}
						}
						default:
							return e
					}
				},
				je = Object(s.c)({
					api: ge,
					models: xe,
					userOrder: _e
				});
			const we = {};
			var Ie = (e = we, t) => {
				switch (t.type) {
					case n.H: {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							invitePending: n
						} = s, o = {
							[r]: n
						};
						return Object(b.merge)(e, o)
					}
					case n.E:
					case n.F: {
						const {
							subredditId: r
						} = t.payload;
						return Object(b.unset)(e, r)
					}
					default:
						return e
				}
			};
			const Ce = {};
			var Ee = (e = Ce, t) => {
				switch (t.type) {
					case n.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var ke = (e = Se, t) => {
				switch (t.type) {
					case n.H: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Me = {};
			var Ne = (e = Me, t) => {
				switch (t.type) {
					case n.H: {
						const {
							response: r
						} = t.payload, s = {
							[r.subredditId]: r.moderators
						};
						return Object(b.merge)({
							...e
						}, s)
					}
					case n.y: {
						const r = t.payload,
							{
								subredditId: s,
								userId: n,
								permissions: o
							} = r;
						return e[s] && e[s][n] ? Object(b.setIn)(e, [s, n, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Te = (e = null, t) => {
				switch (t.type) {
					case n.L:
					case n.K:
						return null;
					case n.J:
						return t.payload;
					default:
						return e
				}
			};
			var Pe = (e = !1, t) => {
					switch (t.type) {
						case n.L:
							return !0;
						case n.K:
						case n.J:
							return !1;
						default:
							return e
					}
				},
				Le = Object(s.c)({
					error: Te,
					pending: Pe
				}),
				Re = r("./node_modules/lodash/isEqual.js"),
				Fe = r.n(Re);
			var Be = (e = null, t) => {
					switch (t.type) {
						case n.L:
						case n.J:
						case n.eb:
							return null;
						case n.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case n.y: {
							const {
								userId: r,
								permissions: s
							} = t.payload;
							return e && e.id === r && !Fe()(e.modPermissions, s) ? {
								...e,
								modPermissions: s
							} : e
						}
						default:
							return e
					}
				},
				Ae = Object(s.c)({
					api: Le,
					result: Be
				});
			const De = {};
			var He = (e = De, t) => {
				switch (t.type) {
					case n.I:
					case n.H: {
						const {
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: null
						} : e
					}
					case n.G: {
						const {
							error: r,
							subredditId: s,
							key: n
						} = t.payload;
						return s ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const Ve = {};
			var Ue = (e = Ve, t) => {
					switch (t.type) {
						case n.G:
						case n.H: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case n.I: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				qe = Object(s.c)({
					error: He,
					pending: Ue
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ke = {};
			var We = (e = Ke, t) => {
					switch (t.type) {
						case n.H: {
							const {
								response: r,
								subredditId: s,
								key: n
							} = t.payload, {
								moderatorIds: o
							} = r;
							return Object(b.merge)(e, {
								[s]: {
									[n]: o
								}
							})
						}
						case n.eb: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, n = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const o = e[r][t].filter(e => e !== s);
								n[t] = o
							}), Object(b.set)(e, r, n)
						}
						default:
							return e
					}
				},
				Ge = Object(s.c)({
					data: We,
					api: qe
				}),
				Qe = Object(s.c)({
					editableModerators: ae,
					editableUserOrder: he,
					invitedModerators: je,
					invitePending: Ie,
					loadMoreModerators: ke,
					loadMoreEditableModerators: Ee,
					models: Ne,
					search: Ae,
					userOrder: Ge
				}),
				Je = r("./src/reddit/actions/bulkActions/constants.ts");
			var ze = (e = null, t) => {
					switch (t.type) {
						case Je.c:
						case Je.b:
							return null;
						case Je.a:
							return t.payload;
						default:
							return e
					}
				},
				Xe = r("./src/reddit/actions/modQueue/constants.ts");
			var Ye = (e = !1, t) => {
					switch (t.type) {
						case Je.c:
							return !0;
						case Je.b:
						case Je.a:
						case Xe.s:
						case Xe.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(s.c)({
					error: ze,
					pending: Ye
				});
			const $e = {};
			var et = (e = $e, t) => {
					switch (t.type) {
						case Xe.a: {
							const {
								ids: r
							} = t.payload, s = {};
							return r.forEach(e => s[e] = !0), {
								...e,
								...s
							}
						}
						case Xe.d: {
							const {
								ids: r
							} = t.payload;
							return T()(e, r)
						}
						case Xe.c: {
							const {
								ids: e
							} = t.payload, r = {};
							return e.forEach(e => r[e] = !0), r
						}
						default:
							return e
					}
				},
				tt = r("./src/reddit/models/ModQueue/index.ts");
			const rt = {};
			var st = (e = rt, t) => {
					switch (t.type) {
						case Je.b: {
							const {
								operation: e,
								ids: r
							} = t.payload;
							return "approve" === e ? rt : {
								[tt.c[e]]: r
							}
						}
						default:
							return e
					}
				},
				nt = Object(s.c)({
					api: Ze,
					selectedItems: et,
					undoLastAction: st
				});
			var ot = (e = null, t) => {
				switch (t.type) {
					case Xe.g:
					case Xe.f:
						return null;
					case Xe.e:
						return t.payload;
					default:
						return e
				}
			};
			var it = (e = !1, t) => {
					switch (t.type) {
						case Xe.g:
							return !0;
						case Xe.f:
						case Xe.e:
							return !1;
						default:
							return e
					}
				},
				at = Object(s.c)({
					error: ot,
					pending: it
				});
			const dt = {};
			var ct = (e = dt, t) => {
				switch (t.type) {
					case Xe.f: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const ut = {};
			var lt = (e = ut, t) => {
					switch (t.type) {
						case Xe.f: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				mt = Object(s.c)({
					api: at,
					itemOrder: ct,
					loadMore: lt
				}),
				pt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var bt = (e = null, t) => {
				switch (t.type) {
					case pt.e: {
						const r = t.payload,
							{
								moderatingSubreddits: s
							} = r;
						return s ? null : e
					}
					case Xe.i:
					case Xe.f:
					case Xe.m:
					case Xe.p:
					case Xe.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case Xe.k: {
						const e = t.payload,
							{
								moderatedAfter: r
							} = e;
						return r
					}
					default:
						return e
				}
			};
			const ht = [];
			var ft = (e = ht, t) => {
				switch (t.type) {
					case Xe.i:
					case Xe.f:
					case Xe.m:
					case Xe.p:
					case Xe.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: r
						} = e;
						return r
					}
					case Xe.k: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return [...e, ...s]
					}
					case pt.e: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return s || e
					}
					default:
						return e
				}
			};
			var yt = (e = !1, t) => {
				switch (t.type) {
					case Xe.b:
						return !0;
					default:
						return e
				}
			};
			var gt = (e = !1, t) => {
					switch (t.type) {
						case Xe.k:
							return !0;
						case Xe.b:
							return !1;
						default:
							return e
					}
				},
				vt = Object(s.c)({
					after: bt,
					data: ft,
					loaded: yt,
					pending: gt
				});
			var xt = (e = null, t) => {
				switch (t.type) {
					case Xe.j:
					case Xe.i:
						return null;
					case Xe.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ot = (e = !1, t) => {
					switch (t.type) {
						case Xe.j:
							return !0;
						case Xe.i:
						case Xe.h:
							return !1;
						default:
							return e
					}
				},
				_t = Object(s.c)({
					error: xt,
					pending: Ot
				});
			const jt = {};
			var wt = (e = jt, t) => {
				switch (t.type) {
					case Xe.i: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const It = {};
			var Ct = (e = It, t) => {
					switch (t.type) {
						case Xe.i: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Et = Object(s.c)({
					api: _t,
					itemOrder: wt,
					loadMore: Ct
				});
			var St = (e = null, t) => {
				switch (t.type) {
					case Xe.n:
					case Xe.m:
						return null;
					case Xe.l:
						return t.payload;
					default:
						return e
				}
			};
			var kt = (e = !1, t) => {
					switch (t.type) {
						case Xe.n:
							return !0;
						case Xe.m:
						case Xe.l:
							return !1;
						default:
							return e
					}
				},
				Mt = Object(s.c)({
					error: St,
					pending: kt
				});
			const Nt = {};
			var Tt = (e = Nt, t) => {
				switch (t.type) {
					case Xe.m: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Pt = {};
			var Lt = (e = Pt, t) => {
					switch (t.type) {
						case Xe.m: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Rt = Object(s.c)({
					api: Mt,
					itemOrder: Tt,
					loadMore: Lt
				});
			var Ft = (e = null, t) => {
				switch (t.type) {
					case Xe.q:
					case Xe.p:
						return null;
					case Xe.o:
						return t.payload;
					default:
						return e
				}
			};
			var Bt = (e = !1, t) => {
					switch (t.type) {
						case Xe.q:
							return !0;
						case Xe.p:
						case Xe.o:
							return !1;
						default:
							return e
					}
				},
				At = Object(s.c)({
					error: Ft,
					pending: Bt
				});
			const Dt = {};
			var Ht = (e = Dt, t) => {
				switch (t.type) {
					case Xe.p: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Vt = {};
			var Ut = (e = Vt, t) => {
					switch (t.type) {
						case Xe.p: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				qt = Object(s.c)({
					api: At,
					itemOrder: Ht,
					loadMore: Ut
				});
			var Kt = (e = null, t) => {
				switch (t.type) {
					case Xe.w:
					case Xe.v:
						return null;
					case Xe.u:
						return t.payload;
					default:
						return e
				}
			};
			var Wt = (e = !1, t) => {
					switch (t.type) {
						case Xe.w:
							return !0;
						case Xe.v:
						case Xe.u:
							return !1;
						default:
							return e
					}
				},
				Gt = Object(s.c)({
					error: Kt,
					pending: Wt
				});
			const Qt = {};
			var Jt = (e = Qt, t) => {
				switch (t.type) {
					case Xe.v: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: o
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: o
							}
						}
					}
					default:
						return e
				}
			};
			const zt = {};
			var Xt = (e = zt, t) => {
					switch (t.type) {
						case Xe.v: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, o = n[n.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Yt = Object(s.c)({
					api: Gt,
					itemOrder: Jt,
					loadMore: Xt
				}),
				Zt = Object(s.c)({
					bulkAction: nt,
					edited: mt,
					moderatedCommunitiesOrder: vt,
					modqueue: Et,
					reports: Rt,
					spam: qt,
					unmoderated: Yt
				});
			var $t = (e = null, t) => {
				switch (t.type) {
					case n.T:
					case n.R:
						return null;
					case n.Q:
						return t.payload;
					default:
						return e
				}
			};
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case n.T: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(i.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case n.R:
						case n.Q: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(i.e)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				rr = Object(s.c)({
					error: $t,
					pending: tr
				});
			const sr = {};
			var nr = (e = sr, t) => {
					switch (t.type) {
						case n.R: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(i.e)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				or = r("./src/reddit/actions/inContextModeration.ts");
			var ir = (e = null, t) => {
				switch (t.type) {
					case or.b:
						return t.payload;
					default:
						return e
				}
			};
			const ar = {};
			var dr = (e = ar, t) => {
				switch (t.type) {
					case n.R: {
						const {
							subredditId: e,
							after: r
						} = t.payload;
						return {
							[e]: r
						}
					}
					default:
						return e
				}
			};
			const cr = {};
			var ur = (e = cr, t) => {
				switch (t.type) {
					case n.S:
					case n.R: {
						const {
							subredditId: r,
							mutedUsers: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(b.merge)(e, n)
					}
					case n.X: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var lr = (e = null, t) => {
				switch (t.type) {
					case n.W:
					case n.V:
						return null;
					case n.U:
						return t.payload;
					default:
						return e
				}
			};
			var mr = (e = !1, t) => {
					switch (t.type) {
						case n.W:
							return !0;
						case n.V:
						case n.U:
							return !1;
						default:
							return e
					}
				},
				pr = Object(s.c)({
					error: lr,
					pending: mr
				});
			var br = (e = null, t) => {
					switch (t.type) {
						case n.W:
						case n.U:
							return null;
						case n.V: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				hr = Object(s.c)({
					api: pr,
					result: br
				});
			const fr = {};
			var yr = (e = fr, t) => {
					switch (t.type) {
						case n.R: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case n.X: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case n.S: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				gr = Object(s.c)({
					api: rr,
					fetchedTokens: nr,
					inContext: ir,
					loadMore: dr,
					models: ur,
					search: hr,
					userOrder: yr
				});
			t.a = Object(s.c)({
				approvedSubmitters: w,
				flairedUsers: K,
				moderationLog: oe,
				moderators: Qe,
				modQueue: Zt,
				muted: gr
			})
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/actions/pages/powerups.ts");
			const i = "/powerups",
				a = {
					action: o.a,
					chunk: n.s.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!r.m[t]
						},
						importAsync: () => r.e("Powerups").then(r.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return r(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: n.Nb.POWERUPS,
						isResponsive: !0
					},
					path: i
				};
			t.b = a
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: o.O,
						experimentName: s.yc
					});
					return !(!t || Object(s.uf)(t))
				},
				a = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: o.O,
						experimentName: s.yc
					}) === s.ed.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(n.c)(e, {
					experimentName: s.Pd,
					experimentEligibilitySelector: n.a
				}) === s.Zd.Enabled,
				i = e => Object(n.c)(e, {
					experimentName: s.Qd,
					experimentEligibilitySelector: n.a,
					expEventOverride: !1
				}) === s.ae.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "d", (function() {
				return O
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/posts.ts"),
				i = r("./src/reddit/selectors/subreddit.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const r = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (r) {
						const t = Object(i.S)(e, {
							subredditId: r
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				u = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = Object(s.a)((e, t) => {
					const r = p(e, t);
					if (!r) return l;
					const s = Object(i.W)(e, {
						subredditName: r.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : l
				}),
				p = (e, t) => {
					const r = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return r ? Object(i.S)(e, {
						subredditId: r
					}) : null
				},
				b = (e, t, r, s, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + r > t) && (!(t + r > a) && !((e, t, r) => {
						const s = r[t - 1],
							n = r[t],
							i = n && Object(o.G)(e, {
								postId: s
							}) || null,
							a = n && Object(o.G)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, s)))
				},
				h = [3],
				f = Object(s.a)((e, {
					existingDUPositions: t,
					listingProps: r
				}) => {
					const s = t.slice().sort();
					let n = -1;
					const i = Object(o.z)(e, {
							listingKey: r.listingKey
						}),
						a = [];
					return h.forEach(t => {
						let r = n + t;
						if (!(r >= i.length)) {
							for (; r < i.length && !b(e, r, t, i, s);) r += 1;
							r < i.length && (a.push(r), n = r)
						}
					}), a
				}),
				y = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				x = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(a.N)(e),
						r = n.d.geoSubredditRecommendationDULoggedIn(e),
						s = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && r || !t && s
				}
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/reddit/featureFlags/subredditPoints.ts"),
				n = r("./src/reddit/selectors/moderatorPermissions.ts"),
				o = r("./src/reddit/selectors/user.ts"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/selectors/gold/powerups/index.ts");
			const d = e => {
					const t = Object(n.a)(e);
					if (!t) return null;
					const r = Object(o.L)(e),
						i = [];
					for (const n of t) {
						const t = e.subreddits.models[n];
						if (!t) return null;
						const o = Object(a.h)(e, {
							subredditId: n
						});
						s.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !r || i.push({
							id: n,
							displayText: t.displayText,
							hasPowerups: o
						})
					}
					return i
				},
				c = Object(i.a)(d, e => !!(null == e ? void 0 : e.length))
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts");
			var s = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/comments/index.ts"),
				a = r("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				features: {
					comments: i.a
				},
				pages: {
					modHub: a.a
				}
			});
			const d = (e, t) => Object(s.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(n.a)((e, t) => {
					var r, s, n;
					const {
						pageName: o,
						page: i
					} = t, a = d(0, t);
					if (!(null === (n = null === (s = null === (r = e.pages.modHub.modQueue[o]) || void 0 === r ? void 0 : r.itemOrder) || void 0 === s ? void 0 : s[a]) || void 0 === n ? void 0 : n[i])) return;
					const c = e.pages.modHub.modQueue[o].itemOrder[a][i];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				u = (e, t) => {
					var r;
					const {
						pageName: s
					} = t;
					return null === (r = e.pages.modHub.modQueue[s]) || void 0 === r || !r.api || e.pages.modHub.modQueue[s].api.pending
				},
				l = (e, t) => {
					var r;
					const s = d(0, t);
					return null === (r = e.pages.modHub.modQueue[t.pageName]) || void 0 === r ? void 0 : r.loadMore[s]
				},
				m = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"96ad05ccb84c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.ca6487fbcae2ff5a7ecc.js.map