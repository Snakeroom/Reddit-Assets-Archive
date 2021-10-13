// https://www.redditstatic.com/desktop2x/ModListing.82fa6a73271a4cee0ea7.js
// Retrieved at 10/13/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
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
					s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, s.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, s.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, s.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, s.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, r) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== r[t - 1]
						}))
					}, s.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, s.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, s.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							r = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(s) {
							var o = s.element,
								i = a(o),
								d = this._rootContainsTarget(o),
								c = s.entry,
								l = t && d && this._computeTargetAndRootIntersection(o, r),
								u = s.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: r,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(r, n) {
						if ("none" != e.getComputedStyle(r).display) {
							for (var s, o, i, d, l, u, m, p, h = a(r), b = c(r), f = !1; !f;) {
								var y = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (f = !0, y = n) : b != t.body && b != t.documentElement && "visible" != v.overflow && (y = a(b)), y && (s = y, o = h, i = void 0, d = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(s.top, o.top), d = Math.min(s.bottom, o.bottom), l = Math.max(s.left, o.left), u = Math.min(s.right, o.right), p = d - i, !(h = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: d,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								b = c(b)
							}
							return h
						}
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var r = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: r.clientWidth || n.clientWidth,
								width: r.clientWidth || n.clientWidth,
								bottom: r.clientHeight || n.clientHeight,
								height: r.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, s.prototype._expandRectByRootMargin = function(e) {
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
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (r !== n)
							for (var s = 0; s < this.thresholds.length; s++) {
								var o = this.thresholds[s];
								if (o == r || o == n || o < r != o < n) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = n
				}

				function n(e) {
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
						n = this.intersectionRect,
						s = n.width * n.height;
					this.intersectionRatio = r ? s / r : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var r, n, s, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							r(), s = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, r, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, r, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
				}

				function i(e, t, r, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, r, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
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
			var n = r("./node_modules/lodash/_baseTimes.js"),
				s = r("./node_modules/lodash/_castFunction.js"),
				o = r("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var r = a,
					c = d(e, a);
				t = s(t), e -= a;
				for (var l = n(c, t); ++r < e;) t(r);
				return l
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, n) {
				var s = r ? r.call(n, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					i = Object.keys(t);
				if (o.length !== i.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(t), d = 0; d < o.length; d++) {
					var c = o[d];
					if (!a(c)) return !1;
					var l = e[c],
						u = t[c];
					if (!1 === (s = r ? r.call(n, l, u, c) : void 0) || void 0 === s && l !== u) return !1
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
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/FocusTrap/index.ts"),
				a = r("./src/lib/portal/index.tsx"),
				d = r("./src/reddit/actions/shortcuts/utils.ts"),
				c = r("./src/reddit/constants/shortcuts.ts"),
				l = r("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.m.less"),
				m = r.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ({
				className: e,
				isVisible: t,
				...r
			}) => s.a.createElement("div", p({
				className: Object(o.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, r));

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
						}), Object(l.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: r,
							ignoreDefaultFocus: n,
							onOverlayClick: i,
							overlayClassName: d,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, b = p;
						return s.a.createElement(a.a, {
							container: document.getElementById(c.b)
						}, s.a.createElement(h, {
							className: d,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(m.a.modal, r),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, b))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			r("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => s.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			class n {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class s {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const r = new s(t);
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
					const r = t instanceof n ? t : new n(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					r.prev = s, r.next = s.next, s.next = r, r.next && (r.next.prev = r);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = r, this.length++
				}
				insertBefore(e, t) {
					const r = t instanceof n ? t : new n(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					r.next = s, r.prev = s.prev, s.prev = r, r.prev && (r.prev.next = r);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
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
					const t = e instanceof n ? e : new n(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const r = e instanceof n ? t.value[this.key] : e[this.key];
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
					const t = e instanceof n ? e : new n(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const r = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
				}
			}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return n
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "k", (function() {
				return a
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			}));
			const n = "SUBREDDIT__FLAIRED_USERS_PENDING",
				s = "SUBREDDIT__FLAIRED_USERS_LOADED",
				o = "SUBREDDIT__FLAIRED_USERS_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				d = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				c = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				h = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				i = Object(n.a)(s),
				a = Object(n.a)(o)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "SUBREDDIT__MODERATION_LOG_LOADED",
				s = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modListingDataPending", (function() {
				return L
			})), r.d(t, "modListingDataLoaded", (function() {
				return T
			})), r.d(t, "modListingDataFailed", (function() {
				return B
			})), r.d(t, "modListingPageRequested", (function() {
				return R
			})), r.d(t, "morePostsPending", (function() {
				return F
			})), r.d(t, "morePostsLoaded", (function() {
				return D
			})), r.d(t, "morePostsFailed", (function() {
				return A
			})), r.d(t, "moreModListingRequested", (function() {
				return U
			})), r.d(t, "hideSubredditSuccess", (function() {
				return q
			})), r.d(t, "hideSubredditPending", (function() {
				return W
			})), r.d(t, "hideSubredditFailed", (function() {
				return K
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return V
			})), r.d(t, "unhideSubredditPending", (function() {
				return Q
			})), r.d(t, "unhideSubredditFailed", (function() {
				return G
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return J
			})), r.d(t, "hideSubreddit", (function() {
				return X
			})), r.d(t, "unhideSubreddit", (function() {
				return z
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/platform.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/page.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				p = r("./src/config.ts"),
				h = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				y = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/helpers/name/index.ts"),
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				x = (e, t) => Object(h.a)(e, {
					data: t,
					endpoint: Object(y.a)(Object(g.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.ib.GET
				});
			const _ = (e, t, r, n) => Object(h.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(v.c)(r)}`,
					method: n ? i.ib.PUT : i.ib.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(v.h)(r)
						})
					}
				}),
				O = (e, t, r) => _(e, t, r, !0),
				E = (e, t, r) => _(e, t, r, !1);
			var I = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				j = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				w = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = r("./src/reddit/helpers/trackers/screenview.ts"),
				S = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/routes/modListing/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				M = r("./src/reddit/actions/pages/modListing/constants.ts");
			const L = Object(a.a)(M.f),
				T = Object(a.a)(M.e),
				B = Object(a.a)(M.d),
				P = (e, t) => async (r, s, o) => {
					const i = s();
					if (i.listings.postOrder.api.pending[e]) return;
					r(L({
						key: e
					}));
					const a = await Object(w.a)("modListing", () => x(o.apiContext(), t)),
						d = `error-${e}`;
					a.ok ? (r(T({
						key: e,
						meta: i.meta,
						...a.body
					})), r(l.g(d))) : (r(B({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(j.a)(r, i) : r(l.f({
						id: d,
						kind: S.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: P(e, t)
					})))
				}, R = (e, t) => async (r, s) => {
					const {
						sort: a = i.W
					} = e.params, l = Object(k.d)(e.path), p = l ? u.f : u.e, h = Object(d.a)(p, a, e.queryParams), b = s(), f = b.listings.postOrder.ids[h], y = b.listings.postOrder.api.error[h];
					if (b.listings.postOrder.api.pending[h] || f && !y && !t) return void(f && r(c.l({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const v = H(e.queryParams);
					await r(P(h, {
						...o()(e.queryParams, m.l),
						...o()(e.queryParams, m.k),
						filtered: !!l || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(I.a)(a, v)
					})), r(c.l({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(s(), !0)
				}, F = Object(a.a)(M.i), D = Object(a.a)(M.h), A = Object(a.a)(M.g), U = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						a = s.platform.currentPage;
					if (!a) return;
					const {
						sort: c = i.W
					} = e, l = a.queryParams, p = Object(k.d)(a.url), h = p ? u.f : u.e, b = Object(d.a)(h, c, l), f = s.listings.postOrder.loadMore[b];
					if (!f) return;
					const y = s.listings.postOrder.api.pending[b],
						v = s.listings.postOrder.fetchedTokens,
						g = !(!v[b] || !v[b][f.token]);
					if (y || g) return;
					const _ = H(l);
					t(F({
						key: b,
						fetchedToken: f.token
					}));
					const O = await x(n(), {
							after: f.token,
							dist: f.dist,
							filtered: !!p || void 0,
							sort: c,
							t: Object(I.a)(c, _),
							...o()(l, m.l)
						}),
						E = s.listings.postOrder.ids[b],
						j = {
							...O.body,
							postIds: (O.body.postIds || []).filter(e => !E || !E.includes(e))
						};
					O.ok ? t(D({
						key: b,
						fetchedToken: f.token,
						meta: s.meta,
						...j
					})) : t(A({
						key: b,
						error: O.error,
						fetchedToken: f.token,
						...j
					}))
				};

			function H(e) {
				const t = m.y in e && e[m.y].toUpperCase() || "";
				return t in i.dc && i.dc[t]
			}
			const q = Object(a.a)(M.c),
				W = Object(a.a)(M.b),
				K = Object(a.a)(M.a),
				V = Object(a.a)(M.l),
				Q = Object(a.a)(M.k),
				G = Object(a.a)(M.j),
				J = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const o = n(),
						i = Object(N.k)(o),
						[a, d, c, l] = t ? [W, q, K, O] : [Q, V, G, E];
					if (!i || !i.displayText) return;
					const {
						currentPage: u
					} = o.platform;
					if (!u || !u.routeMatch) return;
					r(a(e));
					const m = await l(s(), i.displayText, e);
					m.ok ? (await r(R(u.routeMatch.match, !0)), r(d(e))) : r(c(m.body))
				}, X = e => J(e, !0), z = e => J(e, !1)
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			var n = r("./src/reddit/constants/shortcuts.ts"),
				s = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = r("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const r = t.routeMatch,
						n = Object(s.a)(e);
					return Object(o.b)(r, e, n)
				},
				a = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				d = e => {
					const t = document.getElementById(e),
						r = window.scrollX,
						n = window.scrollY;
					t && (t.focus(), window.scrollTo(r, n))
				},
				c = () => {
					d(n.b)
				}
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
				return h
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/componentSizes.ts"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/components/JumpToContent/index.m.less"),
				u = r.n(l);
			const m = Object(s.createContext)(null),
				p = Object(s.createContext)(null);
			class h extends o.a.Component {
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
			const b = a.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), r = Object(s.useContext)(d.a);
					return o.a.createElement(m.Consumer, null, s => s && o.a.createElement("div", {
						className: Object(i.a)(u.a.wrapper, {
							[u.a.wrapperExp]: r
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(c.s, {
						kind: c.a.Button,
						priority: c.b.Plain,
						className: u.a.button,
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
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -b)
						}
					}, n.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(i.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: r
						})
					})))
				}),
				y = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./src/reddit/contexts/NavbarExp.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/ModHub/Content/index.m.less"),
				l = r.n(c);
			t.a = e => {
				const t = Object(o.useContext)(a.a);
				return i.a.createElement("div", {
					className: Object(d.a)(l.a.noPermissions, {
						[l.a.noPermissionsExp]: t
					})
				}, i.a.createElement("img", {
					className: l.a.rememberTheHuman,
					src: `${n.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : s.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), i.a.createElement("div", {
					className: l.a.noPermissionsSmallText
				}, e.isModerator ? s.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? s.fbt._("You must be a moderator of {subredditName} to view this page", [s.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : s.fbt._("You must be a moderator to view this page", null, {
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
				return h
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "o", (function() {
				return y
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "t", (function() {
				return S
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "s", (function() {
				return L
			})), r.d(t, "c", (function() {
				return T
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/controls/Input/ModalInput.tsx"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.wrapped(c.a, "CloseIcon", u.a),
				h = s.a.section("ModalBody", u.a),
				b = s.a.section("ModalPostPreview", u.a),
				f = s.a.p("ModalText", u.a),
				y = s.a.div("ModalSmallText", u.a),
				v = s.a.div("ModalDescriptionText", u.a),
				g = s.a.div("ModalMetaText", u.a),
				x = s.a.label("ModalFormItem", u.a),
				_ = s.a.wrapped(d.a, "ModalInput", u.a),
				O = s.a.label("ModalInputLabel", u.a),
				E = s.a.footer("ModalFooter", u.a),
				I = s.a.header("ModalHeader", u.a),
				j = s.a.div("ModalTitle", u.a),
				w = s.a.div("ModalAnnotation", u.a),
				C = s.a.div("ModalMain", u.a),
				S = s.a.textarea("TextArea", u.a),
				k = s.a.wrapped(a.k, "WarningButton", u.a),
				N = s.a.wrapped(a.k, "PrimaryButton", u.a),
				M = s.a.wrapped(a.n, "CancelButton", u.a),
				L = s.a.wrapped(a.q, "RemoveButton", u.a),
				T = ({
					className: e,
					...t
				}) => i.a.createElement(a.s, m({
					kind: a.a.Button,
					priority: a.b.Primary,
					className: Object(n.a)(u.a.ConfirmButton, e)
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
				return I
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/components/SubredditIcon/index.tsx"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = r.n(m),
				h = r("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(l.b, "SubredditIcon", p.a),
				f = h.a.span("Label", p.a),
				y = Object(c.c)({
					subredditOrProfile: u.I
				});
			var v = Object(d.b)(y)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
				subredditOrProfile: t
			}), o.a.createElement(f, null, t.displayText))));
			var g = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: r
				}) => {
					const n = r.map(t => o.a.createElement(v, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return o.a.createElement("div", {
						className: t
					}, n)
				},
				x = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				_ = r.n(x);
			const O = h.a.div("CommunityCount", _.a),
				E = h.a.wrapped(g, "SubredditsOrProfiles", _.a),
				I = h.a.wrapped(i.a, "SidebarSubreddit", _.a),
				j = h.a.wrapped(i.a, "ModalSubreddit", _.a);
			var w;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(w || (w = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: r,
					onSeeMoreDetails: s,
					subredditCategory: i = {
						name: n.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, d = t ? I : j, c = r.length, l = t && r.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(O, null, n.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [n.fbt._plural(c, "number"), n.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), c > 0 && o.a.createElement(E, {
					subredditsOrProfilesIds: t ? r.slice(0, 4) : r
				}, (t, r) => o.a.createElement(d, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, r)), c > 0 && l && o.a.createElement(a.q, {
					onClick: s
				}, n.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/raf/index.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o);
			class a extends i.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class i extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var a = Object(o.a)(i);
			t.a = e => s.a.createElement(a, e)
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
				return N
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "d", (function() {
				return T
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, r) => n => {
				const s = e(n),
					i = t(n),
					a = !s && i;
				return Object(o.a)(r.baseClassName, n.className, {
					[r.mIsInteractive]: i,
					[r.mIsActive]: s,
					[r.mIsVoteable]: a
				})
			};
			var d = r("./src/reddit/icons/fonts/Downvote/index.tsx"),
				c = r("./src/reddit/models/Vote/index.ts"),
				l = r("./src/reddit/controls/Downvote/index.m.less"),
				u = r.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === c.a.downvoted,
				h = a(p, ({
					interactive: e
				}) => !1 !== e, m);
			var b = e => s.a.createElement(d.a, {
					className: h(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				f = r("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = r("./src/reddit/controls/Upvote/index.m.less"),
				v = r.n(y);
			const g = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				x = ({
					voteState: e
				}) => e === c.a.upvoted,
				_ = a(x, ({
					interactive: e
				}) => !1 !== e, g);
			var O = e => s.a.createElement(f.a, {
					className: _(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				E = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				I = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				C = r.n(w);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(o.a)({
					[C.a.compact]: e.compact,
					[C.a.dark]: Object(I.b)(Object(E.a)(e)),
					[C.a.nightmode]: e.isNightMode
				}),
				N = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						...i
					} = e;
					return s.a.createElement("button", S({}, i, {
						className: Object(o.a)(C.a.customDownvote, k(e), {
							[C.a.voted]: e.voteState === c.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				M = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						...i
					} = e;
					return s.a.createElement("button", S({}, i, {
						className: Object(o.a)(C.a.customUpvote, k(e), {
							[C.a.voted]: e.voteState === c.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				L = b,
				T = O
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/structuredStyles/index.ts"),
				i = r("./src/reddit/selectors/activeModalId.ts"),
				a = r("./src/reddit/selectors/structuredStyles.ts"),
				d = r("./src/reddit/constants/modals.ts");
			const c = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(d.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(n.b)(c, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
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
				return l
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "q", (function() {
				return h
			})), r.d(t, "r", (function() {
				return b
			})), r.d(t, "s", (function() {
				return f
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "p", (function() {
				return j
			}));
			const n = 284,
				s = 450,
				o = 800,
				i = 284,
				a = 48,
				d = 640,
				c = 1600,
				l = 1280,
				u = 40,
				m = 48,
				p = 24,
				h = 24,
				b = 312,
				f = 40,
				y = 270,
				v = 106,
				g = 5,
				x = 16,
				_ = 1250,
				O = 82,
				E = 48,
				I = 36,
				j = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(n || (n = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(s || (s = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = 480,
				s = 960,
				o = 1200
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = s.a.createContext(!1)
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, r) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				xsmallBigPaddingButtonStyles: "UEPNkU0rd1-nvbkOcBatc",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "m", (function() {
				return x
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "r", (function() {
				return j
			})), r.d(t, "q", (function() {
				return w
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "h", (function() {
				return M
			})), r.d(t, "i", (function() {
				return L
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/controls/Button/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = {
				role: "button",
				tabIndex: 0
			};
			var u, m, p, h;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(h || (h = {}));
			const b = e => {
					const {
						"data-redditstyle": t,
						Icon: r,
						iconClassName: n,
						iconPosition: i = p.C,
						isFullWidth: a = !1,
						isSquare: b = !1,
						children: g,
						className: x,
						kind: _ = h.Button,
						priority: O = m.Primary,
						redditStyle: E,
						size: I = u.S,
						text: j,
						textClassName: w,
						...C
					} = e, S = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: r,
						Icon: n,
						isFullWidth: s,
						isSquare: i,
						priority: a,
						size: c,
						text: l
					}) => Object(o.a)(e, d.a.Button, a && d.a[a], c && d.a[c], {
						[d.a.isFullWidth]: s,
						[d.a.isIconOnly]: !!n && !l,
						[d.a.isSquare]: i,
						[d.a.redditStyle]: !(!t && !r)
					}))({
						baseClassName: x,
						children: g,
						dataRedditStyle: t,
						Icon: r,
						isFullWidth: a,
						isSquare: b,
						priority: O,
						redditStyle: E,
						size: I,
						text: j
					}), k = (({
						children: e,
						text: t,
						Icon: r,
						iconClassName: n,
						iconPosition: i,
						priority: a,
						textClassName: c
					}) => !r && t ? s.a.createElement("span", {
						className: c
					}, t) : s.a.createElement(s.a.Fragment, null, r && (i === p.C || i === p.L) && s.a.createElement(r, {
						className: Object(o.a)(d.a.Icon, n, {
							[d.a.isLeft]: i === p.L
						}),
						isFilled: a === m.Primary
					}), t && s.a.createElement("span", {
						className: Object(o.a)(d.a.Text, c)
					}, t), e && e, r && i === p.R && s.a.createElement(r, {
						className: Object(o.a)(d.a.Icon, n, d.a.isRight),
						isFilled: a === m.Primary
					})))({
						children: g,
						text: j,
						Icon: r,
						iconClassName: n,
						iconPosition: i,
						priority: O,
						textClassName: w
					});
					return _ === h.InternalLink && (e => "to" in e)(C) ? s.a.createElement(f, c({}, l, C, {
						className: S
					}), k) : _ === h.ExternalLink && (e => "href" in e)(C) ? s.a.createElement(y, c({}, l, C, {
						className: S
					}), k) : s.a.createElement(v, c({}, l, C, {
						className: S
					}), k)
				},
				f = e => s.a.createElement(i.a, e),
				y = e => s.a.createElement("a", e),
				v = e => s.a.createElement("button", e),
				g = e => s.a.createElement(b, c({
					kind: h.ExternalLink,
					priority: m.Primary
				}, e)),
				x = e => s.a.createElement(b, c({
					kind: h.InternalLink,
					priority: m.Primary
				}, e)),
				_ = e => s.a.createElement(b, c({
					kind: h.Button,
					priority: m.Primary
				}, e)),
				O = e => s.a.createElement(b, c({
					kind: h.ExternalLink,
					priority: m.Secondary
				}, e)),
				E = e => s.a.createElement(b, c({
					kind: h.InternalLink,
					priority: m.Secondary
				}, e)),
				I = e => s.a.createElement(b, c({
					kind: h.Button,
					priority: m.Secondary
				}, e)),
				j = e => s.a.createElement(b, c({
					kind: h.InternalLink,
					priority: m.Plain
				}, e)),
				w = e => s.a.createElement(b, c({
					kind: h.Button,
					priority: m.Plain
				}, e)),
				C = ({
					className: e,
					...t
				}) => s.a.createElement(b, c({
					kind: h.Button,
					priority: m.Primary,
					className: Object(o.a)(e, d.a.DangerButtonColors)
				}, t)),
				S = ({
					className: e,
					...t
				}) => s.a.createElement(b, c({
					kind: h.Button,
					className: Object(o.a)(e, d.a.GoldButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => s.a.createElement(b, c({
					kind: h.Button,
					className: Object(o.a)(e, d.a.PremiumButtonColors)
				}, t)),
				N = ({
					className: e,
					...t
				}) => s.a.createElement(b, c({
					kind: h.Button,
					className: Object(o.a)(e, d.a.ChatButton)
				}, t)),
				M = ({
					className: e,
					...t
				}) => s.a.createElement(b, c({
					kind: h.Button,
					className: Object(o.a)(e, d.a.InlineTextButton)
				}, t)),
				L = ({
					className: e,
					...t
				}) => s.a.createElement(b, c({
					kind: h.Button,
					className: Object(o.a)(e, d.a.PlainLinkButton),
					priority: m.PlainLink
				}, t));
			t.s = b
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/controls/Input/index.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
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
					return s.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/TextButton/index.m.less"),
				a = r.n(i);
			t.a = e => s.a.createElement("button", {
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
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(n.a)({
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
				let n = r && `r/${r}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (n += `--[${e.onlyOfType}]`), n
			}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/polished/dist/polished.es.js");
			var n = r("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function s(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(n.a)(e).post
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/elementIds.ts");
			let s;
			const o = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(n.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${s}px`;
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = `${s}px`)
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				d = e => {
					if (!e || !document.body) return 0;
					const t = a(document.body),
						r = e.offsetWidth - e.scrollWidth;
					return t || r
				}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			}));
			r("./src/reddit/constants/categories.tsx");
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: n.screen(e),
					profile: n.profile(e),
					subreddit: n.subreddit(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				i = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Downvote/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), d.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.compactDownvoteWrapper, r.className)
			}), s.a.createElement(l, {
				className: d.a.compactDownvote,
				isFilled: t
			})) : s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.downvoteWrapper, r.className)
			}), s.a.createElement(l, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Upvote/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), d.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.compactUpvoteWrapper, r.className)
			}), s.a.createElement(l, {
				className: d.a.compactUpvote,
				isFilled: t
			})) : s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.upvoteWrapper, r.className)
			}), s.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = r.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...r
			}) => s.a.createElement("svg", d({
				className: Object(o.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.b.orangered : "none"
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/reddit/models/Theme/index.ts"),
				d = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = r("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.a)(e => {
				const {
					backgroundColor: t,
					className: r,
					redditStyle: n,
					theme: i,
					...c
				} = e, m = Object(d.a)(e), p = {
					"--pseudo-before-background": t || Object(a.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return s.a.createElement("div", u({
					className: Object(o.a)(l.a.backgroundContainer, r),
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/postLayout.ts"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/selectors/structuredStyles.ts"),
				u = r("./src/reddit/layout/page/Listing/Content.m.less"),
				m = r.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(c.u)(),
				b = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(c.Q)(e, t)
				}),
				f = Object(o.b)(b),
				y = ({
					hideOnlyChildMargin: e,
					disableFullscreen: t,
					dispatch: r,
					fitPageToContent: n,
					forcedLayout: o,
					isCollectionLayout: i,
					isEditing: a,
					layout: d,
					pageLayer: c,
					...l
				}) => s.a.createElement("div", l);
			t.a = h(f(({
				className: e,
				...t
			}) => s.a.createElement(y, p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === d.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent,
					[m.a.onlyChildMargin]: !t.hideOnlyChildMargin
				})
			}, t))))
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				i = r("./src/reddit/layout/page/Listing/Content.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/componentSizes.ts"),
				c = r("./src/reddit/constants/elementClassNames.ts"),
				l = r("./src/reddit/constants/screenWidths.ts"),
				u = r("./src/reddit/contexts/NavbarExp.ts"),
				m = r("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = r("./src/reddit/layout/page/Listing/index.m.less"),
				h = r.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: r,
					containerRef: p,
					content: b,
					contentBanner: f,
					contentClassName: y,
					contentNavBar: v,
					disableFullscreen: g,
					fitPageToContent: x,
					forcedLayout: _,
					hideOnlyChildMargin: O,
					isCollectionLayout: E,
					isPageSwapped: I,
					maxWidth: j,
					navBar: w,
					redditStyle: C,
					sidebar: S,
					sidebars: k,
					trendingUnit: N,
					subredditId: M
				} = e, L = N ? "28px" : "0", T = I ? {
					marginRight: `${d.q}px`,
					marginTop: L
				} : {
					marginLeft: `${d.q}px`,
					marginTop: L
				}, B = S && s.a.createElement("div", {
					className: Object(a.a)(h.a.sidebar, E ? h.a["m-collectionLayout"] : h.a.defaultLayout),
					style: T
				}, S), P = s.a.createElement(i.a, {
					hideOnlyChildMargin: O,
					className: y,
					disableFullscreen: g,
					fitPageToContent: x,
					forcedLayout: _,
					isCollectionLayout: E
				}, f, b);
				let R;
				R = k ? s.a.createElement(s.a.Fragment, null, k[0], P, k[1]) : I ? s.a.createElement(s.a.Fragment, null, B, P) : s.a.createElement(s.a.Fragment, null, P, B);
				const F = g ? `${j||l.a+2*d.m}px` : "100%",
					D = Object(n.useContext)(u.a);
				return s.a.createElement(m.a, {
					subredditId: M
				}, s.a.createElement("div", {
					className: Object(a.a)(h.a.outerContainer, c.i, r, {
						[h.a.outerContainerExp]: D
					}),
					ref: p
				}, s.a.createElement(o.a, {
					className: c.h,
					redditStyle: C,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: h.a.innerContainer
				}, s.a.createElement("div", {
					className: h.a.bannerNavContainer
				}, w), v, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: F
					}
				}, N), s.a.createElement("div", {
					className: h.a.body,
					style: {
						maxWidth: F
					}
				}, R))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.m.less"),
				o = r.n(s);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, r) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = r.n(s);
			t.a = n.a.button("inlineButton", o.a)
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = r.n(a);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(i.a)(d.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/fromPairs.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/extractQueryParams/index.ts"),
				u = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/modListing/index.ts"),
				p = r("./src/reddit/components/EmptySubreddit.tsx"),
				h = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				b = r("./src/reddit/components/JumpToContent/index.tsx"),
				f = r("./src/reddit/components/ListingPostList/index.tsx"),
				y = r("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
				g = r("./src/higherOrderComponents/asModal/index.tsx"),
				x = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				E = r("./src/reddit/controls/TextButton/index.tsx"),
				I = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				j = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = r("./src/reddit/selectors/activeModalId.ts"),
				C = r("./src/reddit/selectors/modQueue.ts"),
				S = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				k = r.n(S);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), M = Object(g.a)(e => i.a.createElement(_.e, {
				className: k.a.modalBody
			}, i.a.createElement(_.i, null, i.a.createElement(j.a, null, i.a.createElement(_.q, {
				className: k.a.modalTitle
			}, i.a.createElement(I.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(E.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(_.b, null)))), i.a.createElement(_.l, {
				className: k.a.modalMain
			}, i.a.createElement("div", {
				className: k.a.modalDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), L = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: k.a.feedDetailsTitle
			}, i.a.createElement(I.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: k.a.feedDetailsDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(O.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: k.a.loadingBar
			})), T = Object(d.c)({
				isModalOpen: Object(w.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.e
			});
			var B = Object(a.b)(T, (e, {}) => ({
					toggleModal: () => e(Object(x.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: r,
						toggleModal: n
					} = e;
					return r ? i.a.createElement(i.a.Fragment, null, i.a.createElement(L, {
						moderatedCommunitiesIds: r,
						onSeeMoreDetails: n
					}), t && i.a.createElement(M, {
						moderatedCommunitiesIds: r,
						onCloseModal: n,
						onOverlayClick: n,
						withOverlay: !0
					})) : null
				}),
				P = r("./node_modules/react-router-redux/es/index.js"),
				R = r("./src/reddit/components/TrackingHelper/index.tsx"),
				F = r("./src/reddit/contexts/PageLayer/index.tsx"),
				D = r("./src/reddit/controls/Button/index.tsx");
			const A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				U = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				H = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var q = r("./src/reddit/routes/modListing/index.ts");
			const W = e => e.modListingPage.filteredSubreddits.api.pending;
			var K = r("./src/reddit/constants/keycodes.ts"),
				V = r("./src/reddit/layout/row/Inline/index.tsx"),
				Q = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				G = r.n(Q);
			const J = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: W
			});
			class X extends i.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(A()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
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
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(V.a, null, i.a.createElement("input", {
						className: G.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: v.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), i.a.createElement(D.k, {
						"aria-label": v.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: G.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, v.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && i.a.createElement("div", {
						className: G.a.errorText
					}, e.apiError.explanation))
				}
			}
			var z = Object(a.b)(J, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(R.c)(X)),
				Y = r("./src/lib/lessComponent.tsx"),
				Z = r("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = r("./src/lib/classNames/index.ts"),
				ee = r("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => i.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear", e.isFilled), e.className)
				}),
				re = r("./src/reddit/selectors/profile.ts"),
				ne = r("./src/reddit/selectors/subreddit.ts"),
				se = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				oe = r.n(se);
			const ie = Y.a.wrapped(Z.b, "SubredditIcon", oe.a),
				ae = Object(d.c)({
					isApiPending: W,
					subredditOrProfile: (e, t) => {
						const r = Object(ne.w)(e, {
							subredditName: t.subredditName
						});
						if (!r) {
							const r = (e => e.startsWith(c.fc) ? e.slice(2) : e)(t.subredditName);
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
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(U()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? i.a.createElement(O.a, {
						className: oe.a.row,
						to: e.subredditOrProfile.url
					}, i.a.createElement(ie, {
						subredditOrProfile: e.subredditOrProfile
					}), i.a.createElement("span", {
						className: oe.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && i.a.createElement("button", {
						"aria-label": v.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: oe.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, i.a.createElement(te, null))) : null
				}
			}
			var ce = Object(a.b)(ae, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(R.c)(de)),
				le = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ue = r.n(le);
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
						className: ue.a.rows
					}, t) : i.a.createElement("div", {
						className: ue.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				he = r("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				be = r.n(he);
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(F.u)({
				filtered: e => !!e && Object(q.d)(e.url)
			}), ve = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ge extends i.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(H(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", {
						className: be.a.container
					}, i.a.createElement("div", {
						className: be.a.hideCommunitiesHeader
					}, fe._("Hide communities", null, {
						hk: "15OtHo"
					})), i.a.createElement(D.q, {
						className: be.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? fe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : fe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && i.a.createElement("div", {
						className: be.a.inputContainer
					}, i.a.createElement(z, null), i.a.createElement(pe, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var xe = ye(Object(a.b)(ve, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(P.b)(t ? q.a : q.b))
				}))(Object(R.c)(ge))),
				_e = r("./src/reddit/components/SidebarContainer/index.tsx"),
				Oe = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ee = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ie = () => i.a.createElement(_e.a, null, i.a.createElement(Ee.a, {
					title: v.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(B, null), i.a.createElement(xe, null)), i.a.createElement(Oe.a, null)),
				je = r("./src/reddit/constants/page.ts"),
				we = r("./src/reddit/constants/parameters.ts"),
				Ce = r("./src/reddit/helpers/trackers/screenview.ts"),
				Se = r("./src/reddit/layout/page/Listing/index.tsx"),
				ke = r("./src/reddit/selectors/moderatorPermissions.ts");
			const Ne = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || c.V.HOT, (e, {
					match: t
				}) => Object(q.d)(t.path), ke.j, ke.d, (e, t, r, n, o) => {
					const i = s()([...Object(l.a)(e)]),
						a = we.y in i && i[we.y].toUpperCase(),
						d = "string" == typeof a && a in c.dc ? c.dc[a] : c.ec,
						m = r ? je.f : je.e;
					return {
						filtered: r,
						isModerator: n,
						isModeratorWithPostPerms: o,
						listingKey: Object(u.a)(m, t, i),
						listingName: m,
						sort: t,
						timeSort: d
					}
				}),
				Me = Object(a.b)(Ne, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Le extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ce.f)({
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
					const e = this.props.filtered ? q.b : q.a;
					return i.a.createElement("div", null, this.props.isModeratorWithPostPerms ? i.a.createElement(Se.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), i.a.createElement(b.a, null), i.a.createElement(f.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: i.a.createElement(Ie, null)
					}) : i.a.createElement(y.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Me(Le)
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/subredditModeration/constants.ts");
			var o = (e = null, t) => {
					switch (t.type) {
						case s.g:
						case s.f:
							return null;
						case s.e:
							return t.payload;
						default:
							return e
					}
				},
				i = r("./src/reddit/models/SubredditModeration/index.ts");
			const a = {};
			var d = (e = a, t) => {
					switch (t.type) {
						case s.g: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(i.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case s.f:
						case s.e: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(i.d)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				c = Object(n.c)({
					error: o,
					pending: d
				});
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case s.f: {
						const {
							fetchedToken: r,
							subredditId: n
						} = t.payload, s = Object(i.d)(n, r);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case s.f: {
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
				h = r("./node_modules/icepick/icepick.js");
			const b = {};
			var f = (e = b, t) => {
				switch (t.type) {
					case s.d:
					case s.f: {
						const {
							subredditId: r,
							approvedSubmitters: n
						} = t.payload, s = {
							[r]: n
						};
						return Object(h.merge)(e, s)
					}
					case s.k: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var y = (e = null, t) => {
				switch (t.type) {
					case s.j:
					case s.i:
						return null;
					case s.h:
						return t.payload;
					default:
						return e
				}
			};
			var v = (e = !1, t) => {
					switch (t.type) {
						case s.j:
							return !0;
						case s.i:
						case s.h:
							return !1;
						default:
							return e
					}
				},
				g = Object(n.c)({
					error: y,
					pending: v
				});
			var x = (e = null, t) => {
					switch (t.type) {
						case s.j:
							return null;
						case s.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				_ = Object(n.c)({
					api: g,
					result: x
				});
			const O = {};
			var E = (e = O, t) => {
					switch (t.type) {
						case s.f: {
							const {
								subredditId: r,
								approvedSubmitterIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case s.k: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case s.d: {
							const {
								subredditId: r,
								approvedSubmitterIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				I = Object(n.c)({
					api: c,
					fetchedTokens: u,
					loadMore: p,
					models: f,
					search: _,
					userOrder: E
				}),
				j = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var w = (e = null, t) => {
				switch (t.type) {
					case j.g:
					case j.i:
						return null;
					case j.f:
						return t.payload;
					default:
						return e
				}
			};
			var C = (e = !1, t) => {
					switch (t.type) {
						case j.i:
							return !0;
						case j.g:
						case j.f:
							return !1;
						default:
							return e
					}
				},
				S = Object(n.c)({
					error: w,
					pending: C
				}),
				k = r("./node_modules/lodash/merge.js"),
				N = r.n(k),
				M = r("./node_modules/lodash/omit.js"),
				L = r.n(M);
			const T = {};
			var B = (e = T, t) => {
				switch (t.type) {
					case j.g:
					case j.k: {
						const {
							subredditId: r,
							flairedUsers: n
						} = t.payload;
						return N()({
							...e
						}, {
							[r]: n
						})
					}
					case j.c: {
						const {
							subredditId: r,
							userName: n
						} = t.payload, s = L()(e[r], n);
						return {
							...e,
							[r]: s
						}
					}
					case j.a:
					case j.b:
					case j.h:
						const {
							subredditId: r, userName: n, applied: s
						} = t.payload;
						return s ? {
							...e,
							[r]: {
								...e[r],
								[n]: s
							}
						} : e;
					default:
						return e
				}
			};
			const P = {};
			var R = (e = P, t) => {
				switch (t.type) {
					case j.g: {
						const {
							key: r,
							pageInfo: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var F = (e = null, t) => {
				switch (t.type) {
					case j.l:
					case j.k:
						return null;
					case j.j:
						return t.payload;
					default:
						return e
				}
			};
			var D = (e = !1, t) => {
					switch (t.type) {
						case j.l:
							return !0;
						case j.k:
						case j.j:
							return !1;
						default:
							return e
					}
				},
				A = Object(n.c)({
					error: F,
					pending: D
				});
			var U = (e = null, t) => {
					switch (t.type) {
						case j.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case j.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				H = Object(n.c)({
					api: A,
					result: U
				});
			const q = {};
			var W = (e = q, t) => {
					switch (t.type) {
						case j.g: {
							const {
								key: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case j.a: {
							const {
								key: r,
								userName: n
							} = t.payload;
							if (!r) return e;
							if (!e[r].includes(n)) {
								const t = [...e[r], n];
								return {
									...e,
									[r]: t
								}
							}
							return e
						}
						case j.c: {
							const {
								userName: r
							} = t.payload, n = {};
							for (const t in e) n[t] = e[t].filter(e => e !== r);
							return n
						}
						default:
							return e
					}
				},
				K = Object(n.c)({
					api: S,
					models: B,
					pageInfo: R,
					search: H,
					userOrder: W
				}),
				V = r("./src/reddit/actions/moderationLog/constants.ts");
			const Q = {};
			var G = (e = Q, t) => {
				switch (t.type) {
					case V.b: {
						const {
							actionIds: r,
							key: n,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[n]: r
							}
						}
					}
					default:
						return e
				}
			};
			const J = {};
			var X = (e = J, t) => {
					switch (t.type) {
						case V.b: {
							const {
								normalizedModerationLog: r,
								subredditId: n
							} = t.payload, s = {};
							r.forEach(e => {
								s[e.id] = e
							});
							const o = {
								[n]: s
							};
							return N()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				z = Object(n.c)({
					itemOrder: G,
					models: X
				});
			var Y = (e = null, t) => {
				switch (t.type) {
					case V.b: {
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
					case V.b: {
						const {
							hasNextPage: r,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case V.b: {
						const {
							hasPreviousPage: r,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const re = [];
			var ne = (e = re, t) => {
				switch (t.type) {
					case V.a: {
						const {
							normalizedModerators: r,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var se = (e = null, t) => {
					switch (t.type) {
						case V.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(n.c)({
					actions: z,
					endCursor: Y,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: ne,
					startCursor: se
				});
			const ie = {};
			var ae = (e = ie, t) => {
				switch (t.type) {
					case s.I:
					case s.u: {
						const {
							subredditId: r,
							moderators: n
						} = t.payload.response || t.payload, s = {
							[r]: n
						};
						return Object(h.merge)(e, s)
					}
					case s.y: {
						const {
							subredditId: r,
							userId: n,
							permissions: s
						} = t.payload;
						return Object(h.setIn)(e, [r, n, "modPermissions"], s)
					}
					case s.Y: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			const de = {};
			var ce = (e = de, t) => {
				switch (t.type) {
					case s.v:
					case s.u: {
						const {
							key: r,
							subredditId: n
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case s.t: {
						const {
							error: r,
							key: n,
							subredditId: s
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
			const le = {};
			var ue = (e = le, t) => {
					switch (t.type) {
						case s.t:
						case s.u: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !1
							} : e
						}
						case s.v: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !0
							} : e
						}
						default:
							return e
					}
				},
				me = Object(n.c)({
					error: ce,
					pending: ue
				});
			const pe = {};
			var he = (e = pe, t) => {
					switch (t.type) {
						case s.u: {
							const {
								subredditId: r,
								response: n,
								key: s
							} = t.payload;
							return Object(h.setIn)(e, [r, s], n.moderatorIds)
						}
						case s.Y: {
							const {
								subredditId: r,
								userId: n,
								key: s
							} = t.payload, o = e[r][s].filter(e => e !== n);
							return Object(h.setIn)(e, [r, s], o)
						}
						default:
							return e
					}
				},
				be = Object(n.c)({
					data: he,
					api: me
				});
			var fe = (e = null, t) => {
				switch (t.type) {
					case s.B:
					case s.A:
						return null;
					case s.z:
						return t.payload;
					default:
						return e
				}
			};
			var ye = (e = !1, t) => {
					switch (t.type) {
						case s.A:
						case s.z:
							return !1;
						case s.B:
							return !0;
						default:
							return e
					}
				},
				ve = Object(n.c)({
					error: fe,
					pending: ye
				});
			const ge = {};
			var xe = (e = ge, t) => {
				switch (t.type) {
					case s.A: {
						const {
							subredditId: r,
							moderators: n
						} = t.payload;
						return Object(h.set)(e, r, n)
					}
					case s.V: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [r, n])
					}
					case s.c: {
						const r = t.payload,
							{
								subredditId: n,
								moderators: s
							} = r,
							o = {
								[n]: s
							};
						return Object(h.merge)(e, o)
					}
					default:
						return e
				}
			};
			const _e = {};
			var Oe = (e = _e, t) => {
					switch (t.type) {
						case s.A: {
							const {
								subredditId: r,
								moderatorIds: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case s.V: {
							const {
								subredditId: r,
								userId: n
							} = t.payload, s = e[r].filter(e => e !== n);
							return {
								...e,
								[r]: s
							}
						}
						case s.c: {
							const r = t.payload,
								{
									subredditId: n,
									moderatorIds: s
								} = r,
								o = [...e[n] || [], ...s];
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Ee = Object(n.c)({
					api: ve,
					models: xe,
					userOrder: Oe
				});
			const Ie = {};
			var je = (e = Ie, t) => {
				switch (t.type) {
					case s.F: {
						const {
							subredditId: r,
							response: n
						} = t.payload, {
							invitePending: s
						} = n, o = {
							[r]: s
						};
						return Object(h.merge)(e, o)
					}
					case s.C:
					case s.D: {
						const {
							subredditId: r
						} = t.payload;
						return Object(h.unset)(e, r)
					}
					default:
						return e
				}
			};
			const we = {};
			var Ce = (e = we, t) => {
				switch (t.type) {
					case s.u: {
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
					case s.F: {
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
			const Ne = {};
			var Me = (e = Ne, t) => {
				switch (t.type) {
					case s.F: {
						const {
							response: r
						} = t.payload, n = {
							[r.subredditId]: r.moderators
						};
						return Object(h.merge)({
							...e
						}, n)
					}
					case s.y: {
						const r = t.payload,
							{
								subredditId: n,
								userId: s,
								permissions: o
							} = r;
						return e[n] && e[n][s] ? Object(h.setIn)(e, [n, s, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Le = (e = null, t) => {
				switch (t.type) {
					case s.J:
					case s.I:
						return null;
					case s.H:
						return t.payload;
					default:
						return e
				}
			};
			var Te = (e = !1, t) => {
					switch (t.type) {
						case s.J:
							return !0;
						case s.I:
						case s.H:
							return !1;
						default:
							return e
					}
				},
				Be = Object(n.c)({
					error: Le,
					pending: Te
				}),
				Pe = r("./node_modules/lodash/isEqual.js"),
				Re = r.n(Pe);
			var Fe = (e = null, t) => {
					switch (t.type) {
						case s.J:
						case s.H:
						case s.Y:
							return null;
						case s.I: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case s.y: {
							const {
								userId: r,
								permissions: n
							} = t.payload;
							return e && e.id === r && !Re()(e.modPermissions, n) ? {
								...e,
								modPermissions: n
							} : e
						}
						default:
							return e
					}
				},
				De = Object(n.c)({
					api: Be,
					result: Fe
				});
			const Ae = {};
			var Ue = (e = Ae, t) => {
				switch (t.type) {
					case s.G:
					case s.F: {
						const {
							subredditId: r,
							key: n
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case s.E: {
						const {
							error: r,
							subredditId: n,
							key: s
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
			const He = {};
			var qe = (e = He, t) => {
					switch (t.type) {
						case s.E:
						case s.F: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !1
							} : e
						}
						case s.G: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !0
							} : e
						}
						default:
							return e
					}
				},
				We = Object(n.c)({
					error: Ue,
					pending: qe
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ke = {};
			var Ve = (e = Ke, t) => {
					switch (t.type) {
						case s.F: {
							const {
								response: r,
								subredditId: n,
								key: s
							} = t.payload, {
								moderatorIds: o
							} = r;
							return Object(h.merge)(e, {
								[n]: {
									[s]: o
								}
							})
						}
						case s.Y: {
							const {
								subredditId: r,
								userId: n
							} = t.payload, s = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const o = e[r][t].filter(e => e !== n);
								s[t] = o
							}), Object(h.set)(e, r, s)
						}
						default:
							return e
					}
				},
				Qe = Object(n.c)({
					data: Ve,
					api: We
				}),
				Ge = Object(n.c)({
					editableModerators: ae,
					editableUserOrder: be,
					invitedModerators: Ee,
					invitePending: je,
					loadMoreModerators: ke,
					loadMoreEditableModerators: Ce,
					models: Me,
					search: De,
					userOrder: Qe
				}),
				Je = r("./src/reddit/actions/bulkActions/constants.ts");
			var Xe = (e = null, t) => {
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
				ze = r("./src/reddit/actions/modQueue/constants.ts");
			var Ye = (e = !1, t) => {
					switch (t.type) {
						case Je.c:
							return !0;
						case Je.b:
						case Je.a:
						case ze.s:
						case ze.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(n.c)({
					error: Xe,
					pending: Ye
				});
			const $e = {};
			var et = (e = $e, t) => {
					switch (t.type) {
						case ze.a: {
							const {
								ids: r
							} = t.payload, n = {};
							return r.forEach(e => n[e] = !0), {
								...e,
								...n
							}
						}
						case ze.d: {
							const {
								ids: r
							} = t.payload;
							return L()(e, r)
						}
						case ze.c: {
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
			var nt = (e = rt, t) => {
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
				st = Object(n.c)({
					api: Ze,
					selectedItems: et,
					undoLastAction: nt
				});
			var ot = (e = null, t) => {
				switch (t.type) {
					case ze.g:
					case ze.f:
						return null;
					case ze.e:
						return t.payload;
					default:
						return e
				}
			};
			var it = (e = !1, t) => {
					switch (t.type) {
						case ze.g:
							return !0;
						case ze.f:
						case ze.e:
							return !1;
						default:
							return e
					}
				},
				at = Object(n.c)({
					error: ot,
					pending: it
				});
			const dt = {};
			var ct = (e = dt, t) => {
				switch (t.type) {
					case ze.f: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const lt = {};
			var ut = (e = lt, t) => {
					switch (t.type) {
						case ze.f: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				mt = Object(n.c)({
					api: at,
					itemOrder: ct,
					loadMore: ut
				}),
				pt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var ht = (e = null, t) => {
				switch (t.type) {
					case pt.e: {
						const r = t.payload,
							{
								moderatingSubreddits: n
							} = r;
						return n ? null : e
					}
					case ze.i:
					case ze.f:
					case ze.m:
					case ze.p:
					case ze.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case ze.k: {
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
			const bt = [];
			var ft = (e = bt, t) => {
				switch (t.type) {
					case ze.i:
					case ze.f:
					case ze.m:
					case ze.p:
					case ze.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: r
						} = e;
						return r
					}
					case ze.k: {
						const r = t.payload,
							{
								listingOrder: n
							} = r;
						return [...e, ...n]
					}
					case pt.e: {
						const r = t.payload,
							{
								listingOrder: n
							} = r;
						return n || e
					}
					default:
						return e
				}
			};
			var yt = (e = !1, t) => {
				switch (t.type) {
					case ze.b:
						return !0;
					default:
						return e
				}
			};
			var vt = (e = !1, t) => {
					switch (t.type) {
						case ze.k:
							return !0;
						case ze.b:
							return !1;
						default:
							return e
					}
				},
				gt = Object(n.c)({
					after: ht,
					data: ft,
					loaded: yt,
					pending: vt
				});
			var xt = (e = null, t) => {
				switch (t.type) {
					case ze.j:
					case ze.i:
						return null;
					case ze.h:
						return t.payload;
					default:
						return e
				}
			};
			var _t = (e = !1, t) => {
					switch (t.type) {
						case ze.j:
							return !0;
						case ze.i:
						case ze.h:
							return !1;
						default:
							return e
					}
				},
				Ot = Object(n.c)({
					error: xt,
					pending: _t
				});
			const Et = {};
			var It = (e = Et, t) => {
				switch (t.type) {
					case ze.i: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const jt = {};
			var wt = (e = jt, t) => {
					switch (t.type) {
						case ze.i: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Ct = Object(n.c)({
					api: Ot,
					itemOrder: It,
					loadMore: wt
				});
			var St = (e = null, t) => {
				switch (t.type) {
					case ze.n:
					case ze.m:
						return null;
					case ze.l:
						return t.payload;
					default:
						return e
				}
			};
			var kt = (e = !1, t) => {
					switch (t.type) {
						case ze.n:
							return !0;
						case ze.m:
						case ze.l:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(n.c)({
					error: St,
					pending: kt
				});
			const Mt = {};
			var Lt = (e = Mt, t) => {
				switch (t.type) {
					case ze.m: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Tt = {};
			var Bt = (e = Tt, t) => {
					switch (t.type) {
						case ze.m: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Pt = Object(n.c)({
					api: Nt,
					itemOrder: Lt,
					loadMore: Bt
				});
			var Rt = (e = null, t) => {
				switch (t.type) {
					case ze.q:
					case ze.p:
						return null;
					case ze.o:
						return t.payload;
					default:
						return e
				}
			};
			var Ft = (e = !1, t) => {
					switch (t.type) {
						case ze.q:
							return !0;
						case ze.p:
						case ze.o:
							return !1;
						default:
							return e
					}
				},
				Dt = Object(n.c)({
					error: Rt,
					pending: Ft
				});
			const At = {};
			var Ut = (e = At, t) => {
				switch (t.type) {
					case ze.p: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Ht = {};
			var qt = (e = Ht, t) => {
					switch (t.type) {
						case ze.p: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Wt = Object(n.c)({
					api: Dt,
					itemOrder: Ut,
					loadMore: qt
				});
			var Kt = (e = null, t) => {
				switch (t.type) {
					case ze.w:
					case ze.v:
						return null;
					case ze.u:
						return t.payload;
					default:
						return e
				}
			};
			var Vt = (e = !1, t) => {
					switch (t.type) {
						case ze.w:
							return !0;
						case ze.v:
						case ze.u:
							return !1;
						default:
							return e
					}
				},
				Qt = Object(n.c)({
					error: Kt,
					pending: Vt
				});
			const Gt = {};
			var Jt = (e = Gt, t) => {
				switch (t.type) {
					case ze.v: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Xt = {};
			var zt = (e = Xt, t) => {
					switch (t.type) {
						case ze.v: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Yt = Object(n.c)({
					api: Qt,
					itemOrder: Jt,
					loadMore: zt
				}),
				Zt = Object(n.c)({
					bulkAction: st,
					edited: mt,
					moderatedCommunitiesOrder: gt,
					modqueue: Ct,
					reports: Pt,
					spam: Wt,
					unmoderated: Yt
				});
			var $t = (e = null, t) => {
				switch (t.type) {
					case s.N:
					case s.L:
						return null;
					case s.K:
						return t.payload;
					default:
						return e
				}
			};
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case s.N: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(i.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case s.L:
						case s.K: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(i.d)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				rr = Object(n.c)({
					error: $t,
					pending: tr
				});
			const nr = {};
			var sr = (e = nr, t) => {
					switch (t.type) {
						case s.L: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(i.d)(n, r);
							return {
								...e,
								[s]: !0
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
					case s.L: {
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
			var lr = (e = cr, t) => {
				switch (t.type) {
					case s.M:
					case s.L: {
						const {
							subredditId: r,
							mutedUsers: n
						} = t.payload, s = {
							[r]: n
						};
						return Object(h.merge)(e, s)
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(h.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var ur = (e = null, t) => {
				switch (t.type) {
					case s.Q:
					case s.P:
						return null;
					case s.O:
						return t.payload;
					default:
						return e
				}
			};
			var mr = (e = !1, t) => {
					switch (t.type) {
						case s.Q:
							return !0;
						case s.P:
						case s.O:
							return !1;
						default:
							return e
					}
				},
				pr = Object(n.c)({
					error: ur,
					pending: mr
				});
			var hr = (e = null, t) => {
					switch (t.type) {
						case s.Q:
						case s.O:
							return null;
						case s.P: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				br = Object(n.c)({
					api: pr,
					result: hr
				});
			const fr = {};
			var yr = (e = fr, t) => {
					switch (t.type) {
						case s.L: {
							const {
								subredditId: r,
								mutedUserIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case s.R: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case s.M: {
							const {
								subredditId: r,
								mutedUserIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				vr = Object(n.c)({
					api: rr,
					fetchedTokens: sr,
					inContext: ir,
					loadMore: dr,
					models: lr,
					search: br,
					userOrder: yr
				});
			t.a = Object(n.c)({
				approvedSubmitters: I,
				flairedUsers: K,
				moderationLog: oe,
				moderators: Ge,
				modQueue: Zt,
				muted: vr
			})
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
				experimentName: n.ud,
				experimentEligibilitySelector: s.a
			}) === n.zd.Enabled
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts");
			var n = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				s = r("./src/lib/objectSelector/index.ts"),
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
			const d = (e, t) => Object(n.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(s.a)((e, t) => {
					var r, n, s;
					const {
						pageName: o,
						page: i
					} = t, a = d(0, t);
					if (!(null === (s = null === (n = null === (r = e.pages.modHub.modQueue[o]) || void 0 === r ? void 0 : r.itemOrder) || void 0 === n ? void 0 : n[a]) || void 0 === s ? void 0 : s[i])) return;
					const c = e.pages.modHub.modQueue[o].itemOrder[a][i];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				l = (e, t) => {
					var r;
					const {
						pageName: n
					} = t;
					return null === (r = e.pages.modHub.modQueue[n]) || void 0 === r || !r.api || e.pages.modHub.modQueue[n].api.pending
				},
				u = (e, t) => {
					var r;
					const n = d(0, t);
					return null === (r = e.pages.modHub.modQueue[t.pageName]) || void 0 === r ? void 0 : r.loadMore[n]
				},
				m = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				h = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.82fa6a73271a4cee0ea7.js.map