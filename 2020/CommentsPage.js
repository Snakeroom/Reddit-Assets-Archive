// https://www.redditstatic.com/desktop2x/CommentsPage.8f4723a5a28eac342b46.js
// Retrieved at 1/28/2020, 2:40:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage", "Explore~ProfileSnoobuilder~SubredditWiki"], {
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
					o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, o.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, o.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, o.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, o.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
						}))
					}, o.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, o.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var r = o.element,
								a = i(r),
								d = this._rootContainsTarget(r),
								c = o.entry,
								l = t && d && this._computeTargetAndRootIntersection(r, s),
								m = o.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: a,
									rootBounds: s,
									intersectionRect: l
								});
							c ? t && d ? this._hasCrossedThreshold(c, m) && this._queuedEntries.push(m) : c && c.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var o, r, a, d, l, m, p, u, h = i(s), b = c(s), g = !1; !g;) {
								var x = null,
									C = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == C.display) return;
								if (b == this.root || b == t ? (g = !0, x = n) : b != t.body && b != t.documentElement && "visible" != C.overflow && (x = i(b)), x && (o = x, r = h, a = void 0, d = void 0, l = void 0, m = void 0, p = void 0, u = void 0, a = Math.max(o.top, r.top), d = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), u = d - a, !(h = (p = m - l) >= 0 && u >= 0 && {
										top: a,
										bottom: d,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								b = c(b)
							}
							return h
						}
					}, o.prototype._getRootRect = function() {
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
					}, o.prototype._expandRectByRootMargin = function(e) {
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
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== n)
							for (var o = 0; o < this.thresholds.length; o++) {
								var r = this.thresholds[o];
								if (r == s || r == n || r < s != r < n) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || d(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return d(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = n
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
						o = n.width * n.height;
					this.intersectionRatio = s ? o / s : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var s, n, o, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							s(), o = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, s, n) {
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

				function d(e, t) {
					for (var s = t; s;) {
						if (s == e) return !0;
						s = c(s)
					}
					return !1
				}

				function c(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var n;
				return s(e, (function(e, s, o) {
					if (t(e, s, o)) return n = s, !1
				})), n
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFindKey.js"),
				o = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, r(t, 3), o)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && o(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				o = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var s = i,
					c = d(e, i);
				t = o(t), e -= i;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? r : o;
					return Object(n.c)(i[a])
				},
				d = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function c(e, t, s, n) {
				const o = new Date(1e3 * e),
					r = i(o, s, n),
					c = t ? a(o, s) + ", " : "";
				return "".concat(r, " ").concat(c).concat(d(o, s))
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				C = s("./src/lib/lessComponent.tsx");
			const v = C.a.div("Container", x.a),
				O = C.a.div("LoadingHitbox", x.a),
				y = e => setTimeout(() => {
					throw e
				}, 0);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					y(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && c.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (o) {
						y(o)
					}
				}
				destroySlot() {
					try {
						this.frame && c.b(this.frame)
					} catch (e) {
						y(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(b.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						y(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && c.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && c.d(this.frame, {
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
					return t ? o.a.createElement(v, {
						"data-slot": t
					}, o.a.createElement(O, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), o.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : o.a.createElement("div", {
						className: s
					})
				}
			}
			E.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(r.b)(() => Object(a.c)({
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
					return s && s.meta ? c.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(h.b)(E))
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				postEventMeta: "UORiCb6Mik-agLw97Owil",
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/app/strings/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/helpers/postEvent.ts"),
				l = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				m = s.n(l);
			const p = i.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "Metadata", m.a),
				u = e => {
					let {
						post: t,
						language: s
					} = e;
					return Object(c.a)(t) ? o.a.createElement(d.a, {
						className: m.a.postEventMeta,
						language: s,
						post: t
					}) : o.a.createElement(o.a.Fragment, null, !t.isScoreHidden && o.a.createElement(o.a.Fragment, null, o.a.createElement(p, {
						"data-click-id": "score"
					}, Object(a.c)(s, "posts.points.noun", t.score, {
						count: Object(r.b)(t.score)
					})), o.a.createElement(p, null, "·")), o.a.createElement(p, {
						"data-click-id": "comments"
					}, Object(a.c)(s, "posts.comments.noun", t.numComments, {
						count: Object(r.b)(t.numComments)
					})))
				}
		},
		"./src/reddit/components/Collection/PostItem/index.m.less": function(e, t, s) {
			e.exports = {
				postTitle: "_1bvyZ0jB0C8Lx6TlraZXE3",
				postContent: "_3giZKNlG6qJzee7UY1xsIJ",
				active: "_12zSt_pMIevRkRY1y7z0ZD",
				isProfilePage: "_3yF2XCFhSO-O3pN8ebYN1G",
				postBody: "_2L4qX-0aH7jj8yNe2FGxg-",
				bottomline: "NlMXOVW9HTmozMDSBJduL",
				postContainer: "rF1mJN5TPvOeX-Rs9PA04",
				postBodyWrapper: "_3LxyuVXMtCzPGToR6G4aUP",
				galleryPostContainer: "LbSOjrpQSZxNlzkqgp8IK",
				galleryPostOverlay: "_32s7Ik6Mvi_xJ6Q7PXN7cS",
				galleryPostImage: "_71EQniEmTXC8cbuXDlo2y",
				gallerySelectedBorder: "_3TY5O5VX0o1EJLeXO2CBIz",
				isNightmodeOn: "_3ToKa6hKRy0knGHXUZW0tI",
				isSelectedPost: "dKiTp-99N-ixy1MUgoxzt",
				galleryBottomLine: "_3juAZ5nip3xhlLYoa0eJHl",
				isScoreHidden: "_1gE7DLti39Ow23AU39DRyi",
				gallerySeparator: "_1REIFRRcgS4gb1OzCUiDdF",
				scrollToContainer: "R4W5__5pno6HuOR6cXIcW",
				blurBackground: "_1EmOtGLOIj5jVny00MsYDq",
				timelineThumbnail: "N7ZDF05PM85cnjxy8A9Kj",
				timelineThumbnailOverride: "_2qHZln2Y6YL5GXxpgP4Qf4",
				galleryThumbnailPlaceholder: "_3HsMbUHP3qlXSnSNv10i__",
				thumbnailContainerClassName: "_22Rd8vdnxySvffllxDpbGs",
				galleryPostPlaceholderThumbnailOverride: "_2XLoayiHEZSUCfwO0UAbso",
				commonThumbnailOverride: "_2tS9NgDPCzFiHnYMa3o1SV"
			}
		},
		"./src/reddit/components/Collection/index.m.less": function(e, t, s) {
			e.exports = {
				collectionTitleWrapper: "_10IcBRrmressbhblq2bqiU",
				isProfilePage: "_40cmCHyGWf1SgOpyoChQS",
				collectionTitle: "tFfYP5FF1o5CEXQ15uH7d",
				collectionMetaData: "_1-c9t8ecl06D08Su9pk4ni",
				collectionBy: "_17sTscKExP8XIU91kNOF2U",
				collectionTitleOptions: "_1IA_VhTzcdVBgjp_pZllHj",
				postListWrapper: "_2T_gfh-4AolUQ4rcgj8LV3",
				collectionDescription: "_1qekGnwXQb9ZXUYpC2vI3o",
				collectionList: "_3DA4B_0rR_osY0zjBQbJ8d",
				author: "_3fYAYBseZm3AMr8S-Q5ZoJ",
				overflowMenu: "_3LbMCmvXBCx5DLWUsYvKdV",
				postCount: "_1LY03RHQAwDBI6w3IOLqwg",
				galleryContainer: "_3sH08_Dk83Y6-vyvIc9ttc"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loginHref/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = i.a.div("Wrapper", h.a), x = i.a.span("Copy", h.a), C = i.a.wrapped(l.g, "SignupLink", h.a), v = i.a.wrapped(l.j, "LoginLink", h.a);
			t.a = Object(c.b)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: i,
					openRegisterModal: c,
					origin: l,
					sendEvent: u
				} = e;
				return o.a.createElement(g, {
					className: Object(r.a)(t, {
						[h.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement(x, {
					className: Object(r.a)({
						[h.a.LiveStreamingCopy]: s
					})
				}, b._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement(v, {
					href: Object(d.a)(n, l, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "log in")), o.a.createElement(C, {
					className: Object(r.a)({
						[h.a.LiveStreamingSignupLink]: s
					}),
					href: Object(d.a)(n, l, "/register"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), c(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "sign up")))
			})
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/comment/index.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/app/strings/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				C = s.n(x);
			const v = h.a.wrapped(g.a, "Show", C.a);
			var O = e => o.a.createElement(b.d, null, !e.comment.isApproved && o.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.f, null)), o.a.createElement(b.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, o.a.createElement(b.g, null)), o.a.createElement(b.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, o.a.createElement(b.e, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const y = h.a.wrapped(l.a, "StyledDropdown", C.a),
				E = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				f = Object(r.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(i.H)(s.id)),
						onLockComment: () => e(Object(i.X)(s.id)),
						onRemoveComment: () => e(Object(i.cb)(s.id, !1)),
						onSpamComment: () => e(Object(i.cb)(s.id, !0)),
						onShowComment: () => e(Object(i.Y)(s.id))
					}
				}),
				w = Object(d.a)(y),
				j = f(Object(c.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: n,
						onApproveComment: r,
						onLockComment: a,
						onRemoveComment: i,
						onSpamComment: d,
						onShowComment: c,
						sendEvent: l,
						tooltipId: p
					} = e;
					return o.a.createElement(w, {
						isOpen: s,
						tooltipId: p
					}, o.a.createElement(O, {
						language: n,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							d(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							a(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = j
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				supportButton: "_2YUu8EV4OahSxJwgb9xLbr",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				iconWrapper: "jap7xdwXZKV3I9Oj8GdgQ",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				DonationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				donationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				Approve: "_34mJxMS9sOCTo8dtFMQOLR",
				approve: "_34mJxMS9sOCTo8dtFMQOLR",
				Lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				Automoderator: "EytgzUMjj1jcbKtFsodey",
				automoderator: "EytgzUMjj1jcbKtFsodey",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				Moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				Remove: "_1DQWCB93pHPVVJCXOGsblO",
				remove: "_1DQWCB93pHPVVJCXOGsblO",
				Report: "_2wYWDvjfG1JR6VNK9ryPFk",
				report: "_2wYWDvjfG1JR6VNK9ryPFk",
				Spam: "_3kK86gdpll9ihjOPWJE6f2",
				spam: "_3kK86gdpll9ihjOPWJE6f2",
				Op: "_2pZswNTz_uW46hN02djL7j",
				op: "_2pZswNTz_uW46hN02djL7j",
				Contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/components/AuthorLink/index.tsx"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				C = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				v = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/economics.ts"),
				y = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				E = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				f = s.n(E);
			const w = e => {
				switch (e) {
					case 1:
						return {
							color: "#FF2500", fontWeight: 700
						};
					case 2:
						return {
							color: "#FF7300", fontWeight: 700
						};
					case 3:
						return {
							color: "#FFA200", fontWeight: 700
						};
					default:
						return {}
				}
			};
			var j = Object(r.b)(() => Object(a.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (v.d.spTopTippers(e)) return Object(O.s)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: w(t)
							});
						return o.a.createElement("div", {
							className: f.a.container
						}, o.a.createElement(y.a, {
							className: f.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				k = s("./src/reddit/components/Flair/index.tsx"),
				P = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				I = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				_ = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				T = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = s("./src/reddit/components/PostTopMeta/index.tsx"),
				N = s("./src/reddit/helpers/isRemoved.ts"),
				L = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				W = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				H = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				V = s("./src/reddit/icons/fonts/helpers.tsx"),
				U = s("./src/reddit/icons/fonts/Op/index.m.less"),
				K = s.n(U);
			var G = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(V.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(V.a, null, e.desc)), "OpIcon", K.a),
				Y = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				z = s("./src/reddit/icons/fonts/Report/index.tsx"),
				J = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				q = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				X = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Z = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ne = s.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const ae = p.a.wrapped(k.b, "RightPositionedAuthorFlair", ne.a),
				ie = p.a.wrapped(D.a, "AdminIcon", ne.a),
				de = p.a.wrapped(W.a, "Approve", ne.a),
				ce = p.a.wrapped(H.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(q.a, "Automoderator", ne.a),
				pe = p.a.wrapped(Q.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(X.a, "Moderator", ne.a),
				he = p.a.wrapped(Y.a, "Remove", ne.a),
				be = p.a.wrapped(z.a, "Report", ne.a),
				ge = p.a.wrapped(J.a, "Spam", ne.a),
				xe = p.a.wrapped(G, "Op", ne.a),
				Ce = p.a.wrapped(D.a, "Contractor", ne.a),
				ve = p.a.a("MetaLink", ne.a),
				Oe = p.a.wrapped(Z.a, "EditedText", ne.a),
				ye = p.a.wrapped(Z.a, "StickiedText", ne.a),
				Ee = p.a.span("DeletedText", ne.a),
				fe = p.a.wrapped(Z.a, "MetaSeparator", ne.a),
				we = p.a.wrapped(Z.a, "CrowdControlText", ne.a),
				je = p.a.wrapped(I.b, "AuthorHoverCard", ne.a),
				ke = p.a.a("RemovalReason", ne.a),
				Pe = p.a.wrapped(g.b, "Component", ne.a),
				Ie = Object(i.d)("comment.children"),
				_e = Object(i.d)("comment.moreThanChildren"),
				Te = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Se = Object(i.e)("comment.tooltips.admin"),
				Ne = Object(i.e)("comment.tooltips.cakeday"),
				Le = Object(i.e)("comment.tooltips.adminEmeritus"),
				Me = Object(i.e)("comment.tooltips.moderator"),
				Re = Object(i.e)("comment.tooltips.op"),
				Ae = Object(i.e)("comment.tooltips.contractor"),
				Be = Object(r.b)(() => Object(a.c)({
					adminTooltipId: Te("CommentTopMeta--Admin--"),
					cakedayTooltipId: Te("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Te("CommentTopMeta--AdEm--"),
					automodTooltipId: Te("CommentTopMeta--Automod--"),
					approveTooltipId: Te("CommentTopMeta--Approve--"),
					createdTooltipId: Te("CommentTopMeta--Created--"),
					contractorTooltipId: Te("CommentTopMeta--Contractor--"),
					gildedTooltipId: Te("CommentTopMeta--Gold--"),
					lockedTooltipId: Te("CommentTopMeta--Locked--"),
					modTooltipId: Te("CommentTopMeta--Mod--"),
					opTooltipId: Te("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: Te("CommentTopMeta--Remove--"),
					reportTooltipId: Te("CommentTopMeta--Report--"),
					spamTooltipId: Te("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(O.q)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.J)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: v.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(A.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(A.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(d.h)()),
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Be(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: a,
					children: i,
					className: d,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: g,
					compact: v,
					flair: O,
					flairPosition: y,
					hasBadges: E,
					isLivestreaming: f,
					ignoreFlairPosition: w,
					ignoreLock: j,
					language: I,
					lockedTooltipId: _,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: A,
					publicAwardersEnabled: D,
					removeTooltipId: W,
					renderContractorBadge: H,
					renderedInOverlay: V,
					reportTooltipId: U,
					spamTooltipId: K,
					subredditDisplayText: G,
					topTippersEnabled: Y
				} = e;
				if (u.isDeleted) return o.a.createElement(Fe, oe({}, e, {
					className: Object(c.a)(d, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(De, oe({}, e, {
					className: Object(c.a)(d, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				const z = !w && y === F.b.Left;
				return o.a.createElement("div", {
					className: Object(c.a)(d, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: E,
						[ne.a.liveStreaming]: f
					})
				}, O && z && o.a.createElement(k.b, {
					flair: O,
					forceSmallEmojis: v
				}), !Object(B.d)(u) && o.a.createElement(Pe, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(je, {
					postOrComment: u,
					tooltipType: V ? S.c.Lightbox : void 0
				}, o.a.createElement(x.b, {
					ignore: Object(B.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(He, {
					comment: u,
					isLivestreaming: f,
					isStrong: !!v,
					isAuthorDeleted: Object(B.d)(u),
					topTippersEnabled: Y
				}, i && i))), p && o.a.createElement(we, null, "Crowd Control"), p && o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), O && !z && o.a.createElement(ae, {
					flair: O,
					forceSmallEmojis: v
				}), !v && o.a.createElement(P.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(T.b, {
					commentId: u.id
				}), o.a.createElement(T.a, {
					commentId: u.id,
					commentsPageKey: h
				}), o.a.createElement(Ke, {
					comment: u,
					compact: v,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: I,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: H,
					subredditDisplayText: G
				})), !v && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(Z.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: I,
					score: u.score
				}), o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ve, oe({
					key: "Created"
				}, e)), u.isStickied && Ye(I), u.editedAt && We(I, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(Ge, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: j,
					language: I,
					lockedTooltipId: _,
					onHideTooltip: L,
					onShowTooltip: M,
					openRemovalReasonModal: A,
					removeTooltipId: W,
					reportTooltipId: U,
					spamTooltipId: K
				}), o.a.createElement(C.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(b.a, {
					showAwarders: D,
					tooltipType: V ? S.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Fe = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: n,
						className: r,
						comment: a
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(Ee, null, a.deletedBy === B.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), n && Ue({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: n,
						childrenInfo: r
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(He, {
						comment: t,
						isAuthorDeleted: Object(B.d)(t),
						topTippersEnabled: !1
					})), o.a.createElement(Z.b, {
						className: ne.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), o.a.createElement(Z.c, {
						className: ne.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), Ue({
						childrenInfo: r,
						language: s
					}))
				},
				We = (e, t) => o.a.createElement(n.Fragment, null, o.a.createElement(Z.c, {
					className: ne.a.metaText
				}), o.a.createElement(Oe, null, Object(i.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				He = e => {
					const t = o.a.createElement(h.a, {
						className: ne.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.B.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? o.a.createElement(j, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ve extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: n
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return o.a.createElement(ve, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, o.a.createElement("span", null, Object(u.d)(s, t.created)), ze(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ue = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return o.a.createElement(fe, {
					className: ne.a.metaText
				}, "(", t ? _e(e.language, s, {
					numChildren: s
				}) : Ie(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ke extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, t.isAuthorCakeday && o.a.createElement(pe, {
						"aria-label": Ne(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && ze(s.cakedayTooltipId, Ne(s.language)), t.isAdmin && o.a.createElement(ie, {
						desc: Se(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && ze(s.adminTooltipId, Se(s.language)), t.distinguishType === l.B.ALUMNI_ADMIN && o.a.createElement(le, {
						"aria-label": Le(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && ze(s.adminEmeritusTooltipId, Le(s.language)), t.isMod && o.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && ze(s.modTooltipId, Me(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && o.a.createElement(xe, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && ze(s.opTooltipId, Re(s.language)), s.renderContractorBadge && o.a.createElement(Ce, {
						desc: Ae(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && ze(s.contractorTooltipId, Ae(s.language)))
				}
			}
			class Ge extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(de, {
						desc: Object(L.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && ze(s.approveTooltipId, Object(L.a)(s.language, t)), Object(N.a)(t) && o.a.createElement(he, {
						desc: Object(L.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(N.a)(t) && ze(s.removeTooltipId, Object(L.c)(s.language, t)), Object(N.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(ke, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(N.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(ke, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(i.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && o.a.createElement(ce, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && o.a.createElement(ge, {
						desc: Object(L.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && ze(s.spamTooltipId, Object(L.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(c.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(L.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && ze(s.automodTooltipId, Object(L.b)(s.language)), Object(M.a)(t) && o.a.createElement(be, {
						desc: Object(L.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && ze(s.reportTooltipId, Object(L.d)(s.language, t.numReports)))
				}
			}
			const Ye = e => o.a.createElement(n.Fragment, null, o.a.createElement(Z.c, {
					className: ne.a.metaText
				}), o.a.createElement(ye, null, Object(i.a)(e, "comment.stickied"))),
				ze = (e, t) => o.a.createElement(_.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				isCollapsed: "BjX6VVsz_8JJDN1Ap9_IL",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				isAwarded: "_3x1wnLNRJ5UQU9fODNc2V4",
				isNightmodeOn: "_1XNv4WhzL_uEQ36cwbjMOe"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				v = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				O = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				E = s("./src/reddit/components/Comments/States/index.m.less"),
				f = s.n(E);
			const w = l.a.wrapped(O.a, "CommentsIcon", f.a),
				j = l.a.wrapped(y.a, "SnooFacepalm", f.a),
				k = l.a.p("EmptyTitle", f.a),
				P = l.a.p("ErrorTitle", f.a),
				I = l.a.p("EmptyText", f.a),
				_ = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(f.a.StateContainer, t)
					}, a.a.createElement(w, null), a.a.createElement(k, null, a.a.createElement(x.c, null, "no ", s ? "messages" : "comments", " yet")), a.a.createElement(I, null, a.a.createElement(x.c, null, "Be the first to share what you think!")))
				},
				T = () => a.a.createElement("div", {
					className: f.a.StateContainer
				}, a.a.createElement(w, null), a.a.createElement(k, null, a.a.createElement(x.c, null, "no other discussions yet")), a.a.createElement(I, null, a.a.createElement(x.c, null, "Be the first to post the same link or crosspost in another community!"))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: f.a.StateContainer
					}, a.a.createElement(w, null), a.a.createElement(k, null, a.a.createElement(x.c, null, "That comment is missing")), a.a.createElement(u.h, {
						to: Object(b.b)(t)
					}, a.a.createElement(x.c, null, "View all comments")))
				},
				N = Object(i.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.r)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						language: s,
						onClick: n
					} = e;
					return a.a.createElement("div", {
						className: f.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(P, null, t ? Object(h.a)({
						apiError: t,
						language: s,
						isLoggedOut: !1
					}) : Object(d.a)(s, "comment.error")), a.a.createElement(u.f, {
						onClick: n
					}, a.a.createElement(x.c, null, "retry")))
				}),
				L = () => a.a.createElement("div", null, "500"),
				M = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", f.a),
				R = l.a.div("CommentsPlaceholderContainer", f.a),
				A = l.a.div("CommentPlaceholder", f.a),
				B = l.a.div("VoteColumn", f.a),
				F = l.a.div("TextColumn", f.a),
				D = l.a.wrapped(v.a, "Upvote", f.a),
				W = l.a.wrapped(C.a, "Downvote", f.a),
				H = () => a.a.createElement("div", {
					className: Object(c.a)(f.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = () => a.a.createElement("div", {
					className: Object(c.a)(f.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = () => a.a.createElement(R, null, o()(10, e => a.a.createElement(A, {
					key: e
				}, a.a.createElement(B, null, a.a.createElement(D, null), a.a.createElement(W, null)), a.a.createElement(F, null, a.a.createElement(H, null), a.a.createElement(V, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui"
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~5a1c1fca"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = a.a.div("LoaderWrapper", c.a),
				m = a.a.div("Icon", c.a),
				p = a.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageAd/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				commentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				BannerAd: "_3-iuIC1F_FWNnxkCPyySXD",
				bannerAd: "_3-iuIC1F_FWNnxkCPyySXD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				communityTipJar: "_3Rb_UoC2j8wE4ckG7Yqy2K",
				communityTokens: "LRXVBnaKV0QUa_v8PZe5Q",
				leaderboard: "_2Bw_-Pd7_PSh46KT8HivGh",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/index.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/reddit/components/M2M/SidebarPostFeed/index.tsx"),
				C = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarFooter/index.tsx"),
				O = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				E = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				f = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				w = s("./src/reddit/featureFlags/component.tsx"),
				j = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				I = s("./src/reddit/selectors/experiments/postSeo.ts"),
				_ = s("./src/reddit/selectors/monthsToMinutes.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				L = s.n(N);
			const M = Object(w.a)("spPoints", h.a),
				R = Object(w.a)("spLeaderboard", b.a),
				A = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				B = Object(c.c)({
					isLoggedIn: S.K,
					m2mHomeRedirectVariant: P.f,
					postSEOV2IdCardVariant: I.i,
					shouldShowHomeUpsell: _.z,
					widgets: Object(p.a)(T.u)
				}),
				F = Object(d.b)(B);
			class D extends i.a.Component {
				constructor(e) {
					super(e), this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.state = {
						isMounted: !1,
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets)
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: o,
						postSEOV2IdCardVariant: r
					} = this.props, a = !Object(I.a)(r) && !Object(I.e)(r);
					return s ? i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, {
						postId: o.id,
						isOverlay: s,
						listingName: n,
						placement: m.c.BELOW_THE_FOLD,
						placementIndex: e,
						position: j.a.BOTTOM,
						refreshKey: o.id,
						sizes: m.m,
						commentsPageKey: t
					}), i.a.createElement(v.a, null)) : i.a.createElement(y.a, {
						adComponent: a ? i.a.createElement(C.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: j.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.m,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: n,
						m2mHomeRedirectVariant: o,
						post: r,
						postSEOV2IdCardVariant: a,
						subredditId: d,
						subredditName: c,
						widgets: p
					} = this.props;
					let h = 0;
					const b = Object(I.a)(a) || Object(I.e)(a),
						v = Object(k.l)(r) && Object(P.e)(o),
						y = this.isHomeUpsellVisible(),
						w = i.a.createElement(C.a, {
							postId: r.id,
							redditStyle: y,
							isOverlay: n,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: j.a.FIRST,
							refreshKey: r.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return i.a.createElement("div", {
						className: Object(l.a)(L.a.outerWrapper, e)
					}, Object(k.j)(r) ? i.a.createElement(A, {
						profileName: c,
						isOverlay: n || !1
					}) : i.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: c,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: b
					}), v && i.a.createElement(O.a, null, i.a.createElement(x.a, {
						"data-redditstyle": y,
						isOverlay: n,
						subredditName: c
					}, i.a.createElement("div", {
						className: L.a.inFeedAd
					}, w))), i.a.createElement(u.a, {
						className: L.a.communityTipJar,
						subredditId: d
					}), i.a.createElement(M, {
						className: L.a.communityTokens,
						subredditId: d,
						uniqueId: r.id
					}), i.a.createElement(R, {
						className: L.a.leaderboard,
						subredditId: d,
						uniqueId: r.id
					}), !v && w, s && p.map((e, t) => i.a.createElement(O.a, {
						key: "widgetSpacer".concat(t)
					}, i.a.createElement(f.a, {
						subredditName: c,
						widget: e
					}))), r.isSponsored && i.a.createElement(O.a, null, i.a.createElement(E.a, null)), this.renderFooter(h++))
				}
			}
			t.a = F(D)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/featureFlags/component.tsx"),
				d = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				c = s.n(d);
			const l = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(t, c.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts");
			const a = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => o.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && a.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(i);
			t.a = a.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less": function(e, t, s) {
			e.exports = {
				publicAddressSection: "e0Te0bBkUsDG6nuCjsFky",
				publicAddress: "_3GWjMTgC3OErgLOUT3TdHw",
				yourWalletAddress: "_2ZVoGra9kSZDSEzU8EoxXp",
				settingsButton: "g2yJ86Mg6P4M5NIoQA0Ve",
				settingsIcon: "_1ZIhSQEemVyqYNEOTZVZGv"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_281dcYAIoQvZtLs7iI7QLT",
				risk: "_1r7M4su-D_hCOMd066XY3J",
				riskBody: "_12gDkO_ygs4ikCeyu5bcVg",
				riskTitle: "_3iYb38SYPwjAd1VG859AKs"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less": function(e, t, s) {
			e.exports = {
				overflowingText: "_3s4m8dsZEYcHZ4ojNFUV0R",
				cell: "_1-v1Zgj9IOmc-oaS_dfHfI",
				cellBottomLine: "_1YrPtUZyIgZmt7BoC3IOjC",
				cellContainer: "_3y3jYnCjkWtjpibBnc9e3l",
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
				button: "_1Vg1f_Cp7IF32wBdY1l2Gq"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WnHen22bLKwTkOL3W6F_D",
				link: "_3LjXe6j5_bQ3U8GZLY0HYO",
				showAll: "eRbX9WCebKIuLXdJIwNjK",
				title: "_3il8HJMlHzKppQleJjuboQ"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, s) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, s) {
			"use strict";
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/selectors/gov.ts"),
				m = s("./src/app/strings/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/reddit/actions/governance/index.ts"),
				b = s("./src/reddit/actions/login.ts"),
				g = s("./src/reddit/components/Governance/Token/index.tsx"),
				x = s("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/endpoints/governance/crypto.ts"),
				y = s("./src/reddit/helpers/governance/tokens.ts"),
				E = s("./src/reddit/i18n/components.tsx");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(n || (n = {}));
			var f = s("./src/reddit/selectors/user.ts"),
				w = s("./src/higherOrderComponents/asTooltip.tsx"),
				j = s("./src/lib/copyToClipboard/index.ts"),
				k = s("./src/reddit/actions/governance/errorToast.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				I = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/contexts/ApiContext.tsx"),
				T = s("./src/reddit/controls/Dropdown/index.tsx"),
				S = s("./src/reddit/controls/Dropdown/Row.tsx"),
				N = s("./src/reddit/helpers/governance/ethereum.ts"),
				L = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				M = s("./src/reddit/models/Toast/index.ts"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				A = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				B = s.n(A);
			const F = Object(w.a)(T.a),
				D = "BlockchainWalletInfo--SettingsMenu";
			class W extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(j.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(O.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: s,
						publicAddress: n,
						token: o,
						tokenName: a
					} = this.props;
					if (!n) return null;
					const i = s === O.a.Ethereum || s === O.a.Rinkeby,
						d = s === O.a.Stellar;
					return r.a.createElement("div", {
						className: B.a.publicAddressSection
					}, r.a.createElement("div", {
						className: B.a.publicAddress,
						title: n
					}, function(e, t) {
						switch (t) {
							case O.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(n, s)), r.a.createElement("div", {
						className: B.a.yourWalletAddress
					}, r.a.createElement(E.c, null, "Your Wallet Address"), (i || d) && r.a.createElement("button", {
						className: B.a.settingsButton,
						title: Object(c.c)("Wallet address settings"),
						role: "menu",
						onClick: t,
						id: D
					}, r.a.createElement(L.a, {
						className: B.a.settingsIcon
					})), i && r.a.createElement(F, {
						tooltipId: D,
						isOpen: e,
						renderContentsHidden: !0
					}, r.a.createElement(S.b, {
						displayText: Object(c.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}), s && r.a.createElement(S.b, {
						displayText: Object(c.c)("Remove My Wallet"),
						onClick: this.onRemoveMyWallet
					}), o && r.a.createElement(S.b, {
						displayText: Object(c.c)("Track ".concat(Object(c.b)("tokenName", a), " in MetaMask")),
						onClick: () => Object(N.i)(o)
					})), d && r.a.createElement(F, {
						tooltipId: D,
						isOpen: e,
						renderContentsHidden: !0
					}, r.a.createElement(S.b, {
						displayText: Object(c.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(i.c)({
					dropdownIsOpen: Object(R.b)(D),
					provider: l.a,
					token: l.q,
					tokenName: l.o
				}),
				V = Object(a.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(k.a)(e, t)
					},
					onOpenDropdown: () => e(Object(I.g)({
						tooltipId: D
					})),
					onWalletRemoved: () => {
						e(Object(h.j)({
							subredditId: t.subredditId
						})), e(Object(P.e)({
							kind: M.b.SuccessCommunityGreen,
							text: Object(c.c)("Wallet removed successfully!")
						}))
					}
				}));
			var U = Object(_.b)(V(W)),
				K = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				G = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				Y = s.n(G);

			function z(e) {
				return r.a.createElement("div", {
					className: Y.a.risk
				}, r.a.createElement("div", {
					className: Y.a.riskTitle
				}, r.a.createElement(K.a, {
					className: Y.a.alertIcon
				}), e.title), r.a.createElement("div", {
					className: Y.a.riskBody
				}, e.body))
			}
			var J = s("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				q = s.n(J);
			class Q extends r.a.PureComponent {
				componentDidMount() {
					const {
						pageLayer: e,
						provider: t,
						wallet: s
					} = this.props, n = s && s.publicAddress;
					Object(x.b)(e) && t && !n && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						className: e,
						distribution: t,
						isLoggedIn: s,
						language: o,
						onOpenLoginModal: a,
						onOpenRegistrationModal: i,
						onOpenTransferModal: d,
						provider: c,
						subredditId: l,
						tokenDisplayConversion: h,
						tokenName: b,
						useCrypto: x,
						wallet: C
					} = this.props, f = C && C.inactive && function(e, t, s) {
						const o = e.actionScheduledAt - Date.now(),
							r = Math.max(1, Math.floor(o / p.w)),
							a = 1 !== r ? "gov.pointsDecay.inactive.time.plural" : "gov.pointsDecay.inactive.time.singular",
							i = Object(m.a)(t, a, {
								numDays: r
							});
						switch (e.reason) {
							case n.Initial:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.inactive.title", {
										tokenName: s
									}), body: Object(m.a)(t, "gov.pointsDecay.inactive.body", {
										time: i,
										tokenName: s
									})
								};
							case n.Mod:
								return {
									title: Object(m.a)(t, "gov.pointsDecay.election.title"), body: Object(m.a)(t, "gov.pointsDecay.election.body", {
										time: i,
										tokenName: s
									})
								}
						}
					}(C.inactive, o, b), w = C && C.publicAddress, j = c === O.a.Ethereum || c === O.a.Rinkeby;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement("div", {
						className: q.a.title
					}, b), r.a.createElement("div", {
						className: q.a.cellContainer
					}, C && X(r.a.createElement("div", {
						className: q.a.tokenCell
					}, r.a.createElement(g.a, {
						className: q.a.token,
						subredditId: l
					}), Object(u.a)(Object(y.b)(C.amount, h))), Object(m.a)(o, "sidebar.gov.yourTokens", {
						tokenName: b
					})), t && X(Object(u.a)(Object(y.b)(t.totalAvailable, h)), Object(m.a)(o, "sidebar.gov.tokensIssued"))), f && r.a.createElement(z, {
						body: f.body,
						title: f.title
					}), r.a.createElement("div", {
						className: q.a.explanation
					}, Object(m.a)(o, "sidebar.gov.tokenExplanation", {
						tokenName: b
					})), c && r.a.createElement(U, {
						publicAddress: w,
						subredditId: l
					}), c && !w && j && r.a.createElement(v.f, {
						className: q.a.button,
						onClick: s ? i : a
					}, r.a.createElement(E.c, null, "register")), C && !x && r.a.createElement(v.i, {
						className: q.a.button,
						onClick: d
					}, r.a.createElement(E.c, null, "send")))
				}
			}

			function X(e, t) {
				return r.a.createElement("div", {
					className: q.a.cell
				}, r.a.createElement("div", {
					className: q.a.cellTopLine
				}, e), r.a.createElement("div", {
					className: q.a.cellBottomLine
				}, t))
			}
			const Z = Object(i.c)({
				isLoggedIn: f.K,
				provider: l.a,
				tokenName: l.o,
				tokenDisplayConversion: l.n,
				language: e => e.user.language,
				useCrypto: l.r
			});
			var $ = Object(a.b)(Z, e => ({
					onOpenLoginModal: () => e(Object(b.e)()),
					onOpenRegistrationModal: () => e(Object(h.i)()),
					onOpenTransferModal: () => e(Object(h.h)())
				}))(Object(C.t)()(Q)),
				ee = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				te = s("./src/lib/classNames/index.ts"),
				se = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				ne = s("./src/reddit/actions/subreddit.ts"),
				oe = s("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				re = s.n(oe);
			const ae = Object(i.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var ie = Object(C.t)()(Object(a.b)(ae, (e, t) => ({
					onFilterProposals: () => e(Object(ne.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(C.F)(e.pageLayer) && e.proposals.length ? r.a.createElement("div", {
						className: Object(te.a)(e.className, re.a.container)
					}, r.a.createElement("div", {
						className: re.a.title
					}, r.a.createElement(E.c, null, "Latest Polls")), e.proposals.map(e => r.a.createElement(ee.a, {
						className: re.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(se.a)(e.permalink)
					}, e.title)), r.a.createElement("a", {
						className: re.a.showAll,
						onClick: e.onFilterProposals
					}, r.a.createElement(E.c, null, "show all"))) : null
				}))),
				de = s("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				ce = s.n(de);
			const le = Object(i.c)({
				tokenName: l.o,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: l.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.a = Object(a.b)(le)((function(e) {
				return r.a.createElement(d.a, {
					className: e.className,
					title: Object(c.c)("Subreddit Points")
				}, e.distribution ? r.a.createElement(o.Fragment, null, r.a.createElement($, {
					className: ce.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && r.a.createElement(ie, {
					className: ce.a.section,
					subredditId: e.subreddit.id
				})) : r.a.createElement("div", {
					className: ce.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/lib/addQueryParams/index.ts");
			const o = "metamaskInstalled";

			function r() {
				window.location.replace(Object(n.a)(window.location.href, {
					[o]: "true"
				}))
			}

			function a(e) {
				return !!(e && e.queryParams && e.queryParams[o])
			}
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				p = s("./src/reddit/models/Theme/index.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = s("./src/reddit/components/HeaderImage/index.m.less"),
				b = s.n(h);
			const g = d.a.wrapped(m.a, "Planet", b.a),
				x = d.a.div("SubredditIcon", b.a),
				C = d.a.div("PositionedImage", b.a),
				v = d.a.div("HeaderContent", b.a),
				O = d.a.div("HeaderContainer", b.a),
				y = d.a.span("HeaderText", b.a),
				E = d.a.wrapped(r.a, "HeaderUrl", b.a),
				f = d.a.span("Container", b.a),
				w = Object(i.a)(e => {
					const t = Object(p.e)(e.headerText, e.prefixedHeaderText, Object(u.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(u.a)(e).banner.positionedImageAlignment,
						r = Object(u.a)(e).banner.positionedImage,
						i = Object(u.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const m = !!r && !!i && "left" === n,
						h = Object(p.g)(Object(u.a)(e).banner.backgroundColor, Object(u.a)(e).banner.backgroundImage, Object(u.a)(e).banner.backgroundImagePosition),
						w = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						j = "".concat(4 + w, "px");
					return o.a.createElement(f, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: "".concat(Object(u.a)(e).banner.height, "px")
						}
					}, o.a.createElement(E, {
						className: e.className,
						to: e.url
					}, o.a.createElement(O, {
						className: Object(a.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(u.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && o.a.createElement(v, {
						className: Object(a.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (s ? o.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					}) : o.a.createElement(g, {
						style: {
							padding: "".concat(Object(u.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					})), o.a.createElement(y, {
						style: {
							paddingTop: 32 === w ? "4px" : "14px"
						}
					}, t)), o.a.createElement(C, {
						className: Object(a.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!r,
							[b.a.hoverPositionedImage]: !!r && !!i
						}),
						style: Object.assign({}, d, {
							height: "".concat(Object(u.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = w
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				a = s.n(r);
			const i = n.a.wrapped(o.a, "UserActionItem", a.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: r
					} = e;
					let a = o;
					return s && (a = "".concat(a, "--").concat(s)), r && (a = "".concat(a, "--").concat(r)), t && (a = "".concat(a, "--").concat(t)), n && (a = "".concat(a, "--").concat(n)), a
				}
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
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(a),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", i.a),
				l = d.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: a,
					title: d
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(c, null, n) : o.a.createElement(c, null), o.a.createElement(l, null, o.a.createElement("div", {
					className: i.a.title
				}, d), a && o.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				C = s.n(x);
			const v = o.a.createElement(u.a, {
					className: C.a.icon
				}),
				O = Object(a.c)({
					language: b.T,
					subreddit: h.B,
					subredditAboutInfo: h.y
				}),
				y = Object(r.b)(O);
			t.a = y(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = s && s.quarantineMessageHtml,
					a = s && s.quarantineMessage || Object(i.a)(n, "contentGate.quarantinedSubreddit.quarantineMsg");
				return o.a.createElement(g.a, {
					className: C.a.container,
					color: c.a.quarantine,
					icon: v,
					subtitle: o.a.createElement("span", null, o.a.createElement(m.c, null, "This community is"), " ", o.a.createElement("a", {
						className: C.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.a.createElement(m.c, null, "quarantined")), ": ", r ? o.a.createElement(d.a, {
						className: C.a.rawHtmlDisplay,
						html: r
					}) : a, " ", o.a.createElement(l.a, {
						className: C.a.link,
						to: "/"
					}, o.a.createElement(m.c, null, "Click to return home."))),
					title: Object(p.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				},
				l = e => {
					const {
						children: t,
						className: s,
						to: n
					} = e, r = c(e, ["children", "className", "to"]), l = Object(i.b)(n);
					return o.a.createElement(a.a, d({
						className: s,
						to: l
					}, r), t)
				};

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				const {
					isOverlay: t
				} = e, s = p(e, ["isOverlay"]), n = t ? l : r.a;
				return o.a.createElement(n, m({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/M2M/HomeUpsellBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2G5of74buLKKF1dS4x6IoA",
				border: "_2YO0TITW9xRlNDao69MsiU",
				line: "_4bOmNzC1_4BRrPDxBbnAN",
				layout: "_3UIdLVrftJ71FXSaPhJyVS",
				image: "_3M1pfamWS8Lw2VXrgbavha",
				snoo: "_2sb-teu23AhOMfNAKC3qoa",
				text: "_2roBErbdJWIJXvS6s4p-yP",
				homeTitle: "_1IEpq4IWE2e9TLSs2mnm5V",
				homeDescription: "_2uW5PN5bw5INtwsywZCpVb",
				seeMore: "_9HPppEn9FG4g69hhXI0-U"
			}
		},
		"./src/reddit/components/M2M/HomeUpsellBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/M2M/HomeUpsellBanner/index.m.less"),
				l = s.n(c);
			const m = "".concat(n.a.assetPath, "/img/snoomoji/snoo.png");
			t.a = e => {
				const {
					borderClassName: t,
					className: s,
					isCompact: n,
					onSeeMoreClick: o
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(l.a.container, s),
					"data-redditstyle": !0
				}, r.a.createElement("div", {
					className: Object(a.a)(l.a.border, t)
				}), !n && r.a.createElement("div", {
					className: l.a.line
				}), r.a.createElement("div", {
					className: l.a.layout
				}, !n && r.a.createElement("div", {
					className: l.a.image
				}, r.a.createElement("img", {
					className: l.a.snoo,
					src: m
				})), r.a.createElement("div", {
					className: l.a.text
				}, r.a.createElement("div", {
					className: l.a.homeTitle
				}, r.a.createElement(d.c, null, "Recommended posts for you")), r.a.createElement("div", {
					className: l.a.homeDescription
				}, r.a.createElement(d.c, null, "Based on other posts you've viewed"))), !n && r.a.createElement(i.f, {
					className: l.a.seeMore,
					"data-redditstyle": !0,
					onClick: o
				}, r.a.createElement(d.c, null, "See more"))))
			}
		},
		"./src/reddit/components/M2M/SidebarPostFeed/index.m.less": function(e, t, s) {
			e.exports = {
				subredditTitle: "SyzlGcMiQQXEyjzU1jbX0",
				subredditLink: "_2e7tdHMEHAQEPE6vBnwScn",
				footer: "_1UmEMTtjhg9-uGRTGr_4Vt"
			}
		},
		"./src/reddit/components/M2M/SidebarPostFeed/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				l = s("./src/reddit/components/M2M/HomeUpsellBanner/index.tsx"),
				m = s("./src/reddit/components/RecommendedPostList/Footer/index.tsx"),
				p = s("./src/reddit/components/SidebarPostList/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/helpers/name/index.ts"),
				x = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/selectors/monthsToMinutes.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/M2M/SidebarPostFeed/index.m.less"),
				f = s.n(E);
			const w = Object(a.a)((e, t) => t.subredditName, v.z, v.e, (e, t, s) => t ? Object(d.a)(s, i.N.HOT) : Object(d.a)(e, i.N.TOP)),
				j = Object(a.c)({
					discoveryUnit: v.x,
					listingKey: w,
					m2mDataLoaded: v.d,
					m2mHomeMultiName: v.e,
					posts: (e, t) => {
						const s = w(e, t);
						return Object(O.O)(e, {
							listingKey: s
						})
					},
					shouldShowHomeUpsell: v.z,
					subreddit: y.B
				}),
				k = Object(r.b)(j, e => ({
					goToHomeFeed: () => e(Object(c.b)({
						shouldPrepareData: !1
					}))
				}));
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(x.g)(e, t))
					}, this.trackTitleSubredditClicked = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(x.H)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(x.w)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(x.B)(t, e, void 0, s))
					}, this.trackFooterClicked = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(x.t)(e, t))
					}, this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.onFooterClick = e => {
						const {
							goToHomeFeed: t
						} = this.props;
						this.isHomeUpsellVisible() && (e.preventDefault(), t()), this.trackFooterClicked()
					}, this.state = {
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						m2mDataLoaded: n,
						m2mHomeMultiName: r,
						posts: a,
						subreddit: i,
						subredditName: d
					} = this.props;
					if (!n || !i || 0 === a.length) return null;
					const c = this.isHomeUpsellVisible(),
						u = Object(g.b)(i && (i.displayText || i.name) || d),
						x = c ? r : d;
					return o.a.createElement(h.a, {
						className: t,
						contentOnly: !0,
						redditStyle: c
					}, c ? o.a.createElement(l.a, {
						isCompact: !0
					}) : o.a.createElement("div", {
						className: f.a.subredditTitle
					}, o.a.createElement(C.c, null, "Top posts in "), o.a.createElement(b.a, {
						className: f.a.subredditLink,
						onMouseDown: this.trackTitleSubredditClicked,
						to: i.url
					}, u)), o.a.createElement(p.a, {
						className: f.a.posts,
						listingKey: s,
						listingName: x || "",
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed
					}, o.a.createElement("div", {
						className: f.a.ad
					}, e)), o.a.createElement(m.a, {
						className: f.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: !0,
						shouldNavigateToHome: c,
						subredditOrProfile: i
					}))
				}
			}
			t.a = k(Object(u.b)(P))
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
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					language: m,
					post: p,
					subredditOrProfile: b
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, o.a.createElement(c.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, o.a.createElement(d.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: b
				}), o.a.createElement("span", null, b.displayText)), ((e, t, s) => {
					if (s) return o.a.createElement("div", {
						role: "img",
						"aria-label": Object(r.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, o.a.createElement(h, null))
				})(m, p.author, s), b && b.isQuarantined && o.a.createElement(i.a, null))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, o.a.createElement(a.a, {
					className: Object(r.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: d.a.thumbnailLinkText,
					outboundLinkIconClassName: d.a.thumbnailOutboundLinkIcon,
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/Media/index.tsx"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				C = s("./src/reddit/components/PostTitle/index.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/postFlair.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/CommentsLink/index.tsx"),
				S = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				N = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/ShareMenu/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/trackers/post.ts"),
				W = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Share/index.tsx"),
				V = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				K = s.n(U),
				G = s("./src/lib/lessComponent.tsx");
			const Y = "-MiniCardModMenu",
				z = "-MiniCardOverflowMenu",
				J = "-MiniCardShareMenu",
				q = G.a.wrapped(S.a, "HorizontalVotes", K.a),
				Q = G.a.button("ShareButton", K.a),
				X = Object(v.t)({
					currentProfileName: v.h,
					isCommentPermalink: v.v,
					isCommentsPage: v.w,
					isProfilePostListing: v.I,
					pageLayer: e => e
				}),
				Z = Object(a.c)({
					layout: v.M,
					subreddit: v.q
				});
			var $ = X(Object(r.b)(Z, {})(Object(B.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: a,
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						language: h,
						layout: b,
						modModeEnabled: g,
						onCommentsClick: x,
						post: C,
						sendEvent: v,
						showEditFlair: O,
						showEditPost: y,
						subreddit: E
					} = e, f = e => v(Object(D.f)(C.id, e)), w = C.postId, j = Object(N.d)(Y, C.id, m, u), k = !!n && Object(V.f)(n) === C.author;
					return o.a.createElement("div", {
						className: Object(i.a)(K.a.flatlistContainer, s)
					}, o.a.createElement(q, {
						compact: !1,
						model: C,
						onVoteClick: r,
						scoreClassName: K.a.score
					}), o.a.createElement(T.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: C.id,
						modModeEnabled: g,
						numComments: C.numComments,
						type: F.g.Compact,
						onClick: x
					}), o.a.createElement(A.a, {
						className: K.a.shareMenu,
						dropdownId: Object(N.d)(J, C.id, m, u),
						permalink: C.permalink,
						post: C,
						sendEventWithName: f,
						subreddit: E
					}, o.a.createElement(Q, null, o.a.createElement(H.a, {
						className: K.a.shareIcon
					}), o.a.createElement("span", {
						className: K.a.shareText
					}, o.a.createElement(W.c, null, "share")))), d && o.a.createElement(L.a, {
						dropdownId: j,
						onClick: () => f("post_mod_action_menu")
					}, o.a.createElement(N.b, {
						className: K.a.modActionsIcon
					}), o.a.createElement(M.a, {
						canEditFlair: a && !!O,
						hasModPostPerms: d,
						isOverlay: !!m,
						isPostAuthor: k,
						language: h,
						modModeEnabled: g,
						post: C,
						tooltipId: j
					})), o.a.createElement(R.g, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: C.permalink,
						postId: w,
						dropdownId: Object(N.d)(z, C.id, m, u),
						isFixed: u,
						sendEvent: v,
						showEditPost: !!y,
						showEditFlair: !!O,
						useFlatlistBreakpoints: Object(R.h)({
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
				oe = s("./src/reddit/components/MiniCardPost/index.m.less"),
				re = s.n(oe);
			s.d(t, "a", (function() {
				return ie
			}));
			const ae = Object(v.t)(),
				ie = Object(r.b)(() => Object(a.c)({
					activeModalId: j.a,
					autoplayPref: _.b,
					crosspostRoot: I.c,
					crosspostSubredditOrProfile: I.d,
					currentUser: _.i,
					flairStyleTemplate: v.Q,
					hideNSFWPref: _.z,
					isActive: I.g,
					language: _.T,
					moderatorPermissions: k.i,
					modModeEnabled: v.O,
					post: I.I,
					showEditFlair: P.a,
					subredditOrProfile: I.U,
					userIsOp: _.kb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							}))
						},
						handleVote: t => {
							const n = t === w.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
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
							selectedTemplateId: o
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: o
						})
					}
				}));
			t.b = ae(ie(Object(d.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: r,
					crosspostSubredditOrProfile: a,
					currentUser: d,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: v,
					language: w,
					moderatorPermissions: j,
					modModeEnabled: k,
					onClickPost: P,
					post: I,
					scrollerItemRef: _,
					shouldPause: T,
					showMetaLine: S = !0,
					showEditFlair: N,
					subredditOrProfile: L,
					userIsOp: M
				} = e, {
					media: R
				} = r || I, A = R && R.type, B = Object(x.b)(I.id), F = A === f.n.RTJSON, D = M && F, W = Object(y.a)(j), H = Object(O.a)(j), V = R && A !== f.n.RTJSON && A !== f.n.TEXT, U = !R && !!I.source && Object(c.a)(I.source.url), K = R && o.a.createElement(h.a, {
					autoplayPref: t,
					availableWidth: s,
					className: re.a.media,
					imageBoxClassName: re.a.mediaImageBox,
					imageBoxContentImageClassName: re.a.mediaImageBoxContentImage,
					forceAspectRatio: f.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: r || I,
					scrollerItemRef: _,
					shouldPause: T,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return o.a.createElement(g.a, {
					className: Object(i.a)(re.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(E.a)(e), n),
					style: Object.assign({}, Object(E.b)(e.flairStyleTemplate), Object(E.d)(e)),
					post: I,
					onClick: P,
					eventFactory: l
				}, o.a.createElement(b.a, {
					className: re.a.backgroundWrapper,
					flairStyleTemplate: m
				}, V && K, o.a.createElement("div", {
					className: re.a.innerContainer
				}, U && o.a.createElement(te.a, {
					post: I,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), o.a.createElement(C.c, {
					className: re.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: I,
					size: C.b.Large,
					titleColor: m && m.postTitleColor
				}), S && L && o.a.createElement(ee.a, {
					className: re.a.metaLine,
					crosspostSubredditOrProfile: a,
					hideNSFWPref: v,
					language: w,
					post: I,
					subredditOrProfile: L
				}), !V && o.a.createElement("div", {
					className: re.a.mediaWrapper
				}, K), o.a.createElement("div", {
					className: re.a.flexSpacer
				}), o.a.createElement($, {
					currentUser: d,
					handleVote: e.handleVote,
					hasModFlairPerms: H,
					hasModPostPerms: W,
					language: w,
					modModeEnabled: k,
					post: I,
					showEditFlair: N,
					showEditPost: D
				}))), e.activeModalId === B && o.a.createElement(x.a, {
					flairs: I.flair,
					subredditId: I.belongsTo.id,
					modalId: B,
					onFlairChanged: e.onFlairChanged
				}), o.a.createElement(u.d, {
					postId: I.id
				}))
			})))
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				noProposal: "_13LHQz0igp-olmn_mDhJ7B",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				ProposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				proposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				isEditing: "_1_-TcT_H2BAsf4uFtfvDf9",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				p = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				h = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				O = s("./node_modules/lodash/find.js"),
				y = s.n(O),
				E = s("./node_modules/react-motion/lib/react-motion.js");
			const f = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				w = "expando_content",
				j = {},
				k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = y()(e, {
							key: w
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: w,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: w,
						style: {
							opacity: Object(E.spring)(1, f)
						}
					}] : [{
						key: w,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: w,
						style: {
							opacity: Object(E.spring)(0, f)
						}
					}]
				};
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), j), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: n
					} = this.props;
					return o.a.createElement(E.TransitionMotion, {
						styles: e => k(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => o.a.createElement("div", {
						className: s
					}, e.map(e => o.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var I = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				N = s("./src/reddit/selectors/experiments/categories.ts"),
				L = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/selectors/postCreations.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				F = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				D = s("./src/reddit/components/ExpandoButton/index.tsx"),
				W = s("./src/reddit/components/FlairWrapper/index.tsx"),
				H = s("./src/reddit/components/Flatlist/index.tsx"),
				V = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				U = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Y = s("./src/reddit/components/ModModeReports/index.tsx"),
				z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/higherOrderComponents/makeAsync.tsx"),
				Q = s("./src/lib/loadWithRetries/index.ts"),
				X = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const Z = Object(q.a)({
				ErrorComponent: () => o.a.createElement(X.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(Q.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => o.a.createElement(X.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var $ = e => o.a.createElement(Z, e),
				ee = s("./src/reddit/components/PostMedia/index.tsx"),
				te = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				se = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ne = s("./src/reddit/components/PostTitle/index.tsx"),
				oe = s("./src/reddit/components/PostTopLine/index.tsx"),
				re = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ae = s("./src/reddit/components/SourceLink/index.tsx"),
				ie = s("./src/reddit/constants/componentTestIds.ts"),
				de = s("./src/reddit/constants/postLayout.ts"),
				ce = s("./src/reddit/contexts/PageLayer/index.tsx"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				pe = s("./src/reddit/selectors/postFlair.ts"),
				ue = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				he = s("./src/reddit/constants/colors.ts"),
				be = s("./src/config.ts"),
				ge = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				xe = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
					id: "path-1"
				}))),
				Ce = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ve = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Oe = s.n(ve);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = () => ye._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy}.", [ye._param("=User Agreement", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, ye._("User Agreement", null, {
				hk: "2cojEr"
			}))), ye._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, ye._("Content Policy", null, {
				hk: "1owvRc"
			})))], {
				hk: "3LJ7At"
			}), fe = () => ye._("This content was removed for a violation of Reddit's {=Content Policy}.", [ye._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, ye._("Content Policy", null, {
				hk: "1fd4W1"
			})))], {
				hk: "3KOOQU"
			});
			var we = e => {
					const {
						hasPerms: t,
						removedBy: s,
						removedByCategory: n,
						subredditName: r
					} = e, a = t ? ((e, t, s) => {
						switch (e) {
							case _.g.AntiEvilOps:
								return ye._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "3a8CyR"
								});
							case _.g.Author:
								return ye._("This post was removed by the person who originally posted it.", null, {
									hk: "2lyUgL"
								});
							case _.g.AuthorDeleted:
								return ye._("This post was deleted by the person who originally posted it.", null, {
									hk: "16LeiH"
								});
							case _.g.AutomodFiltered:
								return ye._("This post was reported by automod, and is waiting for your review.", null, {
									hk: "2E46dR"
								});
							case _.g.CommunityOps:
								return ye._("This post was removed by Reddit admin, u/{username}.", [ye._param("username", t)], {
									hk: "34nHWu"
								});
							case _.g.ContentTakedown:
								return ye._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "1wmhiC"
								});
							case _.g.CopyrightTakedown:
								return ye._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "Ukfj"
								});
							case _.g.Moderator:
								return ye._("This post was removed by r/{subredditName} moderator, u/{username}.", [ye._param("subredditName", s), ye._param("username", t)], {
									hk: "270bcn"
								});
							case _.g.Reddit:
								return ye._("This post was removed by Reddit's spam filters.", null, {
									hk: "1k3lsh"
								});
							default:
								return ye._("This post was removed by Reddit's spam filters.", null, {
									hk: "3oxS8r"
								})
						}
					})(n, s, r) : ((e, t) => {
						switch (e) {
							case _.g.AntiEvilOps:
								return ye._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "2ZqyRT"
								});
							case _.g.Author:
								return ye._("Sorry, this post was removed by the person who originally posted it.", null, {
									hk: "4IRCN"
								});
							case _.g.AuthorDeleted:
								return ye._("Sorry, this post was deleted by the person who originally posted it.", null, {
									hk: "4emmIp"
								});
							case _.g.AutomodFiltered:
								return ye._("Post is awaiting moderator approval.", null, {
									hk: "wdGOr"
								});
							case _.g.CommunityOps:
								return ye._("Sorry, this post was removed by Reddit's Community team.", null, {
									hk: "3fs5lF"
								});
							case _.g.ContentTakedown:
								return ye._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "jiKO8"
								});
							case _.g.CopyrightTakedown:
								return ye._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "1TbEDT"
								});
							case _.g.Moderator:
								return ye._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [ye._param("subredditName", t)], {
									hk: "12NWKq"
								});
							case _.g.Reddit:
								return ye._("Sorry, this post was removed by Reddit's spam filters.", null, {
									hk: "10ItEu"
								});
							default:
								return ye._("Sorry, this post has been removed", null, {
									hk: "11sG9V"
								})
						}
					})(n, r), i = t ? (e => {
						switch (e) {
							case _.g.AntiEvilOps:
								return o.a.createElement(Ee, null);
							case _.g.AuthorDeleted:
							case _.g.Author:
								return ye._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
									hk: "2KZLgT"
								});
							case _.g.AutomodFiltered:
								return ye._("It won’t show up in your community feed until you or another moderator approve it.", null, {
									hk: "2X5ECb"
								});
							case _.g.CommunityOps:
								return ye._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask}.", [ye._param("=just ask", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(be.a.redditUrl, "/message/compose/?to=r/reddit.com"),
									target: "_blank"
								}, ye._("just ask", null, {
									hk: "2tChW8"
								})))], {
									hk: "1gNycd"
								});
							case _.g.ContentTakedown:
								return o.a.createElement(fe, null);
							case _.g.CopyrightTakedown:
								return ye._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "7jiV"
								});
							case _.g.Moderator:
								return ye._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
									hk: "22qJOB"
								});
							case _.g.Reddit:
								return ye._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3S3oDL"
								});
							default:
								return ye._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "uKfHK"
								})
						}
					})(n) : ((e, t) => {
						switch (e) {
							case _.g.AntiEvilOps:
								return o.a.createElement(Ee, null);
							case _.g.AuthorDeleted:
							case _.g.Author:
								return ye._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
									hk: "2OBDBc"
								});
							case _.g.AutomodFiltered:
								return ye._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [ye._param("=[subreddit name]", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(be.a.redditUrl, "/r/").concat(t),
									target: "_blank"
								}, ye._("{subreddit name}", [ye._param("subreddit name", "r/".concat(t))], {
									hk: "2o22vl"
								})))], {
									hk: "3dxuEW"
								});
							case _.g.CommunityOps:
								return ye._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
									hk: "uPiHS"
								});
							case _.g.ContentTakedown:
								return o.a.createElement(fe, null);
							case _.g.CopyrightTakedown:
								return ye._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "2e8fhi"
								});
							case _.g.Moderator:
								return ye._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
									hk: "QXZPk"
								});
							case _.g.Reddit:
							default:
								return ye._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3vUmEz"
								})
						}
					})(n, r), d = t ? he.a.warning : he.a.dayModeActionIcon, c = (e => {
						let t;
						switch (e) {
							case _.g.AntiEvilOps:
							case _.g.AutomodFiltered:
							case _.g.CommunityOps:
							case _.g.ContentTakedown:
							case _.g.CopyrightTakedown:
							case _.g.Reddit:
								t = ge.a;
								break;
							case _.g.AuthorDeleted:
							case _.g.Author:
								t = Ce.b;
								break;
							case _.g.Moderator:
								t = xe;
								break;
							default:
								t = ge.a
						}
						return o.a.createElement(t, {
							className: Oe.a.icon
						})
					})(n);
					return o.a.createElement(ue.a, {
						className: Oe.a.BannerBase,
						color: d,
						icon: c,
						subtitle: i,
						title: a
					})
				},
				je = e => {
					const {
						isAdminOrMod: t,
						post: s,
						subredditOrProfile: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, n && s.removedByCategory && o.a.createElement(we, {
						hasPerms: t,
						removedBy: s.removedBy,
						removedByCategory: s.removedByCategory,
						subredditName: n.name
					}))
				},
				ke = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				Pe = s("./src/lib/prettyPrintNumber/index.ts"),
				Ie = s("./src/reddit/components/PostContent/viewCount.m.less"),
				_e = s.n(Ie);
			var Te = e => {
					let {
						post: t,
						showViewCount: s
					} = e;
					const {
						upvotePercentString: n,
						viewCountString: r
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(Pe.b)(e.viewCount);
						return {
							upvotePercentString: ke.fbt._("{percent upvoted}% Upvoted", [ke.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: ke.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [ke.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(t), a = s && !!t.viewCount;
					return o.a.createElement("div", {
						className: _e.a.viewCounts
					}, a && o.a.createElement("span", null, r), a && !!t.upvoteRatio && o.a.createElement("span", {
						className: _e.a.dotSpacer
					}), !!t.upvoteRatio && o.a.createElement("span", null, n))
				},
				Se = s("./src/reddit/components/PostContent/index.m.less"),
				Ne = s.n(Se);
			const Le = c.a.wrapped(ne.c, "PostTitle", Ne.a),
				Me = c.a.wrapped(D.a, "ExpandoButton", Ne.a),
				Re = c.a.wrapped(P, "ClassicExpandoMotion", Ne.a),
				Ae = c.a.wrapped(H.c, "FullWidthFlatlist", Ne.a),
				Be = c.a.wrapped(B.a, "ClassicThumbnail", Ne.a),
				Fe = Object(ce.t)({
					isCommentsPage: ce.w,
					pageLayer: e => e
				}),
				De = Object(r.b)(() => Object(i.c)({
					activeModalId: S.a,
					flairStyleTemplate: ce.Q,
					currentUser: A.i,
					crosspost: R.c,
					hideNSFWPref: A.z,
					isAdminOrMod: (e, t) => {
						const s = Object(R.U)(e, {
							postId: t.postId
						});
						return !!s && Object(L.g)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: R.h,
					isExpanded: R.j,
					post: R.I,
					language: A.T,
					metaId: (e, t) => e.posts.metaMap[t.postId],
					moderatorPermissions: L.i,
					publicAwardersEnabled: e => !!Object(me.a)(e),
					modModeEnabled: ce.O,
					isInCategoriesExperiment: N.a,
					showEditFlair: pe.a,
					subredditOrProfile: R.U,
					isEditing: M.C,
					userIsOp: A.kb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(C.L)(s)),
						onOpenReportsDropdown: t => e(Object(v.g)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const n = t === T.a.upvoted ? Object(C.N)(s) : Object(C.o)(s);
							e(n)
						}
					}
				}),
				We = c.a.wrapped(a.a, "ThumbLink", Ne.a),
				He = e => {
					let {
						post: t,
						templatePlaceholderImage: s
					} = e;
					return t.source ? o.a.createElement(Be, {
						post: t,
						forceShowNSFW: !0,
						templatePlaceholderImage: s
					}) : o.a.createElement(We, {
						to: Object(b.b)(t.permalink)
					}, o.a.createElement(Be, {
						post: t,
						forceShowNSFW: !0
					}))
				},
				Ve = (e, t, s) => o.a.createElement(Re, {
					content: o.a.createElement(ee.a, {
						className: Ne.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: e,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: s
					}),
					shouldExpand: !!t
				});
			t.a = Fe(De(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					flairStyleTemplate: r,
					hideNSFWPref: a,
					isAdminOrMod: i,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isEditing: C,
					isExpanded: v,
					isOverlay: O,
					language: y,
					metaId: E,
					moderatorPermissions: f,
					modModeEnabled: w,
					onIgnoreReports: j,
					onOpenReportsDropdown: k,
					onVoteClick: P,
					post: T,
					publicAwardersEnabled: S,
					scrollerItemRef: N,
					sendEvent: L,
					showEditFlair: M,
					subredditOrProfile: R,
					userIsOp: A
				} = e, B = Object(h.a)(f), D = Object(u.a)(f), q = B || D, Q = ((e, t, s) => {
					const [n, o] = e ? [Object(p.f)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || o
				})(n, q, T), X = !!T.media && (T.media.type === I.n.RTJSON || T.media.type === I.n.TEXT), Z = A && X, ce = Object(z.c)(T);
				let me;
				const pe = !(w && h.a),
					ue = Object(te.h)({
						hide: pe,
						editPost: pe,
						save: pe,
						report: pe
					}),
					he = T.removedByCategory === _.g.AuthorDeleted,
					be = n && (n.displayText === T.author || n.username === T.author),
					ge = !he && (be || i || !(T.removedByCategory && T.media && (Object(I.E)(T.media) || Object(I.D)(T.media)))),
					xe = T.removedByCategory === _.g.Reddit && Object(l.e)(T.created) > 24,
					Ce = T.removedByCategory && T.removedByCategory !== _.g.Reddit || xe,
					ve = o.a.createElement(Le, {
						post: T,
						size: ne.b.ExtraLarge,
						showCategoryTag: O,
						isOverlay: O,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Oe = o.a.createElement(Te, {
						post: T,
						showViewCount: Q
					}),
					ye = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? de.g.Classic : t ? de.g.Large : n.media ? de.g.Large : de.g.Medium
					})(e);
				if (ye === de.g.Classic) me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, o.a.createElement(se.a, {
					model: T,
					handleVote: P
				}), o.a.createElement("div", {
					className: Ne.a.mainBody
				}, o.a.createElement("div", {
					className: Ne.a.content
				}, o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isOverlay: !!O,
					language: y,
					post: T,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !T.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), ve, o.a.createElement(W.a, {
					className: c ? Ne.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: L
				}), w && B && ce && o.a.createElement(Y.a, {
					language: y,
					onIgnoreReports: j,
					reportable: T
				}), o.a.createElement(K.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Ne.a.FlatlistContainer
				}, o.a.createElement(Me, {
					crosspost: s || void 0,
					isExpanded: !!v,
					post: T,
					useMediaIcons: !1
				}), Ve(T, v, N), o.a.createElement(Ae, {
					currentUser: n,
					hasModFlairPerms: D,
					hasModPostPerms: B,
					isOverlay: O,
					language: y,
					onIgnoreReports: j,
					onOpenReportsDropdown: k,
					modModeEnabled: w,
					post: T,
					showUpvotePercent: !0,
					showViewCount: Q,
					useFlatlistBreakpoints: ue
				}))), Object(m.a)(T) && o.a.createElement(He, {
					post: T,
					templatePlaceholderImage: r && r.postPlaceholderImage
				})));
				else if (ye === de.g.Medium) {
					const t = Object(m.a)(T);
					me = o.a.createElement("div", {
						"data-test-id": ie.e
					}, o.a.createElement(se.a, {
						model: T,
						handleVote: P
					}), o.a.createElement("div", {
						className: Ne.a.mainBody
					}, o.a.createElement("div", {
						className: Ne.a.content
					}, o.a.createElement(oe.a, {
						hideNSFWPref: a,
						inSubredditOrProfile: !0,
						isCommentsPage: c,
						isCurrentUserProfilePost: b,
						isOverlay: !!O,
						language: y,
						post: T,
						publicAwardersEnabled: S,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!O && !T.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: R
					}), ve, T.source && o.a.createElement(ae.a, {
						post: T,
						isCommentsPage: c
					}), o.a.createElement(W.a, {
						className: c ? Ne.a.leftPadding : null,
						post: T,
						showCategoryTag: e.isInCategoriesExperiment && c,
						sendEvent: L
					}), R && Ce && o.a.createElement(je, {
						isAdminOrMod: i,
						post: T,
						subredditOrProfile: R
					}), w && B && ce && o.a.createElement(Y.a, {
						language: y,
						onIgnoreReports: j,
						reportable: T
					})), t && o.a.createElement(G.a, {
						post: T,
						forceShowNSFW: !0,
						hasModPostPerms: q,
						isCommentsPage: c,
						isOverlay: !0,
						modModeEnabled: w,
						templatePlaceholderImage: r && r.postPlaceholderImage
					})), o.a.createElement(K.d, {
						postId: T.id
					}), o.a.createElement("div", {
						className: Ne.a.controlsContainer
					}, o.a.createElement(H.c, {
						currentUser: n,
						hasModFlairPerms: D,
						hasModPostPerms: B,
						isOverlay: O,
						language: y,
						modModeEnabled: w,
						onIgnoreReports: j,
						onOpenReportsDropdown: k,
						post: T,
						showEditPost: Z,
						showEditFlair: M,
						tooltipType: O ? re.c.Lightbox : void 0,
						useFlatlistBreakpoints: ue
					}), Oe))
				} else ye === de.g.Large && (me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, o.a.createElement(se.a, {
					model: T,
					handleVote: P
				}), o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isOverlay: !!O,
					language: y,
					post: T,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !T.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), ve, ((e, t, s, n) => e.source && !t && (s || n))(T, s, O, c) && o.a.createElement(ae.a, {
					post: T,
					isCommentsPage: c
				}), o.a.createElement(W.a, {
					className: c ? Ne.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: L
				}), R && Ce && o.a.createElement(je, {
					isAdminOrMod: i,
					post: T,
					subredditOrProfile: R
				}), C ? o.a.createElement($, {
					post: T
				}) : ge && o.a.createElement(ee.a, {
					className: Object(d.a)(Ne.a.LargePostMedia, {
						[Ne.a.isCommentsPage]: c
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: O,
					isOverlay: O,
					post: T,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !O,
					showCentered: !0,
					scrollerItemRef: N
				}), E && R ? o.a.createElement("div", {
					className: Object(d.a)(Ne.a.ProposalContainer, {
						[Ne.a.isEditing]: C
					})
				}, o.a.createElement(V.a, {
					pollId: E,
					subredditId: R.id
				})) : null, T.isMeta && !E && o.a.createElement(U.a, {
					className: Ne.a.noProposal
				}), w && B && ce && o.a.createElement(Y.a, {
					language: y,
					onIgnoreReports: j,
					reportable: T
				}), o.a.createElement(K.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Ne.a.controlsContainer
				}, o.a.createElement(H.c, {
					currentUser: n,
					hasModFlairPerms: D,
					hasModPostPerms: B,
					isOverlay: O,
					language: y,
					modModeEnabled: w,
					onIgnoreReports: j,
					onOpenReportsDropdown: k,
					post: T,
					showEditPost: Z,
					showEditFlair: M,
					tooltipType: O ? re.c.Lightbox : void 0,
					useFlatlistBreakpoints: ue
				}), Oe)));
				return o.a.createElement(J.a, {
					className: Object(d.a)(t, Ne.a.postContainer, {
						[Ne.a.hasEventMeta]: Object(le.a)(T)
					}),
					isOverlay: O,
					post: T,
					eventFactory: O ? g.b : x.f
				}, o.a.createElement(F.a, {
					post: T,
					language: y
				}), me)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Y
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				C = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				y = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/helpers/getClickInfo.ts"),
				P = s("./src/reddit/helpers/pixels.ts"),
				I = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				S = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				L = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(M),
				A = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const B = 500,
				F = new S.a(B),
				D = new S.a(B),
				W = new S.a(B),
				H = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				V = b.a.div("SeeMore", R.a),
				U = b.a.wrapped(I.a, "ArrowRight", R.a),
				K = (e, t, s, n, o, r, a, i) => {
					const d = s ? "last-".concat(n, "-").concat(o) : "",
						c = "entered-".concat(e, "-").concat(t, "-").concat(d, "-").concat(r);
					let l = F.get(c);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, o), a.trackOnPostEnteredViewport(e, t, i)
					}, F.set(c, l)), l
				},
				G = (e, t, s, n) => {
					const o = "left-".concat(e, "-").concat(t);
					let r = D.get(o);
					return void 0 === r && (r = o => {
						s.trackOnPostExitedViewport(e, t, o, n)
					}, D.set(o, r)), r
				},
				Y = (e, t) => {
					const s = "click-".concat(e);
					let n = W.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(P.a)(s.events, E.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(k.a)(e)
						})
					}, W.set(s, n)), n
				},
				z = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case w.g.Medium:
							return 188;
						case w.g.Classic:
							return 96;
						case w.g.Compact:
							return 32;
						default:
							return 200
					}
				},
				J = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class q extends c.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new S.a(B), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, o = t(), r = [];
						o.forEach(e => r.push(e.id));
						const a = r.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = N.c.end(e);
					setTimeout(() => {
						s(t(n, L.TimerType.InApp))
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
						n = A(t, ["postsById"]),
						{
							postsById: o
						} = e,
						r = A(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(r);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== r[e])) return !0;
					if (s === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, r) => {
							const a = 0 === r;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: o[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: o,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: d,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: h,
						postClickEvent: b,
						redditStyle: g
					} = this.props, C = 0 === t, v = s ? "last-index" : "", O = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(v, "-").concat(m, "-").concat(l, "-").concat(h);
					let y;
					if (void 0 === (y = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: v,
							postsById: E
						} = this.props, f = E[e], j = f.crosspostRootId && E[f.crosspostRootId] ? E[f.crosspostRootId] : f;
						f.crosspostRootId && !E[f.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(f.id, " is crosspost of ").concat(f.crosspostRootId, ", but ") + "".concat(f.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const k = this.props.postComponentForLayout({
								isCrosspost: !!f.crosspostRootId,
								isFirstPost: C,
								layout: n,
								post: j
							}),
							P = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							I = K(e, n, s, l, m, h, this.props, t),
							T = G(e, n, this.props, t),
							S = Y(e, this.props),
							N = j.media && j.media.type === _.n.EMBED ? j.media.provider : null;
						y = {
							estHeight: z(f, n),
							id: e,
							isFocusable: !(!j.media || n !== w.g.Large) && (_.d.has(j.media.type) && (!N || !_.q.has(N)) && !j.isSpoiler && !j.isNSFW),
							trackOnEnteredViewport: I,
							trackOnExitedViewport: T,
							render: t => {
								let {
									className: n,
									height: u,
									width: h,
									remeasure: x,
									setScrollerChildRef: O,
									shouldLoadInitially: y
								} = t;
								return c.a.createElement(k, {
									className: n,
									currentProfileName: o,
									key: P,
									availableWidth: h,
									eventFactory: b,
									first: C,
									forceLoadMedia: y,
									inSubredditOrProfile: v,
									isCommentPermalink: r,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: d,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: S,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: O
								})
							}
						}, this.scrollChildCache.set(O, y)
					}
					return y
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return c.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: o,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const a = r;
					return c.a.createElement("div", {
						className: R.a.placeholder
					}, c.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && c.a.createElement(v.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: o,
						onLoadMore: r
					} = this.props;
					if (!s) return c.a.createElement("div", {
						className: R.a.placeholder
					}, c.a.createElement(C.a, {
						className: o,
						isLoading: !!t,
						layout: n,
						countOverride: H[n]
					}), !!e && c.a.createElement(v.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isTruncated: r,
						layout: a,
						location: i,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let g = h.map((e, t, s) => {
						const n = t === h.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					o && (g = J(g, o));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						C = i ? Object(n.e)(i) : null,
						v = C || r;
					return c.a.createElement(d.Fragment, null, c.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: v ? R.a.truncatedPostList : Object(p.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: f.g
					}, g), C && c.a.createElement(V, {
						className: R.a.seeMoreButton
					}, c.a.createElement(j.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(C, {
							type: u.Jb.Posts
						})
					}, c.a.createElement(y.a, {
						msgId: "search.seeMorePosts"
					}), c.a.createElement(U, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			q.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: c.a.Fragment
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				c = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				l = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = s.n(m);
			const u = n.a.wrapped(a.a, "Icon", p.a),
				h = n.a.wrapped(i.a, "Icon", p.a),
				b = n.a.wrapped(d.a, "Icon", p.a),
				g = n.a.wrapped(c.a, "Icon", p.a),
				x = n.a.wrapped(l.a, "Icon", p.a),
				C = n.a.wrapped(o.b, "CheckboxMenuItem", p.a),
				v = n.a.wrapped(r.b, "DropdownRow", p.a),
				O = n.a.div("ListContainer", p.a)
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				d = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.Container, s)
				}, n && o.a.createElement(i.a, {
					className: c.a.PopularIcon
				}), o.a.createElement(a.b, {
					type: a.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/constants/listings.ts"),
				d = s("./src/reddit/controls/InternalLink/index.tsx"),
				c = s("./src/reddit/i18n/components.tsx"),
				l = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				u = s.n(p);
			t.a = Object(a.a)(e => {
				const {
					className: t,
					onClick: s,
					shouldDisplaySeeMore: n,
					shouldNavigateToHome: a,
					subredditOrProfile: p
				} = e, {
					primaryColor: h
				} = p, b = !a && h || Object(m.a)(Object.assign({}, e, {
					redditStyle: !0
				})).button, g = n ? "See more" : "Continue browsing";
				return o.a.createElement(d.a, {
					className: Object(r.a)(u.a.footer, t),
					onMouseDown: s,
					to: a ? i.c[i.b.Home] : p.url,
					style: {
						backgroundColor: b
					}
				}, o.a.createElement("div", {
					className: u.a.background
				}), o.a.createElement("div", {
					className: u.a.layout
				}, a ? o.a.createElement(c.c, null, "See more recommended") : o.a.createElement(c.c, null, g, " in ", o.a.createElement(c.b, {
					name: "subredditName"
				}, p.displayText)), o.a.createElement(l.a, {
					className: u.a.arrow
				})))
			})
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/FocusableContent/index.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = e => {
				let {
					className: t,
					isLoading: s,
					toolbarPosition: n
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(a.a, {
					isFocused: !1
				}, "top" === n && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(i.a)({
						isLoading: s
					}))
				}), o.a.createElement("div", {
					className: c.a.content
				}, o.a.createElement("div", {
					className: Object(r.a)(c.a.prompt, Object(i.a)({
						isLoading: !0
					}))
				})), "bottom" === n && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(i.a)({
						isLoading: s
					}))
				})))
			}
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/index.tsx"),
				u = s("./src/reddit/components/Translated/index.tsx"),
				h = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				C = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/reddit/components/MiniCardPost/index.m.less"),
				w = s.n(f),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				k = s.n(j);
			const P = e => e.type === O.f.Spoiler,
				I = Object(b.t)();
			t.a = I(Object(p.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: o,
					onPostClick: d,
					trendingPost: p,
					trendingSearch: b,
					shouldOpenPost: O,
					showSubredditMeta: f = !0,
					showSubredditName: j,
					subredditOrProfile: I
				} = e, _ = p && p.preview && p.preview.url || void 0, T = p && p.isSponsored ? "promoted_trend" : "trending", S = p && Object(c.a)(p.permalink) || "", N = O && S || b && Object(a.a)("/search", {
					q: b.rawQuery,
					source: T
				}) || S, L = b ? b.subredditInfo && b.subredditInfo.icon : I && I.icon.url, M = b ? b.subredditInfo && b.subredditInfo.displayText : I && (I.displayText || I.name), R = p ? p.flair.filter(P) : [], A = p ? p.score : 0, B = p ? p.numComments : 0, F = p && p.isSponsored, D = Object(E.a)(e).body, W = "linear-gradient(\n      ".concat(Object(n.j)(D, .2), ",\n      ").concat(Object(n.j)(D, .3), ",\n      ").concat(Object(n.j)(D, .4), ",\n      ").concat(Object(n.j)(D, .6), ",\n      ").concat(Object(n.j)(D, .8), ",\n      ").concat(D, "\n    )"), H = r.a.createElement("div", {
					className: Object(i.a)(k.a.trendingPost, {
						[k.a["m-background"]]: !!_
					})
				}, r.a.createElement(g.a, {
					to: N
				}, r.a.createElement("div", {
					className: Object(i.a)(k.a.backgroundWrapper, w.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(E.a)(e).body, _ || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": W
					}
				}, F && r.a.createElement("div", {
					className: k.a.promoted
				}, r.a.createElement(v.c, null, "promoted")), r.a.createElement("div", {
					className: Object(i.a)(k.a.innerContainer, w.a.innerContainer, o),
					onClick: d,
					title: p ? p.title : ""
				}, r.a.createElement("h2", {
					className: p ? k.a.title : k.a.titleNoDescription
				}, e.title), p ? r.a.createElement("div", {
					className: Object(i.a)(k.a.description, s)
				}, R.length > 0 && r.a.createElement(m.a, {
					className: k.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: p,
					showCategoryTag: !1
				}), p.title) : r.a.createElement("div", {
					className: k.a.spacer
				}), f && L && M && r.a.createElement(x.a, {
					className: k.a.relatedSubredditMetaData,
					iconClassName: k.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: r.a.createElement(u.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: M
						}
					})
				}), !f && p && r.a.createElement("div", {
					className: k.a.metaLine
				}, j && M && r.a.createElement("span", {
					className: k.a.meta
				}, Object(C.b)(M)), r.a.createElement("span", {
					className: k.a.meta
				}, r.a.createElement(v.c, null, "".concat(Object(l.b)(A), " "), r.a.createElement(v.a, {
					count: A,
					name: "score",
					plural: "points",
					singular: "point"
				}))), r.a.createElement("span", {
					className: k.a.meta
				}, r.a.createElement(v.c, null, "".concat(Object(l.b)(B), " "), r.a.createElement(v.a, {
					count: B,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return F ? r.a.createElement(h.a, {
					post: p,
					children: H
				}) : H
			})))
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/components/BannerAd/index.tsx"),
				c = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				p = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.div("BannerContainer", u.a),
				g = h.a.wrapped(e => o.a.createElement("img", {
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
			var C = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return o.a.createElement(b, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, o.a.createElement("a", {
						href: c.a.redditUrl + s,
						target: "_blank"
					}, o.a.createElement(g, {
						src: c.a.assetPath + t
					})))
				},
				v = s("./src/lib/constants/index.ts"),
				O = s("./src/reddit/components/PostMedia/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/components/PostTopMeta/index.tsx"),
				f = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				w = s("./src/lib/getShortenedLink.ts"),
				j = s("./src/lib/opener/index.ts"),
				k = s("./src/reddit/actions/ads/index.ts"),
				P = s("./src/reddit/components/PostContainer/index.tsx"),
				I = s("./src/reddit/constants/adEvents.ts"),
				_ = s("./src/reddit/contexts/InsideOverlay.tsx"),
				T = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				S = s("./src/reddit/helpers/adCount/index.ts"),
				N = s("./src/reddit/helpers/pixels.ts"),
				L = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				R = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				A = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				B = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				F = s("./src/reddit/models/Theme/index.ts"),
				D = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				W = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				V = s.n(H);
			const U = h.a.wrapped(e => o.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", V.a);
			class K extends o.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(W.F)(e.media) || Object(W.C)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case v.eb.IMAGE:
							return o.a.createElement(U, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var G = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				Y = s.n(G);
			const z = h.a.wrapped(E.d, "PostTopMeta", Y.a),
				J = h.a.div("BannerAdContainer", Y.a),
				q = e => {
					let {
						children: t
					} = e;
					return o.a.createElement("div", null, t)
				},
				Q = h.a.div("PromotedPostContainer", Y.a),
				X = h.a.wrapped(A.a, "OutboundLinkIcon", Y.a),
				Z = h.a.div("SourceLinkWrapper", Y.a),
				$ = h.a.div("TopLine", Y.a),
				ee = h.a.wrapped(y.c, "PostTitle", Y.a),
				te = h.a.div("PostMediaWrapper", Y.a),
				se = h.a.div("BackgroundWrapper", Y.a),
				ne = h.a.wrapped(P.a, "PostContainer", Y.a),
				oe = 640,
				re = (e, t) => {
					Object(N.a)(t.events, I.a.Click), t.source ? t.source.outboundUrl ? Object(j.d)(t.source.outboundUrl, j.c.BLANK) : Object(j.d)(t.source.url, j.c.BLANK) : Object(j.d)(t.permalink, j.c.BLANK)
				},
				ae = e => Object(R.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(L.a)(e), B.a.actionIcon, B.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				de = e => ({
					background: Object(F.g)(Object(D.a)(e).body, null, null) || ""
				});
			class ce extends o.a.Component {
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
					let r, a, d = {};
					return e.isBlank ? (r = q, a = null) : e.isMediaOnly ? (r = J, d = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = o.a.createElement(K, {
						post: e
					})) : (r = Q, a = o.a.createElement(se, {
						style: de(this.props)
					}, o.a.createElement($, null, o.a.createElement(z, {
						tooltipType: n ? E.c.Lightbox : void 0,
						language: v.y,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(ee, {
						post: e,
						size: y.b.Large,
						format: ae
					}), e.source && o.a.createElement(Z, null, o.a.createElement(T.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(w.a)(e), o.a.createElement(X, null))), o.a.createElement(te, null, e.media && o.a.createElement(O.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: oe,
						shouldLoad: !0
					})))), o.a.createElement(r, d, o.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: re,
						eventFactory: s,
						style: ie(this.props)
					}, a))
				}
			}
			var le = Object(r.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: o
						} = t;
						e(Object(k.c)(Object(S.a)(s, !!o, n)))
					}
				}))(Object(_.b)(Object(f.a)(ce))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				pe = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ue = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				he = s.n(ue);
			const be = Object(a.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, o = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(S.a)(s, o, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(r.b)(be),
				xe = h.a.wrapped(d.a, "BannerAd", he.a),
				Ce = h.a.wrapped(pe.a, "ThemedWidget", he.a),
				ve = h.a.div("SidebarAdPlaceholder", he.a),
				Oe = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				ye = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(W.B)(e.media) && e.media.content)),
				Ee = e => !!e && e.isBlank;
			class fe extends o.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: r,
						refreshKey: a,
						listingName: d,
						placement: c,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: h,
						waitForProgrammatic: b
					} = this.props;
					return u || t || !ye(s) && b ? o.a.createElement(me.a, null, o.a.createElement(Ce, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(ve, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : h ? o.a.createElement(me.a, null, o.a.createElement(Ce, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(C, null))) : ye(s) ? o.a.createElement(me.a, null, o.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: d,
						placement: c,
						placementIndex: r
					})) : o.a.createElement(me.a, null, o.a.createElement(Ce, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, Ee(s) && o.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: d,
						placement: c,
						placementIndex: r
					}), o.a.createElement(xe, {
						id: Oe(c, n, r),
						sizes: l,
						placement: c,
						listingName: d,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(fe)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/brandSafety.ts"),
				i = s("./src/reddit/selectors/comments.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx"),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			t.a = Object(r.b)((e, t) => {
				let {
					postId: s,
					commentsPageKey: n
				} = t;
				return {
					canShowAd: Object(a.a)(e, {
						postId: s
					}) && !Object(d.y)(e),
					waitForProgrammatic: Object(i.d)(e, {
						commentsPageKey: n
					})
				}
			})(e => {
				var {
					canShowAd: t,
					postId: s,
					commentsPageKey: n
				} = e, r = l(e, ["canShowAd", "postId", "commentsPageKey"]);
				return t ? o.a.createElement(c.a, r) : null
			})
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
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.a("Link", d.a);
			t.a = e => o.a.createElement(a.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: d.a.LinkContainer
			}, o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, c._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, c._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, c._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, c._("Reddit gifts", null, {
				hk: "2XziRN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, c._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, c._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, c._("Topics", null, {
				hk: "349RFt"
			}))), o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(l, {
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: d.a.Copyright
			}, c._("Reddit Inc © {year}. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const a = .99;
			class i extends r.a.Component {
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
					return r.a.createElement(n.a, {
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/isFakeSubreddit/index.ts"),
				c = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				x = s("./src/lib/isUrl/index.ts"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				v = s("./src/reddit/components/FlairWrapper/index.tsx"),
				O = s("./src/reddit/components/Thumbnail/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				j = s.n(w);
			const k = e => e.type === y.f.Nsfw || e.type === y.f.Spoiler,
				P = Object(a.c)({
					language: f.T,
					post: b.I,
					subredditOrProfile: b.U
				});
			class I extends o.a.PureComponent {
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
						subredditOrProfile: r
					} = this.props, a = {
						post: t
					}, d = Object(x.a)(Object(O.b)(a)), c = t.flair.filter(k);
					return o.a.createElement("div", {
						className: Object(i.a)(j.a.container, e, {
							[j.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: j.a.mainLine
					}, d && o.a.createElement("div", {
						className: j.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(O.a, a)), o.a.createElement("div", {
						className: Object(i.a)(j.a.title, !d && j.a.titleSingle),
						title: t.title
					}, c.length > 0 && o.a.createElement(v.a, {
						className: j.a.flair,
						titleFlair: c,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: j.a.metaLine
					}, n && !!r && o.a.createElement("span", {
						className: j.a.meta
					}, Object(E.e)(r) ? Object(m.c)(r.displayText || r.name) : Object(m.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: j.a.meta
					}, "".concat(Object(C.b)(t.score), " "), o.a.createElement(u.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), o.a.createElement("span", {
						className: j.a.meta
					}, "".concat(Object(C.b)(t.numComments), " "), o.a.createElement(u.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var _ = Object(r.b)(P, e => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}))(I),
				T = s("./src/reddit/components/SidebarPostList/index.m.less"),
				S = s.n(T);
			s.d(t, "b", (function() {
				return M
			}));
			const N = 10,
				L = 2,
				M = Object(a.a)(b.O, e => e.filter(e => !e.isSponsored)),
				R = Object(a.c)({
					posts: M
				}),
				A = Object(r.b)(R, e => ({
					openPost: t => e(Object(p.a)(t.permalink))
				}));
			class B extends o.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || N, this.showMorePosts = () => {
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
							redditStyle: r,
							smallPostClassName: a
						} = this.props;
						return o.a.createElement(g.a, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(_, {
							className: Object(i.a)(S.a.smallPost, a),
							containerOnClick: s,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(d.a)(Object(m.f)(t)),
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
						onPostVisible: r,
						posts: a,
						redditStyle: p,
						showMoreButton: b,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: C
					} = this.state;
					if (0 === a.length) return null;
					const v = this.getVisiblePostsCounts(),
						O = Object(h.a)(x),
						y = Object(h.b)(x),
						E = O || y,
						f = a.slice(C * v, (C + 1) * v),
						[w, ...j] = f,
						k = E ? f.slice(0, L) : j.slice(0, L),
						P = E ? f.slice(L) : j.slice(L);
					return o.a.createElement("div", {
						className: Object(i.a)(S.a.container, t, {
							[S.a.redditStyle]: p
						})
					}, !E && o.a.createElement(g.a, {
						onPostVisible: r,
						postId: w.id
					}, o.a.createElement(c.a, {
						backgroundWrapperClassName: S.a.largePostBackgroundWrapper,
						descriptionClassName: S.a.largePostDescription,
						innerContainerClassName: S.a.largePostInnerContainer,
						"data-redditstyle": p,
						onPostClick: this.openLargePost,
						postId: w.id,
						showSubredditMeta: !1,
						showSubredditName: Object(d.a)(Object(m.f)(s)),
						trendingPost: w
					})), k.map(this.renderSmallPost), e, P.map(this.renderSmallPost), b && o.a.createElement(l.n, {
						className: S.a.SeeMore,
						onClick: this.showMorePosts
					}, n || o.a.createElement(u.c, null, "See More")))
				}
			}
			t.a = A(B)
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
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
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
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, p.a.container),
					style: e.style
				}, i.a.createElement(c.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(C),
				O = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
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
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const f = d.e[1] + 24,
				w = b.g + 8 + 152 + 32 + 16,
				j = w + f + 8,
				k = O.a.div("Container", v.a),
				P = O.a.wrapped(e => {
					var {
						className: t
					} = e, s = E(e, ["className"]);
					return i.a.createElement(u, y({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", v.a),
				I = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: o,
						isSticky: r
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(o, {
							[v.a.StickyStyles]: r,
							[v.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class _ extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > w
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
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							children: s,
							className: n,
							hideFooter: o,
							railsWidgetsVariant: r
						}
					} = this, a = this.state.isAdSticky && !(!e && !s);
					return i.a.createElement(k, {
						className: n,
						innerRef: this.setWrapperRef
					}, i.a.createElement(I, {
						categoriesPlacementVariant: t,
						isSticky: a || !!r
					}, e, s, !o && i.a.createElement(h.a, null)), !this.props.hideBackToTop && i.a.createElement(P, null))
				}
			}
			const T = Object(g.t)();
			t.a = T(_)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/components/SubredditNav/index.m.less"),
				C = s.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const y = (e, t, s) => Object(b.a)(e, {
					[C.a.mActive]: t
				}, {
					[C.a.topBannerVariant]: s
				}),
				E = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, r = O(e, ["children", "isActive", "isTopBannerVariant"]);
					return o.a.createElement("div", v({
						className: y(C.a.subNavTitle, s, n)
					}, r), o.a.createElement("span", null, t), o.a.createElement(g.b, {
						className: C.a.navDropdownIcon
					}))
				},
				f = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: r
					} = e, a = O(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = y(C.a.navLink, s, r);
					return n ? o.a.createElement(h.a, v({
						className: i,
						to: n
					}, a)) : o.a.createElement("a", v({
						className: i
					}, a))
				},
				w = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return o.a.createElement(h.a, v({
						className: y(C.a.navLink, s)
					}, n))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return o.a.createElement("a", v({
						className: y(C.a.subNavLink, s)
					}, n))
				},
				k = e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return o.a.createElement("div", v({
						className: Object(b.a)(C.a.subNavContainer, t)
					}, s))
				},
				P = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = O(e, ["className", "isOpen"]);
					return o.a.createElement("div", v({
						className: Object(b.a)(C.a.subNavList, t, {
							[C.a.mIsOpen]: s
						})
					}, n))
				};
			const I = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var _ = Object(d.t)()(Object(r.b)(I, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? o.a.createElement(w, {
						className: C.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.F)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, o.a.createElement(u.c, null, "Polls")) : null
				}))),
				T = s("./src/lib/linkMatchers/index.ts");
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(k, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(E, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(P, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var N = S;
			const L = e => {
				const t = e.url && Object(T.g)(T.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? o.a.createElement(f, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : o.a.createElement(N, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => o.a.createElement(j, {
					key: "".concat(e.text, "-").concat(L(e)),
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				R = s("./src/lib/constants/index.ts");
			const A = Object(d.t)(),
				B = [R.xb.SUBREDDIT, R.xb.COMMENTS, R.xb.COLLECTION_COMMENTS],
				F = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && B.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = A(Object(r.b)(F, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: r,
						onTurnOffMetaFilter: a
					} = e, i = n && !s;
					return o.a.createElement(f, {
						to: t,
						isActive: i,
						isTopBannerVariant: r,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, o.a.createElement(u.c, null, "Posts"))
				}))),
				W = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				U = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/constants/screenWidths.ts"),
				G = s("./src/reddit/models/Theme/index.ts"),
				Y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const J = Object(W.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, r = z(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(Y.a)(r);
				return o.a.createElement("div", {
					className: Object(b.a)(C.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(G.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var q = e => o.a.createElement(J, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, o.a.createElement("div", {
					className: C.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === U.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, o.a.createElement("div", null, e.children), o.a.createElement(V, null))),
				Q = s("./src/reddit/components/Translated/index.tsx"),
				X = s("./src/reddit/constants/wiki.ts"),
				Z = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === R.xb.SUBREDDIT_WIKI, a = "wiki/".concat(X.i), i = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return o.a.createElement(f, {
					isActive: r,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object(Z.g)())
				}, o.a.createElement(Q.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(c.a)("spPolls", _),
				te = Object(d.t)(),
				se = Object(a.c)({
					language: l.T,
					layout: d.M,
					widget: m.f
				}),
				ne = Object(r.b)(se);
			t.a = te(ne(Object(i.b)(e => o.a.createElement(q, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && o.a.createElement(o.a.Fragment, null, o.a.createElement(D, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), o.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && o.a.createElement(o.a.Fragment, null, e.widget.showWiki && o.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => o.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
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
				return P
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = s.n(p),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

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
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const C = b.a.button("IconButton", u.a),
				v = b.a.wrapped(l.a, "SubscribeIcon", u.a),
				O = b.a.wrapped(c.a, "UnsubscribeIcon", u.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return o.a.createElement(C, n, o.a.createElement(v, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", u.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? o.a.createElement(i.f, g({}, n, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					})) : o.a.createElement(i.n, g({}, n, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", u.a),
				f = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(y, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : o.a.createElement(E, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				},
				w = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return o.a.createElement(C, i, o.a.createElement(O, {
						className: Object(h.a)(a.o, i.className, {
							[u.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				j = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, a = x(e, ["border", "language", "small", "type"]);
					const c = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === r ? Object(d.c)("Joined") : Object(d.c)("Following")), o.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === r ? Object(d.c)("Leave") : Object(d.c)("Unfollow"))),
						l = Object(h.a)(a.className, {
							[u.a.isSmall]: n
						});
					return t ? o.a.createElement(i.i, g({}, a, {
						className: l,
						children: c
					})) : o.a.createElement(i.n, g({}, a, {
						className: l,
						children: c
					}))
				}, "UnsubscribeButton", u.a),
				k = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(w, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : o.a.createElement(j, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				};
			class P extends o.a.Component {
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
						language: a,
						small: i = !1
					} = this.props, d = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? o.a.createElement(k, g({}, d, {
						language: a,
						type: this.props.identifier.type
					})) : o.a.createElement(f, g({}, d, {
						id: n
					}), this.props.children, Object(r.a)(a, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(n.b)(r.a))
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = r.a.div("Rule", c.a),
				m = r.a.div("RuleIndex", c.a),
				p = r.a.div("RuleTitle", c.a),
				u = ["Keep language civil", "Comments must be relevant to the Promoted Post and contribute to discussion", "Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", "No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post"];
			t.a = e => o.a.createElement(a.a, {
				className: e.className,
				title: Object(i.c)("Rules for Reddit Ads"),
				redditStyle: !0
			}, u.map((e, t) => o.a.createElement(l, {
				key: t
			}, o.a.createElement(m, null, t + 1, "."), o.a.createElement(p, null, Object(i.c)(e)))))
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
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(i),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", d.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = c(e, ["children"]);
					return o.a.createElement("div", s, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				h = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const g = Object(i.c)({
				language: b.T
			});
			var x = Object(r.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(h.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(h.e()),
						onUnsubscribe: () => e(h.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				C = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				j = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				P = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				I = s.n(P);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			}));
			const T = e => o.a.createElement(C.a, {
					className: Object(c.a)(I.a.Container, {
						[I.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && o.a.createElement(p.a, {
					className: I.a.WidgetTitle
				}, e.title), o.a.createElement("div", {
					className: I.a.container
				}, e.isLoading ? o.a.createElement(y.a, {
					className: I.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: I.a.errorMsg
				}, e.errorMsg || Object(E.c)("Something went wrong.")) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(N, _({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(O.n, {
					className: I.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(i.c)({
					hideNSFWPref: b.z,
					language: b.T
				}),
				N = Object(r.b)(S)(e => o.a.createElement("div", {
					className: I.a.communityItemContainer
				}, o.a.createElement(w.a, {
					widthRight: v.u
				}, o.a.createElement("div", {
					className: I.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: I.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(f.a, {
					className: I.a.planetIcon,
					"data-redditstyle": !0
				})), o.a.createElement("div", {
					className: I.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: I.a.communityName,
					to: Object(k.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(k.b)(e.name, e.type)), o.a.createElement("div", {
					className: I.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: I.a.subscriberCount
				}, Object(d.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && o.a.createElement(m.b, {
					flair: {
						type: j.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(y.a, {
					className: Object(c.a)(I.a.communityCta, I.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(O.n, {
					className: Object(c.a)(I.a.communityCta, {
						[I.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(x, {
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
				}) : o.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: I.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(o.c)(e) : Object(o.b)(e)
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
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/postCollection/index.ts"),
				u = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/helpers/trackers/postCollection.ts"),
				E = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				f = s.n(E);
			const w = c.a.wrapped(b.b, "DropdownRow", f.a);
			let j;
			const k = Object(x.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				P = Object(x.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				I = Object(v.c)({
					createPostUrl: C.d,
					isDeleteConfirmModalOpen: k,
					isEditCollectionModalOpen: P,
					shouldShowCollectionEditOptions: C.s
				}),
				_ = Object(i.b)(I, (e, t) => ({
					copyLink: () => e(Object(m.t)(t.permalink)),
					onCreatePost: s => {
						t.shouldShowCreatePost && e(Object(d.b)(s))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						j || (j = await Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("editCollectionModal")]).then(s.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = _(Object(O.b)(e => {
				const {
					className: t,
					collectionId: s,
					copyLink: n,
					createPostUrl: r,
					isDeleteConfirmModalOpen: i,
					isEditCollectionModalOpen: d,
					onCreatePost: c,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: m,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: x,
					targetPosition: C,
					tooltipPosition: v,
					sendEvent: O
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: "collection-menu-".concat(s, "-").concat(x ? 1 : 2),
					onClick: o.a,
					targetPosition: C,
					tooltipPosition: v
				}, a.a.createElement(w, {
					onClick: n,
					displayText: Object(g.c)("Copy collection link")
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(w, {
					onClick: () => {
						O(Object(y.l)(s)), p()
					},
					displayText: Object(g.c)("Edit")
				}), a.a.createElement(w, {
					onClick: () => {
						O(Object(y.k)(s)), m()
					},
					displayText: Object(g.c)("Delete collection")
				}), x && a.a.createElement(w, {
					onClick: () => {
						c(r)
					},
					displayText: Object(g.c)("Create post")
				}))), d && j && a.a.createElement(j, {
					collectionId: s,
					onClose: p,
					onEditSuccess: p
				}), i && a.a.createElement(u.a, {
					actionText: Object(g.c)("Yes, Delete"),
					headerText: Object(g.c)("Delete Collection"),
					modalText: Object(g.c)("Are you sure you want to delete this collection? The posts within the collection won't be deleted."),
					onConfirm: l,
					toggleModal: m,
					trackClick: o.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				l = s("./src/reddit/components/OverflowMenu/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = s.n(u);
			const b = i.a.wrapped(m.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: s,
					onEditStartTime: n,
					onStartEventNow: r,
					postPermalink: i,
					shouldShowAddEventStartTime: m,
					targetPosition: u,
					tooltipPosition: h
				} = e;
				return a.a.createElement(l.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: o.a,
					targetPosition: u,
					tooltipPosition: h
				}, m && s && a.a.createElement(b, {
					onClick: s,
					displayText: Object(p.c)("Add event start time")
				}), t && r && a.a.createElement(b, {
					onClick: r,
					displayText: Object(p.c)("Start event now")
				}), t && n && a.a.createElement(b, {
					onClick: n,
					displayText: Object(p.c)("Edit start time")
				}), a.a.createElement(b, {
					onClick: e.onRemoveClick,
					displayText: Object(p.c)("Remove from collection")
				}), i && a.a.createElement(c.a, {
					target: d.c.BLANK,
					rel: d.b,
					isOverlay: !1,
					to: i
				}, a.a.createElement(b, {
					displayText: Object(p.c)("View post")
				})))
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				C = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				f = s.n(E);

			function w() {
				return (w = Object.assign || function(e) {
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
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const k = 129,
				P = Object(b.t)({
					filterName: e => Object(b.R)(e)[h.f],
					url: e => Object(b.V)(e)
				}),
				I = Object(i.c)({
					subredditId: (e, t) => Object(y.G)(e, t.subredditName)
				}),
				_ = Object(a.b)(I),
				T = l.a.div("WidgetContent", f.a),
				S = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, o = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(d.a)(f.a.StyledFlair, t === O.d.Cloud && f.a.cloudDisplay, {
							[f.a.flairFilter]: s,
							[f.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, w({}, o, {
						className: f.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(C.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(C.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > k && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(g.n, {
						className: f.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(S, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? k : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: f.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return r.a.createElement("ul", null, r.a.createElement(S, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, o = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(o) || void 0, i = t.order.length > n.length || s && !a;
					return r.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(T, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(o), i && this.renderButton()))
				}
			}
			t.a = P(_(Object(p.b)(N)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				p = s("./src/reddit/helpers/dom/index.ts"),
				u = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				C = s.n(x);
			const v = c.a.div("RuleShortName", C.a),
				O = c.a.div("RuleIndex", C.a),
				y = c.a.div("RuleTitle", C.a),
				E = c.a.div("RuleDescription", C.a),
				f = c.a.wrapped(l.a, "RawHTMLDisplay", C.a),
				w = {};
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(p.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!r;
					return o.a.createElement(v, {
						className: Object(d.a)({
							[C.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(b.a, null, o.a.createElement(O, null, "".concat(e.humanIndex, ".")), o.a.createElement(y, null, "".concat(e.rule.shortName)), o.a.createElement("div", null, !n(e) && r && (t.isVisible ? o.a.createElement(h.a, {
						className: C.a.Chevron
					}) : o.a.createElement(u.a, {
						className: C.a.Chevron
					})))), t.isVisible && o.a.createElement(E, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: w
					}) : e.rule.descriptionHtml ? o.a.createElement(f, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return k
			}));
			const k = Object(i.a)(e => e.rules.length > 0 ? o.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: Object(r.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return o.a.createElement(j, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => o.a.createElement(k, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				C = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				f = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = E(e);
					return Object(O.f)(t)
				},
				j = e => {
					const t = f(e);
					return Object(O.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				P = s.n(k);
			const I = Object(m.t)(),
				_ = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(C.m)(e, {
								subredditId: s
							}),
							o = Object(v.V)(e);
						return n || o
					},
					nigtmode: v.V,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
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
					return e.backgroundColor = E(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = f(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? P.a.widgetContentOnly : P.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, P.a.widgetBackground, {
							[P.a.redditStyle]: n,
							[P.a.clickable]: !!a,
							[P.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, d && o.a.createElement("div", {
						className: P.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(i.a)(P.a.widgetTitle, l)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), o.a.createElement("div", {
						className: Object(i.a)(u, {
							[P.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: P.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, o.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = I(_(Object(d.a)(Object(l.b)(T))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/linkMatchers/index.ts"),
				h = s("./src/reddit/models/Image/index.tsx"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Widgets/Button/index.m.less"),
				O = s.n(v);
			const y = (e, t, s) => {
					let n = {},
						o = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: o,
							textColor: r
						} = e;
						return t && (n = r = s, o = "transparent"), {
							"--widget-button-background-color": "".concat(o || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(r || n)
						}
					})(e, t, s);
					const r = e.hoverState || e;
					if (r.kind === g.f.Image) o = {
						"--widget-button-hover-background-image": "url('".concat(r.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = r;
						t && (e = a = s, n = "transparent"), o = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign({}, n, o)
				},
				E = e => e.kind === g.f.Image ? O.a.imageButton : O.a.textButton,
				f = e => {
					const t = Object(g.n)(e),
						s = Object(u.g)(u.e, t);
					return s ? s.url : e.url
				},
				w = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(b.a)(e).button;
					return o.a.createElement(c.i, {
						className: E(t),
						style: y(t, s, n)
					}, t.kind === g.f.Text && o.a.createElement("span", {
						className: t.hoverState ? O.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && o.a.createElement("span", {
						className: O.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => o.a.createElement(l.a, {
					href: f(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(w, e)),
				k = p.a.wrapped(i.a, "RawHTMLDisplay", O.a);
			var P = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: C.V
				}))(e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(k, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => o.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = s("./src/lib/humanizeDate/index.ts"),
				_ = s("./src/reddit/controls/TextButton/index.tsx"),
				T = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				N = s.n(S);
			const L = 100,
				M = {
					isExpanded: !1
				},
				R = p.a.wrapped(i.a, "RawHTMLDisplay", N.a),
				A = p.a.div("EventContainer", N.a),
				B = p.a.div("EventTitle", N.a),
				F = p.a.div("EventDate", N.a),
				D = p.a.div("EventLocation", N.a),
				W = p.a.div("EventDescription", N.a),
				H = p.a.wrapped(_.a, "ToggleDescription", N.a);
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, L), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(T.c)("read less") : Object(T.c)("...read more"))) : o.a.createElement(W, null, e.text)
				}
			}
			const U = Object(a.c)({
				language: C.T
			});
			var K = Object(r.b)(U)(e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => o.a.createElement(A, {
					key: "".concat(s, "-").concat(t.title)
				}, o.a.createElement(B, null, t.titleHtml ? o.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(F, null, Object(I.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && o.a.createElement(D, null, t.locationHtml ? o.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && o.a.createElement(V, {
					language: e.language,
					text: t.description
				}))))),
				G = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(G.b)(e => o.a.createElement(Y.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				q = Object(r.b)(J),
				Q = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class X extends o.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Q(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, o.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Z = q(X),
				$ = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = s.n($);
			var te = p.a.div("ImageFrame", ee.a),
				se = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = s.n(se);
			var oe = p.a.img("StyledImage", ne.a);
			class re extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = o.a.createElement(te, null, o.a.createElement(oe, {
							alt: Object(T.c)("Widget image"),
							src: s.url
						}));
					return s.linkUrl ? o.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ae = re,
				ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = s("./src/reddit/components/Flair/index.tsx"),
				ce = s("./src/reddit/controls/InternalLink/index.tsx"),
				le = s("./src/reddit/icons/fonts/helpers.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				pe = s.n(me);
			var ue = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(le.b)("envelope"), " ").concat(e.className)
				}), "Envelope", pe.a),
				he = s("./src/reddit/models/Flair/index.ts"),
				be = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = s.n(be);
			const xe = p.a.div("ModeratorListItem", ge.a),
				Ce = p.a.div("Username", ge.a),
				ve = p.a.a("MessageModsLink", ge.a),
				Oe = p.a.wrapped(de.b, "FlairComponent", ge.a),
				ye = e => e.authorFlairType === he.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Ee = e => o.a.createElement(Ce, null, "u/".concat(e)),
				fe = p.a.wrapped(ce.a, "InternalLink", ge.a),
				we = p.a.div("LinkContainer", ge.a);
			var je = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return o.a.createElement(d.a, {
						styles: s.styles,
						title: Object(T.c)("Moderators"),
						headerButton: o.a.createElement(ve, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, o.a.createElement(ue, null))
					}, s.mods.map(e => o.a.createElement(xe, {
						key: e.name
					}, (e => o.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, Ee(e.name)))(e), o.a.createElement(Oe, {
						flair: ye(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(we, null, o.a.createElement(fe, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(T.c)("View All Moderators"))))
				},
				ke = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Pe = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				_e = s.n(Ie);
			const Te = p.a.div("WidgetContent", _e.a),
				Se = p.a.wrapped(i.a, "RawHTMLDisplay", _e.a);
			var Ne = e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(Te, null, o.a.createElement(Se, {
					html: e.widget.textHtml || ""
				}))),
				Le = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => o.a.createElement(Le.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Ne;
						case "button":
							return P;
						case "subreddit-rules":
							return Pe.b;
						case "community-list":
							return z;
						case "calendar":
							return K;
						case "image":
							return ae;
						case "custom":
							return Z;
						case "post-flair":
							return ke.a;
						default:
							return Me
					}
				}(e.widget);
				return o.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return w
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const y = O(),
				E = {
					apiError: b.c,
					apiPending: b.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: b.g,
					postsById: x.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(x.F)(e, s, n, o)
					}),
					subredditsById: C.Y,
					viewportDataLoaded: v.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => u.a
				},
				f = Object(o.c)(E),
				w = (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.A(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(i.B(t, n, o))
					}
				}),
				j = Object(n.b)(f, w, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(c.b)(y(j(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};

			function c(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: r
					} = e, a = d(e, ["featureEnabled", "dispatch"]);
					return n ? o.a.createElement(t, a) : void 0 !== s ? o.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/reddit/constants/postLayout.ts");
			const r = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, s, a, i) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: o.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (d.subreddit = a.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = r, i && (d.position = i), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/i18n/utils.ts");

			function o() {
				return window.ethereum
			}

			function r() {
				const e = o();
				return !(!e || !e.isMetaMask)
			}

			function a() {
				const e = o();
				return e && e.selectedAddress || null
			}

			function i() {
				return o().networkVersion || null
			}

			function d() {
				const e = o();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const c = 4001;
			async function l(e, t, n, r) {
				const [a, i] = await Promise.all([s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await d();
				const c = new a.providers.Web3Provider(o()).getSigner(),
					l = new a.Contract(e, i, c),
					m = await l[n](...r);
				return await m.wait()
			}
			const m = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const p = 1;
			async function u(e, t, n, o, r) {
				const a = await s.e("vendors~CryptoLibEthers").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: d,
						hexZeroPad: c,
						toUtf8Bytes: u
					} = a.utils,
					h = i(n).add(r),
					b = p,
					g = "0x" + [d(1)].concat([b, i(o), i(r)].map(d).map(e => c(e, 32))).concat(d(u(""))).map(e => e.substr(2)).join("");
				return async function(e, t, s, n) {
					return l(e, Promise.resolve(m), "send", [t, s, n])
				}(e, t, h.toString(), g)
			}
			const h = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function b(e, t, s) {
				await d();
				const o = a() || "";
				if (t.toLowerCase() !== o.toLowerCase()) throw new Error(Object(n.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(h), "subscribe", [t, s])
			}

			function g(e) {
				const t = o();
				return new Promise((s, o) => {
					const r = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, r],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) o(e);
						else {
							const e = t && t.result;
							e ? s(e) : o({
								message: Object(n.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function x(e) {
				return new Promise((t, s) => {
					o().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? s("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "o", (function() {
				return j
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				a = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, r(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, r(e)),
				d = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, r(t)),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				p = d("view_wiki_page"),
				u = d("view_source"),
				h = d("add_wiki_page_contributor"),
				b = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				x = d("copy_url"),
				C = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				O = d("ban_wiki_contributor"),
				y = d("unban_wiki_contributor"),
				E = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				f = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				w = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: o.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: o.actionInfo(t, {
						settingValue: f[e]
					})
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mIsFakeOverlay: "_2gEUIJsfk7ZZ0euRwRyv08",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				narrow: "_1VToppe137NbqV5o2PhSdN",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showM2MTopBanner: "_2JeiDGY0Jbv_7O9hAUUm-J",
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
			}
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
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, o;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(o || (o = {}))
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "ylSOkbhJXzLxdygG02Py-",
				container: "ylSOkbhJXzLxdygG02Py-",
				HeaderPane: "lRD1iRINbsXDXJa5y-KCy",
				headerPane: "lRD1iRINbsXDXJa5y-KCy",
				CommentIcon: "HTwZUIRm4M5CyilvzbYRJ",
				commentIcon: "HTwZUIRm4M5CyilvzbYRJ",
				OtherDiscussionsTitle: "_193dW7O_ACLnCIl6tc1PAT",
				otherDiscussionsTitle: "_193dW7O_ACLnCIl6tc1PAT"
			}
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				TopTippers: "BBdV-resbdJaej9EwC62l",
				topTippers: "BBdV-resbdJaej9EwC62l",
				TopTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				topTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/get.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/telemetry/index.ts"),
				b = s("./src/telemetry/models/Timer.ts"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				C = s("./src/lib/domUtils/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				O = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				f = s("./src/lib/performanceTimings/index.tsx"),
				w = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const P = Object(j.a)(k.a),
				I = Object(j.a)(k.b);
			var _ = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/monthsToMinutes/accountCompleteness.ts"),
				S = s("./src/reddit/actions/page.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/app/strings/index.ts"),
				M = s("./src/reddit/actions/postCollection/index.ts"),
				R = s("./src/reddit/components/AuthorLink/index.tsx"),
				A = s("./src/reddit/components/PostFollow/index.tsx"),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				D = s("./src/reddit/components/Translated/index.tsx"),
				W = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				H = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/elementIds.ts"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				G = s("./src/reddit/helpers/postCollection.ts"),
				Y = s("./src/reddit/models/Post/index.ts"),
				z = s("./src/reddit/models/PostCollection/index.ts"),
				J = s("./src/reddit/selectors/postCollection.ts"),
				q = s("./src/reddit/selectors/posts.ts"),
				Q = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				X = s("./src/lib/prettyPrintNumber/index.ts"),
				Z = s("./src/lib/timezone/index.ts"),
				$ = s("./src/reddit/actions/modal.ts"),
				ee = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				te = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				se = s("./src/reddit/components/PostContainer/index.tsx"),
				ne = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/helpers/path/index.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				ae = s("./src/reddit/helpers/trackers/postCollection.ts"),
				ie = s("./src/reddit/models/PostCreationForm/index.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/selectors/user.ts"),
				le = s("./src/reddit/components/Collection/PostItem/index.m.less"),
				me = s.n(le);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			let ue, he;
			const be = e => "".concat(e, "--collectionItem"),
				ge = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						isFutureEvent: o,
						isNightmodeOn: r,
						isOverlay: a,
						isSelectedPost: i,
						language: c,
						onPostSelection: l,
						onRemovePost: m,
						onStartEventNow: p,
						onPostTitleClick: u,
						post: h,
						shouldShowCollectionPostEdits: b,
						shouldShowThumbnail: x,
						style: C,
						toggleEditStartTimeModal: v,
						updateSelectedPostRef: O,
						isProfilePage: y
					} = e;
					return d.a.createElement(se.a, {
						className: Object(g.a)(me.a.postContainer, {
							[me.a.isNightmodeOn]: r,
							[me.a.isSelectedPost]: i,
							[me.a.isProfilePage]: y
						}),
						isOverlay: a,
						makePostContainerId: be,
						post: h,
						onClick: l,
						eventFactory: n,
						style: C
					}, d.a.createElement("div", {
						ref: i && O || void 0
					}, d.a.createElement("div", {
						className: Object(g.a)(me.a.postContent, {
							[me.a.active]: i
						})
					}, x && d.a.createElement(ee.a, {
						className: me.a.timelineThumbnail,
						classNameInnerThumbnail: Object(g.a)(me.a.timelineThumbnailOverride, me.a.commonThumbnailOverride),
						post: h
					}), d.a.createElement("div", {
						className: me.a.postBodyWrapper
					}, d.a.createElement("div", {
						className: me.a.postBody,
						"data-click-id": "body"
					}, d.a.createElement(Q.a, {
						to: Object(oe.b)(h.permalink),
						className: me.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						},
						title: h.title,
						onClick: u
					}, h.title)), d.a.createElement("div", {
						className: me.a.bottomline
					}, d.a.createElement(te.b, {
						post: h,
						language: c
					}), b && d.a.createElement(ne.a, {
						onRemoveClick: m,
						dropdownId: "collection-post-item-".concat(h.id),
						isFutureEvent: o,
						onStartEventNow: p,
						onEditStartTime: v,
						onAddEventStartTime: v,
						shouldShowAddEventStartTime: !Object(re.a)(h)
					}))))), t === Object(ie.s)(h.id, a, ie.j.COLLECTION_INFO_POST) && ue && d.a.createElement(ue, {
						onChange: s,
						onClose: v,
						schedule: Object(Z.c)(h),
						shouldShowDeleteButton: !1
					}))
				},
				xe = ee.a,
				Ce = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						galleryThumbnail: o,
						isFutureEvent: r,
						isNightmodeOn: a,
						isOverlay: i,
						isSelectedPost: c,
						language: l,
						onPostSelection: m,
						onRemovePost: p,
						onStartEventNow: u,
						post: h,
						shouldShowCollectionPostEdits: b,
						style: x,
						toggleEditStartTimeModal: C,
						updateSelectedPostRef: v,
						isProfilePage: O
					} = e, y = o && o.url || "", E = h.isSpoiler || h.isNSFW, f = h.isScoreHidden;
					return d.a.createElement(se.a, {
						className: Object(g.a)(me.a.galleryPostContainer, {
							[me.a.isSelectedPost]: c,
							[me.a.isNightmodeOn]: a,
							[me.a.isProfilePage]: O
						}),
						isOverlay: i,
						makePostContainerId: be,
						post: h,
						onClick: m,
						eventFactory: n,
						style: x
					}, d.a.createElement("div", {
						className: me.a.scrollToContainer,
						ref: c && v || void 0
					}, y ? d.a.createElement("div", {
						className: Object(g.a)(me.a.galleryPostImage, {
							[me.a.blurBackground]: E
						}),
						style: {
							backgroundImage: "url('".concat(y, "')")
						}
					}) : d.a.createElement(xe, {
						className: me.a.galleryThumbnailPlaceholder,
						thumbnailContainerClassName: me.a.thumbnailContainerClassName,
						classNameInnerThumbnail: Object(g.a)(me.a.galleryPostPlaceholderThumbnailOverride, me.a.commonThumbnailOverride),
						post: h
					}), a && d.a.createElement("div", {
						className: me.a.gallerySeparator
					}), c && d.a.createElement("div", {
						className: me.a.gallerySelectedBorder
					}), d.a.createElement("div", {
						className: me.a.galleryPostOverlay
					}, d.a.createElement("div", {
						className: Object(g.a)(me.a.galleryBottomLine, {
							[me.a.isScoreHidden]: f
						})
					}, !f && d.a.createElement(te.a, {
						"data-click-id": "score"
					}, Object(L.c)(l, "posts.points.noun", h.score, {
						count: Object(X.b)(h.score)
					})), b && d.a.createElement(ne.a, {
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(h.id),
						isFutureEvent: r,
						onStartEventNow: u,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(re.a)(h)
					})))), t === Object(ie.s)(h.id, i, ie.j.COLLECTION_INFO_POST) && ue && d.a.createElement(ue, {
						onChange: s,
						onClose: C,
						schedule: Object(Z.c)(h),
						shouldShowDeleteButton: !1
					}))
				};
			class ve extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostSelection = (e, t) => {
						const {
							onClickPost: s,
							postId: n,
							sendEvent: o
						} = this.props;
						o(Object(ae.h)(n)), s && s(e, t)
					}, this.onRemovePost = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onRemovePostFromCollection(), t(Object(ae.p)(e.id))
					}, this.onStartEventNow = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onStartEventNow(), t(Object(ae.i)(e.id))
					}, this.onPostTitleClick = e => {
						const {
							post: t
						} = this.props;
						e.preventDefault(), this.onPostSelection(e, t)
					}
				}
				render() {
					const {
						displayLayout: e,
						post: t
					} = this.props;
					return t ? e === z.a.TIMELINE ? d.a.createElement(ge, pe({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow,
						onPostTitleClick: this.onPostTitleClick
					})) : d.a.createElement(Ce, pe({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : d.a.createElement("div", {
						className: me.a.postContainer
					})
				}
			}
			var Oe = Object(U.t)({
					currentProfileName: U.h,
					isCommentsPage: U.w,
					isProfilePostListing: U.I,
					isProfilePage: U.H,
					pageLayer: e => e
				})(Object(c.b)(() => Object(m.c)({
					activeModalId: de.a,
					galleryThumbnail: J.e,
					isFutureEvent: J.i,
					language: ce.T,
					layout: U.M,
					post: q.I,
					shouldShowCollectionPostEdits: J.s,
					subredditOrProfile: q.U
				}), (e, t) => {
					let {
						collectionId: n,
						postId: o,
						isSelectedPost: r,
						isOverlay: a
					} = t;
					return {
						onRemovePostFromCollection: () => e(Object(M.g)(n, o, r)),
						onStartEventNow: async () => {
							he || (he = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts.ts"))), e(he.startEventNowRequested(o))
						},
						toggleEditStartTimeModal: async () => {
							ue && he || ([ue, he] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts.ts"))])), e($.i(Object(ie.s)(o, a, ie.j.COLLECTION_INFO_POST)))
						},
						addEventStartTime: t => {
							he && e(he.editEventTimeRequested(o, t))
						}
					}
				})(Object(F.b)(ve))),
				ye = s("./src/reddit/components/Collection/index.m.less"),
				Ee = s.n(ye);
			const fe = e => d.a.createElement(R.a, {
					author: e.author,
					className: Ee.a.author,
					"data-click-id": "user",
					isAuthorDeleted: e.isDeleted,
					isUnstyled: !0
				}, "u/".concat(e.author)),
				we = 100,
				je = e => {
					return e.isOverlay ? H.o + H.c : H.g + H.c
				},
				ke = e => ({
					top: je(e),
					maxHeight: "calc(100vh - ".concat(H.g + (e.isOverlay ? H.o : 0) + H.c + 5, "px)")
				});
			class Pe extends d.a.Component {
				constructor() {
					super(...arguments), this.selectedPostRef = null, this.onClickPost = (e, t) => {
						this.props.onOpenPost(t)
					}, this.updateSelectedPostRef = e => {
						this.selectedPostRef = e
					}
				}
				componentDidMount() {
					const e = document.getElementById(V.b);
					if (e) {
						const t = this.selectedPostRef;
						let s;
						s = t ? t.offsetTop - we : 0, v.a.write(() => {
							Object(C.c)(e, s)
						})
					}
				}
				render() {
					const {
						collection: e,
						displayLayout: t,
						followPost: s,
						isNightmodeOn: n,
						isOverlay: o,
						language: r,
						post: a,
						postId: i,
						shouldShowThumbnail: c,
						isProfilePage: l
					} = this.props;
					if (!a || !e) return null;
					const {
						author: m = "",
						description: p = "",
						postIds: u = [],
						id: h
					} = e;
					return Object(G.a)(a) && d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
						className: Object(g.a)(Ee.a.collectionTitleWrapper, {
							[Ee.a.isProfilePage]: l
						})
					}, d.a.createElement("div", {
						className: Ee.a.collectionMetaData
					}, d.a.createElement("span", {
						className: Ee.a.collectionBy
					}, d.a.createElement(D.a, {
						msgId: "collection.collectionBy"
					})), d.a.createElement(fe, {
						author: m,
						isDeleted: Object(Y.h)(m)
					}), d.a.createElement(K.a, {
						isSmall: !0
					}), d.a.createElement("span", {
						className: Ee.a.postCount
					}, Object(L.c)(r, "postCreation.postsCount", u.length))), d.a.createElement("div", {
						className: Ee.a.collectionTitleOptions
					}, d.a.createElement("span", {
						className: Ee.a.collectionTitle
					}, d.a.createElement(B.b, {
						type: B.a.Collection
					}, e.title)), s && d.a.createElement(A.a, {
						post: s,
						isEventFollow: l
					}), d.a.createElement(W.a, {
						className: Ee.a.overflowMenu,
						collectionId: h,
						isSubmitPage: !1,
						permalink: e.permalink,
						shouldShowCreatePost: !0
					}))), d.a.createElement("div", {
						className: Ee.a.postListWrapper
					}, d.a.createElement("div", {
						id: V.b,
						style: ke(this.props),
						className: Ee.a.collectionList
					}, p && p.trim() && d.a.createElement("div", {
						className: Ee.a.collectionDescription
					}, p), d.a.createElement("div", {
						className: Object(g.a)({
							[Ee.a.galleryContainer]: t === z.a.GALLERY
						})
					}, u.map(e => d.a.createElement(Oe, {
						collectionId: h,
						postId: e,
						key: e,
						isSelectedPost: i === e,
						updateSelectedPostRef: this.updateSelectedPostRef,
						isOverlay: o,
						isNightmodeOn: n,
						onClickPost: this.onClickPost,
						shouldShowThumbnail: c,
						displayLayout: t
					}))))))
				}
			}
			var Ie = Object(U.t)({
					isProfilePage: U.H,
					pageLayer: e => e
				})(Object(c.b)(() => Object(m.c)({
					collection: J.n,
					displayLayout: J.a,
					followPost: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(J.n)(e, {
								postId: s
							}),
							o = n && (n.primaryPostId || n.postIds[0]);
						return o && Object(q.I)(e, {
							postId: o
						}) || null
					},
					post: q.I,
					shouldShowThumbnail: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(J.n)(e, {
							postId: s
						});
						return !(!n || !n.id) && Object(J.t)(e, {
							collectionId: n.id
						})
					}
				}), (e, t) => ({
					onOpenPost: t => e(Object(M.f)(t))
				}))(Object(F.b)(Pe))),
				_e = s("./src/reddit/components/BannerAd/index.tsx"),
				Te = s("./src/reddit/components/BlankPost/index.tsx"),
				Se = s("./src/reddit/connectors/PostViewable/index.ts"),
				Ne = s("./src/reddit/featureFlags/index.ts"),
				Le = s("./src/reddit/selectors/brandSafety.ts"),
				Me = s("./src/reddit/components/CommentsPageAd/index.m.less"),
				Re = s.n(Me);
			const Ae = Object(m.c)({
					canShowAds: (e, t) => {
						const s = Object(Le.a)(e, t),
							n = !Ne.d.rabbitHole(e) && !Object(U.H)(t.pageLayer) && !Object(ce.y)(e),
							o = e.meta.isSessionSeo && !Object(ce.K)(e);
						return s && n && (o || Object(ce.H)(e))
					},
					ads: e => e.commentsPage.ads
				}),
				Be = Object(Se.a)(Ae),
				Fe = Object(U.t)(),
				De = O.a.wrapped(_e.a, "BannerAd", Re.a),
				We = (e, t) => {
					let s = "";
					return t && (s += "overlay-"), s += "comment-".concat(e)
				},
				He = O.a.div("CommentsPageAdContainer", Re.a);
			class Ve extends d.a.Component {
				constructor() {
					super(...arguments), this.container = null, this.state = {
						enoughSpace: !1,
						hasBeenAssessed: !1
					}, this.checkAvailableSpace = a()(() => {
						v.a.read(() => {
							if (this.container) {
								const e = x.f[0],
									t = this.container.clientWidth;
								!this.state.enoughSpace && this.state.hasBeenAssessed || v.a.write(() => {
									this.setState({
										enoughSpace: t > e,
										hasBeenAssessed: !0
									})
								})
							}
						})
					}, x.F)
				}
				componentDidMount() {
					this.props.canShowAds && (this.checkAvailableSpace(), window.addEventListener("resize", this.checkAvailableSpace))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.checkAvailableSpace)
				}
				render() {
					if (!this.props.canShowAds) return null;
					const {
						isOverlay: e,
						refreshKey: t,
						listingName: s,
						placement: n,
						onPostViewable: o
					} = this.props;
					return d.a.createElement(He, {
						innerRef: e => {
							this.container = e
						}
					}, this.props.ads.length > 0 && d.a.createElement(Te.a, {
						post: this.props.ads[0],
						onPostViewable: o
					}), this.state.enoughSpace && d.a.createElement(De, {
						id: We(n, e),
						sizes: [x.f],
						placement: n,
						listingName: s,
						refreshKey: t,
						dataBeforeContent: Object(L.a)("en", "posts.sponsored")
					}))
				}
			}
			var Ue = Fe(Be(Ve)),
				Ke = s("./src/reddit/components/ContentGate/index.tsx"),
				Ge = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ye = s("./node_modules/lodash/noop.js"),
				ze = s.n(Ye),
				Je = s("./src/lib/makeListingKey/index.ts"),
				qe = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				Qe = s("./src/reddit/actions/subreddit.ts"),
				Xe = s("./src/reddit/components/ListingPostList/index.tsx"),
				Ze = s("./src/reddit/components/M2M/HomeUpsellBanner/index.tsx"),
				$e = s("./src/reddit/constants/page.ts"),
				et = s("./src/reddit/constants/postLayout.ts"),
				tt = s("./src/reddit/helpers/trackers/lightbox.ts"),
				st = s("./src/reddit/helpers/trackers/screenview.ts"),
				nt = s("./src/reddit/i18n/components.tsx");
			const ot = e => e.commentsListTruncated;
			var rt = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				at = s("./src/reddit/selectors/experiments/chatPost.ts"),
				it = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				dt = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				ct = s("./src/reddit/selectors/monthsToMinutes.ts"),
				lt = s("./src/reddit/components/RecommendedPostList/Footer/index.tsx"),
				mt = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				pt = s.n(mt);
			const ut = Object(m.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, ot, rt.b, it.b, dt.f, (e, t, s, n, o) => {
					const r = Object(it.a)(n),
						a = !Object(dt.e)(o);
					return !!(t && r && !s || a && !e)
				}),
				ht = Object(m.c)({
					isChatPost: at.d,
					isLoggedIn: ce.J,
					m2mDataLoaded: ct.d,
					m2mHomeMultiName: ct.e,
					m2mHomeRedirectVariant: dt.f,
					shouldShowHomeUpsell: ct.y,
					shouldShowSubredditUpsell: ut
				});
			class bt extends d.a.Component {
				constructor(e) {
					super(e), this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.scrollContainer = () => this.props.isOverlay ? document.getElementById(V.d) : null, this.onViewed = (e, t) => Object(st.d)(this.listingKey(), x.N.TOP, t, e, x.Ob.WEEK), this.onFooterClick = e => {
						this.isHomeUpsellVisible() && (e.preventDefault(), this.props.goToHomeFeed()), this.props.sendEvent(Object(tt.c)("recommended_footer"))
					}, this.loadMoreHomeFeedPosts = () => {
						const {
							loadMorePosts: e,
							m2mHomeMultiName: t
						} = this.props;
						t && e(t)
					}, this.state = {
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				listingKey() {
					const {
						m2mHomeMultiName: e,
						subredditOrProfile: t
					} = this.props;
					return this.isHomeUpsellVisible() ? Object(Je.a)(e, x.N.HOT) : Object(Je.a)(t.name, x.N.TOP, {
						t: x.Ob.WEEK
					})
				}
				renderHomeBanner() {
					return d.a.createElement(Ze.a, {
						borderClassName: pt.a.homeUpsellBannerBorder,
						className: pt.a.homeUpsellBanner,
						onSeeMoreClick: this.props.goToHomeFeed
					})
				}
				renderSmallBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return d.a.createElement("div", {
						className: pt.a.smallBanner
					}, d.a.createElement(nt.c, null, "More posts from the ", d.a.createElement(nt.b, {
						name: "name"
					}, t), " community"))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return d.a.createElement("span", {
						className: pt.a.textBanner
					}, d.a.createElement(nt.c, null, "More from ", d.a.createElement(nt.b, {
						name: "name"
					}, t)))
				}
				renderBanner() {
					return this.isHomeUpsellVisible() ? this.renderHomeBanner() : this.renderSmallBanner()
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isLoggedIn: s,
						m2mDataLoaded: n,
						m2mHomeRedirectVariant: o,
						shouldShowSubredditUpsell: r,
						subredditOrProfile: a
					} = this.props, i = this.isHomeUpsellVisible();
					if (s || t || (!i || !n) && !r) return null;
					const c = i && Object(dt.a)(o);
					return d.a.createElement("div", {
						className: Object(g.a)(pt.a.container, {
							[pt.a.redditStyle]: i
						})
					}, this.renderBanner(), d.a.createElement(Xe.a, {
						className: pt.a.postList,
						redditStyle: i,
						disablePlaceholder: !c,
						forcedLayout: et.g.Large,
						getScrollContainer: this.scrollContainer,
						isTruncated: !0,
						listingKey: this.listingKey(),
						listingName: $e.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: pt.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: c ? this.loadMoreHomeFeedPosts : ze.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !i,
						scrollContentContainerRef: e
					}), !c && d.a.createElement(lt.a, {
						className: pt.a.footer,
						"data-redditstyle": i,
						onClick: this.onFooterClick,
						shouldNavigateToHome: i,
						subredditOrProfile: a
					}))
				}
			}
			var gt = Object(c.b)(ht, e => ({
					goToHomeFeed: () => e(Object(qe.b)({
						shouldPrepareData: !1
					})),
					loadMorePosts: t => e(Object(Qe.r)({
						sort: x.N.HOT,
						subredditName: t
					}))
				}))(Object(F.b)(bt)),
				xt = s("./src/reddit/constants/history.ts"),
				Ct = s("./src/reddit/constants/keycodes.ts"),
				vt = s("./src/reddit/constants/posts.ts"),
				Ot = s("./src/reddit/constants/screenWidths.ts"),
				yt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Et = s("./src/reddit/featureFlags/profileCollections.ts"),
				ft = s("./src/reddit/models/Comment/index.ts"),
				wt = s("./src/reddit/models/Media/index.ts"),
				jt = s("./src/reddit/models/Subreddit/index.ts"),
				kt = s("./src/reddit/selectors/comments.ts"),
				Pt = s("./src/reddit/selectors/discoveryUnit.ts"),
				It = s("./src/reddit/selectors/experiments/postSeo.ts"),
				_t = s("./src/reddit/selectors/meta.ts"),
				Tt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				St = s("./src/reddit/selectors/subreddit.ts"),
				Nt = s("./src/reddit/selectors/tooltip.ts"),
				Lt = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const Mt = Object(j.a)(Lt.a);
			var Rt = s("./src/higherOrderComponents/makeAsync.tsx"),
				At = s("./src/lib/loadWithRetries/index.ts"),
				Bt = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				Ft = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Dt = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				Wt = s.n(Dt);
			const Ht = e => {
					let {
						isTopLevelComment: t,
						children: s
					} = e;
					return d.a.createElement("div", {
						children: s,
						className: Object(g.a)(Wt.a.spacer, {
							[Wt.a.isTopLevelComment]: t
						})
					})
				},
				Vt = () => d.a.createElement("div", {
					className: Object(g.a)(Wt.a.byline, Object(Ft.a)({
						isLoading: !0
					}))
				}),
				Ut = Object(Rt.a)({
					ErrorComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return d.a.createElement(Ht, {
							isTopLevelComment: t
						}, d.a.createElement(Vt, null), d.a.createElement(Bt.a, {
							isLoading: !1,
							toolbarPosition: "bottom"
						}))
					},
					getComponent: () => Object(At.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return d.a.createElement(Ht, {
							isTopLevelComment: t
						}, d.a.createElement(Vt, null), d.a.createElement(Bt.a, {
							isLoading: !0,
							toolbarPosition: "bottom"
						}))
					}
				});
			var Kt = e => d.a.createElement(Ut, e),
				Gt = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Yt = s("./node_modules/lodash/isEqual.js"),
				zt = s.n(Yt),
				Jt = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				qt = s("./src/reddit/constants/comments.ts"),
				Qt = s("./src/reddit/constants/elementClassNames.ts"),
				Xt = s("./src/lib/objectSelector/index.ts"),
				Zt = s("./src/reddit/icons/fonts/helpers.tsx"),
				$t = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				es = s.n($t);
			var ts, ss, ns = O.a.wrapped(e => d.a.createElement("i", {
					className: "".concat(Object(Zt.b)("expand"), " ").concat(e.className)
				}), "Expand", es.a),
				os = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				rs = s.n(os),
				as = O.a.wrapped(e => d.a.createElement("button", e, d.a.createElement(ns, null)), "Component", rs.a),
				is = s("./node_modules/lodash/defer.js"),
				ds = s.n(is),
				cs = s("./src/lib/makeCommentPermalink/index.ts"),
				ls = s("./src/reddit/actions/gold/modals.ts"),
				ms = s("./src/reddit/actions/reportFlow.ts"),
				ps = s("./src/reddit/helpers/correlationIdTracker.ts"),
				us = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				hs = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				bs = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				gs = s.n(bs);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(ts || (ts = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(ss || (ss = {}));
			const xs = (e, t) => {
					const s = gs.a[t],
						n = gs.a[e];
					return Object(g.a)(s, n)
				},
				Cs = e => Object(g.a)(gs.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[gs.a.isInOverlay]: e.isInOverlay,
					[gs.a.isModModeEnabled]: e.isModModeEnabled
				});
			var vs = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Os = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ys = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Es = s("./src/reddit/selectors/economics.ts");
			const fs = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsCommentFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var ws = Object(c.b)(() => Object(m.c)({
					featureEnabled: Ne.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.comments.models[t.contentId];
						return !!s && Object(Es.i)(e, {
							contentId: s.id,
							subredditId: s.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? d.a.createElement(fs, e) : null
				})),
				js = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				ks = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Ps = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Is = s("./src/reddit/components/ReportFlow/index.tsx"),
				_s = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ts = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				Ss = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Ns = s("./src/reddit/helpers/trackers/modTools.ts"),
				Ls = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ms = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Rs = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				As = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				Bs = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Fs = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Ds = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ws = s("./src/reddit/icons/fonts/Save/index.tsx"),
				Hs = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Vs = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Us = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ks = s.n(Us);
			const Gs = O.a.wrapped(Rs.a, "CommentIcon", Ks.a),
				Ys = O.a.wrapped(Ds.a, "Report", Ks.a),
				zs = O.a.wrapped(Bs.a, "IgnoreReport", Ks.a),
				Js = O.a.wrapped(js.a, "ModActionsMenu", Ks.a),
				qs = O.a.div("OverflowMenuSpacer", Ks.a),
				Qs = O.a.wrapped(Ps.a, "DropdownRow", Ks.a),
				Xs = O.a.wrapped(Ls.a, "Flatlist", Ks.a),
				Zs = O.a.button("Button", Ks.a),
				$s = O.a.wrapped(vs.c, "ModToolsFlatlist", Ks.a),
				en = O.a.wrapped(Ts.a, "ViewReportsDropdown", Ks.a),
				tn = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				sn = e => "Distinguish--Dropdown--".concat(e),
				nn = e => "".concat(e, "-overflow-menu"),
				on = e => "View--Reports--".concat(e),
				rn = Object(m.c)({
					currentUser: ce.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(de.a)(e) === tn(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Nt.b)(sn(s.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(kt.A)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Nt.b)(on(s.id))(e)
					},
					isLoggedIn: ce.K,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.D)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.E)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.H)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(kt.G)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(St.y)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.U)(e, {
							postId: s.postId
						})
					}
				});
			class an extends d.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(tt.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Ns.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Ns.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Ns.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						Object(ps.d)(ps.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Ns.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Ns.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Ns.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Ns.b)(e, this.props.comment.id))
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: o,
						handleReply: r,
						isLoggedIn: a,
						isPendingDeletion: c,
						language: l,
						onDistinguishComment: m,
						onIgnoreReports: u,
						onToggleReportsDropdown: h,
						moderatorPermissions: b,
						modModeEnabled: x,
						postIsArchived: C,
						postIsLocked: v,
						postPermalink: O,
						renderedInOverlay: y,
						sendEvent: E,
						subreddit: f,
						subredditAboutInfo: w,
						toggleDeleteCommentModal: j,
						toggleSendReplies: k,
						trackClick: P
					} = this.props, I = Object(us.a)(b), _ = !!s && s.displayText === e.author, T = !!s && s.isEmployee, S = !(w && w.userIsBanned) && (v || C || I && a || e.isLocked ? I && a : a), N = Object(ks.a)(e), L = I && !x && _ && !e.bannedBy, M = _ && T && !e.bannedBy, R = L || M, A = s && e.isGildable, B = [];
					S && B.push({
						breakpointGroup: ss.LoggedInUser,
						icon: d.a.createElement(Gs, null),
						key: "reply",
						onClick: () => {
							r(), ds()(() => P("reply")())
						},
						text: Object(p.c)("Reply")
					}), s && !_ && B.push(d.a.createElement(ws, {
						className: Ks.a.supportButton,
						contentId: e.id,
						key: "support-cta",
						subredditId: e.subredditId,
						targetName: e.author
					})), A && B.push({
						breakpointGroup: ss.LoggedInUser,
						icon: d.a.createElement(As.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: Object(p.c)("Give Award")
					}), B.push(d.a.createElement(_s.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(cs.a)(O, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: f
					}, d.a.createElement(Zs, {
						onClick: () => this.sendCommentEventWithName("share")
					}, d.a.createElement(nt.c, null, "share")))), _ || B.push({
						breakpointGroup: ss.LoggedInUser,
						icon: d.a.createElement(Ds.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: Object(p.c)("Report")
					}), B.push({
						breakpointGroup: ss.LoggedInUser,
						icon: e.isSaved ? d.a.createElement(Ms.e, null) : d.a.createElement(Ws.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? Object(p.c)("Unsave") : Object(p.c)("Save")
					}), _ && B.push({
						breakpointGroup: ss.LoggedInUser,
						icon: d.a.createElement(Hs.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: Object(p.c)("Edit")
					});
					const F = B.map(e => d.a.isValidElement(e) ? e : d.a.createElement(Zs, {
							className: xs(e.breakpointGroup, ts.HideIfVWSmaller),
							disabled: c,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text)),
						D = B.map(e => d.a.isValidElement(e) ? null : d.a.createElement(Qs, {
							className: xs(e.breakpointGroup, ts.HideIfVWLarger),
							displayText: e.text,
							iconWrapperClassName: Ks.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: Ks.a.dropdownRowText
						}, e.icon));
					return d.a.createElement(i.Fragment, null, d.a.createElement(Xs, {
						className: Object(g.a)(Cs({
							depth: o,
							isInOverlay: y,
							isModModeEnabled: I && x
						}), t)
					}, F, d.a.createElement(qs, {
						className: _ ? void 0 : xs(ss.LoggedInUser, ts.HideIfVWLarger)
					}, d.a.createElement(Ps.b, {
						className: Ks.a.overflowMenu,
						disabled: c,
						dropdownId: nn(e.id),
						onClick: () => E(Object(Ns.a)("comment_overflow_menu", e.id))
					}, D, _ && d.a.createElement(d.a.Fragment, null, d.a.createElement(Qs, {
						displayText: Object(p.c)("Delete comment"),
						iconWrapperClassName: Ks.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: Ks.a.dropdownRowText
					}, d.a.createElement(Vs.b, null)), d.a.createElement(Ss.a, {
						text: Object(p.c)("Send me reply notifications"),
						onClick: k,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && d.a.createElement(Os.a, {
						actionText: Object(p.c)("delete"),
						cancelActionText: Object(p.c)("keep"),
						headerText: Object(p.c)("Delete comment"),
						modalText: Object(p.c)("Are you sure you want to delete your comment?"),
						onConfirm: n,
						toggleModal: j,
						trackClick: () => {},
						withOverlay: !0
					}), I && d.a.createElement(d.a.Fragment, null, x && d.a.createElement($s, {
						className: xs(ss.Moderator, ts.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: _,
						language: l
					}), d.a.createElement(Js, {
						className: x ? xs(ss.Moderator, ts.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => E(Object(Ns.a)("comment_mod_action_menu", e.id))
					}, d.a.createElement(Fs.a, null), d.a.createElement(hs.a, {
						comment: e,
						language: l,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(ks.c)(e) && !x && d.a.createElement(vs.b, {
						text: "".concat(N),
						onClick: () => {
							h(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: on(e.id)
					}, d.a.createElement(en, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: on(e.id)
					}), e.ignoreReports ? d.a.createElement(zs, null) : d.a.createElement(Ys, null)), R && d.a.createElement(vs.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, d.a.createElement(vs.a, null), d.a.createElement(ys.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: T,
						isUserMod: I,
						onDistinguishComment: m,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: sn(e.id)
					}))), this.props.reportFlowIsOpen && d.a.createElement(Is.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Is.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var dn = Object(c.b)(rn, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n,
						language: o
					} = t;
					return {
						deleteComment: () => n && e(Object(w.db)(o, s.id, s.postId)),
						handleDelete: () => {
							e(Object($.i)(tn(s.id))), e(Object(N.g)({
								tooltipId: nn(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(w.V)({
								commentId: s.id,
								draftKey: Object(E.a)(u.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(w.ob)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onDistinguishComment: (t, n) => e(Object(w.S)(s.id, t, n)),
						onGildClick: () => e(Object(ls.d)(s.id)),
						onIgnoreReports: () => e(Object(w.pb)(s.id)),
						onReportClick: () => e(Object(ms.j)(s.id)),
						onToggleSave: () => e(Object(w.gb)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.g)({
							tooltipId: sn(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.g)({
							tooltipId: on(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object($.i)(tn(s.id))),
						toggleSendReplies: () => e(Object(w.hb)(s.id))
					}
				})(Object(F.b)(an)),
				cn = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ln = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				mn = s("./src/reddit/components/GildModal/Loader.tsx"),
				pn = s("./src/reddit/components/ModModeReports/index.tsx"),
				un = s("./src/reddit/components/RichTextJson/index.tsx"),
				hn = s("./src/reddit/components/VerticalVotes/index.tsx"),
				bn = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				gn = s("./src/reddit/constants/componentTestIds.ts"),
				xn = s("./src/reddit/controls/ErrorText/index.tsx"),
				Cn = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				vn = s("./src/reddit/models/Vote/index.ts"),
				On = s("./src/reddit/selectors/gild.ts"),
				yn = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				En = s("./src/reddit/selectors/moderatingComments.ts"),
				fn = s("./src/reddit/components/Comments/Comment/index.m.less"),
				wn = s.n(fn);

			function jn() {
				return (jn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var kn = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Pn = O.a.wrapped(as, "ExpandButton", wn.a),
				In = O.a.wrapped(xn.b, "ErrorText", wn.a),
				_n = O.a.wrapped(hn.a, "VerticalVotes", wn.a),
				Tn = O.a.wrapped(cn.a, "TopMeta", wn.a),
				Sn = O.a.div("CommentContentWrapper", wn.a),
				Nn = O.a.div("CommentWrapper", wn.a),
				Ln = O.a.div("CommentBody", wn.a),
				Mn = O.a.wrapped(Kt, "CommentCreation", wn.a),
				Rn = O.a.wrapped(Mn, "EditCommentForm", wn.a),
				An = Object(U.t)(),
				Bn = Object(c.b)(() => Object(m.c)({
					comment: (e, t) => Object(kt.n)(e, t),
					currentProfileModPermissions: U.g,
					depth: (e, t) => Object(kt.j)(e, t),
					collapsed: En.b,
					collapsedBecauseCrowdControl: En.a,
					flair: kt.e,
					focused: kt.u,
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(ln.b)(s);
						return Object(On.c)(e, n)
					},
					isEditing: kt.z,
					isLoggedIn: ce.K,
					isPendingDeletion: kt.A,
					language: ce.T,
					moderatorPermissions: (e, t) => {
						const s = Object(kt.n)(e, t);
						return s ? Object(Tt.j)(e, {
							subredditId: s.subredditId
						}) : null
					},
					modModeEnabled: U.O,
					errorMsgs: kt.E,
					replyFormOpen: kt.H,
					subreddit: U.q,
					subredditType: kt.J,
					highlightComment: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(kt.q)(e);
						if (n === yn.a.None) return !1;
						const o = Object(kt.n)(e, {
							commentId: s
						});
						if (!o) return !1;
						const r = Object(ce.q)(e),
							a = !!Object(Tt.i)(e, {
								postId: o.postId
							}),
							i = Object(q.I)(e, {
								postId: o.postId
							});
						if (!i || !i.previousVisits || i.previousVisits.length < 1) return !1;
						const d = n === yn.a.Last ? i.previousVisits[i.previousVisits.length - 1] : i.previousVisits[0];
						return (a || r) && o.created > d
					}
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(w.nb)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(w.pb)(s)),
						onVoteClick: t => {
							const [n, o] = t === vn.a.upvoted ? [Object(w.rb)(s), "upvote_comment"] : [Object(w.T)(s), "downvote_comment"];
							r(o)(), e(n)
						}
					}
				}),
				Fn = Object(Xt.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Dn = An(Bn(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: r,
						collapsedBecauseCrowdControl: a,
						currentProfileModPermissions: c,
						depth: l,
						errorMsgs: m,
						flair: h,
						focused: b,
						gildModalIsOpen: x,
						highlightComment: C,
						isActive: v,
						isEditing: O,
						isLoggedIn: y,
						isPendingDeletion: f,
						language: j,
						moderatorPermissions: k,
						modModeEnabled: P,
						onCollapseClick: I,
						onIgnoreReports: _,
						onLineMouseOver: T,
						onVoteClick: S,
						replyFormOpen: N,
						subreddit: M,
						trackClick: R,
						renderedInOverlay: A,
						subredditType: B
					} = e, F = !O && !n.isDeleted && !!m && m.length > 0, D = Object(E.a)(u.c.edit, n.id), W = Object(E.a)(u.c.replyToComment, n.id), H = Object(us.a)(k), V = n.authorIsContractor && B === jt.c.EmployeesOnly, U = n.isLocked;
					return d.a.createElement(Nn, {
						className: Object(g.a)("Comment ".concat(n.id), {
							[wn.a.focused]: b,
							[wn.a.topLevel]: !l
						})
					}, r && d.a.createElement(Pn, {
						className: n.id,
						onClick: () => {
							s(), I(), R("collapse")()
						},
						onMouseOver: () => T(n.id),
						onMouseOut: s
					}), !r && !n.isDeleted && d.a.createElement(_n, {
						compact: !0,
						downvoteButtonClassName: wn.a.voteButton,
						downvoteClassName: wn.a.upDownVote,
						model: n,
						onVoteClick: S,
						upvoteButtonClassName: wn.a.voteButton,
						upvoteClassName: wn.a.upDownVote
					}), d.a.createElement(Sn, {
						className: Object(g.a)({
							[wn.a.highlightComment]: C,
							[wn.a.isActive]: v,
							[wn.a.isCollapsed]: r,
							[wn.a.isLocked]: U,
							[wn.a.isPendingDeletion]: f,
							[wn.a.isRemoved]: !!n.bannedBy
						})
					}, d.a.createElement(Cn.a, null, Object(L.a)(j, "comment.level", {
						level: l + 1
					})), d.a.createElement(Tn, {
						childrenInfo: t,
						className: Object(g.a)({
							[wn.a.collapsed]: r
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: a,
						comment: n,
						commentsPageKey: o,
						flair: h,
						language: j,
						renderedInOverlay: A,
						renderContractorBadge: V
					}), !r && d.a.createElement(i.Fragment, null, O && d.a.createElement(Rn, {
						autofocus: !0,
						commentsPageKey: o,
						depth: l,
						draftType: u.c.edit,
						draftKey: D,
						rtJson: Object(bn.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(w.eb)({
							language: j,
							id: n.id,
							commentsPageKey: o,
							depth: l,
							draftKey: D,
							formData: e
						}),
						submitButtonText: Object(p.c)("save edits")
					}), !O && !n.isDeleted && d.a.createElement(Ln, {
						"data-test-id": gn.d
					}, d.a.createElement(un.a, {
						content: Object(bn.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: Fn(e)
					})), P && H && Object(ks.c)(n) && d.a.createElement(pn.a, {
						language: j,
						onIgnoreReports: _,
						reportable: n
					}), !O && !n.isDeleted && y && d.a.createElement(dn, {
						comment: n,
						commentsPageKey: o,
						depth: l,
						language: j,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: P,
						moderatorPermissions: c || k,
						renderedInOverlay: A,
						subreddit: M,
						trackClick: R
					}), F && m.map(e => d.a.createElement(In, {
						language: j
					}, e)), N && d.a.createElement(Mn, {
						autofocus: !0,
						commentsPageKey: o,
						depth: l,
						draftType: u.c.replyToComment,
						draftKey: W,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: (e, t) => {
							var {
								validate: s
							} = e, r = kn(e, ["validate"]);
							return s ? Object(w.sb)({
								commentsPageKey: o,
								draftKey: W,
								language: j,
								parentCommentDepth: l,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							}) : Object(w.jb)({
								commentsPageKey: o,
								draftKey: W,
								language: j,
								parentCommentDepth: l,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							})
						},
						submitButtonText: Object(p.c)("Reply")
					}))), x && d.a.createElement(mn.a, null))
				}));
			var Wn = e => d.a.createElement(yt.a.Consumer, null, t => d.a.createElement(Dn, jn({}, e, {
					trackClick: t
				}))),
				Hn = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				Vn = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Un = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Kn = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Gn = s.n(Kn);
			const Yn = O.a.div("Wrapper", Gn.a),
				zn = O.a.wrapped(Un.a, "ArrowRight", Gn.a),
				Jn = O.a.wrapped(Hn.a, "LinkOrOverlayLink", Gn.a),
				qn = O.a.span("HoverSpan", Gn.a),
				Qn = Object(m.c)({
					language: ce.T,
					permalink: (e, t) => Object(kt.m)(e, {
						commentId: Object(kt.s)(e, t).parentId
					})
				});
			var Xn = Object(c.b)(Qn)(Object(Vn.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return d.a.createElement(Yn, {
						className: Object(g.a)({
							[Gn.a.isActive]: t
						})
					}, d.a.createElement(Jn, {
						isOverlay: !!s,
						to: Object(oe.b)(n)
					}, d.a.createElement(qn, null, d.a.createElement(nt.c, null, "Continue this thread")), " ", d.a.createElement(zn, null)))
				})),
				Zn = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				$n = s.n(Zn);
			const eo = O.a.div("MoreCommentsItemWrapper", $n.a),
				to = O.a.p("MoreComments", $n.a),
				so = O.a.wrapped(to, "MoreCommentsInteractive", $n.a),
				no = Object(m.c)({
					moreCommentsItem: kt.B,
					moreCommentsPending: kt.C,
					language: ce.T
				});
			var oo = Object(c.b)(no, (e, t) => ({
					moreCommentsClicked: () => e(Object(w.Z)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					let {
						language: t,
						isActive: s,
						moreCommentsClicked: n,
						moreCommentsItem: o,
						moreCommentsPending: r
					} = e;
					return d.a.createElement(eo, null, r ? d.a.createElement(to, null, d.a.createElement(nt.c, null, "loading...")) : d.a.createElement(yt.a.Consumer, null, e => d.a.createElement(so, {
						className: Object(g.a)({
							[$n.a.isActive]: s
						}),
						onClick: () => {
							n(), e("load_more_comment")()
						}
					}, Object(L.c)(t, "comment.moreReply", o.numComments, {
						numComments: o.numComments
					}))))
				}),
				ro = s("./node_modules/lodash/times.js"),
				ao = s.n(ro),
				io = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				co = s.n(io);
			const lo = O.a.wrapped(e => d.a.createElement("div", e, d.a.createElement("i", {
					className: Qt.n
				})), "Line", co.a),
				mo = O.a.div("LineContainer", co.a),
				po = O.a.div("ShortLineContainer", co.a);
			var uo = e => {
					const {
						collapsed: t,
						depth: s,
						onLineClick: n,
						onLineMouseOver: o,
						onLineMouseOut: r,
						onShortLineClick: a,
						parentNodeIds: i,
						type: c
					} = e;
					return d.a.createElement(mo, null, ao()(s + 1, e => e === s ? c !== qt.a.Comment || t ? null : d.a.createElement(po, {
						key: i[e]
					}, d.a.createElement(lo, {
						className: i[e],
						onClick: a,
						onMouseOver: () => o(i[e]),
						onMouseOut: () => r(i[e])
					})) : d.a.createElement(lo, {
						className: i[e],
						key: i[e],
						onClick: n(e),
						onMouseOver: () => o(i[e]),
						onMouseOut: () => r(i[e])
					})))
				},
				ho = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				bo = s.n(ho);
			const go = O.a.div("CommentListNodeWrapper", bo.a),
				xo = e => {
					const t = document.querySelectorAll(".".concat(e));
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(Qt.g)
				},
				Co = () => {
					const e = document.querySelectorAll(".".concat(Qt.g));
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(Qt.g)
				};
			var vo = Object(c.b)(() => Object(m.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(En.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(kt.l)(e, t),
				depth: (e, t) => Object(kt.j)(e, t),
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isCommentHighlightExperiment: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(kt.l)(e, {
						commentLink: s
					});
					return s.type === qt.a.Comment && !!n && !!n.awardCountsById && !!Object(Jt.a)(e)
				},
				isNightmodeOn: ce.V
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(w.K)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(w.nb)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: a,
					isActive: i,
					isCommentHighlightExperiment: c,
					isHidden: l,
					isNightmodeOn: m,
					onLineClick: p,
					onShortLineClick: u,
					parentNodeIds: h,
					renderedInOverlay: b,
					scrollToAndRemeasure: x
				} = e;
				return d.a.createElement(go, {
					className: Object(g.a)(s, {
						[bo.a.isHidden]: l,
						[bo.a.isAwarded]: c,
						[bo.a.isNightmodeOn]: m
					}),
					id: o.id,
					style: {
						paddingLeft: a * (H.x + H.w) + (o.type === qt.a.Comment ? H.x : 0)
					},
					tabIndex: -1
				}, d.a.createElement(uo, {
					collapsed: n,
					depth: a,
					onLineClick: p,
					onLineMouseOver: xo,
					onLineMouseOut: Co,
					onShortLineClick: u,
					type: o.type,
					parentNodeIds: h
				}), Oo({
					childrenInfo: t,
					clearHovered: Co,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: xo,
					isActive: i,
					renderedInOverlay: b,
					scrollToAndRemeasure: x
				}))
			});
			const Oo = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					isActive: r,
					onLineMouseOver: a,
					renderedInOverlay: i,
					scrollToAndRemeasure: c
				} = e;
				switch (n.type) {
					case qt.a.Comment:
						return d.a.createElement(Wn, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							isActive: r,
							onLineMouseOver: a,
							renderedInOverlay: i,
							scrollToAndRemeasure: c
						});
					case qt.a.MoreComments:
						return d.a.createElement(oo, {
							commentsPageKey: o,
							isActive: r,
							moreCommentsId: n.id
						});
					case qt.a.ContinueThread:
						return d.a.createElement(Xn, {
							id: n.id,
							isActive: r
						})
				}
			};
			var yo = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Eo = s("./src/reddit/components/Comments/States/index.tsx"),
				fo = s("./src/reddit/components/Scroller/Simple.tsx"),
				wo = s("./src/reddit/helpers/commentList/index.ts"),
				jo = s("./src/lib/LRUCache/index.ts"),
				ko = s("./src/reddit/components/Comments/index.m.less"),
				Po = s.n(ko);
			const Io = H.g + 10,
				_o = 65,
				To = O.a.wrapped(fo.b, "Scroller", Po.a),
				So = Object(m.c)({
					allCollapsed: kt.a,
					commentLinks: kt.k,
					commentThreadLinkSet: kt.p,
					language: ce.T,
					measureScrollFPS: Ne.d.measureScrollFPS,
					moreComments: kt.b,
					postPermalink: q.H
				}),
				No = Object(c.b)(So, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(w.L)(t)),
					onCommentLeftViewport: (t, s) => e(Object(w.Q)(t, s))
				})),
				Lo = new jo.a(500),
				Mo = new jo.a(500),
				Ro = (e, t) => {
					const s = "entered-".concat(e);
					let n = Lo.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, Lo.set(s, n)), n
				},
				Ao = (e, t) => {
					const s = "left-".concat(e);
					let n = Mo.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, Mo.set(s, n)), n
				};
			class Bo extends d.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							a = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = a.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, yo.c(), this.childrenInfoMap = {}
				}
				componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && h.c.cancel(this.timerId), e.length && (this.timerId = h.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(h.b)(x.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: h.c.end(this.timerId)
					})
				}
				componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: o,
						moreComments: r
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !zt()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, o, r)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !zt()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				componentWillUpdate(e) {
					this.timerId && h.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = h.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(h.b)(x.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: h.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && h.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						a = 0,
						i = !1;
					yo.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (yo.a(c.id), a += Object(wo.d)(c, n), c.type === qt.a.ContinueThread && (i = !0)) : (this.childrenInfoMap[o] = {
							numChildren: a,
							hasContinueThread: i
						}, o = null, r = 1 / 0, a = 0, i = !1)), !o && t[c.id] && (o = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						renderedInOverlay: r
					} = this.props, a = Ro(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					}), i = Ao(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					});
					return {
						estHeight: yo.b(e.id) ? 0 : _o,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: i,
						render: t => {
							let {
								placeholderRecommended: n,
								height: o,
								width: a,
								scrollToAndRemeasure: i
							} = t;
							return n ? d.a.createElement("div", {
								style: {
									height: o,
									backgroundColor: "#fff"
								}
							}) : d.a.createElement(vo, {
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								isHidden: yo.b(e.id),
								scrollToAndRemeasure: i,
								renderedInOverlay: !!r,
								parentNodeIds: this.getParentNodeIds(e)
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						renderedInOverlay: o
					} = this.props;
					let r;
					if (n) {
						r = "comments-".concat(o ? "lightbox" : "page")
					}
					const a = t.map((e, t) => this.getScrollChild(e, t));
					return d.a.createElement(To, {
						className: Object(g.a)(Po.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(V.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: Io,
						trackingName: r
					}, a)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Eo.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Eo.c, null)
				}
			}
			var Fo = No(Bo),
				Do = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Wo = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ho = (s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./src/reddit/actions/post.ts")),
				Vo = s("./src/reddit/actions/toaster.ts"),
				Uo = s("./src/lib/makeApiRequest/index.ts"),
				Ko = s("./src/lib/omitHeaders/index.ts"),
				Go = s("./src/reddit/constants/headers.ts"),
				Yo = s("./src/reddit/models/Toast/index.ts");
			const zo = (e, t) => async (s, n, o) => {
				let {
					apiContext: r
				} = o;
				const a = await (async (e, t, s) => Object(Uo.b)(Object(Ko.a)(e, [Go.a]), {
						endpoint: "".concat(e.apiUrl, "/api/set_suggested_sort/"),
						method: x.bb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					i = "error-block-".concat(t),
					d = "success-block-".concat(t);
				if (a.ok) {
					s(Object(Ho.E)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? Object(p.c)("Suggested sort is on.") : Object(p.c)("Suggested sort is off.");
					s(Vo.e({
						id: d,
						kind: Yo.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(Vo.e({
					id: i,
					kind: Yo.b.Error,
					text: Object(p.c)("Try again later"),
					buttonText: Object(p.c)("Retry"),
					buttonAction: zo(e, t)
				}))
			};
			var Jo = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				qo = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Qo = s("./src/reddit/controls/Dropdown/index.tsx"),
				Xo = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Zo = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				$o = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const er = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object($o.listing)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object($o.userSubreddit)(r)
				}),
				tr = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				sr = e => ({
					subreddit: Object($o.subreddit)(e),
					userSubreddit: Object($o.userSubreddit)(e)
				}),
				nr = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, sr);
			var or = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				rr = s("./src/reddit/icons/svgs/Info/index.tsx"),
				ar = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				ir = s.n(ar);
			const dr = Object(qo.a)(Qo.a),
				cr = O.a.wrapped(or.b, "DropdownTriangle", ir.a),
				lr = O.a.div("HighlightWrapper", ir.a),
				mr = O.a.div("Title", ir.a),
				pr = e => e === yn.a.First ? Object(p.c)("First Visit") : e === yn.a.Last ? Object(p.c)("Last Visit") : "None";
			class ur extends d.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== yn.a.None) {
							e(t === yn.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", yn.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", yn.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", yn.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentWillUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: n
					} = this.props;
					return d.a.createElement(lr, null, d.a.createElement(mr, {
						onClick: s
					}, Object(p.c)("highlight comments since")), d.a.createElement(Xo.b, {
						className: Object(g.a)(ir.a.HighlightPicker, ir.a.Row),
						displayText: pr(n),
						id: t,
						onClick: s
					}), d.a.createElement(cr, {
						onClick: s
					}), d.a.createElement(dr, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, d.a.createElement(Xo.b, {
						displayText: pr(yn.a.First),
						isSelected: n === yn.a.First,
						onClick: this.onDropdownClickFirst
					}), d.a.createElement(Xo.b, {
						displayText: pr(yn.a.Last),
						isSelected: n === yn.a.Last,
						onClick: this.onDropdownClickLast
					}), d.a.createElement(Xo.b, {
						displayText: pr(yn.a.None),
						isSelected: n === yn.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var hr = ur;
			const br = "CommentSort--SortPicker",
				gr = "CommentSort--HighlightPicker",
				xr = "CommentSort--Tooltip",
				Cr = Object(qo.a)(Qo.a),
				vr = O.a.button("ContestMode", ir.a),
				Or = O.a.wrapped(or.b, "DropdownTriangle", ir.a),
				yr = O.a.wrapped(rr.a, "Info", ir.a),
				Er = O.a.wrapped(Xo.b, "Row", ir.a),
				fr = O.a.button("SetSort", ir.a),
				wr = O.a.button("SortLink", ir.a),
				jr = O.a.div("Title", ir.a),
				kr = O.a.wrapped(Zo.a, "ToggleSwitch", ir.a),
				Pr = O.a.wrapped(Hn.a, "ViewFullLinkOrOverlayLink", ir.a),
				Ir = O.a.wrapped(Jo.c, "Tooltip", ir.a),
				_r = Object(m.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(kt.m)(e, {
							commentId: s
						})
					},
					contestModeIsEnabled: q.A,
					contestModeModalIsOpen: Object(de.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(Nt.b)(br),
					highlightIsOpen: Object(Nt.b)(gr),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(Tt.i)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					postPermalink: q.H,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(ce.q)(e),
							o = !!Object(Tt.i)(e, {
								postId: s
							}),
							r = Object(q.I)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: kt.q
				});
			class Tr extends d.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(er(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(tr("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(nr(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
					}
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						contestModeIsEnabled: o,
						dropdownIsOpen: r,
						elementRef: a,
						hideTooltip: i,
						highlightIsOpen: c,
						hasModeratorPostPermissions: l,
						isOverlay: m,
						location: u,
						postPermalink: h,
						selectedHighlightSort: b,
						showCommentHighlighter: C,
						sort: v,
						suggestedSort: O,
						showTooltip: y,
						toggleContestModeModal: E
					} = this.props, f = !u.search.includes(x.q.CONFIDENCE), w = v === x.q.CONFIDENCE && f, j = l && !w, k = Object(p.c)(" (suggested)"), P = O && v === O && !w ? x.s[v] + k : x.s[v], I = o ? Object(p.c)("End contest mode?") : Object(p.c)("Start contest?"), _ = o ? Object(p.c)("End") : Object(p.c)("Start"), T = o ? Object(p.c)("Ending contest mode will make comment vote scores visible and disable random comment ordering.") : Object(p.c)("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods."), S = o && !l;
					return d.a.createElement("div", {
						className: Object(g.a)(t, ir.a.container, {
							[ir.a.hideCommentSort]: !C && S
						}),
						ref: a
					}, !S && d.a.createElement(jr, {
						onClick: this.onOpenDropdownClick
					}, Object(p.c)("Sort by")), !S && d.a.createElement(d.a.Fragment, null, d.a.createElement(Er, {
						className: Object(g.a)(ir.a.SortPicker, ir.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: P,
						id: br,
						noHover: !0,
						skipRoleAttr: !0
					}), d.a.createElement(Or, {
						onClick: this.onOpenDropdownClick
					}), d.a.createElement(Cr, {
						isOpen: r,
						tooltipId: br
					}, [x.q.CONFIDENCE, x.q.TOP, x.q.NEW, x.q.CONTROVERSIAL, x.q.OLD, x.q.QA].map(e => {
						const t = s || h,
							n = Object(oe.b)(t);
						return d.a.createElement(Pr, {
							isOverlay: m,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(n, "?sort=").concat(e)
						}, d.a.createElement(Xo.b, {
							displayText: O && e === O ? x.s[e] + k : x.s[e],
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), j && !S && (O ? d.a.createElement(wr, {
						onClick: v !== O ? this.setSortOnClick : this.clearSortOnClick
					}, v !== O ? Object(p.c)("Set new suggested sort") : Object(p.c)("Clear suggested sort")) : d.a.createElement(fr, null, d.a.createElement(wr, {
						onClick: this.setSortOnClick
					}, Object(p.c)("Set as suggested sort")), d.a.createElement("span", {
						id: xr,
						onMouseEnter: y,
						onMouseLeave: i
					}, d.a.createElement(Ir, {
						text: Object(p.c)("Suggested sort defaults Redditors to a specific way of sorting comments within this post"),
						tooltipId: xr
					}), d.a.createElement(yr, null)))), l && d.a.createElement(vr, {
						onClick: this.props.toggleContestModeModal
					}, Object(p.c)("Contest"), d.a.createElement(kr, {
						on: o
					})), C && d.a.createElement(hr, {
						changeHighlightSort: e,
						highlightIsOpen: c,
						id: gr,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: b,
						trackHighlight: tr
					}), n && d.a.createElement(Os.a, {
						actionText: _,
						headerText: I,
						modalText: T,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			var Sr = Object(c.b)(_r, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(w.J)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(N.g)({
							tooltipId: br
						})),
						onOpenHighlightDropdown: t => {
							e(Object(N.g)({
								tooltipId: gr
							})), t()
						},
						onSetSuggestedSort: t => e(zo(s, t)),
						hideTooltip: () => e(Object(N.h)()),
						setContestMode: t => e(Object(Ho.I)(t, s)),
						showTooltip: () => e(Object(N.g)({
							tooltipId: xr
						})),
						toggleContestModeModal: () => e(Object($.i)("CommentSort--ContestMode--Modal"))
					}
				})(Object(F.b)(Tr)),
				Nr = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Lr = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Mr = s("./src/reddit/controls/Button/index.tsx"),
				Rr = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Ar = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				Br = s.n(Ar);
			const {
				fbt: Fr
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Dr = 3, Wr = Object(m.c)({
				hasDismissedTruncation: rt.b,
				isLoggedIn: ce.J,
				isPostSEOEligible: It.d,
				listingBelowAllVariant: it.b,
				m2mHomeRedirectVariant: dt.f,
				postSEOV2TruncatedVariant: It.j,
				shouldShowHomeUpsell: ct.y
			}), Hr = Object(c.b)(Wr), Vr = e => e.shouldShowHomeUpsell ? "1000px" : "500px";
			class Ur extends d.a.Component {
				constructor(e) {
					super(e), this.isHomeUpsellVisible = () => this.props.isOverlay ? this.state.shouldShowHomeUpsell : this.props.shouldShowHomeUpsell, this.state = {
						shouldShowHomeUpsell: e.shouldShowHomeUpsell
					}
				}
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						hasDismissedTruncation: o,
						innerRef: r,
						isCommentsListTruncated: a,
						isLoggedIn: i,
						isOverlay: c,
						listingBelowAllVariant: l,
						m2mHomeRedirectVariant: m,
						numberOfComments: p,
						onClick: u,
						subredditOrProfile: h
					} = this.props, b = this.isHomeUpsellVisible(), x = !i, C = !Object(dt.e)(m) && b, v = Object(it.a)(l), O = !(!h || Object(jt.e)(h)), y = a && O && (p >= Dr && (!c || b) || v && !o) && (C || v || x), E = y && !e, f = y ? Br.a.TruncatedComments : "";
					return d.a.createElement("div", {
						onClick: u,
						ref: r
					}, d.a.createElement("div", {
						className: Object(g.a)(Br.a.ContentWrapper, s, f),
						style: {
							"--commentswrapper-gradient-color": Object(Rr.a)(this.props).body,
							maxHeight: y ? Vr(Object.assign({}, this.props, {
								shouldShowHomeUpsell: b,
								shouldTruncateComments: y
							})) : "unset"
						}
					}, t), E && d.a.createElement(Mr.f, {
						className: Br.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, b ? Fr._("Load more responses", null, {
						hk: "3ZM07I"
					}) : Fr._("View entire discussion ({number of comments} comments)", [Fr._param("number of comments", Object(X.b)(p))], {
						hk: "2OrRQp"
					})))
				}
			}
			var Kr = Object(Lr.a)(Hr(Ur)),
				Gr = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Yr = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.tsx")).then(e => e.default)
			});
			const zr = Object(m.c)({
				featureEnabled: Ne.d.spTopTippers
			});
			var Jr = Object(c.b)(zr)((function(e) {
					const {
						featureEnabled: t
					} = e, s = Gr(e, ["featureEnabled"]);
					return e.featureEnabled ? d.a.createElement(Yr, s) : null
				})),
				qr = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Qr = Object(Rt.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.tsx")).then(e => e.default)
			});
			const Xr = Object(m.c)({
				featureEnabled: Ne.d.spTopTippers
			});
			var Zr = Object(c.b)(Xr)((function(e) {
					const {
						featureEnabled: t
					} = e, s = qr(e, ["featureEnabled"]);
					return e.featureEnabled ? d.a.createElement(Qr, s) : null
				})),
				$r = s("./src/reddit/components/HeaderImage/index.tsx"),
				ea = s("./src/reddit/components/Hovercards/helpers.ts"),
				ta = s("./src/reddit/constants/colors.ts"),
				sa = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				na = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				oa = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				ra = s.n(oa),
				aa = () => d.a.createElement(na.a, {
					className: ra.a.BannerBase,
					color: ta.a.locked,
					icon: d.a.createElement(sa.a, {
						className: ra.a.ArchivedIcon
					}),
					subtitle: Object(p.c)("New comments cannot be posted and votes cannot be cast"),
					title: Object(p.c)("This thread is archived")
				}),
				ia = s("./src/lib/linkMatchers/customLinks.ts"),
				da = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				ca = s.n(da);
			const la = d.a.createElement(e => d.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, d.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			})), {
				className: ca.a.lockIcon
			});
			var ma = e => {
					let {
						subredditOrProfile: t
					} = e;
					const s = t ? Object(p.c)("This thread has been locked by the moderators of ".concat(Object(p.b)("communityname", (e => Object(jt.e)(e) ? ia.d.profile : ia.d.subreddit)(t) + t.name))) : Object(p.c)("This thread has been locked");
					return d.a.createElement(na.a, {
						className: ca.a.bannerBase,
						color: ta.a.locked,
						icon: la,
						subtitle: Object(p.c)("New comments cannot be posted"),
						title: s
					})
				},
				pa = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				ua = s.n(pa);
			const ha = O.a.wrapped(e => d.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, d.a.createElement("g", null, d.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			}))), "TrophyIcon", ua.a);
			var ba = Object(Lr.a)(e => {
					const {
						hasModeratorPostPermissions: t,
						theme: s
					} = e, n = t ? Object(p.c)("Comments are in random ordering and vote scores are hidden to non-mods") : Object(p.c)("Comments are in random ordering and vote scores are hidden");
					return d.a.createElement(na.a, {
						className: ua.a.contestModeEnabled,
						color: s && s.newCommunityTheme.linkText,
						icon: d.a.createElement(ha, null),
						subtitle: n,
						title: Object(p.c)("This post has contest mode enabled")
					})
				}),
				ga = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				xa = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ca = s("./src/reddit/components/PostContent/index.tsx"),
				va = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Oa = s("./src/reddit/components/SubredditNav/index.tsx"),
				ya = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ea = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				fa = s("./src/reddit/helpers/history/index.ts"),
				wa = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				ja = s.n(wa);
			const ka = e => d.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(g.a)(ja.a.lightboxContainer, {
						[ja.a.mIsCollectionLayout]: e.isCollectionLayout,
						[ja.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				Pa = e => d.a.createElement("div", {
					className: Object(g.a)(ja.a.lightboxContent, {
						[ja.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[ja.a.mIsFakeOverlay]: e.isFakeOverlay,
						[ja.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				Ia = e => d.a.createElement("div", {
					className: Object(g.a)(ja.a.lightboxSidebar, {
						[ja.a.mIsFakeOverlay]: e.isFakeOverlay,
						[ja.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class _a extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: n,
						sidebar: o
					} = this.props;
					return d.a.createElement(ka, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, d.a.createElement(Pa, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), o && d.a.createElement(Ia, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, o))
				}
			}
			var Ta = _a,
				Sa = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				Na = s("./src/reddit/components/AlertBanner/heights.ts"),
				La = s("./src/reddit/components/AppRouter/index.tsx"),
				Ma = s("./src/reddit/components/LightboxHeader/index.tsx"),
				Ra = s("./src/reddit/models/Theme/index.ts");

			function Aa() {
				return (Aa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Ba = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Fa = Object(c.b)(() => Object(m.c)({
					isM2MTopBannerVariant: dt.c,
					showAccountCompletenessBanner: e => Object(dt.c)(e) && Object(ct.k)(e),
					showFPR: ce.I,
					showSuspended: ce.P
				})),
				Da = Object(Lr.a)(e => {
					var {
						className: t,
						isCollectionLayout: s,
						theme: n
					} = e, o = Ba(e, ["className", "isCollectionLayout", "theme"]);
					const r = Object(Rr.a)(Object.assign({
						theme: n
					}, o));
					return d.a.createElement("div", Aa({
						className: Object(g.a)(ja.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(Ra.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(s ? H.i : H.j, "px")
						}
					}, o))
				});
			class Wa extends d.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							showM2MTopBanner: this.props.isM2MTopBannerVariant && this.props.showAccountCompletenessBanner,
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return d.a.createElement(La.a, {
							className: Object(g.a)(ja.a.fakeOverlayLightboxHeaderWrapper, {
								[ja.a.narrow]: !this.props.isCollectionLayout
							}, Object(Na.b)(ja.a, t))
						}, d.a.createElement(Ma.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(Da, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), d.a.createElement(Sa.a.Consumer, null, this.renderWrapper), d.a.createElement(Ta, e))
				}
			}
			var Ha = Fa(Wa),
				Va = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ua = s("./src/reddit/models/MonthsToMinutes/index.ts"),
				Ka = s("./src/reddit/actions/otherDiscussions/constants.ts");
			const Ga = (e, t) => Object.assign({}, Object($o.defaults)(e), {
				media: Object($o.media)(e, t),
				profile: Object($o.profile)(e),
				subreddit: Object($o.subreddit)(e) || Object($o.subredditByPostOrCommentId)(e, t)
			});
			var Ya = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				za = s.n(Ya);
			const Ja = Object(c.b)(() => Object(m.c)({
				headComment: kt.y,
				otherDiscussionsCount: q.y,
				post: kt.F
			}));
			var qa = Object(F.b)(Ja(e => {
					let {
						commentId: t,
						headComment: s,
						isOverlay: n,
						otherDiscussionsCount: o,
						post: r,
						postId: a,
						sendEvent: i
					} = e;
					if (!r) return null;
					const c = void 0 !== t,
						l = r.permalink,
						m = o > 0,
						p = Object(oe.b)(Object(Ka.e)(l));
					return c || m ? d.a.createElement("div", {
						className: za.a.CommentsNavigationPane
					}, c && d.a.createElement("div", null, d.a.createElement(Hn.a, {
						className: za.a.linkOrOverlay,
						isOverlay: n,
						to: Object(oe.b)(l)
					}, d.a.createElement(nt.c, null, "View all comments")), s && null !== s.parentId && d.a.createElement(Hn.a, {
						className: za.a.linkOrOverlay,
						isOverlay: n,
						to: Object(oe.b)(s.permalink + "?context=8&depth=9")
					}, d.a.createElement(nt.c, null, "Show parent comments"))), m && d.a.createElement(Hn.a, {
						className: za.a.OtherDiscussionsLink,
						isOverlay: n,
						onClick: () => i((e => t => Object.assign({
							source: "post",
							action: "click",
							noun: "other_discussions",
							post: Object($o.post)(t, e)
						}, Ga(t, e)))(a)),
						to: p
					}, d.a.createElement(nt.c, null, "View discussions in ", d.a.createElement(nt.b, {
						name: "otherDiscussionsCount"
					}, o), " other", d.a.createElement(nt.a, {
						name: "communities",
						singular: " community",
						plural: " communities",
						count: o
					})))) : null
				})),
				Qa = s("./src/reddit/selectors/listings.ts"),
				Xa = s("./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less"),
				Za = s.n(Xa);
			const $a = O.a.div("Container", Za.a),
				ei = Object(c.b)(() => Object(m.c)({
					apiError: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Qa.c)(e, {
							listingKey: Object(Je.a)(s, null, {
								isOtherDiscussions: !0
							})
						})
					},
					apiPending: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Qa.d)(e, {
							listingKey: Object(Je.a)(s, null, {
								isOtherDiscussions: !0
							})
						})
					},
					otherDiscussionsCount: q.y
				}));
			var ti = Object(F.b)(ei(e => {
					let {
						apiError: t,
						apiPending: s,
						commentSort: n,
						isOverlay: o,
						language: r,
						otherDiscussionsCount: a,
						postId: i,
						postPermalink: c,
						sendEvent: l
					} = e;
					const m = Object(Je.a)(i, null, {
							isOtherDiscussions: !0
						}),
						p = a > 0 ? a : 0;
					return d.a.createElement($a, null, d.a.createElement("div", {
						className: Object(g.a)(Za.a.HeaderPane, za.a.CommentsNavigationPane)
					}, d.a.createElement("div", {
						className: Za.a.OtherDiscussionsTitle
					}, d.a.createElement(nt.c, null, d.a.createElement(nt.b, {
						name: "otherDiscussionsCount"
					}, p), " other", d.a.createElement(nt.a, {
						name: "discussions",
						singular: " discussion",
						plural: " discussions",
						count: a
					}))), d.a.createElement(Hn.a, {
						className: za.a.OtherDiscussionsLink,
						isOverlay: o,
						onClick: () => l((e => t => Object.assign({
							source: "other_discussions",
							action: "click",
							noun: "dismiss",
							post: Object($o.post)(t, e)
						}, Ga(t, e)))(i)),
						to: Object(oe.b)(c)
					}, d.a.createElement(Rs.a, {
						className: Za.a.CommentIcon,
						role: "presentation"
					}), d.a.createElement(nt.c, null, "Return to comments"))), t && d.a.createElement(Eo.e, {
						apiError: t,
						commentId: null,
						language: r,
						postId: i,
						sort: n
					}), s && !t && d.a.createElement(Eo.f, null), !s && !t && d.a.createElement(Xe.a, {
						enableElementHiding: !1,
						forcedLayout: et.g.Compact,
						listingKey: m,
						listingName: $e.d.OtherDiscussions,
						listingViewed: (e, t) => Object(st.d)(m, n, t, e),
						noPostsComponent: () => d.a.createElement(Eo.b, null),
						inSubredditOrProfile: !1,
						preventScrollOnMount: !0
					}))
				})),
				si = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				ni = s("./src/reddit/pages/CommentsPage/index.m.less"),
				oi = s.n(ni);

			function ri() {
				return (ri = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "CommentsPage", (function() {
				return ui
			}));
			var ai = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const ii = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				di = 80,
				ci = 200,
				li = 80,
				mi = 32;
			class pi extends d.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = a()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: s,
							props: {
								userHovercardIsOpen: n,
								onToggleTooltip: o,
								post: r,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const i = t === window ? t.scrollY : t ? t.scrollTop : 0,
							d = null !== this.scrollY && Math.abs(i - this.scrollY) > di,
							c = r && r.media && r.media.type === wt.n.EMBED ? r.media.provider : null,
							l = r && r.media && wt.d.has(r.media.type) && (!c || !wt.q.has(c));
						this.scrollY = i, !e && void 0 !== s && i >= s && (this.didScrollPastPost = !0, this.props.canTriggerACBanner && this.props.showACBanner()), e && void 0 !== s && i < s && (this.didScrollPastPost = !1, n && v.a.write(() => {
							o(Object(ea.b)({
								itemId: a,
								tooltipIdPrefix: Ge.a,
								tooltipType: va.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !d && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (d ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * x.F) : (this.postPaused = !1, v.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, v.a.write(this.postScrollItemRef.pauseContent)))
					}, x.F), this.sendEventWithName = e => () => this.props.sendEvent(Object(tt.b)(this.props.postId, e)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							listingBelowAllVariant: s,
							post: n
						} = this.props;
						if (t(), Object(it.a)(s)) {
							const t = n && Object(Y.l)(n) && n && n.belongsTo.id;
							t && e(t)
						}
						this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Ea.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === Ct.b.F || e.keyCode === Ct.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null
					}
				}
				componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				componentDidMount() {
					const {
						commentFormRef: e,
						commentSortRef: t,
						props: {
							isLoggedIn: s,
							isOverlay: n,
							post: o,
							shouldScrollToComments: r
						}
					} = this;
					n ? (this.scrollContainerEl = document.getElementById(V.d), r && (e || t) && o && o.numComments ? this.scrollToComments() : v.a.write(() => {
						setTimeout(() => {
							Object(C.c)(this.scrollContainerEl, 0)
						})
					})) : this.scrollContainerEl = window, this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), v.a.read(() => {
						this.props.isOverlay || Object(f.d)(f.c.CommentsPage, s)
					}), this.sendChatPostExposureEvent()
				}
				componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(G.a)(this.props.post);
						this.props.post && this.props.post.numComments ? v.a.read(this.handleScroll) : v.a.write(() => {
							e || Object(C.c)(this.scrollContainerEl, 0), v.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && v.a.write(() => {
							setTimeout(() => {
								Object(C.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = H.c + (this.props.isOverlay ? H.o : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(V.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								a = this.props.isOverlay ? mi : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= a && v.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(C.c)(n, a) : Object(C.c)(document, a)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						listingBelowAllVariant: t,
						subredditOrProfile: s,
						truncateCommentsList: n
					} = this.props;
					if (Object(it.a)(t)) {
						const t = s && s.id;
						t && !e.includes(t) && n()
					}
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = ci
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					v.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - li, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - li, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), v.a.write(() => {
								Object(C.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => v.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return h.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					v.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = h.c.end(t);
						n(Object(st.b)(t, s, e, b.TimerType.InApp, r, o))
					})
				}
				sendChatPostExposureEvent() {
					const {
						sendChatPostExposureEvent: e,
						hasModeratorPostPermissions: t,
						isChatPost: s
					} = this.props;
					e(s, t)
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: n,
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), a = Object(ya.a)(e, r, o);
					if (!a) return null;
					let i = d.a.createElement(Ke.b, a);
					return s && (i = d.a.createElement(Ta, {
						content: i
					})), i
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentsPageKey: n,
						isNightmodeOn: o,
						isLoggedIn: r,
						isOverlay: a,
						language: i,
						post: c,
						postId: l,
						postSEOV2IdCardVariant: m,
						sendEvent: p,
						subredditName: u,
						subredditOrProfile: h,
						profileCollectionsEnabled: b
					} = this.props, C = Object(It.e)(m);
					if (!c) {
						if (t) return d.a.createElement(Eo.f, null);
						const s = this.renderPageError();
						return s || (e ? d.a.createElement(Eo.d, null) : d.a.createElement(Eo.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const v = this.isCommentPermalink(),
						O = c.belongsTo.type === vt.a.PROFILE,
						y = Object(G.a)(c) && (!O || b),
						E = !r;
					return d.a.createElement(bi, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: r,
						isOverlay: a,
						isSwapVariant: C,
						post: c,
						subredditOrProfile: h,
						shouldFitPageToContent: E,
						isCollectionLayout: y
					}, h && h.isQuarantined && d.a.createElement(ga.a, {
						subredditName: h.name
					}), d.a.createElement(xa.a, null), d.a.createElement("div", {
						className: Object(g.a)(oi.a.PageContentWrapper, {
							[oi.a.LargePageContent]: y,
							[oi.a.ChatPage]: this.props.isChatPostExperiment
						}),
						key: "PostContentWrapper"
					}, y && d.a.createElement(Ie, {
						isOverlay: a,
						language: i,
						isNightmodeOn: o,
						postId: l
					}), d.a.createElement(ii, {
						condition: y,
						wrap: e => d.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: oi.a.CollectionBodyWrapper
						}, e)
					}, d.a.createElement(Ca.a, {
						isCommentPermalink: v,
						isExclusivePost: !0,
						isOverlay: a,
						postId: l,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: p
					}), h && d.a.createElement(Zr, {
						className: oi.a.TopTippers,
						contentId: l,
						creatorId: c.authorId,
						subredditId: h.id
					}), h && d.a.createElement(Jr, {
						className: oi.a.TopTippersBenefits,
						contentId: l,
						creatorId: c.authorId,
						subredditId: h.id
					}), d.a.createElement(Ue, {
						listingName: u || "",
						isOverlay: a,
						placement: x.c.ABOVE_THE_FOLD,
						postId: l
					}), this.renderCommentPanes())), h && !Object(jt.e)(h) && d.a.createElement(gt, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						postId: l,
						subredditOrProfile: h
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: o,
						contestModeIsEnabled: r,
						fullyLoaded: a,
						hasModeratorPostPermissions: i,
						headComment: c,
						isChatPostExperiment: l,
						isLoggedIn: m,
						isOverlay: h,
						language: b,
						location: x,
						onOtherDiscussions: C,
						openLoginModal: v,
						openRegisterModal: O,
						origin: f,
						post: j,
						postId: k,
						replyComment: P,
						sendEvent: I,
						sort: _,
						subredditAboutInfo: T,
						subredditOrProfile: S
					} = this.props;
					if (!j) return null;
					const N = this.isCommentPermalink(),
						L = [],
						M = j.isLocked && !s,
						R = !(N || j.isArchived || T && T.userIsBanned);
					if (M) L.push(d.a.createElement(ma, {
						key: "commentThreadBanner",
						subredditOrProfile: S
					}));
					else if (j.isArchived) L.push(d.a.createElement(aa, {
						key: "commentThreadBanner"
					}));
					else if (R && !l && !C)
						if (m) {
							const e = Object(E.a)(u.c.replyToPost, k);
							L.push(d.a.createElement(Kt, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: u.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: (t, s) => {
									var {
										validate: n
									} = t, r = ai(t, ["validate"]);
									return n ? w.tb(b, k, o, e, r, s) : w.lb(b, k, o, e, r, s)
								},
								submitButtonText: Object(p.c)("comment")
							}))
						} else L.push(d.a.createElement(Gt.a, {
							key: "loggedOutCommentForm",
							language: b,
							location: x,
							openLoginModal: v,
							openRegisterModal: O,
							origin: f
						}));
					if (r && L.push(d.a.createElement(ba, {
							hasModeratorPostPermissions: i,
							key: "contestModeBanner"
						})), !l && !C && L.push(d.a.createElement(Sr, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: x,
							postId: k,
							sort: _,
							suggestedSort: j.suggestedSort
						}), d.a.createElement(qa, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: h,
							key: "commentNavigation",
							postId: k
						})), !t || c || l || C)
						if (!e || c || C)
							if (C) L.push(d.a.createElement(ti, {
								commentSort: _,
								key: "otherDiscussions",
								language: b,
								postId: k,
								isOverlay: h,
								postPermalink: j.permalink
							}));
							else if (l) {
						if (S && S.id) {
							const e = P ? Object(E.a)(u.c.replyToComment, P.id) : Object(E.a)(u.c.replyToPost, k),
								s = n ? Object(y.a)(k) : o;
							L.push(d.a.createElement(Do.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !c || !a && t,
								key: "commentsChat",
								postId: k,
								renderedInOverlay: h,
								subredditId: S.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return m ? d.a.createElement(Wo.a, {
									key: "chatCommentsForm",
									language: b,
									postId: k,
									replyComment: P,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: I
								}) : d.a.createElement(Gt.a, {
									key: "loggedOutCommentForm",
									className: oi.a.ChatLoggedOutForm,
									language: b,
									location: x,
									openLoginModal: v,
									openRegisterModal: O,
									origin: f
								})
							}))
						}
					} else L.push(d.a.createElement("div", {
						className: Object(g.a)(oi.a.CommentsPaneWrapper, {
							[oi.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, d.a.createElement(Kr, ri({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: j.numComments,
						onClick: this.handleContentClick
					}), d.a.createElement(Fo, {
						commentId: n,
						commentsPageKey: o,
						postId: k,
						renderedInOverlay: h
					})))), e && c ? L.push(d.a.createElement(Eo.e, {
						key: "commentsErrorState",
						language: b,
						postId: k,
						commentId: n,
						sort: _,
						apiError: e
					})) : !a && t && L.push(d.a.createElement(Eo.a, {
						key: "commentsPlaceholder"
					}));
					else L.push(d.a.createElement(Eo.e, {
						language: b,
						postId: k,
						commentId: n,
						sort: _,
						apiError: e
					}));
					else this.didRenderLoading = !0, L.push(d.a.createElement(Eo.a, {
						key: "commentsPlaceholder"
					}));
					return d.a.createElement(yt.a.Provider, {
						value: this.sendEventWithName
					}, L)
				}
			}
			const ui = Object(U.t)()(Object(c.b)(() => Object(m.c)({
					apiError: kt.c,
					apiPending: kt.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(q.U)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canTriggerACBanner: ct.l,
					comment: kt.n,
					communityBannerDiscoveryUnit: Pt.c,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(ce.f)(e, s)
					},
					contestModeIsEnabled: q.A,
					currentUserShowNSFW: ce.Y,
					dismissedSubreddits: rt.a,
					fullyLoaded: kt.v,
					hasModeratorPostPermissions: Tt.b,
					headComment: kt.y,
					isChatPost: at.e,
					isChatPostExperiment: at.d,
					isCommentsListTruncated: ot,
					isLoggedIn: ce.K,
					isNightmodeOn: ce.V,
					isTooltipOpen: (e, t) => !!Object(Nt.a)(e),
					language: ce.T,
					listingBelowAllVariant: it.b,
					m2mHomeRedirectVariant: dt.f,
					m2mIsEnabled: ct.w,
					origin: _t.g,
					post: kt.F,
					postSEOV2IdCardVariant: It.i,
					profileCollectionsEnabled: Et.a,
					replyComment: kt.t,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(St.y)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: q.U,
					userHovercardIsOpen: (e, t) => Object(Nt.b)(Object(ea.b)({
						itemId: t.postId,
						tooltipIdPrefix: Ge.a,
						tooltipType: va.c.StickyPost
					}))(e),
					userPrefs: ce.mb
				}), (e, t) => ({
					dismissTruncation: t => e(Mt({
						subredditId: t
					})),
					expandCommentsList: () => e(P()),
					setCommentFocus: t => e(w.M({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(S.A)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(N.h)()),
					onToggleTooltip: t => e(Object(N.g)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(_.e)()),
					openRegisterModal: () => e(Object(_.f)()),
					showACBanner: () => e(T.b(Ua.a.BannerVisible)),
					goToSubredditPage: t => e(Object(l.b)(t)),
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(at.g)(n(), t, s)),
					truncateCommentsList: () => e(I())
				}))(Object(F.b)(pi))),
				hi = O.a.wrapped(Nr.a, "DetailsPageSidebar", oi.a),
				bi = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: a,
						isLoggedIn: i,
						isOverlay: c,
						isSwapVariant: l,
						post: m,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!i && !c) return d.a.createElement(Ha, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: m,
						sidebar: u && d.a.createElement(Nr.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: m,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (c) return d.a.createElement(Ta, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						sidebar: u && d.a.createElement(Nr.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: m,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = a ? H.j : Ot.a;
					return d.a.createElement(Va.a, {
						containerRef: n,
						maxWidth: H.j,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: l,
						isCollectionLayout: a,
						navBar: u && d.a.Children.toArray([d.a.createElement($r.a, {
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object(jt.e)(u) && d.a.createElement(Oa.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && d.a.createElement(hi, {
							commentsPageKey: s,
							post: m,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(si.a)(e => {
				const {
					state: t
				} = e.location, s = o()(t, xt.a.IsOverlay, !1), n = o()(t, xt.a.CloseLocation, null), r = o()(t, xt.a.ScrollOnLoad, !1);
				r && Object(fa.c)(xt.a.ScrollOnLoad);
				const {
					partialCommentId: a,
					partialPostId: i,
					subredditName: c
				} = e.match.params, l = Object(Y.m)(i), m = a && Object(ft.e)(a);
				return d.a.createElement(ui, {
					closeLocation: n,
					commentId: m,
					commentsPageKey: e.commentsPageKey,
					isOverlay: s,
					location: e.location,
					onOtherDiscussions: e.onOtherDiscussions,
					postId: l,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: c
				})
			})
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.m)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.e)(t)
						})(e),
						a = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(c.a)(t)])
						})(e),
						i = {
							depth: a.depth && parseInt(a.depth, 10) || void 0,
							context: a.context && parseInt(a.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, i)
				},
				x = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				C = Object(i.b)(x);

			function v(e) {
				return C(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = g(t, s, n), r = Object(m.d)(t.match.path), i = Object.assign({}, t, {
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					});
					return a.a.createElement(e, i)
				})
			}
		},
		"./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => !!(e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(r.K)(e),
					experimentName: n.J
				});
				return Object(n.Wb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.mb
				});
				return Object(n.Wb)(t) ? void 0 : t
			}
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
//# sourceMappingURL=CommentsPage.8f4723a5a28eac342b46.js.map