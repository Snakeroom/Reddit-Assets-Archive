// https://www.redditstatic.com/desktop2x/ModListing.df9c0f431cefa661e236.js
// Retrieved at 3/18/2021, 5:10:06 PM by Reddit Dataminer v1.0.0
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
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
							n = t ? this._getRootRect() : {
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
								c = this._rootContainsTarget(o),
								d = s.entry,
								u = t && c && this._computeTargetAndRootIntersection(o, n),
								l = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: u
								});
							d ? t && c ? this._hasCrossedThreshold(d, l) && this._queuedEntries.push(l) : d && d.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, o, i, c, u, l, m, p, b = a(n), f = d(n), h = !1; !h;) {
								var g = null,
									v = 1 == f.nodeType ? e.getComputedStyle(f) : {};
								if ("none" == v.display) return;
								if (f == this.root || f == t ? (h = !0, g = r) : f != t.body && f != t.documentElement && "visible" != v.overflow && (g = a(f)), g && (s = g, o = b, i = void 0, c = void 0, u = void 0, l = void 0, m = void 0, p = void 0, i = Math.max(s.top, o.top), c = Math.min(s.bottom, o.bottom), u = Math.max(s.left, o.left), l = Math.min(s.right, o.right), p = c - i, !(b = (m = l - u) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: u,
										right: l,
										width: m,
										height: p
									}))) break;
								f = d(f)
							}
							return b
						}
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var n = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || r.clientWidth,
								width: n.clientWidth || r.clientWidth,
								bottom: n.clientHeight || r.clientHeight,
								height: n.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, s.prototype._expandRectByRootMargin = function(e) {
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
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var s = 0; s < this.thresholds.length; s++) {
								var o = this.thresholds[s];
								if (o == n || o == r || o < n != o < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = r
				}

				function r(e) {
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
						r = this.intersectionRect,
						s = r.width * r.height;
					this.intersectionRatio = n ? s / n : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var n, r, s, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
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

				function c(e, t) {
					for (var n = t; n;) {
						if (n == e) return !0;
						n = d(n)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = a,
					d = c(e, a);
				t = s(t), e -= a;
				for (var u = r(d, t); ++n < e;) t(n);
				return u
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-router/esm/react-router.js"),
				a = n("./node_modules/history/esm/history.js");
			n("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				if (null == e) return {};
				var n, r, s = {},
					o = Object.keys(e);
				for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
				return s
			}
			var u = n("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			o.a.Component;
			o.a.Component;
			var l = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				r(t, e);
				var n = t.prototype;
				return n.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (n) {
						throw e.preventDefault(), n
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, n.render = function() {
					var e = this,
						t = this.props,
						n = t.innerRef,
						r = (t.replace, t.to),
						s = d(t, ["innerRef", "replace", "to"]);
					return o.a.createElement(i.g.Consumer, null, (function(t) {
						t || Object(u.default)(!1);
						var i = "string" == typeof r ? Object(a.c)(r, null, null, t.location) : r,
							d = i ? t.history.createHref(i) : "";
						return o.a.createElement("a", c({}, s, {
							onClick: function(n) {
								return e.handleClick(n, t.history)
							},
							href: d,
							ref: n
						}))
					}))
				}, t
			}(o.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class r {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class s {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new s(t);
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
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.prev = s, n.next = s.next, s.next = n, n.next && (n.next.prev = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.next = s, n.prev = s.prev, s.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
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
					const t = e instanceof r ? e : new r(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
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
					const t = e instanceof r ? e : new r(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				i = Object(r.a)(s),
				a = Object(r.a)(o)
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "modListingDataPending", (function() {
				return N
			})), n.d(t, "modListingDataLoaded", (function() {
				return L
			})), n.d(t, "modListingDataFailed", (function() {
				return R
			})), n.d(t, "modListingPageRequested", (function() {
				return D
			})), n.d(t, "morePostsPending", (function() {
				return F
			})), n.d(t, "morePostsLoaded", (function() {
				return B
			})), n.d(t, "morePostsFailed", (function() {
				return A
			})), n.d(t, "moreModListingRequested", (function() {
				return U
			})), n.d(t, "hideSubredditSuccess", (function() {
				return K
			})), n.d(t, "hideSubredditPending", (function() {
				return V
			})), n.d(t, "hideSubredditFailed", (function() {
				return q
			})), n.d(t, "unhideSubredditSuccess", (function() {
				return W
			})), n.d(t, "unhideSubredditPending", (function() {
				return G
			})), n.d(t, "unhideSubredditFailed", (function() {
				return Q
			})), n.d(t, "toggleHiddenSubreddit", (function() {
				return J
			})), n.d(t, "hideSubreddit", (function() {
				return X
			})), n.d(t, "unhideSubreddit", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				d = n("./src/reddit/actions/platform.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/page.ts"),
				m = n("./src/reddit/constants/parameters.ts"),
				p = n("./src/config.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				O = (e, t) => Object(b.a)(e, {
					data: t,
					endpoint: Object(g.a)(Object(y.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.cb.GET
				});
			const _ = (e, t, n, r) => Object(b.a)(Object(f.a)(e, [h.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(v.c)(n)}`,
					method: r ? i.cb.PUT : i.cb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(v.h)(n)
						})
					}
				}),
				x = (e, t, n) => _(e, t, n, !0),
				I = (e, t, n) => _(e, t, n, !1);
			var E = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				j = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				S = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = n("./src/reddit/helpers/trackers/screenview.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/routes/modListing/index.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/actions/pages/modListing/constants.ts");
			const N = Object(a.a)(w.f),
				L = Object(a.a)(w.e),
				R = Object(a.a)(w.d),
				M = (e, t) => async (n, s, o) => {
					const i = s();
					if (i.listings.postOrder.api.pending[e]) return;
					n(N({
						key: e
					}));
					const a = await Object(S.a)("modListing", () => O(o.apiContext(), t)),
						c = `error-${e}`;
					a.ok ? (n(L({
						key: e,
						meta: i.meta,
						...a.body
					})), n(u.g(c))) : (n(R({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(j.a)(n, i) : n(u.f({
						id: c,
						kind: P.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: M(e, t)
					})))
				}, D = (e, t) => async (n, s) => {
					const {
						sort: a = i.Q
					} = e.params, u = Object(k.d)(e.path), p = u ? l.e : l.d, b = Object(c.a)(p, a, e.queryParams), f = s(), h = f.listings.postOrder.ids[b], g = f.listings.postOrder.api.error[b];
					if (f.listings.postOrder.api.pending[b] || h && !g && !t) return void(h && n(d.l({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const v = H(e.queryParams);
					await n(M(b, {
						...o()(e.queryParams, m.l),
						...o()(e.queryParams, m.k),
						filtered: !!u || void 0,
						moderated_srs: !0,
						sort: a,
						t: Object(E.a)(a, v)
					})), n(d.l({
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(C.h)(s(), !0)
				}, F = Object(a.a)(w.i), B = Object(a.a)(w.h), A = Object(a.a)(w.g), U = e => async (t, n, {
					apiContext: r
				}) => {
					const s = n(),
						a = s.platform.currentPage;
					if (!a) return;
					const {
						sort: d = i.Q
					} = e, u = a.queryParams, p = Object(k.d)(a.url), b = p ? l.e : l.d, f = Object(c.a)(b, d, u), h = s.listings.postOrder.loadMore[f];
					if (!h) return;
					const g = s.listings.postOrder.api.pending[f],
						v = s.listings.postOrder.fetchedTokens,
						y = !(!v[f] || !v[f][h.token]);
					if (g || y) return;
					const _ = H(u);
					t(F({
						key: f,
						fetchedToken: h.token
					}));
					const x = await O(r(), {
							after: h.token,
							dist: h.dist,
							filtered: !!p || void 0,
							sort: d,
							t: Object(E.a)(d, _),
							...o()(u, m.l)
						}),
						I = s.listings.postOrder.ids[f],
						j = {
							...x.body,
							postIds: (x.body.postIds || []).filter(e => !I || !I.includes(e))
						};
					x.ok ? t(B({
						key: f,
						fetchedToken: h.token,
						meta: s.meta,
						...j
					})) : t(A({
						key: f,
						error: x.error,
						fetchedToken: h.token,
						...j
					}))
				};

			function H(e) {
				const t = m.x in e && e[m.x].toUpperCase() || "";
				return t in i.Ub && i.Ub[t]
			}
			const K = Object(a.a)(w.c),
				V = Object(a.a)(w.b),
				q = Object(a.a)(w.a),
				W = Object(a.a)(w.l),
				G = Object(a.a)(w.k),
				Q = Object(a.a)(w.j),
				J = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(T.i)(o),
						[a, c, d, u] = t ? [V, K, q, x] : [G, W, Q, I];
					if (!i || !i.displayText) return;
					const {
						currentPage: l
					} = o.platform;
					if (!l || !l.routeMatch) return;
					n(a(e));
					const m = await u(s(), i.displayText, e);
					m.ok ? (await n(D(l.routeMatch.match, !0)), n(c(e))) : n(d(m.body))
				}, X = e => J(e, !0), Y = e => J(e, !1)
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
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				a = Object(r.a)(o),
				c = Object(r.a)(i),
				d = (e, t) => async (n, r) => {
					const o = r();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : s.j(o, e) : n(a({
						listingKey: e,
						listingName: t
					}))
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
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const u = Object(s.createContext)(null),
				l = Object(s.createContext)(null);
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
					return o.a.createElement(u.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(l.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = i.f + 10,
				b = o.a.memo(() => o.a.createElement(u.Consumer, null, e => e && o.a.createElement("div", {
					className: d.a.wrapper
				}, o.a.createElement(a.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, r.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), o.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				f = o.a.memo(() => o.a.createElement(l.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/ModHub/Content/index.m.less"),
				c = n.n(a);
			t.a = e => i.a.createElement("div", {
				className: c.a.noPermissions
			}, i.a.createElement("img", {
				className: c.a.rememberTheHuman,
				src: `${r.a.assetPath}/img/content-gate-icons/remember-the-human.png`
			}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : s.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), i.a.createElement("div", {
				className: c.a.noPermissionsSmallText
			}, e.isModerator ? s.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? s.fbt._("You must be a moderator of {subredditName} to view this page", [s.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : s.fbt._("You must be a moderator to view this page", null, {
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
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = n.n(m),
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(u.b, "SubredditIcon", p.a),
				h = b.a.span("Label", p.a),
				g = Object(d.c)({
					subredditOrProfile: l.L
				});
			var v = Object(c.b)(g)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, o.a.createElement(o.a.Fragment, null, o.a.createElement(f, {
				subredditOrProfile: t
			}), o.a.createElement(h, null, t.displayText))));
			var y = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: n
				}) => {
					const r = n.map(t => o.a.createElement(v, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return o.a.createElement("div", {
						className: t
					}, r)
				},
				O = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				_ = n.n(O);
			const x = b.a.div("CommunityCount", _.a),
				I = b.a.wrapped(y, "SubredditsOrProfiles", _.a),
				E = b.a.wrapped(i.a, "SidebarSubreddit", _.a),
				j = b.a.wrapped(i.a, "ModalSubreddit", _.a);
			var S;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(S || (S = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: n,
					onSeeMoreDetails: s,
					subredditCategory: i = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, c = t ? E : j, d = n.length, u = t && n.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(x, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(d, "number"), r.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), d > 0 && o.a.createElement(I, {
					subredditsOrProfilesIds: t ? n.slice(0, 4) : n
				}, (t, n) => o.a.createElement(c, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, n)), d > 0 && u && o.a.createElement(a.o, {
					onClick: s
				}, r.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o);
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
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(o.f)(),
					n = Object(r.useCallback)(e => {
						{
							const n = t.getState(),
								r = e(n);
							Object(a.a)({
								...i.defaults(n),
								...r
							})
						}
					}, [t]);
				return s.a.createElement(d.Provider, {
					value: n
				}, e ? s.a.Children.only(e) : null)
			}

			function l() {
				return Object(r.useContext)(d)
			}

			function m(e) {
				function t(t) {
					const n = l();
					return s.a.createElement(e, c({}, t, {
						sendEvent: n
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
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
				return w
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "d", (function() {
				return R
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => r => {
				const s = e(r),
					i = t(r),
					a = !s && i;
				return Object(o.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: s,
					[n.mIsVoteable]: a
				})
			};
			var c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				u = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				m = n.n(l);
			const p = {
					...m.a,
					baseClassName: m.a.Downvote
				},
				b = ({
					voteState: e
				}) => e === u.a.downvoted,
				f = a(b, ({
					interactive: e
				}) => !1 !== e, p);
			var h = e => {
					const t = Object(c.a)();
					return s.a.createElement(d.b, {
						className: f(e),
						compact: e.compact,
						isFilled: t && b(e)
					})
				},
				g = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = n("./src/reddit/controls/Upvote/index.m.less"),
				y = n.n(v);
			const O = {
					...y.a,
					baseClassName: y.a.Upvote
				},
				_ = ({
					voteState: e
				}) => e === u.a.upvoted,
				x = a(_, ({
					interactive: e
				}) => !1 !== e, O);
			var I = e => {
					const t = Object(c.a)();
					return s.a.createElement(g.b, {
						className: x(e),
						compact: e.compact,
						isFilled: t && _(e)
					})
				},
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				j = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				P = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => Object(o.a)({
					[P.a.compact]: e.compact,
					[P.a.dark]: Object(j.b)(Object(E.a)(e)),
					[P.a.nightmode]: e.isNightmode
				}),
				w = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						...i
					} = e;
					return s.a.createElement("button", k({}, i, {
						className: Object(o.a)(P.a.customDownvote, T(e), {
							[P.a.voted]: e.voteState === u.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						...i
					} = e;
					return s.a.createElement("button", k({}, i, {
						className: Object(o.a)(P.a.customUpvote, T(e), {
							[P.a.voted]: e.voteState === u.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				L = h,
				R = I
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(r || (r = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(s || (s = {}));
			const o = "SHORTCUT_FOCUSABLE_DIV",
				i = [9, 13, 32]
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
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !s
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/history/esm/history.js"), n("./src/reddit/actions/platform.ts");
			var r = n("./src/config.ts");
			t.a = (e, t) => {
				const n = t.platform.currentPage && t.platform.currentPage.url;
				let s = `${r.a.accountManagerOrigin}/login/`;
				const o = window.location.origin;
				n && (s += `?dest=${encodeURIComponent(`${o}${n}`)}`), window.location.href = s
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
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.screen(e),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
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
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "w", (function() {
				return O
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "z", (function() {
				return E
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "m", (function() {
				return B
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "v", (function() {
				return q
			})), n.d(t, "g", (function() {
				return W
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/media/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				a = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/postDraft.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				l = n("./src/telemetry/index.ts"),
				m = n("./src/telemetry/models/PostComposer.ts"),
				p = n("./src/telemetry/models/PostDraft.ts");
			const b = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				f = e => ({
					source: "post_composer",
					action: r.c.CLICK,
					...d.defaults(e),
					screen: d.screen(e),
					correlationId: Object(s.c)(s.a.PostComposer)
				}),
				h = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === i.h.MARKDOWN ? "markdown" : "rte"
				},
				g = e => {
					Object(l.a)({
						noun: "cancel",
						...f(e)
					})
				},
				v = e => {
					Object(l.a)({
						noun: "discard",
						...f(e)
					})
				},
				y = e => {
					Object(l.a)({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e),
						...f(e),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				O = e => {
					Object(l.a)({
						noun: "subreddit_selector",
						...f(e)
					})
				},
				_ = (e, t) => {
					Object(l.a)({
						noun: "post_type_selector",
						postComposer: {
							type: b[t]
						},
						...f(e)
					})
				},
				x = () => e => ({
					noun: "add_option",
					...f(e)
				}),
				I = () => e => ({
					noun: "voting_length",
					...f(e)
				}),
				E = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(l.a)({
						noun: t,
						...f(e)
					}) : Object(l.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						...f(e)
					})
				},
				j = (e, t, n) => {
					Object(l.a)({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						post: n ? d.post(e, n) : null,
						...f(e)
					})
				},
				S = (e, t) => {
					const n = t === i.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)({
						noun: n,
						...f(e)
					})
				},
				C = (e, t) => {
					Object(l.a)({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						...f(e)
					})
				},
				P = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(l.a)({
						...f(e),
						noun: "media",
						action: r.c.REJECT,
						actionInfo: {
							...d.actionInfo(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				k = (e, t) => {
					t.forEach(t => {
						const n = Object(o.f)(t.type);
						n && Object(l.a)({
							...f(e),
							action: r.c.DRAG,
							noun: n
						})
					})
				},
				T = (e, t, n) => {
					Object(l.a)({
						...f(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				w = (e, t, n) => {
					Object(l.a)({
						...f(e),
						noun: n,
						action: Object(m.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				N = e => M("input", e),
				L = () => M("add"),
				R = () => M("remove"),
				M = (e, t) => n => ({
					...f(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: b.imageOnly
					},
					action: r.c.CLICK
				}),
				D = e => {
					Object(l.a)({
						...f(e),
						noun: "hide_oc_description",
						action: r.c.CLICK
					})
				},
				F = (e, t) => {
					if (t) {
						const n = d.subredditById(e, t);
						if (n) return {
							subreddit: n
						};
						const r = d.profileById(e, t);
						if (r) return {
							profile: r
						}
					}
				},
				B = (e, t) => {
					const {
						draftId: n,
						destSubreddit: r
					} = t, s = Object(u.i)(e), o = Object(c.d)(e, {
						draftId: n
					}), i = {
						authorId: s ? s.id : void 0,
						createdTimestamp: o ? o.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case a.b.Link:
							i.type = p.DraftType.Link, i.urlLength = t.body.length;
							break;
						case a.b.Markdown:
							i.type = p.DraftType.Self, i.bodyTextLength = t.body.length;
							break;
						case a.b.RichText:
							i.type = p.DraftType.RichText, t.documentStats && (i.bodyTextLength = t.documentStats.textLength, i.numberRteImages = t.documentStats.rteImagesCount, i.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case a.b.Image:
							i.type = p.DraftType.Image;
							break;
						case a.b.Video:
							i.type = p.DraftType.Video
					}
					return {
						postDraft: i,
						...F(e, r.id)
					}
				},
				A = (e, t) => {
					const n = Object(u.i)(e),
						r = {
							authorId: n ? n.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case a.b.Link:
							r.type = p.DraftType.Link, r.urlLength = (t.body || "").length;
							break;
						case a.b.Markdown:
							r.type = p.DraftType.Self, r.bodyTextLength = (t.body || "").length;
							break;
						case a.b.RichText:
							r.type = p.DraftType.RichText
					}
					return {
						postDraft: r,
						...F(e, t.subredditId)
					}
				},
				U = (e, t) => {
					Object(l.a)({
						noun: "draft_load",
						...f(e),
						...B(e, t)
					})
				},
				H = (e, t) => {
					Object(l.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...f(e),
						...B(e, t)
					})
				},
				K = (e, t) => {
					Object(l.a)({
						noun: "draft_delete",
						...f(e),
						...A(e, t)
					})
				},
				V = e => {
					Object(l.a)({
						...f(e),
						noun: "social_connect_link",
						action: r.c.CLICK
					})
				},
				q = (e, t) => {
					Object(l.a)({
						...f(e),
						noun: "twitter_share_checkbox",
						action: Object(m.getToggleAction)(t)
					})
				},
				W = (e, t, n) => {
					Object(l.a)({
						...f(e),
						...B(e, t),
						noun: "draft_share",
						action: n ? r.c.ENABLE : r.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return E
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "s", (function() {
				return k
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "n", (function() {
				return A
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "w", (function() {
				return q
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "u", (function() {
				return J
			})), n.d(t, "v", (function() {
				return X
			})), n.d(t, "h", (function() {
				return Y
			}));
			var r = n("./node_modules/lodash/pick.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makePostDraftPageKey/index.ts"),
				a = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = n("./src/reddit/helpers/routeKey/index.ts"),
				u = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/Comment/index.ts"),
				p = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				f = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/lib/makePostCreationPageKey/index.ts"),
				v = n("./src/lib/makeSearchKey/index.ts"),
				y = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/searchResults.ts"),
				_ = n("./src/reddit/selectors/postDraft.ts"),
				x = n("./src/reddit/selectors/telemetry.ts"),
				I = n("./src/telemetry/index.ts");
			const E = (e, t, n, r, u, b) => {
					const {
						route: f
					} = e, {
						name: h
					} = f.meta;
					if (!h) return;
					const y = t.platform.currentPage;
					switch (h) {
						case o.Db.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, i = Object(p.r)(o), a = Object(d.a)(e, t, t.posts.models[i]);
							if (!a) return;
							const u = s && Object(m.f)(s),
								{
									sortToUse: l
								} = Object(c.a)(t, i),
								b = !0;
							Object(I.a)(T(a, i, u, n, r, l, b)(t));
							break
						}
						case o.Db.INDEX:
						case o.Db.LISTING:
						case o.Db.MULTIREDDIT:
						case o.Db.SUBREDDIT: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i,
								queryParams: a
							} = e.match, {
								sort: c = (s.sort ? s.sort : o.P.HOT)
							} = i, u = a.t;
							Object(I.a)(j(s.listingKey, c, n, r, u)(t));
							break
						}
						case o.Db.TOPIC: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i
							} = e.match, a = s.sort ? s.sort : o.Q, {
								sort: c = a
							} = i;
							Object(I.a)(j(s.listingKey, c, n, r)(t));
							break
						}
						case o.Db.PROFILE_OVERVIEW: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								params: i,
								queryParams: a
							} = e.match, {
								sort: c = o.vb
							} = i, u = a.t;
							Object(I.a)(S(s, c, n, r, u)(t));
							break
						}
						case o.Db.PROFILE_POSTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = o.vb,
								t: c = o.wb
							} = i;
							Object(I.a)(C(s, a, n, r, c)(t));
							break
						}
						case o.Db.PROFILE_COMMENTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = o.vb,
								t: c = o.wb
							} = i;
							Object(I.a)(P(s, a, n, r, c)(t));
							break
						}
						case o.Db.PROFILE_PRIVATE: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							Object(I.a)(k(s)(r, n)(t));
							break
						}
						case o.Db.PROFILE_MODERATION:
							b && N(t, !0);
							break;
						case o.Db.SETTINGS: {
							const s = e;
							Object(I.a)(K(n, r)(t)), s.match.params.page === o.Qb.Profile && Object(l.j)(t);
							break
						}
						case o.Db.POST_CREATION:
							if (b && u) {
								const e = Object(g.a)(u);
								Object(I.a)(w(e, n, r)(t))
							}
							break;
						case o.Db.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(i.a)(e.match.params);
							if (!o) return;
							D(t, o, s, n, r);
							break
						}
						case o.Db.SUBREDDIT_WIKI:
							Object(I.a)(G(n, r)(t));
							break;
						case o.Db.COINS:
							Object(I.a)(F(n, r)(t)), Object(I.a)(B()(t));
							break;
						case o.Db.PREMIUM:
							Object(I.a)(A(n, r)(t)), Object(I.a)(U()(t));
							break;
						case o.Db.APPEAL:
							Object(I.a)(H(n, r)(t));
							break;
						case o.Db.INBOX_PAGES:
							b && M(t);
							break;
						case o.Db.MODERATION_PAGES:
							b && L(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Db.COLLECTION_COMMENTS:
							b && X(t, !0);
							break;
						case o.Db.MODQUEUE_PAGES:
							b && R(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Db.SUBREDDIT_LEADERBOARD:
							b && Object(I.a)(W()(t));
							break;
						case o.Db.SEARCH_RESULTS:
							if (b) {
								const o = Object(d.e)(e);
								if (!o) return;
								Object(I.a)(J(o, Object(v.c)(s()(y && y.queryParams || {}, a.t)), n, r, y)(t))
							}
							break;
						case o.Db.PUBLIC_ACCESS_NETWORK:
							b && Object(I.a)(V()(t));
							break;
						case o.Db.GEOTAGGING:
							b && Object(I.a)(Q()(t));
							break;
						case o.Db.SUBREDDIT_CREATION:
							b && Object(I.a)(q()(t));
							break;
						case o.Db.MOD_LISTING:
							b && Y(t, !0)
					}
				},
				j = (e, t, n, r, s, o) => i => {
					const {
						api: a
					} = i.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(i),
						actionInfo: x.actionInfo(i, {
							success: c
						}),
						customFeed: x.customFeed(i),
						listing: x.listing(i, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: x.subreddit(i),
						timer: x.timer(n, r),
						userSubreddit: x.userSubreddit(i),
						adblock: x.adblock(i),
						postFlair: {
							title: o
						}
					}
				},
				S = (e, t, n, r, s) => o => {
					const i = x.listing(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(o),
						actionInfo: x.actionInfo(o, {
							success: c
						}),
						profile: x.profile(o),
						snoovatar: x.snoovatar(o),
						subreddit: x.subreddit(o),
						timer: x.timer(n, r),
						userSubreddit: x.userSubreddit(o),
						adblock: x.adblock(o)
					}
				},
				C = (e, t, n, r, s) => o => {
					const i = x.listing(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(o),
						actionInfo: x.actionInfo(o, {
							success: c
						}),
						profile: x.profile(o),
						subreddit: x.subreddit(o),
						timer: x.timer(n, r),
						userSubreddit: x.userSubreddit(o),
						adblock: x.adblock(o)
					}
				},
				P = (e, t, n, r, s) => o => {
					const i = x.profileComments(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.profileCommentsPage, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(o),
						actionInfo: x.actionInfo(o, {
							success: c
						}),
						profile: x.profile(o),
						subreddit: x.subreddit(o),
						timer: x.timer(n, r),
						userSubreddit: x.userSubreddit(o),
						adblock: x.adblock(o)
					}
				},
				k = e => (t, n) => r => {
					const s = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(r),
						actionInfo: x.actionInfo(r, {
							success: s
						}),
						profile: x.profile(r),
						subreddit: x.subreddit(r),
						timer: x.timer(n, t),
						userSubreddit: x.userSubreddit(r),
						adblock: x.adblock(r)
					}
				},
				T = (e, t, n, r, s, o, i) => a => {
					const {
						api: c
					} = a.pages.comments, d = !c.error[e] && !c.pending[e], u = Object(b.c)(a, {
						postId: t,
						isForceSelected: i
					}), l = {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(a),
						actionInfo: x.actionInfo(a, {
							success: d,
							reason: u || void 0
						}),
						post: x.post(a, t),
						profile: x.profile(a),
						subreddit: x.subreddit(a),
						timer: x.timer(r, s),
						userSubreddit: x.userSubreddit(a),
						adblock: x.adblock(a),
						postEvent: x.postEventI13nSelector(a, {
							postId: t
						}),
						postCollection: x.postCollectionI13nSelector(a, {
							postId: t
						}),
						listing: x.listing(a, void 0, {
							sort: o
						})
					};
					return n && (l.comment = x.comment(a, n)), l
				},
				w = (e, t, n) => r => {
					const s = r.creations.api.page.fetched[e],
						o = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(r),
						actionInfo: x.actionInfo(r, {
							success: s
						}),
						post: o ? x.post(r, o) : void 0,
						subreddit: x.subreddit(r),
						timer: x.timer(t, n),
						userSubreddit: x.userSubreddit(r),
						adblock: x.adblock(r)
					}
				},
				N = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						})
					})
				},
				L = (e, t, n, r) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						}),
						profile: x.profileById(e, Object(f.m)(e, r)),
						subreddit: x.subredditById(e, Object(h.F)(e, n)),
						userSubreddit: x.userSubreddit(e),
						adblock: x.adblock(e)
					})
				},
				R = (e, t, n) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						profile: x.profileById(e, Object(f.m)(e, n)),
						subreddit: x.subredditById(e, Object(h.F)(e, t)),
						userSubreddit: x.userSubreddit(e),
						adblock: x.adblock(e)
					})
				},
				M = e => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e)
					})
				},
				D = (e, t, n, r, s) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!n,
						a = Object(_.h)(e, n);
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: i
						}),
						subreddit: x.subreddit(e),
						timer: x.timer(r, s),
						userSubreddit: x.userSubreddit(e),
						adblock: x.adblock(e),
						...a ? Object(u.m)(e, a) : {}
					})
				},
				F = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(y.c)(y.a.GoldPayment),
					...x.defaults(n),
					timer: x.timer(e, t),
					adblock: x.adblock(n)
				}),
				B = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				A = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(y.c)(y.a.GoldPayment),
					...x.defaults(n),
					timer: x.timer(e, t),
					adblock: x.adblock(n)
				}),
				U = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				H = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...x.defaults(n),
					timer: x.timer(e, t)
				}),
				K = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(n),
					timer: x.timer(e, t)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: x.subreddit(e),
					...x.defaults(e)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				W = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...x.defaults(e)
				}),
				G = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(n),
					customFeed: x.customFeed(n),
					subreddit: x.subreddit(n),
					timer: x.timer(e, t),
					userSubreddit: x.userSubreddit(n),
					adblock: x.adblock(n)
				}),
				Q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x.defaults(e)
				}),
				J = (e, t, n, r, s, i) => a => {
					let c = !0;
					if (t.type.indexOf(o.Pb.Posts) > -1) {
						const {
							api: t
						} = a.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.Pb.Subreddits) > -1 || t.type.indexOf(o.Pb.Users) > -1) {
						const {
							api: t
						} = a.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					const d = x.paneName(a, s),
						u = x.structureType(a, s),
						l = a.platform.currentPage && a.platform.currentPage.urlParams && a.platform.currentPage.urlParams.subredditName ? x.subredditByName(a, a.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...O.c(a, t),
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(a),
						actionInfo: x.actionInfo(a, {
							success: c,
							paneName: d
						}),
						timer: x.timer(n, r),
						search: {
							...x.search(a, t, !0, s || void 0),
							...!!i && {
								originElement: i
							},
							queryId: Object(y.c)(y.a.SearchResults),
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						},
						...!!i && {
							correlationId: Object(y.c)(y.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !a.user.prefs.over18
						}
					}
				},
				X = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						})
					})
				},
				Y = (e, t) => {
					Object(I.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x.defaults(e),
						actionInfo: x.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "b", (function() {
				return M
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				u = "search_results_best",
				l = (e, t) => {
					const n = c.subreddit(e);
					return {
						screen: c.screen(e),
						subreddit: n && t && t.restrict_sr ? n : null
					}
				},
				m = (e, t) => n => {
					const r = t;
					return r.structureType = "related", {
						action: e,
						correlationId: Object(i.c)(i.a.SearchResults),
						noun: "related_search",
						source: d,
						search: c.search(n, r),
						...l(n)
					}
				},
				p = (e, t, n, r) => s => ({
					...l(s, n),
					source: d,
					action: "click",
					noun: t,
					actionInfo: c.actionInfo(s, r ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: r ? c.discoveryUnit(r) : null,
					search: c.search(s, n),
					post: c.post(s, e),
					media: c.media(s, e)
				}),
				b = (e, t, n, r, s) => o => ({
					...P(o, e, t, s, r, n),
					noun: "ad"
				}),
				f = (e, t, n) => s => {
					let o = !0;
					if (t.type.indexOf(r.Pb.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(r.Pb.Subreddits) > -1 || t.type.indexOf(r.Pb.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					return {
						...l(s, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: c.actionInfo(s, {
							success: o,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: c.discoveryUnit(n),
						search: c.search(s, t)
					}
				},
				h = (e, t) => n => ({
					action: "view",
					actionInfo: c.actionInfo(n),
					metaSearch: c.metaSearch(t),
					noun: e,
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				g = (e, t) => n => ({
					action: "click",
					actionInfo: c.actionInfo(n),
					noun: e,
					metaSearch: c.metaSearch(t),
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				v = (e, t, n) => r => ({
					source: d,
					action: "click",
					noun: c.SearchDropdownNouns.Recent,
					actionInfo: c.actionInfo(r, {
						paneName: "subreddit_dropdown",
						position: n + 1
					}),
					search: {
						query: e,
						originPageType: r.platform.currentPage ? c.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0,
						queryId: Object(i.c)(i.a.SearchResults)
					},
					...O(r, t)
				}),
				y = (e, t, n, r) => s => {
					const o = r.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: c.SearchDropdownNouns.Typeahead,
						actionInfo: c.actionInfo(s, {
							position: n + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: s.platform.currentPage ? c.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
							queryId: Object(i.c)(i.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: o.map(e => e.id),
							numberSubreddits: o.length
						},
						...O(s, t)
					}
				},
				O = (e, t) => {
					const n = t.isSubreddit && t.id ? c.subredditForSearch(e, t.id) : void 0,
						r = t.isProfile && t.id ? c.profileForSearch(e, t.id) : void 0,
						s = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? n || s : void 0,
						profile: t.isProfile ? r || s : void 0
					}
				},
				_ = (e, t, n) => r => ({
					action: t,
					actionInfo: c.actionInfo(r),
					noun: e,
					screen: c.screen(r),
					search: c.search(r, n),
					source: u
				});
			var x;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(x || (x = {}));
			const I = (e, t) => n => ({
					...l(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				E = (e, t) => n => ({
					...l(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				j = (e, t) => n => ({
					action: "click",
					correlationId: Object(i.c)(i.a.SearchResults),
					noun: e ? r.Ob.ToSubreddit : r.Ob.ToGlobal,
					search: c.search(n, t),
					source: d
				}),
				S = (e, t, n, r) => s => ({
					...l(s, n),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(s, {
						relativePosition: c.getRelativePostOrder(s, t, e)
					}),
					search: {
						...c.search(s, n),
						...!!r && {
							originElement: r
						}
					},
					post: c.post(s, t)
				}),
				C = (e, t, n, r, s) => o => P(o, e, t, n, r, s),
				P = (e, t, n, r, s, a) => {
					const u = c.paneName(e, r),
						l = c.postRelativePosition(e, t, s, a),
						m = c.amountOfElementsBeforePost(e, n, s, a, u),
						p = null !== l ? m + l : null,
						b = c.structureType(e, r),
						f = {
							...c.search(e, n, !0, r || void 0),
							structureType: b,
							queryId: Object(i.c)(i.a.SearchResults)
						};
					return {
						source: d,
						action: o.c.CLICK,
						noun: "post",
						actionInfo: r ? {
							pageType: c.getPageTypeFromCurrentPage(r),
							paneName: u,
							position: p,
							relativePosition: l
						} : c.actionInfo(e, {
							paneName: u,
							position: p,
							relativePosition: l
						}),
						search: f,
						post: c.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: a ? c.discoveryUnit(a) : null
					}
				},
				k = (e, t, n, r, s, o) => i => T(i, e, t, n, r, s, o),
				T = (e, t, n, r, u, l, m) => {
					if (!r) {
						r = Object(a.D)(e, {
							postId: l
						}).belongsTo
					}
					const p = c.paneName(e, n);
					let b, f;
					if (l) {
						b = c.postRelativePosition(e, l, u, m);
						const n = c.amountOfElementsBeforePost(e, t, u, m, p);
						f = null !== b ? n + b : null
					} else {
						b = c.communityRelativePosition(e, r.id, u, m);
						const t = c.amountOfElementsBeforeCommunity(e, u, m);
						f = null !== b ? t + b : null
					}
					const h = c.structureType(e, n),
						g = {
							...c.search(e, t, !0, n || void 0),
							structureType: h,
							queryId: Object(i.c)(i.a.SearchResults)
						};
					return {
						source: d,
						action: o.c.CLICK,
						noun: r.type,
						search: g,
						subreddit: r.type === s.a.SUBREDDIT ? c.subredditForSearch(e, r.id) : void 0,
						profile: r.type === s.a.PROFILE ? c.profileForSearch(e, r.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: m ? c.discoveryUnit(m) : null,
						actionInfo: n ? {
							pageType: c.getPageTypeFromCurrentPage(n),
							paneName: p,
							position: f,
							relativePosition: b
						} : c.actionInfo(e, {
							paneName: p,
							position: f,
							relativePosition: b
						}),
						post: l ? c.post(e, l) : void 0
					}
				},
				w = (e, t) => n => ({
					...l(n, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: {
						...c.search(n, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: c.subreddit(n)
				}),
				N = (e, t, n, r, s) => i => ({
					...P(i, t, n, r, e, s),
					action: o.c.VIEW
				}),
				L = (e, t, n, r) => s => ({
					...l(s, n),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(s, {
						relativePosition: c.getRelativePostOrder(s, t, e),
						position: c.getAbsoluteOrder(s, t, e)
					}),
					search: {
						...c.search(s, n),
						...!!r && {
							originElement: r
						}
					},
					post: c.post(s, t)
				}),
				R = (e, t, n) => r => ({
					...l(r),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(r),
					search: {
						...c.search(r, t),
						...!!n && {
							originElement: n
						}
					},
					[e]: c[e](r)
				}),
				M = (e, t) => n => ({
					...l(n, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
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
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? s.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactDownvoteWrapper, n.className)
			}), s.a.createElement(u, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.downvoteWrapper, n.className)
			}), s.a.createElement(u, {
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
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? s.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactUpvoteWrapper, n.className)
			}), s.a.createElement(u, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : s.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.upvoteWrapper, n.className)
			}), s.a.createElement(u, {
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
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", c({
				className: Object(o.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/colors.ts");
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/selectors/structuredStyles.ts"),
				l = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.t)(),
				f = Object(i.c)({
					isEditing: u.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				h = Object(o.b)(f),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: r,
					isCollectionLayout: o,
					isEditing: i,
					layout: a,
					pageLayer: c,
					...d
				}) => s.a.createElement("div", d);
			t.a = b(h(({
				className: e,
				...t
			}) => s.a.createElement(g, p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
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
				return j
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class f extends s.a.Component {
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
			var h = Object(b.a)(f);
			var g = e => s.a.createElement(h, e),
				v = n("./src/reddit/layout/page/Listing/index.m.less"),
				y = n.n(v);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: r,
						theme: o,
						...a
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return s.a.createElement("div", O({
						className: Object(i.a)(y.a.backgroundContainer, n),
						style: d
					}, a))
				}),
				x = c.a.div("Body", y.a),
				I = c.a.div("Sidebar", y.a),
				E = e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null;

			function j(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					r = e.sidebar && s.a.createElement(I, {
						className: e.isCollectionLayout ? y.a["m-collectionLayout"] : y.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = s.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, r, a) : s.a.createElement(s.a.Fragment, null, a, r);
				const m = e.disableFullscreen ? `${e.maxWidth||l.a+2*d.m}px` : "100%";
				return s.a.createElement(g, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(i.a)(y.a.outerContainer, u.i, e.className),
					ref: e.containerRef
				}, s.a.createElement(_, {
					className: u.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: y.a.innerContainer
				}, s.a.createElement("div", {
					className: y.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, E(e), s.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), s.a.createElement(x, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("inlineRow", o.a)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				l = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/modListing/index.ts"),
				p = n("./src/reddit/components/EmptySubreddit.tsx"),
				b = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = n("./src/reddit/components/JumpToContent/index.tsx"),
				h = n("./src/reddit/components/ListingPostList/index.tsx"),
				g = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/higherOrderComponents/asModal/index.tsx"),
				O = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				I = n("./src/reddit/controls/TextButton/index.tsx"),
				E = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				j = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				S = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/modQueue.ts"),
				P = n("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				k = n.n(P);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = Object(y.a)(e => i.a.createElement(_.d, {
				className: k.a.modalBody
			}, i.a.createElement(_.h, null, i.a.createElement(j.a, null, i.a.createElement(_.p, {
				className: k.a.modalTitle
			}, i.a.createElement(E.a, {
				className: k.a.modIcon
			}), T._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement(I.a, {
				onClick: e.onCloseModal
			}, i.a.createElement(_.b, null)))), i.a.createElement(_.k, {
				className: k.a.modalMain
			}, i.a.createElement("div", {
				className: k.a.modalDescription
			}, T._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), i.a.createElement(x.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), N = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
				className: k.a.feedDetailsTitle
			}, i.a.createElement(E.a, {
				className: k.a.modIcon
			}), T._("r/Mod", null, {
				hk: "2a9ICx"
			})), i.a.createElement("div", {
				className: k.a.feedDetailsDescription
			}, T._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? i.a.createElement(x.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : i.a.createElement("div", {
				className: k.a.loadingBar
			})), L = Object(c.c)({
				isModalOpen: Object(S.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: C.f
			});
			var R = Object(a.b)(L, (e, {}) => ({
					toggleModal: () => e(Object(O.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: n,
						toggleModal: r
					} = e;
					return n ? i.a.createElement(i.a.Fragment, null, i.a.createElement(N, {
						moderatedCommunitiesIds: n,
						onSeeMoreDetails: r
					}), t && i.a.createElement(w, {
						moderatedCommunitiesIds: n,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				M = n("./node_modules/react-router-redux/es/index.js"),
				D = n("./src/reddit/components/TrackingHelper/index.tsx"),
				F = n("./src/reddit/contexts/PageLayer/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx");
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
			var K = n("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var q = n("./src/reddit/constants/keycodes.ts"),
				W = n("./src/reddit/layout/row/Inline/index.tsx"),
				G = n("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Q = n.n(G);
			const J = Object(c.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
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
						e.key === q.b.Enter && this.submitInput()
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
						placeholder: v.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), i.a.createElement(B.i, {
						"aria-label": v.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, v.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && i.a.createElement("div", {
						className: Q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var Y = Object(a.b)(J, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(D.c)(X)),
				z = n("./src/lib/lessComponent.tsx"),
				Z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = n("./src/reddit/icons/fonts/Clear/index.tsx"),
				ee = n("./src/reddit/selectors/profile.ts"),
				te = n("./src/reddit/selectors/subreddit.ts"),
				ne = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				re = n.n(ne);
			const se = z.a.wrapped(Z.b, "SubredditIcon", re.a),
				oe = Object(c.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const n = Object(te.A)(e, {
							subredditName: t.subredditName
						});
						if (!n) {
							const n = (e => e.startsWith(d.Wb) ? e.slice(2) : e)(t.subredditName);
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
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(U()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? i.a.createElement(x.a, {
						className: re.a.row,
						to: e.subredditOrProfile.url
					}, i.a.createElement(se, {
						subredditOrProfile: e.subredditOrProfile
					}), i.a.createElement("span", {
						className: re.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && i.a.createElement("button", {
						"aria-label": v.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: re.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, i.a.createElement($.a, null))) : null
				}
			}
			var ae = Object(a.b)(oe, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(D.c)(ie)),
				ce = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				de = n.n(ce);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var le = ({
					hiddenSubredditsNames: e
				}) => {
					const t = e.map(e => i.a.createElement(ae, {
						key: e,
						subredditName: e
					}));
					return i.a.createElement(i.a.Fragment, null, e.length ? i.a.createElement("div", {
						className: de.a.rows
					}, t) : i.a.createElement("div", {
						className: de.a.noRows
					}, ue._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				me = n("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				pe = n.n(me);
			const {
				fbt: be
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(F.t)({
				filtered: e => !!e && Object(K.d)(e.url)
			}), he = Object(c.c)({
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
						className: pe.a.container
					}, i.a.createElement("div", {
						className: pe.a.hideCommunitiesHeader
					}, be._("Hide communities", null, {
						hk: "15OtHo"
					})), i.a.createElement(B.o, {
						className: pe.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? be._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : be._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && i.a.createElement("div", {
						className: pe.a.inputContainer
					}, i.a.createElement(Y, null), i.a.createElement(le, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var ve = fe(Object(a.b)(he, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(M.b)(t ? K.a : K.b))
				}))(Object(D.c)(ge))),
				ye = n("./src/reddit/components/SidebarContainer/index.tsx"),
				Oe = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				_e = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var xe = () => i.a.createElement(ye.a, null, i.a.createElement(_e.a, {
					title: v.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, i.a.createElement(R, null), i.a.createElement(ve, null)), i.a.createElement(Oe.a, null)),
				Ie = n("./src/reddit/constants/page.ts"),
				Ee = n("./src/reddit/constants/parameters.ts"),
				je = n("./src/reddit/helpers/trackers/screenview.ts"),
				Se = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ce = n("./src/reddit/selectors/moderatorPermissions.ts");
			const Pe = Object(c.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || d.P.HOT, (e, {
					match: t
				}) => Object(K.d)(t.path), Ce.i, Ce.c, (e, t, n, r, o) => {
					const i = s()([...Object(u.a)(e)]),
						a = Ee.x in i && i[Ee.x].toUpperCase(),
						c = "string" == typeof a && a in d.Ub ? d.Ub[a] : d.Vb,
						m = n ? Ie.e : Ie.d;
					return {
						filtered: n,
						isModerator: r,
						isModeratorWithPostPerms: o,
						listingKey: Object(l.a)(m, t, i),
						listingName: m,
						sort: t,
						timeSort: c
					}
				}),
				ke = Object(a.b)(Pe, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Te extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(je.f)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => i.a.createElement(p.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? K.b : K.a;
					return i.a.createElement("div", null, this.props.isModeratorWithPostPerms ? i.a.createElement(Se.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(b.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), i.a.createElement(f.a, null), i.a.createElement(h.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: i.a.createElement(xe, null)
					}) : i.a.createElement(g.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = ke(Te)
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => r.gc.Enabled === Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: r.ac
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.df9c0f431cefa661e236.js.map