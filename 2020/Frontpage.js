// https://www.redditstatic.com/desktop2x/Frontpage.27123a34457aa47bd7cd.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage", "FrontpageSidebar"], {
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var o = r.element,
								a = i(o),
								c = this._rootContainsTarget(o),
								d = r.entry,
								l = t && c && this._computeTargetAndRootIntersection(o, s),
								m = r.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: a,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var r, o, a, c, l, m, p, u, b = i(s), h = d(s), g = !1; !g;) {
								var x = null,
									y = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == y.display) return;
								if (h == this.root || h == t ? (g = !0, x = n) : h != t.body && h != t.documentElement && "visible" != y.overflow && (x = i(h)), x && (r = x, o = b, a = void 0, c = void 0, l = void 0, m = void 0, p = void 0, u = void 0, a = Math.max(r.top, o.top), c = Math.min(r.bottom, o.bottom), l = Math.max(r.left, o.left), m = Math.min(r.right, o.right), u = c - a, !(b = (p = m - l) >= 0 && u >= 0 && {
										top: a,
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
								var o = this.thresholds[r];
								if (o == s || o == n || o < s != o < n) return !0
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
					var s, n, r, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							s(), r = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, s, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function a(e, t, s, n) {
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
				o = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, o(t, 3), r)
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
				o = s("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
			const f = y.a.div("Container", x.a),
				O = y.a.div("LoadingHitbox", x.a),
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
					return t ? r.a.createElement(f, {
						"data-slot": t
					}, r.a.createElement(O, {
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
			t.a = Object(o.b)(() => Object(a.c)({
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
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				f = s.n(y),
				O = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = O.a.div("Container", f.a),
				C = O.a.div("PostMetaWrapper", f.a),
				P = O.a.wrapped(u.c, "PostTitle", f.a),
				j = O.a.div("FlatList", f.a),
				_ = O.a.div("FlatItem", f.a),
				S = O.a.span("FlatListDotSpacer", f.a),
				N = O.a.wrapped(E, "LinkContainer", f.a),
				k = O.a.div("Content", f.a),
				w = O.a.div("ThumbnailContainer", f.a),
				L = Object(i.c)({
					isCurrentUserProfilePost: g.h,
					language: x.P,
					post: g.I,
					shouldOpenPostInNewTab: x.T,
					subreddit: g.U
				}),
				I = Object(o.b)(L);
			t.a = I(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: n,
					post: o,
					subreddit: a,
					language: i
				} = e;
				if (!o) return null;
				const c = {
						post: o,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						language: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					d = t;
				return o && !o.media ? r.a.createElement(N, {
					className: d
				}, r.a.createElement(k, null, r.a.createElement(C, null, r.a.createElement(p.a, c)), T(o), o.source && r.a.createElement(b.a, {
					post: o
				}), B(e)), D(e)) : r.a.createElement(E, {
					className: d
				}, r.a.createElement(C, null, r.a.createElement(p.a, c)), T(o), A(e), B(e))
			});
			const T = e => r.a.createElement(P, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, v({}, n, {
						className: f.a.mediaContainer
					})))
				},
				B = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return r.a.createElement(j, null, r.a.createElement(_, null, Object(c.c)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), r.a.createElement(S, null), r.a.createElement(_, null, M(e)))
				},
				M = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = s;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(c.c)(t, "posts.comments.noun", o, {
						count: Object(l.b)(o)
					}))
				},
				D = e => r.a.createElement(w, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/LRUCache/index.ts");
			class a {
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
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !s.includes(e)), this.listenerMap[e].length - o === r
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
			const p = new o.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: n,
						listingPosition: o
					} = e, c = "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n);
					let d = p.get(c);
					if (d) return d;
					const u = new a;
					return d = {
						estHeight: i.c,
						id: "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n),
						trackOnEnteredViewport() {
							u.publish(i.b)
						},
						render: () => r.a.createElement(l, {
							listingPosition: o,
							numInstance: t,
							listingKey: n,
							listingName: m.b,
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(i.a.heroContainer, e.className)
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.header, e.headerClassName)
			}, e.header), r.a.createElement("div", {
				className: Object(o.a)(e.hidePadding ? i.a.bodyHidePadding : i.a.body, e.bodyClassName)
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
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
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
				f = x.a.div("SecondaryText", g.a),
				O = x.a.div("MainContentWrapper", g.a),
				v = x.a.div("MainContent", g.a),
				E = x.a.wrapped(b.a, "BackgroundPlaceholder", g.a),
				C = x.a.wrapped(u.h, "SubmitLink", g.a),
				P = x.a.img("SnooImg", g.a),
				j = x.a.div("EmptyHomepage", g.a),
				_ = e => {
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
				S = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = _(s);
					return a.a.createElement(v, null, a.a.createElement(y, null, (e => {
						switch (e) {
							case c.N.RISING:
								return Object(m.c)("Looks like nothing is rising fast enough in this subreddit");
							case c.N.TOP:
							case c.N.CONTROVERSIAL:
								return Object(m.c)("No posts were found using the ".concat(r()(e), " sort. Try changing the sort."));
							default:
								return Object(m.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(d.a)(t) && !!n && a.a.createElement(a.a.Fragment, null, a.a.createElement(f, null, _(s)), a.a.createElement(C, {
						to: "/r/".concat(t, "/submit")
					}, a.a.createElement(l.c, null, "Add a post"))))
				},
				N = () => a.a.createElement(v, null, a.a.createElement(P, {
					src: "".concat(i.a.assetPath, "/img/snoo_discovery@1x.png")
				}), a.a.createElement(y, null, a.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), a.a.createElement(C, {
					to: "/r/popular"
				}, a.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = x.a.wrapped(e => a.a.createElement(j, null, a.a.createElement(E, {
				isLoading: !1,
				layout: p.g.Classic
			}), a.a.createElement(O, null, e.subreddit ? a.a.createElement(S, e) : a.a.createElement(N, null))), "Component", g.a)
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
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
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
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				O = s("./src/reddit/icons/svgs/Snoo/index.tsx");
			var v = e => o.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("g", null, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("polygon", {
					points: "0,40 14.3,29.2 10.8,25.7"
				}), o.a.createElement("path", {
					d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
				})))),
				E = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				C = s("./src/reddit/layout/row/Inline/index.tsx"),
				P = s("./src/reddit/models/Live/index.ts");
			var j = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/FeaturedLiveEntrypoint/index.m.less"),
				S = s.n(_);
			const N = "".concat(n.a.redditUrl, "/live/"),
				k = c.a.a("Container", S.a),
				w = c.a.wrapped(h.a, "Circle", S.a),
				L = c.a.div("LiveLabel", S.a),
				I = c.a.div("ViewCount", S.a),
				T = c.a.div("Title", S.a),
				A = c.a.wrapped(f.a, "OutboundLink", S.a),
				B = c.a.div("Description", S.a),
				M = c.a.div("AnnouncementContainer", S.a),
				D = c.a.wrapped(T, "AnnouncementTitle", S.a),
				F = c.a.wrapped(B, "AnnouncementDescription", S.a),
				R = c.a.wrapped(m.g, "Button", S.a),
				U = c.a.wrapped(g.a, "CloseButton", S.a),
				W = Object(i.c)({
					featuredLiveThread: e => e.live.featured,
					language: j.P
				}),
				V = Object(a.b)(W);
			class H extends o.a.Component {
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
								[P.b.Announcement]: o.a.createElement(v, {
									className: S.a.iconStyles
								}),
								[P.b.Document]: o.a.createElement(E.a, {
									className: S.a.iconStyles
								}),
								[P.b.Snoo]: o.a.createElement(O.a, {
									className: S.a.iconStyles
								}),
								[P.b.Ama]: o.a.createElement(x.a, {
									className: S.a.iconStyles
								}),
								[P.b.Moderation]: o.a.createElement(y.a, {
									className: S.a.iconStyles
								})
							};
							return o.a.createElement(M, null, o.a.createElement(C.a, null, t[e.icon], o.a.createElement(D, null, e.title), o.a.createElement(U, {
								onClick: this.dismissModal
							})), o.a.createElement(F, null, e.description), o.a.createElement(R, {
								target: "_blank",
								href: e.announcementUrl,
								onClick: this.clickedButtonCta
							}, e.buttonCta))
						}
					}
					return o.a.createElement(k, {
						href: "".concat(N).concat(e.id)
					}, o.a.createElement(C.a, null, o.a.createElement(w, null), o.a.createElement(L, null, o.a.createElement(b.c, null, "live")), o.a.createElement(B, null, "·"), o.a.createElement(I, null, Object(d.c)(t, "live.viewers", e.viewerCount))), o.a.createElement(T, null, e.title, o.a.createElement(A, null)), o.a.createElement(B, null, e.description))
				}
			}
			t.a = V(Object(l.b)(H))
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
				f = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				O = s("./src/reddit/components/PremiumCTA/index.m.less"),
				v = s.n(O);
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
					}, r.a.createElement(f.a, {
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
			var C = Object(o.b)(void 0, e => ({
					onClickPremium: () => e(Object(b.b)("/premium"))
				}))(E),
				P = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeListingKey/index.ts"),
				_ = s("./src/reddit/actions/subreddit.ts"),
				S = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				N = s("./src/reddit/components/SidebarPostList/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/constants/listings.ts"),
				L = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				I = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				T = s("./src/reddit/selectors/categoriesPlacement.ts"),
				A = s("./src/reddit/selectors/discoveryUnit.ts"),
				B = s("./node_modules/lodash/uniq.js"),
				M = s.n(B),
				D = s("./src/lib/makeOnboardingSubredditsKey/index.ts"),
				F = s("./src/reddit/constants/categories.tsx"),
				R = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				U = s("./src/reddit/selectors/meta.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts");
			const H = Object(j.a)(w.b.Popular, P.N.TOP),
				K = Object(a.a)(e => Object(W.O)(e, {
					listingKey: H
				}), e => M()(e.map(e => e.belongsTo.id))),
				G = (Object(a.a)(e => {
					const t = K(e);
					return Object(V.Z)(e, {
						subredditIds: t
					})
				}, e => e.map(e => e.name)), e => {
					const t = {
							city: Object(U.a)(e),
							country: Object(U.b)(e),
							region: Object(U.i)(e)
						},
						s = Object(D.a)(t);
					return Object(V.q)(e, {
						key: s
					})
				}),
				q = Object(a.a)(G, F.d);
			var Q = s("./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less"),
				Y = s.n(Q);
			const z = 2,
				J = 5,
				Z = Object(a.c)({
					discoveryUnit: e => Object(A.c)(e, {
						unitName: I.g
					}),
					geoObject: T.a,
					posts: e => {
						const t = q(e),
							s = Object(j.a)(t, P.N.HOT);
						return Object(N.b)(e, {
							listingKey: s
						})
					},
					subredditName: q
				});
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.loadMorePosts = (e, t) => {
						t - e <= z && this.props.loadMorePosts(this.props.subredditName)
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
					const o = Object(j.a)(n, P.N.HOT);
					return r.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, r.a.createElement(S.a, {
						showIcon: !0
					}, r.a.createElement("span", {
						className: Y.a.GeoObject
					}, t), r.a.createElement(y.c, null, "trends")), r.a.createElement(N.a, {
						listingKey: o,
						listingName: w.b.Popular,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: J
					}))
				}
			}
			var $ = Object(o.b)(Z, e => ({
				loadMorePosts: t => e(Object(_.r)({
					sort: P.N.TOP,
					subredditName: t
				}))
			}))(Object(k.b)(X));
			const ee = Object(j.a)(w.b.Popular, P.N.TOP),
				te = 2,
				se = 5,
				ne = Object(a.c)({
					discoveryUnit: e => Object(A.c)(e, {
						unitName: I.j
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
					}, r.a.createElement(S.a, {
						showIcon: !0
					}, r.a.createElement(y.c, null, "Top popular for the month")), r.a.createElement(N.a, {
						listingKey: ee,
						listingName: w.b.Popular,
						moreButtonText: r.a.createElement(y.c, null, "Refresh"),
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: se
					}))
				}
			}
			var oe = Object(o.b)(ne, e => ({
					loadMorePosts: () => e(Object(_.r)({
						sort: P.N.TOP,
						subredditName: w.b.Popular
					}))
				}))(Object(k.b)(re)),
				ae = s("./src/lib/classNames/index.ts"),
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
				fe = Object(a.c)({
					subredditOrProfile: W.U
				});
			class Oe extends r.a.PureComponent {
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
					} = s, o = !!n && s.isWhitelisted && Object(le.a)(Object(ue.b)({
						post: n
					})), a = n && s.isWhitelisted && n.flair.filter(ye), i = s.subredditInfo && s.subredditInfo.displayText || t && (t.displayText || t.name), c = n ? n.title : "", d = n ? n.score : 0, l = n ? n.numComments : 0;
					return r.a.createElement("div", {
						className: Object(ae.a)(xe.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: xe.a.mainLine
					}, !!n && o && r.a.createElement("div", {
						className: xe.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(ue.a, {
						post: n
					})), r.a.createElement("div", {
						className: Object(ae.a)(xe.a.title, !o && xe.a.titleSingle),
						title: c
					}, n && a && a.length > 0 && r.a.createElement(pe.a, {
						className: xe.a.flair,
						titleFlair: a,
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
			var ve = Object(o.b)(fe, e => ({
					openLightbox: t => e(Object(de.a)(t.permalink))
				}))(Oe),
				Ee = s("./src/reddit/components/SidebarTrendingPostList/index.m.less"),
				Ce = s.n(Ee);
			const Pe = 5;
			class je extends r.a.Component {
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
							className: Ce.a.smallPost,
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
					const [n, ...o] = s.slice(0, Pe), a = n.post ? n.post.id : "";
					return r.a.createElement("div", {
						className: Object(ae.a)(Ce.a.container, e)
					}, r.a.createElement(ce.a, {
						onPostVisible: t,
						postId: a
					}, r.a.createElement(ie.a, {
						backgroundWrapperClassName: Ce.a.largePostBackgroundWrapper,
						descriptionClassName: Ce.a.largePostDescription,
						innerContainerClassName: Ce.a.largePostInnerContainer,
						onPostClick: this.openLargePost,
						postId: a,
						shouldOpenPost: !0,
						showSubredditMeta: !1,
						showSubredditName: !0,
						trendingPost: n.post,
						trendingSearch: n
					})), o.map(this.renderSmallPost))
				}
			}
			var _e = Object(o.b)(null, e => ({
					openPost: t => e(Object(de.a)(t.permalink))
				}))(je),
				Se = s("./src/reddit/selectors/trending.ts");
			const Ne = Object(a.c)({
				discoveryUnit: e => Object(A.c)(e, {
					unitName: I.o
				}),
				trendingSearches: Object(a.a)(Se.a, e => e.filter(e => e.post))
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
					}, r.a.createElement(S.a, {
						showIcon: !0
					}, r.a.createElement(y.c, null, "Trends")), r.a.createElement(_e, {
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						trendingSearches: t
					}))
				}
			}
			var we = Object(o.b)(Ne)(Object(k.b)(ke)),
				Le = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				Ie = s("./src/reddit/controls/InternalLink/index.tsx"),
				Te = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ae = s("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				Be = s.n(Ae);
			const Me = e => {
					let {
						to: t,
						title: s
					} = e;
					return r.a.createElement(Le.a, {
						subredditName: s,
						tooltipPosition: ["right", "top"]
					}, r.a.createElement(Ie.a, {
						className: Be.a.Link,
						to: t,
						title: s
					}, s))
				},
				De = e => {
					let {
						title: t,
						isOpened: s,
						isExpanded: n,
						children: o,
						onToggle: a,
						onExpand: i
					} = e;
					return r.a.createElement("div", {
						className: Object(ae.a)(Be.a.Section, {
							[Be.a.opened]: s,
							[Be.a.expanded]: n
						})
					}, r.a.createElement("div", {
						className: Be.a.SectionHeader,
						onClick: a
					}, r.a.createElement("div", {
						className: Be.a.SectionTitle
					}, t), r.a.createElement(Te.a, {
						className: Be.a.SectionChevron
					})), r.a.createElement("div", {
						className: Be.a.SectionBody
					}, r.a.createElement("div", {
						className: Be.a.SectionContent
					}, o), r.a.createElement("div", {
						className: Be.a.SectionFooter
					}, r.a.createElement(x.n, {
						className: Be.a.SectionButton,
						onClick: i
					}, r.a.createElement(y.c, null, n ? "Less" : "See more")))))
				};
			class Fe extends r.a.Component {
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
						return r.a.createElement(Me, {
							key: s,
							to: t,
							title: s
						})
					}, this.renderSection = (e, t) => r.a.createElement(De, {
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
						className: Object(ae.a)(Be.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var Re = Fe,
				Ue = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				We = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ve = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				He = s("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				Ke = s("./src/reddit/actions/post.ts"),
				Ge = s("./src/app/strings/index.ts"),
				qe = s("./src/lib/timeAgo/index.ts"),
				Qe = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				Ye = s("./src/reddit/selectors/user.ts"),
				ze = s("./src/reddit/components/MiniPost/index.m.less"),
				Je = s.n(ze);
			const Ze = Object(a.a)(e => e, W.I, W.c, Ye.P, (e, t, s, n) => {
				return {
					crosspost: s,
					language: n,
					post: t,
					subredditOrProfile: Object(V.M)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class Xe extends r.a.PureComponent {
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
						className: Object(ae.a)(Je.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: Je.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(ue.a, {
						post: t
					})), r.a.createElement("div", {
						className: Je.a.postDetails
					}, r.a.createElement("p", {
						className: Je.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && r.a.createElement(Qe.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), r.a.createElement("div", null, r.a.createElement("span", {
						className: Je.a.meta
					}, Object(Ge.c)(this.props.language, "posts.points.noun", t.score, {
						count: Object(me.b)(t.score)
					})), r.a.createElement("span", {
						className: Je.a.meta
					}, Object(Ge.c)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(me.b)(t.numComments)
					})), r.a.createElement("span", {
						className: Je.a.meta
					}, Object(qe.d)(this.props.language, t.created / 1e3, !0, !0)))))
				}
			}
			var $e = Object(o.b)(Ze, (e, t) => ({
					openLightbox: t => e(Object(de.a)(t.permalink))
				}))(Xe),
				et = s("./src/reddit/components/Widgets/Base/index.tsx");
			class tt extends r.a.Component {
				render() {
					return r.a.createElement("div", null, r.a.createElement(et.a, null, this.props.headerText), this.props.posts.map(e => r.a.createElement($e, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var st = tt,
				nt = s("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				rt = s.n(nt),
				ot = s("./src/lib/lessComponent.tsx");
			const at = Object(o.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink)),
					clearLinks: () => e(Object(Ke.p)())
				})),
				it = ot.a.button("ClearButton", rt.a);
			class ct extends r.a.Component {
				render() {
					return r.a.createElement(et.b, null, r.a.createElement(st, {
						className: this.props.className,
						headerText: Object(d.c)("Recent posts"),
						language: this.props.language,
						posts: this.props.posts
					}), r.a.createElement(it, {
						onClick: this.props.clearLinks
					}, Object(d.c)("Clear")))
				}
			}
			var dt = at(ct);
			const lt = Object(a.c)({
				language: Ye.P,
				recentPosts: W.R
			});
			var mt = Object(o.b)(lt, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: s,
						language: n
					} = e;
					return s && s.length ? r.a.createElement(h.a, null, r.a.createElement(dt, {
						className: t,
						language: n,
						headerText: Object(d.c)("Recent posts"),
						posts: s
					})) : null
				}),
				pt = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			const ut = Object(o.b)(Object(a.c)({
				communities: V.g
			}));

			function bt() {
				return (bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ht = 5;
			class gt extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.showNextChunk = () => {
						this.setState((e, t) => {
							const s = Math.ceil(t.communities.length / ht);
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
						railsWidgetsVariant: o,
						sendEvent: a,
						title: i
					} = this.props, {
						chunkIdx: c
					} = this.state, l = {
						className: e,
						sendEvent: a,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						title: i
					};
					if (o) {
						const e = t.slice(c * ht, (c + 1) * ht);
						return r.a.createElement(pt.b, bt({}, l, {
							bottomButtonText: t.length > ht ? Object(d.c)("See More") : "",
							communities: e,
							onBottomButtonClick: this.showNextChunk,
							railsWidgetsVariant: o
						}))
					}
					return r.a.createElement(pt.b, bt({}, l, {
						communities: t
					}))
				}
			}
			var xt = ut(Object(k.b)(gt)),
				yt = s("./src/reddit/featureFlags/index.ts"),
				ft = s("./src/reddit/constants/subredditLeaderboard.ts"),
				Ot = s("./src/reddit/constants/tracking.ts"),
				vt = s("./src/reddit/selectors/telemetry.ts"),
				Et = s("./src/reddit/selectors/widgets.ts"),
				Ct = s("./src/telemetry/models/Subreddit.ts");
			const Pt = e => t => s => Object.assign({}, vt.defaults(s), Object(Et.b)(s, e), {
					source: "trending_community_card",
					action: Ot.c.CLICK,
					noun: Object(Ct.getSubscribeEventNoun)(e.type, t)
				}),
				jt = e => t => Object.assign({}, vt.defaults(t), Object(Et.b)(t, e), {
					source: "trending_community_card",
					action: Ot.c.CLICK,
					noun: "community"
				});
			var _t = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				St = s("./src/reddit/selectors/seo/linksModule.ts"),
				Nt = s("./src/reddit/helpers/createBannerProperties/index.ts");
			const kt = Object(a.c)({
					isMod: Ye.H,
					isLoggedIn: e => e.user.temporaryGQL.isLoggedIn,
					isUpAndComingExperiment: _t.b,
					trendingSubredditIds: V.ab,
					currentUser: Ye.i,
					frontpageLinks: St.b,
					showLayersSidebar: yt.d.layersEmbedQuickLink
				}),
				wt = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				Lt = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				It = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold));
			class Tt extends r.a.Component {
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
						isLoggedIn: o,
						isUpAndComingExperiment: a,
						listingName: c,
						railsWidgetsVariant: l,
						trendingSubredditIds: m,
						showLayersSidebar: p
					} = this.props;
					return r.a.createElement(We.a, {
						className: s
					}, r.a.createElement(He.a, {
						categories: ft.i,
						category: a ? ft.k : ft.j,
						first: 5,
						shouldDisplayDelta: this.props.isMod,
						to: a ? "".concat(ft.e).concat(ft.m) : ft.e
					}), p && r.a.createElement(h.a, null, r.a.createElement(u, null)), r.a.createElement(Ue.a, {
						placement: P.c.ABOVE_THE_FOLD,
						listingName: c,
						position: Nt.a.FIRST,
						sizes: P.h,
						placementIndex: e++
					}), Object(R.a)(l) && r.a.createElement(h.a, null, r.a.createElement($, null)), Object(R.b)(l) && r.a.createElement(h.a, null, r.a.createElement(oe, null)), Object(R.c)(l) && r.a.createElement(h.a, null, r.a.createElement(we, null)), !l && It(this.props) && r.a.createElement(C, null), wt(this.props) && r.a.createElement(h.a, null, r.a.createElement(xt, {
						getClickEventFactory: jt,
						getSubscribeEventFactoryHandler: Pt,
						railsWidgetsVariant: l,
						subredditIds: m,
						title: Object(d.c)("Trending Communities")
					})), o && r.a.createElement(h.a, null, r.a.createElement(i.a, {
						listingName: c
					})), Lt(this.props) && r.a.createElement(mt, null), n && r.a.createElement(h.a, null, r.a.createElement(Re, {
						links: n
					})), r.a.createElement(Ve.a, {
						adComponent: r.a.createElement(Ue.a, {
							placement: P.c.BELOW_THE_FOLD,
							listingName: c,
							position: Nt.a.BOTTOM,
							sizes: P.m,
							placementIndex: e++
						}),
						categoriesPlacementVariant: t,
						railsWidgetsVariant: l
					}))
				}
			}
			t.default = Object(o.b)(kt)(Tt)
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				v = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = s.n(P);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				k = Object(i.a)(g.a),
				w = {
					[u.d.Card]: v.a,
					[u.d.Classic]: f.a,
					[u.d.Compact]: O.a
				},
				L = {
					[u.d.Card]: Object(y.c)("card"),
					[u.d.Classic]: Object(y.c)("classic"),
					[u.d.Compact]: Object(y.c)("compact")
				},
				I = Object(b.t)(),
				T = Object(a.c)({
					dropdownIsOpen: Object(C.b)(N),
					postLayout: b.L,
					redditStyle: b.A
				}),
				A = Object(o.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: N
					}))
				}));
			class B extends r.a.Component {
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
							screen: Object(E.screen)(t),
							subreddit: Object(E.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: o
						} = this.props, a = s || u.e[o], i = e === a, d = w[e];
						return r.a.createElement(x.b, _({}, t, {
							className: Object(c.a)(j.a.LayoutItem, {
								[j.a.selected]: i
							}),
							"data-layout": e,
							displayText: L[e],
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: j.a.LayoutIcon,
							onClick: i ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(k, _({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: N
						}), this.renderItem(u.d.Card), this.renderItem(u.d.Classic), this.renderItem(u.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, o = t || u.e[n];
					return r.a.createElement("div", {
						className: Object(c.a)(j.a.Container, e),
						id: S
					}, r.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: N,
						showDropdownTriangle: !0
					}), r.a.createElement(h.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = I(A(Object(p.b)(Object(d.a)(B))))
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
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/CountrySort/index.tsx"),
				x = s("./src/reddit/components/ListingSort/index.tsx"),
				y = s("./src/reddit/components/TimeSort/index.tsx"),
				f = s("./src/reddit/constants/listings.ts"),
				O = s("./src/reddit/constants/listingSorts.ts"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/trackers/navigation.ts"),
				P = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				j = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				S = s.n(_);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = new Set([h.N.CONTROVERSIAL, h.N.TOP]),
				w = new Set([h.N.CONTROVERSIAL, h.N.RISING]),
				L = "ListingSort--Overflow",
				I = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				T = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.i, (e, t, s) => {
					if (e) return e;
					const n = [h.N.HOT, h.N.NEW, h.N.TOP, h.N.RISING];
					return t && s && n.unshift(h.N.BEST), n
				}),
				A = Object(u.c)({
					isPopularPage: l.C,
					sortOptions: T
				});
			class B extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.c)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(E.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: o
						} = this.props, i = n && !!s && e === h.N.HOT && o === h.N.HOT;
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(v.a, {
							className: Object(a.a)(S.a.SortLink, e === o && S.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, r.a.createElement(x.a, {
							className: S.a.SortIcon,
							sort: e
						}), r.a.createElement("div", {
							className: S.a.SortLabel
						}, O.a[e])), i && r.a.createElement(g.a, {
							baseUrl: f.c[f.b.Popular],
							buttonClassName: S.a.DropdownButton,
							className: S.a.CountrySort,
							disabled: t,
							dropdownClassName: S.a.Dropdown,
							rowClassName: S.a.DropdownRow,
							rowSelectedClassName: S.a.DropdownRowSelected,
							wrapperClassName: S.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: S.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && k.has(n), d = w.has(n), l = o.filter(e => !w.has(e)), m = o.filter(e => w.has(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.d, N({}, this.props, {
						buttonClassName: S.a.DropdownButton,
						className: Object(a.a)(S.a.SortDropdown, e),
						rowClassName: S.a.DropdownRow,
						rowIconClassName: S.a.DropdownRowIcon,
						rowSelectedClassName: S.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(S.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(y.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: S.a.DropdownButton,
						className: S.a.TimeSort,
						dropdownClassName: S.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: S.a.DropdownRow,
						rowSelectedClassName: S.a.DropdownRowSelected,
						timeSort: i || h.Qb,
						wrapperClassName: S.a.DropdownSortWrapper
					}), m.length > 0 && r.a.createElement(x.d, N({}, this.props, {
						className: Object(a.a)(S.a.SortOverflow, e),
						dropdownClassName: S.a.Dropdown,
						dropdownId: L,
						rowClassName: S.a.DropdownRow,
						rowIconClassName: S.a.DropdownRowIcon,
						rowSelectedClassName: S.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: S.a.SortOverflowButton,
						id: L
					}, r.a.createElement(P.a, null))))
				}
			}
			var M = I(Object(o.b)(A)(Object(d.b)(B))),
				D = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				F = s.n(D);
			const R = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				U = Object(o.b)(null, (e, t) => {
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
			class W extends r.a.Component {
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
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(F.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(M, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(p.a, {
						className: F.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = R(U(Object(d.b)(W)))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("IdCard~SubredditWiki"), s.e("IdCard")]).then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
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
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-InFeedPostCreation").then(s.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/LayerPromotionWidget/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_18FHrNt95IT6Hc8F5tj_21"
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
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
				o = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
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
					className: Object(a.a)(u.a.container, t)
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
						"aria-label": Object(o.a)(e, "posts.crosspostedByFrom", {
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/postFlair.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/CommentsLink/index.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				A = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				B = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/ShareMenu/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./src/reddit/constants/postLayout.ts"),
				R = s("./src/reddit/helpers/trackers/post.ts"),
				U = s("./src/reddit/i18n/components.tsx"),
				W = s("./src/reddit/icons/fonts/Share/index.tsx"),
				V = s("./src/reddit/models/User/index.ts"),
				H = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				K = s.n(H),
				G = s("./src/lib/lessComponent.tsx");
			const q = "-MiniCardModMenu",
				Q = "-MiniCardOverflowMenu",
				Y = "-MiniCardShareMenu",
				z = G.a.wrapped(L.a, "HorizontalVotes", K.a),
				J = G.a.button("ShareButton", K.a),
				Z = Object(f.t)({
					currentProfileName: f.h,
					isCommentPermalink: f.v,
					isCommentsPage: f.w,
					isProfilePostListing: f.H,
					pageLayer: e => e
				}),
				X = Object(a.c)({
					layout: f.L,
					subreddit: f.q
				});
			var $ = Z(Object(o.b)(X, {})(Object(D.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: o,
						hasModFlairPerms: a,
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
						sendEvent: f,
						showEditFlair: O,
						showEditPost: v,
						subreddit: E
					} = e, C = e => f(Object(R.f)(y.id, e)), P = y.postId, j = Object(I.d)(q, y.id, m, u), _ = !!n && Object(V.f)(n) === y.author;
					return r.a.createElement("div", {
						className: Object(i.a)(K.a.flatlistContainer, s)
					}, r.a.createElement(z, {
						compact: !1,
						model: y,
						onVoteClick: o,
						scoreClassName: K.a.score
					}), r.a.createElement(w.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: g,
						numComments: y.numComments,
						type: F.g.Compact,
						onClick: x
					}), r.a.createElement(M.a, {
						className: K.a.shareMenu,
						dropdownId: Object(I.d)(Y, y.id, m, u),
						permalink: y.permalink,
						post: y,
						sendEventWithName: C,
						subreddit: E
					}, r.a.createElement(J, null, r.a.createElement(W.a, {
						className: K.a.shareIcon
					}), r.a.createElement("span", {
						className: K.a.shareText
					}, r.a.createElement(U.c, null, "share")))), c && r.a.createElement(T.a, {
						dropdownId: j,
						onClick: () => C("post_mod_action_menu")
					}, r.a.createElement(I.b, {
						className: K.a.modActionsIcon
					}), r.a.createElement(A.a, {
						canEditFlair: a && !!O,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: _,
						language: b,
						modModeEnabled: g,
						post: y,
						tooltipId: j
					})), r.a.createElement(B.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: P,
						dropdownId: Object(I.d)(Q, y.id, m, u),
						isFixed: u,
						sendEvent: f,
						showEditPost: !!v,
						showEditFlair: !!O,
						useFlatlistBreakpoints: Object(B.h)({
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
				oe = s.n(re);
			s.d(t, "a", (function() {
				return ie
			}));
			const ae = Object(f.t)(),
				ie = Object(o.b)(() => Object(a.c)({
					activeModalId: j.a,
					autoplayPref: k.b,
					crosspostRoot: N.c,
					crosspostSubredditOrProfile: N.d,
					currentUser: k.i,
					flairStyleTemplate: f.P,
					hideNSFWPref: k.y,
					isActive: N.g,
					language: k.P,
					moderatorPermissions: _.i,
					modModeEnabled: f.N,
					post: N.I,
					showEditFlair: S.a,
					subredditOrProfile: N.U,
					userIsOp: k.fb
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
							const n = t === P.a.upvoted ? Object(l.Q)(s) : Object(l.r)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.O)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
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
			t.b = ae(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: o,
					crosspostSubredditOrProfile: a,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: f,
					language: P,
					moderatorPermissions: j,
					modModeEnabled: _,
					onClickPost: S,
					post: N,
					scrollerItemRef: k,
					shouldPause: w,
					showMetaLine: L = !0,
					showEditFlair: I,
					subredditOrProfile: T,
					userIsOp: A
				} = e, {
					media: B
				} = o || N, M = B && B.type, D = Object(x.b)(N.id), F = M === C.n.RTJSON, R = A && F, U = Object(v.a)(j), W = Object(O.a)(j), V = B && M !== C.n.RTJSON && M !== C.n.TEXT, H = !B && !!N.source && Object(d.a)(N.source.url), K = B && r.a.createElement(b.a, {
					autoplayPref: t,
					availableWidth: s,
					className: oe.a.media,
					imageBoxClassName: oe.a.mediaImageBox,
					imageBoxContentImageClassName: oe.a.mediaImageBoxContentImage,
					forceAspectRatio: C.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: o || N,
					scrollerItemRef: k,
					shouldPause: w,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return r.a.createElement(g.a, {
					className: Object(i.a)(oe.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(E.a)(e), n),
					style: Object.assign({}, Object(E.b)(e.flairStyleTemplate), Object(E.d)(e)),
					post: N,
					onClick: S,
					eventFactory: l
				}, r.a.createElement(h.a, {
					className: oe.a.backgroundWrapper,
					flairStyleTemplate: m
				}, V && K, r.a.createElement("div", {
					className: oe.a.innerContainer
				}, H && r.a.createElement(te.a, {
					post: N,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), r.a.createElement(y.c, {
					className: oe.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: N,
					size: y.b.Large,
					titleColor: m && m.postTitleColor
				}), L && T && r.a.createElement(ee.a, {
					className: oe.a.metaLine,
					crosspostSubredditOrProfile: a,
					hideNSFWPref: f,
					language: P,
					post: N,
					subredditOrProfile: T
				}), !V && r.a.createElement("div", {
					className: oe.a.mediaWrapper
				}, K), r.a.createElement("div", {
					className: oe.a.flexSpacer
				}), r.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: W,
					hasModPostPerms: U,
					language: P,
					modModeEnabled: _,
					post: N,
					showEditFlair: I,
					showEditPost: R
				}))), e.activeModalId === D && r.a.createElement(x.a, {
					flairs: N.flair,
					subredditId: N.belongsTo.id,
					modalId: D,
					onFlairChanged: e.onFlairChanged
				}), r.a.createElement(u.d, {
					postId: N.id
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
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
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
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Q
			})), s.d(t, "a", (function() {
				return z
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
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
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				v = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				P = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/getClickInfo.ts"),
				S = s("./src/reddit/helpers/pixels.ts"),
				N = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				k = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/helpers/brandSafety/index.ts"),
				I = s("./src/lib/LRUCache/index.ts"),
				T = s("./src/telemetry/index.ts"),
				A = s("./src/telemetry/models/Timer.ts"),
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
			const F = 500,
				R = new I.a(F),
				U = new I.a(F),
				W = new I.a(F),
				V = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				H = h.a.div("SeeMore", M.a),
				K = h.a.wrapped(k.a, "ArrowRight", M.a),
				G = (e, t, s, n, r, o, a, i) => {
					const c = s ? "last-".concat(n, "-").concat(r) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(o);
					let l = R.get(d);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, r), a.trackOnPostEnteredViewport(e, t, i)
					}, R.set(d, l)), l
				},
				q = (e, t, s, n) => {
					const r = "left-".concat(e, "-").concat(t);
					let o = U.get(r);
					return void 0 === o && (o = r => {
						s.trackOnPostExitedViewport(e, t, r, n)
					}, U.set(r, o)), o
				},
				Q = (e, t) => {
					const s = "click-".concat(e);
					let n = W.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(S.a)(s.events, E.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(_.a)(e)
						})
					}, W.set(s, n)), n
				},
				Y = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class z extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new I.a(F), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = o()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, r = t(), o = [];
						r.forEach(e => o.push(e.id));
						const a = o.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(L.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && T.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = T.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = T.c.end(this.timerId);
						setTimeout(() => Object(T.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && T.c.cancel(this.timerId), e.postIds.length && (this.timerId = T.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && T.c.has(this.timerId)) {
						const e = T.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(T.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && T.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return T.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = T.c.end(e);
					setTimeout(() => {
						s(t(n, A.TimerType.InApp))
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
						o = D(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(o);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== o[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, o) => {
							const a = 0 === o;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
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
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: b,
						postClickEvent: h,
						redditStyle: g
					} = this.props, y = 0 === t, f = s ? "last-index" : "", O = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(f, "-").concat(m, "-").concat(l, "-").concat(b);
					let v;
					if (void 0 === (v = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: f,
							postsById: E
						} = this.props, C = E[e], j = C.crosspostRootId && E[C.crosspostRootId] ? E[C.crosspostRootId] : C;
						C.crosspostRootId && !E[C.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(C.id, " is crosspost of ").concat(C.crosspostRootId, ", but ") + "".concat(C.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const _ = this.props.postComponentForLayout({
								isCrosspost: !!C.crosspostRootId,
								isFirstPost: y,
								layout: n,
								post: j
							}),
							S = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							k = G(e, n, s, l, m, b, this.props, t),
							L = q(e, n, this.props, t),
							I = Q(e, this.props),
							T = j.media && j.media.type === w.n.EMBED ? j.media.provider : null;
						v = {
							estHeight: Object(N.c)(C, n),
							id: e,
							isFocusable: !(!j.media || n !== P.g.Large) && (w.d.has(j.media.type) && (!T || !w.q.has(T)) && !j.isSpoiler && !j.isNSFW),
							trackOnEnteredViewport: k,
							trackOnExitedViewport: L,
							render: t => {
								let {
									className: n,
									height: u,
									width: b,
									remeasure: x,
									setScrollerChildRef: O,
									shouldLoadInitially: v
								} = t;
								return d.a.createElement(_, {
									className: n,
									currentProfileName: r,
									key: S,
									availableWidth: b,
									eventFactory: h,
									first: y,
									forceLoadMedia: v,
									inSubredditOrProfile: f,
									isCommentPermalink: o,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: I,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: O
								})
							}
						}, this.scrollChildCache.set(O, v)
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
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const a = o;
					return d.a.createElement("div", {
						className: M.a.placeholder
					}, d.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(f.a, {
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
						onLoadMore: o
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: M.a.placeholder
					}, d.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: V[n]
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: a,
						location: i,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let g = b.map((e, t, s) => {
						const n = t === b.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					r && (g = Y(g, r));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						y = i ? Object(n.e)(i) : null,
						f = y || o;
					return d.a.createElement(c.Fragment, null, d.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: f ? M.a.truncatedPostList : Object(p.a)(M.a.postList, this.props.className),
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
						viewportTopPadding: C.f
					}, g), y && d.a.createElement(H, {
						className: M.a.seeMoreButton
					}, d.a.createElement(j.a, {
						className: M.a.seeMorePostsText,
						to: Object(m.a)(y, {
							type: u.Kb.Posts
						})
					}, d.a.createElement(v.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(K, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			z.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : r.a.createElement(a.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(y);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: y,
					isOverlay: O,
					language: v,
					post: E,
					shouldShowSubscribeButton: C,
					subredditOrProfile: P,
					tooltipType: j
				} = e;
				return r.a.createElement("div", {
					className: f.a.metaContainer
				}, !n && !E.isSponsored && P && r.a.createElement(i.a, {
					postId: E.id,
					subredditName: P.name
				}, r.a.createElement(p.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: P.url
				}, P.displayText)), P && P.isQuarantined && r.a.createElement(m.a, null), !n && !E.isSponsored && P && C && !y && r.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(x.e)(P) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: E.id,
					small: !0
				}), !n && !E.isSponsored && r.a.createElement(h.b, null), !n && !E.isSponsored && r.a.createElement(c.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), r.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					language: v,
					post: E,
					tooltipType: j
				}), r.a.createElement(d.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!n,
					language: v,
					post: E,
					tooltipType: j
				}), P && r.a.createElement(a.a, {
					className: f.a.donationAmount,
					contentId: E.id,
					subredditId: P.id
				}), r.a.createElement(o.a, {
					hideCta: s,
					isOverlay: O,
					thing: E,
					tooltipType: j
				}))
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
				o = s("./src/lib/LRUCache/index.ts"),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx");
			const c = Object(a.a)({
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
			const u = new o.a(20),
				b = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = u.get(t);
					if (s) return s;
					const n = h(e.desiredIndex, e.children),
						o = {
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
					return u.set(t, o), o
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
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
						className: Object(o.a)(t, b.a.container, b.a.placeholder, b.a.large, p.a.largeAndMediumPostStyles)
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
					}, g(a.j))))
				},
				g = e => Array.from({
					length: e
				}).map((e, t) => r.a.createElement("div", {
					className: Object(o.a)(b.a.thumbnailContainer, b.a.placeholder),
					key: "rpan-thumb-placeholder-".concat(t)
				}, r.a.createElement("div", {
					className: Object(o.a)(b.a.thumbnail, b.a.placeholder)
				})));
			t.a = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === l.g.Classic ? r.a.createElement(i.b, {
					className: Object(o.a)(t, b.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === l.g.Compact ? r.a.createElement(c.a, {
					className: Object(o.a)(t, b.a.compactPostPlaceholder),
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
				o = s.n(r);
			t.a = n.a.div("header", o.a)
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
				o = s.n(r),
				a = s("./src/lib/addQueryParams/index.ts"),
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
				f = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/components/MiniCardPost/index.m.less"),
				P = s.n(C),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				_ = s.n(j);
			const S = e => e.type === O.f.Spoiler,
				N = Object(h.t)();
			t.a = N(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: r,
					onPostClick: c,
					trendingPost: p,
					trendingSearch: h,
					shouldOpenPost: O,
					showSubredditMeta: C = !0,
					showSubredditName: j,
					subredditOrProfile: N
				} = e, k = p && p.preview && p.preview.url || void 0, w = p && p.isSponsored ? "promoted_trend" : "trending", L = p && Object(d.a)(p.permalink) || "", I = O && L || h && Object(a.a)("/search", {
					q: h.rawQuery,
					source: w
				}) || L, T = h ? h.subredditInfo && h.subredditInfo.icon : N && N.icon.url, A = h ? h.subredditInfo && h.subredditInfo.displayText : N && (N.displayText || N.name), B = p ? p.flair.filter(S) : [], M = p ? p.score : 0, D = p ? p.numComments : 0, F = p && p.isSponsored, R = Object(E.a)(e).body, U = "linear-gradient(\n      ".concat(Object(n.j)(R, .2), ",\n      ").concat(Object(n.j)(R, .3), ",\n      ").concat(Object(n.j)(R, .4), ",\n      ").concat(Object(n.j)(R, .6), ",\n      ").concat(Object(n.j)(R, .8), ",\n      ").concat(R, "\n    )"), W = o.a.createElement("div", {
					className: Object(i.a)(_.a.trendingPost, {
						[_.a["m-background"]]: !!k
					})
				}, o.a.createElement(g.a, {
					to: I
				}, o.a.createElement("div", {
					className: Object(i.a)(_.a.backgroundWrapper, P.a.backgroundWrapper, t),
					style: {
						background: Object(v.g)(Object(E.a)(e).body, k || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
					}
				}, F && o.a.createElement("div", {
					className: _.a.promoted
				}, o.a.createElement(f.c, null, "promoted")), o.a.createElement("div", {
					className: Object(i.a)(_.a.innerContainer, P.a.innerContainer, r),
					onClick: c,
					title: p ? p.title : ""
				}, o.a.createElement("h2", {
					className: p ? _.a.title : _.a.titleNoDescription
				}, e.title), p ? o.a.createElement("div", {
					className: Object(i.a)(_.a.description, s)
				}, B.length > 0 && o.a.createElement(m.a, {
					className: _.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: p,
					showCategoryTag: !1
				}), p.title) : o.a.createElement("div", {
					className: _.a.spacer
				}), C && T && A && o.a.createElement(x.a, {
					className: _.a.relatedSubredditMetaData,
					iconClassName: _.a.subredditIcon,
					iconUrl: T || void 0,
					suffix: o.a.createElement(u.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: A
						}
					})
				}), !C && p && o.a.createElement("div", {
					className: _.a.metaLine
				}, j && A && o.a.createElement("span", {
					className: _.a.meta
				}, Object(y.b)(A)), o.a.createElement("span", {
					className: _.a.meta
				}, o.a.createElement(f.c, null, "".concat(Object(l.b)(M), " "), o.a.createElement(f.a, {
					count: M,
					name: "score",
					plural: "points",
					singular: "point"
				}))), o.a.createElement("span", {
					className: _.a.meta
				}, o.a.createElement(f.c, null, "".concat(Object(l.b)(D), " "), o.a.createElement(f.a, {
					count: D,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return F ? o.a.createElement(b.a, {
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					className: t,
					layoutBodyClassName: s,
					showCardView: n
				} = e, i = {
					[c.a["m-card"]]: n
				};
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, i, t)
				}, r.a.createElement(a.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, i, s),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, i)
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const p = r.a.createElement(a.a, {
					className: m.a.duHeader
				}, r.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				u = Object(d.a)({
					isLoading: !0
				});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				header: p,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView,
				children: Array.from({
					length: e.numberOfItems || 6
				}).map(e => r.a.createElement("div", {
					className: m.a.post,
					key: "placeholder-post-".concat(e)
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.one, u)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.two, u)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.icon, u)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.name, u)
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
				f = s("./src/lib/constants/index.ts"),
				O = s("./src/reddit/components/PostMedia/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				P = s("./src/lib/getShortenedLink.ts"),
				j = s("./src/lib/opener/index.ts"),
				_ = s("./src/reddit/actions/ads/index.ts"),
				S = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/InsideOverlay.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				L = s("./src/reddit/helpers/adCount/index.ts"),
				I = s("./src/reddit/helpers/pixels.ts"),
				T = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				A = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				B = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				M = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				D = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				F = s("./src/reddit/models/Theme/index.ts"),
				R = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = s("./src/reddit/models/Media/index.ts"),
				W = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				V = s.n(W);
			const H = b.a.wrapped(e => r.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", V.a);
			class K extends r.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(U.F)(e.media) || Object(U.C)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case f.eb.IMAGE:
							return r.a.createElement(H, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var G = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				q = s.n(G);
			const Q = b.a.wrapped(E.d, "PostTopMeta", q.a),
				Y = b.a.div("BannerAdContainer", q.a),
				z = e => {
					let {
						children: t
					} = e;
					return r.a.createElement("div", null, t)
				},
				J = b.a.div("PromotedPostContainer", q.a),
				Z = b.a.wrapped(M.a, "OutboundLinkIcon", q.a),
				X = b.a.div("SourceLinkWrapper", q.a),
				$ = b.a.div("TopLine", q.a),
				ee = b.a.wrapped(v.c, "PostTitle", q.a),
				te = b.a.div("PostMediaWrapper", q.a),
				se = b.a.div("BackgroundWrapper", q.a),
				ne = b.a.wrapped(S.a, "PostContainer", q.a),
				re = 640,
				oe = (e, t) => {
					Object(I.a)(t.events, N.a.Click, t), t.source ? t.source.outboundUrl ? Object(j.d)(t.source.outboundUrl, j.c.BLANK) : Object(j.d)(t.source.url, j.c.BLANK) : Object(j.d)(t.permalink, j.c.BLANK)
				},
				ae = e => Object(B.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(A.a)(Object(T.a)(e), D.a.actionIcon, D.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(F.g)(Object(R.a)(e).body, null, null) || ""
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
					let o, a, c = {};
					return e.isBlank ? (o = z, a = null) : e.isMediaOnly ? (o = Y, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = r.a.createElement(K, {
						post: e
					})) : (o = J, a = r.a.createElement(se, {
						style: ce(this.props)
					}, r.a.createElement($, null, r.a.createElement(Q, {
						tooltipType: n ? E.c.Lightbox : void 0,
						language: f.y,
						post: e,
						showTimestamp: !1
					})), r.a.createElement(ee, {
						post: e,
						size: v.b.Large,
						format: ae
					}), e.source && r.a.createElement(X, null, r.a.createElement(w.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(P.a)(e), r.a.createElement(Z, null))), r.a.createElement(te, null, e.media && r.a.createElement(O.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: re,
						shouldLoad: !0
					})))), r.a.createElement(o, c, r.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: oe,
						eventFactory: s,
						style: ie(this.props)
					}, a))
				}
			}
			var le = Object(o.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: r
						} = t;
						e(Object(_.c)(Object(L.a)(s, !!r, n)))
					}
				}))(Object(k.b)(Object(C.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				pe = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ue = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				be = s.n(ue);
			const he = Object(a.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(L.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(o.b)(he),
				xe = b.a.wrapped(c.a, "BannerAd", be.a),
				ye = b.a.wrapped(pe.a, "ThemedWidget", be.a),
				fe = b.a.div("SidebarAdPlaceholder", be.a),
				Oe = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				ve = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(U.B)(e.media) && e.media.content)),
				Ee = e => !!e && e.isBlank;
			class Ce extends r.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: o,
						refreshKey: a,
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
					}, r.a.createElement(fe, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : b ? r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, r.a.createElement(y, null))) : ve(s) ? r.a.createElement(me.a, null, r.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					})) : r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, Ee(s) && r.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					}), r.a.createElement(xe, {
						id: Oe(d, n, o),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(Ce)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const p = Object(a.t)();
			t.a = p(Object(o.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const r = Object(i.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					o = Object(c.x)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: r && !o,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: a
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: o
				} = e, a = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && o ? r.a.createElement(d.a, l({
					forceHouseAd: n
				}, a)) : null
			}))
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
				o = s.n(r);
			const a = .99;
			class i extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= a && t(s)
					}
				}
				render() {
					return o.a.createElement(n.a, {
						threshold: a,
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
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				O = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				j = s.n(P);
			const _ = e => e.type === v.f.Nsfw || e.type === v.f.Spoiler,
				S = Object(a.c)({
					language: C.P,
					post: h.I,
					subredditOrProfile: h.U
				});
			class N extends r.a.PureComponent {
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
						subredditOrProfile: o
					} = this.props, a = {
						post: t
					}, c = Object(x.a)(Object(O.b)(a)), d = t.flair.filter(_);
					return r.a.createElement("div", {
						className: Object(i.a)(j.a.container, e, {
							[j.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: j.a.mainLine
					}, c && r.a.createElement("div", {
						className: j.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(O.a, a)), r.a.createElement("div", {
						className: Object(i.a)(j.a.title, !c && j.a.titleSingle),
						title: t.title
					}, d.length > 0 && r.a.createElement(f.a, {
						className: j.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), r.a.createElement("div", {
						className: j.a.metaLine
					}, n && !!o && r.a.createElement("span", {
						className: j.a.meta
					}, Object(E.e)(o) ? Object(m.c)(o.displayText || o.name) : Object(m.b)(o.displayText || o.name)), r.a.createElement("span", {
						className: j.a.meta
					}, "".concat(Object(y.b)(t.score), " "), r.a.createElement(u.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), r.a.createElement("span", {
						className: j.a.meta
					}, "".concat(Object(y.b)(t.numComments), " "), r.a.createElement(u.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var k = Object(o.b)(S, e => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}))(N),
				w = s("./src/reddit/components/SidebarPostList/index.m.less"),
				L = s.n(w);
			s.d(t, "b", (function() {
				return A
			}));
			const I = 10,
				T = 2,
				A = Object(a.a)(h.O, e => e.filter(e => !e.isSponsored)),
				B = Object(a.c)({
					posts: A
				}),
				M = Object(o.b)(B, e => ({
					openPost: t => e(Object(p.a)(t.permalink))
				}));
			class D extends r.a.Component {
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
							redditStyle: o,
							smallPostClassName: a
						} = this.props;
						return r.a.createElement(g.a, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, r.a.createElement(k, {
							className: Object(i.a)(L.a.smallPost, a),
							containerOnClick: s,
							postId: e.id,
							redditStyle: o,
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
						onPostVisible: o,
						posts: a,
						redditStyle: p,
						showMoreButton: h,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: y
					} = this.state;
					if (0 === a.length) return null;
					const f = this.getVisiblePostsCounts(),
						O = Object(b.a)(x),
						v = Object(b.b)(x),
						E = O || v,
						C = a.slice(y * f, (y + 1) * f),
						[P, ...j] = C,
						_ = E ? C.slice(0, T) : j.slice(0, T),
						S = E ? C.slice(T) : j.slice(T);
					return r.a.createElement("div", {
						className: Object(i.a)(L.a.container, t, {
							[L.a.redditStyle]: p
						})
					}, !E && r.a.createElement(g.a, {
						onPostVisible: o,
						postId: P.id
					}, r.a.createElement(d.a, {
						backgroundWrapperClassName: L.a.largePostBackgroundWrapper,
						descriptionClassName: L.a.largePostDescription,
						innerContainerClassName: L.a.largePostInnerContainer,
						"data-redditstyle": p,
						onPostClick: this.openLargePost,
						postId: P.id,
						showSubredditMeta: !1,
						showSubredditName: Object(c.a)(Object(m.f)(s)),
						trendingPost: P
					})), _.map(this.renderSmallPost), e, S.map(this.renderSmallPost), h && r.a.createElement(l.n, {
						className: L.a.SeeMore,
						onClick: this.showMorePosts
					}, n || r.a.createElement(u.c, null, "See More")))
				}
			}
			t.a = M(D)
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
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
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
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-TabBadger-Component").then(s.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TabBadger/Loader.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/experiments/badging.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/posts.ts");
			const p = Object(a.c)({
					postCount: m.N,
					previousPageIsOverlay: l.o,
					tabBadged: e => e.tabBadged,
					variant: e => Object(d.d)(e)
				}),
				u = Object(o.b)(p);
			t.a = u(Object(c.b)(e => 0 !== e.postCount && e.variant ? r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged,
				variant: e.variant
			}) : null))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/sampleSize.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
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
				f = s("./src/reddit/controls/Chip/index.m.less"),
				O = s.n(f);
			var v = e => {
					const t = e.to ? m.a : "div",
						s = Object(u.a)(O.a.chip, e.isActive && O.a.active, e.className);
					return a.a.createElement(t, {
						className: s,
						to: e.to || ""
					}, e.children)
				},
				E = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				P = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				j = s.n(P);
			const _ = e => {
					const t = !(!e.rankings || !e.rankings.length),
						s = !t && j.a.communityBannerPlaceholder;
					return a.a.createElement("div", {
						className: Object(u.a)(e.className, j.a.communityBanner, s),
						style: {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						}
					}, t && a.a.createElement("h2", {
						className: j.a.communityBannerText
					}, a.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || x.c),
						to: e.categoryName === x.m ? "".concat(x.e).concat(x.m) : x.e
					}, a.a.createElement(a.a.Fragment, null, e.categoryName ? (e => e === x.m ? a.a.createElement(C.c, null, "Up-and-coming Communities") : a.a.createElement(a.a.Fragment, null, "Top", a.a.createElement("span", {
						className: j.a.categoryName
					}, " ", a.a.createElement(C.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				S = e => a.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const s = e.subreddits[t.id];
					return a.a.createElement(b.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || x.c, s.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && N),
				N = a.a.createElement(a.a.Fragment, null, l()(5, e => a.a.createElement(h.a, {
					key: e
				}))),
				k = e => {
					const t = e.isSecondaryButton ? y.k : y.h;
					return a.a.createElement("div", {
						className: j.a.footer
					}, a.a.createElement(t, {
						className: j.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || x.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? a.a.createElement(C.c, null, "See All ", a.a.createElement(C.b, {
						name: "categoryName"
					}, e.categoryName)) : a.a.createElement(C.c, null, "See All") : a.a.createElement(C.c, null, "View all")))
				},
				w = e => a.a.createElement("div", {
					className: j.a.categoryPicker
				}, e.categories && e.categories.map(e => a.a.createElement(v, {
					className: j.a.chip,
					key: e.name,
					to: "".concat(x.e).concat(Object(E.f)(e.name), "/")
				}, e.name)));
			var L = e => {
					const t = c()(e.rankings),
						s = e.subreddits && t && e.subreddits[t.id],
						n = "".concat(p.a.assetPath, "/img/leaderboard/banner-background.png"),
						r = s ? s.bannerBackgroundImage || n : void 0,
						o = e.to || e.categoryName && "".concat(x.e).concat(Object(E.f)(e.categoryName) || "", "/");
					return a.a.createElement(g.a, {
						className: e.className,
						contentOnly: !0
					}, a.a.createElement(_, {
						bannerBackgroundImage: r,
						categoryName: e.categoryName,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings
					}), a.a.createElement(S, {
						categoryName: e.categoryName,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings,
						shouldDisplayDelta: !1,
						subreddits: e.subreddits
					}), a.a.createElement(k, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: o
					}), e.categories && a.a.createElement(w, {
						categories: e.categories
					}))
				},
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/contexts/ApiContext.tsx"),
				A = s("./src/reddit/endpoints/subreddit/models.ts"),
				B = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				M = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				D = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				F = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const U = async (e, t) => {
				const s = await Object(B.a)(e, t);
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(M.c)(t)
				}
			}, W = async e => {
				const t = r()(F.a, 5),
					s = await Object(A.a)(e, {
						names: t
					});
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(M.a)(t)
				}
			};
			class V extends a.a.Component {
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
						this.props.sendEvent(Object(D.c)(e, t, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, s)
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
						o = n ? n.subreddits : {};
					return a.a.createElement(L, R({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: r,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: o
					}, this.props))
				}
			}
			t.a = Object(T.b)(Object(I.b)(V))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
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
					const t = Object(a.a)(u.a.subredditRankItem, e.large && u.a.large),
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
					}, r.a.createElement(o.a, {
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
						className: Object(a.a)(u.a.arrow, !s && u.a.negative),
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
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = s.n(a);
			const c = e => r.a.createElement("div", {
				className: Object(o.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, r.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), r.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, s) {
			e.exports = {
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
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
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
			const l = o.a.div("WidgetBackground", c.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					pageLayer: e => e
				})
			}
			const O = f(),
				v = {
					apiError: h.c,
					apiPending: h.d,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.L)(e, t),
					loadMore: h.g,
					postsById: g.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(g.F)(e, s, n, r)
					}),
					subredditsById: x.Y,
					viewportDataLoaded: y.a,
					pageReferrer: l.O,
					postListPlaceholderComponent: () => u.a
				},
				E = Object(r.c)(v),
				C = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.A(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.D(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(i.E(t, n, r))
					}
				}),
				P = Object(n.b)(E, C, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(O(P(e)))
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, s) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
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
				return a
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const o = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, s, a, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (c.subreddit = a.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = o, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(n.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
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
				return f
			}));
			var n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
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
				a = (e, t) => {
					if (t) {
						const s = Object(n.i)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: r.post(e, t.post.id),
							media: Object.assign({}, r.media(e, t.post.id, void 0, t), {
								type: o(s)
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
				}, a(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, i(t), e && Object.assign({}, a(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, i(t), a(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), a(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), a(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), a(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), a(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), a(t, e)),
				x = e => t => {
					const s = Object(n.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, a(t, s))
				},
				y = e => t => {
					const s = Object(n.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, a(t, s))
				},
				f = e => t => ({
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
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => Object.assign({}, r.defaults(t), {
					action: "click",
					noun: Object(n.f)(e),
					source: "leaderboard_category"
				}),
				a = (e, t, s) => o => Object.assign({}, r.defaults(o), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.f)(t),
						name: s && s.toLowerCase()
					}
				}),
				i = (e, t) => s => Object.assign({}, r.defaults(s), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.f)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, s) => o => Object.assign({}, r.defaults(o), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.f)(t),
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
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
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
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
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
				o = s("./node_modules/core-js/modules/es6.array.sort.js"),
				a = s.n(o),
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
				f = s("./src/lib/makeListingKey/index.ts"),
				O = s("./src/lib/performanceTimings/index.tsx"),
				v = s("./src/reddit/actions/frontpage.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				C = s("./src/reddit/components/EmptySubreddit.tsx"),
				P = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				j = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				S = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				N = s("./src/reddit/components/JumpToContent/index.tsx"),
				k = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				w = s("./src/reddit/components/ListingPostList/index.tsx"),
				L = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				I = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				T = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				A = s("./src/reddit/components/TabBadger/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/constants/listings.ts"),
				D = s("./src/reddit/constants/parameters.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/trackers/screenview.ts"),
				W = s("./src/reddit/i18n/components.tsx"),
				V = s("./src/reddit/layout/page/Listing/index.tsx"),
				H = s("./src/reddit/pages/Topic/SidebarLeft/Loader.ts"),
				K = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				G = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				q = s("./src/reddit/selectors/experiments/trending.ts"),
				Q = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				Y = s("./src/reddit/selectors/frontpage.ts"),
				z = s("./src/reddit/selectors/meta.ts"),
				J = s("./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts"),
				Z = s("./src/reddit/selectors/user.ts"),
				X = s("./src/lib/constants/index.ts"),
				$ = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				ee = s("./src/lib/objectSelector/index.ts"),
				te = s("./src/reddit/constants/page.ts"),
				se = s("./src/reddit/pages/Frontpage/index.m.less"),
				ne = s.n(se);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = Object(R.t)(),
				ae = Object(h.c)({
					queryParams: Object(ee.a)((e, t) => {
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
				ie = Object(h.c)({
					countryMeta: z.b,
					geopopular: Z.m
				}),
				ce = Object(h.c)({
					categoriesPlacementVariant: K.a,
					isInTrendingEntrypointExperiment: q.a,
					isLoggedIn: Z.G,
					isPopular: R.C,
					isRpanDuVisible: e => Object(J.a)(e, {
						listingName: $.R
					}),
					rpanInjectionIndex: e => Object(J.b)(e, {
						listingName: $.R
					}),
					layout: R.L,
					railsWidgetsVariant: G.d
				}),
				de = () => Object(h.a)(ie, ae, ce, e => Object(J.a)(e, {
					listingName: $.R
				}), e => Object(J.b)(e, {
					listingName: $.R
				}), e => e, (e, t, s, n, r, o) => {
					let {
						countryMeta: a,
						geopopular: i
					} = e, {
						queryParams: c,
						sort: d
					} = t;
					const l = D.t in c && c[D.t].toUpperCase(),
						m = "string" == typeof l && l in X.Pb ? X.Pb[l] : X.Qb,
						p = Object(f.a)(te.a, d, c),
						u = a || X.v.Everywhere,
						b = i || u,
						h = D.g in c ? c[D.g].toUpperCase() : b,
						g = [];
					n && g.push(r);
					const x = Object(Q.b)(o, g, {
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
				le = (e, t) => ({
					onLoadMorePosts: () => e(v.d({
						sort: t.match.params.sort
					})),
					refreshFeed: () => e(v.e({
						sort: t.match.params.sort
					}))
				}),
				me = Object(b.b)(de, le),
				pe = Object(d.a)({
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
				ue = e => u.a.createElement(pe, re({}, e, {
					fallback: u.a.createElement(T.a, {
						showCardView: !!e.showCardView
					})
				})),
				be = Object(d.a)({
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
			class he extends u.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							isLoggedIn: e,
							sort: t
						} = this.props;
						y.a.read(() => {
							const s = "".concat(O.c.FrontPage, "-").concat(t);
							Object(O.d)(s, e)
						})
					}
				}
				render() {
					const {
						categoriesPlacementVariant: e,
						focusedVerticalPositions: t,
						isInTrendingEntrypointExperiment: s,
						isLoggedIn: n,
						isPopular: r,
						isRpanDuVisible: o,
						layout: a,
						listingKey: i,
						railsWidgetsVariant: c,
						rpanInjectionIndex: d,
						sendEvent: l
					} = this.props, m = r && !n && s && !Object(G.c)(c), b = !n, h = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, x = {};
					if (a === F.g.Large && t.forEach((e, t) => {
							x[e] = Object(E.a)({
								numInstance: t,
								layout: a,
								listingKey: i,
								listingName: te.b,
								listingPosition: e
							})
						}), o) {
						const {
							child: e,
							idx: t
						} = Object(L.a)({
							children: x,
							desiredIndex: d,
							layout: a,
							listingKey: i,
							listingName: $.R,
							sendEvent: l
						});
						x[t] = e
					}
					const y = Object(K.e)(e),
						f = !y && !!e,
						O = u.a.createElement(j.default, {
							categoriesPlacementVariant: e,
							className: Object(g.a)(ne.a.sidebar, y ? ne.a.SidebarRight : void 0),
							listingKey: i,
							listingName: te.b,
							railsWidgetsVariant: c
						}),
						v = r ? M.b.Popular : M.b.Home;
					return u.a.createElement(V.a, {
						className: Object(g.a)(ne.a.Container, this.props.className),
						fitPageToContent: !0,
						contentNavBar: u.a.createElement(u.a.Fragment, null, f && u.a.createElement(be, {
							category: v
						}), !b && !e && u.a.createElement(k.a, h)),
						trendingUnit: m && u.a.createElement(ue, {
							className: Object(g.a)(ne.a.TrendingPosts, {
								[ne.a.large]: y
							}),
							showCardView: a === F.g.Large
						}),
						content: u.a.createElement(p.Fragment, null, m && u.a.createElement(I.a, {
							className: ne.a.duHeader
						}, u.a.createElement(W.c, null, "Popular posts")), u.a.createElement(P.a, null), n && u.a.createElement(S.a, null), b && u.a.createElement(_.a, h), u.a.createElement(N.a, null), u.a.createElement(A.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), u.a.createElement(w.a, {
							injectChildren: x,
							noPostsComponent: () => u.a.createElement(C.a, {
								listingName: te.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: i,
							listingName: te.b,
							listingViewed: (e, t) => Object(U.d)(i, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: y ? null : O,
						sidebars: y ? [u.a.createElement(H.a, {
							categoriesPlacementVariant: e,
							topicName: v
						}), O] : void 0
					})
				}
			}
			t.default = oe(me(Object(B.b)(he)))
		},
		"./src/reddit/pages/Topic/SidebarLeft/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-pages-Topic-SidebarLeft-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-pages-Topic-SidebarLeft-index").then(s.bind(null, "./src/reddit/pages/Topic/SidebarLeft/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/pages/Topic/SidebarLeft/index.tsx"
				}
			})
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
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = Object(n.a)(o.a, o.b, a.K, (e, t) => {
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
				}, i.l, (e, t, s, n, o, a) => {
					if (!e) return !1;
					if (a.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!o && o.show_discovery_unit;
					if (!a.global.viewer_enabled) return !1;
					return [r.R, "r/popular"].indexOf(n) > -1
				}),
				d = Object(n.a)(o.b, (e, t) => {
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
						const e = "home" === t ? n.home_feed_discovery_unit_index : "r/popular" === t ? n.popular_feed_discovery_unit_index : r.h;
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
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const p = e => e.publicAccessNetwork.listings,
				u = s.n(m)()(e => Object(r.a)(Object(n.a)(p, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "l", (function() {
				return C
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "k", (function() {
				return A
			})), s.d(t, "m", (function() {
				return B
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "i", (function() {
				return W
			})), s.d(t, "b", (function() {
				return V
			})), s.d(t, "d", (function() {
				return H
			}));
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				O = Object(n.a)(f, e => e.ended),
				v = Object(n.a)(f, e => e.removed),
				E = Object(n.a)(e => e.publicAccessNetwork.models, O, v, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = F(n, i.b.ENDED) ? i.b.ENDED : n,
							o = s.stream.vod_accessible;
						return r === n && !0 === o ? e : Object.assign({}, e, {
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
							r = F(n, i.b.ENDED) ? i.b.ENDED : n,
							o = s.stream.vod_accessible;
						return r === n && !1 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				C = (e, t) => {
					return E(e)[Object(a.k)(t)]
				},
				P = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => u(t.listingName)(e, t), E, h, c.f, d.b, (e, t, s, n, r, c) => {
					if (c) {
						const o = [];
						if (e) {
							const t = Object(a.k)(e);
							s[t] && o.push(t)
						}
						const c = o.concat(t),
							d = [...new Set(c)],
							l = new Set([...n, ...r]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const d = new Set([...n, ...r]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.o).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				j = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return P(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				_ = Object(n.a)(y, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return j(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				S = Object(n.a)((e, t) => {
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
					return j(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = r.find(e => e.stream.state === i.b.IS_LIVE);
					if (o) return o.post.id;
					const a = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				N = Object(r.a)(Object(n.a)(S, E, (e, t) => e ? t[e] : void 0)),
				k = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.k)(s) : void 0
				}, S, h, c.f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return j(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				w = Object(n.a)(x, y, _, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(n.a)(x, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				I = Object(r.a)(Object(n.a)(k, E, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)(Object(n.a)(w, E, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)(Object(n.a)(L, E, (e, t) => e ? t[e] : void 0)),
				B = Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))),
				M = Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e]),
				D = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? C(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function F(e, t) {
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
			const R = Object(n.a)(k, g, (e, t) => e && t.timestamps[e] || 0);
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
				V = Object(n.a)(I, W, b.b, l.c, l.p, (e, t, s, n, r) => s ? n : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				H = Object(n.a)(I, W, R, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0)
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
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(a, o.o, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/categoriesPlacement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = (s("./src/lib/makeOnboardingSubredditsKey/index.ts"), s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/countrySorts.ts")),
				o = s("./src/reddit/selectors/category.ts"),
				a = (s("./src/reddit/selectors/experiments/categoriesPlacement.ts"), s("./src/reddit/selectors/meta.ts"));
			s("./src/reddit/selectors/subreddit.ts");
			Object(o.b)();
			const i = Object(n.a)(a.a, a.i, a.b, (e, t, s) => e || t || r.a[s] || s)
		}
	}
]);
//# sourceMappingURL=Frontpage.27123a34457aa47bd7cd.js.map