// https://www.redditstatic.com/desktop2x/CommentsPage.c49a2192b3acd1b01606.js
// Retrieved at 2/6/2020, 3:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage", "reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost", "ChatPost~ModQueuePages"], {
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
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (g = !0, x = n) : b != t.body && b != t.documentElement && "visible" != v.overflow && (x = i(b)), x && (o = x, r = h, a = void 0, d = void 0, l = void 0, m = void 0, p = void 0, u = void 0, a = Math.max(o.top, r.top), d = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), u = d - a, !(h = (p = m - l) >= 0 && u >= 0 && {
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
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(n.a)(o.a),
				a = Object(n.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(n.a)(o.a)
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
				v = s("./src/lib/lessComponent.tsx");
			const C = v.a.div("Container", x.a),
				O = v.a.div("LoadingHitbox", x.a),
				E = e => setTimeout(() => {
					throw e
				}, 0);
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					E(e)
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
						E(o)
					}
				}
				destroySlot() {
					try {
						this.frame && c.b(this.frame)
					} catch (e) {
						E(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(b.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						E(e)
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
					return t ? o.a.createElement(C, {
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
			f.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(r.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(p.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(u.y)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? c.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(h.b)(f))
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
		"./src/reddit/components/Collection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/domUtils/index.ts"),
				l = s("./src/lib/fastdom/index.ts"),
				m = s("./src/reddit/actions/postCollection/index.ts"),
				p = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/PostFollow/index.tsx"),
				h = s("./src/reddit/components/SEOTitle/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/components/Translated/index.tsx"),
				x = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementIds.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/PostCollection/index.ts"),
				j = s("./src/reddit/selectors/postCollection.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				_ = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/lib/timezone/index.ts"),
				k = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				L = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				M = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				R = s("./src/reddit/helpers/path/index.ts"),
				A = s("./src/reddit/helpers/postEvent.ts"),
				F = s("./src/reddit/helpers/trackers/postCollection.ts"),
				B = s("./src/reddit/models/PostCreationForm/index.ts"),
				D = s("./src/reddit/selectors/activeModalId.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/Collection/PostItem/index.m.less"),
				V = s.n(H);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			let K, G;
			const q = e => "".concat(e, "--collectionItem"),
				z = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						isFutureEvent: r,
						isNightmodeOn: a,
						isOverlay: i,
						isSelectedPost: c,
						language: l,
						onPostSelection: m,
						onRemovePost: p,
						onStartEventNow: u,
						onPostTitleClick: h,
						post: b,
						shouldShowCollectionPostEdits: g,
						shouldShowThumbnail: x,
						style: v,
						toggleEditStartTimeModal: C,
						updateSelectedPostRef: O,
						isProfilePage: E
					} = e;
					return o.a.createElement(N.a, {
						className: Object(d.a)(V.a.postContainer, {
							[V.a.isNightmodeOn]: a,
							[V.a.isSelectedPost]: c,
							[V.a.isProfilePage]: E
						}),
						isOverlay: i,
						makePostContainerId: q,
						post: b,
						onClick: m,
						eventFactory: n,
						style: v
					}, o.a.createElement("div", {
						ref: c && O || void 0
					}, o.a.createElement("div", {
						className: Object(d.a)(V.a.postContent, {
							[V.a.active]: c
						})
					}, x && o.a.createElement(S.a, {
						className: V.a.timelineThumbnail,
						classNameInnerThumbnail: Object(d.a)(V.a.timelineThumbnailOverride, V.a.commonThumbnailOverride),
						post: b
					}), o.a.createElement("div", {
						className: V.a.postBodyWrapper
					}, o.a.createElement("div", {
						className: V.a.postBody,
						"data-click-id": "body"
					}, o.a.createElement(_.a, {
						to: Object(R.b)(b.permalink),
						className: V.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						},
						title: b.title,
						onClick: h
					}, b.title)), o.a.createElement("div", {
						className: V.a.bottomline
					}, o.a.createElement(L.b, {
						post: b,
						language: l
					}), g && o.a.createElement(M.a, {
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(b.id),
						isFutureEvent: r,
						onStartEventNow: u,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(A.a)(b)
					}))))), t === Object(B.s)(b.id, i, B.j.COLLECTION_INFO_POST) && K && o.a.createElement(K, {
						onChange: s,
						onClose: C,
						schedule: Object(T.c)(b),
						shouldShowDeleteButton: !1
					}))
				},
				Y = S.a,
				J = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						galleryThumbnail: r,
						isFutureEvent: a,
						isNightmodeOn: c,
						isOverlay: l,
						isSelectedPost: m,
						language: p,
						onPostSelection: u,
						onRemovePost: h,
						onStartEventNow: b,
						post: g,
						shouldShowCollectionPostEdits: x,
						style: v,
						toggleEditStartTimeModal: C,
						updateSelectedPostRef: O,
						isProfilePage: E
					} = e, f = r && r.url || "", y = g.isSpoiler || g.isNSFW, w = g.isScoreHidden;
					return o.a.createElement(N.a, {
						className: Object(d.a)(V.a.galleryPostContainer, {
							[V.a.isSelectedPost]: m,
							[V.a.isNightmodeOn]: c,
							[V.a.isProfilePage]: E
						}),
						isOverlay: l,
						makePostContainerId: q,
						post: g,
						onClick: u,
						eventFactory: n,
						style: v
					}, o.a.createElement("div", {
						className: V.a.scrollToContainer,
						ref: m && O || void 0
					}, f ? o.a.createElement("div", {
						className: Object(d.a)(V.a.galleryPostImage, {
							[V.a.blurBackground]: y
						}),
						style: {
							backgroundImage: "url('".concat(f, "')")
						}
					}) : o.a.createElement(Y, {
						className: V.a.galleryThumbnailPlaceholder,
						thumbnailContainerClassName: V.a.thumbnailContainerClassName,
						classNameInnerThumbnail: Object(d.a)(V.a.galleryPostPlaceholderThumbnailOverride, V.a.commonThumbnailOverride),
						post: g
					}), c && o.a.createElement("div", {
						className: V.a.gallerySeparator
					}), m && o.a.createElement("div", {
						className: V.a.gallerySelectedBorder
					}), o.a.createElement("div", {
						className: V.a.galleryPostOverlay
					}, o.a.createElement("div", {
						className: Object(d.a)(V.a.galleryBottomLine, {
							[V.a.isScoreHidden]: w
						})
					}, !w && o.a.createElement(L.a, {
						"data-click-id": "score"
					}, Object(i.c)(p, "posts.points.noun", g.score, {
						count: Object(I.b)(g.score)
					})), x && o.a.createElement(M.a, {
						onRemoveClick: h,
						dropdownId: "collection-post-item-".concat(g.id),
						isFutureEvent: a,
						onStartEventNow: b,
						onEditStartTime: C,
						onAddEventStartTime: C,
						shouldShowAddEventStartTime: !Object(A.a)(g)
					})))), t === Object(B.s)(g.id, l, B.j.COLLECTION_INFO_POST) && K && o.a.createElement(K, {
						onChange: s,
						onClose: C,
						schedule: Object(T.c)(g),
						shouldShowDeleteButton: !1
					}))
				};
			class Q extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostSelection = (e, t) => {
						const {
							onClickPost: s,
							postId: n,
							sendEvent: o
						} = this.props;
						o(Object(F.h)(n)), s && s(e, t)
					}, this.onRemovePost = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onRemovePostFromCollection(), t(Object(F.p)(e.id))
					}, this.onStartEventNow = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onStartEventNow(), t(Object(F.i)(e.id))
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
					return t ? e === w.a.TIMELINE ? o.a.createElement(z, U({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow,
						onPostTitleClick: this.onPostTitleClick
					})) : o.a.createElement(J, U({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : o.a.createElement("div", {
						className: V.a.postContainer
					})
				}
			}
			var X = Object(O.t)({
					currentProfileName: O.h,
					isCommentsPage: O.w,
					isProfilePostListing: O.H,
					isProfilePage: O.G,
					pageLayer: e => e
				})(Object(r.b)(() => Object(a.c)({
					activeModalId: D.a,
					galleryThumbnail: j.e,
					isFutureEvent: j.i,
					language: W.P,
					layout: O.K,
					post: P.I,
					shouldShowCollectionPostEdits: j.s,
					subredditOrProfile: P.U
				}), (e, t) => {
					let {
						collectionId: n,
						postId: o,
						isSelectedPost: r,
						isOverlay: a
					} = t;
					return {
						onRemovePostFromCollection: () => e(Object(m.g)(n, o, r)),
						onStartEventNow: async () => {
							G || (G = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts"))), e(G.startEventNowRequested(o))
						},
						toggleEditStartTimeModal: async () => {
							K && G || ([K, G] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts"))])), e(k.i(Object(B.s)(o, a, B.j.COLLECTION_INFO_POST)))
						},
						addEventStartTime: t => {
							G && e(G.editEventTimeRequested(o, t))
						}
					}
				})(Object(b.b)(Q))),
				Z = s("./src/reddit/components/Collection/index.m.less"),
				$ = s.n(Z);
			const ee = e => o.a.createElement(p.a, {
					author: e.author,
					className: $.a.author,
					"data-click-id": "user",
					isAuthorDeleted: e.isDeleted,
					isUnstyled: !0
				}, "u/".concat(e.author)),
				te = 100,
				se = e => {
					return e.isOverlay ? v.n + v.b : v.f + v.b
				},
				ne = e => ({
					top: se(e),
					maxHeight: "calc(100vh - ".concat(v.f + (e.isOverlay ? v.n : 0) + v.b + 5, "px)")
				}),
				oe = Object(O.t)({
					isProfilePage: O.G,
					pageLayer: e => e
				}),
				re = Object(r.b)(() => Object(a.c)({
					collection: j.n,
					displayLayout: j.a,
					followPost: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(j.n)(e, {
								postId: s
							}),
							o = n && (n.primaryPostId || n.postIds[0]);
						return o && Object(P.I)(e, {
							postId: o
						}) || null
					},
					post: P.I,
					shouldShowThumbnail: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(j.n)(e, {
							postId: s
						});
						return !(!n || !n.id) && Object(j.t)(e, {
							collectionId: n.id
						})
					}
				}), (e, t) => ({
					onOpenPost: t => e(Object(m.f)(t))
				}));
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.selectedPostRef = null, this.onClickPost = (e, t) => {
						this.props.onOpenPost(t)
					}, this.updateSelectedPostRef = e => {
						this.selectedPostRef = e
					}
				}
				componentDidMount() {
					const e = document.getElementById(C.b);
					if (e) {
						const t = this.selectedPostRef;
						let s;
						s = t ? t.offsetTop - te : 0, l.a.write(() => {
							Object(c.c)(e, s)
						})
					}
				}
				render() {
					const {
						collection: e,
						displayLayout: t,
						followPost: s,
						isNightmodeOn: n,
						isOverlay: r,
						language: a,
						post: c,
						postId: l,
						shouldShowThumbnail: m,
						isProfilePage: p
					} = this.props;
					if (!c || !e) return null;
					const {
						author: b = "",
						description: v = "",
						postIds: O = [],
						id: j
					} = e;
					return Object(f.a)(c) && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(d.a)($.a.collectionTitleWrapper, {
							[$.a.isProfilePage]: p
						})
					}, o.a.createElement("div", {
						className: $.a.collectionMetaData
					}, o.a.createElement("span", {
						className: $.a.collectionBy
					}, o.a.createElement(g.a, {
						msgId: "collection.collectionBy"
					})), o.a.createElement(ee, {
						author: b,
						isDeleted: Object(y.h)(b)
					}), o.a.createElement(E.a, {
						isSmall: !0
					}), o.a.createElement("span", {
						className: $.a.postCount
					}, Object(i.c)(a, "postCreation.postsCount", O.length))), o.a.createElement("div", {
						className: $.a.collectionTitleOptions
					}, o.a.createElement("span", {
						className: $.a.collectionTitle
					}, o.a.createElement(h.b, {
						type: h.a.Collection
					}, e.title)), s && o.a.createElement(u.a, {
						post: s,
						isEventFollow: p
					}), o.a.createElement(x.a, {
						className: $.a.overflowMenu,
						collectionId: j,
						isSubmitPage: !1,
						permalink: e.permalink,
						shouldShowCreatePost: !0
					}))), o.a.createElement("div", {
						className: $.a.postListWrapper
					}, o.a.createElement("div", {
						id: C.b,
						style: ne(this.props),
						className: $.a.collectionList
					}, v && v.trim() && o.a.createElement("div", {
						className: $.a.collectionDescription
					}, v), o.a.createElement("div", {
						className: Object(d.a)({
							[$.a.galleryContainer]: t === w.a.GALLERY
						})
					}, O.map(e => o.a.createElement(X, {
						collectionId: j,
						postId: e,
						key: e,
						isSelectedPost: l === e,
						updateSelectedPostRef: this.updateSelectedPostRef,
						isOverlay: r,
						isNightmodeOn: n,
						onClickPost: this.onClickPost,
						shouldShowThumbnail: m,
						displayLayout: t
					}))))))
				}
			}
			t.a = oe(re(Object(b.b)(ae)))
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				i = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				m = s.n(l);
			const p = e => {
					let {
						isTopLevelComment: t,
						children: s
					} = e;
					return o.a.createElement("div", {
						children: s,
						className: Object(c.a)(m.a.spacer, {
							[m.a.isTopLevelComment]: t
						})
					})
				},
				u = () => o.a.createElement("div", {
					className: Object(c.a)(m.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				h = Object(r.a)({
					ErrorComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return o.a.createElement(p, {
							isTopLevelComment: t
						}, o.a.createElement(u, null), o.a.createElement(i.a, {
							isLoading: !1,
							toolbarPosition: "bottom"
						}))
					},
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return o.a.createElement(p, {
							isTopLevelComment: t
						}, o.a.createElement(u, null), o.a.createElement(i.a, {
							isLoading: !0,
							toolbarPosition: "bottom"
						}))
					}
				});
			t.a = e => o.a.createElement(h, e)
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = i.a.div("Wrapper", h.a), x = i.a.span("Copy", h.a), v = i.a.wrapped(l.g, "SignupLink", h.a), C = i.a.wrapped(l.j, "LoginLink", h.a);
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
				})), o.a.createElement(C, {
					href: Object(d.a)(n, l, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "log in")), o.a.createElement(v, {
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
				v = s.n(x);
			const C = h.a.wrapped(g.a, "Show", v.a);
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
			}, o.a.createElement(C, null)));
			const E = h.a.wrapped(l.a, "StyledDropdown", v.a),
				f = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				y = Object(r.b)(f, (e, t) => {
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
				w = Object(d.a)(E),
				j = y(Object(c.b)(e => {
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
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				v = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/models/Toast/index.ts");
			const O = (e, t) => async (s, n, o) => {
				let {
					apiContext: r
				} = o;
				const a = await (async (e, t, s) => Object(b.b)(Object(g.a)(e, [x.a]), {
						endpoint: "".concat(e.apiUrl, "/api/set_suggested_sort/"),
						method: d.bb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					i = "error-block-".concat(t),
					c = "success-block-".concat(t);
				if (a.ok) {
					s(Object(u.H)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? Object(v.c)("Suggested sort is on.") : Object(v.c)("Suggested sort is off.");
					s(h.e({
						id: c,
						kind: C.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(h.e({
					id: i,
					kind: C.b.Error,
					text: Object(v.c)("Try again later"),
					buttonText: Object(v.c)("Retry"),
					buttonAction: O(e, t)
				}))
			};
			var E = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				f = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				w = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				T = s("./src/reddit/helpers/path/index.ts"),
				k = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const S = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(k.listing)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(k.userSubreddit)(r)
				}),
				L = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				N = e => ({
					subreddit: Object(k.subreddit)(e),
					userSubreddit: Object(k.userSubreddit)(e)
				}),
				M = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, N);
			var R = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				K = s.n(U),
				G = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts");
			const q = Object(w.a)(P.a),
				z = c.a.wrapped(R.b, "DropdownTriangle", K.a),
				Y = c.a.div("HighlightWrapper", K.a),
				J = c.a.div("Title", K.a),
				Q = e => e === G.a.First ? Object(v.c)("First Visit") : e === G.a.Last ? Object(v.c)("Last Visit") : "None";
			class X extends o.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== G.a.None) {
							e(t === G.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", G.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", G.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", G.a.None)
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
					return o.a.createElement(Y, null, o.a.createElement(J, {
						onClick: s
					}, Object(v.c)("highlight comments since")), o.a.createElement(_.b, {
						className: Object(i.a)(K.a.HighlightPicker, K.a.Row),
						displayText: Q(n),
						id: t,
						onClick: s
					}), o.a.createElement(z, {
						onClick: s
					}), o.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, o.a.createElement(_.b, {
						displayText: Q(G.a.First),
						isSelected: n === G.a.First,
						onClick: this.onDropdownClickFirst
					}), o.a.createElement(_.b, {
						displayText: Q(G.a.Last),
						isSelected: n === G.a.Last,
						onClick: this.onDropdownClickLast
					}), o.a.createElement(_.b, {
						displayText: Q(G.a.None),
						isSelected: n === G.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Z = X;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(w.a)(P.a),
				ne = c.a.button("ContestMode", K.a),
				oe = c.a.wrapped(R.b, "DropdownTriangle", K.a),
				re = c.a.wrapped(A.a, "Info", K.a),
				ae = c.a.wrapped(_.b, "Row", K.a),
				ie = c.a.button("SetSort", K.a),
				de = c.a.button("SortLink", K.a),
				ce = c.a.div("Title", K.a),
				le = c.a.wrapped(I.a, "ToggleSwitch", K.a),
				me = c.a.wrapped(y.a, "ViewFullLinkOrOverlayLink", K.a),
				pe = c.a.wrapped(f.c, "Tooltip", K.a),
				ue = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(B.m)(e, {
							commentId: s
						})
					},
					contestModeIsEnabled: W.A,
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(H.b)($),
					highlightIsOpen: Object(H.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(D.i)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					postPermalink: W.H,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(V.p)(e),
							o = !!Object(D.i)(e, {
								postId: s
							}),
							r = Object(W.I)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: B.q
				}),
				he = Object(r.b)(ue, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.J)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: $
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: ee
							})), t()
						},
						onSetSuggestedSort: t => e(O(s, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(u.L)(t, s)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(S(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(L("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(M(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
					}
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						contestModeIsEnabled: r,
						dropdownIsOpen: a,
						elementRef: c,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: h,
						postPermalink: b,
						selectedHighlightSort: g,
						showCommentHighlighter: x,
						sort: C,
						suggestedSort: O,
						showTooltip: f,
						toggleContestModeModal: y
					} = this.props, w = !h.search.includes(d.q.CONFIDENCE), j = C === d.q.CONFIDENCE && w, P = p && !j, I = Object(v.c)(" (suggested)"), k = O && C === O && !j ? d.s[C] + I : d.s[C], S = r ? Object(v.c)("End contest mode?") : Object(v.c)("Start contest?"), N = r ? Object(v.c)("End") : Object(v.c)("Start"), M = r ? Object(v.c)("Ending contest mode will make comment vote scores visible and disable random comment ordering.") : Object(v.c)("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods."), R = r && !p;
					return o.a.createElement("div", {
						className: Object(i.a)(t, K.a.container, {
							[K.a.hideCommentSort]: !x && R
						}),
						ref: c
					}, !R && o.a.createElement(ce, {
						onClick: this.onOpenDropdownClick
					}, Object(v.c)("Sort by")), !R && o.a.createElement(o.a.Fragment, null, o.a.createElement(ae, {
						className: Object(i.a)(K.a.SortPicker, K.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: k,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), o.a.createElement(oe, {
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(se, {
						isOpen: a,
						tooltipId: $
					}, [d.q.CONFIDENCE, d.q.TOP, d.q.NEW, d.q.CONTROVERSIAL, d.q.OLD, d.q.QA].map(e => {
						const t = s || b,
							n = Object(T.b)(t);
						return o.a.createElement(me, {
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(n, "?sort=").concat(e)
						}, o.a.createElement(_.b, {
							displayText: O && e === O ? d.s[e] + I : d.s[e],
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), P && !R && (O ? o.a.createElement(de, {
						onClick: C !== O ? this.setSortOnClick : this.clearSortOnClick
					}, C !== O ? Object(v.c)("Set new suggested sort") : Object(v.c)("Clear suggested sort")) : o.a.createElement(ie, null, o.a.createElement(de, {
						onClick: this.setSortOnClick
					}, Object(v.c)("Set as suggested sort")), o.a.createElement("span", {
						id: te,
						onMouseEnter: f,
						onMouseLeave: l
					}, o.a.createElement(pe, {
						text: Object(v.c)("Suggested sort defaults Redditors to a specific way of sorting comments within this post"),
						tooltipId: te
					}), o.a.createElement(re, null)))), p && o.a.createElement(ne, {
						onClick: this.props.toggleContestModeModal
					}, Object(v.c)("Contest"), o.a.createElement(le, {
						on: r
					})), x && o.a.createElement(Z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: L
					}), n && o.a.createElement(E.a, {
						actionText: N,
						headerText: S,
						modalText: M,
						onConfirm: this.setContestMode,
						toggleModal: y,
						withOverlay: !0
					}))
				}
			}
			t.a = he(Object(j.b)(be))
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
				v = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				C = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/economics.ts"),
				E = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				f = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				y = s.n(f);
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
						if (C.d.spTopTippers(e)) return Object(O.s)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: w(t)
							});
						return o.a.createElement("div", {
							className: y.a.container
						}, o.a.createElement(E.a, {
							className: y.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				P = s("./src/reddit/components/Flair/index.tsx"),
				_ = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				I = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = s("./src/reddit/components/PostTopMeta/index.tsx"),
				L = s("./src/reddit/helpers/isRemoved.ts"),
				N = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				F = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Flair/index.ts"),
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
				q = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				z = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				J = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
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
			const ae = p.a.wrapped(P.b, "RightPositionedAuthorFlair", ne.a),
				ie = p.a.wrapped(D.a, "AdminIcon", ne.a),
				de = p.a.wrapped(W.a, "Approve", ne.a),
				ce = p.a.wrapped(H.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(J.a, "Automoderator", ne.a),
				pe = p.a.wrapped(Q.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(X.a, "Moderator", ne.a),
				he = p.a.wrapped(q.a, "Remove", ne.a),
				be = p.a.wrapped(z.a, "Report", ne.a),
				ge = p.a.wrapped(Y.a, "Spam", ne.a),
				xe = p.a.wrapped(G, "Op", ne.a),
				ve = p.a.wrapped(D.a, "Contractor", ne.a),
				Ce = p.a.a("MetaLink", ne.a),
				Oe = p.a.wrapped(Z.a, "EditedText", ne.a),
				Ee = p.a.wrapped(Z.a, "StickiedText", ne.a),
				fe = p.a.span("DeletedText", ne.a),
				ye = p.a.wrapped(Z.a, "MetaSeparator", ne.a),
				we = p.a.wrapped(Z.a, "CrowdControlText", ne.a),
				je = p.a.wrapped(I.b, "AuthorHoverCard", ne.a),
				Pe = p.a.a("RemovalReason", ne.a),
				_e = p.a.wrapped(g.b, "Component", ne.a),
				Ie = Object(i.d)("comment.children"),
				Te = Object(i.d)("comment.moreThanChildren"),
				ke = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Se = Object(i.e)("comment.tooltips.admin"),
				Le = Object(i.e)("comment.tooltips.cakeday"),
				Ne = Object(i.e)("comment.tooltips.adminEmeritus"),
				Me = Object(i.e)("comment.tooltips.moderator"),
				Re = Object(i.e)("comment.tooltips.op"),
				Ae = Object(i.e)("comment.tooltips.contractor"),
				Fe = Object(r.b)(() => Object(a.c)({
					adminTooltipId: ke("CommentTopMeta--Admin--"),
					cakedayTooltipId: ke("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: ke("CommentTopMeta--AdEm--"),
					automodTooltipId: ke("CommentTopMeta--Automod--"),
					approveTooltipId: ke("CommentTopMeta--Approve--"),
					createdTooltipId: ke("CommentTopMeta--Created--"),
					contractorTooltipId: ke("CommentTopMeta--Contractor--"),
					gildedTooltipId: ke("CommentTopMeta--Gold--"),
					lockedTooltipId: ke("CommentTopMeta--Locked--"),
					modTooltipId: ke("CommentTopMeta--Mod--"),
					opTooltipId: ke("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: ke("CommentTopMeta--Remove--"),
					reportTooltipId: ke("CommentTopMeta--Report--"),
					spamTooltipId: ke("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(O.q)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.G)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: C.d.spTopTippers,
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
					onHideTooltip: () => e(Object(d.i)()),
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Fe(e => {
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
					compact: C,
					flair: O,
					flairPosition: E,
					hasBadges: f,
					isLivestreaming: y,
					ignoreFlairPosition: w,
					ignoreLock: j,
					language: I,
					lockedTooltipId: T,
					modTooltipId: L,
					onHideTooltip: N,
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
					topTippersEnabled: q
				} = e;
				if (u.isDeleted) return o.a.createElement(Be, oe({}, e, {
					className: Object(c.a)(d, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(De, oe({}, e, {
					className: Object(c.a)(d, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				const z = !w && E === B.b.Left;
				return o.a.createElement("div", {
					className: Object(c.a)(d, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: f,
						[ne.a.liveStreaming]: y
					})
				}, O && z && o.a.createElement(P.b, {
					flair: O,
					forceSmallEmojis: C
				}), !Object(F.d)(u) && o.a.createElement(_e, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(je, {
					postOrComment: u,
					tooltipType: V ? S.c.Lightbox : void 0
				}, o.a.createElement(x.b, {
					ignore: Object(F.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(He, {
					comment: u,
					isLivestreaming: y,
					isStrong: !!C,
					isAuthorDeleted: Object(F.d)(u),
					topTippersEnabled: q
				}, i && i))), p && o.a.createElement(we, null, "Crowd Control"), p && o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), O && !z && o.a.createElement(ae, {
					flair: O,
					forceSmallEmojis: C
				}), !C && o.a.createElement(_.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(k.b, {
					commentId: u.id
				}), o.a.createElement(k.a, {
					commentId: u.id,
					commentsPageKey: h
				}), o.a.createElement(Ke, {
					comment: u,
					compact: C,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: I,
					modTooltipId: L,
					onHideTooltip: N,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: H,
					subredditDisplayText: G
				})), !C && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(Z.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: I,
					score: u.score
				}), o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ve, oe({
					key: "Created"
				}, e)), u.isStickied && qe(I), u.editedAt && We(I, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(Ge, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: j,
					language: I,
					lockedTooltipId: T,
					onHideTooltip: N,
					onShowTooltip: M,
					openRemovalReasonModal: A,
					removeTooltipId: W,
					reportTooltipId: U,
					spamTooltipId: K
				}), o.a.createElement(v.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(b.a, {
					showAwarders: D,
					tooltipType: V ? S.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Be = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: n,
						className: r,
						comment: a
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(fe, null, a.deletedBy === F.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), o.a.createElement(Ve, oe({
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
						isAuthorDeleted: Object(F.d)(t),
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
					return o.a.createElement(Ce, {
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
				return o.a.createElement(ye, {
					className: ne.a.metaText
				}, "(", t ? Te(e.language, s, {
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
						"aria-label": Le(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && ze(s.cakedayTooltipId, Le(s.language)), t.isAdmin && o.a.createElement(ie, {
						desc: Se(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && ze(s.adminTooltipId, Se(s.language)), t.distinguishType === l.B.ALUMNI_ADMIN && o.a.createElement(le, {
						"aria-label": Ne(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && ze(s.adminEmeritusTooltipId, Ne(s.language)), t.isMod && o.a.createElement(ue, {
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
					}), t.isOp && ze(s.opTooltipId, Re(s.language)), s.renderContractorBadge && o.a.createElement(ve, {
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
						desc: Object(N.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && ze(s.approveTooltipId, Object(N.a)(s.language, t)), Object(L.a)(t) && o.a.createElement(he, {
						desc: Object(N.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(L.a)(t) && ze(s.removeTooltipId, Object(N.c)(s.language, t)), Object(L.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(Pe, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(L.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(Pe, {
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
						desc: Object(N.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && ze(s.spamTooltipId, Object(N.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(c.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(N.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && ze(s.automodTooltipId, Object(N.b)(s.language)), Object(M.a)(t) && o.a.createElement(be, {
						desc: Object(N.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && ze(s.reportTooltipId, Object(N.d)(s.language, t.numReports)))
				}
			}
			const qe = e => o.a.createElement(n.Fragment, null, o.a.createElement(Z.c, {
					className: ne.a.metaText
				}), o.a.createElement(Ee, null, Object(i.a)(e, "comment.stickied"))),
				ze = (e, t) => o.a.createElement(T.c, {
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
				return T
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return N
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
				v = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				C = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				O = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				E = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				f = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(f);
			const w = l.a.wrapped(O.a, "CommentsIcon", y.a),
				j = l.a.wrapped(E.a, "SnooFacepalm", y.a),
				P = l.a.p("EmptyTitle", y.a),
				_ = l.a.p("ErrorTitle", y.a),
				I = l.a.p("EmptyText", y.a),
				T = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(y.a.StateContainer, t)
					}, a.a.createElement(w, null), a.a.createElement(P, null, a.a.createElement(x.c, null, "no ", s ? "messages" : "comments", " yet")), a.a.createElement(I, null, a.a.createElement(x.c, null, "Be the first to share what you think!")))
				},
				k = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(w, null), a.a.createElement(P, null, a.a.createElement(x.c, null, "no other discussions yet")), a.a.createElement(I, null, a.a.createElement(x.c, null, "Be the first to post the same link or crosspost in another community!"))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(w, null), a.a.createElement(P, null, a.a.createElement(x.c, null, "That comment is missing")), a.a.createElement(u.h, {
						to: Object(b.b)(t)
					}, a.a.createElement(x.c, null, "View all comments")))
				},
				L = Object(i.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.q)(s, n, {
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
						className: y.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(_, null, t ? Object(h.a)({
						apiError: t,
						language: s,
						isLoggedOut: !1
					}) : Object(d.a)(s, "comment.error")), a.a.createElement(u.f, {
						onClick: n
					}, a.a.createElement(x.c, null, "retry")))
				}),
				N = () => a.a.createElement("div", null, "500"),
				M = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", y.a),
				R = l.a.div("CommentsPlaceholderContainer", y.a),
				A = l.a.div("CommentPlaceholder", y.a),
				F = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(C.a, "Upvote", y.a),
				W = l.a.wrapped(v.a, "Downvote", y.a),
				H = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = () => a.a.createElement(R, null, o()(10, e => a.a.createElement(A, {
					key: e
				}, a.a.createElement(F, null, a.a.createElement(D, null), a.a.createElement(W, null)), a.a.createElement(B, null, a.a.createElement(H, null), a.a.createElement(V, null)))))
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
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				h = s("./src/reddit/constants/comments.ts"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				v = s("./src/reddit/selectors/comments.ts"),
				C = s("./src/reddit/selectors/communityAwards.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/app/strings/index.ts")),
				f = s("./src/reddit/i18n/utils.ts"),
				y = s("./src/reddit/models/PostDraft/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/lib/objectSelector/index.ts"),
				P = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				_ = s("./src/reddit/icons/fonts/helpers.tsx"),
				I = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				T = s.n(I);
			var k, S, L = m.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(_.b)("expand"), " ").concat(e.className)
				}), "Expand", T.a),
				N = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				M = s.n(N),
				R = m.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(L, null)), "Component", M.a),
				A = s("./node_modules/lodash/defer.js"),
				F = s.n(A),
				B = s("./src/reddit/actions/tooltip.ts"),
				D = s("./src/reddit/selectors/tooltip.ts"),
				W = s("./src/lib/makeCommentPermalink/index.ts"),
				H = s("./src/reddit/actions/gold/modals.ts"),
				V = s("./src/reddit/actions/modal.ts"),
				U = s("./src/reddit/actions/reportFlow.ts"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				q = s("./src/reddit/helpers/trackers/lightbox.ts"),
				z = s("./src/reddit/i18n/components.tsx"),
				Y = s("./src/reddit/selectors/activeModalId.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/subreddit.ts"),
				X = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				Z = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				$ = s.n(Z);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(k || (k = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(S || (S = {}));
			const ee = (e, t) => {
					const s = $.a[t],
						n = $.a[e];
					return Object(c.a)(s, n)
				},
				te = e => Object(c.a)($.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[$.a.isInOverlay]: e.isInOverlay,
					[$.a.isModModeEnabled]: e.isModModeEnabled
				});
			var se = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				ne = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				oe = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				re = s("./src/higherOrderComponents/makeAsync.tsx"),
				ae = s("./src/reddit/featureFlags/index.ts"),
				ie = s("./src/reddit/selectors/economics.ts");
			const de = Object(re.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsCommentFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var ce = Object(i.b)(() => Object(d.c)({
					featureEnabled: ae.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.comments.models[t.contentId];
						return !!s && Object(ie.i)(e, {
							contentId: s.id,
							subredditId: s.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? a.a.createElement(de, e) : null
				})),
				le = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				me = s("./src/reddit/components/ModModeReports/helpers.ts"),
				pe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ue = s("./src/reddit/components/ReportFlow/index.tsx"),
				he = s("./src/reddit/components/ShareMenu/index.tsx"),
				be = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ge = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				xe = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ve = s("./src/reddit/helpers/trackers/modTools.ts"),
				Ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				Oe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				fe = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				ye = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				we = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				je = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Pe = s("./src/reddit/icons/fonts/Save/index.tsx"),
				_e = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Ie = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Te = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ke = s.n(Te);
			const Se = m.a.wrapped(Ee.a, "CommentIcon", ke.a),
				Le = m.a.wrapped(je.a, "Report", ke.a),
				Ne = m.a.wrapped(ye.a, "IgnoreReport", ke.a),
				Me = m.a.wrapped(le.a, "ModActionsMenu", ke.a),
				Re = m.a.div("OverflowMenuSpacer", ke.a),
				Ae = m.a.wrapped(pe.a, "DropdownRow", ke.a),
				Fe = m.a.wrapped(Ce.a, "Flatlist", ke.a),
				Be = m.a.button("Button", ke.a),
				De = m.a.wrapped(se.c, "ModToolsFlatlist", ke.a),
				We = m.a.wrapped(ge.a, "ViewReportsDropdown", ke.a),
				He = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ve = e => "Distinguish--Dropdown--".concat(e),
				Ue = e => "".concat(e, "-overflow-menu"),
				Ke = e => "View--Reports--".concat(e),
				Ge = Object(d.c)({
					currentUser: O.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Y.a)(e) === He(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.b)(Ve(s.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(v.A)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.b)(Ke(s.id))(e)
					},
					isLoggedIn: O.G,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.D)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.E)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.H)(e, {
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
						return Object(v.G)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(Q.v)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.U)(e, {
							postId: s.postId
						})
					}
				});
			class qe extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(q.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ve.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ve.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ve.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						Object(K.d)(K.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ve.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ve.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ve.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ve.b)(e, this.props.comment.id))
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: o,
						handleReply: i,
						isLoggedIn: d,
						isPendingDeletion: l,
						language: m,
						onDistinguishComment: p,
						onIgnoreReports: u,
						onToggleReportsDropdown: h,
						moderatorPermissions: b,
						modModeEnabled: g,
						postIsArchived: x,
						postIsLocked: v,
						postPermalink: C,
						renderedInOverlay: O,
						sendEvent: E,
						subreddit: y,
						subredditAboutInfo: w,
						toggleDeleteCommentModal: j,
						toggleSendReplies: P,
						trackClick: _
					} = this.props, I = Object(G.a)(b), T = !!s && s.displayText === e.author, L = !!s && s.isEmployee, N = !(w && w.userIsBanned) && (v || x || I && d || e.isLocked ? I && d : d), M = Object(me.a)(e), R = I && !g && T && !e.bannedBy, A = T && L && !e.bannedBy, B = R || A, D = s && e.isGildable, H = [];
					N && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(Se, null),
						key: "reply",
						onClick: () => {
							i(), F()(() => _("reply")())
						},
						text: Object(f.c)("Reply")
					}), s && !T && H.push(a.a.createElement(ce, {
						className: ke.a.supportButton,
						contentId: e.id,
						key: "support-cta",
						subredditId: e.subredditId,
						targetName: e.author
					})), D && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(fe.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: Object(f.c)("Give Award")
					}), H.push(a.a.createElement(he.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(W.a)(C, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: y
					}, a.a.createElement(Be, {
						onClick: () => this.sendCommentEventWithName("share")
					}, a.a.createElement(z.c, null, "share")))), T || H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(je.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: Object(f.c)("Report")
					}), H.push({
						breakpointGroup: S.LoggedInUser,
						icon: e.isSaved ? a.a.createElement(Oe.e, null) : a.a.createElement(Pe.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? Object(f.c)("Unsave") : Object(f.c)("Save")
					}), T && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(_e.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: Object(f.c)("Edit")
					});
					const V = H.map(e => a.a.isValidElement(e) ? e : a.a.createElement(Be, {
							className: ee(e.breakpointGroup, k.HideIfVWSmaller),
							disabled: l,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text)),
						U = H.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Ae, {
							className: ee(e.breakpointGroup, k.HideIfVWLarger),
							displayText: e.text,
							iconWrapperClassName: ke.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: ke.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(r.Fragment, null, a.a.createElement(Fe, {
						className: Object(c.a)(te({
							depth: o,
							isInOverlay: O,
							isModModeEnabled: I && g
						}), t)
					}, V, a.a.createElement(Re, {
						className: T ? void 0 : ee(S.LoggedInUser, k.HideIfVWLarger)
					}, a.a.createElement(pe.b, {
						className: ke.a.overflowMenu,
						disabled: l,
						dropdownId: Ue(e.id),
						onClick: () => E(Object(ve.a)("comment_overflow_menu", e.id))
					}, U, T && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ae, {
						displayText: Object(f.c)("Delete comment"),
						iconWrapperClassName: ke.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: ke.a.dropdownRowText
					}, a.a.createElement(Ie.b, null)), a.a.createElement(xe.a, {
						text: Object(f.c)("Send me reply notifications"),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(ne.a, {
						actionText: Object(f.c)("delete"),
						cancelActionText: Object(f.c)("keep"),
						headerText: Object(f.c)("Delete comment"),
						modalText: Object(f.c)("Are you sure you want to delete your comment?"),
						onConfirm: n,
						toggleModal: j,
						trackClick: () => {},
						withOverlay: !0
					}), I && a.a.createElement(a.a.Fragment, null, g && a.a.createElement(De, {
						className: ee(S.Moderator, k.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: T,
						language: m
					}), a.a.createElement(Me, {
						className: g ? ee(S.Moderator, k.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => E(Object(ve.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(we.a, null), a.a.createElement(X.a, {
						comment: e,
						language: m,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(me.c)(e) && !g && a.a.createElement(se.b, {
						text: "".concat(M),
						onClick: () => {
							h(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Ke(e.id)
					}, a.a.createElement(We, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ke(e.id)
					}), e.ignoreReports ? a.a.createElement(Ne, null) : a.a.createElement(Le, null)), B && a.a.createElement(se.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(se.a, null), a.a.createElement(oe.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: L,
						isUserMod: I,
						onDistinguishComment: p,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ve(e.id)
					}))), this.props.reportFlowIsOpen && a.a.createElement(ue.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ue.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var ze = Object(i.b)(Ge, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n,
						language: o
					} = t;
					return {
						deleteComment: () => n && e(Object(u.db)(o, s.id, s.postId)),
						handleDelete: () => {
							e(Object(V.i)(He(s.id))), e(Object(B.h)({
								tooltipId: Ue(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(u.V)({
								commentId: s.id,
								draftKey: Object(w.a)(y.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(u.ob)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onDistinguishComment: (t, n) => e(Object(u.S)(s.id, t, n)),
						onGildClick: () => e(Object(H.d)(s.id)),
						onIgnoreReports: () => e(Object(u.pb)(s.id)),
						onReportClick: () => e(Object(U.j)(s.id)),
						onToggleSave: () => e(Object(u.gb)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(B.h)({
							tooltipId: Ve(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(B.h)({
							tooltipId: Ke(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(V.i)(He(s.id))),
						toggleSendReplies: () => e(Object(u.hb)(s.id))
					}
				})(Object(be.b)(qe)),
				Ye = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Je = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Qe = s("./src/reddit/components/GildModal/Loader.tsx"),
				Xe = s("./src/reddit/components/ModModeReports/index.tsx"),
				Ze = s("./src/reddit/components/RichTextJson/index.tsx"),
				$e = s("./src/reddit/components/VerticalVotes/index.tsx"),
				et = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				tt = s("./src/reddit/constants/componentTestIds.ts"),
				st = s("./src/reddit/contexts/PageLayer/index.tsx"),
				nt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ot = s("./src/reddit/controls/ErrorText/index.tsx"),
				rt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				at = s("./src/reddit/models/Subreddit/index.ts"),
				it = s("./src/reddit/models/Vote/index.ts"),
				dt = s("./src/reddit/selectors/gild.ts"),
				ct = s("./src/reddit/selectors/moderatorPermissions.ts"),
				lt = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				mt = s("./src/reddit/selectors/moderatingComments.ts"),
				pt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				ut = s.n(pt);

			function ht() {
				return (ht = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var bt = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const gt = m.a.wrapped(R, "ExpandButton", ut.a),
				xt = m.a.wrapped(ot.b, "ErrorText", ut.a),
				vt = m.a.wrapped($e.a, "VerticalVotes", ut.a),
				Ct = m.a.wrapped(Ye.a, "TopMeta", ut.a),
				Ot = m.a.div("CommentContentWrapper", ut.a),
				Et = m.a.div("CommentWrapper", ut.a),
				ft = m.a.div("CommentBody", ut.a),
				yt = m.a.wrapped(P.a, "CommentCreation", ut.a),
				wt = m.a.wrapped(yt, "EditCommentForm", ut.a),
				jt = Object(st.t)(),
				Pt = Object(i.b)(() => Object(d.c)({
					comment: (e, t) => Object(v.n)(e, t),
					currentProfileModPermissions: st.g,
					depth: (e, t) => Object(v.j)(e, t),
					collapsed: mt.b,
					collapsedBecauseCrowdControl: mt.a,
					flair: v.e,
					focused: v.u,
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(Je.b)(s);
						return Object(dt.c)(e, n)
					},
					isEditing: v.z,
					isLoggedIn: O.G,
					isPendingDeletion: v.A,
					language: O.P,
					moderatorPermissions: (e, t) => {
						const s = Object(v.n)(e, t);
						return s ? Object(ct.j)(e, {
							subredditId: s.subredditId
						}) : null
					},
					modModeEnabled: st.M,
					errorMsgs: v.E,
					replyFormOpen: v.H,
					subreddit: st.q,
					subredditType: v.J,
					highlightComment: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(v.q)(e);
						if (n === lt.a.None) return !1;
						const o = Object(v.n)(e, {
							commentId: s
						});
						if (!o) return !1;
						const r = Object(O.p)(e),
							a = !!Object(ct.i)(e, {
								postId: o.postId
							}),
							i = Object(J.I)(e, {
								postId: o.postId
							});
						if (!i || !i.previousVisits || i.previousVisits.length < 1) return !1;
						const d = n === lt.a.Last ? i.previousVisits[i.previousVisits.length - 1] : i.previousVisits[0];
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
						onCollapseClick: () => e(Object(u.nb)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(u.pb)(s)),
						onVoteClick: t => {
							const [n, o] = t === it.a.upvoted ? [Object(u.rb)(s), "upvote_comment"] : [Object(u.T)(s), "downvote_comment"];
							r(o)(), e(n)
						}
					}
				}),
				_t = Object(j.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				It = jt(Pt(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: i,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: l,
						depth: m,
						errorMsgs: p,
						flair: h,
						focused: b,
						gildModalIsOpen: g,
						highlightComment: x,
						isActive: v,
						isEditing: C,
						isLoggedIn: O,
						isPendingDeletion: j,
						language: P,
						moderatorPermissions: _,
						modModeEnabled: I,
						onCollapseClick: T,
						onIgnoreReports: k,
						onLineMouseOver: S,
						onVoteClick: L,
						replyFormOpen: N,
						subreddit: M,
						trackClick: R,
						renderedInOverlay: A,
						subredditType: F
					} = e, B = !C && !n.isDeleted && !!p && p.length > 0, D = Object(w.a)(y.c.edit, n.id), W = Object(w.a)(y.c.replyToComment, n.id), H = Object(G.a)(_), V = n.authorIsContractor && F === at.c.EmployeesOnly, U = n.isLocked;
					return a.a.createElement(Et, {
						className: Object(c.a)("Comment ".concat(n.id), {
							[ut.a.focused]: b,
							[ut.a.topLevel]: !m
						})
					}, i && a.a.createElement(gt, {
						className: n.id,
						onClick: () => {
							s(), T(), R("collapse")()
						},
						onMouseOver: () => S(n.id),
						onMouseOut: s
					}), !i && !n.isDeleted && a.a.createElement(vt, {
						compact: !0,
						downvoteButtonClassName: ut.a.voteButton,
						downvoteClassName: ut.a.upDownVote,
						model: n,
						onVoteClick: L,
						upvoteButtonClassName: ut.a.voteButton,
						upvoteClassName: ut.a.upDownVote
					}), a.a.createElement(Ot, {
						className: Object(c.a)({
							[ut.a.highlightComment]: x,
							[ut.a.isActive]: v,
							[ut.a.isCollapsed]: i,
							[ut.a.isLocked]: U,
							[ut.a.isPendingDeletion]: j,
							[ut.a.isRemoved]: !!n.bannedBy
						})
					}, a.a.createElement(rt.a, null, Object(E.a)(P, "comment.level", {
						level: m + 1
					})), a.a.createElement(Ct, {
						childrenInfo: t,
						className: Object(c.a)({
							[ut.a.collapsed]: i
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: d,
						comment: n,
						commentsPageKey: o,
						flair: h,
						language: P,
						renderedInOverlay: A,
						renderContractorBadge: V
					}), !i && a.a.createElement(r.Fragment, null, C && a.a.createElement(wt, {
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: y.c.edit,
						draftKey: D,
						rtJson: Object(et.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(u.eb)({
							language: P,
							id: n.id,
							commentsPageKey: o,
							depth: m,
							draftKey: D,
							formData: e
						}),
						submitButtonText: Object(f.c)("save edits")
					}), !C && !n.isDeleted && a.a.createElement(ft, {
						"data-test-id": tt.d
					}, a.a.createElement(Ze.a, {
						content: Object(et.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: _t(e)
					})), I && H && Object(me.c)(n) && a.a.createElement(Xe.a, {
						language: P,
						onIgnoreReports: k,
						reportable: n
					}), !C && !n.isDeleted && O && a.a.createElement(ze, {
						comment: n,
						commentsPageKey: o,
						depth: m,
						language: P,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: I,
						moderatorPermissions: l || _,
						renderedInOverlay: A,
						subreddit: M,
						trackClick: R
					}), B && p.map(e => a.a.createElement(xt, {
						language: P
					}, e)), N && a.a.createElement(yt, {
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: y.c.replyToComment,
						draftKey: W,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: (e, t) => {
							var {
								validate: s
							} = e, r = bt(e, ["validate"]);
							return s ? Object(u.sb)({
								commentsPageKey: o,
								draftKey: W,
								language: P,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							}) : Object(u.jb)({
								commentsPageKey: o,
								draftKey: W,
								language: P,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							})
						},
						submitButtonText: Object(f.c)("Reply")
					}))), g && a.a.createElement(Qe.a, null))
				}));
			var Tt = e => a.a.createElement(nt.a.Consumer, null, t => a.a.createElement(It, ht({}, e, {
					trackClick: t
				}))),
				kt = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				St = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Lt = s("./src/reddit/helpers/path/index.ts"),
				Nt = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Mt = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Rt = s.n(Mt);
			const At = m.a.div("Wrapper", Rt.a),
				Ft = m.a.wrapped(Nt.a, "ArrowRight", Rt.a),
				Bt = m.a.wrapped(kt.a, "LinkOrOverlayLink", Rt.a),
				Dt = m.a.span("HoverSpan", Rt.a),
				Wt = Object(d.c)({
					language: O.P,
					permalink: (e, t) => Object(v.m)(e, {
						commentId: Object(v.s)(e, t).parentId
					})
				});
			var Ht = Object(i.b)(Wt)(Object(St.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return a.a.createElement(At, {
						className: Object(c.a)({
							[Rt.a.isActive]: t
						})
					}, a.a.createElement(Bt, {
						isOverlay: !!s,
						to: Object(Lt.b)(n)
					}, a.a.createElement(Dt, null, a.a.createElement(z.c, null, "Continue this thread")), " ", a.a.createElement(Ft, null)))
				})),
				Vt = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Ut = s.n(Vt);
			const Kt = m.a.div("MoreCommentsItemWrapper", Ut.a),
				Gt = m.a.p("MoreComments", Ut.a),
				qt = m.a.wrapped(Gt, "MoreCommentsInteractive", Ut.a),
				zt = Object(d.c)({
					moreCommentsItem: v.B,
					moreCommentsPending: v.C,
					language: O.P
				});
			var Yt = Object(i.b)(zt, (e, t) => ({
					moreCommentsClicked: () => e(Object(u.Z)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					let {
						language: t,
						isActive: s,
						moreCommentsClicked: n,
						moreCommentsItem: o,
						moreCommentsPending: r
					} = e;
					return a.a.createElement(Kt, null, r ? a.a.createElement(Gt, null, a.a.createElement(z.c, null, "loading...")) : a.a.createElement(nt.a.Consumer, null, e => a.a.createElement(qt, {
						className: Object(c.a)({
							[Ut.a.isActive]: s
						}),
						onClick: () => {
							n(), e("load_more_comment")()
						}
					}, Object(E.c)(t, "comment.moreReply", o.numComments, {
						numComments: o.numComments
					}))))
				}),
				Jt = s("./node_modules/lodash/times.js"),
				Qt = s.n(Jt),
				Xt = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Zt = s.n(Xt);
			const $t = m.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: g.m
				})), "Line", Zt.a),
				es = m.a.div("LineContainer", Zt.a),
				ts = m.a.div("ShortLineContainer", Zt.a);
			var ss = e => {
					const {
						collapsed: t,
						depth: s,
						onLineClick: n,
						onLineMouseOver: o,
						onLineMouseOut: r,
						onShortLineClick: i,
						parentNodeIds: d,
						type: c
					} = e;
					return a.a.createElement(es, null, Qt()(s + 1, e => e === s ? c !== h.a.Comment || t ? null : a.a.createElement(ts, {
						key: d[e]
					}, a.a.createElement($t, {
						className: d[e],
						onClick: i,
						onMouseOver: () => o(d[e]),
						onMouseOut: () => r(d[e])
					})) : a.a.createElement($t, {
						className: d[e],
						key: d[e],
						onClick: n(e),
						onMouseOver: () => o(d[e]),
						onMouseOut: () => r(d[e])
					})))
				},
				ns = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				os = s.n(ns);
			const rs = m.a.div("CommentListNodeWrapper", os.a),
				as = e => {
					const t = document.querySelectorAll(".".concat(e));
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(g.f)
				},
				is = () => {
					const e = document.querySelectorAll(".".concat(g.f));
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(g.f)
				};
			var ds = Object(i.b)(() => Object(d.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(mt.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(v.l)(e, t),
				depth: (e, t) => Object(v.j)(e, t),
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
					if (!Object(p.a)(e)) return !1;
					const n = Object(v.l)(e, {
						commentLink: s
					});
					return !(s.type !== h.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(C.a)(e, t);
						return s && s.coinPrice >= x.g
					})
				},
				isNightmodeOn: O.R
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(u.K)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(u.nb)({
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
					depth: i,
					isActive: d,
					isCommentHighlightExperiment: l,
					isHidden: m,
					isNightmodeOn: p,
					onLineClick: u,
					onShortLineClick: g,
					parentNodeIds: x,
					renderedInOverlay: v,
					scrollToAndRemeasure: C
				} = e;
				return a.a.createElement(rs, {
					className: Object(c.a)(s, {
						[os.a.isHidden]: m,
						[os.a.isAwarded]: l,
						[os.a.isNightmodeOn]: p
					}),
					id: o.id,
					style: {
						paddingLeft: i * (b.w + b.v) + (o.type === h.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(ss, {
					collapsed: n,
					depth: i,
					onLineClick: u,
					onLineMouseOver: as,
					onLineMouseOut: is,
					onShortLineClick: g,
					type: o.type,
					parentNodeIds: x
				}), cs({
					childrenInfo: t,
					clearHovered: is,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: as,
					isActive: d,
					renderedInOverlay: v,
					scrollToAndRemeasure: C
				}))
			});
			const cs = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					isActive: r,
					onLineMouseOver: i,
					renderedInOverlay: d,
					scrollToAndRemeasure: c
				} = e;
				switch (n.type) {
					case h.a.Comment:
						return a.a.createElement(Tt, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							isActive: r,
							onLineMouseOver: i,
							renderedInOverlay: d,
							scrollToAndRemeasure: c
						});
					case h.a.MoreComments:
						return a.a.createElement(Yt, {
							commentsPageKey: o,
							isActive: r,
							moreCommentsId: n.id
						});
					case h.a.ContinueThread:
						return a.a.createElement(Ht, {
							id: n.id,
							isActive: r
						})
				}
			};
			var ls = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				ms = s("./src/reddit/components/Comments/States/index.tsx"),
				ps = s("./src/reddit/components/Scroller/Simple.tsx"),
				us = s("./src/reddit/constants/elementIds.ts"),
				hs = s("./src/reddit/helpers/commentList/index.ts"),
				bs = s("./src/telemetry/index.ts"),
				gs = s("./src/lib/LRUCache/index.ts"),
				xs = s("./src/reddit/components/Comments/index.m.less"),
				vs = s.n(xs);
			const Cs = b.f + 10,
				Os = 65,
				Es = m.a.wrapped(ps.b, "Scroller", vs.a),
				fs = Object(d.c)({
					allCollapsed: v.a,
					commentLinks: v.k,
					commentThreadLinkSet: v.p,
					language: O.P,
					measureScrollFPS: ae.d.measureScrollFPS,
					moreComments: v.b,
					postPermalink: J.H
				}),
				ys = Object(i.b)(fs, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(u.L)(t)),
					onCommentLeftViewport: (t, s) => e(Object(u.Q)(t, s))
				})),
				ws = new gs.a(500),
				js = new gs.a(500),
				Ps = (e, t) => {
					const s = "entered-".concat(e);
					let n = ws.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, ws.set(s, n)), n
				},
				_s = (e, t) => {
					const s = "left-".concat(e);
					let n = js.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, js.set(s, n)), n
				};
			class Is extends a.a.Component {
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
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, ls.c(), this.childrenInfoMap = {}
				}
				componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && bs.c.cancel(this.timerId), e.length && (this.timerId = bs.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(bs.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: bs.c.end(this.timerId)
					})
				}
				componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: r,
						moreComments: a
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !o()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, r, a)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !o()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				componentWillUpdate(e) {
					this.timerId && bs.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = bs.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(bs.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: bs.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && bs.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						a = 0,
						i = !1;
					ls.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (ls.a(c.id), a += Object(hs.d)(c, n), c.type === h.a.ContinueThread && (i = !0)) : (this.childrenInfoMap[o] = {
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
					} = this.props, i = Ps(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					}), d = _s(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					});
					return {
						estHeight: ls.b(e.id) ? 0 : Os,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: d,
						render: t => {
							let {
								placeholderRecommended: n,
								height: o,
								width: i,
								scrollToAndRemeasure: d
							} = t;
							return n ? a.a.createElement("div", {
								style: {
									height: o,
									backgroundColor: "#fff"
								}
							}) : a.a.createElement(ds, {
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								isHidden: ls.b(e.id),
								scrollToAndRemeasure: d,
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
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(Es, {
						className: Object(c.a)(vs.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(us.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: Cs,
						trackingName: r
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(ms.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(ms.c, null)
				}
			}
			t.a = ys(Is)
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
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModQueuePages~ModerationPages~Poll~PostCreati~1993415f"), s.e("ChatPost~ModQueuePages"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
		"./src/reddit/components/CommentsPageAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				d = s("./src/reddit/components/BannerAd/index.tsx"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/BlankPost/index.tsx"),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/brandSafety.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/fastdom/index.ts"),
				v = s("./src/reddit/components/CommentsPageAd/index.m.less"),
				C = s.n(v),
				O = s("./src/lib/lessComponent.tsx");
			const E = Object(c.c)({
					canShowAds: (e, t) => {
						const s = Object(h.a)(e, t),
							n = !u.d.rabbitHole(e) && !Object(p.G)(t.pageLayer) && !Object(b.x)(e),
							o = e.meta.isSessionSeo && !Object(b.G)(e);
						return s && n && (o || Object(b.D)(e))
					},
					ads: e => e.commentsPage.ads
				}),
				f = Object(m.a)(E),
				y = Object(p.t)(),
				w = O.a.wrapped(d.a, "BannerAd", C.a),
				j = (e, t) => {
					let s = "";
					return t && (s += "overlay-"), s += "comment-".concat(e)
				},
				P = O.a.div("CommentsPageAdContainer", C.a);
			class _ extends i.a.Component {
				constructor() {
					super(...arguments), this.container = null, this.state = {
						enoughSpace: !1,
						hasBeenAssessed: !1
					}, this.checkAvailableSpace = r()(() => {
						x.a.read(() => {
							if (this.container) {
								const e = g.f[0],
									t = this.container.clientWidth;
								!this.state.enoughSpace && this.state.hasBeenAssessed || x.a.write(() => {
									this.setState({
										enoughSpace: t > e,
										hasBeenAssessed: !0
									})
								})
							}
						})
					}, g.F)
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
						placement: o,
						onPostViewable: r
					} = this.props;
					return i.a.createElement(P, {
						innerRef: e => {
							this.container = e
						}
					}, this.props.ads.length > 0 && i.a.createElement(l.BlankPost, {
						post: this.props.ads[0],
						onPostViewable: r
					}), this.state.enoughSpace && i.a.createElement(w, {
						id: j(o, e),
						sizes: [g.f],
						placement: o,
						listingName: s,
						refreshKey: t,
						dataBeforeContent: Object(n.a)("en", "posts.sponsored")
					}))
				}
			}
			t.a = y(f(_))
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
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarFooter/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				E = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				f = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				y = s("./src/reddit/featureFlags/component.tsx"),
				w = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/selectors/experiments/postSeo.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				k = s.n(T);
			const S = Object(y.a)("spPoints", h.a),
				L = Object(y.a)("spLeaderboard", b.a),
				N = Object(n.a)({
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
				M = Object(c.c)({
					isLoggedIn: I.G,
					postSEOV2IdCardVariant: P.i,
					widgets: Object(p.a)(_.r)
				}),
				R = Object(d.b)(M);
			class A extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
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
					} = this.props, a = !Object(P.a)(r) && !Object(P.e)(r);
					return s ? i.a.createElement(i.a.Fragment, null, i.a.createElement(x.a, {
						postId: o.id,
						isOverlay: s,
						listingName: n,
						placement: m.c.BELOW_THE_FOLD,
						placementIndex: e,
						position: w.a.BOTTOM,
						refreshKey: o.id,
						sizes: m.m,
						commentsPageKey: t
					}), i.a.createElement(v.a, null)) : i.a.createElement(O.a, {
						adComponent: a ? i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: w.a.BOTTOM,
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
						post: o,
						postSEOV2IdCardVariant: r,
						subredditId: a,
						subredditName: d,
						widgets: c
					} = this.props;
					let p = 0;
					const h = Object(P.a)(r) || Object(P.e)(r),
						b = i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: n,
							listingName: d,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: p++,
							position: w.a.FIRST,
							refreshKey: o.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return i.a.createElement("div", {
						className: Object(l.a)(k.a.outerWrapper, e)
					}, Object(j.j)(o) ? i.a.createElement(N, {
						profileName: d,
						isOverlay: n || !1
					}) : i.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: d,
						postId: o.id,
						rememberPosition: o.numComments > 0,
						isMinimal: h
					}), i.a.createElement(u.a, {
						className: k.a.communityTipJar,
						subredditId: a
					}), i.a.createElement(S, {
						className: k.a.communityTokens,
						subredditId: a,
						uniqueId: o.id
					}), i.a.createElement(L, {
						className: k.a.leaderboard,
						subredditId: a,
						uniqueId: o.id
					}), b, s && c.map((e, t) => i.a.createElement(C.a, {
						key: "widgetSpacer".concat(t)
					}, i.a.createElement(f.a, {
						subredditName: d,
						widget: e
					}))), o.isSponsored && i.a.createElement(C.a, null, i.a.createElement(E.a, null)), this.renderFooter(p++))
				}
			}
			t.a = R(A)
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
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				h = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				b = s("./src/reddit/selectors/experiments/postSeo.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				v = s.n(x);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = "500px", E = 3, f = Object(a.c)({
				hasDismissedTruncation: u.b,
				isLoggedIn: g.F,
				isPostSEOEligible: b.d,
				listingBelowAllVariant: h.b,
				postSEOV2TruncatedVariant: b.j
			}), y = Object(r.b)(f);
			class w extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						hasDismissedTruncation: r,
						innerRef: a,
						isCommentsListTruncated: d,
						isLoggedIn: u,
						isOverlay: b,
						listingBelowAllVariant: g,
						numberOfComments: x,
						onClick: f,
						subredditOrProfile: y
					} = this.props, w = !u, j = Object(h.a)(g), P = !(!y || Object(m.e)(y)), _ = d && P && (x >= E && !b || j && !r) && (j || w), I = _ && !e, T = _ ? v.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: f,
						ref: a
					}, o.a.createElement("div", {
						className: Object(i.a)(v.a.ContentWrapper, s, T),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: _ ? O : "unset"
						}
					}, t), I && o.a.createElement(l.f, {
						className: v.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, C._("View entire discussion ({number of comments} comments)", [C._param("number of comments", Object(c.b)(x))], {
						hk: "2OrRQp"
					})))
				}
			}
			t.a = Object(d.a)(y(w))
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(v),
				O = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = O.a.div("Container", C.a),
				y = O.a.div("PostMetaWrapper", C.a),
				w = O.a.wrapped(u.c, "PostTitle", C.a),
				j = O.a.div("FlatList", C.a),
				P = O.a.div("FlatItem", C.a),
				_ = O.a.span("FlatListDotSpacer", C.a),
				I = O.a.wrapped(f, "LinkContainer", C.a),
				T = O.a.div("Content", C.a),
				k = O.a.div("ThumbnailContainer", C.a),
				S = Object(i.c)({
					isCurrentUserProfilePost: g.h,
					language: x.P,
					post: g.I,
					shouldOpenPostInNewTab: x.T,
					subreddit: g.U
				}),
				L = Object(r.b)(S);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: n,
					post: r,
					subreddit: a,
					language: i
				} = e;
				if (!r) return null;
				const d = {
						post: r,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						language: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					c = t;
				return r && !r.media ? o.a.createElement(I, {
					className: c
				}, o.a.createElement(T, null, o.a.createElement(y, null, o.a.createElement(p.a, d)), N(r), r.source && o.a.createElement(h.a, {
					post: r
				}), R(e)), F(e)) : o.a.createElement(f, {
					className: c
				}, o.a.createElement(y, null, o.a.createElement(p.a, d)), N(r), M(e), R(e))
			});
			const N = e => o.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				M = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return o.a.createElement("div", null, o.a.createElement(m.a, E({}, n, {
						className: C.a.mediaContainer
					})))
				},
				R = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return o.a.createElement(j, null, o.a.createElement(P, null, Object(d.c)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), o.a.createElement(_, null), o.a.createElement(P, null, A(e)))
				},
				A = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: r
					} = s;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(d.c)(t, "posts.comments.noun", r, {
						count: Object(l.b)(r)
					}))
				},
				F = e => o.a.createElement(k, null, o.a.createElement(b.a, {
					post: e.post
				}))
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
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/async.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.tsx")).then(e => e.default)
			});
			const m = Object(a.c)({
				featureEnabled: d.d.spTopTippers
			});
			t.a = Object(r.b)(m)((function(e) {
				const {
					featureEnabled: t
				} = e, s = c(e, ["featureEnabled"]);
				return e.featureEnabled ? o.a.createElement(l, s) : null
			}))
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
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/async.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.tsx")).then(e => e.default)
			});
			const m = Object(a.c)({
				featureEnabled: d.d.spTopTippers
			});
			t.a = Object(r.b)(m)((function(e) {
				const {
					featureEnabled: t
				} = e, s = c(e, ["featureEnabled"]);
				return e.featureEnabled ? o.a.createElement(l, s) : null
			}))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const p = i && i.eventInfo,
					b = Object(l.a)(i),
					g = p && Object(a.c)(p.eventStart, p.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					language: n,
					post: i
				}), !b && g && o.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function d(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.span("PostEventFutureText", u.a),
				g = h.a.span("PostEventPastText", u.a),
				x = h.a.span("PostEventNowText", u.a),
				v = h.a.span("Container", u.a),
				C = h.a.wrapped(l.a, "CalendarIcon", u.a),
				O = h.a.wrapped(m.a, "LiveIcon", u.a),
				E = h.a.div("LoadingState", u.a);
			class f extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = n, u = Object(r.e)(p, l);
					let h, f;
					if (this.state.mounted || u === r.a.Live) h = function(e, t, s, n) {
						const o = Object(r.e)(e, t),
							c = new Date(e * i.Cb);
						let l;
						if (o === r.a.Live || n) return Object(a.a)(s, "posts.event.inProgress");
						o === r.a.Future ? l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? d(c, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(c, s) : o === r.a.Past && (l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : d(c, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(c, s);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						h = o.a.createElement(E, {
							className: e
						})
					}
					if (m) f = o.a.createElement(x, null, o.a.createElement(O, null), h);
					else if (u === r.a.Future) f = o.a.createElement(b, null, o.a.createElement(C, null), h);
					else {
						if (u !== r.a.Past) return null;
						f = o.a.createElement(g, null, o.a.createElement(C, null), h)
					}
					return o.a.createElement(v, {
						className: e
					}, f)
				}
			}
			t.a = f
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(x);
			var C = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				O = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				E = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				f = s("./src/reddit/icons/fonts/Link/index.tsx"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				w = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				j = s("./src/reddit/icons/fonts/Text/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/components/ExpandoButton/index.m.less"),
				I = s.n(_);
			const T = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.s)({
						postId: t.post.id
					}))
				})),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(I.a.icon, I.a.hideOnHover);
					if (t) return o.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case P.n.GIFVIDEO:
							return o.a.createElement(E.a, {
								className: s
							});
						case P.n.IMAGE:
							return o.a.createElement(w.a, {
								className: s
							});
						case P.n.TEXT:
						case P.n.RTJSON:
							return o.a.createElement(j.a, {
								className: s
							});
						case P.n.VIDEO:
							return o.a.createElement(O.a, {
								className: s
							});
						case P.n.EMBED:
						default:
							return o.a.createElement(f.a, {
								className: s
							})
					}
				};
			t.a = T(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: r,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, x = s || l, v = n && !!s;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(p.a)(x)) ? o.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(c.c)("Expand content"),
					className: Object(i.a)(t, I.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? o.a.createElement(h.a, {
					className: I.a.icon
				}) : g ? o.a.createElement(o.a.Fragment, null, k(x.media && x.media.type, v), o.a.createElement(b.a, {
					className: Object(i.a)(I.a.icon, I.a.showOnHover)
				})) : o.a.createElement(b.a, {
					className: I.a.icon
				})) : x.source && x.source.url ? o.a.createElement(m.a, {
					"aria-label": Object(c.c)("Open external content"),
					className: Object(i.a)(t, I.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, o.a.createElement(y.a, {
					className: Object(i.a)(I.a.icon, I.a.outboundLinkIcon)
				})) : o.a.createElement(a.a, {
					"aria-label": Object(c.c)("View content"),
					className: Object(i.a)(t, I.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(x.permalink),
					rel: "nofollow"
				}, o.a.createElement(C, {
					className: I.a.icon
				}))
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
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-CommunityCard").then(s.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
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
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				d = s.n(i);
			t.a = function(e) {
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, o.a.createElement(a.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
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
				v = d.a.div("PositionedImage", b.a),
				C = d.a.div("HeaderContent", b.a),
				O = d.a.div("HeaderContainer", b.a),
				E = d.a.span("HeaderText", b.a),
				f = d.a.wrapped(r.a, "HeaderUrl", b.a),
				y = d.a.span("Container", b.a),
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
					return o.a.createElement(y, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: "".concat(Object(u.a)(e).banner.height, "px")
						}
					}, o.a.createElement(f, {
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
					}, !e.isTopBannerVariant && o.a.createElement(C, {
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
					})), o.a.createElement(E, {
						style: {
							paddingTop: 32 === w ? "4px" : "14px"
						}
					}, t)), o.a.createElement(v, {
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
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/i18n/utils.ts"),
				i = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => o.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: r.a.locked,
				icon: o.a.createElement(i.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: Object(a.c)("New comments cannot be posted and votes cannot be cast"),
				title: Object(a.c)("This thread is archived")
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				m = s.n(l);
			const p = o.a.createElement(e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			})), {
				className: m.a.lockIcon
			});
			t.a = e => {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? Object(i.c)("This thread has been locked by the moderators of ".concat(Object(i.b)("communityname", (e => Object(d.e)(e) ? r.d.profile : r.d.subreddit)(t) + t.name))) : Object(i.c)("This thread has been locked");
				return o.a.createElement(c.a, {
					className: m.a.bannerBase,
					color: a.a.locked,
					icon: p,
					subtitle: Object(i.c)("New comments cannot be posted"),
					title: s
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				l = s.n(c);
			const m = a.a.wrapped(e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			}))), "TrophyIcon", l.a);
			t.a = Object(r.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, n = t ? Object(d.c)("Comments are in random ordering and vote scores are hidden to non-mods") : Object(d.c)("Comments are in random ordering and vote scores are hidden");
				return o.a.createElement(i.a, {
					className: l.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: o.a.createElement(m, null),
					subtitle: n,
					title: Object(d.c)("This post has contest mode enabled")
				})
			})
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
				v = s.n(x);
			const C = o.a.createElement(u.a, {
					className: v.a.icon
				}),
				O = Object(a.c)({
					language: b.P,
					subreddit: h.y,
					subredditAboutInfo: h.v
				}),
				E = Object(r.b)(O);
			t.a = E(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = s && s.quarantineMessageHtml,
					a = s && s.quarantineMessage || Object(i.a)(n, "contentGate.quarantinedSubreddit.quarantineMsg");
				return o.a.createElement(g.a, {
					className: v.a.container,
					color: c.a.quarantine,
					icon: C,
					subtitle: o.a.createElement("span", null, o.a.createElement(m.c, null, "This community is"), " ", o.a.createElement("a", {
						className: v.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.a.createElement(m.c, null, "quarantined")), ": ", r ? o.a.createElement(d.a, {
						className: v.a.rawHtmlDisplay,
						html: r
					}) : a, " ", o.a.createElement(l.a, {
						className: v.a.link,
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
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				d = s("./src/reddit/constants/posts.ts"),
				c = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/components/MediumPost/index.m.less"),
				p = s.n(m);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: m,
					shouldShowSubscribeButton: u,
					subredditOrProfile: h,
					templatePlaceholderImage: b
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: u
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, u && h && o.a.createElement(a.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(l.e)(h) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: s.id
				})), o.a.createElement(i.a, {
					crosspost: t,
					post: s,
					redditStyle: m,
					forceShowNSFW: n,
					templatePlaceholderImage: b
				}))
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(c);
			const m = a.a.div("Text", l.a),
				p = a.a.div("Placeholder", l.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						}, o.a.createElement(m, null, o.a.createElement(d.c, null, "Loading reports…")))
					}
				});
			t.a = e => o.a.createElement(u, e)
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
				v = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/tooltip.ts"),
				O = s("./node_modules/lodash/find.js"),
				E = s.n(O),
				f = s("./node_modules/react-motion/lib/react-motion.js");
			const y = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				w = "expando_content",
				j = {},
				P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = E()(e, {
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
							opacity: Object(f.spring)(1, y)
						}
					}] : [{
						key: w,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: w,
						style: {
							opacity: Object(f.spring)(0, y)
						}
					}]
				};
			class _ extends o.a.Component {
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
					return o.a.createElement(f.TransitionMotion, {
						styles: e => P(e, t),
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
				T = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				L = s("./src/reddit/selectors/experiments/categories.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/selectors/postCreations.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				D = s("./src/reddit/components/ExpandoButton/index.tsx"),
				W = s("./src/reddit/components/FlairWrapper/index.tsx"),
				H = s("./src/reddit/components/Flatlist/index.tsx"),
				V = s("./src/reddit/components/Governance/Proposal/async.ts"),
				U = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				q = s("./src/reddit/components/ModModeReports/index.tsx"),
				z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Y = s("./src/reddit/components/PostContainer/index.tsx"),
				J = s("./src/higherOrderComponents/makeAsync.tsx"),
				Q = s("./src/lib/loadWithRetries/index.ts"),
				X = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const Z = Object(J.a)({
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
				ve = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ce = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Oe = s.n(Ce);
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = () => Ee._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy}.", [Ee._param("=User Agreement", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, Ee._("User Agreement", null, {
				hk: "2cojEr"
			}))), Ee._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ee._("Content Policy", null, {
				hk: "1owvRc"
			})))], {
				hk: "3LJ7At"
			}), ye = () => Ee._("This content was removed for a violation of Reddit's {=Content Policy}.", [Ee._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ee._("Content Policy", null, {
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
							case T.g.AntiEvilOps:
								return Ee._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "3a8CyR"
								});
							case T.g.Author:
								return Ee._("This post was removed by the person who originally posted it.", null, {
									hk: "2lyUgL"
								});
							case T.g.AuthorDeleted:
								return Ee._("This post was deleted by the person who originally posted it.", null, {
									hk: "16LeiH"
								});
							case T.g.AutomodFiltered:
								return Ee._("This post was reported by automod, and is waiting for your review.", null, {
									hk: "2E46dR"
								});
							case T.g.CommunityOps:
								return Ee._("This post was removed by Reddit admin, u/{username}.", [Ee._param("username", t)], {
									hk: "34nHWu"
								});
							case T.g.ContentTakedown:
								return Ee._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "1wmhiC"
								});
							case T.g.CopyrightTakedown:
								return Ee._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "Ukfj"
								});
							case T.g.Moderator:
								return Ee._("This post was removed by r/{subredditName} moderator, u/{username}.", [Ee._param("subredditName", s), Ee._param("username", t)], {
									hk: "270bcn"
								});
							case T.g.Reddit:
								return Ee._("This post was removed by Reddit's spam filters.", null, {
									hk: "1k3lsh"
								});
							default:
								return Ee._("This post was removed by Reddit's spam filters.", null, {
									hk: "3oxS8r"
								})
						}
					})(n, s, r) : ((e, t) => {
						switch (e) {
							case T.g.AntiEvilOps:
								return Ee._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "2ZqyRT"
								});
							case T.g.Author:
								return Ee._("Sorry, this post was removed by the person who originally posted it.", null, {
									hk: "4IRCN"
								});
							case T.g.AuthorDeleted:
								return Ee._("Sorry, this post was deleted by the person who originally posted it.", null, {
									hk: "4emmIp"
								});
							case T.g.AutomodFiltered:
								return Ee._("Post is awaiting moderator approval.", null, {
									hk: "wdGOr"
								});
							case T.g.CommunityOps:
								return Ee._("Sorry, this post was removed by Reddit's Community team.", null, {
									hk: "3fs5lF"
								});
							case T.g.ContentTakedown:
								return Ee._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "jiKO8"
								});
							case T.g.CopyrightTakedown:
								return Ee._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "1TbEDT"
								});
							case T.g.Moderator:
								return Ee._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Ee._param("subredditName", t)], {
									hk: "12NWKq"
								});
							case T.g.Reddit:
								return Ee._("Sorry, this post was removed by Reddit's spam filters.", null, {
									hk: "10ItEu"
								});
							default:
								return Ee._("Sorry, this post has been removed", null, {
									hk: "11sG9V"
								})
						}
					})(n, r), i = t ? (e => {
						switch (e) {
							case T.g.AntiEvilOps:
								return o.a.createElement(fe, null);
							case T.g.AuthorDeleted:
							case T.g.Author:
								return Ee._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
									hk: "2KZLgT"
								});
							case T.g.AutomodFiltered:
								return Ee._("It won’t show up in your community feed until you or another moderator approve it.", null, {
									hk: "2X5ECb"
								});
							case T.g.CommunityOps:
								return Ee._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask}.", [Ee._param("=just ask", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(be.a.redditUrl, "/message/compose/?to=r/reddit.com"),
									target: "_blank"
								}, Ee._("just ask", null, {
									hk: "2tChW8"
								})))], {
									hk: "1gNycd"
								});
							case T.g.ContentTakedown:
								return o.a.createElement(ye, null);
							case T.g.CopyrightTakedown:
								return Ee._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "7jiV"
								});
							case T.g.Moderator:
								return Ee._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
									hk: "22qJOB"
								});
							case T.g.Reddit:
								return Ee._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3S3oDL"
								});
							default:
								return Ee._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "uKfHK"
								})
						}
					})(n) : ((e, t) => {
						switch (e) {
							case T.g.AntiEvilOps:
								return o.a.createElement(fe, null);
							case T.g.AuthorDeleted:
							case T.g.Author:
								return Ee._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
									hk: "2OBDBc"
								});
							case T.g.AutomodFiltered:
								return Ee._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Ee._param("=[subreddit name]", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(be.a.redditUrl, "/r/").concat(t),
									target: "_blank"
								}, Ee._("{subreddit name}", [Ee._param("subreddit name", "r/".concat(t))], {
									hk: "2o22vl"
								})))], {
									hk: "3dxuEW"
								});
							case T.g.CommunityOps:
								return Ee._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
									hk: "uPiHS"
								});
							case T.g.ContentTakedown:
								return o.a.createElement(ye, null);
							case T.g.CopyrightTakedown:
								return Ee._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "2e8fhi"
								});
							case T.g.Moderator:
								return Ee._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
									hk: "QXZPk"
								});
							case T.g.Reddit:
							default:
								return Ee._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3vUmEz"
								})
						}
					})(n, r), d = t ? he.a.warning : he.a.dayModeActionIcon, c = (e => {
						let t;
						switch (e) {
							case T.g.AntiEvilOps:
							case T.g.AutomodFiltered:
							case T.g.CommunityOps:
							case T.g.ContentTakedown:
							case T.g.CopyrightTakedown:
							case T.g.Reddit:
								t = ge.a;
								break;
							case T.g.AuthorDeleted:
							case T.g.Author:
								t = ve.b;
								break;
							case T.g.Moderator:
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
				Pe = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				_e = s("./src/lib/prettyPrintNumber/index.ts"),
				Ie = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Te = s.n(Ie);
			var ke = e => {
					let {
						post: t,
						showViewCount: s
					} = e;
					const {
						upvotePercentString: n,
						viewCountString: r
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(_e.b)(e.viewCount);
						return {
							upvotePercentString: Pe.fbt._("{percent upvoted}% Upvoted", [Pe.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Pe.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Pe.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(t), a = s && !!t.viewCount;
					return o.a.createElement("div", {
						className: Te.a.viewCounts
					}, a && o.a.createElement("span", null, r), a && !!t.upvoteRatio && o.a.createElement("span", {
						className: Te.a.dotSpacer
					}), !!t.upvoteRatio && o.a.createElement("span", null, n))
				},
				Se = s("./src/reddit/components/PostContent/index.m.less"),
				Le = s.n(Se);
			const Ne = c.a.wrapped(ne.c, "PostTitle", Le.a),
				Me = c.a.wrapped(D.a, "ExpandoButton", Le.a),
				Re = c.a.wrapped(_, "ClassicExpandoMotion", Le.a),
				Ae = c.a.wrapped(H.c, "FullWidthFlatlist", Le.a),
				Fe = c.a.wrapped(F.a, "ClassicThumbnail", Le.a),
				Be = Object(ce.t)({
					isCommentsPage: ce.w,
					pageLayer: e => e
				}),
				De = Object(r.b)(() => Object(i.c)({
					activeModalId: S.a,
					flairStyleTemplate: ce.O,
					currentUser: A.i,
					crosspost: R.c,
					hideNSFWPref: A.y,
					isAdminOrMod: (e, t) => {
						const s = Object(R.U)(e, {
							postId: t.postId
						});
						return !!s && Object(N.g)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: R.h,
					isExpanded: R.j,
					post: R.I,
					language: A.P,
					metaId: (e, t) => e.posts.metaMap[t.postId],
					moderatorPermissions: N.i,
					publicAwardersEnabled: e => !!Object(me.a)(e),
					modModeEnabled: ce.M,
					isInCategoriesExperiment: L.a,
					showEditFlair: pe.a,
					subredditOrProfile: R.U,
					isEditing: M.C,
					userIsOp: A.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(v.O)(s)),
						onOpenReportsDropdown: t => e(Object(C.h)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const n = t === k.a.upvoted ? Object(v.Q)(s) : Object(v.r)(s);
							e(n)
						}
					}
				}),
				We = c.a.wrapped(a.a, "ThumbLink", Le.a),
				He = e => {
					let {
						post: t,
						templatePlaceholderImage: s
					} = e;
					return t.source ? o.a.createElement(Fe, {
						post: t,
						forceShowNSFW: !0,
						templatePlaceholderImage: s
					}) : o.a.createElement(We, {
						to: Object(b.b)(t.permalink)
					}, o.a.createElement(Fe, {
						post: t,
						forceShowNSFW: !0
					}))
				},
				Ve = (e, t, s) => o.a.createElement(Re, {
					content: o.a.createElement(ee.a, {
						className: Le.a.ClassicPostMedia,
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
			t.a = Be(De(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					flairStyleTemplate: r,
					hideNSFWPref: a,
					isAdminOrMod: i,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isEditing: v,
					isExpanded: C,
					isOverlay: O,
					language: E,
					metaId: f,
					moderatorPermissions: y,
					modModeEnabled: w,
					onIgnoreReports: j,
					onOpenReportsDropdown: P,
					onVoteClick: _,
					post: k,
					publicAwardersEnabled: S,
					scrollerItemRef: L,
					sendEvent: N,
					showEditFlair: M,
					subredditOrProfile: R,
					userIsOp: A
				} = e, F = Object(h.a)(y), D = Object(u.a)(y), J = F || D, Q = ((e, t, s) => {
					const [n, o] = e ? [Object(p.f)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || o
				})(n, J, k), X = !!k.media && (k.media.type === I.n.RTJSON || k.media.type === I.n.TEXT), Z = A && X, ce = Object(z.c)(k);
				let me;
				const pe = !(w && h.a),
					ue = Object(te.h)({
						hide: pe,
						editPost: pe,
						save: pe,
						report: pe
					}),
					he = k.removedByCategory === T.g.AuthorDeleted,
					be = n && (n.displayText === k.author || n.username === k.author),
					ge = !he && (be || i || !(k.removedByCategory && k.media && (Object(I.E)(k.media) || Object(I.D)(k.media)))),
					xe = k.removedByCategory === T.g.Reddit && Object(l.e)(k.created) > 24,
					ve = k.removedByCategory && k.removedByCategory !== T.g.Reddit || xe,
					Ce = o.a.createElement(Ne, {
						post: k,
						size: ne.b.ExtraLarge,
						showCategoryTag: O,
						isOverlay: O,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Oe = o.a.createElement(ke, {
						post: k,
						showViewCount: Q
					}),
					Ee = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? de.g.Classic : t ? de.g.Large : n.media ? de.g.Large : de.g.Medium
					})(e);
				if (Ee === de.g.Classic) me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, o.a.createElement(se.a, {
					model: k,
					handleVote: _
				}), o.a.createElement("div", {
					className: Le.a.mainBody
				}, o.a.createElement("div", {
					className: Le.a.content
				}, o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isOverlay: !!O,
					language: E,
					post: k,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !k.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), Ce, o.a.createElement(W.a, {
					className: c ? Le.a.leftPadding : null,
					post: k,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: N
				}), w && F && ce && o.a.createElement(q.a, {
					language: E,
					onIgnoreReports: j,
					reportable: k
				}), o.a.createElement(K.d, {
					postId: k.id
				}), o.a.createElement("div", {
					className: Le.a.FlatlistContainer
				}, o.a.createElement(Me, {
					crosspost: s || void 0,
					isExpanded: !!C,
					post: k,
					useMediaIcons: !1
				}), Ve(k, C, L), o.a.createElement(Ae, {
					currentUser: n,
					hasModFlairPerms: D,
					hasModPostPerms: F,
					isOverlay: O,
					language: E,
					onIgnoreReports: j,
					onOpenReportsDropdown: P,
					modModeEnabled: w,
					post: k,
					showUpvotePercent: !0,
					showViewCount: Q,
					useFlatlistBreakpoints: ue
				}))), Object(m.a)(k) && o.a.createElement(He, {
					post: k,
					templatePlaceholderImage: r && r.postPlaceholderImage
				})));
				else if (Ee === de.g.Medium) {
					const t = Object(m.a)(k);
					me = o.a.createElement("div", {
						"data-test-id": ie.e
					}, o.a.createElement(se.a, {
						model: k,
						handleVote: _
					}), o.a.createElement("div", {
						className: Le.a.mainBody
					}, o.a.createElement("div", {
						className: Le.a.content
					}, o.a.createElement(oe.a, {
						hideNSFWPref: a,
						inSubredditOrProfile: !0,
						isCommentsPage: c,
						isCurrentUserProfilePost: b,
						isOverlay: !!O,
						language: E,
						post: k,
						publicAwardersEnabled: S,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!O && !k.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: R
					}), Ce, k.source && o.a.createElement(ae.a, {
						post: k,
						isCommentsPage: c
					}), o.a.createElement(W.a, {
						className: c ? Le.a.leftPadding : null,
						post: k,
						showCategoryTag: e.isInCategoriesExperiment && c,
						sendEvent: N
					}), R && ve && o.a.createElement(je, {
						isAdminOrMod: i,
						post: k,
						subredditOrProfile: R
					}), w && F && ce && o.a.createElement(q.a, {
						language: E,
						onIgnoreReports: j,
						reportable: k
					})), t && o.a.createElement(G.a, {
						post: k,
						forceShowNSFW: !0,
						hasModPostPerms: J,
						isCommentsPage: c,
						isOverlay: !0,
						modModeEnabled: w,
						templatePlaceholderImage: r && r.postPlaceholderImage
					})), o.a.createElement(K.d, {
						postId: k.id
					}), o.a.createElement("div", {
						className: Le.a.controlsContainer
					}, o.a.createElement(H.c, {
						currentUser: n,
						hasModFlairPerms: D,
						hasModPostPerms: F,
						isOverlay: O,
						language: E,
						modModeEnabled: w,
						onIgnoreReports: j,
						onOpenReportsDropdown: P,
						post: k,
						showEditPost: Z,
						showEditFlair: M,
						tooltipType: O ? re.c.Lightbox : void 0,
						useFlatlistBreakpoints: ue
					}), Oe))
				} else Ee === de.g.Large && (me = o.a.createElement("div", {
					"data-test-id": ie.e
				}, o.a.createElement(se.a, {
					model: k,
					handleVote: _
				}), o.a.createElement(oe.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: b,
					isOverlay: !!O,
					language: E,
					post: k,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !k.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: R
				}), Ce, ((e, t, s, n) => e.source && !t && (s || n))(k, s, O, c) && o.a.createElement(ae.a, {
					post: k,
					isCommentsPage: c
				}), o.a.createElement(W.a, {
					className: c ? Le.a.leftPadding : null,
					post: k,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: N
				}), R && ve && o.a.createElement(je, {
					isAdminOrMod: i,
					post: k,
					subredditOrProfile: R
				}), v ? o.a.createElement($, {
					post: k
				}) : ge && o.a.createElement(ee.a, {
					className: Object(d.a)(Le.a.LargePostMedia, {
						[Le.a.isCommentsPage]: c
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: O,
					isOverlay: O,
					post: k,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !O,
					showCentered: !0,
					scrollerItemRef: L
				}), f && R ? o.a.createElement("div", {
					className: Object(d.a)(Le.a.ProposalContainer, {
						[Le.a.isEditing]: v
					})
				}, o.a.createElement(V.a, {
					pollId: f,
					subredditId: R.id
				})) : null, k.isMeta && !f && o.a.createElement(U.a, {
					className: Le.a.noProposal
				}), w && F && ce && o.a.createElement(q.a, {
					language: E,
					onIgnoreReports: j,
					reportable: k
				}), o.a.createElement(K.d, {
					postId: k.id
				}), o.a.createElement("div", {
					className: Le.a.controlsContainer
				}, o.a.createElement(H.c, {
					currentUser: n,
					hasModFlairPerms: D,
					hasModPostPerms: F,
					isOverlay: O,
					language: E,
					modModeEnabled: w,
					onIgnoreReports: j,
					onOpenReportsDropdown: P,
					post: k,
					showEditPost: Z,
					showEditFlair: M,
					tooltipType: O ? re.c.Lightbox : void 0,
					useFlatlistBreakpoints: ue
				}), Oe)));
				return o.a.createElement(Y.a, {
					className: Object(d.a)(t, Le.a.postContainer, {
						[Le.a.hasEventMeta]: Object(le.a)(k)
					}),
					isOverlay: O,
					post: k,
					eventFactory: O ? g.b : x.f
				}, o.a.createElement(B.a, {
					post: k,
					language: E
				}), me)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, r = s.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && n && (a = "collection.follow.unfollow"), o.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, o.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const b = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.v)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(c.b)(h))
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return z
			})), s.d(t, "a", (function() {
				return J
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
				v = s("./src/reddit/components/PostList/LoadMore.tsx"),
				C = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				E = s("./src/reddit/components/Translated/index.tsx"),
				f = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/componentSizes.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/pixels.ts"),
				I = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/helpers/brandSafety/index.ts"),
				L = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				R = s("./src/reddit/components/PostList/index.m.less"),
				A = s.n(R),
				F = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const B = 500,
				D = new L.a(B),
				W = new L.a(B),
				H = new L.a(B),
				V = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = b.a.div("SeeMore", A.a),
				K = b.a.wrapped(T.a, "ArrowRight", A.a),
				G = (e, t, s, n, o, r, a, i) => {
					const d = s ? "last-".concat(n, "-").concat(o) : "",
						c = "entered-".concat(e, "-").concat(t, "-").concat(d, "-").concat(r);
					let l = D.get(c);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, o), a.trackOnPostEnteredViewport(e, t, i)
					}, D.set(c, l)), l
				},
				q = (e, t, s, n) => {
					const o = "left-".concat(e, "-").concat(t);
					let r = W.get(o);
					return void 0 === r && (r = o => {
						s.trackOnPostExitedViewport(e, t, o, n)
					}, W.set(o, r)), r
				},
				z = (e, t) => {
					const s = "click-".concat(e);
					let n = H.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(_.a)(s.events, f.a.Click, s), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(P.a)(e)
						})
					}, H.set(s, n)), n
				},
				Y = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class J extends c.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(B), this.updateScrollerRef = e => {
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
						this.props.adBrandSafetyStatusReceived(Object(S.a)(a, i))
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
						s(t(n, M.TimerType.InApp))
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
						n = F(t, ["postsById"]),
						{
							postsById: o
						} = e,
						r = F(e, ["postsById"]),
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
					} = this.props, v = 0 === t, C = s ? "last-index" : "", O = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(C, "-").concat(m, "-").concat(l, "-").concat(h);
					let E;
					if (void 0 === (E = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: C,
							postsById: f
						} = this.props, y = f[e], j = y.crosspostRootId && f[y.crosspostRootId] ? f[y.crosspostRootId] : y;
						y.crosspostRootId && !f[y.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(y.id, " is crosspost of ").concat(y.crosspostRootId, ", but ") + "".concat(y.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const P = this.props.postComponentForLayout({
								isCrosspost: !!y.crosspostRootId,
								isFirstPost: v,
								layout: n,
								post: j
							}),
							_ = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							T = G(e, n, s, l, m, h, this.props, t),
							S = q(e, n, this.props, t),
							L = z(e, this.props),
							N = j.media && j.media.type === k.n.EMBED ? j.media.provider : null;
						E = {
							estHeight: Object(I.c)(y, n),
							id: e,
							isFocusable: !(!j.media || n !== w.g.Large) && (k.d.has(j.media.type) && (!N || !k.q.has(N)) && !j.isSpoiler && !j.isNSFW),
							trackOnEnteredViewport: T,
							trackOnExitedViewport: S,
							render: t => {
								let {
									className: n,
									height: u,
									width: h,
									remeasure: x,
									setScrollerChildRef: O,
									shouldLoadInitially: E
								} = t;
								return c.a.createElement(P, {
									className: n,
									currentProfileName: o,
									key: _,
									availableWidth: h,
									eventFactory: b,
									first: v,
									forceLoadMedia: E,
									inSubredditOrProfile: C,
									isCommentPermalink: r,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: d,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: O
								})
							}
						}, this.scrollChildCache.set(O, E)
					}
					return E
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
						className: A.a.placeholder
					}, c.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && c.a.createElement(C.a, {
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
						className: A.a.placeholder
					}, c.a.createElement(v.a, {
						className: o,
						isLoading: !!t,
						layout: n,
						countOverride: V[n]
					}), !!e && c.a.createElement(C.a, {
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
					o && (g = Y(g, o));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						v = i ? Object(n.e)(i) : null,
						C = v || r;
					return c.a.createElement(d.Fragment, null, c.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: C ? A.a.truncatedPostList : Object(p.a)(A.a.postList, this.props.className),
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
						viewportTopPadding: y.f
					}, g), v && c.a.createElement(U, {
						className: A.a.seeMoreButton
					}, c.a.createElement(j.a, {
						className: A.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Kb.Posts
						})
					}, c.a.createElement(E.a, {
						msgId: "search.seeMorePosts"
					}), c.a.createElement(K, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: c.a.Fragment
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(a.a, Object.assign({}, e, {
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
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				C = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: v,
					isOverlay: O,
					language: E,
					post: f,
					shouldShowSubscribeButton: y,
					subredditOrProfile: w,
					tooltipType: j
				} = e;
				return o.a.createElement("div", {
					className: C.a.metaContainer
				}, !n && !f.isSponsored && w && o.a.createElement(i.a, {
					postId: f.id,
					subredditName: w.name
				}, o.a.createElement(p.a, {
					className: C.a.subredditName,
					"data-click-id": "subreddit",
					to: w.url
				}, w.displayText)), w && w.isQuarantined && o.a.createElement(m.a, null), !n && !f.isSponsored && w && y && !v && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(f.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(x.e)(w) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: f.id,
					small: !0
				}), !n && !f.isSponsored && o.a.createElement(b.b, null), !n && !f.isSponsored && o.a.createElement(d.h, {
					type: f.belongsTo.type,
					id: f.belongsTo.id
				}), o.a.createElement(l.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: f,
					tooltipType: j
				}), o.a.createElement(c.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!n,
					language: E,
					post: f,
					tooltipType: j
				}), w && o.a.createElement(a.a, {
					className: C.a.donationAmount,
					contentId: f.id,
					subredditId: w.id
				}), o.a.createElement(r.a, {
					hideCta: s,
					isOverlay: O,
					thing: f,
					tooltipType: j
				}))
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
				return v
			})), s.d(t, "c", (function() {
				return C
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
				v = n.a.wrapped(o.b, "CheckboxMenuItem", p.a),
				C = n.a.wrapped(r.b, "DropdownRow", p.a),
				O = n.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, h = "upvote-button-".concat(t.id);
				return o.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: u
				}, n && o.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), o.a.createElement(a.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: h
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				E = s.n(O);
			const f = s("./src/lib/lessComponent.tsx").a.div("Container", E.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: n,
					iconClassName: O,
					inSubredditOrProfile: y,
					isCurrentUserProfilePost: w,
					isCommentsPage: j,
					isCompactPinnedPost: P,
					isOverlay: _,
					language: I,
					post: T,
					publicAwardersEnabled: k,
					shouldShowSubscribeButton: S,
					showCornerOutboundLink: L,
					showSubreddit: N,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, A = j && k;
				return o.a.createElement(f, {
					className: t
				}, N && R && o.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && o.a.createElement(m.b, {
					className: Object(r.a)(E.a.subredditIcon, O),
					shouldHideNsfwIcon: n,
					subredditOrProfile: R
				}))), o.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, N && o.a.createElement(d.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), o.a.createElement(l.d, {
					className: E.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: _ ? l.c.Lightbox : void 0,
					language: I,
					post: T,
					showSub: N,
					subredditOrProfile: R
				}), o.a.createElement(c.a, {
					className: E.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: y,
					language: I,
					isCompactPinnedPost: P,
					post: T,
					tooltipType: _ ? l.c.Lightbox : void 0
				}), R && o.a.createElement(i.a, {
					className: E.a.donationAmount,
					contentId: T.id,
					subredditId: R.id
				}), o.a.createElement(a.a, {
					forceShowAllAwards: j,
					isOverlay: _,
					showAwarders: A,
					tooltipType: _ ? l.c.Lightbox : void 0,
					thing: T
				})), R && N && S && !w && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(T.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(C.e)(R) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: T.id
				}, "Subscribe"), L && o.a.createElement(b.a, {
					className: E.a.OutboundLink,
					isSponsored: T.isSponsored,
					href: Object(v.A)(e.post),
					source: T.source
				}, o.a.createElement(x.a, {
					className: E.a.outboundLinkIcon
				})))
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
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/components/ListingPostList/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/elementIds.ts"),
				b = s("./src/reddit/constants/page.ts"),
				g = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/helpers/trackers/lightbox.ts"),
				v = s("./src/reddit/helpers/trackers/screenview.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/selectors/commentsListTruncated.ts"),
				E = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				f = s("./src/reddit/selectors/experiments/chatPost.ts"),
				y = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				j = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				_ = s("./src/reddit/constants/listings.ts"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				L = s.n(S);
			var N = Object(P.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldNavigateToHome: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r, d = !o && i || Object(k.a)(Object.assign({}, e, {
						redditStyle: !0
					})).button, c = n ? "See more" : "Continue browsing";
					return a.a.createElement(I.a, {
						className: Object(j.a)(L.a.footer, t),
						onMouseDown: s,
						to: o ? _.c[_.b.Home] : r.url,
						style: {
							backgroundColor: d
						}
					}, a.a.createElement("div", {
						className: L.a.background
					}), a.a.createElement("div", {
						className: L.a.layout
					}, o ? a.a.createElement(C.c, null, "See more recommended") : a.a.createElement(C.c, null, c, " in ", a.a.createElement(C.b, {
						name: "subredditName"
					}, r.displayText)), a.a.createElement(T.a, {
						className: L.a.arrow
					})))
				}),
				M = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				R = s.n(M);
			const A = Object(d.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, O.a, E.b, y.b, (e, t, s, n) => {
					const o = Object(y.a)(n);
					return !((!t || !o || s) && e)
				}),
				F = Object(d.c)({
					isChatPost: f.d,
					isLoggedIn: w.F,
					shouldShowSubredditUpsell: A
				}),
				B = Object(i.b)(F, e => ({
					loadMorePosts: t => e(Object(m.r)({
						sort: c.N.HOT,
						subredditName: t
					}))
				}));
			class D extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(h.d) : null, this.onViewed = (e, t) => Object(v.d)(this.listingKey(), c.N.TOP, t, e, c.Pb.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(x.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						subredditOrProfile: e
					} = this.props;
					return Object(l.a)(e.name, c.N.TOP, {
						t: c.Pb.WEEK
					})
				}
				renderSmallBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("div", {
						className: R.a.smallBanner
					}, a.a.createElement(C.c, null, "More posts from the ", a.a.createElement(C.b, {
						name: "name"
					}, t), " community"))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("span", {
						className: R.a.textBanner
					}, a.a.createElement(C.c, null, "More from ", a.a.createElement(C.b, {
						name: "name"
					}, t)))
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isLoggedIn: s,
						shouldShowSubredditUpsell: n,
						subredditOrProfile: r
					} = this.props;
					return s || t || !n ? null : a.a.createElement("div", {
						className: R.a.container
					}, this.renderSmallBanner(), a.a.createElement(p.a, {
						className: R.a.postList,
						disablePlaceholder: !0,
						forcedLayout: g.g.Large,
						getScrollContainer: this.scrollContainer,
						isTruncated: !0,
						listingKey: this.listingKey(),
						listingName: b.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: R.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e
					}), a.a.createElement(N, {
						className: R.a.footer,
						onClick: this.onFooterClick,
						shouldNavigateToHome: !1,
						subredditOrProfile: r
					}))
				}
			}
			t.a = B(Object(u.b)(D))
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
			var v = () => {
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
				C = s("./src/lib/constants/index.ts"),
				O = s("./src/reddit/components/PostMedia/index.tsx"),
				E = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PostTopMeta/index.tsx"),
				y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				w = s("./src/lib/getShortenedLink.ts"),
				j = s("./src/lib/opener/index.ts"),
				P = s("./src/reddit/actions/ads/index.ts"),
				_ = s("./src/reddit/components/PostContainer/index.tsx"),
				I = s("./src/reddit/constants/adEvents.ts"),
				T = s("./src/reddit/contexts/InsideOverlay.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				S = s("./src/reddit/helpers/adCount/index.ts"),
				L = s("./src/reddit/helpers/pixels.ts"),
				N = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				R = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				A = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				F = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				B = s("./src/reddit/models/Theme/index.ts"),
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
						case C.eb.IMAGE:
							return o.a.createElement(U, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var G = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				q = s.n(G);
			const z = h.a.wrapped(f.d, "PostTopMeta", q.a),
				Y = h.a.div("BannerAdContainer", q.a),
				J = e => {
					let {
						children: t
					} = e;
					return o.a.createElement("div", null, t)
				},
				Q = h.a.div("PromotedPostContainer", q.a),
				X = h.a.wrapped(A.a, "OutboundLinkIcon", q.a),
				Z = h.a.div("SourceLinkWrapper", q.a),
				$ = h.a.div("TopLine", q.a),
				ee = h.a.wrapped(E.c, "PostTitle", q.a),
				te = h.a.div("PostMediaWrapper", q.a),
				se = h.a.div("BackgroundWrapper", q.a),
				ne = h.a.wrapped(_.a, "PostContainer", q.a),
				oe = 640,
				re = (e, t) => {
					Object(L.a)(t.events, I.a.Click, t), t.source ? t.source.outboundUrl ? Object(j.d)(t.source.outboundUrl, j.c.BLANK) : Object(j.d)(t.source.url, j.c.BLANK) : Object(j.d)(t.permalink, j.c.BLANK)
				},
				ae = e => Object(R.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(N.a)(e), F.a.actionIcon, F.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				de = e => ({
					background: Object(B.g)(Object(D.a)(e).body, null, null) || ""
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
					return e.isBlank ? (r = J, a = null) : e.isMediaOnly ? (r = Y, d = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = o.a.createElement(K, {
						post: e
					})) : (r = Q, a = o.a.createElement(se, {
						style: de(this.props)
					}, o.a.createElement($, null, o.a.createElement(z, {
						tooltipType: n ? f.c.Lightbox : void 0,
						language: C.y,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(ee, {
						post: e,
						size: E.b.Large,
						format: ae
					}), e.source && o.a.createElement(Z, null, o.a.createElement(k.a, {
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
						e(Object(P.c)(Object(S.a)(s, !!o, n)))
					}
				}))(Object(T.b)(Object(y.a)(ce))),
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
				ve = h.a.wrapped(pe.a, "ThemedWidget", he.a),
				Ce = h.a.div("SidebarAdPlaceholder", he.a),
				Oe = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				Ee = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(W.B)(e.media) && e.media.content)),
				fe = e => !!e && e.isBlank;
			class ye extends o.a.Component {
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
					return u || t || !Ee(s) && b ? o.a.createElement(me.a, null, o.a.createElement(ve, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(Ce, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : h ? o.a.createElement(me.a, null, o.a.createElement(ve, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, o.a.createElement(v, null))) : Ee(s) ? o.a.createElement(me.a, null, o.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: d,
						placement: c,
						placementIndex: r
					})) : o.a.createElement(me.a, null, o.a.createElement(ve, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, fe(s) && o.a.createElement(le, {
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
			t.a = ge(ye)
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
					}) && !Object(d.x)(e),
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
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
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
				v = s.n(x);

			function C() {
				return (C = Object.assign || function(e) {
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
			const E = (e, t, s) => Object(b.a)(e, {
					[v.a.mActive]: t
				}, {
					[v.a.topBannerVariant]: s
				}),
				f = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, r = O(e, ["children", "isActive", "isTopBannerVariant"]);
					return o.a.createElement("div", C({
						className: E(v.a.subNavTitle, s, n)
					}, r), o.a.createElement("span", null, t), o.a.createElement(g.b, {
						className: v.a.navDropdownIcon
					}))
				},
				y = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: r
					} = e, a = O(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = E(v.a.navLink, s, r);
					return n ? o.a.createElement(h.a, C({
						className: i,
						to: n
					}, a)) : o.a.createElement("a", C({
						className: i
					}, a))
				},
				w = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return o.a.createElement(h.a, C({
						className: E(v.a.navLink, s)
					}, n))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return o.a.createElement("a", C({
						className: E(v.a.subNavLink, s)
					}, n))
				},
				P = e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return o.a.createElement("div", C({
						className: Object(b.a)(v.a.subNavContainer, t)
					}, s))
				},
				_ = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = O(e, ["className", "isOpen"]);
					return o.a.createElement("div", C({
						className: Object(b.a)(v.a.subNavList, t, {
							[v.a.mIsOpen]: s
						})
					}, n))
				};
			const I = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var T = Object(d.t)()(Object(r.b)(I, (e, t) => ({
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
						className: v.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, o.a.createElement(u.c, null, "Polls")) : null
				}))),
				k = s("./src/lib/linkMatchers/index.ts");
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
					return o.a.createElement(P, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(f, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(_, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var L = S;
			const N = e => {
				const t = e.url && Object(k.g)(k.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? o.a.createElement(y, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : o.a.createElement(L, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => o.a.createElement(j, {
					key: "".concat(e.text, "-").concat(N(e)),
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				R = s("./src/lib/constants/index.ts");
			const A = Object(d.t)(),
				F = [R.yb.SUBREDDIT, R.yb.COMMENTS, R.yb.COLLECTION_COMMENTS],
				B = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = A(Object(r.b)(B, (e, t) => ({
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
					return o.a.createElement(y, {
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
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Y = Object(W.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, r = z(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(q.a)(r);
				return o.a.createElement("div", {
					className: Object(b.a)(v.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(G.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var J = e => o.a.createElement(Y, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, o.a.createElement("div", {
					className: v.a.innerContainer,
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
				} = e, r = !!n && !!n.meta && n.meta.name === R.yb.SUBREDDIT_WIKI, a = "wiki/".concat(X.i), i = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return o.a.createElement(y, {
					isActive: r,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object(Z.g)())
				}, o.a.createElement(Q.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(c.a)("spPolls", T),
				te = Object(d.t)(),
				se = Object(a.c)({
					language: l.P,
					layout: d.K,
					widget: m.f
				}),
				ne = Object(r.b)(se);
			t.a = te(ne(Object(i.b)(e => o.a.createElement(J, {
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
				v = s("./src/reddit/selectors/postCollection.ts"),
				C = s("./node_modules/reselect/es/index.js"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/helpers/trackers/postCollection.ts"),
				f = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				y = s.n(f);
			const w = c.a.wrapped(b.b, "DropdownRow", y.a);
			let j;
			const P = Object(x.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				_ = Object(x.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				I = Object(C.c)({
					createPostUrl: v.d,
					isDeleteConfirmModalOpen: P,
					isEditCollectionModalOpen: _,
					shouldShowCollectionEditOptions: v.s
				}),
				T = Object(i.b)(I, (e, t) => ({
					copyLink: () => e(Object(m.w)(t.permalink)),
					onCreatePost: s => {
						t.shouldShowCreatePost && e(Object(d.b)(s))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						j || (j = await Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("editCollectionModal")]).then(s.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = T(Object(O.b)(e => {
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
					targetPosition: v,
					tooltipPosition: C,
					sendEvent: O
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: "collection-menu-".concat(s, "-").concat(x ? 1 : 2),
					onClick: o.a,
					targetPosition: v,
					tooltipPosition: C
				}, a.a.createElement(w, {
					onClick: n,
					displayText: Object(g.c)("Copy collection link")
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(w, {
					onClick: () => {
						O(Object(E.l)(s)), p()
					},
					displayText: Object(g.c)("Edit")
				}), a.a.createElement(w, {
					onClick: () => {
						O(Object(E.k)(s)), m()
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
				v = s("./src/reddit/helpers/flair.ts"),
				C = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				y = s.n(f);

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
			const P = 129,
				_ = Object(b.t)({
					filterName: e => Object(b.P)(e)[h.f],
					url: e => Object(b.T)(e)
				}),
				I = Object(i.c)({
					subredditId: (e, t) => Object(E.D)(e, t.subredditName)
				}),
				T = Object(a.b)(I),
				k = l.a.div("WidgetContent", y.a),
				S = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, o = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(d.a)(y.a.StyledFlair, t === O.d.Cloud && y.a.cloudDisplay, {
							[y.a.flairFilter]: s,
							[y.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, w({}, o, {
						className: y.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class L extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(C.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(C.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(C.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(C.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(v.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(v.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > P && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(g.n, {
						className: y.a.flairFilterButton,
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
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? P : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: y.a.flairFilterContainer,
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
						to: Object(v.e)(this.props.url, Object(v.j)(e))
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
					}, r.a.createElement(k, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(o), i && this.renderButton()))
				}
			}
			t.a = _(T(Object(p.b)(L)))
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
				v = s.n(x);
			const C = c.a.div("RuleShortName", v.a),
				O = c.a.div("RuleIndex", v.a),
				E = c.a.div("RuleTitle", v.a),
				f = c.a.div("RuleDescription", v.a),
				y = c.a.wrapped(l.a, "RawHTMLDisplay", v.a),
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
					return o.a.createElement(C, {
						className: Object(d.a)({
							[v.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(b.a, null, o.a.createElement(O, null, "".concat(e.humanIndex, ".")), o.a.createElement(E, null, "".concat(e.rule.shortName)), o.a.createElement("div", null, !n(e) && r && (t.isVisible ? o.a.createElement(h.a, {
						className: v.a.Chevron
					}) : o.a.createElement(u.a, {
						className: v.a.Chevron
					})))), t.isVisible && o.a.createElement(f, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: w
					}) : e.rule.descriptionHtml ? o.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return P
			}));
			const P = Object(i.a)(e => e.rules.length > 0 ? o.a.createElement(a.a, {
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
			t.b = e => o.a.createElement(P, {
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
				v = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Widgets/Button/index.m.less"),
				O = s.n(C);
			const E = (e, t, s) => {
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
				f = e => e.kind === g.f.Image ? O.a.imageButton : O.a.textButton,
				y = e => {
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
						className: f(t),
						style: E(t, s, n)
					}, t.kind === g.f.Text && o.a.createElement("span", {
						className: t.hoverState ? O.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && o.a.createElement("span", {
						className: O.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => o.a.createElement(l.a, {
					href: y(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(w, e)),
				P = p.a.wrapped(i.a, "RawHTMLDisplay", O.a);
			var _ = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: v.R
				}))(e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(P, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => o.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = s("./src/lib/humanizeDate/index.ts"),
				T = s("./src/reddit/controls/TextButton/index.tsx"),
				k = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = s.n(S);
			const N = 100,
				M = {
					isExpanded: !1
				},
				R = p.a.wrapped(i.a, "RawHTMLDisplay", L.a),
				A = p.a.div("EventContainer", L.a),
				F = p.a.div("EventTitle", L.a),
				B = p.a.div("EventDate", L.a),
				D = p.a.div("EventLocation", L.a),
				W = p.a.div("EventDescription", L.a),
				H = p.a.wrapped(T.a, "ToggleDescription", L.a);
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
					return e.text.length > N ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, N), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(k.c)("read less") : Object(k.c)("...read more"))) : o.a.createElement(W, null, e.text)
				}
			}
			const U = Object(a.c)({
				language: v.P
			});
			var K = Object(r.b)(U)(e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => o.a.createElement(A, {
					key: "".concat(s, "-").concat(t.title)
				}, o.a.createElement(F, null, t.titleHtml ? o.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(B, null, Object(I.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
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
				q = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(G.b)(e => o.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Y = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(r.b)(Y),
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
			var Z = J(X),
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
							alt: Object(k.c)("Widget image"),
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
				ve = p.a.div("Username", ge.a),
				Ce = p.a.a("MessageModsLink", ge.a),
				Oe = p.a.wrapped(de.b, "FlairComponent", ge.a),
				Ee = e => e.authorFlairType === he.f.Richtext ? {
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
				fe = e => o.a.createElement(ve, null, "u/".concat(e)),
				ye = p.a.wrapped(ce.a, "InternalLink", ge.a),
				we = p.a.div("LinkContainer", ge.a);
			var je = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return o.a.createElement(d.a, {
						styles: s.styles,
						title: Object(k.c)("Moderators"),
						headerButton: o.a.createElement(Ce, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, o.a.createElement(ue, null))
					}, s.mods.map(e => o.a.createElement(xe, {
						key: e.name
					}, (e => o.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, fe(e.name)))(e), o.a.createElement(Oe, {
						flair: Ee(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(we, null, o.a.createElement(ye, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(k.c)("View All Moderators"))))
				},
				Pe = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				_e = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Te = s.n(Ie);
			const ke = p.a.div("WidgetContent", Te.a),
				Se = p.a.wrapped(i.a, "RawHTMLDisplay", Te.a);
			var Le = e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(ke, null, o.a.createElement(Se, {
					html: e.widget.textHtml || ""
				}))),
				Ne = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => o.a.createElement(Ne.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Le;
						case "button":
							return _;
						case "subreddit-rules":
							return _e.b;
						case "community-list":
							return z;
						case "calendar":
							return K;
						case "image":
							return ae;
						case "custom":
							return Z;
						case "post-flair":
							return Pe.a;
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
				return C
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return y
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
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tracking.ts");

			function C() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					pageLayer: e => e
				})
			}
			const O = C(),
				E = {
					apiError: b.c,
					apiPending: b.d,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.K)(e, t),
					loadMore: b.g,
					postsById: g.T,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(g.F)(e, s, n, o)
					}),
					subredditsById: x.V,
					viewportDataLoaded: v.a,
					pageReferrer: l.N,
					postListPlaceholderComponent: () => u.a
				},
				f = Object(o.c)(E),
				y = (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
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
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(i.E(t, n, o))
					}
				}),
				w = Object(n.b)(f, y, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(c.b)(O(w(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => o.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": i
					} = t, d = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, a, i);
					return o.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, c, s)
					}, d))
				},
				b = h(c.a),
				g = h(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? b : a.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				c = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(c),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const p = a.a.span("metaText", l.a),
				u = e => o.a.createElement(p, e, " · "),
				h = Object(r.d)("comment.point"),
				b = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: r
					} = e, a = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(i.b)(n),
						l = Object(d.c)("\n    ".concat(Object(d.b)("score", c), " ").concat(Object(d.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						u = t ? Object(d.c)("Score hidden") : r ? l : h(s, n, {
							count: c
						});
					return o.a.createElement(p, a, u)
				},
				g = (e, t) => {
					const s = Object(r.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return o.a.createElement(p, null, s)
				}
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => Object.assign({}, Object(n.defaults)(e), {
					media: Object(n.media)(e, t),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e) || Object(n.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.post)(t, e)
				}, o(t, e)),
				a = e => t => Object.assign({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.post)(t, e)
				}, o(t, e))
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
				return v
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "l", (function() {
				return f
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
				v = d("add_wiki_subreddit_contributor"),
				C = d("remove_wiki_subreddit_contributor"),
				O = d("ban_wiki_contributor"),
				E = d("unban_wiki_contributor"),
				f = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				y = {
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
						settingValue: y[e]
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
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
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
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				C = s.n(v);

			function O() {
				return (O = Object.assign || function(e) {
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
			const f = Object(r.b)(() => Object(a.c)({
					showFPR: x.E,
					showSuspended: x.L
				})),
				y = Object(d.a)(e => {
					var {
						className: t,
						isCollectionLayout: s,
						theme: n
					} = e, r = E(e, ["className", "isCollectionLayout", "theme"]);
					const a = Object(g.a)(Object.assign({
						theme: n
					}, r));
					return o.a.createElement("div", O({
						className: Object(i.a)(C.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(s ? u.h : u.i, "px")
						}
					}, r))
				});
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return o.a.createElement(m.a, {
							className: Object(i.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.narrow]: !this.props.isCollectionLayout
							}, Object(l.b)(C.a, t))
						}, o.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = f(w)
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
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				i = s.n(a);
			const d = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(i.a.lightboxContainer, {
						[i.a.mIsCollectionLayout]: e.isCollectionLayout,
						[i.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => o.a.createElement("div", {
					className: Object(r.a)(i.a.lightboxContent, {
						[i.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[i.a.mIsFakeOverlay]: e.isFakeOverlay,
						[i.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(i.a.lightboxSidebar, {
						[i.a.mIsFakeOverlay]: e.isFakeOverlay,
						[i.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends o.a.PureComponent {
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
						sidebar: r
					} = this.props;
					return o.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, r))
				}
			}
			t.a = m
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
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				g = s.n(b);
			const x = Object(r.b)(() => Object(a.c)({
				headComment: u.y,
				otherDiscussionsCount: h.y,
				post: u.F
			}));
			t.a = Object(c.b)(x(e => {
				let {
					commentId: t,
					headComment: s,
					isOverlay: n,
					otherDiscussionsCount: r,
					post: a,
					postId: c,
					sendEvent: u
				} = e;
				if (!a) return null;
				const h = void 0 !== t,
					b = a.permalink,
					x = r > 0,
					v = Object(l.b)(Object(i.e)(b));
				return h || x ? o.a.createElement("div", {
					className: g.a.CommentsNavigationPane
				}, h && o.a.createElement("div", null, o.a.createElement(d.a, {
					className: g.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(b)
				}, o.a.createElement(p.c, null, "View all comments")), s && null !== s.parentId && o.a.createElement(d.a, {
					className: g.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(s.permalink + "?context=8&depth=9")
				}, o.a.createElement(p.c, null, "Show parent comments"))), x && o.a.createElement(d.a, {
					className: g.a.OtherDiscussionsLink,
					isOverlay: n,
					onClick: () => u(Object(m.a)(c)),
					to: v
				}, o.a.createElement(p.c, null, "View discussions in ", o.a.createElement(p.b, {
					name: "otherDiscussionsCount"
				}, r), " other", o.a.createElement(p.a, {
					name: "communities",
					singular: " community",
					plural: " communities",
					count: r
				})))) : null
			}))
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
			s.r(t), s.d(t, "CommentsPage", (function() {
				return ct
			}));
			var n = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(n),
				r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				a = s.n(r),
				i = s("./node_modules/core-js/modules/es6.symbol.js"),
				d = s.n(i),
				c = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/get.js"),
				m = s.n(l),
				p = s("./node_modules/lodash/throttle.js"),
				u = s.n(p),
				h = s("./node_modules/react/index.js"),
				b = s.n(h),
				g = s("./node_modules/react-redux/es/index.js"),
				x = s("./node_modules/react-router-redux/es/index.js"),
				v = s("./node_modules/reselect/es/index.js"),
				C = s("./src/reddit/i18n/utils.ts"),
				O = s("./src/reddit/models/PostDraft/index.ts"),
				E = s("./src/telemetry/index.ts"),
				f = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/lib/classNames/index.ts"),
				w = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/domUtils/index.ts"),
				P = s("./src/lib/fastdom/index.ts"),
				_ = s("./src/lib/lessComponent.tsx"),
				I = s("./src/lib/makeCommentsPageKey/index.ts"),
				T = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/lib/performanceTimings/index.tsx"),
				S = s("./src/reddit/actions/comment/index.ts"),
				L = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				N = s("./src/reddit/actions/login.ts"),
				M = s("./src/reddit/actions/page.ts"),
				R = s("./src/reddit/actions/tooltip.ts"),
				A = s("./src/reddit/components/Collection/index.tsx"),
				F = s("./src/reddit/components/CommentsPageAd/index.tsx"),
				B = s("./src/reddit/components/ContentGate/index.tsx"),
				D = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				W = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				H = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/elementIds.ts"),
				U = s("./src/reddit/constants/history.ts"),
				K = s("./src/reddit/constants/keycodes.ts"),
				G = s("./src/reddit/constants/posts.ts"),
				q = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				J = s("./src/reddit/featureFlags/profileCollections.ts"),
				Q = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/comments.ts"),
				te = s("./src/reddit/selectors/commentsListTruncated.ts"),
				se = s("./src/reddit/selectors/discoveryUnit.ts"),
				ne = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				oe = s("./src/reddit/selectors/experiments/chatPost.ts"),
				re = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ae = s("./src/reddit/selectors/meta.ts"),
				ie = s("./src/reddit/selectors/moderatorPermissions.ts"),
				de = s("./src/reddit/selectors/posts.ts"),
				ce = s("./src/reddit/selectors/subreddit.ts"),
				le = s("./src/reddit/selectors/tooltip.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ue = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				he = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				be = s("./src/reddit/components/Comments/index.tsx"),
				ge = s("./src/reddit/components/Comments/States/index.tsx"),
				xe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ve = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ce = s("./src/reddit/components/CommentSort/index.tsx"),
				Oe = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Ee = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				fe = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/async.tsx"),
				ye = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/async.tsx"),
				we = s("./src/reddit/components/HeaderImage/index.tsx"),
				je = s("./src/reddit/components/Hovercards/helpers.ts"),
				Pe = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				_e = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Ie = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Te = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				ke = s("./src/reddit/components/JumpToContent/index.tsx"),
				Se = s("./src/reddit/components/PostContent/index.tsx"),
				Le = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ne = s("./src/reddit/components/SubredditNav/index.tsx"),
				Me = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Re = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ae = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Fe = s("./src/reddit/helpers/history/index.ts"),
				Be = s("./src/reddit/helpers/postCollection.ts"),
				De = s("./src/reddit/helpers/trackers/lightbox.ts"),
				We = s("./src/reddit/helpers/trackers/screenview.ts"),
				He = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Ve = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ue = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ke = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Ge = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				qe = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				ze = s("./src/reddit/pages/CommentsPage/index.m.less"),
				Ye = s.n(ze);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Qe = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Xe = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				Ze = 80,
				$e = 200,
				et = 80,
				tt = 32,
				st = Object(c.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				nt = e => {
					const {
						state: t
					} = e.location, s = m()(t, U.a.IsOverlay, !1), n = m()(t, U.a.CloseLocation, null), o = m()(t, U.a.ScrollOnLoad, !1);
					o && Object(Fe.c)(U.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: a,
						subredditName: i
					} = e.match.params, d = Object(Z.m)(a), c = r && Object(Q.e)(r);
					return b.a.createElement(ct, {
						closeLocation: n,
						commentId: c,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: d,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: i
					})
				},
				ot = Object(z.t)(),
				rt = () => Object(v.c)({
					apiError: ee.c,
					apiPending: ee.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(de.U)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					comment: ee.n,
					communityBannerDiscoveryUnit: se.b,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(me.f)(e, s)
					},
					contestModeIsEnabled: de.A,
					currentUserShowNSFW: me.U,
					dismissedSubreddits: ne.a,
					fullyLoaded: ee.v,
					hasModeratorPostPermissions: ie.b,
					headComment: ee.y,
					isChatPost: oe.e,
					isChatPostExperiment: oe.d,
					isCommentsListTruncated: te.a,
					isLoggedIn: me.G,
					isNightmodeOn: me.R,
					isTooltipOpen: (e, t) => !!Object(le.a)(e),
					language: me.P,
					listingBelowAllVariant: qe.b,
					origin: ae.h,
					post: ee.F,
					postSEOV2IdCardVariant: re.i,
					profileCollectionsEnabled: J.a,
					replyComment: ee.t,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(ce.v)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: de.U,
					userHovercardIsOpen: (e, t) => Object(le.b)(Object(je.b)({
						itemId: t.postId,
						tooltipIdPrefix: D.a,
						tooltipType: Le.c.StickyPost
					}))(e),
					userPrefs: me.hb
				}),
				at = (e, t) => ({
					dismissTruncation: t => e(Object(pe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(L.a)()),
					setCommentFocus: t => e(S.M({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(M.z)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(R.i)()),
					onToggleTooltip: t => e(Object(R.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(N.e)()),
					openRegisterModal: () => e(Object(N.f)()),
					goToSubredditPage: t => e(Object(x.b)(t)),
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(oe.g)(n(), t, s)),
					truncateCommentsList: () => e(Object(L.b)())
				}),
				it = Object(g.b)(rt, at);
			class dt extends b.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = u()(() => {
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
							d = null !== this.scrollY && Math.abs(i - this.scrollY) > Ze,
							c = r && r.media && r.media.type === X.n.EMBED ? r.media.provider : null,
							l = r && r.media && X.d.has(r.media.type) && (!c || !X.q.has(c));
						this.scrollY = i, !e && void 0 !== s && i >= s && (this.didScrollPastPost = !0), e && void 0 !== s && i < s && (this.didScrollPastPost = !1, n && P.a.write(() => {
							o(Object(je.b)({
								itemId: a,
								tooltipIdPrefix: D.a,
								tooltipType: Le.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !d && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (d ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * w.F) : (this.postPaused = !1, P.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, P.a.write(this.postScrollItemRef.pauseContent)))
					}, w.F), this.sendEventWithName = e => () => this.props.sendEvent(Object(De.b)(this.props.postId, e)), this.updateWindowHeight = () => {
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
						if (t(), Object(qe.a)(s)) {
							const t = n && Object(Z.l)(n) && n && n.belongsTo.id;
							t && e(t)
						}
						this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Ae.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === K.b.F || e.keyCode === K.a.F,
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
					n ? (this.scrollContainerEl = document.getElementById(V.d), r && (e || t) && o && o.numComments ? this.scrollToComments() : P.a.write(() => {
						setTimeout(() => {
							Object(j.c)(this.scrollContainerEl, 0)
						})
					})) : this.scrollContainerEl = window, this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), P.a.read(() => {
						this.props.isOverlay || Object(k.d)(k.c.CommentsPage, s)
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
						const e = this.props.post && Object(Be.a)(this.props.post);
						this.props.post && this.props.post.numComments ? P.a.read(this.handleScroll) : P.a.write(() => {
							e || Object(j.c)(this.scrollContainerEl, 0), P.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && P.a.write(() => {
							setTimeout(() => {
								Object(j.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = H.b + (this.props.isOverlay ? H.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(V.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								a = this.props.isOverlay ? tt : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= a && P.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(j.c)(n, a) : Object(j.c)(document, a)
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
					if (Object(qe.a)(t)) {
						const t = s && s.id;
						t && !e.includes(t) && n()
					}
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = $e
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
					P.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - et, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - et, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), P.a.write(() => {
								Object(j.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => P.a.read(this.handleScroll))
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
					return E.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					P.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = E.c.end(t);
						n(Object(We.b)(t, s, e, f.TimerType.InApp, r, o))
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
					} = this.props, r = !(!n || !n.isNSFW || t), a = Object(Re.a)(e, r, o);
					if (!a) return null;
					let i = b.a.createElement(B.b, a);
					return s && (i = b.a.createElement(He.a, {
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
						post: d,
						postId: c,
						postSEOV2IdCardVariant: l,
						sendEvent: m,
						subredditName: p,
						subredditOrProfile: u,
						profileCollectionsEnabled: h
					} = this.props, g = Object(re.e)(l);
					if (!d) {
						if (t) return b.a.createElement(ge.f, null);
						const s = this.renderPageError();
						return s || (e ? b.a.createElement(ge.d, null) : b.a.createElement(ge.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const x = this.isCommentPermalink(),
						v = d.belongsTo.type === G.a.PROFILE,
						C = Object(Be.a)(d) && (!v || h),
						O = !r;
					return b.a.createElement(mt, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: r,
						isOverlay: a,
						isSwapVariant: g,
						post: d,
						subredditOrProfile: u,
						shouldFitPageToContent: O,
						isCollectionLayout: C
					}, u && u.isQuarantined && b.a.createElement(Te.a, {
						subredditName: u.name
					}), b.a.createElement(ke.a, null), b.a.createElement("div", {
						className: Object(y.a)(Ye.a.PageContentWrapper, {
							[Ye.a.LargePageContent]: C,
							[Ye.a.ChatPage]: this.props.isChatPostExperiment
						}),
						key: "PostContentWrapper"
					}, C && b.a.createElement(A.a, {
						isOverlay: a,
						language: i,
						isNightmodeOn: o,
						postId: c
					}), b.a.createElement(Xe, {
						condition: C,
						wrap: e => b.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Ye.a.CollectionBodyWrapper
						}, e)
					}, b.a.createElement(Se.a, {
						isCommentPermalink: x,
						isExclusivePost: !0,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: m
					}), u && b.a.createElement(ye.a, {
						className: Ye.a.TopTippers,
						contentId: c,
						creatorId: d.authorId,
						subredditId: u.id
					}), u && b.a.createElement(fe.a, {
						className: Ye.a.TopTippersBenefits,
						contentId: c,
						creatorId: d.authorId,
						subredditId: u.id
					}), b.a.createElement(F.a, {
						listingName: p || "",
						isOverlay: a,
						placement: w.c.ABOVE_THE_FOLD,
						postId: c
					}), this.renderCommentPanes())), u && !Object($.e)(u) && b.a.createElement(W.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						postId: c,
						subredditOrProfile: u
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
						headComment: d,
						isChatPostExperiment: c,
						isLoggedIn: l,
						isOverlay: m,
						language: p,
						location: u,
						onOtherDiscussions: h,
						openLoginModal: g,
						openRegisterModal: x,
						origin: v,
						post: E,
						postId: f,
						replyComment: w,
						sendEvent: j,
						sort: P,
						subredditAboutInfo: _,
						subredditOrProfile: k
					} = this.props;
					if (!E) return null;
					const L = this.isCommentPermalink(),
						N = [],
						M = E.isLocked && !s,
						R = !(L || E.isArchived || _ && _.userIsBanned);
					if (M) N.push(b.a.createElement(_e.a, {
						key: "commentThreadBanner",
						subredditOrProfile: k
					}));
					else if (E.isArchived) N.push(b.a.createElement(Pe.a, {
						key: "commentThreadBanner"
					}));
					else if (R && !c && !h)
						if (l) {
							const e = Object(T.a)(O.c.replyToPost, f);
							N.push(b.a.createElement(ue.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: O.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: (t, s) => {
									var {
										validate: n
									} = t, r = Qe(t, ["validate"]);
									return n ? S.tb(p, f, o, e, r, s) : S.lb(p, f, o, e, r, s)
								},
								submitButtonText: Object(C.c)("comment")
							}))
						} else N.push(b.a.createElement(he.a, {
							key: "loggedOutCommentForm",
							language: p,
							location: u,
							openLoginModal: g,
							openRegisterModal: x,
							origin: v
						}));
					if (r && N.push(b.a.createElement(Ie.a, {
							hasModeratorPostPermissions: i,
							key: "contestModeBanner"
						})), !c && !h && N.push(b.a.createElement(Ce.a, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: m,
							key: "commentSort",
							location: u,
							postId: f,
							sort: P,
							suggestedSort: E.suggestedSort
						}), b.a.createElement(Ke.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: m,
							key: "commentNavigation",
							postId: f
						})), !t || d || c || h)
						if (!e || d || h)
							if (h) N.push(b.a.createElement(st, {
								commentSort: P,
								key: "otherDiscussions",
								language: p,
								postId: f,
								isOverlay: m,
								postPermalink: E.permalink
							}));
							else if (c) {
						if (k && k.id) {
							const e = w ? Object(T.a)(O.c.replyToComment, w.id) : Object(T.a)(O.c.replyToPost, f),
								s = n ? Object(I.a)(f) : o;
							N.push(b.a.createElement(xe.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !a && t,
								key: "commentsChat",
								postId: f,
								renderedInOverlay: m,
								subredditId: k.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return l ? b.a.createElement(ve.a, {
									key: "chatCommentsForm",
									language: p,
									postId: f,
									replyComment: w,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: j
								}) : b.a.createElement(he.a, {
									key: "loggedOutCommentForm",
									className: Ye.a.ChatLoggedOutForm,
									language: p,
									location: u,
									openLoginModal: g,
									openRegisterModal: x,
									origin: v
								})
							}))
						}
					} else N.push(b.a.createElement("div", {
						className: Object(y.a)(Ye.a.CommentsPaneWrapper, {
							[Ye.a.mIsInOverlay]: m
						}),
						key: "commentsPaneWrapper"
					}, b.a.createElement(Ee.a, Je({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: E.numComments,
						onClick: this.handleContentClick
					}), b.a.createElement(be.a, {
						commentId: n,
						commentsPageKey: o,
						postId: f,
						renderedInOverlay: m
					})))), e && d ? N.push(b.a.createElement(ge.e, {
						key: "commentsErrorState",
						language: p,
						postId: f,
						commentId: n,
						sort: P,
						apiError: e
					})) : !a && t && N.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					else N.push(b.a.createElement(ge.e, {
						language: p,
						postId: f,
						commentId: n,
						sort: P,
						apiError: e
					}));
					else this.didRenderLoading = !0, N.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					return b.a.createElement(Y.a.Provider, {
						value: this.sendEventWithName
					}, N)
				}
			}
			const ct = ot(it(Object(Me.b)(dt))),
				lt = _.a.wrapped(Oe.a, "DetailsPageSidebar", Ye.a),
				mt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: a,
						isLoggedIn: i,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: m,
						subredditOrProfile: p
					} = e;
					if (!i && !d) return b.a.createElement(Ve.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: p && b.a.createElement(Oe.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					if (d) return b.a.createElement(He.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						sidebar: p && b.a.createElement(Oe.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					const u = a ? H.i : q.a;
					return b.a.createElement(Ue.a, {
						containerRef: n,
						maxWidth: H.i,
						fitPageToContent: m,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: a,
						navBar: p && b.a.Children.toArray([b.a.createElement(we.a, {
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: u,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object($.e)(p) && b.a.createElement(Ne.a, {
							disableFullscreen: !0,
							homeUrl: p.url,
							maxWidth: u,
							subredditId: p.id
						})]),
						sidebar: p && b.a.createElement(lt, {
							commentsPageKey: s,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					})
				};
			t.default = Object(Ge.a)(nt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
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
				v = Object(i.b)(x);

			function C(e) {
				return v(t => {
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
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.commentsListTruncated
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
					experimentEligibilitySelector: e => Object(r.G)(e),
					experimentName: n.E
				});
				return Object(n.Nb)(t) ? void 0 : t
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
					experimentName: n.gb
				});
				return Object(n.Nb)(t) ? void 0 : t
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
//# sourceMappingURL=CommentsPage.c49a2192b3acd1b01606.js.map