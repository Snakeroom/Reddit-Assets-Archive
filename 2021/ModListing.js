// https://www.redditstatic.com/desktop2x/ModListing.46617ccf8fd6d113ba50.js
// Retrieved at 12/6/2021, 12:20:04 PM by Reddit Dataminer v1.0.0
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
				return P
			})), r.d(t, "modListingPageRequested", (function() {
				return F
			})), r.d(t, "morePostsPending", (function() {
				return R
			})), r.d(t, "morePostsLoaded", (function() {
				return D
			})), r.d(t, "morePostsFailed", (function() {
				return A
			})), r.d(t, "moreModListingRequested", (function() {
				return H
			})), r.d(t, "hideSubredditSuccess", (function() {
				return q
			})), r.d(t, "hideSubredditPending", (function() {
				return K
			})), r.d(t, "hideSubredditFailed", (function() {
				return W
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return V
			})), r.d(t, "unhideSubredditPending", (function() {
				return Q
			})), r.d(t, "unhideSubredditFailed", (function() {
				return J
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return G
			})), r.d(t, "hideSubreddit", (function() {
				return X
			})), r.d(t, "unhideSubreddit", (function() {
				return Y
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
					method: i.jb.GET
				});
			const O = (e, t, r, n) => Object(h.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(v.c)(r)}`,
					method: n ? i.jb.PUT : i.jb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(v.h)(r)
						})
					}
				}),
				_ = (e, t, r) => O(e, t, r, !0),
				j = (e, t, r) => O(e, t, r, !1);
			var w = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				E = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				I = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = r("./src/reddit/helpers/trackers/screenview.ts"),
				S = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/routes/modListing/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				M = r("./src/reddit/actions/pages/modListing/constants.ts");
			const L = Object(a.a)(M.f),
				T = Object(a.a)(M.e),
				P = Object(a.a)(M.d),
				B = (e, t) => async (r, s, o) => {
					const i = s();
					if (i.listings.postOrder.api.pending[e]) return;
					r(L({
						key: e
					}));
					const a = await Object(I.a)("modListing", () => x(o.apiContext(), t)),
						d = `error-${e}`;
					a.ok ? (r(T({
						key: e,
						meta: i.meta,
						...a.body
					})), r(l.g(d))) : (r(P({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(E.a)(r, i) : r(l.f({
						id: d,
						kind: S.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: B(e, t)
					})))
				}, F = (e, t) => async (r, s) => {
					const {
						sort: a = i.X
					} = e.params, l = Object(k.d)(e.path), p = l ? u.f : u.e, h = Object(d.a)(p, a, e.queryParams), b = s(), f = b.listings.postOrder.ids[h], y = b.listings.postOrder.api.error[h];
					if (b.listings.postOrder.api.pending[h] || f && !y && !t) return void(f && r(c.m({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const v = U(e.queryParams);
					await r(B(h, {
						...o()(e.queryParams, m.l),
						...o()(e.queryParams, m.k),
						filtered: !!l || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(w.a)(a, v)
					})), r(c.m({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(s(), !0)
				}, R = Object(a.a)(M.i), D = Object(a.a)(M.h), A = Object(a.a)(M.g), H = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						a = s.platform.currentPage;
					if (!a) return;
					const {
						sort: c = i.X
					} = e, l = a.queryParams, p = Object(k.d)(a.url), h = p ? u.f : u.e, b = Object(d.a)(h, c, l), f = s.listings.postOrder.loadMore[b];
					if (!f) return;
					const y = s.listings.postOrder.api.pending[b],
						v = s.listings.postOrder.fetchedTokens,
						g = !(!v[b] || !v[b][f.token]);
					if (y || g) return;
					const O = U(l);
					t(R({
						key: b,
						fetchedToken: f.token
					}));
					const _ = await x(n(), {
							after: f.token,
							dist: f.dist,
							filtered: !!p || void 0,
							sort: c,
							t: Object(w.a)(c, O),
							...o()(l, m.l)
						}),
						j = s.listings.postOrder.ids[b],
						E = {
							..._.body,
							postIds: (_.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					_.ok ? t(D({
						key: b,
						fetchedToken: f.token,
						meta: s.meta,
						...E
					})) : t(A({
						key: b,
						error: _.error,
						fetchedToken: f.token,
						...E
					}))
				};

			function U(e) {
				const t = m.A in e && e[m.A].toUpperCase() || "";
				return t in i.fc && i.fc[t]
			}
			const q = Object(a.a)(M.c),
				K = Object(a.a)(M.b),
				W = Object(a.a)(M.a),
				V = Object(a.a)(M.l),
				Q = Object(a.a)(M.k),
				J = Object(a.a)(M.j),
				G = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const o = n(),
						i = Object(N.k)(o),
						[a, d, c, l] = t ? [K, q, W, _] : [Q, V, J, j];
					if (!i || !i.displayText) return;
					const {
						currentPage: u
					} = o.platform;
					if (!u || !u.routeMatch) return;
					r(a(e));
					const m = await l(s(), i.displayText, e);
					m.ok ? (await r(F(u.routeMatch.match, !0)), r(d(e))) : r(c(m.body))
				}, X = e => G(e, !0), Y = e => G(e, !1)
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/pageTitle.ts"),
				s = r("./src/reddit/actions/gold/powerups.ts"),
				o = r("./src/reddit/actions/platform.ts"),
				i = r("./src/reddit/actions/subreddit.ts"),
				a = r("./src/reddit/actions/users.ts"),
				d = r("./src/reddit/selectors/moderatorPermissions.ts"),
				c = r("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				if (e(Object(o.m)({
						title: Object(n.g)()
					})), await e(Object(a.t)()), !Object(c.K)(t())) return;
				await e(Object(i.q)());
				const r = Object(d.a)(t());
				r && r.length && await e(Object(s.d)(r))
			}
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
					}, o.a.createElement(c.t, {
						kind: c.b.Button,
						priority: c.c.Plain,
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
				return O
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "d", (function() {
				return I
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
				O = s.a.wrapped(d.a, "ModalInput", u.a),
				_ = s.a.label("ModalInputLabel", u.a),
				j = s.a.footer("ModalFooter", u.a),
				w = s.a.header("ModalHeader", u.a),
				E = s.a.div("ModalTitle", u.a),
				I = s.a.div("ModalAnnotation", u.a),
				C = s.a.div("ModalMain", u.a),
				S = s.a.textarea("TextArea", u.a),
				k = s.a.wrapped(a.l, "WarningButton", u.a),
				N = s.a.wrapped(a.l, "PrimaryButton", u.a),
				M = s.a.wrapped(a.o, "CancelButton", u.a),
				L = s.a.wrapped(a.r, "RemoveButton", u.a),
				T = ({
					className: e,
					...t
				}) => i.a.createElement(a.t, m({
					kind: a.b.Button,
					priority: a.c.Primary,
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
				return w
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
					subredditOrProfile: u.H
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
				O = r.n(x);
			const _ = h.a.div("CommunityCount", O.a),
				j = h.a.wrapped(g, "SubredditsOrProfiles", O.a),
				w = h.a.wrapped(i.a, "SidebarSubreddit", O.a),
				E = h.a.wrapped(i.a, "ModalSubreddit", O.a);
			var I;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(I || (I = {}));
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
				} = e, d = t ? w : E, c = r.length, l = t && r.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(_, null, n.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [n.fbt._plural(c, "number"), n.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), c > 0 && o.a.createElement(j, {
					subredditsOrProfilesIds: t ? r.slice(0, 4) : r
				}, (t, r) => o.a.createElement(d, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, r)), c > 0 && l && o.a.createElement(a.r, {
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
				O = a(x, ({
					interactive: e
				}) => !1 !== e, g);
			var _ = e => s.a.createElement(f.a, {
					className: O(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				j = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				w = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				E = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				C = r.n(I);

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
					[C.a.dark]: Object(w.b)(Object(j.a)(e)),
					[C.a.nightmode]: e.isNightMode
				}),
				N = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(E.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						isNightMode: i,
						voteState: a,
						compact: d,
						...l
					} = e;
					return s.a.createElement("button", S({}, l, {
						className: Object(o.a)(C.a.customDownvote, k(e), {
							[C.a.voted]: e.voteState === c.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				M = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(E.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						isNightMode: i,
						voteState: a,
						compact: d,
						...l
					} = e;
					return s.a.createElement("button", S({}, l, {
						className: Object(o.a)(C.a.customUpvote, k(e), {
							[C.a.voted]: e.voteState === c.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				L = b,
				T = _
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
				return O
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "p", (function() {
				return E
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
				O = 1250,
				_ = 82,
				j = 48,
				w = 36,
				E = 40
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
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
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
				a = Object(n.createContext)(i);

			function d(e) {
				const t = t => s.a.createElement(a.Consumer, null, ({
					apiContext: r,
					gqlContext: n
				}) => s.a.createElement(e, o({
					apiContext: r,
					gqlContext: n
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
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
			r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "s", (function() {
				return E
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "i", (function() {
				return M
			})), r.d(t, "j", (function() {
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
						kind: O = h.Button,
						priority: _ = m.Primary,
						redditStyle: j,
						size: w = u.S,
						text: E,
						textClassName: I,
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
						priority: _,
						redditStyle: j,
						size: w,
						text: E
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
						text: E,
						Icon: r,
						iconClassName: n,
						iconPosition: i,
						priority: _,
						textClassName: I
					});
					return O === h.InternalLink && (e => "to" in e)(C) ? s.a.createElement(f, c({}, l, C, {
						className: S
					}), k) : O === h.ExternalLink && (e => "href" in e)(C) ? s.a.createElement(y, c({}, l, C, {
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
				O = e => s.a.createElement(b, c({
					kind: h.Button,
					priority: m.Primary
				}, e)),
				_ = e => s.a.createElement(b, c({
					kind: h.ExternalLink,
					priority: m.Secondary
				}, e)),
				j = e => s.a.createElement(b, c({
					kind: h.InternalLink,
					priority: m.Secondary
				}, e)),
				w = e => s.a.createElement(b, c({
					kind: h.Button,
					priority: m.Secondary
				}, e)),
				E = e => s.a.createElement(b, c({
					kind: h.InternalLink,
					priority: m.Plain
				}, e)),
				I = e => s.a.createElement(b, c({
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
			t.t = b
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				f = Object(o.b)(b);
			t.a = h(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: r,
				dispatch: n,
				fitPageToContent: o,
				forcedLayout: i,
				isCollectionLayout: l,
				isEditing: u,
				layout: h,
				pageLayer: b,
				...f
			}) => s.a.createElement("div", p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: h === d.g.Large || Object(c.N)(b),
					[m.a.mDisableFullScreen]: r && !l,
					[m.a.mClassicWidth]: l,
					[m.a.mIsEditing]: !!u,
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
					forcedLayout: O,
					hideOnlyChildMargin: _,
					isCollectionLayout: j,
					isPageSwapped: w,
					maxWidth: E,
					navBar: I,
					redditStyle: C,
					sidebar: S,
					sidebars: k,
					trendingUnit: N,
					subredditId: M
				} = e, L = N ? "28px" : "0", T = w ? {
					marginRight: `${d.q}px`,
					marginTop: L
				} : {
					marginLeft: `${d.q}px`,
					marginTop: L
				}, P = S && s.a.createElement("div", {
					className: Object(a.a)(h.a.sidebar, j ? h.a["m-collectionLayout"] : h.a.defaultLayout),
					style: T
				}, S), B = s.a.createElement(i.a, {
					hideOnlyChildMargin: _,
					className: y,
					disableFullscreen: g,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: j
				}, f, b);
				let F;
				F = k ? s.a.createElement(s.a.Fragment, null, k[0], B, k[1]) : w ? s.a.createElement(s.a.Fragment, null, P, B) : s.a.createElement(s.a.Fragment, null, B, P);
				const R = g ? `${E||l.a+2*d.m}px` : "100%",
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
				}, I), v, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: R
					}
				}, N), s.a.createElement("div", {
					className: h.a.body,
					style: {
						maxWidth: R
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
				O = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				j = r("./src/reddit/controls/TextButton/index.tsx"),
				w = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				E = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				I = r("./src/reddit/selectors/activeModalId.ts"),
				C = r("./src/reddit/selectors/modQueue.ts"),
				S = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				k = r.n(S);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), M = Object(g.a)(e => i.a.createElement(O.e, {
				className: k.a.modalBody
			}, i.a.createElement(O.i, null, i.a.createElement(E.a, null, i.a.createElement(O.q, {
				className: k.a.modalTitle
			}, i.a.createElement(w.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(j.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(O.b, null)))), i.a.createElement(O.l, {
				className: k.a.modalMain
			}, i.a.createElement("div", {
				className: k.a.modalDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(_.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), L = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: k.a.feedDetailsTitle
			}, i.a.createElement(w.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: k.a.feedDetailsDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(_.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: k.a.loadingBar
			})), T = Object(d.c)({
				isModalOpen: Object(I.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.e
			});
			var P = Object(a.b)(T, (e, {}) => ({
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
				B = r("./node_modules/react-router-redux/es/index.js"),
				F = r("./src/reddit/components/TrackingHelper/index.tsx"),
				R = r("./src/reddit/contexts/PageLayer/index.tsx"),
				D = r("./src/reddit/controls/Button/index.tsx");
			const A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				H = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				U = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var q = r("./src/reddit/routes/modListing/index.ts");
			const K = e => e.modListingPage.filteredSubreddits.api.pending;
			var W = r("./src/reddit/constants/keycodes.ts"),
				V = r("./src/reddit/layout/row/Inline/index.tsx"),
				Q = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				J = r.n(Q);
			const G = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: K
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
						e.key === W.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(V.a, null, i.a.createElement("input", {
						className: J.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: v.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), i.a.createElement(D.l, {
						"aria-label": v.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: J.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, v.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && i.a.createElement("div", {
						className: J.a.errorText
					}, e.apiError.explanation))
				}
			}
			var Y = Object(a.b)(G, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(F.c)(X)),
				z = r("./src/lib/lessComponent.tsx"),
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
			const ie = z.a.wrapped(Z.b, "SubredditIcon", oe.a),
				ae = Object(d.c)({
					isApiPending: K,
					subredditOrProfile: (e, t) => {
						const r = Object(ne.v)(e, {
							subredditName: t.subredditName
						});
						if (!r) {
							const r = (e => e.startsWith(c.hc) ? e.slice(2) : e)(t.subredditName);
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
				}))(Object(F.c)(de)),
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(R.u)({
				filtered: e => !!e && Object(q.d)(e.url)
			}), ve = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ge extends i.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(U(this.props.filtered)), this.props.toggleFiltered()
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
					})), i.a.createElement(D.r, {
						className: be.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? fe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : fe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && i.a.createElement("div", {
						className: be.a.inputContainer
					}, i.a.createElement(Y, null), i.a.createElement(pe, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var xe = ye(Object(a.b)(ve, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(B.b)(t ? q.a : q.b))
				}))(Object(F.c)(ge))),
				Oe = r("./src/reddit/components/SidebarContainer/index.tsx"),
				_e = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				je = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var we = () => i.a.createElement(Oe.a, null, i.a.createElement(je.a, {
					title: v.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(P, null), i.a.createElement(xe, null)), i.a.createElement(_e.a, null)),
				Ee = r("./src/reddit/constants/page.ts"),
				Ie = r("./src/reddit/constants/parameters.ts"),
				Ce = r("./src/reddit/helpers/trackers/screenview.ts"),
				Se = r("./src/reddit/layout/page/Listing/index.tsx"),
				ke = r("./src/reddit/selectors/moderatorPermissions.ts");
			const Ne = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || c.W.HOT, (e, {
					match: t
				}) => Object(q.d)(t.path), ke.j, ke.d, (e, t, r, n, o) => {
					const i = s()([...Object(l.a)(e)]),
						a = Ie.A in i && i[Ie.A].toUpperCase(),
						d = "string" == typeof a && a in c.fc ? c.fc[a] : c.gc,
						m = r ? Ee.f : Ee.e;
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
						sidebar: i.a.createElement(we, null)
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
				O = Object(n.c)({
					api: g,
					result: x
				});
			const _ = {};
			var j = (e = _, t) => {
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
				w = Object(n.c)({
					api: c,
					fetchedTokens: u,
					loadMore: p,
					models: f,
					search: O,
					userOrder: j
				}),
				E = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var I = (e = null, t) => {
				switch (t.type) {
					case E.g:
					case E.i:
						return null;
					case E.f:
						return t.payload;
					default:
						return e
				}
			};
			var C = (e = !1, t) => {
					switch (t.type) {
						case E.i:
							return !0;
						case E.g:
						case E.f:
							return !1;
						default:
							return e
					}
				},
				S = Object(n.c)({
					error: I,
					pending: C
				}),
				k = r("./node_modules/lodash/merge.js"),
				N = r.n(k),
				M = r("./node_modules/lodash/omit.js"),
				L = r.n(M);
			const T = {};
			var P = (e = T, t) => {
				switch (t.type) {
					case E.g:
					case E.k: {
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
					case E.c: {
						const {
							subredditId: r,
							userName: n
						} = t.payload, s = L()(e[r], n);
						return {
							...e,
							[r]: s
						}
					}
					case E.a:
					case E.b:
					case E.h:
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
			const B = {};
			var F = (e = B, t) => {
				switch (t.type) {
					case E.g: {
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
			var R = (e = null, t) => {
				switch (t.type) {
					case E.l:
					case E.k:
						return null;
					case E.j:
						return t.payload;
					default:
						return e
				}
			};
			var D = (e = !1, t) => {
					switch (t.type) {
						case E.l:
							return !0;
						case E.k:
						case E.j:
							return !1;
						default:
							return e
					}
				},
				A = Object(n.c)({
					error: R,
					pending: D
				});
			var H = (e = null, t) => {
					switch (t.type) {
						case E.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case E.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				U = Object(n.c)({
					api: A,
					result: H
				});
			const q = {};
			var K = (e = q, t) => {
					switch (t.type) {
						case E.g: {
							const {
								key: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case E.a: {
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
						case E.c: {
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
				W = Object(n.c)({
					api: S,
					models: P,
					pageInfo: F,
					search: U,
					userOrder: K
				}),
				V = r("./src/reddit/actions/moderationLog/constants.ts");
			const Q = {};
			var J = (e = Q, t) => {
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
			const G = {};
			var X = (e = G, t) => {
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
				Y = Object(n.c)({
					itemOrder: J,
					models: X
				});
			var z = (e = null, t) => {
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
					actions: Y,
					endCursor: z,
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
			const Oe = {};
			var _e = (e = Oe, t) => {
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
				je = Object(n.c)({
					api: ve,
					models: xe,
					userOrder: _e
				});
			const we = {};
			var Ee = (e = we, t) => {
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
			const Ie = {};
			var Ce = (e = Ie, t) => {
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
				Pe = Object(n.c)({
					error: Le,
					pending: Te
				}),
				Be = r("./node_modules/lodash/isEqual.js"),
				Fe = r.n(Be);
			var Re = (e = null, t) => {
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
							return e && e.id === r && !Fe()(e.modPermissions, n) ? {
								...e,
								modPermissions: n
							} : e
						}
						default:
							return e
					}
				},
				De = Object(n.c)({
					api: Pe,
					result: Re
				});
			const Ae = {};
			var He = (e = Ae, t) => {
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
			const Ue = {};
			var qe = (e = Ue, t) => {
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
				Ke = Object(n.c)({
					error: He,
					pending: qe
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const We = {};
			var Ve = (e = We, t) => {
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
					api: Ke
				}),
				Je = Object(n.c)({
					editableModerators: ae,
					editableUserOrder: be,
					invitedModerators: je,
					invitePending: Ee,
					loadMoreModerators: ke,
					loadMoreEditableModerators: Ce,
					models: Me,
					search: De,
					userOrder: Qe
				}),
				Ge = r("./src/reddit/actions/bulkActions/constants.ts");
			var Xe = (e = null, t) => {
					switch (t.type) {
						case Ge.c:
						case Ge.b:
							return null;
						case Ge.a:
							return t.payload;
						default:
							return e
					}
				},
				Ye = r("./src/reddit/actions/modQueue/constants.ts");
			var ze = (e = !1, t) => {
					switch (t.type) {
						case Ge.c:
							return !0;
						case Ge.b:
						case Ge.a:
						case Ye.s:
						case Ye.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(n.c)({
					error: Xe,
					pending: ze
				});
			const $e = {};
			var et = (e = $e, t) => {
					switch (t.type) {
						case Ye.a: {
							const {
								ids: r
							} = t.payload, n = {};
							return r.forEach(e => n[e] = !0), {
								...e,
								...n
							}
						}
						case Ye.d: {
							const {
								ids: r
							} = t.payload;
							return L()(e, r)
						}
						case Ye.c: {
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
						case Ge.b: {
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
					case Ye.g:
					case Ye.f:
						return null;
					case Ye.e:
						return t.payload;
					default:
						return e
				}
			};
			var it = (e = !1, t) => {
					switch (t.type) {
						case Ye.g:
							return !0;
						case Ye.f:
						case Ye.e:
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
					case Ye.f: {
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
						case Ye.f: {
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
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case Ye.k: {
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
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: r
						} = e;
						return r
					}
					case Ye.k: {
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
					case Ye.b:
						return !0;
					default:
						return e
				}
			};
			var vt = (e = !1, t) => {
					switch (t.type) {
						case Ye.k:
							return !0;
						case Ye.b:
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
					case Ye.j:
					case Ye.i:
						return null;
					case Ye.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ot = (e = !1, t) => {
					switch (t.type) {
						case Ye.j:
							return !0;
						case Ye.i:
						case Ye.h:
							return !1;
						default:
							return e
					}
				},
				_t = Object(n.c)({
					error: xt,
					pending: Ot
				});
			const jt = {};
			var wt = (e = jt, t) => {
				switch (t.type) {
					case Ye.i: {
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
			const Et = {};
			var It = (e = Et, t) => {
					switch (t.type) {
						case Ye.i: {
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
					api: _t,
					itemOrder: wt,
					loadMore: It
				});
			var St = (e = null, t) => {
				switch (t.type) {
					case Ye.n:
					case Ye.m:
						return null;
					case Ye.l:
						return t.payload;
					default:
						return e
				}
			};
			var kt = (e = !1, t) => {
					switch (t.type) {
						case Ye.n:
							return !0;
						case Ye.m:
						case Ye.l:
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
					case Ye.m: {
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
			var Pt = (e = Tt, t) => {
					switch (t.type) {
						case Ye.m: {
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
				Bt = Object(n.c)({
					api: Nt,
					itemOrder: Lt,
					loadMore: Pt
				});
			var Ft = (e = null, t) => {
				switch (t.type) {
					case Ye.q:
					case Ye.p:
						return null;
					case Ye.o:
						return t.payload;
					default:
						return e
				}
			};
			var Rt = (e = !1, t) => {
					switch (t.type) {
						case Ye.q:
							return !0;
						case Ye.p:
						case Ye.o:
							return !1;
						default:
							return e
					}
				},
				Dt = Object(n.c)({
					error: Ft,
					pending: Rt
				});
			const At = {};
			var Ht = (e = At, t) => {
				switch (t.type) {
					case Ye.p: {
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
			const Ut = {};
			var qt = (e = Ut, t) => {
					switch (t.type) {
						case Ye.p: {
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
				Kt = Object(n.c)({
					api: Dt,
					itemOrder: Ht,
					loadMore: qt
				});
			var Wt = (e = null, t) => {
				switch (t.type) {
					case Ye.w:
					case Ye.v:
						return null;
					case Ye.u:
						return t.payload;
					default:
						return e
				}
			};
			var Vt = (e = !1, t) => {
					switch (t.type) {
						case Ye.w:
							return !0;
						case Ye.v:
						case Ye.u:
							return !1;
						default:
							return e
					}
				},
				Qt = Object(n.c)({
					error: Wt,
					pending: Vt
				});
			const Jt = {};
			var Gt = (e = Jt, t) => {
				switch (t.type) {
					case Ye.v: {
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
			var Yt = (e = Xt, t) => {
					switch (t.type) {
						case Ye.v: {
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
				zt = Object(n.c)({
					api: Qt,
					itemOrder: Gt,
					loadMore: Yt
				}),
				Zt = Object(n.c)({
					bulkAction: st,
					edited: mt,
					moderatedCommunitiesOrder: gt,
					modqueue: Ct,
					reports: Bt,
					spam: Kt,
					unmoderated: zt
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
				approvedSubmitters: w,
				flairedUsers: W,
				moderationLog: oe,
				moderators: Je,
				modQueue: Zt,
				muted: vr
			})
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/actions/pages/powerups.ts");
			const i = "/powerups",
				a = {
					action: o.a,
					chunk: s.s.POWERUPS,
					component: Object(n.a)({
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
						name: s.Mb.POWERUPS
					},
					path: i
				};
			t.b = a
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
					experimentName: n.Yd,
					experimentEligibilitySelector: s.a
				}) === n.he.Enabled,
				i = e => Object(s.c)(e, {
					experimentName: n.Zd,
					experimentEligibilitySelector: s.a,
					expEventOverride: !1
				}) === n.ie.Enabled
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.46617ccf8fd6d113ba50.js.map