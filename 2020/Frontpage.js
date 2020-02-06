// https://www.redditstatic.com/desktop2x/Frontpage.4bf8da26686e4b960dd5.js
// Retrieved at 2/6/2020, 1:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage"], {
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
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
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, n.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(n) {
							var o = n.element,
								a = i(o),
								c = this._rootContainsTarget(o),
								d = n.entry,
								l = t && c && this._computeTargetAndRootIntersection(o, s),
								m = n.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: a,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, n.prototype._computeTargetAndRootIntersection = function(s, r) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var n, o, a, c, l, m, u, p, h = i(s), b = d(s), g = !1; !g;) {
								var f = null,
									x = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == x.display) return;
								if (b == this.root || b == t ? (g = !0, f = r) : b != t.body && b != t.documentElement && "visible" != x.overflow && (f = i(b)), f && (n = f, o = h, a = void 0, c = void 0, l = void 0, m = void 0, u = void 0, p = void 0, a = Math.max(n.top, o.top), c = Math.min(n.bottom, o.bottom), l = Math.max(n.left, o.left), m = Math.min(n.right, o.right), p = c - a, !(h = (u = m - l) >= 0 && p >= 0 && {
										top: a,
										bottom: c,
										left: l,
										right: m,
										width: u,
										height: p
									}))) break;
								b = d(b)
							}
							return h
						}
					}, n.prototype._getRootRect = function() {
						var e;
						if (this.root) e = i(this.root);
						else {
							var s = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || r.clientWidth,
								width: s.clientWidth || r.clientWidth,
								bottom: s.clientHeight || r.clientHeight,
								height: s.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, n.prototype._expandRectByRootMargin = function(e) {
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
					}, n.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== r)
							for (var n = 0; n < this.thresholds.length; n++) {
								var o = this.thresholds[n];
								if (o == s || o == r || o < s != o < r) return !0
							}
					}, n.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, n.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, n.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, n.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = n, e.IntersectionObserverEntry = r
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
						s = t.width * t.height,
						r = this.intersectionRect,
						n = r.width * r.height;
					this.intersectionRatio = s ? n / s : this.isIntersecting ? 1 : 0
				}

				function n(e, t) {
					var s, r, n, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, n = null, function() {
						n || (n = setTimeout((function() {
							s(), n = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, s, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function a(e, t, s, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
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
				var r;
				return s(e, (function(e, s, n) {
					if (t(e, s, n)) return r = s, !1
				})), r
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseFindKey.js"),
				n = s("./node_modules/lodash/_baseForOwn.js"),
				o = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return r(e, o(t, 3), n)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseRandom.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && n(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return r(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var s = i,
					d = c(e, i);
				t = n(t), e -= i;
				for (var l = r(d, t); ++s < e;) t(s);
				return l
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				f = s.n(g),
				x = s("./src/lib/lessComponent.tsx");
			const v = x.a.div("Container", f.a),
				y = x.a.div("LoadingHitbox", f.a),
				O = e => setTimeout(() => {
					throw e
				}, 0);
			class _ extends n.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					O(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: r = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: r
						})
					} catch (n) {
						O(n)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						O(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(b.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						O(e)
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
					return t ? n.a.createElement(v, {
						"data-slot": t
					}, n.a.createElement(y, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), n.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : n.a.createElement("div", {
						className: s
					})
				}
			}
			_.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(o.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const r = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(i.a)("".concat(r).concat(s.url), s.queryParams), Object(p.y)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(h.b)(_))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CrosspostBox/index.m.less"),
				v = s.n(x),
				y = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = y.a.div("Container", v.a),
				w = y.a.div("PostMetaWrapper", v.a),
				j = y.a.wrapped(p.c, "PostTitle", v.a),
				C = y.a.div("FlatList", v.a),
				P = y.a.div("FlatItem", v.a),
				E = y.a.span("FlatListDotSpacer", v.a),
				S = y.a.wrapped(_, "LinkContainer", v.a),
				N = y.a.div("Content", v.a),
				L = y.a.div("ThumbnailContainer", v.a),
				I = Object(i.c)({
					isCurrentUserProfilePost: g.h,
					language: f.P,
					post: g.I,
					shouldOpenPostInNewTab: f.T,
					subreddit: g.U
				}),
				k = Object(o.b)(I);
			t.a = k(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: r,
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
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					d = t;
				return o && !o.media ? n.a.createElement(S, {
					className: d
				}, n.a.createElement(N, null, n.a.createElement(w, null, n.a.createElement(u.a, c)), T(o), o.source && n.a.createElement(h.a, {
					post: o
				}), D(e)), R(e)) : n.a.createElement(_, {
					className: d
				}, n.a.createElement(w, null, n.a.createElement(u.a, c)), T(o), A(e), D(e))
			});
			const T = e => n.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: s
					} = e, r = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return n.a.createElement("div", null, n.a.createElement(m.a, O({}, r, {
						className: v.a.mediaContainer
					})))
				},
				D = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: r
					} = s;
					return n.a.createElement(C, null, n.a.createElement(P, null, Object(c.c)(t, "posts.points.noun", r, {
						count: Object(l.b)(r)
					})), n.a.createElement(E, null), n.a.createElement(P, null, B(e)))
				},
				B = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: r
					} = e, {
						numComments: o
					} = s;
					return n.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: r ? "_blank" : void 0
					}, Object(c.c)(t, "posts.comments.noun", o, {
						count: Object(l.b)(o)
					}))
				},
				R = e => n.a.createElement(L, null, n.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) s[r - 1] = arguments[r];
					this.listenerMap[e].push(...s)
				}
				removeListeners(e) {
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) s[r - 1] = arguments[r];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = s.length,
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !s.includes(e)), this.listenerMap[e].length - o === n
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
				return p
			}));
			const u = new o.a(50),
				p = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: r,
						listingPosition: o
					} = e, c = "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(r);
					let d = u.get(c);
					if (d) return d;
					const p = new a;
					return d = {
						estHeight: i.c,
						id: "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(r),
						trackOnEnteredViewport() {
							p.publish(i.b)
						},
						render: () => n.a.createElement(l, {
							listingPosition: o,
							numInstance: t,
							listingKey: r,
							listingName: m.b,
							pubsub: p
						})
					}, u.set(c, d), d
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("div", {
				className: Object(o.a)(i.a.heroContainer, e.className)
			}, n.a.createElement("div", {
				className: Object(o.a)(i.a.header, e.headerClassName)
			}, e.header), n.a.createElement("div", {
				className: Object(o.a)(e.hidePadding ? i.a.bodyHidePadding : i.a.body, e.bodyClassName)
			}, e.children))
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
			var r = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/banners.ts"),
				h = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/icons/svgs/Circle/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				v = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				y = s("./src/reddit/icons/svgs/Snoo/index.tsx");
			var O = e => o.a.createElement("svg", {
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
				_ = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				w = s("./src/reddit/layout/row/Inline/index.tsx"),
				j = s("./src/reddit/models/Live/index.ts");
			var C = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/FeaturedLiveEntrypoint/index.m.less"),
				E = s.n(P);
			const S = "".concat(r.a.redditUrl, "/live/"),
				N = c.a.a("Container", E.a),
				L = c.a.wrapped(b.a, "Circle", E.a),
				I = c.a.div("LiveLabel", E.a),
				k = c.a.div("ViewCount", E.a),
				T = c.a.div("Title", E.a),
				A = c.a.wrapped(v.a, "OutboundLink", E.a),
				D = c.a.div("Description", E.a),
				B = c.a.div("AnnouncementContainer", E.a),
				R = c.a.wrapped(T, "AnnouncementTitle", E.a),
				U = c.a.wrapped(D, "AnnouncementDescription", E.a),
				F = c.a.wrapped(m.g, "Button", E.a),
				M = c.a.wrapped(g.a, "CloseButton", E.a),
				H = Object(i.c)({
					featuredLiveThread: e => e.live.featured,
					language: C.P
				}),
				W = Object(a.b)(H);
			class V extends o.a.Component {
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
						Object(u.E)(e, t), this.props.sendEvent(Object(p.d)(e))
					}, this.clickedButtonCta = () => {
						this.props.sendEvent(Object(p.c)(this.props.featuredLiveThread.id))
					}
				}
				componentDidMount() {
					const {
						featuredLiveThread: e,
						sendEvent: t
					} = this.props;
					if (e && e.isAnnouncement) {
						const s = Object(u.d)(e.id);
						s < e.numTimesDismissable && (this.setState({
							announcementBannerHidden: !1
						}), t(Object(p.e)(e.id)), Object(u.E)(e.id, s + 1))
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
								[j.b.Announcement]: o.a.createElement(O, {
									className: E.a.iconStyles
								}),
								[j.b.Document]: o.a.createElement(_.a, {
									className: E.a.iconStyles
								}),
								[j.b.Snoo]: o.a.createElement(y.a, {
									className: E.a.iconStyles
								}),
								[j.b.Ama]: o.a.createElement(f.a, {
									className: E.a.iconStyles
								}),
								[j.b.Moderation]: o.a.createElement(x.a, {
									className: E.a.iconStyles
								})
							};
							return o.a.createElement(B, null, o.a.createElement(w.a, null, t[e.icon], o.a.createElement(R, null, e.title), o.a.createElement(M, {
								onClick: this.dismissModal
							})), o.a.createElement(U, null, e.description), o.a.createElement(F, {
								target: "_blank",
								href: e.announcementUrl,
								onClick: this.clickedButtonCta
							}, e.buttonCta))
						}
					}
					return o.a.createElement(N, {
						href: "".concat(S).concat(e.id)
					}, o.a.createElement(w.a, null, o.a.createElement(L, null), o.a.createElement(I, null, o.a.createElement(h.c, null, "live")), o.a.createElement(D, null, "·"), o.a.createElement(k, null, Object(d.c)(t, "live.viewers", e.viewerCount))), o.a.createElement(T, null, e.title, o.a.createElement(A, null)), o.a.createElement(D, null, e.description))
				}
			}
			t.a = W(Object(l.b)(V))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				y = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				C = s.n(j);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = "view--layout--FUE",
				S = "LayoutSwitch--picker",
				N = Object(i.a)(g.a),
				L = {
					[p.d.Card]: O.a,
					[p.d.Classic]: v.a,
					[p.d.Compact]: y.a
				},
				I = {
					[p.d.Card]: Object(x.c)("card"),
					[p.d.Classic]: Object(x.c)("classic"),
					[p.d.Compact]: Object(x.c)("compact")
				},
				k = Object(h.t)(),
				T = Object(a.c)({
					dropdownIsOpen: Object(w.b)(S),
					postLayout: h.K,
					redditStyle: h.A
				}),
				A = Object(o.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: S
					}))
				}));
			class D extends n.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: r,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(_.screen)(t),
							subreddit: Object(_.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: r,
							postLayout: o
						} = this.props, a = s || p.e[o], i = e === a, d = L[e];
						return n.a.createElement(f.b, P({}, t, {
							className: Object(c.a)(C.a.LayoutItem, {
								[C.a.selected]: i
							}),
							"data-layout": e,
							displayText: I[e],
							iconWrapperClassName: C.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: C.a.LayoutItemTextClassName
						}), n.a.createElement(d, {
							className: C.a.LayoutIcon,
							onClick: i ? void 0 : r
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return n.a.createElement(N, P({}, e, {
							className: C.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: C.a.DropdownRow,
							rowIconClassName: C.a.DropdownRowIcon,
							rowSelectedClassName: C.a.DropdownRowSelected,
							tooltipId: S
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, o = t || p.e[r];
					return n.a.createElement("div", {
						className: Object(c.a)(C.a.Container, e),
						id: E
					}, n.a.createElement("div", {
						className: C.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: S,
						showDropdownTriangle: !0
					}), n.a.createElement(b.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = k(A(Object(u.b)(Object(d.a)(D))))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/CountrySort/index.tsx"),
				f = s("./src/reddit/components/ListingSort/index.tsx"),
				x = s("./src/reddit/components/TimeSort/index.tsx"),
				v = s("./src/reddit/constants/listings.ts"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/helpers/trackers/navigation.ts"),
				j = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				C = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				E = s.n(P);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = new Set([b.N.CONTROVERSIAL, b.N.TOP]),
				L = new Set([b.N.CONTROVERSIAL, b.N.RISING]),
				I = "ListingSort--Overflow",
				k = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				T = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, C.i, (e, t, s) => {
					if (e) return e;
					const r = [b.N.HOT, b.N.NEW, b.N.TOP, b.N.RISING];
					return t && s && r.unshift(b.N.BEST), r
				}),
				A = Object(p.c)({
					isPopularPage: l.C,
					sortOptions: T
				});
			class D extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(w.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(h.a)(t, {
							sort: e
						}) : Object(_.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: r,
							sort: o
						} = this.props, i = r && !!s && e === b.N.HOT && o === b.N.HOT;
						return n.a.createElement(n.a.Fragment, null, n.a.createElement(O.a, {
							className: Object(a.a)(E.a.SortLink, e === o && E.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, n.a.createElement(f.a, {
							className: E.a.SortIcon,
							sort: e
						}), n.a.createElement("div", {
							className: E.a.SortLabel
						}, y.a[e])), i && n.a.createElement(g.a, {
							baseUrl: v.c[v.b.Popular],
							buttonClassName: E.a.DropdownButton,
							className: E.a.CountrySort,
							disabled: t,
							dropdownClassName: E.a.Dropdown,
							rowClassName: E.a.DropdownRow,
							rowSelectedClassName: E.a.DropdownRowSelected,
							wrapperClassName: E.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: E.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: r,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && N.has(r), d = L.has(r), l = o.filter(e => !L.has(e)), m = o.filter(e => L.has(e) && e !== r);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(f.d, S({}, this.props, {
						buttonClassName: E.a.DropdownButton,
						className: Object(a.a)(E.a.SortDropdown, e),
						rowClassName: E.a.DropdownRow,
						rowIconClassName: E.a.DropdownRowIcon,
						rowSelectedClassName: E.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(a.a)(E.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && n.a.createElement(x.a, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: E.a.DropdownButton,
						className: E.a.TimeSort,
						dropdownClassName: E.a.Dropdown,
						listingSort: r,
						onChange: s,
						rowClassName: E.a.DropdownRow,
						rowSelectedClassName: E.a.DropdownRowSelected,
						timeSort: i || b.Qb,
						wrapperClassName: E.a.DropdownSortWrapper
					}), m.length > 0 && n.a.createElement(f.d, S({}, this.props, {
						className: Object(a.a)(E.a.SortOverflow, e),
						dropdownClassName: E.a.Dropdown,
						dropdownId: I,
						rowClassName: E.a.DropdownRow,
						rowIconClassName: E.a.DropdownRowIcon,
						rowSelectedClassName: E.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), n.a.createElement("button", {
						className: E.a.SortOverflowButton,
						id: I
					}, n.a.createElement(j.a, null))))
				}
			}
			var B = k(Object(o.b)(A)(Object(d.b)(D))),
				R = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				U = s.n(R);
			const F = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				M = Object(o.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (s) {
								const n = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(c.G)(s, n))
							}
						}
					}
				});
			class H extends n.a.Component {
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
						disabled: r = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(U.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(B, {
						baseUrl: e,
						disabled: r,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && n.a.createElement(u.a, {
						className: U.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = F(M(Object(d.b)(H)))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
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
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: r,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: p
				} = e, h = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(r, e),
					onClick: a
				}, h), t)
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : n.a.createElement(a.a, Object.assign({}, e, {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/components/PostMeta/index.m.less"),
				v = s.n(x);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: r,
					isCurrentUserProfilePost: x,
					isOverlay: y,
					language: O,
					post: _,
					shouldShowSubscribeButton: w,
					subredditOrProfile: j,
					tooltipType: C
				} = e;
				return n.a.createElement("div", {
					className: v.a.metaContainer
				}, !r && !_.isSponsored && j && n.a.createElement(i.a, {
					postId: _.id,
					subredditName: j.name
				}, n.a.createElement(u.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && n.a.createElement(m.a, null), !r && !_.isSponsored && j && w && !x && n.a.createElement(p.a, {
					getEventFactory: e => Object(g.f)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(f.e)(j) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: _.id,
					small: !0
				}), !r && !_.isSponsored && n.a.createElement(b.b, null), !r && !_.isSponsored && n.a.createElement(c.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), n.a.createElement(l.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					language: O,
					post: _,
					tooltipType: C
				}), n.a.createElement(d.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!r,
					language: O,
					post: _,
					tooltipType: C
				}), j && n.a.createElement(a.a, {
					className: v.a.donationAmount,
					contentId: _.id,
					subredditId: j.id
				}), n.a.createElement(o.a, {
					hideCta: s,
					isOverlay: y,
					thing: _,
					tooltipType: C
				}))
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
					return n.a.createElement(i.a, {
						className: t,
						layout: s
					})
				},
				getComponent: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~PostDraft~ProfileComments~Prof~e82480be"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~ProfileComments~ProfileOvervie~630d0282"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~ProfileComments~ProfileOverview~ProfilePriv~2f828752"), s.e("RpanListingUnit")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var d = e => n.a.createElement(c, e),
				l = s("./src/reddit/helpers/trackers/rpan.ts"),
				m = s("./src/reddit/constants/postLayout.ts");
			const u = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340;
			s.d(t, "a", (function() {
				return h
			}));
			const p = new o.a(20),
				h = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = p.get(t);
					if (s) return s;
					const r = b(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: u(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(l.l)()),
								render: t => {
									let {
										className: s
									} = t;
									return n.a.createElement(d, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: r
						};
					return p.set(t, o), o
				},
				b = (e, t) => {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				u = s.n(m),
				p = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = s.n(p);
			const b = e => {
					let {
						className: t
					} = e;
					return n.a.createElement("div", {
						className: Object(o.a)(t, h.a.container, h.a.placeholder, h.a.large, u.a.largeAndMediumPostStyles)
					}, n.a.createElement(d.a, {
						className: h.a.backgroundWrapper
					}, n.a.createElement("div", {
						className: h.a.titleAndDescriptionContainer
					}, n.a.createElement("div", {
						className: h.a.titlePlaceholder
					}), n.a.createElement("div", {
						className: h.a.descriptionPlaceholder
					})), n.a.createElement("div", {
						className: h.a.body
					}, g(a.j))))
				},
				g = e => Array.from({
					length: e
				}).map((e, t) => n.a.createElement("div", {
					className: Object(o.a)(h.a.thumbnailContainer, h.a.placeholder),
					key: "rpan-thumb-placeholder-".concat(t)
				}, n.a.createElement("div", {
					className: Object(o.a)(h.a.thumbnail, h.a.placeholder)
				})));
			t.a = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === l.g.Classic ? n.a.createElement(i.b, {
					className: Object(o.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === l.g.Compact ? n.a.createElement(c.a, {
					className: Object(o.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : n.a.createElement(b, {
					className: t
				})
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = s.n(n);
			t.a = r.a.div("header", o.a)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					className: t,
					layoutBodyClassName: s,
					showCardView: r
				} = e, i = {
					[c.a["m-card"]]: r
				};
				return n.a.createElement("div", {
					className: Object(o.a)(c.a.container, i, t)
				}, n.a.createElement(a.a, {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const u = n.a.createElement(a.a, {
					className: m.a.duHeader
				}, n.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				p = Object(d.a)({
					isLoading: !0
				});
			t.a = e => n.a.createElement(i.a, {
				className: e.className,
				header: u,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView,
				children: Array.from({
					length: e.numberOfItems || 6
				}).map(e => n.a.createElement("div", {
					className: m.a.post,
					key: "placeholder-post-".concat(e)
				}, n.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.one, p)
				}), n.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.two, p)
				}), n.a.createElement("div", {
					className: Object(o.a)(m.a.icon, p)
				}), n.a.createElement("div", {
					className: Object(o.a)(m.a.name, p)
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				u = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				p = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.div("BannerContainer", p.a),
				g = h.a.wrapped(e => n.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", p.a),
				f = [{
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
			var x = () => {
					const e = m()(0, f.length - 1),
						{
							img: t,
							href: s
						} = f[e];
					return n.a.createElement(b, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, n.a.createElement("a", {
						href: d.a.redditUrl + s,
						target: "_blank"
					}, n.a.createElement(g, {
						src: d.a.assetPath + t
					})))
				},
				v = s("./src/lib/constants/index.ts"),
				y = s("./src/reddit/components/PostMedia/index.tsx"),
				O = s("./src/reddit/components/PostTitle/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = s("./src/lib/getShortenedLink.ts"),
				C = s("./src/lib/opener/index.ts"),
				P = s("./src/reddit/actions/ads/index.ts"),
				E = s("./src/reddit/components/PostContainer/index.tsx"),
				S = s("./src/reddit/constants/adEvents.ts"),
				N = s("./src/reddit/contexts/InsideOverlay.tsx"),
				L = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = s("./src/reddit/helpers/adCount/index.ts"),
				k = s("./src/reddit/helpers/pixels.ts"),
				T = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				A = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				D = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				B = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				R = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				U = s("./src/reddit/models/Theme/index.ts"),
				F = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				M = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				W = s.n(H);
			const V = h.a.wrapped(e => n.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", W.a);
			class G extends n.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(M.F)(e.media) || Object(M.C)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case v.eb.IMAGE:
							return n.a.createElement(V, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var K = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				q = s.n(K);
			const Y = h.a.wrapped(_.d, "PostTopMeta", q.a),
				z = h.a.div("BannerAdContainer", q.a),
				Q = e => {
					let {
						children: t
					} = e;
					return n.a.createElement("div", null, t)
				},
				J = h.a.div("PromotedPostContainer", q.a),
				X = h.a.wrapped(B.a, "OutboundLinkIcon", q.a),
				Z = h.a.div("SourceLinkWrapper", q.a),
				$ = h.a.div("TopLine", q.a),
				ee = h.a.wrapped(O.c, "PostTitle", q.a),
				te = h.a.div("PostMediaWrapper", q.a),
				se = h.a.div("BackgroundWrapper", q.a),
				re = h.a.wrapped(E.a, "PostContainer", q.a),
				ne = 640,
				oe = (e, t) => {
					Object(k.a)(t.events, S.a.Click, t), t.source ? t.source.outboundUrl ? Object(C.d)(t.source.outboundUrl, C.c.BLANK) : Object(C.d)(t.source.url, C.c.BLANK) : Object(C.d)(t.permalink, C.c.BLANK)
				},
				ae = e => Object(D.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(A.a)(Object(T.a)(e), R.a.actionIcon, R.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(U.g)(Object(F.a)(e).body, null, null) || ""
				});
			class de extends n.a.Component {
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
						isOverlay: r
					} = this.props;
					let o, a, c = {};
					return e.isBlank ? (o = Q, a = null) : e.isMediaOnly ? (o = z, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = n.a.createElement(G, {
						post: e
					})) : (o = J, a = n.a.createElement(se, {
						style: ce(this.props)
					}, n.a.createElement($, null, n.a.createElement(Y, {
						tooltipType: r ? _.c.Lightbox : void 0,
						language: v.y,
						post: e,
						showTimestamp: !1
					})), n.a.createElement(ee, {
						post: e,
						size: O.b.Large,
						format: ae
					}), e.source && n.a.createElement(Z, null, n.a.createElement(L.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(j.a)(e), n.a.createElement(X, null))), n.a.createElement(te, null, e.media && n.a.createElement(y.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: ne,
						shouldLoad: !0
					})))), n.a.createElement(o, c, n.a.createElement(re, {
						className: t,
						isOverlay: r,
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
							placementIndex: r,
							isOverlay: n
						} = t;
						e(Object(P.c)(Object(I.a)(s, !!n, r)))
					}
				}))(Object(N.b)(Object(w.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				ue = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				pe = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				he = s.n(pe);
			const be = Object(a.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: r
						} = t, n = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(I.a)(s, n, r)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(o.b)(be),
				fe = h.a.wrapped(c.a, "BannerAd", he.a),
				xe = h.a.wrapped(ue.a, "ThemedWidget", he.a),
				ve = h.a.div("SidebarAdPlaceholder", he.a),
				ye = (e, t, s) => {
					let r = "";
					return t && (r += "overlay-"), r += "sidebar-".concat(e), null != s && (r += "-".concat(s)), r
				},
				Oe = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(M.B)(e.media) && e.media.content)),
				_e = e => !!e && e.isBlank;
			class we extends n.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: r,
						placementIndex: o,
						refreshKey: a,
						listingName: c,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: u,
						forcePlaceholder: p,
						forceHouseAd: h,
						waitForProgrammatic: b
					} = this.props;
					return p || t || !Oe(s) && b ? n.a.createElement(me.a, null, n.a.createElement(xe, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, n.a.createElement(ve, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : h ? n.a.createElement(me.a, null, n.a.createElement(xe, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, n.a.createElement(x, null))) : Oe(s) ? n.a.createElement(me.a, null, n.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					})) : n.a.createElement(me.a, null, n.a.createElement(xe, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, _e(s) && n.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					}), n.a.createElement(fe, {
						id: ye(d, r, o),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(we)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const u = Object(a.t)();
			t.a = u(Object(o.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: r
				} = t;
				const n = Object(i.b)(e, {
						listingName: s,
						pageLayer: r
					}),
					o = Object(c.x)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: n && !o,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: a
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: r,
					pageLayer: o
				} = e, a = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && o ? n.a.createElement(d.a, l({
					forceHouseAd: r
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(r),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", n.a)
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
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
			t.a = n
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TabBadger/Loader.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/experiments/badging.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/posts.ts");
			const u = Object(a.c)({
					postCount: m.N,
					previousPageIsOverlay: l.o,
					tabBadged: e => e.tabBadged,
					variant: e => Object(d.d)(e)
				}),
				p = Object(o.b)(u);
			t.a = p(Object(c.b)(e => 0 !== e.postCount && e.variant ? n.a.createElement(i.a, {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const l = o.a.div("WidgetBackground", c.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return n.a.createElement("div", s, n.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/isFakeSubreddit/index.ts"),
				n = s("./src/reddit/constants/postLayout.ts");
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
					layout: n.b[t.prefs.layout]
				};
				return a && !Object(r.a)(a.name) && (c.subreddit = a.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = o, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				h = e => Object(r.o)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return u
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "g", (function() {
				return v
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					switch (e) {
						case r.a.LIVE:
							return "stream_live";
						case r.a.VOD:
							return "stream_vod";
						case r.a.UNAVAILABLE:
							return "stream_unavailable";
						default:
							return
					}
				},
				a = (e, t) => {
					if (t) {
						const s = Object(r.i)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: n.post(e, t.post.id),
							media: Object.assign({}, n.media(e, t.post.id, void 0, t), {
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
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, i(t), a(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, i(t), a(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, i(t), a(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, i(t), a(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, i(t), a(t, e)),
				f = e => t => {
					const s = Object(r.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, a(t, s))
				},
				x = e => t => {
					const s = Object(r.l)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, a(t, s))
				},
				v = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, n.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, n.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), n.a.createElement("path", {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				n = s.n(r),
				o = s("./node_modules/core-js/modules/es6.array.sort.js"),
				a = s.n(o),
				i = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = s.n(i),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				m = s.n(l),
				u = s("./node_modules/react/index.js"),
				p = s.n(u),
				h = s("./node_modules/react-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/extractQueryParams/index.ts"),
				x = s("./src/lib/fastdom/index.ts"),
				v = s("./src/lib/makeListingKey/index.ts"),
				y = s("./src/lib/performanceTimings/index.tsx"),
				O = s("./src/reddit/actions/frontpage.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				w = s("./src/reddit/components/EmptySubreddit.tsx"),
				j = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				C = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				P = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				E = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				S = s("./src/reddit/components/JumpToContent/index.tsx"),
				N = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				L = s("./src/reddit/components/ListingPostList/index.tsx"),
				I = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				k = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				T = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				A = s("./src/reddit/components/TabBadger/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/constants/parameters.ts"),
				R = s("./src/reddit/constants/postLayout.ts"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/trackers/screenview.ts"),
				M = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/layout/page/Listing/index.tsx"),
				W = s("./src/reddit/selectors/experiments/trending.ts"),
				V = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				G = s("./src/reddit/selectors/frontpage.ts"),
				K = s("./src/reddit/selectors/meta.ts"),
				q = s("./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts"),
				Y = s("./src/reddit/selectors/user.ts"),
				z = s("./src/lib/constants/index.ts"),
				Q = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				J = s("./src/lib/objectSelector/index.ts"),
				X = s("./src/reddit/constants/page.ts"),
				Z = s("./src/reddit/pages/Frontpage/index.m.less"),
				$ = s.n(Z);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const te = Object(U.t)(),
				se = Object(b.c)({
					queryParams: Object(J.a)((e, t) => {
						let {
							location: s
						} = t;
						return m()([...Object(f.a)(s.search)])
					}),
					sort: (e, t) => {
						let {
							match: s
						} = t;
						const r = Object(G.a)(e);
						return s.params.sort || r
					}
				}),
				re = Object(b.c)({
					countryMeta: K.b,
					geopopular: Y.m
				}),
				ne = Object(b.c)({
					isInTrendingEntrypointExperiment: W.a,
					isLoggedIn: Y.G,
					isPopular: U.C,
					isRpanDuVisible: e => Object(q.a)(e, {
						listingName: Q.R
					}),
					rpanInjectionIndex: e => Object(q.b)(e, {
						listingName: Q.R
					}),
					layout: U.K
				}),
				oe = () => Object(b.a)(re, se, ne, e => Object(q.a)(e, {
					listingName: Q.R
				}), e => Object(q.b)(e, {
					listingName: Q.R
				}), e => e, (e, t, s, r, n, o) => {
					let {
						countryMeta: a,
						geopopular: i
					} = e, {
						queryParams: c,
						sort: d
					} = t;
					const l = B.t in c && c[B.t].toUpperCase(),
						m = "string" == typeof l && l in z.Pb ? z.Pb[l] : z.Qb,
						u = Object(v.a)(X.a, d, c),
						p = a || z.v.Everywhere,
						h = i || p,
						b = B.g in c ? c[B.g].toUpperCase() : h,
						g = [];
					r && g.push(n);
					const f = Object(V.b)(o, g, {
						listingKey: u
					});
					return Object.assign({
						countrySort: b,
						listingKey: u,
						sort: d,
						timeSort: m,
						focusedVerticalPositions: f
					}, s)
				}),
				ae = (e, t) => ({
					onLoadMorePosts: () => e(O.d({
						sort: t.match.params.sort
					})),
					refreshFeed: () => e(O.e({
						sort: t.match.params.sort
					}))
				}),
				ie = Object(h.b)(oe, ae),
				ce = Object(d.a)({
					resolved: {},
					chunkName: () => "Trending",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~PostDraft~ProfileComments~Prof~e82480be"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostCreation~ProfileComments~ProfileOvervie~630d0282"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~ProfileComments~ProfileOverview~ProfilePriv~2f828752"), s.e("Trending")]).then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
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
				de = e => p.a.createElement(ce, ee({}, e, {
					fallback: p.a.createElement(T.a, {
						showCardView: !!e.showCardView
					})
				}));
			class le extends p.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							isLoggedIn: e,
							sort: t
						} = this.props;
						x.a.read(() => {
							const s = "".concat(y.c.FrontPage, "-").concat(t);
							Object(y.d)(s, e)
						})
					}
				}
				render() {
					const {
						focusedVerticalPositions: e,
						isInTrendingEntrypointExperiment: t,
						isLoggedIn: s,
						isPopular: r,
						isRpanDuVisible: n,
						layout: o,
						listingKey: a,
						rpanInjectionIndex: i,
						sendEvent: c
					} = this.props, d = r && !s && t, l = !s, m = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, h = {};
					if (o === R.g.Large && e.forEach((e, t) => {
							h[e] = Object(_.a)({
								numInstance: t,
								layout: o,
								listingKey: a,
								listingName: X.b,
								listingPosition: e
							})
						}), n) {
						const {
							child: e,
							idx: t
						} = Object(I.a)({
							children: h,
							desiredIndex: i,
							layout: o,
							listingKey: a,
							listingName: Q.R,
							sendEvent: c
						});
						h[t] = e
					}
					const b = p.a.createElement(C.default, {
						className: $.a.sidebar,
						listingKey: a,
						listingName: X.b
					});
					return p.a.createElement(H.a, {
						className: Object(g.a)($.a.Container, this.props.className),
						fitPageToContent: !0,
						contentNavBar: p.a.createElement(p.a.Fragment, null, !l && p.a.createElement(N.a, m)),
						trendingUnit: d && p.a.createElement(de, {
							showCardView: o === R.g.Large
						}),
						content: p.a.createElement(u.Fragment, null, d && p.a.createElement(k.a, {
							className: $.a.duHeader
						}, p.a.createElement(M.c, null, "Popular posts")), p.a.createElement(j.a, null), s && p.a.createElement(E.a, null), l && p.a.createElement(P.a, m), p.a.createElement(S.a, null), p.a.createElement(A.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), p.a.createElement(L.a, {
							injectChildren: h,
							noPostsComponent: () => p.a.createElement(w.a, {
								listingName: X.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: a,
							listingName: X.b,
							listingViewed: (e, t) => Object(F.d)(a, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: b
					})
				}
			}
			t.default = te(ie(Object(D.b)(le)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = Object(r.a)(o.a, o.b, a.K, (e, t) => {
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
				}, i.l, (e, t, s, r, o, a) => {
					if (!e) return !1;
					if (a.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!o && o.show_discovery_unit;
					if (!a.global.viewer_enabled) return !1;
					return [n.R, "r/popular"].indexOf(r) > -1
				}),
				d = Object(r.a)(o.b, (e, t) => {
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
				}, i.m, (e, t, s, r) => {
					if (!e) {
						const e = "home" === t ? r.home_feed_discovery_unit_index : "r/popular" === t ? r.popular_feed_discovery_unit_index : n.h;
						return "number" == typeof e ? e : n.h
					}
					return s ? s.discovery_unit_index : n.h
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(n.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "l", (function() {
				return w
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "k", (function() {
				return A
			})), s.d(t, "m", (function() {
				return D
			})), s.d(t, "j", (function() {
				return B
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "i", (function() {
				return H
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "d", (function() {
				return V
			}));
			const b = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				x = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				y = Object(r.a)(v, e => e.ended),
				O = Object(r.a)(v, e => e.removed),
				_ = Object(r.a)(e => e.publicAccessNetwork.models, y, O, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = U(r, i.b.ENDED) ? i.b.ENDED : r,
							o = s.stream.vod_accessible;
						return n === r && !0 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = U(r, i.b.ENDED) ? i.b.ENDED : r,
							o = s.stream.vod_accessible;
						return n === r && !1 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				w = (e, t) => {
					return _(e)[Object(a.k)(t)]
				},
				j = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), _, b, c.f, d.b, (e, t, s, r, n, c) => {
					if (c) {
						const o = [];
						if (e) {
							const t = Object(a.k)(e);
							s[t] && o.push(t)
						}
						const c = o.concat(t),
							d = [...new Set(c)],
							l = new Set([...r, ...n]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const d = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.o).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				C = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, _, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return j(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				P = Object(r.a)(x, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return C(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				E = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, _, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return C(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, g, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = n.find(e => e.stream.state === i.b.IS_LIVE);
					if (o) return o.post.id;
					const a = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				S = Object(n.a)(Object(r.a)(E, _, (e, t) => e ? t[e] : void 0)),
				N = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.k)(s) : void 0
				}, E, b, c.f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return C(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				L = Object(r.a)(f, x, P, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				I = Object(r.a)(f, x, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				k = Object(n.a)(Object(r.a)(N, _, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(r.a)(L, _, (e, t) => e ? t[e] : void 0)),
				A = Object(n.a)(Object(r.a)(I, _, (e, t) => e ? t[e] : void 0)),
				D = Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))),
				B = Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e]),
				R = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? w(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function U(e, t) {
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
			const F = Object(r.a)(N, g, (e, t) => e && t.timestamps[e] || 0);
			var M;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const H = Object(r.a)(N, _, h.b, (e, t, s) => {
					if (s) return M.INTRO;
					const r = e && t[e];
					if (!r) return M.UNAVAILABLE;
					const n = r.stream.state;
					return n === i.b.IS_LIVE || n === i.b.DISCONNECTED ? M.LIVE : n === i.b.ENDED && r.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				W = Object(r.a)(k, H, h.b, l.c, l.p, (e, t, s, r, n) => s ? r : e ? t === M.LIVE || t === M.VOD ? e.stream.hls_url : n : void 0),
				V = Object(r.a)(k, H, F, (e, t, s) => e ? t === M.LIVE ? e.broadcast_time : t === M.VOD && s < e.broadcast_time ? s : 0 : 0)
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
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(a, o.o, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=Frontpage.4bf8da26686e4b960dd5.js.map