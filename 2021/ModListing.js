// https://www.redditstatic.com/desktop2x/ModListing.4234fb198c714019e17c.js
// Retrieved at 4/15/2021, 11:00:06 AM by Reddit Dataminer v1.0.0
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
					var n = [];
					r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, r.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, r.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, r.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, r.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						}))
					}, r.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, r.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, r.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(r) {
							var o = r.element,
								i = a(o),
								d = this._rootContainsTarget(o),
								c = r.entry,
								l = t && d && this._computeTargetAndRootIntersection(o, n),
								u = r.entry = new s({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, s) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var r, o, i, d, l, u, m, p, h = a(n), b = c(n), f = !1; !f;) {
								var x = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (f = !0, x = s) : b != t.body && b != t.documentElement && "visible" != v.overflow && (x = a(b)), x && (r = x, o = h, i = void 0, d = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(r.top, o.top), d = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), u = Math.min(r.right, o.right), p = d - i, !(h = (m = u - l) >= 0 && p >= 0 && {
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
					}, r.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var n = t.documentElement,
								s = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || s.clientWidth,
								width: n.clientWidth || s.clientWidth,
								bottom: n.clientHeight || s.clientHeight,
								height: n.clientHeight || s.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, r.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, n) {
								return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
							})),
							n = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return n.width = n.right - n.left, n.height = n.bottom - n.top, n
					}, r.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							s = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== s)
							for (var r = 0; r < this.thresholds.length; r++) {
								var o = this.thresholds[r];
								if (o == n || o == s || o < n != o < s) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, r.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, r.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = r, e.IntersectionObserverEntry = s
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
						n = t.width * t.height,
						s = this.intersectionRect,
						r = s.width * s.height;
					this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
				}

				function r(e, t) {
					var n, s, r, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), s = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							n(), r = null
						}), s))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, s) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, s || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, s) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, s || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (n) {}
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
					for (var n = t; n;) {
						if (n == e) return !0;
						n = c(n)
					}
					return !1
				}

				function c(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = a,
					c = d(e, a);
				t = r(t), e -= a;
				for (var l = s(c, t); ++n < e;) t(n);
				return l
			}
		},
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
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/components/Portal/index.tsx"),
				c = n("./src/reddit/constants/shortcuts.ts"),
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
			const h = ({
				className: e,
				isVisible: t,
				...n
			}) => r.a.createElement("div", p({
				className: Object(o.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, n));

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
						} = t, b = p;
						return r.a.createElement(d.a, {
							container: document.getElementById(c.b)
						}, r.a.createElement(h, {
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
						}, r.a.createElement(e, b))))
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
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "modListingDataPending", (function() {
				return T
			})), n.d(t, "modListingDataLoaded", (function() {
				return L
			})), n.d(t, "modListingDataFailed", (function() {
				return B
			})), n.d(t, "modListingPageRequested", (function() {
				return F
			})), n.d(t, "morePostsPending", (function() {
				return R
			})), n.d(t, "morePostsLoaded", (function() {
				return D
			})), n.d(t, "morePostsFailed", (function() {
				return H
			})), n.d(t, "moreModListingRequested", (function() {
				return A
			})), n.d(t, "hideSubredditSuccess", (function() {
				return W
			})), n.d(t, "hideSubredditPending", (function() {
				return V
			})), n.d(t, "hideSubredditFailed", (function() {
				return K
			})), n.d(t, "unhideSubredditSuccess", (function() {
				return q
			})), n.d(t, "unhideSubredditPending", (function() {
				return Q
			})), n.d(t, "unhideSubredditFailed", (function() {
				return G
			})), n.d(t, "toggleHiddenSubreddit", (function() {
				return X
			})), n.d(t, "hideSubreddit", (function() {
				return J
			})), n.d(t, "unhideSubreddit", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/pick.js"),
				o = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/platform.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/page.ts"),
				m = n("./src/reddit/constants/parameters.ts"),
				p = n("./src/config.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/helpers/name/index.ts"),
				g = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				y = (e, t) => Object(h.a)(e, {
					data: t,
					endpoint: Object(x.a)(Object(g.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.cb.GET
				});
			const _ = (e, t, n, s) => Object(h.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(v.c)(n)}`,
					method: s ? i.cb.PUT : i.cb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(v.h)(n)
						})
					}
				}),
				E = (e, t, n) => _(e, t, n, !0),
				O = (e, t, n) => _(e, t, n, !1);
			var C = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				S = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				w = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				j = n("./src/reddit/helpers/trackers/screenview.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/routes/modListing/index.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/actions/pages/modListing/constants.ts");
			const T = Object(a.a)(M.f),
				L = Object(a.a)(M.e),
				B = Object(a.a)(M.d),
				P = (e, t) => async (n, r, o) => {
					const i = r();
					if (i.listings.postOrder.api.pending[e]) return;
					n(T({
						key: e
					}));
					const a = await Object(w.a)("modListing", () => y(o.apiContext(), t)),
						d = `error-${e}`;
					a.ok ? (n(L({
						key: e,
						meta: i.meta,
						...a.body
					})), n(l.g(d))) : (n(B({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(S.a)(n, i) : n(l.f({
						id: d,
						kind: I.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: P(e, t)
					})))
				}, F = (e, t) => async (n, r) => {
					const {
						sort: a = i.Q
					} = e.params, l = Object(N.d)(e.path), p = l ? u.e : u.d, h = Object(d.a)(p, a, e.queryParams), b = r(), f = b.listings.postOrder.ids[h], x = b.listings.postOrder.api.error[h];
					if (b.listings.postOrder.api.pending[h] || f && !x && !t) return void(f && n(c.l({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const v = U(e.queryParams);
					await n(P(h, {
						...o()(e.queryParams, m.l),
						...o()(e.queryParams, m.k),
						filtered: !!l || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(C.a)(a, v)
					})), n(c.l({
						title: s.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(j.h)(r(), !0)
				}, R = Object(a.a)(M.i), D = Object(a.a)(M.h), H = Object(a.a)(M.g), A = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						a = r.platform.currentPage;
					if (!a) return;
					const {
						sort: c = i.Q
					} = e, l = a.queryParams, p = Object(N.d)(a.url), h = p ? u.e : u.d, b = Object(d.a)(h, c, l), f = r.listings.postOrder.loadMore[b];
					if (!f) return;
					const x = r.listings.postOrder.api.pending[b],
						v = r.listings.postOrder.fetchedTokens,
						g = !(!v[b] || !v[b][f.token]);
					if (x || g) return;
					const _ = U(l);
					t(R({
						key: b,
						fetchedToken: f.token
					}));
					const E = await y(s(), {
							after: f.token,
							dist: f.dist,
							filtered: !!p || void 0,
							sort: c,
							t: Object(C.a)(c, _),
							...o()(l, m.l)
						}),
						O = r.listings.postOrder.ids[b],
						S = {
							...E.body,
							postIds: (E.body.postIds || []).filter(e => !O || !O.includes(e))
						};
					E.ok ? t(D({
						key: b,
						fetchedToken: f.token,
						meta: r.meta,
						...S
					})) : t(H({
						key: b,
						error: E.error,
						fetchedToken: f.token,
						...S
					}))
				};

			function U(e) {
				const t = m.x in e && e[m.x].toUpperCase() || "";
				return t in i.Vb && i.Vb[t]
			}
			const W = Object(a.a)(M.c),
				V = Object(a.a)(M.b),
				K = Object(a.a)(M.a),
				q = Object(a.a)(M.l),
				Q = Object(a.a)(M.k),
				G = Object(a.a)(M.j),
				X = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(k.i)(o),
						[a, d, c, l] = t ? [V, W, K, E] : [Q, q, G, O];
					if (!i || !i.displayText) return;
					const {
						currentPage: u
					} = o.platform;
					if (!u || !u.routeMatch) return;
					n(a(e));
					const m = await l(r(), i.displayText, e);
					m.ok ? (await n(F(u.routeMatch.match, !0)), n(d(e))) : n(c(m.body))
				}, J = e => X(e, !0), z = e => X(e, !1)
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/shortcuts.ts"),
				r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = n("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						s = Object(r.a)(e);
					return Object(o.b)(n, e, s)
				},
				a = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				d = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						s = window.scrollY;
					t && (t.focus(), window.scrollTo(n, s))
				},
				c = () => {
					d(s.b)
				}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				c = n.n(d);
			const l = Object(r.createContext)(null),
				u = Object(r.createContext)(null);
			class m extends o.a.Component {
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
					return o.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = i.f + 10,
				h = o.a.memo(() => o.a.createElement(l.Consumer, null, e => e && o.a.createElement("div", {
					className: c.a.wrapper
				}, o.a.createElement(a.o, {
					className: c.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, s.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), o.a.createElement("div", {
					className: c.a.rightBorder
				})))),
				b = o.a.memo(() => o.a.createElement(u.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/ModHub/Content/index.m.less"),
				d = n.n(a);
			t.a = e => i.a.createElement("div", {
				className: d.a.noPermissions
			}, i.a.createElement("img", {
				className: d.a.rememberTheHuman,
				src: `${s.a.assetPath}/img/content-gate-icons/remember-the-human.png`
			}), e.isModerator ? r.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : r.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), i.a.createElement("div", {
				className: d.a.noPermissionsSmallText
			}, e.isModerator ? r.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? r.fbt._("You must be a moderator of {subredditName} to view this page", [r.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : r.fbt._("You must be a moderator to view this page", null, {
				hk: "2N7TXH"
			})))
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, n) {
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
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, n) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
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
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "r", (function() {
				return I
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				d = n.n(a);
			const c = s.a.wrapped(i.a, "CloseIcon", d.a),
				l = s.a.section("ModalBody", d.a),
				u = s.a.section("ModalPostPreview", d.a),
				m = s.a.p("ModalText", d.a),
				p = s.a.div("ModalSmallText", d.a),
				h = s.a.div("ModalDescriptionText", d.a),
				b = s.a.div("ModalMetaText", d.a),
				f = s.a.label("ModalFormItem", d.a),
				x = s.a.wrapped(o.a, "ModalInput", d.a),
				v = s.a.label("ModalInputLabel", d.a),
				g = s.a.footer("ModalFooter", d.a),
				y = s.a.header("ModalHeader", d.a),
				_ = s.a.div("ModalTitle", d.a),
				E = s.a.div("ModalAnnotation", d.a),
				O = s.a.div("ModalMain", d.a),
				C = s.a.textarea("TextArea", d.a),
				S = s.a.wrapped(r.i, "WarningButton", d.a),
				w = s.a.wrapped(r.i, "PrimaryButton", d.a),
				j = s.a.wrapped(r.l, "CancelButton", d.a),
				I = s.a.wrapped(r.o, "RemoveButton", d.a)
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, n) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(l.b, "SubredditIcon", p.a),
				f = h.a.span("Label", p.a),
				x = Object(c.c)({
					subredditOrProfile: u.L
				});
			var v = Object(d.b)(x)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
				subredditOrProfile: t
			}), o.a.createElement(f, null, t.displayText))));
			var g = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: n
				}) => {
					const s = n.map(t => o.a.createElement(v, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return o.a.createElement("div", {
						className: t
					}, s)
				},
				y = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				_ = n.n(y);
			const E = h.a.div("CommunityCount", _.a),
				O = h.a.wrapped(g, "SubredditsOrProfiles", _.a),
				C = h.a.wrapped(i.a, "SidebarSubreddit", _.a),
				S = h.a.wrapped(i.a, "ModalSubreddit", _.a);
			var w;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(w || (w = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: n,
					onSeeMoreDetails: r,
					subredditCategory: i = {
						name: s.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, d = t ? C : S, c = n.length, l = t && n.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(E, null, s.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [s.fbt._plural(c, "number"), s.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), c > 0 && o.a.createElement(O, {
					subredditsOrProfilesIds: t ? n.slice(0, 4) : n
				}, (t, n) => o.a.createElement(d, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, n)), c > 0 && l && o.a.createElement(a.o, {
					onClick: r
				}, s.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o);
			class a extends i.a.Component {
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
				return M
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "d", (function() {
				return B
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => s => {
				const r = e(s),
					i = t(s),
					a = !r && i;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: r,
					[n.mIsVoteable]: a
				})
			};
			var d = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				u = n("./src/reddit/controls/Downvote/index.m.less"),
				m = n.n(u);
			const p = {
					...m.a,
					baseClassName: m.a.Downvote
				},
				h = ({
					voteState: e
				}) => e === l.a.downvoted,
				b = a(h, ({
					interactive: e
				}) => !1 !== e, p);
			var f = e => {
					const t = Object(d.a)();
					return r.a.createElement(c.b, {
						className: b(e),
						compact: e.compact,
						isFilled: t && h(e)
					})
				},
				x = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = n("./src/reddit/controls/Upvote/index.m.less"),
				g = n.n(v);
			const y = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				_ = ({
					voteState: e
				}) => e === l.a.upvoted,
				E = a(_, ({
					interactive: e
				}) => !1 !== e, y);
			var O = e => {
					const t = Object(d.a)();
					return r.a.createElement(x.b, {
						className: E(e),
						compact: e.compact,
						isFilled: t && _(e)
					})
				},
				C = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				S = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				I = n.n(j);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(o.a)({
					[I.a.compact]: e.compact,
					[I.a.dark]: Object(S.b)(Object(C.a)(e)),
					[I.a.nightmode]: e.isNightmode
				}),
				M = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(w.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return r.a.createElement("button", N({}, i, {
						className: Object(o.a)(I.a.customDownvote, k(e), {
							[I.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				T = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(w.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return r.a.createElement("button", N({}, i, {
						className: Object(o.a)(I.a.customUpvote, k(e), {
							[I.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				L = f,
				B = O
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				d = n("./src/reddit/constants/modals.ts");
			const c = Object(r.c)({
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
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "p", (function() {
				return S
			}));
			const s = 284,
				r = 450,
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
				x = 270,
				v = 106,
				g = 5,
				y = 16,
				_ = 1250,
				E = 82,
				O = 48,
				C = 36,
				S = 40
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
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
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
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
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
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "g", (function() {
				return L
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/controls/Button/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = {
				role: "button",
				tabIndex: 0
			};
			var m, p, h, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(m || (m = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(p || (p = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(h || (h = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const f = (e, t) => n => r.a.createElement(e, {
					className: Object(o.a)(t, n.className)
				}),
				x = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconPosition: s = h.C,
						isFullWidth: i = !1,
						isSquare: d = !1,
						children: f,
						className: x,
						kind: _ = b.Button,
						priority: E = p.Primary,
						redditStyle: O,
						size: C = m.S,
						text: S,
						...w
					} = e, j = Object(a.a)(), I = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: s,
						isFullWidth: r,
						isSquare: i,
						priority: a,
						size: d,
						text: l
					}) => Object(o.a)(e, c.a.Button, a && c.a[a], d && c.a[d], {
						[c.a.isFullWidth]: r,
						[c.a.isIconOnly]: !!s && !l,
						[c.a.isSquare]: i,
						[c.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: x,
						children: f,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: i,
						isSquare: d,
						priority: E,
						redditStyle: O,
						size: C,
						text: S
					}), N = (({
						children: e,
						text: t,
						Icon: n,
						iconPosition: s,
						priority: i,
						isInIcons2020: a
					}) => !n && t ? r.a.createElement("span", null, t) : r.a.createElement(r.a.Fragment, null, n && (s === h.C || s === h.L) && r.a.createElement(n, {
						className: Object(o.a)(c.a.Icon, {
							[c.a.isLeft]: s === h.L
						}),
						isFilled: a && i === p.Primary
					}), t && r.a.createElement("span", {
						className: c.a.Text
					}, t), e && e, n && s === h.R && r.a.createElement(n, {
						className: Object(o.a)(c.a.Icon, c.a.isRight),
						isFilled: a && i === p.Primary
					})))({
						children: f,
						text: S,
						Icon: n,
						iconPosition: s,
						priority: E,
						isInIcons2020: j
					});
					return _ === b.InternalLink && (e => "to" in e)(w) ? r.a.createElement(v, l({}, u, w, {
						className: I
					}), N) : _ === b.ExternalLink && (e => "href" in e)(w) ? r.a.createElement(g, l({}, u, w, {
						className: I
					}), N) : r.a.createElement(y, l({}, u, w, {
						className: I
					}), N)
				},
				v = e => r.a.createElement(i.a, e),
				g = e => r.a.createElement("a", e),
				y = e => r.a.createElement("button", e),
				_ = e => r.a.createElement(x, l({
					kind: b.ExternalLink,
					priority: p.Primary
				}, e)),
				E = e => r.a.createElement(x, l({
					kind: b.InternalLink,
					priority: p.Primary
				}, e)),
				O = e => r.a.createElement(x, l({
					kind: b.Button,
					priority: p.Primary
				}, e)),
				C = e => r.a.createElement(x, l({
					kind: b.ExternalLink,
					priority: p.Secondary
				}, e)),
				S = e => r.a.createElement(x, l({
					kind: b.InternalLink,
					priority: p.Secondary
				}, e)),
				w = e => r.a.createElement(x, l({
					kind: b.Button,
					priority: p.Secondary
				}, e)),
				j = e => r.a.createElement(x, l({
					kind: b.InternalLink,
					priority: p.Plain
				}, e)),
				I = e => r.a.createElement(x, l({
					kind: b.Button,
					priority: p.Plain
				}, e)),
				N = ({
					className: e,
					...t
				}) => r.a.createElement(x, l({
					kind: b.Button,
					priority: p.Primary,
					className: Object(o.a)(e, c.a.DangerButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => r.a.createElement(x, l({
					kind: b.Button,
					className: Object(o.a)(e, c.a.GoldButtonColors)
				}, t)),
				M = ({
					className: e,
					...t
				}) => r.a.createElement(x, l({
					kind: b.Button,
					className: Object(o.a)(e, c.a.PremiumButtonColors)
				}, t)),
				T = ({
					className: e,
					...t
				}) => r.a.createElement(x, l({
					kind: b.Button,
					className: Object(o.a)(e, c.a.ChatButton)
				}, t)),
				L = ({
					className: e,
					...t
				}) => r.a.createElement(x, l({
					kind: b.Button,
					className: Object(o.a)(e, c.a.InlineTextButton)
				}, t));
			t.q = x
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
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends r.a.Component {
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
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
				a = n.n(i);
			t.a = e => r.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(a.a.textButton, e.className),
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
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			let r;
			const o = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(s.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, r || (r = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${r}px`;
					const t = document.getElementById(s.c);
					t && (t.style.marginRight = `${r}px`)
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				d = e => {
					if (!e || !document.body) return 0;
					const t = a(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
				}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...r(t)
				}),
				i = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("clear", e.isFilled), e.className)
			})
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
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), d.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? r.a.createElement("span", c({}, n, {
				className: Object(o.a)(d.a.compactDownvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: d.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", c({}, n, {
				className: Object(o.a)(d.a.downvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
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
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), d.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? r.a.createElement("span", c({}, n, {
				className: Object(o.a)(d.a.compactUpvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: d.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", c({}, n, {
				className: Object(o.a)(d.a.upvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", d({
				className: Object(o.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.b.orangered : "none"
			}))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const h = Object(c.t)(),
				b = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(c.O)(e, t)
				}),
				f = Object(o.b)(b),
				x = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: s,
					isCollectionLayout: o,
					isEditing: i,
					layout: a,
					pageLayer: d,
					...c
				}) => r.a.createElement("div", c);
			t.a = h(f(({
				className: e,
				...t
			}) => r.a.createElement(x, p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === d.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class b extends r.a.Component {
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
			var f = Object(h.a)(b);
			var x = e => r.a.createElement(f, e),
				v = n("./src/reddit/layout/page/Listing/index.m.less"),
				g = n.n(v);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: s,
						theme: o,
						...a
					} = e, d = Object(p.a)(e), c = {
						"--pseudo-before-background": t || Object(m.g)(d.canvas, d.canvasImgUrl, d.canvasImgPosition)
					};
					return r.a.createElement("div", y({
						className: Object(i.a)(g.a.backgroundContainer, n),
						style: c
					}, a))
				}),
				E = d.a.div("Body", g.a),
				O = d.a.div("Sidebar", g.a),
				C = e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null;

			function S(e) {
				const t = e.trendingUnit && !e.noSidebarTopMargin ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${c.q}px`,
						marginTop: t
					} : {
						marginLeft: `${c.q}px`,
						marginTop: t
					},
					s = e.sidebar && r.a.createElement(O, {
						className: e.isCollectionLayout ? g.a["m-collectionLayout"] : g.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = r.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let d;
				d = e.sidebars ? r.a.createElement(r.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? r.a.createElement(r.a.Fragment, null, s, a) : r.a.createElement(r.a.Fragment, null, a, s);
				const m = e.disableFullscreen ? `${e.maxWidth||u.a+2*c.m}px` : "100%";
				return r.a.createElement(x, {
					subredditId: e.subredditId
				}, r.a.createElement("div", {
					className: Object(i.a)(g.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, r.a.createElement(_, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), r.a.createElement("div", {
					className: g.a.innerContainer
				}, r.a.createElement("div", {
					className: g.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, C(e), r.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), r.a.createElement(E, {
					style: {
						maxWidth: m
					}
				}, d))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("inlineRow", o.a)
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
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = n.n(a);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(i.a)(d.a.exapndLeftContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/fromPairs.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				u = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/modListing/index.ts"),
				p = n("./src/reddit/components/EmptySubreddit.tsx"),
				h = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				b = n("./src/reddit/components/JumpToContent/index.tsx"),
				f = n("./src/reddit/components/ListingPostList/index.tsx"),
				x = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				g = n("./src/higherOrderComponents/asModal/index.tsx"),
				y = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				E = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				O = n("./src/reddit/controls/TextButton/index.tsx"),
				C = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				S = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = n("./src/reddit/selectors/activeModalId.ts"),
				j = n("./src/reddit/selectors/modQueue.ts"),
				I = n("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				N = n.n(I);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = Object(g.a)(e => i.a.createElement(_.d, {
				className: N.a.modalBody
			}, i.a.createElement(_.h, null, i.a.createElement(S.a, null, i.a.createElement(_.p, {
				className: N.a.modalTitle
			}, i.a.createElement(C.a, {
				className: N.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(O.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(_.b, null)))), i.a.createElement(_.k, {
				className: N.a.modalMain
			}, i.a.createElement("div", {
				className: N.a.modalDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(E.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), T = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: N.a.feedDetailsTitle
			}, i.a.createElement(C.a, {
				className: N.a.modIcon
			}), k._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: N.a.feedDetailsDescription
			}, k._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(E.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: N.a.loadingBar
			})), L = Object(d.c)({
				isModalOpen: Object(w.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: j.f
			});
			var B = Object(a.b)(L, (e, {}) => ({
					toggleModal: () => e(Object(y.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: n,
						toggleModal: s
					} = e;
					return n ? i.a.createElement(i.a.Fragment, null, i.a.createElement(T, {
						moderatedCommunitiesIds: n,
						onSeeMoreDetails: s
					}), t && i.a.createElement(M, {
						moderatedCommunitiesIds: n,
						onCloseModal: s,
						onOverlayClick: s,
						withOverlay: !0
					})) : null
				}),
				P = n("./node_modules/react-router-redux/es/index.js"),
				F = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/Button/index.tsx");
			const H = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				A = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				U = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var W = n("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var K = n("./src/reddit/constants/keycodes.ts"),
				q = n("./src/reddit/layout/row/Inline/index.tsx"),
				Q = n("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				G = n.n(Q);
			const X = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
			});
			class J extends i.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(H()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
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
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(q.a, null, i.a.createElement("input", {
						className: G.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: v.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), i.a.createElement(D.i, {
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
			var z = Object(a.b)(X, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(F.c)(J)),
				Y = n("./src/lib/lessComponent.tsx"),
				Z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = n("./src/reddit/icons/fonts/Clear/index.tsx"),
				ee = n("./src/reddit/selectors/profile.ts"),
				te = n("./src/reddit/selectors/subreddit.ts"),
				ne = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				se = n.n(ne);
			const re = Y.a.wrapped(Z.b, "SubredditIcon", se.a),
				oe = Object(d.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const n = Object(te.A)(e, {
							subredditName: t.subredditName
						});
						if (!n) {
							const n = (e => e.startsWith(c.Xb) ? e.slice(2) : e)(t.subredditName);
							return n && Object(ee.j)(e, {
								profileName: n
							}) || null
						}
						return n
					}
				});
			class ie extends i.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(A()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? i.a.createElement(E.a, {
						className: se.a.row,
						to: e.subredditOrProfile.url
					}, i.a.createElement(re, {
						subredditOrProfile: e.subredditOrProfile
					}), i.a.createElement("span", {
						className: se.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && i.a.createElement("button", {
						"aria-label": v.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: se.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, i.a.createElement($.a, null))) : null
				}
			}
			var ae = Object(a.b)(oe, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(F.c)(ie)),
				de = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ce = n.n(de);
			const {
				fbt: le
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ue = ({
					hiddenSubredditsNames: e
				}) => {
					const t = e.map(e => i.a.createElement(ae, {
						key: e,
						subredditName: e
					}));
					return i.a.createElement(i.a.Fragment, null, e.length ? i.a.createElement("div", {
						className: ce.a.rows
					}, t) : i.a.createElement("div", {
						className: ce.a.noRows
					}, le._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				me = n("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				pe = n.n(me);
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = Object(R.t)({
				filtered: e => !!e && Object(W.d)(e.url)
			}), fe = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class xe extends i.a.Component {
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
						className: pe.a.container
					}, i.a.createElement("div", {
						className: pe.a.hideCommunitiesHeader
					}, he._("Hide communities", null, {
						hk: "15OtHo"
					})), i.a.createElement(D.o, {
						className: pe.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? he._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : he._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && i.a.createElement("div", {
						className: pe.a.inputContainer
					}, i.a.createElement(z, null), i.a.createElement(ue, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var ve = be(Object(a.b)(fe, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(P.b)(t ? W.a : W.b))
				}))(Object(F.c)(xe))),
				ge = n("./src/reddit/components/SidebarContainer/index.tsx"),
				ye = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_e = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ee = () => i.a.createElement(ge.a, null, i.a.createElement(_e.a, {
					title: v.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(B, null), i.a.createElement(ve, null)), i.a.createElement(ye.a, null)),
				Oe = n("./src/reddit/constants/page.ts"),
				Ce = n("./src/reddit/constants/parameters.ts"),
				Se = n("./src/reddit/helpers/trackers/screenview.ts"),
				we = n("./src/reddit/layout/page/Listing/index.tsx"),
				je = n("./src/reddit/selectors/moderatorPermissions.ts");
			const Ie = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || c.P.HOT, (e, {
					match: t
				}) => Object(W.d)(t.path), je.i, je.c, (e, t, n, s, o) => {
					const i = r()([...Object(l.a)(e)]),
						a = Ce.x in i && i[Ce.x].toUpperCase(),
						d = "string" == typeof a && a in c.Vb ? c.Vb[a] : c.Wb,
						m = n ? Oe.e : Oe.d;
					return {
						filtered: n,
						isModerator: s,
						isModeratorWithPostPerms: o,
						listingKey: Object(u.a)(m, t, i),
						listingName: m,
						sort: t,
						timeSort: d
					}
				}),
				Ne = Object(a.b)(Ie, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class ke extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Se.f)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => i.a.createElement(p.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? W.b : W.a;
					return i.a.createElement("div", null, this.props.isModeratorWithPostPerms ? i.a.createElement(we.a, {
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
						sidebar: i.a.createElement(Ee, null)
					}) : i.a.createElement(x.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Ne(ke)
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.Zb.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Tb
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.4234fb198c714019e17c.js.map