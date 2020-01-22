// https://www.redditstatic.com/desktop2x/Frontpage.f70b1e077e7b4caddd72.js
// Retrieved at 1/22/2020, 4:32:02 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage", "Explore~ProfileSnoobuilder~SubredditWiki", "FrontpageSidebar"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var s = [];
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, r.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(r) {
							var a = r.element,
								o = i(a),
								c = this._rootContainsTarget(a),
								d = r.entry,
								l = t && c && this._computeTargetAndRootIntersection(a, s),
								m = r.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: a,
									boundingClientRect: o,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var r, a, o, c, l, m, p, u, b = i(s), h = d(s), g = !1; !g;) {
								var x = null,
									y = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == y.display) return;
								if (h == this.root || h == t ? (g = !0, x = n) : h != t.body && h != t.documentElement && "visible" != y.overflow && (x = i(h)), x && (r = x, a = b, o = void 0, c = void 0, l = void 0, m = void 0, p = void 0, u = void 0, o = Math.max(r.top, a.top), c = Math.min(r.bottom, a.bottom), l = Math.max(r.left, a.left), m = Math.min(r.right, a.right), u = c - o, !(b = (p = m - l) >= 0 && u >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								h = d(h)
							}
							return b
						}
					}, r.prototype._getRootRect = function() {
						var e;
						if (this.root) e = i(this.root);
						else {
							var s = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || n.clientWidth,
								width: s.clientWidth || n.clientWidth,
								bottom: s.clientHeight || n.clientHeight,
								height: s.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, r.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, s) {
								return "px" == t.unit ? t.value : t.value * (s % 2 ? e.width : e.height) / 100
							})),
							s = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return s.width = s.right - s.left, s.height = s.bottom - s.top, s
					}, r.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== n)
							for (var r = 0; r < this.thresholds.length; r++) {
								var a = this.thresholds[r];
								if (a == s || a == n || a < s != a < n) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, r.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, r.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, r.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = r, e.IntersectionObserverEntry = n
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
						s = t.width * t.height,
						n = this.intersectionRect,
						r = n.width * n.height;
					this.intersectionRatio = s ? r / s : this.isIntersecting ? 1 : 0
				}

				function r(e, t) {
					var s, n, r, a = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (a.root && 1 != a.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							s(), r = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(a.rootMargin), this.thresholds = this._initThresholds(a.threshold), this.root = a.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function a(e, t, s, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function o(e, t, s, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function i(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (s) {}
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
					for (var s = t; s;) {
						if (s == e) return !0;
						s = d(s)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var n;
				return s(e, (function(e, s, r) {
					if (t(e, s, r)) return n = s, !1
				})), n
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFindKey.js"),
				r = s("./node_modules/lodash/_baseForOwn.js"),
				a = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, a(t, 3), r)
			}
		},
		"./node_modules/lodash/first.js": function(e, t, s) {
			e.exports = s("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toFinite.js"),
				o = parseFloat,
				i = Math.min,
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
					return i(e + l * (t - e + o("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var s = i,
					d = c(e, i);
				t = r(t), e -= i;
				for (var l = n(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				y = s("./src/lib/lessComponent.tsx");
			const O = y.a.div("Container", x.a),
				f = y.a.div("LoadingHitbox", x.a),
				v = e => setTimeout(() => {
					throw e
				}, 0);
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					v(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (r) {
						v(r)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						v(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(h.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						v(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && d.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && d.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? r.a.createElement(O, {
						"data-slot": t
					}, r.a.createElement(f, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: s
					})
				}
			}
			E.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(a.b)(() => Object(o.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(p.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(u.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.b)(E))
		},
		"./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/categories.tsx"),
				o = s("./src/reddit/constants/topic.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				const {
					eventCategory: t
				} = e, s = d(e, ["eventCategory"]);
				return r.a.createElement(i.a, c({}, s, {
					rel: "nofollow",
					to: Object(o.a)(a.b)
				}), t.name)
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "M27cOlSyrfsU8oXk4Kssq",
				icon: "M27cOlSyrfsU8oXk4Kssq",
				ChangeButton: "joDTxMCm6RDjn1_JXPEOR",
				changeButton: "joDTxMCm6RDjn1_JXPEOR",
				ChangeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				changeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				ModalBody: "_3x6FwuogSdxQ1wuQZecnpe",
				modalBody: "_3x6FwuogSdxQ1wuQZecnpe"
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/categories.tsx"),
				p = s("./src/reddit/constants/topic.ts"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 13 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
					fill: "inherit",
					fillRule: "evenodd",
					transform: "translate(-4 -2)"
				})),
				x = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/categoriesPlacement.ts"),
				f = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less"),
				v = s.n(f);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const C = "geopopular-category-modal",
				S = () => {},
				N = Object(o.c)({
					geoObject: O.a,
					isModalOpen: Object(y.b)(C)
				}),
				w = Object(a.b)(N, e => ({
					toggleModal: () => e(Object(c.i)(C))
				})),
				_ = () => r.a.createElement("div", {
					className: v.a.ModalBody
				}, r.a.createElement(x.a, {
					className: v.a.ChangeIcon
				}));
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.changeGeo = () => {
						this.props.toggleModal(), this.props.sendEvent(Object(b.a)(m.c))
					}
				}
				render() {
					const e = this.props,
						{
							changeButtonClassName: t,
							geoObject: s,
							isModalOpen: n,
							sendEvent: a,
							toggleModal: o
						} = e,
						c = j(e, ["changeButtonClassName", "geoObject", "isModalOpen", "sendEvent", "toggleModal"]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(u.a, E({}, c, {
						rel: "nofollow",
						to: Object(p.a)(m.c)
					}), r.a.createElement(g, {
						className: v.a.Icon
					}), " ", s), r.a.createElement("button", {
						className: Object(i.a)(v.a.ChangeButton, t),
						onClick: this.changeGeo
					}, r.a.createElement(x.a, {
						className: v.a.ChangeIcon
					})), n && r.a.createElement(d.a, {
						actionText: Object(h.c)("Got it"),
						headerText: Object(h.c)("Feature is not available now"),
						modalBody: _,
						modalId: C,
						onConfirm: S,
						toggleModal: o
					}))
				}
			}
			t.a = w(Object(l.b)(k))
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Le71sZe40-ak2-JlezTO9",
				header: "_1xEfG7rp7vrKfyvMhw4d7B",
				categoryList: "_2TokM04UC_UEG0cmYY5zqV",
				expanded: "H2nL15newZjevdZ9kmsw6",
				categoryLink: "_3p0xqZowgYYjYMOdinU151",
				active: "_1eQr_TkUOm6M6XqM8GTZqp",
				button: "_36EQoGTqXwZI27n50gESaC"
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => {
				const {
					category: t,
					children: s,
					className: n,
					isActive: c,
					tabIndex: m
				} = e, p = Object(a.a)(d.a.categoryLink, c && d.a.active, n);
				return r.a.createElement("li", null, r.a.createElement(o.a, l({}, t.anchorProps, {
					className: p,
					"data-active": c,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: m,
					to: t.path || ""
				}), r.a.createElement(i.c, null, s, t.customIcon)))
			};
			var p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/name/index.ts");
			const h = 36;
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: s
						} = this.props, {
							isExpanded: n
						} = this.state;
						if (!t || n || !s) return;
						return s < e.findIndex(e => e.name === t) + 1
					}, this.toggleExpanded = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}), this.props.onMoreLessClick)
					}
				}
				componentDidMount() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				componentDidUpdate() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				renderCategoryList() {
					const {
						categories: e,
						categoryItemClassName: t,
						categoryItemHeight: s = h,
						categoryListContainerClassName: n,
						children: o,
						childrenOffset: i = 0,
						currentCategoryName: c,
						initialNumberOfCategories: l,
						onItemClick: p
					} = this.props, {
						isExpanded: u
					} = this.state, g = !u && l && s * l, x = i + (e ? s * e.length : 0), y = Object(a.a)(d.a.categoryList, u && d.a.expanded), O = e => !(!c || c !== Object(b.f)(e)), f = r.a.createElement("ul", {
						className: y,
						style: {
							height: g || x
						}
					}, o, e && e.map((e, n) => {
						const a = i + n * s;
						return r.a.createElement(m, {
							category: e,
							className: t,
							isActive: O(e.name),
							key: e.id,
							onSendEventClick: p,
							tabIndex: g && a >= g ? -1 : 0
						}, e.name)
					}));
					return r.a.createElement("div", {
						className: Object(a.a)(d.a.categoryListContainer, n)
					}, f)
				}
				render() {
					const {
						buttonClassName: e,
						buttonText: t = "Show",
						categories: s,
						className: n,
						header: o,
						headerClassName: c,
						initialNumberOfCategories: l
					} = this.props, m = s && l && s.length > l, b = m && !this.state.isExpanded ? "".concat(t, " More") : "".concat(t, " Less"), h = Object(a.a)(n, d.a.container);
					return r.a.createElement(p.a, {
						className: h,
						contentOnly: !0
					}, r.a.createElement("div", {
						className: Object(a.a)(d.a.header, c)
					}, r.a.createElement("h2", null, o || r.a.createElement(i.c, null, "Categories"))), this.renderCategoryList(), m && r.a.createElement(u.n, {
						className: Object(a.a)(d.a.button, e),
						onClick: this.toggleExpanded
					}, r.a.createElement(i.c, null, b)))
				}
			}
			t.a = g
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/LRUCache/index.ts");
			class o {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
					this.listenerMap[e].push(...s)
				}
				removeListeners(e) {
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = s.length,
						a = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !s.includes(e)), this.listenerMap[e].length - a === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
			var i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts");
			var l = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("CommunityCrossPollinationFocusedVertical").then(s.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null
				}),
				m = s("./src/reddit/constants/page.ts");
			s.d(t, "a", (function() {
				return u
			}));
			const p = new a.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: n,
						listingPosition: a
					} = e, c = "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n);
					let d = p.get(c);
					if (d) return d;
					const u = new o;
					return d = {
						estHeight: i.c,
						id: "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n),
						trackOnEnteredViewport() {
							u.publish(i.b)
						},
						render: () => r.a.createElement(l, {
							listingPosition: a,
							numInstance: t,
							listingKey: n,
							listingName: m.c,
							pubsub: u
						})
					}, p.set(c, d), d
				}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				c = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(a.a)(Object(i.c)(e.exploreV2Variant) ? d.a.oldContainer : e.exploreV2Variant ? Object(a.a)(d.a.smallContainer, o.b) : d.a.heroContainer, e.className)
			}, r.a.createElement("div", {
				className: Object(a.a)(d.a.header, e.headerClassName)
			}, e.header), r.a.createElement("div", {
				className: Object(a.a)(e.hidePadding ? d.a.bodyHidePadding : d.a.body, e.bodyClassName)
			}, e.children))
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
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
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/upperFirst.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/isFakeSubreddit/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/components/EmptySubreddit.m.less"),
				g = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const y = x.a.div("PrimaryText", g.a),
				O = x.a.div("SecondaryText", g.a),
				f = x.a.div("MainContentWrapper", g.a),
				v = x.a.div("MainContent", g.a),
				E = x.a.wrapped(b.a, "BackgroundPlaceholder", g.a),
				j = x.a.wrapped(u.h, "SubmitLink", g.a),
				C = x.a.img("SnooImg", g.a),
				S = x.a.div("EmptyHomepage", g.a),
				N = e => {
					switch (e) {
						case c.N.RISING:
							return Object(m.c)("Create a new post and take all the glory");
						case c.N.TOP:
						case c.N.CONTROVERSIAL:
							return null;
						default:
							return Object(m.c)("Be the first to till this fertile land.")
					}
				},
				w = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = N(s);
					return o.a.createElement(v, null, o.a.createElement(y, null, (e => {
						switch (e) {
							case c.N.RISING:
								return Object(m.c)("Looks like nothing is rising fast enough in this subreddit");
							case c.N.TOP:
							case c.N.CONTROVERSIAL:
								return Object(m.c)("No posts were found using the ".concat(r()(e), " sort. Try changing the sort."));
							default:
								return Object(m.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(d.a)(t) && !!n && o.a.createElement(o.a.Fragment, null, o.a.createElement(O, null, N(s)), o.a.createElement(j, {
						to: "/r/".concat(t, "/submit")
					}, o.a.createElement(l.c, null, "Add a post"))))
				},
				_ = () => o.a.createElement(v, null, o.a.createElement(C, {
					src: "".concat(i.a.assetPath, "/img/snoo_discovery@1x.png")
				}), o.a.createElement(y, null, o.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), o.a.createElement(j, {
					to: "/r/popular"
				}, o.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = x.a.wrapped(e => o.a.createElement(S, null, o.a.createElement(E, {
				isLoading: !1,
				layout: p.g.Classic
			}), o.a.createElement(f, null, e.subreddit ? o.a.createElement(w, e) : o.a.createElement(_, null))), "Component", g.a)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1VJk0sTYGQyG0P4nqFVu9v",
				container: "_1VJk0sTYGQyG0P4nqFVu9v",
				Circle: "HpLkUWI5bwugRHhQqw2dy",
				circle: "HpLkUWI5bwugRHhQqw2dy",
				LiveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				liveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				ViewCount: "_3bktW9VjGiBE1xME2TqZB7",
				viewCount: "_3bktW9VjGiBE1xME2TqZB7",
				Title: "_3p01VQUbuFFSnavk8xkFh7",
				title: "_3p01VQUbuFFSnavk8xkFh7",
				OutboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				outboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				Description: "_3ddCMJofyzb6-UWHgIC9Sd",
				description: "_3ddCMJofyzb6-UWHgIC9Sd",
				AnnouncementContainer: "PSG6gLueWddB1kqvaOxoT",
				announcementContainer: "PSG6gLueWddB1kqvaOxoT",
				AnnouncementTitle: "_3d6jHnvibW6_495D6WkUop",
				announcementTitle: "_3d6jHnvibW6_495D6WkUop",
				AnnouncementDescription: "_1lbiRTrvKfY8bf0xki99ZU",
				announcementDescription: "_1lbiRTrvKfY8bf0xki99ZU",
				Button: "j5ti73p7EAjBJvJlSjppe",
				button: "j5ti73p7EAjBJvJlSjppe",
				CloseButton: "_29ji6lMZpwWMBLRk4eMGw-",
				closeButton: "_29ji6lMZpwWMBLRk4eMGw-",
				iconStyles: "_2E0bnlMJwNjmvW3Qsu8PlF"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/helpers/trackers/banners.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/svgs/Circle/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				O = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/Snoo/index.tsx");
			var v = e => a.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("polygon", {
					points: "0,40 14.3,29.2 10.8,25.7"
				}), a.a.createElement("path", {
					d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
				})))),
				E = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				j = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/models/Live/index.ts");
			var S = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/FeaturedLiveEntrypoint/index.m.less"),
				w = s.n(N);
			const _ = "".concat(n.a.redditUrl, "/live/"),
				k = c.a.a("Container", w.a),
				P = c.a.wrapped(h.a, "Circle", w.a),
				L = c.a.div("LiveLabel", w.a),
				I = c.a.div("ViewCount", w.a),
				T = c.a.div("Title", w.a),
				B = c.a.wrapped(O.a, "OutboundLink", w.a),
				M = c.a.div("Description", w.a),
				D = c.a.div("AnnouncementContainer", w.a),
				A = c.a.wrapped(T, "AnnouncementTitle", w.a),
				R = c.a.wrapped(M, "AnnouncementDescription", w.a),
				F = c.a.wrapped(m.g, "Button", w.a),
				U = c.a.wrapped(g.a, "CloseButton", w.a),
				W = Object(i.c)({
					featuredLiveThread: e => e.live.featured,
					language: S.S
				}),
				H = Object(o.b)(W);
			class V extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						announcementBannerHidden: !0
					}, this.dismissModal = () => {
						this.setState({
							announcementBannerHidden: !0
						});
						const {
							id: e,
							numTimesDismissable: t
						} = this.props.featuredLiveThread;
						Object(p.E)(e, t), this.props.sendEvent(Object(u.d)(e))
					}, this.clickedButtonCta = () => {
						this.props.sendEvent(Object(u.c)(this.props.featuredLiveThread.id))
					}
				}
				componentDidMount() {
					const {
						featuredLiveThread: e,
						sendEvent: t
					} = this.props;
					if (e && e.isAnnouncement) {
						const s = Object(p.d)(e.id);
						s < e.numTimesDismissable && (this.setState({
							announcementBannerHidden: !1
						}), t(Object(u.e)(e.id)), Object(p.E)(e.id, s + 1))
					}
				}
				render() {
					const {
						featuredLiveThread: e,
						language: t
					} = this.props;
					if (!e) return null;
					if (e.isAnnouncement) {
						if (this.state.announcementBannerHidden) return null; {
							const t = {
								[C.b.Announcement]: a.a.createElement(v, {
									className: w.a.iconStyles
								}),
								[C.b.Document]: a.a.createElement(E.a, {
									className: w.a.iconStyles
								}),
								[C.b.Snoo]: a.a.createElement(f.a, {
									className: w.a.iconStyles
								}),
								[C.b.Ama]: a.a.createElement(x.a, {
									className: w.a.iconStyles
								}),
								[C.b.Moderation]: a.a.createElement(y.a, {
									className: w.a.iconStyles
								})
							};
							return a.a.createElement(D, null, a.a.createElement(j.a, null, t[e.icon], a.a.createElement(A, null, e.title), a.a.createElement(U, {
								onClick: this.dismissModal
							})), a.a.createElement(R, null, e.description), a.a.createElement(F, {
								target: "_blank",
								href: e.announcementUrl,
								onClick: this.clickedButtonCta
							}, e.buttonCta))
						}
					}
					return a.a.createElement(k, {
						href: "".concat(_).concat(e.id)
					}, a.a.createElement(j.a, null, a.a.createElement(P, null), a.a.createElement(L, null, a.a.createElement(b.c, null, "live")), a.a.createElement(M, null, "·"), a.a.createElement(I, null, Object(d.c)(t, "live.viewers", e.viewerCount))), a.a.createElement(T, null, e.title, a.a.createElement(B, null)), a.a.createElement(M, null, e.description))
				}
			}
			t.a = H(Object(l.b)(V))
		},
		"./src/reddit/components/FrontpageSidebar/Communities/Community/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1BlAvWVMCHrKuk1aBiD0rO",
				icon: "SdGgakyQ3Q1wV1BG02KpS",
				name: "_3UvQsAqQD7ZaeOwhy_dmq"
			}
		},
		"./src/reddit/components/FrontpageSidebar/Communities/Community/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1JH-ukr83Pz2SZd5gYfjin",
				icon: "_1fk4TxaaWwKgRCawvegijy",
				name: "_2oFobGD6mMTl7VOWU4WEzg",
				link: "eizo6O6TAwt9GD2gH-eXI",
				unsubscribe: "x0jD2G0P19ywQfbEuUczh",
				unsubscribeIcon: "_37iZf6F-3XPLqF7SZ0AmYC"
			}
		},
		"./src/reddit/components/FrontpageSidebar/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				title: "Akj-sMP73429cfA-JV1_p",
				description: "_2wBIRCyBuaNPTzZ3B2VMkb",
				community: "Ncc60HBC_dv44qnV2OevV"
			}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/IdCard/async.tsx"),
				c = s("./src/config.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/components/LayerPromotionWidget/index.m.less"),
				m = s.n(l);
			const p = "".concat(c.a.assetPath, "/img/layer_promotion_image.png");
			var u = () => r.a.createElement("div", null, r.a.createElement("a", {
					href: "http://reddit.com/r/Layer"
				}, r.a.createElement("img", {
					alt: Object(d.c)("Layer promotion"),
					className: m.a.image,
					src: p
				}))),
				b = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				f = s("./src/reddit/components/PremiumCTA/index.m.less"),
				v = s.n(f);
			class E extends r.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return r.a.createElement(h.a, null, r.a.createElement(g.a, {
						className: e,
						contentOnly: !0
					}, r.a.createElement("div", {
						className: v.a.wrapper
					}, r.a.createElement(O.a, {
						className: v.a.icon
					}), r.a.createElement("div", {
						className: v.a.content
					}, r.a.createElement("div", {
						className: v.a.title
					}, r.a.createElement(y.c, null, "Reddit Premium")), r.a.createElement("div", {
						className: v.a.description
					}, r.a.createElement(y.c, null, "The best Reddit experience, with monthly Coins"))), r.a.createElement(x.e, {
						className: v.a.cta,
						onClick: t
					}, r.a.createElement(y.c, null, "Try Now")))))
				}
			}
			var j = Object(a.b)(void 0, e => ({
					onClickPremium: () => e(Object(b.b)("/premium"))
				}))(E),
				C = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/makeListingKey/index.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				_ = s("./src/reddit/components/SidebarPostList/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				I = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				T = s("./src/reddit/selectors/categoriesPlacement.ts"),
				B = s("./src/reddit/selectors/discoveryUnit.ts"),
				M = s("./node_modules/lodash/uniq.js"),
				D = s.n(M),
				A = s("./src/lib/makeOnboardingSubredditsKey/index.ts"),
				R = s("./src/reddit/constants/categories.tsx"),
				F = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				U = s("./src/reddit/selectors/meta.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/subreddit.ts");
			const V = Object(S.a)(P.b.Popular, C.N.TOP),
				K = Object(o.a)(e => Object(W.N)(e, {
					listingKey: V
				}), e => D()(e.map(e => e.belongsTo.id))),
				z = (Object(o.a)(e => {
					const t = K(e);
					return Object(H.Z)(e, {
						subredditIds: t
					})
				}, e => e.map(e => e.name)), e => {
					const t = {
							city: Object(U.a)(e),
							country: Object(U.b)(e),
							region: Object(U.h)(e)
						},
						s = Object(A.a)(t);
					return Object(H.q)(e, {
						key: s
					})
				}),
				Q = Object(o.a)(z, R.d);
			var G = s("./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less"),
				q = s.n(G);
			const Y = 2,
				Z = 5,
				J = Object(o.c)({
					discoveryUnit: e => Object(B.f)(e, {
						unitName: I.g
					}),
					geoObject: T.a,
					posts: e => {
						const t = Q(e),
							s = Object(S.a)(t, C.N.HOT);
						return Object(_.b)(e, {
							listingKey: s
						})
					},
					subredditName: Q
				});
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.loadMorePosts = (e, t) => {
						t - e <= Y && this.props.loadMorePosts(this.props.subredditName)
					}, this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.B)(this.props.discoveryUnit, e))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e,
						geoObject: t,
						posts: s,
						subredditName: n
					} = this.props;
					if (0 === s.length) return null;
					const a = Object(S.a)(n, C.N.HOT);
					return r.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, r.a.createElement(w.a, {
						showIcon: !0
					}, r.a.createElement("span", {
						className: q.a.GeoObject
					}, t), r.a.createElement(y.c, null, "trends")), r.a.createElement(_.a, {
						listingKey: a,
						listingName: P.b.Popular,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: Z
					}))
				}
			}
			var $ = Object(a.b)(J, e => ({
				loadMorePosts: t => e(Object(N.u)({
					sort: C.N.TOP,
					subredditName: t
				}))
			}))(Object(k.b)(X));
			const ee = Object(S.a)(P.b.Popular, C.N.TOP),
				te = 2,
				se = 5,
				ne = Object(o.c)({
					discoveryUnit: e => Object(B.f)(e, {
						unitName: I.p
					})
				});
			class re extends r.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.B)(this.props.discoveryUnit, e))
					}, this.loadMorePosts = (e, t) => {
						t - e <= te && this.props.loadMorePosts()
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, r.a.createElement(w.a, {
						showIcon: !0
					}, r.a.createElement(y.c, null, "Top popular for the month")), r.a.createElement(_.a, {
						listingKey: ee,
						listingName: P.b.Popular,
						moreButtonText: r.a.createElement(y.c, null, "Refresh"),
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: se
					}))
				}
			}
			var ae = Object(a.b)(ne, e => ({
					loadMorePosts: () => e(Object(N.u)({
						sort: C.N.TOP,
						subredditName: P.b.Popular
					}))
				}))(Object(k.b)(re)),
				oe = s("./src/lib/classNames/index.ts"),
				ie = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ce = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				de = s("./src/reddit/helpers/overlay/index.ts"),
				le = s("./src/lib/isUrl/index.ts"),
				me = s("./src/lib/prettyPrintNumber/index.ts"),
				pe = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ue = s("./src/reddit/components/Thumbnail/index.tsx"),
				be = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/models/Flair/index.ts"),
				ge = s("./src/reddit/components/SidebarTrendingPostList/SmallPost/index.m.less"),
				xe = s.n(ge);
			const ye = e => e.type === he.f.Nsfw || e.type === he.f.Spoiler,
				Oe = Object(o.c)({
					subredditOrProfile: W.T
				});
			class fe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							trendingSearch: t,
							containerOnClick: s
						} = this.props;
						t.post && (e(t.post), s && s(t.post.id))
					}, this.onClickThumbnail = e => {
						const {
							trendingSearch: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && t.post && s(t.post.id)
					}
				}
				render() {
					const {
						className: e,
						subredditOrProfile: t,
						trendingSearch: s
					} = this.props, {
						post: n
					} = s, a = !!n && s.isWhitelisted && Object(le.a)(Object(ue.b)({
						post: n
					})), o = n && s.isWhitelisted && n.flair.filter(ye), i = s.subredditInfo && s.subredditInfo.displayText || t && (t.displayText || t.name), c = n ? n.title : "", d = n ? n.score : 0, l = n ? n.numComments : 0;
					return r.a.createElement("div", {
						className: Object(oe.a)(xe.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: xe.a.mainLine
					}, !!n && a && r.a.createElement("div", {
						className: xe.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(ue.a, {
						post: n
					})), r.a.createElement("div", {
						className: Object(oe.a)(xe.a.title, !a && xe.a.titleSingle),
						title: c
					}, n && o && o.length > 0 && r.a.createElement(pe.a, {
						className: xe.a.flair,
						titleFlair: o,
						nowrap: !0,
						post: n,
						showCategoryTag: !1
					}), c)), r.a.createElement("div", {
						className: xe.a.metaLine
					}, i && r.a.createElement("span", {
						className: xe.a.meta
					}, Object(be.b)(i)), r.a.createElement("span", {
						className: xe.a.meta
					}, r.a.createElement(y.c, null, "".concat(Object(me.b)(d), " "), r.a.createElement(y.a, {
						count: d,
						name: "score",
						plural: "points",
						singular: "point"
					}))), r.a.createElement("span", {
						className: xe.a.meta
					}, r.a.createElement(y.c, null, "".concat(Object(me.b)(l), " "), r.a.createElement(y.a, {
						count: l,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					})))))
				}
			}
			var ve = Object(a.b)(Oe, e => ({
					openLightbox: t => e(Object(de.a)(t.permalink))
				}))(fe),
				Ee = s("./src/reddit/components/SidebarTrendingPostList/index.m.less"),
				je = s.n(Ee);
			const Ce = 5;
			class Se extends r.a.Component {
				constructor() {
					super(...arguments), this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							trendingSearches: s
						} = this.props, [n] = s, r = n.post;
						r && (t(r), e && e(r.id))
					}, this.renderSmallPost = e => {
						const {
							onPostClick: t,
							onPostVisible: s
						} = this.props, n = e.post ? e.post.id : "";
						return r.a.createElement(ce.a, {
							onPostVisible: s,
							postId: n
						}, r.a.createElement(ve, {
							className: je.a.smallPost,
							containerOnClick: t,
							key: n,
							postId: n,
							thumbnailOnClick: t,
							trendingSearch: e
						}))
					}
				}
				render() {
					const {
						className: e,
						onPostVisible: t,
						trendingSearches: s
					} = this.props;
					if (0 === s.length) return null;
					const [n, ...a] = s.slice(0, Ce), o = n.post ? n.post.id : "";
					return r.a.createElement("div", {
						className: Object(oe.a)(je.a.container, e)
					}, r.a.createElement(ce.a, {
						onPostVisible: t,
						postId: o
					}, r.a.createElement(ie.a, {
						backgroundWrapperClassName: je.a.largePostBackgroundWrapper,
						descriptionClassName: je.a.largePostDescription,
						innerContainerClassName: je.a.largePostInnerContainer,
						onPostClick: this.openLargePost,
						postId: o,
						shouldOpenPost: !0,
						showSubredditMeta: !1,
						showSubredditName: !0,
						trendingPost: n.post,
						trendingSearch: n
					})), a.map(this.renderSmallPost))
				}
			}
			var Ne = Object(a.b)(null, e => ({
					openPost: t => e(Object(de.a)(t.permalink))
				}))(Se),
				we = s("./src/reddit/selectors/trending.ts");
			const _e = Object(o.c)({
				discoveryUnit: e => Object(B.f)(e, {
					unitName: I.t
				}),
				trendingSearches: Object(o.a)(we.a, e => e.filter(e => e.post))
			});
			class ke extends r.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(L.B)(this.props.discoveryUnit, e))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e,
						trendingSearches: t
					} = this.props;
					return 0 === t.length ? null : r.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, r.a.createElement(w.a, {
						showIcon: !0
					}, r.a.createElement(y.c, null, "Trends")), r.a.createElement(Ne, {
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						trendingSearches: t
					}))
				}
			}
			var Pe = Object(a.b)(_e)(Object(k.b)(ke)),
				Le = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				Ie = s("./src/reddit/controls/InternalLink/index.tsx"),
				Te = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Be = s("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				Me = s.n(Be);
			const De = e => {
					let {
						to: t,
						title: s
					} = e;
					return r.a.createElement(Le.a, {
						subredditName: s,
						tooltipPosition: ["right", "top"]
					}, r.a.createElement(Ie.a, {
						className: Me.a.Link,
						to: t,
						title: s
					}, s))
				},
				Ae = e => {
					let {
						title: t,
						isOpened: s,
						isExpanded: n,
						children: a,
						onToggle: o,
						onExpand: i
					} = e;
					return r.a.createElement("div", {
						className: Object(oe.a)(Me.a.Section, {
							[Me.a.opened]: s,
							[Me.a.expanded]: n
						})
					}, r.a.createElement("div", {
						className: Me.a.SectionHeader,
						onClick: o
					}, r.a.createElement("div", {
						className: Me.a.SectionTitle
					}, t), r.a.createElement(Te.a, {
						className: Me.a.SectionChevron
					})), r.a.createElement("div", {
						className: Me.a.SectionBody
					}, r.a.createElement("div", {
						className: Me.a.SectionContent
					}, a), r.a.createElement("div", {
						className: Me.a.SectionFooter
					}, r.a.createElement(x.n, {
						className: Me.a.SectionButton,
						onClick: i
					}, r.a.createElement(y.c, null, n ? "Less" : "See more")))))
				};
			class Re extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(t => {
							let {
								openedSection: s
							} = t;
							return s === e ? {
								openedSection: -1,
								isSectionExpanded: !1
							} : {
								openedSection: e,
								isSectionExpanded: !1
							}
						})
					}, this.onExpand = () => {
						this.setState(e => {
							let {
								isSectionExpanded: t
							} = e;
							return {
								isSectionExpanded: !t
							}
						})
					}, this.renderLink = e => {
						let {
							url: t,
							title: s
						} = e;
						return r.a.createElement(De, {
							key: s,
							to: t,
							title: s
						})
					}, this.renderSection = (e, t) => r.a.createElement(Ae, {
						key: e.title,
						title: e.title,
						isOpened: this.isOpened(t),
						isExpanded: this.isExpanded(t),
						onToggle: () => this.onToggle(t),
						onExpand: this.onExpand
					}, e.links.map(this.renderLink))
				}
				isOpened(e) {
					return this.state.openedSection === e
				}
				isExpanded(e) {
					return this.state.isSectionExpanded && this.isOpened(e)
				}
				render() {
					const {
						className: e,
						links: t
					} = this.props;
					if (t) return r.a.createElement(g.a, {
						className: Object(oe.a)(Me.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var Fe = Re,
				Ue = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				We = s("./src/reddit/components/SidebarContainer/index.tsx"),
				He = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Ve = s("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				Ke = s("./src/reddit/actions/post.ts"),
				ze = s("./src/reddit/components/MiniPost/index.tsx"),
				Qe = s("./src/reddit/components/Widgets/Base/index.tsx");
			class Ge extends r.a.Component {
				render() {
					return r.a.createElement("div", null, r.a.createElement(Qe.a, null, this.props.headerText), this.props.posts.map(e => r.a.createElement(ze.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var qe = Ge,
				Ye = s("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				Ze = s.n(Ye),
				Je = s("./src/lib/lessComponent.tsx");
			const Xe = Object(a.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink)),
					clearLinks: () => e(Object(Ke.m)())
				})),
				$e = Je.a.button("ClearButton", Ze.a);
			class et extends r.a.Component {
				render() {
					return r.a.createElement(Qe.b, null, r.a.createElement(qe, {
						className: this.props.className,
						headerText: Object(d.c)("Recent posts"),
						language: this.props.language,
						posts: this.props.posts
					}), r.a.createElement($e, {
						onClick: this.props.clearLinks
					}, Object(d.c)("Clear")))
				}
			}
			var tt = Xe(et),
				st = s("./src/reddit/selectors/user.ts");
			const nt = Object(o.c)({
				language: st.S,
				recentPosts: W.Q
			});
			var rt = Object(a.b)(nt, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: s,
						language: n
					} = e;
					return s && s.length ? r.a.createElement(h.a, null, r.a.createElement(tt, {
						className: t,
						language: n,
						headerText: Object(d.c)("Recent posts"),
						posts: s
					})) : null
				}),
				at = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			const ot = Object(a.b)(Object(o.c)({
				communities: H.g
			}));

			function it() {
				return (it = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ct = 5;
			class dt extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.showNextChunk = () => {
						this.setState((e, t) => {
							const s = Math.ceil(t.communities.length / ct);
							return {
								chunkIdx: e.chunkIdx < s - 1 ? e.chunkIdx + 1 : 0
							}
						})
					}
				}
				componentDidUpdate(e) {
					this.props.communities !== e.communities && this.setState(e => e.chunkIdx > 0 ? {
						chunkIdx: 0
					} : null)
				}
				render() {
					const {
						className: e,
						communities: t,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						railsWidgetsVariant: a,
						sendEvent: o,
						title: i
					} = this.props, {
						chunkIdx: c
					} = this.state, l = {
						className: e,
						sendEvent: o,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						title: i
					};
					if (a) {
						const e = t.slice(c * ct, (c + 1) * ct);
						return r.a.createElement(at.b, it({}, l, {
							bottomButtonText: t.length > ct ? Object(d.c)("See More") : "",
							communities: e,
							onBottomButtonClick: this.showNextChunk,
							railsWidgetsVariant: a
						}))
					}
					return r.a.createElement(at.b, it({}, l, {
						communities: t
					}))
				}
			}
			var lt = ot(Object(k.b)(dt)),
				mt = s("./src/reddit/featureFlags/index.ts"),
				pt = s("./src/reddit/constants/subredditLeaderboard.ts"),
				ut = s("./src/reddit/constants/tracking.ts"),
				bt = s("./src/reddit/selectors/telemetry.ts"),
				ht = s("./src/reddit/selectors/widgets.ts"),
				gt = s("./src/telemetry/models/Subreddit.ts");
			const xt = e => t => s => Object.assign({}, bt.defaults(s), Object(ht.b)(s, e), {
					source: "trending_community_card",
					action: ut.c.CLICK,
					noun: Object(gt.getSubscribeEventNoun)(e.type, t)
				}),
				yt = e => t => Object.assign({}, bt.defaults(t), Object(ht.b)(t, e), {
					source: "trending_community_card",
					action: ut.c.CLICK,
					noun: "community"
				});
			var Ot = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				ft = s("./src/reddit/selectors/monthsToMinutes.ts"),
				vt = s("./src/reddit/selectors/seo/linksModule.ts"),
				Et = s("./src/reddit/constants/page.ts"),
				jt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ct = s("./src/reddit/actions/tooltip.ts"),
				St = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Nt = s("./src/reddit/models/MonthsToMinutes/index.ts"),
				wt = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_t = s("./src/reddit/actions/subscription/index.ts"),
				kt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Pt = s("./src/reddit/constants/posts.ts"),
				Lt = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				It = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Tt = s("./src/reddit/components/FrontpageSidebar/Communities/Community/index.m.less"),
				Bt = s.n(Tt);
			const Mt = Object(o.c)({
				subreddit: H.B
			});
			class Dt extends r.a.Component {
				constructor() {
					super(...arguments), this.sendClickEvent = () => {
						this.props.sendEvent(Object(Lt.c)(this.props.subredditName))
					}, this.onUnsubscribeClick = () => {
						this.props.unsubscribe(), this.props.sendEvent(Object(Lt.d)(this.props.subredditName))
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? r.a.createElement("div", {
						className: Object(oe.a)(Bt.a.container, e)
					}, r.a.createElement(kt.b, {
						className: Bt.a.icon,
						subredditOrProfile: t
					}), r.a.createElement("div", {
						className: Bt.a.name
					}, r.a.createElement(wt.a, {
						className: Bt.a.link,
						to: t.url,
						onMouseDown: this.sendClickEvent
					}, Object(be.b)(t.displayText || t.name))), r.a.createElement("button", {
						className: Bt.a.unsubscribe,
						onClick: this.onUnsubscribeClick
					}, r.a.createElement(It.a, {
						className: Bt.a.unsubscribeIcon
					}))) : null
				}
			}
			var At = Object(a.b)(Mt, (e, t) => ({
					unsubscribe: () => {
						const s = {
							name: t.subredditName,
							type: Pt.a.SUBREDDIT
						};
						e(Object(_t.d)([s], !1))
					}
				}))(Object(k.b)(Dt)),
				Rt = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ft = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Ut = s("./src/reddit/components/FrontpageSidebar/Communities/Community/Placeholder/index.m.less"),
				Wt = s.n(Ut);
			var Ht = Object(Rt.a)(e => {
					const {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(oe.a)(Wt.a.container, t)
					}, r.a.createElement(kt.b, {
						className: Wt.a.icon,
						primaryColor: e.theme ? Object(Ft.a)(e).field : void 0
					}), r.a.createElement("div", {
						className: Wt.a.name
					}))
				}),
				Vt = s("./src/reddit/components/FrontpageSidebar/Communities/index.m.less"),
				Kt = s.n(Vt);
			const zt = "my-communities-title",
				Qt = "my-communities-description",
				Gt = Object(o.c)({
					subredditNames: ft.f
				});
			class qt extends r.a.Component {
				constructor() {
					super(...arguments), this.renderCommunity = (e, t) => r.a.createElement(At, {
						className: Kt.a.community,
						key: e,
						subredditName: e
					}), this.renderCommunityPlaceholder = (e, t) => r.a.createElement(Ht, {
						className: Kt.a.community,
						key: t
					}), this.showTitleTooltip = () => {
						this.props.onShowTooltip(zt)
					}, this.showDescriptionTooltip = () => {
						this.props.onShowTooltip(Qt)
					}
				}
				render() {
					const {
						className: e,
						onHideTooltip: t,
						subredditNames: s
					} = this.props, n = Nt.b - s.length;
					return r.a.createElement(g.a, {
						className: e
					}, r.a.createElement("div", {
						className: Kt.a.title,
						id: zt,
						onMouseEnter: this.showTitleTooltip,
						onMouseLeave: t
					}, r.a.createElement(y.c, null, "Starter communities")), r.a.createElement(St.c, {
						tooltipId: zt,
						text: Object(d.c)("Manage your communities")
					}), r.a.createElement("div", {
						className: Kt.a.description,
						id: Qt,
						onMouseEnter: this.showDescriptionTooltip,
						onMouseLeave: t
					}, r.a.createElement(y.c, null, "You can join up to 10 communities before creating an account")), r.a.createElement(St.c, {
						tooltipId: Qt,
						text: Object(d.c)("You can remove any communities you don’t want to see in your home feed by tapping x.")
					}), s.map(this.renderCommunity), Array.from({
						length: n
					}).map(this.renderCommunityPlaceholder))
				}
			}
			var Yt = Object(a.b)(Gt, e => ({
				onHideTooltip: () => e(Object(Ct.h)()),
				onShowTooltip: t => e(Object(Ct.f)({
					tooltipId: t
				}))
			}))(qt);
			const Zt = Object(o.c)({
					isMod: st.K,
					isLoggedIn: e => e.user.temporaryGQL.isLoggedIn,
					isUpAndComingExperiment: Ot.b,
					trendingSubredditIds: H.ab,
					currentUser: st.i,
					frontpageIsHome: ft.g,
					frontpageLinks: vt.b,
					showLayersSidebar: mt.d.layersEmbedQuickLink
				}),
				Jt = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				Xt = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				$t = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				es = e => !e.currentUser && e.frontpageIsHome && e.listingName === Et.d.Frontpage;
			class ts extends r.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.state = {
						isMounted: !1
					}
				}
				render() {
					let e = 0;
					const {
						categoriesPlacementVariant: t,
						className: s,
						frontpageLinks: n,
						isLoggedIn: a,
						isUpAndComingExperiment: o,
						listingName: c,
						railsWidgetsVariant: l,
						trendingSubredditIds: m,
						showLayersSidebar: p
					} = this.props;
					return r.a.createElement(We.a, {
						className: s
					}, r.a.createElement(Ve.a, {
						categories: pt.i,
						category: o ? pt.k : pt.j,
						first: 5,
						shouldDisplayDelta: this.props.isMod,
						to: o ? "".concat(pt.e).concat(pt.m) : pt.e
					}), p && r.a.createElement(h.a, null, r.a.createElement(u, null)), !l && es(this.props) && r.a.createElement(h.a, null, r.a.createElement(Yt, null)), r.a.createElement(Ue.a, {
						placement: C.c.ABOVE_THE_FOLD,
						listingName: c,
						position: jt.a.FIRST,
						sizes: C.h,
						placementIndex: e++
					}), Object(F.a)(l) && r.a.createElement(h.a, null, r.a.createElement($, null)), Object(F.b)(l) && r.a.createElement(h.a, null, r.a.createElement(ae, null)), Object(F.c)(l) && r.a.createElement(h.a, null, r.a.createElement(Pe, null)), !l && $t(this.props) && r.a.createElement(j, null), Jt(this.props) && r.a.createElement(h.a, null, r.a.createElement(lt, {
						getClickEventFactory: yt,
						getSubscribeEventFactoryHandler: xt,
						railsWidgetsVariant: l,
						subredditIds: m,
						title: Object(d.c)("Trending Communities")
					})), a && r.a.createElement(h.a, null, r.a.createElement(i.a, {
						listingName: c
					})), Xt(this.props) && r.a.createElement(rt, null), n && r.a.createElement(h.a, null, r.a.createElement(Fe, {
						links: n
					})), r.a.createElement(He.a, {
						adComponent: r.a.createElement(Ue.a, {
							placement: C.c.BELOW_THE_FOLD,
							listingName: c,
							position: jt.a.BOTTOM,
							sizes: C.m,
							placementIndex: e++
						}),
						categoriesPlacementVariant: t,
						railsWidgetsVariant: l
					}))
				}
			}
			t.default = Object(a.b)(Zt)(ts)
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/higherOrderComponents/asTooltip.tsx"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				E = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				j = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				w = s.n(N);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = "view--layout--FUE",
				P = "LayoutSwitch--picker",
				L = Object(u.a)(y.a),
				I = {
					[g.d.Card]: j.a,
					[g.d.Classic]: v.a,
					[g.d.Compact]: E.a
				},
				T = {
					[g.d.Card]: Object(f.c)("card"),
					[g.d.Classic]: Object(f.c)("classic"),
					[g.d.Compact]: Object(f.c)("compact")
				},
				B = Object(l.t)(),
				M = Object(p.c)({
					dropdownIsOpen: Object(S.b)(P),
					postLayout: l.M,
					redditStyle: l.B
				});
			class D extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(C.screen)(t),
							subreddit: Object(C.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: a
						} = this.props, i = s || g.e[a], c = e === i, d = I[e];
						return r.a.createElement(O.b, _({}, t, {
							className: Object(o.a)(w.a.LayoutItem, {
								[w.a.selected]: c
							}),
							"data-layout": e,
							displayText: T[e],
							iconWrapperClassName: w.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: w.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: w.a.LayoutIcon,
							onClick: c ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(L, _({}, e, {
							className: w.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: w.a.DropdownRow,
							rowIconClassName: w.a.DropdownRowIcon,
							rowSelectedClassName: w.a.DropdownRowSelected,
							tooltipId: P
						}), this.renderItem(g.d.Card), this.renderItem(g.d.Classic), this.renderItem(g.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, a = t || g.e[n];
					return r.a.createElement("div", {
						className: Object(o.a)(w.a.Container, e),
						id: k
					}, r.a.createElement("div", {
						className: w.a.DropdownContainer,
						onClick: s
					}, this.renderItem(a, {
						id: P,
						showDropdownTriangle: !0
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			var A = B(Object(a.b)(M, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.v)(t, s)),
					openDropdown: () => e(Object(h.g)({
						tooltipId: P
					}))
				}))(Object(d.b)(Object(b.a)(D)))),
				R = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/addQueryParams/index.ts")),
				F = s("./src/lib/constants/index.ts"),
				U = s("./src/reddit/components/ListingSort/index.tsx"),
				W = s("./src/reddit/components/TimeSort/index.tsx"),
				H = s("./src/reddit/constants/listingSorts.ts"),
				V = s("./src/reddit/controls/InternalLink/index.tsx"),
				K = s("./src/reddit/helpers/path/index.ts"),
				z = s("./src/reddit/helpers/trackers/navigation.ts"),
				Q = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				G = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Y = s.n(q);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = new Set([F.N.CONTROVERSIAL, F.N.TOP]),
				X = new Set([F.N.CONTROVERSIAL, F.N.RISING]),
				$ = "ListingSort--Overflow",
				ee = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				te = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, G.i, (e, t, s) => {
					if (e) return e;
					const n = [F.N.HOT, F.N.NEW, F.N.TOP, F.N.RISING];
					return t && s && n.unshift(F.N.BEST), n
				}),
				se = Object(p.c)({
					sortOptions: te
				});
			class ne extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(z.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(R.a)(t, {
							sort: e
						}) : Object(K.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(V.a, {
							className: Object(o.a)(Y.a.SortLink, e === t && Y.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, r.a.createElement(U.a, {
							className: Y.a.SortIcon,
							sort: e
						}), r.a.createElement("div", {
							className: Y.a.SortLabel
						}, H.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: a,
						timeSort: i
					} = this.props, c = !t && J.has(n), d = X.has(n), l = a.filter(e => !X.has(e)), m = a.filter(e => X.has(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(U.d, Z({}, this.props, {
						buttonClassName: Y.a.DropdownButton,
						className: Object(o.a)(Y.a.SortDropdown, e),
						rowClassName: Y.a.DropdownRow,
						rowIconClassName: Y.a.DropdownRowIcon,
						rowSelectedClassName: Y.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(o.a)(Y.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(W.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: Y.a.DropdownButton,
						className: Y.a.TimeSort,
						listingSort: n,
						onChange: s,
						rowClassName: Y.a.DropdownRow,
						rowSelectedClassName: Y.a.DropdownRowSelected,
						timeSort: i || F.Pb,
						wrapperClassName: Y.a.TimeSortWrapper
					}), m.length > 0 && r.a.createElement(U.d, Z({}, this.props, {
						className: Object(o.a)(Y.a.SortOverflow, e),
						dropdownId: $,
						rowClassName: Y.a.DropdownRow,
						rowIconClassName: Y.a.DropdownRowIcon,
						rowSelectedClassName: Y.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: Y.a.SortOverflowButton,
						id: $
					}, r.a.createElement(Q.a, null))))
				}
			}
			var re = ee(Object(a.b)(se)(Object(d.b)(ne))),
				ae = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				oe = s.n(ae);
			const ie = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				ce = Object(a.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(i.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.G)(s, r))
							}
						}
					}
				});
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(o.a)(oe.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(re, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !a && r.a.createElement(A, {
						className: oe.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = ie(ce(Object(d.b)(de)))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2jJNpBqXMbbyOiGCElTYxZ",
				container: "_2jJNpBqXMbbyOiGCElTYxZ",
				Input: "zgT5MfUrDMC54cpiCpZFu",
				input: "zgT5MfUrDMC54cpiCpZFu",
				Button: "_27e9yld2jAIIWQNc4A70if",
				button: "_27e9yld2jAIIWQNc4A70if"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Media/index.tsx"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/components/InFeedPostCreation/index.m.less"),
				f = s.n(O);
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(n || (n = {}));
			const v = e => {
					switch (e) {
						case l.Fb.MEDIA:
							return "?media=true";
						case l.Fb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				E = e => {
					switch (e) {
						case l.Fb.MEDIA:
							return "media_post";
						case l.Fb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				j = Object(d.c)({
					subredditAboutInfo: x.y,
					subreddit: x.B
				}),
				C = Object(o.b)(j, e => ({
					navigateTo: t => e(Object(c.b)(t)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				})),
				S = Object(b.c)("Create Media Post"),
				N = Object(b.c)("Create Link Post");
			t.a = Object(u.b)(C(e => {
				let {
					subredditAboutInfo: t,
					subreddit: s,
					sendEvent: r,
					subredditName: o,
					navigateTo: c,
					toggleTooltip: d
				} = e;
				const m = (o ? "/r/".concat(o) : "") + "/submit",
					u = function(e, t) {
						if (!e) return {
							link: !0,
							media: !0
						};
						const s = t && t.allowedPostTypes;
						if (!s) return {
							link: !0,
							media: !0
						};
						const {
							images: n,
							links: r,
							videos: a
						} = s;
						return {
							link: r,
							media: (a || n) && !e.isNSFW
						}
					}(s, t),
					x = e => {
						r(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: E(e)
						}, y.defaults(t)))
					},
					O = () => {
						x(l.Fb.POST), c(m)
					};
				return a.a.createElement("div", {
					className: f.a.Container
				}, a.a.createElement("input", {
					className: f.a.Input,
					onChange: O,
					onClick: O,
					onKeyPress: O,
					placeholder: Object(b.c)("Create Post"),
					type: "text"
				}), u.media && a.a.createElement(i.a, {
					"aria-label": S,
					className: f.a.Button,
					id: n.Media,
					onClick: () => x(l.Fb.MEDIA),
					onMouseEnter: () => d(n.Media),
					onMouseLeave: () => d(n.Media),
					to: m + v(l.Fb.MEDIA)
				}, a.a.createElement(g.a, null), a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: n.Media,
					text: S
				})), u.link && a.a.createElement(i.a, {
					"aria-label": N,
					className: f.a.Button,
					id: n.Link,
					onClick: () => x(l.Fb.LINK_ONLY),
					onMouseEnter: () => d(n.Link),
					onMouseLeave: () => d(n.Link),
					to: m + v(l.Fb.LINK_ONLY)
				}, a.a.createElement(h.a, null), a.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: n.Link,
					text: N
				})))
			}))
		},
		"./src/reddit/components/LayerPromotionWidget/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_18FHrNt95IT6Hc8F5tj_21"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				g = Object(o.c)({
					layout: m.M
				}),
				x = Object(a.b)(g);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: u.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(y, "Component", u.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				b = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const g = h.a.div("BodyContainer", b.a),
				x = h.a.div("SidebarPlaceholder", b.a),
				y = h.a.div("InnerContainer", b.a),
				O = Object(o.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				f = Object(a.b)(O);
			class v extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: n,
						considerSidebar: a = !0,
						onFocus: o,
						onBlur: c
					} = this.props;
					let l = 0;
					return n && !e && t && (l += i.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), r.a.createElement("div", {
						className: this.props.className
					}, r.a.createElement(g, {
						onFocus: o,
						onBlur: c
					}, r.a.createElement(d.a, {
						fitPageToContent: !0
					}, r.a.createElement(y, {
						className: s
					}, r.a.createElement(p.a, {
						bladeOpen: e,
						considerSidebar: a,
						offsetLeft: l,
						render: this.props.render
					}))), a && r.a.createElement(x, null)))
				}
			}
			t.a = h.a.wrapped(f(v), "Component", b.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/app/strings/index.ts");
			const O = {
				[i.Lb.AllStates]: Object(y.e)("stateSorts.allStates"),
				[i.Lb.Alaska]: Object(y.e)("stateSorts.alaska"),
				[i.Lb.Alabama]: Object(y.e)("stateSorts.alabama"),
				[i.Lb.Arkansas]: Object(y.e)("stateSorts.arkansas"),
				[i.Lb.Arizona]: Object(y.e)("stateSorts.arizona"),
				[i.Lb.California]: Object(y.e)("stateSorts.california"),
				[i.Lb.Colorado]: Object(y.e)("stateSorts.colorado"),
				[i.Lb.Connecticut]: Object(y.e)("stateSorts.connecticut"),
				[i.Lb.DistrictOfColumbia]: Object(y.e)("stateSorts.districtOfColumbia"),
				[i.Lb.Delaware]: Object(y.e)("stateSorts.delaware"),
				[i.Lb.Florida]: Object(y.e)("stateSorts.florida"),
				[i.Lb.Georgia]: Object(y.e)("stateSorts.georgia"),
				[i.Lb.Hawaii]: Object(y.e)("stateSorts.hawaii"),
				[i.Lb.Iowa]: Object(y.e)("stateSorts.iowa"),
				[i.Lb.Idaho]: Object(y.e)("stateSorts.idaho"),
				[i.Lb.Illinois]: Object(y.e)("stateSorts.illinois"),
				[i.Lb.Indiana]: Object(y.e)("stateSorts.indiana"),
				[i.Lb.Kansas]: Object(y.e)("stateSorts.kansas"),
				[i.Lb.Kentucky]: Object(y.e)("stateSorts.kentucky"),
				[i.Lb.Louisiana]: Object(y.e)("stateSorts.louisiana"),
				[i.Lb.Massachusetts]: Object(y.e)("stateSorts.massachusetts"),
				[i.Lb.Maryland]: Object(y.e)("stateSorts.maryland"),
				[i.Lb.Maine]: Object(y.e)("stateSorts.maine"),
				[i.Lb.Michigan]: Object(y.e)("stateSorts.michigan"),
				[i.Lb.Minnesota]: Object(y.e)("stateSorts.minnesota"),
				[i.Lb.Missouri]: Object(y.e)("stateSorts.missouri"),
				[i.Lb.Mississippi]: Object(y.e)("stateSorts.mississippi"),
				[i.Lb.Montana]: Object(y.e)("stateSorts.montana"),
				[i.Lb.NorthCarolina]: Object(y.e)("stateSorts.northCarolina"),
				[i.Lb.NorthDakota]: Object(y.e)("stateSorts.northDakota"),
				[i.Lb.Nebraska]: Object(y.e)("stateSorts.nebraska"),
				[i.Lb.NewHampshire]: Object(y.e)("stateSorts.newHampshire"),
				[i.Lb.NewJersey]: Object(y.e)("stateSorts.newJersey"),
				[i.Lb.NewMexico]: Object(y.e)("stateSorts.newMexico"),
				[i.Lb.Nevada]: Object(y.e)("stateSorts.nevada"),
				[i.Lb.NewYork]: Object(y.e)("stateSorts.newYork"),
				[i.Lb.Ohio]: Object(y.e)("stateSorts.ohio"),
				[i.Lb.Oklahoma]: Object(y.e)("stateSorts.oklahoma"),
				[i.Lb.Oregon]: Object(y.e)("stateSorts.oregon"),
				[i.Lb.Pennsylvania]: Object(y.e)("stateSorts.pennsylvania"),
				[i.Lb.RhodeIsland]: Object(y.e)("stateSorts.rhodeIsland"),
				[i.Lb.SouthCarolina]: Object(y.e)("stateSorts.southCarolina"),
				[i.Lb.SouthDakota]: Object(y.e)("stateSorts.southDakota"),
				[i.Lb.Tennessee]: Object(y.e)("stateSorts.tennessee"),
				[i.Lb.Texas]: Object(y.e)("stateSorts.texas"),
				[i.Lb.Utah]: Object(y.e)("stateSorts.utah"),
				[i.Lb.Virginia]: Object(y.e)("stateSorts.virginia"),
				[i.Lb.Vermont]: Object(y.e)("stateSorts.vermont"),
				[i.Lb.Washington]: Object(y.e)("stateSorts.washington"),
				[i.Lb.Wisconsin]: Object(y.e)("stateSorts.wisconsin"),
				[i.Lb.WestVirginia]: Object(y.e)("stateSorts.westVirginia"),
				[i.Lb.Wyoming]: Object(y.e)("stateSorts.wyoming")
			};
			var f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/contexts/Tooltip.ts"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/StateSort/index.m.less"),
				w = s.n(N);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = g.a.wrapped(E.a, "_Dropdown", w.a),
				P = Object(h.a)(k),
				L = e => {
					return e.indexOf("_") > 0 && T(e) === i.v.UnitedStates
				},
				I = e => {
					if (L(e)) {
						return e.split("_")[1]
					}
					return i.Lb.AllStates
				},
				T = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				B = e => {
					const t = T(e),
						s = I(e);
					return L(e) ? "".concat(t, "_").concat(s) : t
				},
				M = Object(f.t)(),
				D = Object(o.c)({
					dropdownIsOpen: Object(C.b)("StateSort--StateSortPicker"),
					language: S.S
				}),
				A = Object(a.b)(D, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(i.v.UnitedStates + "_" + s))
					}
				}));
			var R = g.a.wrapped(M(A(e => {
					const t = "".concat(e.baseUrl, "?").concat(x.g, "=").concat(i.v.UnitedStates);
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: O[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(v.a.Consumer, null, s => r.a.createElement(P, _({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.Lb).map(s => r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === i.Lb.AllStates ? t : "".concat(t, "_").concat(e))(i.Lb[s]), B(i.Lb[s]))
					}, r.a.createElement(j.b, {
						displayText: O[i.Lb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", w.a),
				F = s("./src/reddit/constants/countrySorts.ts"),
				U = s("./src/reddit/components/CountrySort/index.m.less"),
				W = s.n(U);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(f.t)(),
				K = Object(o.c)({
					dropdownIsOpen: Object(C.b)("CountrySort--CountrySortPicker"),
					language: S.S
				});
			var z = V(Object(a.b)(K, e => ({
					onOpenDropdown: t => e(Object(p.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = T(e.sort),
						s = I(e.sort),
						n = "".concat(e.baseUrl, "?").concat(x.g, "=");
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(u.a)(W.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: (() => t in F.a ? F.a[t] : F.a[i.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(v.a.Consumer, null, s => r.a.createElement(P, H({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.v).map(s => r.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(n).concat(B(i.v[s])), i.v[s])
					}, r.a.createElement(j.b, {
						displayText: F.a[i.v[s]],
						isSelected: t === s
					})))))), t === i.v.UnitedStates && r.a.createElement(R, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				Q = s("./src/reddit/components/TimeSort/index.tsx"),
				G = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/constants/page.ts"),
				Y = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Z = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				J = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(J);
			const $ = Object(f.t)({
					isProfilePage: f.H,
					pageLayer: e => e
				}),
				ee = Object(o.c)({
					currentUser: S.i,
					language: S.S,
					isPopularListing: f.D,
					redditStyle: f.B
				}),
				te = Object(a.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(c.c)({
									sort: t,
									timeSort: n
								});
								e(Object(l.G)(s, r))
							}
						}
					}
				});
			t.a = $(te(Object(G.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, a = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, o = s && e.countrySort && e.sort === i.N.HOT, c = e => {
					Z.a.setState({
						isListingFocused: e
					})
				};
				return r.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => r.a.Children.toArray([n ? null : r.a.createElement(Y.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : r.a.createElement("div", {
						className: X.a.separator
					}), r.a.createElement(b.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && a && [r.a.createElement(Q.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Pb
					})], o && r.a.createElement(z, {
						baseUrl: e.isPopularListing ? "/r/".concat(q.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => r.a.createElement("svg", {
					className: Object(a.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), r.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var p = e => r.a.createElement("svg", {
					className: Object(a.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				u = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = s.n(u);
			var h = e => r.a.createElement("svg", {
					className: Object(a.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var y = e => r.a.createElement("svg", {
					className: Object(a.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				O = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				f = s.n(O);
			var v = e => r.a.createElement("svg", {
					className: Object(a.a)(f.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				E = s("./src/reddit/icons/svgs/Top/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/index.m.less"),
				C = s.n(j);
			const S = {
				[o.N.BEST]: d,
				[o.N.HOT]: h,
				[o.N.NEW]: y,
				[o.N.CONTROVERSIAL]: p,
				[o.N.TOP]: E.a,
				[o.N.RISING]: v
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = S[s];
				return n ? r.a.createElement(n, {
					className: Object(a.a)(t, C.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return B
			})), s.d(t, "c", (function() {
				return M
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/listingSorts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				S = s("./src/reddit/components/ListingSort/index.m.less"),
				N = s.n(S),
				w = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var k = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const P = "ListingSort--SortPicker",
				L = Object(i.a)(w.a.wrapped(g.a, "Dropdown", N.a)),
				I = w.a.wrapped(C.a, "ListingSortIcon", N.a),
				T = (w.a.wrapped(v.b, "DropdownTriangle", N.a), w.a.div("Title", N.a)),
				B = w.a.wrapped(e => r.a.createElement(x.b, _({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", N.a),
				M = e => {
					var {
						disabled: t
					} = e, s = k(e, ["disabled"]);
					return r.a.createElement("div", _({}, s, {
						className: Object(d.a)(N.a.SortWrapper, s.className, {
							[N.a.isDisabled]: t
						})
					}))
				},
				D = w.a.div("DropdownRowDisabled", N.a),
				A = Object(b.t)({
					isFrontpage: b.z,
					isProfilePage: b.H,
					pageLayer: e => e
				}),
				R = Object(o.c)({
					user: j.i,
					dropdownIsOpen: (e, t) => Object(E.b)(t.dropdownId || P)(e),
					language: j.S
				}),
				F = Object(a.b)(R, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || P
						}))
					}
				});
			t.d = w.a.wrapped(A(F(Object(p.b)(e => r.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && r.a.createElement(T, null, r.a.createElement(f.c, null, "Sort")), r.a.createElement(M, {
				disabled: e.disabled
			}, e.children || r.a.createElement(B, {
				className: e.buttonClassName,
				displayText: u.a[e.sort],
				id: e.dropdownId || P,
				showDropdownTriangle: !0
			}, r.a.createElement(I, {
				sort: e.sort
			}))), r.a.createElement(h.a.Consumer, null, t => r.a.createElement(L, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || P
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? r.a.createElement(D, null, r.a.createElement(f.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => r.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: u.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(O.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(y.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, r.a.createElement(I, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", N.a)
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					language: m,
					post: p,
					subredditOrProfile: h
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(u.a.container, t)
				}, r.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, r.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), r.a.createElement("span", null, h.displayText)), ((e, t, s) => {
					if (s) return r.a.createElement("div", {
						role: "img",
						"aria-label": Object(a.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, r.a.createElement(b, null))
				})(m, p.author, s), h && h.isQuarantined && r.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, r.a.createElement(o.a, {
					className: Object(a.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(a.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(a.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/Media/index.tsx"),
				h = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/CommentsLink/index.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				M = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = s("./src/reddit/components/ShareMenu/index.tsx"),
				A = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/constants/postLayout.ts"),
				F = s("./src/reddit/helpers/trackers/post.ts"),
				U = s("./src/reddit/i18n/components.tsx"),
				W = s("./src/reddit/icons/fonts/Share/index.tsx"),
				H = s("./src/reddit/models/User/index.ts"),
				V = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				K = s.n(V),
				z = s("./src/lib/lessComponent.tsx");
			const Q = "-MiniCardModMenu",
				G = "-MiniCardOverflowMenu",
				q = "-MiniCardShareMenu",
				Y = z.a.wrapped(L.a, "HorizontalVotes", K.a),
				Z = z.a.button("ShareButton", K.a),
				J = Object(O.t)({
					currentProfileName: O.h,
					isCommentPermalink: O.v,
					isCommentsPage: O.w,
					isProfilePostListing: O.I,
					pageLayer: e => e
				}),
				X = Object(o.c)({
					layout: O.M,
					subreddit: O.q
				});
			var $ = J(Object(a.b)(X, {})(Object(A.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: a,
						hasModFlairPerms: o,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						language: b,
						layout: h,
						modModeEnabled: g,
						onCommentsClick: x,
						post: y,
						sendEvent: O,
						showEditFlair: f,
						showEditPost: v,
						subreddit: E
					} = e, j = e => O(Object(F.f)(y.id, e)), C = y.postId, S = Object(I.d)(Q, y.id, m, u), N = !!n && Object(H.f)(n) === y.author;
					return r.a.createElement("div", {
						className: Object(i.a)(K.a.flatlistContainer, s)
					}, r.a.createElement(Y, {
						compact: !1,
						model: y,
						onVoteClick: a,
						scoreClassName: K.a.score
					}), r.a.createElement(P.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: g,
						numComments: y.numComments,
						type: R.g.Compact,
						onClick: x
					}), r.a.createElement(D.a, {
						className: K.a.shareMenu,
						dropdownId: Object(I.d)(q, y.id, m, u),
						permalink: y.permalink,
						post: y,
						sendEventWithName: j,
						subreddit: E
					}, r.a.createElement(Z, null, r.a.createElement(W.a, {
						className: K.a.shareIcon
					}), r.a.createElement("span", {
						className: K.a.shareText
					}, r.a.createElement(U.c, null, "share")))), c && r.a.createElement(T.a, {
						dropdownId: S,
						onClick: () => j("post_mod_action_menu")
					}, r.a.createElement(I.b, {
						className: K.a.modActionsIcon
					}), r.a.createElement(B.a, {
						canEditFlair: o && !!f,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: N,
						language: b,
						modModeEnabled: g,
						post: y,
						tooltipId: S
					})), r.a.createElement(M.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: C,
						dropdownId: Object(I.d)(G, y.id, m, u),
						isFixed: u,
						sendEvent: O,
						showEditPost: !!v,
						showEditFlair: !!f,
						useFlatlistBreakpoints: Object(M.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(se),
				re = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ae = s.n(re);
			s.d(t, "a", (function() {
				return ie
			}));
			const oe = Object(O.t)(),
				ie = Object(a.b)(() => Object(o.c)({
					activeModalId: S.a,
					autoplayPref: k.b,
					crosspostRoot: _.c,
					crosspostSubredditOrProfile: _.d,
					currentUser: k.i,
					flairStyleTemplate: O.Q,
					hideNSFWPref: k.z,
					isActive: _.g,
					language: k.S,
					moderatorPermissions: N.i,
					modModeEnabled: O.O,
					post: _.I,
					showEditFlair: w.a,
					subredditOrProfile: _.T,
					userIsOp: k.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const n = t === C.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: r
						})
					}
				}));
			t.b = oe(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: a,
					crosspostSubredditOrProfile: o,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: O,
					language: C,
					moderatorPermissions: S,
					modModeEnabled: N,
					onClickPost: w,
					post: _,
					scrollerItemRef: k,
					shouldPause: P,
					showMetaLine: L = !0,
					showEditFlair: I,
					subredditOrProfile: T,
					userIsOp: B
				} = e, {
					media: M
				} = a || _, D = M && M.type, A = Object(x.b)(_.id), R = D === j.n.RTJSON, F = B && R, U = Object(v.a)(S), W = Object(f.a)(S), H = M && D !== j.n.RTJSON && D !== j.n.TEXT, V = !M && !!_.source && Object(d.a)(_.source.url), K = M && r.a.createElement(b.a, {
					autoplayPref: t,
					availableWidth: s,
					className: ae.a.media,
					imageBoxClassName: ae.a.mediaImageBox,
					imageBoxContentImageClassName: ae.a.mediaImageBoxContentImage,
					forceAspectRatio: j.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: a || _,
					scrollerItemRef: k,
					shouldPause: P,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return r.a.createElement(g.a, {
					className: Object(i.a)(ae.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(E.a)(e), n),
					style: Object.assign({}, Object(E.b)(e.flairStyleTemplate), Object(E.d)(e)),
					post: _,
					onClick: w,
					eventFactory: l
				}, r.a.createElement(h.a, {
					className: ae.a.backgroundWrapper,
					flairStyleTemplate: m
				}, H && K, r.a.createElement("div", {
					className: ae.a.innerContainer
				}, V && r.a.createElement(te.a, {
					post: _,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), r.a.createElement(y.c, {
					className: ae.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: _,
					size: y.b.Large,
					titleColor: m && m.postTitleColor
				}), L && T && r.a.createElement(ee.a, {
					className: ae.a.metaLine,
					crosspostSubredditOrProfile: o,
					hideNSFWPref: O,
					language: C,
					post: _,
					subredditOrProfile: T
				}), !H && r.a.createElement("div", {
					className: ae.a.mediaWrapper
				}, K), r.a.createElement("div", {
					className: ae.a.flexSpacer
				}), r.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: W,
					hasModPostPerms: U,
					language: C,
					modModeEnabled: N,
					post: _,
					showEditFlair: I,
					showEditPost: F
				}))), e.activeModalId === A && r.a.createElement(x.a, {
					flairs: _.flair,
					subredditId: _.belongsTo.id,
					modalId: A,
					onFlairChanged: e.onFlairChanged
				}), r.a.createElement(u.d, {
					postId: _.id
				}))
			})))
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/Thumbnail/index.tsx"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/MiniPost/index.m.less"),
				y = s.n(x);
			const O = Object(o.a)(e => e, b.I, b.c, g.S, (e, t, s, n) => {
					return {
						crosspost: s,
						language: n,
						post: t,
						subredditOrProfile: Object(h.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				f = Object(a.b)(O, (e, t) => ({
					openLightbox: t => e(Object(u.a)(t.permalink))
				}));
			class v extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s()
					}, this.onClickSubreddit = e => {
						const {
							subredditOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}, this.onClickThumbnail = e => {
						const {
							thumbnailOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: s = !1,
						subredditOrProfile: n
					} = this.props;
					return r.a.createElement("div", {
						className: Object(c.a)(y.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: y.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(p.a, {
						post: t
					})), r.a.createElement("div", {
						className: y.a.postDetails
					}, r.a.createElement("p", {
						className: y.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && r.a.createElement(m.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), r.a.createElement("div", null, r.a.createElement("span", {
						className: y.a.meta
					}, Object(i.c)(this.props.language, "posts.points.noun", t.score, {
						count: Object(d.b)(t.score)
					})), r.a.createElement("span", {
						className: y.a.meta
					}, Object(i.c)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(d.b)(t.numComments)
					})), r.a.createElement("span", {
						className: y.a.meta
					}, Object(l.d)(this.props.language, t.created / 1e3, !0, !0)))))
				}
			}
			t.a = f(v)
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(a.a)(e => {
				const t = !!e.cancelActionText,
					s = !(!e.actionText || !e.onConfirm);
				return r.a.createElement(o.c, {
					style: e.style
				}, r.a.createElement(o.g, null, r.a.createElement(c.a, null, r.a.createElement(o.n, null, e.headerText), !e.hideCancel && r.a.createElement(i.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, r.a.createElement(o.b, null)))), r.a.createElement(o.j, null, e.modalBody()), (t || s) && r.a.createElement(o.e, null, t && r.a.createElement(o.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), s && r.a.createElement(o.r, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Q
			})), s.d(t, "a", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				a = s.n(r),
				o = s("./node_modules/lodash/last.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/fastdom/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				O = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				v = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				j = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				N = s("./src/reddit/helpers/getClickInfo.ts"),
				w = s("./src/reddit/helpers/pixels.ts"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/helpers/brandSafety/index.ts"),
				L = s("./src/lib/LRUCache/index.ts"),
				I = s("./src/telemetry/index.ts"),
				T = s("./src/telemetry/models/Timer.ts"),
				B = s("./src/reddit/components/PostList/index.m.less"),
				M = s.n(B),
				D = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const A = 500,
				R = new L.a(A),
				F = new L.a(A),
				U = new L.a(A),
				W = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				H = h.a.div("SeeMore", M.a),
				V = h.a.wrapped(_.a, "ArrowRight", M.a),
				K = (e, t, s, n, r, a, o, i) => {
					const c = s ? "last-".concat(n, "-").concat(r) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(a);
					let l = R.get(d);
					return void 0 === l && (l = () => {
						s && o.onBottomViewed(n, r), o.trackOnPostEnteredViewport(e, t, i)
					}, R.set(d, l)), l
				},
				z = (e, t, s, n) => {
					const r = "left-".concat(e, "-").concat(t);
					let a = F.get(r);
					return void 0 === a && (a = r => {
						s.trackOnPostExitedViewport(e, t, r, n)
					}, F.set(r, a)), a
				},
				Q = (e, t) => {
					const s = "click-".concat(e);
					let n = U.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(w.a)(s.events, E.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(N.a)(e)
						})
					}, U.set(s, n)), n
				},
				G = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case C.g.Medium:
							return 188;
						case C.g.Classic:
							return 96;
						case C.g.Compact:
							return 32;
						default:
							return 200
					}
				},
				q = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class Y extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(A), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = a()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, r = t(), a = [];
						r.forEach(e => a.push(e.id));
						const o = a.map(e => s[e]).filter(Boolean),
							i = o.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(P.a)(o, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && I.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = I.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = I.c.end(this.timerId);
						setTimeout(() => Object(I.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && I.c.cancel(this.timerId), e.postIds.length && (this.timerId = I.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && I.c.has(this.timerId)) {
						const e = I.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(I.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && I.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return I.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = I.c.end(e);
					setTimeout(() => {
						s(t(n, T.TimerType.InApp))
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
					const t = this.props,
						{
							postsById: s
						} = t,
						n = D(t, ["postsById"]),
						{
							postsById: r
						} = e,
						a = D(e, ["postsById"]),
						o = Object.keys(n),
						i = Object.keys(a);
					if (i.length !== o.length) return !0;
					if (i.some(e => n[e] !== a[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, a) => {
							const o = 0 === a;
							return t({
								isFirstPost: o,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: o,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						isCommentPermalink: a,
						isCommentsPage: o,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: b,
						postClickEvent: h,
						redditStyle: g
					} = this.props, y = 0 === t, O = s ? "last-index" : "", f = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(m, "-").concat(l, "-").concat(b);
					let v;
					if (void 0 === (v = this.scrollChildCache.get(f))) {
						const {
							inSubredditOrProfile: O,
							postsById: E
						} = this.props, j = E[e], S = j.crosspostRootId && E[j.crosspostRootId] ? E[j.crosspostRootId] : j;
						j.crosspostRootId && !E[j.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(j.id, " is crosspost of ").concat(j.crosspostRootId, ", but ") + "".concat(j.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const N = this.props.postComponentForLayout({
								isCrosspost: !!j.crosspostRootId,
								isFirstPost: y,
								layout: n,
								post: S
							}),
							w = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							_ = K(e, n, s, l, m, b, this.props, t),
							P = z(e, n, this.props, t),
							L = Q(e, this.props),
							I = S.media && S.media.type === k.n.EMBED ? S.media.provider : null;
						v = {
							estHeight: G(j, n),
							id: e,
							isFocusable: !(!S.media || n !== C.g.Large) && (k.d.has(S.media.type) && (!I || !k.q.has(I)) && !S.isSpoiler && !S.isNSFW),
							trackOnEnteredViewport: _,
							trackOnExitedViewport: P,
							render: t => {
								let {
									className: n,
									height: u,
									width: b,
									remeasure: x,
									setScrollerChildRef: f,
									shouldLoadInitially: v
								} = t;
								return d.a.createElement(N, {
									className: n,
									currentProfileName: r,
									key: w,
									availableWidth: b,
									eventFactory: h,
									first: y,
									forceLoadMedia: v,
									inSubredditOrProfile: O,
									isCommentPermalink: a,
									isCommentsPage: o,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: f
								})
							}
						}, this.scrollChildCache.set(f, v)
					}
					return v
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: a
					} = this.props;
					if (s) return;
					const o = a;
					return d.a.createElement("div", {
						className: M.a.placeholder
					}, d.a.createElement(o, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(O.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: a
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: M.a.placeholder
					}, d.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: W[n]
					}), !!e && d.a.createElement(O.a, {
						apiError: e,
						onTryAgain: a
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: a,
						layout: o,
						location: i,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let g = b.map((e, t, s) => {
						const n = t === b.length - 1;
						return this.scrollChildForPost(e, t, n, o)
					});
					r && (g = q(g, r));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(o) : void 0,
						y = i ? Object(n.e)(i) : null,
						O = y || a;
					return d.a.createElement(c.Fragment, null, d.a.createElement(f.b, {
						innerRef: this.updateScrollerRef,
						className: O ? M.a.truncatedPostList : Object(p.a)(M.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: j.g
					}, g), y && d.a.createElement(H, {
						className: M.a.seeMoreButton
					}, d.a.createElement(S.a, {
						className: M.a.seeMorePostsText,
						to: Object(m.a)(y, {
							type: u.Jb.Posts
						})
					}, d.a.createElement(v.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(V, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Y.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4",
				cta: "_1Cg0rke34k99vLcCo_aCP1"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/LRUCache/index.ts"),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx");
			const c = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return r.a.createElement(i.a, {
						className: t,
						layout: s
					})
				},
				getComponent: () => s.e("RpanListingUnit").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var d = e => r.a.createElement(c, e),
				l = s("./src/reddit/helpers/trackers/rpan.ts"),
				m = s("./src/reddit/constants/postLayout.ts");
			const p = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340;
			s.d(t, "a", (function() {
				return b
			}));
			const u = new a.a(20),
				b = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = u.get(t);
					if (s) return s;
					const n = h(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: p(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(l.l)()),
								render: t => {
									let {
										className: s
									} = t;
									return r.a.createElement(d, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: n
						};
					return u.set(t, a), a
				},
				h = (e, t) => {
					const s = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; s.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				moreContainer: "_3WyMekikYHiwNeWOKndqQp",
				moreCaption: "_2OsGQXO2YdWHs0NVAbBl99",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				thumbnailTitle: "asOYju9PbMblWUua6ZsDl",
				watchingCounter: "_39XcbVabXFJtShzyIs8H1I",
				redditorIcon: "_2hUZYf9a2TRLQxn5jLEohm",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				descriptionPlaceholder: "_1WqW1SYAmWeFcfecGlX5vw",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(m),
				u = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				b = s.n(u);
			const h = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(a.a)(t, b.a.container, b.a.placeholder, b.a.large, p.a.largeAndMediumPostStyles)
					}, r.a.createElement(d.a, {
						className: b.a.backgroundWrapper
					}, r.a.createElement("div", {
						className: b.a.titleAndDescriptionContainer
					}, r.a.createElement("div", {
						className: b.a.titlePlaceholder
					}), r.a.createElement("div", {
						className: b.a.descriptionPlaceholder
					})), r.a.createElement("div", {
						className: b.a.body
					}, g(o.j))))
				},
				g = e => Array.from({
					length: e
				}).map((e, t) => r.a.createElement("div", {
					className: Object(a.a)(b.a.thumbnailContainer, b.a.placeholder),
					key: "rpan-thumb-placeholder-".concat(t)
				}, r.a.createElement("div", {
					className: Object(a.a)(b.a.thumbnail, b.a.placeholder)
				})));
			t.a = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === l.g.Classic ? r.a.createElement(i.b, {
					className: Object(a.a)(t, b.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === l.g.Compact ? r.a.createElement(c.a, {
					className: Object(a.a)(t, b.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(h, {
					className: t
				})
			}
		},
		"./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less": function(e, t, s) {
			e.exports = {
				GeoObject: "_1i52oG5xjHm7jqKUlami21",
				geoObject: "_1i52oG5xjHm7jqKUlami21"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "Pr5bGphZnd_UYC5p4gJCD",
				container: "Pr5bGphZnd_UYC5p4gJCD",
				PopularIcon: "_2uzMzf2xHgtXHeHKoewIn9",
				popularIcon: "_2uzMzf2xHgtXHeHKoewIn9"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				c = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: n
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(d.a.Container, s)
				}, n && r.a.createElement(i.a, {
					className: d.a.PopularIcon
				}), r.a.createElement(o.b, {
					type: o.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2P7APx0UZzT7G61J3taHT1",
				titleFontH2: "RwS_Oc-tCzFs9JqbyJt7y",
				titleFontH3: "_3efLiav9fPpnRcDjg9Gwg",
				titleFontH4: "_3hvxMzKYjdkuu40CSxKjAu",
				titleFontH5: "_3WpmjCstbhZ90uNfolTEpK",
				titleFontH6: "_2aXJlh_wJ7xa9WJa1Ffc1Q",
				metadataFont: "_2uQdSEwqQ-dgsfQ5DUyRNy",
				flairFont: "_2_0QEUNGrG4wZY0ofsNi1h",
				labelsFont: "Ak2Fs_jf7fnNIs6Xajto6",
				actionFont: "_2yOueT_7JFLAAiCNPTQjfk",
				smallButtonFont: "_1j9G7RzwWzCEXRfBup8qCr",
				largeButtonFont: "_21SizvLABo7WuGdVrlWB3E",
				tabFont: "_1nbCityPGTvrop_yKHkhp_",
				strongTextFont: "_1rRA9Vf6uOXrFjUcJJcmOL",
				extraSmallFont: "_35NIohQQNO8kbNHfaERcv4",
				bodyFontH1: "_1J85q0678QbXBAlUsUtzth",
				bodyFontH2: "-XsUf9E0eP4ePrgs3Yf81",
				bodyFontH3: "_22-90BPqugW8lJQPIjwpNd",
				bodyFontH4: "_2DU9sYq9m0gC27PMeSCeRK",
				bodyFontH5: "_2F6ZjEPUyXIS06JZc1JsHQ",
				bodyFontH6: "XnmQfbUmMrXwd2eQYT_6a",
				bodyFont: "_3Jp6jLYRWtZI2hmJA9eurC",
				bodyFontSmall: "_2eo_q38bKZsZzaxO_TC6ni",
				bodyFontMono: "_24Qs54CbgE_djlerYbZ1zl",
				Link: "_13rO9T2auFedwF7O7V72O6",
				link: "_13rO9T2auFedwF7O7V72O6",
				SectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				sectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				SectionTitle: "_2dowUVQFB6EDFymNiITj65",
				sectionTitle: "_2dowUVQFB6EDFymNiITj65",
				SectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				sectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				SectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				sectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				SectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				sectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				SectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				sectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				SectionButton: "dRr-wxcoswiadnFKXkm8G",
				sectionButton: "dRr-wxcoswiadnFKXkm8G",
				Section: "_2pK6e4VBPMQxDuw2kXyIIb",
				section: "_2pK6e4VBPMQxDuw2kXyIIb",
				opened: "_3U7bizV5Ex3dWwKwNODf9R",
				expanded: "_1Rwg1da6VQnIycp8lVYXom",
				Widget: "_3Fe8ia7wR8lbatMEJ6BchP",
				widget: "_3Fe8ia7wR8lbatMEJ6BchP"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/index.tsx"),
				u = s("./src/reddit/components/Translated/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = s("./src/reddit/components/MiniCardPost/index.m.less"),
				C = s.n(j),
				S = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				N = s.n(S);
			const w = e => e.type === f.f.Spoiler,
				_ = Object(h.t)();
			t.a = _(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: r,
					onPostClick: c,
					trendingPost: p,
					trendingSearch: h,
					shouldOpenPost: f,
					showSubredditMeta: j = !0,
					showSubredditName: S,
					subredditOrProfile: _
				} = e, k = p && p.preview && p.preview.url || void 0, P = p && p.isSponsored ? "promoted_trend" : "trending", L = p && Object(d.a)(p.permalink) || "", I = f && L || h && Object(o.a)("/search", {
					q: h.rawQuery,
					source: P
				}) || L, T = h ? h.subredditInfo && h.subredditInfo.icon : _ && _.icon.url, B = h ? h.subredditInfo && h.subredditInfo.displayText : _ && (_.displayText || _.name), M = p ? p.flair.filter(w) : [], D = p ? p.score : 0, A = p ? p.numComments : 0, R = p && p.isSponsored, F = Object(E.a)(e).body, U = "linear-gradient(\n      ".concat(Object(n.j)(F, .2), ",\n      ").concat(Object(n.j)(F, .3), ",\n      ").concat(Object(n.j)(F, .4), ",\n      ").concat(Object(n.j)(F, .6), ",\n      ").concat(Object(n.j)(F, .8), ",\n      ").concat(F, "\n    )"), W = a.a.createElement("div", {
					className: Object(i.a)(N.a.trendingPost, {
						[N.a["m-background"]]: !!k
					})
				}, a.a.createElement(g.a, {
					to: I
				}, a.a.createElement("div", {
					className: Object(i.a)(N.a.backgroundWrapper, C.a.backgroundWrapper, t),
					style: {
						background: Object(v.g)(Object(E.a)(e).body, k || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, R && a.a.createElement("div", {
					className: N.a.promoted
				}, a.a.createElement(O.c, null, "promoted")), a.a.createElement("div", {
					className: Object(i.a)(N.a.innerContainer, C.a.innerContainer, r),
					onClick: c,
					title: p ? p.title : ""
				}, a.a.createElement("h2", {
					className: p ? N.a.title : N.a.titleNoDescription
				}, e.title), p ? a.a.createElement("div", {
					className: Object(i.a)(N.a.description, s)
				}, M.length > 0 && a.a.createElement(m.a, {
					className: N.a.flair,
					titleFlair: M,
					nowrap: !0,
					post: p,
					showCategoryTag: !1
				}), p.title) : a.a.createElement("div", {
					className: N.a.spacer
				}), j && T && B && a.a.createElement(x.a, {
					className: N.a.relatedSubredditMetaData,
					iconClassName: N.a.subredditIcon,
					iconUrl: T || void 0,
					suffix: a.a.createElement(u.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: B
						}
					})
				}), !j && p && a.a.createElement("div", {
					className: N.a.metaLine
				}, S && B && a.a.createElement("span", {
					className: N.a.meta
				}, Object(y.b)(B)), a.a.createElement("span", {
					className: N.a.meta
				}, a.a.createElement(O.c, null, "".concat(Object(l.b)(D), " "), a.a.createElement(O.a, {
					count: D,
					name: "score",
					plural: "points",
					singular: "point"
				}))), a.a.createElement("span", {
					className: N.a.meta
				}, a.a.createElement(O.c, null, "".concat(Object(l.b)(A), " "), a.a.createElement(O.a, {
					count: A,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return R ? a.a.createElement(b.a, {
					post: p,
					children: W
				}) : W
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					className: t,
					exploreV2Variant: s,
					layoutBodyClassName: n,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, d, t)
				}, r.a.createElement(o.a, {
					className: s ? void 0 : c.a.layout,
					bodyClassName: Object(a.a)(c.a.layoutBody, d, n),
					exploreV2Variant: s,
					header: e.header,
					headerClassName: Object(a.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_c5cqV3WsdQo95Ql4El73",
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const p = r.a.createElement(o.a, {
					className: m.a.duHeader
				}, r.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				u = Object(d.a)({
					isLoading: !0
				});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				exploreV2Variant: e.exploreV2Variant,
				header: p,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView,
				children: Array.from({
					length: e.numberOfItems || 6
				}).map(e => r.a.createElement("div", {
					className: m.a.post,
					key: "placeholder-post-".concat(e)
				}, r.a.createElement("div", {
					className: Object(a.a)(m.a.desc, m.a.one, u)
				}), r.a.createElement("div", {
					className: Object(a.a)(m.a.desc, m.a.two, u)
				}), r.a.createElement("div", {
					className: Object(a.a)(m.a.icon, u)
				}), r.a.createElement("div", {
					className: Object(a.a)(m.a.name, u)
				})))
			})
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				p = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.div("BannerContainer", u.a),
				g = b.a.wrapped(e => r.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", u.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var y = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return r.a.createElement(h, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, r.a.createElement("a", {
						href: d.a.redditUrl + s,
						target: "_blank"
					}, r.a.createElement(g, {
						src: d.a.assetPath + t
					})))
				},
				O = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = s("./src/lib/getShortenedLink.ts"),
				S = s("./src/lib/opener/index.ts"),
				N = s("./src/reddit/actions/ads/index.ts"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/InsideOverlay.tsx"),
				P = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				L = s("./src/reddit/helpers/adCount/index.ts"),
				I = s("./src/reddit/helpers/pixels.ts"),
				T = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				B = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				M = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				D = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				A = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				R = s("./src/reddit/models/Theme/index.ts"),
				F = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = s("./src/reddit/models/Media/index.ts"),
				W = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				H = s.n(W);
			const V = b.a.wrapped(e => r.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", H.a);
			class K extends r.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = e.media && !Object(U.E)(e.media) ? e.media.content : "",
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case O.eb.IMAGE:
							return r.a.createElement(V, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var z = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				Q = s.n(z);
			const G = b.a.wrapped(E.d, "PostTopMeta", Q.a),
				q = b.a.div("BannerAdContainer", Q.a),
				Y = e => {
					let {
						children: t
					} = e;
					return r.a.createElement("div", null, t)
				},
				Z = b.a.div("PromotedPostContainer", Q.a),
				J = b.a.wrapped(D.a, "OutboundLinkIcon", Q.a),
				X = b.a.div("SourceLinkWrapper", Q.a),
				$ = b.a.div("TopLine", Q.a),
				ee = b.a.wrapped(v.c, "PostTitle", Q.a),
				te = b.a.div("PostMediaWrapper", Q.a),
				se = b.a.div("BackgroundWrapper", Q.a),
				ne = b.a.wrapped(w.a, "PostContainer", Q.a),
				re = 640,
				ae = (e, t) => {
					Object(I.a)(t.events, _.a.Click), t.source ? t.source.outboundUrl ? Object(S.d)(t.source.outboundUrl, S.c.BLANK) : Object(S.d)(t.source.url, S.c.BLANK) : Object(S.d)(t.permalink, S.c.BLANK)
				},
				oe = e => Object(M.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(B.a)(Object(T.a)(e), A.a.actionIcon, A.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(R.g)(Object(F.a)(e).body, null, null) || ""
				});
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: n
					} = this.props;
					let a, o, c = {};
					return e.isBlank ? (a = Y, o = null) : e.isMediaOnly ? (a = q, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, o = r.a.createElement(K, {
						post: e
					})) : (a = Z, o = r.a.createElement(se, {
						style: ce(this.props)
					}, r.a.createElement($, null, r.a.createElement(G, {
						tooltipType: n ? E.c.Lightbox : void 0,
						language: O.y,
						post: e,
						showTimestamp: !1
					})), r.a.createElement(ee, {
						post: e,
						size: v.b.Large,
						format: oe
					}), e.source && r.a.createElement(X, null, r.a.createElement(P.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(C.a)(e), r.a.createElement(J, null))), r.a.createElement(te, null, e.media && r.a.createElement(f.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: re,
						shouldLoad: !0
					})))), r.a.createElement(a, c, r.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: ae,
						eventFactory: s,
						style: ie(this.props)
					}, o))
				}
			}
			var le = Object(a.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: r
						} = t;
						e(Object(N.c)(Object(L.a)(s, !!r, n)))
					}
				}))(Object(k.b)(Object(j.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				pe = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ue = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				be = s.n(ue);
			const he = Object(o.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(L.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(a.b)(he),
				xe = b.a.wrapped(c.a, "BannerAd", be.a),
				ye = b.a.wrapped(pe.a, "ThemedWidget", be.a),
				Oe = b.a.div("SidebarAdPlaceholder", be.a),
				fe = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				ve = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(U.B)(e.media) && e.media.content)),
				Ee = e => !!e && e.isBlank;
			class je extends r.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: a,
						refreshKey: o,
						listingName: c,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: b,
						waitForProgrammatic: h
					} = this.props;
					return u || t || !ve(s) && h ? r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, r.a.createElement(Oe, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : b ? r.a.createElement(me.a, null, r.a.createElement(y, null)) : ve(s) ? r.a.createElement(me.a, null, r.a.createElement(le, {
						post: s,
						refreshKey: o,
						listingName: c,
						placement: d,
						placementIndex: a
					})) : r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, Ee(s) && r.a.createElement(le, {
						post: s,
						refreshKey: o,
						listingName: c,
						placement: d,
						placementIndex: a
					}), r.a.createElement(xe, {
						id: fe(d, n, a),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: o,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(je)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const p = Object(o.t)();
			t.a = p(Object(a.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const r = Object(i.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					a = Object(c.y)(e),
					o = Object(i.e)(e);
				return {
					canShowAd: r && !a,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: a,
					viewIsUnsafe: o
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: a
				} = e, o = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && a ? r.a.createElement(d.a, l({
					forceHouseAd: n
				}, o)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("container", a.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.a("Link", c.a);
			t.a = e => r.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: c.a.LinkContainer
			}, r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarPostList/ObservedPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r);
			const o = .99;
			class i extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= o && t(s)
					}
				}
				render() {
					return a.a.createElement(n.a, {
						threshold: o,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			t.a = i
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				x = s("./src/lib/isUrl/index.ts"),
				y = s("./src/lib/prettyPrintNumber/index.ts"),
				O = s("./src/reddit/components/FlairWrapper/index.tsx"),
				f = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				S = s.n(C);
			const N = e => e.type === v.f.Nsfw || e.type === v.f.Spoiler,
				w = Object(o.c)({
					language: j.S,
					post: h.I,
					subredditOrProfile: h.T
				});
			class _ extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: a
					} = this.props, o = {
						post: t
					}, c = Object(x.a)(Object(f.b)(o)), d = t.flair.filter(N);
					return r.a.createElement("div", {
						className: Object(i.a)(S.a.container, e, {
							[S.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: S.a.mainLine
					}, c && r.a.createElement("div", {
						className: S.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(f.a, o)), r.a.createElement("div", {
						className: Object(i.a)(S.a.title, !c && S.a.titleSingle),
						title: t.title
					}, d.length > 0 && r.a.createElement(O.a, {
						className: S.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), r.a.createElement("div", {
						className: S.a.metaLine
					}, n && !!a && r.a.createElement("span", {
						className: S.a.meta
					}, Object(E.e)(a) ? Object(m.c)(a.displayText || a.name) : Object(m.b)(a.displayText || a.name)), r.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.score), " "), r.a.createElement(u.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), r.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.numComments), " "), r.a.createElement(u.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var k = Object(a.b)(w, e => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}))(_),
				P = s("./src/reddit/components/SidebarPostList/index.m.less"),
				L = s.n(P);
			s.d(t, "b", (function() {
				return B
			}));
			const I = 10,
				T = 2,
				B = Object(o.a)(h.N, e => e.filter(e => !e.isSponsored)),
				M = Object(o.c)({
					posts: B
				}),
				D = Object(a.b)(M, e => ({
					openPost: t => e(Object(p.a)(t.permalink))
				}));
			class A extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || I, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: a,
							smallPostClassName: o
						} = this.props;
						return r.a.createElement(g.a, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, r.a.createElement(k, {
							className: Object(i.a)(L.a.smallPost, o),
							containerOnClick: s,
							postId: e.id,
							redditStyle: a,
							showSubredditName: Object(c.a)(Object(m.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: a,
						posts: o,
						redditStyle: p,
						showMoreButton: h,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: y
					} = this.state;
					if (0 === o.length) return null;
					const O = this.getVisiblePostsCounts(),
						f = Object(b.a)(x),
						v = Object(b.b)(x),
						E = f || v,
						j = o.slice(y * O, (y + 1) * O),
						[C, ...S] = j,
						N = E ? j.slice(0, T) : S.slice(0, T),
						w = E ? j.slice(T) : S.slice(T);
					return r.a.createElement("div", {
						className: Object(i.a)(L.a.container, t, {
							[L.a.redditStyle]: p
						})
					}, !E && r.a.createElement(g.a, {
						onPostVisible: a,
						postId: C.id
					}, r.a.createElement(d.a, {
						backgroundWrapperClassName: L.a.largePostBackgroundWrapper,
						descriptionClassName: L.a.largePostDescription,
						innerContainerClassName: L.a.largePostInnerContainer,
						"data-redditstyle": p,
						onPostClick: this.openLargePost,
						postId: C.id,
						showSubredditMeta: !1,
						showSubredditName: Object(c.a)(Object(m.f)(s)),
						trendingPost: C
					})), N.map(this.renderSmallPost), e, w.map(this.renderSmallPost), h && r.a.createElement(l.n, {
						className: L.a.SeeMore,
						onClick: this.showMorePosts
					}, n || r.a.createElement(u.c, null, "See More")))
				}
			}
			t.a = D(A)
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, p.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				O = s.n(y),
				f = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const j = c.e[1] + 24,
				C = h.g + 8 + 152 + 32 + 16,
				S = C + j + 8,
				N = f.a.div("Container", O.a),
				w = f.a.wrapped(e => {
					var {
						className: t
					} = e, s = E(e, ["className"]);
					return i.a.createElement(u, v({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", O.a),
				_ = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: r,
						isSticky: a
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(r, {
							[O.a.StickyStyles]: a,
							[O.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class k extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > C
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = a()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							hideFooter: s,
							railsWidgetsVariant: n,
							children: r
						}
					} = this, a = this.state.isAdSticky && !(!e && !r);
					return i.a.createElement(N, {
						innerRef: this.setWrapperRef
					}, i.a.createElement(_, {
						categoriesPlacementVariant: t,
						isSticky: a || !!n
					}, e, r, !s && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(w, null))
				}
			}
			const P = Object(g.t)();
			t.a = P(k)
		},
		"./src/reddit/components/SidebarTrendingPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1krn-WWFNj-mY6pgxAtmTx",
				title: "_3zJYcwZRQR6PCnf10HuZGw",
				mainLine: "_11ESdMiPEZ3makcieIRfzK",
				thumbnailContainer: "_2yyovSXEnlXq-cmzTBGVSr",
				titleSingle: "_3iL3BLNEPj5E-KpaQ9hoSb",
				flair: "_2CJokp6ttLJys6iHljtVQ_",
				metaLine: "_1RAZe2feup7ElvffqHCDN8",
				meta: "_1p6_aI2KRaeJrjjMHJAWIW"
			}
		},
		"./src/reddit/components/SidebarTrendingPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1onjAGFGh8TpXfwlqM-NOA",
				largePostBackgroundWrapper: "_3Cq2ksLR87ZU-5hRe7alNN",
				largePostDescription: "_1xgGnApLgA_EEM-VvxbN-q",
				largePostInnerContainer: "_1wLLT_duObCLHH5C1q4KF",
				smallPost: "_3_Mtxl2b3N31eCyeBm29kQ"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = s.n(p),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const y = h.a.button("IconButton", u.a),
				O = h.a.wrapped(l.a, "SubscribeIcon", u.a),
				f = h.a.wrapped(d.a, "UnsubscribeIcon", u.a),
				v = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return r.a.createElement(y, n, r.a.createElement(O, {
						className: Object(b.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", u.a),
				E = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, g({}, n, {
						className: Object(b.a)(n.className, {
							[u.a.isSmall]: s
						})
					})) : r.a.createElement(i.n, g({}, n, {
						className: Object(b.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", u.a),
				j = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(v, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : r.a.createElement(E, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				},
				C = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: a
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return r.a.createElement(y, i, r.a.createElement(f, {
						className: Object(b.a)(o.o, i.className, {
							[u.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				S = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: a
					} = e, o = x(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? Object(c.c)("Joined") : Object(c.c)("Following")), r.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === a ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(b.a)(o.className, {
							[u.a.isSmall]: n
						});
					return t ? r.a.createElement(i.i, g({}, o, {
						className: l,
						children: d
					})) : r.a.createElement(i.n, g({}, o, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", u.a),
				N = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(C, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : r.a.createElement(S, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				};
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: n,
						language: o,
						small: i = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? r.a.createElement(N, g({}, c, {
						language: o,
						type: this.props.identifier.type
					})) : r.a.createElement(j, g({}, c, {
						id: n
					}), this.props.children, Object(a.a)(o, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.b)(a.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/path-browserify/index.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				E = s("./src/reddit/helpers/trackers/navigation.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/TimeSort/index.m.less"),
				N = s.n(S),
				w = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = "TimeSort--SortPicker",
				P = Object(l.a)(f.a),
				L = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(y.H)(e) || (n = r.a.join(n, t)), Object(m.a)(n, {
						[x.t]: s
					})
				},
				I = w.a.div("ListingSortContainer", N.a),
				T = Object(y.t)(),
				B = Object(c.c)({
					dropdownIsOpen: Object(j.b)(k),
					language: C.S
				}),
				M = Object(i.b)(B, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: k
					}))
				}));
			t.a = T(M(Object(h.b)(e => o.a.createElement(I, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, o.a.createElement(b.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, o.a.createElement(b.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: k,
				showDropdownTriangle: !0
			})), o.a.createElement(O.a.Consumer, null, t => o.a.createElement(P, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: k
			}, t), [p.Ob.HOUR, p.Ob.DAY, p.Ob.WEEK, p.Ob.MONTH, p.Ob.YEAR, p.Ob.ALL].map(t => o.a.createElement(v.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
				href: L(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(E.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/sampleSize.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/lodash/first.js"),
				c = s.n(i),
				d = s("./node_modules/lodash/times.js"),
				l = s.n(d),
				m = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./src/config.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				h = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/constants/subredditLeaderboard.ts"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/Chip/index.m.less"),
				f = s.n(O);
			var v = e => {
					const t = e.to ? m.a : "div",
						s = Object(u.a)(f.a.chip, e.isActive && f.a.active, e.className);
					return o.a.createElement(t, {
						className: s,
						to: e.to || ""
					}, e.children)
				},
				E = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				S = s.n(C);
			const N = e => {
					const t = !(!e.rankings || !e.rankings.length),
						s = !t && S.a.communityBannerPlaceholder;
					return o.a.createElement("div", {
						className: Object(u.a)(e.className, S.a.communityBanner, s),
						style: {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						}
					}, t && o.a.createElement("h2", {
						className: S.a.communityBannerText
					}, o.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || x.c),
						to: e.categoryName === x.m ? "".concat(x.e).concat(x.m) : x.e
					}, o.a.createElement(o.a.Fragment, null, e.categoryName ? (e => e === x.m ? o.a.createElement(j.c, null, "Up-and-coming Communities") : o.a.createElement(o.a.Fragment, null, "Top", o.a.createElement("span", {
						className: S.a.categoryName
					}, " ", o.a.createElement(j.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				w = e => o.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const s = e.subreddits[t.id];
					return o.a.createElement(b.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || x.c, s.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && _),
				_ = o.a.createElement(o.a.Fragment, null, l()(5, e => o.a.createElement(h.a, {
					key: e
				}))),
				k = e => {
					const t = e.isSecondaryButton ? y.k : y.h;
					return o.a.createElement("div", {
						className: S.a.footer
					}, o.a.createElement(t, {
						className: S.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || x.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? o.a.createElement(j.c, null, "See All ", o.a.createElement(j.b, {
						name: "categoryName"
					}, e.categoryName)) : o.a.createElement(j.c, null, "See All") : o.a.createElement(j.c, null, "View all")))
				},
				P = e => o.a.createElement("div", {
					className: S.a.categoryPicker
				}, e.categories && e.categories.map(e => o.a.createElement(v, {
					className: S.a.chip,
					key: e.name,
					to: "".concat(x.e).concat(Object(E.f)(e.name), "/")
				}, e.name)));
			var L = e => {
					const t = c()(e.rankings),
						s = e.subreddits && t && e.subreddits[t.id],
						n = "".concat(p.a.assetPath, "/img/leaderboard/banner-background.png"),
						r = s ? s.bannerBackgroundImage || n : void 0,
						a = e.to || e.categoryName && "".concat(x.e).concat(Object(E.f)(e.categoryName) || "", "/");
					return o.a.createElement(g.a, {
						className: Object(u.a)(e.className, S.a.widget),
						contentOnly: !0
					}, o.a.createElement(N, {
						bannerBackgroundImage: r,
						categoryName: e.categoryName,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings
					}), o.a.createElement(w, {
						categoryName: e.categoryName,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings,
						shouldDisplayDelta: !1,
						subreddits: e.subreddits
					}), o.a.createElement(k, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: a
					}), e.categories && o.a.createElement(P, {
						categories: e.categories
					}))
				},
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/contexts/ApiContext.tsx"),
				B = s("./src/reddit/endpoints/subreddit/models.ts"),
				M = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				D = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				A = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				R = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const U = async (e, t) => {
				const s = await Object(M.a)(e, t);
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(D.c)(t)
				}
			}, W = async e => {
				const t = r()(R.a, 5),
					s = await Object(B.a)(e, {
						names: t
					});
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(D.a)(t)
				}
			};
			class H extends o.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, s = e && e.id;
						s !== x.l ? (s || s === x.d) && U(this.props.gqlContext(), {
							categoryId: s,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								s = e && e.subreddits,
								n = this.props.category && this.props.category.name || x.a;
							t && s && this.setState(e => Object.assign({}, e, {
								[n]: {
									rankings: t,
									subreddits: s
								}
							}))
						}).catch(e => console.error("Error >>>", e)) : W(this.props.gqlContext()).then(e => {
							if (!e) return;
							const {
								rankings: t,
								subreddits: s
							} = e;
							this.setState(e => Object.assign({}, e, {
								[x.m]: {
									rankings: t,
									subreddits: s
								}
							}))
						})
					}, this.sendEventClick = (e, t, s) => {
						this.props.sendEvent(Object(A.c)(e, t, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, s)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						s = this.props && this.props.category && this.props.category.id,
						n = this.props.category && this.props.category.name;
					t !== s && n && !this.state[n] && this.fetchTopSubreddits()
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						s = t || x.a,
						n = this.state[s],
						r = n ? n.rankings : [],
						a = n ? n.subreddits : {};
					return o.a.createElement(L, F({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: r,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: a
					}, this.props))
				}
			}
			t.a = Object(T.b)(Object(I.b)(H))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = e => r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 10 8",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
				}))),
				p = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				u = s.n(p);
			s.d(t, "a", (function() {
				return h
			}));
			const b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(d.b, {
					className: u.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("span", {
					className: u.a.subredditDetailsContainer
				}, e.large ? r.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, r.a.createElement("span", {
					className: u.a.regularText
				}, e.subreddit.displayText)) : r.a.createElement("span", {
					className: u.a.regularText
				}, e.subreddit.displayText), null === e.rank && r.a.createElement("span", {
					className: u.a.smallText
				}, r.a.createElement(l.c, null, "This community hasn't been ranked yet.")))),
				h = e => {
					const t = Object(o.a)(u.a.subredditRankItem, e.large && u.a.large),
						s = e.delta && e.delta > 0,
						n = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(i.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						c = e.delta ? s ? "#46D160" : "#EA0027" : "transparent";
					return r.a.createElement("li", {
						className: u.a.listItem,
						key: e.subreddit.displayText
					}, r.a.createElement(a.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, r.a.createElement("div", {
						className: u.a.subredditRankItemColumn
					}, r.a.createElement("span", {
						className: u.a.rankText
					}, n), r.a.createElement(m, {
						className: Object(o.a)(u.a.arrow, !s && u.a.negative),
						style: {
							fill: c
						}
					}), r.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && r.a.createElement("span", {
						className: u.a.regularText
					}, e.delta ? Object(i.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = s.n(o);
			const c = e => r.a.createElement("div", {
				className: Object(a.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, r.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), r.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_160axjzy-Hx7ANXMr87Rbe",
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb"
			}
		},
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, s) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = a.a.div("WidgetBackground", c.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				b = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const g = Object(i.c)({
				language: h.S
			});
			var x = Object(a.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(b.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(b.e()),
						onUnsubscribe: () => e(b.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				y = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = s("./src/reddit/i18n/utils.ts"),
				j = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				C = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				N = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(w);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return I
			}));
			const P = e => r.a.createElement(y.a, {
					className: Object(d.a)(_.a.Container, {
						[_.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && r.a.createElement(p.a, {
					className: _.a.WidgetTitle
				}, e.title), r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(v.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || Object(E.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(I, k({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					railsWidgetsVariant: e.railsWidgetsVariant,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(f.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				L = Object(i.c)({
					hideNSFWPref: h.z,
					language: h.S
				}),
				I = Object(a.b)(L)(e => r.a.createElement("div", {
					className: _.a.communityItemContainer
				}, r.a.createElement(C.a, {
					widthRight: O.u
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(j.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: _.a.communityName,
					to: Object(N.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(N.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, Object(c.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(m.b, {
					flair: {
						type: S.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(v.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(f.n, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(x, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === n.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2j6XpwwZyn7dNcfH7Blz0B",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				rails: "_2ucwLgmYT_bEawlfA81Q3L",
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				WidgetTitle: "g-Bp8lR31etQDRRiyWCDU",
				widgetTitle: "g-Bp8lR31etQDRRiyWCDU"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var h = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = v(e);
					return Object(O.f)(t)
				},
				C = e => {
					const t = E(e);
					return Object(O.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				N = s.n(S);
			const w = Object(m.t)(),
				_ = Object(a.b)(() => Object(o.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(x.m)(e, {
								subredditId: s
							}),
							r = Object(y.U)(e);
						return n || r
					},
					subredditId: m.m,
					topPostVariant: g.d
				}));
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: a,
						onClick: o,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? N.a.widgetContentOnly : N.a.widgetContent, b = !n && this.props.styles, g = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, N.a.widgetBackground, {
							[N.a.redditStyle]: n,
							[N.a.clickable]: !!o,
							[N.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: o,
						style: g
					}, c && r.a.createElement("div", {
						className: N.a.widgetHeader,
						style: x
					}, r.a.createElement("div", {
						className: Object(i.a)(N.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), a), r.a.createElement("div", {
						className: Object(i.a)(u, {
							[N.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.n, {
						className: N.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, r.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = w(_(Object(c.a)(Object(l.b)(k))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const v = f(),
				E = {
					apiError: h.c,
					apiPending: h.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: h.g,
					postsById: x.S,
					postIds: Object(a.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(x.F)(e, s, n, r)
					}),
					subredditsById: y.Y,
					viewportDataLoaded: O.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => u.a
				},
				j = Object(r.c)(E),
				C = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.A(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(i.B(t, n, r))
					}
				}),
				S = Object(n.b)(j, C, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(v(S(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/i18n/utils.ts");
			const a = {
					[n.N.BEST]: Object(r.c)("best"),
					[n.N.HOT]: Object(r.c)("hot"),
					[n.N.NEW]: Object(r.c)("new"),
					[n.N.CONTROVERSIAL]: Object(r.c)("controversial"),
					[n.N.RISING]: Object(r.c)("rising"),
					[n.N.TOP]: Object(r.c)("top")
				},
				o = {
					[n.Ob.HOUR]: Object(r.c)("Now"),
					[n.Ob.DAY]: Object(r.c)("Today"),
					[n.Ob.WEEK]: Object(r.c)("This week"),
					[n.Ob.MONTH]: Object(r.c)("This month"),
					[n.Ob.YEAR]: Object(r.c)("This year"),
					[n.Ob.ALL]: Object(r.c)("All time")
				}
		},
		"./src/reddit/constants/topic.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				r = s("./src/reddit/constants/listings.ts");
			const a = e => "".concat(r.c[r.b.Topic]).concat(Object(n.g)(e), "/")
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, s) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				v = s.n(f);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const C = e => Object(c.a)(v.a.iconStyles, e.className, {
					[v.a.mDisabled]: e.disabled,
					[v.a.mRedditStyle]: e.redditStyle
				}),
				S = e => {
					var {
						isActive: t
					} = e, s = j(e, ["isActive"]);
					return r.a.createElement("button", E({
						className: Object(c.a)(v.a.layoutButton, {
							[v.a.mIsActive]: t
						})
					}, s))
				},
				N = Object(i.e)("listings.layoutSwitcher.label"),
				w = Object(i.e)("listings.layoutSwitcher.card"),
				_ = Object(i.e)("listings.layoutSwitcher.classic"),
				k = Object(i.e)("listings.layoutSwitcher.compact"),
				P = [{
					layout: p.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, a = j(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(h.a, E({
							className: C({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, a))
					},
					tooltipTranslation: w
				}, {
					layout: p.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, a = j(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(u.a, E({
							className: C({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, a))
					},
					tooltipTranslation: _
				}, {
					layout: p.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, a = j(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(b.a, E({
							className: C({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, a))
					},
					tooltipTranslation: k
				}],
				L = Object(x.t)(),
				I = Object(o.c)({
					language: O.S,
					postLayout: x.M,
					redditStyle: x.B
				}),
				T = Object(a.b)(I, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = L(T(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || p.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(c.a)(v.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: v.a.title
				}, N(e.language)), r.a.createElement("div", {
					className: v.a.iconContainer
				}, P.map(a => {
					const o = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(y.screen)(e),
								subreddit: Object(y.subreddit)(e)
							})))
						})(a.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + a.layout,
						l = a.layout === n;
					return r.a.createElement(S, {
						"aria-label": a.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: a.layout,
						onClick: o,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: o
					}, r.a.createElement(a.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), r.a.createElement(d.c, {
						className: v.a.tooltip,
						tooltipId: c,
						text: a.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const a = Math.floor(100 * Math.random());
			var o;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(o || (o = {}));
			t.b = (e, t, s, o, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return o && !Object(n.a)(o.name) && (c.subreddit = o.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = a, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "g", (function() {
				return O
			}));
			var n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case n.a.LIVE:
							return "stream_live";
						case n.a.VOD:
							return "stream_vod";
						case n.a.UNAVAILABLE:
							return "stream_unavailable";
						default:
							return
					}
				},
				o = (e, t) => {
					if (t) {
						const s = Object(n.i)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: r.post(e, t.post.id),
							media: Object.assign({}, r.media(e, t.post.id, void 0, t), {
								type: a(s)
							})
						}
					}
				},
				i = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				c = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}),
				d = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					actionInfo: {
						position: t || 0
					}
				}, o(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, o(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), o(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), o(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), o(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), o(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), o(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), o(t, e)),
				x = e => t => {
					const s = Object(n.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, o(t, s))
				},
				y = e => t => {
					const s = Object(n.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, o(t, s))
				},
				O = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => t => Object.assign({}, r.defaults(t), {
					action: "click",
					noun: Object(n.g)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, s) => a => Object.assign({}, r.defaults(a), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.g)(t),
						name: s && s.toLowerCase()
					}
				}),
				i = (e, t) => s => Object.assign({}, r.defaults(s), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.g)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, s) => a => Object.assign({}, r.defaults(a), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.g)(t),
						name: s && s.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, r.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, r.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), r.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), r.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/Explore/Banner/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "uLddwn0or3x3p7TMOGwHI",
				background: "_3KNrvlujtKPx0Hka0j-LZq",
				image: "_3A0kCYVWPNDyvhkR29Kvqr",
				leftImage: "_3EqWUAaRoh-h-P6bjNuzEc",
				rightImage: "_3t3SNjGA-P0PnCELDP4GOn",
				mmRightAligned: "_1RF7TkDzRTcmTV2C8zOw-x"
			}
		},
		"./src/reddit/pages/Explore/Banner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/pages/Explore/Banner/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("div", {
				className: Object(a.a)(i.a.banner, e.className)
			}, r.a.createElement("img", {
				className: i.a.background,
				src: e.backgroundImagePath,
				srcSet: e.backgroundImageSrcSet
			}), e.leftImage && r.a.createElement("div", {
				className: i.a.leftImage
			}, e.leftImage), e.rightImage && r.a.createElement("div", {
				className: Object(a.a)(i.a.rightImage, {
					[i.a.mRightAligned]: e.rightAligned
				})
			}, e.rightImage), e.children)
		},
		"./src/reddit/pages/Frontpage/TopBanner/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_1_pR1ht4IEZ9YEim8HWhnn",
				text: "cNNw0iJilp53i5nVfBxEf",
				title: "_3Wmex7eM-A2PuwJcY9tzuC",
				description: "qv0Unf-rou9xlx3G0102y",
				leftImage: "OoDUyBh7E8pgzdHjnv8T0",
				rightImage: "_2x0bYf3CVk5DL1cL-UPrxw",
				close: "_15Qf6H_pWI2JiMAUCMaBPI"
			}
		},
		"./src/reddit/pages/Frontpage/TopBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/monthsToMinutes/homeFeed.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/pages/Explore/Banner/index.tsx"),
				b = s("./src/reddit/selectors/monthsToMinutes.ts"),
				h = s("./src/reddit/pages/Frontpage/TopBanner/index.m.less"),
				g = s.n(h);
			const x = 3,
				y = "".concat(n.a.assetPath, "/img/banner/home-top-banner-background.png"),
				O = "".concat(n.a.assetPath, "/img/banner/home-top-banner-left.png"),
				f = "".concat(n.a.assetPath, "/img/banner/home-top-banner-right.png"),
				v = a.a.createElement("img", {
					className: g.a.leftImage,
					src: O
				}),
				E = a.a.createElement("img", {
					className: g.a.rightImage,
					src: f
				}),
				j = Object(i.c)({
					viewsCount: b.s
				}),
				C = Object(o.b)(j, e => ({
					close: () => e(Object(c.e)()),
					incrementViewCounter: () => e(Object(c.i)())
				}));
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.closeBanner = () => {
						this.props.close(), this.props.sendEvent(Object(m.f)())
					}
				}
				componentDidMount() {
					this.props.incrementViewCounter(), this.props.sendEvent(Object(m.g)())
				}
				render() {
					const {
						className: e,
						viewsCount: t
					} = this.props, s = t >= x;
					return a.a.createElement(u.a, {
						className: e,
						backgroundImagePath: y,
						leftImage: v,
						rightImage: E
					}, a.a.createElement("div", {
						className: g.a.layout
					}, a.a.createElement("div", {
						className: g.a.text
					}, a.a.createElement("div", {
						className: g.a.title
					}, a.a.createElement(l.a, {
						msgId: "promoBanners.topBanner.title"
					})), a.a.createElement("div", {
						className: g.a.description
					}, a.a.createElement(l.a, {
						msgId: "promoBanners.topBanner.description"
					}))), s && a.a.createElement("button", {
						className: g.a.close,
						onClick: this.closeBanner
					}, a.a.createElement(p.a, null))))
				}
			}
			t.a = C(Object(d.b)(S))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5",
				Container: "a4yepvlqMNSEah39F7ef2",
				container: "a4yepvlqMNSEah39F7ef2",
				SidebarRight: "_3xvdvEUndszx1sewFgSdll",
				sidebarRight: "_3xvdvEUndszx1sewFgSdll",
				TrendingPosts: "_5q2KEvcKLfbsGTZKUsubA",
				trendingPosts: "_5q2KEvcKLfbsGTZKUsubA",
				large: "_2Qucra8tqXjOnRT1TJO_xl"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = s.n(n),
				a = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(a),
				i = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = s.n(i),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				m = s.n(l),
				p = s("./node_modules/react/index.js"),
				u = s.n(p),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/extractQueryParams/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				O = s("./src/lib/makeListingKey/index.ts"),
				f = s("./src/lib/performanceTimings/index.tsx"),
				v = s("./src/reddit/actions/frontpage.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				j = s("./src/reddit/components/EmptySubreddit.tsx"),
				C = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				S = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				N = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				w = s("./src/reddit/components/InFeedPostCreation/index.tsx"),
				_ = s("./src/reddit/components/JumpToContent/index.tsx"),
				k = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				P = s("./src/reddit/components/ListingPostList/index.tsx"),
				L = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				I = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				T = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/constants/listings.ts"),
				D = s("./src/reddit/constants/parameters.ts"),
				A = s("./src/reddit/constants/postLayout.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/trackers/screenview.ts"),
				U = s("./src/reddit/i18n/components.tsx"),
				W = s("./src/reddit/layout/page/Listing/index.tsx"),
				H = s("./src/reddit/pages/Topic/SidebarLeft/index.tsx"),
				V = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				K = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				z = s("./src/reddit/selectors/experiments/generalCleanup.ts"),
				Q = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				G = s("./src/reddit/selectors/experiments/trending.ts"),
				q = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				Y = s("./src/reddit/selectors/frontpage.ts"),
				Z = s("./src/reddit/selectors/meta.ts"),
				J = s("./src/reddit/selectors/monthsToMinutes.ts"),
				X = s("./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts"),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/lib/constants/index.ts"),
				te = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				se = s("./src/lib/objectSelector/index.ts"),
				ne = s("./src/reddit/constants/page.ts"),
				re = s("./src/reddit/pages/Frontpage/TopBanner/index.tsx"),
				ae = s("./src/reddit/pages/Frontpage/index.m.less"),
				oe = s.n(ae);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = Object(R.t)(),
				de = Object(h.c)({
					queryParams: Object(se.a)((e, t) => {
						let {
							location: s
						} = t;
						return m()([...Object(x.a)(s.search)])
					}),
					sort: (e, t) => {
						let {
							match: s
						} = t;
						const n = Object(Y.a)(e);
						return s.params.sort || n
					}
				}),
				le = Object(h.c)({
					countryMeta: Z.b,
					geopopular: $.m
				}),
				me = Object(h.c)({
					categoriesPlacementVariant: V.a,
					exploreV2Variant: (e, t) => {
						if (Object(R.D)(e, t)) return Object(K.a)(e)
					},
					generalCleanupVariant: z.a,
					isInTrendingEntrypointExperiment: G.a,
					isLoggedIn: $.J,
					isPopular: R.D,
					isRpanDuVisible: e => Object(X.a)(e, {
						listingName: te.R
					}),
					rpanInjectionIndex: e => Object(X.b)(e, {
						listingName: te.R
					}),
					isTopBannerClosed: J.r,
					layout: R.M,
					m2mIsEnabled: J.w,
					railsWidgetsVariant: Q.d
				}),
				pe = () => Object(h.a)(le, de, me, e => Object(X.a)(e, {
					listingName: te.R
				}), e => Object(X.b)(e, {
					listingName: te.R
				}), e => e, (e, t, s, n, r, a) => {
					let {
						countryMeta: o,
						geopopular: i
					} = e, {
						queryParams: c,
						sort: d
					} = t;
					const l = D.t in c && c[D.t].toUpperCase(),
						m = "string" == typeof l && l in ee.Ob ? ee.Ob[l] : ee.Pb,
						p = Object(O.a)(ne.b, d, c),
						u = o || ee.v.Everywhere,
						b = i || u,
						h = D.g in c ? c[D.g].toUpperCase() : b,
						g = [];
					n && g.push(r);
					const x = Object(q.b)(a, g, {
						listingKey: p
					});
					return Object.assign({
						countrySort: h,
						listingKey: p,
						sort: d,
						timeSort: m,
						focusedVerticalPositions: x
					}, s)
				}),
				ue = (e, t) => ({
					onLoadMorePosts: () => e(v.d({
						sort: t.match.params.sort
					}))
				}),
				be = Object(b.b)(pe, ue),
				he = Object(d.a)({
					resolved: {},
					chunkName: () => "Trending",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
					}
				}, {
					ssr: !1
				}),
				ge = e => u.a.createElement(he, ie({}, e, {
					fallback: u.a.createElement(T.a, {
						showCardView: !!e.showCardView
					})
				})),
				xe = Object(d.a)({
					resolved: {},
					chunkName: () => "CategoriesNavigation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CategoriesNavigation").then(s.bind(null, "./src/reddit/components/CategoriesNavigation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CategoriesNavigation/index.tsx"
					}
				});
			class ye extends u.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							isLoggedIn: e,
							sort: t
						} = this.props;
						y.a.read(() => {
							const s = "".concat(f.c.FrontPage, "-").concat(t);
							Object(f.d)(s, e)
						})
					}
				}
				render() {
					const {
						categoriesPlacementVariant: e,
						exploreV2Variant: t,
						focusedVerticalPositions: s,
						generalCleanupVariant: n,
						isInTrendingEntrypointExperiment: r,
						isLoggedIn: a,
						isPopular: o,
						isRpanDuVisible: i,
						isTopBannerClosed: c,
						layout: d,
						listingKey: l,
						m2mIsEnabled: m,
						railsWidgetsVariant: b,
						rpanInjectionIndex: h,
						sendEvent: x
					} = this.props, y = o && !a && r && !Object(Q.c)(b);
					let O;
					!m || o || c || (O = u.a.createElement(re.a, null));
					const f = Object(z.b)(n),
						v = {
							baseUrl: "",
							countrySort: this.props.countrySort,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						},
						T = {};
					if (d === A.g.Large && s.forEach((e, t) => {
							T[e] = Object(E.a)({
								numInstance: t,
								layout: d,
								listingKey: l,
								listingName: ne.c,
								listingPosition: e
							})
						}), i) {
						const {
							child: e,
							idx: t
						} = Object(L.a)({
							children: T,
							desiredIndex: h,
							layout: d,
							listingKey: l,
							listingName: te.R,
							sendEvent: x
						});
						T[t] = e
					}
					const B = Object(V.e)(e),
						D = !(B || !t && !e),
						R = u.a.createElement(S.default, {
							categoriesPlacementVariant: e,
							className: Object(g.a)(oe.a.sidebar, B ? oe.a.SidebarRight : void 0),
							listingKey: l,
							listingName: ne.c,
							railsWidgetsVariant: b
						}),
						K = o ? M.b.Popular : M.b.Home;
					return u.a.createElement(W.a, {
						className: Object(g.a)(oe.a.Container, this.props.className),
						fitPageToContent: !0,
						contentNavBar: u.a.createElement(u.a.Fragment, null, D && u.a.createElement(xe, {
							baseUrl: M.c[M.b.Explore],
							category: K
						}), !f && !e && u.a.createElement(k.a, v)),
						navBar: O,
						trendingUnit: y && u.a.createElement(ge, {
							className: Object(g.a)(oe.a.TrendingPosts, {
								[oe.a.large]: B
							}),
							showCardView: d === A.g.Large
						}),
						content: u.a.createElement(p.Fragment, null, y && u.a.createElement(I.a, {
							className: oe.a.duHeader
						}, u.a.createElement(U.c, null, "Popular posts")), u.a.createElement(C.a, null), a && u.a.createElement(w.a, null), f && u.a.createElement(N.a, v), u.a.createElement(_.a, null), u.a.createElement(P.a, {
							injectChildren: T,
							noPostsComponent: () => u.a.createElement(j.a, {
								listingName: ne.c,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: l,
							listingName: ne.c,
							listingViewed: (e, t) => Object(F.d)(l, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: B ? null : R,
						sidebars: B ? [u.a.createElement(H.a, {
							categoriesPlacementVariant: e,
							topicName: K
						}), R] : void 0
					})
				}
			}
			t.default = ce(be(Object(B.b)(ye)))
		},
		"./src/reddit/pages/Topic/SidebarLeft/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarLeft: "_233_Xjgw5BcQOaMinKdbeV",
				sidebarLeft: "_233_Xjgw5BcQOaMinKdbeV",
				CategoryPickerHeader: "_3wb2K4xdf2R_g-DEUa1oaU",
				categoryPickerHeader: "_3wb2K4xdf2R_g-DEUa1oaU",
				CategoryPickerCategoryListContainer: "cEGRaqN-nFBz75Exs3mFC",
				categoryPickerCategoryListContainer: "cEGRaqN-nFBz75Exs3mFC",
				CategoryPickerCategoryItem: "_3csoHvyEDysZxQBkz5xb-p",
				categoryPickerCategoryItem: "_3csoHvyEDysZxQBkz5xb-p",
				disabled: "_1lYRe_nCk_REorq1b9ojQt",
				CategoryPickerButton: "_1Lxchu4Z-MmoLwTVXgfq0u",
				categoryPickerButton: "_1Lxchu4Z-MmoLwTVXgfq0u",
				CategoryPicker: "F70adPsz7qHMzyu0BHqM7",
				categoryPicker: "F70adPsz7qHMzyu0BHqM7",
				blue: "_34lsySmODH-5wPAap1BXpU",
				HomeDisabledTooltip: "j25WWditX6-LZV2-SWbwS",
				homeDisabledTooltip: "j25WWditX6-LZV2-SWbwS",
				GeopopularItem: "_1NeiB9pl71zZHKKIMMRb8L",
				geopopularItem: "_1NeiB9pl71zZHKKIMMRb8L",
				GeopopularChangeButton: "_3jobcejIYo-V5X3YY05Vjm",
				geopopularChangeButton: "_3jobcejIYo-V5X3YY05Vjm"
			}
		},
		"./src/reddit/pages/Topic/SidebarLeft/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				d = s("./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx"),
				l = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx"),
				m = s("./src/reddit/components/CategoryPickerWidget/index.tsx"),
				p = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				u = s("./src/reddit/components/SidebarContainer/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/categories.tsx"),
				g = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/constants/listings.ts"),
				y = s("./src/reddit/constants/topic.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/helpers/trackers/navigation.ts"),
				E = s("./src/reddit/i18n/components.tsx"),
				j = s("./src/reddit/selectors/category.ts"),
				C = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				S = s("./src/reddit/selectors/monthsToMinutes.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				_ = s.n(w),
				k = s("./src/reddit/pages/Topic/SidebarLeft/index.m.less"),
				P = s.n(k);
			const L = 44,
				I = "home-left-category-tooltip",
				T = Object(o.a)(e => Object(j.t)(e, {
					categoriesOrder: g.X
				}), e => e.map(e => Object.assign({
					anchorProps: {
						rel: "nofollow"
					}
				}, e, {
					path: Object(y.a)(e.name)
				}))),
				B = Object(o.c)({
					categories: T,
					isEligibleCountry: C.d,
					isHomeLinkEnabled: S.m,
					isM2MEnabled: S.w,
					isNightmode: N.U
				}),
				M = Object(a.b)(B, e => ({
					visitPopulatedHome: () => e(Object(c.b)({}))
				})),
				D = (e, t) => Object(i.a)(P.a.CategoryPickerCategoryItem, _.a.categoryLink, {
					[_.a.active]: e,
					[P.a.disabled]: t
				});
			class A extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isTooltipOpen: !1
					}, this.trackCategoryClick = e => {
						this.props.sendEvent(Object(v.b)(Object(f.f)(e)))
					}, this.trackPopularClick = () => {
						this.props.sendEvent(Object(v.b)(x.b.Popular))
					}, this.trackGeopopularClicked = () => {
						this.props.sendEvent(Object(v.b)(h.c))
					}, this.trackEventClick = () => {
						this.eventCategory && this.props.sendEvent(Object(v.b)(this.eventCategory.name))
					}, this.trackOverflowClick = () => {
						this.props.sendEvent(Object(v.b)("overflow"))
					}, this.onHomeClick = e => {
						e.preventDefault(), this.props.isHomeLinkEnabled && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(v.b)(x.b.Home)))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}
				}
				render() {
					const {
						categories: e,
						categoriesPlacementVariant: t,
						isEligibleCountry: s,
						isM2MEnabled: n,
						isHomeLinkEnabled: a,
						isNightmode: o,
						topicName: c
					} = this.props, {
						isTooltipOpen: b
					} = this.state, g = Object(f.f)(c), y = g === x.b.Home, v = g === x.b.Popular, j = g === h.c, S = g === h.b;
					let N = e;
					if (this.eventCategory = Object(C.b)(), this.eventCategory) {
						const e = Object(f.f)(this.eventCategory.name);
						N = N.filter(t => e !== Object(f.f)(t.name))
					}
					let w = L;
					return this.eventCategory && (w += L), n && (w += L), s && (w += L), r.a.createElement("div", {
						className: P.a.SidebarLeft
					}, r.a.createElement(u.a, null, r.a.createElement(m.a, {
						buttonClassName: P.a.CategoryPickerButton,
						buttonText: "See",
						categories: N,
						categoryItemClassName: P.a.CategoryPickerCategoryItem,
						categoryItemHeight: L,
						categoryListContainerClassName: P.a.CategoryPickerCategoryListContainer,
						childrenOffset: w,
						className: Object(i.a)(P.a.CategoryPicker, {
							[P.a.blue]: Object(C.c)(t) && !o
						}),
						currentCategoryName: g,
						header: r.a.createElement(E.c, null, "Explore"),
						headerClassName: P.a.CategoryPickerHeader,
						initialNumberOfCategories: 12,
						onItemClick: this.trackCategoryClick,
						onMoreLessClick: this.trackOverflowClick
					}, n && r.a.createElement("li", {
						id: I,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip
					}, r.a.createElement(O.a, {
						className: D(y, !a),
						"data-active": y,
						disabled: !a,
						onMouseDown: this.onHomeClick,
						rel: "nofollow",
						to: x.c[x.b.Home]
					}, r.a.createElement(E.c, null, "Home"), !a && r.a.createElement(p.a, {
						className: P.a.HomeDisabledTooltip,
						isOpen: b,
						tooltipId: I
					}))), r.a.createElement("li", null, r.a.createElement(O.a, {
						className: D(v),
						"data-active": v,
						onMouseDown: this.trackPopularClick,
						rel: "nofollow",
						to: x.c[x.b.Popular]
					}, r.a.createElement(E.c, null, "Popular"))), this.eventCategory && r.a.createElement("li", null, r.a.createElement(d.a, {
						className: D(S),
						"data-active": S,
						eventCategory: this.eventCategory,
						onMouseDown: this.trackEventClick
					})), s && r.a.createElement("li", {
						className: P.a.GeopopularItem
					}, r.a.createElement(l.a, {
						changeButtonClassName: P.a.GeopopularChangeButton,
						className: D(j),
						"data-active": j,
						onMouseDown: this.trackGeopopularClicked
					})))))
				}
			}
			t.a = M(Object(b.b)(A))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				o = s("./src/reddit/selectors/user.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = Object(n.a)(a.a, a.b, o.N, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(i.n)(e, {
						subreddit: s
					})
				}, i.l, (e, t, s, n, r) => !(!e || r.isPermanentlyCanceled || s) && (t ? !!n && n.show_discovery_unit : !!r.global.viewer_enabled)),
				d = Object(n.a)(a.b, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(i.n)(e, {
						subreddit: s
					})
				}, i.m, (e, t, s, n) => {
					if (!e) {
						const e = "home" === t ? n.home_feed_discovery_unit_index : "popular" === t ? n.popular_feed_discovery_unit_index : r.h;
						return "number" == typeof e ? e : r.h
					}
					return s ? s.discovery_unit_index : r.h
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const p = e => e.publicAccessNetwork.listings,
				u = s.n(m)()(e => Object(r.a)(Object(n.a)(p, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "l", (function() {
				return j
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "k", (function() {
				return B
			})), s.d(t, "m", (function() {
				return M
			})), s.d(t, "j", (function() {
				return D
			})), s.d(t, "e", (function() {
				return A
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "i", (function() {
				return W
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "d", (function() {
				return V
			}));
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				O = e => e.publicAccessNetwork.hlsStreams,
				f = Object(n.a)(O, e => e.ended),
				v = Object(n.a)(O, e => e.removed),
				E = Object(n.a)(e => e.publicAccessNetwork.models, f, v, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = R(n, i.b.ENDED) ? i.b.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !0 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = R(n, i.b.ENDED) ? i.b.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !1 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				j = (e, t) => {
					return E(e)[Object(o.k)(t)]
				},
				C = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => u(t.listingName)(e, t), E, h, c.f, d.b, (e, t, s, n, r, c) => {
					if (c) {
						const a = [];
						if (e) {
							const t = Object(o.k)(e);
							s[t] && a.push(t)
						}
						const c = a.concat(t),
							d = [...new Set(c)],
							l = new Set([...n, ...r]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const d = new Set([...n, ...r]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== a.o).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				S = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return C(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				N = Object(n.a)(y, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return S(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				w = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return S(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === i.b.IS_LIVE);
					if (a) return a.post.id;
					const o = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				_ = Object(r.a)(Object(n.a)(w, E, (e, t) => e ? t[e] : void 0)),
				k = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.k)(s) : void 0
				}, w, h, c.f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return S(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				P = Object(n.a)(x, y, N, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(n.a)(x, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				I = Object(r.a)(Object(n.a)(k, E, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)(Object(n.a)(P, E, (e, t) => e ? t[e] : void 0)),
				B = Object(r.a)(Object(n.a)(L, E, (e, t) => e ? t[e] : void 0)),
				M = Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))),
				D = Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e]),
				A = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? j(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const s = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(n.a)(k, g, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const W = Object(n.a)(k, E, b.b, (e, t, s) => {
					if (s) return U.INTRO;
					const n = e && t[e];
					if (!n) return U.UNAVAILABLE;
					const r = n.stream.state;
					return r === i.b.IS_LIVE || r === i.b.DISCONNECTED ? U.LIVE : r === i.b.ENDED && n.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				H = Object(n.a)(I, W, b.b, l.c, l.p, (e, t, s, n, r) => s ? n : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				V = Object(n.a)(I, W, F, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(o, a.o, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=Frontpage.f70b1e077e7b4caddd72.js.map