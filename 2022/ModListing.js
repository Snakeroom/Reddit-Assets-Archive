// https://www.redditstatic.com/desktop2x/ModListing.4fab1b350e50f69ea468.js
// Retrieved at 1/4/2022, 10:50:11 AM by Reddit Dataminer v1.0.0
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
							for (var n, o, i, d, u, l, p, m, h = a(r), b = c(r), f = !1; !f;) {
								var y = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (f = !0, y = s) : b != t.body && b != t.documentElement && "visible" != v.overflow && (y = a(b)), y && (n = y, o = h, i = void 0, d = void 0, u = void 0, l = void 0, p = void 0, m = void 0, i = Math.max(n.top, o.top), d = Math.min(n.bottom, o.bottom), u = Math.max(n.left, o.left), l = Math.min(n.right, o.right), m = d - i, !(h = (p = l - u) >= 0 && m >= 0 && {
										top: i,
										bottom: d,
										left: u,
										right: l,
										width: p,
										height: m
									}))) break;
								b = c(b)
							}
							return h
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
				return b
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
				p = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ({
				className: e,
				isVisible: t,
				...r
			}) => n.a.createElement("div", m({
				className: Object(o.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, r));

			function b(e) {
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
							...m
						} = t, b = m;
						return n.a.createElement(a.a, {
							container: document.getElementById(c.b)
						}, n.a.createElement(h, {
							className: d,
							isVisible: l,
							onClick: this.onOverlayClick,
							style: u
						}, n.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(p.a.modal, r),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, n.a.createElement(e, b))))
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
				return L
			})), r.d(t, "modListingDataFailed", (function() {
				return P
			})), r.d(t, "modListingPageRequested", (function() {
				return B
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
				return V
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return W
			})), r.d(t, "unhideSubredditPending", (function() {
				return Q
			})), r.d(t, "unhideSubredditFailed", (function() {
				return J
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return G
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
				p = r("./src/reddit/constants/parameters.ts"),
				m = r("./src/config.ts"),
				h = r("./src/lib/makeApiRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				y = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/helpers/name/index.ts"),
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				x = (e, t) => Object(h.a)(e, {
					data: t,
					endpoint: Object(y.a)(Object(g.a)(`${m.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.jb.GET
				});
			const O = (e, t, r, s) => Object(h.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(v.c)(r)}`,
					method: s ? i.jb.PUT : i.jb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(v.h)(r)
						})
					}
				}),
				_ = (e, t, r) => O(e, t, r, !0),
				j = (e, t, r) => O(e, t, r, !1);
			var w = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				E = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = r("./src/reddit/helpers/trackers/screenview.ts"),
				M = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/routes/modListing/index.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/pages/modListing/constants.ts");
			const T = Object(a.a)(N.f),
				L = Object(a.a)(N.e),
				P = Object(a.a)(N.d),
				F = (e, t) => async (r, n, o) => {
					const i = n();
					if (i.listings.postOrder.api.pending[e]) return;
					r(T({
						key: e
					}));
					const a = await Object(E.a)("modListing", () => x(o.apiContext(), t)),
						d = `error-${e}`;
					a.ok ? (r(L({
						key: e,
						meta: i.meta,
						...a.body
					})), r(u.g(d))) : (r(P({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(I.a)(r, i) : r(u.f({
						id: d,
						kind: M.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: F(e, t)
					})))
				}, B = (e, t) => async (r, n) => {
					const {
						sort: a = i.X
					} = e.params, u = Object(S.d)(e.path), m = u ? l.f : l.e, h = Object(d.a)(m, a, e.queryParams), b = n(), f = b.listings.postOrder.ids[h], y = b.listings.postOrder.api.error[h];
					if (b.listings.postOrder.api.pending[h] || f && !y && !t) return void(f && r(c.m({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const v = U(e.queryParams);
					await r(F(h, {
						...o()(e.queryParams, p.m),
						...o()(e.queryParams, p.l),
						filtered: !!u || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(w.a)(a, v)
					})), r(c.m({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(n(), !0)
				}, R = Object(a.a)(N.i), D = Object(a.a)(N.h), A = Object(a.a)(N.g), H = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						a = n.platform.currentPage;
					if (!a) return;
					const {
						sort: c = i.X
					} = e, u = a.queryParams, m = Object(S.d)(a.url), h = m ? l.f : l.e, b = Object(d.a)(h, c, u), f = n.listings.postOrder.loadMore[b];
					if (!f) return;
					const y = n.listings.postOrder.api.pending[b],
						v = n.listings.postOrder.fetchedTokens,
						g = !(!v[b] || !v[b][f.token]);
					if (y || g) return;
					const O = U(u);
					t(R({
						key: b,
						fetchedToken: f.token
					}));
					const _ = await x(s(), {
							after: f.token,
							dist: f.dist,
							filtered: !!m || void 0,
							sort: c,
							t: Object(w.a)(c, O),
							...o()(u, p.m)
						}),
						j = n.listings.postOrder.ids[b],
						I = {
							..._.body,
							postIds: (_.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					_.ok ? t(D({
						key: b,
						fetchedToken: f.token,
						meta: n.meta,
						...I
					})) : t(A({
						key: b,
						error: _.error,
						fetchedToken: f.token,
						...I
					}))
				};

			function U(e) {
				const t = p.B in e && e[p.B].toUpperCase() || "";
				return t in i.fc && i.fc[t]
			}
			const q = Object(a.a)(N.c),
				K = Object(a.a)(N.b),
				V = Object(a.a)(N.a),
				W = Object(a.a)(N.l),
				Q = Object(a.a)(N.k),
				J = Object(a.a)(N.j),
				G = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const o = s(),
						i = Object(k.k)(o),
						[a, d, c, u] = t ? [K, q, V, _] : [Q, W, J, j];
					if (!i || !i.displayText) return;
					const {
						currentPage: l
					} = o.platform;
					if (!l || !l.routeMatch) return;
					r(a(e));
					const p = await u(n(), i.displayText, e);
					p.ok ? (await r(B(l.routeMatch.match, !0)), r(d(e))) : r(c(p.body))
				}, z = e => G(e, !0), X = e => G(e, !1)
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/pageTitle.ts"),
				n = r("./src/reddit/actions/gold/powerups.ts"),
				o = r("./src/reddit/actions/platform.ts"),
				i = r("./src/reddit/actions/subreddit.ts"),
				a = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/actions/users.ts"),
				c = r("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				l = r("./src/reddit/selectors/subscriptions.ts"),
				p = r("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const r = t();
				if (e(Object(o.m)({
						title: Object(s.h)()
					})), await e(Object(d.t)()), !Object(p.K)(r)) return;
				await e(Object(i.q)());
				const m = Object(c.b)(r),
					h = Object(u.a)(r);
				if (m) return await e(Object(n.d)(h));
				await e(Object(a.e)()), await e(Object(n.o)());
				const b = Object(l.c)(r);
				if (b && b.length) {
					const t = b.map(e => e.id);
					await e(Object(n.d)(t))
				}
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/componentSizes.ts"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/JumpToContent/index.m.less"),
				l = r.n(u);
			const p = Object(n.createContext)(null),
				m = Object(n.createContext)(null);
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
					return o.a.createElement(p.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(m.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const b = a.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(n.useState)("-500px"), r = Object(n.useContext)(d.a);
					return o.a.createElement(p.Consumer, null, n => n && o.a.createElement("div", {
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
							n.focus(), n.scrollIntoView(), window.scrollBy(0, -b)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(i.a)(l.a.rightBorder, {
							[l.a.rightBorderExp]: r
						})
					})))
				}),
				y = o.a.memo(() => o.a.createElement(m.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
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
				return m
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
				return I
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "t", (function() {
				return M
			})), r.d(t, "u", (function() {
				return S
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "c", (function() {
				return L
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

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.wrapped(c.a, "CloseIcon", l.a),
				h = n.a.section("ModalBody", l.a),
				b = n.a.section("ModalPostPreview", l.a),
				f = n.a.p("ModalText", l.a),
				y = n.a.div("ModalSmallText", l.a),
				v = n.a.div("ModalDescriptionText", l.a),
				g = n.a.div("ModalMetaText", l.a),
				x = n.a.label("ModalFormItem", l.a),
				O = n.a.wrapped(d.a, "ModalInput", l.a),
				_ = n.a.label("ModalInputLabel", l.a),
				j = n.a.footer("ModalFooter", l.a),
				w = n.a.header("ModalHeader", l.a),
				I = n.a.div("ModalTitle", l.a),
				E = n.a.div("ModalAnnotation", l.a),
				C = n.a.div("ModalMain", l.a),
				M = n.a.textarea("TextArea", l.a),
				S = n.a.wrapped(a.l, "WarningButton", l.a),
				k = n.a.wrapped(a.l, "PrimaryButton", l.a),
				N = n.a.wrapped(a.o, "CancelButton", l.a),
				T = n.a.wrapped(a.r, "RemoveButton", l.a),
				L = ({
					className: e,
					...t
				}) => i.a.createElement(a.t, p({
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
				p = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				m = r.n(p),
				h = r("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(u.b, "SubredditIcon", m.a),
				f = h.a.span("Label", m.a),
				y = Object(c.c)({
					subredditOrProfile: l.J
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
					const s = r.map(t => o.a.createElement(v, {
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
			const _ = h.a.div("CommunityCount", O.a),
				j = h.a.wrapped(g, "SubredditsOrProfiles", O.a),
				w = h.a.wrapped(i.a, "SidebarSubreddit", O.a),
				I = h.a.wrapped(i.a, "ModalSubreddit", O.a);
			var E;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(E || (E = {}));
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
				return k
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "d", (function() {
				return L
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
			const p = {
					...l.a,
					baseClassName: l.a.Downvote
				},
				m = ({
					voteState: e
				}) => e === c.a.downvoted,
				h = a(m, ({
					interactive: e
				}) => !1 !== e, p);
			var b = e => n.a.createElement(d.a, {
					className: h(e),
					compact: e.compact,
					isFilled: m(e)
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
			var _ = e => n.a.createElement(f.a, {
					className: O(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				j = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				w = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				C = r.n(E);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => Object(o.a)({
					[C.a.compact]: e.compact,
					[C.a.dark]: Object(w.b)(Object(j.a)(e)),
					[C.a.nightmode]: e.isNightMode
				}),
				k = Object(i.a)(e => {
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
					return n.a.createElement("button", M({}, u, {
						className: Object(o.a)(C.a.customDownvote, S(e), {
							[C.a.voted]: e.voteState === c.a.downvoted
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
					return n.a.createElement("button", M({}, u, {
						className: Object(o.a)(C.a.customUpvote, S(e), {
							[C.a.voted]: e.voteState === c.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				T = b,
				L = _
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
				return p
			})), r.d(t, "m", (function() {
				return m
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
				p = 48,
				m = 24,
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
			class p extends n.a.Component {
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
			})(p)
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
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = r.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...r
			}) => n.a.createElement("svg", d({
				className: Object(o.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), n.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
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
				return p
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
			const p = Object(i.a)(e => {
				const {
					backgroundColor: t,
					className: r,
					redditStyle: s,
					theme: i,
					...c
				} = e, p = Object(d.a)(e), m = {
					"--pseudo-before-background": t || Object(a.g)(p.canvas, p.canvasImgUrl, p.canvasImgPosition)
				};
				return n.a.createElement("div", l({
					className: Object(o.a)(u.a.backgroundContainer, r),
					style: m
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
				p = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(c.u)(),
				b = Object(i.c)({
					isEditing: u.i,
					layout: (e, t) => t.forcedLayout || Object(c.Q)(e, t)
				}),
				f = Object(o.b)(b);
			t.a = h(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: r,
				dispatch: s,
				fitPageToContent: o,
				forcedLayout: i,
				isCollectionLayout: u,
				isEditing: l,
				layout: h,
				pageLayer: b,
				...f
			}) => n.a.createElement("div", m({
				className: Object(a.a)(e, p.a.styledContent, {
					[p.a.mLargePostLayout]: h === d.g.Large || Object(c.N)(b),
					[p.a.mDisableFullScreen]: r && !u,
					[p.a.mClassicWidth]: u,
					[p.a.mIsEditing]: !!l,
					[p.a.mCanFlexFullWidth]: !o,
					[p.a.onlyChildMargin]: !t
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
				p = r("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				m = r("./src/reddit/layout/page/Listing/index.m.less"),
				h = r.n(m);
			t.a = e => {
				const {
					backgroundColor: t,
					className: r,
					containerRef: m,
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
					maxWidth: I,
					navBar: E,
					redditStyle: C,
					sidebar: M,
					sidebars: S,
					trendingUnit: k,
					subredditId: N
				} = e, T = k ? "28px" : "0", L = w ? {
					marginRight: `${d.q}px`,
					marginTop: T
				} : {
					marginLeft: `${d.q}px`,
					marginTop: T
				}, P = M && n.a.createElement("div", {
					className: Object(a.a)(h.a.sidebar, j ? h.a["m-collectionLayout"] : h.a.defaultLayout),
					style: L
				}, M), F = n.a.createElement(i.a, {
					hideOnlyChildMargin: _,
					className: y,
					disableFullscreen: g,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: j
				}, f, b);
				let B;
				B = S ? n.a.createElement(n.a.Fragment, null, S[0], F, S[1]) : w ? n.a.createElement(n.a.Fragment, null, P, F) : n.a.createElement(n.a.Fragment, null, F, P);
				const R = g ? `${I||u.a+2*d.m}px` : "100%",
					D = Object(s.useContext)(l.a);
				return n.a.createElement(p.a, {
					subredditId: N
				}, n.a.createElement("div", {
					className: Object(a.a)(h.a.outerContainer, c.i, r, {
						[h.a.outerContainerExp]: D
					}),
					ref: m
				}, n.a.createElement(o.a, {
					className: c.h,
					redditStyle: C,
					backgroundColor: t
				}), n.a.createElement("div", {
					className: h.a.innerContainer
				}, E, v, (e => e.hero ? n.a.createElement(n.a.Fragment, null, e.hero) : null)(e), n.a.createElement("div", {
					style: {
						maxWidth: R
					}
				}, k), n.a.createElement("div", {
					className: h.a.body,
					style: {
						maxWidth: R
					}
				}, B))))
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
				p = r("./src/reddit/actions/pages/modListing/index.ts"),
				m = r("./src/reddit/components/EmptySubreddit.tsx"),
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
				I = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				E = r("./src/reddit/selectors/activeModalId.ts"),
				C = r("./src/reddit/selectors/modQueue.ts"),
				M = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				S = r.n(M);
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = Object(g.a)(e => i.a.createElement(O.e, {
				className: S.a.modalBody
			}, i.a.createElement(O.i, null, i.a.createElement(I.a, null, i.a.createElement(O.q, {
				className: S.a.modalTitle
			}, i.a.createElement(w.a, {
				className: S.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(j.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(O.b, null)))), i.a.createElement(O.l, {
				className: S.a.modalMain
			}, i.a.createElement("div", {
				className: S.a.modalDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(_.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), T = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: S.a.feedDetailsTitle
			}, i.a.createElement(w.a, {
				className: S.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: S.a.feedDetailsDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(_.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: S.a.loadingBar
			})), L = Object(d.c)({
				isModalOpen: Object(E.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.e
			});
			var P = Object(a.b)(L, (e, {}) => ({
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
				F = r("./node_modules/react-router-redux/es/index.js"),
				B = r("./src/reddit/components/TrackingHelper/index.tsx"),
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
			var V = r("./src/reddit/constants/keycodes.ts"),
				W = r("./src/reddit/layout/row/Inline/index.tsx"),
				Q = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				J = r.n(Q);
			const G = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: K
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
						this.canSubmitInput() && (this.props.sendEvent(A()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === V.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(W.a, null, i.a.createElement("input", {
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
			var X = Object(a.b)(G, e => ({
					hide: t => e(Object(p.hideSubreddit)(t))
				}))(Object(B.c)(z)),
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
					isApiPending: K,
					subredditOrProfile: (e, t) => {
						const r = Object(se.w)(e, {
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
					unhide: t => e(Object(p.unhideSubreddit)(t))
				}))(Object(B.c)(de)),
				ue = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				le = r.n(ue);
			const {
				fbt: pe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var me = ({
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
					}, pe._("Viewing all communities", null, {
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
					}, i.a.createElement(X, null), i.a.createElement(me, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var xe = ye(Object(a.b)(ve, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(F.b)(t ? q.a : q.b))
				}))(Object(B.c)(ge))),
				Oe = r("./src/reddit/components/SidebarContainer/index.tsx"),
				_e = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				je = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var we = () => i.a.createElement(Oe.a, null, i.a.createElement(je.a, {
					title: v.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(P, null), i.a.createElement(xe, null)), i.a.createElement(_e.a, null)),
				Ie = r("./src/reddit/constants/page.ts"),
				Ee = r("./src/reddit/constants/parameters.ts"),
				Ce = r("./src/reddit/helpers/trackers/screenview.ts"),
				Me = r("./src/reddit/layout/page/Listing/index.tsx"),
				Se = r("./src/reddit/selectors/moderatorPermissions.ts");
			const ke = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || c.W.HOT, (e, {
					match: t
				}) => Object(q.d)(t.path), Se.j, Se.d, (e, t, r, s, o) => {
					const i = n()([...Object(u.a)(e)]),
						a = Ee.B in i && i[Ee.B].toUpperCase(),
						d = "string" == typeof a && a in c.fc ? c.fc[a] : c.gc,
						p = r ? Ie.f : Ie.e;
					return {
						filtered: r,
						isModerator: s,
						isModeratorWithPostPerms: o,
						listingKey: Object(l.a)(p, t, i),
						listingName: p,
						sort: t,
						timeSort: d
					}
				}),
				Ne = Object(a.b)(ke, (e, t) => ({
					onLoadMorePosts: () => e(p.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Te extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Ce.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e
					}), this.renderEmptySubreddit = () => i.a.createElement(m.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? q.b : q.a;
					return i.a.createElement("div", null, this.props.isModeratorWithPostPerms ? i.a.createElement(Me.a, {
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
			t.default = Ne(Te)
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
							} = t.payload, n = Object(i.d)(r, s);
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
							} = t.payload, n = Object(i.d)(r, s);
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
						} = t.payload, n = Object(i.d)(s, r);
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var m = (e = p, t) => {
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
				h = r("./node_modules/icepick/icepick.js");
			const b = {};
			var f = (e = b, t) => {
				switch (t.type) {
					case n.d:
					case n.f: {
						const {
							subredditId: r,
							approvedSubmitters: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(h.merge)(e, n)
					}
					case n.k: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
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
			var v = (e = !1, t) => {
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
				g = Object(s.c)({
					error: y,
					pending: v
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
					api: g,
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
					loadMore: m,
					models: f,
					search: O,
					userOrder: j
				}),
				I = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var E = (e = null, t) => {
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
			var C = (e = !1, t) => {
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
				M = Object(s.c)({
					error: E,
					pending: C
				}),
				S = r("./node_modules/lodash/merge.js"),
				k = r.n(S),
				N = r("./node_modules/lodash/omit.js"),
				T = r.n(N);
			const L = {};
			var P = (e = L, t) => {
				switch (t.type) {
					case I.g:
					case I.k: {
						const {
							subredditId: r,
							flairedUsers: s
						} = t.payload;
						return k()({
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
			const F = {};
			var B = (e = F, t) => {
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
			var R = (e = null, t) => {
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
			var D = (e = !1, t) => {
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
				A = Object(s.c)({
					error: R,
					pending: D
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
				U = Object(s.c)({
					api: A,
					result: H
				});
			const q = {};
			var K = (e = q, t) => {
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
				V = Object(s.c)({
					api: M,
					models: P,
					pageInfo: B,
					search: U,
					userOrder: K
				}),
				W = r("./src/reddit/actions/moderationLog/constants.ts");
			const Q = {};
			var J = (e = Q, t) => {
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
			const G = {};
			var z = (e = G, t) => {
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
							return k()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				X = Object(s.c)({
					itemOrder: J,
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
					case n.I:
					case n.u: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload.response || t.payload, n = {
							[r]: s
						};
						return Object(h.merge)(e, n)
					}
					case n.y: {
						const {
							subredditId: r,
							userId: s,
							permissions: n
						} = t.payload;
						return Object(h.setIn)(e, [r, s, "modPermissions"], n)
					}
					case n.Y: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
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
				pe = Object(s.c)({
					error: ce,
					pending: le
				});
			const me = {};
			var he = (e = me, t) => {
					switch (t.type) {
						case n.u: {
							const {
								subredditId: r,
								response: s,
								key: n
							} = t.payload;
							return Object(h.setIn)(e, [r, n], s.moderatorIds)
						}
						case n.Y: {
							const {
								subredditId: r,
								userId: s,
								key: n
							} = t.payload, o = e[r][n].filter(e => e !== s);
							return Object(h.setIn)(e, [r, n], o)
						}
						default:
							return e
					}
				},
				be = Object(s.c)({
					data: he,
					api: pe
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
				ve = Object(s.c)({
					error: fe,
					pending: ye
				});
			const ge = {};
			var xe = (e = ge, t) => {
				switch (t.type) {
					case n.A: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload;
						return Object(h.set)(e, r, s)
					}
					case n.V: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
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
						return Object(h.merge)(e, o)
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
						case n.V: {
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
					api: ve,
					models: xe,
					userOrder: _e
				});
			const we = {};
			var Ie = (e = we, t) => {
				switch (t.type) {
					case n.F: {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							invitePending: n
						} = s, o = {
							[r]: n
						};
						return Object(h.merge)(e, o)
					}
					case n.C:
					case n.D: {
						const {
							subredditId: r
						} = t.payload;
						return Object(h.unset)(e, r)
					}
					default:
						return e
				}
			};
			const Ee = {};
			var Ce = (e = Ee, t) => {
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
			const Me = {};
			var Se = (e = Me, t) => {
				switch (t.type) {
					case n.F: {
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
			const ke = {};
			var Ne = (e = ke, t) => {
				switch (t.type) {
					case n.F: {
						const {
							response: r
						} = t.payload, s = {
							[r.subredditId]: r.moderators
						};
						return Object(h.merge)({
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
						return e[s] && e[s][n] ? Object(h.setIn)(e, [s, n, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Te = (e = null, t) => {
				switch (t.type) {
					case n.J:
					case n.I:
						return null;
					case n.H:
						return t.payload;
					default:
						return e
				}
			};
			var Le = (e = !1, t) => {
					switch (t.type) {
						case n.J:
							return !0;
						case n.I:
						case n.H:
							return !1;
						default:
							return e
					}
				},
				Pe = Object(s.c)({
					error: Te,
					pending: Le
				}),
				Fe = r("./node_modules/lodash/isEqual.js"),
				Be = r.n(Fe);
			var Re = (e = null, t) => {
					switch (t.type) {
						case n.J:
						case n.H:
						case n.Y:
							return null;
						case n.I: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case n.y: {
							const {
								userId: r,
								permissions: s
							} = t.payload;
							return e && e.id === r && !Be()(e.modPermissions, s) ? {
								...e,
								modPermissions: s
							} : e
						}
						default:
							return e
					}
				},
				De = Object(s.c)({
					api: Pe,
					result: Re
				});
			const Ae = {};
			var He = (e = Ae, t) => {
				switch (t.type) {
					case n.G:
					case n.F: {
						const {
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: null
						} : e
					}
					case n.E: {
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
			const Ue = {};
			var qe = (e = Ue, t) => {
					switch (t.type) {
						case n.E:
						case n.F: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case n.G: {
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
				Ke = Object(s.c)({
					error: He,
					pending: qe
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ve = {};
			var We = (e = Ve, t) => {
					switch (t.type) {
						case n.F: {
							const {
								response: r,
								subredditId: s,
								key: n
							} = t.payload, {
								moderatorIds: o
							} = r;
							return Object(h.merge)(e, {
								[s]: {
									[n]: o
								}
							})
						}
						case n.Y: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, n = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const o = e[r][t].filter(e => e !== s);
								n[t] = o
							}), Object(h.set)(e, r, n)
						}
						default:
							return e
					}
				},
				Qe = Object(s.c)({
					data: We,
					api: Ke
				}),
				Je = Object(s.c)({
					editableModerators: ae,
					editableUserOrder: be,
					invitedModerators: je,
					invitePending: Ie,
					loadMoreModerators: Se,
					loadMoreEditableModerators: Ce,
					models: Ne,
					search: De,
					userOrder: Qe
				}),
				Ge = r("./src/reddit/actions/bulkActions/constants.ts");
			var ze = (e = null, t) => {
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
				Xe = r("./src/reddit/actions/modQueue/constants.ts");
			var Ye = (e = !1, t) => {
					switch (t.type) {
						case Ge.c:
							return !0;
						case Ge.b:
						case Ge.a:
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
				pt = Object(s.c)({
					api: at,
					itemOrder: ct,
					loadMore: lt
				}),
				mt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var ht = (e = null, t) => {
				switch (t.type) {
					case mt.e: {
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
			const bt = [];
			var ft = (e = bt, t) => {
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
					case mt.e: {
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
			var vt = (e = !1, t) => {
					switch (t.type) {
						case Xe.k:
							return !0;
						case Xe.b:
							return !1;
						default:
							return e
					}
				},
				gt = Object(s.c)({
					after: ht,
					data: ft,
					loaded: yt,
					pending: vt
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
			var Et = (e = It, t) => {
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
				Ct = Object(s.c)({
					api: _t,
					itemOrder: wt,
					loadMore: Et
				});
			var Mt = (e = null, t) => {
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
			var St = (e = !1, t) => {
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
				kt = Object(s.c)({
					error: Mt,
					pending: St
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
			const Lt = {};
			var Pt = (e = Lt, t) => {
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
				Ft = Object(s.c)({
					api: kt,
					itemOrder: Tt,
					loadMore: Pt
				});
			var Bt = (e = null, t) => {
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
			var Rt = (e = !1, t) => {
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
				Dt = Object(s.c)({
					error: Bt,
					pending: Rt
				});
			const At = {};
			var Ht = (e = At, t) => {
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
			const Ut = {};
			var qt = (e = Ut, t) => {
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
				Kt = Object(s.c)({
					api: Dt,
					itemOrder: Ht,
					loadMore: qt
				});
			var Vt = (e = null, t) => {
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
				Qt = Object(s.c)({
					error: Vt,
					pending: Wt
				});
			const Jt = {};
			var Gt = (e = Jt, t) => {
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
					api: Qt,
					itemOrder: Gt,
					loadMore: Xt
				}),
				Zt = Object(s.c)({
					bulkAction: nt,
					edited: pt,
					moderatedCommunitiesOrder: gt,
					modqueue: Ct,
					reports: Ft,
					spam: Kt,
					unmoderated: Yt
				});
			var $t = (e = null, t) => {
				switch (t.type) {
					case n.N:
					case n.L:
						return null;
					case n.K:
						return t.payload;
					default:
						return e
				}
			};
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case n.N: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(i.d)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case n.L:
						case n.K: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(i.d)(r, s);
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
						case n.L: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(i.d)(s, r);
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
					case n.L: {
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
					case n.M:
					case n.L: {
						const {
							subredditId: r,
							mutedUsers: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(h.merge)(e, n)
					}
					case n.R: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var lr = (e = null, t) => {
				switch (t.type) {
					case n.Q:
					case n.P:
						return null;
					case n.O:
						return t.payload;
					default:
						return e
				}
			};
			var pr = (e = !1, t) => {
					switch (t.type) {
						case n.Q:
							return !0;
						case n.P:
						case n.O:
							return !1;
						default:
							return e
					}
				},
				mr = Object(s.c)({
					error: lr,
					pending: pr
				});
			var hr = (e = null, t) => {
					switch (t.type) {
						case n.Q:
						case n.O:
							return null;
						case n.P: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				br = Object(s.c)({
					api: mr,
					result: hr
				});
			const fr = {};
			var yr = (e = fr, t) => {
					switch (t.type) {
						case n.L: {
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
						case n.R: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case n.M: {
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
				vr = Object(s.c)({
					api: rr,
					fetchedTokens: nr,
					inContext: ir,
					loadMore: dr,
					models: ur,
					search: br,
					userOrder: yr
				});
			t.a = Object(s.c)({
				approvedSubmitters: w,
				flairedUsers: V,
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
						name: n.Mb.POWERUPS,
						isResponsive: !0
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
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(n.c)(e, {
					experimentName: s.Md,
					experimentEligibilitySelector: n.a
				}) === s.Vd.Enabled,
				i = e => Object(n.c)(e, {
					experimentName: s.Nd,
					experimentEligibilitySelector: n.a,
					expEventOverride: !1
				}) === s.Wd.Enabled
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
					const r = Object(o.H)(e),
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
				return p
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return h
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
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				m = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				h = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.4fab1b350e50f69ea468.js.map